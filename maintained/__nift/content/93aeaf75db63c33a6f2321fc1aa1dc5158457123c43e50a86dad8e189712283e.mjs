import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "OpenAI Realtime integration",
  description: "Use Agora RTC transport with the OpenAI Realtime API when you need a custom voice stack instead of the managed Conversational AI Engine."
};
export let _markdown = `

This guide explains how to combine Agora's real-time audio transport with the OpenAI Realtime API.

Use this integration when you want Agora to handle the live audio session and network transport, while OpenAI Realtime handles the model-side conversational behavior.

This is not the same as building on Agora's managed Conversational AI Engine. If you want Agora to manage the voice-agent runtime, use the main Conversational AI build path instead.

## When to use this path [#when-to-use-this-path]

* You already know you want to build around the OpenAI Realtime API.
* You need Agora RTC SDK transport in front of that model stack.
* You are building a browser demo, device-oriented flow, or backend-mediated prototype around OpenAI Realtime.

## When not to use this path [#when-not-to-use-this-path]

* You want the default Agora-managed voice-agent stack.
* You are looking for the main onboarding path for Conversational AI Engine.
* You want Agent Studio or the Device Kit route instead of a custom integration.

## Core pieces [#core-pieces]

* **Agora App ID**: Identifies your Agora project.
* **App certificate and token model**: Used for secure join flows where needed.
* **Channel and user ID**: Define the live session and participants.
* **SD-RTN**: Provides Agora's low-latency transport layer.
* **OpenAI Realtime API**: Provides the model-side real-time conversation flow.

## Recommended quickstart flow [#recommended-quickstart-flow]

1. Prepare your Agora account and project.
2. Decide how your client joins the Agora session and how the OpenAI-side session is coordinated.
3. Configure the OpenAI Realtime model and audio flow.
4. Run the round-trip voice path locally and validate latency, auth, and media behavior.

## Security and network checks [#security-and-network-checks]

* Keep Agora credentials and provider API keys on the server side.
* Separate local, staging, and production credentials.
* Review firewall requirements before testing in restricted networks.
* Re-test the full join and media path after changing transport or security settings.

## Related pages [#related-pages]

* [Conversational AI quickstart](/en/ai/get-started/quickstart)
* [MCP integration](/en/ai/get-started/mcp-integrate)
* [Agora skills](/en/ai/get-started/skills-integrate)
* [Security and privacy](/en/introduction/security-privacy)
* [Firewall requirements](/en/introduction/firewall)
* [Glossary](/en/introduction/glossary)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This guide explains how to combine Agora's real-time audio transport with the OpenAI Realtime API."
  }, {
    heading: undefined,
    content: "Use this integration when you want Agora to handle the live audio session and network transport, while OpenAI Realtime handles the model-side conversational behavior."
  }, {
    heading: undefined,
    content: "This is not the same as building on Agora's managed Conversational AI Engine. If you want Agora to manage the voice-agent runtime, use the main Conversational AI build path instead."
  }, {
    heading: "when-to-use-this-path",
    content: "You already know you want to build around the OpenAI Realtime API."
  }, {
    heading: "when-to-use-this-path",
    content: "You need Agora RTC SDK transport in front of that model stack."
  }, {
    heading: "when-to-use-this-path",
    content: "You are building a browser demo, device-oriented flow, or backend-mediated prototype around OpenAI Realtime."
  }, {
    heading: "when-not-to-use-this-path",
    content: "You want the default Agora-managed voice-agent stack."
  }, {
    heading: "when-not-to-use-this-path",
    content: "You are looking for the main onboarding path for Conversational AI Engine."
  }, {
    heading: "when-not-to-use-this-path",
    content: "You want Agent Studio or the Device Kit route instead of a custom integration."
  }, {
    heading: "core-pieces",
    content: "**Agora App ID**: Identifies your Agora project."
  }, {
    heading: "core-pieces",
    content: "**App certificate and token model**: Used for secure join flows where needed."
  }, {
    heading: "core-pieces",
    content: "**Channel and user ID**: Define the live session and participants."
  }, {
    heading: "core-pieces",
    content: "**SD-RTN**: Provides Agora's low-latency transport layer."
  }, {
    heading: "core-pieces",
    content: "**OpenAI Realtime API**: Provides the model-side real-time conversation flow."
  }, {
    heading: "recommended-quickstart-flow",
    content: "Prepare your Agora account and project."
  }, {
    heading: "recommended-quickstart-flow",
    content: "Decide how your client joins the Agora session and how the OpenAI-side session is coordinated."
  }, {
    heading: "recommended-quickstart-flow",
    content: "Configure the OpenAI Realtime model and audio flow."
  }, {
    heading: "recommended-quickstart-flow",
    content: "Run the round-trip voice path locally and validate latency, auth, and media behavior."
  }, {
    heading: "security-and-network-checks",
    content: "Keep Agora credentials and provider API keys on the server side."
  }, {
    heading: "security-and-network-checks",
    content: "Separate local, staging, and production credentials."
  }, {
    heading: "security-and-network-checks",
    content: "Review firewall requirements before testing in restricted networks."
  }, {
    heading: "security-and-network-checks",
    content: "Re-test the full join and media path after changing transport or security settings."
  }, {
    heading: "related-pages",
    content: "Conversational AI quickstart"
  }, {
    heading: "related-pages",
    content: "MCP integration"
  }, {
    heading: "related-pages",
    content: "Agora skills"
  }, {
    heading: "related-pages",
    content: "Security and privacy"
  }, {
    heading: "related-pages",
    content: "Firewall requirements"
  }, {
    heading: "related-pages",
    content: "Glossary"
  }],
  headings: [{
    id: "when-to-use-this-path",
    content: "When to use this path"
  }, {
    id: "when-not-to-use-this-path",
    content: "When not to use this path"
  }, {
    id: "core-pieces",
    content: "Core pieces"
  }, {
    id: "recommended-quickstart-flow",
    content: "Recommended quickstart flow"
  }, {
    id: "security-and-network-checks",
    content: "Security and network checks"
  }, {
    id: "related-pages",
    content: "Related pages"
  }]
};
export let toc = [{
  depth: 2,
  url: "#when-to-use-this-path",
  title: _jsx(_Fragment, {
    children: "When to use this path"
  })
}, {
  depth: 2,
  url: "#when-not-to-use-this-path",
  title: _jsx(_Fragment, {
    children: "When not to use this path"
  })
}, {
  depth: 2,
  url: "#core-pieces",
  title: _jsx(_Fragment, {
    children: "Core pieces"
  })
}, {
  depth: 2,
  url: "#recommended-quickstart-flow",
  title: _jsx(_Fragment, {
    children: "Recommended quickstart flow"
  })
}, {
  depth: 2,
  url: "#security-and-network-checks",
  title: _jsx(_Fragment, {
    children: "Security and network checks"
  })
}, {
  depth: 2,
  url: "#related-pages",
  title: _jsx(_Fragment, {
    children: "Related pages"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This guide explains how to combine Agora's real-time audio transport with the OpenAI Realtime API."
    }), `
`, _jsx(_components.p, {
      children: "Use this integration when you want Agora to handle the live audio session and network transport, while OpenAI Realtime handles the model-side conversational behavior."
    }), `
`, _jsx(_components.p, {
      children: "This is not the same as building on Agora's managed Conversational AI Engine. If you want Agora to manage the voice-agent runtime, use the main Conversational AI build path instead."
    }), `
`, _jsx(_components.h2, {
      id: "when-to-use-this-path",
      children: "When to use this path"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "You already know you want to build around the OpenAI Realtime API."
      }), `
`, _jsx(_components.li, {
        children: "You need Agora RTC SDK transport in front of that model stack."
      }), `
`, _jsx(_components.li, {
        children: "You are building a browser demo, device-oriented flow, or backend-mediated prototype around OpenAI Realtime."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "when-not-to-use-this-path",
      children: "When not to use this path"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "You want the default Agora-managed voice-agent stack."
      }), `
`, _jsx(_components.li, {
        children: "You are looking for the main onboarding path for Conversational AI Engine."
      }), `
`, _jsx(_components.li, {
        children: "You want Agent Studio or the Device Kit route instead of a custom integration."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "core-pieces",
      children: "Core pieces"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Agora App ID"
        }), ": Identifies your Agora project."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "App certificate and token model"
        }), ": Used for secure join flows where needed."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Channel and user ID"
        }), ": Define the live session and participants."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "SD-RTN"
        }), ": Provides Agora's low-latency transport layer."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "OpenAI Realtime API"
        }), ": Provides the model-side real-time conversation flow."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "recommended-quickstart-flow",
      children: "Recommended quickstart flow"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Prepare your Agora account and project."
      }), `
`, _jsx(_components.li, {
        children: "Decide how your client joins the Agora session and how the OpenAI-side session is coordinated."
      }), `
`, _jsx(_components.li, {
        children: "Configure the OpenAI Realtime model and audio flow."
      }), `
`, _jsx(_components.li, {
        children: "Run the round-trip voice path locally and validate latency, auth, and media behavior."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "security-and-network-checks",
      children: "Security and network checks"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Keep Agora credentials and provider API keys on the server side."
      }), `
`, _jsx(_components.li, {
        children: "Separate local, staging, and production credentials."
      }), `
`, _jsx(_components.li, {
        children: "Review firewall requirements before testing in restricted networks."
      }), `
`, _jsx(_components.li, {
        children: "Re-test the full join and media path after changing transport or security settings."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "related-pages",
      children: "Related pages"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/ai/get-started/quickstart",
          children: "Conversational AI quickstart"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/ai/get-started/mcp-integrate",
          children: "MCP integration"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/ai/get-started/skills-integrate",
          children: "Agora skills"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/introduction/security-privacy",
          children: "Security and privacy"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/introduction/firewall",
          children: "Firewall requirements"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/introduction/glossary",
          children: "Glossary"
        })
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
