import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I use string user IDs?"
};
export let _markdown = `

## Introduction [#introduction]

Many apps use string usernames. To reduce development costs, Agora has added support for string user IDs. Users can now directly use their string usernames as user accounts to join the Agora channel.

To ensure smooth communication, all the users in a channel should use the same type of ID, that is, either the integer user ID, or the string user ID.

<CalloutContainer type="warning">
  <CalloutDescription>
    This feature is in BETA. Agora recommends contacting [support@agora.io](mailto\\:support@agora.io) before implementing this function. The following products or features do not support string user IDs:

    * [Cloud Recording](/en/realtime-media/cloud-recording)
    * [Channel Management RESTful API](/en/api-reference/api-ref/rtc)
    * [Console RESTful API](/en/api-reference/api-ref/console/solutions-agora-console-rest-api)
  </CalloutDescription>
</CalloutContainer>

## Implementation [#implementation]

Before proceeding, ensure that you understand the steps and code logic for implementing the basic RTC SDK functions. The Agora real-Time interaction SDK supports string user IDs across native platforms using different methods.

### Native [#native]

Agora Native SDK supports using user accounts (string user ID) to identify the user:

**Android/Windows**:

* \`registerLocalUserAccount\`: Registers a local user account.
* \`joinChannelWithUserAccount\`: Joins the channel with the registered user account.

**iOS/macOS**:

* \`registerLocalUserAccountWithAppID\`: Registers a local user account.
* \`joinChannelByToken\`: Joins the channel with the registered user account.

Follow the steps to join an Agora channel with a string user account:

1. After initializing the RtcEngine instance, call \`registerLocalUserAccount\` to register a local user account.
2. Call the \`joinChannelWithUserAccount\` method to join a channel with the registered user account.
3. Call the \`leaveChannel\` method to leave the channel.

**API call sequence**

The following diagram shows how to join a channel with a string user ID:

![](https://web-cdn.agora.io/docs-files/1568711868522)

<CalloutContainer type="info">
  <CalloutDescription>
    This diagram uses Java APIs as an example.
  </CalloutDescription>
</CalloutContainer>

* When calling the \`registerLocalUserAccount\` and \`joinChannelWithUserAccount\` methods, the \`userAccount\` parameter is required and cannot be empty null.

* Agora recommends that you call \`registerLocalUserAccount\` to register an account before calling \`joinChannelWithUserAccount\`. This can reduce the time required to join a channel. You can also directly call \`joinChannelWithUserAccount\` to join the channel.

* For other APIs, Agora still uses the Int UID parameter to identify the user. You can use \`getUserInfoByUid\` or \`getUserInfoByUserAccount\` to get the corresponding User Account or UID without having to maintain the mapping table yourself.

**Sample code**

Refer to the following code snippets to implement string user accounts in your project:

<CodeBlockTabs defaultValue="Java">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="Java">
      Java
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="C++">
      C++
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="Swift">
      Swift
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="Objective-C">
      Objective-C
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="Java">
    \`\`\`java  tabGroup="string-user-account-native"
    private void initializeAgoraEngine() {
      try {
        String appId = getString(R.string.agora_app_id);
        mRtcEngine = RtcEngine.create(getBaseContext(), appId, mRtcEventHandler);
        // Registering a user name after initialization and before joining a channel can shorten the time to join a
        channelmRtcEngine.registerLocalUserAccount(appId, mLocal.userAccount);
      } catch (Exception e) {
        Log.e(LOG_TAG, Log.getStackTraceString(e));

        throw new RuntimeException("NEED TO check rtc sdk init fatal error\\n" + Log.getStackTraceString(e));
      }
    }

    private void joinChannel() {
      String token = getString(R.string.agora_access_token);
      if (token.isEmpty()) {
        token = null;
      }
      // Join a channel using the registered user
      IDmRtcEngine.joinChannelWithUserAccount(token, "stringifiedChannel1", mLocal.userAccount);
    }
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="C++">
    \`\`\`cpp  tabGroup="string-user-account-native"
    LRESULT COpenLiveDlg::OnJoinChannel(WPARAM wParam, LPARAM lParam)
    {
    	IRtcEngine *lpRtcEngine = CAgoraObject::GetEngine();
    	CAgoraObject *lpAgoraObject = CAgoraObject: :GetAgoraObject();

    	// Register the local user name
    	lpAgoraObject->RegisterLocalUserAccount(APP_ID, m_dlgEnterChannel.GetStringUid());
    	// Use the user name to join the channel
    	lpAgoraObject->JoinChannelWithUserAccount(strChannelName, m_dlgEnterChannel.GetStringUid());

    }
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="Swift">
    \`\`\`swift  tabGroup="string-user-account-native"
    func joinChannel() {
      // Register user ID before joining the channel
      let myStringId = "someStringId"
      agoraKit.registerLocalUserAccount(userAccount: myStringId, appId: myAppId)
      // Join channel with registered user ID
      agoraKit.joinChannel(byUserAccount: myStringId, token: Token, channelId: "demoChannel1") {
        (sid, uid, elapsed) in
        // Add any additional code to execute after joining the channel
      }
    }
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="Objective-C">
    \`\`\`objc  tabGroup="string-user-account-native"
    -(void)joinChannel {
    // Register user ID before joining the channel
    NSString *userAccount = @"someStringId";
     [self.agoraKit registerLocalUserAccount: userAccount appId: KeyCenter.AppId];
    // Join channel with registered user ID
    [self.agoraKit joinChannelByToken:token channelId:channelName userAccount:userAccount mediaOptions:options joinSuccess:nil];
    }
    \`\`\`
  </CodeBlockTab>
</CodeBlockTabs>

#### Sample project [#sample-project]

Agora provides an open-source [String-Account](https://github.com/AgoraIO/Advanced-Video/tree/dev/backup/String-Account) demo project on Github that implements string user accounts.

#### API Reference [#api-reference]

* Java

  * [\`registerLocalUserAccount\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_registerlocaluseraccount)
  * [\`joinChannelWithUserAccount\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_joinchannelwithuseraccount)
  * [\`getUserInfoByUid\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_getuserinfobyuid)
  * [\`getUserInfoByUserAccount\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_getuserinfobyuseraccount)
  * [\`onLocalUserRegistered\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlocaluserregistered)
  * [\`onUserInfoUpdated\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onuserinfoupdated)

* Objective-C

  * [\`registerLocalUserAccount\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/registerlocaluseraccount\\(_\\:appid:\\))
  * [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/joinchannel\\(bytoken\\:channelid\\:info\\:uid\\:joinsuccess:\\))
  * [\`getUserInfo(byUid:withError:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/getuserinfo\\(byuid\\:witherror:\\))
  * [\`getUserInfo(byUserAccount:withError:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/getuserinfo\\(byuseraccount\\:witherror:\\))
  * [\`didUserInfoUpdatedWithUserId\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine\\(_\\:diduserinfoupdatedwithuserid\\:userinfo:\\))

* Swift

  * [\`registerLocalUserAccount\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/registerlocaluseraccount\\(_\\:appid:\\))
  * [\`joinChannel\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/joinchannel\\(bytoken\\:channelid\\:info\\:uid\\:joinsuccess:\\))
  * [\`getUserInfo(byUid:withError:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/getuserinfo\\(byuid\\:witherror:\\))
  * [\`getUserInfo(byUserAccount:withError:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/getuserinfo\\(byuseraccount\\:witherror:\\))
  * [\`didUserInfoUpdatedWithUserId\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine\\(_\\:diduserinfoupdatedwithuserid\\:userinfo:\\))

* C++

  * [\`registerLocalUserAccount\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_registerlocaluseraccount)
  * [\`joinChannelWithUserAccount\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_joinchannelwithuseraccount)
  * [\`getUserInfoByUid\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_getuserinfobyuid)
  * [\`getUserInfoByUserAccount\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_getuserinfobyuseraccount)
  * [\`onLocalUserRegistered\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlocaluserregistered)
  * [\`onUserInfoUpdated\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onuserinfoupdated)

### Web [#web]

Starting from v2.5.0, the \`uid\` parameter in the \`Client.join\` method can be set as either a number or a string. You can join a channel by calling the \`Client.join\` method and passing in a string \`uid\`.

**Sample code**

Refer to the following code sample to implement string user accounts in your project:

\`\`\`javascript
// Set UID to 'agora' and join channel 'demo'
client.join("<appid>", "demo", "<token>", "agora");
\`\`\`

#### API Reference [#api-reference-1]

* [\`Client.join\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#join)

### Considerations [#considerations]

* Do not mix parameter types within the same channel. If you use SDKs that do not support string usernames, only integer user IDs can be used in the channel. The following Agora SDKs support string user accounts:
  * The Native SDK: v2.8.0 and later.
  * The Web SDK: v2.5.0 and later.
* If you change usernames to strings, ensure that all end users are upgraded synchronously.
* If you use string user accounts to join a channel, ensure that the token generation script on your server is updated to the latest version, and that you use the same user account or its corresponding integer user ID to generate a token.
* If the Native SDK and Web SDK join the same channel, ensure that the user id types are the same.
`;
export let structuredData = {
  contents: [{
    heading: "introduction",
    content: "Many apps use string usernames. To reduce development costs, Agora has added support for string user IDs. Users can now directly use their string usernames as user accounts to join the Agora channel."
  }, {
    heading: "introduction",
    content: "To ensure smooth communication, all the users in a channel should use the same type of ID, that is, either the integer user ID, or the string user ID."
  }, {
    heading: "introduction",
    content: "This feature is in BETA. Agora recommends contacting support\\@agora.io before implementing this function. The following products or features do not support string user IDs:"
  }, {
    heading: "introduction",
    content: "Cloud Recording"
  }, {
    heading: "introduction",
    content: "Channel Management RESTful API"
  }, {
    heading: "introduction",
    content: "Console RESTful API"
  }, {
    heading: "implementation",
    content: "Before proceeding, ensure that you understand the steps and code logic for implementing the basic RTC SDK functions. The Agora real-Time interaction SDK supports string user IDs across native platforms using different methods."
  }, {
    heading: "native",
    content: "Agora Native SDK supports using user accounts (string user ID) to identify the user:"
  }, {
    heading: "native",
    content: "**Android/Windows**:"
  }, {
    heading: "native",
    content: "`registerLocalUserAccount`: Registers a local user account."
  }, {
    heading: "native",
    content: "`joinChannelWithUserAccount`: Joins the channel with the registered user account."
  }, {
    heading: "native",
    content: "**iOS/macOS**:"
  }, {
    heading: "native",
    content: "`registerLocalUserAccountWithAppID`: Registers a local user account."
  }, {
    heading: "native",
    content: "`joinChannelByToken`: Joins the channel with the registered user account."
  }, {
    heading: "native",
    content: "Follow the steps to join an Agora channel with a string user account:"
  }, {
    heading: "native",
    content: "After initializing the RtcEngine instance, call `registerLocalUserAccount` to register a local user account."
  }, {
    heading: "native",
    content: "Call the `joinChannelWithUserAccount` method to join a channel with the registered user account."
  }, {
    heading: "native",
    content: "Call the `leaveChannel` method to leave the channel."
  }, {
    heading: "native",
    content: "**API call sequence**"
  }, {
    heading: "native",
    content: "The following diagram shows how to join a channel with a string user ID:"
  }, {
    heading: "native",
    content: "This diagram uses Java APIs as an example."
  }, {
    heading: "native",
    content: "When calling the `registerLocalUserAccount` and `joinChannelWithUserAccount` methods, the `userAccount` parameter is required and cannot be empty null."
  }, {
    heading: "native",
    content: "Agora recommends that you call `registerLocalUserAccount` to register an account before calling `joinChannelWithUserAccount`. This can reduce the time required to join a channel. You can also directly call `joinChannelWithUserAccount` to join the channel."
  }, {
    heading: "native",
    content: "For other APIs, Agora still uses the Int UID parameter to identify the user. You can use `getUserInfoByUid` or `getUserInfoByUserAccount` to get the corresponding User Account or UID without having to maintain the mapping table yourself."
  }, {
    heading: "native",
    content: "**Sample code**"
  }, {
    heading: "native",
    content: "Refer to the following code snippets to implement string user accounts in your project:"
  }, {
    heading: "sample-project",
    content: "Agora provides an open-source String-Account demo project on Github that implements string user accounts."
  }, {
    heading: "api-reference",
    content: "Java"
  }, {
    heading: "api-reference",
    content: "`registerLocalUserAccount`"
  }, {
    heading: "api-reference",
    content: "`joinChannelWithUserAccount`"
  }, {
    heading: "api-reference",
    content: "`getUserInfoByUid`"
  }, {
    heading: "api-reference",
    content: "`getUserInfoByUserAccount`"
  }, {
    heading: "api-reference",
    content: "`onLocalUserRegistered`"
  }, {
    heading: "api-reference",
    content: "`onUserInfoUpdated`"
  }, {
    heading: "api-reference",
    content: "Objective-C"
  }, {
    heading: "api-reference",
    content: "`registerLocalUserAccount`"
  }, {
    heading: "api-reference",
    content: "`joinChannel`"
  }, {
    heading: "api-reference",
    content: "`getUserInfo(byUid:withError:)`"
  }, {
    heading: "api-reference",
    content: "`getUserInfo(byUserAccount:withError:)`"
  }, {
    heading: "api-reference",
    content: "`didUserInfoUpdatedWithUserId`"
  }, {
    heading: "api-reference",
    content: "Swift"
  }, {
    heading: "api-reference",
    content: "`registerLocalUserAccount`"
  }, {
    heading: "api-reference",
    content: "`joinChannel`"
  }, {
    heading: "api-reference",
    content: "`getUserInfo(byUid:withError:)`"
  }, {
    heading: "api-reference",
    content: "`getUserInfo(byUserAccount:withError:)`"
  }, {
    heading: "api-reference",
    content: "`didUserInfoUpdatedWithUserId`"
  }, {
    heading: "api-reference",
    content: "C++"
  }, {
    heading: "api-reference",
    content: "`registerLocalUserAccount`"
  }, {
    heading: "api-reference",
    content: "`joinChannelWithUserAccount`"
  }, {
    heading: "api-reference",
    content: "`getUserInfoByUid`"
  }, {
    heading: "api-reference",
    content: "`getUserInfoByUserAccount`"
  }, {
    heading: "api-reference",
    content: "`onLocalUserRegistered`"
  }, {
    heading: "api-reference",
    content: "`onUserInfoUpdated`"
  }, {
    heading: "web",
    content: "Starting from v2.5.0, the `uid` parameter in the `Client.join` method can be set as either a number or a string. You can join a channel by calling the `Client.join` method and passing in a string `uid`."
  }, {
    heading: "web",
    content: "**Sample code**"
  }, {
    heading: "web",
    content: "Refer to the following code sample to implement string user accounts in your project:"
  }, {
    heading: "api-reference-1",
    content: "`Client.join`"
  }, {
    heading: "considerations",
    content: "Do not mix parameter types within the same channel. If you use SDKs that do not support string usernames, only integer user IDs can be used in the channel. The following Agora SDKs support string user accounts:"
  }, {
    heading: "considerations",
    content: "The Native SDK: v2.8.0 and later."
  }, {
    heading: "considerations",
    content: "The Web SDK: v2.5.0 and later."
  }, {
    heading: "considerations",
    content: "If you change usernames to strings, ensure that all end users are upgraded synchronously."
  }, {
    heading: "considerations",
    content: "If you use string user accounts to join a channel, ensure that the token generation script on your server is updated to the latest version, and that you use the same user account or its corresponding integer user ID to generate a token."
  }, {
    heading: "considerations",
    content: "If the Native SDK and Web SDK join the same channel, ensure that the user id types are the same."
  }],
  headings: [{
    id: "introduction",
    content: "Introduction"
  }, {
    id: "implementation",
    content: "Implementation"
  }, {
    id: "native",
    content: "Native"
  }, {
    id: "sample-project",
    content: "Sample project"
  }, {
    id: "api-reference",
    content: "API Reference"
  }, {
    id: "web",
    content: "Web"
  }, {
    id: "api-reference-1",
    content: "API Reference"
  }, {
    id: "considerations",
    content: "Considerations"
  }]
};
export let toc = [{
  depth: 2,
  url: "#introduction",
  title: _jsx(_Fragment, {
    children: "Introduction"
  })
}, {
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#native",
  title: _jsx(_Fragment, {
    children: "Native"
  })
}, {
  depth: 4,
  url: "#sample-project",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 4,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API Reference"
  })
}, {
  depth: 3,
  url: "#web",
  title: _jsx(_Fragment, {
    children: "Web"
  })
}, {
  depth: 4,
  url: "#api-reference-1",
  title: _jsx(_Fragment, {
    children: "API Reference"
  })
}, {
  depth: 3,
  url: "#considerations",
  title: _jsx(_Fragment, {
    children: "Considerations"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger } = _components;
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
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), `
`, _jsx(_components.p, {
      children: "Many apps use string usernames. To reduce development costs, Agora has added support for string user IDs. Users can now directly use their string usernames as user accounts to join the Agora channel."
    }), `
`, _jsx(_components.p, {
      children: "To ensure smooth communication, all the users in a channel should use the same type of ID, that is, either the integer user ID, or the string user ID."
    }), `
`, _jsx(CalloutContainer, {
      type: "warning",
      children: _jsxs(CalloutDescription, {
        children: [_jsxs(_components.p, {
          children: ["This feature is in BETA. Agora recommends contacting ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "support@agora.io"
          }), " before implementing this function. The following products or features do not support string user IDs:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording",
              children: "Cloud Recording"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/rtc",
              children: "Channel Management RESTful API"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/console/solutions-agora-console-rest-api",
              children: "Console RESTful API"
            })
          }), `
`]
        })]
      })
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsx(_components.p, {
      children: "Before proceeding, ensure that you understand the steps and code logic for implementing the basic RTC SDK functions. The Agora real-Time interaction SDK supports string user IDs across native platforms using different methods."
    }), `
`, _jsx(_components.h3, {
      id: "native",
      children: "Native"
    }), `
`, _jsx(_components.p, {
      children: "Agora Native SDK supports using user accounts (string user ID) to identify the user:"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Android/Windows"
      }), ":"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "registerLocalUserAccount"
        }), ": Registers a local user account."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "joinChannelWithUserAccount"
        }), ": Joins the channel with the registered user account."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "iOS/macOS"
      }), ":"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "registerLocalUserAccountWithAppID"
        }), ": Registers a local user account."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "joinChannelByToken"
        }), ": Joins the channel with the registered user account."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Follow the steps to join an Agora channel with a string user account:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["After initializing the RtcEngine instance, call ", _jsx(_components.code, {
          children: "registerLocalUserAccount"
        }), " to register a local user account."]
      }), `
`, _jsxs(_components.li, {
        children: ["Call the ", _jsx(_components.code, {
          children: "joinChannelWithUserAccount"
        }), " method to join a channel with the registered user account."]
      }), `
`, _jsxs(_components.li, {
        children: ["Call the ", _jsx(_components.code, {
          children: "leaveChannel"
        }), " method to leave the channel."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "API call sequence"
      })
    }), `
`, _jsx(_components.p, {
      children: "The following diagram shows how to join a channel with a string user ID:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1568711868522",
        alt: ""
      })
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "This diagram uses Java APIs as an example."
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["When calling the ", _jsx(_components.code, {
            children: "registerLocalUserAccount"
          }), " and ", _jsx(_components.code, {
            children: "joinChannelWithUserAccount"
          }), " methods, the ", _jsx(_components.code, {
            children: "userAccount"
          }), " parameter is required and cannot be empty null."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Agora recommends that you call ", _jsx(_components.code, {
            children: "registerLocalUserAccount"
          }), " to register an account before calling ", _jsx(_components.code, {
            children: "joinChannelWithUserAccount"
          }), ". This can reduce the time required to join a channel. You can also directly call ", _jsx(_components.code, {
            children: "joinChannelWithUserAccount"
          }), " to join the channel."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["For other APIs, Agora still uses the Int UID parameter to identify the user. You can use ", _jsx(_components.code, {
            children: "getUserInfoByUid"
          }), " or ", _jsx(_components.code, {
            children: "getUserInfoByUserAccount"
          }), " to get the corresponding User Account or UID without having to maintain the mapping table yourself."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Sample code"
      })
    }), `
`, _jsx(_components.p, {
      children: "Refer to the following code snippets to implement string user accounts in your project:"
    }), `
`, _jsxs(CodeBlockTabs, {
      defaultValue: "Java",
      children: [_jsxs(CodeBlockTabsList, {
        children: [_jsx(CodeBlockTabsTrigger, {
          value: "Java",
          children: "Java"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "C++",
          children: "C++"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "Swift",
          children: "Swift"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "Objective-C",
          children: "Objective-C"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "private"
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
                  children: " initializeAgoraEngine"
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
                  children: "  try"
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
                  children: "    String appId "
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
                  children: " getString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(R.string.agora_app_id);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    mRtcEngine "
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
                  children: " RtcEngine."
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
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getBaseContext"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), appId, mRtcEventHandler);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // Registering a user name after initialization and before joining a channel can shorten the time to join a"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    channelmRtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "registerLocalUserAccount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(appId, mLocal.userAccount);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  } "
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
                  children: " (Exception "
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
                  children: "    Log."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "e"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(LOG_TAG, Log."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getStackTraceString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(e));"
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
                  children: "    throw"
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
                  children: " RuntimeException"
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
                  children: '"NEED TO check rtc sdk init fatal error'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "\\n"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
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
                  children: " Log."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getStackTraceString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(e));"
                })]
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
                  children: "private"
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
                  children: " joinChannel"
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
                  children: "  String token "
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
                  children: " getString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(R.string.agora_access_token);"
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
                  children: " (token."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "isEmpty"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    token "
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
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
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
                  children: "  // Join a channel using the registered user"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  IDmRtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "joinChannelWithUserAccount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(token, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"stringifiedChannel1"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", mLocal.userAccount);"
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
      }), _jsx(CodeBlockTab, {
        value: "C++",
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LRESULT"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " COpenLiveDlg"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "OnJoinChannel"
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
                  children: "WPARAM"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: " wParam"
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
                  children: "LPARAM"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: " lParam"
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
                  children: "\tIRtcEngine "
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
                  children: "lpRtcEngine "
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
                  children: " CAgoraObject"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetEngine"
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
                  children: "\tCAgoraObject "
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
                  children: "lpAgoraObject "
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
                  children: " CAgoraObject"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": :"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetAgoraObject"
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
                  children: "\t// Register the local user name"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "\tlpAgoraObject->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "RegisterLocalUserAccount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(APP_ID, m_dlgEnterChannel."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetStringUid"
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
                  children: "\t// Use the user name to join the channel"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "\tlpAgoraObject->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "JoinChannelWithUserAccount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(strChannelName, m_dlgEnterChannel."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetStringUid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "());"
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
                  children: "}"
                })
              })]
            })
          })
        })
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
                  children: "func"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " joinChannel"
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
                  children: "  // Register user ID before joining the channel"
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
                  children: " myStringId "
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
                  children: ' "someStringId"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "registerLocalUserAccount"
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
                  children: "userAccount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": myStringId, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "appId"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": myAppId)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Join channel with registered user ID"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "joinChannel"
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
                  children: "byUserAccount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": myStringId, "
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
                  children: ": Token, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "channelId"
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
                  children: '"demoChannel1"'
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
                  children: "    (sid, uid, elapsed) "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "in"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // Add any additional code to execute after joining the channel"
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
                  children: ")joinChannel {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Register user ID before joining the channel"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
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
                  children: "userAccount "
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
                  children: ' @"someStringId"'
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
                  children: " ["
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
                  children: ".agoraKit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "registerLocalUserAccount:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " userAccount "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "appId:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " KeyCenter.AppId];"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Join channel with registered user ID"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
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
                  children: "self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".agoraKit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "joinChannelByToken:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "token "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "channelId:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "channelName "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "userAccount:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "userAccount "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "mediaOptions:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "options "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "joinSuccess:nil"
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
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "sample-project",
      children: "Sample project"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora provides an open-source ", _jsx(_components.a, {
        href: "https://github.com/AgoraIO/Advanced-Video/tree/dev/backup/String-Account",
        children: "String-Account"
      }), " demo project on Github that implements string user accounts."]
    }), `
`, _jsx(_components.h4, {
      id: "api-reference",
      children: "API Reference"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Java"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_registerlocaluseraccount",
              children: _jsx(_components.code, {
                children: "registerLocalUserAccount"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_joinchannelwithuseraccount",
              children: _jsx(_components.code, {
                children: "joinChannelWithUserAccount"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_getuserinfobyuid",
              children: _jsx(_components.code, {
                children: "getUserInfoByUid"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_getuserinfobyuseraccount",
              children: _jsx(_components.code, {
                children: "getUserInfoByUserAccount"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlocaluserregistered",
              children: _jsx(_components.code, {
                children: "onLocalUserRegistered"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onuserinfoupdated",
              children: _jsx(_components.code, {
                children: "onUserInfoUpdated"
              })
            })
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Objective-C"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/registerlocaluseraccount(_:appid:)",
              children: _jsx(_components.code, {
                children: "registerLocalUserAccount"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/joinchannel(bytoken:channelid:info:uid:joinsuccess:)",
              children: _jsx(_components.code, {
                children: "joinChannel"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/getuserinfo(byuid:witherror:)",
              children: _jsx(_components.code, {
                children: "getUserInfo(byUid:withError:)"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/getuserinfo(byuseraccount:witherror:)",
              children: _jsx(_components.code, {
                children: "getUserInfo(byUserAccount:withError:)"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine(_:diduserinfoupdatedwithuserid:userinfo:)",
              children: _jsx(_components.code, {
                children: "didUserInfoUpdatedWithUserId"
              })
            })
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Swift"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/registerlocaluseraccount(_:appid:)",
              children: _jsx(_components.code, {
                children: "registerLocalUserAccount"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/joinchannel(bytoken:channelid:info:uid:joinsuccess:)",
              children: _jsx(_components.code, {
                children: "joinChannel"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/getuserinfo(byuid:witherror:)",
              children: _jsx(_components.code, {
                children: "getUserInfo(byUid:withError:)"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/getuserinfo(byuseraccount:witherror:)",
              children: _jsx(_components.code, {
                children: "getUserInfo(byUserAccount:withError:)"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine(_:diduserinfoupdatedwithuserid:userinfo:)",
              children: _jsx(_components.code, {
                children: "didUserInfoUpdatedWithUserId"
              })
            })
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "C++"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_registerlocaluseraccount",
              children: _jsx(_components.code, {
                children: "registerLocalUserAccount"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_joinchannelwithuseraccount",
              children: _jsx(_components.code, {
                children: "joinChannelWithUserAccount"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_getuserinfobyuid",
              children: _jsx(_components.code, {
                children: "getUserInfoByUid"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_getuserinfobyuseraccount",
              children: _jsx(_components.code, {
                children: "getUserInfoByUserAccount"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlocaluserregistered",
              children: _jsx(_components.code, {
                children: "onLocalUserRegistered"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onuserinfoupdated",
              children: _jsx(_components.code, {
                children: "onUserInfoUpdated"
              })
            })
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "web",
      children: "Web"
    }), `
`, _jsxs(_components.p, {
      children: ["Starting from v2.5.0, the ", _jsx(_components.code, {
        children: "uid"
      }), " parameter in the ", _jsx(_components.code, {
        children: "Client.join"
      }), " method can be set as either a number or a string. You can join a channel by calling the ", _jsx(_components.code, {
        children: "Client.join"
      }), " method and passing in a string ", _jsx(_components.code, {
        children: "uid"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Sample code"
      })
    }), `
`, _jsx(_components.p, {
      children: "Refer to the following code sample to implement string user accounts in your project:"
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Set UID to 'agora' and join channel 'demo'"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "client."
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
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"<appid>"'
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
              children: '"demo"'
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
              children: '"<token>"'
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
              children: '"agora"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "api-reference-1",
      children: "API Reference"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#join",
          children: _jsx(_components.code, {
            children: "Client.join"
          })
        })
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "considerations",
      children: "Considerations"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Do not mix parameter types within the same channel. If you use SDKs that do not support string usernames, only integer user IDs can be used in the channel. The following Agora SDKs support string user accounts:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The Native SDK: v2.8.0 and later."
          }), `
`, _jsx(_components.li, {
            children: "The Web SDK: v2.5.0 and later."
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "If you change usernames to strings, ensure that all end users are upgraded synchronously."
      }), `
`, _jsx(_components.li, {
        children: "If you use string user accounts to join a channel, ensure that the token generation script on your server is updated to the latest version, and that you use the same user account or its corresponding integer user ID to generate a token."
      }), `
`, _jsx(_components.li, {
        children: "If the Native SDK and Web SDK join the same channel, ensure that the user id types are the same."
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
