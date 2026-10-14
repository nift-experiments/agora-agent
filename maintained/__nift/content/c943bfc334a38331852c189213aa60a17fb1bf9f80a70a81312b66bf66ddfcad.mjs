import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why can't a Flutter App installed on iOS 14 and above devices be reopened in debug mode?"
};
export let _markdown = `

On devices running iOS 14 and above, Flutter apps installed in debug mode cannot be reopened using the home screen icon, deep linking, or other methods. Additionally, if an iOS app integrates a Flutter module in debug mode, reopening the app through the home screen icon or similar actions may cause the app to crash due to the integrated Flutter module.

## Reason [#reason]

Since iOS 14, Apple has adjusted the execution mechanism for apps in debug mode, specifically adding restrictions on the execution of just-in-time (JIT) code. Flutter apps running in debug mode rely on JIT to execute code, and these new restrictions prevent the apps from being launched from the device in the usual manner.

## Solution [#solution]

Refer to the [official Flutter documentation](https://docs.flutter.dev/platform-integration/ios/ios-debugging).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "On devices running iOS 14 and above, Flutter apps installed in debug mode cannot be reopened using the home screen icon, deep linking, or other methods. Additionally, if an iOS app integrates a Flutter module in debug mode, reopening the app through the home screen icon or similar actions may cause the app to crash due to the integrated Flutter module."
  }, {
    heading: "reason",
    content: "Since iOS 14, Apple has adjusted the execution mechanism for apps in debug mode, specifically adding restrictions on the execution of just-in-time (JIT) code. Flutter apps running in debug mode rely on JIT to execute code, and these new restrictions prevent the apps from being launched from the device in the usual manner."
  }, {
    heading: "solution",
    content: "Refer to the official Flutter documentation."
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
    h2: "h2",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "On devices running iOS 14 and above, Flutter apps installed in debug mode cannot be reopened using the home screen icon, deep linking, or other methods. Additionally, if an iOS app integrates a Flutter module in debug mode, reopening the app through the home screen icon or similar actions may cause the app to crash due to the integrated Flutter module."
    }), `
`, _jsx(_components.h2, {
      id: "reason",
      children: "Reason"
    }), `
`, _jsx(_components.p, {
      children: "Since iOS 14, Apple has adjusted the execution mechanism for apps in debug mode, specifically adding restrictions on the execution of just-in-time (JIT) code. Flutter apps running in debug mode rely on JIT to execute code, and these new restrictions prevent the apps from being launched from the device in the usual manner."
    }), `
`, _jsx(_components.h2, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsxs(_components.p, {
      children: ["Refer to the ", _jsx(_components.a, {
        href: "https://docs.flutter.dev/platform-integration/ios/ios-debugging",
        children: "official Flutter documentation"
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
