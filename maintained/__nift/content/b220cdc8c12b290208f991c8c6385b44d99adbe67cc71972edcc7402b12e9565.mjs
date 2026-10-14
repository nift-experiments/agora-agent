import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Azure OpenAI Realtime API",
  description: `Integrate Azure OpenAI Realtime API MLLM into Conversational AI Engine.
`
};
export let _markdown = `

Azure OpenAI Realtime API provides multimodal large language model capabilities with real-time audio processing through Microsoft Azure's infrastructure, enabling natural voice conversations without separate ASR/TTS components. Enabling MLLM automatically disables ASR, LLM, and TTS since the MLLM handles end-to-end voice processing directly.

### Sample configuration [#sample-configuration]

The following examples show how to configure Azure OpenAI Realtime MLLM when starting a conversational AI agent.

<Tabs defaultValue="python" groupId="ai-sdk-language">
  <TabsList>
    <TabsTrigger value="python">
      Python SDK
    </TabsTrigger>

    <TabsTrigger value="typescript">
      TypeScript SDK
    </TabsTrigger>

    <TabsTrigger value="go">
      Go SDK
    </TabsTrigger>

    <TabsTrigger value="rest-api">
      REST API
    </TabsTrigger>
  </TabsList>

  <TabsContent value="python">
    \`\`\`python
    from agora_agent import Agent
    from agora_agent.agentkit.vendors import AzureOpenAIRealtime

    # client is your configured Agora client
    agent = (
        Agent(client)
        .with_mllm(AzureOpenAIRealtime(
            api_key='your-azure-api-key',
            url='wss://your-resource-name.openai.azure.com/openai/v1/realtime?model=gpt-realtime-2',
            model='gpt-realtime-2',
            voice='alloy',
            instructions='You are a Conversational AI Agent, developed by Agora.',
            output_modalities=['audio'],
            turn_detection={'mode': 'server_vad'},
        ))
    )
    \`\`\`
  </TabsContent>

  <TabsContent value="typescript">
    \`\`\`typescript
    import { Agent, AzureOpenAIRealtime } from 'agora-agents';

    // client is your configured Agora client
    const agent = new Agent({ client })
      .withMllm(new AzureOpenAIRealtime({
        apiKey: 'your-azure-api-key',
        url: 'wss://your-resource-name.openai.azure.com/openai/v1/realtime?model=gpt-realtime-2',
        model: 'gpt-realtime-2',
        voice: 'alloy',
        instructions: 'You are a Conversational AI Agent, developed by Agora.',
        outputModalities: ['audio'],
        turnDetection: { mode: 'server_vad' },
      }));
    \`\`\`
  </TabsContent>

  <TabsContent value="go">
    \`\`\`go
    import (
        "github.com/AgoraIO/agora-agents-go/v2/agentkit"
        "github.com/AgoraIO/agora-agents-go/v2/agentkit/vendors"
    )

    // client is your configured Agora client
    agent := agentkit.NewAgent(client).WithMllm(
        vendors.NewAzureOpenAIRealtime(vendors.AzureOpenAIRealtimeOptions{
            APIKey:           "your-azure-api-key",
            URL:              "wss://your-resource-name.openai.azure.com/openai/v1/realtime?model=gpt-realtime-2",
            Model:            "gpt-realtime-2",
            Voice:            "alloy",
            Instructions:     "You are a Conversational AI Agent, developed by Agora.",
            OutputModalities: []string{"audio"},
            TurnDetection: &agora.MllmTurnDetection{
                Mode: agora.MllmTurnDetectionModeServerVad.Ptr(),
            },
        }),
    )
    \`\`\`
  </TabsContent>

  <TabsContent value="rest-api">
    Use the following \`mllm\` configuration in your request:

    \`\`\`json
    "mllm": {
      "enable": true,
      "vendor": "azure",
      "url": "wss://your-resource-name.openai.azure.com/openai/v1/realtime?model=gpt-realtime-2",
      "api_key": "<azure_api_key>",
      "output_modalities": ["audio"],
      "turn_detection": {
        "mode": "server_vad"
      },
      "params": {
        "model": "gpt-realtime-2",
        "voice": "alloy",
        "instructions": "You are a Conversational AI Agent, developed by Agora."
      }
    }
    \`\`\`
  </TabsContent>
</Tabs>

### Turn detection [#turn-detection]

Add a \`turn_detection\` block inside the \`mllm\` object when you [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join). Unlike other MLLM vendors, \`turn_detection\` is required for Azure OpenAI Realtime API.

<CalloutContainer type="info">
  <CalloutTitle>
    Info
  </CalloutTitle>

  <CalloutDescription>
    When \`mllm.turn_detection\` is defined, the top-level \`turn_detection\` object has no effect.
  </CalloutDescription>
</CalloutContainer>

The following examples show the supported \`turn_detection\` configurations for Azure OpenAI Realtime API.

* **Server VAD**

  \`\`\`json
  "turn_detection": {
    "mode": "server_vad",
    "server_vad_config": {
      "prefix_padding_ms": 800,
      "silence_duration_ms": 640,
      "threshold": 0.5
    }
  }
  \`\`\`

* **Semantic VAD**

  \`\`\`json
  "turn_detection": {
    "mode": "semantic_vad",
    "semantic_vad_config": {
      "eagerness": "auto"
    }
  }
  \`\`\`

* **Agora VAD**

  \`\`\`json
  "turn_detection": {
    "mode": "agora_vad",
    "agora_vad_config": {
      "interrupt_duration_ms": 160,
      "prefix_padding_ms": 800,
      "silence_duration_ms": 640,
      "threshold": 0.5
    }
  }
  \`\`\`

### Key parameters [#key-parameters]

<ParameterList title="mllm" required="true">
  <Parameter name="api_key" type="string" required="true">
    The API key used to authenticate with your Azure OpenAI resource.
  </Parameter>

  <Parameter name="url" type="string" required="true">
    The WebSocket URL for your Azure OpenAI Realtime deployment. For example, \`wss://your-resource-name.openai.azure.com/openai/v1/realtime?model=gpt-realtime-2\`.
  </Parameter>

  <Parameter name="messages" type="array[object]" required="false">
    An array of conversation history items passed to the model as context. Each item represents a single message in the conversation history.

    <Parameter name="role" type="string" required="true">
      The role of the message author. For example, \`system\` or \`user\`.
    </Parameter>

    <Parameter name="content" type="string" required="true">
      The content of the message.
    </Parameter>
  </Parameter>

  <Parameter name="params" type="object" required="false">
    Additional Azure OpenAI Realtime configuration parameters.

    * **Modalities override**: The \`modalities\` setting in params is overridden by \`output_modalities\`.
    * **Turn detection override**: The \`turn_detection\` setting in \`params\` is overridden by [\`mllm.turn_detection\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-turn-detection).

    <Parameter name="model" type="string" required="false">
      The model or deployment name. For example, \`gpt-realtime-2\`.
    </Parameter>

    <Parameter name="voice" type="string" required="false">
      The voice identifier for audio output. For example, \`alloy\`.
    </Parameter>

    <Parameter name="instructions" type="string" required="false">
      System instructions that define the assistant's behavior and personality.
    </Parameter>

    <Parameter name="input_audio_transcription" type="object" required="false">
      Configuration for audio input transcription.

      <Parameter name="language" type="string" required="false">
        The language of the input audio. Supplying the input language in ISO-639-1 format (For example \`en\`) improves accuracy and latency.
      </Parameter>

      <Parameter name="model" type="string" required="false">
        The model to use for transcription.
      </Parameter>

      <Parameter name="prompt" type="string" required="false">
        An optional text to guide the model's style or continue a previous audio segment.
      </Parameter>
    </Parameter>
  </Parameter>

  <Parameter name="turn_detection" type="object" required="true">
    Turn detection configuration for the MLLM module. Required for Azure OpenAI Realtime API. For a full list of \`turn_detection\` parameters, see [\`mllm.turn_detection\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-turn-detection).

    <Parameter name="mode" type="string" required="false" possibleValues="agora_vad, server_vad, semantic_vad">
      * \`agora_vad\`: Agora VAD-based detection.
      * \`server_vad\`: Vendor-side VAD-based detection.
      * \`semantic_vad\`: Semantic-based detection.
    </Parameter>

    <Parameter name="agora_vad_config" type="object" required="false">
      Configuration for Agora VAD-based turn detection. Applicable when \`mode\` is \`agora_vad\`.

      <Parameter name="interrupt_duration_ms" type="integer" required="false">
        Minimum duration of speech in milliseconds required to trigger an interruption.
      </Parameter>

      <Parameter name="prefix_padding_ms" type="integer" required="false">
        Duration of audio in milliseconds to include before the detected speech start.
      </Parameter>

      <Parameter name="silence_duration_ms" type="integer" required="false">
        Duration of silence in milliseconds required to determine end of speech.
      </Parameter>

      <Parameter name="threshold" type="number" required="false">
        VAD sensitivity threshold. A higher value reduces false positives.
      </Parameter>
    </Parameter>

    <Parameter name="server_vad_config" type="object" required="false">
      Configuration for vendor-side VAD-based turn detection. Applicable when \`mode\` is \`server_vad\`. Parameters are passed through to the vendor.

      <Parameter name="prefix_padding_ms" type="integer" required="false">
        Duration of audio in milliseconds to include before the detected speech start.
      </Parameter>

      <Parameter name="silence_duration_ms" type="integer" required="false">
        Duration of silence in milliseconds required to determine end of speech.
      </Parameter>

      <Parameter name="threshold" type="number" required="false">
        VAD sensitivity threshold.
      </Parameter>
    </Parameter>

    <Parameter name="semantic_vad_config" type="object" required="false">
      Configuration for semantic-based turn detection. Applicable when \`mode\` is \`semantic_vad\`.

      <Parameter name="eagerness" type="string" required="false" possibleValues="auto, low, medium, high">
        Controls how eagerly the model ends its turn.
      </Parameter>
    </Parameter>
  </Parameter>

  <Parameter name="output_modalities" type="array[string]" defaultValue="[&#x22;text&#x22;, &#x22;audio&#x22;]" required="false">
    Output format options: \`["text", "audio"]\` for both text and voice responses.
  </Parameter>

  <Parameter name="max_history" type="integer" required="false">
    The number of conversation history messages to cache.
  </Parameter>

  <Parameter name="greeting_message" type="string" required="false">
    Initial message the agent speaks when a user joins the channel.
  </Parameter>

  <Parameter name="failure_message" type="string" required="false">
    The message the agent speaks when an error occurs.
  </Parameter>

  <Parameter name="vendor" type="string" required="true">
    MLLM provider identifier. Set to \`azure\` for Azure OpenAI Realtime API.
  </Parameter>
</ParameterList>

For comprehensive API reference, real-time capabilities, and detailed parameter descriptions, see the [Azure OpenAI Realtime API documentation](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/realtime-audio).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Azure OpenAI Realtime API provides multimodal large language model capabilities with real-time audio processing through Microsoft Azure's infrastructure, enabling natural voice conversations without separate ASR/TTS components. Enabling MLLM automatically disables ASR, LLM, and TTS since the MLLM handles end-to-end voice processing directly."
  }, {
    heading: "sample-configuration",
    content: "The following examples show how to configure Azure OpenAI Realtime MLLM when starting a conversational AI agent."
  }, {
    heading: "sample-configuration",
    content: "Use the following `mllm` configuration in your request:"
  }, {
    heading: "turn-detection",
    content: "Add a `turn_detection` block inside the `mllm` object when you Start a conversational AI agent. Unlike other MLLM vendors, `turn_detection` is required for Azure OpenAI Realtime API."
  }, {
    heading: "turn-detection",
    content: "When `mllm.turn_detection` is defined, the top-level `turn_detection` object has no effect."
  }, {
    heading: "turn-detection",
    content: "The following examples show the supported `turn_detection` configurations for Azure OpenAI Realtime API."
  }, {
    heading: "turn-detection",
    content: "**Server VAD**"
  }, {
    heading: "turn-detection",
    content: "**Semantic VAD**"
  }, {
    heading: "turn-detection",
    content: "**Agora VAD**"
  }, {
    heading: "key-parameters",
    content: "The API key used to authenticate with your Azure OpenAI resource."
  }, {
    heading: "key-parameters",
    content: "The WebSocket URL for your Azure OpenAI Realtime deployment. For example, `wss://your-resource-name.openai.azure.com/openai/v1/realtime?model=gpt-realtime-2`."
  }, {
    heading: "key-parameters",
    content: "An array of conversation history items passed to the model as context. Each item represents a single message in the conversation history."
  }, {
    heading: "key-parameters",
    content: "The role of the message author. For example, `system` or `user`."
  }, {
    heading: "key-parameters",
    content: "The content of the message."
  }, {
    heading: "key-parameters",
    content: "Additional Azure OpenAI Realtime configuration parameters."
  }, {
    heading: "key-parameters",
    content: "**Modalities override**: The `modalities` setting in params is overridden by `output_modalities`."
  }, {
    heading: "key-parameters",
    content: "**Turn detection override**: The `turn_detection` setting in `params` is overridden by `mllm.turn_detection`."
  }, {
    heading: "key-parameters",
    content: "The model or deployment name. For example, `gpt-realtime-2`."
  }, {
    heading: "key-parameters",
    content: "The voice identifier for audio output. For example, `alloy`."
  }, {
    heading: "key-parameters",
    content: "System instructions that define the assistant's behavior and personality."
  }, {
    heading: "key-parameters",
    content: "Configuration for audio input transcription."
  }, {
    heading: "key-parameters",
    content: "The language of the input audio. Supplying the input language in ISO-639-1 format (For example `en`) improves accuracy and latency."
  }, {
    heading: "key-parameters",
    content: "The model to use for transcription."
  }, {
    heading: "key-parameters",
    content: "An optional text to guide the model's style or continue a previous audio segment."
  }, {
    heading: "key-parameters",
    content: "Turn detection configuration for the MLLM module. Required for Azure OpenAI Realtime API. For a full list of `turn_detection` parameters, see `mllm.turn_detection`."
  }, {
    heading: "key-parameters",
    content: "`agora_vad`: Agora VAD-based detection."
  }, {
    heading: "key-parameters",
    content: "`server_vad`: Vendor-side VAD-based detection."
  }, {
    heading: "key-parameters",
    content: "`semantic_vad`: Semantic-based detection."
  }, {
    heading: "key-parameters",
    content: "Configuration for Agora VAD-based turn detection. Applicable when `mode` is `agora_vad`."
  }, {
    heading: "key-parameters",
    content: "Minimum duration of speech in milliseconds required to trigger an interruption."
  }, {
    heading: "key-parameters",
    content: "Duration of audio in milliseconds to include before the detected speech start."
  }, {
    heading: "key-parameters",
    content: "Duration of silence in milliseconds required to determine end of speech."
  }, {
    heading: "key-parameters",
    content: "VAD sensitivity threshold. A higher value reduces false positives."
  }, {
    heading: "key-parameters",
    content: "Configuration for vendor-side VAD-based turn detection. Applicable when `mode` is `server_vad`. Parameters are passed through to the vendor."
  }, {
    heading: "key-parameters",
    content: "Duration of audio in milliseconds to include before the detected speech start."
  }, {
    heading: "key-parameters",
    content: "Duration of silence in milliseconds required to determine end of speech."
  }, {
    heading: "key-parameters",
    content: "VAD sensitivity threshold."
  }, {
    heading: "key-parameters",
    content: "Configuration for semantic-based turn detection. Applicable when `mode` is `semantic_vad`."
  }, {
    heading: "key-parameters",
    content: "Controls how eagerly the model ends its turn."
  }, {
    heading: "key-parameters",
    content: 'Output format options: `["text", "audio"]` for both text and voice responses.'
  }, {
    heading: "key-parameters",
    content: "The number of conversation history messages to cache."
  }, {
    heading: "key-parameters",
    content: "Initial message the agent speaks when a user joins the channel."
  }, {
    heading: "key-parameters",
    content: "The message the agent speaks when an error occurs."
  }, {
    heading: "key-parameters",
    content: "MLLM provider identifier. Set to `azure` for Azure OpenAI Realtime API."
  }, {
    heading: "key-parameters",
    content: "For comprehensive API reference, real-time capabilities, and detailed parameter descriptions, see the Azure OpenAI Realtime API documentation."
  }],
  headings: [{
    id: "sample-configuration",
    content: "Sample configuration"
  }, {
    id: "turn-detection",
    content: "Turn detection"
  }, {
    id: "key-parameters",
    content: "Key parameters"
  }]
};
export let toc = [{
  depth: 3,
  url: "#sample-configuration",
  title: _jsx(_Fragment, {
    children: "Sample configuration"
  })
}, {
  depth: 3,
  url: "#turn-detection",
  title: _jsx(_Fragment, {
    children: "Turn detection"
  })
}, {
  depth: 3,
  url: "#key-parameters",
  title: _jsx(_Fragment, {
    children: "Key parameters"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle, Parameter, ParameterList, Tabs, TabsContent, TabsList, TabsTrigger } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  if (!Parameter)
    _missingMdxReference("Parameter", true);
  if (!ParameterList)
    _missingMdxReference("ParameterList", true);
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  if (!TabsContent)
    _missingMdxReference("TabsContent", true);
  if (!TabsList)
    _missingMdxReference("TabsList", true);
  if (!TabsTrigger)
    _missingMdxReference("TabsTrigger", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Azure OpenAI Realtime API provides multimodal large language model capabilities with real-time audio processing through Microsoft Azure's infrastructure, enabling natural voice conversations without separate ASR/TTS components. Enabling MLLM automatically disables ASR, LLM, and TTS since the MLLM handles end-to-end voice processing directly."
    }), `
`, _jsx(_components.h3, {
      id: "sample-configuration",
      children: "Sample configuration"
    }), `
`, _jsx(_components.p, {
      children: "The following examples show how to configure Azure OpenAI Realtime MLLM when starting a conversational AI agent."
    }), `
`, _jsxs(Tabs, {
      defaultValue: "python",
      groupId: "ai-sdk-language",
      persist: true,
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "python",
          children: "Python SDK"
        }), _jsx(TabsTrigger, {
          value: "typescript",
          children: "TypeScript SDK"
        }), _jsx(TabsTrigger, {
          value: "go",
          children: "Go SDK"
        }), _jsx(TabsTrigger, {
          value: "rest-api",
          children: "REST API"
        })]
      }), _jsx(TabsContent, {
        value: "python",
        children: _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "from"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " agora_agent "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "import"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " Agent"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "from"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " agora_agent.agentkit.vendors "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "import"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AzureOpenAIRealtime"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# client is your configured Agora client"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agent "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    Agent(client)"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    .with_mllm(AzureOpenAIRealtime("
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "        api_key"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'your-azure-api-key'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "        url"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'wss://your-resource-name.openai.azure.com/openai/v1/realtime?model=gpt-realtime-2'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "        model"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'gpt-realtime-2'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "        voice"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'alloy'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "        instructions"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'You are a Conversational AI Agent, developed by Agora.'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "        output_modalities"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'audio'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "],"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "        turn_detection"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'mode'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'server_vad'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "},"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    ))"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })
              })]
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "typescript",
        children: _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "import"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " { Agent, AzureOpenAIRealtime } "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "from"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'agora-agents'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// client is your configured Agora client"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " agent"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " Agent"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({ client })"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  ."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "withMllm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " AzureOpenAIRealtime"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    apiKey: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'your-azure-api-key'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    url: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'wss://your-resource-name.openai.azure.com/openai/v1/realtime?model=gpt-realtime-2'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    model: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'gpt-realtime-2'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    voice: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'alloy'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    instructions: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'You are a Conversational AI Agent, developed by Agora.'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    outputModalities: ["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'audio'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "],"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    turnDetection: { mode: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'server_vad'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " },"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }));"
                })
              })]
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "go",
        children: _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "import"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "github.com/AgoraIO/agora-agents-go/v2/agentkit"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "github.com/AgoraIO/agora-agents-go/v2/agentkit/vendors"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// client is your configured Agora client"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agent "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " agentkit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "NewAgent"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(client)."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "WithMllm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    vendors."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "NewAzureOpenAIRealtime"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "vendors"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "AzureOpenAIRealtimeOptions"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        APIKey:           "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"your-azure-api-key"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        URL:              "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"wss://your-resource-name.openai.azure.com/openai/v1/realtime?model=gpt-realtime-2"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Model:            "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"gpt-realtime-2"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Voice:            "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"alloy"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Instructions:     "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"You are a Conversational AI Agent, developed by Agora."'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        OutputModalities: []"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"audio"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "},"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        TurnDetection: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "MllmTurnDetection"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            Mode: agora.MllmTurnDetectionModeServerVad."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Ptr"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(),"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    }),"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })
              })]
            })
          })
        })
      }), _jsxs(TabsContent, {
        value: "rest-api",
        children: [_jsxs(_components.p, {
          children: ["Use the following ", _jsx(_components.code, {
            children: "mllm"
          }), " configuration in your request:"]
        }), _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"mllm"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "enable"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "true"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "vendor"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"azure"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "url"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"wss://your-resource-name.openai.azure.com/openai/v1/realtime?model=gpt-realtime-2"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "api_key"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"<azure_api_key>"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "output_modalities"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"audio"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "],"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "turn_detection"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "mode"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"server_vad"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "params"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "model"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"gpt-realtime-2"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "voice"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"alloy"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "instructions"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"You are a Conversational AI Agent, developed by Agora."'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })
              })]
            })
          })
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "turn-detection",
      children: "Turn detection"
    }), `
`, _jsxs(_components.p, {
      children: ["Add a ", _jsx(_components.code, {
        children: "turn_detection"
      }), " block inside the ", _jsx(_components.code, {
        children: "mllm"
      }), " object when you ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/conversational-ai/join",
        children: "Start a conversational AI agent"
      }), ". Unlike other MLLM vendors, ", _jsx(_components.code, {
        children: "turn_detection"
      }), " is required for Azure OpenAI Realtime API."]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Info"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["When ", _jsx(_components.code, {
            children: "mllm.turn_detection"
          }), " is defined, the top-level ", _jsx(_components.code, {
            children: "turn_detection"
          }), " object has no effect."]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["The following examples show the supported ", _jsx(_components.code, {
        children: "turn_detection"
      }), " configurations for Azure OpenAI Realtime API."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Server VAD"
          })
        }), `
`, _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"turn_detection"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "mode"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"server_vad"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "server_vad_config"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "prefix_padding_ms"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "800"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "silence_duration_ms"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "640"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "threshold"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0.5"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })
              })]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Semantic VAD"
          })
        }), `
`, _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"turn_detection"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "mode"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"semantic_vad"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "semantic_vad_config"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "eagerness"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"auto"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })
              })]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Agora VAD"
          })
        }), `
`, _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"turn_detection"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "mode"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"agora_vad"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "agora_vad_config"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "interrupt_duration_ms"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "160"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "prefix_padding_ms"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "800"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "silence_duration_ms"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "640"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "threshold"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0.5"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })
              })]
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "key-parameters",
      children: "Key parameters"
    }), `
`, _jsxs(ParameterList, {
      title: "mllm",
      required: true,
      children: [_jsx(Parameter, {
        name: "api_key",
        type: "string",
        required: true,
        children: _jsx(_components.p, {
          children: "The API key used to authenticate with your Azure OpenAI resource."
        })
      }), _jsx(Parameter, {
        name: "url",
        type: "string",
        required: true,
        children: _jsxs(_components.p, {
          children: ["The WebSocket URL for your Azure OpenAI Realtime deployment. For example, ", _jsx(_components.code, {
            children: "wss://your-resource-name.openai.azure.com/openai/v1/realtime?model=gpt-realtime-2"
          }), "."]
        })
      }), _jsxs(Parameter, {
        name: "messages",
        type: "array[object]",
        required: false,
        children: [_jsx(_components.p, {
          children: "An array of conversation history items passed to the model as context. Each item represents a single message in the conversation history."
        }), _jsx(Parameter, {
          name: "role",
          type: "string",
          required: true,
          children: _jsxs(_components.p, {
            children: ["The role of the message author. For example, ", _jsx(_components.code, {
              children: "system"
            }), " or ", _jsx(_components.code, {
              children: "user"
            }), "."]
          })
        }), _jsx(Parameter, {
          name: "content",
          type: "string",
          required: true,
          children: _jsx(_components.p, {
            children: "The content of the message."
          })
        })]
      }), _jsxs(Parameter, {
        name: "params",
        type: "object",
        required: false,
        children: [_jsx(_components.p, {
          children: "Additional Azure OpenAI Realtime configuration parameters."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Modalities override"
            }), ": The ", _jsx(_components.code, {
              children: "modalities"
            }), " setting in params is overridden by ", _jsx(_components.code, {
              children: "output_modalities"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Turn detection override"
            }), ": The ", _jsx(_components.code, {
              children: "turn_detection"
            }), " setting in ", _jsx(_components.code, {
              children: "params"
            }), " is overridden by ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-turn-detection",
              children: _jsx(_components.code, {
                children: "mllm.turn_detection"
              })
            }), "."]
          }), `
`]
        }), _jsx(Parameter, {
          name: "model",
          type: "string",
          required: false,
          children: _jsxs(_components.p, {
            children: ["The model or deployment name. For example, ", _jsx(_components.code, {
              children: "gpt-realtime-2"
            }), "."]
          })
        }), _jsx(Parameter, {
          name: "voice",
          type: "string",
          required: false,
          children: _jsxs(_components.p, {
            children: ["The voice identifier for audio output. For example, ", _jsx(_components.code, {
              children: "alloy"
            }), "."]
          })
        }), _jsx(Parameter, {
          name: "instructions",
          type: "string",
          required: false,
          children: _jsx(_components.p, {
            children: "System instructions that define the assistant's behavior and personality."
          })
        }), _jsxs(Parameter, {
          name: "input_audio_transcription",
          type: "object",
          required: false,
          children: [_jsx(_components.p, {
            children: "Configuration for audio input transcription."
          }), _jsx(Parameter, {
            name: "language",
            type: "string",
            required: false,
            children: _jsxs(_components.p, {
              children: ["The language of the input audio. Supplying the input language in ISO-639-1 format (For example ", _jsx(_components.code, {
                children: "en"
              }), ") improves accuracy and latency."]
            })
          }), _jsx(Parameter, {
            name: "model",
            type: "string",
            required: false,
            children: _jsx(_components.p, {
              children: "The model to use for transcription."
            })
          }), _jsx(Parameter, {
            name: "prompt",
            type: "string",
            required: false,
            children: _jsx(_components.p, {
              children: "An optional text to guide the model's style or continue a previous audio segment."
            })
          })]
        })]
      }), _jsxs(Parameter, {
        name: "turn_detection",
        type: "object",
        required: true,
        children: [_jsxs(_components.p, {
          children: ["Turn detection configuration for the MLLM module. Required for Azure OpenAI Realtime API. For a full list of ", _jsx(_components.code, {
            children: "turn_detection"
          }), " parameters, see ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-turn-detection",
            children: _jsx(_components.code, {
              children: "mllm.turn_detection"
            })
          }), "."]
        }), _jsx(Parameter, {
          name: "mode",
          type: "string",
          required: false,
          possibleValues: "agora_vad, server_vad, semantic_vad",
          children: _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "agora_vad"
              }), ": Agora VAD-based detection."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "server_vad"
              }), ": Vendor-side VAD-based detection."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "semantic_vad"
              }), ": Semantic-based detection."]
            }), `
`]
          })
        }), _jsxs(Parameter, {
          name: "agora_vad_config",
          type: "object",
          required: false,
          children: [_jsxs(_components.p, {
            children: ["Configuration for Agora VAD-based turn detection. Applicable when ", _jsx(_components.code, {
              children: "mode"
            }), " is ", _jsx(_components.code, {
              children: "agora_vad"
            }), "."]
          }), _jsx(Parameter, {
            name: "interrupt_duration_ms",
            type: "integer",
            required: false,
            children: _jsx(_components.p, {
              children: "Minimum duration of speech in milliseconds required to trigger an interruption."
            })
          }), _jsx(Parameter, {
            name: "prefix_padding_ms",
            type: "integer",
            required: false,
            children: _jsx(_components.p, {
              children: "Duration of audio in milliseconds to include before the detected speech start."
            })
          }), _jsx(Parameter, {
            name: "silence_duration_ms",
            type: "integer",
            required: false,
            children: _jsx(_components.p, {
              children: "Duration of silence in milliseconds required to determine end of speech."
            })
          }), _jsx(Parameter, {
            name: "threshold",
            type: "number",
            required: false,
            children: _jsx(_components.p, {
              children: "VAD sensitivity threshold. A higher value reduces false positives."
            })
          })]
        }), _jsxs(Parameter, {
          name: "server_vad_config",
          type: "object",
          required: false,
          children: [_jsxs(_components.p, {
            children: ["Configuration for vendor-side VAD-based turn detection. Applicable when ", _jsx(_components.code, {
              children: "mode"
            }), " is ", _jsx(_components.code, {
              children: "server_vad"
            }), ". Parameters are passed through to the vendor."]
          }), _jsx(Parameter, {
            name: "prefix_padding_ms",
            type: "integer",
            required: false,
            children: _jsx(_components.p, {
              children: "Duration of audio in milliseconds to include before the detected speech start."
            })
          }), _jsx(Parameter, {
            name: "silence_duration_ms",
            type: "integer",
            required: false,
            children: _jsx(_components.p, {
              children: "Duration of silence in milliseconds required to determine end of speech."
            })
          }), _jsx(Parameter, {
            name: "threshold",
            type: "number",
            required: false,
            children: _jsx(_components.p, {
              children: "VAD sensitivity threshold."
            })
          })]
        }), _jsxs(Parameter, {
          name: "semantic_vad_config",
          type: "object",
          required: false,
          children: [_jsxs(_components.p, {
            children: ["Configuration for semantic-based turn detection. Applicable when ", _jsx(_components.code, {
              children: "mode"
            }), " is ", _jsx(_components.code, {
              children: "semantic_vad"
            }), "."]
          }), _jsx(Parameter, {
            name: "eagerness",
            type: "string",
            required: false,
            possibleValues: "auto, low, medium, high",
            children: _jsx(_components.p, {
              children: "Controls how eagerly the model ends its turn."
            })
          })]
        })]
      }), _jsx(Parameter, {
        name: "output_modalities",
        type: "array[string]",
        defaultValue: '["text", "audio"]',
        required: false,
        children: _jsxs(_components.p, {
          children: ["Output format options: ", _jsx(_components.code, {
            children: '["text", "audio"]'
          }), " for both text and voice responses."]
        })
      }), _jsx(Parameter, {
        name: "max_history",
        type: "integer",
        required: false,
        children: _jsx(_components.p, {
          children: "The number of conversation history messages to cache."
        })
      }), _jsx(Parameter, {
        name: "greeting_message",
        type: "string",
        required: false,
        children: _jsx(_components.p, {
          children: "Initial message the agent speaks when a user joins the channel."
        })
      }), _jsx(Parameter, {
        name: "failure_message",
        type: "string",
        required: false,
        children: _jsx(_components.p, {
          children: "The message the agent speaks when an error occurs."
        })
      }), _jsx(Parameter, {
        name: "vendor",
        type: "string",
        required: true,
        children: _jsxs(_components.p, {
          children: ["MLLM provider identifier. Set to ", _jsx(_components.code, {
            children: "azure"
          }), " for Azure OpenAI Realtime API."]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For comprehensive API reference, real-time capabilities, and detailed parameter descriptions, see the ", _jsx(_components.a, {
        href: "https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/realtime-audio",
        children: "Azure OpenAI Realtime API documentation"
      }), "."]
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
