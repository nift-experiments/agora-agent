import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "What's the difference between individual recording mode and composite recording mode?"
};
export let _markdown = `

If you want more flexibility in processing the recorded files, choose individual recording mode. For example, in an online classroom, if parents want to see the video of the teacher and their child only, you can use individual recording mode to record the teacher and all students separately, and then combine the teacher's video with each of the students' video. Or, if you want to moderate the content in the recorded files and identify the UID that has the violating content, choose individual recording mode so that you can moderate the audio and video of each user separately.

In other cases, choose composite recording mode. For example, if you want to record a live interactive streaming channel with multiple hosts, composite recording mode allows you to store the audio and video of all hosts in one file, with no need to combine them after recording.

For detailed information about how to implement each recording mode and their features, see:

* On-Premise Recording: [Individual Recording](/en/realtime-media/on-premise-recording/build/record-audio-and-video/individual-mode) and [Composite Recording](/en/realtime-media/on-premise-recording/build/record-audio-and-video/composite-mode).
* Cloud Recording: [Individual Recording](/en/realtime-media/cloud-recording/build/start-a-recording/individual-mode) and [Composite Recording](/en/realtime-media/cloud-recording/build/start-a-recording/composite-mode).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "If you want more flexibility in processing the recorded files, choose individual recording mode. For example, in an online classroom, if parents want to see the video of the teacher and their child only, you can use individual recording mode to record the teacher and all students separately, and then combine the teacher's video with each of the students' video. Or, if you want to moderate the content in the recorded files and identify the UID that has the violating content, choose individual recording mode so that you can moderate the audio and video of each user separately."
  }, {
    heading: undefined,
    content: "In other cases, choose composite recording mode. For example, if you want to record a live interactive streaming channel with multiple hosts, composite recording mode allows you to store the audio and video of all hosts in one file, with no need to combine them after recording."
  }, {
    heading: undefined,
    content: "For detailed information about how to implement each recording mode and their features, see:"
  }, {
    heading: undefined,
    content: "On-Premise Recording: Individual Recording and Composite Recording."
  }, {
    heading: undefined,
    content: "Cloud Recording: Individual Recording and Composite Recording."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "If you want more flexibility in processing the recorded files, choose individual recording mode. For example, in an online classroom, if parents want to see the video of the teacher and their child only, you can use individual recording mode to record the teacher and all students separately, and then combine the teacher's video with each of the students' video. Or, if you want to moderate the content in the recorded files and identify the UID that has the violating content, choose individual recording mode so that you can moderate the audio and video of each user separately."
    }), `
`, _jsx(_components.p, {
      children: "In other cases, choose composite recording mode. For example, if you want to record a live interactive streaming channel with multiple hosts, composite recording mode allows you to store the audio and video of all hosts in one file, with no need to combine them after recording."
    }), `
`, _jsx(_components.p, {
      children: "For detailed information about how to implement each recording mode and their features, see:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["On-Premise Recording: ", _jsx(_components.a, {
          href: "/en/realtime-media/on-premise-recording/build/record-audio-and-video/individual-mode",
          children: "Individual Recording"
        }), " and ", _jsx(_components.a, {
          href: "/en/realtime-media/on-premise-recording/build/record-audio-and-video/composite-mode",
          children: "Composite Recording"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Cloud Recording: ", _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording/build/start-a-recording/individual-mode",
          children: "Individual Recording"
        }), " and ", _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording/build/start-a-recording/composite-mode",
          children: "Composite Recording"
        }), "."]
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
