import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I choose the video resolution, frame rate and bitrate?"
};
export let _markdown = `

Video parameters vary on a case-by-case basis. For example:

* In a one-to-one online class, the video windows of the teacher and student are both large, which requires higher resolutions, frame rates, and bitrates.
* In a one-to-four online class, the video windows of the teacher and students are smaller, so lower resolutions, frame rates, and bitrates are used to accommodate the downward bandwidth.

The recommended parameters for different cases are as follows:

* One-to-one video call: 240p (320 x 240, 15 fps, 200 Kbps) or 360p (640 x 360, 15 fps, 400 Kbps).
* One-to-many video call: 120p (160 x 120, 15 fps, 65 Kbps), 180p (320 x 180, 15 fps, 140 Kbps), or 240p (320 x 240, 15 fps, 200 Kbps).

You can also call the \`setVideoEncoderConfiguration\` method to set the video encoding parameters, such as by increasing the bitrate to ensure the video quality. Higher bitrates, frame rates, and resolutions improve the video quality but may cause jitter and increase costs.

Generally speaking, a live stream requires a higher bitrate to ensure high-video quality. Agora recommends setting the bitrate of live interactive streaming to two times that of a voice/video call. See [Configure video encoding](/en/realtime-media/rtc/build/capture-and-render-video/configure-video-encoding/android).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Video parameters vary on a case-by-case basis. For example:"
  }, {
    heading: undefined,
    content: "In a one-to-one online class, the video windows of the teacher and student are both large, which requires higher resolutions, frame rates, and bitrates."
  }, {
    heading: undefined,
    content: "In a one-to-four online class, the video windows of the teacher and students are smaller, so lower resolutions, frame rates, and bitrates are used to accommodate the downward bandwidth."
  }, {
    heading: undefined,
    content: "The recommended parameters for different cases are as follows:"
  }, {
    heading: undefined,
    content: "One-to-one video call: 240p (320 x 240, 15 fps, 200 Kbps) or 360p (640 x 360, 15 fps, 400 Kbps)."
  }, {
    heading: undefined,
    content: "One-to-many video call: 120p (160 x 120, 15 fps, 65 Kbps), 180p (320 x 180, 15 fps, 140 Kbps), or 240p (320 x 240, 15 fps, 200 Kbps)."
  }, {
    heading: undefined,
    content: "You can also call the `setVideoEncoderConfiguration` method to set the video encoding parameters, such as by increasing the bitrate to ensure the video quality. Higher bitrates, frame rates, and resolutions improve the video quality but may cause jitter and increase costs."
  }, {
    heading: undefined,
    content: "Generally speaking, a live stream requires a higher bitrate to ensure high-video quality. Agora recommends setting the bitrate of live interactive streaming to two times that of a voice/video call. See Configure video encoding."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Video parameters vary on a case-by-case basis. For example:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "In a one-to-one online class, the video windows of the teacher and student are both large, which requires higher resolutions, frame rates, and bitrates."
      }), `
`, _jsx(_components.li, {
        children: "In a one-to-four online class, the video windows of the teacher and students are smaller, so lower resolutions, frame rates, and bitrates are used to accommodate the downward bandwidth."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The recommended parameters for different cases are as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "One-to-one video call: 240p (320 x 240, 15 fps, 200 Kbps) or 360p (640 x 360, 15 fps, 400 Kbps)."
      }), `
`, _jsx(_components.li, {
        children: "One-to-many video call: 120p (160 x 120, 15 fps, 65 Kbps), 180p (320 x 180, 15 fps, 140 Kbps), or 240p (320 x 240, 15 fps, 200 Kbps)."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["You can also call the ", _jsx(_components.code, {
        children: "setVideoEncoderConfiguration"
      }), " method to set the video encoding parameters, such as by increasing the bitrate to ensure the video quality. Higher bitrates, frame rates, and resolutions improve the video quality but may cause jitter and increase costs."]
    }), `
`, _jsxs(_components.p, {
      children: ["Generally speaking, a live stream requires a higher bitrate to ensure high-video quality. Agora recommends setting the bitrate of live interactive streaming to two times that of a voice/video call. See ", _jsx(_components.a, {
        href: "/en/realtime-media/rtc/build/capture-and-render-video/configure-video-encoding/android",
        children: "Configure video encoding"
      }), "."]
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
