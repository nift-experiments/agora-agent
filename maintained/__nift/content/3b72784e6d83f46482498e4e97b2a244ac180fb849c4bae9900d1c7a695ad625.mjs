import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why do crashes occur on Unity SDK v3.0.1 or earlier?"
};
export let _markdown = `

When using the Unity SDK v3.0.1 or earlier, blank screen or even crashes occur if access to the microphone or camera is not granted. This issue occurs on various platforms including macOS and Android.

## Reason [#reason]

The reason for this issue is that permission to the system microphone or camera is not granted.

Since macOS 10.14, Apple enforces stricter privacy guards. If the permission for microphone or camera usage is not properly set, apps crash.

## Solution [#solution]

The SDK does not detect whether such permissions are set. To avoid this issue, ensure that you set camera and microphone permissions in your **Unity Editor**. Go to **File** -> **Build Settings** -> **Player Settings**. On the **Player** interface, click **Other Settings**, and add descriptions to **Camera Usage Description** and **Microphone Usage Description**.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When using the Unity SDK v3.0.1 or earlier, blank screen or even crashes occur if access to the microphone or camera is not granted. This issue occurs on various platforms including macOS and Android."
  }, {
    heading: "reason",
    content: "The reason for this issue is that permission to the system microphone or camera is not granted."
  }, {
    heading: "reason",
    content: "Since macOS 10.14, Apple enforces stricter privacy guards. If the permission for microphone or camera usage is not properly set, apps crash."
  }, {
    heading: "solution",
    content: "The SDK does not detect whether such permissions are set. To avoid this issue, ensure that you set camera and microphone permissions in your **Unity Editor**. Go to **File** -> **Build Settings** -> **Player Settings**. On the **Player** interface, click **Other Settings**, and add descriptions to **Camera Usage Description** and **Microphone Usage Description**."
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
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "When using the Unity SDK v3.0.1 or earlier, blank screen or even crashes occur if access to the microphone or camera is not granted. This issue occurs on various platforms including macOS and Android."
    }), `
`, _jsx(_components.h2, {
      id: "reason",
      children: "Reason"
    }), `
`, _jsx(_components.p, {
      children: "The reason for this issue is that permission to the system microphone or camera is not granted."
    }), `
`, _jsx(_components.p, {
      children: "Since macOS 10.14, Apple enforces stricter privacy guards. If the permission for microphone or camera usage is not properly set, apps crash."
    }), `
`, _jsx(_components.h2, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsxs(_components.p, {
      children: ["The SDK does not detect whether such permissions are set. To avoid this issue, ensure that you set camera and microphone permissions in your ", _jsx(_components.strong, {
        children: "Unity Editor"
      }), ". Go to ", _jsx(_components.strong, {
        children: "File"
      }), " -> ", _jsx(_components.strong, {
        children: "Build Settings"
      }), " -> ", _jsx(_components.strong, {
        children: "Player Settings"
      }), ". On the ", _jsx(_components.strong, {
        children: "Player"
      }), " interface, click ", _jsx(_components.strong, {
        children: "Other Settings"
      }), ", and add descriptions to ", _jsx(_components.strong, {
        children: "Camera Usage Description"
      }), " and ", _jsx(_components.strong, {
        children: "Microphone Usage Description"
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
