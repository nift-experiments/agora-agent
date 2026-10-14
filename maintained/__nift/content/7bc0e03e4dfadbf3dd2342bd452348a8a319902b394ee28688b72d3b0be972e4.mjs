import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "What platforms does Agora support?"
};
export let _markdown = `

This page lists the supported platforms of Agora products.

## Voice and Video [#voice-and-video]

The [Agora Voice and RTC SDK](/en/api-reference) supports iOS, Android, Windows, macOS, Unity, and Web, and allows for cross-platform connections. The following is a list of supported platforms and their versions.

| Platform     | Supported Version                                                                                                                  |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Android      | ≥ 4.1The Android SDK supports the following ABIs:- armeabi-v7a
- arm64-v8a
- x86
- x86-64                                          |
| iOS          | ≥ 9.0                                                                                                                              |
| Windows      | ≥ Windows 7The Windows SDK supports the following architecture:- x86
- x86-64                                                      |
| macOS        | ≥ 10.10The macOS SDK supports the following architecture:- x86-64
- arm64                                                          |
| Unity        | ≥ 2017The Unity SDK supports the following platforms:- Android (armeabi-v7a, arm64-v8a, x86)
- iOS
- Windows (x86, x86-64)
- macOS |
| Web          | See [Web SDK Compatibility](/en/realtime-media/rtc/reference/supported-platforms/web)                                              |
| Electron     | ≥ Electron 1.8.3                                                                                                                   |
| Flutter      | ≥ Flutter 1.0.0                                                                                                                    |
| React Native | ≥ React Native 0.59.10                                                                                                             |

## On-Premise Recording [#on-premise-recording]

The Agora On-Premise Recording SDK is integrated on your Linux server. See [prerequisites of integrating the SDK](/en/realtime-media/on-premise-recording/quickstart) for details.

## Cloud Recording [#cloud-recording]

You can use RESTful APIs to enable and manage the Agora cloud recording services. See [Agora Cloud Recording RESTful API Quickstart](/en/realtime-media/cloud-recording/reference/restful-api) for details.

## Signaling [#signaling]

The Agora Signaling SDK supports Android, iOS, macOS, Linux, Windows C++, and Web. See [Peer-to-peer or Channel Messaging](/en/realtime-media/rtm) for details.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page lists the supported platforms of Agora products."
  }, {
    heading: "voice-and-video",
    content: "The Agora Voice and RTC SDK supports iOS, Android, Windows, macOS, Unity, and Web, and allows for cross-platform connections. The following is a list of supported platforms and their versions."
  }, {
    heading: "voice-and-video",
    content: "Platform"
  }, {
    heading: "voice-and-video",
    content: "Supported Version"
  }, {
    heading: "voice-and-video",
    content: "Android"
  }, {
    heading: "voice-and-video",
    content: `≥ 4.1The Android SDK supports the following ABIs:- armeabi-v7a
- arm64-v8a
- x86
- x86-64`
  }, {
    heading: "voice-and-video",
    content: "iOS"
  }, {
    heading: "voice-and-video",
    content: "≥ 9.0"
  }, {
    heading: "voice-and-video",
    content: "Windows"
  }, {
    heading: "voice-and-video",
    content: `≥ Windows 7The Windows SDK supports the following architecture:- x86
- x86-64`
  }, {
    heading: "voice-and-video",
    content: "macOS"
  }, {
    heading: "voice-and-video",
    content: `≥ 10.10The macOS SDK supports the following architecture:- x86-64
- arm64`
  }, {
    heading: "voice-and-video",
    content: "Unity"
  }, {
    heading: "voice-and-video",
    content: `≥ 2017The Unity SDK supports the following platforms:- Android (armeabi-v7a, arm64-v8a, x86)
- iOS
- Windows (x86, x86-64)
- macOS`
  }, {
    heading: "voice-and-video",
    content: "Web"
  }, {
    heading: "voice-and-video",
    content: "See Web SDK Compatibility"
  }, {
    heading: "voice-and-video",
    content: "Electron"
  }, {
    heading: "voice-and-video",
    content: "≥ Electron 1.8.3"
  }, {
    heading: "voice-and-video",
    content: "Flutter"
  }, {
    heading: "voice-and-video",
    content: "≥ Flutter 1.0.0"
  }, {
    heading: "voice-and-video",
    content: "React Native"
  }, {
    heading: "voice-and-video",
    content: "≥ React Native 0.59.10"
  }, {
    heading: "on-premise-recording",
    content: "The Agora On-Premise Recording SDK is integrated on your Linux server. See prerequisites of integrating the SDK for details."
  }, {
    heading: "cloud-recording",
    content: "You can use RESTful APIs to enable and manage the Agora cloud recording services. See Agora Cloud Recording RESTful API Quickstart for details."
  }, {
    heading: "signaling",
    content: "The Agora Signaling SDK supports Android, iOS, macOS, Linux, Windows C++, and Web. See Peer-to-peer or Channel Messaging for details."
  }],
  headings: [{
    id: "voice-and-video",
    content: "Voice and Video"
  }, {
    id: "on-premise-recording",
    content: "On-Premise Recording"
  }, {
    id: "cloud-recording",
    content: "Cloud Recording"
  }, {
    id: "signaling",
    content: "Signaling"
  }]
};
export let toc = [{
  depth: 2,
  url: "#voice-and-video",
  title: _jsx(_Fragment, {
    children: "Voice and Video"
  })
}, {
  depth: 2,
  url: "#on-premise-recording",
  title: _jsx(_Fragment, {
    children: "On-Premise Recording"
  })
}, {
  depth: 2,
  url: "#cloud-recording",
  title: _jsx(_Fragment, {
    children: "Cloud Recording"
  })
}, {
  depth: 2,
  url: "#signaling",
  title: _jsx(_Fragment, {
    children: "Signaling"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page lists the supported platforms of Agora products."
    }), `
`, _jsx(_components.h2, {
      id: "voice-and-video",
      children: "Voice and Video"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.a, {
        href: "/en/api-reference",
        children: "Agora Voice and RTC SDK"
      }), " supports iOS, Android, Windows, macOS, Unity, and Web, and allows for cross-platform connections. The following is a list of supported platforms and their versions."]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Platform"
          }), _jsx(_components.th, {
            children: "Supported Version"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Android"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "≥ 4.1"
            }), _jsx(_components.p, {
              children: "The Android SDK supports the following ABIs:"
            }), _jsxs(_components.ul, {
              children: [`
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
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "iOS"
          }), _jsx(_components.td, {
            children: "≥ 9.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Windows"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "≥ Windows 7"
            }), _jsx(_components.p, {
              children: "The Windows SDK supports the following architecture:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "x86"
              }), `
`, _jsx(_components.li, {
                children: "x86-64"
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "macOS"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "≥ 10.10"
            }), _jsx(_components.p, {
              children: "The macOS SDK supports the following architecture:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "x86-64"
              }), `
`, _jsx(_components.li, {
                children: "arm64"
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Unity"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "≥ 2017"
            }), _jsx(_components.p, {
              children: "The Unity SDK supports the following platforms:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Android (armeabi-v7a, arm64-v8a, x86)"
              }), `
`, _jsx(_components.li, {
                children: "iOS"
              }), `
`, _jsx(_components.li, {
                children: "Windows (x86, x86-64)"
              }), `
`, _jsx(_components.li, {
                children: "macOS"
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Web"
          }), _jsxs(_components.td, {
            children: ["See ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/reference/supported-platforms/web",
              children: "Web SDK Compatibility"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Electron"
          }), _jsx(_components.td, {
            children: "≥ Electron 1.8.3"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Flutter"
          }), _jsx(_components.td, {
            children: "≥ Flutter 1.0.0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "React Native"
          }), _jsx(_components.td, {
            children: "≥ React Native 0.59.10"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "on-premise-recording",
      children: "On-Premise Recording"
    }), `
`, _jsxs(_components.p, {
      children: ["The Agora On-Premise Recording SDK is integrated on your Linux server. See ", _jsx(_components.a, {
        href: "/en/realtime-media/on-premise-recording/quickstart",
        children: "prerequisites of integrating the SDK"
      }), " for details."]
    }), `
`, _jsx(_components.h2, {
      id: "cloud-recording",
      children: "Cloud Recording"
    }), `
`, _jsxs(_components.p, {
      children: ["You can use RESTful APIs to enable and manage the Agora cloud recording services. See ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/reference/restful-api",
        children: "Agora Cloud Recording RESTful API Quickstart"
      }), " for details."]
    }), `
`, _jsx(_components.h2, {
      id: "signaling",
      children: "Signaling"
    }), `
`, _jsxs(_components.p, {
      children: ["The Agora Signaling SDK supports Android, iOS, macOS, Linux, Windows C++, and Web. See ", _jsx(_components.a, {
        href: "/en/realtime-media/rtm",
        children: "Peer-to-peer or Channel Messaging"
      }), " for details."]
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
