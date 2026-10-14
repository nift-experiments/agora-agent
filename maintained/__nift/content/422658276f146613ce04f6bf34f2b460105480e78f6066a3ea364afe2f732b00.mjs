import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "SDK error codes",
  description: "List common Video Calling SDK error codes, their causes, and suggested resolutions."
};
export let _markdown = `

When interacting with the Agora API, the RTC SDK may return an error code. Receiving an error code indicates that the SDK has encountered an unrecoverable error that requires intervention from your app.

This page provides descriptions for common error codes, their causes, and suggested solutions. For error codes without predefined solutions, [contact technical support](https://agora-ticket.agora.io/).

For Web SDK integrations, error delivery differs from native SDK behavior.

The error codes listed in this section apply to Agora RTC v4.x SDK on the following platforms:

* Native platforms: Android, iOS, macOS, Windows
* Third-party frameworks based on native platforms: Electron, Unity, React Native, Flutter

During SDK operation, error codes may be returned in the following ways:

* For Web SDK integrations:
  * Asynchronous methods return a Promise, and the SDK throws the corresponding error when the Promise is rejected.
  * Synchronous method failures throw an error directly.
  * Some network-related errors may also be thrown during internal SDK operation.
* For native SDK integrations:
  * In the return value of a failed method call
  * Through the \`onError\` callback

<CalloutContainer type="info">
  <CalloutDescription>
    - When the SDK returns an error code, it may return a negative number. This negative number corresponds to the positive integer in the error code. For example, \`-2\` corresponds to \`2\`.
    - The API names in this article are based on the C++ API. API names for other platforms may differ. Refer to the API documentation for the corresponding platform.
  </CalloutDescription>
</CalloutContainer>

## Common error codes [#common-error-codes]

| Error code | Description                                                                                                                                                                                                                         |
| :--------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     \`1\`    | General error with no clearly categorized cause. Call the method again.                                                                                                                                                             |
|     \`2\`    | An invalid parameter was set in the method. For example, the channel name contains illegal characters. Reset the parameters.                                                                                                        |
|     \`3\`    | The SDK is not ready yet. Common reasons include failed \`RtcEngine\` initialization, calling methods before joining a channel, calling \`rate\` or \`complain\` before leaving a channel, audio module disabled, or incomplete assembly. |
|     \`4\`    | The current \`RtcEngine\` state does not support this operation. For example, an incorrect encryption mode was set or an external encryption library failed to load.                                                                  |
|     \`5\`    | The method call is rejected. Common reasons include failed \`RtcEngine\` initialization, empty channel name, or duplicated channel name in multi-channel scenarios.                                                                   |
|     \`6\`    | The buffer size is not large enough to hold the returned data.                                                                                                                                                                      |
|     \`7\`    | The method is called before \`RtcEngine\` is initialized.                                                                                                                                                                             |
|     \`8\`    | The current state is invalid. Check SDK callback logs to identify the exact reason.                                                                                                                                                 |
|     \`9\`    | There is no permission to operate. Check whether the app has permission to use audio or video devices.                                                                                                                              |
|    \`10\`    | Method call timed out.                                                                                                                                                                                                              |
|    \`17\`    | Joining a channel is rejected. Common reasons include already being in the channel or trying to join before ending an echo test.                                                                                                    |
|    \`18\`    | Failed to leave the channel. Common reasons include calling leave twice or calling leave before joining.                                                                                                                            |
|    \`19\`    | The resource is occupied and cannot be reused.                                                                                                                                                                                      |
|    \`20\`    | The SDK abandons the request, possibly due to too many requests.                                                                                                                                                                    |
|    \`21\`    | Specific firewall settings on Windows cause \`RtcEngine\` initialization to fail and then crash.                                                                                                                                      |
|    \`22\`    | The SDK failed to allocate resources, possibly because the app or system has exhausted them.                                                                                                                                        |
|    \`101\`   | Invalid App ID. Rejoin the channel with a valid App ID.                                                                                                                                                                             |
|    \`102\`   | Invalid channel name.                                                                                                                                                                                                               |
|    \`103\`   | Cannot get server resources for the current region. Try a different region when initializing \`RtcEngine\`.                                                                                                                           |
|    \`109\`   | The current token has expired and is no longer valid. Generate a new token on the server and call \`renewToken\`.                                                                                                                     |
|    \`110\`   | Token is invalid. Common reasons include App Certificate enabled without token auth, or token UID mismatch.                                                                                                                         |
|    \`111\`   | The network connection is interrupted for more than 4 seconds after the SDK established a connection with the server.                                                                                                               |
|    \`112\`   | Network connection lost. The SDK could not reconnect to the server within 10 seconds.                                                                                                                                               |
|    \`119\`   | User failed to switch roles. Try to rejoin the channel.                                                                                                                                                                             |
|    \`120\`   | Decryption failed. The user may have used the wrong password when joining the channel.                                                                                                                                              |
|    \`121\`   | Invalid user ID.                                                                                                                                                                                                                    |
|    \`123\`   | The user has been banned by the server.                                                                                                                                                                                             |
|    \`134\`   | Invalid user account, possibly because invalid parameters are set.                                                                                                                                                                  |

<CalloutContainer type="info">
  <CalloutDescription>
    \`109\` and \`110\` are deprecated as standalone signals. The SDK now reports equivalent token issues through \`onConnectionStateChanged\`.
  </CalloutDescription>
</CalloutContainer>

## Audio-related error codes [#audio-related-error-codes]

| Error code | Description                                                                                                                       |
| :--------: | --------------------------------------------------------------------------------------------------------------------------------- |
|   \`1005\`   | An unspecified audio device error occurred. Check if the audio device is occupied by another application or re-enter the channel. |
|   \`1008\`   | Failed to initialize the playback device.                                                                                         |
|   \`1009\`   | Failed to start the playback device.                                                                                              |
|   \`1010\`   | Failed to stop the playback device.                                                                                               |
|   \`1011\`   | Failed to initialize the recording device.                                                                                        |
|   \`1012\`   | Failed to start the recording device.                                                                                             |
|   \`1013\`   | Failed to stop the recording device.                                                                                              |

## Data stream-related error codes [#data-stream-related-error-codes]

| Error code | Description                                                                |
| :--------: | -------------------------------------------------------------------------- |
|    \`113\`   | The user was not in the channel when \`sendStreamMessage\` was called.       |
|    \`114\`   | The data sent with \`sendStreamMessage\` exceeded 1024 bytes.                |
|    \`115\`   | The sending frequency of \`sendStreamMessage\` exceeded the limit of 6 KB/s. |
|    \`116\`   | Too many data streams were created. The limit is 5.                        |
|    \`117\`   | Data stream send timeout.                                                  |

## Other error codes [#other-error-codes]

| Error code | Description                                                         |
| :--------: | ------------------------------------------------------------------- |
|    \`130\`   | The SDK does not support pushing encrypted streams to a CDN.        |
|   \`1001\`   | Failed to load the media engine.                                    |
|   \`1501\`   | There is no permission to use the camera. Check camera permissions. |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When interacting with the Agora API, the RTC SDK may return an error code. Receiving an error code indicates that the SDK has encountered an unrecoverable error that requires intervention from your app."
  }, {
    heading: undefined,
    content: "This page provides descriptions for common error codes, their causes, and suggested solutions. For error codes without predefined solutions, contact technical support."
  }, {
    heading: undefined,
    content: "For Web SDK integrations, error delivery differs from native SDK behavior."
  }, {
    heading: undefined,
    content: "The error codes listed in this section apply to Agora RTC v4.x SDK on the following platforms:"
  }, {
    heading: undefined,
    content: "Native platforms: Android, iOS, macOS, Windows"
  }, {
    heading: undefined,
    content: "Third-party frameworks based on native platforms: Electron, Unity, React Native, Flutter"
  }, {
    heading: undefined,
    content: "During SDK operation, error codes may be returned in the following ways:"
  }, {
    heading: undefined,
    content: "For Web SDK integrations:"
  }, {
    heading: undefined,
    content: "Asynchronous methods return a Promise, and the SDK throws the corresponding error when the Promise is rejected."
  }, {
    heading: undefined,
    content: "Synchronous method failures throw an error directly."
  }, {
    heading: undefined,
    content: "Some network-related errors may also be thrown during internal SDK operation."
  }, {
    heading: undefined,
    content: "For native SDK integrations:"
  }, {
    heading: undefined,
    content: "In the return value of a failed method call"
  }, {
    heading: undefined,
    content: "Through the `onError` callback"
  }, {
    heading: undefined,
    content: "When the SDK returns an error code, it may return a negative number. This negative number corresponds to the positive integer in the error code. For example, `-2` corresponds to `2`."
  }, {
    heading: undefined,
    content: "The API names in this article are based on the C++ API. API names for other platforms may differ. Refer to the API documentation for the corresponding platform."
  }, {
    heading: "common-error-codes",
    content: "Error code"
  }, {
    heading: "common-error-codes",
    content: "Description"
  }, {
    heading: "common-error-codes",
    content: "`1`"
  }, {
    heading: "common-error-codes",
    content: "General error with no clearly categorized cause. Call the method again."
  }, {
    heading: "common-error-codes",
    content: "`2`"
  }, {
    heading: "common-error-codes",
    content: "An invalid parameter was set in the method. For example, the channel name contains illegal characters. Reset the parameters."
  }, {
    heading: "common-error-codes",
    content: "`3`"
  }, {
    heading: "common-error-codes",
    content: "The SDK is not ready yet. Common reasons include failed `RtcEngine` initialization, calling methods before joining a channel, calling `rate` or `complain` before leaving a channel, audio module disabled, or incomplete assembly."
  }, {
    heading: "common-error-codes",
    content: "`4`"
  }, {
    heading: "common-error-codes",
    content: "The current `RtcEngine` state does not support this operation. For example, an incorrect encryption mode was set or an external encryption library failed to load."
  }, {
    heading: "common-error-codes",
    content: "`5`"
  }, {
    heading: "common-error-codes",
    content: "The method call is rejected. Common reasons include failed `RtcEngine` initialization, empty channel name, or duplicated channel name in multi-channel scenarios."
  }, {
    heading: "common-error-codes",
    content: "`6`"
  }, {
    heading: "common-error-codes",
    content: "The buffer size is not large enough to hold the returned data."
  }, {
    heading: "common-error-codes",
    content: "`7`"
  }, {
    heading: "common-error-codes",
    content: "The method is called before `RtcEngine` is initialized."
  }, {
    heading: "common-error-codes",
    content: "`8`"
  }, {
    heading: "common-error-codes",
    content: "The current state is invalid. Check SDK callback logs to identify the exact reason."
  }, {
    heading: "common-error-codes",
    content: "`9`"
  }, {
    heading: "common-error-codes",
    content: "There is no permission to operate. Check whether the app has permission to use audio or video devices."
  }, {
    heading: "common-error-codes",
    content: "`10`"
  }, {
    heading: "common-error-codes",
    content: "Method call timed out."
  }, {
    heading: "common-error-codes",
    content: "`17`"
  }, {
    heading: "common-error-codes",
    content: "Joining a channel is rejected. Common reasons include already being in the channel or trying to join before ending an echo test."
  }, {
    heading: "common-error-codes",
    content: "`18`"
  }, {
    heading: "common-error-codes",
    content: "Failed to leave the channel. Common reasons include calling leave twice or calling leave before joining."
  }, {
    heading: "common-error-codes",
    content: "`19`"
  }, {
    heading: "common-error-codes",
    content: "The resource is occupied and cannot be reused."
  }, {
    heading: "common-error-codes",
    content: "`20`"
  }, {
    heading: "common-error-codes",
    content: "The SDK abandons the request, possibly due to too many requests."
  }, {
    heading: "common-error-codes",
    content: "`21`"
  }, {
    heading: "common-error-codes",
    content: "Specific firewall settings on Windows cause `RtcEngine` initialization to fail and then crash."
  }, {
    heading: "common-error-codes",
    content: "`22`"
  }, {
    heading: "common-error-codes",
    content: "The SDK failed to allocate resources, possibly because the app or system has exhausted them."
  }, {
    heading: "common-error-codes",
    content: "`101`"
  }, {
    heading: "common-error-codes",
    content: "Invalid App ID. Rejoin the channel with a valid App ID."
  }, {
    heading: "common-error-codes",
    content: "`102`"
  }, {
    heading: "common-error-codes",
    content: "Invalid channel name."
  }, {
    heading: "common-error-codes",
    content: "`103`"
  }, {
    heading: "common-error-codes",
    content: "Cannot get server resources for the current region. Try a different region when initializing `RtcEngine`."
  }, {
    heading: "common-error-codes",
    content: "`109`"
  }, {
    heading: "common-error-codes",
    content: "The current token has expired and is no longer valid. Generate a new token on the server and call `renewToken`."
  }, {
    heading: "common-error-codes",
    content: "`110`"
  }, {
    heading: "common-error-codes",
    content: "Token is invalid. Common reasons include App Certificate enabled without token auth, or token UID mismatch."
  }, {
    heading: "common-error-codes",
    content: "`111`"
  }, {
    heading: "common-error-codes",
    content: "The network connection is interrupted for more than 4 seconds after the SDK established a connection with the server."
  }, {
    heading: "common-error-codes",
    content: "`112`"
  }, {
    heading: "common-error-codes",
    content: "Network connection lost. The SDK could not reconnect to the server within 10 seconds."
  }, {
    heading: "common-error-codes",
    content: "`119`"
  }, {
    heading: "common-error-codes",
    content: "User failed to switch roles. Try to rejoin the channel."
  }, {
    heading: "common-error-codes",
    content: "`120`"
  }, {
    heading: "common-error-codes",
    content: "Decryption failed. The user may have used the wrong password when joining the channel."
  }, {
    heading: "common-error-codes",
    content: "`121`"
  }, {
    heading: "common-error-codes",
    content: "Invalid user ID."
  }, {
    heading: "common-error-codes",
    content: "`123`"
  }, {
    heading: "common-error-codes",
    content: "The user has been banned by the server."
  }, {
    heading: "common-error-codes",
    content: "`134`"
  }, {
    heading: "common-error-codes",
    content: "Invalid user account, possibly because invalid parameters are set."
  }, {
    heading: "common-error-codes",
    content: "`109` and `110` are deprecated as standalone signals. The SDK now reports equivalent token issues through `onConnectionStateChanged`."
  }, {
    heading: "audio-related-error-codes",
    content: "Error code"
  }, {
    heading: "audio-related-error-codes",
    content: "Description"
  }, {
    heading: "audio-related-error-codes",
    content: "`1005`"
  }, {
    heading: "audio-related-error-codes",
    content: "An unspecified audio device error occurred. Check if the audio device is occupied by another application or re-enter the channel."
  }, {
    heading: "audio-related-error-codes",
    content: "`1008`"
  }, {
    heading: "audio-related-error-codes",
    content: "Failed to initialize the playback device."
  }, {
    heading: "audio-related-error-codes",
    content: "`1009`"
  }, {
    heading: "audio-related-error-codes",
    content: "Failed to start the playback device."
  }, {
    heading: "audio-related-error-codes",
    content: "`1010`"
  }, {
    heading: "audio-related-error-codes",
    content: "Failed to stop the playback device."
  }, {
    heading: "audio-related-error-codes",
    content: "`1011`"
  }, {
    heading: "audio-related-error-codes",
    content: "Failed to initialize the recording device."
  }, {
    heading: "audio-related-error-codes",
    content: "`1012`"
  }, {
    heading: "audio-related-error-codes",
    content: "Failed to start the recording device."
  }, {
    heading: "audio-related-error-codes",
    content: "`1013`"
  }, {
    heading: "audio-related-error-codes",
    content: "Failed to stop the recording device."
  }, {
    heading: "data-stream-related-error-codes",
    content: "Error code"
  }, {
    heading: "data-stream-related-error-codes",
    content: "Description"
  }, {
    heading: "data-stream-related-error-codes",
    content: "`113`"
  }, {
    heading: "data-stream-related-error-codes",
    content: "The user was not in the channel when `sendStreamMessage` was called."
  }, {
    heading: "data-stream-related-error-codes",
    content: "`114`"
  }, {
    heading: "data-stream-related-error-codes",
    content: "The data sent with `sendStreamMessage` exceeded 1024 bytes."
  }, {
    heading: "data-stream-related-error-codes",
    content: "`115`"
  }, {
    heading: "data-stream-related-error-codes",
    content: "The sending frequency of `sendStreamMessage` exceeded the limit of 6 KB/s."
  }, {
    heading: "data-stream-related-error-codes",
    content: "`116`"
  }, {
    heading: "data-stream-related-error-codes",
    content: "Too many data streams were created. The limit is 5."
  }, {
    heading: "data-stream-related-error-codes",
    content: "`117`"
  }, {
    heading: "data-stream-related-error-codes",
    content: "Data stream send timeout."
  }, {
    heading: "other-error-codes",
    content: "Error code"
  }, {
    heading: "other-error-codes",
    content: "Description"
  }, {
    heading: "other-error-codes",
    content: "`130`"
  }, {
    heading: "other-error-codes",
    content: "The SDK does not support pushing encrypted streams to a CDN."
  }, {
    heading: "other-error-codes",
    content: "`1001`"
  }, {
    heading: "other-error-codes",
    content: "Failed to load the media engine."
  }, {
    heading: "other-error-codes",
    content: "`1501`"
  }, {
    heading: "other-error-codes",
    content: "There is no permission to use the camera. Check camera permissions."
  }],
  headings: [{
    id: "common-error-codes",
    content: "Common error codes"
  }, {
    id: "audio-related-error-codes",
    content: "Audio-related error codes"
  }, {
    id: "data-stream-related-error-codes",
    content: "Data stream-related error codes"
  }, {
    id: "other-error-codes",
    content: "Other error codes"
  }]
};
export let toc = [{
  depth: 2,
  url: "#common-error-codes",
  title: _jsx(_Fragment, {
    children: "Common error codes"
  })
}, {
  depth: 2,
  url: "#audio-related-error-codes",
  title: _jsx(_Fragment, {
    children: "Audio-related error codes"
  })
}, {
  depth: 2,
  url: "#data-stream-related-error-codes",
  title: _jsx(_Fragment, {
    children: "Data stream-related error codes"
  })
}, {
  depth: 2,
  url: "#other-error-codes",
  title: _jsx(_Fragment, {
    children: "Other error codes"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
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
    children: [_jsx(_components.p, {
      children: "When interacting with the Agora API, the RTC SDK may return an error code. Receiving an error code indicates that the SDK has encountered an unrecoverable error that requires intervention from your app."
    }), `
`, _jsxs(_components.p, {
      children: ["This page provides descriptions for common error codes, their causes, and suggested solutions. For error codes without predefined solutions, ", _jsx(_components.a, {
        href: "https://agora-ticket.agora.io/",
        children: "contact technical support"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "For Web SDK integrations, error delivery differs from native SDK behavior."
    }), `
`, _jsx(_components.p, {
      children: "The error codes listed in this section apply to Agora RTC v4.x SDK on the following platforms:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Native platforms: Android, iOS, macOS, Windows"
      }), `
`, _jsx(_components.li, {
        children: "Third-party frameworks based on native platforms: Electron, Unity, React Native, Flutter"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "During SDK operation, error codes may be returned in the following ways:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["For Web SDK integrations:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Asynchronous methods return a Promise, and the SDK throws the corresponding error when the Promise is rejected."
          }), `
`, _jsx(_components.li, {
            children: "Synchronous method failures throw an error directly."
          }), `
`, _jsx(_components.li, {
            children: "Some network-related errors may also be thrown during internal SDK operation."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["For native SDK integrations:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "In the return value of a failed method call"
          }), `
`, _jsxs(_components.li, {
            children: ["Through the ", _jsx(_components.code, {
              children: "onError"
            }), " callback"]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["When the SDK returns an error code, it may return a negative number. This negative number corresponds to the positive integer in the error code. For example, ", _jsx(_components.code, {
              children: "-2"
            }), " corresponds to ", _jsx(_components.code, {
              children: "2"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "The API names in this article are based on the C++ API. API names for other platforms may differ. Refer to the API documentation for the corresponding platform."
          }), `
`]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "common-error-codes",
      children: "Common error codes"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Error code"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "1"
            })
          }), _jsx(_components.td, {
            children: "General error with no clearly categorized cause. Call the method again."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "2"
            })
          }), _jsx(_components.td, {
            children: "An invalid parameter was set in the method. For example, the channel name contains illegal characters. Reset the parameters."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "3"
            })
          }), _jsxs(_components.td, {
            children: ["The SDK is not ready yet. Common reasons include failed ", _jsx(_components.code, {
              children: "RtcEngine"
            }), " initialization, calling methods before joining a channel, calling ", _jsx(_components.code, {
              children: "rate"
            }), " or ", _jsx(_components.code, {
              children: "complain"
            }), " before leaving a channel, audio module disabled, or incomplete assembly."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "4"
            })
          }), _jsxs(_components.td, {
            children: ["The current ", _jsx(_components.code, {
              children: "RtcEngine"
            }), " state does not support this operation. For example, an incorrect encryption mode was set or an external encryption library failed to load."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "5"
            })
          }), _jsxs(_components.td, {
            children: ["The method call is rejected. Common reasons include failed ", _jsx(_components.code, {
              children: "RtcEngine"
            }), " initialization, empty channel name, or duplicated channel name in multi-channel scenarios."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "6"
            })
          }), _jsx(_components.td, {
            children: "The buffer size is not large enough to hold the returned data."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "7"
            })
          }), _jsxs(_components.td, {
            children: ["The method is called before ", _jsx(_components.code, {
              children: "RtcEngine"
            }), " is initialized."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "8"
            })
          }), _jsx(_components.td, {
            children: "The current state is invalid. Check SDK callback logs to identify the exact reason."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "9"
            })
          }), _jsx(_components.td, {
            children: "There is no permission to operate. Check whether the app has permission to use audio or video devices."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "10"
            })
          }), _jsx(_components.td, {
            children: "Method call timed out."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "17"
            })
          }), _jsx(_components.td, {
            children: "Joining a channel is rejected. Common reasons include already being in the channel or trying to join before ending an echo test."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "18"
            })
          }), _jsx(_components.td, {
            children: "Failed to leave the channel. Common reasons include calling leave twice or calling leave before joining."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "19"
            })
          }), _jsx(_components.td, {
            children: "The resource is occupied and cannot be reused."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "20"
            })
          }), _jsx(_components.td, {
            children: "The SDK abandons the request, possibly due to too many requests."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "21"
            })
          }), _jsxs(_components.td, {
            children: ["Specific firewall settings on Windows cause ", _jsx(_components.code, {
              children: "RtcEngine"
            }), " initialization to fail and then crash."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "22"
            })
          }), _jsx(_components.td, {
            children: "The SDK failed to allocate resources, possibly because the app or system has exhausted them."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "101"
            })
          }), _jsx(_components.td, {
            children: "Invalid App ID. Rejoin the channel with a valid App ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "102"
            })
          }), _jsx(_components.td, {
            children: "Invalid channel name."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "103"
            })
          }), _jsxs(_components.td, {
            children: ["Cannot get server resources for the current region. Try a different region when initializing ", _jsx(_components.code, {
              children: "RtcEngine"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "109"
            })
          }), _jsxs(_components.td, {
            children: ["The current token has expired and is no longer valid. Generate a new token on the server and call ", _jsx(_components.code, {
              children: "renewToken"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "110"
            })
          }), _jsx(_components.td, {
            children: "Token is invalid. Common reasons include App Certificate enabled without token auth, or token UID mismatch."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "111"
            })
          }), _jsx(_components.td, {
            children: "The network connection is interrupted for more than 4 seconds after the SDK established a connection with the server."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "112"
            })
          }), _jsx(_components.td, {
            children: "Network connection lost. The SDK could not reconnect to the server within 10 seconds."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "119"
            })
          }), _jsx(_components.td, {
            children: "User failed to switch roles. Try to rejoin the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "120"
            })
          }), _jsx(_components.td, {
            children: "Decryption failed. The user may have used the wrong password when joining the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "121"
            })
          }), _jsx(_components.td, {
            children: "Invalid user ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "123"
            })
          }), _jsx(_components.td, {
            children: "The user has been banned by the server."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "134"
            })
          }), _jsx(_components.td, {
            children: "Invalid user account, possibly because invalid parameters are set."
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "109"
          }), " and ", _jsx(_components.code, {
            children: "110"
          }), " are deprecated as standalone signals. The SDK now reports equivalent token issues through ", _jsx(_components.code, {
            children: "onConnectionStateChanged"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "audio-related-error-codes",
      children: "Audio-related error codes"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Error code"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "1005"
            })
          }), _jsx(_components.td, {
            children: "An unspecified audio device error occurred. Check if the audio device is occupied by another application or re-enter the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "1008"
            })
          }), _jsx(_components.td, {
            children: "Failed to initialize the playback device."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "1009"
            })
          }), _jsx(_components.td, {
            children: "Failed to start the playback device."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "1010"
            })
          }), _jsx(_components.td, {
            children: "Failed to stop the playback device."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "1011"
            })
          }), _jsx(_components.td, {
            children: "Failed to initialize the recording device."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "1012"
            })
          }), _jsx(_components.td, {
            children: "Failed to start the recording device."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "1013"
            })
          }), _jsx(_components.td, {
            children: "Failed to stop the recording device."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "data-stream-related-error-codes",
      children: "Data stream-related error codes"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Error code"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "113"
            })
          }), _jsxs(_components.td, {
            children: ["The user was not in the channel when ", _jsx(_components.code, {
              children: "sendStreamMessage"
            }), " was called."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "114"
            })
          }), _jsxs(_components.td, {
            children: ["The data sent with ", _jsx(_components.code, {
              children: "sendStreamMessage"
            }), " exceeded 1024 bytes."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "115"
            })
          }), _jsxs(_components.td, {
            children: ["The sending frequency of ", _jsx(_components.code, {
              children: "sendStreamMessage"
            }), " exceeded the limit of 6 KB/s."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "116"
            })
          }), _jsx(_components.td, {
            children: "Too many data streams were created. The limit is 5."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "117"
            })
          }), _jsx(_components.td, {
            children: "Data stream send timeout."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "other-error-codes",
      children: "Other error codes"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Error code"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "130"
            })
          }), _jsx(_components.td, {
            children: "The SDK does not support pushing encrypted streams to a CDN."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "1001"
            })
          }), _jsx(_components.td, {
            children: "Failed to load the media engine."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "1501"
            })
          }), _jsx(_components.td, {
            children: "There is no permission to use the camera. Check camera permissions."
          })]
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
