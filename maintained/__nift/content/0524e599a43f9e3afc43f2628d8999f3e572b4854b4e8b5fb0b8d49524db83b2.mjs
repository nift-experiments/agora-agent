import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Which browsers does the Agora Web SDK support?"
};
export let _markdown = `

<CalloutContainer type="info">
  <CalloutDescription>
    This page only applies to the Agora Web SDK 3.x. If you use the Web SDK 4.x, see [Web SDK Compatibility](/en/realtime-media/rtc/reference/supported-platforms?platform=web).
  </CalloutDescription>
</CalloutContainer>

## Supported browsers [#supported-browsers]

The section lists the browsers that the Agora RTC SDK Web SDK supports on different platforms.

<CalloutContainer type="info">
  <CalloutDescription>
    To ensure better end user experience, Agora highly recommends using the [latest version](https://www.google.com/chrome/) of Google Chrome on desktop.
  </CalloutDescription>
</CalloutContainer>

<CalloutContainer type="info">
  <CalloutDescription>
    Upgrade to the latest version of the Web SDK in the following scenarios:

    * Safari on iOS 12.1.4 or later.
    * Safari 12.1 or later on macOS.
  </CalloutDescription>
</CalloutContainer>

### Desktop [#desktop]

See the following table for the supported browsers on desktop:

| Platform   | Google Chrome 58 or later    | Firefox 56 or later          | Safari 11 or later           | Opera 45 or later            | QQ Browser 10.5 or later     | 360 Secure Browser           | Edge Browser 80 or later     |
| :--------- | :--------------------------- | :--------------------------- | :--------------------------- | :--------------------------- | :--------------------------- | :--------------------------- | :--------------------------- |
| macOS 10+  | <font color="green">✔</font> | <font color="green">✔</font> | <font color="green">✔</font> | <font color="green">✔</font> | <font color="green">✔</font> | <font color="red">✘</font>   | <font color="red">✘</font>   |
| Windows 7+ | <font color="green">✔</font> | <font color="green">✔</font> | N/A                          | <font color="green">✔</font> | <font color="green">✔</font> | <font color="green">✔</font> | <font color="green">✔</font> |

Other browser support on desktop:

* The Web SDK v2.5 or later supports Google Chrome 49 on Windows XP. However, in this case, it supports VP8 only, and cannot interoperate with the Native SDK.
* The Web SDK theoretically supports 360 Extreme Browser, but we do not guarantee full support.

### Mobile [#mobile]

The browser support on mobile devices heavily depends on the capabilities of devices and the codec implementation of browsers.

* On Android 4.1 or later, the Web SDK supports Chrome 58 or later. Agora recommends using VP8 on Android Chrome, because whether Google Chrome for Android supports H.264 is hardware dependent and some Android devices do not support H.264.
* On iOS 11 or later, the Web SDK supports Safari or later. However, Agora does not recommend using the Web SDK on iOS Safari due to the large amount of known issues and limitations of [iOS Safari](#safari). For better user experience on iOS, try the [Agora RTC SDK iOS SDK](/en/api-reference/sdks?product=video\\&platform=ios).

The support for in-app browsers on mobile devices is complicated. For details, see [Supported Platforms](/en/realtime-media/rtc/reference/supported-platforms).

## Limitation [#limitation]

Due to the various browser engine implementations, support for some features may vary by browser and platform. The following are known issues and limitations.

On Chrome 81 or later, Safari, and Firefox, device IDs are only available after the user has granted permissions to use the media device. See [Why can't I get device ID on Chrome 81?](/en/api-reference/faq/integration/empty_deviceId)

### Chrome [#chrome]

The Agora Web SDK is based on WebRTC and works best on Chrome.

* The Agora Web SDK supports Chrome 58 or later.
* On some Android devices, Chrome does not support the H.264 codec.
* Some APIs require later versions of Chrome, see the API Reference for details.
* On all AMD-based and some Intel-based devices with the Windows operating system, if Chrome uses the H.264 codec, the video transmission bitrate may be lower than the set value. To resolve it, you can set the browser to use the VP8 codec or try to disable hardware acceleration.
* Chrome 84 on macOS has a known issue: When using the H.264 codec, WebRTC has the probability of a sudden drop in the framerate. For details, see the official bug reports of Google: [Issue 1088650](https://bugs.chromium.org/p/chromium/issues/detail?id=1088650\\&q=webrtc%20drop%20component%3ABlink%3EWebRTC%3EVideo\\&can=2) and [Issue 12704](https://bugs.chromium.org/p/webrtc/issues/detail?id=12704#c3). Agora recommends using VP8 other than H.264 for Chrome 84 and later versions on macOS.

### Safari**iOS Safari** [#safariios-safari]

Known issues and limitations of Safari on iOS:

* The audio routing may change randomly: Sometimes, the audio is routed to the speakerphone when a headset is connected, or to the earpiece when no headset is connected.
* The volume of a remote user may change randomly on iOS 13.
* Safari does not support the \`getAudioLevel\` method on iOS.
* If you call \`getUserMedia\` twice to get two tracks of the same media type, the first track goes muted or black.
* On iOS Safari, after an audience member switches the role to \`"host"\` and gets the microphone permission, the remote user's volume lowers significantly.
* Occasional: On iOS 13, after a user switches to other apps that use the microphone or camera (such as Siri or Skype) and then switches back, the audio sampling or video capture fails.
* Occasional: After the audio session is interrupted, for example, the local user mutes or unmutes the audio, uses Siri, or answers an incoming call, the user can no longer hear any remote users.

**Other issues**

The following lists other known issues and limitations of Safari on iOS and macOS:

* Safari 11 only supports the video resolution of 480P and higher.
* Safari 12.1 or earlier only supports the H.264 codec.
* On Safari 13, users may not be able to hear other users.
* On iOS Safari 14.2 and macOS Safari 14.0.1, the audio may be stuttering.
* Device permission limitations:
  * Safari does not support getting the output device information, so it does not support the \`getPlayoutDevices\` and \`setAudioOutput\` methods.
  * If **Auto-Play** is not enabled on Safari (as the following figure shows), the stream playback has no audio. You have to call the \`navigator.mediaDevices.getUserMedia\` method to get the device permissions before playing a stream.
    ![](https://web-cdn.agora.io/docs-files/1591079062644)
* Safari does not support the \`addTrack\` and \`removeTrack\` methods.
* Safari does not support enabling [dual-stream mode](/en/introduction/glossary#dual-stream-mode).
* On Safari, when calling APIs to get quality statistics, the values of some properties are 0. For example, when calling \`getLocalAudioStats\` to get the audio statistics of the local stream, the values of \`RecordingLevel\` and \`SendLevel\` are 0.

### Firefox [#firefox]

* When the Web SDK on Firefox communicates with the SDK on some devices, the video on Firefox is rotated.
* Firefox does not support changing the frame rate (30 fps by default).
* Setting the video profile on Firefox does not take effect on the following devices:
  * MacBook Pro (13-inch, 2016, Two Thunderbolt 3 ports)
  * Windows 10 (MI)
* On Firefox, when calling APIs to get quality statistics, the values of some properties are 0. For example, when calling \`getLocalAudioStats\` to get the audio statistics of the local stream, the values of \`RecordingLevel\` and \`SendLevel\` are 0.
* On Macs with the Apple M1 chip, Firefox does not support H.264. For details, see the [Firefox documentation](https://bugzilla.mozilla.org/show_bug.cgi?id=1686470).
* Firefox on macOS does not support the \`480p_8\` (848x480) video resolution. However, it is supported on Firefox for Windows. On Windows, the video initially starts at 640x480 resolution and typically adjusts to 848x480 after a brief delay, as observed in Agora’s testing.

## Reference [#reference]

[Supported Platforms](/en/realtime-media/rtc/reference/supported-platforms)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page only applies to the Agora Web SDK 3.x. If you use the Web SDK 4.x, see Web SDK Compatibility."
  }, {
    heading: "supported-browsers",
    content: "The section lists the browsers that the Agora RTC SDK Web SDK supports on different platforms."
  }, {
    heading: "supported-browsers",
    content: "To ensure better end user experience, Agora highly recommends using the latest version of Google Chrome on desktop."
  }, {
    heading: "supported-browsers",
    content: "Upgrade to the latest version of the Web SDK in the following scenarios:"
  }, {
    heading: "supported-browsers",
    content: "Safari on iOS 12.1.4 or later."
  }, {
    heading: "supported-browsers",
    content: "Safari 12.1 or later on macOS."
  }, {
    heading: "desktop",
    content: "See the following table for the supported browsers on desktop:"
  }, {
    heading: "desktop",
    content: "Platform"
  }, {
    heading: "desktop",
    content: "Google Chrome 58 or later"
  }, {
    heading: "desktop",
    content: "Firefox 56 or later"
  }, {
    heading: "desktop",
    content: "Safari 11 or later"
  }, {
    heading: "desktop",
    content: "Opera 45 or later"
  }, {
    heading: "desktop",
    content: "QQ Browser 10.5 or later"
  }, {
    heading: "desktop",
    content: "360 Secure Browser"
  }, {
    heading: "desktop",
    content: "Edge Browser 80 or later"
  }, {
    heading: "desktop",
    content: "macOS 10+"
  }, {
    heading: "desktop",
    content: "✔"
  }, {
    heading: "desktop",
    content: "✔"
  }, {
    heading: "desktop",
    content: "✔"
  }, {
    heading: "desktop",
    content: "✔"
  }, {
    heading: "desktop",
    content: "✔"
  }, {
    heading: "desktop",
    content: "✘"
  }, {
    heading: "desktop",
    content: "✘"
  }, {
    heading: "desktop",
    content: "Windows 7+"
  }, {
    heading: "desktop",
    content: "✔"
  }, {
    heading: "desktop",
    content: "✔"
  }, {
    heading: "desktop",
    content: "N/A"
  }, {
    heading: "desktop",
    content: "✔"
  }, {
    heading: "desktop",
    content: "✔"
  }, {
    heading: "desktop",
    content: "✔"
  }, {
    heading: "desktop",
    content: "✔"
  }, {
    heading: "desktop",
    content: "Other browser support on desktop:"
  }, {
    heading: "desktop",
    content: "The Web SDK v2.5 or later supports Google Chrome 49 on Windows XP. However, in this case, it supports VP8 only, and cannot interoperate with the Native SDK."
  }, {
    heading: "desktop",
    content: "The Web SDK theoretically supports 360 Extreme Browser, but we do not guarantee full support."
  }, {
    heading: "mobile",
    content: "The browser support on mobile devices heavily depends on the capabilities of devices and the codec implementation of browsers."
  }, {
    heading: "mobile",
    content: "On Android 4.1 or later, the Web SDK supports Chrome 58 or later. Agora recommends using VP8 on Android Chrome, because whether Google Chrome for Android supports H.264 is hardware dependent and some Android devices do not support H.264."
  }, {
    heading: "mobile",
    content: "On iOS 11 or later, the Web SDK supports Safari or later. However, Agora does not recommend using the Web SDK on iOS Safari due to the large amount of known issues and limitations of iOS Safari. For better user experience on iOS, try the Agora RTC SDK iOS SDK."
  }, {
    heading: "mobile",
    content: "The support for in-app browsers on mobile devices is complicated. For details, see Supported Platforms."
  }, {
    heading: "limitation",
    content: "Due to the various browser engine implementations, support for some features may vary by browser and platform. The following are known issues and limitations."
  }, {
    heading: "limitation",
    content: "On Chrome 81 or later, Safari, and Firefox, device IDs are only available after the user has granted permissions to use the media device. See Why can't I get device ID on Chrome 81?"
  }, {
    heading: "chrome",
    content: "The Agora Web SDK is based on WebRTC and works best on Chrome."
  }, {
    heading: "chrome",
    content: "The Agora Web SDK supports Chrome 58 or later."
  }, {
    heading: "chrome",
    content: "On some Android devices, Chrome does not support the H.264 codec."
  }, {
    heading: "chrome",
    content: "Some APIs require later versions of Chrome, see the API Reference for details."
  }, {
    heading: "chrome",
    content: "On all AMD-based and some Intel-based devices with the Windows operating system, if Chrome uses the H.264 codec, the video transmission bitrate may be lower than the set value. To resolve it, you can set the browser to use the VP8 codec or try to disable hardware acceleration."
  }, {
    heading: "chrome",
    content: "Chrome 84 on macOS has a known issue: When using the H.264 codec, WebRTC has the probability of a sudden drop in the framerate. For details, see the official bug reports of Google: Issue 1088650 and Issue 12704. Agora recommends using VP8 other than H.264 for Chrome 84 and later versions on macOS."
  }, {
    heading: "safariios-safari",
    content: "Known issues and limitations of Safari on iOS:"
  }, {
    heading: "safariios-safari",
    content: "The audio routing may change randomly: Sometimes, the audio is routed to the speakerphone when a headset is connected, or to the earpiece when no headset is connected."
  }, {
    heading: "safariios-safari",
    content: "The volume of a remote user may change randomly on iOS 13."
  }, {
    heading: "safariios-safari",
    content: "Safari does not support the `getAudioLevel` method on iOS."
  }, {
    heading: "safariios-safari",
    content: "If you call `getUserMedia` twice to get two tracks of the same media type, the first track goes muted or black."
  }, {
    heading: "safariios-safari",
    content: 'On iOS Safari, after an audience member switches the role to `"host"` and gets the microphone permission, the remote user\'s volume lowers significantly.'
  }, {
    heading: "safariios-safari",
    content: "Occasional: On iOS 13, after a user switches to other apps that use the microphone or camera (such as Siri or Skype) and then switches back, the audio sampling or video capture fails."
  }, {
    heading: "safariios-safari",
    content: "Occasional: After the audio session is interrupted, for example, the local user mutes or unmutes the audio, uses Siri, or answers an incoming call, the user can no longer hear any remote users."
  }, {
    heading: "safariios-safari",
    content: "**Other issues**"
  }, {
    heading: "safariios-safari",
    content: "The following lists other known issues and limitations of Safari on iOS and macOS:"
  }, {
    heading: "safariios-safari",
    content: "Safari 11 only supports the video resolution of 480P and higher."
  }, {
    heading: "safariios-safari",
    content: "Safari 12.1 or earlier only supports the H.264 codec."
  }, {
    heading: "safariios-safari",
    content: "On Safari 13, users may not be able to hear other users."
  }, {
    heading: "safariios-safari",
    content: "On iOS Safari 14.2 and macOS Safari 14.0.1, the audio may be stuttering."
  }, {
    heading: "safariios-safari",
    content: "Device permission limitations:"
  }, {
    heading: "safariios-safari",
    content: "Safari does not support getting the output device information, so it does not support the `getPlayoutDevices` and `setAudioOutput` methods."
  }, {
    heading: "safariios-safari",
    content: "If **Auto-Play** is not enabled on Safari (as the following figure shows), the stream playback has no audio. You have to call the `navigator.mediaDevices.getUserMedia` method to get the device permissions before playing a stream."
  }, {
    heading: "safariios-safari",
    content: "Safari does not support the `addTrack` and `removeTrack` methods."
  }, {
    heading: "safariios-safari",
    content: "Safari does not support enabling dual-stream mode."
  }, {
    heading: "safariios-safari",
    content: "On Safari, when calling APIs to get quality statistics, the values of some properties are 0. For example, when calling `getLocalAudioStats` to get the audio statistics of the local stream, the values of `RecordingLevel` and `SendLevel` are 0."
  }, {
    heading: "firefox",
    content: "When the Web SDK on Firefox communicates with the SDK on some devices, the video on Firefox is rotated."
  }, {
    heading: "firefox",
    content: "Firefox does not support changing the frame rate (30 fps by default)."
  }, {
    heading: "firefox",
    content: "Setting the video profile on Firefox does not take effect on the following devices:"
  }, {
    heading: "firefox",
    content: "MacBook Pro (13-inch, 2016, Two Thunderbolt 3 ports)"
  }, {
    heading: "firefox",
    content: "Windows 10 (MI)"
  }, {
    heading: "firefox",
    content: "On Firefox, when calling APIs to get quality statistics, the values of some properties are 0. For example, when calling `getLocalAudioStats` to get the audio statistics of the local stream, the values of `RecordingLevel` and `SendLevel` are 0."
  }, {
    heading: "firefox",
    content: "On Macs with the Apple M1 chip, Firefox does not support H.264. For details, see the Firefox documentation."
  }, {
    heading: "firefox",
    content: "Firefox on macOS does not support the `480p_8` (848x480) video resolution. However, it is supported on Firefox for Windows. On Windows, the video initially starts at 640x480 resolution and typically adjusts to 848x480 after a brief delay, as observed in Agora’s testing."
  }, {
    heading: "reference",
    content: "Supported Platforms"
  }],
  headings: [{
    id: "supported-browsers",
    content: "Supported browsers"
  }, {
    id: "desktop",
    content: "Desktop"
  }, {
    id: "mobile",
    content: "Mobile"
  }, {
    id: "limitation",
    content: "Limitation"
  }, {
    id: "chrome",
    content: "Chrome"
  }, {
    id: "safariios-safari",
    content: "Safari**iOS Safari**"
  }, {
    id: "firefox",
    content: "Firefox"
  }, {
    id: "reference",
    content: "Reference"
  }]
};
export let toc = [{
  depth: 2,
  url: "#supported-browsers",
  title: _jsx(_Fragment, {
    children: "Supported browsers"
  })
}, {
  depth: 3,
  url: "#desktop",
  title: _jsx(_Fragment, {
    children: "Desktop"
  })
}, {
  depth: 3,
  url: "#mobile",
  title: _jsx(_Fragment, {
    children: "Mobile"
  })
}, {
  depth: 2,
  url: "#limitation",
  title: _jsx(_Fragment, {
    children: "Limitation"
  })
}, {
  depth: 3,
  url: "#chrome",
  title: _jsx(_Fragment, {
    children: "Chrome"
  })
}, {
  depth: 3,
  url: "#safariios-safari",
  title: _jsxs(_Fragment, {
    children: ["Safari", _jsx("strong", {
      children: "iOS Safari"
    })]
  })
}, {
  depth: 3,
  url: "#firefox",
  title: _jsx(_Fragment, {
    children: "Firefox"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["This page only applies to the Agora Web SDK 3.x. If you use the Web SDK 4.x, see ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/reference/supported-platforms?platform=web",
            children: "Web SDK Compatibility"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "supported-browsers",
      children: "Supported browsers"
    }), `
`, _jsx(_components.p, {
      children: "The section lists the browsers that the Agora RTC SDK Web SDK supports on different platforms."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["To ensure better end user experience, Agora highly recommends using the ", _jsx(_components.a, {
            href: "https://www.google.com/chrome/",
            children: "latest version"
          }), " of Google Chrome on desktop."]
        })
      })
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsxs(CalloutDescription, {
        children: [_jsx(_components.p, {
          children: "Upgrade to the latest version of the Web SDK in the following scenarios:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Safari on iOS 12.1.4 or later."
          }), `
`, _jsx(_components.li, {
            children: "Safari 12.1 or later on macOS."
          }), `
`]
        })]
      })
    }), `
`, _jsx(_components.h3, {
      id: "desktop",
      children: "Desktop"
    }), `
`, _jsx(_components.p, {
      children: "See the following table for the supported browsers on desktop:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Platform"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Google Chrome 58 or later"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Firefox 56 or later"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Safari 11 or later"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Opera 45 or later"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "QQ Browser 10.5 or later"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "360 Secure Browser"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Edge Browser 80 or later"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "macOS 10+"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx("font", {
              color: "green",
              children: "✔"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx("font", {
              color: "green",
              children: "✔"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx("font", {
              color: "green",
              children: "✔"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx("font", {
              color: "green",
              children: "✔"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx("font", {
              color: "green",
              children: "✔"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx("font", {
              color: "red",
              children: "✘"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx("font", {
              color: "red",
              children: "✘"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Windows 7+"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx("font", {
              color: "green",
              children: "✔"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx("font", {
              color: "green",
              children: "✔"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx("font", {
              color: "green",
              children: "✔"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx("font", {
              color: "green",
              children: "✔"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx("font", {
              color: "green",
              children: "✔"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx("font", {
              color: "green",
              children: "✔"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "Other browser support on desktop:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The Web SDK v2.5 or later supports Google Chrome 49 on Windows XP. However, in this case, it supports VP8 only, and cannot interoperate with the Native SDK."
      }), `
`, _jsx(_components.li, {
        children: "The Web SDK theoretically supports 360 Extreme Browser, but we do not guarantee full support."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "mobile",
      children: "Mobile"
    }), `
`, _jsx(_components.p, {
      children: "The browser support on mobile devices heavily depends on the capabilities of devices and the codec implementation of browsers."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "On Android 4.1 or later, the Web SDK supports Chrome 58 or later. Agora recommends using VP8 on Android Chrome, because whether Google Chrome for Android supports H.264 is hardware dependent and some Android devices do not support H.264."
      }), `
`, _jsxs(_components.li, {
        children: ["On iOS 11 or later, the Web SDK supports Safari or later. However, Agora does not recommend using the Web SDK on iOS Safari due to the large amount of known issues and limitations of ", _jsx(_components.a, {
          href: "#safari",
          children: "iOS Safari"
        }), ". For better user experience on iOS, try the ", _jsx(_components.a, {
          href: "/en/api-reference/sdks?product=video&platform=ios",
          children: "Agora RTC SDK iOS SDK"
        }), "."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The support for in-app browsers on mobile devices is complicated. For details, see ", _jsx(_components.a, {
        href: "/en/realtime-media/rtc/reference/supported-platforms",
        children: "Supported Platforms"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "limitation",
      children: "Limitation"
    }), `
`, _jsx(_components.p, {
      children: "Due to the various browser engine implementations, support for some features may vary by browser and platform. The following are known issues and limitations."
    }), `
`, _jsxs(_components.p, {
      children: ["On Chrome 81 or later, Safari, and Firefox, device IDs are only available after the user has granted permissions to use the media device. See ", _jsx(_components.a, {
        href: "/en/api-reference/faq/integration/empty_deviceId",
        children: "Why can't I get device ID on Chrome 81?"
      })]
    }), `
`, _jsx(_components.h3, {
      id: "chrome",
      children: "Chrome"
    }), `
`, _jsx(_components.p, {
      children: "The Agora Web SDK is based on WebRTC and works best on Chrome."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The Agora Web SDK supports Chrome 58 or later."
      }), `
`, _jsx(_components.li, {
        children: "On some Android devices, Chrome does not support the H.264 codec."
      }), `
`, _jsx(_components.li, {
        children: "Some APIs require later versions of Chrome, see the API Reference for details."
      }), `
`, _jsx(_components.li, {
        children: "On all AMD-based and some Intel-based devices with the Windows operating system, if Chrome uses the H.264 codec, the video transmission bitrate may be lower than the set value. To resolve it, you can set the browser to use the VP8 codec or try to disable hardware acceleration."
      }), `
`, _jsxs(_components.li, {
        children: ["Chrome 84 on macOS has a known issue: When using the H.264 codec, WebRTC has the probability of a sudden drop in the framerate. For details, see the official bug reports of Google: ", _jsx(_components.a, {
          href: "https://bugs.chromium.org/p/chromium/issues/detail?id=1088650&q=webrtc%20drop%20component%3ABlink%3EWebRTC%3EVideo&can=2",
          children: "Issue 1088650"
        }), " and ", _jsx(_components.a, {
          href: "https://bugs.chromium.org/p/webrtc/issues/detail?id=12704#c3",
          children: "Issue 12704"
        }), ". Agora recommends using VP8 other than H.264 for Chrome 84 and later versions on macOS."]
      }), `
`]
    }), `
`, _jsxs(_components.h3, {
      id: "safariios-safari",
      children: ["Safari", _jsx(_components.strong, {
        children: "iOS Safari"
      })]
    }), `
`, _jsx(_components.p, {
      children: "Known issues and limitations of Safari on iOS:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The audio routing may change randomly: Sometimes, the audio is routed to the speakerphone when a headset is connected, or to the earpiece when no headset is connected."
      }), `
`, _jsx(_components.li, {
        children: "The volume of a remote user may change randomly on iOS 13."
      }), `
`, _jsxs(_components.li, {
        children: ["Safari does not support the ", _jsx(_components.code, {
          children: "getAudioLevel"
        }), " method on iOS."]
      }), `
`, _jsxs(_components.li, {
        children: ["If you call ", _jsx(_components.code, {
          children: "getUserMedia"
        }), " twice to get two tracks of the same media type, the first track goes muted or black."]
      }), `
`, _jsxs(_components.li, {
        children: ["On iOS Safari, after an audience member switches the role to ", _jsx(_components.code, {
          children: '"host"'
        }), " and gets the microphone permission, the remote user's volume lowers significantly."]
      }), `
`, _jsx(_components.li, {
        children: "Occasional: On iOS 13, after a user switches to other apps that use the microphone or camera (such as Siri or Skype) and then switches back, the audio sampling or video capture fails."
      }), `
`, _jsx(_components.li, {
        children: "Occasional: After the audio session is interrupted, for example, the local user mutes or unmutes the audio, uses Siri, or answers an incoming call, the user can no longer hear any remote users."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Other issues"
      })
    }), `
`, _jsx(_components.p, {
      children: "The following lists other known issues and limitations of Safari on iOS and macOS:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Safari 11 only supports the video resolution of 480P and higher."
      }), `
`, _jsx(_components.li, {
        children: "Safari 12.1 or earlier only supports the H.264 codec."
      }), `
`, _jsx(_components.li, {
        children: "On Safari 13, users may not be able to hear other users."
      }), `
`, _jsx(_components.li, {
        children: "On iOS Safari 14.2 and macOS Safari 14.0.1, the audio may be stuttering."
      }), `
`, _jsxs(_components.li, {
        children: ["Device permission limitations:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Safari does not support getting the output device information, so it does not support the ", _jsx(_components.code, {
              children: "getPlayoutDevices"
            }), " and ", _jsx(_components.code, {
              children: "setAudioOutput"
            }), " methods."]
          }), `
`, _jsxs(_components.li, {
            children: ["If ", _jsx(_components.strong, {
              children: "Auto-Play"
            }), " is not enabled on Safari (as the following figure shows), the stream playback has no audio. You have to call the ", _jsx(_components.code, {
              children: "navigator.mediaDevices.getUserMedia"
            }), ` method to get the device permissions before playing a stream.
`, _jsx(_components.img, {
              src: "https://web-cdn.agora.io/docs-files/1591079062644",
              alt: ""
            })]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["Safari does not support the ", _jsx(_components.code, {
          children: "addTrack"
        }), " and ", _jsx(_components.code, {
          children: "removeTrack"
        }), " methods."]
      }), `
`, _jsxs(_components.li, {
        children: ["Safari does not support enabling ", _jsx(_components.a, {
          href: "/en/introduction/glossary#dual-stream-mode",
          children: "dual-stream mode"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["On Safari, when calling APIs to get quality statistics, the values of some properties are 0. For example, when calling ", _jsx(_components.code, {
          children: "getLocalAudioStats"
        }), " to get the audio statistics of the local stream, the values of ", _jsx(_components.code, {
          children: "RecordingLevel"
        }), " and ", _jsx(_components.code, {
          children: "SendLevel"
        }), " are 0."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "firefox",
      children: "Firefox"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "When the Web SDK on Firefox communicates with the SDK on some devices, the video on Firefox is rotated."
      }), `
`, _jsx(_components.li, {
        children: "Firefox does not support changing the frame rate (30 fps by default)."
      }), `
`, _jsxs(_components.li, {
        children: ["Setting the video profile on Firefox does not take effect on the following devices:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "MacBook Pro (13-inch, 2016, Two Thunderbolt 3 ports)"
          }), `
`, _jsx(_components.li, {
            children: "Windows 10 (MI)"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["On Firefox, when calling APIs to get quality statistics, the values of some properties are 0. For example, when calling ", _jsx(_components.code, {
          children: "getLocalAudioStats"
        }), " to get the audio statistics of the local stream, the values of ", _jsx(_components.code, {
          children: "RecordingLevel"
        }), " and ", _jsx(_components.code, {
          children: "SendLevel"
        }), " are 0."]
      }), `
`, _jsxs(_components.li, {
        children: ["On Macs with the Apple M1 chip, Firefox does not support H.264. For details, see the ", _jsx(_components.a, {
          href: "https://bugzilla.mozilla.org/show_bug.cgi?id=1686470",
          children: "Firefox documentation"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Firefox on macOS does not support the ", _jsx(_components.code, {
          children: "480p_8"
        }), " (848x480) video resolution. However, it is supported on Firefox for Windows. On Windows, the video initially starts at 640x480 resolution and typically adjusts to 848x480 after a brief delay, as observed in Agora’s testing."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "/en/realtime-media/rtc/reference/supported-platforms",
        children: "Supported Platforms"
      })
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
