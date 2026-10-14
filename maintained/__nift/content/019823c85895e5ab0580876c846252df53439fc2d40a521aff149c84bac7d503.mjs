import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Conversational AI Overview",
  description: "Manage Conversational AI agents and troubleshoot REST API requests."
};
export let _markdown = `

The Conversational AI REST API lets you create, stop, update, query, interrupt, and inspect agent sessions from your server.

## API basics [#api-basics]

All requests are sent to the host \`api.agora.io\`.

* **Authentication**: Use [RESTful authentication](authentication) for every request.
* **Request**: Request and response bodies use JSON.
* **Base URL**: \`https://api.agora.io/api/conversational-ai-agent/v2/projects/<appid>\`, where \`<appid>\` is the Agora App ID for your project.

<CalloutContainer type="info">
  <CalloutDescription>
    Request URLs and request bodies are case-sensitive.
  </CalloutDescription>
</CalloutContainer>

## REST APIs [#rest-apis]

* [Start a conversational AI agent](join): Create and start a Conversational AI agent instance.
* [Stop a conversational AI agent](leave): Stop the specified agent instance.
* [Update agent configuration](update): Adjust agent parameters at runtime.
* [Query agent status](query): Get the current status of the specified agent instance.
* [Retrieve a list of agents](list): Retrieve agents that match specified conditions.
* [Broadcast a message using TTS](speak): Broadcast a custom message through the TTS module.
* [Interrupt the agent](interrupt): Interrupt an agent while it is speaking or thinking.
* [Send a custom instruction](think): Send text instructions into the current conversation pipeline.
* [Retrieve agent history](history): Retrieve short-term conversation history.
* [Query conversation turn information](turns): Query turn-level conversation details and metrics.

## Client toolkit [#client-toolkit]

The client toolkit helps you build Conversational AI app clients with APIs that combine Agora RTC and Signaling capabilities for message subscription, conversation events, interruption, transcript updates, image messages, and audio best-practice settings.

* [Android toolkit API](client-toolkit/android): Reference for Android toolkit classes, callbacks, structures, and enums.
* [iOS toolkit API](client-toolkit/ios): Reference for iOS toolkit classes, callbacks, structures, and enums.
* [Web toolkit API](client-toolkit/web): Reference for Web toolkit classes, event handlers, types, interfaces, and enums.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Conversational AI REST API lets you create, stop, update, query, interrupt, and inspect agent sessions from your server."
  }, {
    heading: "api-basics",
    content: "All requests are sent to the host `api.agora.io`."
  }, {
    heading: "api-basics",
    content: "**Authentication**: Use RESTful authentication for every request."
  }, {
    heading: "api-basics",
    content: "**Request**: Request and response bodies use JSON."
  }, {
    heading: "api-basics",
    content: "**Base URL**: `https://api.agora.io/api/conversational-ai-agent/v2/projects/<appid>`, where `<appid>` is the Agora App ID for your project."
  }, {
    heading: "api-basics",
    content: "Request URLs and request bodies are case-sensitive."
  }, {
    heading: "rest-apis",
    content: "Start a conversational AI agent: Create and start a Conversational AI agent instance."
  }, {
    heading: "rest-apis",
    content: "Stop a conversational AI agent: Stop the specified agent instance."
  }, {
    heading: "rest-apis",
    content: "Update agent configuration: Adjust agent parameters at runtime."
  }, {
    heading: "rest-apis",
    content: "Query agent status: Get the current status of the specified agent instance."
  }, {
    heading: "rest-apis",
    content: "Retrieve a list of agents: Retrieve agents that match specified conditions."
  }, {
    heading: "rest-apis",
    content: "Broadcast a message using TTS: Broadcast a custom message through the TTS module."
  }, {
    heading: "rest-apis",
    content: "Interrupt the agent: Interrupt an agent while it is speaking or thinking."
  }, {
    heading: "rest-apis",
    content: "Send a custom instruction: Send text instructions into the current conversation pipeline."
  }, {
    heading: "rest-apis",
    content: "Retrieve agent history: Retrieve short-term conversation history."
  }, {
    heading: "rest-apis",
    content: "Query conversation turn information: Query turn-level conversation details and metrics."
  }, {
    heading: "client-toolkit",
    content: "The client toolkit helps you build Conversational AI app clients with APIs that combine Agora RTC and Signaling capabilities for message subscription, conversation events, interruption, transcript updates, image messages, and audio best-practice settings."
  }, {
    heading: "client-toolkit",
    content: "Android toolkit API: Reference for Android toolkit classes, callbacks, structures, and enums."
  }, {
    heading: "client-toolkit",
    content: "iOS toolkit API: Reference for iOS toolkit classes, callbacks, structures, and enums."
  }, {
    heading: "client-toolkit",
    content: "Web toolkit API: Reference for Web toolkit classes, event handlers, types, interfaces, and enums."
  }],
  headings: [{
    id: "api-basics",
    content: "API basics"
  }, {
    id: "rest-apis",
    content: "REST APIs"
  }, {
    id: "client-toolkit",
    content: "Client toolkit"
  }]
};
export let toc = [{
  depth: 2,
  url: "#api-basics",
  title: _jsx(_Fragment, {
    children: "API basics"
  })
}, {
  depth: 2,
  url: "#rest-apis",
  title: _jsx(_Fragment, {
    children: "REST APIs"
  })
}, {
  depth: 2,
  url: "#client-toolkit",
  title: _jsx(_Fragment, {
    children: "Client toolkit"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
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
      children: "The Conversational AI REST API lets you create, stop, update, query, interrupt, and inspect agent sessions from your server."
    }), `
`, _jsx(_components.h2, {
      id: "api-basics",
      children: "API basics"
    }), `
`, _jsxs(_components.p, {
      children: ["All requests are sent to the host ", _jsx(_components.code, {
        children: "api.agora.io"
      }), "."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Authentication"
        }), ": Use ", _jsx(_components.a, {
          href: "authentication",
          children: "RESTful authentication"
        }), " for every request."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Request"
        }), ": Request and response bodies use JSON."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Base URL"
        }), ": ", _jsx(_components.code, {
          children: "https://api.agora.io/api/conversational-ai-agent/v2/projects/<appid>"
        }), ", where ", _jsx(_components.code, {
          children: "<appid>"
        }), " is the Agora App ID for your project."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Request URLs and request bodies are case-sensitive."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "rest-apis",
      children: "REST APIs"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "join",
          children: "Start a conversational AI agent"
        }), ": Create and start a Conversational AI agent instance."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "leave",
          children: "Stop a conversational AI agent"
        }), ": Stop the specified agent instance."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "update",
          children: "Update agent configuration"
        }), ": Adjust agent parameters at runtime."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "query",
          children: "Query agent status"
        }), ": Get the current status of the specified agent instance."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "list",
          children: "Retrieve a list of agents"
        }), ": Retrieve agents that match specified conditions."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "speak",
          children: "Broadcast a message using TTS"
        }), ": Broadcast a custom message through the TTS module."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "interrupt",
          children: "Interrupt the agent"
        }), ": Interrupt an agent while it is speaking or thinking."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "think",
          children: "Send a custom instruction"
        }), ": Send text instructions into the current conversation pipeline."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "history",
          children: "Retrieve agent history"
        }), ": Retrieve short-term conversation history."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "turns",
          children: "Query conversation turn information"
        }), ": Query turn-level conversation details and metrics."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "client-toolkit",
      children: "Client toolkit"
    }), `
`, _jsx(_components.p, {
      children: "The client toolkit helps you build Conversational AI app clients with APIs that combine Agora RTC and Signaling capabilities for message subscription, conversation events, interruption, transcript updates, image messages, and audio best-practice settings."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "client-toolkit/android",
          children: "Android toolkit API"
        }), ": Reference for Android toolkit classes, callbacks, structures, and enums."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "client-toolkit/ios",
          children: "iOS toolkit API"
        }), ": Reference for iOS toolkit classes, callbacks, structures, and enums."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "client-toolkit/web",
          children: "Web toolkit API"
        }), ": Reference for Web toolkit classes, event handlers, types, interfaces, and enums."]
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
