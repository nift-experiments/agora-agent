import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why is the recording file split?"
};
export let _markdown = `

During the recording process, if the recorded audio and video format is not the recording original audio and video data format, the following situations result in file splitting:

* In the individual recording mode, a user rejoins a channel after leaving the channel, or resumes sending audio/video after not sending for a period of time. The specific rules are as follows:

* For audio recording files:
  * The user sends the audio data again after not sending for more than 15 seconds.
  * The user rejoins the channel after leaving for more than 15 seconds.

* For video recording files:

  * The user sends the video data again after not sending for more than 15 seconds.
  * The user changes the video resolution.
  * The user leaves and rejoins the channel.

* In the composite recording, if the manual recording mode is set, pause and then resume recording.

If the file splits and the above situations do not apply, check the following:

* Ensure that the same channel profile is used between the Native/Web SDK and Recording SDK.
* Call \`enableWebSdkInteroperability\` in the Native SDK when the recording channel uses both the Native and Web SDK.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "During the recording process, if the recorded audio and video format is not the recording original audio and video data format, the following situations result in file splitting:"
  }, {
    heading: undefined,
    content: "In the individual recording mode, a user rejoins a channel after leaving the channel, or resumes sending audio/video after not sending for a period of time. The specific rules are as follows:"
  }, {
    heading: undefined,
    content: "For audio recording files:"
  }, {
    heading: undefined,
    content: "The user sends the audio data again after not sending for more than 15 seconds."
  }, {
    heading: undefined,
    content: "The user rejoins the channel after leaving for more than 15 seconds."
  }, {
    heading: undefined,
    content: "For video recording files:"
  }, {
    heading: undefined,
    content: "The user sends the video data again after not sending for more than 15 seconds."
  }, {
    heading: undefined,
    content: "The user changes the video resolution."
  }, {
    heading: undefined,
    content: "The user leaves and rejoins the channel."
  }, {
    heading: undefined,
    content: "In the composite recording, if the manual recording mode is set, pause and then resume recording."
  }, {
    heading: undefined,
    content: "If the file splits and the above situations do not apply, check the following:"
  }, {
    heading: undefined,
    content: "Ensure that the same channel profile is used between the Native/Web SDK and Recording SDK."
  }, {
    heading: undefined,
    content: "Call `enableWebSdkInteroperability` in the Native SDK when the recording channel uses both the Native and Web SDK."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "During the recording process, if the recorded audio and video format is not the recording original audio and video data format, the following situations result in file splitting:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "In the individual recording mode, a user rejoins a channel after leaving the channel, or resumes sending audio/video after not sending for a period of time. The specific rules are as follows:"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "For audio recording files:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The user sends the audio data again after not sending for more than 15 seconds."
          }), `
`, _jsx(_components.li, {
            children: "The user rejoins the channel after leaving for more than 15 seconds."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "For video recording files:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The user sends the video data again after not sending for more than 15 seconds."
          }), `
`, _jsx(_components.li, {
            children: "The user changes the video resolution."
          }), `
`, _jsx(_components.li, {
            children: "The user leaves and rejoins the channel."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "In the composite recording, if the manual recording mode is set, pause and then resume recording."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "If the file splits and the above situations do not apply, check the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Ensure that the same channel profile is used between the Native/Web SDK and Recording SDK."
      }), `
`, _jsxs(_components.li, {
        children: ["Call ", _jsx(_components.code, {
          children: "enableWebSdkInteroperability"
        }), " in the Native SDK when the recording channel uses both the Native and Web SDK."]
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
