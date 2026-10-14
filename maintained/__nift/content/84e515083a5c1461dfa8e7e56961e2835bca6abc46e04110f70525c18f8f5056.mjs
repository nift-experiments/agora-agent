import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Customize your agent",
  description: "Customize your agent using advanced configuration options in the agent editor."
};
export let _markdown = `

This guide covers the configuration options available in the agent editor. The editor is organized into four tabs: **Prompt**, **Models**, **Advanced**, and **Actions**.

If you need assistance exploring or debugging your project through natural language, see [Concierge](concierge).

## Prerequisites [#prerequisites]

Follow [Create your first agent](../quickstart) or use [Concierge](concierge) to create your first agent.

## Open the agent editor [#open-the-agent-editor]

To configure an agent in the editor:

1. In Agora Console, select your project from the project dropdown at the top of the page.
2. In the navigation sidebar, select **Agents**.
3. Click an existing agent in the list.

The agent editor provides the following tabs.

## Prompt [#prompt]

Use this tab to specify the core instructions that define your agent's identity and behavior.

![Agent editor prompt tab UI](https://assets-docs.agora.io/images/console/agent-editor-prompt.png)

* **System prompt**: The base instructions that shape how your agent thinks, speaks, and escalates. For example: \`You are a helpful customer support assistant.\` See [Prompt design](prompt-design) for guidance on writing effective prompts.
* **Greeting**: The first assistant message before the live exchange starts. For example: \`Hello! How can I help you today?\`
* **Failure message**: The fallback message used when the agent needs a moment or cannot proceed. For example: \`Please hold on a second.\`

Use \`{{variable_name}}\` in the system prompt, greeting, or failure message to insert dynamic values that match column names in your CSV file. See [Template variables](prompt-design#template-variables) to customize these fields for each user.

## Models [#models]

Use this tab to select the ASR, LLM, and TTS models your agent uses. Click the settings icon to open the configuration panel. The **Vendor** dropdown lists vendor-model combinations that support **Agora Managed Key**. To use your own API key, see [Bring your own API key (BYOK)](#bring-your-own-api-key-byok).

![](https://assets-docs.agora.io/images/console/agent-editor-models.png)

### ASR [#asr]

* **Automatic Speech Recognition (ASR)**: Select a vendor-model from the dropdown.
* **Language**: Select the primary language for agent interaction using the BCP-47 language tag.
* **Model**: The speech recognition model to use.

For supported vendors, see [Supported ASR vendors](supported-vendors#asr-vendors).

### LLM [#llm]

* **Large Language Model (LLM)**: Select a vendor-model from the dropdown.

For detailed parameter descriptions, see [\`llm\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm) in the API reference or navigate to the selected vendor page from [Supported LLM vendors](supported-vendors#llm-vendors).

### TTS [#tts]

* **Text-to-Speech (TTS)**: Select a vendor-model from the dropdown.
* **Voice**: Select a voice for the selected TTS vendor-model.

For detailed parameter descriptions, navigate to the selected vendor page from [Supported TTS vendors](supported-vendors#tts-vendors).

### MLLM [#mllm]

Select **Realtime Model** at the top of the Models tab to use a single multimodal model for speech recognition, LLM, and speech generation, instead of separate ASR, LLM, and TTS models.

* **MLLM**: Select a vendor-model from the dropdown.
* **Voice**: Select a voice for the selected MLLM.

For supported vendors, see [Supported MLLM vendors](supported-vendors#mllm-vendors).

<CalloutContainer type="info">
  <CalloutTitle>
    Info
  </CalloutTitle>

  <CalloutDescription>
    No MLLM vendor-models are currently available under Agora Managed Key. [Add your own credential](integrations#credentials), then select it from the **Credentials** dropdown.
  </CalloutDescription>
</CalloutContainer>

### Bring your own API key (BYOK) [#bring-your-own-api-key-byok]

To use your own API key or to select a vendor or model not available under Agora Managed Key, select the settings icon next to the relevant model. This opens a configuration panel where you can select any supported vendor and add your own API credentials. See [Manage integrations](integrations#credentials) for details on adding credentials.

![](https://assets-docs.agora.io/images/console/configure-llm.png)

## Advanced [#advanced]

Use this tab to configure the hosting region, turn detection, speech detection, selective attention locking, filler words, voice format, and conversation history.

![](https://assets-docs.agora.io/images/console/agent-editor-advanced.png)

### Project [#project]

* **Project**: The Agora project used to track your billing and usage.
* **App ID**: The unique identifier for the project. Select the copy icon to copy the ID to your clipboard.
* **Hosting Region**: The region where your project's data is stored.

### Turn detection [#turn-detection]

Turn detection controls how the agent manages conversation flow and turn-taking behavior. Use the toggle to enable or disable turn detection, then use one of the **Quick Presets** to get started quickly, or select **Custom** to configure individual parameters.

**Quick Presets:**

* **Responsive**: Optimized for fast-paced conversations.

* **Balanced**: A middle ground between responsiveness and naturalness. Suitable for most use cases.

* **Patient**: Optimized for slower, more thoughtful conversations.

* **Custom**: Manually configure individual parameters.

* **Threshold**: The audio level required for the system to detect speech. Lower values increase sensitivity and work better in quiet environments; higher values help filter out background noise.

### Start of speech [#start-of-speech]

Controls how the system detects when the user starts speaking. Use the toggle to enable or disable start of speech detection.

![](https://assets-docs.agora.io/images/console/start-of-speech.png)

* **Start Mode**: Select one of the following:
  * **Voice Activity Detection (VAD)**: Detects speech based on silence duration.
  * **Keyword Triggered**: Triggers detection on configured keywords.
  * **Disabled**: No active detection.

* **Interrupt Duration (ms)**: How long the agent waits after you stop talking before it responds. Lower values result in faster responses; higher values give the user more time to speak.

* **Speaking Interrupt Duration (ms)**: How long the user must speak while the agent is talking before the system decides to interrupt. Lower values make the agent easier to interrupt; higher values make it less interruptible.

* **Prefix Padding (ms)**: Buffer time added to avoid cutting off the start or end of words. Lower values reduce latency; higher values reduce the chance of clipping.

### End of speech [#end-of-speech]

Controls how the system decides the user has finished their thought.

![](https://assets-docs.agora.io/images/console/end-of-speech.png)

* **End Mode**: Select one of the following:
  * **Voice Activity Detection (VAD)**: Detects end of speech based on silence duration.
  * **Semantic**: Analyzes the semantic meaning of speech to identify natural pause points. Recommended for more natural conversations.

* **Silence Duration (ms)**: How long the agent waits after you stop talking before it considers you finished. Lower values result in faster responses; higher values give the user more time to complete their thought.

### Selective attention locking (SAL) [#selective-attention-locking-sal]

Helps the agent focus on the right voice while filtering out background conversations and noise.

![](https://assets-docs.agora.io/images/console/selective-attention-locking.png)

* **SAL Mode**: Select one of the following:
  * **Speaker Lock**: Blocks all other background noise and adapts to the detected speaker.
  * **Voiceprint Recognition**: Identifies known speakers using voiceprint. When enabled, configure the following:
    * **Voiceprint URL**: URL to a voiceprint audio file. Supported format: 16kHz, 16-bit, mono PCM. Maximum size: 2 MB.

### Filler words [#filler-words]

When enabled, the agent uses natural filler phrases while processing a response, reducing awkward silences.

![](https://assets-docs.agora.io/images/console/filler-words.png)

* **Filler Words**: Enter up to 100 filler words or phrases.

* **Response Wait Threshold (ms)**: How long the agent waits before it starts using filler words. Lower values trigger fillers sooner; higher values give the LLM more time to respond before fillers are used.

* **Selection Rule**: Controls how filler phrases are selected:
  * **Shuffle**: Random, no repeats until all phrases are exhausted.
  * **Round Robin**: Played sequentially.

### Voice format [#voice-format]

When enabled, the agent normalizes chat completions for speech output, so numbers and other text are read naturally.

![](https://assets-docs.agora.io/images/console/voice-format.png)

* **Digit Cutoff**: Numbers larger than this cutoff are normalized for speech output.
* **Custom Replacements**: Add up to 5 exact or regex replacements.

### History [#history]

* **Max History**: The maximum number of conversation history messages included in context. Higher values give the agent more memory of the conversation but increase LLM token usage.

## Actions [#actions]

Use this tab to connect your agent to external data and services.

![](https://assets-docs.agora.io/images/console/agent-editor-actions.png)

### Knowledge base [#knowledge-base]

A knowledge base provides your agent with additional context from reference documents. Select **+ Add Knowledge Base** to select or create a knowledge base. See [Add knowledge base](integrations#knowledge-bases).

### MCP servers [#mcp-servers]

MCP servers enable your agent to call tools provided by external services. Select **+ Add MCP Server** to select or create an MCP server. See [Add MCP server](integrations#mcp-servers).

### Custom tools [#custom-tools]

Custom Tools let your agent call reusable HTTP endpoints that you defined in **Integrations*&#x2A;. Select **+ Add Custom Tools** to attach one or more tools to this agent. See [Custom Tools](custom-tools).

### Connectors [#connectors]

Connectors let your agent use built-in integrations managed in **Integrations**. Attach HubSpot when your agent needs CRM contact or ticket workflows. See [HubSpot Connector](hubspot-connector).

## Next steps [#next-steps]

* [Manage integrations](integrations): Manage credentials, MCP servers, and knowledge bases for reuse across agents
* [Custom Tools](custom-tools): Create reusable HTTP tools and attach them to agents
* [HubSpot Connector](hubspot-connector): Connect HubSpot for contacts and tickets workflows
* [Test your agent](test-agent): Learn more about testing features and troubleshooting agent behavior
* [Publish your agent](../deploy/deploy-agent): Publish your agent to production
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This guide covers the configuration options available in the agent editor. The editor is organized into four tabs: **Prompt**, **Models**, **Advanced**, and **Actions**."
  }, {
    heading: undefined,
    content: "If you need assistance exploring or debugging your project through natural language, see Concierge."
  }, {
    heading: "prerequisites",
    content: "Follow Create your first agent or use Concierge to create your first agent."
  }, {
    heading: "open-the-agent-editor",
    content: "To configure an agent in the editor:"
  }, {
    heading: "open-the-agent-editor",
    content: "In Agora Console, select your project from the project dropdown at the top of the page."
  }, {
    heading: "open-the-agent-editor",
    content: "In the navigation sidebar, select **Agents**."
  }, {
    heading: "open-the-agent-editor",
    content: "Click an existing agent in the list."
  }, {
    heading: "open-the-agent-editor",
    content: "The agent editor provides the following tabs."
  }, {
    heading: "prompt",
    content: "Use this tab to specify the core instructions that define your agent's identity and behavior."
  }, {
    heading: "prompt",
    content: "**System prompt**: The base instructions that shape how your agent thinks, speaks, and escalates. For example: `You are a helpful customer support assistant.` See Prompt design for guidance on writing effective prompts."
  }, {
    heading: "prompt",
    content: "**Greeting**: The first assistant message before the live exchange starts. For example: `Hello! How can I help you today?`"
  }, {
    heading: "prompt",
    content: "**Failure message**: The fallback message used when the agent needs a moment or cannot proceed. For example: `Please hold on a second.`"
  }, {
    heading: "prompt",
    content: "Use `{{variable_name}}` in the system prompt, greeting, or failure message to insert dynamic values that match column names in your CSV file. See Template variables to customize these fields for each user."
  }, {
    heading: "models",
    content: "Use this tab to select the ASR, LLM, and TTS models your agent uses. Click the settings icon to open the configuration panel. The **Vendor** dropdown lists vendor-model combinations that support **Agora Managed Key**. To use your own API key, see Bring your own API key (BYOK)."
  }, {
    heading: "asr",
    content: "**Automatic Speech Recognition (ASR)**: Select a vendor-model from the dropdown."
  }, {
    heading: "asr",
    content: "**Language**: Select the primary language for agent interaction using the BCP-47 language tag."
  }, {
    heading: "asr",
    content: "**Model**: The speech recognition model to use."
  }, {
    heading: "asr",
    content: "For supported vendors, see Supported ASR vendors."
  }, {
    heading: "llm",
    content: "**Large Language Model (LLM)**: Select a vendor-model from the dropdown."
  }, {
    heading: "llm",
    content: "For detailed parameter descriptions, see `llm` in the API reference or navigate to the selected vendor page from Supported LLM vendors."
  }, {
    heading: "tts",
    content: "**Text-to-Speech (TTS)**: Select a vendor-model from the dropdown."
  }, {
    heading: "tts",
    content: "**Voice**: Select a voice for the selected TTS vendor-model."
  }, {
    heading: "tts",
    content: "For detailed parameter descriptions, navigate to the selected vendor page from Supported TTS vendors."
  }, {
    heading: "mllm",
    content: "Select **Realtime Model** at the top of the Models tab to use a single multimodal model for speech recognition, LLM, and speech generation, instead of separate ASR, LLM, and TTS models."
  }, {
    heading: "mllm",
    content: "**MLLM**: Select a vendor-model from the dropdown."
  }, {
    heading: "mllm",
    content: "**Voice**: Select a voice for the selected MLLM."
  }, {
    heading: "mllm",
    content: "For supported vendors, see Supported MLLM vendors."
  }, {
    heading: "mllm",
    content: "No MLLM vendor-models are currently available under Agora Managed Key. Add your own credential, then select it from the **Credentials** dropdown."
  }, {
    heading: "bring-your-own-api-key-byok",
    content: "To use your own API key or to select a vendor or model not available under Agora Managed Key, select the settings icon next to the relevant model. This opens a configuration panel where you can select any supported vendor and add your own API credentials. See Manage integrations for details on adding credentials."
  }, {
    heading: "advanced",
    content: "Use this tab to configure the hosting region, turn detection, speech detection, selective attention locking, filler words, voice format, and conversation history."
  }, {
    heading: "project",
    content: "**Project**: The Agora project used to track your billing and usage."
  }, {
    heading: "project",
    content: "**App ID**: The unique identifier for the project. Select the copy icon to copy the ID to your clipboard."
  }, {
    heading: "project",
    content: "**Hosting Region**: The region where your project's data is stored."
  }, {
    heading: "turn-detection",
    content: "Turn detection controls how the agent manages conversation flow and turn-taking behavior. Use the toggle to enable or disable turn detection, then use one of the **Quick Presets** to get started quickly, or select **Custom** to configure individual parameters."
  }, {
    heading: "turn-detection",
    content: "**Quick Presets:**"
  }, {
    heading: "turn-detection",
    content: "**Responsive**: Optimized for fast-paced conversations."
  }, {
    heading: "turn-detection",
    content: "**Balanced**: A middle ground between responsiveness and naturalness. Suitable for most use cases."
  }, {
    heading: "turn-detection",
    content: "**Patient**: Optimized for slower, more thoughtful conversations."
  }, {
    heading: "turn-detection",
    content: "**Custom**: Manually configure individual parameters."
  }, {
    heading: "turn-detection",
    content: "**Threshold**: The audio level required for the system to detect speech. Lower values increase sensitivity and work better in quiet environments; higher values help filter out background noise."
  }, {
    heading: "start-of-speech",
    content: "Controls how the system detects when the user starts speaking. Use the toggle to enable or disable start of speech detection."
  }, {
    heading: "start-of-speech",
    content: "**Start Mode**: Select one of the following:"
  }, {
    heading: "start-of-speech",
    content: "**Voice Activity Detection (VAD)**: Detects speech based on silence duration."
  }, {
    heading: "start-of-speech",
    content: "**Keyword Triggered**: Triggers detection on configured keywords."
  }, {
    heading: "start-of-speech",
    content: "**Disabled**: No active detection."
  }, {
    heading: "start-of-speech",
    content: "**Interrupt Duration (ms)**: How long the agent waits after you stop talking before it responds. Lower values result in faster responses; higher values give the user more time to speak."
  }, {
    heading: "start-of-speech",
    content: "**Speaking Interrupt Duration (ms)**: How long the user must speak while the agent is talking before the system decides to interrupt. Lower values make the agent easier to interrupt; higher values make it less interruptible."
  }, {
    heading: "start-of-speech",
    content: "**Prefix Padding (ms)**: Buffer time added to avoid cutting off the start or end of words. Lower values reduce latency; higher values reduce the chance of clipping."
  }, {
    heading: "end-of-speech",
    content: "Controls how the system decides the user has finished their thought."
  }, {
    heading: "end-of-speech",
    content: "**End Mode**: Select one of the following:"
  }, {
    heading: "end-of-speech",
    content: "**Voice Activity Detection (VAD)**: Detects end of speech based on silence duration."
  }, {
    heading: "end-of-speech",
    content: "**Semantic**: Analyzes the semantic meaning of speech to identify natural pause points. Recommended for more natural conversations."
  }, {
    heading: "end-of-speech",
    content: "**Silence Duration (ms)**: How long the agent waits after you stop talking before it considers you finished. Lower values result in faster responses; higher values give the user more time to complete their thought."
  }, {
    heading: "selective-attention-locking-sal",
    content: "Helps the agent focus on the right voice while filtering out background conversations and noise."
  }, {
    heading: "selective-attention-locking-sal",
    content: "**SAL Mode**: Select one of the following:"
  }, {
    heading: "selective-attention-locking-sal",
    content: "**Speaker Lock**: Blocks all other background noise and adapts to the detected speaker."
  }, {
    heading: "selective-attention-locking-sal",
    content: "**Voiceprint Recognition**: Identifies known speakers using voiceprint. When enabled, configure the following:"
  }, {
    heading: "selective-attention-locking-sal",
    content: "**Voiceprint URL**: URL to a voiceprint audio file. Supported format: 16kHz, 16-bit, mono PCM. Maximum size: 2 MB."
  }, {
    heading: "filler-words",
    content: "When enabled, the agent uses natural filler phrases while processing a response, reducing awkward silences."
  }, {
    heading: "filler-words",
    content: "**Filler Words**: Enter up to 100 filler words or phrases."
  }, {
    heading: "filler-words",
    content: "**Response Wait Threshold (ms)**: How long the agent waits before it starts using filler words. Lower values trigger fillers sooner; higher values give the LLM more time to respond before fillers are used."
  }, {
    heading: "filler-words",
    content: "**Selection Rule**: Controls how filler phrases are selected:"
  }, {
    heading: "filler-words",
    content: "**Shuffle**: Random, no repeats until all phrases are exhausted."
  }, {
    heading: "filler-words",
    content: "**Round Robin**: Played sequentially."
  }, {
    heading: "voice-format",
    content: "When enabled, the agent normalizes chat completions for speech output, so numbers and other text are read naturally."
  }, {
    heading: "voice-format",
    content: "**Digit Cutoff**: Numbers larger than this cutoff are normalized for speech output."
  }, {
    heading: "voice-format",
    content: "**Custom Replacements**: Add up to 5 exact or regex replacements."
  }, {
    heading: "history",
    content: "**Max History**: The maximum number of conversation history messages included in context. Higher values give the agent more memory of the conversation but increase LLM token usage."
  }, {
    heading: "actions",
    content: "Use this tab to connect your agent to external data and services."
  }, {
    heading: "knowledge-base",
    content: "A knowledge base provides your agent with additional context from reference documents. Select **+ Add Knowledge Base** to select or create a knowledge base. See Add knowledge base."
  }, {
    heading: "mcp-servers",
    content: "MCP servers enable your agent to call tools provided by external services. Select **+ Add MCP Server** to select or create an MCP server. See Add MCP server."
  }, {
    heading: "custom-tools",
    content: "Custom Tools let your agent call reusable HTTP endpoints that you defined in **Integrations*&#x2A;. Select **+ Add Custom Tools** to attach one or more tools to this agent. See Custom Tools."
  }, {
    heading: "connectors",
    content: "Connectors let your agent use built-in integrations managed in **Integrations**. Attach HubSpot when your agent needs CRM contact or ticket workflows. See HubSpot Connector."
  }, {
    heading: "next-steps",
    content: "Manage integrations: Manage credentials, MCP servers, and knowledge bases for reuse across agents"
  }, {
    heading: "next-steps",
    content: "Custom Tools: Create reusable HTTP tools and attach them to agents"
  }, {
    heading: "next-steps",
    content: "HubSpot Connector: Connect HubSpot for contacts and tickets workflows"
  }, {
    heading: "next-steps",
    content: "Test your agent: Learn more about testing features and troubleshooting agent behavior"
  }, {
    heading: "next-steps",
    content: "Publish your agent: Publish your agent to production"
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "open-the-agent-editor",
    content: "Open the agent editor"
  }, {
    id: "prompt",
    content: "Prompt"
  }, {
    id: "models",
    content: "Models"
  }, {
    id: "asr",
    content: "ASR"
  }, {
    id: "llm",
    content: "LLM"
  }, {
    id: "tts",
    content: "TTS"
  }, {
    id: "mllm",
    content: "MLLM"
  }, {
    id: "bring-your-own-api-key-byok",
    content: "Bring your own API key (BYOK)"
  }, {
    id: "advanced",
    content: "Advanced"
  }, {
    id: "project",
    content: "Project"
  }, {
    id: "turn-detection",
    content: "Turn detection"
  }, {
    id: "start-of-speech",
    content: "Start of speech"
  }, {
    id: "end-of-speech",
    content: "End of speech"
  }, {
    id: "selective-attention-locking-sal",
    content: "Selective attention locking (SAL)"
  }, {
    id: "filler-words",
    content: "Filler words"
  }, {
    id: "voice-format",
    content: "Voice format"
  }, {
    id: "history",
    content: "History"
  }, {
    id: "actions",
    content: "Actions"
  }, {
    id: "knowledge-base",
    content: "Knowledge base"
  }, {
    id: "mcp-servers",
    content: "MCP servers"
  }, {
    id: "custom-tools",
    content: "Custom tools"
  }, {
    id: "connectors",
    content: "Connectors"
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
  url: "#open-the-agent-editor",
  title: _jsx(_Fragment, {
    children: "Open the agent editor"
  })
}, {
  depth: 2,
  url: "#prompt",
  title: _jsx(_Fragment, {
    children: "Prompt"
  })
}, {
  depth: 2,
  url: "#models",
  title: _jsx(_Fragment, {
    children: "Models"
  })
}, {
  depth: 3,
  url: "#asr",
  title: _jsx(_Fragment, {
    children: "ASR"
  })
}, {
  depth: 3,
  url: "#llm",
  title: _jsx(_Fragment, {
    children: "LLM"
  })
}, {
  depth: 3,
  url: "#tts",
  title: _jsx(_Fragment, {
    children: "TTS"
  })
}, {
  depth: 3,
  url: "#mllm",
  title: _jsx(_Fragment, {
    children: "MLLM"
  })
}, {
  depth: 3,
  url: "#bring-your-own-api-key-byok",
  title: _jsx(_Fragment, {
    children: "Bring your own API key (BYOK)"
  })
}, {
  depth: 2,
  url: "#advanced",
  title: _jsx(_Fragment, {
    children: "Advanced"
  })
}, {
  depth: 3,
  url: "#project",
  title: _jsx(_Fragment, {
    children: "Project"
  })
}, {
  depth: 3,
  url: "#turn-detection",
  title: _jsx(_Fragment, {
    children: "Turn detection"
  })
}, {
  depth: 3,
  url: "#start-of-speech",
  title: _jsx(_Fragment, {
    children: "Start of speech"
  })
}, {
  depth: 3,
  url: "#end-of-speech",
  title: _jsx(_Fragment, {
    children: "End of speech"
  })
}, {
  depth: 3,
  url: "#selective-attention-locking-sal",
  title: _jsx(_Fragment, {
    children: "Selective attention locking (SAL)"
  })
}, {
  depth: 3,
  url: "#filler-words",
  title: _jsx(_Fragment, {
    children: "Filler words"
  })
}, {
  depth: 3,
  url: "#voice-format",
  title: _jsx(_Fragment, {
    children: "Voice format"
  })
}, {
  depth: 3,
  url: "#history",
  title: _jsx(_Fragment, {
    children: "History"
  })
}, {
  depth: 2,
  url: "#actions",
  title: _jsx(_Fragment, {
    children: "Actions"
  })
}, {
  depth: 3,
  url: "#knowledge-base",
  title: _jsx(_Fragment, {
    children: "Knowledge base"
  })
}, {
  depth: 3,
  url: "#mcp-servers",
  title: _jsx(_Fragment, {
    children: "MCP servers"
  })
}, {
  depth: 3,
  url: "#custom-tools",
  title: _jsx(_Fragment, {
    children: "Custom tools"
  })
}, {
  depth: 3,
  url: "#connectors",
  title: _jsx(_Fragment, {
    children: "Connectors"
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
    children: [_jsxs(_components.p, {
      children: ["This guide covers the configuration options available in the agent editor. The editor is organized into four tabs: ", _jsx(_components.strong, {
        children: "Prompt"
      }), ", ", _jsx(_components.strong, {
        children: "Models"
      }), ", ", _jsx(_components.strong, {
        children: "Advanced"
      }), ", and ", _jsx(_components.strong, {
        children: "Actions"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["If you need assistance exploring or debugging your project through natural language, see ", _jsx(_components.a, {
        href: "concierge",
        children: "Concierge"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.p, {
      children: ["Follow ", _jsx(_components.a, {
        href: "../quickstart",
        children: "Create your first agent"
      }), " or use ", _jsx(_components.a, {
        href: "concierge",
        children: "Concierge"
      }), " to create your first agent."]
    }), `
`, _jsx(_components.h2, {
      id: "open-the-agent-editor",
      children: "Open the agent editor"
    }), `
`, _jsx(_components.p, {
      children: "To configure an agent in the editor:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "In Agora Console, select your project from the project dropdown at the top of the page."
      }), `
`, _jsxs(_components.li, {
        children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
          children: "Agents"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Click an existing agent in the list."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The agent editor provides the following tabs."
    }), `
`, _jsx(_components.h2, {
      id: "prompt",
      children: "Prompt"
    }), `
`, _jsx(_components.p, {
      children: "Use this tab to specify the core instructions that define your agent's identity and behavior."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/agent-editor-prompt.png",
        alt: "Agent editor prompt tab UI"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "System prompt"
        }), ": The base instructions that shape how your agent thinks, speaks, and escalates. For example: ", _jsx(_components.code, {
          children: "You are a helpful customer support assistant."
        }), " See ", _jsx(_components.a, {
          href: "prompt-design",
          children: "Prompt design"
        }), " for guidance on writing effective prompts."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Greeting"
        }), ": The first assistant message before the live exchange starts. For example: ", _jsx(_components.code, {
          children: "Hello! How can I help you today?"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Failure message"
        }), ": The fallback message used when the agent needs a moment or cannot proceed. For example: ", _jsx(_components.code, {
          children: "Please hold on a second."
        })]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Use ", _jsx(_components.code, {
        children: "{{variable_name}}"
      }), " in the system prompt, greeting, or failure message to insert dynamic values that match column names in your CSV file. See ", _jsx(_components.a, {
        href: "prompt-design#template-variables",
        children: "Template variables"
      }), " to customize these fields for each user."]
    }), `
`, _jsx(_components.h2, {
      id: "models",
      children: "Models"
    }), `
`, _jsxs(_components.p, {
      children: ["Use this tab to select the ASR, LLM, and TTS models your agent uses. Click the settings icon to open the configuration panel. The ", _jsx(_components.strong, {
        children: "Vendor"
      }), " dropdown lists vendor-model combinations that support ", _jsx(_components.strong, {
        children: "Agora Managed Key"
      }), ". To use your own API key, see ", _jsx(_components.a, {
        href: "#bring-your-own-api-key-byok",
        children: "Bring your own API key (BYOK)"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/agent-editor-models.png",
        alt: ""
      })
    }), `
`, _jsx(_components.h3, {
      id: "asr",
      children: "ASR"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Automatic Speech Recognition (ASR)"
        }), ": Select a vendor-model from the dropdown."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Language"
        }), ": Select the primary language for agent interaction using the BCP-47 language tag."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Model"
        }), ": The speech recognition model to use."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For supported vendors, see ", _jsx(_components.a, {
        href: "supported-vendors#asr-vendors",
        children: "Supported ASR vendors"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "llm",
      children: "LLM"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Large Language Model (LLM)"
        }), ": Select a vendor-model from the dropdown."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For detailed parameter descriptions, see ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm",
        children: _jsx(_components.code, {
          children: "llm"
        })
      }), " in the API reference or navigate to the selected vendor page from ", _jsx(_components.a, {
        href: "supported-vendors#llm-vendors",
        children: "Supported LLM vendors"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "tts",
      children: "TTS"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Text-to-Speech (TTS)"
        }), ": Select a vendor-model from the dropdown."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Voice"
        }), ": Select a voice for the selected TTS vendor-model."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For detailed parameter descriptions, navigate to the selected vendor page from ", _jsx(_components.a, {
        href: "supported-vendors#tts-vendors",
        children: "Supported TTS vendors"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "mllm",
      children: "MLLM"
    }), `
`, _jsxs(_components.p, {
      children: ["Select ", _jsx(_components.strong, {
        children: "Realtime Model"
      }), " at the top of the Models tab to use a single multimodal model for speech recognition, LLM, and speech generation, instead of separate ASR, LLM, and TTS models."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "MLLM"
        }), ": Select a vendor-model from the dropdown."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Voice"
        }), ": Select a voice for the selected MLLM."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For supported vendors, see ", _jsx(_components.a, {
        href: "supported-vendors#mllm-vendors",
        children: "Supported MLLM vendors"
      }), "."]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Info"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["No MLLM vendor-models are currently available under Agora Managed Key. ", _jsx(_components.a, {
            href: "integrations#credentials",
            children: "Add your own credential"
          }), ", then select it from the ", _jsx(_components.strong, {
            children: "Credentials"
          }), " dropdown."]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "bring-your-own-api-key-byok",
      children: "Bring your own API key (BYOK)"
    }), `
`, _jsxs(_components.p, {
      children: ["To use your own API key or to select a vendor or model not available under Agora Managed Key, select the settings icon next to the relevant model. This opens a configuration panel where you can select any supported vendor and add your own API credentials. See ", _jsx(_components.a, {
        href: "integrations#credentials",
        children: "Manage integrations"
      }), " for details on adding credentials."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/configure-llm.png",
        alt: ""
      })
    }), `
`, _jsx(_components.h2, {
      id: "advanced",
      children: "Advanced"
    }), `
`, _jsx(_components.p, {
      children: "Use this tab to configure the hosting region, turn detection, speech detection, selective attention locking, filler words, voice format, and conversation history."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/agent-editor-advanced.png",
        alt: ""
      })
    }), `
`, _jsx(_components.h3, {
      id: "project",
      children: "Project"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Project"
        }), ": The Agora project used to track your billing and usage."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "App ID"
        }), ": The unique identifier for the project. Select the copy icon to copy the ID to your clipboard."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Hosting Region"
        }), ": The region where your project's data is stored."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "turn-detection",
      children: "Turn detection"
    }), `
`, _jsxs(_components.p, {
      children: ["Turn detection controls how the agent manages conversation flow and turn-taking behavior. Use the toggle to enable or disable turn detection, then use one of the ", _jsx(_components.strong, {
        children: "Quick Presets"
      }), " to get started quickly, or select ", _jsx(_components.strong, {
        children: "Custom"
      }), " to configure individual parameters."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Quick Presets:"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Responsive"
          }), ": Optimized for fast-paced conversations."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Balanced"
          }), ": A middle ground between responsiveness and naturalness. Suitable for most use cases."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Patient"
          }), ": Optimized for slower, more thoughtful conversations."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Custom"
          }), ": Manually configure individual parameters."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Threshold"
          }), ": The audio level required for the system to detect speech. Lower values increase sensitivity and work better in quiet environments; higher values help filter out background noise."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "start-of-speech",
      children: "Start of speech"
    }), `
`, _jsx(_components.p, {
      children: "Controls how the system detects when the user starts speaking. Use the toggle to enable or disable start of speech detection."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/start-of-speech.png",
        alt: ""
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Start Mode"
          }), ": Select one of the following:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Voice Activity Detection (VAD)"
            }), ": Detects speech based on silence duration."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Keyword Triggered"
            }), ": Triggers detection on configured keywords."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Disabled"
            }), ": No active detection."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Interrupt Duration (ms)"
          }), ": How long the agent waits after you stop talking before it responds. Lower values result in faster responses; higher values give the user more time to speak."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Speaking Interrupt Duration (ms)"
          }), ": How long the user must speak while the agent is talking before the system decides to interrupt. Lower values make the agent easier to interrupt; higher values make it less interruptible."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Prefix Padding (ms)"
          }), ": Buffer time added to avoid cutting off the start or end of words. Lower values reduce latency; higher values reduce the chance of clipping."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "end-of-speech",
      children: "End of speech"
    }), `
`, _jsx(_components.p, {
      children: "Controls how the system decides the user has finished their thought."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/end-of-speech.png",
        alt: ""
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "End Mode"
          }), ": Select one of the following:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Voice Activity Detection (VAD)"
            }), ": Detects end of speech based on silence duration."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Semantic"
            }), ": Analyzes the semantic meaning of speech to identify natural pause points. Recommended for more natural conversations."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Silence Duration (ms)"
          }), ": How long the agent waits after you stop talking before it considers you finished. Lower values result in faster responses; higher values give the user more time to complete their thought."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "selective-attention-locking-sal",
      children: "Selective attention locking (SAL)"
    }), `
`, _jsx(_components.p, {
      children: "Helps the agent focus on the right voice while filtering out background conversations and noise."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/selective-attention-locking.png",
        alt: ""
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "SAL Mode"
        }), ": Select one of the following:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Speaker Lock"
            }), ": Blocks all other background noise and adapts to the detected speaker."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Voiceprint Recognition"
            }), ": Identifies known speakers using voiceprint. When enabled, configure the following:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Voiceprint URL"
                }), ": URL to a voiceprint audio file. Supported format: 16kHz, 16-bit, mono PCM. Maximum size: 2 MB."]
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "filler-words",
      children: "Filler words"
    }), `
`, _jsx(_components.p, {
      children: "When enabled, the agent uses natural filler phrases while processing a response, reducing awkward silences."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/filler-words.png",
        alt: ""
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Filler Words"
          }), ": Enter up to 100 filler words or phrases."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Response Wait Threshold (ms)"
          }), ": How long the agent waits before it starts using filler words. Lower values trigger fillers sooner; higher values give the LLM more time to respond before fillers are used."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Selection Rule"
          }), ": Controls how filler phrases are selected:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Shuffle"
            }), ": Random, no repeats until all phrases are exhausted."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Round Robin"
            }), ": Played sequentially."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "voice-format",
      children: "Voice format"
    }), `
`, _jsx(_components.p, {
      children: "When enabled, the agent normalizes chat completions for speech output, so numbers and other text are read naturally."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/voice-format.png",
        alt: ""
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Digit Cutoff"
        }), ": Numbers larger than this cutoff are normalized for speech output."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Custom Replacements"
        }), ": Add up to 5 exact or regex replacements."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "history",
      children: "History"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Max History"
        }), ": The maximum number of conversation history messages included in context. Higher values give the agent more memory of the conversation but increase LLM token usage."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "actions",
      children: "Actions"
    }), `
`, _jsx(_components.p, {
      children: "Use this tab to connect your agent to external data and services."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/agent-editor-actions.png",
        alt: ""
      })
    }), `
`, _jsx(_components.h3, {
      id: "knowledge-base",
      children: "Knowledge base"
    }), `
`, _jsxs(_components.p, {
      children: ["A knowledge base provides your agent with additional context from reference documents. Select ", _jsx(_components.strong, {
        children: "+ Add Knowledge Base"
      }), " to select or create a knowledge base. See ", _jsx(_components.a, {
        href: "integrations#knowledge-bases",
        children: "Add knowledge base"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "mcp-servers",
      children: "MCP servers"
    }), `
`, _jsxs(_components.p, {
      children: ["MCP servers enable your agent to call tools provided by external services. Select ", _jsx(_components.strong, {
        children: "+ Add MCP Server"
      }), " to select or create an MCP server. See ", _jsx(_components.a, {
        href: "integrations#mcp-servers",
        children: "Add MCP server"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "custom-tools",
      children: "Custom tools"
    }), `
`, _jsxs(_components.p, {
      children: ["Custom Tools let your agent call reusable HTTP endpoints that you defined in ", _jsx(_components.strong, {
        children: "Integrations"
      }), ". Select ", _jsx(_components.strong, {
        children: "+ Add Custom Tools"
      }), " to attach one or more tools to this agent. See ", _jsx(_components.a, {
        href: "custom-tools",
        children: "Custom Tools"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "connectors",
      children: "Connectors"
    }), `
`, _jsxs(_components.p, {
      children: ["Connectors let your agent use built-in integrations managed in ", _jsx(_components.strong, {
        children: "Integrations"
      }), ". Attach HubSpot when your agent needs CRM contact or ticket workflows. See ", _jsx(_components.a, {
        href: "hubspot-connector",
        children: "HubSpot Connector"
      }), "."]
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
        }), ": Manage credentials, MCP servers, and knowledge bases for reuse across agents"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "custom-tools",
          children: "Custom Tools"
        }), ": Create reusable HTTP tools and attach them to agents"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "hubspot-connector",
          children: "HubSpot Connector"
        }), ": Connect HubSpot for contacts and tickets workflows"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "test-agent",
          children: "Test your agent"
        }), ": Learn more about testing features and troubleshooting agent behavior"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../deploy/deploy-agent",
          children: "Publish your agent"
        }), ": Publish your agent to production"]
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
