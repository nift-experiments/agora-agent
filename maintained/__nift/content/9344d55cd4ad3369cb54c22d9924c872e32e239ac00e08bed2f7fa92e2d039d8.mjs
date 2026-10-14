import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  analyticsPageType: "navigation-landing",
  title: "Voice Agent overview",
  description: "Understand what a voice agent is, how this section is organized, and which path to follow in the sidebar."
};
export let _markdown = `

A Voice Agent is a real-time system that listens to a user, reasons over the conversation, and responds with speech. On Agora, that experience is built from a shared foundation: real-time transport, an agent runtime, AI models, and the endpoint where the conversation is delivered.

Agora supports three Voice Agent paths: **in apps**, **Agent Studio**, and **on dedicated devices**. Choose **In apps** if your agent lives in a web, mobile, desktop, or backend-assisted app experience that you build with code. Choose **Agent Studio** if you want to build, deploy, and monitor agents in Agora Console without writing integration code, including agents that handle phone calls. Choose **On dedicated devices** if your endpoint is embedded or hardware-first, such as a toy, wearable, kiosk, or companion. Use the quickstart that matches your path to jump directly into the right implementation workflow.

<Cards>
  <Card title="In apps quickstart" href="/en/ai/get-started/quickstart" description="Build the minimal backend-plus-client flow and get a working voice agent running quickly." />

  <Card title="Agent Studio quickstart" href="/en/ai/studio/quickstart" description="Create and test your first agent in Agora Console from a pre-built template." />

  <Card title="Dedicated devices quickstart" href="/en/ai/device-kit/start-here/quickstart" description="Bring up the Convo AI Device Kit quickly and verify the end-to-end device workflow." />
</Cards>

## Capabilities [#capabilities]

No matter where you ship it, a Voice Agent usually has the same core layers:

* **Real-time transport**: moves audio, events, and conversation state between the user and the agent with low latency.
* **Agent runtime**: manages the session lifecycle, turn taking, interruptions, memory, and tool orchestration.
* **Models**: provide ASR, LLM, TTS, and optional multimodal capabilities.
* **Endpoint**: presents the experience to the user, either through an app or a dedicated device.

The first three layers stay conceptually similar across the docs. The sidebar splits by how you build the agent and where it runs, because app teams, Agent Studio users, and device teams need different implementation workflows.

## How this section is organized [#how-this-section-is-organized]

The AI sidebar is structured in three paths:

* **In apps**: for web, mobile, desktop, and backend-assisted app experiences that you build with code.
* **Agent Studio**: for building, deploying, and monitoring agents in Agora Console, including inbound and outbound phone calls through Elastic SIP Trunk.
* **On dedicated devices**: for embedded or hardware-first endpoints such as toys, wearables, kiosks, and companions.

All three paths share the same Voice Agent idea, but they differ in what teams need to build next. App teams usually care first about session orchestration, UI, model behavior, and runtime events. Agent Studio users usually care first about prompts, model configuration, telephony, and call analytics. Device teams usually care first about bring-up, networking, firmware, controls, and hardware integration.

<a id="on-software-clients" />

<a id="for-software-clients" />
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "A Voice Agent is a real-time system that listens to a user, reasons over the conversation, and responds with speech. On Agora, that experience is built from a shared foundation: real-time transport, an agent runtime, AI models, and the endpoint where the conversation is delivered."
  }, {
    heading: undefined,
    content: "Agora supports three Voice Agent paths: **in apps**, **Agent Studio**, and **on dedicated devices**. Choose **In apps** if your agent lives in a web, mobile, desktop, or backend-assisted app experience that you build with code. Choose **Agent Studio** if you want to build, deploy, and monitor agents in Agora Console without writing integration code, including agents that handle phone calls. Choose **On dedicated devices** if your endpoint is embedded or hardware-first, such as a toy, wearable, kiosk, or companion. Use the quickstart that matches your path to jump directly into the right implementation workflow."
  }, {
    heading: undefined,
    content: '<Card title="In apps quickstart" href="/en/ai/get-started/quickstart" description="Build the minimal backend-plus-client flow and get a working voice agent running quickly." />'
  }, {
    heading: undefined,
    content: '<Card title="Agent Studio quickstart" href="/en/ai/studio/quickstart" description="Create and test your first agent in Agora Console from a pre-built template." />'
  }, {
    heading: undefined,
    content: '<Card title="Dedicated devices quickstart" href="/en/ai/device-kit/start-here/quickstart" description="Bring up the Convo AI Device Kit quickly and verify the end-to-end device workflow." />'
  }, {
    heading: "capabilities",
    content: "No matter where you ship it, a Voice Agent usually has the same core layers:"
  }, {
    heading: "capabilities",
    content: "**Real-time transport**: moves audio, events, and conversation state between the user and the agent with low latency."
  }, {
    heading: "capabilities",
    content: "**Agent runtime**: manages the session lifecycle, turn taking, interruptions, memory, and tool orchestration."
  }, {
    heading: "capabilities",
    content: "**Models**: provide ASR, LLM, TTS, and optional multimodal capabilities."
  }, {
    heading: "capabilities",
    content: "**Endpoint**: presents the experience to the user, either through an app or a dedicated device."
  }, {
    heading: "capabilities",
    content: "The first three layers stay conceptually similar across the docs. The sidebar splits by how you build the agent and where it runs, because app teams, Agent Studio users, and device teams need different implementation workflows."
  }, {
    heading: "how-this-section-is-organized",
    content: "The AI sidebar is structured in three paths:"
  }, {
    heading: "how-this-section-is-organized",
    content: "**In apps**: for web, mobile, desktop, and backend-assisted app experiences that you build with code."
  }, {
    heading: "how-this-section-is-organized",
    content: "**Agent Studio**: for building, deploying, and monitoring agents in Agora Console, including inbound and outbound phone calls through Elastic SIP Trunk."
  }, {
    heading: "how-this-section-is-organized",
    content: "**On dedicated devices**: for embedded or hardware-first endpoints such as toys, wearables, kiosks, and companions."
  }, {
    heading: "how-this-section-is-organized",
    content: "All three paths share the same Voice Agent idea, but they differ in what teams need to build next. App teams usually care first about session orchestration, UI, model behavior, and runtime events. Agent Studio users usually care first about prompts, model configuration, telephony, and call analytics. Device teams usually care first about bring-up, networking, firmware, controls, and hardware integration."
  }],
  headings: [{
    id: "capabilities",
    content: "Capabilities"
  }, {
    id: "how-this-section-is-organized",
    content: "How this section is organized"
  }]
};
export let toc = [{
  depth: 2,
  url: "#capabilities",
  title: _jsx(_Fragment, {
    children: "Capabilities"
  })
}, {
  depth: 2,
  url: "#how-this-section-is-organized",
  title: _jsx(_Fragment, {
    children: "How this section is organized"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { Card, Cards } = _components;
  if (!Card)
    _missingMdxReference("Card", true);
  if (!Cards)
    _missingMdxReference("Cards", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "A Voice Agent is a real-time system that listens to a user, reasons over the conversation, and responds with speech. On Agora, that experience is built from a shared foundation: real-time transport, an agent runtime, AI models, and the endpoint where the conversation is delivered."
    }), `
`, _jsxs(_components.p, {
      children: ["Agora supports three Voice Agent paths: ", _jsx(_components.strong, {
        children: "in apps"
      }), ", ", _jsx(_components.strong, {
        children: "Agent Studio"
      }), ", and ", _jsx(_components.strong, {
        children: "on dedicated devices"
      }), ". Choose ", _jsx(_components.strong, {
        children: "In apps"
      }), " if your agent lives in a web, mobile, desktop, or backend-assisted app experience that you build with code. Choose ", _jsx(_components.strong, {
        children: "Agent Studio"
      }), " if you want to build, deploy, and monitor agents in Agora Console without writing integration code, including agents that handle phone calls. Choose ", _jsx(_components.strong, {
        children: "On dedicated devices"
      }), " if your endpoint is embedded or hardware-first, such as a toy, wearable, kiosk, or companion. Use the quickstart that matches your path to jump directly into the right implementation workflow."]
    }), `
`, _jsxs(Cards, {
      children: [_jsx(Card, {
        title: "In apps quickstart",
        href: "/en/ai/get-started/quickstart",
        description: "Build the minimal backend-plus-client flow and get a working voice agent running quickly."
      }), _jsx(Card, {
        title: "Agent Studio quickstart",
        href: "/en/ai/studio/quickstart",
        description: "Create and test your first agent in Agora Console from a pre-built template."
      }), _jsx(Card, {
        title: "Dedicated devices quickstart",
        href: "/en/ai/device-kit/start-here/quickstart",
        description: "Bring up the Convo AI Device Kit quickly and verify the end-to-end device workflow."
      })]
    }), `
`, _jsx(_components.h2, {
      id: "capabilities",
      children: "Capabilities"
    }), `
`, _jsx(_components.p, {
      children: "No matter where you ship it, a Voice Agent usually has the same core layers:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Real-time transport"
        }), ": moves audio, events, and conversation state between the user and the agent with low latency."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Agent runtime"
        }), ": manages the session lifecycle, turn taking, interruptions, memory, and tool orchestration."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Models"
        }), ": provide ASR, LLM, TTS, and optional multimodal capabilities."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Endpoint"
        }), ": presents the experience to the user, either through an app or a dedicated device."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The first three layers stay conceptually similar across the docs. The sidebar splits by how you build the agent and where it runs, because app teams, Agent Studio users, and device teams need different implementation workflows."
    }), `
`, _jsx(_components.h2, {
      id: "how-this-section-is-organized",
      children: "How this section is organized"
    }), `
`, _jsx(_components.p, {
      children: "The AI sidebar is structured in three paths:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "In apps"
        }), ": for web, mobile, desktop, and backend-assisted app experiences that you build with code."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Agent Studio"
        }), ": for building, deploying, and monitoring agents in Agora Console, including inbound and outbound phone calls through Elastic SIP Trunk."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "On dedicated devices"
        }), ": for embedded or hardware-first endpoints such as toys, wearables, kiosks, and companions."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "All three paths share the same Voice Agent idea, but they differ in what teams need to build next. App teams usually care first about session orchestration, UI, model behavior, and runtime events. Agent Studio users usually care first about prompts, model configuration, telephony, and call analytics. Device teams usually care first about bring-up, networking, firmware, controls, and hardware integration."
    }), `
`, _jsx("a", {
      id: "on-software-clients"
    }), `
`, _jsx("a", {
      id: "for-software-clients"
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
