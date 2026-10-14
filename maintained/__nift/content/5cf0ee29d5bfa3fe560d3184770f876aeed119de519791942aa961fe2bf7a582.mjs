import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why is the audio and video capture invalid after some iOS versions of apps are locked or switched to the background?"
};
export let _markdown = `

After locking the iOS device or switching the app to the background, the audio cannot be heard, and the video screen is stuck at the last frame before switching to the background.

## Reason [#reason]

Due to iOS system limitations, starting from iOS 12.4, the system automatically stops capturing audio and video when the app goes to the background.

## Solution [#solution]

When using the SDK to capture video, you cannot capture video in the background. However, you can enable the app to capture audio in the background by following these steps:

1. In Xcode's project settings, click &#x2A;*+** in **Signing & Capabilities**, add **Background Modes**, and then check **Audio, Airplay, and Picture in Picture** and **Background processing**, as shown below.

   ![ios\\_background](https://assets-docs.agora.io/images/faq/ios-backgroundmodes.png)

2. Ensure that the audio collection status is normal when the app is in the foreground:

   * The user (in communication scenarios) or host (in live broadcast scenarios) has joined the channel.
   * The \`localAudioStateChanged\` callback has been received, and \`state\` is \`AgoraAudioLocalStateRecording\`, indicating that the local audio capture device is in the normal state.

<CalloutContainer type="info">
  <CalloutTitle>
    Note
  </CalloutTitle>

  <CalloutDescription>
    Since the audio module is enabled by default, you only need to ensure that you do not call the \`disableAudio\` or \`disableLocalAudio\` method to disable audio capture.
  </CalloutDescription>
</CalloutContainer>

1. Switch the app to the background and ensure audio collection returns to normal.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "After locking the iOS device or switching the app to the background, the audio cannot be heard, and the video screen is stuck at the last frame before switching to the background."
  }, {
    heading: "reason",
    content: "Due to iOS system limitations, starting from iOS 12.4, the system automatically stops capturing audio and video when the app goes to the background."
  }, {
    heading: "solution",
    content: "When using the SDK to capture video, you cannot capture video in the background. However, you can enable the app to capture audio in the background by following these steps:"
  }, {
    heading: "solution",
    content: "In Xcode's project settings, click &#x2A;*+** in **Signing & Capabilities**, add **Background Modes**, and then check **Audio, Airplay, and Picture in Picture** and **Background processing**, as shown below."
  }, {
    heading: "solution",
    content: "Ensure that the audio collection status is normal when the app is in the foreground:"
  }, {
    heading: "solution",
    content: "The user (in communication scenarios) or host (in live broadcast scenarios) has joined the channel."
  }, {
    heading: "solution",
    content: "The `localAudioStateChanged` callback has been received, and `state` is `AgoraAudioLocalStateRecording`, indicating that the local audio capture device is in the normal state."
  }, {
    heading: "solution",
    content: "Since the audio module is enabled by default, you only need to ensure that you do not call the `disableAudio` or `disableLocalAudio` method to disable audio capture."
  }, {
    heading: "solution",
    content: "Switch the app to the background and ensure audio collection returns to normal."
  }],
  headings: [{
    id: "reason",
    content: "Reason"
  }, {
    id: "solution",
    content: "Solution"
  }]
};
export let toc = [{
  depth: 2,
  url: "#reason",
  title: _jsx(_Fragment, {
    children: "Reason"
  })
}, {
  depth: 2,
  url: "#solution",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "After locking the iOS device or switching the app to the background, the audio cannot be heard, and the video screen is stuck at the last frame before switching to the background."
    }), `
`, _jsx(_components.h2, {
      id: "reason",
      children: "Reason"
    }), `
`, _jsx(_components.p, {
      children: "Due to iOS system limitations, starting from iOS 12.4, the system automatically stops capturing audio and video when the app goes to the background."
    }), `
`, _jsx(_components.h2, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsx(_components.p, {
      children: "When using the SDK to capture video, you cannot capture video in the background. However, you can enable the app to capture audio in the background by following these steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In Xcode's project settings, click ", _jsx(_components.strong, {
            children: "+"
          }), " in ", _jsx(_components.strong, {
            children: "Signing & Capabilities"
          }), ", add ", _jsx(_components.strong, {
            children: "Background Modes"
          }), ", and then check ", _jsx(_components.strong, {
            children: "Audio, Airplay, and Picture in Picture"
          }), " and ", _jsx(_components.strong, {
            children: "Background processing"
          }), ", as shown below."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/faq/ios-backgroundmodes.png",
            alt: "ios_background"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Ensure that the audio collection status is normal when the app is in the foreground:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The user (in communication scenarios) or host (in live broadcast scenarios) has joined the channel."
          }), `
`, _jsxs(_components.li, {
            children: ["The ", _jsx(_components.code, {
              children: "localAudioStateChanged"
            }), " callback has been received, and ", _jsx(_components.code, {
              children: "state"
            }), " is ", _jsx(_components.code, {
              children: "AgoraAudioLocalStateRecording"
            }), ", indicating that the local audio capture device is in the normal state."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Note"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Since the audio module is enabled by default, you only need to ensure that you do not call the ", _jsx(_components.code, {
            children: "disableAudio"
          }), " or ", _jsx(_components.code, {
            children: "disableLocalAudio"
          }), " method to disable audio capture."]
        })
      })]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Switch the app to the background and ensure audio collection returns to normal."
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
