import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Agent Studio overview",
  description: "Build, deploy, and monitor conversational AI voice agents in Agora Console without managing infrastructure."
};
export let _markdown = `

Agent Studio is a visual workspace in Agora Console for building and operating conversational AI voice agents. You configure agent behavior, connect telephony, and monitor production calls from a single interface, without writing integration code.

Agent Studio abstracts the underlying AI stack. You configure your ASR, LLM, and TTS providers, or a single realtime MLLM; Agent Studio handles the orchestration between them. Instead of managing API integrations across multiple services, you focus on what your agent should say and do.

## How it's organized [#how-its-organized]

Agent Studio is structured around four areas:

**Concierge:** Explore, configure, and troubleshoot your agents using natural language, instead of navigating each page individually. See [Concierge](build/concierge).

**Build:** Create and configure agents. Define the system prompt, greeting, models, and behavior. Connect credentials, knowledge bases, MCP servers, Custom Tools, and connectors through **Integrations**. These resources are stored centrally so they can be reused across multiple agents. See [Customize your agent](build/customize-agent), [Manage integrations](build/integrations), [Custom Tools](build/custom-tools), and [HubSpot Connector](build/hubspot-connector).

**Deploy:** Connect agents to telephony. Import phone numbers using Elastic SIP Trunk and configure inbound routing or outbound campaigns. See [Set up SIP trunk](deploy/sip-trunk), [Import a phone number](deploy/import), [Handle inbound calls](deploy/inbound), [Publish your agent](deploy/deploy-agent), and [Set up a campaign](deploy/campaign).

**Insights:** Monitor production usage. Review call history, transcripts, and analytics to understand agent performance and debug issues. See [Agent analytics](observe/analytics) and [Call History](observe/call-history).

## How it works [#how-it-works]

Agent Studio sits between your telephony provider and the AI models that power your agent. For inbound calls, it receives the call from your carrier via Elastic SIP Trunk, processes the conversation through your configured ASR, LLM, and TTS providers (or a realtime MLLM), and delivers the agent's response back to the caller. For outbound calls, it initiates the call through the same SIP trunk, connects to the recipient, and handles the conversation in the same way.

In both cases, it manages the full call lifecycle. No SIP servers to manage, no voice recognition to train, no telephony protocols to debug.

## Key concepts [#key-concepts]

### Agents [#agents]

Agents are the primary objects you configure. Create an agent, then configure it across four tabs in the agent editor:

* **Prompt**: The system prompt, greeting message, and failure message that define your agent's identity and behavior.
* **Models**: Your ASR, LLM, and TTS providers, or a single realtime MLLM.
* **Advanced**: Turn detection, speech detection, selective attention locking, filler words, voice format, and conversation history.
* **Actions**: Knowledge bases, Custom Tools, connectors, and MCP servers attached to the agent.

After configuring, test the agent using the **Test** tab, then publish it when ready. See [Customize your agent](build/customize-agent) and [Test your agent](build/test-agent).

### Integrations [#integrations]

**Integrations** is a centralized resource library. Store credentials, knowledge bases, MCP servers, Custom Tools, and connectors here once, then attach them to any agent. This eliminates repeated setup when you create new agents or update provider settings. See [Manage integrations](build/integrations).

### Phone numbers [#phone-numbers]

Import phone numbers from your SIP trunk provider and assign them to agents for inbound calls, or use them as caller IDs for outbound campaigns. See [Import a phone number](deploy/import).

### Campaigns [#campaigns]

For outbound use cases, create campaigns with contact lists, scheduling, and call transfer settings. See [Set up a campaign](deploy/campaign).

## Who should use this [#who-should-use-this]

Agent Studio is designed for developers and technical users who want to build and operate voice agents without managing the underlying AI infrastructure. If you need capabilities beyond what Agent Studio exposes, such as advanced API parameters or custom orchestration logic, you can use agent SDKs or the [Conversational AI REST API](/en/api-reference/api-ref/conversational-ai) for full programmatic control.

## Get started [#get-started]

To get started, follow the [Quickstart](quickstart), which walks you through creating and testing your first agent in about 10 minutes using a pre-built template.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agent Studio is a visual workspace in Agora Console for building and operating conversational AI voice agents. You configure agent behavior, connect telephony, and monitor production calls from a single interface, without writing integration code."
  }, {
    heading: undefined,
    content: "Agent Studio abstracts the underlying AI stack. You configure your ASR, LLM, and TTS providers, or a single realtime MLLM; Agent Studio handles the orchestration between them. Instead of managing API integrations across multiple services, you focus on what your agent should say and do."
  }, {
    heading: "how-its-organized",
    content: "Agent Studio is structured around four areas:"
  }, {
    heading: "how-its-organized",
    content: "**Concierge:** Explore, configure, and troubleshoot your agents using natural language, instead of navigating each page individually. See Concierge."
  }, {
    heading: "how-its-organized",
    content: "**Build:** Create and configure agents. Define the system prompt, greeting, models, and behavior. Connect credentials, knowledge bases, MCP servers, Custom Tools, and connectors through **Integrations**. These resources are stored centrally so they can be reused across multiple agents. See Customize your agent, Manage integrations, Custom Tools, and HubSpot Connector."
  }, {
    heading: "how-its-organized",
    content: "**Deploy:** Connect agents to telephony. Import phone numbers using Elastic SIP Trunk and configure inbound routing or outbound campaigns. See Set up SIP trunk, Import a phone number, Handle inbound calls, Publish your agent, and Set up a campaign."
  }, {
    heading: "how-its-organized",
    content: "**Insights:** Monitor production usage. Review call history, transcripts, and analytics to understand agent performance and debug issues. See Agent analytics and Call History."
  }, {
    heading: "how-it-works",
    content: "Agent Studio sits between your telephony provider and the AI models that power your agent. For inbound calls, it receives the call from your carrier via Elastic SIP Trunk, processes the conversation through your configured ASR, LLM, and TTS providers (or a realtime MLLM), and delivers the agent's response back to the caller. For outbound calls, it initiates the call through the same SIP trunk, connects to the recipient, and handles the conversation in the same way."
  }, {
    heading: "how-it-works",
    content: "In both cases, it manages the full call lifecycle. No SIP servers to manage, no voice recognition to train, no telephony protocols to debug."
  }, {
    heading: "agents",
    content: "Agents are the primary objects you configure. Create an agent, then configure it across four tabs in the agent editor:"
  }, {
    heading: "agents",
    content: "**Prompt**: The system prompt, greeting message, and failure message that define your agent's identity and behavior."
  }, {
    heading: "agents",
    content: "**Models**: Your ASR, LLM, and TTS providers, or a single realtime MLLM."
  }, {
    heading: "agents",
    content: "**Advanced**: Turn detection, speech detection, selective attention locking, filler words, voice format, and conversation history."
  }, {
    heading: "agents",
    content: "**Actions**: Knowledge bases, Custom Tools, connectors, and MCP servers attached to the agent."
  }, {
    heading: "agents",
    content: "After configuring, test the agent using the **Test** tab, then publish it when ready. See Customize your agent and Test your agent."
  }, {
    heading: "integrations",
    content: "**Integrations** is a centralized resource library. Store credentials, knowledge bases, MCP servers, Custom Tools, and connectors here once, then attach them to any agent. This eliminates repeated setup when you create new agents or update provider settings. See Manage integrations."
  }, {
    heading: "phone-numbers",
    content: "Import phone numbers from your SIP trunk provider and assign them to agents for inbound calls, or use them as caller IDs for outbound campaigns. See Import a phone number."
  }, {
    heading: "campaigns",
    content: "For outbound use cases, create campaigns with contact lists, scheduling, and call transfer settings. See Set up a campaign."
  }, {
    heading: "who-should-use-this",
    content: "Agent Studio is designed for developers and technical users who want to build and operate voice agents without managing the underlying AI infrastructure. If you need capabilities beyond what Agent Studio exposes, such as advanced API parameters or custom orchestration logic, you can use agent SDKs or the Conversational AI REST API for full programmatic control."
  }, {
    heading: "get-started",
    content: "To get started, follow the Quickstart, which walks you through creating and testing your first agent in about 10 minutes using a pre-built template."
  }],
  headings: [{
    id: "how-its-organized",
    content: "How it's organized"
  }, {
    id: "how-it-works",
    content: "How it works"
  }, {
    id: "key-concepts",
    content: "Key concepts"
  }, {
    id: "agents",
    content: "Agents"
  }, {
    id: "integrations",
    content: "Integrations"
  }, {
    id: "phone-numbers",
    content: "Phone numbers"
  }, {
    id: "campaigns",
    content: "Campaigns"
  }, {
    id: "who-should-use-this",
    content: "Who should use this"
  }, {
    id: "get-started",
    content: "Get started"
  }]
};
export let toc = [{
  depth: 2,
  url: "#how-its-organized",
  title: _jsx(_Fragment, {
    children: "How it's organized"
  })
}, {
  depth: 2,
  url: "#how-it-works",
  title: _jsx(_Fragment, {
    children: "How it works"
  })
}, {
  depth: 2,
  url: "#key-concepts",
  title: _jsx(_Fragment, {
    children: "Key concepts"
  })
}, {
  depth: 3,
  url: "#agents",
  title: _jsx(_Fragment, {
    children: "Agents"
  })
}, {
  depth: 3,
  url: "#integrations",
  title: _jsx(_Fragment, {
    children: "Integrations"
  })
}, {
  depth: 3,
  url: "#phone-numbers",
  title: _jsx(_Fragment, {
    children: "Phone numbers"
  })
}, {
  depth: 3,
  url: "#campaigns",
  title: _jsx(_Fragment, {
    children: "Campaigns"
  })
}, {
  depth: 2,
  url: "#who-should-use-this",
  title: _jsx(_Fragment, {
    children: "Who should use this"
  })
}, {
  depth: 2,
  url: "#get-started",
  title: _jsx(_Fragment, {
    children: "Get started"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agent Studio is a visual workspace in Agora Console for building and operating conversational AI voice agents. You configure agent behavior, connect telephony, and monitor production calls from a single interface, without writing integration code."
    }), `
`, _jsx(_components.p, {
      children: "Agent Studio abstracts the underlying AI stack. You configure your ASR, LLM, and TTS providers, or a single realtime MLLM; Agent Studio handles the orchestration between them. Instead of managing API integrations across multiple services, you focus on what your agent should say and do."
    }), `
`, _jsx(_components.h2, {
      id: "how-its-organized",
      children: "How it's organized"
    }), `
`, _jsx(_components.p, {
      children: "Agent Studio is structured around four areas:"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Concierge:"
      }), " Explore, configure, and troubleshoot your agents using natural language, instead of navigating each page individually. See ", _jsx(_components.a, {
        href: "build/concierge",
        children: "Concierge"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Build:"
      }), " Create and configure agents. Define the system prompt, greeting, models, and behavior. Connect credentials, knowledge bases, MCP servers, Custom Tools, and connectors through ", _jsx(_components.strong, {
        children: "Integrations"
      }), ". These resources are stored centrally so they can be reused across multiple agents. See ", _jsx(_components.a, {
        href: "build/customize-agent",
        children: "Customize your agent"
      }), ", ", _jsx(_components.a, {
        href: "build/integrations",
        children: "Manage integrations"
      }), ", ", _jsx(_components.a, {
        href: "build/custom-tools",
        children: "Custom Tools"
      }), ", and ", _jsx(_components.a, {
        href: "build/hubspot-connector",
        children: "HubSpot Connector"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Deploy:"
      }), " Connect agents to telephony. Import phone numbers using Elastic SIP Trunk and configure inbound routing or outbound campaigns. See ", _jsx(_components.a, {
        href: "deploy/sip-trunk",
        children: "Set up SIP trunk"
      }), ", ", _jsx(_components.a, {
        href: "deploy/import",
        children: "Import a phone number"
      }), ", ", _jsx(_components.a, {
        href: "deploy/inbound",
        children: "Handle inbound calls"
      }), ", ", _jsx(_components.a, {
        href: "deploy/deploy-agent",
        children: "Publish your agent"
      }), ", and ", _jsx(_components.a, {
        href: "deploy/campaign",
        children: "Set up a campaign"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Insights:"
      }), " Monitor production usage. Review call history, transcripts, and analytics to understand agent performance and debug issues. See ", _jsx(_components.a, {
        href: "observe/analytics",
        children: "Agent analytics"
      }), " and ", _jsx(_components.a, {
        href: "observe/call-history",
        children: "Call History"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "how-it-works",
      children: "How it works"
    }), `
`, _jsx(_components.p, {
      children: "Agent Studio sits between your telephony provider and the AI models that power your agent. For inbound calls, it receives the call from your carrier via Elastic SIP Trunk, processes the conversation through your configured ASR, LLM, and TTS providers (or a realtime MLLM), and delivers the agent's response back to the caller. For outbound calls, it initiates the call through the same SIP trunk, connects to the recipient, and handles the conversation in the same way."
    }), `
`, _jsx(_components.p, {
      children: "In both cases, it manages the full call lifecycle. No SIP servers to manage, no voice recognition to train, no telephony protocols to debug."
    }), `
`, _jsx(_components.h2, {
      id: "key-concepts",
      children: "Key concepts"
    }), `
`, _jsx(_components.h3, {
      id: "agents",
      children: "Agents"
    }), `
`, _jsx(_components.p, {
      children: "Agents are the primary objects you configure. Create an agent, then configure it across four tabs in the agent editor:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Prompt"
        }), ": The system prompt, greeting message, and failure message that define your agent's identity and behavior."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Models"
        }), ": Your ASR, LLM, and TTS providers, or a single realtime MLLM."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Advanced"
        }), ": Turn detection, speech detection, selective attention locking, filler words, voice format, and conversation history."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Actions"
        }), ": Knowledge bases, Custom Tools, connectors, and MCP servers attached to the agent."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["After configuring, test the agent using the ", _jsx(_components.strong, {
        children: "Test"
      }), " tab, then publish it when ready. See ", _jsx(_components.a, {
        href: "build/customize-agent",
        children: "Customize your agent"
      }), " and ", _jsx(_components.a, {
        href: "build/test-agent",
        children: "Test your agent"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "integrations",
      children: "Integrations"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Integrations"
      }), " is a centralized resource library. Store credentials, knowledge bases, MCP servers, Custom Tools, and connectors here once, then attach them to any agent. This eliminates repeated setup when you create new agents or update provider settings. See ", _jsx(_components.a, {
        href: "build/integrations",
        children: "Manage integrations"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "phone-numbers",
      children: "Phone numbers"
    }), `
`, _jsxs(_components.p, {
      children: ["Import phone numbers from your SIP trunk provider and assign them to agents for inbound calls, or use them as caller IDs for outbound campaigns. See ", _jsx(_components.a, {
        href: "deploy/import",
        children: "Import a phone number"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "campaigns",
      children: "Campaigns"
    }), `
`, _jsxs(_components.p, {
      children: ["For outbound use cases, create campaigns with contact lists, scheduling, and call transfer settings. See ", _jsx(_components.a, {
        href: "deploy/campaign",
        children: "Set up a campaign"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "who-should-use-this",
      children: "Who should use this"
    }), `
`, _jsxs(_components.p, {
      children: ["Agent Studio is designed for developers and technical users who want to build and operate voice agents without managing the underlying AI infrastructure. If you need capabilities beyond what Agent Studio exposes, such as advanced API parameters or custom orchestration logic, you can use agent SDKs or the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/conversational-ai",
        children: "Conversational AI REST API"
      }), " for full programmatic control."]
    }), `
`, _jsx(_components.h2, {
      id: "get-started",
      children: "Get started"
    }), `
`, _jsxs(_components.p, {
      children: ["To get started, follow the ", _jsx(_components.a, {
        href: "quickstart",
        children: "Quickstart"
      }), ", which walks you through creating and testing your first agent in about 10 minutes using a pre-built template."]
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
