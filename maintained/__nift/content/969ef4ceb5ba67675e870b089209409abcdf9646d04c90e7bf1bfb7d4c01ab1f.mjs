import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How does an app crash affect cloud recording?"
};
export let _markdown = `

If an app integrated with cloud recording crashes, the recording session is not affected. You can continue to use the original resource ID and recording ID to control the recording instance, such as to query recording status or stop recording.

<CalloutContainer type="info">
  <CalloutDescription>
    Do not call \`acquire\` or \`start\` again with the same App ID, channel name, and UID. Doing so may cause an error or create a new recording instance.
  </CalloutDescription>
</CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "If an app integrated with cloud recording crashes, the recording session is not affected. You can continue to use the original resource ID and recording ID to control the recording instance, such as to query recording status or stop recording."
  }, {
    heading: undefined,
    content: "Do not call `acquire` or `start` again with the same App ID, channel name, and UID. Doing so may cause an error or create a new recording instance."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "If an app integrated with cloud recording crashes, the recording session is not affected. You can continue to use the original resource ID and recording ID to control the recording instance, such as to query recording status or stop recording."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Do not call ", _jsx(_components.code, {
            children: "acquire"
          }), " or ", _jsx(_components.code, {
            children: "start"
          }), " again with the same App ID, channel name, and UID. Doing so may cause an error or create a new recording instance."]
        })
      })
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
