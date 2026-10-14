import { jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How do I set the video profile of the recorded video?"
};
export let _markdown = `

This article has been moved to [Set the Video Profile](/en/realtime-media/cloud-recording/build/customize-the-recording/recording-video-profile).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This article has been moved to Set the Video Profile."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return _jsxs(_components.p, {
    children: ["This article has been moved to ", _jsx(_components.a, {
      href: "/en/realtime-media/cloud-recording/build/customize-the-recording/recording-video-profile",
      children: "Set the Video Profile"
    }), "."]
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
