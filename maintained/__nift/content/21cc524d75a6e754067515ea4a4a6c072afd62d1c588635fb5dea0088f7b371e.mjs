import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Test your agent",
  description: "Test agents and troubleshoot configuration issues before deployment."
};
export let _markdown = `

The test interface allows you to test your agent configuration and confirm that your selected models and integrations are functioning together as expected. Use the test panel to refine your system prompts, greeting messages, and provider settings before deployment.

## Run a test call [#run-a-test-call]

1. In the navigation sidebar, select **Agents**, then select the agent you want to test.
2. From the **Action** menu, select **Edit Agent**.
3. Make sure the models selected on the **Models** tab use an **Agora Managed Key**. If you are using your own API keys, verify that your credentials are valid.
4. Select the **Test** tab in the right panel. The agent visualizer shows a **Ready to Connect** status.
5. Select **Start Call**. The agent status changes from **Ready to Connect**, to **Connecting**, to **Connected**.
   ![Test agent panel](https://assets-docs.agora.io/images/console/test-agent-panel.png)
6. Speak to your agent and confirm it responds correctly and maintains a conversation without errors.
7. Select **Hang Up** to end the test call.

## What to test [#what-to-test]

During testing, verify the following:

* **ASR accuracy**: Speak clearly and check if the agent correctly understands your speech. Review the transcript to verify transcription accuracy. If the agent frequently misunderstands you, consider adjusting ASR parameters or trying a different ASR provider.

* **LLM responses**: Confirm that the agent responds appropriately to your queries. Use the transcript to review the complete conversation flow. If responses are off-topic or unclear, refine your system prompts in the LLM configuration.

* **TTS quality**: Listen to the agent's voice output. If the voice sounds unnatural or has pronunciation issues, adjust TTS settings or select a different voice model.

* **Conversation flow**: Test multi-turn conversations to ensure the agent maintains context and handles follow-up questions correctly.

* **Integrations**: If you have configured an MCP server, knowledge base, Custom Tool, or connector, trigger a conversation that invokes the integration and verify that the agent calls it correctly and returns the expected response.

## Troubleshooting and debugging [#troubleshooting-and-debugging]

If you encounter connectivity or quality issues, refer to the following troubleshooting guide.

### Connection failures [#connection-failures]

If you cannot connect to the agent:

* Ensure that the selected Agora project has Conversational AI enabled.
* Check your internet connection.
* Refresh the page and try again.
* If the issue persists, verify that all provider API keys are valid.

### Agent doesn't respond [#agent-doesnt-respond]

If the agent doesn't respond after you speak:

* Verify that your microphone is enabled and permissions are granted in your browser.
* Check that the selected models use an Agora Managed Key or have valid credentials.
* Ensure your API keys are active and have sufficient quota with your providers.

### Poor speech recognition [#poor-speech-recognition]

If the agent frequently misunderstands your speech:

* Speak clearly and reduce background noise.
* Check that ASR language settings match the language you're speaking.
* Try adjusting ASR parameters such as model selection or sensitivity.
* Consider switching to a different ASR provider.

### Out-of-context responses [#out-of-context-responses]

If the agent provides irrelevant or unexpected responses:

* Review and refine your system prompts in the LLM configuration.
* Check that the LLM model selected is appropriate for your use case.
* Verify that your greeting message sets proper context for the conversation.

### Voice quality issues [#voice-quality-issues]

If the agent's voice sounds distorted or unnatural:

* Check your audio output device.
* Try selecting a different voice model in TTS settings.
* Adjust TTS parameters such as sample rate.
* Consider switching to a different TTS provider.

## Next steps [#next-steps]

* [Publish your agent](../deploy/deploy-agent): Publish your tested agent to production environments
* [Connect your agent](../deploy/connect-agent): Integrate your deployed agent with applications using APIs and webhooks
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The test interface allows you to test your agent configuration and confirm that your selected models and integrations are functioning together as expected. Use the test panel to refine your system prompts, greeting messages, and provider settings before deployment."
  }, {
    heading: "run-a-test-call",
    content: "In the navigation sidebar, select **Agents**, then select the agent you want to test."
  }, {
    heading: "run-a-test-call",
    content: "From the **Action** menu, select **Edit Agent**."
  }, {
    heading: "run-a-test-call",
    content: "Make sure the models selected on the **Models** tab use an **Agora Managed Key**. If you are using your own API keys, verify that your credentials are valid."
  }, {
    heading: "run-a-test-call",
    content: "Select the **Test** tab in the right panel. The agent visualizer shows a **Ready to Connect** status."
  }, {
    heading: "run-a-test-call",
    content: "Select **Start Call**. The agent status changes from **Ready to Connect**, to **Connecting**, to **Connected**."
  }, {
    heading: "run-a-test-call",
    content: "Speak to your agent and confirm it responds correctly and maintains a conversation without errors."
  }, {
    heading: "run-a-test-call",
    content: "Select **Hang Up** to end the test call."
  }, {
    heading: "what-to-test",
    content: "During testing, verify the following:"
  }, {
    heading: "what-to-test",
    content: "**ASR accuracy**: Speak clearly and check if the agent correctly understands your speech. Review the transcript to verify transcription accuracy. If the agent frequently misunderstands you, consider adjusting ASR parameters or trying a different ASR provider."
  }, {
    heading: "what-to-test",
    content: "**LLM responses**: Confirm that the agent responds appropriately to your queries. Use the transcript to review the complete conversation flow. If responses are off-topic or unclear, refine your system prompts in the LLM configuration."
  }, {
    heading: "what-to-test",
    content: "**TTS quality**: Listen to the agent's voice output. If the voice sounds unnatural or has pronunciation issues, adjust TTS settings or select a different voice model."
  }, {
    heading: "what-to-test",
    content: "**Conversation flow**: Test multi-turn conversations to ensure the agent maintains context and handles follow-up questions correctly."
  }, {
    heading: "what-to-test",
    content: "**Integrations**: If you have configured an MCP server, knowledge base, Custom Tool, or connector, trigger a conversation that invokes the integration and verify that the agent calls it correctly and returns the expected response."
  }, {
    heading: "troubleshooting-and-debugging",
    content: "If you encounter connectivity or quality issues, refer to the following troubleshooting guide."
  }, {
    heading: "connection-failures",
    content: "If you cannot connect to the agent:"
  }, {
    heading: "connection-failures",
    content: "Ensure that the selected Agora project has Conversational AI enabled."
  }, {
    heading: "connection-failures",
    content: "Check your internet connection."
  }, {
    heading: "connection-failures",
    content: "Refresh the page and try again."
  }, {
    heading: "connection-failures",
    content: "If the issue persists, verify that all provider API keys are valid."
  }, {
    heading: "agent-doesnt-respond",
    content: "If the agent doesn't respond after you speak:"
  }, {
    heading: "agent-doesnt-respond",
    content: "Verify that your microphone is enabled and permissions are granted in your browser."
  }, {
    heading: "agent-doesnt-respond",
    content: "Check that the selected models use an Agora Managed Key or have valid credentials."
  }, {
    heading: "agent-doesnt-respond",
    content: "Ensure your API keys are active and have sufficient quota with your providers."
  }, {
    heading: "poor-speech-recognition",
    content: "If the agent frequently misunderstands your speech:"
  }, {
    heading: "poor-speech-recognition",
    content: "Speak clearly and reduce background noise."
  }, {
    heading: "poor-speech-recognition",
    content: "Check that ASR language settings match the language you're speaking."
  }, {
    heading: "poor-speech-recognition",
    content: "Try adjusting ASR parameters such as model selection or sensitivity."
  }, {
    heading: "poor-speech-recognition",
    content: "Consider switching to a different ASR provider."
  }, {
    heading: "out-of-context-responses",
    content: "If the agent provides irrelevant or unexpected responses:"
  }, {
    heading: "out-of-context-responses",
    content: "Review and refine your system prompts in the LLM configuration."
  }, {
    heading: "out-of-context-responses",
    content: "Check that the LLM model selected is appropriate for your use case."
  }, {
    heading: "out-of-context-responses",
    content: "Verify that your greeting message sets proper context for the conversation."
  }, {
    heading: "voice-quality-issues",
    content: "If the agent's voice sounds distorted or unnatural:"
  }, {
    heading: "voice-quality-issues",
    content: "Check your audio output device."
  }, {
    heading: "voice-quality-issues",
    content: "Try selecting a different voice model in TTS settings."
  }, {
    heading: "voice-quality-issues",
    content: "Adjust TTS parameters such as sample rate."
  }, {
    heading: "voice-quality-issues",
    content: "Consider switching to a different TTS provider."
  }, {
    heading: "next-steps",
    content: "Publish your agent: Publish your tested agent to production environments"
  }, {
    heading: "next-steps",
    content: "Connect your agent: Integrate your deployed agent with applications using APIs and webhooks"
  }],
  headings: [{
    id: "run-a-test-call",
    content: "Run a test call"
  }, {
    id: "what-to-test",
    content: "What to test"
  }, {
    id: "troubleshooting-and-debugging",
    content: "Troubleshooting and debugging"
  }, {
    id: "connection-failures",
    content: "Connection failures"
  }, {
    id: "agent-doesnt-respond",
    content: "Agent doesn't respond"
  }, {
    id: "poor-speech-recognition",
    content: "Poor speech recognition"
  }, {
    id: "out-of-context-responses",
    content: "Out-of-context responses"
  }, {
    id: "voice-quality-issues",
    content: "Voice quality issues"
  }, {
    id: "next-steps",
    content: "Next steps"
  }]
};
export let toc = [{
  depth: 2,
  url: "#run-a-test-call",
  title: _jsx(_Fragment, {
    children: "Run a test call"
  })
}, {
  depth: 2,
  url: "#what-to-test",
  title: _jsx(_Fragment, {
    children: "What to test"
  })
}, {
  depth: 2,
  url: "#troubleshooting-and-debugging",
  title: _jsx(_Fragment, {
    children: "Troubleshooting and debugging"
  })
}, {
  depth: 3,
  url: "#connection-failures",
  title: _jsx(_Fragment, {
    children: "Connection failures"
  })
}, {
  depth: 3,
  url: "#agent-doesnt-respond",
  title: _jsx(_Fragment, {
    children: "Agent doesn't respond"
  })
}, {
  depth: 3,
  url: "#poor-speech-recognition",
  title: _jsx(_Fragment, {
    children: "Poor speech recognition"
  })
}, {
  depth: 3,
  url: "#out-of-context-responses",
  title: _jsx(_Fragment, {
    children: "Out-of-context responses"
  })
}, {
  depth: 3,
  url: "#voice-quality-issues",
  title: _jsx(_Fragment, {
    children: "Voice quality issues"
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
    h3: "h3",
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
      children: "The test interface allows you to test your agent configuration and confirm that your selected models and integrations are functioning together as expected. Use the test panel to refine your system prompts, greeting messages, and provider settings before deployment."
    }), `
`, _jsx(_components.h2, {
      id: "run-a-test-call",
      children: "Run a test call"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
          children: "Agents"
        }), ", then select the agent you want to test."]
      }), `
`, _jsxs(_components.li, {
        children: ["From the ", _jsx(_components.strong, {
          children: "Action"
        }), " menu, select ", _jsx(_components.strong, {
          children: "Edit Agent"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Make sure the models selected on the ", _jsx(_components.strong, {
          children: "Models"
        }), " tab use an ", _jsx(_components.strong, {
          children: "Agora Managed Key"
        }), ". If you are using your own API keys, verify that your credentials are valid."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select the ", _jsx(_components.strong, {
          children: "Test"
        }), " tab in the right panel. The agent visualizer shows a ", _jsx(_components.strong, {
          children: "Ready to Connect"
        }), " status."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Start Call"
        }), ". The agent status changes from ", _jsx(_components.strong, {
          children: "Ready to Connect"
        }), ", to ", _jsx(_components.strong, {
          children: "Connecting"
        }), ", to ", _jsx(_components.strong, {
          children: "Connected"
        }), `.
`, _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/console/test-agent-panel.png",
          alt: "Test agent panel"
        })]
      }), `
`, _jsx(_components.li, {
        children: "Speak to your agent and confirm it responds correctly and maintains a conversation without errors."
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Hang Up"
        }), " to end the test call."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "what-to-test",
      children: "What to test"
    }), `
`, _jsx(_components.p, {
      children: "During testing, verify the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "ASR accuracy"
          }), ": Speak clearly and check if the agent correctly understands your speech. Review the transcript to verify transcription accuracy. If the agent frequently misunderstands you, consider adjusting ASR parameters or trying a different ASR provider."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "LLM responses"
          }), ": Confirm that the agent responds appropriately to your queries. Use the transcript to review the complete conversation flow. If responses are off-topic or unclear, refine your system prompts in the LLM configuration."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "TTS quality"
          }), ": Listen to the agent's voice output. If the voice sounds unnatural or has pronunciation issues, adjust TTS settings or select a different voice model."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Conversation flow"
          }), ": Test multi-turn conversations to ensure the agent maintains context and handles follow-up questions correctly."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Integrations"
          }), ": If you have configured an MCP server, knowledge base, Custom Tool, or connector, trigger a conversation that invokes the integration and verify that the agent calls it correctly and returns the expected response."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "troubleshooting-and-debugging",
      children: "Troubleshooting and debugging"
    }), `
`, _jsx(_components.p, {
      children: "If you encounter connectivity or quality issues, refer to the following troubleshooting guide."
    }), `
`, _jsx(_components.h3, {
      id: "connection-failures",
      children: "Connection failures"
    }), `
`, _jsx(_components.p, {
      children: "If you cannot connect to the agent:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Ensure that the selected Agora project has Conversational AI enabled."
      }), `
`, _jsx(_components.li, {
        children: "Check your internet connection."
      }), `
`, _jsx(_components.li, {
        children: "Refresh the page and try again."
      }), `
`, _jsx(_components.li, {
        children: "If the issue persists, verify that all provider API keys are valid."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "agent-doesnt-respond",
      children: "Agent doesn't respond"
    }), `
`, _jsx(_components.p, {
      children: "If the agent doesn't respond after you speak:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Verify that your microphone is enabled and permissions are granted in your browser."
      }), `
`, _jsx(_components.li, {
        children: "Check that the selected models use an Agora Managed Key or have valid credentials."
      }), `
`, _jsx(_components.li, {
        children: "Ensure your API keys are active and have sufficient quota with your providers."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "poor-speech-recognition",
      children: "Poor speech recognition"
    }), `
`, _jsx(_components.p, {
      children: "If the agent frequently misunderstands your speech:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Speak clearly and reduce background noise."
      }), `
`, _jsx(_components.li, {
        children: "Check that ASR language settings match the language you're speaking."
      }), `
`, _jsx(_components.li, {
        children: "Try adjusting ASR parameters such as model selection or sensitivity."
      }), `
`, _jsx(_components.li, {
        children: "Consider switching to a different ASR provider."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "out-of-context-responses",
      children: "Out-of-context responses"
    }), `
`, _jsx(_components.p, {
      children: "If the agent provides irrelevant or unexpected responses:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Review and refine your system prompts in the LLM configuration."
      }), `
`, _jsx(_components.li, {
        children: "Check that the LLM model selected is appropriate for your use case."
      }), `
`, _jsx(_components.li, {
        children: "Verify that your greeting message sets proper context for the conversation."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "voice-quality-issues",
      children: "Voice quality issues"
    }), `
`, _jsx(_components.p, {
      children: "If the agent's voice sounds distorted or unnatural:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Check your audio output device."
      }), `
`, _jsx(_components.li, {
        children: "Try selecting a different voice model in TTS settings."
      }), `
`, _jsx(_components.li, {
        children: "Adjust TTS parameters such as sample rate."
      }), `
`, _jsx(_components.li, {
        children: "Consider switching to a different TTS provider."
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
          href: "../deploy/deploy-agent",
          children: "Publish your agent"
        }), ": Publish your tested agent to production environments"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../deploy/connect-agent",
          children: "Connect your agent"
        }), ": Integrate your deployed agent with applications using APIs and webhooks"]
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
