import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Samples and demos",
  description: "Find demos and sample code for Interactive Whiteboard and Fastboard."
};
export let _markdown = `

See the sample code and download the demo app to experience the available functionality.

### Agora-provided demos and samples [#agora-provided-demos-and-samples]

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;web&#x22;,&#x22;android&#x22;,&#x22;ios&#x22;]" showTabs="true">
  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    * **Fastboard**:
      * [Demo app for Web](https://demo.whiteboard.agora.io)
      * [Code sample for Web](https://github.com/netless-io/fastboard)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    * **Fastboard**:
      * [Code sample for Android](https://github.com/netless-io/fastboard-android)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    * **Fastboard**:
      * [Code sample for iOS](https://github.com/netless-io/fastboard-iOS)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

### Community-provided demos and samples for other platforms [#community-provided-demos-and-samples-for-other-platforms]

* **Interactive Whiteboard**:
  * [Code sample 1 for Flutter](https://github.com/netless-io/Whiteboard-Flutter)
  * [Code sample 2 for Flutter](https://pub.dev/packages/whiteboard_sdk_flutter/example)
  * [Code sample 3 for Flutter](https://pub.dev/documentation/whiteboard_sdk_flutter/latest)
  * [Code sample for React Native](https://github.com/netless-io/react-native-whiteboard)

* **Fastboard**:
  * [Code sample for Flutter](https://github.com/netless-io/fastboard_flutter)
  * [Code sample for React Native](https://github.com/netless-io/react-native-fastboard)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "See the sample code and download the demo app to experience the available functionality."
  }, {
    heading: "agora-provided-demos-and-samples",
    content: "**Fastboard**:"
  }, {
    heading: "agora-provided-demos-and-samples",
    content: "Demo app for Web"
  }, {
    heading: "agora-provided-demos-and-samples",
    content: "Code sample for Web"
  }, {
    heading: "agora-provided-demos-and-samples",
    content: "**Fastboard**:"
  }, {
    heading: "agora-provided-demos-and-samples",
    content: "Code sample for Android"
  }, {
    heading: "agora-provided-demos-and-samples",
    content: "**Fastboard**:"
  }, {
    heading: "agora-provided-demos-and-samples",
    content: "Code sample for iOS"
  }, {
    heading: "community-provided-demos-and-samples-for-other-platforms",
    content: "**Interactive Whiteboard**:"
  }, {
    heading: "community-provided-demos-and-samples-for-other-platforms",
    content: "Code sample 1 for Flutter"
  }, {
    heading: "community-provided-demos-and-samples-for-other-platforms",
    content: "Code sample 2 for Flutter"
  }, {
    heading: "community-provided-demos-and-samples-for-other-platforms",
    content: "Code sample 3 for Flutter"
  }, {
    heading: "community-provided-demos-and-samples-for-other-platforms",
    content: "Code sample for React Native"
  }, {
    heading: "community-provided-demos-and-samples-for-other-platforms",
    content: "**Fastboard**:"
  }, {
    heading: "community-provided-demos-and-samples-for-other-platforms",
    content: "Code sample for Flutter"
  }, {
    heading: "community-provided-demos-and-samples-for-other-platforms",
    content: "Code sample for React Native"
  }],
  headings: [{
    id: "agora-provided-demos-and-samples",
    content: "Agora-provided demos and samples"
  }, {
    id: "community-provided-demos-and-samples-for-other-platforms",
    content: "Community-provided demos and samples for other platforms"
  }]
};
export let toc = [{
  depth: 3,
  url: "#agora-provided-demos-and-samples",
  title: _jsx(_Fragment, {
    children: "Agora-provided demos and samples"
  })
}, {
  depth: 3,
  url: "#community-provided-demos-and-samples-for-other-platforms",
  title: _jsx(_Fragment, {
    children: "Community-provided demos and samples for other platforms"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "See the sample code and download the demo app to experience the available functionality."
    }), `
`, _jsx(_components.h3, {
      id: "agora-provided-demos-and-samples",
      children: "Agora-provided demos and samples"
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["web","android","ios"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "web",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "web"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Fastboard"
            }), ":", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://demo.whiteboard.agora.io",
                  children: "Demo app for Web"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://github.com/netless-io/fastboard",
                  children: "Code sample for Web"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Fastboard"
            }), ":", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://github.com/netless-io/fastboard-android",
                  children: "Code sample for Android"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "ios",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "ios"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Fastboard"
            }), ":", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://github.com/netless-io/fastboard-iOS",
                  children: "Code sample for iOS"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "community-provided-demos-and-samples-for-other-platforms",
      children: "Community-provided demos and samples for other platforms"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Interactive Whiteboard"
          }), ":"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/netless-io/Whiteboard-Flutter",
              children: "Code sample 1 for Flutter"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://pub.dev/packages/whiteboard_sdk_flutter/example",
              children: "Code sample 2 for Flutter"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://pub.dev/documentation/whiteboard_sdk_flutter/latest",
              children: "Code sample 3 for Flutter"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/netless-io/react-native-whiteboard",
              children: "Code sample for React Native"
            })
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Fastboard"
          }), ":"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/netless-io/fastboard_flutter",
              children: "Code sample for Flutter"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/netless-io/react-native-fastboard",
              children: "Code sample for React Native"
            })
          }), `
`]
        }), `
`]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
