import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Supported platforms",
  description: "Lists the platform that Chat supports."
};
export let _markdown = `

Agora Chat is supported on major platforms such as Android, iOS, and Web, and it allows for cross-platform connections. The minimum version requirements are as follows:

| Platform     | Minimum required version                                                                                                                                                      |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Android      | Android 4.4 or later (API Level 19 or later)                                                                                                                                  |
| iOS          | iOS 9.0 or later                                                                                                                                                              |
| Web          | Internet Explorer 9 or laterFireFox 10 or laterChrome 54 or laterSafari 6 or laterEdge 12 or laterOpera 58 or lateriOS Safari 7 or laterAndroid Browser 4.4 (KitKat) or later |
| Unity        | Unity 2017 or later                                                                                                                                                           |
| Windows      | Windows 10 or later                                                                                                                                                           |
| React Native | React Native 0.63.4 or later                                                                                                                                                  |
| Flutter      | Flutter 2.10                                                                                                                                                                  |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora Chat is supported on major platforms such as Android, iOS, and Web, and it allows for cross-platform connections. The minimum version requirements are as follows:"
  }, {
    heading: undefined,
    content: "Platform"
  }, {
    heading: undefined,
    content: "Minimum required version"
  }, {
    heading: undefined,
    content: "Android"
  }, {
    heading: undefined,
    content: "Android 4.4 or later (API Level 19 or later)"
  }, {
    heading: undefined,
    content: "iOS"
  }, {
    heading: undefined,
    content: "iOS 9.0 or later"
  }, {
    heading: undefined,
    content: "Web"
  }, {
    heading: undefined,
    content: "Internet Explorer 9 or laterFireFox 10 or laterChrome 54 or laterSafari 6 or laterEdge 12 or laterOpera 58 or lateriOS Safari 7 or laterAndroid Browser 4.4 (KitKat) or later"
  }, {
    heading: undefined,
    content: "Unity"
  }, {
    heading: undefined,
    content: "Unity 2017 or later"
  }, {
    heading: undefined,
    content: "Windows"
  }, {
    heading: undefined,
    content: "Windows 10 or later"
  }, {
    heading: undefined,
    content: "React Native"
  }, {
    heading: undefined,
    content: "React Native 0.63.4 or later"
  }, {
    heading: undefined,
    content: "Flutter"
  }, {
    heading: undefined,
    content: "Flutter 2.10"
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora Chat is supported on major platforms such as Android, iOS, and Web, and it allows for cross-platform connections. The minimum version requirements are as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Platform"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Minimum required version"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Android"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Android 4.4 or later (API Level 19 or later)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iOS"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iOS 9.0 or later"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Web"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internet Explorer 9 or laterFireFox 10 or laterChrome 54 or laterSafari 6 or laterEdge 12 or laterOpera 58 or lateriOS Safari 7 or laterAndroid Browser 4.4 (KitKat) or later"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unity"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unity 2017 or later"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Windows"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Windows 10 or later"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "React Native"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "React Native 0.63.4 or later"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Flutter"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Flutter 2.10"
          })]
        })]
      })]
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
