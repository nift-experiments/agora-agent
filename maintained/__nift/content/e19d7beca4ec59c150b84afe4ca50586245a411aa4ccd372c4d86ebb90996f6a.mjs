import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Subscription packages",
  description: "Provides information on Signaling subscription packages."
};
export let _markdown = `

A subscription package is a prepaid billing method. You can purchase a package in the [\`Agora Console\`](https://console.agora.io/subscriptions/signaling-plans) to cover Signaling usage for the current month.

This page explains how to purchase and manage subscription packages.

## Purchase and upgrade [#purchase-and-upgrade]

By default, a new account is assigned the Free package when the first project is created. You can upgrade at any time to the Lite, Starter, Pro, Business, or Enterprise. Higher-tier packages provide greater discounts. To select your package:

1. Log in to [Agora Console](https://console.agora.io/).
2. Click the username at the bottom of the navigation sidebar to open the account popup menu.
3. Select  **Subscriptions**.
4. Switch to the **Signaling** tab.
5. Select your package and click **Upgrade** or **Downgrade**.

![Available packages](https://assets-docs.agora.io/images/console/subscription-plans-signaling.png)

<CalloutContainer type="info">
  <CalloutDescription>
    * If you are a non-contracted customer, all packages except the Enterprise package can be purchased directly from the Agora Console. To upgrade to the Enterprise package, contact [Agora sales](mailto\\:sales@agora.io).
    * You can upgrade sequentially or skip levels. For example, you may upgrade from Starter to Business directly.
    * Package upgrades take effect immediately and apply to the entire calendar month. If you make multiple upgrades on the same day, only the last upgrade is applied.
    * If your account has a negative balance, purchasing a prepaid package first charges your credit card for the outstanding balance, then for the package fee.
  </CalloutDescription>
</CalloutContainer>

### Upgrade rules [#upgrade-rules]

When you upgrade to a paid package, it becomes effective for the entire calendar month, regardless of the purchase date. You receive the full monthly allocation included in the selected package. The cost of the previous package is deducted from the new package price, so you only pay the difference. If you request an upgrade after auto-renewal has triggered, you may upgrade for the next month as well.

## Renewal [#renewal]

By default, your subscription package renews automatically 48 hours before it expires. Ensure your account has sufficient balance or enable auto-pay to avoid renewal failure. You can unsubscribe at any time to prevent renewal. See [Cancel subscription](#cancel-subscription).

If renewal fails:

* The system sends a notification and retries the renewal.
* If renewal still fails by the time the package expires, the package downgrades to the Free package.
* To restore the previous package, see [Purchase and Upgrade](#purchase-and-upgrade).

## Downgrade [#downgrade]

You can downgrade by selecting and purchasing a lower-tier package. A downgrade takes effect when your current package expires if you request it before auto-renewal is triggered. You are charged for the new package when you request the downgrade.

You can downgrade only once per month.

* If your downgrade for the next month is successful, auto-renewal for the current package is not triggered.

* If a package is already active, you must wait until the 1st day of that month to initiate a downgrade for the following month.

### Example [#example]

* **Requested more than 48 hours before the current package expires**: The downgrade takes effect after the current package expires.
* **Requested less than 48 hours before the current package expires**: Since a package is already active for the next month, you must wait until the new package starts to downgrade for the following month.

## Cancel subscription [#cancel-subscription]

To cancel a prepaid package, downgrade to the Free package. Downgrade rules apply.

## Free tier overage [#free-tier-overage]

For Free tier users, exceeding the included free tier quota results in service suspension. Service resumes when you upgrade to a prepaid subscription package.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "A subscription package is a prepaid billing method. You can purchase a package in the `Agora Console` to cover Signaling usage for the current month."
  }, {
    heading: undefined,
    content: "This page explains how to purchase and manage subscription packages."
  }, {
    heading: "purchase-and-upgrade",
    content: "By default, a new account is assigned the Free package when the first project is created. You can upgrade at any time to the Lite, Starter, Pro, Business, or Enterprise. Higher-tier packages provide greater discounts. To select your package:"
  }, {
    heading: "purchase-and-upgrade",
    content: "Log in to Agora Console."
  }, {
    heading: "purchase-and-upgrade",
    content: "Click the username at the bottom of the navigation sidebar to open the account popup menu."
  }, {
    heading: "purchase-and-upgrade",
    content: "Select  **Subscriptions**."
  }, {
    heading: "purchase-and-upgrade",
    content: "Switch to the **Signaling** tab."
  }, {
    heading: "purchase-and-upgrade",
    content: "Select your package and click **Upgrade** or **Downgrade**."
  }, {
    heading: "purchase-and-upgrade",
    content: "If you are a non-contracted customer, all packages except the Enterprise package can be purchased directly from the Agora Console. To upgrade to the Enterprise package, contact Agora sales."
  }, {
    heading: "purchase-and-upgrade",
    content: "You can upgrade sequentially or skip levels. For example, you may upgrade from Starter to Business directly."
  }, {
    heading: "purchase-and-upgrade",
    content: "Package upgrades take effect immediately and apply to the entire calendar month. If you make multiple upgrades on the same day, only the last upgrade is applied."
  }, {
    heading: "purchase-and-upgrade",
    content: "If your account has a negative balance, purchasing a prepaid package first charges your credit card for the outstanding balance, then for the package fee."
  }, {
    heading: "upgrade-rules",
    content: "When you upgrade to a paid package, it becomes effective for the entire calendar month, regardless of the purchase date. You receive the full monthly allocation included in the selected package. The cost of the previous package is deducted from the new package price, so you only pay the difference. If you request an upgrade after auto-renewal has triggered, you may upgrade for the next month as well."
  }, {
    heading: "renewal",
    content: "By default, your subscription package renews automatically 48 hours before it expires. Ensure your account has sufficient balance or enable auto-pay to avoid renewal failure. You can unsubscribe at any time to prevent renewal. See Cancel subscription."
  }, {
    heading: "renewal",
    content: "If renewal fails:"
  }, {
    heading: "renewal",
    content: "The system sends a notification and retries the renewal."
  }, {
    heading: "renewal",
    content: "If renewal still fails by the time the package expires, the package downgrades to the Free package."
  }, {
    heading: "renewal",
    content: "To restore the previous package, see Purchase and Upgrade."
  }, {
    heading: "downgrade",
    content: "You can downgrade by selecting and purchasing a lower-tier package. A downgrade takes effect when your current package expires if you request it before auto-renewal is triggered. You are charged for the new package when you request the downgrade."
  }, {
    heading: "downgrade",
    content: "You can downgrade only once per month."
  }, {
    heading: "downgrade",
    content: "If your downgrade for the next month is successful, auto-renewal for the current package is not triggered."
  }, {
    heading: "downgrade",
    content: "If a package is already active, you must wait until the 1st day of that month to initiate a downgrade for the following month."
  }, {
    heading: "example",
    content: "**Requested more than 48 hours before the current package expires**: The downgrade takes effect after the current package expires."
  }, {
    heading: "example",
    content: "**Requested less than 48 hours before the current package expires**: Since a package is already active for the next month, you must wait until the new package starts to downgrade for the following month."
  }, {
    heading: "cancel-subscription",
    content: "To cancel a prepaid package, downgrade to the Free package. Downgrade rules apply."
  }, {
    heading: "free-tier-overage",
    content: "For Free tier users, exceeding the included free tier quota results in service suspension. Service resumes when you upgrade to a prepaid subscription package."
  }],
  headings: [{
    id: "purchase-and-upgrade",
    content: "Purchase and upgrade"
  }, {
    id: "upgrade-rules",
    content: "Upgrade rules"
  }, {
    id: "renewal",
    content: "Renewal"
  }, {
    id: "downgrade",
    content: "Downgrade"
  }, {
    id: "example",
    content: "Example"
  }, {
    id: "cancel-subscription",
    content: "Cancel subscription"
  }, {
    id: "free-tier-overage",
    content: "Free tier overage"
  }]
};
export let toc = [{
  depth: 2,
  url: "#purchase-and-upgrade",
  title: _jsx(_Fragment, {
    children: "Purchase and upgrade"
  })
}, {
  depth: 3,
  url: "#upgrade-rules",
  title: _jsx(_Fragment, {
    children: "Upgrade rules"
  })
}, {
  depth: 2,
  url: "#renewal",
  title: _jsx(_Fragment, {
    children: "Renewal"
  })
}, {
  depth: 2,
  url: "#downgrade",
  title: _jsx(_Fragment, {
    children: "Downgrade"
  })
}, {
  depth: 3,
  url: "#example",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 2,
  url: "#cancel-subscription",
  title: _jsx(_Fragment, {
    children: "Cancel subscription"
  })
}, {
  depth: 2,
  url: "#free-tier-overage",
  title: _jsx(_Fragment, {
    children: "Free tier overage"
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
    children: [_jsxs(_components.p, {
      children: ["A subscription package is a prepaid billing method. You can purchase a package in the ", _jsx(_components.a, {
        href: "https://console.agora.io/subscriptions/signaling-plans",
        children: _jsx(_components.code, {
          children: "Agora Console"
        })
      }), " to cover Signaling usage for the current month."]
    }), `
`, _jsx(_components.p, {
      children: "This page explains how to purchase and manage subscription packages."
    }), `
`, _jsx(_components.h2, {
      id: "purchase-and-upgrade",
      children: "Purchase and upgrade"
    }), `
`, _jsx(_components.p, {
      children: "By default, a new account is assigned the Free package when the first project is created. You can upgrade at any time to the Lite, Starter, Pro, Business, or Enterprise. Higher-tier packages provide greater discounts. To select your package:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Log in to ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Click the username at the bottom of the navigation sidebar to open the account popup menu."
      }), `
`, _jsxs(_components.li, {
        children: ["Select  ", _jsx(_components.strong, {
          children: "Subscriptions"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Switch to the ", _jsx(_components.strong, {
          children: "Signaling"
        }), " tab."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select your package and click ", _jsx(_components.strong, {
          children: "Upgrade"
        }), " or ", _jsx(_components.strong, {
          children: "Downgrade"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/subscription-plans-signaling.png",
        alt: "Available packages"
      })
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If you are a non-contracted customer, all packages except the Enterprise package can be purchased directly from the Agora Console. To upgrade to the Enterprise package, contact ", _jsx(_components.a, {
              href: "mailto:sales@agora.io",
              children: "Agora sales"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "You can upgrade sequentially or skip levels. For example, you may upgrade from Starter to Business directly."
          }), `
`, _jsx(_components.li, {
            children: "Package upgrades take effect immediately and apply to the entire calendar month. If you make multiple upgrades on the same day, only the last upgrade is applied."
          }), `
`, _jsx(_components.li, {
            children: "If your account has a negative balance, purchasing a prepaid package first charges your credit card for the outstanding balance, then for the package fee."
          }), `
`]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "upgrade-rules",
      children: "Upgrade rules"
    }), `
`, _jsx(_components.p, {
      children: "When you upgrade to a paid package, it becomes effective for the entire calendar month, regardless of the purchase date. You receive the full monthly allocation included in the selected package. The cost of the previous package is deducted from the new package price, so you only pay the difference. If you request an upgrade after auto-renewal has triggered, you may upgrade for the next month as well."
    }), `
`, _jsx(_components.h2, {
      id: "renewal",
      children: "Renewal"
    }), `
`, _jsxs(_components.p, {
      children: ["By default, your subscription package renews automatically 48 hours before it expires. Ensure your account has sufficient balance or enable auto-pay to avoid renewal failure. You can unsubscribe at any time to prevent renewal. See ", _jsx(_components.a, {
        href: "#cancel-subscription",
        children: "Cancel subscription"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "If renewal fails:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The system sends a notification and retries the renewal."
      }), `
`, _jsx(_components.li, {
        children: "If renewal still fails by the time the package expires, the package downgrades to the Free package."
      }), `
`, _jsxs(_components.li, {
        children: ["To restore the previous package, see ", _jsx(_components.a, {
          href: "#purchase-and-upgrade",
          children: "Purchase and Upgrade"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "downgrade",
      children: "Downgrade"
    }), `
`, _jsx(_components.p, {
      children: "You can downgrade by selecting and purchasing a lower-tier package. A downgrade takes effect when your current package expires if you request it before auto-renewal is triggered. You are charged for the new package when you request the downgrade."
    }), `
`, _jsx(_components.p, {
      children: "You can downgrade only once per month."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If your downgrade for the next month is successful, auto-renewal for the current package is not triggered."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If a package is already active, you must wait until the 1st day of that month to initiate a downgrade for the following month."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "example",
      children: "Example"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Requested more than 48 hours before the current package expires"
        }), ": The downgrade takes effect after the current package expires."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Requested less than 48 hours before the current package expires"
        }), ": Since a package is already active for the next month, you must wait until the new package starts to downgrade for the following month."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "cancel-subscription",
      children: "Cancel subscription"
    }), `
`, _jsx(_components.p, {
      children: "To cancel a prepaid package, downgrade to the Free package. Downgrade rules apply."
    }), `
`, _jsx(_components.h2, {
      id: "free-tier-overage",
      children: "Free tier overage"
    }), `
`, _jsx(_components.p, {
      children: "For Free tier users, exceeding the included free tier quota results in service suspension. Service resumes when you upgrade to a prepaid subscription package."
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
