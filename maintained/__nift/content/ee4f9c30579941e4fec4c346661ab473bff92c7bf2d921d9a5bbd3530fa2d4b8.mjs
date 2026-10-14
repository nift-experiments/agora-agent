import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I stop cloud recording?"
};
export let _markdown = `

You can call the [\`stop\`](/en/realtime-media/cloud-recording/reference/restful-api#stop) method to leave the channel and stop recording.

Agora Cloud Recording automatically stops recording and leaves the channel when there is no user in the recording channel after a time period (30 seconds by default). You can set this timeout interval by the \`maxIdleTime\` parameter when you start the recording.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "You can call the `stop` method to leave the channel and stop recording."
  }, {
    heading: undefined,
    content: "Agora Cloud Recording automatically stops recording and leaves the channel when there is no user in the recording channel after a time period (30 seconds by default). You can set this timeout interval by the `maxIdleTime` parameter when you start the recording."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["You can call the ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/reference/restful-api#stop",
        children: _jsx(_components.code, {
          children: "stop"
        })
      }), " method to leave the channel and stop recording."]
    }), `
`, _jsxs(_components.p, {
      children: ["Agora Cloud Recording automatically stops recording and leaves the channel when there is no user in the recording channel after a time period (30 seconds by default). You can set this timeout interval by the ", _jsx(_components.code, {
        children: "maxIdleTime"
      }), " parameter when you start the recording."]
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
