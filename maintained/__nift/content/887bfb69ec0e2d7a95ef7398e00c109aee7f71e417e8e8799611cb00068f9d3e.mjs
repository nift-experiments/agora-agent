import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Create your first agent",
  description: "Create and test your first AI voice agent in minutes using a pre-built template."
};
export let _markdown = `

This page guides you through creating and testing your first AI voice agent. In less than 10 minutes, you will have a working agent that you can speak to in the browser. No telephony setup is required.

<CalloutContainer type="success">
  <CalloutTitle>
    Prefer natural language?
  </CalloutTitle>

  <CalloutDescription>
    Use [Concierge](build/concierge) to build and test an agent by describing what you want instead of following the steps below.
  </CalloutDescription>
</CalloutContainer>

## Create an agent [#create-an-agent]

To create your first agent:

1. Log in to [Agora Console](https://console.agora.io).

2. Select your project from the dropdown at the top of the page. The agent uses this project's credentials to connect to Agora. Agora bills the usage to this project.

3. In the navigation sidebar, select **Agents**.

   ![List of agents](https://assets-docs.agora.io/images/console/agent-list.png)

4. Select **Create Agent**.

    <img alt="Create a new agent" src="https://assets-docs.agora.io/images/console/create-agent.png" width="600"  />

5. Enter a name for your agent.

6. Under **Choose a template**, select the **Blank Template**.

7. Select **Create Agent**.

   The agent editor opens with a system prompt and pre-configured model settings.

   ![](https://assets-docs.agora.io/images/console/agent-editor-prompt.png)

## Configure your agent [#configure-your-agent]

The agent editor is organized into multiple tabs. For the quickstart, you only need to review the **Prompt** tab and the **Models** tab.

### Review the prompt [#review-the-prompt]

The agent editor opens with the following prompts:

* **System prompt**: The base instructions that shape how your agent thinks, speaks, and escalates.
* **Greeting**: The first assistant message before the live exchange starts. Type in a greeting such as \`Hello, how can I help you today?\`
* **Failure message**: The fallback message used when the agent needs a moment or cannot proceed.

### Review selected models [#review-selected-models]

Models determine which ASR, LLM, and TTS services your agent uses to process speech, generate responses, and synthesize voice output.

1. Select the **Models** tab.

   ![](https://assets-docs.agora.io/images/console/agent-editor-models.png)

2. Review the pre-selected models for &#x2A;*Automatic Speech Recognition (ASR)**, &#x2A;*Large Language Model (LLM)**, and &#x2A;*Text-to-Speech (TTS)**. Use the default values to create your first agent.

The default models support **Agora Managed Key**. When you use a managed key, Agora provides the API credentials for your selected vendor. You do not need to obtain an API key directly from the vendor. See [Pricing](../reference/pricing) for details. To use your own API key or use a vendor that does not support a managed key, see [Customize your agent](build/customize-agent).

## Test the agent [#test-the-agent]

1. Select the **Test** tab in the right panel.
2. Select **Start Call** to start a test call.
3. Allow microphone access when prompted.
4. Speak to the agent to verify it responds correctly.

For guidance on what to test and how to troubleshoot issues, see [Test your agent](build/test-agent).

## Next steps [#next-steps]

You now have a working voice agent. From here you can:

* [Customize your agent](build/customize-agent): Fully configure models, prompts, and advanced settings for your use case
* [Manage integrations](build/integrations): Manage API credentials, knowledge bases, MCPs, custom tools, and connectors for reuse across agents
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page guides you through creating and testing your first AI voice agent. In less than 10 minutes, you will have a working agent that you can speak to in the browser. No telephony setup is required."
  }, {
    heading: undefined,
    content: "Use Concierge to build and test an agent by describing what you want instead of following the steps below."
  }, {
    heading: "create-an-agent",
    content: "To create your first agent:"
  }, {
    heading: "create-an-agent",
    content: "Log in to Agora Console."
  }, {
    heading: "create-an-agent",
    content: "Select your project from the dropdown at the top of the page. The agent uses this project's credentials to connect to Agora. Agora bills the usage to this project."
  }, {
    heading: "create-an-agent",
    content: "In the navigation sidebar, select **Agents**."
  }, {
    heading: "create-an-agent",
    content: "Select **Create Agent**."
  }, {
    heading: "create-an-agent",
    content: "Enter a name for your agent."
  }, {
    heading: "create-an-agent",
    content: "Under **Choose a template**, select the **Blank Template**."
  }, {
    heading: "create-an-agent",
    content: "Select **Create Agent**."
  }, {
    heading: "create-an-agent",
    content: "The agent editor opens with a system prompt and pre-configured model settings."
  }, {
    heading: "configure-your-agent",
    content: "The agent editor is organized into multiple tabs. For the quickstart, you only need to review the **Prompt** tab and the **Models** tab."
  }, {
    heading: "review-the-prompt",
    content: "The agent editor opens with the following prompts:"
  }, {
    heading: "review-the-prompt",
    content: "**System prompt**: The base instructions that shape how your agent thinks, speaks, and escalates."
  }, {
    heading: "review-the-prompt",
    content: "**Greeting**: The first assistant message before the live exchange starts. Type in a greeting such as `Hello, how can I help you today?`"
  }, {
    heading: "review-the-prompt",
    content: "**Failure message**: The fallback message used when the agent needs a moment or cannot proceed."
  }, {
    heading: "review-selected-models",
    content: "Models determine which ASR, LLM, and TTS services your agent uses to process speech, generate responses, and synthesize voice output."
  }, {
    heading: "review-selected-models",
    content: "Select the **Models** tab."
  }, {
    heading: "review-selected-models",
    content: "Review the pre-selected models for &#x2A;*Automatic Speech Recognition (ASR)**, &#x2A;*Large Language Model (LLM)**, and &#x2A;*Text-to-Speech (TTS)**. Use the default values to create your first agent."
  }, {
    heading: "review-selected-models",
    content: "The default models support **Agora Managed Key**. When you use a managed key, Agora provides the API credentials for your selected vendor. You do not need to obtain an API key directly from the vendor. See Pricing for details. To use your own API key or use a vendor that does not support a managed key, see Customize your agent."
  }, {
    heading: "test-the-agent",
    content: "Select the **Test** tab in the right panel."
  }, {
    heading: "test-the-agent",
    content: "Select **Start Call** to start a test call."
  }, {
    heading: "test-the-agent",
    content: "Allow microphone access when prompted."
  }, {
    heading: "test-the-agent",
    content: "Speak to the agent to verify it responds correctly."
  }, {
    heading: "test-the-agent",
    content: "For guidance on what to test and how to troubleshoot issues, see Test your agent."
  }, {
    heading: "next-steps",
    content: "You now have a working voice agent. From here you can:"
  }, {
    heading: "next-steps",
    content: "Customize your agent: Fully configure models, prompts, and advanced settings for your use case"
  }, {
    heading: "next-steps",
    content: "Manage integrations: Manage API credentials, knowledge bases, MCPs, custom tools, and connectors for reuse across agents"
  }],
  headings: [{
    id: "create-an-agent",
    content: "Create an agent"
  }, {
    id: "configure-your-agent",
    content: "Configure your agent"
  }, {
    id: "review-the-prompt",
    content: "Review the prompt"
  }, {
    id: "review-selected-models",
    content: "Review selected models"
  }, {
    id: "test-the-agent",
    content: "Test the agent"
  }, {
    id: "next-steps",
    content: "Next steps"
  }]
};
export let toc = [{
  depth: 2,
  url: "#create-an-agent",
  title: _jsx(_Fragment, {
    children: "Create an agent"
  })
}, {
  depth: 2,
  url: "#configure-your-agent",
  title: _jsx(_Fragment, {
    children: "Configure your agent"
  })
}, {
  depth: 3,
  url: "#review-the-prompt",
  title: _jsx(_Fragment, {
    children: "Review the prompt"
  })
}, {
  depth: 3,
  url: "#review-selected-models",
  title: _jsx(_Fragment, {
    children: "Review selected models"
  })
}, {
  depth: 2,
  url: "#test-the-agent",
  title: _jsx(_Fragment, {
    children: "Test the agent"
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
      children: "This page guides you through creating and testing your first AI voice agent. In less than 10 minutes, you will have a working agent that you can speak to in the browser. No telephony setup is required."
    }), `
`, _jsxs(CalloutContainer, {
      type: "success",
      children: [_jsx(CalloutTitle, {
        children: "Prefer natural language?"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Use ", _jsx(_components.a, {
            href: "build/concierge",
            children: "Concierge"
          }), " to build and test an agent by describing what you want instead of following the steps below."]
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "create-an-agent",
      children: "Create an agent"
    }), `
`, _jsx(_components.p, {
      children: "To create your first agent:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Log in to ", _jsx(_components.a, {
            href: "https://console.agora.io",
            children: "Agora Console"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Select your project from the dropdown at the top of the page. The agent uses this project's credentials to connect to Agora. Agora bills the usage to this project."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
            children: "Agents"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/console/agent-list.png",
            alt: "List of agents"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select ", _jsx(_components.strong, {
            children: "Create Agent"
          }), "."]
        }), `
`, `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Enter a name for your agent."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Under ", _jsx(_components.strong, {
            children: "Choose a template"
          }), ", select the ", _jsx(_components.strong, {
            children: "Blank Template"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select ", _jsx(_components.strong, {
            children: "Create Agent"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: "The agent editor opens with a system prompt and pre-configured model settings."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/console/agent-editor-prompt.png",
            alt: ""
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "configure-your-agent",
      children: "Configure your agent"
    }), `
`, _jsxs(_components.p, {
      children: ["The agent editor is organized into multiple tabs. For the quickstart, you only need to review the ", _jsx(_components.strong, {
        children: "Prompt"
      }), " tab and the ", _jsx(_components.strong, {
        children: "Models"
      }), " tab."]
    }), `
`, _jsx(_components.h3, {
      id: "review-the-prompt",
      children: "Review the prompt"
    }), `
`, _jsx(_components.p, {
      children: "The agent editor opens with the following prompts:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "System prompt"
        }), ": The base instructions that shape how your agent thinks, speaks, and escalates."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Greeting"
        }), ": The first assistant message before the live exchange starts. Type in a greeting such as ", _jsx(_components.code, {
          children: "Hello, how can I help you today?"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Failure message"
        }), ": The fallback message used when the agent needs a moment or cannot proceed."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "review-selected-models",
      children: "Review selected models"
    }), `
`, _jsx(_components.p, {
      children: "Models determine which ASR, LLM, and TTS services your agent uses to process speech, generate responses, and synthesize voice output."
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select the ", _jsx(_components.strong, {
            children: "Models"
          }), " tab."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/console/agent-editor-models.png",
            alt: ""
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Review the pre-selected models for ", _jsx(_components.strong, {
            children: "Automatic Speech Recognition (ASR)"
          }), ", ", _jsx(_components.strong, {
            children: "Large Language Model (LLM)"
          }), ", and ", _jsx(_components.strong, {
            children: "Text-to-Speech (TTS)"
          }), ". Use the default values to create your first agent."]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The default models support ", _jsx(_components.strong, {
        children: "Agora Managed Key"
      }), ". When you use a managed key, Agora provides the API credentials for your selected vendor. You do not need to obtain an API key directly from the vendor. See ", _jsx(_components.a, {
        href: "../reference/pricing",
        children: "Pricing"
      }), " for details. To use your own API key or use a vendor that does not support a managed key, see ", _jsx(_components.a, {
        href: "build/customize-agent",
        children: "Customize your agent"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "test-the-agent",
      children: "Test the agent"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Select the ", _jsx(_components.strong, {
          children: "Test"
        }), " tab in the right panel."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Start Call"
        }), " to start a test call."]
      }), `
`, _jsx(_components.li, {
        children: "Allow microphone access when prompted."
      }), `
`, _jsx(_components.li, {
        children: "Speak to the agent to verify it responds correctly."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For guidance on what to test and how to troubleshoot issues, see ", _jsx(_components.a, {
        href: "build/test-agent",
        children: "Test your agent"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "next-steps",
      children: "Next steps"
    }), `
`, _jsx(_components.p, {
      children: "You now have a working voice agent. From here you can:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "build/customize-agent",
          children: "Customize your agent"
        }), ": Fully configure models, prompts, and advanced settings for your use case"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "build/integrations",
          children: "Manage integrations"
        }), ": Manage API credentials, knowledge bases, MCPs, custom tools, and connectors for reuse across agents"]
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
