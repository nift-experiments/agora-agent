import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How to deal with audio and video related issues in Flexible Classroom?"
};
export let _markdown = `

### Why can't I turn on the camera or microphone in the web client? [#why-cant-i-turn-on-the-camera-or-microphone-in-the-web-client]

Check your browser's permission to use your camera and microphone.

1. Go to the browser settings page and select **Privacy and Security** > **Site Settings**:

   ![site settings](https://assets-docs.agora.io/images/faq/site_settings.png)

2. Click on the camera and mike permissions:

   ![camera and mike permissions](https://assets-docs.agora.io/images/faq/camera_mike_permissions.png)

3. Choose **Allow** in the dropdown:

   ![camera and mike allow access](https://assets-docs.agora.io/images/faq/camera_mike_allow.png)

If the permissions are granted but the camera or microphone still
don't work, take the following steps:

1. Clear your browser cache
2. Restart the browser
3. Update your browser

### What if the domain I deployed does not have audio and video permissions, is displayed as disabled, or cannot use the microphone and camera? [#what-if-the-domain-i-deployed-does-not-have-audio-and-video-permissions-is-displayed-as-disabled-or-cannot-use-the-microphone-and-camera]

Audio and video devices can be disabled, as shown below:

![video disabled](https://assets-docs.agora.io/images/faq/video_settings.png)

![audio disabled](https://assets-docs.agora.io/images/faq/audio_settings.png)

For security reasons, WebRTC is only allowed to be used in an HTTPS environment; otherwise, the browser will not allow the page to access audio or video devices. Configure your domain name to use HTTPS.

### How to adjust the video resolution? [#how-to-adjust-the-video-resolution]

#### Video resolution in a classroom [#video-resolution-in-a-classroom]

Use \`launchOption.MediaOptions\` configurations of the web client to adjust the resolution in a classroom:

* To adjust the small stream resolution use: \`launchOption.MediaOptions.lowStreamCameraEncoderConfiguration\`.
* To adjust the large stream resolution use: \`launchOption.mediaOptions.cameraEncoderConfiguration\`.
* To adjust the screen sharing resolution use: \`launchOption.mediaOptions.screenShareEncoderConfiguration\`.

The following sample code illustrates how to modify the resolution of small and large streams:

\`\`\`typescript
AgoraEduSDK.launch(appRef.current, {
    ...launchOption,
    recordUrl,
    courseWareList,
    uiMode: homeStore.theme,
    virtualBackgroundImages,
    virtualBackgroundVideos,
    mediaOptions: {
        cameraEncoderConfiguration: {
            width: 1280,
            height: 720,
            frameRate: 30,
            bitrate: 1710,
        },
        lowStreamCameraEncoderConfiguration: {
            width: 1280,
            height: 720,
            frameRate: 30,
            bitrate: 1710,
        }
    },
    listener: (evt: AgoraEduClassroomEvent, type) => {
        // Add logic for handling events here
    }
});
\`\`\`

#### Recording video resolution [#recording-video-resolution]

Adjust the resolution of class recordings in the web client by changing the \`webRecordConfig\` in the [Set recording state](/en/api-reference/api-ref/flexible-classroom/classroom-rest-api#set-the-recording-state) RESTful API:

\`\`\`typescript
get recordArgs() {
    const { recordUrl, rteEngineConfig, recordRetryTimeout } = EduClassroomConfig.shared;
    const args = {
        webRecordConfig: {
            rootUrl: \`\${recordUrl}?language=\${rteEngineConfig.language}\`,
            videoBitrate: 3000,
            videoWidth: 1280,
            videoHeight: 720,
            videoFps: 15
        },
        mode: RecordMode.Web,
        retryTimeout: recordRetryTimeout,
    };
    return args;
}
\`\`\`

### When using screen sharing, the error 'Please enable screen recording permission first' is reported. [#when-using-screen-sharing-the-error-please-enable-screen-recording-permission-first-is-reported]

If you encounter this error when you enable screen sharing, it means that you have not granted the screen recording permission.

Taking the macOS system as an example, you can enable the corresponding permission in **System Settings** > **Privacy and Security** > **Screen & System Audio Recording**.

![video disabled](https://assets-docs.agora.io/images/faq/screen_system_audio_recording.png)

Enable screen recording permission for AgoraFlexibleClassroom:

![enable fcr](https://assets-docs.agora.io/images/faq/enable_fcr.png)

### What if the screen sharing feature is invalid after embedding Flexible Classroom with iframe? [#what-if-the-screen-sharing-feature-is-invalid-after-embedding-flexible-classroom-with-iframe]

You can use the iframe \`allow\` attribute to add \`display-capture\` parameters for screen sharing. The code example is as follows:

\`\`\`html
<iframe
  src="https://your-classroom-url.example.com"
  width="100%"
  height="100%"
  frameborder="0"
  scrolling="no"
  allowfullscreen="allowfullscreen"
  allow="display-capture; geolocation; microphone; camera; midi; encrypted-media;"
  referrerpolicy="no-referrer"
></iframe>
\`\`\`

### Are there any specific network bandwidth requirements for live streaming? [#are-there-any-specific-network-bandwidth-requirements-for-live-streaming]

* Teacher's device: Exclusive broadband and uplink speed of at least 10 Mbps and 4 Mbps, respectively.
* Student's device: Exclusive broadband of at least 4 Mbps.

## How do I troubleshoot frequent freezing, unclear audio, blank or black screens, or failed courseware loading? [#how-do-i-troubleshoot-frequent-freezing-unclear-audio-blank-or-black-screens-or-failed-courseware-loading]

If you experience these network issues, try the following steps to improve your connection:

* Restart your router and reconnect to the network.
* Move your device closer to the router, ensuring there are no walls or obstructions in between.
* Disconnect other devices or applications that may be using bandwidth, such as download programs, streaming services, cloud storage applications, or networked TV boxes.
* Switch to a different network, such as a 4G hotspot, and re-enter the classroom.
* Restart your device.
* Disable any VPNs or network proxies.

## What if the students can't hear the teacher's voice? [#what-if-the-students-cant-hear-the-teachers-voice]

* Check whether the teacher's microphone is turned on.
* Check the student network status.
* Check that the student speakers, including volume mixer and browser, are muted.
* Check whether the speaker device used in the student class is selected correctly.
* Exit and re-enter the classroom or restart the device.

## What if the teacher cannot hear the students? [#what-if-the-teacher-cannot-hear-the-students]

* Check that the students are on stage and have their microphone turned on.
* Check that the teacher's speakers, including the volume mixer and browser, are muted.
* Check whether the teacher's speaker device is selected correctly.
* Exit and re-enter the classroom or restart the device.

## How to enable screen sharing with audio? [#how-to-enable-screen-sharing-with-audio]

### Web [#web]

Web screen sharing is only supported in Chrome version 74 and above on Windows and macOS, including the following:

* Windows supports audio sharing when sharing the entire screen or a Chrome tab, but not when sharing an app window.
* macOS supports sharing audio when sharing a Chrome tab. After setting \`withAudio\` to \`true\`, check the share audio box in the screen sharing pop-up.

### Electron [#electron]

The Electron terminal supports sharing system audio on Windows.

On macOS, use a virtual sound card to capture and share system sounds. If the user uses a virtual sound card, such as Soundflower, you can pass its name (\`"soundflower"\`) as a parameter. The SDK will find the corresponding virtual sound card device and start capturing.

<CalloutContainer type="info">
  <CalloutTitle>
    Note
  </CalloutTitle>

  <CalloutDescription>
    The default sound card on macOS does not support capture. To enable this feature, the app needs to enable a virtual sound card and pass its name (\`deviceName\`) to the SDK. Agora has tested and recommends Soundflower as the virtual sound card.
  </CalloutDescription>
</CalloutContainer>

On macOS, screen sharing with audio is turned off by default. For Flexible Classroom versions 2.8.21 and above, if you need to enable it, modify the source code. The specific modification steps are as follows:

1. Display screen sharing with audio at the UI level.

   Code path: \`packages/agora-classroom-sdk/src/infra/capabilities/containers/dialog/screen-picker/index.tsx\`

2. Pass the name of the virtual sound card on macOS.

   Code path: \`packages/agora-classroom-sdk/src/infra/stores/common/toolbar/index.ts\`. The code is as follows:

   ![screen share capture](https://assets-docs.agora.io/images/faq/screen_share_capture.png)
`;
export let structuredData = {
  contents: [{
    heading: "why-cant-i-turn-on-the-camera-or-microphone-in-the-web-client",
    content: "Check your browser's permission to use your camera and microphone."
  }, {
    heading: "why-cant-i-turn-on-the-camera-or-microphone-in-the-web-client",
    content: "Go to the browser settings page and select **Privacy and Security** > **Site Settings**:"
  }, {
    heading: "why-cant-i-turn-on-the-camera-or-microphone-in-the-web-client",
    content: "Click on the camera and mike permissions:"
  }, {
    heading: "why-cant-i-turn-on-the-camera-or-microphone-in-the-web-client",
    content: "Choose **Allow** in the dropdown:"
  }, {
    heading: "why-cant-i-turn-on-the-camera-or-microphone-in-the-web-client",
    content: `If the permissions are granted but the camera or microphone still
don't work, take the following steps:`
  }, {
    heading: "why-cant-i-turn-on-the-camera-or-microphone-in-the-web-client",
    content: "Clear your browser cache"
  }, {
    heading: "why-cant-i-turn-on-the-camera-or-microphone-in-the-web-client",
    content: "Restart the browser"
  }, {
    heading: "why-cant-i-turn-on-the-camera-or-microphone-in-the-web-client",
    content: "Update your browser"
  }, {
    heading: "what-if-the-domain-i-deployed-does-not-have-audio-and-video-permissions-is-displayed-as-disabled-or-cannot-use-the-microphone-and-camera",
    content: "Audio and video devices can be disabled, as shown below:"
  }, {
    heading: "what-if-the-domain-i-deployed-does-not-have-audio-and-video-permissions-is-displayed-as-disabled-or-cannot-use-the-microphone-and-camera",
    content: "For security reasons, WebRTC is only allowed to be used in an HTTPS environment; otherwise, the browser will not allow the page to access audio or video devices. Configure your domain name to use HTTPS."
  }, {
    heading: "video-resolution-in-a-classroom",
    content: "Use `launchOption.MediaOptions` configurations of the web client to adjust the resolution in a classroom:"
  }, {
    heading: "video-resolution-in-a-classroom",
    content: "To adjust the small stream resolution use: `launchOption.MediaOptions.lowStreamCameraEncoderConfiguration`."
  }, {
    heading: "video-resolution-in-a-classroom",
    content: "To adjust the large stream resolution use: `launchOption.mediaOptions.cameraEncoderConfiguration`."
  }, {
    heading: "video-resolution-in-a-classroom",
    content: "To adjust the screen sharing resolution use: `launchOption.mediaOptions.screenShareEncoderConfiguration`."
  }, {
    heading: "video-resolution-in-a-classroom",
    content: "The following sample code illustrates how to modify the resolution of small and large streams:"
  }, {
    heading: "recording-video-resolution",
    content: "Adjust the resolution of class recordings in the web client by changing the `webRecordConfig` in the Set recording state RESTful API:"
  }, {
    heading: "when-using-screen-sharing-the-error-please-enable-screen-recording-permission-first-is-reported",
    content: "If you encounter this error when you enable screen sharing, it means that you have not granted the screen recording permission."
  }, {
    heading: "when-using-screen-sharing-the-error-please-enable-screen-recording-permission-first-is-reported",
    content: "Taking the macOS system as an example, you can enable the corresponding permission in **System Settings** > **Privacy and Security** > **Screen & System Audio Recording**."
  }, {
    heading: "when-using-screen-sharing-the-error-please-enable-screen-recording-permission-first-is-reported",
    content: "Enable screen recording permission for AgoraFlexibleClassroom:"
  }, {
    heading: "what-if-the-screen-sharing-feature-is-invalid-after-embedding-flexible-classroom-with-iframe",
    content: "You can use the iframe `allow` attribute to add `display-capture` parameters for screen sharing. The code example is as follows:"
  }, {
    heading: "are-there-any-specific-network-bandwidth-requirements-for-live-streaming",
    content: "Teacher's device: Exclusive broadband and uplink speed of at least 10 Mbps and 4 Mbps, respectively."
  }, {
    heading: "are-there-any-specific-network-bandwidth-requirements-for-live-streaming",
    content: "Student's device: Exclusive broadband of at least 4 Mbps."
  }, {
    heading: "how-do-i-troubleshoot-frequent-freezing-unclear-audio-blank-or-black-screens-or-failed-courseware-loading",
    content: "If you experience these network issues, try the following steps to improve your connection:"
  }, {
    heading: "how-do-i-troubleshoot-frequent-freezing-unclear-audio-blank-or-black-screens-or-failed-courseware-loading",
    content: "Restart your router and reconnect to the network."
  }, {
    heading: "how-do-i-troubleshoot-frequent-freezing-unclear-audio-blank-or-black-screens-or-failed-courseware-loading",
    content: "Move your device closer to the router, ensuring there are no walls or obstructions in between."
  }, {
    heading: "how-do-i-troubleshoot-frequent-freezing-unclear-audio-blank-or-black-screens-or-failed-courseware-loading",
    content: "Disconnect other devices or applications that may be using bandwidth, such as download programs, streaming services, cloud storage applications, or networked TV boxes."
  }, {
    heading: "how-do-i-troubleshoot-frequent-freezing-unclear-audio-blank-or-black-screens-or-failed-courseware-loading",
    content: "Switch to a different network, such as a 4G hotspot, and re-enter the classroom."
  }, {
    heading: "how-do-i-troubleshoot-frequent-freezing-unclear-audio-blank-or-black-screens-or-failed-courseware-loading",
    content: "Restart your device."
  }, {
    heading: "how-do-i-troubleshoot-frequent-freezing-unclear-audio-blank-or-black-screens-or-failed-courseware-loading",
    content: "Disable any VPNs or network proxies."
  }, {
    heading: "what-if-the-students-cant-hear-the-teachers-voice",
    content: "Check whether the teacher's microphone is turned on."
  }, {
    heading: "what-if-the-students-cant-hear-the-teachers-voice",
    content: "Check the student network status."
  }, {
    heading: "what-if-the-students-cant-hear-the-teachers-voice",
    content: "Check that the student speakers, including volume mixer and browser, are muted."
  }, {
    heading: "what-if-the-students-cant-hear-the-teachers-voice",
    content: "Check whether the speaker device used in the student class is selected correctly."
  }, {
    heading: "what-if-the-students-cant-hear-the-teachers-voice",
    content: "Exit and re-enter the classroom or restart the device."
  }, {
    heading: "what-if-the-teacher-cannot-hear-the-students",
    content: "Check that the students are on stage and have their microphone turned on."
  }, {
    heading: "what-if-the-teacher-cannot-hear-the-students",
    content: "Check that the teacher's speakers, including the volume mixer and browser, are muted."
  }, {
    heading: "what-if-the-teacher-cannot-hear-the-students",
    content: "Check whether the teacher's speaker device is selected correctly."
  }, {
    heading: "what-if-the-teacher-cannot-hear-the-students",
    content: "Exit and re-enter the classroom or restart the device."
  }, {
    heading: "web",
    content: "Web screen sharing is only supported in Chrome version 74 and above on Windows and macOS, including the following:"
  }, {
    heading: "web",
    content: "Windows supports audio sharing when sharing the entire screen or a Chrome tab, but not when sharing an app window."
  }, {
    heading: "web",
    content: "macOS supports sharing audio when sharing a Chrome tab. After setting `withAudio` to `true`, check the share audio box in the screen sharing pop-up."
  }, {
    heading: "electron",
    content: "The Electron terminal supports sharing system audio on Windows."
  }, {
    heading: "electron",
    content: 'On macOS, use a virtual sound card to capture and share system sounds. If the user uses a virtual sound card, such as Soundflower, you can pass its name (`"soundflower"`) as a parameter. The SDK will find the corresponding virtual sound card device and start capturing.'
  }, {
    heading: "electron",
    content: "The default sound card on macOS does not support capture. To enable this feature, the app needs to enable a virtual sound card and pass its name (`deviceName`) to the SDK. Agora has tested and recommends Soundflower as the virtual sound card."
  }, {
    heading: "electron",
    content: "On macOS, screen sharing with audio is turned off by default. For Flexible Classroom versions 2.8.21 and above, if you need to enable it, modify the source code. The specific modification steps are as follows:"
  }, {
    heading: "electron",
    content: "Display screen sharing with audio at the UI level."
  }, {
    heading: "electron",
    content: "Code path: `packages/agora-classroom-sdk/src/infra/capabilities/containers/dialog/screen-picker/index.tsx`"
  }, {
    heading: "electron",
    content: "Pass the name of the virtual sound card on macOS."
  }, {
    heading: "electron",
    content: "Code path: `packages/agora-classroom-sdk/src/infra/stores/common/toolbar/index.ts`. The code is as follows:"
  }],
  headings: [{
    id: "why-cant-i-turn-on-the-camera-or-microphone-in-the-web-client",
    content: "Why can't I turn on the camera or microphone in the web client?"
  }, {
    id: "what-if-the-domain-i-deployed-does-not-have-audio-and-video-permissions-is-displayed-as-disabled-or-cannot-use-the-microphone-and-camera",
    content: "What if the domain I deployed does not have audio and video permissions, is displayed as disabled, or cannot use the microphone and camera?"
  }, {
    id: "how-to-adjust-the-video-resolution",
    content: "How to adjust the video resolution?"
  }, {
    id: "video-resolution-in-a-classroom",
    content: "Video resolution in a classroom"
  }, {
    id: "recording-video-resolution",
    content: "Recording video resolution"
  }, {
    id: "when-using-screen-sharing-the-error-please-enable-screen-recording-permission-first-is-reported",
    content: "When using screen sharing, the error 'Please enable screen recording permission first' is reported."
  }, {
    id: "what-if-the-screen-sharing-feature-is-invalid-after-embedding-flexible-classroom-with-iframe",
    content: "What if the screen sharing feature is invalid after embedding Flexible Classroom with iframe?"
  }, {
    id: "are-there-any-specific-network-bandwidth-requirements-for-live-streaming",
    content: "Are there any specific network bandwidth requirements for live streaming?"
  }, {
    id: "how-do-i-troubleshoot-frequent-freezing-unclear-audio-blank-or-black-screens-or-failed-courseware-loading",
    content: "How do I troubleshoot frequent freezing, unclear audio, blank or black screens, or failed courseware loading?"
  }, {
    id: "what-if-the-students-cant-hear-the-teachers-voice",
    content: "What if the students can't hear the teacher's voice?"
  }, {
    id: "what-if-the-teacher-cannot-hear-the-students",
    content: "What if the teacher cannot hear the students?"
  }, {
    id: "how-to-enable-screen-sharing-with-audio",
    content: "How to enable screen sharing with audio?"
  }, {
    id: "web",
    content: "Web"
  }, {
    id: "electron",
    content: "Electron"
  }]
};
export let toc = [{
  depth: 3,
  url: "#why-cant-i-turn-on-the-camera-or-microphone-in-the-web-client",
  title: _jsx(_Fragment, {
    children: "Why can't I turn on the camera or microphone in the web client?"
  })
}, {
  depth: 3,
  url: "#what-if-the-domain-i-deployed-does-not-have-audio-and-video-permissions-is-displayed-as-disabled-or-cannot-use-the-microphone-and-camera",
  title: _jsx(_Fragment, {
    children: "What if the domain I deployed does not have audio and video permissions, is displayed as disabled, or cannot use the microphone and camera?"
  })
}, {
  depth: 3,
  url: "#how-to-adjust-the-video-resolution",
  title: _jsx(_Fragment, {
    children: "How to adjust the video resolution?"
  })
}, {
  depth: 4,
  url: "#video-resolution-in-a-classroom",
  title: _jsx(_Fragment, {
    children: "Video resolution in a classroom"
  })
}, {
  depth: 4,
  url: "#recording-video-resolution",
  title: _jsx(_Fragment, {
    children: "Recording video resolution"
  })
}, {
  depth: 3,
  url: "#when-using-screen-sharing-the-error-please-enable-screen-recording-permission-first-is-reported",
  title: _jsx(_Fragment, {
    children: "When using screen sharing, the error 'Please enable screen recording permission first' is reported."
  })
}, {
  depth: 3,
  url: "#what-if-the-screen-sharing-feature-is-invalid-after-embedding-flexible-classroom-with-iframe",
  title: _jsx(_Fragment, {
    children: "What if the screen sharing feature is invalid after embedding Flexible Classroom with iframe?"
  })
}, {
  depth: 3,
  url: "#are-there-any-specific-network-bandwidth-requirements-for-live-streaming",
  title: _jsx(_Fragment, {
    children: "Are there any specific network bandwidth requirements for live streaming?"
  })
}, {
  depth: 2,
  url: "#how-do-i-troubleshoot-frequent-freezing-unclear-audio-blank-or-black-screens-or-failed-courseware-loading",
  title: _jsx(_Fragment, {
    children: "How do I troubleshoot frequent freezing, unclear audio, blank or black screens, or failed courseware loading?"
  })
}, {
  depth: 2,
  url: "#what-if-the-students-cant-hear-the-teachers-voice",
  title: _jsx(_Fragment, {
    children: "What if the students can't hear the teacher's voice?"
  })
}, {
  depth: 2,
  url: "#what-if-the-teacher-cannot-hear-the-students",
  title: _jsx(_Fragment, {
    children: "What if the teacher cannot hear the students?"
  })
}, {
  depth: 2,
  url: "#how-to-enable-screen-sharing-with-audio",
  title: _jsx(_Fragment, {
    children: "How to enable screen sharing with audio?"
  })
}, {
  depth: 3,
  url: "#web",
  title: _jsx(_Fragment, {
    children: "Web"
  })
}, {
  depth: 3,
  url: "#electron",
  title: _jsx(_Fragment, {
    children: "Electron"
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h3, {
      id: "why-cant-i-turn-on-the-camera-or-microphone-in-the-web-client",
      children: "Why can't I turn on the camera or microphone in the web client?"
    }), `
`, _jsx(_components.p, {
      children: "Check your browser's permission to use your camera and microphone."
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Go to the browser settings page and select ", _jsx(_components.strong, {
            children: "Privacy and Security"
          }), " > ", _jsx(_components.strong, {
            children: "Site Settings"
          }), ":"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/faq/site_settings.png",
            alt: "site settings"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Click on the camera and mike permissions:"
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/faq/camera_mike_permissions.png",
            alt: "camera and mike permissions"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Choose ", _jsx(_components.strong, {
            children: "Allow"
          }), " in the dropdown:"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/faq/camera_mike_allow.png",
            alt: "camera and mike allow access"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: `If the permissions are granted but the camera or microphone still
don't work, take the following steps:`
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Clear your browser cache"
      }), `
`, _jsx(_components.li, {
        children: "Restart the browser"
      }), `
`, _jsx(_components.li, {
        children: "Update your browser"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "what-if-the-domain-i-deployed-does-not-have-audio-and-video-permissions-is-displayed-as-disabled-or-cannot-use-the-microphone-and-camera",
      children: "What if the domain I deployed does not have audio and video permissions, is displayed as disabled, or cannot use the microphone and camera?"
    }), `
`, _jsx(_components.p, {
      children: "Audio and video devices can be disabled, as shown below:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/faq/video_settings.png",
        alt: "video disabled"
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/faq/audio_settings.png",
        alt: "audio disabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "For security reasons, WebRTC is only allowed to be used in an HTTPS environment; otherwise, the browser will not allow the page to access audio or video devices. Configure your domain name to use HTTPS."
    }), `
`, _jsx(_components.h3, {
      id: "how-to-adjust-the-video-resolution",
      children: "How to adjust the video resolution?"
    }), `
`, _jsx(_components.h4, {
      id: "video-resolution-in-a-classroom",
      children: "Video resolution in a classroom"
    }), `
`, _jsxs(_components.p, {
      children: ["Use ", _jsx(_components.code, {
        children: "launchOption.MediaOptions"
      }), " configurations of the web client to adjust the resolution in a classroom:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["To adjust the small stream resolution use: ", _jsx(_components.code, {
          children: "launchOption.MediaOptions.lowStreamCameraEncoderConfiguration"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["To adjust the large stream resolution use: ", _jsx(_components.code, {
          children: "launchOption.mediaOptions.cameraEncoderConfiguration"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["To adjust the screen sharing resolution use: ", _jsx(_components.code, {
          children: "launchOption.mediaOptions.screenShareEncoderConfiguration"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The following sample code illustrates how to modify the resolution of small and large streams:"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "AgoraEduSDK."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "launch"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(appRef.current, {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    ..."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "launchOption,"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    recordUrl,"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    courseWareList,"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    uiMode: homeStore.theme,"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    virtualBackgroundImages,"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    virtualBackgroundVideos,"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    mediaOptions: {"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        cameraEncoderConfiguration: {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            width: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1280"
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
              children: "            height: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "720"
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
              children: "            frameRate: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "30"
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
              children: "            bitrate: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1710"
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
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        lowStreamCameraEncoderConfiguration: {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            width: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1280"
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
              children: "            height: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "720"
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
              children: "            frameRate: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "30"
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
              children: "            bitrate: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1710"
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
              children: "    },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    listener"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "evt"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " AgoraEduClassroomEvent"
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
              children: "type"
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
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "        // Add logic for handling events here"
            })
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
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "});"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "recording-video-resolution",
      children: "Recording video resolution"
    }), `
`, _jsxs(_components.p, {
      children: ["Adjust the resolution of class recordings in the web client by changing the ", _jsx(_components.code, {
        children: "webRecordConfig"
      }), " in the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api#set-the-recording-state",
        children: "Set recording state"
      }), " RESTful API:"]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "get "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "recordArgs"
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
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "recordUrl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "rteEngineConfig"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "recordRetryTimeout"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " } "
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
              children: " EduClassroomConfig.shared;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " args"
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
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        webRecordConfig: {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            rootUrl: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "`${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "recordUrl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}?language=${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "rteEngineConfig"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "language"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}`"
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
              children: "            videoBitrate: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "3000"
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
              children: "            videoWidth: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1280"
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
              children: "            videoHeight: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "720"
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
              children: "            videoFps: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "15"
            })]
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
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        mode: RecordMode.Web,"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        retryTimeout: recordRetryTimeout,"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    };"
            })
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
              children: " args;"
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
`, _jsx(_components.h3, {
      id: "when-using-screen-sharing-the-error-please-enable-screen-recording-permission-first-is-reported",
      children: "When using screen sharing, the error 'Please enable screen recording permission first' is reported."
    }), `
`, _jsx(_components.p, {
      children: "If you encounter this error when you enable screen sharing, it means that you have not granted the screen recording permission."
    }), `
`, _jsxs(_components.p, {
      children: ["Taking the macOS system as an example, you can enable the corresponding permission in ", _jsx(_components.strong, {
        children: "System Settings"
      }), " > ", _jsx(_components.strong, {
        children: "Privacy and Security"
      }), " > ", _jsx(_components.strong, {
        children: "Screen & System Audio Recording"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/faq/screen_system_audio_recording.png",
        alt: "video disabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "Enable screen recording permission for AgoraFlexibleClassroom:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/faq/enable_fcr.png",
        alt: "enable fcr"
      })
    }), `
`, _jsx(_components.h3, {
      id: "what-if-the-screen-sharing-feature-is-invalid-after-embedding-flexible-classroom-with-iframe",
      children: "What if the screen sharing feature is invalid after embedding Flexible Classroom with iframe?"
    }), `
`, _jsxs(_components.p, {
      children: ["You can use the iframe ", _jsx(_components.code, {
        children: "allow"
      }), " attribute to add ", _jsx(_components.code, {
        children: "display-capture"
      }), " parameters for screen sharing. The code example is as follows:"]
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
              children: "iframe"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  src"
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
              children: '"https://your-classroom-url.example.com"'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  width"
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
              children: '"100%"'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  height"
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
              children: '"100%"'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  frameborder"
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
              children: '"0"'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  scrolling"
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
              children: '"no"'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  allowfullscreen"
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
              children: '"allowfullscreen"'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  allow"
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
              children: '"display-capture; geolocation; microphone; camera; midi; encrypted-media;"'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  referrerpolicy"
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
              children: '"no-referrer"'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "></"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "iframe"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "are-there-any-specific-network-bandwidth-requirements-for-live-streaming",
      children: "Are there any specific network bandwidth requirements for live streaming?"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Teacher's device: Exclusive broadband and uplink speed of at least 10 Mbps and 4 Mbps, respectively."
      }), `
`, _jsx(_components.li, {
        children: "Student's device: Exclusive broadband of at least 4 Mbps."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "how-do-i-troubleshoot-frequent-freezing-unclear-audio-blank-or-black-screens-or-failed-courseware-loading",
      children: "How do I troubleshoot frequent freezing, unclear audio, blank or black screens, or failed courseware loading?"
    }), `
`, _jsx(_components.p, {
      children: "If you experience these network issues, try the following steps to improve your connection:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Restart your router and reconnect to the network."
      }), `
`, _jsx(_components.li, {
        children: "Move your device closer to the router, ensuring there are no walls or obstructions in between."
      }), `
`, _jsx(_components.li, {
        children: "Disconnect other devices or applications that may be using bandwidth, such as download programs, streaming services, cloud storage applications, or networked TV boxes."
      }), `
`, _jsx(_components.li, {
        children: "Switch to a different network, such as a 4G hotspot, and re-enter the classroom."
      }), `
`, _jsx(_components.li, {
        children: "Restart your device."
      }), `
`, _jsx(_components.li, {
        children: "Disable any VPNs or network proxies."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "what-if-the-students-cant-hear-the-teachers-voice",
      children: "What if the students can't hear the teacher's voice?"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Check whether the teacher's microphone is turned on."
      }), `
`, _jsx(_components.li, {
        children: "Check the student network status."
      }), `
`, _jsx(_components.li, {
        children: "Check that the student speakers, including volume mixer and browser, are muted."
      }), `
`, _jsx(_components.li, {
        children: "Check whether the speaker device used in the student class is selected correctly."
      }), `
`, _jsx(_components.li, {
        children: "Exit and re-enter the classroom or restart the device."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "what-if-the-teacher-cannot-hear-the-students",
      children: "What if the teacher cannot hear the students?"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Check that the students are on stage and have their microphone turned on."
      }), `
`, _jsx(_components.li, {
        children: "Check that the teacher's speakers, including the volume mixer and browser, are muted."
      }), `
`, _jsx(_components.li, {
        children: "Check whether the teacher's speaker device is selected correctly."
      }), `
`, _jsx(_components.li, {
        children: "Exit and re-enter the classroom or restart the device."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "how-to-enable-screen-sharing-with-audio",
      children: "How to enable screen sharing with audio?"
    }), `
`, _jsx(_components.h3, {
      id: "web",
      children: "Web"
    }), `
`, _jsx(_components.p, {
      children: "Web screen sharing is only supported in Chrome version 74 and above on Windows and macOS, including the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Windows supports audio sharing when sharing the entire screen or a Chrome tab, but not when sharing an app window."
      }), `
`, _jsxs(_components.li, {
        children: ["macOS supports sharing audio when sharing a Chrome tab. After setting ", _jsx(_components.code, {
          children: "withAudio"
        }), " to ", _jsx(_components.code, {
          children: "true"
        }), ", check the share audio box in the screen sharing pop-up."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "electron",
      children: "Electron"
    }), `
`, _jsx(_components.p, {
      children: "The Electron terminal supports sharing system audio on Windows."
    }), `
`, _jsxs(_components.p, {
      children: ["On macOS, use a virtual sound card to capture and share system sounds. If the user uses a virtual sound card, such as Soundflower, you can pass its name (", _jsx(_components.code, {
        children: '"soundflower"'
      }), ") as a parameter. The SDK will find the corresponding virtual sound card device and start capturing."]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Note"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["The default sound card on macOS does not support capture. To enable this feature, the app needs to enable a virtual sound card and pass its name (", _jsx(_components.code, {
            children: "deviceName"
          }), ") to the SDK. Agora has tested and recommends Soundflower as the virtual sound card."]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "On macOS, screen sharing with audio is turned off by default. For Flexible Classroom versions 2.8.21 and above, if you need to enable it, modify the source code. The specific modification steps are as follows:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Display screen sharing with audio at the UI level."
        }), `
`, _jsxs(_components.p, {
          children: ["Code path: ", _jsx(_components.code, {
            children: "packages/agora-classroom-sdk/src/infra/capabilities/containers/dialog/screen-picker/index.tsx"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Pass the name of the virtual sound card on macOS."
        }), `
`, _jsxs(_components.p, {
          children: ["Code path: ", _jsx(_components.code, {
            children: "packages/agora-classroom-sdk/src/infra/stores/common/toolbar/index.ts"
          }), ". The code is as follows:"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/faq/screen_share_capture.png",
            alt: "screen share capture"
          })
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
