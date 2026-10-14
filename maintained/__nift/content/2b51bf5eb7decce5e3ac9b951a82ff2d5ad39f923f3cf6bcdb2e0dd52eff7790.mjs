import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why is the camera light still on after I disable my video on the Web?"
};
export let _markdown = `

When you use the Agora RTC SDK Web SDK to disable local video through \`muteVideo\`, the camera light stays on.

## Reason [#reason]

The Web SDK does not support enabling/disabling video capture independently. Calling \`muteVideo\` for a local stream essentially sets \`MediaStreamTrack.enabled\` to \`false\`, but black video frames are still being sent, and the video capture is not disabled. Therefore, the camera light remains on.

## Solution [#solution]

Calling \`close\` stops the video capture and turns off the camera light, but it unauthorizes both the microphone and the camera, so audio sampling stops too. In the Agora Web SDK, the published object is a media stream that contains an audio track and a video track, so any operation of the stream affects both audio and video.

To quickly stop capturing and sending the local video without affecting the local audio, Agora recommends using next-generation Agora Web SDK ([Agora Web SDK NG](https://github.com/AgoraIO/API-Examples-Web)). Agora Web SDK NG publishes the audio and video track as separate objects, enabling you to disable the local video and turn off the camera light by using the [\`close\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/icameravideotrack.html#close) method of the video track object, without affecting the audio track.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When you use the Agora RTC SDK Web SDK to disable local video through `muteVideo`, the camera light stays on."
  }, {
    heading: "reason",
    content: "The Web SDK does not support enabling/disabling video capture independently. Calling `muteVideo` for a local stream essentially sets `MediaStreamTrack.enabled` to `false`, but black video frames are still being sent, and the video capture is not disabled. Therefore, the camera light remains on."
  }, {
    heading: "solution",
    content: "Calling `close` stops the video capture and turns off the camera light, but it unauthorizes both the microphone and the camera, so audio sampling stops too. In the Agora Web SDK, the published object is a media stream that contains an audio track and a video track, so any operation of the stream affects both audio and video."
  }, {
    heading: "solution",
    content: "To quickly stop capturing and sending the local video without affecting the local audio, Agora recommends using next-generation Agora Web SDK (Agora Web SDK NG). Agora Web SDK NG publishes the audio and video track as separate objects, enabling you to disable the local video and turn off the camera light by using the `close` method of the video track object, without affecting the audio track."
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
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["When you use the Agora RTC SDK Web SDK to disable local video through ", _jsx(_components.code, {
        children: "muteVideo"
      }), ", the camera light stays on."]
    }), `
`, _jsx(_components.h2, {
      id: "reason",
      children: "Reason"
    }), `
`, _jsxs(_components.p, {
      children: ["The Web SDK does not support enabling/disabling video capture independently. Calling ", _jsx(_components.code, {
        children: "muteVideo"
      }), " for a local stream essentially sets ", _jsx(_components.code, {
        children: "MediaStreamTrack.enabled"
      }), " to ", _jsx(_components.code, {
        children: "false"
      }), ", but black video frames are still being sent, and the video capture is not disabled. Therefore, the camera light remains on."]
    }), `
`, _jsx(_components.h2, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsxs(_components.p, {
      children: ["Calling ", _jsx(_components.code, {
        children: "close"
      }), " stops the video capture and turns off the camera light, but it unauthorizes both the microphone and the camera, so audio sampling stops too. In the Agora Web SDK, the published object is a media stream that contains an audio track and a video track, so any operation of the stream affects both audio and video."]
    }), `
`, _jsxs(_components.p, {
      children: ["To quickly stop capturing and sending the local video without affecting the local audio, Agora recommends using next-generation Agora Web SDK (", _jsx(_components.a, {
        href: "https://github.com/AgoraIO/API-Examples-Web",
        children: "Agora Web SDK NG"
      }), "). Agora Web SDK NG publishes the audio and video track as separate objects, enabling you to disable the local video and turn off the camera light by using the ", _jsx(_components.a, {
        href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/icameravideotrack.html#close",
        children: _jsx(_components.code, {
          children: "close"
        })
      }), " method of the video track object, without affecting the audio track."]
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
