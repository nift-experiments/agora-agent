import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why don't music files automatically resume playing after hanging up a system call on an Android device?"
};
export let _markdown = `

The \`startAudioMixing\` method is called to play a music file on an Android device. During the playback process, the system's built-in phone software is used to answer or make a call. After hanging up the phone, the music file does not automatically resume playback.

## Reason [#reason]

The SDK cannot determine whether the system phone has finished using the audio output device, so music files will not resume playback automatically.

## Solution [#solution]

After calling the \`startAudioMixing\` method, it is recommended to listen for phone events using the native Android method \`PhoneStateListener\` and perform the following steps:

1. When you answer or make a call, call the \`getAudioMixingCurrentPosition\` method to get the playing progress of the music file.
2. After hanging up the phone, call \`startAudioMixing\` method again to play the music file, and then call \`setAudioMixingPosition\` method to restore the playback progress.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The `startAudioMixing` method is called to play a music file on an Android device. During the playback process, the system's built-in phone software is used to answer or make a call. After hanging up the phone, the music file does not automatically resume playback."
  }, {
    heading: "reason",
    content: "The SDK cannot determine whether the system phone has finished using the audio output device, so music files will not resume playback automatically."
  }, {
    heading: "solution",
    content: "After calling the `startAudioMixing` method, it is recommended to listen for phone events using the native Android method `PhoneStateListener` and perform the following steps:"
  }, {
    heading: "solution",
    content: "When you answer or make a call, call the `getAudioMixingCurrentPosition` method to get the playing progress of the music file."
  }, {
    heading: "solution",
    content: "After hanging up the phone, call `startAudioMixing` method again to play the music file, and then call `setAudioMixingPosition` method to restore the playback progress."
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
    li: "li",
    ol: "ol",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " method is called to play a music file on an Android device. During the playback process, the system's built-in phone software is used to answer or make a call. After hanging up the phone, the music file does not automatically resume playback."]
    }), `
`, _jsx(_components.h2, {
      id: "reason",
      children: "Reason"
    }), `
`, _jsx(_components.p, {
      children: "The SDK cannot determine whether the system phone has finished using the audio output device, so music files will not resume playback automatically."
    }), `
`, _jsx(_components.h2, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsxs(_components.p, {
      children: ["After calling the ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " method, it is recommended to listen for phone events using the native Android method ", _jsx(_components.code, {
        children: "PhoneStateListener"
      }), " and perform the following steps:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["When you answer or make a call, call the ", _jsx(_components.code, {
          children: "getAudioMixingCurrentPosition"
        }), " method to get the playing progress of the music file."]
      }), `
`, _jsxs(_components.li, {
        children: ["After hanging up the phone, call ", _jsx(_components.code, {
          children: "startAudioMixing"
        }), " method again to play the music file, and then call ", _jsx(_components.code, {
          children: "setAudioMixingPosition"
        }), " method to restore the playback progress."]
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
