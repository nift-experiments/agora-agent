import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Billing",
  description: "Understand how Agora charges for usage, manage your balance, and find the billing policies behind your account."
};
export let _markdown = `

This is the single place to understand how Agora charges for usage and how to manage payment. For product-specific rates, see the **Pricing** page of each product.

## Billing center [#billing-center]

In Agora Console, the **Billing** page lets you check your balance, add funds, and view or export invoices and transactions. Access is limited to members assigned to **Admin**, **Finance**, or an authorized custom team.

## How usage is billed [#how-usage-is-billed]

Most Agora products bill by usage (for example, by minutes, message volume, storage, or peak concurrent users), with a free tier before charges begin. The exact unit and rate depend on the product, so check the product's own **Pricing** page for current numbers.

Before you ship to production, confirm:

* the billing unit makes sense for your expected usage pattern
* the right people on your team can access billing and financial records

## Billing policies and management [#billing-policies-and-management]

* [Billing policies](/en/introduction/billing/billing-policies) — free-usage allowance and product lifecycle rules.
* [Account settlement](/en/introduction/billing/account-settlement) — balance reservation, auto-recharge, and suspension.
* [Subscription packages](/en/introduction/billing/subscription-packages) — package tiers and upgrades.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This is the single place to understand how Agora charges for usage and how to manage payment. For product-specific rates, see the **Pricing** page of each product."
  }, {
    heading: "billing-center",
    content: "In Agora Console, the **Billing** page lets you check your balance, add funds, and view or export invoices and transactions. Access is limited to members assigned to **Admin**, **Finance**, or an authorized custom team."
  }, {
    heading: "how-usage-is-billed",
    content: "Most Agora products bill by usage (for example, by minutes, message volume, storage, or peak concurrent users), with a free tier before charges begin. The exact unit and rate depend on the product, so check the product's own **Pricing** page for current numbers."
  }, {
    heading: "how-usage-is-billed",
    content: "Before you ship to production, confirm:"
  }, {
    heading: "how-usage-is-billed",
    content: "the billing unit makes sense for your expected usage pattern"
  }, {
    heading: "how-usage-is-billed",
    content: "the right people on your team can access billing and financial records"
  }, {
    heading: "billing-policies-and-management",
    content: "Billing policies — free-usage allowance and product lifecycle rules."
  }, {
    heading: "billing-policies-and-management",
    content: "Account settlement — balance reservation, auto-recharge, and suspension."
  }, {
    heading: "billing-policies-and-management",
    content: "Subscription packages — package tiers and upgrades."
  }],
  headings: [{
    id: "billing-center",
    content: "Billing center"
  }, {
    id: "how-usage-is-billed",
    content: "How usage is billed"
  }, {
    id: "billing-policies-and-management",
    content: "Billing policies and management"
  }]
};
export let toc = [{
  depth: 2,
  url: "#billing-center",
  title: _jsx(_Fragment, {
    children: "Billing center"
  })
}, {
  depth: 2,
  url: "#how-usage-is-billed",
  title: _jsx(_Fragment, {
    children: "How usage is billed"
  })
}, {
  depth: 2,
  url: "#billing-policies-and-management",
  title: _jsx(_Fragment, {
    children: "Billing policies and management"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["This is the single place to understand how Agora charges for usage and how to manage payment. For product-specific rates, see the ", _jsx(_components.strong, {
        children: "Pricing"
      }), " page of each product."]
    }), `
`, _jsx(_components.h2, {
      id: "billing-center",
      children: "Billing center"
    }), `
`, _jsxs(_components.p, {
      children: ["In Agora Console, the ", _jsx(_components.strong, {
        children: "Billing"
      }), " page lets you check your balance, add funds, and view or export invoices and transactions. Access is limited to members assigned to ", _jsx(_components.strong, {
        children: "Admin"
      }), ", ", _jsx(_components.strong, {
        children: "Finance"
      }), ", or an authorized custom team."]
    }), `
`, _jsx(_components.h2, {
      id: "how-usage-is-billed",
      children: "How usage is billed"
    }), `
`, _jsxs(_components.p, {
      children: ["Most Agora products bill by usage (for example, by minutes, message volume, storage, or peak concurrent users), with a free tier before charges begin. The exact unit and rate depend on the product, so check the product's own ", _jsx(_components.strong, {
        children: "Pricing"
      }), " page for current numbers."]
    }), `
`, _jsx(_components.p, {
      children: "Before you ship to production, confirm:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "the billing unit makes sense for your expected usage pattern"
      }), `
`, _jsx(_components.li, {
        children: "the right people on your team can access billing and financial records"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "billing-policies-and-management",
      children: "Billing policies and management"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/introduction/billing/billing-policies",
          children: "Billing policies"
        }), " — free-usage allowance and product lifecycle rules."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/introduction/billing/account-settlement",
          children: "Account settlement"
        }), " — balance reservation, auto-recharge, and suspension."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/introduction/billing/subscription-packages",
          children: "Subscription packages"
        }), " — package tiers and upgrades."]
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
