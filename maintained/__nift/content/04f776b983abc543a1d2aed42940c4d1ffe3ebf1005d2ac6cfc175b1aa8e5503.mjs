import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why can't I answer calls through a Bluetooth device after connecting it to an iOS or Android device?"
};
export let _markdown = `

After connecting a Bluetooth device to an iOS or Android device, you may encounter the following issues:

* Failure to answer calls through a Bluetooth headset.
* Cannot record and play audio through a Bluetooth speaker.

## iOS devices [#ios-devices]

### Reason [#reason]

The possible reasons include:

1. The iOS system selects audio routes for phone and VoIP calls, and the default audio routes are different from what you expect. Phone calls also include FaceTime calls and other calls implemented with CallKit.

   **The default audio route for a phone call after connecting an iOS device to a Bluetooth device:**

   * After tapping the answer button on iPhone, the default audio route is the iPhone speaker.
   * After tapping the answer button on a Bluetooth device, the default audio route is the Bluetooth device.

   **The default audio route for a VoIP call after connecting an iOS device to a Bluetooth device:**

   * If a user has answered phone calls, the default audio route is the one used by the last phone or VoIP call.
   * If a user has not answered any phone call, the default audio route is the Bluetooth device.

   If the default settings mentioned above conflict with the audio routes you want, you need to change them when connecting your iOS device to a Bluetooth device. For details, see [Solutions](#solution).

2. On an iOS device, the audio route for audio inputs and outputs must be the same. If you set the Bluetooth device as the audio route for recording, the system switches the audio route for playback to the Bluetooth device accordingly.

3. A Bluetooth speaker can only record audio during a system phone call. If the app does not use the CallKit, the following happens:
   * Users who send audio streams cannot record or play audio through the Bluetooth speaker.
   * Users who only receive audio streams can only play audio through the Bluetooth speaker.

\\###Solutions

Depending on which type of call you have an issue with, choose one of the following solutions to set the audio routes:

**Phone call**

* Before answering a phone call, change the audio route setting in **Settings**: swipe down to reveal the search field, search **Call Audio Routing**, and change the audio route to **Bluetooth Headset**. All incoming calls will be answered through the Bluetooth device even if you press the answer button on the iPhone.

![](https://web-cdn.agora.io/docs-files/1599030765099) ![](https://web-cdn.agora.io/docs-files/1599030771759)

* During a phone call, you can switch between the **Bluetooth Headset**, **Handset**, or **Speaker** options in the call interface.
* If you connect an iOS device to a Bluetooth speaker and answer calls in an app, ensure that the app uses the CallKit, otherwise, the above settings do not work.

**VoIP call**

* Before making a VoIP call, you need to switch to the **Bluetooth Headset** mode in the **Control Center**. Apps can call the iOS native API \`setPreferredInput\` method to change the audio route.
* When a VoIP call through the Bluetooth device is interrupted by a phone call, tap the answer button on the Bluetooth device to answer the phone call, after which you can continue the VoIP call through the Bluetooth device once the phone call ends.

## Android devices [#android-devices]

### Reasons [#reasons]

1. Permissions to access the Bluetooth device are not added in the \`AndroidManifest.xml\` file.

2. Only the Bluetooth device that supports SCO can record and play audio. If the Bluetooth device supports only A2DP, then it cannot record audio, which means it cannot be used to answer a phone call.

3. You can route audio to a Bluetooth device only if the Android device supports the use of SCO for off-call use cases.

### Solutions [#solutions]

1. Add the following lines in the \`AndroidManifest.xml\` file to request permissions to access the Bluetooth device:

   \`\`\`html
   <uses-permission android:name="android.permission.BLUETOOTH" />
   <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
   <uses-permission android:name="android.permission.READ_PHONE_STATE" />
   <!-- Add the following permission on devices running Android 12.0 or later -->
   <uses-permission android:name="android.permission.BLUETOOTH_CONNECT"  />
   \`\`\`

2. Check if the Bluetooth device supports SCO. If not, switch to a SCO-capable Bluetooth device.

3. Call the Android native API \`AudioManmager.isBluetoothScoAvailableOffCall\` method to check if the device supports the use of SCO for off-call use cases. If the device does not support the feature, the user can only answer the call using the system default audio route.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "After connecting a Bluetooth device to an iOS or Android device, you may encounter the following issues:"
  }, {
    heading: undefined,
    content: "Failure to answer calls through a Bluetooth headset."
  }, {
    heading: undefined,
    content: "Cannot record and play audio through a Bluetooth speaker."
  }, {
    heading: "reason",
    content: "The possible reasons include:"
  }, {
    heading: "reason",
    content: "The iOS system selects audio routes for phone and VoIP calls, and the default audio routes are different from what you expect. Phone calls also include FaceTime calls and other calls implemented with CallKit."
  }, {
    heading: "reason",
    content: "**The default audio route for a phone call after connecting an iOS device to a Bluetooth device:**"
  }, {
    heading: "reason",
    content: "After tapping the answer button on iPhone, the default audio route is the iPhone speaker."
  }, {
    heading: "reason",
    content: "After tapping the answer button on a Bluetooth device, the default audio route is the Bluetooth device."
  }, {
    heading: "reason",
    content: "**The default audio route for a VoIP call after connecting an iOS device to a Bluetooth device:**"
  }, {
    heading: "reason",
    content: "If a user has answered phone calls, the default audio route is the one used by the last phone or VoIP call."
  }, {
    heading: "reason",
    content: "If a user has not answered any phone call, the default audio route is the Bluetooth device."
  }, {
    heading: "reason",
    content: "If the default settings mentioned above conflict with the audio routes you want, you need to change them when connecting your iOS device to a Bluetooth device. For details, see Solutions."
  }, {
    heading: "reason",
    content: "On an iOS device, the audio route for audio inputs and outputs must be the same. If you set the Bluetooth device as the audio route for recording, the system switches the audio route for playback to the Bluetooth device accordingly."
  }, {
    heading: "reason",
    content: "A Bluetooth speaker can only record audio during a system phone call. If the app does not use the CallKit, the following happens:"
  }, {
    heading: "reason",
    content: "Users who send audio streams cannot record or play audio through the Bluetooth speaker."
  }, {
    heading: "reason",
    content: "Users who only receive audio streams can only play audio through the Bluetooth speaker."
  }, {
    heading: "reason",
    content: "\\###Solutions"
  }, {
    heading: "reason",
    content: "Depending on which type of call you have an issue with, choose one of the following solutions to set the audio routes:"
  }, {
    heading: "reason",
    content: "**Phone call**"
  }, {
    heading: "reason",
    content: "Before answering a phone call, change the audio route setting in **Settings**: swipe down to reveal the search field, search **Call Audio Routing**, and change the audio route to **Bluetooth Headset**. All incoming calls will be answered through the Bluetooth device even if you press the answer button on the iPhone."
  }, {
    heading: "reason",
    content: "During a phone call, you can switch between the **Bluetooth Headset**, **Handset**, or **Speaker** options in the call interface."
  }, {
    heading: "reason",
    content: "If you connect an iOS device to a Bluetooth speaker and answer calls in an app, ensure that the app uses the CallKit, otherwise, the above settings do not work."
  }, {
    heading: "reason",
    content: "**VoIP call**"
  }, {
    heading: "reason",
    content: "Before making a VoIP call, you need to switch to the **Bluetooth Headset** mode in the **Control Center**. Apps can call the iOS native API `setPreferredInput` method to change the audio route."
  }, {
    heading: "reason",
    content: "When a VoIP call through the Bluetooth device is interrupted by a phone call, tap the answer button on the Bluetooth device to answer the phone call, after which you can continue the VoIP call through the Bluetooth device once the phone call ends."
  }, {
    heading: "reasons",
    content: "Permissions to access the Bluetooth device are not added in the `AndroidManifest.xml` file."
  }, {
    heading: "reasons",
    content: "Only the Bluetooth device that supports SCO can record and play audio. If the Bluetooth device supports only A2DP, then it cannot record audio, which means it cannot be used to answer a phone call."
  }, {
    heading: "reasons",
    content: "You can route audio to a Bluetooth device only if the Android device supports the use of SCO for off-call use cases."
  }, {
    heading: "solutions",
    content: "Add the following lines in the `AndroidManifest.xml` file to request permissions to access the Bluetooth device:"
  }, {
    heading: "solutions",
    content: "Check if the Bluetooth device supports SCO. If not, switch to a SCO-capable Bluetooth device."
  }, {
    heading: "solutions",
    content: "Call the Android native API `AudioManmager.isBluetoothScoAvailableOffCall` method to check if the device supports the use of SCO for off-call use cases. If the device does not support the feature, the user can only answer the call using the system default audio route."
  }],
  headings: [{
    id: "ios-devices",
    content: "iOS devices"
  }, {
    id: "reason",
    content: "Reason"
  }, {
    id: "android-devices",
    content: "Android devices"
  }, {
    id: "reasons",
    content: "Reasons"
  }, {
    id: "solutions",
    content: "Solutions"
  }]
};
export let toc = [{
  depth: 2,
  url: "#ios-devices",
  title: _jsx(_Fragment, {
    children: "iOS devices"
  })
}, {
  depth: 3,
  url: "#reason",
  title: _jsx(_Fragment, {
    children: "Reason"
  })
}, {
  depth: 2,
  url: "#android-devices",
  title: _jsx(_Fragment, {
    children: "Android devices"
  })
}, {
  depth: 3,
  url: "#reasons",
  title: _jsx(_Fragment, {
    children: "Reasons"
  })
}, {
  depth: 3,
  url: "#solutions",
  title: _jsx(_Fragment, {
    children: "Solutions"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "After connecting a Bluetooth device to an iOS or Android device, you may encounter the following issues:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Failure to answer calls through a Bluetooth headset."
      }), `
`, _jsx(_components.li, {
        children: "Cannot record and play audio through a Bluetooth speaker."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "ios-devices",
      children: "iOS devices"
    }), `
`, _jsx(_components.h3, {
      id: "reason",
      children: "Reason"
    }), `
`, _jsx(_components.p, {
      children: "The possible reasons include:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The iOS system selects audio routes for phone and VoIP calls, and the default audio routes are different from what you expect. Phone calls also include FaceTime calls and other calls implemented with CallKit."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "The default audio route for a phone call after connecting an iOS device to a Bluetooth device:"
          })
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "After tapping the answer button on iPhone, the default audio route is the iPhone speaker."
          }), `
`, _jsx(_components.li, {
            children: "After tapping the answer button on a Bluetooth device, the default audio route is the Bluetooth device."
          }), `
`]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "The default audio route for a VoIP call after connecting an iOS device to a Bluetooth device:"
          })
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "If a user has answered phone calls, the default audio route is the one used by the last phone or VoIP call."
          }), `
`, _jsx(_components.li, {
            children: "If a user has not answered any phone call, the default audio route is the Bluetooth device."
          }), `
`]
        }), `
`, _jsxs(_components.p, {
          children: ["If the default settings mentioned above conflict with the audio routes you want, you need to change them when connecting your iOS device to a Bluetooth device. For details, see ", _jsx(_components.a, {
            href: "#solution",
            children: "Solutions"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "On an iOS device, the audio route for audio inputs and outputs must be the same. If you set the Bluetooth device as the audio route for recording, the system switches the audio route for playback to the Bluetooth device accordingly."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "A Bluetooth speaker can only record audio during a system phone call. If the app does not use the CallKit, the following happens:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Users who send audio streams cannot record or play audio through the Bluetooth speaker."
          }), `
`, _jsx(_components.li, {
            children: "Users who only receive audio streams can only play audio through the Bluetooth speaker."
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "###Solutions"
    }), `
`, _jsx(_components.p, {
      children: "Depending on which type of call you have an issue with, choose one of the following solutions to set the audio routes:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Phone call"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Before answering a phone call, change the audio route setting in ", _jsx(_components.strong, {
          children: "Settings"
        }), ": swipe down to reveal the search field, search ", _jsx(_components.strong, {
          children: "Call Audio Routing"
        }), ", and change the audio route to ", _jsx(_components.strong, {
          children: "Bluetooth Headset"
        }), ". All incoming calls will be answered through the Bluetooth device even if you press the answer button on the iPhone."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1599030765099",
        alt: ""
      }), " ", _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1599030771759",
        alt: ""
      })]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["During a phone call, you can switch between the ", _jsx(_components.strong, {
          children: "Bluetooth Headset"
        }), ", ", _jsx(_components.strong, {
          children: "Handset"
        }), ", or ", _jsx(_components.strong, {
          children: "Speaker"
        }), " options in the call interface."]
      }), `
`, _jsx(_components.li, {
        children: "If you connect an iOS device to a Bluetooth speaker and answer calls in an app, ensure that the app uses the CallKit, otherwise, the above settings do not work."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "VoIP call"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Before making a VoIP call, you need to switch to the ", _jsx(_components.strong, {
          children: "Bluetooth Headset"
        }), " mode in the ", _jsx(_components.strong, {
          children: "Control Center"
        }), ". Apps can call the iOS native API ", _jsx(_components.code, {
          children: "setPreferredInput"
        }), " method to change the audio route."]
      }), `
`, _jsx(_components.li, {
        children: "When a VoIP call through the Bluetooth device is interrupted by a phone call, tap the answer button on the Bluetooth device to answer the phone call, after which you can continue the VoIP call through the Bluetooth device once the phone call ends."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "android-devices",
      children: "Android devices"
    }), `
`, _jsx(_components.h3, {
      id: "reasons",
      children: "Reasons"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Permissions to access the Bluetooth device are not added in the ", _jsx(_components.code, {
            children: "AndroidManifest.xml"
          }), " file."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Only the Bluetooth device that supports SCO can record and play audio. If the Bluetooth device supports only A2DP, then it cannot record audio, which means it cannot be used to answer a phone call."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "You can route audio to a Bluetooth device only if the Android device supports the use of SCO for off-call use cases."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "solutions",
      children: "Solutions"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Add the following lines in the ", _jsx(_components.code, {
            children: "AndroidManifest.xml"
          }), " file to request permissions to access the Bluetooth device:"]
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
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#22863A",
                    "--shiki-dark": "#85E89D"
                  },
                  children: "uses-permission"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " android:name"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"android.permission.BLUETOOTH"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " />"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#22863A",
                    "--shiki-dark": "#85E89D"
                  },
                  children: "uses-permission"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " android:name"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"android.permission.BLUETOOTH_ADMIN"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " />"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#22863A",
                    "--shiki-dark": "#85E89D"
                  },
                  children: "uses-permission"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " android:name"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"android.permission.READ_PHONE_STATE"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " />"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "<!-- Add the following permission on devices running Android 12.0 or later -->"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#22863A",
                    "--shiki-dark": "#85E89D"
                  },
                  children: "uses-permission"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " android:name"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"android.permission.BLUETOOTH_CONNECT"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  />"
                })]
              })]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Check if the Bluetooth device supports SCO. If not, switch to a SCO-capable Bluetooth device."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Call the Android native API ", _jsx(_components.code, {
            children: "AudioManmager.isBluetoothScoAvailableOffCall"
          }), " method to check if the device supports the use of SCO for off-call use cases. If the device does not support the feature, the user can only answer the call using the system default audio route."]
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
