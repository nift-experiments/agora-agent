import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Handle inbound calls",
  description: "Import a number and associate it with an agent to answer inbound calls."
};
export let _markdown = `

After configuring your Twilio SIP trunk for inbound calling, import your phone number and associate it with an agent. Once set up, calls to your number are automatically routed to your agent.

## Prerequisites [#prerequisites]

* An active Agora account with Conversational AI enabled.
* A published agent.
* A Twilio phone number with Elastic SIP Trunk configured for inbound calling. See [Set up SIP trunk](sip-trunk#inbound-calling-setup).

## Import the number [#import-the-number]

Follow the steps in [Import a phone number](import) to add your Twilio number. After importing, the Origination URI for your number is displayed. Copy this back to your Twilio SIP trunk. See [Set up SIP trunk](sip-trunk#inbound-calling-setup).

## Assign the number to an agent [#assign-the-number-to-an-agent]

Follow these steps to associate the number with an agent and configure call handling.

1. In the navigation sidebar, select **Phone Numbers**.
2. Find the number you imported in the list.
3. Under the **Associated Agent** column, select **Associate Agent**.
4. In the **Inbound Settings** panel, use **Assign to Agent** to select the agent you want to associate with the number.
   ![Inbound Call Settings](https://assets-docs.agora.io/images/console/inbound-settings.png)
5. Configure the following options:
   * **Enable transcript**: Enable automatic call transcription.
   * **Enable recording**: Enable automatic call recording.
   * **Hang-up Configuration**
     * **Max Call Duration (seconds)** (required): Maximum length for a conversation.
     * **Silence Timeout (seconds)** (required): Call ends after this duration with no response.
     * **End call on conversation end**: Hang up when the conversation concludes naturally.
     * **End call on silence**: The call hangs up automatically if the user is silent for too long.
   * **Transfer to human**: Configure a phone number destination for call transfers. When enabled, configure the following:
     * **Transfer destination**: The phone number to transfer the call to. Select **Enforce E.164 format** to require the number to be entered in E.164 format.
     * **Transfer criteria**: Describe when calls should be transferred to a human. Select **Show Example** for a sample.
   * **Post Call Analysis**
     * **Enable post-call analysis**: Automatically extract structured outputs from calls according to business needs.
6. Select **Save changes**.

## Next steps [#next-steps]

* [Call history](../observe/call-history): Review transcripts and outcomes for inbound calls
* [Agent analytics](../observe/analytics): Monitor inbound call performance
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "After configuring your Twilio SIP trunk for inbound calling, import your phone number and associate it with an agent. Once set up, calls to your number are automatically routed to your agent."
  }, {
    heading: "prerequisites",
    content: "An active Agora account with Conversational AI enabled."
  }, {
    heading: "prerequisites",
    content: "A published agent."
  }, {
    heading: "prerequisites",
    content: "A Twilio phone number with Elastic SIP Trunk configured for inbound calling. See Set up SIP trunk."
  }, {
    heading: "import-the-number",
    content: "Follow the steps in Import a phone number to add your Twilio number. After importing, the Origination URI for your number is displayed. Copy this back to your Twilio SIP trunk. See Set up SIP trunk."
  }, {
    heading: "assign-the-number-to-an-agent",
    content: "Follow these steps to associate the number with an agent and configure call handling."
  }, {
    heading: "assign-the-number-to-an-agent",
    content: "In the navigation sidebar, select **Phone Numbers**."
  }, {
    heading: "assign-the-number-to-an-agent",
    content: "Find the number you imported in the list."
  }, {
    heading: "assign-the-number-to-an-agent",
    content: "Under the **Associated Agent** column, select **Associate Agent**."
  }, {
    heading: "assign-the-number-to-an-agent",
    content: "In the **Inbound Settings** panel, use **Assign to Agent** to select the agent you want to associate with the number."
  }, {
    heading: "assign-the-number-to-an-agent",
    content: "Configure the following options:"
  }, {
    heading: "assign-the-number-to-an-agent",
    content: "**Enable transcript**: Enable automatic call transcription."
  }, {
    heading: "assign-the-number-to-an-agent",
    content: "**Enable recording**: Enable automatic call recording."
  }, {
    heading: "assign-the-number-to-an-agent",
    content: "**Hang-up Configuration**"
  }, {
    heading: "assign-the-number-to-an-agent",
    content: "**Max Call Duration (seconds)** (required): Maximum length for a conversation."
  }, {
    heading: "assign-the-number-to-an-agent",
    content: "**Silence Timeout (seconds)** (required): Call ends after this duration with no response."
  }, {
    heading: "assign-the-number-to-an-agent",
    content: "**End call on conversation end**: Hang up when the conversation concludes naturally."
  }, {
    heading: "assign-the-number-to-an-agent",
    content: "**End call on silence**: The call hangs up automatically if the user is silent for too long."
  }, {
    heading: "assign-the-number-to-an-agent",
    content: "**Transfer to human**: Configure a phone number destination for call transfers. When enabled, configure the following:"
  }, {
    heading: "assign-the-number-to-an-agent",
    content: "**Transfer destination**: The phone number to transfer the call to. Select **Enforce E.164 format** to require the number to be entered in E.164 format."
  }, {
    heading: "assign-the-number-to-an-agent",
    content: "**Transfer criteria**: Describe when calls should be transferred to a human. Select **Show Example** for a sample."
  }, {
    heading: "assign-the-number-to-an-agent",
    content: "**Post Call Analysis**"
  }, {
    heading: "assign-the-number-to-an-agent",
    content: "**Enable post-call analysis**: Automatically extract structured outputs from calls according to business needs."
  }, {
    heading: "assign-the-number-to-an-agent",
    content: "Select **Save changes**."
  }, {
    heading: "next-steps",
    content: "Call history: Review transcripts and outcomes for inbound calls"
  }, {
    heading: "next-steps",
    content: "Agent analytics: Monitor inbound call performance"
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "import-the-number",
    content: "Import the number"
  }, {
    id: "assign-the-number-to-an-agent",
    content: "Assign the number to an agent"
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
  url: "#import-the-number",
  title: _jsx(_Fragment, {
    children: "Import the number"
  })
}, {
  depth: 2,
  url: "#assign-the-number-to-an-agent",
  title: _jsx(_Fragment, {
    children: "Assign the number to an agent"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "After configuring your Twilio SIP trunk for inbound calling, import your phone number and associate it with an agent. Once set up, calls to your number are automatically routed to your agent."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "An active Agora account with Conversational AI enabled."
      }), `
`, _jsx(_components.li, {
        children: "A published agent."
      }), `
`, _jsxs(_components.li, {
        children: ["A Twilio phone number with Elastic SIP Trunk configured for inbound calling. See ", _jsx(_components.a, {
          href: "sip-trunk#inbound-calling-setup",
          children: "Set up SIP trunk"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "import-the-number",
      children: "Import the number"
    }), `
`, _jsxs(_components.p, {
      children: ["Follow the steps in ", _jsx(_components.a, {
        href: "import",
        children: "Import a phone number"
      }), " to add your Twilio number. After importing, the Origination URI for your number is displayed. Copy this back to your Twilio SIP trunk. See ", _jsx(_components.a, {
        href: "sip-trunk#inbound-calling-setup",
        children: "Set up SIP trunk"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "assign-the-number-to-an-agent",
      children: "Assign the number to an agent"
    }), `
`, _jsx(_components.p, {
      children: "Follow these steps to associate the number with an agent and configure call handling."
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
          children: "Phone Numbers"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Find the number you imported in the list."
      }), `
`, _jsxs(_components.li, {
        children: ["Under the ", _jsx(_components.strong, {
          children: "Associated Agent"
        }), " column, select ", _jsx(_components.strong, {
          children: "Associate Agent"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["In the ", _jsx(_components.strong, {
          children: "Inbound Settings"
        }), " panel, use ", _jsx(_components.strong, {
          children: "Assign to Agent"
        }), ` to select the agent you want to associate with the number.
`, _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/console/inbound-settings.png",
          alt: "Inbound Call Settings"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Configure the following options:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Enable transcript"
            }), ": Enable automatic call transcription."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Enable recording"
            }), ": Enable automatic call recording."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Hang-up Configuration"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Max Call Duration (seconds)"
                }), " (required): Maximum length for a conversation."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Silence Timeout (seconds)"
                }), " (required): Call ends after this duration with no response."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "End call on conversation end"
                }), ": Hang up when the conversation concludes naturally."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "End call on silence"
                }), ": The call hangs up automatically if the user is silent for too long."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Transfer to human"
            }), ": Configure a phone number destination for call transfers. When enabled, configure the following:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Transfer destination"
                }), ": The phone number to transfer the call to. Select ", _jsx(_components.strong, {
                  children: "Enforce E.164 format"
                }), " to require the number to be entered in E.164 format."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Transfer criteria"
                }), ": Describe when calls should be transferred to a human. Select ", _jsx(_components.strong, {
                  children: "Show Example"
                }), " for a sample."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Post Call Analysis"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Enable post-call analysis"
                }), ": Automatically extract structured outputs from calls according to business needs."]
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Save changes"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "next-steps",
      children: "Next steps"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../observe/call-history",
          children: "Call history"
        }), ": Review transcripts and outcomes for inbound calls"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../observe/analytics",
          children: "Agent analytics"
        }), ": Monitor inbound call performance"]
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
