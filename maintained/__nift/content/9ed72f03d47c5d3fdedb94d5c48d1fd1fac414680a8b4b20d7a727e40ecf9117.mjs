import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Manage integrations",
  description: "Manage API credentials, knowledge bases, connectors, custom tools, and MCP servers for your agents."
};
export let _markdown = `

Use Integrations to centrally manage knowledge bases, MCP servers, custom tools, and connectors, and use Model Credentials to manage your AI provider API keys. Store a resource once, then attach it to any agent in the same project.

## Credentials [#credentials]

To save your credentials for a vendor:

1. In the navigation sidebar, select **Model Credentials**.
2. Select **Create Credential**.
   ![Add credential dialog](https://assets-docs.agora.io/images/console/create-credential.png)
3. Enter a descriptive **Name** for your credential.
4. From the **Type** dropdown, select **ASR/STT**, **LLM**, **TTS**, or **MLLM**.
5. Select the **Vendor** from the dropdown for which you want to add the credential.
6. Paste your provider's API **Key** and complete any other required fields, such as **Region**, which vary by vendor.
7. Select **Create**.

After you add a credential, you can select it from the **Credentials** dropdown when customizing your ASR, LLM, TTS, or MLLM configuration for any agent.

You can edit and delete credentials using the **Action** menu in the credential list.

<CalloutContainer type="warning">
  <CalloutTitle>
    Caution
  </CalloutTitle>

  <CalloutDescription>
    Deleting a credential affects all agents that use it. Verify that no active agents depend on the credential before deleting, or update those agents to use a different credential first.
  </CalloutDescription>
</CalloutContainer>

### Credential security [#credential-security]

Credentials stored in Model Credentials are:

* Encrypted and securely stored in your Agora account
* Only accessible to users with access to your Agora project
* Never exposed in agent configurations or logs

<CalloutContainer type="success">
  <CalloutTitle>
    Best practices
  </CalloutTitle>

  <CalloutDescription>
    * Use descriptive names to distinguish between development, staging, and production credentials.
    * Rotate API keys regularly according to your security policies.
    * Delete unused credentials to minimize security exposure.
  </CalloutDescription>
</CalloutContainer>

## Knowledge bases [#knowledge-bases]

A knowledge base provides your agent with additional context by supplying reference documents that the agent can draw on during conversations. Once created, knowledge bases can be attached to any agent from the **Actions** panel.

To create a knowledge base:

1. In the navigation sidebar, select **Integrations**.
2. At the top of the page, select **Knowledge Bases**.
3. Select **Create Knowledge Base**.
   ![Create knowledge base dialog](https://assets-docs.agora.io/images/console/create-knowledge-base.png)
4. Enter a **Knowledge Base Name** and **Description**.
5. Upload one or more files by selecting **Choose files**.
6. Select **Create**.

<CalloutContainer type="info">
  <CalloutTitle>
    Info
  </CalloutTitle>

  <CalloutDescription>
    Supported file formats: PDF, DOCX. Maximum file size: 20 MB per file.
  </CalloutDescription>
</CalloutContainer>

You can edit or delete knowledge bases using the **Action** menu in the knowledge base list.

## MCP servers [#mcp-servers]

MCP (Model Context Protocol) servers extend your agent's capabilities by enabling it to call tools provided by external services. Once added to Integrations, MCP servers can be attached to any agent from the **Actions** panel.

To add an MCP server:

1. In the navigation sidebar, select **Integrations**.
2. At the top of the page, select **MCPs**.
3. Select **Create MCP Server**.
   ![Add MCP server dialog](https://assets-docs.agora.io/images/console/create-mcp.png)
4. Enter a descriptive **Name** for the MCP server.
5. Enter the **Endpoint** URL.
6. Set the server **Protocol** to **SSE** or **HTTP**.
7. Set the &#x2A;*Timeout (ms)**. If the server does not respond within this duration, the agent stops waiting and continues executing.
8. Add **HTTP Headers** for authentication or additional configuration. Optional.
9. Add **Query Parameters** to append to the server URL. Optional.
10. Select **Create**.

You can edit, delete, or check the status of an MCP server using the **Action** menu in the MCP server list.

## Custom tools [#custom-tools]

Custom tools let you define reusable HTTP tools for your agents.

To create a custom tool:

1. In the navigation sidebar, select **Integrations**.
2. At the top of the page, select **Custom Tools**.
3. Select **Add Custom Tool**.
   ![Add custom tool dialog](https://assets-docs.agora.io/images/console/new-custom-tool.png)
4. Configure the request, function schema, and optional body template. See [Custom tools](custom-tools) for detailed setup guidance.
5. Save the tool.

After you create a custom tool, attach it to an agent from the agent editor **Actions** tab.

## Connectors [#connectors]

Connectors provide built-in integrations that agents can use without requiring you to build your own HTTP or MCP layer.

Currently available:

* [HubSpot Connector](hubspot-connector): Connect HubSpot and attach it to agents that need contact and ticket workflows

After you connect, attach the connector to an agent from the agent editor **Actions** tab.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Use Integrations to centrally manage knowledge bases, MCP servers, custom tools, and connectors, and use Model Credentials to manage your AI provider API keys. Store a resource once, then attach it to any agent in the same project."
  }, {
    heading: "credentials",
    content: "To save your credentials for a vendor:"
  }, {
    heading: "credentials",
    content: "In the navigation sidebar, select **Model Credentials**."
  }, {
    heading: "credentials",
    content: "Select **Create Credential**."
  }, {
    heading: "credentials",
    content: "Enter a descriptive **Name** for your credential."
  }, {
    heading: "credentials",
    content: "From the **Type** dropdown, select **ASR/STT**, **LLM**, **TTS**, or **MLLM**."
  }, {
    heading: "credentials",
    content: "Select the **Vendor** from the dropdown for which you want to add the credential."
  }, {
    heading: "credentials",
    content: "Paste your provider's API **Key** and complete any other required fields, such as **Region**, which vary by vendor."
  }, {
    heading: "credentials",
    content: "Select **Create**."
  }, {
    heading: "credentials",
    content: "After you add a credential, you can select it from the **Credentials** dropdown when customizing your ASR, LLM, TTS, or MLLM configuration for any agent."
  }, {
    heading: "credentials",
    content: "You can edit and delete credentials using the **Action** menu in the credential list."
  }, {
    heading: "credentials",
    content: "Deleting a credential affects all agents that use it. Verify that no active agents depend on the credential before deleting, or update those agents to use a different credential first."
  }, {
    heading: "credential-security",
    content: "Credentials stored in Model Credentials are:"
  }, {
    heading: "credential-security",
    content: "Encrypted and securely stored in your Agora account"
  }, {
    heading: "credential-security",
    content: "Only accessible to users with access to your Agora project"
  }, {
    heading: "credential-security",
    content: "Never exposed in agent configurations or logs"
  }, {
    heading: "credential-security",
    content: "Use descriptive names to distinguish between development, staging, and production credentials."
  }, {
    heading: "credential-security",
    content: "Rotate API keys regularly according to your security policies."
  }, {
    heading: "credential-security",
    content: "Delete unused credentials to minimize security exposure."
  }, {
    heading: "knowledge-bases",
    content: "A knowledge base provides your agent with additional context by supplying reference documents that the agent can draw on during conversations. Once created, knowledge bases can be attached to any agent from the **Actions** panel."
  }, {
    heading: "knowledge-bases",
    content: "To create a knowledge base:"
  }, {
    heading: "knowledge-bases",
    content: "In the navigation sidebar, select **Integrations**."
  }, {
    heading: "knowledge-bases",
    content: "At the top of the page, select **Knowledge Bases**."
  }, {
    heading: "knowledge-bases",
    content: "Select **Create Knowledge Base**."
  }, {
    heading: "knowledge-bases",
    content: "Enter a **Knowledge Base Name** and **Description**."
  }, {
    heading: "knowledge-bases",
    content: "Upload one or more files by selecting **Choose files**."
  }, {
    heading: "knowledge-bases",
    content: "Select **Create**."
  }, {
    heading: "knowledge-bases",
    content: "Supported file formats: PDF, DOCX. Maximum file size: 20 MB per file."
  }, {
    heading: "knowledge-bases",
    content: "You can edit or delete knowledge bases using the **Action** menu in the knowledge base list."
  }, {
    heading: "mcp-servers",
    content: "MCP (Model Context Protocol) servers extend your agent's capabilities by enabling it to call tools provided by external services. Once added to Integrations, MCP servers can be attached to any agent from the **Actions** panel."
  }, {
    heading: "mcp-servers",
    content: "To add an MCP server:"
  }, {
    heading: "mcp-servers",
    content: "In the navigation sidebar, select **Integrations**."
  }, {
    heading: "mcp-servers",
    content: "At the top of the page, select **MCPs**."
  }, {
    heading: "mcp-servers",
    content: "Select **Create MCP Server**."
  }, {
    heading: "mcp-servers",
    content: "Enter a descriptive **Name** for the MCP server."
  }, {
    heading: "mcp-servers",
    content: "Enter the **Endpoint** URL."
  }, {
    heading: "mcp-servers",
    content: "Set the server **Protocol** to **SSE** or **HTTP**."
  }, {
    heading: "mcp-servers",
    content: "Set the &#x2A;*Timeout (ms)**. If the server does not respond within this duration, the agent stops waiting and continues executing."
  }, {
    heading: "mcp-servers",
    content: "Add **HTTP Headers** for authentication or additional configuration. Optional."
  }, {
    heading: "mcp-servers",
    content: "Add **Query Parameters** to append to the server URL. Optional."
  }, {
    heading: "mcp-servers",
    content: "Select **Create**."
  }, {
    heading: "mcp-servers",
    content: "You can edit, delete, or check the status of an MCP server using the **Action** menu in the MCP server list."
  }, {
    heading: "custom-tools",
    content: "Custom tools let you define reusable HTTP tools for your agents."
  }, {
    heading: "custom-tools",
    content: "To create a custom tool:"
  }, {
    heading: "custom-tools",
    content: "In the navigation sidebar, select **Integrations**."
  }, {
    heading: "custom-tools",
    content: "At the top of the page, select **Custom Tools**."
  }, {
    heading: "custom-tools",
    content: "Select **Add Custom Tool**."
  }, {
    heading: "custom-tools",
    content: "Configure the request, function schema, and optional body template. See Custom tools for detailed setup guidance."
  }, {
    heading: "custom-tools",
    content: "Save the tool."
  }, {
    heading: "custom-tools",
    content: "After you create a custom tool, attach it to an agent from the agent editor **Actions** tab."
  }, {
    heading: "connectors",
    content: "Connectors provide built-in integrations that agents can use without requiring you to build your own HTTP or MCP layer."
  }, {
    heading: "connectors",
    content: "Currently available:"
  }, {
    heading: "connectors",
    content: "HubSpot Connector: Connect HubSpot and attach it to agents that need contact and ticket workflows"
  }, {
    heading: "connectors",
    content: "After you connect, attach the connector to an agent from the agent editor **Actions** tab."
  }],
  headings: [{
    id: "credentials",
    content: "Credentials"
  }, {
    id: "credential-security",
    content: "Credential security"
  }, {
    id: "knowledge-bases",
    content: "Knowledge bases"
  }, {
    id: "mcp-servers",
    content: "MCP servers"
  }, {
    id: "custom-tools",
    content: "Custom tools"
  }, {
    id: "connectors",
    content: "Connectors"
  }]
};
export let toc = [{
  depth: 2,
  url: "#credentials",
  title: _jsx(_Fragment, {
    children: "Credentials"
  })
}, {
  depth: 3,
  url: "#credential-security",
  title: _jsx(_Fragment, {
    children: "Credential security"
  })
}, {
  depth: 2,
  url: "#knowledge-bases",
  title: _jsx(_Fragment, {
    children: "Knowledge bases"
  })
}, {
  depth: 2,
  url: "#mcp-servers",
  title: _jsx(_Fragment, {
    children: "MCP servers"
  })
}, {
  depth: 2,
  url: "#custom-tools",
  title: _jsx(_Fragment, {
    children: "Custom tools"
  })
}, {
  depth: 2,
  url: "#connectors",
  title: _jsx(_Fragment, {
    children: "Connectors"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      children: "Use Integrations to centrally manage knowledge bases, MCP servers, custom tools, and connectors, and use Model Credentials to manage your AI provider API keys. Store a resource once, then attach it to any agent in the same project."
    }), `
`, _jsx(_components.h2, {
      id: "credentials",
      children: "Credentials"
    }), `
`, _jsx(_components.p, {
      children: "To save your credentials for a vendor:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
          children: "Model Credentials"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Create Credential"
        }), `.
`, _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/console/create-credential.png",
          alt: "Add credential dialog"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Enter a descriptive ", _jsx(_components.strong, {
          children: "Name"
        }), " for your credential."]
      }), `
`, _jsxs(_components.li, {
        children: ["From the ", _jsx(_components.strong, {
          children: "Type"
        }), " dropdown, select ", _jsx(_components.strong, {
          children: "ASR/STT"
        }), ", ", _jsx(_components.strong, {
          children: "LLM"
        }), ", ", _jsx(_components.strong, {
          children: "TTS"
        }), ", or ", _jsx(_components.strong, {
          children: "MLLM"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select the ", _jsx(_components.strong, {
          children: "Vendor"
        }), " from the dropdown for which you want to add the credential."]
      }), `
`, _jsxs(_components.li, {
        children: ["Paste your provider's API ", _jsx(_components.strong, {
          children: "Key"
        }), " and complete any other required fields, such as ", _jsx(_components.strong, {
          children: "Region"
        }), ", which vary by vendor."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Create"
        }), "."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["After you add a credential, you can select it from the ", _jsx(_components.strong, {
        children: "Credentials"
      }), " dropdown when customizing your ASR, LLM, TTS, or MLLM configuration for any agent."]
    }), `
`, _jsxs(_components.p, {
      children: ["You can edit and delete credentials using the ", _jsx(_components.strong, {
        children: "Action"
      }), " menu in the credential list."]
    }), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "Caution"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Deleting a credential affects all agents that use it. Verify that no active agents depend on the credential before deleting, or update those agents to use a different credential first."
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "credential-security",
      children: "Credential security"
    }), `
`, _jsx(_components.p, {
      children: "Credentials stored in Model Credentials are:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Encrypted and securely stored in your Agora account"
      }), `
`, _jsx(_components.li, {
        children: "Only accessible to users with access to your Agora project"
      }), `
`, _jsx(_components.li, {
        children: "Never exposed in agent configurations or logs"
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "success",
      children: [_jsx(CalloutTitle, {
        children: "Best practices"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Use descriptive names to distinguish between development, staging, and production credentials."
          }), `
`, _jsx(_components.li, {
            children: "Rotate API keys regularly according to your security policies."
          }), `
`, _jsx(_components.li, {
            children: "Delete unused credentials to minimize security exposure."
          }), `
`]
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "knowledge-bases",
      children: "Knowledge bases"
    }), `
`, _jsxs(_components.p, {
      children: ["A knowledge base provides your agent with additional context by supplying reference documents that the agent can draw on during conversations. Once created, knowledge bases can be attached to any agent from the ", _jsx(_components.strong, {
        children: "Actions"
      }), " panel."]
    }), `
`, _jsx(_components.p, {
      children: "To create a knowledge base:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
          children: "Integrations"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["At the top of the page, select ", _jsx(_components.strong, {
          children: "Knowledge Bases"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Create Knowledge Base"
        }), `.
`, _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/console/create-knowledge-base.png",
          alt: "Create knowledge base dialog"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Enter a ", _jsx(_components.strong, {
          children: "Knowledge Base Name"
        }), " and ", _jsx(_components.strong, {
          children: "Description"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Upload one or more files by selecting ", _jsx(_components.strong, {
          children: "Choose files"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Create"
        }), "."]
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Info"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Supported file formats: PDF, DOCX. Maximum file size: 20 MB per file."
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["You can edit or delete knowledge bases using the ", _jsx(_components.strong, {
        children: "Action"
      }), " menu in the knowledge base list."]
    }), `
`, _jsx(_components.h2, {
      id: "mcp-servers",
      children: "MCP servers"
    }), `
`, _jsxs(_components.p, {
      children: ["MCP (Model Context Protocol) servers extend your agent's capabilities by enabling it to call tools provided by external services. Once added to Integrations, MCP servers can be attached to any agent from the ", _jsx(_components.strong, {
        children: "Actions"
      }), " panel."]
    }), `
`, _jsx(_components.p, {
      children: "To add an MCP server:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
          children: "Integrations"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["At the top of the page, select ", _jsx(_components.strong, {
          children: "MCPs"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Create MCP Server"
        }), `.
`, _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/console/create-mcp.png",
          alt: "Add MCP server dialog"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Enter a descriptive ", _jsx(_components.strong, {
          children: "Name"
        }), " for the MCP server."]
      }), `
`, _jsxs(_components.li, {
        children: ["Enter the ", _jsx(_components.strong, {
          children: "Endpoint"
        }), " URL."]
      }), `
`, _jsxs(_components.li, {
        children: ["Set the server ", _jsx(_components.strong, {
          children: "Protocol"
        }), " to ", _jsx(_components.strong, {
          children: "SSE"
        }), " or ", _jsx(_components.strong, {
          children: "HTTP"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Set the ", _jsx(_components.strong, {
          children: "Timeout (ms)"
        }), ". If the server does not respond within this duration, the agent stops waiting and continues executing."]
      }), `
`, _jsxs(_components.li, {
        children: ["Add ", _jsx(_components.strong, {
          children: "HTTP Headers"
        }), " for authentication or additional configuration. Optional."]
      }), `
`, _jsxs(_components.li, {
        children: ["Add ", _jsx(_components.strong, {
          children: "Query Parameters"
        }), " to append to the server URL. Optional."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Create"
        }), "."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["You can edit, delete, or check the status of an MCP server using the ", _jsx(_components.strong, {
        children: "Action"
      }), " menu in the MCP server list."]
    }), `
`, _jsx(_components.h2, {
      id: "custom-tools",
      children: "Custom tools"
    }), `
`, _jsx(_components.p, {
      children: "Custom tools let you define reusable HTTP tools for your agents."
    }), `
`, _jsx(_components.p, {
      children: "To create a custom tool:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
          children: "Integrations"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["At the top of the page, select ", _jsx(_components.strong, {
          children: "Custom Tools"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Add Custom Tool"
        }), `.
`, _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/console/new-custom-tool.png",
          alt: "Add custom tool dialog"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Configure the request, function schema, and optional body template. See ", _jsx(_components.a, {
          href: "custom-tools",
          children: "Custom tools"
        }), " for detailed setup guidance."]
      }), `
`, _jsx(_components.li, {
        children: "Save the tool."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["After you create a custom tool, attach it to an agent from the agent editor ", _jsx(_components.strong, {
        children: "Actions"
      }), " tab."]
    }), `
`, _jsx(_components.h2, {
      id: "connectors",
      children: "Connectors"
    }), `
`, _jsx(_components.p, {
      children: "Connectors provide built-in integrations that agents can use without requiring you to build your own HTTP or MCP layer."
    }), `
`, _jsx(_components.p, {
      children: "Currently available:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "hubspot-connector",
          children: "HubSpot Connector"
        }), ": Connect HubSpot and attach it to agents that need contact and ticket workflows"]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["After you connect, attach the connector to an agent from the agent editor ", _jsx(_components.strong, {
        children: "Actions"
      }), " tab."]
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
