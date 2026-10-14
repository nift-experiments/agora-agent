import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Enable whiteboard",
  description: "Enable and configure Interactive Whiteboard and its server-side features in Agora Console."
};
export let _markdown = `

To use Interactive Whiteboard, enable and configure it for your project in [Agora Console](https://console.agora.io).

## Prerequisites [#prerequisites]

Before you enable Interactive Whiteboard, ensure that you have:

* A valid Agora account. If you have a Netless account, you must complete the account migration first. See [Migrate from Netless to Agora](../migrate-and-accelerate-development/migration-guide.md).
* An active Agora project. If you have not created a project, see [Agora account management](/en/introduction/account#your-first-agora-project).

## Enable Interactive Whiteboard [#enable-interactive-whiteboard]

To enable Interactive Whiteboard:

1. Log in to [Agora Console](https://console.agora.io).
2. Select **RTC Services** from the sidebar.
3. Locate the **Whiteboard** card and turn on its toggle.
4. Select the settings icon to open the configuration panel. The Interactive Whiteboard panel provides security credentials and services configuration.

![Interactive Whiteboard settings on the Services page](https://assets-docs.agora.io/images/console/whiteboard-config.png)

## Get security credentials for your whiteboard project [#get-security-credentials-for-your-whiteboard-project]

Under **Basic Information**, the panel provides the following credentials:

* **App Identifier**: The unique App Identifier required for initializing the Whiteboard SDK.
* **Access Key** and **Secret Key**: A pair of keys you use to generate whiteboard tokens. See [Generate token using an app server](../authenticate-users/generate-token-app-server.mdx).
* **SDK Token**: An SDK token is a dynamic key. You can generate an [SDK Token](../authenticate-users/authentication-workflow.md) here for development and testing purposes. In a production environment, you generate an SDK Token at your app server either by using the [code samples](../authenticate-users/generate-token-app-server.mdx) or calling the [RESTful API](../authenticate-users/generate-token-rest.md).

To get the security credentials:

1. **Copy** ⧉ the **App Identifier**, **Access Key**, and **Secret Key**, and save them to a secure location.

2. To generate an SDK token, click **Generate Token**, then copy the token immediately and save it to a secure location. You cannot view the token again after you leave the page.

   <CalloutContainer type="warning">
     <CalloutDescription>
       Exposing security credentials can lead to serious risks. To improve security, Agora recommends the following best practices:

       * Avoid sending the Access Key and Secret Key to app clients or hard-coding them in the application. Ensure only the app server can read the keys from a secure configuration file.

       * Since SDK tokens generated through the Agora Console have high level permissions, do not send these tokens to app clients to prevent potential security risks.
     </CalloutDescription>
   </CalloutContainer>

## Enable whiteboard server-side features [#enable-whiteboard-server-side-features]

Interactive Whiteboard sets up five [data centers](../../reference/security#network-geofencing). Each data center provides the following server-side features:

* File conversion features:

  * **Docs to Picture**
  * **Docs to Web**

  After enabling the file conversion features, you can call the [RESTful APIs](/en/api-reference/api-ref/whiteboard/file-conversion) to launch a file conversion task or query the conversion progress.

  Agora charges for the file-conversion feature. See [Pricing](../../reference/pricing).

* **Screenshot**. After enabling, you can call the [RESTful APIs](/en/api-reference/api-ref/whiteboard/screenshots) to take screenshots.

To enable one or more features and configure the storage settings:

1. Under **Services Configuration**, select a data center and click **Configure**. The data center must be the same as the one you fill in the \`region\` field when calling the [Create a room](/en/api-reference/api-ref/whiteboard/room-management#create-a-room-post) API; otherwise, the service configuration does not take effect.

2. Enable one or more of **Docs to Picture**, **Docs to Web**, or **Screenshot**.

3. Set up the storage space:

   * Click the **Storage** dropdown and select a previously configured storage space, or click **Create** to add a new storage space.

   To add a new storage space, fill in the following information:

   * **Name**: (Required) The name of your storage space.

   * **Vendor**: (Required) The third-party cloud storage vendor. Choose from the following options:
     * \`AWS\`
     * \`Alibaba Cloud\`
     * \`Google Cloud Platform\`
     * \`Huawei Cloud\`

   * **Region**: (Required) The location of the data center you specified when creating a bucket.

   * **Access Key**: (Required) The access key provided by the third-party cloud storage vendor, which is used by the vendor to identify visitors.

   * **Secret Key**: (Required) The secret key provided by the third-party cloud storage vendor, which is used to authenticate signatures.

   * **Bucket**: (Required) The name of the bucket.

   * **Storage Path**: The path used to save the resources in the storage space. The default is the root directory.

   * **Domain**: The domain name used to access the third-party cloud storage service.

   To get the above information for a third-party storage service, see the documentation provided by the vendor.

   You should enable public access or higher permission for third-party storage spaces so that your app clients can access files saved in the space.

   Click **Create** to save the storage space parameters.

4. Click **Save** to save the service configuration. Read the prompt carefully, and click **Confirm**.

## Reference [#reference]

After enabling the Interactive Whiteboard, you can refer to the following documents to use its functions:

* [Join a whiteboard room](get-started-sdk/)
* [File conversion overview](/en/api-reference/api-ref/whiteboard/file-conversion)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To use Interactive Whiteboard, enable and configure it for your project in Agora Console."
  }, {
    heading: "prerequisites",
    content: "Before you enable Interactive Whiteboard, ensure that you have:"
  }, {
    heading: "prerequisites",
    content: "A valid Agora account. If you have a Netless account, you must complete the account migration first. See Migrate from Netless to Agora."
  }, {
    heading: "prerequisites",
    content: "An active Agora project. If you have not created a project, see Agora account management."
  }, {
    heading: "enable-interactive-whiteboard",
    content: "To enable Interactive Whiteboard:"
  }, {
    heading: "enable-interactive-whiteboard",
    content: "Log in to Agora Console."
  }, {
    heading: "enable-interactive-whiteboard",
    content: "Select **RTC Services** from the sidebar."
  }, {
    heading: "enable-interactive-whiteboard",
    content: "Locate the **Whiteboard** card and turn on its toggle."
  }, {
    heading: "enable-interactive-whiteboard",
    content: "Select the settings icon to open the configuration panel. The Interactive Whiteboard panel provides security credentials and services configuration."
  }, {
    heading: "get-security-credentials-for-your-whiteboard-project",
    content: "Under **Basic Information**, the panel provides the following credentials:"
  }, {
    heading: "get-security-credentials-for-your-whiteboard-project",
    content: "**App Identifier**: The unique App Identifier required for initializing the Whiteboard SDK."
  }, {
    heading: "get-security-credentials-for-your-whiteboard-project",
    content: "**Access Key** and **Secret Key**: A pair of keys you use to generate whiteboard tokens. See Generate token using an app server."
  }, {
    heading: "get-security-credentials-for-your-whiteboard-project",
    content: "**SDK Token**: An SDK token is a dynamic key. You can generate an SDK Token here for development and testing purposes. In a production environment, you generate an SDK Token at your app server either by using the code samples or calling the RESTful API."
  }, {
    heading: "get-security-credentials-for-your-whiteboard-project",
    content: "To get the security credentials:"
  }, {
    heading: "get-security-credentials-for-your-whiteboard-project",
    content: "**Copy** ⧉ the **App Identifier**, **Access Key**, and **Secret Key**, and save them to a secure location."
  }, {
    heading: "get-security-credentials-for-your-whiteboard-project",
    content: "To generate an SDK token, click **Generate Token**, then copy the token immediately and save it to a secure location. You cannot view the token again after you leave the page."
  }, {
    heading: "get-security-credentials-for-your-whiteboard-project",
    content: "Exposing security credentials can lead to serious risks. To improve security, Agora recommends the following best practices:"
  }, {
    heading: "get-security-credentials-for-your-whiteboard-project",
    content: "Avoid sending the Access Key and Secret Key to app clients or hard-coding them in the application. Ensure only the app server can read the keys from a secure configuration file."
  }, {
    heading: "get-security-credentials-for-your-whiteboard-project",
    content: "Since SDK tokens generated through the Agora Console have high level permissions, do not send these tokens to app clients to prevent potential security risks."
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "Interactive Whiteboard sets up five data centers. Each data center provides the following server-side features:"
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "File conversion features:"
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "**Docs to Picture**"
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "**Docs to Web**"
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "After enabling the file conversion features, you can call the RESTful APIs to launch a file conversion task or query the conversion progress."
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "Agora charges for the file-conversion feature. See Pricing."
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "**Screenshot**. After enabling, you can call the RESTful APIs to take screenshots."
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "To enable one or more features and configure the storage settings:"
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "Under **Services Configuration**, select a data center and click **Configure**. The data center must be the same as the one you fill in the `region` field when calling the Create a room API; otherwise, the service configuration does not take effect."
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "Enable one or more of **Docs to Picture**, **Docs to Web**, or **Screenshot**."
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "Set up the storage space:"
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "Click the **Storage** dropdown and select a previously configured storage space, or click **Create** to add a new storage space."
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "To add a new storage space, fill in the following information:"
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "**Name**: (Required) The name of your storage space."
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "**Vendor**: (Required) The third-party cloud storage vendor. Choose from the following options:"
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "`AWS`"
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "`Alibaba Cloud`"
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "`Google Cloud Platform`"
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "`Huawei Cloud`"
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "**Region**: (Required) The location of the data center you specified when creating a bucket."
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "**Access Key**: (Required) The access key provided by the third-party cloud storage vendor, which is used by the vendor to identify visitors."
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "**Secret Key**: (Required) The secret key provided by the third-party cloud storage vendor, which is used to authenticate signatures."
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "**Bucket**: (Required) The name of the bucket."
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "**Storage Path**: The path used to save the resources in the storage space. The default is the root directory."
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "**Domain**: The domain name used to access the third-party cloud storage service."
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "To get the above information for a third-party storage service, see the documentation provided by the vendor."
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "You should enable public access or higher permission for third-party storage spaces so that your app clients can access files saved in the space."
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "Click **Create** to save the storage space parameters."
  }, {
    heading: "enable-whiteboard-server-side-features",
    content: "Click **Save** to save the service configuration. Read the prompt carefully, and click **Confirm**."
  }, {
    heading: "reference",
    content: "After enabling the Interactive Whiteboard, you can refer to the following documents to use its functions:"
  }, {
    heading: "reference",
    content: "Join a whiteboard room"
  }, {
    heading: "reference",
    content: "File conversion overview"
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "enable-interactive-whiteboard",
    content: "Enable Interactive Whiteboard"
  }, {
    id: "get-security-credentials-for-your-whiteboard-project",
    content: "Get security credentials for your whiteboard project"
  }, {
    id: "enable-whiteboard-server-side-features",
    content: "Enable whiteboard server-side features"
  }, {
    id: "reference",
    content: "Reference"
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
  url: "#enable-interactive-whiteboard",
  title: _jsx(_Fragment, {
    children: "Enable Interactive Whiteboard"
  })
}, {
  depth: 2,
  url: "#get-security-credentials-for-your-whiteboard-project",
  title: _jsx(_Fragment, {
    children: "Get security credentials for your whiteboard project"
  })
}, {
  depth: 2,
  url: "#enable-whiteboard-server-side-features",
  title: _jsx(_Fragment, {
    children: "Enable whiteboard server-side features"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["To use Interactive Whiteboard, enable and configure it for your project in ", _jsx(_components.a, {
        href: "https://console.agora.io",
        children: "Agora Console"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Before you enable Interactive Whiteboard, ensure that you have:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["A valid Agora account. If you have a Netless account, you must complete the account migration first. See ", _jsx(_components.a, {
          href: "../migrate-and-accelerate-development/migration-guide.md",
          children: "Migrate from Netless to Agora"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["An active Agora project. If you have not created a project, see ", _jsx(_components.a, {
          href: "/en/introduction/account#your-first-agora-project",
          children: "Agora account management"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "enable-interactive-whiteboard",
      children: "Enable Interactive Whiteboard"
    }), `
`, _jsx(_components.p, {
      children: "To enable Interactive Whiteboard:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Log in to ", _jsx(_components.a, {
          href: "https://console.agora.io",
          children: "Agora Console"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "RTC Services"
        }), " from the sidebar."]
      }), `
`, _jsxs(_components.li, {
        children: ["Locate the ", _jsx(_components.strong, {
          children: "Whiteboard"
        }), " card and turn on its toggle."]
      }), `
`, _jsx(_components.li, {
        children: "Select the settings icon to open the configuration panel. The Interactive Whiteboard panel provides security credentials and services configuration."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/whiteboard-config.png",
        alt: "Interactive Whiteboard settings on the Services page"
      })
    }), `
`, _jsx(_components.h2, {
      id: "get-security-credentials-for-your-whiteboard-project",
      children: "Get security credentials for your whiteboard project"
    }), `
`, _jsxs(_components.p, {
      children: ["Under ", _jsx(_components.strong, {
        children: "Basic Information"
      }), ", the panel provides the following credentials:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "App Identifier"
        }), ": The unique App Identifier required for initializing the Whiteboard SDK."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Access Key"
        }), " and ", _jsx(_components.strong, {
          children: "Secret Key"
        }), ": A pair of keys you use to generate whiteboard tokens. See ", _jsx(_components.a, {
          href: "../authenticate-users/generate-token-app-server.mdx",
          children: "Generate token using an app server"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "SDK Token"
        }), ": An SDK token is a dynamic key. You can generate an ", _jsx(_components.a, {
          href: "../authenticate-users/authentication-workflow.md",
          children: "SDK Token"
        }), " here for development and testing purposes. In a production environment, you generate an SDK Token at your app server either by using the ", _jsx(_components.a, {
          href: "../authenticate-users/generate-token-app-server.mdx",
          children: "code samples"
        }), " or calling the ", _jsx(_components.a, {
          href: "../authenticate-users/generate-token-rest.md",
          children: "RESTful API"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "To get the security credentials:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Copy"
          }), " ⧉ the ", _jsx(_components.strong, {
            children: "App Identifier"
          }), ", ", _jsx(_components.strong, {
            children: "Access Key"
          }), ", and ", _jsx(_components.strong, {
            children: "Secret Key"
          }), ", and save them to a secure location."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To generate an SDK token, click ", _jsx(_components.strong, {
            children: "Generate Token"
          }), ", then copy the token immediately and save it to a secure location. You cannot view the token again after you leave the page."]
        }), `
`, _jsx(CalloutContainer, {
          type: "warning",
          children: _jsxs(CalloutDescription, {
            children: [_jsx(_components.p, {
              children: "Exposing security credentials can lead to serious risks. To improve security, Agora recommends the following best practices:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Avoid sending the Access Key and Secret Key to app clients or hard-coding them in the application. Ensure only the app server can read the keys from a secure configuration file."
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Since SDK tokens generated through the Agora Console have high level permissions, do not send these tokens to app clients to prevent potential security risks."
                }), `
`]
              }), `
`]
            })]
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "enable-whiteboard-server-side-features",
      children: "Enable whiteboard server-side features"
    }), `
`, _jsxs(_components.p, {
      children: ["Interactive Whiteboard sets up five ", _jsx(_components.a, {
        href: "../../reference/security#network-geofencing",
        children: "data centers"
      }), ". Each data center provides the following server-side features:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "File conversion features:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.strong, {
              children: "Docs to Picture"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.strong, {
              children: "Docs to Web"
            })
          }), `
`]
        }), `
`, _jsxs(_components.p, {
          children: ["After enabling the file conversion features, you can call the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/whiteboard/file-conversion",
            children: "RESTful APIs"
          }), " to launch a file conversion task or query the conversion progress."]
        }), `
`, _jsxs(_components.p, {
          children: ["Agora charges for the file-conversion feature. See ", _jsx(_components.a, {
            href: "../../reference/pricing",
            children: "Pricing"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Screenshot"
          }), ". After enabling, you can call the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/whiteboard/screenshots",
            children: "RESTful APIs"
          }), " to take screenshots."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "To enable one or more features and configure the storage settings:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Under ", _jsx(_components.strong, {
            children: "Services Configuration"
          }), ", select a data center and click ", _jsx(_components.strong, {
            children: "Configure"
          }), ". The data center must be the same as the one you fill in the ", _jsx(_components.code, {
            children: "region"
          }), " field when calling the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/whiteboard/room-management#create-a-room-post",
            children: "Create a room"
          }), " API; otherwise, the service configuration does not take effect."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Enable one or more of ", _jsx(_components.strong, {
            children: "Docs to Picture"
          }), ", ", _jsx(_components.strong, {
            children: "Docs to Web"
          }), ", or ", _jsx(_components.strong, {
            children: "Screenshot"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Set up the storage space:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Click the ", _jsx(_components.strong, {
              children: "Storage"
            }), " dropdown and select a previously configured storage space, or click ", _jsx(_components.strong, {
              children: "Create"
            }), " to add a new storage space."]
          }), `
`]
        }), `
`, _jsx(_components.p, {
          children: "To add a new storage space, fill in the following information:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Name"
              }), ": (Required) The name of your storage space."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Vendor"
              }), ": (Required) The third-party cloud storage vendor. Choose from the following options:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "AWS"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "Alibaba Cloud"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "Google Cloud Platform"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "Huawei Cloud"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Region"
              }), ": (Required) The location of the data center you specified when creating a bucket."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Access Key"
              }), ": (Required) The access key provided by the third-party cloud storage vendor, which is used by the vendor to identify visitors."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Secret Key"
              }), ": (Required) The secret key provided by the third-party cloud storage vendor, which is used to authenticate signatures."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Bucket"
              }), ": (Required) The name of the bucket."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Storage Path"
              }), ": The path used to save the resources in the storage space. The default is the root directory."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Domain"
              }), ": The domain name used to access the third-party cloud storage service."]
            }), `
`]
          }), `
`]
        }), `
`, _jsx(_components.p, {
          children: "To get the above information for a third-party storage service, see the documentation provided by the vendor."
        }), `
`, _jsx(_components.p, {
          children: "You should enable public access or higher permission for third-party storage spaces so that your app clients can access files saved in the space."
        }), `
`, _jsxs(_components.p, {
          children: ["Click ", _jsx(_components.strong, {
            children: "Create"
          }), " to save the storage space parameters."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Click ", _jsx(_components.strong, {
            children: "Save"
          }), " to save the service configuration. Read the prompt carefully, and click ", _jsx(_components.strong, {
            children: "Confirm"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "After enabling the Interactive Whiteboard, you can refer to the following documents to use its functions:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "get-started-sdk/",
          children: "Join a whiteboard room"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/whiteboard/file-conversion",
          children: "File conversion overview"
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
