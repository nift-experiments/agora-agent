import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "What are Agora's policies on billing, fee deductions, and account suspension?"
};
export let _markdown = `

Agora Console provides you with information on billing, fee deductions, and any suspension to your account based on the account type.

<CalloutContainer type="info">
  <CalloutDescription>
    None of this applies if you have signed a contract with Agora. The contract overrides all finance information such as billing, deductions, and suspension details.
  </CalloutDescription>
</CalloutContainer>

## Paid account [#paid-account]

You have a paid account if you have registered with Agora and done any of the following:

* Added a credit card to your account or topped up your balance using a bank account.
* You have recently made a payment.
* Signed a contract with Agora.

Agora provides each paid account with [10,000 charge-free minutes per month](/en/api-reference/faq/account/billing_free). In addition, there is a 30-day grace period for any outstanding billing amount after a fee deduction.

### Billing [#billing]

On the first day of each month, Agora Console issues your bill. The billing period is for the past calendar month.

Go to [Agora Console](https://console.agora.io/), and click **Billing** to view the detailed billing information for your projects, including billing period, due date, and amount.

![View bills](https://web-cdn.agora.io/docs-files/1597305680227)

### Additional charges [#additional-charges]

This section describes the additional charges applicable to your account.

#### Charging 7% Singapore Goods and Services Tax [#charging-7-singapore-goods-and-services-tax]

As of November 2021, Agora Singapore charges 7% [Singapore Goods and Services Tax](https://www.iras.gov.sg/taxes/goods-services-tax-\\(gst\\)/basics-of-gst/goods-and-services-tax-\\(gst\\)-what-it-is-and-how-it-works) (GST) on invoices for all Agora services provided to accounts located in Singapore. Agora determines the account location based on the tax identification number, contact address, or billing address that you have provided. All GST collected from Singapore accounts is paid to the Singapore tax authority.

If you have any questions, contact [sales@agora.io](mailto\\:sales@agora.io).

### Fee deduction [#fee-deduction]

On the sixth day of each month, Agora Console automatically deducts the fee for the previous month and notifies you by email.

If your account balance is negative after the deduction, Agora sends you an email, reminding you to [top up your account](/en/realtime-media/rtc/reference/pricing#top-up-packages) at your earliest convenience to avoid account suspension.

### Account suspension [#account-suspension]

If your account balance is negative for 30 days since the deduction date, Agora suspends your account and notifies you by email. None of your projects can access the Agora services.

If this happens, please top up your account at your earliest convenience. Once your balance is greater than or equal to zero, Agora unfreezes your account.

## Free account [#free-account]

You have a free account if you have registered with Agora and *not* done any of the following:

* Added a credit card to your account or topped up your balance using a bank account.
* You have recently made a payment.
* Signed a contract with Agora.

With a free Agora account, you have [10,000 charge-free minutes per month](/en/api-reference/faq/account/billing_free).

### Billing [#billing-1]

On the first day of each month, Agora Console issues your bill. The billing period is for the past calendar month.

Go to [Agora Console](https://console.agora.io/), and click ![](https://web-cdn.agora.io/docs-files/1597305641038) on the left navigation panel. Click **Bills** to view the detailed billing information for your projects, including billing period, due date, and amount.

![View bills](https://web-cdn.agora.io/docs-files/1597305680227)

### Fee deduction [#fee-deduction-1]

On the sixth day of each month, Agora Console automatically deducts the fee for the previous month.

* The services are free of charge, and Agora does not deduct any fee when you meet both of the following requirements:
  * Your monthly total service minutes of Agora RTC SDK do not exceed 10,000 charge-free minutes; and
  * You do not use any other charged Agora services or products.
* If you have any outstanding billing amount, then Agora sends you an email, reminding you to [top up your account](/en/realtime-media/rtc/reference/pricing#top-up-packages) at your earliest convenience.

### Account suspension [#account-suspension-1]

Agora suspends your account on the second day after any of the following happens:

* Your total service minutes of Agora RTC SDK exceed 10,000 charge-free minutes.
* The number of daily active users (DAU) in your Signaling project exceeds 1,000.
* You use any Agora services or products not included in the 10,000 charge-free minutes and the usage exceeds the free quota of the services or products.

<CalloutContainer type="warning">
  <CalloutDescription>
    After account suspension, none of your projects can access Agora services.
  </CalloutDescription>
</CalloutContainer>

Please top up your account at your earliest convenience. Once you top up your account, Agora unfreezes your account and upgrades your account to a paid account.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora Console provides you with information on billing, fee deductions, and any suspension to your account based on the account type."
  }, {
    heading: undefined,
    content: "None of this applies if you have signed a contract with Agora. The contract overrides all finance information such as billing, deductions, and suspension details."
  }, {
    heading: "paid-account",
    content: "You have a paid account if you have registered with Agora and done any of the following:"
  }, {
    heading: "paid-account",
    content: "Added a credit card to your account or topped up your balance using a bank account."
  }, {
    heading: "paid-account",
    content: "You have recently made a payment."
  }, {
    heading: "paid-account",
    content: "Signed a contract with Agora."
  }, {
    heading: "paid-account",
    content: "Agora provides each paid account with 10,000 charge-free minutes per month. In addition, there is a 30-day grace period for any outstanding billing amount after a fee deduction."
  }, {
    heading: "billing",
    content: "On the first day of each month, Agora Console issues your bill. The billing period is for the past calendar month."
  }, {
    heading: "billing",
    content: "Go to Agora Console, and click **Billing** to view the detailed billing information for your projects, including billing period, due date, and amount."
  }, {
    heading: "additional-charges",
    content: "This section describes the additional charges applicable to your account."
  }, {
    heading: "charging-7-singapore-goods-and-services-tax",
    content: "As of November 2021, Agora Singapore charges 7% Singapore Goods and Services Tax (GST) on invoices for all Agora services provided to accounts located in Singapore. Agora determines the account location based on the tax identification number, contact address, or billing address that you have provided. All GST collected from Singapore accounts is paid to the Singapore tax authority."
  }, {
    heading: "charging-7-singapore-goods-and-services-tax",
    content: "If you have any questions, contact sales\\@agora.io."
  }, {
    heading: "fee-deduction",
    content: "On the sixth day of each month, Agora Console automatically deducts the fee for the previous month and notifies you by email."
  }, {
    heading: "fee-deduction",
    content: "If your account balance is negative after the deduction, Agora sends you an email, reminding you to top up your account at your earliest convenience to avoid account suspension."
  }, {
    heading: "account-suspension",
    content: "If your account balance is negative for 30 days since the deduction date, Agora suspends your account and notifies you by email. None of your projects can access the Agora services."
  }, {
    heading: "account-suspension",
    content: "If this happens, please top up your account at your earliest convenience. Once your balance is greater than or equal to zero, Agora unfreezes your account."
  }, {
    heading: "free-account",
    content: "You have a free account if you have registered with Agora and *not* done any of the following:"
  }, {
    heading: "free-account",
    content: "Added a credit card to your account or topped up your balance using a bank account."
  }, {
    heading: "free-account",
    content: "You have recently made a payment."
  }, {
    heading: "free-account",
    content: "Signed a contract with Agora."
  }, {
    heading: "free-account",
    content: "With a free Agora account, you have 10,000 charge-free minutes per month."
  }, {
    heading: "billing-1",
    content: "On the first day of each month, Agora Console issues your bill. The billing period is for the past calendar month."
  }, {
    heading: "billing-1",
    content: "Go to Agora Console, and click  on the left navigation panel. Click **Bills** to view the detailed billing information for your projects, including billing period, due date, and amount."
  }, {
    heading: "fee-deduction-1",
    content: "On the sixth day of each month, Agora Console automatically deducts the fee for the previous month."
  }, {
    heading: "fee-deduction-1",
    content: "The services are free of charge, and Agora does not deduct any fee when you meet both of the following requirements:"
  }, {
    heading: "fee-deduction-1",
    content: "Your monthly total service minutes of Agora RTC SDK do not exceed 10,000 charge-free minutes; and"
  }, {
    heading: "fee-deduction-1",
    content: "You do not use any other charged Agora services or products."
  }, {
    heading: "fee-deduction-1",
    content: "If you have any outstanding billing amount, then Agora sends you an email, reminding you to top up your account at your earliest convenience."
  }, {
    heading: "account-suspension-1",
    content: "Agora suspends your account on the second day after any of the following happens:"
  }, {
    heading: "account-suspension-1",
    content: "Your total service minutes of Agora RTC SDK exceed 10,000 charge-free minutes."
  }, {
    heading: "account-suspension-1",
    content: "The number of daily active users (DAU) in your Signaling project exceeds 1,000."
  }, {
    heading: "account-suspension-1",
    content: "You use any Agora services or products not included in the 10,000 charge-free minutes and the usage exceeds the free quota of the services or products."
  }, {
    heading: "account-suspension-1",
    content: "After account suspension, none of your projects can access Agora services."
  }, {
    heading: "account-suspension-1",
    content: "Please top up your account at your earliest convenience. Once you top up your account, Agora unfreezes your account and upgrades your account to a paid account."
  }],
  headings: [{
    id: "paid-account",
    content: "Paid account"
  }, {
    id: "billing",
    content: "Billing"
  }, {
    id: "additional-charges",
    content: "Additional charges"
  }, {
    id: "charging-7-singapore-goods-and-services-tax",
    content: "Charging 7% Singapore Goods and Services Tax"
  }, {
    id: "fee-deduction",
    content: "Fee deduction"
  }, {
    id: "account-suspension",
    content: "Account suspension"
  }, {
    id: "free-account",
    content: "Free account"
  }, {
    id: "billing-1",
    content: "Billing"
  }, {
    id: "fee-deduction-1",
    content: "Fee deduction"
  }, {
    id: "account-suspension-1",
    content: "Account suspension"
  }]
};
export let toc = [{
  depth: 2,
  url: "#paid-account",
  title: _jsx(_Fragment, {
    children: "Paid account"
  })
}, {
  depth: 3,
  url: "#billing",
  title: _jsx(_Fragment, {
    children: "Billing"
  })
}, {
  depth: 3,
  url: "#additional-charges",
  title: _jsx(_Fragment, {
    children: "Additional charges"
  })
}, {
  depth: 4,
  url: "#charging-7-singapore-goods-and-services-tax",
  title: _jsx(_Fragment, {
    children: "Charging 7% Singapore Goods and Services Tax"
  })
}, {
  depth: 3,
  url: "#fee-deduction",
  title: _jsx(_Fragment, {
    children: "Fee deduction"
  })
}, {
  depth: 3,
  url: "#account-suspension",
  title: _jsx(_Fragment, {
    children: "Account suspension"
  })
}, {
  depth: 2,
  url: "#free-account",
  title: _jsx(_Fragment, {
    children: "Free account"
  })
}, {
  depth: 3,
  url: "#billing-1",
  title: _jsx(_Fragment, {
    children: "Billing"
  })
}, {
  depth: 3,
  url: "#fee-deduction-1",
  title: _jsx(_Fragment, {
    children: "Fee deduction"
  })
}, {
  depth: 3,
  url: "#account-suspension-1",
  title: _jsx(_Fragment, {
    children: "Account suspension"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
      children: "Agora Console provides you with information on billing, fee deductions, and any suspension to your account based on the account type."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "None of this applies if you have signed a contract with Agora. The contract overrides all finance information such as billing, deductions, and suspension details."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "paid-account",
      children: "Paid account"
    }), `
`, _jsx(_components.p, {
      children: "You have a paid account if you have registered with Agora and done any of the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Added a credit card to your account or topped up your balance using a bank account."
      }), `
`, _jsx(_components.li, {
        children: "You have recently made a payment."
      }), `
`, _jsx(_components.li, {
        children: "Signed a contract with Agora."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Agora provides each paid account with ", _jsx(_components.a, {
        href: "/en/api-reference/faq/account/billing_free",
        children: "10,000 charge-free minutes per month"
      }), ". In addition, there is a 30-day grace period for any outstanding billing amount after a fee deduction."]
    }), `
`, _jsx(_components.h3, {
      id: "billing",
      children: "Billing"
    }), `
`, _jsx(_components.p, {
      children: "On the first day of each month, Agora Console issues your bill. The billing period is for the past calendar month."
    }), `
`, _jsxs(_components.p, {
      children: ["Go to ", _jsx(_components.a, {
        href: "https://console.agora.io/",
        children: "Agora Console"
      }), ", and click ", _jsx(_components.strong, {
        children: "Billing"
      }), " to view the detailed billing information for your projects, including billing period, due date, and amount."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1597305680227",
        alt: "View bills"
      })
    }), `
`, _jsx(_components.h3, {
      id: "additional-charges",
      children: "Additional charges"
    }), `
`, _jsx(_components.p, {
      children: "This section describes the additional charges applicable to your account."
    }), `
`, _jsx(_components.h4, {
      id: "charging-7-singapore-goods-and-services-tax",
      children: "Charging 7% Singapore Goods and Services Tax"
    }), `
`, _jsxs(_components.p, {
      children: ["As of November 2021, Agora Singapore charges 7% ", _jsx(_components.a, {
        href: "https://www.iras.gov.sg/taxes/goods-services-tax-(gst)/basics-of-gst/goods-and-services-tax-(gst)-what-it-is-and-how-it-works",
        children: "Singapore Goods and Services Tax"
      }), " (GST) on invoices for all Agora services provided to accounts located in Singapore. Agora determines the account location based on the tax identification number, contact address, or billing address that you have provided. All GST collected from Singapore accounts is paid to the Singapore tax authority."]
    }), `
`, _jsxs(_components.p, {
      children: ["If you have any questions, contact ", _jsx(_components.a, {
        href: "mailto:sales@agora.io",
        children: "sales@agora.io"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "fee-deduction",
      children: "Fee deduction"
    }), `
`, _jsx(_components.p, {
      children: "On the sixth day of each month, Agora Console automatically deducts the fee for the previous month and notifies you by email."
    }), `
`, _jsxs(_components.p, {
      children: ["If your account balance is negative after the deduction, Agora sends you an email, reminding you to ", _jsx(_components.a, {
        href: "/en/realtime-media/rtc/reference/pricing#top-up-packages",
        children: "top up your account"
      }), " at your earliest convenience to avoid account suspension."]
    }), `
`, _jsx(_components.h3, {
      id: "account-suspension",
      children: "Account suspension"
    }), `
`, _jsx(_components.p, {
      children: "If your account balance is negative for 30 days since the deduction date, Agora suspends your account and notifies you by email. None of your projects can access the Agora services."
    }), `
`, _jsx(_components.p, {
      children: "If this happens, please top up your account at your earliest convenience. Once your balance is greater than or equal to zero, Agora unfreezes your account."
    }), `
`, _jsx(_components.h2, {
      id: "free-account",
      children: "Free account"
    }), `
`, _jsxs(_components.p, {
      children: ["You have a free account if you have registered with Agora and ", _jsx(_components.em, {
        children: "not"
      }), " done any of the following:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Added a credit card to your account or topped up your balance using a bank account."
      }), `
`, _jsx(_components.li, {
        children: "You have recently made a payment."
      }), `
`, _jsx(_components.li, {
        children: "Signed a contract with Agora."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["With a free Agora account, you have ", _jsx(_components.a, {
        href: "/en/api-reference/faq/account/billing_free",
        children: "10,000 charge-free minutes per month"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "billing-1",
      children: "Billing"
    }), `
`, _jsx(_components.p, {
      children: "On the first day of each month, Agora Console issues your bill. The billing period is for the past calendar month."
    }), `
`, _jsxs(_components.p, {
      children: ["Go to ", _jsx(_components.a, {
        href: "https://console.agora.io/",
        children: "Agora Console"
      }), ", and click ", _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1597305641038",
        alt: ""
      }), " on the left navigation panel. Click ", _jsx(_components.strong, {
        children: "Bills"
      }), " to view the detailed billing information for your projects, including billing period, due date, and amount."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1597305680227",
        alt: "View bills"
      })
    }), `
`, _jsx(_components.h3, {
      id: "fee-deduction-1",
      children: "Fee deduction"
    }), `
`, _jsx(_components.p, {
      children: "On the sixth day of each month, Agora Console automatically deducts the fee for the previous month."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The services are free of charge, and Agora does not deduct any fee when you meet both of the following requirements:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Your monthly total service minutes of Agora RTC SDK do not exceed 10,000 charge-free minutes; and"
          }), `
`, _jsx(_components.li, {
            children: "You do not use any other charged Agora services or products."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["If you have any outstanding billing amount, then Agora sends you an email, reminding you to ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/reference/pricing#top-up-packages",
          children: "top up your account"
        }), " at your earliest convenience."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "account-suspension-1",
      children: "Account suspension"
    }), `
`, _jsx(_components.p, {
      children: "Agora suspends your account on the second day after any of the following happens:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Your total service minutes of Agora RTC SDK exceed 10,000 charge-free minutes."
      }), `
`, _jsx(_components.li, {
        children: "The number of daily active users (DAU) in your Signaling project exceeds 1,000."
      }), `
`, _jsx(_components.li, {
        children: "You use any Agora services or products not included in the 10,000 charge-free minutes and the usage exceeds the free quota of the services or products."
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "warning",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "After account suspension, none of your projects can access Agora services."
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Please top up your account at your earliest convenience. Once you top up your account, Agora unfreezes your account and upgrades your account to a paid account."
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
