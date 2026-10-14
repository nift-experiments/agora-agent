import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Supported platforms",
  description: "The platforms supported by this product."
};
export let _markdown = `

This section lists the platforms and products you use to develop apps that interact with Agora SDRTN®.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    * *Platforms*:
      * 4.1+ RTC SDK for Android supports the following ABIs:
      * armeabi-v7a
      * arm64-v8a
      * x86
      * x86-64
    * *Browsers supported on Android*:
      | Browser or application       | Receiving streams | Sending streams |
      | ---------------------------- | ----------------- | --------------- |
      | The latest version of Chrome | Supported         | Supported       |
      | The latest version of WeChat | Supported         | Supported       |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    * *Platforms*:
      * iOS v9.0+.
    * *Browsers supported on iOS*:

      On iOS, all apps with built-in browsers use the system WebView. Support for RTC SDK relies only on the iOS system version.

      | Browsers and applications                            | Features                      | VP9                | H.264                |
      | ---------------------------------------------------- | ----------------------------- | ------------------ | -------------------- |
      | Applications with WebView, such as WeChat and Chrome | Receiving streams             | iOS 12.2 and later | iOS 12.1.4 and later |
      |                                                      | Sending streams               | iOS 14.3 and later | iOS 14.3 and later   |
      | Safari                                               | Sending and receiving streams | iOS 12.2 and later | iOS 11 and later     |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    **We are still developing extensions for this platform. The docs will magically appear here as soon as it is released.**

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    * *Platforms*:
      * macOS
      * Windows
      * ChromeOS
    * *Browsers*:

      | Operating system | Browsers                           | Receiving streams | Sending streams |
      | ---------------- | ---------------------------------- | ----------------- | --------------- |
      | macOS            | * Chrome
      * Firefox
      * Safari
      * Edge | Supported         | Supported       |
      | Windows          | - Chrome
      - Firefox
      - Edge          | Supported         | Supported       |
      | ChromeOS         | Chrome                             | Supported         | Supported       |

    To ensure the best user experience, best practice is to use the latest version each browser on the latest version of the operating system. Download the latest version of:

    * [Chrome](https://www.google.com/intl/en/chrome/)
    * [Firefox](https://www.mozilla.org/firefox/new/)
    * [Edge](https://microsoft.com/edge)
    * [Safari](https://support.apple.com/en-hk/HT201541)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    **We are still developing extensions for this platform. The docs will magically appear here as soon as it is released.**

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    **We are still developing extensions for this platform. The docs will magically appear here as soon as it is released.**

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    **We are still developing extensions for this platform. The docs will magically appear here as soon as it is released.**

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    **We are still developing extensions for this platform. The docs will magically appear here as soon as it is released.**

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    **We are still developing extensions for this platform. The docs will magically appear here as soon as it is released.**

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This section lists the platforms and products you use to develop apps that interact with Agora SDRTN®."
  }, {
    heading: undefined,
    content: "*Platforms*:"
  }, {
    heading: undefined,
    content: "4.1+ RTC SDK for Android supports the following ABIs:"
  }, {
    heading: undefined,
    content: "armeabi-v7a"
  }, {
    heading: undefined,
    content: "arm64-v8a"
  }, {
    heading: undefined,
    content: "x86"
  }, {
    heading: undefined,
    content: "x86-64"
  }, {
    heading: undefined,
    content: "*Browsers supported on Android*:"
  }, {
    heading: undefined,
    content: "Browser or application"
  }, {
    heading: undefined,
    content: "Receiving streams"
  }, {
    heading: undefined,
    content: "Sending streams"
  }, {
    heading: undefined,
    content: "The latest version of Chrome"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "The latest version of WeChat"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "*Platforms*:"
  }, {
    heading: undefined,
    content: "iOS v9.0+."
  }, {
    heading: undefined,
    content: "*Browsers supported on iOS*:"
  }, {
    heading: undefined,
    content: "On iOS, all apps with built-in browsers use the system WebView. Support for RTC SDK relies only on the iOS system version."
  }, {
    heading: undefined,
    content: "Browsers and applications"
  }, {
    heading: undefined,
    content: "Features"
  }, {
    heading: undefined,
    content: "VP9"
  }, {
    heading: undefined,
    content: "H.264"
  }, {
    heading: undefined,
    content: "Applications with WebView, such as WeChat and Chrome"
  }, {
    heading: undefined,
    content: "Receiving streams"
  }, {
    heading: undefined,
    content: "iOS 12.2 and later"
  }, {
    heading: undefined,
    content: "iOS 12.1.4 and later"
  }, {
    heading: undefined,
    content: "Sending streams"
  }, {
    heading: undefined,
    content: "iOS 14.3 and later"
  }, {
    heading: undefined,
    content: "iOS 14.3 and later"
  }, {
    heading: undefined,
    content: "Safari"
  }, {
    heading: undefined,
    content: "Sending and receiving streams"
  }, {
    heading: undefined,
    content: "iOS 12.2 and later"
  }, {
    heading: undefined,
    content: "iOS 11 and later"
  }, {
    heading: undefined,
    content: "**We are still developing extensions for this platform. The docs will magically appear here as soon as it is released.**"
  }, {
    heading: undefined,
    content: "*Platforms*:"
  }, {
    heading: undefined,
    content: "macOS"
  }, {
    heading: undefined,
    content: "Windows"
  }, {
    heading: undefined,
    content: "ChromeOS"
  }, {
    heading: undefined,
    content: "*Browsers*:"
  }, {
    heading: undefined,
    content: "Operating system"
  }, {
    heading: undefined,
    content: "Browsers"
  }, {
    heading: undefined,
    content: "Receiving streams"
  }, {
    heading: undefined,
    content: "Sending streams"
  }, {
    heading: undefined,
    content: "macOS"
  }, {
    heading: undefined,
    content: `* Chrome
* Firefox
* Safari
* Edge`
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Windows"
  }, {
    heading: undefined,
    content: `* Chrome
* Firefox
* Edge`
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "ChromeOS"
  }, {
    heading: undefined,
    content: "Chrome"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "To ensure the best user experience, best practice is to use the latest version each browser on the latest version of the operating system. Download the latest version of:"
  }, {
    heading: undefined,
    content: "Chrome"
  }, {
    heading: undefined,
    content: "Firefox"
  }, {
    heading: undefined,
    content: "Edge"
  }, {
    heading: undefined,
    content: "Safari"
  }, {
    heading: undefined,
    content: "**We are still developing extensions for this platform. The docs will magically appear here as soon as it is released.**"
  }, {
    heading: undefined,
    content: "**We are still developing extensions for this platform. The docs will magically appear here as soon as it is released.**"
  }, {
    heading: undefined,
    content: "**We are still developing extensions for this platform. The docs will magically appear here as soon as it is released.**"
  }, {
    heading: undefined,
    content: "**We are still developing extensions for this platform. The docs will magically appear here as soon as it is released.**"
  }, {
    heading: undefined,
    content: "**We are still developing extensions for this platform. The docs will magically appear here as soon as it is released.**"
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
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
      children: "This section lists the platforms and products you use to develop apps that interact with Agora SDRTN®."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","ios","macos","web","windows","electron","flutter","react-native","unity"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.em, {
              children: "Platforms"
            }), ":", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "4.1+ RTC SDK for Android supports the following ABIs:"
              }), `
`, _jsx(_components.li, {
                children: "armeabi-v7a"
              }), `
`, _jsx(_components.li, {
                children: "arm64-v8a"
              }), `
`, _jsx(_components.li, {
                children: "x86"
              }), `
`, _jsx(_components.li, {
                children: "x86-64"
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.em, {
              children: "Browsers supported on Android"
            }), ":", `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    children: "Browser or application"
                  }), _jsx(_components.th, {
                    children: "Receiving streams"
                  }), _jsx(_components.th, {
                    children: "Sending streams"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: "The latest version of Chrome"
                  }), _jsx(_components.td, {
                    children: "Supported"
                  }), _jsx(_components.td, {
                    children: "Supported"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: "The latest version of WeChat"
                  }), _jsx(_components.td, {
                    children: "Supported"
                  }), _jsx(_components.td, {
                    children: "Supported"
                  })]
                })]
              })]
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
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.em, {
                children: "Platforms"
              }), ":"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "iOS v9.0+."
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.em, {
                children: "Browsers supported on iOS"
              }), ":"]
            }), `
`, _jsx(_components.p, {
              children: "On iOS, all apps with built-in browsers use the system WebView. Support for RTC SDK relies only on the iOS system version."
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    children: "Browsers and applications"
                  }), _jsx(_components.th, {
                    children: "Features"
                  }), _jsx(_components.th, {
                    children: "VP9"
                  }), _jsx(_components.th, {
                    children: "H.264"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: "Applications with WebView, such as WeChat and Chrome"
                  }), _jsx(_components.td, {
                    children: "Receiving streams"
                  }), _jsx(_components.td, {
                    children: "iOS 12.2 and later"
                  }), _jsx(_components.td, {
                    children: "iOS 12.1.4 and later"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {}), _jsx(_components.td, {
                    children: "Sending streams"
                  }), _jsx(_components.td, {
                    children: "iOS 14.3 and later"
                  }), _jsx(_components.td, {
                    children: "iOS 14.3 and later"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: "Safari"
                  }), _jsx(_components.td, {
                    children: "Sending and receiving streams"
                  }), _jsx(_components.td, {
                    children: "iOS 12.2 and later"
                  }), _jsx(_components.td, {
                    children: "iOS 11 and later"
                  })]
                })]
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "macos",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "macos"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "We are still developing extensions for this platform. The docs will magically appear here as soon as it is released."
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "web",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "web"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.em, {
                children: "Platforms"
              }), ":"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "macOS"
              }), `
`, _jsx(_components.li, {
                children: "Windows"
              }), `
`, _jsx(_components.li, {
                children: "ChromeOS"
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.em, {
                children: "Browsers"
              }), ":"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    children: "Operating system"
                  }), _jsx(_components.th, {
                    children: "Browsers"
                  }), _jsx(_components.th, {
                    children: "Receiving streams"
                  }), _jsx(_components.th, {
                    children: "Sending streams"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: "macOS"
                  }), _jsx(_components.td, {
                    children: _jsxs(_components.ul, {
                      children: [`
`, _jsx(_components.li, {
                        children: "Chrome"
                      }), `
`, _jsx(_components.li, {
                        children: "Firefox"
                      }), `
`, _jsx(_components.li, {
                        children: "Safari"
                      }), `
`, _jsx(_components.li, {
                        children: "Edge"
                      }), `
`]
                    })
                  }), _jsx(_components.td, {
                    children: "Supported"
                  }), _jsx(_components.td, {
                    children: "Supported"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: "Windows"
                  }), _jsx(_components.td, {
                    children: _jsxs(_components.ul, {
                      children: [`
`, _jsx(_components.li, {
                        children: "Chrome"
                      }), `
`, _jsx(_components.li, {
                        children: "Firefox"
                      }), `
`, _jsx(_components.li, {
                        children: "Edge"
                      }), `
`]
                    })
                  }), _jsx(_components.td, {
                    children: "Supported"
                  }), _jsx(_components.td, {
                    children: "Supported"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: "ChromeOS"
                  }), _jsx(_components.td, {
                    children: "Chrome"
                  }), _jsx(_components.td, {
                    children: "Supported"
                  }), _jsx(_components.td, {
                    children: "Supported"
                  })]
                })]
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To ensure the best user experience, best practice is to use the latest version each browser on the latest version of the operating system. Download the latest version of:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://www.google.com/intl/en/chrome/",
              children: "Chrome"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://www.mozilla.org/firefox/new/",
              children: "Firefox"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://microsoft.com/edge",
              children: "Edge"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://support.apple.com/en-hk/HT201541",
              children: "Safari"
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "windows",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "windows"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "We are still developing extensions for this platform. The docs will magically appear here as soon as it is released."
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "electron",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "electron"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "We are still developing extensions for this platform. The docs will magically appear here as soon as it is released."
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "flutter",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "flutter"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "We are still developing extensions for this platform. The docs will magically appear here as soon as it is released."
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "react-native",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "react-native"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "We are still developing extensions for this platform. The docs will magically appear here as soon as it is released."
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unity",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "unity"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "We are still developing extensions for this platform. The docs will magically appear here as soon as it is released."
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
