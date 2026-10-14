import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "HubSpot Connector",
  description: "Connect HubSpot and let your agents work with HubSpot contacts and tickets."
};
export let _markdown = `

HubSpot Connector lets your agent use your [HubSpot](https://www.hubspot.com/) account during conversations. After you attach the HubSpot connector to an agent, the agent can work with HubSpot contacts and tickets.

## What the connector enables [#what-the-connector-enables]

When HubSpot is attached to an agent, it exposes tools for:

* Listing contacts
* Searching contacts
* Getting contact details
* Creating contacts
* Updating contacts
* Deleting contacts
* Listing tickets
* Searching tickets
* Getting ticket details
* Creating tickets
* Updating tickets
* Deleting tickets

## Prerequisites [#prerequisites]

* A [HubSpot account](https://app.hubspot.com/login).
* Permission to authorize the HubSpot app for your workspace.
* An agent in the Agora project where you want to use the connector.

## Connect HubSpot [#connect-hubspot]

1. In the navigation sidebar, select **Integrations**.
2. Open the **Connectors** tab.
3. Find **HubSpot**.
4. Select **Connect**.
   ![](https://assets-docs.agora.io/images/console/connectors.png)
5. Complete the HubSpot OAuth flow in the new browser tab.
6. Return to the **Connectors** tab and wait for the connection status to update.

After connection succeeds, HubSpot appears under **Connected**.

## Attach HubSpot to an agent [#attach-hubspot-to-an-agent]

1. In the navigation sidebar, select **Agents**.
2. Select your agent from the list.
3. From the **Action** menu, select **Edit Agent**.
4. Go to the **Actions** tab.
5. Under **Connectors**, select **Add connectors**
6. Select HubSpot.
7. Save the agent.

After you attach the connector, your agent can call HubSpot tools during testing and live conversations.

## Prompting tips [#prompting-tips]

Tell the agent exactly when to use HubSpot. For example:

\`\`\`
When the user asks about ticket status, search HubSpot tickets first. When the user wants to update their contact email, update the HubSpot contact after confirming the new email address.
\`\`\`

Good prompt patterns:

* Confirm identity before reading or changing CRM data.
* Ask for missing fields before create or update operations.
* Summarize changes after a tool call succeeds.
* Avoid destructive actions unless the user clearly confirms.

## Test the connector [#test-the-connector]

Use the agent's test panel to verify:

1. The agent can find a known contact.
2. The agent can find or create a ticket.
3. The agent handles HubSpot errors gracefully.

If a test fails, check both the agent's prompt and the HubSpot connection status.

## Disconnect HubSpot [#disconnect-hubspot]

1. In the navigation sidebar, select **Integrations**.
2. Open the **Connectors** tab.
3. Under **Connected**, find HubSpot.
4. Select **Disconnect**.

Disconnecting HubSpot removes connector access for agents that depend on it.

## Troubleshooting [#troubleshooting]

| Issue                                                 | Solution                                                                              |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Connect opens the OAuth page but status never changes | Wait a few seconds, then refresh the connection list.                                 |
| Agent cannot use HubSpot after connection             | Make sure the connector is attached to that agent.                                    |
| Agent gives poor results                              | Tighten the system prompt with clearer rules for search, create, and update behavior. |
| Permission issues in HubSpot                          | Reconnect with an account that has the required HubSpot scopes.                       |

## Next steps [#next-steps]

* [Manage integrations](integrations): Manage connectors and other reusable resources
* [Customize your agent](customize-agent): Attach connectors from the Actions tab
* [Test your agent](test-agent): Validate HubSpot-backed workflows before deployment
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "HubSpot Connector lets your agent use your HubSpot account during conversations. After you attach the HubSpot connector to an agent, the agent can work with HubSpot contacts and tickets."
  }, {
    heading: "what-the-connector-enables",
    content: "When HubSpot is attached to an agent, it exposes tools for:"
  }, {
    heading: "what-the-connector-enables",
    content: "Listing contacts"
  }, {
    heading: "what-the-connector-enables",
    content: "Searching contacts"
  }, {
    heading: "what-the-connector-enables",
    content: "Getting contact details"
  }, {
    heading: "what-the-connector-enables",
    content: "Creating contacts"
  }, {
    heading: "what-the-connector-enables",
    content: "Updating contacts"
  }, {
    heading: "what-the-connector-enables",
    content: "Deleting contacts"
  }, {
    heading: "what-the-connector-enables",
    content: "Listing tickets"
  }, {
    heading: "what-the-connector-enables",
    content: "Searching tickets"
  }, {
    heading: "what-the-connector-enables",
    content: "Getting ticket details"
  }, {
    heading: "what-the-connector-enables",
    content: "Creating tickets"
  }, {
    heading: "what-the-connector-enables",
    content: "Updating tickets"
  }, {
    heading: "what-the-connector-enables",
    content: "Deleting tickets"
  }, {
    heading: "prerequisites",
    content: "A HubSpot account."
  }, {
    heading: "prerequisites",
    content: "Permission to authorize the HubSpot app for your workspace."
  }, {
    heading: "prerequisites",
    content: "An agent in the Agora project where you want to use the connector."
  }, {
    heading: "connect-hubspot",
    content: "In the navigation sidebar, select **Integrations**."
  }, {
    heading: "connect-hubspot",
    content: "Open the **Connectors** tab."
  }, {
    heading: "connect-hubspot",
    content: "Find **HubSpot**."
  }, {
    heading: "connect-hubspot",
    content: "Select **Connect**."
  }, {
    heading: "connect-hubspot",
    content: "Complete the HubSpot OAuth flow in the new browser tab."
  }, {
    heading: "connect-hubspot",
    content: "Return to the **Connectors** tab and wait for the connection status to update."
  }, {
    heading: "connect-hubspot",
    content: "After connection succeeds, HubSpot appears under **Connected**."
  }, {
    heading: "attach-hubspot-to-an-agent",
    content: "In the navigation sidebar, select **Agents**."
  }, {
    heading: "attach-hubspot-to-an-agent",
    content: "Select your agent from the list."
  }, {
    heading: "attach-hubspot-to-an-agent",
    content: "From the **Action** menu, select **Edit Agent**."
  }, {
    heading: "attach-hubspot-to-an-agent",
    content: "Go to the **Actions** tab."
  }, {
    heading: "attach-hubspot-to-an-agent",
    content: "Under **Connectors**, select **Add connectors**"
  }, {
    heading: "attach-hubspot-to-an-agent",
    content: "Select HubSpot."
  }, {
    heading: "attach-hubspot-to-an-agent",
    content: "Save the agent."
  }, {
    heading: "attach-hubspot-to-an-agent",
    content: "After you attach the connector, your agent can call HubSpot tools during testing and live conversations."
  }, {
    heading: "prompting-tips",
    content: "Tell the agent exactly when to use HubSpot. For example:"
  }, {
    heading: "prompting-tips",
    content: "Good prompt patterns:"
  }, {
    heading: "prompting-tips",
    content: "Confirm identity before reading or changing CRM data."
  }, {
    heading: "prompting-tips",
    content: "Ask for missing fields before create or update operations."
  }, {
    heading: "prompting-tips",
    content: "Summarize changes after a tool call succeeds."
  }, {
    heading: "prompting-tips",
    content: "Avoid destructive actions unless the user clearly confirms."
  }, {
    heading: "test-the-connector",
    content: "Use the agent's test panel to verify:"
  }, {
    heading: "test-the-connector",
    content: "The agent can find a known contact."
  }, {
    heading: "test-the-connector",
    content: "The agent can find or create a ticket."
  }, {
    heading: "test-the-connector",
    content: "The agent handles HubSpot errors gracefully."
  }, {
    heading: "test-the-connector",
    content: "If a test fails, check both the agent's prompt and the HubSpot connection status."
  }, {
    heading: "disconnect-hubspot",
    content: "In the navigation sidebar, select **Integrations**."
  }, {
    heading: "disconnect-hubspot",
    content: "Open the **Connectors** tab."
  }, {
    heading: "disconnect-hubspot",
    content: "Under **Connected**, find HubSpot."
  }, {
    heading: "disconnect-hubspot",
    content: "Select **Disconnect**."
  }, {
    heading: "disconnect-hubspot",
    content: "Disconnecting HubSpot removes connector access for agents that depend on it."
  }, {
    heading: "troubleshooting",
    content: "Issue"
  }, {
    heading: "troubleshooting",
    content: "Solution"
  }, {
    heading: "troubleshooting",
    content: "Connect opens the OAuth page but status never changes"
  }, {
    heading: "troubleshooting",
    content: "Wait a few seconds, then refresh the connection list."
  }, {
    heading: "troubleshooting",
    content: "Agent cannot use HubSpot after connection"
  }, {
    heading: "troubleshooting",
    content: "Make sure the connector is attached to that agent."
  }, {
    heading: "troubleshooting",
    content: "Agent gives poor results"
  }, {
    heading: "troubleshooting",
    content: "Tighten the system prompt with clearer rules for search, create, and update behavior."
  }, {
    heading: "troubleshooting",
    content: "Permission issues in HubSpot"
  }, {
    heading: "troubleshooting",
    content: "Reconnect with an account that has the required HubSpot scopes."
  }, {
    heading: "next-steps",
    content: "Manage integrations: Manage connectors and other reusable resources"
  }, {
    heading: "next-steps",
    content: "Customize your agent: Attach connectors from the Actions tab"
  }, {
    heading: "next-steps",
    content: "Test your agent: Validate HubSpot-backed workflows before deployment"
  }],
  headings: [{
    id: "what-the-connector-enables",
    content: "What the connector enables"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "connect-hubspot",
    content: "Connect HubSpot"
  }, {
    id: "attach-hubspot-to-an-agent",
    content: "Attach HubSpot to an agent"
  }, {
    id: "prompting-tips",
    content: "Prompting tips"
  }, {
    id: "test-the-connector",
    content: "Test the connector"
  }, {
    id: "disconnect-hubspot",
    content: "Disconnect HubSpot"
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
  url: "#what-the-connector-enables",
  title: _jsx(_Fragment, {
    children: "What the connector enables"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#connect-hubspot",
  title: _jsx(_Fragment, {
    children: "Connect HubSpot"
  })
}, {
  depth: 2,
  url: "#attach-hubspot-to-an-agent",
  title: _jsx(_Fragment, {
    children: "Attach HubSpot to an agent"
  })
}, {
  depth: 2,
  url: "#prompting-tips",
  title: _jsx(_Fragment, {
    children: "Prompting tips"
  })
}, {
  depth: 2,
  url: "#test-the-connector",
  title: _jsx(_Fragment, {
    children: "Test the connector"
  })
}, {
  depth: 2,
  url: "#disconnect-hubspot",
  title: _jsx(_Fragment, {
    children: "Disconnect HubSpot"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["HubSpot Connector lets your agent use your ", _jsx(_components.a, {
        href: "https://www.hubspot.com/",
        children: "HubSpot"
      }), " account during conversations. After you attach the HubSpot connector to an agent, the agent can work with HubSpot contacts and tickets."]
    }), `
`, _jsx(_components.h2, {
      id: "what-the-connector-enables",
      children: "What the connector enables"
    }), `
`, _jsx(_components.p, {
      children: "When HubSpot is attached to an agent, it exposes tools for:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Listing contacts"
      }), `
`, _jsx(_components.li, {
        children: "Searching contacts"
      }), `
`, _jsx(_components.li, {
        children: "Getting contact details"
      }), `
`, _jsx(_components.li, {
        children: "Creating contacts"
      }), `
`, _jsx(_components.li, {
        children: "Updating contacts"
      }), `
`, _jsx(_components.li, {
        children: "Deleting contacts"
      }), `
`, _jsx(_components.li, {
        children: "Listing tickets"
      }), `
`, _jsx(_components.li, {
        children: "Searching tickets"
      }), `
`, _jsx(_components.li, {
        children: "Getting ticket details"
      }), `
`, _jsx(_components.li, {
        children: "Creating tickets"
      }), `
`, _jsx(_components.li, {
        children: "Updating tickets"
      }), `
`, _jsx(_components.li, {
        children: "Deleting tickets"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["A ", _jsx(_components.a, {
          href: "https://app.hubspot.com/login",
          children: "HubSpot account"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Permission to authorize the HubSpot app for your workspace."
      }), `
`, _jsx(_components.li, {
        children: "An agent in the Agora project where you want to use the connector."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "connect-hubspot",
      children: "Connect HubSpot"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
          children: "Integrations"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Open the ", _jsx(_components.strong, {
          children: "Connectors"
        }), " tab."]
      }), `
`, _jsxs(_components.li, {
        children: ["Find ", _jsx(_components.strong, {
          children: "HubSpot"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Connect"
        }), `.
`, _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/console/connectors.png",
          alt: ""
        })]
      }), `
`, _jsx(_components.li, {
        children: "Complete the HubSpot OAuth flow in the new browser tab."
      }), `
`, _jsxs(_components.li, {
        children: ["Return to the ", _jsx(_components.strong, {
          children: "Connectors"
        }), " tab and wait for the connection status to update."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["After connection succeeds, HubSpot appears under ", _jsx(_components.strong, {
        children: "Connected"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "attach-hubspot-to-an-agent",
      children: "Attach HubSpot to an agent"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
          children: "Agents"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Select your agent from the list."
      }), `
`, _jsxs(_components.li, {
        children: ["From the ", _jsx(_components.strong, {
          children: "Action"
        }), " menu, select ", _jsx(_components.strong, {
          children: "Edit Agent"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Go to the ", _jsx(_components.strong, {
          children: "Actions"
        }), " tab."]
      }), `
`, _jsxs(_components.li, {
        children: ["Under ", _jsx(_components.strong, {
          children: "Connectors"
        }), ", select ", _jsx(_components.strong, {
          children: "Add connectors"
        })]
      }), `
`, _jsx(_components.li, {
        children: "Select HubSpot."
      }), `
`, _jsx(_components.li, {
        children: "Save the agent."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "After you attach the connector, your agent can call HubSpot tools during testing and live conversations."
    }), `
`, _jsx(_components.h2, {
      id: "prompting-tips",
      children: "Prompting tips"
    }), `
`, _jsx(_components.p, {
      children: "Tell the agent exactly when to use HubSpot. For example:"
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
              children: "When the user asks about ticket status, search HubSpot tickets first. When the user wants to update their contact email, update the HubSpot contact after confirming the new email address."
            })
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Good prompt patterns:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Confirm identity before reading or changing CRM data."
      }), `
`, _jsx(_components.li, {
        children: "Ask for missing fields before create or update operations."
      }), `
`, _jsx(_components.li, {
        children: "Summarize changes after a tool call succeeds."
      }), `
`, _jsx(_components.li, {
        children: "Avoid destructive actions unless the user clearly confirms."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "test-the-connector",
      children: "Test the connector"
    }), `
`, _jsx(_components.p, {
      children: "Use the agent's test panel to verify:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "The agent can find a known contact."
      }), `
`, _jsx(_components.li, {
        children: "The agent can find or create a ticket."
      }), `
`, _jsx(_components.li, {
        children: "The agent handles HubSpot errors gracefully."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "If a test fails, check both the agent's prompt and the HubSpot connection status."
    }), `
`, _jsx(_components.h2, {
      id: "disconnect-hubspot",
      children: "Disconnect HubSpot"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
          children: "Integrations"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Open the ", _jsx(_components.strong, {
          children: "Connectors"
        }), " tab."]
      }), `
`, _jsxs(_components.li, {
        children: ["Under ", _jsx(_components.strong, {
          children: "Connected"
        }), ", find HubSpot."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Disconnect"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Disconnecting HubSpot removes connector access for agents that depend on it."
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
            children: "Connect opens the OAuth page but status never changes"
          }), _jsx(_components.td, {
            children: "Wait a few seconds, then refresh the connection list."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Agent cannot use HubSpot after connection"
          }), _jsx(_components.td, {
            children: "Make sure the connector is attached to that agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Agent gives poor results"
          }), _jsx(_components.td, {
            children: "Tighten the system prompt with clearer rules for search, create, and update behavior."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Permission issues in HubSpot"
          }), _jsx(_components.td, {
            children: "Reconnect with an account that has the required HubSpot scopes."
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
          href: "integrations",
          children: "Manage integrations"
        }), ": Manage connectors and other reusable resources"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "customize-agent",
          children: "Customize your agent"
        }), ": Attach connectors from the Actions tab"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "test-agent",
          children: "Test your agent"
        }), ": Validate HubSpot-backed workflows before deployment"]
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
