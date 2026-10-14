import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Account settlement",
  description: "How Agora account billing and settlement work."
};
export let _markdown = `

To ensure billing transparency and smooth service continuity, Agora implements real-time account balance reservation based on estimated usage across all Agora products for SSP customers. This does not apply to customers with a signed contract.

<CalloutContainer type="info">
  <CalloutDescription>
    For uninterrupted access to Agora's products and services, ensure at least one of the following:

    * Add a valid credit card for auto-recharge to your Agora account, **or**
    * Maintain sufficient funds in your Agora Console balance to cover your estimated usage.
  </CalloutDescription>
</CalloutContainer>

Agora employs the following policies to manage your account balance and ensure uninterrupted access to its products and services.

### Real-time usage and estimated bill [#real-time-usage-and-estimated-bill]

You can view your real-time usage and estimated monthly bill at any time by selecting **Billing** in the Agora Console sidebar.

![bill estimate preview](https://assets-docs.agora.io/images/console/bill-estimate-preview.png)

### Real-time reservation of balance [#real-time-reservation-of-balance]

Your reserved balance is updated continuously based on your real-time bill estimation. The corresponding estimated amount is reserved from your available balance at all times.

![Available and reserved balance](https://assets-docs.agora.io/images/console/available-reserved-balance.png)

### Auto-recharge and account suspension [#auto-recharge-and-account-suspension]

On the **7th, 14th, 21st, and 28th*&#x2A; of each calendar month (excluding February 28), if your available balance is in arrears by more than **$50**:

* If a valid credit card is linked, the system automatically recharges your balance to zero.
* If no credit card is linked, or if auto-recharge fails, a notification email is sent to you.
* Top up your wallet within the **24-hour grace period** to avoid account suspension.
* If your balance remains in arrears after 24 hours, your account is suspended until the balance is restored to zero or above.

### Monthly billing [#monthly-billing]

Your final bill is issued monthly. After bill finalization:

* Any overpaid amount is refunded to your balance.
* Any undercharged amount is deducted accordingly.

### Balance withdrawal [#balance-withdrawal]

You can withdraw your available balance for payments completed within the past 90 days directly through the Agora Console. Funds will be returned to the original payment method. For further inquiries, please email [billing@agora.io](mailto\\:billing@agora.io).

![Withdraw balance](https://assets-docs.agora.io/images/console/withdraw-balance.png)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To ensure billing transparency and smooth service continuity, Agora implements real-time account balance reservation based on estimated usage across all Agora products for SSP customers. This does not apply to customers with a signed contract."
  }, {
    heading: undefined,
    content: "For uninterrupted access to Agora's products and services, ensure at least one of the following:"
  }, {
    heading: undefined,
    content: "Add a valid credit card for auto-recharge to your Agora account, **or**"
  }, {
    heading: undefined,
    content: "Maintain sufficient funds in your Agora Console balance to cover your estimated usage."
  }, {
    heading: undefined,
    content: "Agora employs the following policies to manage your account balance and ensure uninterrupted access to its products and services."
  }, {
    heading: "real-time-usage-and-estimated-bill",
    content: "You can view your real-time usage and estimated monthly bill at any time by selecting **Billing** in the Agora Console sidebar."
  }, {
    heading: "real-time-reservation-of-balance",
    content: "Your reserved balance is updated continuously based on your real-time bill estimation. The corresponding estimated amount is reserved from your available balance at all times."
  }, {
    heading: "auto-recharge-and-account-suspension",
    content: "On the **7th, 14th, 21st, and 28th*&#x2A; of each calendar month (excluding February 28), if your available balance is in arrears by more than **$50**:"
  }, {
    heading: "auto-recharge-and-account-suspension",
    content: "If a valid credit card is linked, the system automatically recharges your balance to zero."
  }, {
    heading: "auto-recharge-and-account-suspension",
    content: "If no credit card is linked, or if auto-recharge fails, a notification email is sent to you."
  }, {
    heading: "auto-recharge-and-account-suspension",
    content: "Top up your wallet within the **24-hour grace period** to avoid account suspension."
  }, {
    heading: "auto-recharge-and-account-suspension",
    content: "If your balance remains in arrears after 24 hours, your account is suspended until the balance is restored to zero or above."
  }, {
    heading: "monthly-billing",
    content: "Your final bill is issued monthly. After bill finalization:"
  }, {
    heading: "monthly-billing",
    content: "Any overpaid amount is refunded to your balance."
  }, {
    heading: "monthly-billing",
    content: "Any undercharged amount is deducted accordingly."
  }, {
    heading: "balance-withdrawal",
    content: "You can withdraw your available balance for payments completed within the past 90 days directly through the Agora Console. Funds will be returned to the original payment method. For further inquiries, please email billing\\@agora.io."
  }],
  headings: [{
    id: "real-time-usage-and-estimated-bill",
    content: "Real-time usage and estimated bill"
  }, {
    id: "real-time-reservation-of-balance",
    content: "Real-time reservation of balance"
  }, {
    id: "auto-recharge-and-account-suspension",
    content: "Auto-recharge and account suspension"
  }, {
    id: "monthly-billing",
    content: "Monthly billing"
  }, {
    id: "balance-withdrawal",
    content: "Balance withdrawal"
  }]
};
export let toc = [{
  depth: 3,
  url: "#real-time-usage-and-estimated-bill",
  title: _jsx(_Fragment, {
    children: "Real-time usage and estimated bill"
  })
}, {
  depth: 3,
  url: "#real-time-reservation-of-balance",
  title: _jsx(_Fragment, {
    children: "Real-time reservation of balance"
  })
}, {
  depth: 3,
  url: "#auto-recharge-and-account-suspension",
  title: _jsx(_Fragment, {
    children: "Auto-recharge and account suspension"
  })
}, {
  depth: 3,
  url: "#monthly-billing",
  title: _jsx(_Fragment, {
    children: "Monthly billing"
  })
}, {
  depth: 3,
  url: "#balance-withdrawal",
  title: _jsx(_Fragment, {
    children: "Balance withdrawal"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    img: "img",
    li: "li",
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
    children: [_jsx(_components.p, {
      children: "To ensure billing transparency and smooth service continuity, Agora implements real-time account balance reservation based on estimated usage across all Agora products for SSP customers. This does not apply to customers with a signed contract."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsxs(CalloutDescription, {
        children: [_jsx(_components.p, {
          children: "For uninterrupted access to Agora's products and services, ensure at least one of the following:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Add a valid credit card for auto-recharge to your Agora account, ", _jsx(_components.strong, {
              children: "or"
            })]
          }), `
`, _jsx(_components.li, {
            children: "Maintain sufficient funds in your Agora Console balance to cover your estimated usage."
          }), `
`]
        })]
      })
    }), `
`, _jsx(_components.p, {
      children: "Agora employs the following policies to manage your account balance and ensure uninterrupted access to its products and services."
    }), `
`, _jsx(_components.h3, {
      id: "real-time-usage-and-estimated-bill",
      children: "Real-time usage and estimated bill"
    }), `
`, _jsxs(_components.p, {
      children: ["You can view your real-time usage and estimated monthly bill at any time by selecting ", _jsx(_components.strong, {
        children: "Billing"
      }), " in the Agora Console sidebar."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/bill-estimate-preview.png",
        alt: "bill estimate preview"
      })
    }), `
`, _jsx(_components.h3, {
      id: "real-time-reservation-of-balance",
      children: "Real-time reservation of balance"
    }), `
`, _jsx(_components.p, {
      children: "Your reserved balance is updated continuously based on your real-time bill estimation. The corresponding estimated amount is reserved from your available balance at all times."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/available-reserved-balance.png",
        alt: "Available and reserved balance"
      })
    }), `
`, _jsx(_components.h3, {
      id: "auto-recharge-and-account-suspension",
      children: "Auto-recharge and account suspension"
    }), `
`, _jsxs(_components.p, {
      children: ["On the ", _jsx(_components.strong, {
        children: "7th, 14th, 21st, and 28th"
      }), " of each calendar month (excluding February 28), if your available balance is in arrears by more than ", _jsx(_components.strong, {
        children: "$50"
      }), ":"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If a valid credit card is linked, the system automatically recharges your balance to zero."
      }), `
`, _jsx(_components.li, {
        children: "If no credit card is linked, or if auto-recharge fails, a notification email is sent to you."
      }), `
`, _jsxs(_components.li, {
        children: ["Top up your wallet within the ", _jsx(_components.strong, {
          children: "24-hour grace period"
        }), " to avoid account suspension."]
      }), `
`, _jsx(_components.li, {
        children: "If your balance remains in arrears after 24 hours, your account is suspended until the balance is restored to zero or above."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "monthly-billing",
      children: "Monthly billing"
    }), `
`, _jsx(_components.p, {
      children: "Your final bill is issued monthly. After bill finalization:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Any overpaid amount is refunded to your balance."
      }), `
`, _jsx(_components.li, {
        children: "Any undercharged amount is deducted accordingly."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "balance-withdrawal",
      children: "Balance withdrawal"
    }), `
`, _jsxs(_components.p, {
      children: ["You can withdraw your available balance for payments completed within the past 90 days directly through the Agora Console. Funds will be returned to the original payment method. For further inquiries, please email ", _jsx(_components.a, {
        href: "mailto:billing@agora.io",
        children: "billing@agora.io"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/withdraw-balance.png",
        alt: "Withdraw balance"
      })
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
