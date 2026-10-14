import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why can't I turn on the camera?"
};
export let _markdown = `

There are many reasons for a camera start failure. Check the following:

* Check if the camera access permission is enabled. Both Android and iOS systems have a runtime access permission function under System Settings. Additionally, security software on Android may control camera access permissions.
* Check if another application is using the camera. Close all applications, restart your phone, and try again.
* Check the camera hardware. Start the built-in video camera to test the recording function.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "There are many reasons for a camera start failure. Check the following:"
  }, {
    heading: undefined,
    content: "Check if the camera access permission is enabled. Both Android and iOS systems have a runtime access permission function under System Settings. Additionally, security software on Android may control camera access permissions."
  }, {
    heading: undefined,
    content: "Check if another application is using the camera. Close all applications, restart your phone, and try again."
  }, {
    heading: undefined,
    content: "Check the camera hardware. Start the built-in video camera to test the recording function."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "There are many reasons for a camera start failure. Check the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Check if the camera access permission is enabled. Both Android and iOS systems have a runtime access permission function under System Settings. Additionally, security software on Android may control camera access permissions."
      }), `
`, _jsx(_components.li, {
        children: "Check if another application is using the camera. Close all applications, restart your phone, and try again."
      }), `
`, _jsx(_components.li, {
        children: "Check the camera hardware. Start the built-in video camera to test the recording function."
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
