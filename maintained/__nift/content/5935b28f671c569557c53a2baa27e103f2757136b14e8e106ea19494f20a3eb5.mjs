import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Migration guide",
  description: "Migrate whiteboard projects, credentials, and integrations to the current Interactive Whiteboard model."
};
export let _markdown = `

Netless Whiteboard is acquired by Agora and now fully integrated into the Agora product suite. This guide shows how to migrate all the projects under your Netless account to Agora Console.

## Prerequisites [#prerequisites]

To follow the procedure in this document, you must have an existing Netless account.

* Before the migration completes, do not enable the whiteboard feature in Agora Console; otherwise, the migration may fail.
* If you do not have a Netless account, you can skip the migration procedure and directly enable the whiteboard feature. See [Enable and Configure Interactive Whiteboard](../set-up-and-build-your-first-app/enable-whiteboard.md).

## Migration procedure [#migration-procedure]

To migrate the projects under your current Netless account to Agora Console, follow the steps for the account case that matches your situation.

### A Netless account only [#a-netless-account-only]

1. Log in to [Agora Console](https://console.agora.io/) using the email address linked with your Netless account.

2. Click **Send Email**.

3. Follow the instructions in the email you receive to reset your password.

The reset process automatically creates a new Agora account using the email address linked with your Netless account. Then you can use the following steps to migrate your projects:

1. Log in to [Agora Console](https://console.agora.io/) again using your new password.

2. Follow the on-screen instructions, then click **Migrate**.

Agora automatically migrates all your projects from Netless to Agora Console.

### A Netless account and an Agora account that use the same email address [#a-netless-account-and-an-agora-account-that-use-the-same-email-address]

1. Log in to [Agora Console](https://console.agora.io/) using the email address linked with both accounts.

2. Follow the on-screen instructions, then click **Migrate**.

Agora automatically migrates all your projects from Netless to Agora Console.

### A Netless account and an Agora account that use different email addresses [#a-netless-account-and-an-agora-account-that-use-different-email-addresses]

To migrate to the existing Agora account, contact sales at [support@agora.io](mailto\\:support@agora.io).

To create a new Agora account and migrate Netless projects to that account, follow the steps in [A Netless account only](#netlessaccount).

## Reference [#reference]

After a successful migration, you can refer to the following guides to enable and integrate the Interactive Whiteboard into your app:

* [Enable and Configure Interactive Whiteboard](../set-up-and-build-your-first-app/enable-whiteboard.md)
* [Join an Interactive Whiteboard Room](../set-up-and-build-your-first-app/get-started-sdk/)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Netless Whiteboard is acquired by Agora and now fully integrated into the Agora product suite. This guide shows how to migrate all the projects under your Netless account to Agora Console."
  }, {
    heading: "prerequisites",
    content: "To follow the procedure in this document, you must have an existing Netless account."
  }, {
    heading: "prerequisites",
    content: "Before the migration completes, do not enable the whiteboard feature in Agora Console; otherwise, the migration may fail."
  }, {
    heading: "prerequisites",
    content: "If you do not have a Netless account, you can skip the migration procedure and directly enable the whiteboard feature. See Enable and Configure Interactive Whiteboard."
  }, {
    heading: "migration-procedure",
    content: "To migrate the projects under your current Netless account to Agora Console, follow the steps for the account case that matches your situation."
  }, {
    heading: "a-netless-account-only",
    content: "Log in to Agora Console using the email address linked with your Netless account."
  }, {
    heading: "a-netless-account-only",
    content: "Click **Send Email**."
  }, {
    heading: "a-netless-account-only",
    content: "Follow the instructions in the email you receive to reset your password."
  }, {
    heading: "a-netless-account-only",
    content: "The reset process automatically creates a new Agora account using the email address linked with your Netless account. Then you can use the following steps to migrate your projects:"
  }, {
    heading: "a-netless-account-only",
    content: "Log in to Agora Console again using your new password."
  }, {
    heading: "a-netless-account-only",
    content: "Follow the on-screen instructions, then click **Migrate**."
  }, {
    heading: "a-netless-account-only",
    content: "Agora automatically migrates all your projects from Netless to Agora Console."
  }, {
    heading: "a-netless-account-and-an-agora-account-that-use-the-same-email-address",
    content: "Log in to Agora Console using the email address linked with both accounts."
  }, {
    heading: "a-netless-account-and-an-agora-account-that-use-the-same-email-address",
    content: "Follow the on-screen instructions, then click **Migrate**."
  }, {
    heading: "a-netless-account-and-an-agora-account-that-use-the-same-email-address",
    content: "Agora automatically migrates all your projects from Netless to Agora Console."
  }, {
    heading: "a-netless-account-and-an-agora-account-that-use-different-email-addresses",
    content: "To migrate to the existing Agora account, contact sales at support\\@agora.io."
  }, {
    heading: "a-netless-account-and-an-agora-account-that-use-different-email-addresses",
    content: "To create a new Agora account and migrate Netless projects to that account, follow the steps in A Netless account only."
  }, {
    heading: "reference",
    content: "After a successful migration, you can refer to the following guides to enable and integrate the Interactive Whiteboard into your app:"
  }, {
    heading: "reference",
    content: "Enable and Configure Interactive Whiteboard"
  }, {
    heading: "reference",
    content: "Join an Interactive Whiteboard Room"
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "migration-procedure",
    content: "Migration procedure"
  }, {
    id: "a-netless-account-only",
    content: "A Netless account only"
  }, {
    id: "a-netless-account-and-an-agora-account-that-use-the-same-email-address",
    content: "A Netless account and an Agora account that use the same email address"
  }, {
    id: "a-netless-account-and-an-agora-account-that-use-different-email-addresses",
    content: "A Netless account and an Agora account that use different email addresses"
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
  url: "#migration-procedure",
  title: _jsx(_Fragment, {
    children: "Migration procedure"
  })
}, {
  depth: 3,
  url: "#a-netless-account-only",
  title: _jsx(_Fragment, {
    children: "A Netless account only"
  })
}, {
  depth: 3,
  url: "#a-netless-account-and-an-agora-account-that-use-the-same-email-address",
  title: _jsx(_Fragment, {
    children: "A Netless account and an Agora account that use the same email address"
  })
}, {
  depth: 3,
  url: "#a-netless-account-and-an-agora-account-that-use-different-email-addresses",
  title: _jsx(_Fragment, {
    children: "A Netless account and an Agora account that use different email addresses"
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
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Netless Whiteboard is acquired by Agora and now fully integrated into the Agora product suite. This guide shows how to migrate all the projects under your Netless account to Agora Console."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "To follow the procedure in this document, you must have an existing Netless account."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Before the migration completes, do not enable the whiteboard feature in Agora Console; otherwise, the migration may fail."
      }), `
`, _jsxs(_components.li, {
        children: ["If you do not have a Netless account, you can skip the migration procedure and directly enable the whiteboard feature. See ", _jsx(_components.a, {
          href: "../set-up-and-build-your-first-app/enable-whiteboard.md",
          children: "Enable and Configure Interactive Whiteboard"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "migration-procedure",
      children: "Migration procedure"
    }), `
`, _jsx(_components.p, {
      children: "To migrate the projects under your current Netless account to Agora Console, follow the steps for the account case that matches your situation."
    }), `
`, _jsx(_components.h3, {
      id: "a-netless-account-only",
      children: "A Netless account only"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Log in to ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Console"
          }), " using the email address linked with your Netless account."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Click ", _jsx(_components.strong, {
            children: "Send Email"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Follow the instructions in the email you receive to reset your password."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The reset process automatically creates a new Agora account using the email address linked with your Netless account. Then you can use the following steps to migrate your projects:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Log in to ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Console"
          }), " again using your new password."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Follow the on-screen instructions, then click ", _jsx(_components.strong, {
            children: "Migrate"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Agora automatically migrates all your projects from Netless to Agora Console."
    }), `
`, _jsx(_components.h3, {
      id: "a-netless-account-and-an-agora-account-that-use-the-same-email-address",
      children: "A Netless account and an Agora account that use the same email address"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Log in to ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Console"
          }), " using the email address linked with both accounts."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Follow the on-screen instructions, then click ", _jsx(_components.strong, {
            children: "Migrate"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Agora automatically migrates all your projects from Netless to Agora Console."
    }), `
`, _jsx(_components.h3, {
      id: "a-netless-account-and-an-agora-account-that-use-different-email-addresses",
      children: "A Netless account and an Agora account that use different email addresses"
    }), `
`, _jsxs(_components.p, {
      children: ["To migrate to the existing Agora account, contact sales at ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["To create a new Agora account and migrate Netless projects to that account, follow the steps in ", _jsx(_components.a, {
        href: "#netlessaccount",
        children: "A Netless account only"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "After a successful migration, you can refer to the following guides to enable and integrate the Interactive Whiteboard into your app:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../set-up-and-build-your-first-app/enable-whiteboard.md",
          children: "Enable and Configure Interactive Whiteboard"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../set-up-and-build-your-first-app/get-started-sdk/",
          children: "Join an Interactive Whiteboard Room"
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
