import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "SIP transfer",
  description: "Configure outbound campaign call transfers to SIP destinations and pass custom SIP headers."
};
export let _markdown = `

Use this guide when you want outbound campaign calls to transfer from the AI agent to a human destination over SIP instead of a regular phone number.

This feature is configured in **Campaign** call settings.

## Prerequisites [#prerequisites]

* A deployed agent.
* An outbound campaign.
* A SIP transfer destination.
* If you want dynamic SIP headers, your contact CSV must contain the required columns.

## How it works [#how-it-works]

When **Transfer Call to Human** is enabled in campaign settings, the agent can escalate a live call to the transfer destination based on your transfer criteria.

You can set:

* **Transfer Type** = \`SIP\`
* **Transfer Destination** = SIP address
* **SIP Headers** = constant or dynamic headers sent with the transfer request

## Configure SIP transfer [#configure-sip-transfer]

1. In the navigation sidebar, select **Outbound Campaigns**.
2. Create a campaign, or edit a draft campaign.
3. In **Call Settings**, enable **Transfer to Human**.
   ![Transfer to human](https://assets-docs.agora.io/images/console/campaign-transfer-call.png)
4. Set **Transfer Type** to **SIP**.
5. Enter the **Transfer Destination**.
6. Enter **Transfer Criteria** to describe when the agent should transfer the call. For example:

   \`\`\`
   Transfer the call when the user explicitly asks for a human agent, or when the request requires account actions that the agent cannot complete.
   \`\`\`

## SIP destination formats [#sip-destination-formats]

Use one of the following SIP destination formats:

* \`sip:031122@112.13.168.197:5060\`
* \`sip:112.13.168.197:5060\`
* \`sip:user@domain.com:5060\`

A value without the \`sip:\` prefix is also accepted in the UI, but the stored transfer target is normalized as a SIP address.

## Add SIP headers [#add-sip-headers]

Use **SIP Headers** when the downstream SIP system expects extra metadata.

Each header has:

* **Name**
* **Type**: \`Constant\` or \`Dynamic\`
* **Value**

Header names are normalized with the \`sip_h_\` prefix when sent.

### Constant headers [#constant-headers]

Use constant headers when every transfer should send the same value. For example:

\`\`\`
Name: queue
Type: Constant
Value: support-l2
\`\`\`

### Dynamic headers [#dynamic-headers]

Use dynamic headers when the value should come from a campaign CSV row.

Dynamic values must contain at least one CSV column wrapped in double curly braces. For example:

\`\`\`
{{first_name}}
vip-{{account_tier}}
{{case_id}}-{{region}}
\`\`\`

<CalloutContainer type="info">
  <CalloutTitle>
    Note
  </CalloutTitle>

  <CalloutDescription>
    * Variable names are case-sensitive.
    * Each variable must match an uploaded CSV column name exactly.
    * If the dynamic value is missing or invalid for a contact, that header is omitted from the transfer request.
  </CalloutDescription>
</CalloutContainer>

## Prepare CSV data for dynamic headers [#prepare-csv-data-for-dynamic-headers]

To use dynamic headers, add matching columns to your contact list. For example:

\`\`\`
phone_number,first_name,account_tier,case_id,region
+19168888860,John,gold,C-1024,us-west
\`\`\`

Then configure headers as follows:

* \`customer_name\` → \`{{first_name}}\`
* \`priority\` → \`{{account_tier}}\`
* \`case_context\` → \`{{case_id}}-{{region}}\`

## Test checklist [#test-checklist]

Before you launch a campaign, verify:

* The SIP destination is valid.
* The transfer criteria is clear and specific.
* Dynamic header variables match CSV columns exactly.
* A sample transfer reaches the expected SIP system.
* The receiving system can read the custom SIP headers.

## Troubleshooting [#troubleshooting]

| Issue                              | Solution                                                                              |
| ---------------------------------- | ------------------------------------------------------------------------------------- |
| Transfer destination rejected      | Check the SIP address format and port.                                                |
| Header missing on transferred call | Check the header type, CSV column name, and whether a value exists for that contact.  |
| Transfer never happens             | Tighten the transfer criteria in call settings and the agent prompt.                  |
| Call transfers to the wrong place  | Recheck the destination field and whether you selected **SIP** instead of **Number**. |

## Next steps [#next-steps]

* [Set up a campaign](campaign): Build an outbound call flow
* [Set up SIP trunk](sip-trunk): Prepare telephony for outbound calling
* [Agent analytics](../observe/analytics): Monitor transfer outcomes after launch
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Use this guide when you want outbound campaign calls to transfer from the AI agent to a human destination over SIP instead of a regular phone number."
  }, {
    heading: undefined,
    content: "This feature is configured in **Campaign** call settings."
  }, {
    heading: "prerequisites",
    content: "A deployed agent."
  }, {
    heading: "prerequisites",
    content: "An outbound campaign."
  }, {
    heading: "prerequisites",
    content: "A SIP transfer destination."
  }, {
    heading: "prerequisites",
    content: "If you want dynamic SIP headers, your contact CSV must contain the required columns."
  }, {
    heading: "how-it-works",
    content: "When **Transfer Call to Human** is enabled in campaign settings, the agent can escalate a live call to the transfer destination based on your transfer criteria."
  }, {
    heading: "how-it-works",
    content: "You can set:"
  }, {
    heading: "how-it-works",
    content: "**Transfer Type** = `SIP`"
  }, {
    heading: "how-it-works",
    content: "**Transfer Destination** = SIP address"
  }, {
    heading: "how-it-works",
    content: "**SIP Headers** = constant or dynamic headers sent with the transfer request"
  }, {
    heading: "configure-sip-transfer",
    content: "In the navigation sidebar, select **Outbound Campaigns**."
  }, {
    heading: "configure-sip-transfer",
    content: "Create a campaign, or edit a draft campaign."
  }, {
    heading: "configure-sip-transfer",
    content: "In **Call Settings**, enable **Transfer to Human**."
  }, {
    heading: "configure-sip-transfer",
    content: "Set **Transfer Type** to **SIP**."
  }, {
    heading: "configure-sip-transfer",
    content: "Enter the **Transfer Destination**."
  }, {
    heading: "configure-sip-transfer",
    content: "Enter **Transfer Criteria** to describe when the agent should transfer the call. For example:"
  }, {
    heading: "sip-destination-formats",
    content: "Use one of the following SIP destination formats:"
  }, {
    heading: "sip-destination-formats",
    content: "`sip:031122@112.13.168.197:5060`"
  }, {
    heading: "sip-destination-formats",
    content: "`sip:112.13.168.197:5060`"
  }, {
    heading: "sip-destination-formats",
    content: "`sip:user@domain.com:5060`"
  }, {
    heading: "sip-destination-formats",
    content: "A value without the `sip:` prefix is also accepted in the UI, but the stored transfer target is normalized as a SIP address."
  }, {
    heading: "add-sip-headers",
    content: "Use **SIP Headers** when the downstream SIP system expects extra metadata."
  }, {
    heading: "add-sip-headers",
    content: "Each header has:"
  }, {
    heading: "add-sip-headers",
    content: "**Name**"
  }, {
    heading: "add-sip-headers",
    content: "**Type**: `Constant` or `Dynamic`"
  }, {
    heading: "add-sip-headers",
    content: "**Value**"
  }, {
    heading: "add-sip-headers",
    content: "Header names are normalized with the `sip_h_` prefix when sent."
  }, {
    heading: "constant-headers",
    content: "Use constant headers when every transfer should send the same value. For example:"
  }, {
    heading: "dynamic-headers",
    content: "Use dynamic headers when the value should come from a campaign CSV row."
  }, {
    heading: "dynamic-headers",
    content: "Dynamic values must contain at least one CSV column wrapped in double curly braces. For example:"
  }, {
    heading: "dynamic-headers",
    content: "Variable names are case-sensitive."
  }, {
    heading: "dynamic-headers",
    content: "Each variable must match an uploaded CSV column name exactly."
  }, {
    heading: "dynamic-headers",
    content: "If the dynamic value is missing or invalid for a contact, that header is omitted from the transfer request."
  }, {
    heading: "prepare-csv-data-for-dynamic-headers",
    content: "To use dynamic headers, add matching columns to your contact list. For example:"
  }, {
    heading: "prepare-csv-data-for-dynamic-headers",
    content: "Then configure headers as follows:"
  }, {
    heading: "prepare-csv-data-for-dynamic-headers",
    content: "`customer_name` → `{{first_name}}`"
  }, {
    heading: "prepare-csv-data-for-dynamic-headers",
    content: "`priority` → `{{account_tier}}`"
  }, {
    heading: "prepare-csv-data-for-dynamic-headers",
    content: "`case_context` → `{{case_id}}-{{region}}`"
  }, {
    heading: "test-checklist",
    content: "Before you launch a campaign, verify:"
  }, {
    heading: "test-checklist",
    content: "The SIP destination is valid."
  }, {
    heading: "test-checklist",
    content: "The transfer criteria is clear and specific."
  }, {
    heading: "test-checklist",
    content: "Dynamic header variables match CSV columns exactly."
  }, {
    heading: "test-checklist",
    content: "A sample transfer reaches the expected SIP system."
  }, {
    heading: "test-checklist",
    content: "The receiving system can read the custom SIP headers."
  }, {
    heading: "troubleshooting",
    content: "Issue"
  }, {
    heading: "troubleshooting",
    content: "Solution"
  }, {
    heading: "troubleshooting",
    content: "Transfer destination rejected"
  }, {
    heading: "troubleshooting",
    content: "Check the SIP address format and port."
  }, {
    heading: "troubleshooting",
    content: "Header missing on transferred call"
  }, {
    heading: "troubleshooting",
    content: "Check the header type, CSV column name, and whether a value exists for that contact."
  }, {
    heading: "troubleshooting",
    content: "Transfer never happens"
  }, {
    heading: "troubleshooting",
    content: "Tighten the transfer criteria in call settings and the agent prompt."
  }, {
    heading: "troubleshooting",
    content: "Call transfers to the wrong place"
  }, {
    heading: "troubleshooting",
    content: "Recheck the destination field and whether you selected **SIP** instead of **Number**."
  }, {
    heading: "next-steps",
    content: "Set up a campaign: Build an outbound call flow"
  }, {
    heading: "next-steps",
    content: "Set up SIP trunk: Prepare telephony for outbound calling"
  }, {
    heading: "next-steps",
    content: "Agent analytics: Monitor transfer outcomes after launch"
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "how-it-works",
    content: "How it works"
  }, {
    id: "configure-sip-transfer",
    content: "Configure SIP transfer"
  }, {
    id: "sip-destination-formats",
    content: "SIP destination formats"
  }, {
    id: "add-sip-headers",
    content: "Add SIP headers"
  }, {
    id: "constant-headers",
    content: "Constant headers"
  }, {
    id: "dynamic-headers",
    content: "Dynamic headers"
  }, {
    id: "prepare-csv-data-for-dynamic-headers",
    content: "Prepare CSV data for dynamic headers"
  }, {
    id: "test-checklist",
    content: "Test checklist"
  }, {
    id: "troubleshooting",
    content: "Troubleshooting"
  }, {
    id: "next-steps",
    content: "Next steps"
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
  url: "#how-it-works",
  title: _jsx(_Fragment, {
    children: "How it works"
  })
}, {
  depth: 2,
  url: "#configure-sip-transfer",
  title: _jsx(_Fragment, {
    children: "Configure SIP transfer"
  })
}, {
  depth: 2,
  url: "#sip-destination-formats",
  title: _jsx(_Fragment, {
    children: "SIP destination formats"
  })
}, {
  depth: 2,
  url: "#add-sip-headers",
  title: _jsx(_Fragment, {
    children: "Add SIP headers"
  })
}, {
  depth: 3,
  url: "#constant-headers",
  title: _jsx(_Fragment, {
    children: "Constant headers"
  })
}, {
  depth: 3,
  url: "#dynamic-headers",
  title: _jsx(_Fragment, {
    children: "Dynamic headers"
  })
}, {
  depth: 2,
  url: "#prepare-csv-data-for-dynamic-headers",
  title: _jsx(_Fragment, {
    children: "Prepare CSV data for dynamic headers"
  })
}, {
  depth: 2,
  url: "#test-checklist",
  title: _jsx(_Fragment, {
    children: "Test checklist"
  })
}, {
  depth: 2,
  url: "#troubleshooting",
  title: _jsx(_Fragment, {
    children: "Troubleshooting"
  })
}, {
  depth: 2,
  url: "#next-steps",
  title: _jsx(_Fragment, {
    children: "Next steps"
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
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Use this guide when you want outbound campaign calls to transfer from the AI agent to a human destination over SIP instead of a regular phone number."
    }), `
`, _jsxs(_components.p, {
      children: ["This feature is configured in ", _jsx(_components.strong, {
        children: "Campaign"
      }), " call settings."]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "A deployed agent."
      }), `
`, _jsx(_components.li, {
        children: "An outbound campaign."
      }), `
`, _jsx(_components.li, {
        children: "A SIP transfer destination."
      }), `
`, _jsx(_components.li, {
        children: "If you want dynamic SIP headers, your contact CSV must contain the required columns."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "how-it-works",
      children: "How it works"
    }), `
`, _jsxs(_components.p, {
      children: ["When ", _jsx(_components.strong, {
        children: "Transfer Call to Human"
      }), " is enabled in campaign settings, the agent can escalate a live call to the transfer destination based on your transfer criteria."]
    }), `
`, _jsx(_components.p, {
      children: "You can set:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Transfer Type"
        }), " = ", _jsx(_components.code, {
          children: "SIP"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Transfer Destination"
        }), " = SIP address"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "SIP Headers"
        }), " = constant or dynamic headers sent with the transfer request"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "configure-sip-transfer",
      children: "Configure SIP transfer"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
            children: "Outbound Campaigns"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Create a campaign, or edit a draft campaign."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In ", _jsx(_components.strong, {
            children: "Call Settings"
          }), ", enable ", _jsx(_components.strong, {
            children: "Transfer to Human"
          }), `.
`, _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/console/campaign-transfer-call.png",
            alt: "Transfer to human"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Set ", _jsx(_components.strong, {
            children: "Transfer Type"
          }), " to ", _jsx(_components.strong, {
            children: "SIP"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Enter the ", _jsx(_components.strong, {
            children: "Transfer Destination"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Enter ", _jsx(_components.strong, {
            children: "Transfer Criteria"
          }), " to describe when the agent should transfer the call. For example:"]
        }), `
`, _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "Transfer the call when the user explicitly asks for a human agent, or when the request requires account actions that the agent cannot complete."
                })
              })
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "sip-destination-formats",
      children: "SIP destination formats"
    }), `
`, _jsx(_components.p, {
      children: "Use one of the following SIP destination formats:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "sip:031122@112.13.168.197:5060"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "sip:112.13.168.197:5060"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "sip:user@domain.com:5060"
        })
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["A value without the ", _jsx(_components.code, {
        children: "sip:"
      }), " prefix is also accepted in the UI, but the stored transfer target is normalized as a SIP address."]
    }), `
`, _jsx(_components.h2, {
      id: "add-sip-headers",
      children: "Add SIP headers"
    }), `
`, _jsxs(_components.p, {
      children: ["Use ", _jsx(_components.strong, {
        children: "SIP Headers"
      }), " when the downstream SIP system expects extra metadata."]
    }), `
`, _jsx(_components.p, {
      children: "Each header has:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: "Name"
        })
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Type"
        }), ": ", _jsx(_components.code, {
          children: "Constant"
        }), " or ", _jsx(_components.code, {
          children: "Dynamic"
        })]
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: "Value"
        })
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Header names are normalized with the ", _jsx(_components.code, {
        children: "sip_h_"
      }), " prefix when sent."]
    }), `
`, _jsx(_components.h3, {
      id: "constant-headers",
      children: "Constant headers"
    }), `
`, _jsx(_components.p, {
      children: "Use constant headers when every transfer should send the same value. For example:"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "Name: queue"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "Type: Constant"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "Value: support-l2"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "dynamic-headers",
      children: "Dynamic headers"
    }), `
`, _jsx(_components.p, {
      children: "Use dynamic headers when the value should come from a campaign CSV row."
    }), `
`, _jsx(_components.p, {
      children: "Dynamic values must contain at least one CSV column wrapped in double curly braces. For example:"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "{{first_name}}"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "vip-{{account_tier}}"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "{{case_id}}-{{region}}"
            })
          })]
        })
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Note"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Variable names are case-sensitive."
          }), `
`, _jsx(_components.li, {
            children: "Each variable must match an uploaded CSV column name exactly."
          }), `
`, _jsx(_components.li, {
            children: "If the dynamic value is missing or invalid for a contact, that header is omitted from the transfer request."
          }), `
`]
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "prepare-csv-data-for-dynamic-headers",
      children: "Prepare CSV data for dynamic headers"
    }), `
`, _jsx(_components.p, {
      children: "To use dynamic headers, add matching columns to your contact list. For example:"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "phone_number,first_name,account_tier,case_id,region"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "+19168888860,John,gold,C-1024,us-west"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Then configure headers as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "customer_name"
        }), " → ", _jsx(_components.code, {
          children: "{{first_name}}"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "priority"
        }), " → ", _jsx(_components.code, {
          children: "{{account_tier}}"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "case_context"
        }), " → ", _jsx(_components.code, {
          children: "{{case_id}}-{{region}}"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "test-checklist",
      children: "Test checklist"
    }), `
`, _jsx(_components.p, {
      children: "Before you launch a campaign, verify:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The SIP destination is valid."
      }), `
`, _jsx(_components.li, {
        children: "The transfer criteria is clear and specific."
      }), `
`, _jsx(_components.li, {
        children: "Dynamic header variables match CSV columns exactly."
      }), `
`, _jsx(_components.li, {
        children: "A sample transfer reaches the expected SIP system."
      }), `
`, _jsx(_components.li, {
        children: "The receiving system can read the custom SIP headers."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Issue"
          }), _jsx(_components.th, {
            children: "Solution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Transfer destination rejected"
          }), _jsx(_components.td, {
            children: "Check the SIP address format and port."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Header missing on transferred call"
          }), _jsx(_components.td, {
            children: "Check the header type, CSV column name, and whether a value exists for that contact."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Transfer never happens"
          }), _jsx(_components.td, {
            children: "Tighten the transfer criteria in call settings and the agent prompt."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Call transfers to the wrong place"
          }), _jsxs(_components.td, {
            children: ["Recheck the destination field and whether you selected ", _jsx(_components.strong, {
              children: "SIP"
            }), " instead of ", _jsx(_components.strong, {
              children: "Number"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "next-steps",
      children: "Next steps"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "campaign",
          children: "Set up a campaign"
        }), ": Build an outbound call flow"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "sip-trunk",
          children: "Set up SIP trunk"
        }), ": Prepare telephony for outbound calling"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../observe/analytics",
          children: "Agent analytics"
        }), ": Monitor transfer outcomes after launch"]
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
