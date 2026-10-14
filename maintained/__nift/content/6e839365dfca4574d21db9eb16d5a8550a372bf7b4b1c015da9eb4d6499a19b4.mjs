import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Does Agora have reconnection mechanisms?"
};
export let _markdown = `

The Agora SDK has reconnection mechanisms when a user drops offline or a process gets killed. This page shows the connection state mechanism of the Agora SDK under these circumstances.

<CalloutContainer type="info">
  <CalloutDescription>
    This article does not apply to the Agora RTC SDK Web SDK.
  </CalloutDescription>
</CalloutContainer>

## User drops offline [#user-drops-offline]

The Agora SDK adds the [\`onConnectionStateChanged\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged) or [\`connectionStateChangedToState\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged) callback in v2.3.2. This callback reports the current network connection state and reasons to any state change.

### Before v2.3.2 [#before-v232]

The following diagram shows the callbacks received by the apps of UID 1 and UID 2 during which UID 1 joins the channel, experiences a network exception, loses connection, and rejoins the channel.

![](https://web-cdn.agora.io/docs-files/1557482391248)

Where:

* T0 = 0 s: The SDK receives the \`joinChannel\` or \`joinChannelByToken\` request from the app of UID 1.
* T1 ≈ T0 + 200 ms: 200 ms after calling the \`joinChannel\` or \`joinChannelByToken\` method, the app of UID 1 joins the channel and receives the \`onJoinChannelSuccess\` or \`didJoinChannel\` callback.
* T2 ≈ T1 + 100 ms: Due to network latency, the app of UID 2 detects UID 1 100 ms after the latter joins the channel. UID 2 receives the \`onUserJoined\` or \`didJoinedOfUid\` callback.
* T3: The uplink network condition of UID 1 deteriorates. The SDK automatically tries rejoining the channel.
* T4 = T3 + 4 s: If the app of UID 1 fails to receive any data from the server in 4 seconds, it receives the \`onConnectionInterrupted\` or \`rtcEngineConnectionDidInterrupted\` callback; meanwhile the SDK continues to try rejoining the channel.
* T5 = T3 + 10 s: If the app of UID 1 fails to receive any data from the server in 10 seconds, it receives the \`onConnectionLost\` or \`rtcEngineConnectionDidLost\` callback; meanwhile the SDK continue to try rejoining the channel.
* T6 = T3 + 20 s: If the app of UID 2 fails to receive any data from UID 1 in 20 seconds, the SDK decides that UID 1 is offline. The app of UID 2 receives the \`onUserOffline\` or \`didOfflineOfUid\` callback.
* T7: If the app of UID 1 successfully rejoins the channel, it receives the \`onRejoinChannelSuccess\` or \`didRejoinChannel\` callback.
* T8 ≈ T7 + 100ms: 100 ms after the app of UID 1 successfully rejoins the channel, the app of UID 2 receives the \`onUserJoined\` or \`didJoinOfUid callback\`, which means that UID 1 is online again.

### v2.3.2 and Later [#v232-and-later]

The following diagram shows the callbacks received by the apps of UID 1 and UID 2 during which UID 1 joins the channel, experiences a network exception, loses connection, and eventually fails to rejoin the channel.

![](https://web-cdn.agora.io/docs-files/1557482418517)

Where:

* T0 = 0 s: The SDK receives the \`joinChannel\` or \`joinChannelByToken\` request from the app of UID 1.
* T1 ≈ T0 + 200 ms: 200 ms after calling the \`joinChannel\` or \`joinChannelByToken\` method, the app of UID 1 joins the channel. During the process, the app of UID 1 also receives the \`onConnectionStateChanged(CONNECTION_STATE_CONNECTING, CONNECTION_CHANGED_CONNECTING)\` or \`connectionChangedToState(AgoraConnectionStateConnecting, AgoraConnectionChangedConnecting)\` callback. When successfully joining the channel, app of UID 1 receives the \`onConnectionStateChanged(CONNECTION_STATE_CONNECTED, CONNECTION_CHANGED_JOIN_SUCCESS)\` or \`connectionChangedToState(AgoraConnectionStateConnected, AgoraConnectionChangedJoinSuccess)\` and \`onJoinChannelSuccess\` or \`didJoinChannel\` callbacks.
* T2 ≈ T1 + 100 ms: Due to network latency, the app of UID 2 detects UID 1 100 ms after the latter joins the channel. UID 2 receives the \`onUserJoined\` or \`didJoinedOfUid\` callback.
* T3: The uplink network condition of UID 1 deteriorates. The SDK automatically tries rejoining the channel.
* T4 = T3 + 4 s: If the app of UID 1 fails to receive any data from the server in 4 seconds, it receives the \`onConnectionStateChanged(CONNECTION_STATE_RECONNECTING, CONNECTION_CHANGED_INTERRUPTED)\` or \`connectionChangedToState(AgoraConnectionStateReconnecting, AgoraConnectionChangedInterrupted)\` callback; meanwhile the SDK continues to try rejoining the channel.
* T5 = T4 + 10 s: If the app of UID 1 fails to receive any data from the server in 10 seconds after receiving onConnectionStateChanged(CONNECTION\\_STATE\\_RECONNECTING, CONNECTION\\_CHANGED\\_INTERRUPTED) or connectionChangedToState(AgoraConnectionStateReconnecting, AgoraConnectionChangedInterrupted), it receives the onConnectionLost or rtcEngineConnectionDidLost callback; meanwhile the SDK continue to try rejoining the channel.
* T6 = T3 + 20 s: If the app of UID 2 fails to receive any data from UID 1 in 20 seconds, the SDK decides that UID 1 is offline. The app of UID 2 receives the \`onUserOffline\` or \`didOfflineOfUid\` callback.
* T7 = T4 + 20 min : If the app of UID 1 fails to rejoin the channel in 20 minutes after receiving onConnectionStateChanged(CONNECTION\\_STATE\\_RECONNECTING, CONNECTION\\_CHANGED\\_INTERRUPTED) or connectionChangedToState(AgoraConnectionStateReconnecting, AgoraConnectionChangedInterrupted), the SDK stops trying. The app of UID 1 receives the onConnectionStateChanged(CONNECTION\\_STATE\\_FAILED, CONNECTION\\_CHANGED\\_JOIN\\_FAILED) or connectionChangedToState(AgoraConnectionStateFailed, AgoraConnectionChangedJoinFailed) callback. UID 1 needs to leave the channel and call the joinChannel or joinChannelByToken method to join the channel.

> - If UID 2 is a Web client, the behaviors of the Web app are as follows:
>   * When UID 1 joins and rejoins the channel, UID 2 receives the \`client.on("stream-added")\` callback.
>   * If UID 2 does not receive any data from UID 1 in 10 seconds, UID 2 receives the \`client.on("stream-removed")\` callback.
>   * If the server does not receive any data from UID 1 in 3 minutes, UID 2 receives the \`client.on("peer-leave")\` callback.
> - Users can call \`leaveChannel\` to stop the retires at any time during the SDK reconnection process.

## Process Gets Killed [#process-gets-killed]

This scenario involves the following situations:

* Enables or disables VoIP mode.
* The process gets killed.
* Closes a web page.

Suppose UID 1 and UID 2 are in the same channel. When the process of user A gets killed:

* If UID 1 is in iOS or macOS: UID 1 calls the \`leaveChannel\` method and UID 2 receives a callback:

  * Android, Windows, or Linux: UID 2 receives the \`onUserOffline\` callback.
  * iOS or macOS: UID 2 receives the \`didOfflineOfUid\` callback.
  * The Web: UID 2 receives the \`client.on("peer-leave")\` callback.

* If UID 1 is in Android, Windows, or Linux and user B uses the Native SDK:

  * If UID 1 does not restart the app and rejoin the original channel within 20 seconds, UID 2 receives a callback:

    * Android, Windows, or Linux: UID 2 receives the \`onUserOffline\` callback.
    * iOS or macOS: UID 2 receives the \`didOfflineOfUid\` callback.

  * If UID 1 restarts the app and rejoins the original channel within 20 seconds, UID 2 does not receive any callback function.

* If UID 1 is in Android, Windows, or Linux and UID 2 uses the Web SDK:

  * If UID 1 does not restart the app and rejoin the original channel within 10 seconds, UID 2 receives the\` client.on("stream-removed")\` callback.
  * If UID 1 restarts the app and rejoins the original channel, UID 2 does not receive any callback.

* For the Web SDK, killing a process is equivalent to a user dropping offline.

* If UID 1 is the last user in the channel, the server destroys the channel in 10 seconds.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Agora SDK has reconnection mechanisms when a user drops offline or a process gets killed. This page shows the connection state mechanism of the Agora SDK under these circumstances."
  }, {
    heading: undefined,
    content: "This article does not apply to the Agora RTC SDK Web SDK."
  }, {
    heading: "user-drops-offline",
    content: "The Agora SDK adds the `onConnectionStateChanged` or `connectionStateChangedToState` callback in v2.3.2. This callback reports the current network connection state and reasons to any state change."
  }, {
    heading: "before-v232",
    content: "The following diagram shows the callbacks received by the apps of UID 1 and UID 2 during which UID 1 joins the channel, experiences a network exception, loses connection, and rejoins the channel."
  }, {
    heading: "before-v232",
    content: "Where:"
  }, {
    heading: "before-v232",
    content: "T0 = 0 s: The SDK receives the `joinChannel` or `joinChannelByToken` request from the app of UID 1."
  }, {
    heading: "before-v232",
    content: "T1 ≈ T0 + 200 ms: 200 ms after calling the `joinChannel` or `joinChannelByToken` method, the app of UID 1 joins the channel and receives the `onJoinChannelSuccess` or `didJoinChannel` callback."
  }, {
    heading: "before-v232",
    content: "T2 ≈ T1 + 100 ms: Due to network latency, the app of UID 2 detects UID 1 100 ms after the latter joins the channel. UID 2 receives the `onUserJoined` or `didJoinedOfUid` callback."
  }, {
    heading: "before-v232",
    content: "T3: The uplink network condition of UID 1 deteriorates. The SDK automatically tries rejoining the channel."
  }, {
    heading: "before-v232",
    content: "T4 = T3 + 4 s: If the app of UID 1 fails to receive any data from the server in 4 seconds, it receives the `onConnectionInterrupted` or `rtcEngineConnectionDidInterrupted` callback; meanwhile the SDK continues to try rejoining the channel."
  }, {
    heading: "before-v232",
    content: "T5 = T3 + 10 s: If the app of UID 1 fails to receive any data from the server in 10 seconds, it receives the `onConnectionLost` or `rtcEngineConnectionDidLost` callback; meanwhile the SDK continue to try rejoining the channel."
  }, {
    heading: "before-v232",
    content: "T6 = T3 + 20 s: If the app of UID 2 fails to receive any data from UID 1 in 20 seconds, the SDK decides that UID 1 is offline. The app of UID 2 receives the `onUserOffline` or `didOfflineOfUid` callback."
  }, {
    heading: "before-v232",
    content: "T7: If the app of UID 1 successfully rejoins the channel, it receives the `onRejoinChannelSuccess` or `didRejoinChannel` callback."
  }, {
    heading: "before-v232",
    content: "T8 ≈ T7 + 100ms: 100 ms after the app of UID 1 successfully rejoins the channel, the app of UID 2 receives the `onUserJoined` or `didJoinOfUid callback`, which means that UID 1 is online again."
  }, {
    heading: "v232-and-later",
    content: "The following diagram shows the callbacks received by the apps of UID 1 and UID 2 during which UID 1 joins the channel, experiences a network exception, loses connection, and eventually fails to rejoin the channel."
  }, {
    heading: "v232-and-later",
    content: "Where:"
  }, {
    heading: "v232-and-later",
    content: "T0 = 0 s: The SDK receives the `joinChannel` or `joinChannelByToken` request from the app of UID 1."
  }, {
    heading: "v232-and-later",
    content: "T1 ≈ T0 + 200 ms: 200 ms after calling the `joinChannel` or `joinChannelByToken` method, the app of UID 1 joins the channel. During the process, the app of UID 1 also receives the `onConnectionStateChanged(CONNECTION_STATE_CONNECTING, CONNECTION_CHANGED_CONNECTING)` or `connectionChangedToState(AgoraConnectionStateConnecting, AgoraConnectionChangedConnecting)` callback. When successfully joining the channel, app of UID 1 receives the `onConnectionStateChanged(CONNECTION_STATE_CONNECTED, CONNECTION_CHANGED_JOIN_SUCCESS)` or `connectionChangedToState(AgoraConnectionStateConnected, AgoraConnectionChangedJoinSuccess)` and `onJoinChannelSuccess` or `didJoinChannel` callbacks."
  }, {
    heading: "v232-and-later",
    content: "T2 ≈ T1 + 100 ms: Due to network latency, the app of UID 2 detects UID 1 100 ms after the latter joins the channel. UID 2 receives the `onUserJoined` or `didJoinedOfUid` callback."
  }, {
    heading: "v232-and-later",
    content: "T3: The uplink network condition of UID 1 deteriorates. The SDK automatically tries rejoining the channel."
  }, {
    heading: "v232-and-later",
    content: "T4 = T3 + 4 s: If the app of UID 1 fails to receive any data from the server in 4 seconds, it receives the `onConnectionStateChanged(CONNECTION_STATE_RECONNECTING, CONNECTION_CHANGED_INTERRUPTED)` or `connectionChangedToState(AgoraConnectionStateReconnecting, AgoraConnectionChangedInterrupted)` callback; meanwhile the SDK continues to try rejoining the channel."
  }, {
    heading: "v232-and-later",
    content: "T5 = T4 + 10 s: If the app of UID 1 fails to receive any data from the server in 10 seconds after receiving onConnectionStateChanged(CONNECTION\\_STATE\\_RECONNECTING, CONNECTION\\_CHANGED\\_INTERRUPTED) or connectionChangedToState(AgoraConnectionStateReconnecting, AgoraConnectionChangedInterrupted), it receives the onConnectionLost or rtcEngineConnectionDidLost callback; meanwhile the SDK continue to try rejoining the channel."
  }, {
    heading: "v232-and-later",
    content: "T6 = T3 + 20 s: If the app of UID 2 fails to receive any data from UID 1 in 20 seconds, the SDK decides that UID 1 is offline. The app of UID 2 receives the `onUserOffline` or `didOfflineOfUid` callback."
  }, {
    heading: "v232-and-later",
    content: "T7 = T4 + 20 min : If the app of UID 1 fails to rejoin the channel in 20 minutes after receiving onConnectionStateChanged(CONNECTION\\_STATE\\_RECONNECTING, CONNECTION\\_CHANGED\\_INTERRUPTED) or connectionChangedToState(AgoraConnectionStateReconnecting, AgoraConnectionChangedInterrupted), the SDK stops trying. The app of UID 1 receives the onConnectionStateChanged(CONNECTION\\_STATE\\_FAILED, CONNECTION\\_CHANGED\\_JOIN\\_FAILED) or connectionChangedToState(AgoraConnectionStateFailed, AgoraConnectionChangedJoinFailed) callback. UID 1 needs to leave the channel and call the joinChannel or joinChannelByToken method to join the channel."
  }, {
    heading: "v232-and-later",
    content: '> * If UID 2 is a Web client, the behaviors of the Web app are as follows:\n>   * When UID 1 joins and rejoins the channel, UID 2 receives the `client.on("stream-added")` callback.\n>   * If UID 2 does not receive any data from UID 1 in 10 seconds, UID 2 receives the `client.on("stream-removed")` callback.\n>   * If the server does not receive any data from UID 1 in 3 minutes, UID 2 receives the `client.on("peer-leave")` callback.\n> * Users can call `leaveChannel` to stop the retires at any time during the SDK reconnection process.'
  }, {
    heading: "process-gets-killed",
    content: "This scenario involves the following situations:"
  }, {
    heading: "process-gets-killed",
    content: "Enables or disables VoIP mode."
  }, {
    heading: "process-gets-killed",
    content: "The process gets killed."
  }, {
    heading: "process-gets-killed",
    content: "Closes a web page."
  }, {
    heading: "process-gets-killed",
    content: "Suppose UID 1 and UID 2 are in the same channel. When the process of user A gets killed:"
  }, {
    heading: "process-gets-killed",
    content: "If UID 1 is in iOS or macOS: UID 1 calls the `leaveChannel` method and UID 2 receives a callback:"
  }, {
    heading: "process-gets-killed",
    content: "Android, Windows, or Linux: UID 2 receives the `onUserOffline` callback."
  }, {
    heading: "process-gets-killed",
    content: "iOS or macOS: UID 2 receives the `didOfflineOfUid` callback."
  }, {
    heading: "process-gets-killed",
    content: 'The Web: UID 2 receives the `client.on("peer-leave")` callback.'
  }, {
    heading: "process-gets-killed",
    content: "If UID 1 is in Android, Windows, or Linux and user B uses the Native SDK:"
  }, {
    heading: "process-gets-killed",
    content: "If UID 1 does not restart the app and rejoin the original channel within 20 seconds, UID 2 receives a callback:"
  }, {
    heading: "process-gets-killed",
    content: "Android, Windows, or Linux: UID 2 receives the `onUserOffline` callback."
  }, {
    heading: "process-gets-killed",
    content: "iOS or macOS: UID 2 receives the `didOfflineOfUid` callback."
  }, {
    heading: "process-gets-killed",
    content: "If UID 1 restarts the app and rejoins the original channel within 20 seconds, UID 2 does not receive any callback function."
  }, {
    heading: "process-gets-killed",
    content: "If UID 1 is in Android, Windows, or Linux and UID 2 uses the Web SDK:"
  }, {
    heading: "process-gets-killed",
    content: 'If UID 1 does not restart the app and rejoin the original channel within 10 seconds, UID 2 receives the` client.on("stream-removed")` callback.'
  }, {
    heading: "process-gets-killed",
    content: "If UID 1 restarts the app and rejoins the original channel, UID 2 does not receive any callback."
  }, {
    heading: "process-gets-killed",
    content: "For the Web SDK, killing a process is equivalent to a user dropping offline."
  }, {
    heading: "process-gets-killed",
    content: "If UID 1 is the last user in the channel, the server destroys the channel in 10 seconds."
  }],
  headings: [{
    id: "user-drops-offline",
    content: "User drops offline"
  }, {
    id: "before-v232",
    content: "Before v2.3.2"
  }, {
    id: "v232-and-later",
    content: "v2.3.2 and Later"
  }, {
    id: "process-gets-killed",
    content: "Process Gets Killed"
  }]
};
export let toc = [{
  depth: 2,
  url: "#user-drops-offline",
  title: _jsx(_Fragment, {
    children: "User drops offline"
  })
}, {
  depth: 3,
  url: "#before-v232",
  title: _jsx(_Fragment, {
    children: "Before v2.3.2"
  })
}, {
  depth: 3,
  url: "#v232-and-later",
  title: _jsx(_Fragment, {
    children: "v2.3.2 and Later"
  })
}, {
  depth: 2,
  url: "#process-gets-killed",
  title: _jsx(_Fragment, {
    children: "Process Gets Killed"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The Agora SDK has reconnection mechanisms when a user drops offline or a process gets killed. This page shows the connection state mechanism of the Agora SDK under these circumstances."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "This article does not apply to the Agora RTC SDK Web SDK."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "user-drops-offline",
      children: "User drops offline"
    }), `
`, _jsxs(_components.p, {
      children: ["The Agora SDK adds the ", _jsx(_components.a, {
        href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged",
        children: _jsx(_components.code, {
          children: "onConnectionStateChanged"
        })
      }), " or ", _jsx(_components.a, {
        href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onconnectionstatechanged",
        children: _jsx(_components.code, {
          children: "connectionStateChangedToState"
        })
      }), " callback in v2.3.2. This callback reports the current network connection state and reasons to any state change."]
    }), `
`, _jsx(_components.h3, {
      id: "before-v232",
      children: "Before v2.3.2"
    }), `
`, _jsx(_components.p, {
      children: "The following diagram shows the callbacks received by the apps of UID 1 and UID 2 during which UID 1 joins the channel, experiences a network exception, loses connection, and rejoins the channel."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1557482391248",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: "Where:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["T0 = 0 s: The SDK receives the ", _jsx(_components.code, {
          children: "joinChannel"
        }), " or ", _jsx(_components.code, {
          children: "joinChannelByToken"
        }), " request from the app of UID 1."]
      }), `
`, _jsxs(_components.li, {
        children: ["T1 ≈ T0 + 200 ms: 200 ms after calling the ", _jsx(_components.code, {
          children: "joinChannel"
        }), " or ", _jsx(_components.code, {
          children: "joinChannelByToken"
        }), " method, the app of UID 1 joins the channel and receives the ", _jsx(_components.code, {
          children: "onJoinChannelSuccess"
        }), " or ", _jsx(_components.code, {
          children: "didJoinChannel"
        }), " callback."]
      }), `
`, _jsxs(_components.li, {
        children: ["T2 ≈ T1 + 100 ms: Due to network latency, the app of UID 2 detects UID 1 100 ms after the latter joins the channel. UID 2 receives the ", _jsx(_components.code, {
          children: "onUserJoined"
        }), " or ", _jsx(_components.code, {
          children: "didJoinedOfUid"
        }), " callback."]
      }), `
`, _jsx(_components.li, {
        children: "T3: The uplink network condition of UID 1 deteriorates. The SDK automatically tries rejoining the channel."
      }), `
`, _jsxs(_components.li, {
        children: ["T4 = T3 + 4 s: If the app of UID 1 fails to receive any data from the server in 4 seconds, it receives the ", _jsx(_components.code, {
          children: "onConnectionInterrupted"
        }), " or ", _jsx(_components.code, {
          children: "rtcEngineConnectionDidInterrupted"
        }), " callback; meanwhile the SDK continues to try rejoining the channel."]
      }), `
`, _jsxs(_components.li, {
        children: ["T5 = T3 + 10 s: If the app of UID 1 fails to receive any data from the server in 10 seconds, it receives the ", _jsx(_components.code, {
          children: "onConnectionLost"
        }), " or ", _jsx(_components.code, {
          children: "rtcEngineConnectionDidLost"
        }), " callback; meanwhile the SDK continue to try rejoining the channel."]
      }), `
`, _jsxs(_components.li, {
        children: ["T6 = T3 + 20 s: If the app of UID 2 fails to receive any data from UID 1 in 20 seconds, the SDK decides that UID 1 is offline. The app of UID 2 receives the ", _jsx(_components.code, {
          children: "onUserOffline"
        }), " or ", _jsx(_components.code, {
          children: "didOfflineOfUid"
        }), " callback."]
      }), `
`, _jsxs(_components.li, {
        children: ["T7: If the app of UID 1 successfully rejoins the channel, it receives the ", _jsx(_components.code, {
          children: "onRejoinChannelSuccess"
        }), " or ", _jsx(_components.code, {
          children: "didRejoinChannel"
        }), " callback."]
      }), `
`, _jsxs(_components.li, {
        children: ["T8 ≈ T7 + 100ms: 100 ms after the app of UID 1 successfully rejoins the channel, the app of UID 2 receives the ", _jsx(_components.code, {
          children: "onUserJoined"
        }), " or ", _jsx(_components.code, {
          children: "didJoinOfUid callback"
        }), ", which means that UID 1 is online again."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "v232-and-later",
      children: "v2.3.2 and Later"
    }), `
`, _jsx(_components.p, {
      children: "The following diagram shows the callbacks received by the apps of UID 1 and UID 2 during which UID 1 joins the channel, experiences a network exception, loses connection, and eventually fails to rejoin the channel."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1557482418517",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: "Where:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["T0 = 0 s: The SDK receives the ", _jsx(_components.code, {
          children: "joinChannel"
        }), " or ", _jsx(_components.code, {
          children: "joinChannelByToken"
        }), " request from the app of UID 1."]
      }), `
`, _jsxs(_components.li, {
        children: ["T1 ≈ T0 + 200 ms: 200 ms after calling the ", _jsx(_components.code, {
          children: "joinChannel"
        }), " or ", _jsx(_components.code, {
          children: "joinChannelByToken"
        }), " method, the app of UID 1 joins the channel. During the process, the app of UID 1 also receives the ", _jsx(_components.code, {
          children: "onConnectionStateChanged(CONNECTION_STATE_CONNECTING, CONNECTION_CHANGED_CONNECTING)"
        }), " or ", _jsx(_components.code, {
          children: "connectionChangedToState(AgoraConnectionStateConnecting, AgoraConnectionChangedConnecting)"
        }), " callback. When successfully joining the channel, app of UID 1 receives the ", _jsx(_components.code, {
          children: "onConnectionStateChanged(CONNECTION_STATE_CONNECTED, CONNECTION_CHANGED_JOIN_SUCCESS)"
        }), " or ", _jsx(_components.code, {
          children: "connectionChangedToState(AgoraConnectionStateConnected, AgoraConnectionChangedJoinSuccess)"
        }), " and ", _jsx(_components.code, {
          children: "onJoinChannelSuccess"
        }), " or ", _jsx(_components.code, {
          children: "didJoinChannel"
        }), " callbacks."]
      }), `
`, _jsxs(_components.li, {
        children: ["T2 ≈ T1 + 100 ms: Due to network latency, the app of UID 2 detects UID 1 100 ms after the latter joins the channel. UID 2 receives the ", _jsx(_components.code, {
          children: "onUserJoined"
        }), " or ", _jsx(_components.code, {
          children: "didJoinedOfUid"
        }), " callback."]
      }), `
`, _jsx(_components.li, {
        children: "T3: The uplink network condition of UID 1 deteriorates. The SDK automatically tries rejoining the channel."
      }), `
`, _jsxs(_components.li, {
        children: ["T4 = T3 + 4 s: If the app of UID 1 fails to receive any data from the server in 4 seconds, it receives the ", _jsx(_components.code, {
          children: "onConnectionStateChanged(CONNECTION_STATE_RECONNECTING, CONNECTION_CHANGED_INTERRUPTED)"
        }), " or ", _jsx(_components.code, {
          children: "connectionChangedToState(AgoraConnectionStateReconnecting, AgoraConnectionChangedInterrupted)"
        }), " callback; meanwhile the SDK continues to try rejoining the channel."]
      }), `
`, _jsx(_components.li, {
        children: "T5 = T4 + 10 s: If the app of UID 1 fails to receive any data from the server in 10 seconds after receiving onConnectionStateChanged(CONNECTION_STATE_RECONNECTING, CONNECTION_CHANGED_INTERRUPTED) or connectionChangedToState(AgoraConnectionStateReconnecting, AgoraConnectionChangedInterrupted), it receives the onConnectionLost or rtcEngineConnectionDidLost callback; meanwhile the SDK continue to try rejoining the channel."
      }), `
`, _jsxs(_components.li, {
        children: ["T6 = T3 + 20 s: If the app of UID 2 fails to receive any data from UID 1 in 20 seconds, the SDK decides that UID 1 is offline. The app of UID 2 receives the ", _jsx(_components.code, {
          children: "onUserOffline"
        }), " or ", _jsx(_components.code, {
          children: "didOfflineOfUid"
        }), " callback."]
      }), `
`, _jsx(_components.li, {
        children: "T7 = T4 + 20 min : If the app of UID 1 fails to rejoin the channel in 20 minutes after receiving onConnectionStateChanged(CONNECTION_STATE_RECONNECTING, CONNECTION_CHANGED_INTERRUPTED) or connectionChangedToState(AgoraConnectionStateReconnecting, AgoraConnectionChangedInterrupted), the SDK stops trying. The app of UID 1 receives the onConnectionStateChanged(CONNECTION_STATE_FAILED, CONNECTION_CHANGED_JOIN_FAILED) or connectionChangedToState(AgoraConnectionStateFailed, AgoraConnectionChangedJoinFailed) callback. UID 1 needs to leave the channel and call the joinChannel or joinChannelByToken method to join the channel."
      }), `
`]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["If UID 2 is a Web client, the behaviors of the Web app are as follows:", `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["When UID 1 joins and rejoins the channel, UID 2 receives the ", _jsx(_components.code, {
                children: 'client.on("stream-added")'
              }), " callback."]
            }), `
`, _jsxs(_components.li, {
              children: ["If UID 2 does not receive any data from UID 1 in 10 seconds, UID 2 receives the ", _jsx(_components.code, {
                children: 'client.on("stream-removed")'
              }), " callback."]
            }), `
`, _jsxs(_components.li, {
              children: ["If the server does not receive any data from UID 1 in 3 minutes, UID 2 receives the ", _jsx(_components.code, {
                children: 'client.on("peer-leave")'
              }), " callback."]
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: ["Users can call ", _jsx(_components.code, {
            children: "leaveChannel"
          }), " to stop the retires at any time during the SDK reconnection process."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "process-gets-killed",
      children: "Process Gets Killed"
    }), `
`, _jsx(_components.p, {
      children: "This scenario involves the following situations:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Enables or disables VoIP mode."
      }), `
`, _jsx(_components.li, {
        children: "The process gets killed."
      }), `
`, _jsx(_components.li, {
        children: "Closes a web page."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Suppose UID 1 and UID 2 are in the same channel. When the process of user A gets killed:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If UID 1 is in iOS or macOS: UID 1 calls the ", _jsx(_components.code, {
            children: "leaveChannel"
          }), " method and UID 2 receives a callback:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Android, Windows, or Linux: UID 2 receives the ", _jsx(_components.code, {
              children: "onUserOffline"
            }), " callback."]
          }), `
`, _jsxs(_components.li, {
            children: ["iOS or macOS: UID 2 receives the ", _jsx(_components.code, {
              children: "didOfflineOfUid"
            }), " callback."]
          }), `
`, _jsxs(_components.li, {
            children: ["The Web: UID 2 receives the ", _jsx(_components.code, {
              children: 'client.on("peer-leave")'
            }), " callback."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If UID 1 is in Android, Windows, or Linux and user B uses the Native SDK:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "If UID 1 does not restart the app and rejoin the original channel within 20 seconds, UID 2 receives a callback:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["Android, Windows, or Linux: UID 2 receives the ", _jsx(_components.code, {
                  children: "onUserOffline"
                }), " callback."]
              }), `
`, _jsxs(_components.li, {
                children: ["iOS or macOS: UID 2 receives the ", _jsx(_components.code, {
                  children: "didOfflineOfUid"
                }), " callback."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "If UID 1 restarts the app and rejoins the original channel within 20 seconds, UID 2 does not receive any callback function."
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
          children: "If UID 1 is in Android, Windows, or Linux and UID 2 uses the Web SDK:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If UID 1 does not restart the app and rejoin the original channel within 10 seconds, UID 2 receives the", _jsx(_components.code, {
              children: ' client.on("stream-removed")'
            }), " callback."]
          }), `
`, _jsx(_components.li, {
            children: "If UID 1 restarts the app and rejoins the original channel, UID 2 does not receive any callback."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "For the Web SDK, killing a process is equivalent to a user dropping offline."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If UID 1 is the last user in the channel, the server destroys the channel in 10 seconds."
        }), `
`]
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
