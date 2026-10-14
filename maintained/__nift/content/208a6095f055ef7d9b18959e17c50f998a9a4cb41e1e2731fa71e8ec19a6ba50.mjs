import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Publish your agent",
  description: "Publish your tested agent to production environments."
};
export let _markdown = `

After testing your agent and confirming it works as expected, you can publish it to production. Publishing an agent makes it available to handle inbound and outbound calls.

## Prerequisites [#prerequisites]

* Your agent is fully configured with valid credentials.
* You have tested your agent and verified it responds correctly.

## Publish to production [#publish-to-production]

To publish your agent:

1. In the navigation sidebar, select **Agents**, then select the agent you want to publish.

2. Select the **Publish** button at the top of the agent editor to open the publishing panel.

   ![Publish agent panel](https://assets-docs.agora.io/images/console/publish-agent.png)

3. Review and configure the deployment settings:

   * **Project**: Displays the Agora project the agent will be published to. Billing and usage are tracked under this project.
   * **Note**: Add a note for this deployment for your reference. This helps you identify the purpose or version of the deployment.
   * **Cost Overview**: Review the billing breakdown for ASR, LLM, TTS, and agent hosting services. This shows how agent usage is billed.

4. Select the **Publish Agent** button to continue.

Your agent is now published and available to handle inbound and outbound calls.

## Manage deployed agents [#manage-deployed-agents]

To view and manage your deployed agents:

1. In the navigation sidebar, select **Agents**.
2. The Agents page displays all your deployed agents with their Agent ID, Project Name, App ID, and current Status.

From the Agents page, you can:

* Monitor agent status and availability
* Pause or resume an agent
* Edit or delete an agent
* Rename an agent
* Duplicate an agent
* [Embed an agent](connect-agent)

<CalloutContainer type="warning">
  <CalloutTitle>
    Caution
  </CalloutTitle>

  <CalloutDescription>
    Pausing or deleting an agent immediately stops it from serving requests in the associated projects. Ensure no active integrations or services depend on this agent.
  </CalloutDescription>
</CalloutContainer>

## Update a deployed agent [#update-a-deployed-agent]

To update a deployed agent with changes:

1. From the **Action** menu, select **Edit Agent**.
2. Make your desired changes in the agent editor.
3. Select **Re-Publish Agent**.
4. Confirm the deployment.

The updated configuration replaces the existing deployment in the selected projects.

## Next steps [#next-steps]

After deploying your agent:

* [Connect your agent](connect-agent): Integrate your agent with your app
* [Set up a campaign](campaign): Set up an outbound calling campaign using your agent
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "After testing your agent and confirming it works as expected, you can publish it to production. Publishing an agent makes it available to handle inbound and outbound calls."
  }, {
    heading: "prerequisites",
    content: "Your agent is fully configured with valid credentials."
  }, {
    heading: "prerequisites",
    content: "You have tested your agent and verified it responds correctly."
  }, {
    heading: "publish-to-production",
    content: "To publish your agent:"
  }, {
    heading: "publish-to-production",
    content: "In the navigation sidebar, select **Agents**, then select the agent you want to publish."
  }, {
    heading: "publish-to-production",
    content: "Select the **Publish** button at the top of the agent editor to open the publishing panel."
  }, {
    heading: "publish-to-production",
    content: "Review and configure the deployment settings:"
  }, {
    heading: "publish-to-production",
    content: "**Project**: Displays the Agora project the agent will be published to. Billing and usage are tracked under this project."
  }, {
    heading: "publish-to-production",
    content: "**Note**: Add a note for this deployment for your reference. This helps you identify the purpose or version of the deployment."
  }, {
    heading: "publish-to-production",
    content: "**Cost Overview**: Review the billing breakdown for ASR, LLM, TTS, and agent hosting services. This shows how agent usage is billed."
  }, {
    heading: "publish-to-production",
    content: "Select the **Publish Agent** button to continue."
  }, {
    heading: "publish-to-production",
    content: "Your agent is now published and available to handle inbound and outbound calls."
  }, {
    heading: "manage-deployed-agents",
    content: "To view and manage your deployed agents:"
  }, {
    heading: "manage-deployed-agents",
    content: "In the navigation sidebar, select **Agents**."
  }, {
    heading: "manage-deployed-agents",
    content: "The Agents page displays all your deployed agents with their Agent ID, Project Name, App ID, and current Status."
  }, {
    heading: "manage-deployed-agents",
    content: "From the Agents page, you can:"
  }, {
    heading: "manage-deployed-agents",
    content: "Monitor agent status and availability"
  }, {
    heading: "manage-deployed-agents",
    content: "Pause or resume an agent"
  }, {
    heading: "manage-deployed-agents",
    content: "Edit or delete an agent"
  }, {
    heading: "manage-deployed-agents",
    content: "Rename an agent"
  }, {
    heading: "manage-deployed-agents",
    content: "Duplicate an agent"
  }, {
    heading: "manage-deployed-agents",
    content: "Embed an agent"
  }, {
    heading: "manage-deployed-agents",
    content: "Pausing or deleting an agent immediately stops it from serving requests in the associated projects. Ensure no active integrations or services depend on this agent."
  }, {
    heading: "update-a-deployed-agent",
    content: "To update a deployed agent with changes:"
  }, {
    heading: "update-a-deployed-agent",
    content: "From the **Action** menu, select **Edit Agent**."
  }, {
    heading: "update-a-deployed-agent",
    content: "Make your desired changes in the agent editor."
  }, {
    heading: "update-a-deployed-agent",
    content: "Select **Re-Publish Agent**."
  }, {
    heading: "update-a-deployed-agent",
    content: "Confirm the deployment."
  }, {
    heading: "update-a-deployed-agent",
    content: "The updated configuration replaces the existing deployment in the selected projects."
  }, {
    heading: "next-steps",
    content: "After deploying your agent:"
  }, {
    heading: "next-steps",
    content: "Connect your agent: Integrate your agent with your app"
  }, {
    heading: "next-steps",
    content: "Set up a campaign: Set up an outbound calling campaign using your agent"
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "publish-to-production",
    content: "Publish to production"
  }, {
    id: "manage-deployed-agents",
    content: "Manage deployed agents"
  }, {
    id: "update-a-deployed-agent",
    content: "Update a deployed agent"
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
  url: "#publish-to-production",
  title: _jsx(_Fragment, {
    children: "Publish to production"
  })
}, {
  depth: 2,
  url: "#manage-deployed-agents",
  title: _jsx(_Fragment, {
    children: "Manage deployed agents"
  })
}, {
  depth: 2,
  url: "#update-a-deployed-agent",
  title: _jsx(_Fragment, {
    children: "Update a deployed agent"
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
    h2: "h2",
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
      children: "After testing your agent and confirming it works as expected, you can publish it to production. Publishing an agent makes it available to handle inbound and outbound calls."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Your agent is fully configured with valid credentials."
      }), `
`, _jsx(_components.li, {
        children: "You have tested your agent and verified it responds correctly."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "publish-to-production",
      children: "Publish to production"
    }), `
`, _jsx(_components.p, {
      children: "To publish your agent:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
            children: "Agents"
          }), ", then select the agent you want to publish."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select the ", _jsx(_components.strong, {
            children: "Publish"
          }), " button at the top of the agent editor to open the publishing panel."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/console/publish-agent.png",
            alt: "Publish agent panel"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Review and configure the deployment settings:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Project"
            }), ": Displays the Agora project the agent will be published to. Billing and usage are tracked under this project."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Note"
            }), ": Add a note for this deployment for your reference. This helps you identify the purpose or version of the deployment."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Cost Overview"
            }), ": Review the billing breakdown for ASR, LLM, TTS, and agent hosting services. This shows how agent usage is billed."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select the ", _jsx(_components.strong, {
            children: "Publish Agent"
          }), " button to continue."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Your agent is now published and available to handle inbound and outbound calls."
    }), `
`, _jsx(_components.h2, {
      id: "manage-deployed-agents",
      children: "Manage deployed agents"
    }), `
`, _jsx(_components.p, {
      children: "To view and manage your deployed agents:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
          children: "Agents"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "The Agents page displays all your deployed agents with their Agent ID, Project Name, App ID, and current Status."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "From the Agents page, you can:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Monitor agent status and availability"
      }), `
`, _jsx(_components.li, {
        children: "Pause or resume an agent"
      }), `
`, _jsx(_components.li, {
        children: "Edit or delete an agent"
      }), `
`, _jsx(_components.li, {
        children: "Rename an agent"
      }), `
`, _jsx(_components.li, {
        children: "Duplicate an agent"
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "connect-agent",
          children: "Embed an agent"
        })
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "Caution"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Pausing or deleting an agent immediately stops it from serving requests in the associated projects. Ensure no active integrations or services depend on this agent."
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "update-a-deployed-agent",
      children: "Update a deployed agent"
    }), `
`, _jsx(_components.p, {
      children: "To update a deployed agent with changes:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["From the ", _jsx(_components.strong, {
          children: "Action"
        }), " menu, select ", _jsx(_components.strong, {
          children: "Edit Agent"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Make your desired changes in the agent editor."
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Re-Publish Agent"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Confirm the deployment."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The updated configuration replaces the existing deployment in the selected projects."
    }), `
`, _jsx(_components.h2, {
      id: "next-steps",
      children: "Next steps"
    }), `
`, _jsx(_components.p, {
      children: "After deploying your agent:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "connect-agent",
          children: "Connect your agent"
        }), ": Integrate your agent with your app"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "campaign",
          children: "Set up a campaign"
        }), ": Set up an outbound calling campaign using your agent"]
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
