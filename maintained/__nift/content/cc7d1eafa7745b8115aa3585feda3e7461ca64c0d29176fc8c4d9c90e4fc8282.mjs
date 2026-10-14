import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Projects",
  description: "Set up the project boundary for your app, enable the right services, and manage the credentials your integration depends on."
};
export let _markdown = `

## Why this page matters [#why-this-page-matters]

In Agora, a project is the operational boundary for a product environment. It holds the App ID, certificate configuration, enabled services, and billing context that the rest of your integration depends on.

If your project setup is wrong, the rest of the docs may still be correct but your implementation will fail later through missing credentials, disabled services, or the wrong security mode.

## What you do here [#what-you-do-here]

Use the **Projects** page in Agora Console to:

* create a new project for a product or environment
* choose the authentication mode for that project
* copy the App ID used by clients and services
* manage App Certificates for token-based access
* check whether the project is configured the way your integration expects

## Recommended setup [#recommended-setup]

For most teams:

* create separate projects for development, testing, and production
* use **App ID + Token** instead of App ID only
* keep certificate management on the server side
* confirm the correct project is being used before debugging client or backend code

## Create a project [#create-a-project]

1. Open the **Projects** page in Agora Console.
2. Click **Create New**.
3. Enter a project name and use case.
4. Select &#x2A;*App ID + Token (Recommended)** as the authentication mechanism.
5. Click **Submit**.

## What to check in project details [#what-to-check-in-project-details]

On the project details page, confirm that you can:

* copy the App ID used by your application
* view whether token-based security is enabled
* access the App Certificate when your backend needs token generation
* verify that the project is the one your current environment should use

## Service access [#service-access]

To access most Agora products you need:

* An App ID.
* An App Certificate if your backend generates tokens.
* A project with the required service enabled.

For production, use token-based authentication instead of App ID only.

## What to verify before launch [#what-to-verify-before-launch]

Before moving beyond a prototype, confirm:

* the required service is enabled for the correct project
* the authentication mode matches your intended production design
* the billing unit makes sense for your usage pattern
* the right people on your team can access billing and financial records

## Manage App Certificates [#manage-app-certificates]

Agora provides two certificate roles:

* **Primary Certificate** for normal token generation
* **Secondary Certificate** for production rotation and controlled cutovers

If you suspect a certificate is compromised:

1. Enable the Secondary Certificate.
2. Swap the certificates.
3. Disable the old secondary certificate.
4. Delete the original primary certificate after clients and services have moved over.

Deleting a certificate invalidates all tokens generated with that certificate.

## Restrictions [#restrictions]

* If your account has multiple members, only those assigned to the **Admin**, **Engineer**, or an authorized custom team can access the **Projects** page.
* Each Agora account can create up to 20 projects. If you need to create more projects, submit a support ticket.

## Where to go next [#where-to-go-next]

* Open [Console setup](/en/introduction/console-setup) to understand the first-time console workflow around credentials and service activation.
* Read [Billing](/en/introduction/billing) to understand free allowances, settlement, and package options before launch.
* Read [Security and privacy](/en/introduction/security-privacy) before production rollout.
`;
export let structuredData = {
  contents: [{
    heading: "why-this-page-matters",
    content: "In Agora, a project is the operational boundary for a product environment. It holds the App ID, certificate configuration, enabled services, and billing context that the rest of your integration depends on."
  }, {
    heading: "why-this-page-matters",
    content: "If your project setup is wrong, the rest of the docs may still be correct but your implementation will fail later through missing credentials, disabled services, or the wrong security mode."
  }, {
    heading: "what-you-do-here",
    content: "Use the **Projects** page in Agora Console to:"
  }, {
    heading: "what-you-do-here",
    content: "create a new project for a product or environment"
  }, {
    heading: "what-you-do-here",
    content: "choose the authentication mode for that project"
  }, {
    heading: "what-you-do-here",
    content: "copy the App ID used by clients and services"
  }, {
    heading: "what-you-do-here",
    content: "manage App Certificates for token-based access"
  }, {
    heading: "what-you-do-here",
    content: "check whether the project is configured the way your integration expects"
  }, {
    heading: "recommended-setup",
    content: "For most teams:"
  }, {
    heading: "recommended-setup",
    content: "create separate projects for development, testing, and production"
  }, {
    heading: "recommended-setup",
    content: "use **App ID + Token** instead of App ID only"
  }, {
    heading: "recommended-setup",
    content: "keep certificate management on the server side"
  }, {
    heading: "recommended-setup",
    content: "confirm the correct project is being used before debugging client or backend code"
  }, {
    heading: "create-a-project",
    content: "Open the **Projects** page in Agora Console."
  }, {
    heading: "create-a-project",
    content: "Click **Create New**."
  }, {
    heading: "create-a-project",
    content: "Enter a project name and use case."
  }, {
    heading: "create-a-project",
    content: "Select &#x2A;*App ID + Token (Recommended)** as the authentication mechanism."
  }, {
    heading: "create-a-project",
    content: "Click **Submit**."
  }, {
    heading: "what-to-check-in-project-details",
    content: "On the project details page, confirm that you can:"
  }, {
    heading: "what-to-check-in-project-details",
    content: "copy the App ID used by your application"
  }, {
    heading: "what-to-check-in-project-details",
    content: "view whether token-based security is enabled"
  }, {
    heading: "what-to-check-in-project-details",
    content: "access the App Certificate when your backend needs token generation"
  }, {
    heading: "what-to-check-in-project-details",
    content: "verify that the project is the one your current environment should use"
  }, {
    heading: "service-access",
    content: "To access most Agora products you need:"
  }, {
    heading: "service-access",
    content: "An App ID."
  }, {
    heading: "service-access",
    content: "An App Certificate if your backend generates tokens."
  }, {
    heading: "service-access",
    content: "A project with the required service enabled."
  }, {
    heading: "service-access",
    content: "For production, use token-based authentication instead of App ID only."
  }, {
    heading: "what-to-verify-before-launch",
    content: "Before moving beyond a prototype, confirm:"
  }, {
    heading: "what-to-verify-before-launch",
    content: "the required service is enabled for the correct project"
  }, {
    heading: "what-to-verify-before-launch",
    content: "the authentication mode matches your intended production design"
  }, {
    heading: "what-to-verify-before-launch",
    content: "the billing unit makes sense for your usage pattern"
  }, {
    heading: "what-to-verify-before-launch",
    content: "the right people on your team can access billing and financial records"
  }, {
    heading: "manage-app-certificates",
    content: "Agora provides two certificate roles:"
  }, {
    heading: "manage-app-certificates",
    content: "**Primary Certificate** for normal token generation"
  }, {
    heading: "manage-app-certificates",
    content: "**Secondary Certificate** for production rotation and controlled cutovers"
  }, {
    heading: "manage-app-certificates",
    content: "If you suspect a certificate is compromised:"
  }, {
    heading: "manage-app-certificates",
    content: "Enable the Secondary Certificate."
  }, {
    heading: "manage-app-certificates",
    content: "Swap the certificates."
  }, {
    heading: "manage-app-certificates",
    content: "Disable the old secondary certificate."
  }, {
    heading: "manage-app-certificates",
    content: "Delete the original primary certificate after clients and services have moved over."
  }, {
    heading: "manage-app-certificates",
    content: "Deleting a certificate invalidates all tokens generated with that certificate."
  }, {
    heading: "restrictions",
    content: "If your account has multiple members, only those assigned to the **Admin**, **Engineer**, or an authorized custom team can access the **Projects** page."
  }, {
    heading: "restrictions",
    content: "Each Agora account can create up to 20 projects. If you need to create more projects, submit a support ticket."
  }, {
    heading: "where-to-go-next",
    content: "Open Console setup to understand the first-time console workflow around credentials and service activation."
  }, {
    heading: "where-to-go-next",
    content: "Read Billing to understand free allowances, settlement, and package options before launch."
  }, {
    heading: "where-to-go-next",
    content: "Read Security and privacy before production rollout."
  }],
  headings: [{
    id: "why-this-page-matters",
    content: "Why this page matters"
  }, {
    id: "what-you-do-here",
    content: "What you do here"
  }, {
    id: "recommended-setup",
    content: "Recommended setup"
  }, {
    id: "create-a-project",
    content: "Create a project"
  }, {
    id: "what-to-check-in-project-details",
    content: "What to check in project details"
  }, {
    id: "service-access",
    content: "Service access"
  }, {
    id: "what-to-verify-before-launch",
    content: "What to verify before launch"
  }, {
    id: "manage-app-certificates",
    content: "Manage App Certificates"
  }, {
    id: "restrictions",
    content: "Restrictions"
  }, {
    id: "where-to-go-next",
    content: "Where to go next"
  }]
};
export let toc = [{
  depth: 2,
  url: "#why-this-page-matters",
  title: _jsx(_Fragment, {
    children: "Why this page matters"
  })
}, {
  depth: 2,
  url: "#what-you-do-here",
  title: _jsx(_Fragment, {
    children: "What you do here"
  })
}, {
  depth: 2,
  url: "#recommended-setup",
  title: _jsx(_Fragment, {
    children: "Recommended setup"
  })
}, {
  depth: 2,
  url: "#create-a-project",
  title: _jsx(_Fragment, {
    children: "Create a project"
  })
}, {
  depth: 2,
  url: "#what-to-check-in-project-details",
  title: _jsx(_Fragment, {
    children: "What to check in project details"
  })
}, {
  depth: 2,
  url: "#service-access",
  title: _jsx(_Fragment, {
    children: "Service access"
  })
}, {
  depth: 2,
  url: "#what-to-verify-before-launch",
  title: _jsx(_Fragment, {
    children: "What to verify before launch"
  })
}, {
  depth: 2,
  url: "#manage-app-certificates",
  title: _jsx(_Fragment, {
    children: "Manage App Certificates"
  })
}, {
  depth: 2,
  url: "#restrictions",
  title: _jsx(_Fragment, {
    children: "Restrictions"
  })
}, {
  depth: 2,
  url: "#where-to-go-next",
  title: _jsx(_Fragment, {
    children: "Where to go next"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "why-this-page-matters",
      children: "Why this page matters"
    }), `
`, _jsx(_components.p, {
      children: "In Agora, a project is the operational boundary for a product environment. It holds the App ID, certificate configuration, enabled services, and billing context that the rest of your integration depends on."
    }), `
`, _jsx(_components.p, {
      children: "If your project setup is wrong, the rest of the docs may still be correct but your implementation will fail later through missing credentials, disabled services, or the wrong security mode."
    }), `
`, _jsx(_components.h2, {
      id: "what-you-do-here",
      children: "What you do here"
    }), `
`, _jsxs(_components.p, {
      children: ["Use the ", _jsx(_components.strong, {
        children: "Projects"
      }), " page in Agora Console to:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "create a new project for a product or environment"
      }), `
`, _jsx(_components.li, {
        children: "choose the authentication mode for that project"
      }), `
`, _jsx(_components.li, {
        children: "copy the App ID used by clients and services"
      }), `
`, _jsx(_components.li, {
        children: "manage App Certificates for token-based access"
      }), `
`, _jsx(_components.li, {
        children: "check whether the project is configured the way your integration expects"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "recommended-setup",
      children: "Recommended setup"
    }), `
`, _jsx(_components.p, {
      children: "For most teams:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "create separate projects for development, testing, and production"
      }), `
`, _jsxs(_components.li, {
        children: ["use ", _jsx(_components.strong, {
          children: "App ID + Token"
        }), " instead of App ID only"]
      }), `
`, _jsx(_components.li, {
        children: "keep certificate management on the server side"
      }), `
`, _jsx(_components.li, {
        children: "confirm the correct project is being used before debugging client or backend code"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "create-a-project",
      children: "Create a project"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Open the ", _jsx(_components.strong, {
          children: "Projects"
        }), " page in Agora Console."]
      }), `
`, _jsxs(_components.li, {
        children: ["Click ", _jsx(_components.strong, {
          children: "Create New"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Enter a project name and use case."
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "App ID + Token (Recommended)"
        }), " as the authentication mechanism."]
      }), `
`, _jsxs(_components.li, {
        children: ["Click ", _jsx(_components.strong, {
          children: "Submit"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "what-to-check-in-project-details",
      children: "What to check in project details"
    }), `
`, _jsx(_components.p, {
      children: "On the project details page, confirm that you can:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "copy the App ID used by your application"
      }), `
`, _jsx(_components.li, {
        children: "view whether token-based security is enabled"
      }), `
`, _jsx(_components.li, {
        children: "access the App Certificate when your backend needs token generation"
      }), `
`, _jsx(_components.li, {
        children: "verify that the project is the one your current environment should use"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "service-access",
      children: "Service access"
    }), `
`, _jsx(_components.p, {
      children: "To access most Agora products you need:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "An App ID."
      }), `
`, _jsx(_components.li, {
        children: "An App Certificate if your backend generates tokens."
      }), `
`, _jsx(_components.li, {
        children: "A project with the required service enabled."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "For production, use token-based authentication instead of App ID only."
    }), `
`, _jsx(_components.h2, {
      id: "what-to-verify-before-launch",
      children: "What to verify before launch"
    }), `
`, _jsx(_components.p, {
      children: "Before moving beyond a prototype, confirm:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "the required service is enabled for the correct project"
      }), `
`, _jsx(_components.li, {
        children: "the authentication mode matches your intended production design"
      }), `
`, _jsx(_components.li, {
        children: "the billing unit makes sense for your usage pattern"
      }), `
`, _jsx(_components.li, {
        children: "the right people on your team can access billing and financial records"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "manage-app-certificates",
      children: "Manage App Certificates"
    }), `
`, _jsx(_components.p, {
      children: "Agora provides two certificate roles:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Primary Certificate"
        }), " for normal token generation"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Secondary Certificate"
        }), " for production rotation and controlled cutovers"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "If you suspect a certificate is compromised:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Enable the Secondary Certificate."
      }), `
`, _jsx(_components.li, {
        children: "Swap the certificates."
      }), `
`, _jsx(_components.li, {
        children: "Disable the old secondary certificate."
      }), `
`, _jsx(_components.li, {
        children: "Delete the original primary certificate after clients and services have moved over."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Deleting a certificate invalidates all tokens generated with that certificate."
    }), `
`, _jsx(_components.h2, {
      id: "restrictions",
      children: "Restrictions"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If your account has multiple members, only those assigned to the ", _jsx(_components.strong, {
          children: "Admin"
        }), ", ", _jsx(_components.strong, {
          children: "Engineer"
        }), ", or an authorized custom team can access the ", _jsx(_components.strong, {
          children: "Projects"
        }), " page."]
      }), `
`, _jsx(_components.li, {
        children: "Each Agora account can create up to 20 projects. If you need to create more projects, submit a support ticket."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "where-to-go-next",
      children: "Where to go next"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Open ", _jsx(_components.a, {
          href: "/en/introduction/console-setup",
          children: "Console setup"
        }), " to understand the first-time console workflow around credentials and service activation."]
      }), `
`, _jsxs(_components.li, {
        children: ["Read ", _jsx(_components.a, {
          href: "/en/introduction/billing",
          children: "Billing"
        }), " to understand free allowances, settlement, and package options before launch."]
      }), `
`, _jsxs(_components.li, {
        children: ["Read ", _jsx(_components.a, {
          href: "/en/introduction/security-privacy",
          children: "Security and privacy"
        }), " before production rollout."]
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
