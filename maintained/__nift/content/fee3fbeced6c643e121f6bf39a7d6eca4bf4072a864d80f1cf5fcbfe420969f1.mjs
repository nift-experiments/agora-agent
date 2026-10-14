import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Publish your extension",
  description: "Publish your extension in the Marketplace."
};
export let _markdown = `

Your extension is distributed to app developers through the [Extensions Marketplace](https://www.agora.io/en/agora-extensions-marketplace/).

## Prerequisites [#prerequisites]

Before publishing your extension, ensure that you have tested your extension.

## Apply for Agora review [#apply-for-agora-review]

To apply for final review by Agora, contact Agora and provide the following:

### Extension [#extension]

Make sure your extension is delivered in the correct format:

* Android: \`.aar\` or \`.so\`
* iOS/macOS: \`.framework\` or \`.xcframework\`
* Windows: \`.dll\`
* Web: npm link

### Provisioning, Usage, and Billing API endpoints [#provisioning-usage-and-billing-api-endpoints]

Include these endpoints in a markdown file.

### Extension listing assets [#extension-listing-assets]

You need to provide the following assets for your extension listing. If you have provided some of them when testing the extension, ensure that what you provide at this stage is the final version.

|    | Content                     | Requirements                                                                                                                                                                         |
| :- | :-------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Extension name              | A name that reflects the core functionality of your extension.                                                                                                                       |
| 2  | Extension short description | A short summary of what your extension can do. Use no more than 160 characters.                                                                                                      |
| 3  | Extension logo              | A 600 x 315 JPG file                                                                                                                                                                 |
| 4  | Extension category          | Currently must be one of the following:- Audio and video modifiers: Extensions that modify the audio or video source.

- Tools: Extensions that provide other stand-alone functions. |
| 5  | Vendor name                 | Your company's real name.                                                                                                                                                            |
| 6  | Vendor description          | A brief introduction about your company. Use no more than 300 words                                                                                                                  |
| 7  | Vendor logo                 | A 600 x 315 JPG file                                                                                                                                                                 |
| 8  | Vendor website URL          | Must be accessible                                                                                                                                                                   |
| 9  | Vendor support URL          | Must link to a page providing your company's contact information                                                                                                                     |
| 10 | Implementation guides       | Must include quickstart guides and API reference. You need to provide the URL to the documentation. See [Implementation guides](./implementation-guide) for details.                 |

### Supplementary information [#supplementary-information]

Supplementary information includes but is not limited to:

* Pricing plans: Make sure this is the pricing plan both you and Agora agree to. Include it in a markdown file.
* Extension Privacy Policy and EULA: Include it in a markdown file.

## Make your extension public [#make-your-extension-public]

Once you submit the application for final review, Agora starts testing your extension. If your extension passes the review, Agora updates your extension listing, and sends you an email to confirm when you would like to make your extension public in the Extensions Marketplace.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Your extension is distributed to app developers through the Extensions Marketplace."
  }, {
    heading: "prerequisites",
    content: "Before publishing your extension, ensure that you have tested your extension."
  }, {
    heading: "apply-for-agora-review",
    content: "To apply for final review by Agora, contact Agora and provide the following:"
  }, {
    heading: "extension",
    content: "Make sure your extension is delivered in the correct format:"
  }, {
    heading: "extension",
    content: "Android: `.aar` or `.so`"
  }, {
    heading: "extension",
    content: "iOS/macOS: `.framework` or `.xcframework`"
  }, {
    heading: "extension",
    content: "Windows: `.dll`"
  }, {
    heading: "extension",
    content: "Web: npm link"
  }, {
    heading: "provisioning-usage-and-billing-api-endpoints",
    content: "Include these endpoints in a markdown file."
  }, {
    heading: "extension-listing-assets",
    content: "You need to provide the following assets for your extension listing. If you have provided some of them when testing the extension, ensure that what you provide at this stage is the final version."
  }, {
    heading: "extension-listing-assets",
    content: "Content"
  }, {
    heading: "extension-listing-assets",
    content: "Requirements"
  }, {
    heading: "extension-listing-assets",
    content: "1"
  }, {
    heading: "extension-listing-assets",
    content: "Extension name"
  }, {
    heading: "extension-listing-assets",
    content: "A name that reflects the core functionality of your extension."
  }, {
    heading: "extension-listing-assets",
    content: "2"
  }, {
    heading: "extension-listing-assets",
    content: "Extension short description"
  }, {
    heading: "extension-listing-assets",
    content: "A short summary of what your extension can do. Use no more than 160 characters."
  }, {
    heading: "extension-listing-assets",
    content: "3"
  }, {
    heading: "extension-listing-assets",
    content: "Extension logo"
  }, {
    heading: "extension-listing-assets",
    content: "A 600 x 315 JPG file"
  }, {
    heading: "extension-listing-assets",
    content: "4"
  }, {
    heading: "extension-listing-assets",
    content: "Extension category"
  }, {
    heading: "extension-listing-assets",
    content: `Currently must be one of the following:- Audio and video modifiers: Extensions that modify the audio or video source.

- Tools: Extensions that provide other stand-alone functions.`
  }, {
    heading: "extension-listing-assets",
    content: "5"
  }, {
    heading: "extension-listing-assets",
    content: "Vendor name"
  }, {
    heading: "extension-listing-assets",
    content: "Your company's real name."
  }, {
    heading: "extension-listing-assets",
    content: "6"
  }, {
    heading: "extension-listing-assets",
    content: "Vendor description"
  }, {
    heading: "extension-listing-assets",
    content: "A brief introduction about your company. Use no more than 300 words"
  }, {
    heading: "extension-listing-assets",
    content: "7"
  }, {
    heading: "extension-listing-assets",
    content: "Vendor logo"
  }, {
    heading: "extension-listing-assets",
    content: "A 600 x 315 JPG file"
  }, {
    heading: "extension-listing-assets",
    content: "8"
  }, {
    heading: "extension-listing-assets",
    content: "Vendor website URL"
  }, {
    heading: "extension-listing-assets",
    content: "Must be accessible"
  }, {
    heading: "extension-listing-assets",
    content: "9"
  }, {
    heading: "extension-listing-assets",
    content: "Vendor support URL"
  }, {
    heading: "extension-listing-assets",
    content: "Must link to a page providing your company's contact information"
  }, {
    heading: "extension-listing-assets",
    content: "10"
  }, {
    heading: "extension-listing-assets",
    content: "Implementation guides"
  }, {
    heading: "extension-listing-assets",
    content: "Must include quickstart guides and API reference. You need to provide the URL to the documentation. See Implementation guides for details."
  }, {
    heading: "supplementary-information",
    content: "Supplementary information includes but is not limited to:"
  }, {
    heading: "supplementary-information",
    content: "Pricing plans: Make sure this is the pricing plan both you and Agora agree to. Include it in a markdown file."
  }, {
    heading: "supplementary-information",
    content: "Extension Privacy Policy and EULA: Include it in a markdown file."
  }, {
    heading: "make-your-extension-public",
    content: "Once you submit the application for final review, Agora starts testing your extension. If your extension passes the review, Agora updates your extension listing, and sends you an email to confirm when you would like to make your extension public in the Extensions Marketplace."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "apply-for-agora-review",
    content: "Apply for Agora review"
  }, {
    id: "extension",
    content: "Extension"
  }, {
    id: "provisioning-usage-and-billing-api-endpoints",
    content: "Provisioning, Usage, and Billing API endpoints"
  }, {
    id: "extension-listing-assets",
    content: "Extension listing assets"
  }, {
    id: "supplementary-information",
    content: "Supplementary information"
  }, {
    id: "make-your-extension-public",
    content: "Make your extension public"
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
  url: "#apply-for-agora-review",
  title: _jsx(_Fragment, {
    children: "Apply for Agora review"
  })
}, {
  depth: 3,
  url: "#extension",
  title: _jsx(_Fragment, {
    children: "Extension"
  })
}, {
  depth: 3,
  url: "#provisioning-usage-and-billing-api-endpoints",
  title: _jsx(_Fragment, {
    children: "Provisioning, Usage, and Billing API endpoints"
  })
}, {
  depth: 3,
  url: "#extension-listing-assets",
  title: _jsx(_Fragment, {
    children: "Extension listing assets"
  })
}, {
  depth: 3,
  url: "#supplementary-information",
  title: _jsx(_Fragment, {
    children: "Supplementary information"
  })
}, {
  depth: 2,
  url: "#make-your-extension-public",
  title: _jsx(_Fragment, {
    children: "Make your extension public"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
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
    children: [_jsxs(_components.p, {
      children: ["Your extension is distributed to app developers through the ", _jsx(_components.a, {
        href: "https://www.agora.io/en/agora-extensions-marketplace/",
        children: "Extensions Marketplace"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Before publishing your extension, ensure that you have tested your extension."
    }), `
`, _jsx(_components.h2, {
      id: "apply-for-agora-review",
      children: "Apply for Agora review"
    }), `
`, _jsx(_components.p, {
      children: "To apply for final review by Agora, contact Agora and provide the following:"
    }), `
`, _jsx(_components.h3, {
      id: "extension",
      children: "Extension"
    }), `
`, _jsx(_components.p, {
      children: "Make sure your extension is delivered in the correct format:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Android: ", _jsx(_components.code, {
          children: ".aar"
        }), " or ", _jsx(_components.code, {
          children: ".so"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["iOS/macOS: ", _jsx(_components.code, {
          children: ".framework"
        }), " or ", _jsx(_components.code, {
          children: ".xcframework"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Windows: ", _jsx(_components.code, {
          children: ".dll"
        })]
      }), `
`, _jsx(_components.li, {
        children: "Web: npm link"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "provisioning-usage-and-billing-api-endpoints",
      children: "Provisioning, Usage, and Billing API endpoints"
    }), `
`, _jsx(_components.p, {
      children: "Include these endpoints in a markdown file."
    }), `
`, _jsx(_components.h3, {
      id: "extension-listing-assets",
      children: "Extension listing assets"
    }), `
`, _jsx(_components.p, {
      children: "You need to provide the following assets for your extension listing. If you have provided some of them when testing the extension, ensure that what you provide at this stage is the final version."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Content"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Requirements"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Extension name"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A name that reflects the core functionality of your extension."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Extension short description"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A short summary of what your extension can do. Use no more than 160 characters."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Extension logo"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A 600 x 315 JPG file"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "4"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Extension category"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "Currently must be one of the following:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Audio and video modifiers: Extensions that modify the audio or video source."
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Tools: Extensions that provide other stand-alone functions."
                }), `
`]
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "5"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Vendor name"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Your company's real name."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Vendor description"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A brief introduction about your company. Use no more than 300 words"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "7"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Vendor logo"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A 600 x 315 JPG file"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "8"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Vendor website URL"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Must be accessible"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "9"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Vendor support URL"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Must link to a page providing your company's contact information"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Implementation guides"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Must include quickstart guides and API reference. You need to provide the URL to the documentation. See ", _jsx(_components.a, {
              href: "./implementation-guide",
              children: "Implementation guides"
            }), " for details."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "supplementary-information",
      children: "Supplementary information"
    }), `
`, _jsx(_components.p, {
      children: "Supplementary information includes but is not limited to:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Pricing plans: Make sure this is the pricing plan both you and Agora agree to. Include it in a markdown file."
      }), `
`, _jsx(_components.li, {
        children: "Extension Privacy Policy and EULA: Include it in a markdown file."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "make-your-extension-public",
      children: "Make your extension public"
    }), `
`, _jsx(_components.p, {
      children: "Once you submit the application for final review, Agora starts testing your extension. If your extension passes the review, Agora updates your extension listing, and sends you an email to confirm when you would like to make your extension public in the Extensions Marketplace."
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
