import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I enable multitasking camera capture on iOS?"
};
export let _markdown = `

Starting with iOS 16, the system allows apps to continue accessing the camera in multitasking mode. This means that camera capture can continue in layouts such as split view, slide over, and picture-in-picture.

From v4.6.2 onwards, RTC SDK supports this system capability. It requires enabling the **multitasking-camera-access** permission through the official API. This guide describes how to enable multitasking camera capture on iOS.

## Prerequisites [#prerequisites]

* An Apple Developer account enrolled in the Apple Developer Program (paid)
* Your app supports iOS 16 or iPadOS 16 and above

## Enable multitasking camera access [#enable-multitasking-camera-access]

1. Log in to the [Apple Developer Console](https://developer.apple.com/account/).

2. On the **Identifiers** page, select the App ID for which you want to enable multitasking camera access.

3. On the App ID's configuration page, enable the **Multitasking Camera Access** option, save the changes, and regenerate your provisioning profile.

   The entitlement key for this permission is \`com.apple.developer.avfoundation.multitasking-camera-access\`, which indicates that the app can access the camera in multitasking scenarios.

4. In Xcode, open your project, select the corresponding target, go to the **Signing & Capabilities*&#x2A; page, click the **+ Capability** button, and add **Multitasking Camera Access**.

   ![Blueprint Nodes](https://assets-docs.agora.io/images/faq/camera-multitasking.png)

## App submission and review [#app-submission-and-review]

After completing feature development:

* Build the app using the corresponding provisioning profile.
* When submitting to the App Store for review, include an explanation in the app review notes about why your app requires the multitasking camera permission. Apple's review may focus on whether there is a clear business need for this permission.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Starting with iOS 16, the system allows apps to continue accessing the camera in multitasking mode. This means that camera capture can continue in layouts such as split view, slide over, and picture-in-picture."
  }, {
    heading: undefined,
    content: "From v4.6.2 onwards, RTC SDK supports this system capability. It requires enabling the **multitasking-camera-access** permission through the official API. This guide describes how to enable multitasking camera capture on iOS."
  }, {
    heading: "prerequisites",
    content: "An Apple Developer account enrolled in the Apple Developer Program (paid)"
  }, {
    heading: "prerequisites",
    content: "Your app supports iOS 16 or iPadOS 16 and above"
  }, {
    heading: "enable-multitasking-camera-access",
    content: "Log in to the Apple Developer Console."
  }, {
    heading: "enable-multitasking-camera-access",
    content: "On the **Identifiers** page, select the App ID for which you want to enable multitasking camera access."
  }, {
    heading: "enable-multitasking-camera-access",
    content: "On the App ID's configuration page, enable the **Multitasking Camera Access** option, save the changes, and regenerate your provisioning profile."
  }, {
    heading: "enable-multitasking-camera-access",
    content: "The entitlement key for this permission is `com.apple.developer.avfoundation.multitasking-camera-access`, which indicates that the app can access the camera in multitasking scenarios."
  }, {
    heading: "enable-multitasking-camera-access",
    content: "In Xcode, open your project, select the corresponding target, go to the **Signing & Capabilities*&#x2A; page, click the **+ Capability** button, and add **Multitasking Camera Access**."
  }, {
    heading: "app-submission-and-review",
    content: "After completing feature development:"
  }, {
    heading: "app-submission-and-review",
    content: "Build the app using the corresponding provisioning profile."
  }, {
    heading: "app-submission-and-review",
    content: "When submitting to the App Store for review, include an explanation in the app review notes about why your app requires the multitasking camera permission. Apple's review may focus on whether there is a clear business need for this permission."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "enable-multitasking-camera-access",
    content: "Enable multitasking camera access"
  }, {
    id: "app-submission-and-review",
    content: "App submission and review"
  }]
};
export let toc = [{
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#enable-multitasking-camera-access",
  title: _jsx(_Fragment, {
    children: "Enable multitasking camera access"
  })
}, {
  depth: 2,
  url: "#app-submission-and-review",
  title: _jsx(_Fragment, {
    children: "App submission and review"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Starting with iOS 16, the system allows apps to continue accessing the camera in multitasking mode. This means that camera capture can continue in layouts such as split view, slide over, and picture-in-picture."
    }), `
`, _jsxs(_components.p, {
      children: ["From v4.6.2 onwards, RTC SDK supports this system capability. It requires enabling the ", _jsx(_components.strong, {
        children: "multitasking-camera-access"
      }), " permission through the official API. This guide describes how to enable multitasking camera capture on iOS."]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "An Apple Developer account enrolled in the Apple Developer Program (paid)"
      }), `
`, _jsx(_components.li, {
        children: "Your app supports iOS 16 or iPadOS 16 and above"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "enable-multitasking-camera-access",
      children: "Enable multitasking camera access"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Log in to the ", _jsx(_components.a, {
            href: "https://developer.apple.com/account/",
            children: "Apple Developer Console"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Identifiers"
          }), " page, select the App ID for which you want to enable multitasking camera access."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the App ID's configuration page, enable the ", _jsx(_components.strong, {
            children: "Multitasking Camera Access"
          }), " option, save the changes, and regenerate your provisioning profile."]
        }), `
`, _jsxs(_components.p, {
          children: ["The entitlement key for this permission is ", _jsx(_components.code, {
            children: "com.apple.developer.avfoundation.multitasking-camera-access"
          }), ", which indicates that the app can access the camera in multitasking scenarios."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In Xcode, open your project, select the corresponding target, go to the ", _jsx(_components.strong, {
            children: "Signing & Capabilities"
          }), " page, click the ", _jsx(_components.strong, {
            children: "+ Capability"
          }), " button, and add ", _jsx(_components.strong, {
            children: "Multitasking Camera Access"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/faq/camera-multitasking.png",
            alt: "Blueprint Nodes"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "app-submission-and-review",
      children: "App submission and review"
    }), `
`, _jsx(_components.p, {
      children: "After completing feature development:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Build the app using the corresponding provisioning profile."
      }), `
`, _jsx(_components.li, {
        children: "When submitting to the App Store for review, include an explanation in the app review notes about why your app requires the multitasking camera permission. Apple's review may focus on whether there is a clear business need for this permission."
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
