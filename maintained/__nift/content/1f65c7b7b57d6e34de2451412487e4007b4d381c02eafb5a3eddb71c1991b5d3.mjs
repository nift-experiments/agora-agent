import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How to handle errors when running the pod install command?"
};
export let _markdown = "\n\nWhen running `pod install`, the following error occurs:\n\n```bash\n[!] Invalid Podfile file: /xxx/ios/Flutter/Generated.xcconfig must exist. If you’re running pod install manually, make sure flutter pub get is executed first.\n```\n\n## Reason [#reason]\n\nThe error message indicates that the `Generated.xcconfig` file is missing. This file is necessary for building the Flutter app on iOS devices. If you do not run `flutter pub get` to generate this file before executing `pod install`, you will encounter this error.\n\n## Solution [#solution]\n\nTo resolve this issue, follow these steps:\n\n1. Open the terminal and navigate to the root directory of your Flutter project.\n2. Run the `flutter pub get` command to fetch and update the project's dependencies. This command will also generate the `Generated.xcconfig` file and other necessary configuration files.\n3. Rerun `pod install`.\n";
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When running `pod install`, the following error occurs:"
  }, {
    heading: "reason",
    content: "The error message indicates that the `Generated.xcconfig` file is missing. This file is necessary for building the Flutter app on iOS devices. If you do not run `flutter pub get` to generate this file before executing `pod install`, you will encounter this error."
  }, {
    heading: "solution",
    content: "To resolve this issue, follow these steps:"
  }, {
    heading: "solution",
    content: "Open the terminal and navigate to the root directory of your Flutter project."
  }, {
    heading: "solution",
    content: "Run the `flutter pub get` command to fetch and update the project's dependencies. This command will also generate the `Generated.xcconfig` file and other necessary configuration files."
  }, {
    heading: "solution",
    content: "Rerun `pod install`."
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
    pre: "pre",
    span: "span",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["When running ", _jsx(_components.code, {
        children: "pod install"
      }), ", the following error occurs:"]
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "!"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "] Invalid Podfile file: /xxx/ios/Flutter/Generated.xcconfig must exist. If you’re running pod install manually, make sure flutter pub get is executed first."
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "reason",
      children: "Reason"
    }), `
`, _jsxs(_components.p, {
      children: ["The error message indicates that the ", _jsx(_components.code, {
        children: "Generated.xcconfig"
      }), " file is missing. This file is necessary for building the Flutter app on iOS devices. If you do not run ", _jsx(_components.code, {
        children: "flutter pub get"
      }), " to generate this file before executing ", _jsx(_components.code, {
        children: "pod install"
      }), ", you will encounter this error."]
    }), `
`, _jsx(_components.h2, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsx(_components.p, {
      children: "To resolve this issue, follow these steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Open the terminal and navigate to the root directory of your Flutter project."
      }), `
`, _jsxs(_components.li, {
        children: ["Run the ", _jsx(_components.code, {
          children: "flutter pub get"
        }), " command to fetch and update the project's dependencies. This command will also generate the ", _jsx(_components.code, {
          children: "Generated.xcconfig"
        }), " file and other necessary configuration files."]
      }), `
`, _jsxs(_components.li, {
        children: ["Rerun ", _jsx(_components.code, {
          children: "pod install"
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
