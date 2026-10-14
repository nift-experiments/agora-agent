import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Pricing",
  description: "Explains how your bill for using Agora Chat is calculated."
};
export let _markdown = `

This page explains how your bill for using Chat is calculated.

Note that if you have already signed a contract with Agora, the billing terms and conditions within that contract take precedence.

## Overview [#overview]

Each month, Agora calculates your bill for using Chat, [issues your bill, and deducts your fee](./billing-policies). If you subscribe, cancel, or switch to another plan, your fee is prorated for the current month. If your account is [suspended](./billing-policies), Agora stores your app data for six months. Agora suggests you top up your account in a timely fashion or export the data before it is deleted.

## Composition [#composition]

When each month finishes, Agora calculates your usage of Chat in your [Agora account](/en/introduction/account#sign-up-for-an-agora-account). After deducting the usage included in your plan, Agora multiplies any excess usage by the corresponding unit price and adds this to the plan fee to get the total cost for that month. The formula is as follows:

**Total cost = Plan fee + Excess usage × Unit price of the excess usage + (Optional) Add-on fee**

### Plan fee [#plan-fee]

Agora bills you based on the total number of MAUs (Monthly Active Users) in the [Agora account](/en/introduction/account#sign-up-for-an-agora-account).

* MAU is the number of unique end users who log in to Agora Chat, connect to Agora Chat servers, and establish a long-lived connection at any time across a calendar month.
* If a unique end-user connects to Agora Chat multiple times across a calendar month, they are counted as 1 MAU.
* The end user is considered logged in when you call the “open” function in step 6 during the user authentication process [here](/en/realtime-media/im/build/secure-access-and-authentication/authentication#use-tokens-for-user-authentication).
* Once logged in, that end user is counted towards the MAU, regardless of if they send or receive messages.

<CalloutContainer type="info">
  <CalloutDescription>
    A best practice when managing your Agora Chat MAU is to authenticate your end users, create only one UID for each of them, and use UID persistently. Creating multiple UIDs for a unique end user will bloat your Agora Chat MAU.
  </CalloutDescription>
</CalloutContainer>

Chat offers four pricing plans: Free, Starter, Pro, and Enterprise. See [details of each pricing plan](./pricing-plan-details) for their features and limitations. The following table outlines the base fee and included usage for each plan:

| Chat plan  | Fee (US$)  | Included usage (MAU)                                          |
| :--------- | :--------- | :------------------------------------------------------------ |
| Free       | 0          | 500                                                           |
| Starter    | 349        | 5,000                                                         |
| Pro        | 699        | 10,000                                                        |
| Enterprise | Customized | Customized, requires a minimum monthly commitment of 100K MAU |

### Bundle discount [#bundle-discount]

If you integrates both Chat and Agora's RTC offerings (such as video calls, audio calls, or live streaming), contact our sales team to get bundle discount.

| Chat plan  | Fee (US$)     |
| :--------- | :------------ |
| Free       | N/A           |
| Starter    | Contact sales |
| Pro        | Contact sales |
| Enterprise | Contact sales |

### Price of excess usage [#price-of-excess-usage]

If your MAU exceeds the included usage of the pricing plan, the excess usage fees are incurred. The following table outlines the unit price of excess usage for each plan:

| Chat plan  | Unit price of excess usage (US$/MAU) |
| :--------- | :----------------------------------- |
| Free       | N/A\\*                                |
| Starter    | 0.05                                 |
| Pro        | 0.05                                 |
| Enterprise | Customized                           |

\\*The Free plan does not allow you to exceed the included usage of MAU. Once the MAU exceeds 500, the server declines the subsequent login requests.

For example, a user buys the Starter Chat plan, which includes 5,000 MAU, and uses the Chat service in Project A and Project B. For that month, the total number of MAU for Project A is 2,370 and for Project B is 7,865. Therefore, the total cost of that month's Chat is as follows: (2,370 + 7,865 - 5,000) \\* 0.05 + 349 = US$610.75.

### (Optional) Add-on fee [#optional-add-on-fee]

Chat provides the translation and content moderation features to meet your business requirements. Once enabled these features, the add-on fees are incurred. The following table outlines the pricing of these two features:

| Add-on service                | Pricing                     |
| :---------------------------- | :-------------------------- |
| Translation                   | $0.02/1,000 characters\\*    |
| AI-Powered Content Moderation | $1.5/1,000 transactions\\*\\* |

\\*The number of characters count special characters and white spaces. For example, "I love you!" contains 11 characters in total, with eight letters, two white spaces, and one special character.

\\*\\*AI-Powered Content Moderation supports text moderation and image moderation. For text moderation, each transaction equals 3 KB of text content (roughly around 30 sentences). For image moderation, each image counts one transaction.

## Plan management [#plan-management]

### Subscribe to the pricing plan [#subscribe-to-the-pricing-plan]

<a id="subscribe-to-the-pricing-plan"></a> <a id="subscription-packages"></a> <a id="top-up-packages"></a>

Before using Chat, refer to the following steps to subscribe to a plan:

1. Log in to [Agora Console](https://console.agora.io/), on the left navigation bar, click **Package** > **Chat** > **Subscribe** on the left navigation bar.
2. Check [pricing plan details](./pricing-plan-details), choose the plan you want to use, click **Subscribe**, and make the payment.

Subscription takes effect immediately. After subscribing to a plan, you can click **Package** > **Chat** > **Manage**, and on this page you can click **Show More** to view your subscription details.

### Unsubscribe from a plan [#unsubscribe-from-a-plan]

By default, your subscription to Chat pricing plans is automatically renewed. You can unsubscribe at any time from . Cancelling your subscription takes effect immediately and will delete all the Chat-related data.

### Switch to another plan [#switch-to-another-plan]

If you want to upgrade your present plan, you can click the **Subscribe** button of another plan:

1. On **Package** > **Chat** > **Subscribe** page, you can choose the plan you want to use and click **Subscribe**.
2. Read the content in the pop-up, and then click **Save**.

Reach out to our sales if you would like to subscribe to the Agora Chat Enterprise plan.

Switching to another plan takes effect immediately and the subscription base fee will be calculated on a pro-rated basis.

## Reference [#reference]

<a id="aggregate-resolution"></a>

For detailed information on our pricing plans, see [Pricing Plan Details](./pricing-plan-details).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page explains how your bill for using Chat is calculated."
  }, {
    heading: undefined,
    content: "Note that if you have already signed a contract with Agora, the billing terms and conditions within that contract take precedence."
  }, {
    heading: "overview",
    content: "Each month, Agora calculates your bill for using Chat, issues your bill, and deducts your fee. If you subscribe, cancel, or switch to another plan, your fee is prorated for the current month. If your account is suspended, Agora stores your app data for six months. Agora suggests you top up your account in a timely fashion or export the data before it is deleted."
  }, {
    heading: "composition",
    content: "When each month finishes, Agora calculates your usage of Chat in your Agora account. After deducting the usage included in your plan, Agora multiplies any excess usage by the corresponding unit price and adds this to the plan fee to get the total cost for that month. The formula is as follows:"
  }, {
    heading: "composition",
    content: "**Total cost = Plan fee + Excess usage × Unit price of the excess usage + (Optional) Add-on fee**"
  }, {
    heading: "plan-fee",
    content: "Agora bills you based on the total number of MAUs (Monthly Active Users) in the Agora account."
  }, {
    heading: "plan-fee",
    content: "MAU is the number of unique end users who log in to Agora Chat, connect to Agora Chat servers, and establish a long-lived connection at any time across a calendar month."
  }, {
    heading: "plan-fee",
    content: "If a unique end-user connects to Agora Chat multiple times across a calendar month, they are counted as 1 MAU."
  }, {
    heading: "plan-fee",
    content: "The end user is considered logged in when you call the “open” function in step 6 during the user authentication process here."
  }, {
    heading: "plan-fee",
    content: "Once logged in, that end user is counted towards the MAU, regardless of if they send or receive messages."
  }, {
    heading: "plan-fee",
    content: "A best practice when managing your Agora Chat MAU is to authenticate your end users, create only one UID for each of them, and use UID persistently. Creating multiple UIDs for a unique end user will bloat your Agora Chat MAU."
  }, {
    heading: "plan-fee",
    content: "Chat offers four pricing plans: Free, Starter, Pro, and Enterprise. See details of each pricing plan for their features and limitations. The following table outlines the base fee and included usage for each plan:"
  }, {
    heading: "plan-fee",
    content: "Chat plan"
  }, {
    heading: "plan-fee",
    content: "Fee (US$)"
  }, {
    heading: "plan-fee",
    content: "Included usage (MAU)"
  }, {
    heading: "plan-fee",
    content: "Free"
  }, {
    heading: "plan-fee",
    content: "0"
  }, {
    heading: "plan-fee",
    content: "500"
  }, {
    heading: "plan-fee",
    content: "Starter"
  }, {
    heading: "plan-fee",
    content: "349"
  }, {
    heading: "plan-fee",
    content: "5,000"
  }, {
    heading: "plan-fee",
    content: "Pro"
  }, {
    heading: "plan-fee",
    content: "699"
  }, {
    heading: "plan-fee",
    content: "10,000"
  }, {
    heading: "plan-fee",
    content: "Enterprise"
  }, {
    heading: "plan-fee",
    content: "Customized"
  }, {
    heading: "plan-fee",
    content: "Customized, requires a minimum monthly commitment of 100K MAU"
  }, {
    heading: "bundle-discount",
    content: "If you integrates both Chat and Agora's RTC offerings (such as video calls, audio calls, or live streaming), contact our sales team to get bundle discount."
  }, {
    heading: "bundle-discount",
    content: "Chat plan"
  }, {
    heading: "bundle-discount",
    content: "Fee (US$)"
  }, {
    heading: "bundle-discount",
    content: "Free"
  }, {
    heading: "bundle-discount",
    content: "N/A"
  }, {
    heading: "bundle-discount",
    content: "Starter"
  }, {
    heading: "bundle-discount",
    content: "Contact sales"
  }, {
    heading: "bundle-discount",
    content: "Pro"
  }, {
    heading: "bundle-discount",
    content: "Contact sales"
  }, {
    heading: "bundle-discount",
    content: "Enterprise"
  }, {
    heading: "bundle-discount",
    content: "Contact sales"
  }, {
    heading: "price-of-excess-usage",
    content: "If your MAU exceeds the included usage of the pricing plan, the excess usage fees are incurred. The following table outlines the unit price of excess usage for each plan:"
  }, {
    heading: "price-of-excess-usage",
    content: "Chat plan"
  }, {
    heading: "price-of-excess-usage",
    content: "Unit price of excess usage (US$/MAU)"
  }, {
    heading: "price-of-excess-usage",
    content: "Free"
  }, {
    heading: "price-of-excess-usage",
    content: "N/A\\*"
  }, {
    heading: "price-of-excess-usage",
    content: "Starter"
  }, {
    heading: "price-of-excess-usage",
    content: "0.05"
  }, {
    heading: "price-of-excess-usage",
    content: "Pro"
  }, {
    heading: "price-of-excess-usage",
    content: "0.05"
  }, {
    heading: "price-of-excess-usage",
    content: "Enterprise"
  }, {
    heading: "price-of-excess-usage",
    content: "Customized"
  }, {
    heading: "price-of-excess-usage",
    content: "\\*The Free plan does not allow you to exceed the included usage of MAU. Once the MAU exceeds 500, the server declines the subsequent login requests."
  }, {
    heading: "price-of-excess-usage",
    content: "For example, a user buys the Starter Chat plan, which includes 5,000 MAU, and uses the Chat service in Project A and Project B. For that month, the total number of MAU for Project A is 2,370 and for Project B is 7,865. Therefore, the total cost of that month's Chat is as follows: (2,370 + 7,865 - 5,000) \\* 0.05 + 349 = US$610.75."
  }, {
    heading: "optional-add-on-fee",
    content: "Chat provides the translation and content moderation features to meet your business requirements. Once enabled these features, the add-on fees are incurred. The following table outlines the pricing of these two features:"
  }, {
    heading: "optional-add-on-fee",
    content: "Add-on service"
  }, {
    heading: "optional-add-on-fee",
    content: "Pricing"
  }, {
    heading: "optional-add-on-fee",
    content: "Translation"
  }, {
    heading: "optional-add-on-fee",
    content: "$0.02/1,000 characters\\*"
  }, {
    heading: "optional-add-on-fee",
    content: "AI-Powered Content Moderation"
  }, {
    heading: "optional-add-on-fee",
    content: "$1.5/1,000 transactions\\*\\*"
  }, {
    heading: "optional-add-on-fee",
    content: '\\*The number of characters count special characters and white spaces. For example, "I love you!" contains 11 characters in total, with eight letters, two white spaces, and one special character.'
  }, {
    heading: "optional-add-on-fee",
    content: "\\*\\*AI-Powered Content Moderation supports text moderation and image moderation. For text moderation, each transaction equals 3 KB of text content (roughly around 30 sentences). For image moderation, each image counts one transaction."
  }, {
    heading: "subscribe-to-the-pricing-plan",
    content: '<a id="subscribe-to-the-pricing-plan"></a> <a id="subscription-packages"></a> <a id="top-up-packages"></a>'
  }, {
    heading: "subscribe-to-the-pricing-plan",
    content: "Before using Chat, refer to the following steps to subscribe to a plan:"
  }, {
    heading: "subscribe-to-the-pricing-plan",
    content: "Log in to Agora Console, on the left navigation bar, click **Package** > **Chat** > **Subscribe** on the left navigation bar."
  }, {
    heading: "subscribe-to-the-pricing-plan",
    content: "Check pricing plan details, choose the plan you want to use, click **Subscribe**, and make the payment."
  }, {
    heading: "subscribe-to-the-pricing-plan",
    content: "Subscription takes effect immediately. After subscribing to a plan, you can click **Package** > **Chat** > **Manage**, and on this page you can click **Show More** to view your subscription details."
  }, {
    heading: "unsubscribe-from-a-plan",
    content: "By default, your subscription to Chat pricing plans is automatically renewed. You can unsubscribe at any time from . Cancelling your subscription takes effect immediately and will delete all the Chat-related data."
  }, {
    heading: "switch-to-another-plan",
    content: "If you want to upgrade your present plan, you can click the **Subscribe** button of another plan:"
  }, {
    heading: "switch-to-another-plan",
    content: "On **Package** > **Chat** > **Subscribe** page, you can choose the plan you want to use and click **Subscribe**."
  }, {
    heading: "switch-to-another-plan",
    content: "Read the content in the pop-up, and then click **Save**."
  }, {
    heading: "switch-to-another-plan",
    content: "Reach out to our sales if you would like to subscribe to the Agora Chat Enterprise plan."
  }, {
    heading: "switch-to-another-plan",
    content: "Switching to another plan takes effect immediately and the subscription base fee will be calculated on a pro-rated basis."
  }, {
    heading: "reference",
    content: '<a id="aggregate-resolution"></a>'
  }, {
    heading: "reference",
    content: "For detailed information on our pricing plans, see Pricing Plan Details."
  }],
  headings: [{
    id: "overview",
    content: "Overview"
  }, {
    id: "composition",
    content: "Composition"
  }, {
    id: "plan-fee",
    content: "Plan fee"
  }, {
    id: "bundle-discount",
    content: "Bundle discount"
  }, {
    id: "price-of-excess-usage",
    content: "Price of excess usage"
  }, {
    id: "optional-add-on-fee",
    content: "(Optional) Add-on fee"
  }, {
    id: "plan-management",
    content: "Plan management"
  }, {
    id: "subscribe-to-the-pricing-plan",
    content: "Subscribe to the pricing plan"
  }, {
    id: "unsubscribe-from-a-plan",
    content: "Unsubscribe from a plan"
  }, {
    id: "switch-to-another-plan",
    content: "Switch to another plan"
  }, {
    id: "reference",
    content: "Reference"
  }]
};
export let toc = [{
  depth: 2,
  url: "#overview",
  title: _jsx(_Fragment, {
    children: "Overview"
  })
}, {
  depth: 2,
  url: "#composition",
  title: _jsx(_Fragment, {
    children: "Composition"
  })
}, {
  depth: 3,
  url: "#plan-fee",
  title: _jsx(_Fragment, {
    children: "Plan fee"
  })
}, {
  depth: 3,
  url: "#bundle-discount",
  title: _jsx(_Fragment, {
    children: "Bundle discount"
  })
}, {
  depth: 3,
  url: "#price-of-excess-usage",
  title: _jsx(_Fragment, {
    children: "Price of excess usage"
  })
}, {
  depth: 3,
  url: "#optional-add-on-fee",
  title: _jsx(_Fragment, {
    children: "(Optional) Add-on fee"
  })
}, {
  depth: 2,
  url: "#plan-management",
  title: _jsx(_Fragment, {
    children: "Plan management"
  })
}, {
  depth: 3,
  url: "#subscribe-to-the-pricing-plan",
  title: _jsx(_Fragment, {
    children: "Subscribe to the pricing plan"
  })
}, {
  depth: 3,
  url: "#unsubscribe-from-a-plan",
  title: _jsx(_Fragment, {
    children: "Unsubscribe from a plan"
  })
}, {
  depth: 3,
  url: "#switch-to-another-plan",
  title: _jsx(_Fragment, {
    children: "Switch to another plan"
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page explains how your bill for using Chat is calculated."
    }), `
`, _jsx(_components.p, {
      children: "Note that if you have already signed a contract with Agora, the billing terms and conditions within that contract take precedence."
    }), `
`, _jsx(_components.h2, {
      id: "overview",
      children: "Overview"
    }), `
`, _jsxs(_components.p, {
      children: ["Each month, Agora calculates your bill for using Chat, ", _jsx(_components.a, {
        href: "./billing-policies",
        children: "issues your bill, and deducts your fee"
      }), ". If you subscribe, cancel, or switch to another plan, your fee is prorated for the current month. If your account is ", _jsx(_components.a, {
        href: "./billing-policies",
        children: "suspended"
      }), ", Agora stores your app data for six months. Agora suggests you top up your account in a timely fashion or export the data before it is deleted."]
    }), `
`, _jsx(_components.h2, {
      id: "composition",
      children: "Composition"
    }), `
`, _jsxs(_components.p, {
      children: ["When each month finishes, Agora calculates your usage of Chat in your ", _jsx(_components.a, {
        href: "/en/introduction/account#sign-up-for-an-agora-account",
        children: "Agora account"
      }), ". After deducting the usage included in your plan, Agora multiplies any excess usage by the corresponding unit price and adds this to the plan fee to get the total cost for that month. The formula is as follows:"]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Total cost = Plan fee + Excess usage × Unit price of the excess usage + (Optional) Add-on fee"
      })
    }), `
`, _jsx(_components.h3, {
      id: "plan-fee",
      children: "Plan fee"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora bills you based on the total number of MAUs (Monthly Active Users) in the ", _jsx(_components.a, {
        href: "/en/introduction/account#sign-up-for-an-agora-account",
        children: "Agora account"
      }), "."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "MAU is the number of unique end users who log in to Agora Chat, connect to Agora Chat servers, and establish a long-lived connection at any time across a calendar month."
      }), `
`, _jsx(_components.li, {
        children: "If a unique end-user connects to Agora Chat multiple times across a calendar month, they are counted as 1 MAU."
      }), `
`, _jsxs(_components.li, {
        children: ["The end user is considered logged in when you call the “open” function in step 6 during the user authentication process ", _jsx(_components.a, {
          href: "/en/realtime-media/im/build/secure-access-and-authentication/authentication#use-tokens-for-user-authentication",
          children: "here"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Once logged in, that end user is counted towards the MAU, regardless of if they send or receive messages."
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "A best practice when managing your Agora Chat MAU is to authenticate your end users, create only one UID for each of them, and use UID persistently. Creating multiple UIDs for a unique end user will bloat your Agora Chat MAU."
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Chat offers four pricing plans: Free, Starter, Pro, and Enterprise. See ", _jsx(_components.a, {
        href: "./pricing-plan-details",
        children: "details of each pricing plan"
      }), " for their features and limitations. The following table outlines the base fee and included usage for each plan:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Chat plan"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Fee (US$)"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Included usage (MAU)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Free"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "500"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Starter"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "349"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "5,000"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Pro"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "699"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "10,000"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Enterprise"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Customized"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Customized, requires a minimum monthly commitment of 100K MAU"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "bundle-discount",
      children: "Bundle discount"
    }), `
`, _jsx(_components.p, {
      children: "If you integrates both Chat and Agora's RTC offerings (such as video calls, audio calls, or live streaming), contact our sales team to get bundle discount."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Chat plan"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Fee (US$)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Free"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Starter"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Contact sales"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Pro"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Contact sales"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Enterprise"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Contact sales"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "price-of-excess-usage",
      children: "Price of excess usage"
    }), `
`, _jsx(_components.p, {
      children: "If your MAU exceeds the included usage of the pricing plan, the excess usage fees are incurred. The following table outlines the unit price of excess usage for each plan:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Chat plan"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Unit price of excess usage (US$/MAU)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Free"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A*"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Starter"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0.05"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Pro"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0.05"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Enterprise"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Customized"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "*The Free plan does not allow you to exceed the included usage of MAU. Once the MAU exceeds 500, the server declines the subsequent login requests."
    }), `
`, _jsx(_components.p, {
      children: "For example, a user buys the Starter Chat plan, which includes 5,000 MAU, and uses the Chat service in Project A and Project B. For that month, the total number of MAU for Project A is 2,370 and for Project B is 7,865. Therefore, the total cost of that month's Chat is as follows: (2,370 + 7,865 - 5,000) * 0.05 + 349 = US$610.75."
    }), `
`, _jsx(_components.h3, {
      id: "optional-add-on-fee",
      children: "(Optional) Add-on fee"
    }), `
`, _jsx(_components.p, {
      children: "Chat provides the translation and content moderation features to meet your business requirements. Once enabled these features, the add-on fees are incurred. The following table outlines the pricing of these two features:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Add-on service"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Pricing"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Translation"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$0.02/1,000 characters*"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "AI-Powered Content Moderation"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "$1.5/1,000 transactions**"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: '*The number of characters count special characters and white spaces. For example, "I love you!" contains 11 characters in total, with eight letters, two white spaces, and one special character.'
    }), `
`, _jsx(_components.p, {
      children: "**AI-Powered Content Moderation supports text moderation and image moderation. For text moderation, each transaction equals 3 KB of text content (roughly around 30 sentences). For image moderation, each image counts one transaction."
    }), `
`, _jsx(_components.h2, {
      id: "plan-management",
      children: "Plan management"
    }), `
`, _jsx(_components.h3, {
      id: "subscribe-to-the-pricing-plan",
      children: "Subscribe to the pricing plan"
    }), `
`, _jsxs(_components.p, {
      children: [`
`, `
`]
    }), `
`, _jsx(_components.p, {
      children: "Before using Chat, refer to the following steps to subscribe to a plan:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Log in to ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        }), ", on the left navigation bar, click ", _jsx(_components.strong, {
          children: "Package"
        }), " > ", _jsx(_components.strong, {
          children: "Chat"
        }), " > ", _jsx(_components.strong, {
          children: "Subscribe"
        }), " on the left navigation bar."]
      }), `
`, _jsxs(_components.li, {
        children: ["Check ", _jsx(_components.a, {
          href: "./pricing-plan-details",
          children: "pricing plan details"
        }), ", choose the plan you want to use, click ", _jsx(_components.strong, {
          children: "Subscribe"
        }), ", and make the payment."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Subscription takes effect immediately. After subscribing to a plan, you can click ", _jsx(_components.strong, {
        children: "Package"
      }), " > ", _jsx(_components.strong, {
        children: "Chat"
      }), " > ", _jsx(_components.strong, {
        children: "Manage"
      }), ", and on this page you can click ", _jsx(_components.strong, {
        children: "Show More"
      }), " to view your subscription details."]
    }), `
`, _jsx(_components.h3, {
      id: "unsubscribe-from-a-plan",
      children: "Unsubscribe from a plan"
    }), `
`, _jsx(_components.p, {
      children: "By default, your subscription to Chat pricing plans is automatically renewed. You can unsubscribe at any time from . Cancelling your subscription takes effect immediately and will delete all the Chat-related data."
    }), `
`, _jsx(_components.h3, {
      id: "switch-to-another-plan",
      children: "Switch to another plan"
    }), `
`, _jsxs(_components.p, {
      children: ["If you want to upgrade your present plan, you can click the ", _jsx(_components.strong, {
        children: "Subscribe"
      }), " button of another plan:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["On ", _jsx(_components.strong, {
          children: "Package"
        }), " > ", _jsx(_components.strong, {
          children: "Chat"
        }), " > ", _jsx(_components.strong, {
          children: "Subscribe"
        }), " page, you can choose the plan you want to use and click ", _jsx(_components.strong, {
          children: "Subscribe"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Read the content in the pop-up, and then click ", _jsx(_components.strong, {
          children: "Save"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Reach out to our sales if you would like to subscribe to the Agora Chat Enterprise plan."
    }), `
`, _jsx(_components.p, {
      children: "Switching to another plan takes effect immediately and the subscription base fee will be calculated on a pro-rated basis."
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {}), `
`, _jsxs(_components.p, {
      children: ["For detailed information on our pricing plans, see ", _jsx(_components.a, {
        href: "./pricing-plan-details",
        children: "Pricing Plan Details"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
