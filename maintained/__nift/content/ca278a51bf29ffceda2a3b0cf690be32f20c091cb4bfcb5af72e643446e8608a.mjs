import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Security",
  description: "Learn the security practices Agora implements for Interactive Whiteboard."
};
export let _markdown = `

Data security and user privacy are the top priorities for Agora. To provide safe and reliable services, Agora adopts industry-recognized security standards and security best practices at every layer for each product.

Interactive Whiteboard is a newly launched product that provides online whiteboard rooms where users can present ideas, share multimedia content, and collaborate on projects from multiple devices simultaneously. Starting in the product-design phase, Agora has assessed and prepared for the potential security threats associated with these functions and has implemented a variety of measures to secure the high availability of Interactive Whiteboard as well as the confidentiality and integrity of your data.

This page describes the security practices that Agora has implemented for Interactive Whiteboard.

## Identity and access management [#identity-and-access-management]

Securing access to your services and resources starts with identity and access controls. Interactive Whiteboard uses tokens for user authentication. Interactive Whiteboard offers three types of tokens: SDK Token, Room Token, and Task Token, in descending order of granted permissions. These tokens must be generated with access keys and secret keys by role and include a validity period; they must also be issued from your app server to your app client. The Interactive Whiteboard server verifies the information stored in the token when your app client requests to access the whiteboard services.

Refer to the following guides for detailed information on Interactive Whiteboard tokens:

* [Interactive Whiteboard Token Overview](../build/authenticate-users/authentication-workflow.md): Describes the different types of whiteboard tokens and their uses, the various methods of generating a token, and token safety precautions.
* [Generate Token Using an App Server](../build/authenticate-users/generate-token-app-server.mdx): Introduces how to generate tokens at your app server using code samples.
* [Generate Token Using REST API](../build/authenticate-users/generate-token-rest.md): Describes the RESTful APIs for generating whiteboard tokens.

## Data encryption and storage [#data-encryption-and-storage]

Interactive Whiteboard does not store any of your business data or user data except for caching it for transmission purposes. The cached data is immediately released after the completion of the business-dependent logic. To guarantee data confidentiality during transmission, Agora uses the Secure Sockets Layer (SSL) encryption protocol.

Data centers hosting Interactive Whiteboard are maintained by certified and industry-leading cloud service providers, offering state-of-the-art physical protection for the servers and infrastructure that comprise the Agora environment.

Interactive Whiteboard also offers server-side file conversion and screenshotting. Agora does not store any files or screenshots when users use these features. The transcoded files and the captured screenshots are stored in the third-party cloud storage designated by you. In addition, these features are disabled by default. Only after you enable the features and specify the storage space. the users authorized by you can access the services and the stored resources.

Refer to the following articles for more information on file conversion and taking screenshots:

* [Enable Interactive Whiteboard](../build/set-up-and-build-your-first-app/enable-whiteboard.md): The **Enable whiteboard server-side features** section describes how to configure the third-party storage space.
* [File Conversion Overview](/en/api-reference/api-ref/whiteboard/file-conversion): The **Start file conversion** section describes the basic workflow for converting a file.

## Network geofencing [#network-geofencing]

To conform to the laws and regulations of different countries and regions, Interactive Whiteboard supports network geofencing, which allows you to specify a data center and limits the transmission of your business data to the service area the data center covers.

Now Interactive Whiteboard sets up five data centers and each data center provides services to specific areas, as follows:

| Data center | Location                      | Service area                             |
| :---------- | :---------------------------- | :--------------------------------------- |
| \`us-sv\`     | Silicon Valley, United States | North America and South America          |
| \`sg\`        | Singapore                     | Singapore, East Asia, and Southeast Asia |
| \`in-mum\`    | Mumbai, India                 | India                                    |
| \`gb-lon\`    | London, England               | Europe                                   |
| \`cn-hz\`     | Hangzhou, China               | Areas not covered by other data centers  |

Interactive Whiteboard has implemented network geofencing in each server-side RESTful API as well as all client-side whiteboard SDKs. This enables you to specify a data center whenever you create a whiteboard room or launch a file-conversion task by calling the RESTful APIs, or whenever you enable a user to join a whiteboard room by calling the methods provided by the SDKs.

Refer to the following API references for more information:

* [RESTful APIs](/en/api-reference/api-ref/whiteboard)
* [Web SDK APIs](/en/api-reference/whiteboard/web)
* [Android SDK APIs](/en/api-reference/whiteboard/android)
* [iOS SDK APIs](/en/api-reference/whiteboard/ios)

With network geofencing enabled, data transfer is restricted to the service areas that your specified data center covers. However, this does not prohibit users located in different areas from communicating with each other, as long as they join the same whiteboard room. For example, when a teacher creates a whiteboard room that is geofenced in Europe, students located in India can join the room through the global accelerator and interact with the teacher. If the students join a whiteboard room that is geofenced in India, then they cannot communicate with the teacher in Europe, because no data is allowed to be transmitted across data centers.

## Network redundancy [#network-redundancy]

Interactive Whiteboard deploys Kubernetes clusters to build fault tolerance and disaster recovery into its services. This ensures these services are not interrupted due to a single point of failure.

Interactive Whiteboard adopts incremental data synchronization, serialized data compression, and optimized network congestion control algorithms to ensure high data-packet delivery success rate within the smallest time window.

## Ongoing commitment to security [#ongoing-commitment-to-security]

Agora is committed to building interactive whiteboard services with compliance, safety, security, and trust. If you think you might have found a security vulnerability within Interactive Whiteboard, please contact the Agora security team directly at [security@agora.io](mailto\\:security@agora.io).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Data security and user privacy are the top priorities for Agora. To provide safe and reliable services, Agora adopts industry-recognized security standards and security best practices at every layer for each product."
  }, {
    heading: undefined,
    content: "Interactive Whiteboard is a newly launched product that provides online whiteboard rooms where users can present ideas, share multimedia content, and collaborate on projects from multiple devices simultaneously. Starting in the product-design phase, Agora has assessed and prepared for the potential security threats associated with these functions and has implemented a variety of measures to secure the high availability of Interactive Whiteboard as well as the confidentiality and integrity of your data."
  }, {
    heading: undefined,
    content: "This page describes the security practices that Agora has implemented for Interactive Whiteboard."
  }, {
    heading: "identity-and-access-management",
    content: "Securing access to your services and resources starts with identity and access controls. Interactive Whiteboard uses tokens for user authentication. Interactive Whiteboard offers three types of tokens: SDK Token, Room Token, and Task Token, in descending order of granted permissions. These tokens must be generated with access keys and secret keys by role and include a validity period; they must also be issued from your app server to your app client. The Interactive Whiteboard server verifies the information stored in the token when your app client requests to access the whiteboard services."
  }, {
    heading: "identity-and-access-management",
    content: "Refer to the following guides for detailed information on Interactive Whiteboard tokens:"
  }, {
    heading: "identity-and-access-management",
    content: "Interactive Whiteboard Token Overview: Describes the different types of whiteboard tokens and their uses, the various methods of generating a token, and token safety precautions."
  }, {
    heading: "identity-and-access-management",
    content: "Generate Token Using an App Server: Introduces how to generate tokens at your app server using code samples."
  }, {
    heading: "identity-and-access-management",
    content: "Generate Token Using REST API: Describes the RESTful APIs for generating whiteboard tokens."
  }, {
    heading: "data-encryption-and-storage",
    content: "Interactive Whiteboard does not store any of your business data or user data except for caching it for transmission purposes. The cached data is immediately released after the completion of the business-dependent logic. To guarantee data confidentiality during transmission, Agora uses the Secure Sockets Layer (SSL) encryption protocol."
  }, {
    heading: "data-encryption-and-storage",
    content: "Data centers hosting Interactive Whiteboard are maintained by certified and industry-leading cloud service providers, offering state-of-the-art physical protection for the servers and infrastructure that comprise the Agora environment."
  }, {
    heading: "data-encryption-and-storage",
    content: "Interactive Whiteboard also offers server-side file conversion and screenshotting. Agora does not store any files or screenshots when users use these features. The transcoded files and the captured screenshots are stored in the third-party cloud storage designated by you. In addition, these features are disabled by default. Only after you enable the features and specify the storage space. the users authorized by you can access the services and the stored resources."
  }, {
    heading: "data-encryption-and-storage",
    content: "Refer to the following articles for more information on file conversion and taking screenshots:"
  }, {
    heading: "data-encryption-and-storage",
    content: "Enable Interactive Whiteboard: The **Enable whiteboard server-side features** section describes how to configure the third-party storage space."
  }, {
    heading: "data-encryption-and-storage",
    content: "File Conversion Overview: The **Start file conversion** section describes the basic workflow for converting a file."
  }, {
    heading: "network-geofencing",
    content: "To conform to the laws and regulations of different countries and regions, Interactive Whiteboard supports network geofencing, which allows you to specify a data center and limits the transmission of your business data to the service area the data center covers."
  }, {
    heading: "network-geofencing",
    content: "Now Interactive Whiteboard sets up five data centers and each data center provides services to specific areas, as follows:"
  }, {
    heading: "network-geofencing",
    content: "Data center"
  }, {
    heading: "network-geofencing",
    content: "Location"
  }, {
    heading: "network-geofencing",
    content: "Service area"
  }, {
    heading: "network-geofencing",
    content: "`us-sv`"
  }, {
    heading: "network-geofencing",
    content: "Silicon Valley, United States"
  }, {
    heading: "network-geofencing",
    content: "North America and South America"
  }, {
    heading: "network-geofencing",
    content: "`sg`"
  }, {
    heading: "network-geofencing",
    content: "Singapore"
  }, {
    heading: "network-geofencing",
    content: "Singapore, East Asia, and Southeast Asia"
  }, {
    heading: "network-geofencing",
    content: "`in-mum`"
  }, {
    heading: "network-geofencing",
    content: "Mumbai, India"
  }, {
    heading: "network-geofencing",
    content: "India"
  }, {
    heading: "network-geofencing",
    content: "`gb-lon`"
  }, {
    heading: "network-geofencing",
    content: "London, England"
  }, {
    heading: "network-geofencing",
    content: "Europe"
  }, {
    heading: "network-geofencing",
    content: "`cn-hz`"
  }, {
    heading: "network-geofencing",
    content: "Hangzhou, China"
  }, {
    heading: "network-geofencing",
    content: "Areas not covered by other data centers"
  }, {
    heading: "network-geofencing",
    content: "Interactive Whiteboard has implemented network geofencing in each server-side RESTful API as well as all client-side whiteboard SDKs. This enables you to specify a data center whenever you create a whiteboard room or launch a file-conversion task by calling the RESTful APIs, or whenever you enable a user to join a whiteboard room by calling the methods provided by the SDKs."
  }, {
    heading: "network-geofencing",
    content: "Refer to the following API references for more information:"
  }, {
    heading: "network-geofencing",
    content: "RESTful APIs"
  }, {
    heading: "network-geofencing",
    content: "Web SDK APIs"
  }, {
    heading: "network-geofencing",
    content: "Android SDK APIs"
  }, {
    heading: "network-geofencing",
    content: "iOS SDK APIs"
  }, {
    heading: "network-geofencing",
    content: "With network geofencing enabled, data transfer is restricted to the service areas that your specified data center covers. However, this does not prohibit users located in different areas from communicating with each other, as long as they join the same whiteboard room. For example, when a teacher creates a whiteboard room that is geofenced in Europe, students located in India can join the room through the global accelerator and interact with the teacher. If the students join a whiteboard room that is geofenced in India, then they cannot communicate with the teacher in Europe, because no data is allowed to be transmitted across data centers."
  }, {
    heading: "network-redundancy",
    content: "Interactive Whiteboard deploys Kubernetes clusters to build fault tolerance and disaster recovery into its services. This ensures these services are not interrupted due to a single point of failure."
  }, {
    heading: "network-redundancy",
    content: "Interactive Whiteboard adopts incremental data synchronization, serialized data compression, and optimized network congestion control algorithms to ensure high data-packet delivery success rate within the smallest time window."
  }, {
    heading: "ongoing-commitment-to-security",
    content: "Agora is committed to building interactive whiteboard services with compliance, safety, security, and trust. If you think you might have found a security vulnerability within Interactive Whiteboard, please contact the Agora security team directly at security\\@agora.io."
  }],
  headings: [{
    id: "identity-and-access-management",
    content: "Identity and access management"
  }, {
    id: "data-encryption-and-storage",
    content: "Data encryption and storage"
  }, {
    id: "network-geofencing",
    content: "Network geofencing"
  }, {
    id: "network-redundancy",
    content: "Network redundancy"
  }, {
    id: "ongoing-commitment-to-security",
    content: "Ongoing commitment to security"
  }]
};
export let toc = [{
  depth: 2,
  url: "#identity-and-access-management",
  title: _jsx(_Fragment, {
    children: "Identity and access management"
  })
}, {
  depth: 2,
  url: "#data-encryption-and-storage",
  title: _jsx(_Fragment, {
    children: "Data encryption and storage"
  })
}, {
  depth: 2,
  url: "#network-geofencing",
  title: _jsx(_Fragment, {
    children: "Network geofencing"
  })
}, {
  depth: 2,
  url: "#network-redundancy",
  title: _jsx(_Fragment, {
    children: "Network redundancy"
  })
}, {
  depth: 2,
  url: "#ongoing-commitment-to-security",
  title: _jsx(_Fragment, {
    children: "Ongoing commitment to security"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Data security and user privacy are the top priorities for Agora. To provide safe and reliable services, Agora adopts industry-recognized security standards and security best practices at every layer for each product."
    }), `
`, _jsx(_components.p, {
      children: "Interactive Whiteboard is a newly launched product that provides online whiteboard rooms where users can present ideas, share multimedia content, and collaborate on projects from multiple devices simultaneously. Starting in the product-design phase, Agora has assessed and prepared for the potential security threats associated with these functions and has implemented a variety of measures to secure the high availability of Interactive Whiteboard as well as the confidentiality and integrity of your data."
    }), `
`, _jsx(_components.p, {
      children: "This page describes the security practices that Agora has implemented for Interactive Whiteboard."
    }), `
`, _jsx(_components.h2, {
      id: "identity-and-access-management",
      children: "Identity and access management"
    }), `
`, _jsx(_components.p, {
      children: "Securing access to your services and resources starts with identity and access controls. Interactive Whiteboard uses tokens for user authentication. Interactive Whiteboard offers three types of tokens: SDK Token, Room Token, and Task Token, in descending order of granted permissions. These tokens must be generated with access keys and secret keys by role and include a validity period; they must also be issued from your app server to your app client. The Interactive Whiteboard server verifies the information stored in the token when your app client requests to access the whiteboard services."
    }), `
`, _jsx(_components.p, {
      children: "Refer to the following guides for detailed information on Interactive Whiteboard tokens:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../build/authenticate-users/authentication-workflow.md",
          children: "Interactive Whiteboard Token Overview"
        }), ": Describes the different types of whiteboard tokens and their uses, the various methods of generating a token, and token safety precautions."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../build/authenticate-users/generate-token-app-server.mdx",
          children: "Generate Token Using an App Server"
        }), ": Introduces how to generate tokens at your app server using code samples."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../build/authenticate-users/generate-token-rest.md",
          children: "Generate Token Using REST API"
        }), ": Describes the RESTful APIs for generating whiteboard tokens."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "data-encryption-and-storage",
      children: "Data encryption and storage"
    }), `
`, _jsx(_components.p, {
      children: "Interactive Whiteboard does not store any of your business data or user data except for caching it for transmission purposes. The cached data is immediately released after the completion of the business-dependent logic. To guarantee data confidentiality during transmission, Agora uses the Secure Sockets Layer (SSL) encryption protocol."
    }), `
`, _jsx(_components.p, {
      children: "Data centers hosting Interactive Whiteboard are maintained by certified and industry-leading cloud service providers, offering state-of-the-art physical protection for the servers and infrastructure that comprise the Agora environment."
    }), `
`, _jsx(_components.p, {
      children: "Interactive Whiteboard also offers server-side file conversion and screenshotting. Agora does not store any files or screenshots when users use these features. The transcoded files and the captured screenshots are stored in the third-party cloud storage designated by you. In addition, these features are disabled by default. Only after you enable the features and specify the storage space. the users authorized by you can access the services and the stored resources."
    }), `
`, _jsx(_components.p, {
      children: "Refer to the following articles for more information on file conversion and taking screenshots:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../build/set-up-and-build-your-first-app/enable-whiteboard.md",
          children: "Enable Interactive Whiteboard"
        }), ": The ", _jsx(_components.strong, {
          children: "Enable whiteboard server-side features"
        }), " section describes how to configure the third-party storage space."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/api-reference/api-ref/whiteboard/file-conversion",
          children: "File Conversion Overview"
        }), ": The ", _jsx(_components.strong, {
          children: "Start file conversion"
        }), " section describes the basic workflow for converting a file."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "network-geofencing",
      children: "Network geofencing"
    }), `
`, _jsx(_components.p, {
      children: "To conform to the laws and regulations of different countries and regions, Interactive Whiteboard supports network geofencing, which allows you to specify a data center and limits the transmission of your business data to the service area the data center covers."
    }), `
`, _jsx(_components.p, {
      children: "Now Interactive Whiteboard sets up five data centers and each data center provides services to specific areas, as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Data center"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Location"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Service area"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "us-sv"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Silicon Valley, United States"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "North America and South America"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "sg"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Singapore"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Singapore, East Asia, and Southeast Asia"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "in-mum"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Mumbai, India"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "India"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "gb-lon"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "London, England"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Europe"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "cn-hz"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Hangzhou, China"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Areas not covered by other data centers"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "Interactive Whiteboard has implemented network geofencing in each server-side RESTful API as well as all client-side whiteboard SDKs. This enables you to specify a data center whenever you create a whiteboard room or launch a file-conversion task by calling the RESTful APIs, or whenever you enable a user to join a whiteboard room by calling the methods provided by the SDKs."
    }), `
`, _jsx(_components.p, {
      children: "Refer to the following API references for more information:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/whiteboard",
          children: "RESTful APIs"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/whiteboard/web",
          children: "Web SDK APIs"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/whiteboard/android",
          children: "Android SDK APIs"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/whiteboard/ios",
          children: "iOS SDK APIs"
        })
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "With network geofencing enabled, data transfer is restricted to the service areas that your specified data center covers. However, this does not prohibit users located in different areas from communicating with each other, as long as they join the same whiteboard room. For example, when a teacher creates a whiteboard room that is geofenced in Europe, students located in India can join the room through the global accelerator and interact with the teacher. If the students join a whiteboard room that is geofenced in India, then they cannot communicate with the teacher in Europe, because no data is allowed to be transmitted across data centers."
    }), `
`, _jsx(_components.h2, {
      id: "network-redundancy",
      children: "Network redundancy"
    }), `
`, _jsx(_components.p, {
      children: "Interactive Whiteboard deploys Kubernetes clusters to build fault tolerance and disaster recovery into its services. This ensures these services are not interrupted due to a single point of failure."
    }), `
`, _jsx(_components.p, {
      children: "Interactive Whiteboard adopts incremental data synchronization, serialized data compression, and optimized network congestion control algorithms to ensure high data-packet delivery success rate within the smallest time window."
    }), `
`, _jsx(_components.h2, {
      id: "ongoing-commitment-to-security",
      children: "Ongoing commitment to security"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora is committed to building interactive whiteboard services with compliance, safety, security, and trust. If you think you might have found a security vulnerability within Interactive Whiteboard, please contact the Agora security team directly at ", _jsx(_components.a, {
        href: "mailto:security@agora.io",
        children: "security@agora.io"
      }), "."]
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
