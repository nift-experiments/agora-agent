import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Import a number",
  description: "Import phone numbers from Elastic SIP Trunk for use in inbound and outbound calls."
};
export let _markdown = `

Import phone numbers to use for inbound and outbound calls with your deployed agents.

## What is Elastic SIP Trunk? [#what-is-elastic-sip-trunk]

Elastic SIP Trunk is the connection layer between traditional phone networks and your deployed agents. When a caller dials your phone number, their carrier routes the call over the public telephone network. Elastic SIP Trunk translates that call into a format your agent can process, and passes it to your configured agent.

The term elastic means the trunk scales automatically with call volume; the same configuration handles one call or thousands without any changes at your end.

## Prerequisites [#prerequisites]

* An active account with Elastic SIP Trunk configured. See [Set up SIP trunk](sip-trunk).
* A deployed agent.
* A phone number configured in your SIP trunk.
* SIP domain and credentials from your SIP trunk account.

## Import a phone number [#import-a-phone-number]

To import a phone number from your SIP trunk:

1. In the navigation sidebar, select **Phone Numbers**.

   ![Phone numbers list](https://assets-docs.agora.io/images/console/phone-numbers.png)

2. Select **Add Phone Number**.

   ![Import phone number](https://assets-docs.agora.io/images/console/add-phone-number.png)

3. Fill in the required information:

   * **Phone Number**: Enter the phone number in E.164 format (for example, \`+1234567890\`).
   * **Vendor**: Select \`SIP Trunk\` (currently the only supported vendor).
   * **Display Name**: Enter a descriptive name to help you identify this number.
   * **SIP Trunk Address**: Enter your SIP Trunk domain.
   * **Transport Protocol**: Select the protocol for SIP communication. Choose **TLS** if Secure Trunking is enabled in your SIP trunk, otherwise choose **TCP** or **UDP**.
   * **SIP Trunk Username**: Enter your SIP Trunk username.
   * **SIP Trunk Password**: Enter your SIP Trunk password.

4. Select **Add Phone Number** to import the phone number.

Your imported phone number is now available for use in inbound and outbound calls.

## Manage imported numbers [#manage-imported-numbers]

### Edit a phone number [#edit-a-phone-number]

To update the configuration of an imported phone number:

1. In the navigation sidebar, select **Phone Numbers**.
2. Locate the phone number you want to edit.
3. From the **Action** menu, select **Edit**.
4. Update the phone number details as needed.
5. Select **Save** to apply your changes.

### Delete a phone number [#delete-a-phone-number]

To remove an imported phone number:

1. In the navigation sidebar, select **Phone Numbers**.
2. Locate the phone number you want to delete.
3. From the **Action** menu, select **Delete**.
4. Confirm the deletion.

<CalloutContainer type="warning">
  <CalloutTitle>
    Caution
  </CalloutTitle>

  <CalloutDescription>
    Deleting a phone number removes it from all agents and campaigns that use it. Ensure no active inbound agents or outbound campaigns depend on this number before deleting.
  </CalloutDescription>
</CalloutContainer>

## Next steps [#next-steps]

* [Set up a campaign](campaign): Use your imported phone numbers to create outbound calling campaigns
* [Publish your agent](deploy-agent): Publish agents to use in your campaigns
* [Handle inbound calls](inbound): Associate your number with an agent to answer inbound calls
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Import phone numbers to use for inbound and outbound calls with your deployed agents."
  }, {
    heading: "what-is-elastic-sip-trunk",
    content: "Elastic SIP Trunk is the connection layer between traditional phone networks and your deployed agents. When a caller dials your phone number, their carrier routes the call over the public telephone network. Elastic SIP Trunk translates that call into a format your agent can process, and passes it to your configured agent."
  }, {
    heading: "what-is-elastic-sip-trunk",
    content: "The term elastic means the trunk scales automatically with call volume; the same configuration handles one call or thousands without any changes at your end."
  }, {
    heading: "prerequisites",
    content: "An active account with Elastic SIP Trunk configured. See Set up SIP trunk."
  }, {
    heading: "prerequisites",
    content: "A deployed agent."
  }, {
    heading: "prerequisites",
    content: "A phone number configured in your SIP trunk."
  }, {
    heading: "prerequisites",
    content: "SIP domain and credentials from your SIP trunk account."
  }, {
    heading: "import-a-phone-number",
    content: "To import a phone number from your SIP trunk:"
  }, {
    heading: "import-a-phone-number",
    content: "In the navigation sidebar, select **Phone Numbers**."
  }, {
    heading: "import-a-phone-number",
    content: "Select **Add Phone Number**."
  }, {
    heading: "import-a-phone-number",
    content: "Fill in the required information:"
  }, {
    heading: "import-a-phone-number",
    content: "**Phone Number**: Enter the phone number in E.164 format (for example, `+1234567890`)."
  }, {
    heading: "import-a-phone-number",
    content: "**Vendor**: Select `SIP Trunk` (currently the only supported vendor)."
  }, {
    heading: "import-a-phone-number",
    content: "**Display Name**: Enter a descriptive name to help you identify this number."
  }, {
    heading: "import-a-phone-number",
    content: "**SIP Trunk Address**: Enter your SIP Trunk domain."
  }, {
    heading: "import-a-phone-number",
    content: "**Transport Protocol**: Select the protocol for SIP communication. Choose **TLS** if Secure Trunking is enabled in your SIP trunk, otherwise choose **TCP** or **UDP**."
  }, {
    heading: "import-a-phone-number",
    content: "**SIP Trunk Username**: Enter your SIP Trunk username."
  }, {
    heading: "import-a-phone-number",
    content: "**SIP Trunk Password**: Enter your SIP Trunk password."
  }, {
    heading: "import-a-phone-number",
    content: "Select **Add Phone Number** to import the phone number."
  }, {
    heading: "import-a-phone-number",
    content: "Your imported phone number is now available for use in inbound and outbound calls."
  }, {
    heading: "edit-a-phone-number",
    content: "To update the configuration of an imported phone number:"
  }, {
    heading: "edit-a-phone-number",
    content: "In the navigation sidebar, select **Phone Numbers**."
  }, {
    heading: "edit-a-phone-number",
    content: "Locate the phone number you want to edit."
  }, {
    heading: "edit-a-phone-number",
    content: "From the **Action** menu, select **Edit**."
  }, {
    heading: "edit-a-phone-number",
    content: "Update the phone number details as needed."
  }, {
    heading: "edit-a-phone-number",
    content: "Select **Save** to apply your changes."
  }, {
    heading: "delete-a-phone-number",
    content: "To remove an imported phone number:"
  }, {
    heading: "delete-a-phone-number",
    content: "In the navigation sidebar, select **Phone Numbers**."
  }, {
    heading: "delete-a-phone-number",
    content: "Locate the phone number you want to delete."
  }, {
    heading: "delete-a-phone-number",
    content: "From the **Action** menu, select **Delete**."
  }, {
    heading: "delete-a-phone-number",
    content: "Confirm the deletion."
  }, {
    heading: "delete-a-phone-number",
    content: "Deleting a phone number removes it from all agents and campaigns that use it. Ensure no active inbound agents or outbound campaigns depend on this number before deleting."
  }, {
    heading: "next-steps",
    content: "Set up a campaign: Use your imported phone numbers to create outbound calling campaigns"
  }, {
    heading: "next-steps",
    content: "Publish your agent: Publish agents to use in your campaigns"
  }, {
    heading: "next-steps",
    content: "Handle inbound calls: Associate your number with an agent to answer inbound calls"
  }],
  headings: [{
    id: "what-is-elastic-sip-trunk",
    content: "What is Elastic SIP Trunk?"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "import-a-phone-number",
    content: "Import a phone number"
  }, {
    id: "manage-imported-numbers",
    content: "Manage imported numbers"
  }, {
    id: "edit-a-phone-number",
    content: "Edit a phone number"
  }, {
    id: "delete-a-phone-number",
    content: "Delete a phone number"
  }, {
    id: "next-steps",
    content: "Next steps"
  }]
};
export let toc = [{
  depth: 2,
  url: "#what-is-elastic-sip-trunk",
  title: _jsx(_Fragment, {
    children: "What is Elastic SIP Trunk?"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#import-a-phone-number",
  title: _jsx(_Fragment, {
    children: "Import a phone number"
  })
}, {
  depth: 2,
  url: "#manage-imported-numbers",
  title: _jsx(_Fragment, {
    children: "Manage imported numbers"
  })
}, {
  depth: 3,
  url: "#edit-a-phone-number",
  title: _jsx(_Fragment, {
    children: "Edit a phone number"
  })
}, {
  depth: 3,
  url: "#delete-a-phone-number",
  title: _jsx(_Fragment, {
    children: "Delete a phone number"
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
    strong: "strong",
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
      children: "Import phone numbers to use for inbound and outbound calls with your deployed agents."
    }), `
`, _jsx(_components.h2, {
      id: "what-is-elastic-sip-trunk",
      children: "What is Elastic SIP Trunk?"
    }), `
`, _jsx(_components.p, {
      children: "Elastic SIP Trunk is the connection layer between traditional phone networks and your deployed agents. When a caller dials your phone number, their carrier routes the call over the public telephone network. Elastic SIP Trunk translates that call into a format your agent can process, and passes it to your configured agent."
    }), `
`, _jsx(_components.p, {
      children: "The term elastic means the trunk scales automatically with call volume; the same configuration handles one call or thousands without any changes at your end."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["An active account with Elastic SIP Trunk configured. See ", _jsx(_components.a, {
          href: "sip-trunk",
          children: "Set up SIP trunk"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "A deployed agent."
      }), `
`, _jsx(_components.li, {
        children: "A phone number configured in your SIP trunk."
      }), `
`, _jsx(_components.li, {
        children: "SIP domain and credentials from your SIP trunk account."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "import-a-phone-number",
      children: "Import a phone number"
    }), `
`, _jsx(_components.p, {
      children: "To import a phone number from your SIP trunk:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
            children: "Phone Numbers"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/console/phone-numbers.png",
            alt: "Phone numbers list"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select ", _jsx(_components.strong, {
            children: "Add Phone Number"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/console/add-phone-number.png",
            alt: "Import phone number"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Fill in the required information:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Phone Number"
            }), ": Enter the phone number in E.164 format (for example, ", _jsx(_components.code, {
              children: "+1234567890"
            }), ")."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Vendor"
            }), ": Select ", _jsx(_components.code, {
              children: "SIP Trunk"
            }), " (currently the only supported vendor)."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Display Name"
            }), ": Enter a descriptive name to help you identify this number."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "SIP Trunk Address"
            }), ": Enter your SIP Trunk domain."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Transport Protocol"
            }), ": Select the protocol for SIP communication. Choose ", _jsx(_components.strong, {
              children: "TLS"
            }), " if Secure Trunking is enabled in your SIP trunk, otherwise choose ", _jsx(_components.strong, {
              children: "TCP"
            }), " or ", _jsx(_components.strong, {
              children: "UDP"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "SIP Trunk Username"
            }), ": Enter your SIP Trunk username."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "SIP Trunk Password"
            }), ": Enter your SIP Trunk password."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select ", _jsx(_components.strong, {
            children: "Add Phone Number"
          }), " to import the phone number."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Your imported phone number is now available for use in inbound and outbound calls."
    }), `
`, _jsx(_components.h2, {
      id: "manage-imported-numbers",
      children: "Manage imported numbers"
    }), `
`, _jsx(_components.h3, {
      id: "edit-a-phone-number",
      children: "Edit a phone number"
    }), `
`, _jsx(_components.p, {
      children: "To update the configuration of an imported phone number:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
          children: "Phone Numbers"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Locate the phone number you want to edit."
      }), `
`, _jsxs(_components.li, {
        children: ["From the ", _jsx(_components.strong, {
          children: "Action"
        }), " menu, select ", _jsx(_components.strong, {
          children: "Edit"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Update the phone number details as needed."
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Save"
        }), " to apply your changes."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "delete-a-phone-number",
      children: "Delete a phone number"
    }), `
`, _jsx(_components.p, {
      children: "To remove an imported phone number:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
          children: "Phone Numbers"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Locate the phone number you want to delete."
      }), `
`, _jsxs(_components.li, {
        children: ["From the ", _jsx(_components.strong, {
          children: "Action"
        }), " menu, select ", _jsx(_components.strong, {
          children: "Delete"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Confirm the deletion."
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "Caution"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Deleting a phone number removes it from all agents and campaigns that use it. Ensure no active inbound agents or outbound campaigns depend on this number before deleting."
        })
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
        }), ": Use your imported phone numbers to create outbound calling campaigns"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "deploy-agent",
          children: "Publish your agent"
        }), ": Publish agents to use in your campaigns"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "inbound",
          children: "Handle inbound calls"
        }), ": Associate your number with an agent to answer inbound calls"]
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
