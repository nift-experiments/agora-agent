import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Account",
  description: "Sign up for an Agora account, create a project, and get the App ID and App Certificate."
};
export let _markdown = `

This page shows you how to sign up for an Agora account, create a new project, and get the App ID and App Certificate to generate a temporary token.

## Get started with Agora [#get-started-with-agora]

Use [Agora Console](https://console.agora.io) to create and configure projects, and manage your Agora account. Each project provides the credentials your app needs to integrate Agora products.

### Sign up for an Agora account [#sign-up-for-an-agora-account]

To use Agora products and services, you need an Agora account. Go to the [Agora sign-up page](https://sso2.agora.io/en/signup) and sign up with an email address, or with a Google or GitHub account.

After you sign up, you are logged in automatically. For later visits, log in to [Agora Console](https://console.agora.io) with your email address or linked third-party account.

### Your first Agora project [#your-first-agora-project]

When you create a new account, Agora creates a default project and opens it for you when you log in.

To create a new project:

1. In [Agora Console](https://console.agora.io), expand the **Projects** dropdown at the top of the page.

2. Select **Create project**.
   ![Create a new project button](https://assets-docs.agora.io/images/console/create-new-project-button.png)

3. Enter a **Project Name**. Agora creates the project with a default setup: App ID and token authentication enabled, and Conversational AI with Signaling (RTM) enabled.

   ![Create project dialog](https://assets-docs.agora.io/images/console/create-new-project.png)

4. Click **Create Project**. You see the new project selected in the **Project** dropdown.

### Get the App ID and App Certificate [#get-the-app-id-and-app-certificate]

Agora automatically assigns a unique identifier to each project, called an App ID. To generate authentication tokens on your app server, you also need the project's App Certificate.

To get the App ID and App Certificate for a project:

1. On the **Home** page, select **Manage credentials** on the project card.
2. Use the copy buttons next to **App ID** and **Primary certificate** to get your App ID and App Certificate, respectively.

![Project credentials panel](https://assets-docs.agora.io/images/console/project-credentials.png)

For full App Certificate management details, see [Projects](/en/introduction/projects#manage-app-certificates).

### Generate temporary tokens [#generate-temporary-tokens]

To ensure communication security, best practice is to use tokens to authenticate users who log in from your client app.

To generate a temporary RTC + RTM token for your project:

1. On the **Home** page, select **Manage credentials** on the project card.

2. Select **Generate Temp Token**.

3. Enter a **Channel** name and **RTC UID** in the pop-up box and select **Generate token**.

   ![Generate Temp Token dialog](https://assets-docs.agora.io/images/console/generate-temp-token.png)

4. Copy the generated token.

For more information on managing other aspects of your Agora account, see [Console setup](/en/introduction/console-setup).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page shows you how to sign up for an Agora account, create a new project, and get the App ID and App Certificate to generate a temporary token."
  }, {
    heading: "get-started-with-agora",
    content: "Use Agora Console to create and configure projects, and manage your Agora account. Each project provides the credentials your app needs to integrate Agora products."
  }, {
    heading: "sign-up-for-an-agora-account",
    content: "To use Agora products and services, you need an Agora account. Go to the Agora sign-up page and sign up with an email address, or with a Google or GitHub account."
  }, {
    heading: "sign-up-for-an-agora-account",
    content: "After you sign up, you are logged in automatically. For later visits, log in to Agora Console with your email address or linked third-party account."
  }, {
    heading: "your-first-agora-project",
    content: "When you create a new account, Agora creates a default project and opens it for you when you log in."
  }, {
    heading: "your-first-agora-project",
    content: "To create a new project:"
  }, {
    heading: "your-first-agora-project",
    content: "In Agora Console, expand the **Projects** dropdown at the top of the page."
  }, {
    heading: "your-first-agora-project",
    content: "Select **Create project**."
  }, {
    heading: "your-first-agora-project",
    content: "Enter a **Project Name**. Agora creates the project with a default setup: App ID and token authentication enabled, and Conversational AI with Signaling (RTM) enabled."
  }, {
    heading: "your-first-agora-project",
    content: "Click **Create Project**. You see the new project selected in the **Project** dropdown."
  }, {
    heading: "get-the-app-id-and-app-certificate",
    content: "Agora automatically assigns a unique identifier to each project, called an App ID. To generate authentication tokens on your app server, you also need the project's App Certificate."
  }, {
    heading: "get-the-app-id-and-app-certificate",
    content: "To get the App ID and App Certificate for a project:"
  }, {
    heading: "get-the-app-id-and-app-certificate",
    content: "On the **Home** page, select **Manage credentials** on the project card."
  }, {
    heading: "get-the-app-id-and-app-certificate",
    content: "Use the copy buttons next to **App ID** and **Primary certificate** to get your App ID and App Certificate, respectively."
  }, {
    heading: "get-the-app-id-and-app-certificate",
    content: "For full App Certificate management details, see Projects."
  }, {
    heading: "generate-temporary-tokens",
    content: "To ensure communication security, best practice is to use tokens to authenticate users who log in from your client app."
  }, {
    heading: "generate-temporary-tokens",
    content: "To generate a temporary RTC + RTM token for your project:"
  }, {
    heading: "generate-temporary-tokens",
    content: "On the **Home** page, select **Manage credentials** on the project card."
  }, {
    heading: "generate-temporary-tokens",
    content: "Select **Generate Temp Token**."
  }, {
    heading: "generate-temporary-tokens",
    content: "Enter a **Channel** name and **RTC UID** in the pop-up box and select **Generate token**."
  }, {
    heading: "generate-temporary-tokens",
    content: "Copy the generated token."
  }, {
    heading: "generate-temporary-tokens",
    content: "For more information on managing other aspects of your Agora account, see Console setup."
  }],
  headings: [{
    id: "get-started-with-agora",
    content: "Get started with Agora"
  }, {
    id: "sign-up-for-an-agora-account",
    content: "Sign up for an Agora account"
  }, {
    id: "your-first-agora-project",
    content: "Your first Agora project"
  }, {
    id: "get-the-app-id-and-app-certificate",
    content: "Get the App ID and App Certificate"
  }, {
    id: "generate-temporary-tokens",
    content: "Generate temporary tokens"
  }]
};
export let toc = [{
  depth: 2,
  url: "#get-started-with-agora",
  title: _jsx(_Fragment, {
    children: "Get started with Agora"
  })
}, {
  depth: 3,
  url: "#sign-up-for-an-agora-account",
  title: _jsx(_Fragment, {
    children: "Sign up for an Agora account"
  })
}, {
  depth: 3,
  url: "#your-first-agora-project",
  title: _jsx(_Fragment, {
    children: "Your first Agora project"
  })
}, {
  depth: 3,
  url: "#get-the-app-id-and-app-certificate",
  title: _jsx(_Fragment, {
    children: "Get the App ID and App Certificate"
  })
}, {
  depth: 3,
  url: "#generate-temporary-tokens",
  title: _jsx(_Fragment, {
    children: "Generate temporary tokens"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_Fragment, {
      children: [_jsx(_components.p, {
        children: "This page shows you how to sign up for an Agora account, create a new project, and get the App ID and App Certificate to generate a temporary token."
      }), `
`, _jsx(_components.h2, {
        id: "get-started-with-agora",
        children: "Get started with Agora"
      }), `
`, _jsxs(_components.p, {
        children: ["Use ", _jsx(_components.a, {
          href: "https://console.agora.io",
          children: "Agora Console"
        }), " to create and configure projects, and manage your Agora account. Each project provides the credentials your app needs to integrate Agora products."]
      }), `
`, _jsxs(_Fragment, {
        children: [_jsx(_components.h3, {
          id: "sign-up-for-an-agora-account",
          children: "Sign up for an Agora account"
        }), `
`, _jsxs(_components.p, {
          children: ["To use Agora products and services, you need an Agora account. Go to the ", _jsx(_components.a, {
            href: "https://sso2.agora.io/en/signup",
            children: "Agora sign-up page"
          }), " and sign up with an email address, or with a Google or GitHub account."]
        }), `
`, _jsxs(_components.p, {
          children: ["After you sign up, you are logged in automatically. For later visits, log in to ", _jsx(_components.a, {
            href: "https://console.agora.io",
            children: "Agora Console"
          }), " with your email address or linked third-party account."]
        })]
      }), `
`, _jsxs(_Fragment, {
        children: [_jsx(_components.h3, {
          id: "your-first-agora-project",
          children: "Your first Agora project"
        }), `
`, _jsx(_components.p, {
          children: "When you create a new account, Agora creates a default project and opens it for you when you log in."
        }), `
`, _jsx(_components.p, {
          children: "To create a new project:"
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["In ", _jsx(_components.a, {
                href: "https://console.agora.io",
                children: "Agora Console"
              }), ", expand the ", _jsx(_components.strong, {
                children: "Projects"
              }), " dropdown at the top of the page."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Select ", _jsx(_components.strong, {
                children: "Create project"
              }), `.
`, _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/create-new-project-button.png",
                alt: "Create a new project button"
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Enter a ", _jsx(_components.strong, {
                children: "Project Name"
              }), ". Agora creates the project with a default setup: App ID and token authentication enabled, and Conversational AI with Signaling (RTM) enabled."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/create-new-project.png",
                alt: "Create project dialog"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Click ", _jsx(_components.strong, {
                children: "Create Project"
              }), ". You see the new project selected in the ", _jsx(_components.strong, {
                children: "Project"
              }), " dropdown."]
            }), `
`]
          }), `
`]
        })]
      }), `
`, _jsxs(_Fragment, {
        children: [_jsx(_components.h3, {
          id: "get-the-app-id-and-app-certificate",
          children: "Get the App ID and App Certificate"
        }), `
`, _jsx(_components.p, {
          children: "Agora automatically assigns a unique identifier to each project, called an App ID. To generate authentication tokens on your app server, you also need the project's App Certificate."
        }), `
`, _jsx(_components.p, {
          children: "To get the App ID and App Certificate for a project:"
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: ["On the ", _jsx(_components.strong, {
              children: "Home"
            }), " page, select ", _jsx(_components.strong, {
              children: "Manage credentials"
            }), " on the project card."]
          }), `
`, _jsxs(_components.li, {
            children: ["Use the copy buttons next to ", _jsx(_components.strong, {
              children: "App ID"
            }), " and ", _jsx(_components.strong, {
              children: "Primary certificate"
            }), " to get your App ID and App Certificate, respectively."]
          }), `
`]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/console/project-credentials.png",
            alt: "Project credentials panel"
          })
        }), `
`, _jsxs(_components.p, {
          children: ["For full App Certificate management details, see ", _jsx(_components.a, {
            href: "/en/introduction/projects#manage-app-certificates",
            children: "Projects"
          }), "."]
        })]
      })]
    }), `
`, _jsxs(_Fragment, {
      children: [_jsx(_components.h3, {
        id: "generate-temporary-tokens",
        children: "Generate temporary tokens"
      }), `
`, _jsx(_components.p, {
        children: "To ensure communication security, best practice is to use tokens to authenticate users who log in from your client app."
      }), `
`, _jsx(_components.p, {
        children: "To generate a temporary RTC + RTM token for your project:"
      }), `
`, _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the ", _jsx(_components.strong, {
              children: "Home"
            }), " page, select ", _jsx(_components.strong, {
              children: "Manage credentials"
            }), " on the project card."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Select ", _jsx(_components.strong, {
              children: "Generate Temp Token"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Enter a ", _jsx(_components.strong, {
              children: "Channel"
            }), " name and ", _jsx(_components.strong, {
              children: "RTC UID"
            }), " in the pop-up box and select ", _jsx(_components.strong, {
              children: "Generate token"
            }), "."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/console/generate-temp-token.png",
              alt: "Generate Temp Token dialog"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Copy the generated token."
          }), `
`]
        }), `
`]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For more information on managing other aspects of your Agora account, see ", _jsx(_components.a, {
        href: "/en/introduction/console-setup",
        children: "Console setup"
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
