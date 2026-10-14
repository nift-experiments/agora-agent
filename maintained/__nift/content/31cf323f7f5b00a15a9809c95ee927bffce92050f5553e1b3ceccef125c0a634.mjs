import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Samples",
  description: "Links to the manual downloads for this product, and explanations on how to install them."
};
export let _markdown = `

Download the demo apps for Agora Flexible Classroom to experience online learning use cases for 1-to-1 and small interactive classes, or lecture hall classrooms. Flexible Classroom demo apps include real-time audio, video, messaging, interactive whiteboard, and many other features.

To demo the mobile experience of students only, download and try the Android or iOS apps.

To demo the full features of the teacher and student across all class types, download and try the Web, Windows, or macOS demo apps. To ensure a better end-user experience, Agora highly recommends using the Web client on the latest version of Desktop Chrome.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;web&#x22;,&#x22;electron&#x22;,&#x22;android&#x22;,&#x22;ios&#x22;]" showTabs="true">
  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    ## Web [#web]

    * [Sample](https://github.com/AgoraIO-Community/flexible-classroom-desktop/tree/release/2.9.1)
    * Demo:
      * [HTML](https://solutions-apaas.agora.io/apaas/demo/international/index.html)
      * [Web Mobile](https://solutions-apaas.agora.io/apaas/demo/international/index.html) - only supports Lecture Hall use cases

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    ## Electron [#electron]

    * [Sample](https://github.com/AgoraIO-Community/flexible-classroom-desktop/tree/release/2.8.13)
    * Demo:
      * [Windows](https://download.agora.io/edu-apaas/release/Agora_Flexible_Classroom_Global_Windows.zip)
      * [macOS](https://download.agora.io/edu-apaas/release/Agora_Flexible_Classroom_Global_Mac.dmg)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    ## Android [#android]

    * [Sample](https://github.com/AgoraIO-Community/CloudClass-Android)
    * [Demo](https://download.agora.io/edu-apaas/release/Agora_Flexible_Classroom_Global_Android.apk)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    ## iOS [#ios]

    * [Sample](https://github.com/AgoraIO-Community/flexible-classroom-ios/tree/release/2.8.11)
    * [Demo](https://testflight.apple.com/join/rYhIIb4L)

    ![iOS demo QR code](https://assets-docs.agora.io/images/flexible-classroom/ios-demo-qr.png)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Download the demo apps for Agora Flexible Classroom to experience online learning use cases for 1-to-1 and small interactive classes, or lecture hall classrooms. Flexible Classroom demo apps include real-time audio, video, messaging, interactive whiteboard, and many other features."
  }, {
    heading: undefined,
    content: "To demo the mobile experience of students only, download and try the Android or iOS apps."
  }, {
    heading: undefined,
    content: "To demo the full features of the teacher and student across all class types, download and try the Web, Windows, or macOS demo apps. To ensure a better end-user experience, Agora highly recommends using the Web client on the latest version of Desktop Chrome."
  }, {
    heading: "web",
    content: "Sample"
  }, {
    heading: "web",
    content: "Demo:"
  }, {
    heading: "web",
    content: "HTML"
  }, {
    heading: "web",
    content: "Web Mobile - only supports Lecture Hall use cases"
  }, {
    heading: "electron",
    content: "Sample"
  }, {
    heading: "electron",
    content: "Demo:"
  }, {
    heading: "electron",
    content: "Windows"
  }, {
    heading: "electron",
    content: "macOS"
  }, {
    heading: "android",
    content: "Sample"
  }, {
    heading: "android",
    content: "Demo"
  }, {
    heading: "ios",
    content: "Sample"
  }, {
    heading: "ios",
    content: "Demo"
  }],
  headings: [{
    id: "web",
    content: "Web"
  }, {
    id: "electron",
    content: "Electron"
  }, {
    id: "android",
    content: "Android"
  }, {
    id: "ios",
    content: "iOS"
  }]
};
export let toc = [{
  depth: 2,
  url: "#web",
  title: _jsx(_Fragment, {
    children: "Web"
  })
}, {
  depth: 2,
  url: "#electron",
  title: _jsx(_Fragment, {
    children: "Electron"
  })
}, {
  depth: 2,
  url: "#android",
  title: _jsx(_Fragment, {
    children: "Android"
  })
}, {
  depth: 2,
  url: "#ios",
  title: _jsx(_Fragment, {
    children: "iOS"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
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
      children: "Download the demo apps for Agora Flexible Classroom to experience online learning use cases for 1-to-1 and small interactive classes, or lecture hall classrooms. Flexible Classroom demo apps include real-time audio, video, messaging, interactive whiteboard, and many other features."
    }), `
`, _jsx(_components.p, {
      children: "To demo the mobile experience of students only, download and try the Android or iOS apps."
    }), `
`, _jsx(_components.p, {
      children: "To demo the full features of the teacher and student across all class types, download and try the Web, Windows, or macOS demo apps. To ensure a better end-user experience, Agora highly recommends using the Web client on the latest version of Desktop Chrome."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["web","electron","android","ios"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "web",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "web"
        }), _jsx(_components.h2, {
          id: "web",
          children: "Web"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO-Community/flexible-classroom-desktop/tree/release/2.9.1",
              children: "Sample"
            })
          }), `
`, _jsxs(_components.li, {
            children: ["Demo:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://solutions-apaas.agora.io/apaas/demo/international/index.html",
                  children: "HTML"
                })
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "https://solutions-apaas.agora.io/apaas/demo/international/index.html",
                  children: "Web Mobile"
                }), " - only supports Lecture Hall use cases"]
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
        platform: "electron",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "electron"
        }), _jsx(_components.h2, {
          id: "electron",
          children: "Electron"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO-Community/flexible-classroom-desktop/tree/release/2.8.13",
              children: "Sample"
            })
          }), `
`, _jsxs(_components.li, {
            children: ["Demo:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://download.agora.io/edu-apaas/release/Agora_Flexible_Classroom_Global_Windows.zip",
                  children: "Windows"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://download.agora.io/edu-apaas/release/Agora_Flexible_Classroom_Global_Mac.dmg",
                  children: "macOS"
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
        }), _jsx(_components.h2, {
          id: "android",
          children: "Android"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO-Community/CloudClass-Android",
              children: "Sample"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://download.agora.io/edu-apaas/release/Agora_Flexible_Classroom_Global_Android.apk",
              children: "Demo"
            })
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
        }), _jsx(_components.h2, {
          id: "ios",
          children: "iOS"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO-Community/flexible-classroom-ios/tree/release/2.8.11",
              children: "Sample"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://testflight.apple.com/join/rYhIIb4L",
              children: "Demo"
            })
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/flexible-classroom/ios-demo-qr.png",
            alt: "iOS demo QR code"
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
