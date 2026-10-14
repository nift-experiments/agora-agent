import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Quickstart - create an extension",
  description: "The Agora Extensions Marketplace has a complete workflow for vendors to develop and distribute extensions. This page walks through each step in the workflow."
};
export let _markdown = `

Extensions are add-ons designed to rapidly extend the functionality of your app. [Extensions Marketplace](https://www.agora.io/en/agora-extensions-marketplace/) is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning.

In the Agora Extensions Marketplace:

* Vendors create and publish extensions to provide functionality such as audio and video processing.
* App developers use extensions to quickly implement fun and interactive functionality.

This page shows vendors how extensions work and the steps you take to develop and publish your extension to Extensions Marketplace.

## Understand the tech [#understand-the-tech]

An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels.

![img](https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg)

A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline.

You can currently implement the following extension types:

* **Audio**: for voice effects and noise cancellation.
* **Video**: features such as face filters and background removal.

## Vendor workflow [#vendor-workflow]

The steps to develop, test and publish an extension to Extensions Marketplace:

1. **Become a vendor**

   Fill in the [vendor application form](https://www.agora.io/en/extensions-marketplace/vendor-application/), then click **APPLY NOW** .

   Agora reviews your application in 7 working days and sends you the result through an email.

2. **Develop your extension**

   Once your application to become a partner is approved, develop your functionality as an audio or video extension using the following documentation:

   * [Develop an audio extension](build/build-your-own-extension/audio-filter.mdx)
   * [Develop a video extension](build/build-your-own-extension/video-filter.mdx)

   When you have developed and tested your extension, You also need to validate the user interface of your extension in a test environment. To test your extension, submit an application for testing. Agora processes your application in 7 working days and informs you through an email when it's done.

3. **Help developers easily integrate your extension into their app**.

   Write the [Implementation guide](build/publish-and-document/implementation-guide.md) for your extension.

4. **Share provisioning, usage, and billing information with Agora**

   * [Provisioning API](build/connect-to-agora-services/provisioning.md)
   * [Usage and billing API](build/connect-to-agora-services/usage.md)

5. **Publish your extension**

   When your extension is thoroughly developed and tested, you need to submit it for Agora review and provide the finalized version of your extension listing assets. For details, see [Publish your extension](build/publish-and-document/publish-extension.md).

   Agora reviews your extension in 7 working days. If your extension passes the review, Agora updates the listing of your extension and informs you through an email. If your extension fails the review, Agora sends an email to report the issues you need to address.

Once you are ready to go, Agora publishes your extension in the [Extensions Marketplace](https://www.agora.io/en/agora-extensions-marketplace/), everyone can use it and you start earning.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Extensions are add-ons designed to rapidly extend the functionality of your app. Extensions Marketplace is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."
  }, {
    heading: undefined,
    content: "In the Agora Extensions Marketplace:"
  }, {
    heading: undefined,
    content: "Vendors create and publish extensions to provide functionality such as audio and video processing."
  }, {
    heading: undefined,
    content: "App developers use extensions to quickly implement fun and interactive functionality."
  }, {
    heading: undefined,
    content: "This page shows vendors how extensions work and the steps you take to develop and publish your extension to Extensions Marketplace."
  }, {
    heading: "understand-the-tech",
    content: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
  }, {
    heading: "understand-the-tech",
    content: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
  }, {
    heading: "understand-the-tech",
    content: "You can currently implement the following extension types:"
  }, {
    heading: "understand-the-tech",
    content: "**Audio**: for voice effects and noise cancellation."
  }, {
    heading: "understand-the-tech",
    content: "**Video**: features such as face filters and background removal."
  }, {
    heading: "vendor-workflow",
    content: "The steps to develop, test and publish an extension to Extensions Marketplace:"
  }, {
    heading: "vendor-workflow",
    content: "**Become a vendor**"
  }, {
    heading: "vendor-workflow",
    content: "Fill in the vendor application form, then click **APPLY NOW** ."
  }, {
    heading: "vendor-workflow",
    content: "Agora reviews your application in 7 working days and sends you the result through an email."
  }, {
    heading: "vendor-workflow",
    content: "**Develop your extension**"
  }, {
    heading: "vendor-workflow",
    content: "Once your application to become a partner is approved, develop your functionality as an audio or video extension using the following documentation:"
  }, {
    heading: "vendor-workflow",
    content: "Develop an audio extension"
  }, {
    heading: "vendor-workflow",
    content: "Develop a video extension"
  }, {
    heading: "vendor-workflow",
    content: "When you have developed and tested your extension, You also need to validate the user interface of your extension in a test environment. To test your extension, submit an application for testing. Agora processes your application in 7 working days and informs you through an email when it's done."
  }, {
    heading: "vendor-workflow",
    content: "**Help developers easily integrate your extension into their app**."
  }, {
    heading: "vendor-workflow",
    content: "Write the Implementation guide for your extension."
  }, {
    heading: "vendor-workflow",
    content: "**Share provisioning, usage, and billing information with Agora**"
  }, {
    heading: "vendor-workflow",
    content: "Provisioning API"
  }, {
    heading: "vendor-workflow",
    content: "Usage and billing API"
  }, {
    heading: "vendor-workflow",
    content: "**Publish your extension**"
  }, {
    heading: "vendor-workflow",
    content: "When your extension is thoroughly developed and tested, you need to submit it for Agora review and provide the finalized version of your extension listing assets. For details, see Publish your extension."
  }, {
    heading: "vendor-workflow",
    content: "Agora reviews your extension in 7 working days. If your extension passes the review, Agora updates the listing of your extension and informs you through an email. If your extension fails the review, Agora sends an email to report the issues you need to address."
  }, {
    heading: "vendor-workflow",
    content: "Once you are ready to go, Agora publishes your extension in the Extensions Marketplace, everyone can use it and you start earning."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "vendor-workflow",
    content: "Vendor workflow"
  }]
};
export let toc = [{
  depth: 2,
  url: "#understand-the-tech",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#vendor-workflow",
  title: _jsx(_Fragment, {
    children: "Vendor workflow"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
    children: [_jsxs(_components.p, {
      children: ["Extensions are add-ons designed to rapidly extend the functionality of your app. ", _jsx(_components.a, {
        href: "https://www.agora.io/en/agora-extensions-marketplace/",
        children: "Extensions Marketplace"
      }), " is home to extensions that make your app more fun. Extensions provide features such as Audio effects and voice changing, Face filters and background removal, and Live transcription and captioning."]
    }), `
`, _jsx(_components.p, {
      children: "In the Agora Extensions Marketplace:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Vendors create and publish extensions to provide functionality such as audio and video processing."
      }), `
`, _jsx(_components.li, {
        children: "App developers use extensions to quickly implement fun and interactive functionality."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "This page shows vendors how extensions work and the steps you take to develop and publish your extension to Extensions Marketplace."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "An extension accesses voice and video data when it is captured from the user's local device, modifies it, then plays the updated data to local and remote video channels."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/video-sdk/extension-callflow.svg",
        alt: "img"
      })
    }), `
`, _jsx(_components.p, {
      children: "A typical transmission pipeline consists of a chain of procedures, including capture, pre-processing, encoding, transmitting, decoding, post-processing, and play. Audio or video extensions are inserted into either the pre-processing or post-processing procedure, in order to modify the voice or video data in the transmission pipeline."
    }), `
`, _jsx(_components.p, {
      children: "You can currently implement the following extension types:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Audio"
        }), ": for voice effects and noise cancellation."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Video"
        }), ": features such as face filters and background removal."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "vendor-workflow",
      children: "Vendor workflow"
    }), `
`, _jsx(_components.p, {
      children: "The steps to develop, test and publish an extension to Extensions Marketplace:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Become a vendor"
          })
        }), `
`, _jsxs(_components.p, {
          children: ["Fill in the ", _jsx(_components.a, {
            href: "https://www.agora.io/en/extensions-marketplace/vendor-application/",
            children: "vendor application form"
          }), ", then click ", _jsx(_components.strong, {
            children: "APPLY NOW"
          }), " ."]
        }), `
`, _jsx(_components.p, {
          children: "Agora reviews your application in 7 working days and sends you the result through an email."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Develop your extension"
          })
        }), `
`, _jsx(_components.p, {
          children: "Once your application to become a partner is approved, develop your functionality as an audio or video extension using the following documentation:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "build/build-your-own-extension/audio-filter.mdx",
              children: "Develop an audio extension"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "build/build-your-own-extension/video-filter.mdx",
              children: "Develop a video extension"
            })
          }), `
`]
        }), `
`, _jsx(_components.p, {
          children: "When you have developed and tested your extension, You also need to validate the user interface of your extension in a test environment. To test your extension, submit an application for testing. Agora processes your application in 7 working days and informs you through an email when it's done."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Help developers easily integrate your extension into their app"
          }), "."]
        }), `
`, _jsxs(_components.p, {
          children: ["Write the ", _jsx(_components.a, {
            href: "build/publish-and-document/implementation-guide.md",
            children: "Implementation guide"
          }), " for your extension."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Share provisioning, usage, and billing information with Agora"
          })
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "build/connect-to-agora-services/provisioning.md",
              children: "Provisioning API"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "build/connect-to-agora-services/usage.md",
              children: "Usage and billing API"
            })
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Publish your extension"
          })
        }), `
`, _jsxs(_components.p, {
          children: ["When your extension is thoroughly developed and tested, you need to submit it for Agora review and provide the finalized version of your extension listing assets. For details, see ", _jsx(_components.a, {
            href: "build/publish-and-document/publish-extension.md",
            children: "Publish your extension"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: "Agora reviews your extension in 7 working days. If your extension passes the review, Agora updates the listing of your extension and informs you through an email. If your extension fails the review, Agora sends an email to report the issues you need to address."
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Once you are ready to go, Agora publishes your extension in the ", _jsx(_components.a, {
        href: "https://www.agora.io/en/agora-extensions-marketplace/",
        children: "Extensions Marketplace"
      }), ", everyone can use it and you start earning."]
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
