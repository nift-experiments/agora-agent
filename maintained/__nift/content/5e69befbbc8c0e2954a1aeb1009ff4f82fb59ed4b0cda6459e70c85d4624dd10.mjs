import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I switch between the screen-sharing stream and the camera stream?"
};
export let _markdown = `

<CalloutContainer type="info">
  <CalloutDescription>
    This article only applies to the Agora Web SDK 3.x and earlier versions.
  </CalloutDescription>
</CalloutContainer>

This page introduces three solutions for switching between the screen-sharing stream and the stream captured by the camera in a [screen-sharing](/en/realtime-media/rtc/build/capture-and-render-video/screen-sharing) scenario using the Agora RTC SDK for Web.

Switching from the screen-sharing stream to the camera stream and vice versa are the same process. The following solutions take the first case as an example.

## Solution 1: Create two streams [#solution-1-create-two-streams]

Create two Client objects on the sender, which correspond to the screen-sharing stream and the camera stream. See [Share the Screen](/en/realtime-media/rtc/build/capture-and-render-video/screen-sharing) for details.

To switch from the screen-sharing stream to the camera stream, subscribe to the camera stream on the receiver.

We recommend this solution if your application scenario allows creating two streams at the same time.

## Solution 2: Close the current stream and publish a new stream [#solution-2-close-the-current-stream-and-publish-a-new-stream]

1. Call \`Client.unpublish\` and \`Stream.close\` in sequence to unpublish and close the current screen-sharing stream.
2. Call \`AgoraRTC.createStream\` to create a new local video stream.
3. Call \`Stream.init\` and \`Stream.publish\` to initialize and publish the stream.

This solution is reliable and works with multiple browsers and platforms, but it does not support dynamic switching. You may need to allow for a couple of seconds to switch streams.

## Solution 3: Replace the current video track [#solution-3-replace-the-current-video-track]

Call \`Stream.replaceTrack\` to replace the video track in the local stream with the screen-sharing stream.

<CalloutContainer type="info">
  <CalloutDescription>
    After replacing the video track with the screen-sharing stream, the encoding frame rate decreases to 5 fps.
  </CalloutDescription>
</CalloutContainer>

This solution supports dynamic switching, but the \`replaceTrack\` method has the following limitations:

* Supports only Chrome 65+, Safari and the latest Firefox browser.
* Does not take effect on some mobile devices.
* Does not support switching to a screen-sharing stream in dual-stream mode.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This article only applies to the Agora Web SDK 3.x and earlier versions."
  }, {
    heading: undefined,
    content: "This page introduces three solutions for switching between the screen-sharing stream and the stream captured by the camera in a screen-sharing scenario using the Agora RTC SDK for Web."
  }, {
    heading: undefined,
    content: "Switching from the screen-sharing stream to the camera stream and vice versa are the same process. The following solutions take the first case as an example."
  }, {
    heading: "solution-1-create-two-streams",
    content: "Create two Client objects on the sender, which correspond to the screen-sharing stream and the camera stream. See Share the Screen for details."
  }, {
    heading: "solution-1-create-two-streams",
    content: "To switch from the screen-sharing stream to the camera stream, subscribe to the camera stream on the receiver."
  }, {
    heading: "solution-1-create-two-streams",
    content: "We recommend this solution if your application scenario allows creating two streams at the same time."
  }, {
    heading: "solution-2-close-the-current-stream-and-publish-a-new-stream",
    content: "Call `Client.unpublish` and `Stream.close` in sequence to unpublish and close the current screen-sharing stream."
  }, {
    heading: "solution-2-close-the-current-stream-and-publish-a-new-stream",
    content: "Call `AgoraRTC.createStream` to create a new local video stream."
  }, {
    heading: "solution-2-close-the-current-stream-and-publish-a-new-stream",
    content: "Call `Stream.init` and `Stream.publish` to initialize and publish the stream."
  }, {
    heading: "solution-2-close-the-current-stream-and-publish-a-new-stream",
    content: "This solution is reliable and works with multiple browsers and platforms, but it does not support dynamic switching. You may need to allow for a couple of seconds to switch streams."
  }, {
    heading: "solution-3-replace-the-current-video-track",
    content: "Call `Stream.replaceTrack` to replace the video track in the local stream with the screen-sharing stream."
  }, {
    heading: "solution-3-replace-the-current-video-track",
    content: "After replacing the video track with the screen-sharing stream, the encoding frame rate decreases to 5 fps."
  }, {
    heading: "solution-3-replace-the-current-video-track",
    content: "This solution supports dynamic switching, but the `replaceTrack` method has the following limitations:"
  }, {
    heading: "solution-3-replace-the-current-video-track",
    content: "Supports only Chrome 65+, Safari and the latest Firefox browser."
  }, {
    heading: "solution-3-replace-the-current-video-track",
    content: "Does not take effect on some mobile devices."
  }, {
    heading: "solution-3-replace-the-current-video-track",
    content: "Does not support switching to a screen-sharing stream in dual-stream mode."
  }],
  headings: [{
    id: "solution-1-create-two-streams",
    content: "Solution 1: Create two streams"
  }, {
    id: "solution-2-close-the-current-stream-and-publish-a-new-stream",
    content: "Solution 2: Close the current stream and publish a new stream"
  }, {
    id: "solution-3-replace-the-current-video-track",
    content: "Solution 3: Replace the current video track"
  }]
};
export let toc = [{
  depth: 2,
  url: "#solution-1-create-two-streams",
  title: _jsx(_Fragment, {
    children: "Solution 1: Create two streams"
  })
}, {
  depth: 2,
  url: "#solution-2-close-the-current-stream-and-publish-a-new-stream",
  title: _jsx(_Fragment, {
    children: "Solution 2: Close the current stream and publish a new stream"
  })
}, {
  depth: 2,
  url: "#solution-3-replace-the-current-video-track",
  title: _jsx(_Fragment, {
    children: "Solution 3: Replace the current video track"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
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
        children: _jsx(_components.p, {
          children: "This article only applies to the Agora Web SDK 3.x and earlier versions."
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["This page introduces three solutions for switching between the screen-sharing stream and the stream captured by the camera in a ", _jsx(_components.a, {
        href: "/en/realtime-media/rtc/build/capture-and-render-video/screen-sharing",
        children: "screen-sharing"
      }), " scenario using the Agora RTC SDK for Web."]
    }), `
`, _jsx(_components.p, {
      children: "Switching from the screen-sharing stream to the camera stream and vice versa are the same process. The following solutions take the first case as an example."
    }), `
`, _jsx(_components.h2, {
      id: "solution-1-create-two-streams",
      children: "Solution 1: Create two streams"
    }), `
`, _jsxs(_components.p, {
      children: ["Create two Client objects on the sender, which correspond to the screen-sharing stream and the camera stream. See ", _jsx(_components.a, {
        href: "/en/realtime-media/rtc/build/capture-and-render-video/screen-sharing",
        children: "Share the Screen"
      }), " for details."]
    }), `
`, _jsx(_components.p, {
      children: "To switch from the screen-sharing stream to the camera stream, subscribe to the camera stream on the receiver."
    }), `
`, _jsx(_components.p, {
      children: "We recommend this solution if your application scenario allows creating two streams at the same time."
    }), `
`, _jsx(_components.h2, {
      id: "solution-2-close-the-current-stream-and-publish-a-new-stream",
      children: "Solution 2: Close the current stream and publish a new stream"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Call ", _jsx(_components.code, {
          children: "Client.unpublish"
        }), " and ", _jsx(_components.code, {
          children: "Stream.close"
        }), " in sequence to unpublish and close the current screen-sharing stream."]
      }), `
`, _jsxs(_components.li, {
        children: ["Call ", _jsx(_components.code, {
          children: "AgoraRTC.createStream"
        }), " to create a new local video stream."]
      }), `
`, _jsxs(_components.li, {
        children: ["Call ", _jsx(_components.code, {
          children: "Stream.init"
        }), " and ", _jsx(_components.code, {
          children: "Stream.publish"
        }), " to initialize and publish the stream."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "This solution is reliable and works with multiple browsers and platforms, but it does not support dynamic switching. You may need to allow for a couple of seconds to switch streams."
    }), `
`, _jsx(_components.h2, {
      id: "solution-3-replace-the-current-video-track",
      children: "Solution 3: Replace the current video track"
    }), `
`, _jsxs(_components.p, {
      children: ["Call ", _jsx(_components.code, {
        children: "Stream.replaceTrack"
      }), " to replace the video track in the local stream with the screen-sharing stream."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "After replacing the video track with the screen-sharing stream, the encoding frame rate decreases to 5 fps."
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["This solution supports dynamic switching, but the ", _jsx(_components.code, {
        children: "replaceTrack"
      }), " method has the following limitations:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Supports only Chrome 65+, Safari and the latest Firefox browser."
      }), `
`, _jsx(_components.li, {
        children: "Does not take effect on some mobile devices."
      }), `
`, _jsx(_components.li, {
        children: "Does not support switching to a screen-sharing stream in dual-stream mode."
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
