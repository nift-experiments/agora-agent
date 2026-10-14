import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Update the token-based authentication mechanism",
  description: "Describes how to build and update the token-based authentication mechanism step-by-step."
};
export let _markdown = `

If you integrate the Chat SDK and Agora RTC SDK at the same time, Agora recommends you update the token-based authentication mechanism from [AccessToken](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/cpp/src/AccessToken.h) to [AccessToken2](https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/cpp/src/AccessToken2.h).

This document uses the JAVA server and the Web client as examples to guide you how to build and update the token-based authentication mechanism step-by-step.

## Prerequisites [#prerequisites]

* You have built a token server based on Spring Framework and a Web client using Chat according to [Authenticate Your Users with Tokens](/en/realtime-media/im/build/secure-access-and-authentication/authentication).

* You have added the RTC Token service based on [AccessToken](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/cpp/src/AccessToken.h) to the token server of Chat. To do this, in \`AgoraChatTokenController.java\` file, import the \`RtcTokenBuilder\` with \`import com.agora.chat.token.io.agora.media.RtcTokenBuilder;\` and add the following method:

  \`\`\`java
  // Generate  AccessToken
  @GetMapping("/rtc/{rtcChannelName}/{rtcUserId}/{role}/token")
  public String getRtcToken(@PathVariable String rtcChannelName, @PathVariable int rtcUserId, @PathVariable int role) {

      if (!StringUtils.hasText(appid) || !StringUtils.hasText(appcert)) {
          return "appid or appcert is empty";
      }

      RtcTokenBuilder builder = new RtcTokenBuilder();

      RtcTokenBuilder.Role rtcRole;

      switch(role) {
          case 1:
          default:
              rtcRole = RtcTokenBuilder.Role.Role_Publisher;
              break;
          case 2:
              rtcRole = RtcTokenBuilder.Role.Role_Subscriber;
              break;
      }

      return builder.buildTokenWithUid(appid, appcert, rtcChannelName, rtcUserId, rtcRole, expire);
  }
  \`\`\`

* You have added the authentication logic to the client using the RTC SDK. To do this, create a \`agoraRtcTokenClient\` folder with the following two files:
  * \`index.html\`:

    \`\`\`html


     
       Token demo
     


       Token demo
       
       
     

    \`\`\`

  * \`client.js\`. Replace \`appId\` with your App ID.

    \`\`\`javascript
    var rtc = {
      // For the local audio and video tracks. 
      localAudioTrack: null,
      localVideoTrack: null,
    };

    var options = {
      // Pass your App ID here. 
      appId: "",
      // Set the channel name. 
      channel: "ChannelA",
      // Set the user role as host (who can both send and receive streams) or audience (who can only receive streams). 
      role: "host",
    };

    // Fetch a token from the sever. 
    function fetchToken(uid, channelName, tokenRole) {

    url = 'http://localhost:8090/rtc/' + channelName + '/' + uid + '/' + tokenRole + '/' + 'token'

    return new Promise(function (resolve) {

        fetch(url)
            .then(res => res.text())
            .then((token => { resolve(token); }))

    })
        .catch(function (error) {
            console.log(error);
        });
    }

    async function startBasicCall() {
      const client = AgoraRTC.createClient({ mode: "live", codec: "vp9" });
      client.setClientRole(options.role);
      const uid = 123456;

      // Fetch a token before calling join to join a channel. 
      let token = await fetchToken(uid, options.channel, 1);

      await client.join(options.appId, options.channel, token, uid);
      rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
      rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
      await client.publish([rtc.localAudioTrack, rtc.localVideoTrack]);
      const localPlayerContainer = document.createElement("div");
      localPlayerContainer.id = uid;
      localPlayerContainer.style.width = "640px";
      localPlayerContainer.style.height = "480px";
      document.body.append(localPlayerContainer);

      rtc.localVideoTrack.play(localPlayerContainer);

      console.log("publish success!");

      client.on("user-published", async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        console.log("subscribe success");

        if (mediaType === "video") {
          const remoteVideoTrack = user.videoTrack;
          const remotePlayerContainer = document.createElement("div");
          remotePlayerContainer.textContent =
            "Remote user " + user.uid.toString();
          remotePlayerContainer.style.width = "640px";
          remotePlayerContainer.style.height = "480px";
          document.body.append(remotePlayerContainer);
          remoteVideoTrack.play(remotePlayerContainer);
        }

        if (mediaType === "audio") {
          const remoteAudioTrack = user.audioTrack;
          remoteAudioTrack.play();
        }

        client.on("user-unpublished", (user) => {
          const remotePlayerContainer = document.getElementById(user.uid);
          remotePlayerContainer.remove();
        });
      });

      // When token-privilege-will-expire occurs, fetch a new token from the server and call renewToken to renew the token. 
      client.on("token-privilege-will-expire", async function () {
        let token = await fetchToken(uid, options.channel, 1);
        await client.renewToken(token);
      });

      // When token-privilege-did-expire occurs, fetch a new token from the server and call join to rejoin the channel.
      client.on("token-privilege-did-expire", async function () {
        console.log("Fetching the new Token");
        let token = await fetchToken(uid, options.channel, 1);
        console.log("Rejoining the channel with new Token");
        await rtc.client.join(options.appId, options.channel, token, uid);
      });
    }
     
    startBasicCall();
    \`\`\`

* To test the AccessToken server, open index.html with a supported browser to perform the following actions:
  * Successfully joining a channel.
  * Renewing a token every 10 seconds.

## Implementation [#implementation]

To upgrade your authentication mechanism to AccessToken 2, use the following procedure.

### Upgrade the token server to AccessToken2 [#upgrade-the-token-server-to-accesstoken2]

This section shows you how to upgrade the token server to AccessToken2.

1. Import \`RtcTokenBuilder2\` with the following code:

   \`\`\`java
   import com.agora.chat.token.io.agora.media.RtcTokenBuilder2;
   \`\`\`
2. Replace the code for \`getRtcToken\` method with the following logic:

   \`\`\`java
   // Generate  AccessToken2
   public String getRtcToken(@PathVariable String rtcChannelName, @PathVariable int rtcUserId, @PathVariable int role) {

       if (!StringUtils.hasText(appid) || !StringUtils.hasText(appcert)) {
           return "appid or appcert is empty";
       }

       RtcTokenBuilder2 builder = new RtcTokenBuilder2();

       RtcTokenBuilder2.Role rtcRole;

       switch(role) {
           case 1:
           default:
               rtcRole = RtcTokenBuilder2.Role.ROLE_PUBLISHER;
               break;
           case 2:
               rtcRole = RtcTokenBuilder2.Role.ROLE_SUBSCRIBER;
               break;
       }

       return builder.buildTokenWithUid(appid, appcert, rtcChannelName, rtcUserId, rtcRole, expire);
   }
   \`\`\`

No extra action is required for the client to get compatible with AccessToken2.

### Test the AccessToken2 server [#test-the-accesstoken2-server]

Open \`index.html\` with a supported browser to perform the following actions:

* Successfully joining a channel.
* Renewing a token every 10 seconds.

## Reference [#reference]

This section introduces token generator libraries, version requirements, and related documents about AccessToken2.

### SDK compatibility for AccessToken2 [#sdk-compatibility-for-accesstoken2]

AccessToken2 supports the following versions of the Agora SDKs:

| SDK                     | First SDK version to support AccessToken2 |
| :---------------------- | :---------------------------------------- |
| Native SDK              | 3.5.2                                     |
| Electron SDK            | 3.5.2                                     |
| Unity SDK               | 3.5.2                                     |
| React Native SDK        | 3.5.2                                     |
| Flutter SDK             | 4.2.0                                     |
| Web SDK                 | 4.8.0                                     |
| WeChat Mini Program SDK | Not supported                             |

SDKs that use AccessToken2 can interoperate with SDKs that use AccessToken. Also, the SDKs that support AccessToken2 also support AccessToken.

<CalloutContainer type="info">
  <CalloutDescription>
    If you use other extensions, such as Agora Cloud Recording and Media Push, contact [support@agora.io](mailto\\:support@agora.io) for technical support before upgrading to AccessToken2.
  </CalloutDescription>
</CalloutContainer>

### Token generator libraries [#token-generator-libraries]

Agora provides an open-source [AgoraDynamicKey](https://github.com/AgoraIO/Tools/tree/release/accesstoken2/DynamicKey/AgoraDynamicKey) repository on GitHub, which enables you to generate AccessToken2 on your server with programming languages such as C++, Java, and Go.

| Language | Algorithm   | Core Method                                                                                                                                                        | Sample Code                                                                                                                                                                         |
| :------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C++      | HMAC-SHA256 | [buildTokenWithUid](https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/cpp/src/RtcTokenBuilder2.h)                              | [RtcTokenBuilder2Sample.cpp](https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/cpp/sample/RtcTokenBuilder2Sample.cpp)                           |
| Go       | HMAC-SHA256 | [buildTokenWithUid](https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/go/src/rtctokenbuilder2/rtctokenbuilder.go)              | [sample.go](https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/go/sample/rtctokenbuilder2/sample.go)                                             |
| Java     | HMAC-SHA256 | [buildTokenWithUid](https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/java/src/main/java/io/agora/media/RtcTokenBuilder2.java) | [RtcTokenBuilder2Sample.java](https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/java/src/main/java/io/agora/sample/RtcTokenBuilder2Sample.java) |
| Node.js  | HMAC-SHA256 | [buildTokenWithUid](https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/nodejs/src/RtcTokenBuilder2.js)                          | [RtcTokenBuilder2Sample.js](https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/nodejs/sample/RtcTokenBuilder2Sample.js)                          |
| PHP      | HMAC-SHA256 | [buildTokenWithUid](https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/php/src/RtcTokenBuilder2.php)                            | [RtcTokenBuilder2Sample.php](https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/php/sample/RtcTokenBuilder2Sample.php)                           |
| Python   | HMAC-SHA256 | [buildTokenWithUid](https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/python/src/RtcTokenBuilder2.py)                          | [RtcTokenBuilder2Sample.py](https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/python/sample/RtcTokenBuilder2Sample.py)                          |
| Python3  | HMAC-SHA256 | [buildTokenWithUid](https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/python3/src/RtcTokenBuilder2.py)                         | [RtcTokenBuilder2Sample.py](https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/python3/sample/RtcTokenBuilder2Sample.py)                         |

### API reference [#api-reference]

Taking Java as an example, this section introduces the parameters and descriptions for the method to generate an AccessToken2.

\`\`\`java
public String buildTokenWithUid(String appId, String appCertificate, String channelName, int uid, Role role, int expire) 
\`\`\`

| Parameter        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`appId\`          | The App ID of your Agora project.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| \`appCertificate\` | The App Certificate of your Agora project.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| \`channelName\`    | The channel name. The string length must be less than 64 bytes. Supported character scopes are: All lowercase English letters: a to z. All upper English letters: A to Z. All numeric characters: 0 to 9. The space character. Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "", "?", "@", "\\[", "]", "^", "\\_", " \\{", "}", "\\|", "\\~", ",".                                                                                                                                                                                    |
| \`uid\`            | The user ID of the user to be authenticated. A 32-bit unsigned integer with a value range from 1 to (2³² - 1). It must be unique. Set \`uid\` as 0, if you do not want to authenticate the user ID, that is, any \`uid\` from the app client can join the channel.                                                                                                                                                                                                                                                                                                                                 |
| \`role\`           | The privilege of the user, either as a publisher or a subscriber. This parameter determines whether a user can publish streams in the channel. \`ROLE_PUBLISHER(1)\`: (default) The user has the privilege of a publisher, that is, the user can publish streams in the channel. \`ROLE_SUBSCRIBER(2)\`: The user has the privilege of a subscriber, that is, the user can only subscribe to streams, not publish them, in the channel. This value takes effect only if you have enabled co-host authentication. For details, see [Enable co-host authentication](#enable-co-host-authentication). |
| \`expire\`         | The Unix timestamp (in seconds) when an AccessToken expires. Set this parameter as the current timestamp plus the valid period of AccessToken2. For example, if you set \`expire\` as the current timestamp plus 600, the AccessToken2 expires in 10 minutes. An AccessToken2 is valid for 24 hours at most. If you set it to a period longer than 24 hours, the AccessToken2 is still valid for 24 hours.                                                                                                                                                                                       |

#### API for privilege-level expiration configuration [#api-for-privilege-level-expiration-configuration]

To facilitate privilege-level configuration in a channel, Agora provides an overloaded method to support configuring the expiration of the AccessToken2 and related privileges:

* Join a channel
* Publish audio
* Publish video
* Publish data stream

Take Java as an example:

\`\`\`java
public String buildTokenWithUid(String appId, String appCertificate, String channelName, int uid, int tokenExpire, int joinChannelPrivilegeExpire, int pubAudioPrivilegeExpire, int pubVideoPrivilegeExpire, int pubDataStreamPrivilegeExpire) 
\`\`\`

This method generates an AccessToken2 and supports configuring the following privileges:

* The expiration time of AccessToken2
* Joining an RTC channel
* Publishing audio in an RTC channel
* Publishing video in an RTC channel
* Publishing data stream in an RTC channel

The privileges of publishing audio in an RTC channel, publishing video in an RTC channel, and publishing data stream in an RTC channel only take effect after enabling co-host authentication.

You can assign multiple privileges to a user. The maximum valid period of each privilege is 24 hours. When a privilege is about to expire or has expired, the SDK triggers the \`onTokenPriviegeWillExpire\` callback or the \`onRequestToken\` callback. You need to take the following actions in your own app logic:

1. Tag the type of privilege which is about to expire or has expired in your app logic.
2. The app fetches a new AccessToken2 from the token server.
3. The SDK calls \`renewToken\` to renew the AccessToken2, or \`joinChannel\`to rejoin the channel.

You need to set an appropriate expiration timestamp. For example, if the expiration time of joining a channel is earlier than that of publishing audio in the channel, when the privilege of joining a channel expires, the user is kicked out of the RTC channel. Even if the privilege of publishing audio is still valid, the privilege does not mean anything for the user.

| Parameter                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :----------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`tokenExpire\`                  | Number of seconds passed from the generation of AccessToken2 to the expiration of AccessToken2. Set this parameter as the current timestamp plus the valid period of AccessToken2. For example, if you set \`tokenExpire\`  as the current timestamp plus 600, the AccessToken2 expires in 10 minutes. An AccessToken2 is valid for 24 hours at most. If you set it to 0 or a period longer than 24 hours, the AccessToken2 is still valid for 24 hours.                             |
| \`joinChannelPrivilegeExpire\`   | Number of seconds passed from the generation of AccessToken2 to the expiration of the privilege of joining a channel. Set this parameter as the current timestamp plus the valid period of the privilege of joining a channel. For example, if you set \`joinChannelPrivilegeExpire\` as the current timestamp plus 600, the privilege expires 10 minutes after generation.                                                                                                          |
| \`pubAudioPrivilegeExpire\`      | Number of seconds passed from the generation of AccessToken2 to the expiration of the privilege of publishing audio in a channel. Set this parameter as the current timestamp plus the valid period of publishing audio in a channel. For example, if you set \`pubAudioPrivilegeExpire\`  as the current timestamp plus 600, the privilege expires 10 minutes after generation. If you do not want to enable this privilege, set this parameter to the current timestamp.           |
| \`pubVideoPrivilegeExpire\`      | Number of seconds passed from the generation of AccessToken2 to the expiration of the privilege of publishing video in a channel. Set this parameter as the current timestamp plus the valid period of publishing video in a channel. For example, if you set \`pubVideoPrivilegeExpire\` as the current timestamp plus 600, the privilege expires 10 minutes after generation. If you do not want to enable this privilege, set this parameter to the current timestamp.            |
| \`pubDataStreamPrivilegeExpire\` | Number of seconds passed from the generation of AccessToken2 to the expiration of the privilege of publishing data stream in a channel. Set this parameter as the current timestamp plus the valid period of publishing video in a channel. For example, if you set \`pubDataStreamPrivilegeExpire\` as the current timestamp plus 600, the privilege expires 10 minutes after generation. If you do not want to enable this privilege, set this parameter to the current timestamp. |

### Enable co-host authentication [#enable-co-host-authentication]

Refer to the following steps to enable this function in Agora Console:

1. Log on to [Agora Console](https://console.agora.io/). Under **Projects**, choose a project for which you want to enable co-host authentication, click the **Edit** icon, and enter the **Edit Project** page.
2. In the Features area, click **Enable authentication**.
3. Follow the on-screen instructions to know more about this function, check the box, and click **Enable**.

Co-host authentication takes effect in 5 minutes.

Once you have enabled co-host authentication, a user using your app must meet both of the following requirements to publish streams in a channel:

* The \`role\` in \`setClientRole\` is set as \`"BROADCASTER"\`.
* The \`role\` in the code for generating tokens is set as \`ROLE_PUBLISHER\`.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "If you integrate the Chat SDK and Agora RTC SDK at the same time, Agora recommends you update the token-based authentication mechanism from AccessToken to AccessToken2."
  }, {
    heading: undefined,
    content: "This document uses the JAVA server and the Web client as examples to guide you how to build and update the token-based authentication mechanism step-by-step."
  }, {
    heading: "prerequisites",
    content: "You have built a token server based on Spring Framework and a Web client using Chat according to Authenticate Your Users with Tokens."
  }, {
    heading: "prerequisites",
    content: "You have added the RTC Token service based on AccessToken to the token server of Chat. To do this, in `AgoraChatTokenController.java` file, import the `RtcTokenBuilder` with `import com.agora.chat.token.io.agora.media.RtcTokenBuilder;` and add the following method:"
  }, {
    heading: "prerequisites",
    content: "You have added the authentication logic to the client using the RTC SDK. To do this, create a `agoraRtcTokenClient` folder with the following two files:"
  }, {
    heading: "prerequisites",
    content: "`index.html`:"
  }, {
    heading: "prerequisites",
    content: "`client.js`. Replace `appId` with your App ID."
  }, {
    heading: "prerequisites",
    content: "To test the AccessToken server, open index.html with a supported browser to perform the following actions:"
  }, {
    heading: "prerequisites",
    content: "Successfully joining a channel."
  }, {
    heading: "prerequisites",
    content: "Renewing a token every 10 seconds."
  }, {
    heading: "implementation",
    content: "To upgrade your authentication mechanism to AccessToken 2, use the following procedure."
  }, {
    heading: "upgrade-the-token-server-to-accesstoken2",
    content: "This section shows you how to upgrade the token server to AccessToken2."
  }, {
    heading: "upgrade-the-token-server-to-accesstoken2",
    content: "Import `RtcTokenBuilder2` with the following code:"
  }, {
    heading: "upgrade-the-token-server-to-accesstoken2",
    content: "Replace the code for `getRtcToken` method with the following logic:"
  }, {
    heading: "upgrade-the-token-server-to-accesstoken2",
    content: "No extra action is required for the client to get compatible with AccessToken2."
  }, {
    heading: "test-the-accesstoken2-server",
    content: "Open `index.html` with a supported browser to perform the following actions:"
  }, {
    heading: "test-the-accesstoken2-server",
    content: "Successfully joining a channel."
  }, {
    heading: "test-the-accesstoken2-server",
    content: "Renewing a token every 10 seconds."
  }, {
    heading: "reference",
    content: "This section introduces token generator libraries, version requirements, and related documents about AccessToken2."
  }, {
    heading: "sdk-compatibility-for-accesstoken2",
    content: "AccessToken2 supports the following versions of the Agora SDKs:"
  }, {
    heading: "sdk-compatibility-for-accesstoken2",
    content: "SDK"
  }, {
    heading: "sdk-compatibility-for-accesstoken2",
    content: "First SDK version to support AccessToken2"
  }, {
    heading: "sdk-compatibility-for-accesstoken2",
    content: "Native SDK"
  }, {
    heading: "sdk-compatibility-for-accesstoken2",
    content: "3.5.2"
  }, {
    heading: "sdk-compatibility-for-accesstoken2",
    content: "Electron SDK"
  }, {
    heading: "sdk-compatibility-for-accesstoken2",
    content: "3.5.2"
  }, {
    heading: "sdk-compatibility-for-accesstoken2",
    content: "Unity SDK"
  }, {
    heading: "sdk-compatibility-for-accesstoken2",
    content: "3.5.2"
  }, {
    heading: "sdk-compatibility-for-accesstoken2",
    content: "React Native SDK"
  }, {
    heading: "sdk-compatibility-for-accesstoken2",
    content: "3.5.2"
  }, {
    heading: "sdk-compatibility-for-accesstoken2",
    content: "Flutter SDK"
  }, {
    heading: "sdk-compatibility-for-accesstoken2",
    content: "4.2.0"
  }, {
    heading: "sdk-compatibility-for-accesstoken2",
    content: "Web SDK"
  }, {
    heading: "sdk-compatibility-for-accesstoken2",
    content: "4.8.0"
  }, {
    heading: "sdk-compatibility-for-accesstoken2",
    content: "WeChat Mini Program SDK"
  }, {
    heading: "sdk-compatibility-for-accesstoken2",
    content: "Not supported"
  }, {
    heading: "sdk-compatibility-for-accesstoken2",
    content: "SDKs that use AccessToken2 can interoperate with SDKs that use AccessToken. Also, the SDKs that support AccessToken2 also support AccessToken."
  }, {
    heading: "sdk-compatibility-for-accesstoken2",
    content: "If you use other extensions, such as Agora Cloud Recording and Media Push, contact support\\@agora.io for technical support before upgrading to AccessToken2."
  }, {
    heading: "token-generator-libraries",
    content: "Agora provides an open-source AgoraDynamicKey repository on GitHub, which enables you to generate AccessToken2 on your server with programming languages such as C++, Java, and Go."
  }, {
    heading: "token-generator-libraries",
    content: "Language"
  }, {
    heading: "token-generator-libraries",
    content: "Algorithm"
  }, {
    heading: "token-generator-libraries",
    content: "Core Method"
  }, {
    heading: "token-generator-libraries",
    content: "Sample Code"
  }, {
    heading: "token-generator-libraries",
    content: "C++"
  }, {
    heading: "token-generator-libraries",
    content: "HMAC-SHA256"
  }, {
    heading: "token-generator-libraries",
    content: "buildTokenWithUid"
  }, {
    heading: "token-generator-libraries",
    content: "RtcTokenBuilder2Sample.cpp"
  }, {
    heading: "token-generator-libraries",
    content: "Go"
  }, {
    heading: "token-generator-libraries",
    content: "HMAC-SHA256"
  }, {
    heading: "token-generator-libraries",
    content: "buildTokenWithUid"
  }, {
    heading: "token-generator-libraries",
    content: "sample.go"
  }, {
    heading: "token-generator-libraries",
    content: "Java"
  }, {
    heading: "token-generator-libraries",
    content: "HMAC-SHA256"
  }, {
    heading: "token-generator-libraries",
    content: "buildTokenWithUid"
  }, {
    heading: "token-generator-libraries",
    content: "RtcTokenBuilder2Sample.java"
  }, {
    heading: "token-generator-libraries",
    content: "Node.js"
  }, {
    heading: "token-generator-libraries",
    content: "HMAC-SHA256"
  }, {
    heading: "token-generator-libraries",
    content: "buildTokenWithUid"
  }, {
    heading: "token-generator-libraries",
    content: "RtcTokenBuilder2Sample.js"
  }, {
    heading: "token-generator-libraries",
    content: "PHP"
  }, {
    heading: "token-generator-libraries",
    content: "HMAC-SHA256"
  }, {
    heading: "token-generator-libraries",
    content: "buildTokenWithUid"
  }, {
    heading: "token-generator-libraries",
    content: "RtcTokenBuilder2Sample.php"
  }, {
    heading: "token-generator-libraries",
    content: "Python"
  }, {
    heading: "token-generator-libraries",
    content: "HMAC-SHA256"
  }, {
    heading: "token-generator-libraries",
    content: "buildTokenWithUid"
  }, {
    heading: "token-generator-libraries",
    content: "RtcTokenBuilder2Sample.py"
  }, {
    heading: "token-generator-libraries",
    content: "Python3"
  }, {
    heading: "token-generator-libraries",
    content: "HMAC-SHA256"
  }, {
    heading: "token-generator-libraries",
    content: "buildTokenWithUid"
  }, {
    heading: "token-generator-libraries",
    content: "RtcTokenBuilder2Sample.py"
  }, {
    heading: "api-reference",
    content: "Taking Java as an example, this section introduces the parameters and descriptions for the method to generate an AccessToken2."
  }, {
    heading: "api-reference",
    content: "Parameter"
  }, {
    heading: "api-reference",
    content: "Description"
  }, {
    heading: "api-reference",
    content: "`appId`"
  }, {
    heading: "api-reference",
    content: "The App ID of your Agora project."
  }, {
    heading: "api-reference",
    content: "`appCertificate`"
  }, {
    heading: "api-reference",
    content: "The App Certificate of your Agora project."
  }, {
    heading: "api-reference",
    content: "`channelName`"
  }, {
    heading: "api-reference",
    content: 'The channel name. The string length must be less than 64 bytes. Supported character scopes are: All lowercase English letters: a to z. All upper English letters: A to Z. All numeric characters: 0 to 9. The space character. Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "", "?", "@", "\\[", "]", "^", "\\_", " \\{", "}", "\\|", "\\~", ",".'
  }, {
    heading: "api-reference",
    content: "`uid`"
  }, {
    heading: "api-reference",
    content: "The user ID of the user to be authenticated. A 32-bit unsigned integer with a value range from 1 to (2³² - 1). It must be unique. Set `uid` as 0, if you do not want to authenticate the user ID, that is, any `uid` from the app client can join the channel."
  }, {
    heading: "api-reference",
    content: "`role`"
  }, {
    heading: "api-reference",
    content: "The privilege of the user, either as a publisher or a subscriber. This parameter determines whether a user can publish streams in the channel. `ROLE_PUBLISHER(1)`: (default) The user has the privilege of a publisher, that is, the user can publish streams in the channel. `ROLE_SUBSCRIBER(2)`: The user has the privilege of a subscriber, that is, the user can only subscribe to streams, not publish them, in the channel. This value takes effect only if you have enabled co-host authentication. For details, see Enable co-host authentication."
  }, {
    heading: "api-reference",
    content: "`expire`"
  }, {
    heading: "api-reference",
    content: "The Unix timestamp (in seconds) when an AccessToken expires. Set this parameter as the current timestamp plus the valid period of AccessToken2. For example, if you set `expire` as the current timestamp plus 600, the AccessToken2 expires in 10 minutes. An AccessToken2 is valid for 24 hours at most. If you set it to a period longer than 24 hours, the AccessToken2 is still valid for 24 hours."
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "To facilitate privilege-level configuration in a channel, Agora provides an overloaded method to support configuring the expiration of the AccessToken2 and related privileges:"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "Join a channel"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "Publish audio"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "Publish video"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "Publish data stream"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "Take Java as an example:"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "This method generates an AccessToken2 and supports configuring the following privileges:"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "The expiration time of AccessToken2"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "Joining an RTC channel"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "Publishing audio in an RTC channel"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "Publishing video in an RTC channel"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "Publishing data stream in an RTC channel"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "The privileges of publishing audio in an RTC channel, publishing video in an RTC channel, and publishing data stream in an RTC channel only take effect after enabling co-host authentication."
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "You can assign multiple privileges to a user. The maximum valid period of each privilege is 24 hours. When a privilege is about to expire or has expired, the SDK triggers the `onTokenPriviegeWillExpire` callback or the `onRequestToken` callback. You need to take the following actions in your own app logic:"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "Tag the type of privilege which is about to expire or has expired in your app logic."
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "The app fetches a new AccessToken2 from the token server."
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "The SDK calls `renewToken` to renew the AccessToken2, or `joinChannel`to rejoin the channel."
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "You need to set an appropriate expiration timestamp. For example, if the expiration time of joining a channel is earlier than that of publishing audio in the channel, when the privilege of joining a channel expires, the user is kicked out of the RTC channel. Even if the privilege of publishing audio is still valid, the privilege does not mean anything for the user."
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "Parameter"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "Description"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "`tokenExpire`"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "Number of seconds passed from the generation of AccessToken2 to the expiration of AccessToken2. Set this parameter as the current timestamp plus the valid period of AccessToken2. For example, if you set `tokenExpire`  as the current timestamp plus 600, the AccessToken2 expires in 10 minutes. An AccessToken2 is valid for 24 hours at most. If you set it to 0 or a period longer than 24 hours, the AccessToken2 is still valid for 24 hours."
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "`joinChannelPrivilegeExpire`"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "Number of seconds passed from the generation of AccessToken2 to the expiration of the privilege of joining a channel. Set this parameter as the current timestamp plus the valid period of the privilege of joining a channel. For example, if you set `joinChannelPrivilegeExpire` as the current timestamp plus 600, the privilege expires 10 minutes after generation."
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "`pubAudioPrivilegeExpire`"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "Number of seconds passed from the generation of AccessToken2 to the expiration of the privilege of publishing audio in a channel. Set this parameter as the current timestamp plus the valid period of publishing audio in a channel. For example, if you set `pubAudioPrivilegeExpire`  as the current timestamp plus 600, the privilege expires 10 minutes after generation. If you do not want to enable this privilege, set this parameter to the current timestamp."
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "`pubVideoPrivilegeExpire`"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "Number of seconds passed from the generation of AccessToken2 to the expiration of the privilege of publishing video in a channel. Set this parameter as the current timestamp plus the valid period of publishing video in a channel. For example, if you set `pubVideoPrivilegeExpire` as the current timestamp plus 600, the privilege expires 10 minutes after generation. If you do not want to enable this privilege, set this parameter to the current timestamp."
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "`pubDataStreamPrivilegeExpire`"
  }, {
    heading: "api-for-privilege-level-expiration-configuration",
    content: "Number of seconds passed from the generation of AccessToken2 to the expiration of the privilege of publishing data stream in a channel. Set this parameter as the current timestamp plus the valid period of publishing video in a channel. For example, if you set `pubDataStreamPrivilegeExpire` as the current timestamp plus 600, the privilege expires 10 minutes after generation. If you do not want to enable this privilege, set this parameter to the current timestamp."
  }, {
    heading: "enable-co-host-authentication",
    content: "Refer to the following steps to enable this function in Agora Console:"
  }, {
    heading: "enable-co-host-authentication",
    content: "Log on to Agora Console. Under **Projects**, choose a project for which you want to enable co-host authentication, click the **Edit** icon, and enter the **Edit Project** page."
  }, {
    heading: "enable-co-host-authentication",
    content: "In the Features area, click **Enable authentication**."
  }, {
    heading: "enable-co-host-authentication",
    content: "Follow the on-screen instructions to know more about this function, check the box, and click **Enable**."
  }, {
    heading: "enable-co-host-authentication",
    content: "Co-host authentication takes effect in 5 minutes."
  }, {
    heading: "enable-co-host-authentication",
    content: "Once you have enabled co-host authentication, a user using your app must meet both of the following requirements to publish streams in a channel:"
  }, {
    heading: "enable-co-host-authentication",
    content: 'The `role` in `setClientRole` is set as `"BROADCASTER"`.'
  }, {
    heading: "enable-co-host-authentication",
    content: "The `role` in the code for generating tokens is set as `ROLE_PUBLISHER`."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implementation",
    content: "Implementation"
  }, {
    id: "upgrade-the-token-server-to-accesstoken2",
    content: "Upgrade the token server to AccessToken2"
  }, {
    id: "test-the-accesstoken2-server",
    content: "Test the AccessToken2 server"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "sdk-compatibility-for-accesstoken2",
    content: "SDK compatibility for AccessToken2"
  }, {
    id: "token-generator-libraries",
    content: "Token generator libraries"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "api-for-privilege-level-expiration-configuration",
    content: "API for privilege-level expiration configuration"
  }, {
    id: "enable-co-host-authentication",
    content: "Enable co-host authentication"
  }]
};
export let toc = [{
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#upgrade-the-token-server-to-accesstoken2",
  title: _jsx(_Fragment, {
    children: "Upgrade the token server to AccessToken2"
  })
}, {
  depth: 3,
  url: "#test-the-accesstoken2-server",
  title: _jsx(_Fragment, {
    children: "Test the AccessToken2 server"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#sdk-compatibility-for-accesstoken2",
  title: _jsx(_Fragment, {
    children: "SDK compatibility for AccessToken2"
  })
}, {
  depth: 3,
  url: "#token-generator-libraries",
  title: _jsx(_Fragment, {
    children: "Token generator libraries"
  })
}, {
  depth: 3,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 4,
  url: "#api-for-privilege-level-expiration-configuration",
  title: _jsx(_Fragment, {
    children: "API for privilege-level expiration configuration"
  })
}, {
  depth: 3,
  url: "#enable-co-host-authentication",
  title: _jsx(_Fragment, {
    children: "Enable co-host authentication"
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["If you integrate the Chat SDK and Agora RTC SDK at the same time, Agora recommends you update the token-based authentication mechanism from ", _jsx(_components.a, {
        href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/cpp/src/AccessToken.h",
        children: "AccessToken"
      }), " to ", _jsx(_components.a, {
        href: "https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/cpp/src/AccessToken2.h",
        children: "AccessToken2"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "This document uses the JAVA server and the Web client as examples to guide you how to build and update the token-based authentication mechanism step-by-step."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["You have built a token server based on Spring Framework and a Web client using Chat according to ", _jsx(_components.a, {
            href: "/en/realtime-media/im/build/secure-access-and-authentication/authentication",
            children: "Authenticate Your Users with Tokens"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["You have added the RTC Token service based on ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/cpp/src/AccessToken.h",
            children: "AccessToken"
          }), " to the token server of Chat. To do this, in ", _jsx(_components.code, {
            children: "AgoraChatTokenController.java"
          }), " file, import the ", _jsx(_components.code, {
            children: "RtcTokenBuilder"
          }), " with ", _jsx(_components.code, {
            children: "import com.agora.chat.token.io.agora.media.RtcTokenBuilder;"
          }), " and add the following method:"]
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
                  children: "// Generate  AccessToken"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "@"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "GetMapping"
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
                  children: '"/rtc/{rtcChannelName}/{rtcUserId}/{role}/token"'
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
                  children: "public"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " String "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getRtcToken"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(@"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "PathVariable"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " String rtcChannelName, @"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "PathVariable"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " rtcUserId, @"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "PathVariable"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " role) {"
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
                  children: "StringUtils."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "hasText"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(appid) "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "||"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " !"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "StringUtils."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "hasText"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(appcert)) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "appid or appcert is empty"'
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    RtcTokenBuilder builder "
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
                  children: " RtcTokenBuilder"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    RtcTokenBuilder.Role rtcRole;"
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
                  children: "    switch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(role) {"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 1"
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            rtcRole "
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
                  children: " RtcTokenBuilder.Role.Role_Publisher;"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 2"
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
                  children: "            rtcRole "
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
                  children: " RtcTokenBuilder.Role.Role_Subscriber;"
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
                  children: "    return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " builder."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "buildTokenWithUid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(appid, appcert, rtcChannelName, rtcUserId, rtcRole, expire);"
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
          children: ["You have added the authentication logic to the client using the RTC SDK. To do this, create a ", _jsx(_components.code, {
            children: "agoraRtcTokenClient"
          }), " folder with the following two files:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "index.html"
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
                    className: "line"
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
                      children: " "
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "   Token demo"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " "
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line"
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
                      children: "   Token demo"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "   "
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "   "
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " "
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line"
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
                children: "client.js"
              }), ". Replace ", _jsx(_components.code, {
                children: "appId"
              }), " with your App ID."]
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
                      children: "var"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " rtc "
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
                      children: "  // For the local audio and video tracks. "
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  localAudioTrack: "
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
                      children: "  localVideoTrack: "
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
                      children: "var"
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
                      children: "  // Pass your App ID here. "
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  appId: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '""'
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
                      children: "  // Set the channel name. "
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  channel: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"ChannelA"'
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
                      children: "  // Set the user role as host (who can both send and receive streams) or audience (who can only receive streams). "
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  role: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"host"'
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
                      children: "// Fetch a token from the sever. "
                    })
                  }), `
`, _jsxs(_components.span, {
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
                      children: " fetchToken"
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
                      children: "uid"
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
                      children: "channelName"
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
                      children: "tokenRole"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ") {"
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
                      children: "url "
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
                      children: " 'http://localhost:8090/rtc/'"
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
                      children: " channelName "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "+"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " '/'"
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
                      children: " uid "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "+"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " '/'"
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
                      children: " tokenRole "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "+"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " '/'"
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
                      children: " 'token'"
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
                      children: "return"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " new"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " Promise"
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
                      children: "function"
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
                      children: "resolve"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ") {"
                    })]
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
                      children: "    fetch"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(url)"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        ."
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
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: "res"
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
                      children: " res."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "text"
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
                      children: "        ."
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
                      children: "token"
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
                      children: " { "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "resolve"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(token); }))"
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
                      children: "})"
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
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "function"
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
                      children: "error"
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
                      children: "async"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " function"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " startBasicCall"
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
                      children: "  const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " client"
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
                      children: " AgoraRTC."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "createClient"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "({ mode: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"live"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", codec: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"vp9"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " });"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  client."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setClientRole"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(options.role);"
                    })]
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
                      children: " uid"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " ="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 123456"
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  // Fetch a token before calling join to join a channel. "
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " token "
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " fetchToken"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(uid, options.channel, "
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
                      children: ");"
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
                      children: "  await"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " client."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "join"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(options.appId, options.channel, token, uid);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  rtc.localAudioTrack "
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " AgoraRTC."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "createMicrophoneAudioTrack"
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
                      children: "  rtc.localVideoTrack "
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " AgoraRTC."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "createCameraVideoTrack"
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
                      children: "  await"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " client."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "publish"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "([rtc.localAudioTrack, rtc.localVideoTrack]);"
                    })]
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
                      children: " localPlayerContainer"
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
                      children: " document."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "createElement"
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
                      children: '"div"'
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
                      children: "  localPlayerContainer.id "
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
                      children: " uid;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  localPlayerContainer.style.width "
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
                      children: ' "640px"'
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
                      children: "  localPlayerContainer.style.height "
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
                      children: ' "480px"'
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
                      children: "  document.body."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "append"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(localPlayerContainer);"
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
                      children: "  rtc.localVideoTrack."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "play"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(localPlayerContainer);"
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
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"publish success!"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
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
                      children: "  client."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "on"
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
                      children: '"user-published"'
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
                      children: "async"
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
                      children: "user"
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
                      children: "mediaType"
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
                      children: "    await"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " client."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "subscribe"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(user, mediaType);"
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
                      children: '"subscribe success"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " (mediaType "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "==="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "video"'
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
                      children: "      const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " remoteVideoTrack"
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
                      children: " user.videoTrack;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "      const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " remotePlayerContainer"
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
                      children: " document."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "createElement"
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
                      children: '"div"'
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
                      children: "      remotePlayerContainer.textContent "
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
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '        "Remote user "'
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
                      children: " user.uid."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "toString"
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
                      children: "      remotePlayerContainer.style.width "
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
                      children: ' "640px"'
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
                      children: "      remotePlayerContainer.style.height "
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
                      children: ' "480px"'
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
                      children: "      document.body."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "append"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(remotePlayerContainer);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      remoteVideoTrack."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "play"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(remotePlayerContainer);"
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " (mediaType "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "==="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "audio"'
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
                      children: "      const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " remoteAudioTrack"
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
                      children: " user.audioTrack;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      remoteAudioTrack."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "play"
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
                      children: "    client."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "on"
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
                      children: '"user-unpublished"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", ("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: "user"
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
                      children: "      const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " remotePlayerContainer"
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
                      children: " document."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getElementById"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(user.uid);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      remotePlayerContainer."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "remove"
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
                      children: "  });"
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
                      children: "  // When token-privilege-will-expire occurs, fetch a new token from the server and call renewToken to renew the token. "
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  client."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "on"
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
                      children: '"token-privilege-will-expire"'
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
                      children: "async"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " function"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " () {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " token "
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " fetchToken"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(uid, options.channel, "
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
                      children: "    await"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " client."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "renewToken"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(token);"
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
                      children: "  // When token-privilege-did-expire occurs, fetch a new token from the server and call join to rejoin the channel."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  client."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "on"
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
                      children: '"token-privilege-did-expire"'
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
                      children: "async"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " function"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " () {"
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
                      children: '"Fetching the new Token"'
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
                      children: "    let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " token "
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " fetchToken"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(uid, options.channel, "
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
                      children: '"Rejoining the channel with new Token"'
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
                      children: "    await"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " rtc.client."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "join"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(options.appId, options.channel, token, uid);"
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
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " "
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "startBasicCall"
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
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "To test the AccessToken server, open index.html with a supported browser to perform the following actions:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Successfully joining a channel."
          }), `
`, _jsx(_components.li, {
            children: "Renewing a token every 10 seconds."
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsx(_components.p, {
      children: "To upgrade your authentication mechanism to AccessToken 2, use the following procedure."
    }), `
`, _jsx(_components.h3, {
      id: "upgrade-the-token-server-to-accesstoken2",
      children: "Upgrade the token server to AccessToken2"
    }), `
`, _jsx(_components.p, {
      children: "This section shows you how to upgrade the token server to AccessToken2."
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Import ", _jsx(_components.code, {
            children: "RtcTokenBuilder2"
          }), " with the following code:"]
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "import"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " com.agora.chat.token.io.agora.media.RtcTokenBuilder2;"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Replace the code for ", _jsx(_components.code, {
            children: "getRtcToken"
          }), " method with the following logic:"]
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
                  children: "// Generate  AccessToken2"
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
                  children: " String "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getRtcToken"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(@"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "PathVariable"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " String rtcChannelName, @"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "PathVariable"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " rtcUserId, @"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "PathVariable"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " role) {"
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
                  children: "StringUtils."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "hasText"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(appid) "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "||"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " !"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "StringUtils."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "hasText"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(appcert)) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "appid or appcert is empty"'
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    RtcTokenBuilder2 builder "
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
                  children: " RtcTokenBuilder2"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    RtcTokenBuilder2.Role rtcRole;"
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
                  children: "    switch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(role) {"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 1"
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            rtcRole "
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
                  children: " RtcTokenBuilder2.Role.ROLE_PUBLISHER;"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 2"
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
                  children: "            rtcRole "
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
                  children: " RtcTokenBuilder2.Role.ROLE_SUBSCRIBER;"
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
                  children: "    return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " builder."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "buildTokenWithUid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(appid, appcert, rtcChannelName, rtcUserId, rtcRole, expire);"
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
`]
    }), `
`, _jsx(_components.p, {
      children: "No extra action is required for the client to get compatible with AccessToken2."
    }), `
`, _jsx(_components.h3, {
      id: "test-the-accesstoken2-server",
      children: "Test the AccessToken2 server"
    }), `
`, _jsxs(_components.p, {
      children: ["Open ", _jsx(_components.code, {
        children: "index.html"
      }), " with a supported browser to perform the following actions:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Successfully joining a channel."
      }), `
`, _jsx(_components.li, {
        children: "Renewing a token every 10 seconds."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section introduces token generator libraries, version requirements, and related documents about AccessToken2."
    }), `
`, _jsx(_components.h3, {
      id: "sdk-compatibility-for-accesstoken2",
      children: "SDK compatibility for AccessToken2"
    }), `
`, _jsx(_components.p, {
      children: "AccessToken2 supports the following versions of the Agora SDKs:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "SDK"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "First SDK version to support AccessToken2"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Native SDK"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3.5.2"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Electron SDK"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3.5.2"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unity SDK"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3.5.2"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "React Native SDK"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3.5.2"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Flutter SDK"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "4.2.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Web SDK"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "4.8.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "WeChat Mini Program SDK"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Not supported"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "SDKs that use AccessToken2 can interoperate with SDKs that use AccessToken. Also, the SDKs that support AccessToken2 also support AccessToken."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If you use other extensions, such as Agora Cloud Recording and Media Push, contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "support@agora.io"
          }), " for technical support before upgrading to AccessToken2."]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "token-generator-libraries",
      children: "Token generator libraries"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora provides an open-source ", _jsx(_components.a, {
        href: "https://github.com/AgoraIO/Tools/tree/release/accesstoken2/DynamicKey/AgoraDynamicKey",
        children: "AgoraDynamicKey"
      }), " repository on GitHub, which enables you to generate AccessToken2 on your server with programming languages such as C++, Java, and Go."]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Language"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Algorithm"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Core Method"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Sample Code"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "C++"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HMAC-SHA256"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/cpp/src/RtcTokenBuilder2.h",
              children: "buildTokenWithUid"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/cpp/sample/RtcTokenBuilder2Sample.cpp",
              children: "RtcTokenBuilder2Sample.cpp"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Go"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HMAC-SHA256"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/go/src/rtctokenbuilder2/rtctokenbuilder.go",
              children: "buildTokenWithUid"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/go/sample/rtctokenbuilder2/sample.go",
              children: "sample.go"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Java"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HMAC-SHA256"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/java/src/main/java/io/agora/media/RtcTokenBuilder2.java",
              children: "buildTokenWithUid"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/java/src/main/java/io/agora/sample/RtcTokenBuilder2Sample.java",
              children: "RtcTokenBuilder2Sample.java"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Node.js"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HMAC-SHA256"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/nodejs/src/RtcTokenBuilder2.js",
              children: "buildTokenWithUid"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/nodejs/sample/RtcTokenBuilder2Sample.js",
              children: "RtcTokenBuilder2Sample.js"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "PHP"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HMAC-SHA256"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/php/src/RtcTokenBuilder2.php",
              children: "buildTokenWithUid"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/php/sample/RtcTokenBuilder2Sample.php",
              children: "RtcTokenBuilder2Sample.php"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Python"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HMAC-SHA256"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/python/src/RtcTokenBuilder2.py",
              children: "buildTokenWithUid"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/python/sample/RtcTokenBuilder2Sample.py",
              children: "RtcTokenBuilder2Sample.py"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Python3"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HMAC-SHA256"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/python3/src/RtcTokenBuilder2.py",
              children: "buildTokenWithUid"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/Tools/blob/release/accesstoken2/DynamicKey/AgoraDynamicKey/python3/sample/RtcTokenBuilder2Sample.py",
              children: "RtcTokenBuilder2Sample.py"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "api-reference",
      children: "API reference"
    }), `
`, _jsx(_components.p, {
      children: "Taking Java as an example, this section introduces the parameters and descriptions for the method to generate an AccessToken2."
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "buildTokenWithUid"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String appId, String appCertificate, String channelName, "
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
              children: " uid, Role role, "
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
              children: " expire) "
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
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
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "appId"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The App ID of your Agora project."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "appCertificate"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The App Certificate of your Agora project."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "channelName"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: 'The channel name. The string length must be less than 64 bytes. Supported character scopes are: All lowercase English letters: a to z. All upper English letters: A to Z. All numeric characters: 0 to 9. The space character. Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".'
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uid"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The user ID of the user to be authenticated. A 32-bit unsigned integer with a value range from 1 to (2³² - 1). It must be unique. Set ", _jsx(_components.code, {
              children: "uid"
            }), " as 0, if you do not want to authenticate the user ID, that is, any ", _jsx(_components.code, {
              children: "uid"
            }), " from the app client can join the channel."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "role"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The privilege of the user, either as a publisher or a subscriber. This parameter determines whether a user can publish streams in the channel. ", _jsx(_components.code, {
              children: "ROLE_PUBLISHER(1)"
            }), ": (default) The user has the privilege of a publisher, that is, the user can publish streams in the channel. ", _jsx(_components.code, {
              children: "ROLE_SUBSCRIBER(2)"
            }), ": The user has the privilege of a subscriber, that is, the user can only subscribe to streams, not publish them, in the channel. This value takes effect only if you have enabled co-host authentication. For details, see ", _jsx(_components.a, {
              href: "#enable-co-host-authentication",
              children: "Enable co-host authentication"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "expire"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The Unix timestamp (in seconds) when an AccessToken expires. Set this parameter as the current timestamp plus the valid period of AccessToken2. For example, if you set ", _jsx(_components.code, {
              children: "expire"
            }), " as the current timestamp plus 600, the AccessToken2 expires in 10 minutes. An AccessToken2 is valid for 24 hours at most. If you set it to a period longer than 24 hours, the AccessToken2 is still valid for 24 hours."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "api-for-privilege-level-expiration-configuration",
      children: "API for privilege-level expiration configuration"
    }), `
`, _jsx(_components.p, {
      children: "To facilitate privilege-level configuration in a channel, Agora provides an overloaded method to support configuring the expiration of the AccessToken2 and related privileges:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Join a channel"
      }), `
`, _jsx(_components.li, {
        children: "Publish audio"
      }), `
`, _jsx(_components.li, {
        children: "Publish video"
      }), `
`, _jsx(_components.li, {
        children: "Publish data stream"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Take Java as an example:"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "buildTokenWithUid"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String appId, String appCertificate, String channelName, "
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
              children: " uid, "
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
              children: " tokenExpire, "
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
              children: " joinChannelPrivilegeExpire, "
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
              children: " pubAudioPrivilegeExpire, "
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
              children: " pubVideoPrivilegeExpire, "
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
              children: " pubDataStreamPrivilegeExpire) "
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "This method generates an AccessToken2 and supports configuring the following privileges:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The expiration time of AccessToken2"
      }), `
`, _jsx(_components.li, {
        children: "Joining an RTC channel"
      }), `
`, _jsx(_components.li, {
        children: "Publishing audio in an RTC channel"
      }), `
`, _jsx(_components.li, {
        children: "Publishing video in an RTC channel"
      }), `
`, _jsx(_components.li, {
        children: "Publishing data stream in an RTC channel"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The privileges of publishing audio in an RTC channel, publishing video in an RTC channel, and publishing data stream in an RTC channel only take effect after enabling co-host authentication."
    }), `
`, _jsxs(_components.p, {
      children: ["You can assign multiple privileges to a user. The maximum valid period of each privilege is 24 hours. When a privilege is about to expire or has expired, the SDK triggers the ", _jsx(_components.code, {
        children: "onTokenPriviegeWillExpire"
      }), " callback or the ", _jsx(_components.code, {
        children: "onRequestToken"
      }), " callback. You need to take the following actions in your own app logic:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Tag the type of privilege which is about to expire or has expired in your app logic."
      }), `
`, _jsx(_components.li, {
        children: "The app fetches a new AccessToken2 from the token server."
      }), `
`, _jsxs(_components.li, {
        children: ["The SDK calls ", _jsx(_components.code, {
          children: "renewToken"
        }), " to renew the AccessToken2, or ", _jsx(_components.code, {
          children: "joinChannel"
        }), "to rejoin the channel."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "You need to set an appropriate expiration timestamp. For example, if the expiration time of joining a channel is earlier than that of publishing audio in the channel, when the privilege of joining a channel expires, the user is kicked out of the RTC channel. Even if the privilege of publishing audio is still valid, the privilege does not mean anything for the user."
    }), `
`, _jsxs(_components.table, {
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
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "tokenExpire"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Number of seconds passed from the generation of AccessToken2 to the expiration of AccessToken2. Set this parameter as the current timestamp plus the valid period of AccessToken2. For example, if you set ", _jsx(_components.code, {
              children: "tokenExpire"
            }), "  as the current timestamp plus 600, the AccessToken2 expires in 10 minutes. An AccessToken2 is valid for 24 hours at most. If you set it to 0 or a period longer than 24 hours, the AccessToken2 is still valid for 24 hours."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "joinChannelPrivilegeExpire"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Number of seconds passed from the generation of AccessToken2 to the expiration of the privilege of joining a channel. Set this parameter as the current timestamp plus the valid period of the privilege of joining a channel. For example, if you set ", _jsx(_components.code, {
              children: "joinChannelPrivilegeExpire"
            }), " as the current timestamp plus 600, the privilege expires 10 minutes after generation."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "pubAudioPrivilegeExpire"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Number of seconds passed from the generation of AccessToken2 to the expiration of the privilege of publishing audio in a channel. Set this parameter as the current timestamp plus the valid period of publishing audio in a channel. For example, if you set ", _jsx(_components.code, {
              children: "pubAudioPrivilegeExpire"
            }), "  as the current timestamp plus 600, the privilege expires 10 minutes after generation. If you do not want to enable this privilege, set this parameter to the current timestamp."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "pubVideoPrivilegeExpire"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Number of seconds passed from the generation of AccessToken2 to the expiration of the privilege of publishing video in a channel. Set this parameter as the current timestamp plus the valid period of publishing video in a channel. For example, if you set ", _jsx(_components.code, {
              children: "pubVideoPrivilegeExpire"
            }), " as the current timestamp plus 600, the privilege expires 10 minutes after generation. If you do not want to enable this privilege, set this parameter to the current timestamp."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "pubDataStreamPrivilegeExpire"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Number of seconds passed from the generation of AccessToken2 to the expiration of the privilege of publishing data stream in a channel. Set this parameter as the current timestamp plus the valid period of publishing video in a channel. For example, if you set ", _jsx(_components.code, {
              children: "pubDataStreamPrivilegeExpire"
            }), " as the current timestamp plus 600, the privilege expires 10 minutes after generation. If you do not want to enable this privilege, set this parameter to the current timestamp."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "enable-co-host-authentication",
      children: "Enable co-host authentication"
    }), `
`, _jsx(_components.p, {
      children: "Refer to the following steps to enable this function in Agora Console:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Log on to ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        }), ". Under ", _jsx(_components.strong, {
          children: "Projects"
        }), ", choose a project for which you want to enable co-host authentication, click the ", _jsx(_components.strong, {
          children: "Edit"
        }), " icon, and enter the ", _jsx(_components.strong, {
          children: "Edit Project"
        }), " page."]
      }), `
`, _jsxs(_components.li, {
        children: ["In the Features area, click ", _jsx(_components.strong, {
          children: "Enable authentication"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Follow the on-screen instructions to know more about this function, check the box, and click ", _jsx(_components.strong, {
          children: "Enable"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Co-host authentication takes effect in 5 minutes."
    }), `
`, _jsx(_components.p, {
      children: "Once you have enabled co-host authentication, a user using your app must meet both of the following requirements to publish streams in a channel:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The ", _jsx(_components.code, {
          children: "role"
        }), " in ", _jsx(_components.code, {
          children: "setClientRole"
        }), " is set as ", _jsx(_components.code, {
          children: '"BROADCASTER"'
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["The ", _jsx(_components.code, {
          children: "role"
        }), " in the code for generating tokens is set as ", _jsx(_components.code, {
          children: "ROLE_PUBLISHER"
        }), "."]
      }), `
`]
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
