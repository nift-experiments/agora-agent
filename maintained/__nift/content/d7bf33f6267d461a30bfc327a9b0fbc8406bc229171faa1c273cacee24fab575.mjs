import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why does the SDK stop sending audio or video after the user uses a third-party app?"
};
export let _markdown = `

### When a third-party recording app is being used on the Android device, the local user cannot send the local audio stream. Why is there no warning or error message from the SDK? [#when-a-third-party-recording-app-is-being-used-on-the-android-device-the-local-user-cannot-send-the-local-audio-stream-why-is-there-no-warning-or-error-message-from-the-sdk]

We recommed referring to the following logic when implementing your code:

Before the user joins the channel, use the Android native methods to get the status of the audio recorder. When the audio recorder is available, if, within 6 seconds after the user joins the channel, the app receives the following codes, the SDK decides that the recording device is occupied:

* The warning code WARN\\_ADM\\_RECORD\\_AUDIO\\_LOWLEVEL(1031), triggered multiple times.
* The error code ERR\\_ADM\\_RECORD\\_AUDIO\\_IS\\_ACTIVE(1033).

You can remind your user to quit the third-party recording app before using yours.

### I cannot send audio/video after switching to other apps and back during a call using the Agora Web SDK. [#i-cannot-send-audiovideo-after-switching-to-other-apps-and-back-during-a-call-using-the-agora-web-sdk]

**Issue**: If you switch to another app (for example answering a FaceTime call) during a web call, you cannot send any audio/video after switching back to the call.

**Reason**: A third-party application, such as FaceTime, takes over the audio/video device and your device may fail to send audio/video after resuming your web call.

**Solution**: Refresh the web page.
`;
export let structuredData = {
  contents: [{
    heading: "when-a-third-party-recording-app-is-being-used-on-the-android-device-the-local-user-cannot-send-the-local-audio-stream-why-is-there-no-warning-or-error-message-from-the-sdk",
    content: "We recommed referring to the following logic when implementing your code:"
  }, {
    heading: "when-a-third-party-recording-app-is-being-used-on-the-android-device-the-local-user-cannot-send-the-local-audio-stream-why-is-there-no-warning-or-error-message-from-the-sdk",
    content: "Before the user joins the channel, use the Android native methods to get the status of the audio recorder. When the audio recorder is available, if, within 6 seconds after the user joins the channel, the app receives the following codes, the SDK decides that the recording device is occupied:"
  }, {
    heading: "when-a-third-party-recording-app-is-being-used-on-the-android-device-the-local-user-cannot-send-the-local-audio-stream-why-is-there-no-warning-or-error-message-from-the-sdk",
    content: "The warning code WARN\\_ADM\\_RECORD\\_AUDIO\\_LOWLEVEL(1031), triggered multiple times."
  }, {
    heading: "when-a-third-party-recording-app-is-being-used-on-the-android-device-the-local-user-cannot-send-the-local-audio-stream-why-is-there-no-warning-or-error-message-from-the-sdk",
    content: "The error code ERR\\_ADM\\_RECORD\\_AUDIO\\_IS\\_ACTIVE(1033)."
  }, {
    heading: "when-a-third-party-recording-app-is-being-used-on-the-android-device-the-local-user-cannot-send-the-local-audio-stream-why-is-there-no-warning-or-error-message-from-the-sdk",
    content: "You can remind your user to quit the third-party recording app before using yours."
  }, {
    heading: "i-cannot-send-audiovideo-after-switching-to-other-apps-and-back-during-a-call-using-the-agora-web-sdk",
    content: "**Issue**: If you switch to another app (for example answering a FaceTime call) during a web call, you cannot send any audio/video after switching back to the call."
  }, {
    heading: "i-cannot-send-audiovideo-after-switching-to-other-apps-and-back-during-a-call-using-the-agora-web-sdk",
    content: "**Reason**: A third-party application, such as FaceTime, takes over the audio/video device and your device may fail to send audio/video after resuming your web call."
  }, {
    heading: "i-cannot-send-audiovideo-after-switching-to-other-apps-and-back-during-a-call-using-the-agora-web-sdk",
    content: "**Solution**: Refresh the web page."
  }],
  headings: [{
    id: "when-a-third-party-recording-app-is-being-used-on-the-android-device-the-local-user-cannot-send-the-local-audio-stream-why-is-there-no-warning-or-error-message-from-the-sdk",
    content: "When a third-party recording app is being used on the Android device, the local user cannot send the local audio stream. Why is there no warning or error message from the SDK?"
  }, {
    id: "i-cannot-send-audiovideo-after-switching-to-other-apps-and-back-during-a-call-using-the-agora-web-sdk",
    content: "I cannot send audio/video after switching to other apps and back during a call using the Agora Web SDK."
  }]
};
export let toc = [{
  depth: 3,
  url: "#when-a-third-party-recording-app-is-being-used-on-the-android-device-the-local-user-cannot-send-the-local-audio-stream-why-is-there-no-warning-or-error-message-from-the-sdk",
  title: _jsx(_Fragment, {
    children: "When a third-party recording app is being used on the Android device, the local user cannot send the local audio stream. Why is there no warning or error message from the SDK?"
  })
}, {
  depth: 3,
  url: "#i-cannot-send-audiovideo-after-switching-to-other-apps-and-back-during-a-call-using-the-agora-web-sdk",
  title: _jsx(_Fragment, {
    children: "I cannot send audio/video after switching to other apps and back during a call using the Agora Web SDK."
  })
}];
function _createMdxContent(props) {
  const _components = {
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h3, {
      id: "when-a-third-party-recording-app-is-being-used-on-the-android-device-the-local-user-cannot-send-the-local-audio-stream-why-is-there-no-warning-or-error-message-from-the-sdk",
      children: "When a third-party recording app is being used on the Android device, the local user cannot send the local audio stream. Why is there no warning or error message from the SDK?"
    }), `
`, _jsx(_components.p, {
      children: "We recommed referring to the following logic when implementing your code:"
    }), `
`, _jsx(_components.p, {
      children: "Before the user joins the channel, use the Android native methods to get the status of the audio recorder. When the audio recorder is available, if, within 6 seconds after the user joins the channel, the app receives the following codes, the SDK decides that the recording device is occupied:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The warning code WARN_ADM_RECORD_AUDIO_LOWLEVEL(1031), triggered multiple times."
      }), `
`, _jsx(_components.li, {
        children: "The error code ERR_ADM_RECORD_AUDIO_IS_ACTIVE(1033)."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "You can remind your user to quit the third-party recording app before using yours."
    }), `
`, _jsx(_components.h3, {
      id: "i-cannot-send-audiovideo-after-switching-to-other-apps-and-back-during-a-call-using-the-agora-web-sdk",
      children: "I cannot send audio/video after switching to other apps and back during a call using the Agora Web SDK."
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Issue"
      }), ": If you switch to another app (for example answering a FaceTime call) during a web call, you cannot send any audio/video after switching back to the call."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Reason"
      }), ": A third-party application, such as FaceTime, takes over the audio/video device and your device may fail to send audio/video after resuming your web call."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Solution"
      }), ": Refresh the web page."]
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
