import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Platform support",
  description: "Supported platforms for Flexible Classroom"
};
export let _markdown = `

This page introduces the platforms supported by Flexible Classroom, as well as the compatibility requirements and recommended devices for each platform.

## Browser compatibility [#browser-compatibility]

### macOS [#macos]

| Browser | Version     | Receiving audio and video streams | Publishing audio and video streams | Screen sharing |
| ------- | ----------- | --------------------------------- | ---------------------------------- | -------------- |
| Chrome  | 89 or above | ✔                                 | ✔                                  | ✔              |

### Windows [#windows]

| Browser | Version     | Receiving audio and video streams | Publishing audio and video streams | Screen sharing |
| ------- | ----------- | --------------------------------- | ---------------------------------- | -------------- |
| Chrome  | 89 or above | ✔                                 | ✔                                  | ✔              |

### Android H5 [#android-h5]

Android supports self-developed and third-party WebView. Since WebView of different devices and apps can be implemented differently, the support depends on the app version and device hardware.

| Browser type                                             | Receive (play) | Publish (microphone) |
| -------------------------------------------------------- | -------------- | -------------------- |
| The latest official version of Chrome browser for mobile | ✔              | ✔                    |
| The latest version of WeChat browser for mobile          | ✔              | ✔                    |
| Mobile UC                                                | ✘              | ✘                    |
| Mobile Quark                                             | ✘              | ✘                    |
| Xiaomi                                                   | ✘              | ✘                    |

### H5 for iOS [#h5-for-ios]

iOS only supports system WebView, so support depends on the iOS version.

<CalloutContainer type="info">
  <CalloutDescription>
    H5 on iOS does not support direct use of WeChat for Business.
  </CalloutDescription>
</CalloutContainer>

| Browser type            | Receive (VP8)       | Receive (H.264)       | Publish (VP8)       | Publish (H.264)     |
| ----------------------- | ------------------- | --------------------- | ------------------- | ------------------- |
| WeChat embedded browser | iOS 12.2 and higher | iOS 12.1.4 and higher | iOS 14.3 and higher | iOS 14.3 and higher |
| Chrome for mobile       | iOS 12.2 and higher | iOS 12.1.4 and higher | iOS 14.3 and higher | iOS 14.3 and higher |
| Safari                  | iOS 12.2 and higher | iOS 11 and higher     | iOS 12.2 and higher | iOS 11 and higher   |

## Minimum hardware requirements [#minimum-hardware-requirements]

### Computer equipment [#computer-equipment]

| Configuration item | Minimum configuration for hosts                 | Recommended configuration for hosts                                                             | Minimum configuration for audience              | Recommended configuration for audience                                                          |
| ------------------ | ----------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Processor          | Intel i5 8th Gen, AMD Ryzen 3 2nd Gen, macOS M1 | Intel i7 9th generation or higher, AMD Ryzen 7 2nd Generation or higher, macOS M1 Pro or higher | Intel i3 8th Gen, AMD Ryzen 3 2nd Gen, macOS M1 | Intel i5 8th generation or higher, AMD Ryzen 7 2nd Generation or higher, macOS M1 Pro or higher |
| Memory             | 8 GB RAM                                        | 16 GB RAM or higher                                                                             | 8 GB RAM                                        | 16 GB RAM or higher                                                                             |
| System             | Windows 7, macOS X 10.13                        | Windows 10 or higher, macOS 11 or later                                                         | Windows 7, macOS X 10.13                        | Windows 10 or higher, macOS 11 or later                                                         |
| Network            | Dedicated bandwidth of at least 10 Mbps         | Dedicated bandwidth of at least 50 Mbps                                                         | No less than 4 Mbps                             | No less than 10 Mbps                                                                            |

### Mobile device [#mobile-device]

| Configuration item | Minimum configuration                                                                                                                                                           | Recommended configuration                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Processor          | iPad/iPhone: A11; Qualcomm Snapdragon 7 series: 730G; Qualcomm Snapdragon 8 series: 835; Kirin 8 series: 810; Kirin 9 series: 970; MediaTek Dimensity: 720; MediaTek Helio G90T | iPad/iPhone: A12 or higher; Qualcomm Snapdragon 8 series: 865 or higher; Kirin 9 series: 9000 or higher; MediaTek Dimensity: 1100 or higher |
| Memory             | Android: 6 GB; iPad/iPhone: 4 GB                                                                                                                                                | Android: 12 GB or higher; iPad/iPhone: 6 GB or higher                                                                                       |
| System             | Android: 10; iOS: 10                                                                                                                                                            | Android: 11 or higher; iOS: 14 or higher                                                                                                    |
| Network            | No less than 2 Mbps                                                                                                                                                             | No less than 6 Mbps                                                                                                                         |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page introduces the platforms supported by Flexible Classroom, as well as the compatibility requirements and recommended devices for each platform."
  }, {
    heading: "macos",
    content: "Browser"
  }, {
    heading: "macos",
    content: "Version"
  }, {
    heading: "macos",
    content: "Receiving audio and video streams"
  }, {
    heading: "macos",
    content: "Publishing audio and video streams"
  }, {
    heading: "macos",
    content: "Screen sharing"
  }, {
    heading: "macos",
    content: "Chrome"
  }, {
    heading: "macos",
    content: "89 or above"
  }, {
    heading: "macos",
    content: "✔"
  }, {
    heading: "macos",
    content: "✔"
  }, {
    heading: "macos",
    content: "✔"
  }, {
    heading: "windows",
    content: "Browser"
  }, {
    heading: "windows",
    content: "Version"
  }, {
    heading: "windows",
    content: "Receiving audio and video streams"
  }, {
    heading: "windows",
    content: "Publishing audio and video streams"
  }, {
    heading: "windows",
    content: "Screen sharing"
  }, {
    heading: "windows",
    content: "Chrome"
  }, {
    heading: "windows",
    content: "89 or above"
  }, {
    heading: "windows",
    content: "✔"
  }, {
    heading: "windows",
    content: "✔"
  }, {
    heading: "windows",
    content: "✔"
  }, {
    heading: "android-h5",
    content: "Android supports self-developed and third-party WebView. Since WebView of different devices and apps can be implemented differently, the support depends on the app version and device hardware."
  }, {
    heading: "android-h5",
    content: "Browser type"
  }, {
    heading: "android-h5",
    content: "Receive (play)"
  }, {
    heading: "android-h5",
    content: "Publish (microphone)"
  }, {
    heading: "android-h5",
    content: "The latest official version of Chrome browser for mobile"
  }, {
    heading: "android-h5",
    content: "✔"
  }, {
    heading: "android-h5",
    content: "✔"
  }, {
    heading: "android-h5",
    content: "The latest version of WeChat browser for mobile"
  }, {
    heading: "android-h5",
    content: "✔"
  }, {
    heading: "android-h5",
    content: "✔"
  }, {
    heading: "android-h5",
    content: "Mobile UC"
  }, {
    heading: "android-h5",
    content: "✘"
  }, {
    heading: "android-h5",
    content: "✘"
  }, {
    heading: "android-h5",
    content: "Mobile Quark"
  }, {
    heading: "android-h5",
    content: "✘"
  }, {
    heading: "android-h5",
    content: "✘"
  }, {
    heading: "android-h5",
    content: "Xiaomi"
  }, {
    heading: "android-h5",
    content: "✘"
  }, {
    heading: "android-h5",
    content: "✘"
  }, {
    heading: "h5-for-ios",
    content: "iOS only supports system WebView, so support depends on the iOS version."
  }, {
    heading: "h5-for-ios",
    content: "H5 on iOS does not support direct use of WeChat for Business."
  }, {
    heading: "h5-for-ios",
    content: "Browser type"
  }, {
    heading: "h5-for-ios",
    content: "Receive (VP8)"
  }, {
    heading: "h5-for-ios",
    content: "Receive (H.264)"
  }, {
    heading: "h5-for-ios",
    content: "Publish (VP8)"
  }, {
    heading: "h5-for-ios",
    content: "Publish (H.264)"
  }, {
    heading: "h5-for-ios",
    content: "WeChat embedded browser"
  }, {
    heading: "h5-for-ios",
    content: "iOS 12.2 and higher"
  }, {
    heading: "h5-for-ios",
    content: "iOS 12.1.4 and higher"
  }, {
    heading: "h5-for-ios",
    content: "iOS 14.3 and higher"
  }, {
    heading: "h5-for-ios",
    content: "iOS 14.3 and higher"
  }, {
    heading: "h5-for-ios",
    content: "Chrome for mobile"
  }, {
    heading: "h5-for-ios",
    content: "iOS 12.2 and higher"
  }, {
    heading: "h5-for-ios",
    content: "iOS 12.1.4 and higher"
  }, {
    heading: "h5-for-ios",
    content: "iOS 14.3 and higher"
  }, {
    heading: "h5-for-ios",
    content: "iOS 14.3 and higher"
  }, {
    heading: "h5-for-ios",
    content: "Safari"
  }, {
    heading: "h5-for-ios",
    content: "iOS 12.2 and higher"
  }, {
    heading: "h5-for-ios",
    content: "iOS 11 and higher"
  }, {
    heading: "h5-for-ios",
    content: "iOS 12.2 and higher"
  }, {
    heading: "h5-for-ios",
    content: "iOS 11 and higher"
  }, {
    heading: "computer-equipment",
    content: "Configuration item"
  }, {
    heading: "computer-equipment",
    content: "Minimum configuration for hosts"
  }, {
    heading: "computer-equipment",
    content: "Recommended configuration for hosts"
  }, {
    heading: "computer-equipment",
    content: "Minimum configuration for audience"
  }, {
    heading: "computer-equipment",
    content: "Recommended configuration for audience"
  }, {
    heading: "computer-equipment",
    content: "Processor"
  }, {
    heading: "computer-equipment",
    content: "Intel i5 8th Gen, AMD Ryzen 3 2nd Gen, macOS M1"
  }, {
    heading: "computer-equipment",
    content: "Intel i7 9th generation or higher, AMD Ryzen 7 2nd Generation or higher, macOS M1 Pro or higher"
  }, {
    heading: "computer-equipment",
    content: "Intel i3 8th Gen, AMD Ryzen 3 2nd Gen, macOS M1"
  }, {
    heading: "computer-equipment",
    content: "Intel i5 8th generation or higher, AMD Ryzen 7 2nd Generation or higher, macOS M1 Pro or higher"
  }, {
    heading: "computer-equipment",
    content: "Memory"
  }, {
    heading: "computer-equipment",
    content: "8 GB RAM"
  }, {
    heading: "computer-equipment",
    content: "16 GB RAM or higher"
  }, {
    heading: "computer-equipment",
    content: "8 GB RAM"
  }, {
    heading: "computer-equipment",
    content: "16 GB RAM or higher"
  }, {
    heading: "computer-equipment",
    content: "System"
  }, {
    heading: "computer-equipment",
    content: "Windows 7, macOS X 10.13"
  }, {
    heading: "computer-equipment",
    content: "Windows 10 or higher, macOS 11 or later"
  }, {
    heading: "computer-equipment",
    content: "Windows 7, macOS X 10.13"
  }, {
    heading: "computer-equipment",
    content: "Windows 10 or higher, macOS 11 or later"
  }, {
    heading: "computer-equipment",
    content: "Network"
  }, {
    heading: "computer-equipment",
    content: "Dedicated bandwidth of at least 10 Mbps"
  }, {
    heading: "computer-equipment",
    content: "Dedicated bandwidth of at least 50 Mbps"
  }, {
    heading: "computer-equipment",
    content: "No less than 4 Mbps"
  }, {
    heading: "computer-equipment",
    content: "No less than 10 Mbps"
  }, {
    heading: "mobile-device",
    content: "Configuration item"
  }, {
    heading: "mobile-device",
    content: "Minimum configuration"
  }, {
    heading: "mobile-device",
    content: "Recommended configuration"
  }, {
    heading: "mobile-device",
    content: "Processor"
  }, {
    heading: "mobile-device",
    content: "iPad/iPhone: A11; Qualcomm Snapdragon 7 series: 730G; Qualcomm Snapdragon 8 series: 835; Kirin 8 series: 810; Kirin 9 series: 970; MediaTek Dimensity: 720; MediaTek Helio G90T"
  }, {
    heading: "mobile-device",
    content: "iPad/iPhone: A12 or higher; Qualcomm Snapdragon 8 series: 865 or higher; Kirin 9 series: 9000 or higher; MediaTek Dimensity: 1100 or higher"
  }, {
    heading: "mobile-device",
    content: "Memory"
  }, {
    heading: "mobile-device",
    content: "Android: 6 GB; iPad/iPhone: 4 GB"
  }, {
    heading: "mobile-device",
    content: "Android: 12 GB or higher; iPad/iPhone: 6 GB or higher"
  }, {
    heading: "mobile-device",
    content: "System"
  }, {
    heading: "mobile-device",
    content: "Android: 10; iOS: 10"
  }, {
    heading: "mobile-device",
    content: "Android: 11 or higher; iOS: 14 or higher"
  }, {
    heading: "mobile-device",
    content: "Network"
  }, {
    heading: "mobile-device",
    content: "No less than 2 Mbps"
  }, {
    heading: "mobile-device",
    content: "No less than 6 Mbps"
  }],
  headings: [{
    id: "browser-compatibility",
    content: "Browser compatibility"
  }, {
    id: "macos",
    content: "macOS"
  }, {
    id: "windows",
    content: "Windows"
  }, {
    id: "android-h5",
    content: "Android H5"
  }, {
    id: "h5-for-ios",
    content: "H5 for iOS"
  }, {
    id: "minimum-hardware-requirements",
    content: "Minimum hardware requirements"
  }, {
    id: "computer-equipment",
    content: "Computer equipment"
  }, {
    id: "mobile-device",
    content: "Mobile device"
  }]
};
export let toc = [{
  depth: 2,
  url: "#browser-compatibility",
  title: _jsx(_Fragment, {
    children: "Browser compatibility"
  })
}, {
  depth: 3,
  url: "#macos",
  title: _jsx(_Fragment, {
    children: "macOS"
  })
}, {
  depth: 3,
  url: "#windows",
  title: _jsx(_Fragment, {
    children: "Windows"
  })
}, {
  depth: 3,
  url: "#android-h5",
  title: _jsx(_Fragment, {
    children: "Android H5"
  })
}, {
  depth: 3,
  url: "#h5-for-ios",
  title: _jsx(_Fragment, {
    children: "H5 for iOS"
  })
}, {
  depth: 2,
  url: "#minimum-hardware-requirements",
  title: _jsx(_Fragment, {
    children: "Minimum hardware requirements"
  })
}, {
  depth: 3,
  url: "#computer-equipment",
  title: _jsx(_Fragment, {
    children: "Computer equipment"
  })
}, {
  depth: 3,
  url: "#mobile-device",
  title: _jsx(_Fragment, {
    children: "Mobile device"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page introduces the platforms supported by Flexible Classroom, as well as the compatibility requirements and recommended devices for each platform."
    }), `
`, _jsx(_components.h2, {
      id: "browser-compatibility",
      children: "Browser compatibility"
    }), `
`, _jsx(_components.h3, {
      id: "macos",
      children: "macOS"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Browser"
          }), _jsx(_components.th, {
            children: "Version"
          }), _jsx(_components.th, {
            children: "Receiving audio and video streams"
          }), _jsx(_components.th, {
            children: "Publishing audio and video streams"
          }), _jsx(_components.th, {
            children: "Screen sharing"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Chrome"
          }), _jsx(_components.td, {
            children: "89 or above"
          }), _jsx(_components.td, {
            children: "✔"
          }), _jsx(_components.td, {
            children: "✔"
          }), _jsx(_components.td, {
            children: "✔"
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "windows",
      children: "Windows"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Browser"
          }), _jsx(_components.th, {
            children: "Version"
          }), _jsx(_components.th, {
            children: "Receiving audio and video streams"
          }), _jsx(_components.th, {
            children: "Publishing audio and video streams"
          }), _jsx(_components.th, {
            children: "Screen sharing"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Chrome"
          }), _jsx(_components.td, {
            children: "89 or above"
          }), _jsx(_components.td, {
            children: "✔"
          }), _jsx(_components.td, {
            children: "✔"
          }), _jsx(_components.td, {
            children: "✔"
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "android-h5",
      children: "Android H5"
    }), `
`, _jsx(_components.p, {
      children: "Android supports self-developed and third-party WebView. Since WebView of different devices and apps can be implemented differently, the support depends on the app version and device hardware."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Browser type"
          }), _jsx(_components.th, {
            children: "Receive (play)"
          }), _jsx(_components.th, {
            children: "Publish (microphone)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "The latest official version of Chrome browser for mobile"
          }), _jsx(_components.td, {
            children: "✔"
          }), _jsx(_components.td, {
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "The latest version of WeChat browser for mobile"
          }), _jsx(_components.td, {
            children: "✔"
          }), _jsx(_components.td, {
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Mobile UC"
          }), _jsx(_components.td, {
            children: "✘"
          }), _jsx(_components.td, {
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Mobile Quark"
          }), _jsx(_components.td, {
            children: "✘"
          }), _jsx(_components.td, {
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Xiaomi"
          }), _jsx(_components.td, {
            children: "✘"
          }), _jsx(_components.td, {
            children: "✘"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "h5-for-ios",
      children: "H5 for iOS"
    }), `
`, _jsx(_components.p, {
      children: "iOS only supports system WebView, so support depends on the iOS version."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "H5 on iOS does not support direct use of WeChat for Business."
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Browser type"
          }), _jsx(_components.th, {
            children: "Receive (VP8)"
          }), _jsx(_components.th, {
            children: "Receive (H.264)"
          }), _jsx(_components.th, {
            children: "Publish (VP8)"
          }), _jsx(_components.th, {
            children: "Publish (H.264)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "WeChat embedded browser"
          }), _jsx(_components.td, {
            children: "iOS 12.2 and higher"
          }), _jsx(_components.td, {
            children: "iOS 12.1.4 and higher"
          }), _jsx(_components.td, {
            children: "iOS 14.3 and higher"
          }), _jsx(_components.td, {
            children: "iOS 14.3 and higher"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Chrome for mobile"
          }), _jsx(_components.td, {
            children: "iOS 12.2 and higher"
          }), _jsx(_components.td, {
            children: "iOS 12.1.4 and higher"
          }), _jsx(_components.td, {
            children: "iOS 14.3 and higher"
          }), _jsx(_components.td, {
            children: "iOS 14.3 and higher"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Safari"
          }), _jsx(_components.td, {
            children: "iOS 12.2 and higher"
          }), _jsx(_components.td, {
            children: "iOS 11 and higher"
          }), _jsx(_components.td, {
            children: "iOS 12.2 and higher"
          }), _jsx(_components.td, {
            children: "iOS 11 and higher"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "minimum-hardware-requirements",
      children: "Minimum hardware requirements"
    }), `
`, _jsx(_components.h3, {
      id: "computer-equipment",
      children: "Computer equipment"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Configuration item"
          }), _jsx(_components.th, {
            children: "Minimum configuration for hosts"
          }), _jsx(_components.th, {
            children: "Recommended configuration for hosts"
          }), _jsx(_components.th, {
            children: "Minimum configuration for audience"
          }), _jsx(_components.th, {
            children: "Recommended configuration for audience"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Processor"
          }), _jsx(_components.td, {
            children: "Intel i5 8th Gen, AMD Ryzen 3 2nd Gen, macOS M1"
          }), _jsx(_components.td, {
            children: "Intel i7 9th generation or higher, AMD Ryzen 7 2nd Generation or higher, macOS M1 Pro or higher"
          }), _jsx(_components.td, {
            children: "Intel i3 8th Gen, AMD Ryzen 3 2nd Gen, macOS M1"
          }), _jsx(_components.td, {
            children: "Intel i5 8th generation or higher, AMD Ryzen 7 2nd Generation or higher, macOS M1 Pro or higher"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Memory"
          }), _jsx(_components.td, {
            children: "8 GB RAM"
          }), _jsx(_components.td, {
            children: "16 GB RAM or higher"
          }), _jsx(_components.td, {
            children: "8 GB RAM"
          }), _jsx(_components.td, {
            children: "16 GB RAM or higher"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "System"
          }), _jsx(_components.td, {
            children: "Windows 7, macOS X 10.13"
          }), _jsx(_components.td, {
            children: "Windows 10 or higher, macOS 11 or later"
          }), _jsx(_components.td, {
            children: "Windows 7, macOS X 10.13"
          }), _jsx(_components.td, {
            children: "Windows 10 or higher, macOS 11 or later"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Network"
          }), _jsx(_components.td, {
            children: "Dedicated bandwidth of at least 10 Mbps"
          }), _jsx(_components.td, {
            children: "Dedicated bandwidth of at least 50 Mbps"
          }), _jsx(_components.td, {
            children: "No less than 4 Mbps"
          }), _jsx(_components.td, {
            children: "No less than 10 Mbps"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "mobile-device",
      children: "Mobile device"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Configuration item"
          }), _jsx(_components.th, {
            children: "Minimum configuration"
          }), _jsx(_components.th, {
            children: "Recommended configuration"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Processor"
          }), _jsx(_components.td, {
            children: "iPad/iPhone: A11; Qualcomm Snapdragon 7 series: 730G; Qualcomm Snapdragon 8 series: 835; Kirin 8 series: 810; Kirin 9 series: 970; MediaTek Dimensity: 720; MediaTek Helio G90T"
          }), _jsx(_components.td, {
            children: "iPad/iPhone: A12 or higher; Qualcomm Snapdragon 8 series: 865 or higher; Kirin 9 series: 9000 or higher; MediaTek Dimensity: 1100 or higher"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Memory"
          }), _jsx(_components.td, {
            children: "Android: 6 GB; iPad/iPhone: 4 GB"
          }), _jsx(_components.td, {
            children: "Android: 12 GB or higher; iPad/iPhone: 6 GB or higher"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "System"
          }), _jsx(_components.td, {
            children: "Android: 10; iOS: 10"
          }), _jsx(_components.td, {
            children: "Android: 11 or higher; iOS: 14 or higher"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Network"
          }), _jsx(_components.td, {
            children: "No less than 2 Mbps"
          }), _jsx(_components.td, {
            children: "No less than 6 Mbps"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
