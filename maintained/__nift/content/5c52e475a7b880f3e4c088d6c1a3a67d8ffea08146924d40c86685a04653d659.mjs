import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How to deal with the sudden silent audio or black video due to tracks being stopped?"
};
export let _markdown = `

## Problem [#problem]

During a call or live broadcast, the audio that a web client is sending suddenly becomes silent, or the video goes black. After checking the log, you find that this occurred because the audio or video track stopped.

## Reason [#reason]

The most likely reasons why a track would stop are a loose or poor connection, or the device has been disconnected.

## Solution [#solution]

The applicable solution depends on the version of the Web SDK you are using.

### Web SDK v3.x [#web-sdk-v3x]

The Web SDK v3.x does not support hot plugging. If you remove a device and reconnect it in, you must create a new stream. You can fix the issues of silent audio or black video due to stopped tracks as follows:

1. Listen for the \`stream.on("audioTrackEnded")\` and \`stream.on("videoTrackEnded")\` events.
2. When the SDK triggers the \`stream.on("audioTrackEnded")\` or \`stream.on("videoTrackEnded")\` event, use a popup window to remind the end user to check whether the device is working or to reconnect the device.
3. Call \`unpublish\` to stop publishing the audio or video stream.
4. Call \`createStream\` to recreate the audio or video stream object.

### Web 4.x [#web-4x]

The Web SDK v4.x supports hot plugging. You can fix the issues of silent audio or black video due to stopped tracks as follows:

1. Listen for the \`localTrack.on("track-ended")\` event.
2. When the SDK triggers the \`localTrack.on("track-ended")\` event, use a popup window to remind the end user to check whether the device is working or to reconnect the device.
3. Listen for the \`AgoraRTC.onMicrophoneChanged\` or \`AgoraRTC.onCameraChanged\` callback to get the device status. When the device is connected, call \`MicrophoneAudioTrack.setDevice\` or \`CameraVideoTrack.setDevice\` to use the device.

## See also [#see-also]

* [Device management](/en/realtime-media/rtc/build/control-audio-and-devices/set-audio-route/web)
`;
export let structuredData = {
  contents: [{
    heading: "problem",
    content: "During a call or live broadcast, the audio that a web client is sending suddenly becomes silent, or the video goes black. After checking the log, you find that this occurred because the audio or video track stopped."
  }, {
    heading: "reason",
    content: "The most likely reasons why a track would stop are a loose or poor connection, or the device has been disconnected."
  }, {
    heading: "solution",
    content: "The applicable solution depends on the version of the Web SDK you are using."
  }, {
    heading: "web-sdk-v3x",
    content: "The Web SDK v3.x does not support hot plugging. If you remove a device and reconnect it in, you must create a new stream. You can fix the issues of silent audio or black video due to stopped tracks as follows:"
  }, {
    heading: "web-sdk-v3x",
    content: 'Listen for the `stream.on("audioTrackEnded")` and `stream.on("videoTrackEnded")` events.'
  }, {
    heading: "web-sdk-v3x",
    content: 'When the SDK triggers the `stream.on("audioTrackEnded")` or `stream.on("videoTrackEnded")` event, use a popup window to remind the end user to check whether the device is working or to reconnect the device.'
  }, {
    heading: "web-sdk-v3x",
    content: "Call `unpublish` to stop publishing the audio or video stream."
  }, {
    heading: "web-sdk-v3x",
    content: "Call `createStream` to recreate the audio or video stream object."
  }, {
    heading: "web-4x",
    content: "The Web SDK v4.x supports hot plugging. You can fix the issues of silent audio or black video due to stopped tracks as follows:"
  }, {
    heading: "web-4x",
    content: 'Listen for the `localTrack.on("track-ended")` event.'
  }, {
    heading: "web-4x",
    content: 'When the SDK triggers the `localTrack.on("track-ended")` event, use a popup window to remind the end user to check whether the device is working or to reconnect the device.'
  }, {
    heading: "web-4x",
    content: "Listen for the `AgoraRTC.onMicrophoneChanged` or `AgoraRTC.onCameraChanged` callback to get the device status. When the device is connected, call `MicrophoneAudioTrack.setDevice` or `CameraVideoTrack.setDevice` to use the device."
  }, {
    heading: "see-also",
    content: "Device management"
  }],
  headings: [{
    id: "problem",
    content: "Problem"
  }, {
    id: "reason",
    content: "Reason"
  }, {
    id: "solution",
    content: "Solution"
  }, {
    id: "web-sdk-v3x",
    content: "Web SDK v3.x"
  }, {
    id: "web-4x",
    content: "Web 4.x"
  }, {
    id: "see-also",
    content: "See also"
  }]
};
export let toc = [{
  depth: 2,
  url: "#problem",
  title: _jsx(_Fragment, {
    children: "Problem"
  })
}, {
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
}, {
  depth: 3,
  url: "#web-sdk-v3x",
  title: _jsx(_Fragment, {
    children: "Web SDK v3.x"
  })
}, {
  depth: 3,
  url: "#web-4x",
  title: _jsx(_Fragment, {
    children: "Web 4.x"
  })
}, {
  depth: 2,
  url: "#see-also",
  title: _jsx(_Fragment, {
    children: "See also"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "problem",
      children: "Problem"
    }), `
`, _jsx(_components.p, {
      children: "During a call or live broadcast, the audio that a web client is sending suddenly becomes silent, or the video goes black. After checking the log, you find that this occurred because the audio or video track stopped."
    }), `
`, _jsx(_components.h2, {
      id: "reason",
      children: "Reason"
    }), `
`, _jsx(_components.p, {
      children: "The most likely reasons why a track would stop are a loose or poor connection, or the device has been disconnected."
    }), `
`, _jsx(_components.h2, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsx(_components.p, {
      children: "The applicable solution depends on the version of the Web SDK you are using."
    }), `
`, _jsx(_components.h3, {
      id: "web-sdk-v3x",
      children: "Web SDK v3.x"
    }), `
`, _jsx(_components.p, {
      children: "The Web SDK v3.x does not support hot plugging. If you remove a device and reconnect it in, you must create a new stream. You can fix the issues of silent audio or black video due to stopped tracks as follows:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Listen for the ", _jsx(_components.code, {
          children: 'stream.on("audioTrackEnded")'
        }), " and ", _jsx(_components.code, {
          children: 'stream.on("videoTrackEnded")'
        }), " events."]
      }), `
`, _jsxs(_components.li, {
        children: ["When the SDK triggers the ", _jsx(_components.code, {
          children: 'stream.on("audioTrackEnded")'
        }), " or ", _jsx(_components.code, {
          children: 'stream.on("videoTrackEnded")'
        }), " event, use a popup window to remind the end user to check whether the device is working or to reconnect the device."]
      }), `
`, _jsxs(_components.li, {
        children: ["Call ", _jsx(_components.code, {
          children: "unpublish"
        }), " to stop publishing the audio or video stream."]
      }), `
`, _jsxs(_components.li, {
        children: ["Call ", _jsx(_components.code, {
          children: "createStream"
        }), " to recreate the audio or video stream object."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "web-4x",
      children: "Web 4.x"
    }), `
`, _jsx(_components.p, {
      children: "The Web SDK v4.x supports hot plugging. You can fix the issues of silent audio or black video due to stopped tracks as follows:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Listen for the ", _jsx(_components.code, {
          children: 'localTrack.on("track-ended")'
        }), " event."]
      }), `
`, _jsxs(_components.li, {
        children: ["When the SDK triggers the ", _jsx(_components.code, {
          children: 'localTrack.on("track-ended")'
        }), " event, use a popup window to remind the end user to check whether the device is working or to reconnect the device."]
      }), `
`, _jsxs(_components.li, {
        children: ["Listen for the ", _jsx(_components.code, {
          children: "AgoraRTC.onMicrophoneChanged"
        }), " or ", _jsx(_components.code, {
          children: "AgoraRTC.onCameraChanged"
        }), " callback to get the device status. When the device is connected, call ", _jsx(_components.code, {
          children: "MicrophoneAudioTrack.setDevice"
        }), " or ", _jsx(_components.code, {
          children: "CameraVideoTrack.setDevice"
        }), " to use the device."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "see-also",
      children: "See also"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtc/build/control-audio-and-devices/set-audio-route/web",
          children: "Device management"
        })
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
