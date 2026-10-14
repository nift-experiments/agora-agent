import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I add a privacy manifest to my iOS app?"
};
export let _markdown = `

To ensure the privacy and security of end users, Apple requires that all apps listed on its App Store provide a privacy manifest file in accordance with its requirements. The privacy manifest is a property list that records the types of data collected by your app or third-party SDK, and the required reasons for using APIs by your app or third-party SDK.

If the app you upload uses an API but does not describe the necessary reasons in the privacy manifest, Apple sends you an email to remind you to update the app's privacy manifest.

Starting from May 1, 2024, apps that still do not describe the necessary reasons for using included APIs in the privacy manifest will not be able to pass the App Store Connect review. See
[Apple's official documentation](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api) for more information.

## Implementation [#implementation]

### Automatic import [#automatic-import]

Since versions 4.3.1 and 2.1.11, the RTC SDK and Signaling SDK have automatically added the privacy manifest, so manual addition is not required. You can upgrade the SDKs to these versions to achieve automatic import of the privacy manifest. See the respective release notes for details.

### Manual import [#manual-import]

If your app uses RTC SDK v4.3.0 or earlier, Chat SDK 1.2 or earlier, or Signaling SDK 2.1.10 or earlier, refer to the following steps to manually add a privacy manifest in Xcode:

* If you do not have a privacy manifest file in your Xcode project, you can download it here:

  * [Video and Voice SDK](https://download.agora.io/sdk/release/PrivacyInfo.xcprivacy)
  * [Chat SDK](https://download.agora.io/sdk/release/AgoraChat_PrivacyInfo.xcprivacy)
  * [Signaling SDK](https://download.agora.io/rtm2/release/PrivacyInfo.xcprivacy)

  Add the \`PrivacyInfo.xcprivacy\` file to the Xcode project, as shown below:

  ![](https://assets-docs.agora.io/images/privacyinfofile-ab6b281dc4637a5ea7fbb06580940728.png)

* If you already have a privacy manifest file in your Xcode project, select the file in the Xcode project navigator and click the \`+\` button to add a new line. Manually add the content to the privacy manifest file as follows:

  ![](https://assets-docs.agora.io/images/addprivacylist-79835f2aca588bb82d23c969d743be58.png)

<details>
  <summary>
    Sample code for configuring privacy-related API access in plist
  </summary>

  \`\`\`xml
  <dict>
      <key>NSPrivacyTracking</key>
      <false/>
      <key>NSPrivacyCollectedDataTypes</key>
      <array/>
      <key>NSPrivacyAccessedAPITypes</key>
      <array>
          <dict>
              <key>NSPrivacyAccessedAPIType</key>
              <string>NSPrivacyAccessedAPICategorySystemBootTime</string>
              <key>NSPrivacyAccessedAPITypeReasons</key>
              <array>
                  <string>35F9.1</string>
              </array>
          </dict>
          <dict>
              <key>NSPrivacyAccessedAPIType</key>
              <string>NSPrivacyAccessedAPICategoryFileTimestamp</string>
              <key>NSPrivacyAccessedAPITypeReasons</key>
              <array>
                  <string>DDA9.1</string>
              </array>
          </dict>
          <dict>
              <key>NSPrivacyAccessedAPIType</key>
              <string>NSPrivacyAccessedAPICategoryDiskSpace</string>
              <key>NSPrivacyAccessedAPITypeReasons</key>
              <array>
                  <string>E174.1</string>
              </array>
          </dict>
      </array>
  </dict>
  \`\`\`
</details>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To ensure the privacy and security of end users, Apple requires that all apps listed on its App Store provide a privacy manifest file in accordance with its requirements. The privacy manifest is a property list that records the types of data collected by your app or third-party SDK, and the required reasons for using APIs by your app or third-party SDK."
  }, {
    heading: undefined,
    content: "If the app you upload uses an API but does not describe the necessary reasons in the privacy manifest, Apple sends you an email to remind you to update the app's privacy manifest."
  }, {
    heading: undefined,
    content: `Starting from May 1, 2024, apps that still do not describe the necessary reasons for using included APIs in the privacy manifest will not be able to pass the App Store Connect review. See
Apple's official documentation for more information.`
  }, {
    heading: "automatic-import",
    content: "Since versions 4.3.1 and 2.1.11, the RTC SDK and Signaling SDK have automatically added the privacy manifest, so manual addition is not required. You can upgrade the SDKs to these versions to achieve automatic import of the privacy manifest. See the respective release notes for details."
  }, {
    heading: "manual-import",
    content: "If your app uses RTC SDK v4.3.0 or earlier, Chat SDK 1.2 or earlier, or Signaling SDK 2.1.10 or earlier, refer to the following steps to manually add a privacy manifest in Xcode:"
  }, {
    heading: "manual-import",
    content: "If you do not have a privacy manifest file in your Xcode project, you can download it here:"
  }, {
    heading: "manual-import",
    content: "Video and Voice SDK"
  }, {
    heading: "manual-import",
    content: "Chat SDK"
  }, {
    heading: "manual-import",
    content: "Signaling SDK"
  }, {
    heading: "manual-import",
    content: "Add the `PrivacyInfo.xcprivacy` file to the Xcode project, as shown below:"
  }, {
    heading: "manual-import",
    content: "If you already have a privacy manifest file in your Xcode project, select the file in the Xcode project navigator and click the `+` button to add a new line. Manually add the content to the privacy manifest file as follows:"
  }],
  headings: [{
    id: "implementation",
    content: "Implementation"
  }, {
    id: "automatic-import",
    content: "Automatic import"
  }, {
    id: "manual-import",
    content: "Manual import"
  }]
};
export let toc = [{
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#automatic-import",
  title: _jsx(_Fragment, {
    children: "Automatic import"
  })
}, {
  depth: 3,
  url: "#manual-import",
  title: _jsx(_Fragment, {
    children: "Manual import"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "To ensure the privacy and security of end users, Apple requires that all apps listed on its App Store provide a privacy manifest file in accordance with its requirements. The privacy manifest is a property list that records the types of data collected by your app or third-party SDK, and the required reasons for using APIs by your app or third-party SDK."
    }), `
`, _jsx(_components.p, {
      children: "If the app you upload uses an API but does not describe the necessary reasons in the privacy manifest, Apple sends you an email to remind you to update the app's privacy manifest."
    }), `
`, _jsxs(_components.p, {
      children: [`Starting from May 1, 2024, apps that still do not describe the necessary reasons for using included APIs in the privacy manifest will not be able to pass the App Store Connect review. See
`, _jsx(_components.a, {
        href: "https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api",
        children: "Apple's official documentation"
      }), " for more information."]
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsx(_components.h3, {
      id: "automatic-import",
      children: "Automatic import"
    }), `
`, _jsx(_components.p, {
      children: "Since versions 4.3.1 and 2.1.11, the RTC SDK and Signaling SDK have automatically added the privacy manifest, so manual addition is not required. You can upgrade the SDKs to these versions to achieve automatic import of the privacy manifest. See the respective release notes for details."
    }), `
`, _jsx(_components.h3, {
      id: "manual-import",
      children: "Manual import"
    }), `
`, _jsx(_components.p, {
      children: "If your app uses RTC SDK v4.3.0 or earlier, Chat SDK 1.2 or earlier, or Signaling SDK 2.1.10 or earlier, refer to the following steps to manually add a privacy manifest in Xcode:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If you do not have a privacy manifest file in your Xcode project, you can download it here:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://download.agora.io/sdk/release/PrivacyInfo.xcprivacy",
              children: "Video and Voice SDK"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://download.agora.io/sdk/release/AgoraChat_PrivacyInfo.xcprivacy",
              children: "Chat SDK"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://download.agora.io/rtm2/release/PrivacyInfo.xcprivacy",
              children: "Signaling SDK"
            })
          }), `
`]
        }), `
`, _jsxs(_components.p, {
          children: ["Add the ", _jsx(_components.code, {
            children: "PrivacyInfo.xcprivacy"
          }), " file to the Xcode project, as shown below:"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/privacyinfofile-ab6b281dc4637a5ea7fbb06580940728.png",
            alt: ""
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If you already have a privacy manifest file in your Xcode project, select the file in the Xcode project navigator and click the ", _jsx(_components.code, {
            children: "+"
          }), " button to add a new line. Manually add the content to the privacy manifest file as follows:"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/addprivacylist-79835f2aca588bb82d23c969d743be58.png",
            alt: ""
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsxs("details", {
      children: [_jsx("summary", {
        children: "Sample code for configuring privacy-related API access in plist"
      }), _jsx(_Fragment, {
        children: _jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark",
          style: {
            "--shiki-light": "#24292e",
            "--shiki-dark": "#e1e4e8",
            "--shiki-light-bg": "#fff",
            "--shiki-dark-bg": "#24292e"
          },
          tabIndex: "0",
          icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "<"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "dict"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">NSPrivacyTracking</"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "false"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "/>"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">NSPrivacyCollectedDataTypes</"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "array"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "/>"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">NSPrivacyAccessedAPITypes</"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "array"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "dict"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">NSPrivacyAccessedAPIType</"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">NSPrivacyAccessedAPICategorySystemBootTime</"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">NSPrivacyAccessedAPITypeReasons</"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "array"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">35F9.1</"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            </"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "array"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        </"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "dict"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "dict"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">NSPrivacyAccessedAPIType</"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">NSPrivacyAccessedAPICategoryFileTimestamp</"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">NSPrivacyAccessedAPITypeReasons</"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "array"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">DDA9.1</"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            </"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "array"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        </"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "dict"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "dict"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">NSPrivacyAccessedAPIType</"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">NSPrivacyAccessedAPICategoryDiskSpace</"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">NSPrivacyAccessedAPITypeReasons</"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "array"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">E174.1</"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            </"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "array"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        </"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "dict"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    </"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "array"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "</"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "dict"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            })]
          })
        })
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
