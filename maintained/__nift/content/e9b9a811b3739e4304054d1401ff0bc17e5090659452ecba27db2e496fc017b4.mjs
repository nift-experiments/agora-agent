import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why do I see a prompt to find local network devices when launching an iOS app integrated with the Agora Signaling SDK?"
};
export let _markdown = `

## Problem [#problem]

After users upgrade their iOS devices to iOS 14.0 and use an app that integrates the Agora Signaling SDK for iOS, users see a prompt for finding local network devices. The following picture shows the pop-up prompt:

![](https://web-cdn.agora.io/docs-files/1599797972248)

## Reason [#reason]

iOS 14.0 adds a privacy setting relating to local network usage, and your app needs to obtain the **Privacy - Local Network Usage Description** permission from the user to access the user's local network device. The Signaling SDK accesses the Agora server via domain name. If the DNS server is in the same network segment as the device, the pop-up prompt may be triggered.

## Solution [#solution]

### Solution one: Use the SDK version v1.4.1 and above [#solution-one-use-the-sdk-version-v141-and-above]

Integrate the Signaling SDK v1.4.1 and above, and users will not see the prompt to find local network devices. The availability of the Signaling service will not be affected.

### Solution two: Modify the privacy description in your project [#solution-two-modify-the-privacy-description-in-your-project]

The default prompt shows as follows: **This app will be able to discover and connect to devices on the networks you use**. Agora recommends modifying the privacy description according to your business requirements. The steps to modify the privacy description are as follows:

1. Open your Xcode project, find the \`info.plist&#x60; file, and click &#x2A;*+** to add **Privacy - Local Network Usage Description**.

   <CalloutContainer type="info">
     <CalloutDescription>
       In Xcode 11, you need to add **NSLocalNetworkUsageDescription**.
     </CalloutDescription>
   </CalloutContainer>

2. According to your business requirements, add the purpose of obtaining local network device permissions
   in the **Value** column of **Privacy-Local Network Usage Description**. For example, add **This app will
   not connect to devices on your network, it only detects the connectivity with your local gateway**. ![](https://web-cdn.agora.io/docs-files/1599798113793)

After modification, users will see the following prompt when launching an iOS app:

![](https://web-cdn.agora.io/docs-files/1599798127052)

* If users tap **OK**, the app can connect to more edge servers with the DNS parsing function of the router.
* If users tap **Don't Allow**, the app cannot connect to extra edge servers, which may slightly affect the availability of the Signaling service.

## References [#references]

* [Privacy - Local Network Usage Description](https://developer.apple.com/documentation/bundleresources/information_property_list/nslocalnetworkusagedescription)
* [Support local network privacy in your app](https://developer.apple.com/videos/play/wwdc2020/10110/)
`;
export let structuredData = {
  contents: [{
    heading: "problem",
    content: "After users upgrade their iOS devices to iOS 14.0 and use an app that integrates the Agora Signaling SDK for iOS, users see a prompt for finding local network devices. The following picture shows the pop-up prompt:"
  }, {
    heading: "reason",
    content: "iOS 14.0 adds a privacy setting relating to local network usage, and your app needs to obtain the **Privacy - Local Network Usage Description** permission from the user to access the user's local network device. The Signaling SDK accesses the Agora server via domain name. If the DNS server is in the same network segment as the device, the pop-up prompt may be triggered."
  }, {
    heading: "solution-one-use-the-sdk-version-v141-and-above",
    content: "Integrate the Signaling SDK v1.4.1 and above, and users will not see the prompt to find local network devices. The availability of the Signaling service will not be affected."
  }, {
    heading: "solution-two-modify-the-privacy-description-in-your-project",
    content: "The default prompt shows as follows: **This app will be able to discover and connect to devices on the networks you use**. Agora recommends modifying the privacy description according to your business requirements. The steps to modify the privacy description are as follows:"
  }, {
    heading: "solution-two-modify-the-privacy-description-in-your-project",
    content: "Open your Xcode project, find the `info.plist&#x60; file, and click &#x2A;*+** to add **Privacy - Local Network Usage Description**."
  }, {
    heading: "solution-two-modify-the-privacy-description-in-your-project",
    content: "In Xcode 11, you need to add **NSLocalNetworkUsageDescription**."
  }, {
    heading: "solution-two-modify-the-privacy-description-in-your-project",
    content: `According to your business requirements, add the purpose of obtaining local network device permissions
in the **Value** column of **Privacy-Local Network Usage Description**. For example, add **This app will
not connect to devices on your network, it only detects the connectivity with your local gateway**.`
  }, {
    heading: "solution-two-modify-the-privacy-description-in-your-project",
    content: "After modification, users will see the following prompt when launching an iOS app:"
  }, {
    heading: "solution-two-modify-the-privacy-description-in-your-project",
    content: "If users tap **OK**, the app can connect to more edge servers with the DNS parsing function of the router."
  }, {
    heading: "solution-two-modify-the-privacy-description-in-your-project",
    content: "If users tap **Don't Allow**, the app cannot connect to extra edge servers, which may slightly affect the availability of the Signaling service."
  }, {
    heading: "references",
    content: "Privacy - Local Network Usage Description"
  }, {
    heading: "references",
    content: "Support local network privacy in your app"
  }],
  headings: [{
    id: "problem",
    content: "Problem"
  }, {
    id: "reason",
    content: "Reason"
  }, {
    id: "solution",
    content: "Solution"
  }, {
    id: "solution-one-use-the-sdk-version-v141-and-above",
    content: "Solution one: Use the SDK version v1.4.1 and above"
  }, {
    id: "solution-two-modify-the-privacy-description-in-your-project",
    content: "Solution two: Modify the privacy description in your project"
  }, {
    id: "references",
    content: "References"
  }]
};
export let toc = [{
  depth: 2,
  url: "#problem",
  title: _jsx(_Fragment, {
    children: "Problem"
  })
}, {
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
}, {
  depth: 3,
  url: "#solution-one-use-the-sdk-version-v141-and-above",
  title: _jsx(_Fragment, {
    children: "Solution one: Use the SDK version v1.4.1 and above"
  })
}, {
  depth: 3,
  url: "#solution-two-modify-the-privacy-description-in-your-project",
  title: _jsx(_Fragment, {
    children: "Solution two: Modify the privacy description in your project"
  })
}, {
  depth: 2,
  url: "#references",
  title: _jsx(_Fragment, {
    children: "References"
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
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "problem",
      children: "Problem"
    }), `
`, _jsx(_components.p, {
      children: "After users upgrade their iOS devices to iOS 14.0 and use an app that integrates the Agora Signaling SDK for iOS, users see a prompt for finding local network devices. The following picture shows the pop-up prompt:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1599797972248",
        alt: ""
      })
    }), `
`, _jsx(_components.h2, {
      id: "reason",
      children: "Reason"
    }), `
`, _jsxs(_components.p, {
      children: ["iOS 14.0 adds a privacy setting relating to local network usage, and your app needs to obtain the ", _jsx(_components.strong, {
        children: "Privacy - Local Network Usage Description"
      }), " permission from the user to access the user's local network device. The Signaling SDK accesses the Agora server via domain name. If the DNS server is in the same network segment as the device, the pop-up prompt may be triggered."]
    }), `
`, _jsx(_components.h2, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsx(_components.h3, {
      id: "solution-one-use-the-sdk-version-v141-and-above",
      children: "Solution one: Use the SDK version v1.4.1 and above"
    }), `
`, _jsx(_components.p, {
      children: "Integrate the Signaling SDK v1.4.1 and above, and users will not see the prompt to find local network devices. The availability of the Signaling service will not be affected."
    }), `
`, _jsx(_components.h3, {
      id: "solution-two-modify-the-privacy-description-in-your-project",
      children: "Solution two: Modify the privacy description in your project"
    }), `
`, _jsxs(_components.p, {
      children: ["The default prompt shows as follows: ", _jsx(_components.strong, {
        children: "This app will be able to discover and connect to devices on the networks you use"
      }), ". Agora recommends modifying the privacy description according to your business requirements. The steps to modify the privacy description are as follows:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Open your Xcode project, find the ", _jsx(_components.code, {
            children: "info.plist"
          }), " file, and click ", _jsx(_components.strong, {
            children: "+"
          }), " to add ", _jsx(_components.strong, {
            children: "Privacy - Local Network Usage Description"
          }), "."]
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["In Xcode 11, you need to add ", _jsx(_components.strong, {
                children: "NSLocalNetworkUsageDescription"
              }), "."]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [`According to your business requirements, add the purpose of obtaining local network device permissions
in the `, _jsx(_components.strong, {
            children: "Value"
          }), " column of ", _jsx(_components.strong, {
            children: "Privacy-Local Network Usage Description"
          }), ". For example, add ", _jsx(_components.strong, {
            children: `This app will
not connect to devices on your network, it only detects the connectivity with your local gateway`
          }), ". ", _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1599798113793",
            alt: ""
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "After modification, users will see the following prompt when launching an iOS app:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1599798127052",
        alt: ""
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If users tap ", _jsx(_components.strong, {
          children: "OK"
        }), ", the app can connect to more edge servers with the DNS parsing function of the router."]
      }), `
`, _jsxs(_components.li, {
        children: ["If users tap ", _jsx(_components.strong, {
          children: "Don't Allow"
        }), ", the app cannot connect to extra edge servers, which may slightly affect the availability of the Signaling service."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "references",
      children: "References"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://developer.apple.com/documentation/bundleresources/information_property_list/nslocalnetworkusagedescription",
          children: "Privacy - Local Network Usage Description"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://developer.apple.com/videos/play/wwdc2020/10110/",
          children: "Support local network privacy in your app"
        })
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
