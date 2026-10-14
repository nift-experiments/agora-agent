import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Release notes",
  description: "Information about changes in each release of the Conversational AI Engine."
};
export let _markdown = `

This document tracks notable changes and improvements to the Conversational AI Engine.

## Versions [#versions]

<Accordions type="multiple">
  <Accordion title="v2.13" id="v213" headingLevel="3" value="v213">
    Released on September 25, 2026.

    #### New features [#new-features]

    Included in this release:

    * **Custom tools for MLLM agents**

      MLLM agents can call your own HTTPS endpoints as tools. Tool definitions use the same format as for cascading LLM agents, so an existing tool works with either agent type. Available in the Agora Agents SDKs and the RESTful API. For details, see [Call custom tools](build/tools/custom-tools).

    * **New ASR provider**

      * [Smallest AI](models/asr/smallest-ai)

    * **New TTS provider**

      * [Smallest AI](models/tts/smallest-ai)

    * **New MLLM provider**

      * [OpenAI GPT-Live](models/mllm/openai-gpt-live)

    #### Improvements [#improvements]

    This release includes the following enhancements.

    * **MCP tool-use for MLLM agents in the Agora Agents SDKs**

      MLLM agents have supported MCP tool-use through the RESTful API since v2.12. This release adds the same support to the Agora Agents SDKs, which accept MCP servers on their MLLM vendor classes, so you can configure MCP tool-use without calling the RESTful API directly. For details, see [Use MCP tools](build/tools/mcp-tools).

    * **Generated filler words use conversation context**

      This release improves generated filler words so that they reflect the recent exchange, not just the current turn. You can set the conversation context for the generation service using a message count and a character budget. For details, see [Talking while waiting](build/shape-the-conversation/filler-words).

    #### API changes [#api-changes]

    This release introduces the following changes for the new Smallest AI and OpenAI GPT-Live providers, Gemini ASR, MLLM tool-use, and generated filler words.

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
        * [\`SmallestAISTT\`](/en/api-reference/api-ref/server-sdk/python#stt-vendors): New ASR vendor class for Smallest AI.

        * [\`GeminiSTT\`](/en/api-reference/api-ref/server-sdk/python#stt-vendors): New ASR vendor class for Gemini.

        * [\`OpenAIGPTLive\`](/en/api-reference/api-ref/server-sdk/python#mllm-vendors): New MLLM vendor class for OpenAI GPT-Live.

        * [MLLM vendor classes](/en/api-reference/api-ref/server-sdk/python#mllm-vendors): New \`tools\` option for custom tool definitions, and new \`mcp_servers\` option for MCP tool-use.

        * [\`SmallestAITTS\`](/en/api-reference/api-ref/server-sdk/python#tts-vendors): New TTS vendor class for Smallest AI.

        * **New fields** on [\`FillerWordsContentGeneratedConfig\`](/en/api-reference/api-ref/server-sdk/python#type-aliases)

          * \`context_message_limit\`: How many of the most recent conversation messages to use, counting the current turn's message. Accepts \`1\` to \`6\`, and defaults to \`1\`.
          * \`history_character_limit\`: Maximum combined characters of the earlier messages in the window. Accepts \`0\` to \`10000\`, and defaults to \`1000\`.

        * **Updated behavior**

          * \`prompt\`: A custom prompt fully replaces Agora's default prompt, and applies over the same conversation context window.
      </TabsContent>

      <TabsContent value="typescript">
        * [\`SmallestAISTT\`](/en/api-reference/api-ref/server-sdk/typescript#stt-vendors): New ASR vendor class for Smallest AI.

        * [\`GeminiSTT\`](/en/api-reference/api-ref/server-sdk/typescript#stt-vendors): New ASR vendor class for Gemini.

        * [\`OpenAIGPTLive\`](/en/api-reference/api-ref/server-sdk/typescript#mllm-vendors): New MLLM vendor class for OpenAI GPT-Live.

        * [MLLM vendor classes](/en/api-reference/api-ref/server-sdk/typescript#mllm-vendors): New \`tools\` option for custom tool definitions, and new \`mcpServers\` option for MCP tool-use.

        * [\`SmallestAITTS\`](/en/api-reference/api-ref/server-sdk/typescript#tts-vendors): New TTS vendor class for Smallest AI.

        * **New fields** on [\`FillerWordsContentGeneratedConfig\`](/en/api-reference/api-ref/server-sdk/typescript#type-aliases)

          * \`context_message_limit\`: How many of the most recent conversation messages to use, counting the current turn's message. Accepts \`1\` to \`6\`, and defaults to \`1\`.
          * \`history_character_limit\`: Maximum combined characters of the earlier messages in the window. Accepts \`0\` to \`10000\`, and defaults to \`1000\`.

        * **Updated behavior**

          * \`prompt\`: A custom prompt fully replaces Agora's default prompt, and applies over the same conversation context window.
      </TabsContent>

      <TabsContent value="go">
        * [\`NewSmallestAISTT\`](/en/api-reference/api-ref/server-sdk/go#stt-vendors): New ASR vendor class for Smallest AI.

        * [\`NewGeminiSTT\`](/en/api-reference/api-ref/server-sdk/go#stt-vendors): New ASR vendor class for Gemini.

        * [\`NewOpenAIGPTLive\`](/en/api-reference/api-ref/server-sdk/go#mllm-vendors): New MLLM vendor class for OpenAI GPT-Live.

        * [MLLM vendor classes](/en/api-reference/api-ref/server-sdk/go#mllm-vendors): New \`Tools\` option for custom tool definitions, and new \`McpServers\` option for MCP tool-use. \`NewOpenAIGPTLive\` uses \`McpServerConfigs\` for the same purpose.

        * [\`NewSmallestAITTS\`](/en/api-reference/api-ref/server-sdk/go#tts-vendors): New TTS vendor class for Smallest AI.

        * **New fields** on [\`FillerWordsContentGeneratedConfig\`](/en/api-reference/api-ref/server-sdk/go#type-aliases), both \`*int\`

          * \`ContextMessageLimit\`: How many of the most recent conversation messages to use, counting the current turn's message. Accepts \`1\` to \`6\`, and defaults to \`1\`.
          * \`HistoryCharacterLimit\`: Maximum combined characters of the earlier messages in the window. Accepts \`0\` to \`10000\`, and defaults to \`1000\`.

        * **Updated behavior**

          * \`Prompt\`: A custom prompt fully replaces Agora's default prompt, and applies over the same conversation context window.
      </TabsContent>

      <TabsContent value="rest-api">
        * Changes to [**Start a conversational AI agent**](/en/api-reference/api-ref/conversational-ai/join)

          * **New parameters**

            * [\`filler_words.content.generated_config.context_message_limit\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-filler-words-content-generated-config-context-message-limit): How many of the most recent conversation messages to use to generate a filler phrase, counting the current turn's message. Accepts \`1\` to \`6\`, and defaults to \`1\`.
            * [\`filler_words.content.generated_config.history_character_limit\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-filler-words-content-generated-config-history-character-limit): Maximum combined characters of the earlier messages in the window. Accepts \`0\` to \`10000\`, and defaults to \`1000\`.
            * [\`mllm.tools\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-tools): Custom tool definitions an MLLM agent can call. Takes the same format as \`llm.tools\`, and requires \`advanced_features.enable_tools\`.

          * **Updated parameters**

            * [\`asr.vendor\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-asr-vendor) value \`smallestai\`: Use Smallest AI as the ASR provider. See [Smallest AI](/en/ai/models/asr/smallest-ai).
            * [\`asr.vendor\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-asr-vendor) value \`gemini\`: Use Gemini as the ASR provider. See [Gemini](/en/ai/models/asr/gemini).
            * [\`mllm.vendor\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-vendor) value \`openai_gpt_live\`: Use OpenAI GPT-Live as the MLLM provider. See [OpenAI GPT-Live](/en/ai/models/mllm/openai-gpt-live).
            * [\`tts.vendor\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-tts-vendor) value \`smallestai\`: Use Smallest AI as the TTS provider. See [Smallest AI](/en/ai/models/tts/smallest-ai).
            * [\`filler_words.content.generated_config.prompt\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-filler-words-content-generated-config-prompt): A custom prompt fully replaces Agora's default prompt, and applies over the same conversation context window.
      </TabsContent>
    </Tabs>
  </Accordion>

  <Accordion title="v2.12" id="v212" headingLevel="3" value="v212">
    Released on September 10, 2026.

    #### New features [#new-features-1]

    Included in this release:

    * **Call custom tools**

      Agents can now call your own HTTPS endpoints as tools during a conversation. The LLM decides when to call a tool and generates its parameters from the conversation. The Conversational AI Engine then calls your endpoint and returns the result to the LLM to continue generating a response. Available in the Agora Agents SDKs and the RESTful API. For details, see [Call custom tools](build/tools/custom-tools).

    * **Generated filler words**

      Agents can now generate filler words from the current conversation instead of selecting them from a fixed phrase list. Agora hosts the generation service, so you don't need your own model, endpoint, or credentials. You can optionally keep a static phrase list as a fallback. Available in the Agora Agents SDKs and the RESTful API. For details, see [Talking while waiting](build/shape-the-conversation/filler-words).

    * **Defer custom instructions**

      Custom instructions now support an \`append\` action. Instead of interrupting the current interaction, the agent waits for the current turn to finish, then adds the instruction to the conversation and starts a new turn. Available in the Agora Agents SDKs and the RESTful API. For details, see [Send custom instructions](/en/api-reference/api-ref/conversational-ai/think).

    * **Client component support for direct speech and instruction injection**

      The [Android](/en/api-reference/api-ref/conversational-ai/client-toolkit/android), [iOS](/en/api-reference/api-ref/conversational-ai/client-toolkit/ios), and [Web](/en/api-reference/api-ref/conversational-ai/client-toolkit/web) client toolkits add \`speak\` and \`think\` methods. Use \`speak\` to bypass the LLM and make the agent speak text directly, or \`think\` to inject text as user input for the LLM to process. Both methods send messages over RTM and support message priority, interruption behavior, and per-state Think actions.

    * **MCP tool-use for MLLM agents**

      MLLM agents now support MCP tool-use, in addition to cascading LLM agents. Available only in the RESTful API. For details, see [Use MCP tools](build/tools/mcp-tools).

    * **New ASR provider**

      * [Gemini](models/asr/gemini)

    #### API changes [#api-changes-1]

    This release introduces the following changes for custom tool calling, generated filler words, MCP tool-use for MLLM agents, and the \`think\` API's \`append\` action.

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
        * [\`OpenAI\`](/en/api-reference/api-ref/server-sdk/python#openai) and other LLM vendor classes: New \`tools\` parameter for custom tool definitions.
        * [\`with_tools()\`](/en/api-reference/api-ref/server-sdk/python#other-builder-methods): Now also enables custom tools declared in \`tools\`, in addition to MCP tools.
        * [\`FillerWordsConfig\`](/en/api-reference/api-ref/server-sdk/python#type-aliases): New \`generated\` content mode and \`FillerWordsContentGeneratedConfig\` for generated filler words.
        * [\`AgentSession.think()\`](/en/api-reference/api-ref/server-sdk/python#thinktext): \`on_listening_action\`, \`on_thinking_action\`, and \`on_speaking_action\` accept the new value \`append\`.
        * New custom tool type aliases: \`LlmToolConfig\`, \`LlmToolFunctionConfig\`, \`LlmToolFunctionParametersConfig\`, \`LlmToolExecutionConfig\`, and \`LlmToolServerConfig\`.
      </TabsContent>

      <TabsContent value="typescript">
        * [\`OpenAI\`](/en/api-reference/api-ref/server-sdk/typescript#openai) and other LLM vendor classes: New \`tools\` option for custom tool definitions.
        * [\`withTools()\`](/en/api-reference/api-ref/server-sdk/typescript#other-builder-methods): Now also enables custom tools declared in \`tools\`, in addition to MCP tools.
        * [\`FillerWordsConfig\`](/en/api-reference/api-ref/server-sdk/typescript#type-aliases): New \`generated\` content mode and \`FillerWordsContentGeneratedConfig\` for generated filler words.
        * [\`AgentSession.think()\`](/en/api-reference/api-ref/server-sdk/typescript#thinktext-options): \`on_listening_action\`, \`on_thinking_action\`, and \`on_speaking_action\` accept the new value \`append\`.
        * New custom tool type aliases: \`LlmTool\`, \`LlmToolFunction\`, \`LlmToolServer\`, and \`LlmToolExecution\`.
      </TabsContent>

      <TabsContent value="go">
        * [\`NewOpenAI\`](/en/api-reference/api-ref/server-sdk/go#newopenai) and other LLM vendor constructors: New \`Tools\` field for custom tool definitions.
        * [\`WithTools()\`](/en/api-reference/api-ref/server-sdk/go#other-builder-methods): Now also enables custom tools declared in \`Tools\`, in addition to MCP tools.
        * [\`FillerWordsConfig\`](/en/api-reference/api-ref/server-sdk/go#type-aliases): New \`FillerWordsContentModeGenerated\` content mode and \`FillerWordsContentGeneratedConfig\` for generated filler words.
        * [\`Think()\`](/en/api-reference/api-ref/server-sdk/go#thinkctx): Each state action accepts the new value \`append\`.
        * New type aliases: \`LlmTool\`, \`LlmToolFunction\`, \`LlmToolFunctionParameters\`, \`LlmToolExecution\`, \`LlmToolServer\`, \`FillerWordsContentMode\`, and \`FillerWordsContentGeneratedConfig\`.
      </TabsContent>

      <TabsContent value="rest-api">
        * Changes to [**Start a conversational AI agent**](/en/api-reference/api-ref/conversational-ai/join)

          * **New parameters**

            * [\`llm.tools\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-tools): Custom tool definitions the LLM can call. Requires \`advanced_features.enable_tools\`.
            * [\`filler_words.content.generated_config\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-filler-words-content-generated-config): Prompt and fallback strategy for generated filler words. Used when \`filler_words.content.mode\` is \`generated\`.
            * [\`mllm.mcp_servers\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-mcp-servers): MCP server connections for MLLM agents. Requires \`advanced_features.enable_tools\`.

          * **Updated parameters**

            * [\`advanced_features.enable_tools\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-advanced-features-enable-tools): Now also enables custom tools declared in \`llm.tools\` and MCP tools declared in \`mllm.mcp_servers\`, in addition to MCP tools configured in \`llm.mcp_servers\`.
            * [\`filler_words.content.mode\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-filler-words-content-mode) value \`generated\`: Generate a filler phrase from the current context, with an optional \`filler_words.content.static_config\` fallback.
            * [\`filler_words.content.static_config\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-filler-words-content-static-config): Now a named sibling property of \`content\` instead of the \`"{mode}_config"\` key.

        * Changes to [**Send custom instructions**](/en/api-reference/api-ref/conversational-ai/think)

          * **Updated parameters**

            * [\`on_listening_action\`](/en/api-reference/api-ref/conversational-ai/think#request-body-properties-on-listening-action), [\`on_thinking_action\`](/en/api-reference/api-ref/conversational-ai/think#request-body-properties-on-thinking-action), and [\`on_speaking_action\`](/en/api-reference/api-ref/conversational-ai/think#request-body-properties-on-speaking-action) value \`append\`: Don't interrupt the current interaction; append the instruction as a separate user message once the current turn's LLM output finishes.
      </TabsContent>
    </Tabs>

    #### Toolkit API [#toolkit-api]

    This release adds \`speak\` and \`think\` methods to the client toolkit, so you can bypass the LLM to play text directly or inject text as user input:

    <Tabs defaultValue="android" groupId="ai-toolkit-platform">
      <TabsList>
        <TabsTrigger value="android">
          Android
        </TabsTrigger>

        <TabsTrigger value="ios">
          iOS
        </TabsTrigger>

        <TabsTrigger value="web">
          Web
        </TabsTrigger>
      </TabsList>

      <TabsContent value="android">
        * [\`speak\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/android#speak)
        * [\`think\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/android#think)
        * \`SpeakMessage\`, \`ThinkMessage\`, \`ThinkListeningAction\`, \`ThinkThinkingAction\`, \`ThinkSpeakingAction\`
      </TabsContent>

      <TabsContent value="ios">
        * [\`speak\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#speak)
        * [\`think\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#think)
        * \`SpeakMessage\`, \`ThinkMessage\`, \`ThinkListeningAction\`, \`ThinkThinkingAction\`, \`ThinkSpeakingAction\`
      </TabsContent>

      <TabsContent value="web">
        * [\`speak\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/web#speak)
        * [\`think\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/web#think)
        * \`SpeakMessage\`, \`ThinkMessage\`, \`EThinkListeningAction\`, \`EThinkThinkingAction\`, \`EThinkSpeakingAction\`
      </TabsContent>
    </Tabs>

    #### Deprecation notice [#deprecation-notice]

    <CalloutContainer type="warning">
      <CalloutTitle>
        Important
      </CalloutTitle>

      <CalloutDescription>
        These changes may affect your existing integration. Review each change and update your integration as needed.
      </CalloutDescription>
    </CalloutContainer>

    * **\`asr.params\` becomes required for non-default ASR vendors in v2.13.** Starting in v2.13, a request that sets [\`asr.vendor\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-asr-vendor) to a vendor other than \`ares\` and omits [\`asr.params\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-asr-params) fails. Configure \`asr.params\` for your vendor, or omit \`asr.vendor\` to keep the default \`ares\` vendor.
    * **Legacy \`turn_detection\` fields and the \`keywords\`/\`disabled\` start-of-speech modes lose their support guarantee in a future release.** Migrate to [\`turn_detection.config\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config) and [\`interruption\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-interruption), introduced in v2.6.
    * **\`advanced_features.enable_mllm\` loses its support guarantee in a future release.** The MLLM switch may stop working. Migrate to [\`mllm.enable\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-enable), introduced in v2.6.
  </Accordion>

  <Accordion title="v2.11" id="v211" headingLevel="3" value="v211">
    Released on August 11, 2026.

    #### New features [#new-features-2]

    Included in this release:

    * **ASR keywords**

      You can now configure keywords to improve ARES's recognition accuracy for specific terms, such as brand names, product names, or industry jargon. Configure keywords using the \`AresSTT\` vendor in the Agora Agents SDKs, or the \`keywords\` parameter within the \`asr\` block directly through the RESTful API. For details, see [Improve ASR accuracy with keywords](build/shape-the-conversation/asr-keywords).

    * **New TTS provider**

      * [Typecast](models/tts/typecast)

    * **New MLLM provider**

      * [Azure OpenAI Realtime API](models/mllm/azure)

    #### Improvements [#improvements-1]

    This release includes the following enhancement.

    * **Improved stability for long audio replies**

      This release improves resource protection and error-recovery logic for long streaming audio replies, reducing the likelihood of an abnormal disconnect or failed recovery. As a result, service stability improves for long replies and free-form conversation scenarios.

    #### API changes [#api-changes-2]

    This release introduces the following changes for ASR keywords and the new TTS and MLLM providers.

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
        * [\`AresSTT\`](/en/api-reference/api-ref/server-sdk/python#aresstt): New \`keywords\` parameter.
        * [\`TypecastTTS\`](/en/api-reference/api-ref/server-sdk/python#typecasttts): New TTS vendor class.
        * [\`AzureOpenAIRealtime\`](/en/api-reference/api-ref/server-sdk/python#azureopenairealtime): New MLLM vendor class.
      </TabsContent>

      <TabsContent value="typescript">
        * [\`AresSTT\`](/en/api-reference/api-ref/server-sdk/typescript#other-stt-vendors): New \`keywords\` option.
        * [\`TypecastTTS\`](/en/api-reference/api-ref/server-sdk/typescript#other-tts-vendors): New TTS vendor class.
        * [\`AzureOpenAIRealtime\`](/en/api-reference/api-ref/server-sdk/typescript#azureopenairealtime): New MLLM vendor class.
      </TabsContent>

      <TabsContent value="go">
        * [\`NewAresSTT\`](/en/api-reference/api-ref/server-sdk/go#newaresstt): New \`Keywords\` field.
        * [\`NewTypecastTTS\`](/en/api-reference/api-ref/server-sdk/go#newtypecasttts): New TTS vendor constructor.
        * [\`NewAzureOpenAIRealtime\`](/en/api-reference/api-ref/server-sdk/go#newazureopenairealtime): New MLLM vendor constructor.
      </TabsContent>

      <TabsContent value="rest-api">
        * Changes to [**Start a conversational AI agent**](/en/api-reference/api-ref/conversational-ai/join)

          * **New parameters**

            * [\`asr.keywords\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-asr-keywords): ASR keywords used to improve recognition accuracy for specific terms. Only available when \`asr.vendor\` is not set or \`ares\`.

          * **Updated parameters**

            * [\`tts.vendor\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-tts-vendor) value \`typecast\`: Use Typecast as the TTS provider. See [Typecast](/en/ai/models/tts/typecast).
            * [\`mllm.vendor\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-vendor) value \`azure\`: Use Azure OpenAI Realtime API as the MLLM provider. See [Azure OpenAI Realtime API](/en/ai/models/mllm/azure).
      </TabsContent>
    </Tabs>
  </Accordion>

  <Accordion title="v2.10" id="v210" headingLevel="3" value="v210">
    Released on July 30, 2026.

    #### New features [#new-features-3]

    Included in this release:

    * **Connect custom TTS services using the OpenAI protocol**

      You can now use a self-built, privately deployed, or third-party TTS service that implements the OpenAI TTS protocol as your agent's speech synthesis module. Configure it using the \`GenericTTS\` vendor in the Agora Agents SDKs (Go and TypeScript v2.4.0 or later, Python v2.4.1 or later), or the \`generic_http\` TTS vendor directly through the RESTful API. For details, see [Connect your own TTS service](/en/ai/build/custom-model-integration/custom-tts) and [Generic TTS](/en/ai/models/tts/generic-http).

    * **Client toolkit support for manual turn control**

      The Android, iOS, and Web client toolkits now provide dedicated APIs for manual Start of Speech (SoS) and End of Speech (EoS) control, so you no longer need to construct raw Signaling (RTM) messages by hand. Call \`manualSOS\`/\`manualEOS\` to send requests, and register the new result callbacks to handle the server's response. This capability is suitable for scenarios that require explicit control of the user turn boundary from the client side, such as AI interviews, interactive quizzes, and walkie-talkie apps. For details, see [Manually control start and end of speech](/en/ai/best-practices/manual-turn-control).

    * **New TTS providers**

      * [Gradium](models/tts/gradium)
      * [Mistral](models/tts/mistral)

    * **New Avatar provider**

      * [LemonSlice](models/avatar/lemonslice)

    #### Toolkit API [#toolkit-api-1]

    This release adds the following APIs to the client toolkit for manual turn control:

    <Tabs defaultValue="android" groupId="ai-toolkit-platform">
      <TabsList>
        <TabsTrigger value="android">
          Android
        </TabsTrigger>

        <TabsTrigger value="ios">
          iOS
        </TabsTrigger>

        <TabsTrigger value="web">
          Web
        </TabsTrigger>
      </TabsList>

      <TabsContent value="android">
        * [\`manualSOS\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/android#manualsos)
        * [\`manualEOS\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/android#manualeos)
        * [\`onUserManualSosEvent\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/android#onusermanualsosevent)
        * [\`onUserManualEosEvent\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/android#onusermanualeosevent)
        * [\`onAgentManualEosEvent\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/android#onagentmanualeosevent)
        * \`UserManualEventPayload\`, \`UserManualSosEvent\`, \`UserManualEosEvent\`, \`AgentManualEosPayload\`, \`AgentManualEosEvent\`
      </TabsContent>

      <TabsContent value="ios">
        * [\`manualSOS\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#manualsos)
        * [\`manualEOS\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#manualeos)
        * [\`onUserManualSosEvent\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#onusermanualsosevent)
        * [\`onUserManualEosEvent\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#onusermanualeosevent)
        * [\`onAgentManualEosEvent\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#onagentmanualeosevent)
        * \`UserManualEventPayload\`, \`UserManualSosEvent\`, \`UserManualEosEvent\`, \`AgentManualEosPayload\`, \`AgentManualEosEvent\`
      </TabsContent>

      <TabsContent value="web">
        * [\`manualSOS\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/web#manualsos)
        * [\`manualEOS\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/web#manualeos)
        * [\`EConversationalAIAPIEvents\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/web#econversationalaiapievents) values \`USER_MANUAL_SOS_RESULT\`, \`USER_MANUAL_EOS_RESULT\`, and \`AGENT_MANUAL_EOS_RESULT\`
        * \`TUserManualEventPayload\`, \`TUserManualSosEvent\`, \`TUserManualEosEvent\`, \`TAgentManualEosPayload\`, \`TAgentManualEosEvent\`
      </TabsContent>
    </Tabs>

    #### API changes [#api-changes-3]

    This release introduces the following changes for connecting TTS services.

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
        This release adds the following TTS vendor classes:

        * [\`GenericTTS\`](/en/api-reference/api-ref/server-sdk/python#generictts): Connect a custom TTS service using the OpenAI TTS protocol.
        * [\`GradiumTTS\`](/en/api-reference/api-ref/server-sdk/python#gradiumtts)
        * [\`MistralTTS\`](/en/api-reference/api-ref/server-sdk/python#mistraltts)
      </TabsContent>

      <TabsContent value="typescript">
        This release adds the following TTS vendor classes:

        * [\`GenericTTS\`](/en/api-reference/api-ref/server-sdk/typescript#generictts): Connect a custom TTS service using the OpenAI TTS protocol.
        * [\`GradiumTTS\` and \`MistralTTS\`](/en/api-reference/api-ref/server-sdk/typescript#other-tts-vendors)
      </TabsContent>

      <TabsContent value="go">
        This release adds the following TTS vendor constructors:

        * [\`NewGenericTTS\`](/en/api-reference/api-ref/server-sdk/go#newgenerictts): Connect a custom TTS service using the OpenAI TTS protocol.
        * [\`NewGradiumTTS\`](/en/api-reference/api-ref/server-sdk/go#newgradiumtts)
        * [\`NewMistralTTS\`](/en/api-reference/api-ref/server-sdk/go#newmistraltts)
      </TabsContent>

      <TabsContent value="rest-api">
        * Changes to [**Start a conversational AI agent**](/en/api-reference/api-ref/conversational-ai/join)

          * **New parameters**

            * [\`tts.url\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-tts-url): The OpenAI TTS protocol compatible service endpoint. Required only when \`tts.vendor\` is \`generic_http\`.
            * [\`tts.headers\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-tts-headers): Custom request headers to include in requests to the TTS service. Required only when \`tts.vendor\` is \`generic_http\`.

          * **Updated parameters**

            * [\`tts.vendor\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-tts-vendor) value \`generic_http\`: Integrate a custom TTS service using the OpenAI TTS protocol. See [Generic TTS](/en/ai/models/tts/generic-http).
            * [\`tts.vendor\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-tts-vendor) value \`gradium\`: Use Gradium as the TTS provider. See [Gradium](/en/ai/models/tts/gradium).
            * [\`tts.vendor\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-tts-vendor) value \`mistral\`: Use Mistral as the TTS provider. See [Mistral](/en/ai/models/tts/mistral).
            * [\`tts.params\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-tts-params): Now required when \`tts.vendor\` is \`generic_http\`.
      </TabsContent>
    </Tabs>
  </Accordion>

  <Accordion title="v2.9" id="v29" headingLevel="3" value="v29">
    Released on July 1, 2026.

    #### New features [#new-features-4]

    Included in this release:

    * **Manual turn control**

      You can now explicitly control when a user's speech starts and ends by sending manual Start of Speech (SoS) and End of Speech (EoS) requests over Signaling (RTM), instead of relying on automatic detection. This supports scenarios with strict turn-boundary requirements, such as AI interviews, interactive quizzes, or push-to-talk. Set [\`start_of_speech.mode\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config-start-of-speech-mode) and [\`end_of_speech.mode\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config-end-of-speech-mode) to \`manual\` when starting the agent. For details, see [Manually control start and end of speech](/en/ai/best-practices/manual-turn-control).

    * **Agent state notifications over RTM Message**

      You can now track agent state changes in real time using Signaling (RTM) Message events. The agent pushes \`state.listening\`, \`state.thinking\`, and \`state.speaking\` events as individual RTM messages, making it easier to record state change timestamps, process events sequentially, or consume state events alongside other RTM Message events. For details, see [Get agent state](/en/ai/best-practices/get-agent-state).

    * **Pre-recorded greeting audio**

      You can now play a pre-recorded audio file as the agent's greeting instead of synthesizing it with TTS. Set [\`properties.llm.greeting_audio_url\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-greeting-audio-url) to the URL of an \`mp3\`, \`wav\`, or \`pcm\` file when starting the agent. If the audio fails to download, decode, or is in an unsupported format, the agent automatically falls back to TTS synthesis using \`greeting_message\`.

    * **Managed mode**

      You can now use supported ASR, LLM, and TTS providers with Agora-managed credentials, without supplying your own API keys. Set [\`credential_mode\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-asr-credential-mode) to \`"managed"\` within the \`asr\`, \`llm\`, or \`tts\` block when starting an agent. Managed mode replaces the deprecated \`preset\` parameter. For details, see [Use managed mode](/en/ai/build/managed-mode).

    #### Improvements [#improvements-2]

    This release includes the following enhancements.

    * **Speech captured during an uninterruptible greeting**

      When [\`properties.llm.greeting_configs.interruptable\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-greeting-configs-interruptable) is set to \`false\`, the agent now silently collects the user's ASR results while the greeting plays. After the greeting ends, the system concatenates the collected speech segments into a single user message and sends it to the LLM for a unified response, instead of discarding speech that occurs during playback.

    #### API changes [#api-changes-4]

    This release introduces the following changes to the RESTful API.

    * Changes to [**Start a conversational AI agent**](/en/api-reference/api-ref/conversational-ai/join)

      * **New parameters**

        * [\`properties.llm.greeting_audio_url\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-greeting-audio-url): The URL of a pre-recorded audio file (\`mp3\`, \`wav\`, or \`pcm\`) to play as the agent's greeting instead of synthesizing it with TTS.
        * [\`properties.llm.greeting_configs.audio_download_timeout_ms\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-greeting-configs-audio-download-timeout-ms): The timeout in milliseconds for downloading the greeting audio file. Defaults to \`1000\`.
        * [\`properties.llm.greeting_configs.audio_pcm_sample_rate\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-greeting-configs-audio-pcm-sample-rate): The sample rate in Hz of the greeting audio file when the format is PCM. Defaults to \`16000\`.
        * [\`properties.asr.credential_mode\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-asr-credential-mode), [\`properties.llm.credential_mode\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-credential-mode), and [\`properties.tts.credential_mode\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-tts-credential-mode): Set to \`"managed"\` to use Agora-managed credentials for the provider without supplying your own API key.

      * **Updated parameters**

        * [\`properties.turn_detection.config.start_of_speech.mode\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config-start-of-speech-mode): Now accepts \`manual\`, which disables automatic start-of-speech detection so the client can explicitly signal the start of user speech over RTM.
        * [\`properties.turn_detection.config.end_of_speech.mode\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config-end-of-speech-mode): Now accepts \`manual\`, which disables automatic end-of-speech detection so the client can explicitly signal the end of user speech over RTM.
        * [\`properties.llm.greeting_message\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-greeting-message): In addition to serving as a standalone greeting, this field is now required as a fallback when \`greeting_audio_url\` is configured, and is used to maintain conversation context when an audio greeting is interrupted.

      * **Deprecated parameters**

        * [\`preset\`](/en/api-reference/api-ref/conversational-ai/join#preset): Deprecated in favor of setting \`credential_mode\` to \`"managed"\` within the \`asr\`, \`llm\`, or \`tts\` block. See [Use managed mode](/en/ai/build/managed-mode).

    * Changes to [**Notification event types**](/en/ai/reference/event-types)

      * **Updated events**

        * [\`110 agent error\`](/en/ai/reference/event-types#110-agent-error): Now reports greeting audio URL errors when the greeting audio file fails to download, times out, is in an unsupported format, or fails to decode. The agent automatically falls back to TTS synthesis using \`greeting_message\`. When \`parameters.enable_error_message\` is \`true\`, these errors are also delivered to the client via the \`onMessageError\` RTM callback.
  </Accordion>

  <Accordion title="v2.8" id="v28" headingLevel="3" value="v28">
    Released on June 11, 2026.

    #### New features [#new-features-5]

    Included in this release:

    * **Session data retention control**

      By default, session interaction text and audio are temporarily retained for the minimum necessary period to support service operation, agent optimization, and troubleshooting. To disable data retention for a session, set [\`properties.parameters.opt_out\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-parameters-opt-out) to \`true\` when starting an agent.

    * **RTC token expiry warning**

      A new [\`104 agent expire\`](reference/event-types#104-agent-expire) event is triggered when the agent's RTC token is about to expire. Upon receiving this event, call the [Update agent](/en/api-reference/api-ref/conversational-ai/update) API with a new token to refresh it. The agent does not exit the channel or interrupt the session when this event is triggered.

    * **New ASR provider**

      * [xAI](models/asr/xai)

    * **New LLM provider**

      * [xAI Grok](models/llm/xai)

    * **New TTS provider**

      * [xAI](models/tts/xai)

    #### Improvements [#improvements-3]

    This release includes the following enhancements.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Important
      </CalloutTitle>

      <CalloutDescription>
        These changes may affect your existing integration. Review each change and update your integration as needed.
      </CalloutDescription>
    </CalloutContainer>

    * **Idle timeout behavior change**

      Setting \`properties.idle_timeout\` to \`0\` no longer means the agent runs indefinitely. From this release, \`0\` only disables the channel idle timeout. Regardless of the \`idle_timeout\` value, the maximum running time for a single session is 72 hours, after which the agent automatically exits.

      If your integration previously relied on \`idle_timeout = 0\` to keep an agent running until manually stopped, update your task scheduling and lifecycle management logic to account for the 72-hour limit.

    #### API changes [#api-changes-5]

    This release introduces the following changes to the RESTful API.

    * Changes to [**Start a conversational AI agent**](/en/api-reference/api-ref/conversational-ai/join)

      * **New parameters**

        * [\`properties.parameters.opt_out\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-parameters-opt-out): Set to \`true\` to disable data retention for the current session.

      * **Updated parameters**

        * [\`properties.idle_timeout\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-idle-timeout): Valid range is now \`0\` to \`259200\` seconds (72 hours). Regardless of the value set, the maximum running time for a single session is 72 hours.

    * Changes to [**Retrieve agent history**](/en/api-reference/api-ref/conversational-ai/history)

      * **New response fields**

        * [\`contents[].speech_start_ms\`](/en/api-reference/api-ref/conversational-ai/history#contents-speech-start-ms): Unix timestamp in milliseconds indicating when the user started speaking or the agent started TTS playback. Only returned when \`llm.vendor\` is \`custom\`.
        * [\`contents[].speech_end_ms\`](/en/api-reference/api-ref/conversational-ai/history#contents-speech-end-ms): Unix timestamp in milliseconds indicating when the user stopped speaking, or when TTS playback completed or was interrupted. Only returned when \`llm.vendor\` is \`custom\`.
        * [\`contents[].speech_algorithmic_delay\`](/en/api-reference/api-ref/conversational-ai/history#contents-speech-algorithmic-delay): The total delay in milliseconds introduced by audio processing algorithms after audio is captured from the user's microphone. Only returned when \`llm.vendor\` is \`custom\`, \`contents[].role\` is \`user\`, and actual voice input is present.

    * Changes to [**Notification event types**](reference/event-types)

      * **New events**

        * [\`104 agent expire\`](reference/event-types#104-agent-expire): Triggered when the agent's RTC token is about to expire. Call the Update agent API with a new token upon receiving this event.

      * **Updated events**

        * [\`102 agent left\`](reference/event-types#102-agent-left): Added \`Task lifetime limit exceeded\` as a new exit reason when the 72-hour session limit is reached.
        * [\`103 agent history\`](reference/event-types#103-agent-history): Added \`contents[].speech_start_ms\`, \`contents[].speech_end_ms\`, and \`contents[].speech_algorithmic_delay\`. Only returned when \`llm.vendor\` is \`custom\`.

    * Changes to [**Retrieve a list of agents**](/en/api-reference/api-ref/conversational-ai/list)

      * **Updated parameters**

        * \`state\`: Now accepts a comma-separated list of values to filter by multiple agent states in a single request. For example, \`state=0,1,2\`.
  </Accordion>

  <Accordion title="v2.7" id="v27" headingLevel="3" value="v27">
    Released on May 20, 2026.

    #### New features [#new-features-6]

    Included in this release:

    * **New MLLM provider**

      * [xAI Grok](models/mllm/xai)

    * **New Avatar providers**

      * [Generic avatar (Beta)](models/avatar/generic)

    * **Greeting interruption control**

      The \`properties.llm.greeting_configs\` object in the [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join) API now supports an \`interruptable\` parameter, which controls whether user speech can interrupt a greeting during playback.

    #### Improvements [#improvements-4]

    This release includes the following enhancements:

    <CalloutContainer type="warning">
      <CalloutTitle>
        Important
      </CalloutTitle>

      <CalloutDescription>
        These changes may affect your existing integration. Review each change and update your integration as needed.
      </CalloutDescription>
    </CalloutContainer>

    * **Response status codes updated**

      This release adjusts the HTTP response status codes and \`reason\` values returned by the RESTful API. New status codes \`401\`, \`429\`, and \`500\` are added. New \`reason\` values \`ServiceNotEnabled\`, \`AccountSuspended\`, and \`ResourceAllocationFailed\` are introduced. The existing \`InvalidRequest\` reason is replaced by \`InvalidRequestBody\`, \`MissingRequiredField\`, and \`InvalidFieldValue\`. For details, see [Status codes and error messages](/en/api-reference/api-ref/conversational-ai/status-codes).

      If your integration relies on \`reason\` values for error handling, retry logic, or alerting, update your logic to handle the new values accordingly.

    * **Query conversation turns API now returns paginated results**

      The [Query conversation turn information](/en/api-reference/api-ref/conversational-ai/turns) API no longer returns all turns in a single response. Results are now paginated, defaulting to page 1 with up to 50 turns per page.

      This affects sessions with more than 50 conversation turns. Update your integration to handle the new \`total_turn_count\` and \`pagination\` fields in the response, and retrieve subsequent pages as needed.

      This release also adds the [112 turns finished](reference/event-types#112-turns-finished) notification event, which delivers conversation turn data in batches after a session ends as an alternative way to retrieve turn data.

    * **\`on_listening_action\` default behavior change**

      The default value of \`on_listening_action\` in the [Send a custom instruction](/en/api-reference/api-ref/conversational-ai/think) API has changed from \`inject\` to \`interrupt\`. When set to \`interrupt\`, the API immediately interrupts the current flow and initiates a new round of dialogue. If you rely on the previous default behavior, explicitly set \`on_listening_action\` to \`inject\` in your requests.

    #### API changes [#api-changes-6]

    This release introduces the following changes to the RESTful API.

    * Changes to [**Start a conversational AI agent**](/en/api-reference/api-ref/conversational-ai/join)

      * **New parameters**

        * [\`properties.llm.greeting_configs.interruptable\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-greeting-configs-interruptable): Controls whether user speech can interrupt a greeting during playback.

    * Changes to [**Query conversation turn information**](/en/api-reference/api-ref/conversational-ai/turns)

      * **New query parameters**

        Adds \`page_index\` and \`page_size\` fields to [query parameters](/en/api-reference/api-ref/conversational-ai/turns#query-parameters).

      * **New response parameters**

        The [response](/en/api-reference/api-ref/conversational-ai/turns#response) now includes additional top-level fields:

        * \`agent_id\`: The unique identifier of the agent.
        * \`name\`: The name of the agent.
        * \`channel\`: The name of the RTC channel the agent joined.
        * \`total_turn_count\`: The total number of dialogue turns in the session.
        * \`pagination\`: Pagination details for the response, including \`page_index\`, \`total_pages\`, and \`is_last_page\`.

    * Changes to [**Send a custom instruction**](/en/api-reference/api-ref/conversational-ai/think)

      * **Behavior changes**

        * [\`on_listening_action\`](/en/api-reference/api-ref/conversational-ai/think#on-listening-action): The default value has changed from \`inject\` to \`interrupt\`. When set to \`interrupt\`, the API immediately interrupts the current flow and initiates a new round of dialogue.

    * Changes to [**Notification event types**](reference/event-types)

      * **New events**

        * \`112 turns finished\`: Triggered after a session ends, delivering conversation turn data in batches for post-session analysis and processing.
  </Accordion>

  <Accordion title="v2.6" id="v26" headingLevel="3" value="v26">
    Released on April 22, 2026.

    #### New features [#new-features-7]

    Included in this release:

    * **New TTS provider**

      * [Deepgram](models/tts/deepgram)

    * **New endpoint: Send a custom instruction**

      Adds a new endpoint to inject a custom text instruction into the agent's current conversation pipeline. The instruction is processed as user input, enabling scenarios such as implicit instruction injection, client-side event triggering, and voice and text collaboration. For details, see [Send a custom instruction](/en/api-reference/api-ref/conversational-ai/think).

    * **MLLM turn detection refactoring**

      Introduces a new [\`mllm.turn_detection\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-turn-detection) object for configuring turn detection when using MLLM. When defined, this overrides the top-level \`turn_detection\` object. Supported modes vary by vendor:

      * OpenAI Realtime API: \`agora_vad\`, \`server_vad\`, \`semantic_vad\`
      * Google Gemini Live: \`agora_vad\`, \`server_vad\`

    * **Interruption control**

      Adds a new top-level [\`interruption\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-interruption) object for unified management of agent interruption behavior. Supports \`start_of_speech\` and \`keywords\` trigger modes, and configurable handling strategies when interruption is disabled.

    #### Improvements [#improvements-5]

    This release includes the following enhancements:

    * **New agent state callbacks**

      Adds three callbacks to the [Android](/en/api-reference/api-ref/conversational-ai/client-toolkit/android#onagentlisteningchanged), [iOS](/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#onagentlisteningchanged), and [web](/en/api-reference/api-ref/conversational-ai/client-toolkit/web#econversationalaiapievents) Toolkit event handler interface:

      * \`onAgentListeningChanged\`: Listen for changes in the agent's listening state to monitor when the agent starts or stops listening to user input.
      * \`onAgentThinkingChanged\`: Listen for changes in the agent's thinking state to monitor when the agent starts or stops processing a request.
      * \`onAgentSpeakingChanged\`: Listen for changes in the agent's speaking state to monitor when the agent starts or stops playing back speech.

    * **Added \`name\` field to all [NCS event](reference/event-types) payloads**

      Returns the agent name provided when starting the agent.

    #### API changes [#api-changes-7]

    This release introduces the following changes to the RESTful API.

    * **New endpoint**

      * [Send a custom instruction](/en/api-reference/api-ref/conversational-ai/think): \`POST /v2/projects/{appid}/agents/{agentId}/think\`

    * Changes to [**Start a conversational AI agent**](/en/api-reference/api-ref/conversational-ai/join)

      * **New parameters**

        * [\`interruption\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-interruption): Unified interruption control configuration. Supports \`start_of_speech\` and \`keywords\` trigger modes, and configurable handling strategies when interruption is disabled.
        * [\`greeting_configs.delay_ms\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-greeting-configs-delay-ms): Specifies the delay in milliseconds before the agent plays the greeting message after the user joins the channel.
        * [\`llm.headers\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-headers): Lets you pass custom headers in LLM requests, such as business-specific fields or tenant identifiers.
        * [\`mllm.enable\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-enable): Enables the MLLM module. Replaces the deprecated \`advanced_features.enable_mllm\`.
        * [\`mllm.turn_detection\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-turn-detection): Turn detection configuration for the MLLM module. When defined, overrides the top-level \`turn_detection\` object.
        * [\`mllm.turn_detection.server_vad_config.idle_timeout_ms\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-turn-detection-server-vad-config-idle-timeout-ms): Idle timeout in milliseconds for server VAD mode. Applicable to OpenAI Realtime API only.
        * [\`mllm.vendor\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-vendor) value \`gemini\`: Enables Google Gemini Live integration using the Gemini Developer API.

      * **Behavior changes**

        * \`turn_detection\` now handles SoS and EoS detection only. Interruption handling strategies have moved to the new top-level \`interruption\` field.
        * \`turn_detection.config.start_of_speech.mode\` values \`keywords\` and \`disabled\` are deprecated. Use the new \`interruption\` field instead.
        * When \`turn_detection.end_of_speech.mode\` is set to \`semantic\`, EOS detection supports English and Chinese only. For unsupported languages, the engine automatically falls back to VAD.

      * **Deprecated fields**

        * \`advanced_features.enable_mllm\`: Use \`mllm.enable\` instead.
        * \`turn_detection.config.start_of_speech.mode\` value \`keywords\`: Use \`interruption.mode = "keywords"\` instead.
        * \`turn_detection.config.start_of_speech.mode\` value \`disabled\`: Use \`interruption.enable = false\` with \`interruption.disabled_config.strategy\` instead.

      * **Removed fields**

        * \`mllm.style\`
        * \`mllm.create_response\` and \`mllm.interrupt_response\` for OpenAI Realtime API.

    * Changes to [**Notification event types**](reference/event-types)

      * **New fields**

        * Added \`name\` to all [NCS event payloads](reference/event-types). Returns the agent name provided when starting the agent.
  </Accordion>

  <Accordion title="v2.5" id="v25" headingLevel="3" value="v25">
    Released on March 31, 2026.

    #### New features [#new-features-8]

    Included in this release:

    * **Preset model configurations**

      Adds a [\`preset\`](/en/api-reference/api-ref/conversational-ai/join#preset) parameter to the Join API. Pass a comma-separated list of preset names to apply predefined configurations for ASR, LLM, and TTS providers. When you use a preset, you do not need to provide the endpoint URL, API key, or model for the preset provider. Use the \`asr\`, \`llm\`, and \`tts\` fields to configure additional settings. When you use a preset, the corresponding ASR, LLM, or TTS service is provided through Agora-managed accounts. For details, see the [pricing](reference/pricing) page.

      Available presets:

      * ASR: \`deepgram_nova_2\`, \`deepgram_nova_3\`
      * LLM: \`openai_gpt_4o_mini\`, \`openai_gpt_4_1_mini\`, \`openai_gpt_5_nano\`, \`openai_gpt_5_mini\`
      * TTS: \`minimax_speech_2_6_turbo\`, \`minimax_speech_2_8_turbo\`, \`openai_tts_1\`

    * **Pause state detection**

      When enabled, the agent uses semantic understanding to detect when a user intends to pause the conversation. For example, if the user says "hold on" or "just a moment", the agent waits for further input instead of forwarding the utterance to the LLM. Controlled by the new [\`pause_state_enabled\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config-end-of-speech--mode-config-pause-state-enabled) parameter.

    * **Conversation turn insights**

      You can now query per-turn start, end, and latency metrics for completed agent sessions. See [Query conversation turn information](/en/api-reference/api-ref/conversational-ai/turns).

    * **Real-time TTS parameter updates with custom LLM**

      In scenarios with a custom LLM integrated, this release adds support for real-time TTS parameter updates during conversations, enabling a more natural conversational experience. This feature applies to the following use cases:

      * The custom LLM detects a user request for the agent to change its voice or speaking style.
      * The custom LLM identifies a user's positive emotion and adjusts TTS volume, pitch, speech rate, and other parameters in real time to better match the user's mood.

      For implementation details, refer to [Real-time TTS parameter updates](build/custom-model-integration/custom-llm#update-tts-parameters-in-real-time).

    * **New TTS provider**

      * [Murf (Beta)](models/tts/murf)

    * **New Avatar provider**

      * [Anam (Beta)](models/avatar/anam)

    #### Improvements [#improvements-6]

    This release includes the following enhancements:

    * **Migration from HeyGen API to LiveAvatar (Beta) API**

      Updates the HeyGen avatar model configuration to use the [LiveAvatar (Beta)](models/avatar/heygen) API.

    #### API changes [#api-changes-8]

    This release introduces the following changes to the RESTful API.

    * **New endpoint: Query conversation turns**

      Adds a new GET endpoint to query conversation turn information for an agent session. After a conversation ends, use this endpoint to retrieve the start event, end event, and latency metrics for each turn within the session. For details, see [Query conversation turn information](/en/api-reference/api-ref/conversational-ai/turns).

    * Changes to [**Start a conversational AI agent**](/en/api-reference/api-ref/conversational-ai/join)

      * **New parameters added**

        * [\`preset\`](/en/api-reference/api-ref/conversational-ai/join#preset)
        * [\`pause_state_enabled\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config-end-of-speech--mode-config-pause-state-enabled)

      * **Deprecated fields deleted**

        The following deprecated fields are deleted:

        * \`properties.silence_timeout\`
        * \`properties.advanced_features.enable_aivad\`
        * \`properties.llm.silence_message\`
  </Accordion>

  <Accordion title="v2.4" id="v24" headingLevel="3" value="v24">
    Released on February 2, 2026.

    #### New features [#new-features-9]

    Included in this release:

    * **MCP integration**

      Adds a [\`llm.mcp_servers\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-mcp-servers) field to the [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join) API to connect the LLM to an MCP (Model Context Protocol) server. Set [\`advanced_features.enable_tools\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-advanced-features-enable-tools) to \`true\` to enable tool calls. This allows the agent to call tools provided by external services to extend functionality. For details, see [Use MCP tools](build/tools/mcp-tools).

    * **Filler phrases**

      Adds a [\`properties.filler_words\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-filler-words) field to insert pre-set or LLM-generated filler phrases during conversations to fill periods of silence while waiting for LLM output. This feature smooths dialogue flow, reduces user anxiety, and makes agent speech sound more natural.

    #### Improvements [#improvements-7]

    This release includes the following enhancements:

    * **Turn detection configuration optimization**

      The \`turn_detection\` parameter structure has been updated to provide more flexible conversation turn detection. The new structure uses a \`mode\` + \`config\` pattern with separate Start of Speech (SoS) and End of Speech (EoS) detection configurations.

      **Basic configuration**

      * \`mode\`: Conversation turn detection mode (currently supports \`default\`)
      * \`config.speech_threshold\`: Voice activity detection sensitivity

      **Start of Speech (SoS) detection**

      Detects when the user begins speaking. When SoS is detected while the agent is speaking, an interruption occurs.

      The [\`config.start_of_speech\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config-start-of-speech) parameter supports three detection modes:

      * **VAD mode** (\`vad\`): Triggered by voice activity detection. Supports configuration of interruption threshold, prefix padding, and ignore word list.
      * **Keyword mode (Beta)** (\`keywords\`): Based on keyword triggering. The agent begins conversation after detecting a specified keyword.
      * **Disabled mode** (\`disabled\`): Disables interruption. Supports append or ignore strategies.

      **End of Speech (EoS) detection**

      Detects when the user finishes speaking. When EoS is detected, the agent generates a response.

      The [\`config.end_of_speech\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config-end-of-speech) parameter supports two detection modes:

      * **VAD mode** (\`vad\`): Determines conversation end based on silence duration.
      * **Semantic mode** (\`semantic\`): Determines conversation end based on semantic understanding. Supports configurable maximum wait time.

    #### API changes [#api-changes-9]

    This release introduces the following changes to the RESTful API.

    * Changes to [**Start a conversational AI agent**](/en/api-reference/api-ref/conversational-ai/join)

      * **[\`turn_detection\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection) has a revamped structure**

        All previous fields under \`turn_detection\` have been deprecated and replaced with a new data structure.

        * Deprecated

          * \`turn_detection.interrupt_mode\`
          * \`turn_detection.interrupt_keywords\`
          * \`turn_detection.interrupt_duration_ms\`
          * \`turn_detection.prefix_padding_ms\`
          * \`turn_detection.silence_duration_ms\`
          * \`turn_detection.threshold\`

      * **AIVAD activation**

        The \`advanced_features.enable_aivad\` field is now deprecated; to configure AIVAD activation use [\`turn_detection.config.end_of_speech.mode = "semantic"\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config-end-of-speech-mode).

      * **New parameters added**

        * [\`advanced_features.enable_tools\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-advanced-features-enable-tools)
        * [\`llm.mcp_servers\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-mcp-servers)
        * [\`properties.filler_words\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-filler-words)
        * [\`turn_detection.mode\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-mode)
        * [\`turn_detection.config\`](/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config)
  </Accordion>

  <Accordion title="v2.3" id="v23" headingLevel="3" value="v23">
    Released on January 7, 2026.

    #### New features [#new-features-10]

    Included in this release:

    * **Control LLM response interruption in custom LLM scenarios**

      Adds a \`metadata.interruptable\` field in the first chunk of the \`chat.completion.custom_metadata\` object to control whether user speech can interrupt the agent's TTS output when using custom LLMs with streaming response (SSE). Use this to prevent interruptions when delivering critical information such as regulations, policies, or pricing. For more information, see [Configure LLM response interruption](build/custom-model-integration/custom-llm#configure-llm-response-interruption).

    * **RTC media content encryption**

      Adds an \`rtc\` parameter to the [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join) API for configuring RTC encryption.

    * **New ASR provider**

      * [Sarvam (Beta)](models/asr/sarvam)

    #### Improvements [#improvements-8]

    This release includes the following enhancements:

    * **ElevenLabs TTS compatibility optimization**

      Supports SSML parsing and forwarding to ensure ElevenLabs TTS correctly renders intended speech effects such as pauses, emphasis, and pronunciation.

    * **Latency optimization best practices**

      Adds a guide to [Optimize conversation latency](best-practices/optimize-latency).

    * **Cloud Recording best practices**

      Adds a guide to [Record conversations with Cloud Recording](best-practices/record-agent-conversation).

    #### API changes [#api-changes-10]

    This release introduces the following changes to the RESTful API.

    * **Stop agent API is now asynchronous**

      The [Stop a conversational AI agent](/en/api-reference/api-ref/conversational-ai/leave) API now responds immediately after request parameters are validated. The request is processed asynchronously after the API returns.

    * Changes to [**Start a conversational AI agent**](/en/api-reference/api-ref/conversational-ai/join)

      * **New parameters added**

        * \`properties.rtc\`
  </Accordion>

  <Accordion title="v2.2" id="v22" headingLevel="3" value="v22">
    Released on December 15, 2025.

    #### New features [#new-features-11]

    Included in this release:

    * **Geofencing**

      Use \`geofence\` configuration when you [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join) to limit which Agora servers the Conversational AI Engine can access based on geographic regions. See [Restrict agent zones](best-practices/regional-restrictions) for details.

    * **Agent greeting mode**

      Adds a field \`llm.greeting_configs.mode\` to the [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join) request to set the agent's greeting broadcast mode. The following modes are supported:

      * \`single_every\` (Default): The agent broadcasts a greeting every time a user joins a channel where there are no other users.
      * \`single_first\`: The agent broadcasts a greeting only when the first user joins a channel.

    * **New TTS providers**

      * [Sarvam (Beta)](models/tts/sarvam)

    #### Improvements [#improvements-9]

    This release includes the following enhancements:

    * **TTS parameter update**

      Adds \`base_url\` field to the TTS parameters for [OpenAI](models/tts/openai) and [ElevenLabs](models/tts/elevenlabs). This field specifies the endpoint URL for the TTS service.

    #### API changes [#api-changes-11]

    This release introduces the following changes to the RESTful API.

    * Changes to [**Start a conversational AI agent**](/en/api-reference/api-ref/conversational-ai/join)

      * **New parameters added**

        * \`properties.geofence\`
        * \`llm.greeting_configs.mode\`
  </Accordion>

  <Accordion title="v2.1" id="v21" headingLevel="3" value="v21">
    Released on December 5, 2025.

    #### New features [#new-features-12]

    Included in this release:

    * **Template variables**

      This version adds the \`llm.template_variables\` field to the [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join) API, used to insert variables into the agent's \`system_messages\`, \`greeting_message\`, \`failure_message\`, and \`parameters.silence_config.content\` text. By configuring these variables, the Conversational AI engine automatically replaces them with the corresponding values defined in \`llm.template_variables\`. Template variables, combined with prompt customization and SIP outbound calling functionality, enable you to dynamically inject content to automate processes such as automatic hang-up, voicemail recognition, automatic message leaving, and call transfer.

    * **Custom labels**

      This version adds a \`labels\` field to the [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join) API, enabling agents to carry custom labels. These labels are bound to the agent and returned in the \`payload\` field of all message notification callbacks from the Conversational AI engine, allowing you to implement custom business logic, such as tagging activity IDs, customer groups, and business scenarios.

      In SIP outbound call scenarios, you can pass a custom label in the \`properties.labels\` field when calling the outbound call interface to mark the call.

    #### API changes [#api-changes-12]

    This release introduces the following changes to the RESTful API.

    * Changes to [**Start a conversational AI agent**](/en/api-reference/api-ref/conversational-ai/join)

      * **New parameters added**

        * \`properties.labels\`
        * \`llm.template_variables\`
  </Accordion>

  <Accordion title="v2.0" id="v20" headingLevel="3" value="v20">
    Released on November 15, 2025.

    #### New features [#new-features-13]

    Included in this release:

    * **Telephony (Beta)**

      This version adds an outbound calling feature that enables the conversational AI agent to initiate an outbound call to a specified number through a POST API. After the call is answered, the agent can engage in real-time dialogue with the callee. This feature supports a wide range of outbound AI call scenarios.

      A set of phone number management APIs is also added for handling numbers connected to Conversational AI Engine. Refer to the API changes section for details.

      <CalloutContainer type="info">
        <CalloutTitle>
          Telephony pricing
        </CalloutTitle>

        <CalloutDescription>
          The telephony feature is currently in **Beta** and is provided free of charge. Pricing terms may change upon official release.
        </CalloutDescription>
      </CalloutContainer>

    * **Selective attention locking (Beta)**

      This version adds the selective attention lock feature. Register voiceprints to enable the agent to identify specific speakers and suppress background voices and environmental noise, ensuring clearer, more focused conversations.

    * **Graceful exit**

      This version adds a new \`farewell_config\` field to [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join) API to configure the graceful exit feature. When enabled, calling the [Stop a Conversational Agent](/en/api-reference/api-ref/conversational-ai/leave) API causes the agent to enter an \`IDLE\` state before leaving the channel.

    * **Keyword interruption mode**

      This release adds a new option to the \`turn_detection.interrupt_mode\` field in the [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join) API. Set this field to \`"keyword"\` to enable keyword interruption mode.

      When this mode is enabled, the agent stops its current behavior after detecting any of the keywords specified in the \`turn_detection.interrupt_keywords\` field.

    * **Adaptive interruption mode**

      This release adds a new option to the \`turn_detection.interrupt_mode\` field in the [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join) API. Set this field to \`"adaptive"\` to enable adaptive interruption mode.

      When this mode is enabled, the agent dynamically increases the voice continuity threshold while speaking to reduce accidental interruptions.

    * **New ASR, LLM, MLLM, and TTS providers**

      * ASR
        * [OpenAI (Beta)](models/asr/openai)
        * [Speechmatics](models/asr/speechmatics)
        * [Google (Beta)](models/asr/google)
        * Amazon Transcribe (Beta)
        * [AssemblyAI (Beta)](models/asr/assembly-ai)
      * LLM
        * [Groq](models/llm/groq)
        * [Amazon Bedrock](models/llm/amazon)
      * MLLM
        * [Google Gemini Live](models/mllm/gemini)
      * TTS
        * [Rime (Beta)](models/tts/rime)
        * [Fish Audio (Beta)](models/tts/fish-audio)
        * [Google (Beta)](models/tts/google)
        * [Amazon Polly (Beta)](models/tts/amazon)

    * **New webhook notification events**

      This release adds three new webhook notification event types to support metrics reporting and call-state monitoring:

      * \`111\`: [agent metrics](reference/event-types#111-agent-metrics)

        Notifies real-time performance metrics for each dialogue turn, including ASR, LLM, and TTS latency measurements.

      * \`201\`: [inbound call state](reference/event-types#201-inbound-call-state)

        Reports state changes for incoming calls, such as when a call starts, is answered, transferred, or hung up.

      * \`202\`: [outbound call state](reference/event-types#202-outbound-call-state)

        Reports state changes for outbound calls initiated by the agent, including call start, dialing, ringing, answer, and hang-up events.

    #### Improvements [#improvements-10]

    This release includes the following enhancements:

    * **Support for avatars with MLLMs**

      Added support for using avatars with MLLMs.

    #### API changes [#api-changes-13]

    This release introduces the following changes to the RESTful API.

    * Changes to [**Start a conversational AI agent**](/en/api-reference/api-ref/conversational-ai/join)

      * **New parameters added**

        * \`properties.parameters.farewell_config\`
        * \`properties.advanced_features.enable_sal\`
        * \`properties.sal\`
        * \`properties.sal.sal_mode\`
        * \`properties.sal.sample_urls\`
        * \`properties.turn_detection.interrupt_mode\` (supports \`adaptive\` and \`keyword\` values)
        * \`properties.turn_detection.interrupt_keywords\`
        * \`properties.turn_detection.interrupt_duration_ms\` (migrated from \`vad.interrupt_duration_ms\`)
        * \`properties.turn_detection.prefix_padding_ms\` (migrated from \`vad.prefix_padding_ms\`)
        * \`properties.turn_detection.silence_duration_ms\` (migrated from \`vad.silence_duration_ms\`)
        * \`properties.turn_detection.threshold\` (migrated from \`vad.threshold\`)

      * **Deprecated**

        * The \`vad\` interface is deprecated. All configuration items have been moved to the \`turn_detection\` field.

    * **New APIs**

      * Telephony (Beta)
        * Initiate an outbound call
        * Retrieve call records
        * Hang-up a call
        * Retrieve call status

      * Phone number management (Beta)
        * Retrieve list of numbers
        * Import number
        * Retrieve number information
        * Update number configuration
        * Delete number

    #### Toolkit API [#toolkit-api-2]

    This release renames all APIs and parameters containing the word \`transcription\` in the client-side subtitle API to use \`transcript\`, as shown below:

    #### Android [#android]

    * \`onTranscriptionUpdated\` renamed to \`onTranscriptUpdated\`
    * \`TranscriptionRenderMode\` renamed to \`TranscriptRenderMode\`
    * \`TranscriptionType\` renamed to \`TranscriptType\`
    * \`TranscriptionStatus\` renamed to \`TranscriptStatus\`
    * \`Transcription\` renamed to \`Transcript\`

    #### iOS [#ios]

    * \`onTranscriptionUpdated\` renamed to \`onTranscriptUpdated\`
    * \`TranscriptionRenderMode\` renamed to \`TranscriptRenderMode\`
    * \`TranscriptionType\` renamed to \`TranscriptType\`
    * \`TranscriptionStatus\` renamed to \`TranscriptStatus\`
    * \`Transcription\` renamed to \`Transcript\`

    #### Web [#web]

    * \`TRANSCRIPTION_UPDATED\` renamed to \`TRANSCRIPT_UPDATED\`
  </Accordion>

  <Accordion title="v1.7" id="v17" headingLevel="3" value="v17">
    Released on July 31, 2025.

    #### New features [#new-features-14]

    * **AI avatars**

      Create visual avatar representations for your conversational agents using third-party avatar providers. AI avatars provide a visual presence during voice interactions, making conversations feel more natural and engaging. Enable AI avatars by setting \`avatar.enable\` to \`true\` and configuring the \`avatar.vendor\` and \`avatar.params\` fields when calling [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join) to create your agent.

      <CalloutContainer type="info">
        <CalloutTitle>
          Info
        </CalloutTitle>

        <CalloutDescription>
          AI avatars require video streaming and incur additional charges. See [video calling pricing](/en/realtime-media/rtc/reference/pricing) for details.
        </CalloutDescription>
      </CalloutContainer>

    * **Selective attention locking (Beta)**

      This version introduces the selective attention locking feature, which uses voiceprint recognition technology to identify and filter out the speaker while suppressing background noise. This enhances the efficiency of conversational AI, particularly improving speech recognition accuracy. To experience this feature, contact [technical support](mailto\\:support@agora.io).

    * **Send picture messages (Beta)**

      The toolkit now includes an API for [sending picture messages](build/send-multimodal-messages). You can send image URLs to the main model, which automatically references the image in future interactions to generate more relevant responses. A new callback is available to receive image message receipt details after successful transmission.

      <CalloutContainer type="info">
        <CalloutTitle>
          Info
        </CalloutTitle>

        <CalloutDescription>
          * The picture messaging feature is currently in Beta and free for a limited time.
          * Image processing depends on the capabilities of the integrated LLM. Ensure the LLM you connect to the Conversational AI Engine supports image input.
        </CalloutDescription>
      </CalloutContainer>

    #### API changes [#api-changes-14]

    This release introduces the following modifications to the RESTful API.

    * [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join)

      * **New parameters added**

        * \`avatar.enable\`
        * \`avatar.vendor\`
        * \`avatar.params\`

    ##### Toolkit API [#toolkit-api-3]

    * Android:
      * \`chat\`
      * \`ImageMessage\`
      * \`onMessageReceiptUpdated\`
      * \`MessageReceipt\`
    * iOS:
      * \`chat\`
      * \`ChatMessage\`
      * \`ChatMessageType\`
      * \`ImageMessage\`
      * \`onMessageReceiptUpdated\`
      * \`MessageReceipt\`
    * Web:
      * \`chat\`
      * \`TMessageReceipt\`
      * \`EChatMessagePriority\`
      * \`EChatMessageType\`
      * \`IChatMessageBase\`
      * \`IChatMessageImage\`
  </Accordion>

  <Accordion title="v1.6" id="v16" headingLevel="3" value="v16">
    Released on July 15, 2025.

    #### New features [#new-features-15]

    * **Support for OpenAI Realtime API**

      Integrate Multimodal Large Language Models (MLLMs) with Conversational AI Engine to enable end-to-end real-time audio and text interactions. See [OpenAI Realtime API](models/mllm/openai) for integration details.

    * **Support for more TTS vendors**

      Conversational AI Engine now supports the following additional TTS vendors:

      * [Cartesia](models/tts/cartesia)
      * [OpenAI](models/tts/openai)

    * **Custom ASR provider support**

      To improve flexibility in configuring conversational agents, this release allows you to select a custom automatic speech recognition (ASR) provider. The [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join) API now includes the following new parameters:

      * \`asr.vendor\`: Specify the ASR provider
      * \`asr.params\`: Configure ASR parameters

      The following ASR providers are supported:

      * **ARES** (default)
      * **Microsoft Azure**
      * **Deepgram**

      **Billing update:**

      In earlier versions, the service fee included the cost of the Ares ASR provider. Starting in v1.6, the pricing is restructured as follows:

      * If you use **ARES ASR*&#x2A;, the total price remains unchanged:
        &#x2A;**Total cost = Conversational AI Engine Audio Basic Task + ARES ASR Task***
      * If you use **a different ASR provider**, you are charged **only** the new **Conversational AI Engine Audio Basic Task** fee.

      For further details, see [Pricing](reference/pricing).

    * **Multi-platform toolkit**

      Agora now offers a toolkit to help you quickly build conversational agent apps. The toolkit is available for [**iOS**](/en/api-reference/api-ref/conversational-ai/client-toolkit/ios), [**Android**](/en/api-reference/api-ref/conversational-ai/client-toolkit/android), and [**Web**](/en/api-reference/api-ref/conversational-ai/client-toolkit/web), and includes APIs for common scenarios. Call these APIs to combine the capabilities of the Agora Voice SDK and Signaling SDK to achieve the following functions:

      * [**Display live transcript**](build/transcripts)
        Display real-time text output of user-agent conversations. The transcript component is now more robust, with better error handling, session management, and extensibility.
      * [**Interrupt the agent**](build/shape-the-conversation/interrupt-agent)
        Stop the agent from speaking or thinking mid-conversation.
      * [**Client-side events**](build/handle-runtime-events/event-notifications)
        Track changes in conversation state, performance metrics, and error events.
      * [**Optimize audio settings**](best-practices/audio-setup)
        Quickly apply best-practice audio configurations to improve agent responsiveness and clarity.

    #### API changes [#api-changes-15]

    ##### REST API [#rest-api]

    This release introduces several important modifications to the RESTful API.

    * [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join)

      * **New parameters added**

        * \`asr.vendor\`
        * \`asr.params\`
        * \`advanced_features.enable_mllm\`
        * \`properties.mllm\`
        * \`turn_detection.type\`
        * \`turn_detection.interrupt_duration_ms\`
        * \`turn_detection.prefix_padding_ms\`
        * \`turn_detection.silence_duration_ms\`
        * \`turn_detection.threshold\`
        * \`turn_detection.create_response\`
        * \`turn_detection.interrupt_response\`
        * \`turn_detection.eagerness\`
        * \`parameters.enable_metrics\`
        * \`parameters.data_channel\`
        * \`parameters.enable_error_message\`

    ##### Toolkit APIs [#toolkit-apis]

    * [Android SDK](/en/api-reference/api-ref/conversational-ai/client-toolkit/android)
    * [iOS SDK](/en/api-reference/api-ref/conversational-ai/client-toolkit/ios)
    * [Web SDK](/en/api-reference/api-ref/conversational-ai/client-toolkit/web)
  </Accordion>

  <Accordion title="v1.5" id="v15" headingLevel="3" value="v15">
    Released on June 9, 2025.

    #### New features [#new-features-16]

    * **Voice interruption mode**

      This release adds the \`turn_detection.interrupt_mode\` parameter to the [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join) API, allowing you to control how the agent handles human voice interruptions. The following modes are supported:

      * **\`interrupt\`**: (Default) The human voice immediately interrupts the agent. The agent terminates the current interaction and processes the new human voice input.
      * **\`append\`**: The human voice does not interrupt the agent. The agent processes the newly received human voice request after the current interaction ends.
      * **\`ignore\`**: The agent ignores human voice requests received during speaking or thinking. These requests are discarded and not stored in the context.

    * **TTS filtering**

      This release adds the \`tts.skip_patterns\` parameter to the [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join) API. This parameter controls whether the TTS module skips bracketed content when reading LLM response text. This prevents the agent from vocalizing structural prompt information like tone indicators, action descriptions, and system prompts, creating a more natural and immersive listening experience.

    #### API changes [#api-changes-16]

    This release introduces several important modifications to the RESTful API.

    * [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join)

      * **New parameters added**

        * \`turn_detection.interrupt_mode\`
        * \`parameters.silence_config\`
        * \`tts.skip_patterns\`
  </Accordion>

  <Accordion title="v1.4" id="v14" headingLevel="3" value="v14">
    Released on May 29, 2025.

    #### New features [#new-features-17]

    * **Metadata support for LLM requests**

      This release adds the \`llm.vendor\` parameter to the [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join) API. When set to \`"custom"\`, the agent includes additional metadata when calling the LLM, such as \`turn_id\` and \`timestamp\`.

    * **Support for Anthropic**

      Conversational AI Engine now supports \`anthropic\` as a request style for chat completion. Refer to the \`llm.style\` parameter in [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join).

    #### Improvements [#improvements-11]

    This release includes the following enhancements:

    * **Advanced LLM configuration**: The [Update agent configuration](/en/api-reference/api-ref/conversational-ai/update) API now supports:
      * \`llm.system_messages\` for updating system prompts
      * \`llm.params\` for modifying configuration parameters used when calling the large language model

    #### API changes [#api-changes-17]

    This release introduces several important modifications to the RESTful API.

    * [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join)

      * **New parameters added**

        * \`llm.vendor\`

      * **Removed parameters:**

        * \`agent_rtm_uid\`

    * [Update agent configuration](/en/api-reference/api-ref/conversational-ai/update)

      * **New parameters added**

        * \`llm.system_messages\`
        * \`llm.params\`
  </Accordion>

  <Accordion title="v1.3" id="v13" headingLevel="3" value="v13">
    Released on April 16, 2025.

    #### New features [#new-features-18]

    * **Agent conversation history**: This version adds two methods to retrieve an agent's history. The history includes messages exchanged between the user and the agent and timestamps of agent creation and exit.

      * Call the RESTful API \`history\` endpoint to [Retrieve agent history](/en/api-reference/api-ref/conversational-ai/history).
      * Subscribe to the [agent history event](reference/event-types#103-agent-history) through the [Agora message notification service](build/handle-runtime-events/webhooks). When the agent stops, Agora automatically sends the agent's history to your business server through a Webhook callback.

    #### Improvements [#improvements-12]

    * **Customize the priority of broadcast information**: This version upgrades the [Broadcast a message using TTS](/en/api-reference/api-ref/conversational-ai/speak) interface and adds two new configuration parameters related to broadcast interruption logic:

      * \`priority\`: Sets the priority of the message broadcast. Supports setting the following priorities:
        * \`INTERRUPT\` High priority
        * \`APPEND\`: Medium priority
        * \`IGNORE\`: Low priority
      * \`interruptable\`: Configure whether to allow human voice to interrupt the agent's broadcast.

    #### API changes [#api-changes-18]

    * Adds the [Retrieve agent history](/en/api-reference/api-ref/conversational-ai/history) method.
    * Adds \`priority\` and \`interruptable\` parameters to the [Broadcast a message using TTS](/en/api-reference/api-ref/conversational-ai/speak) method.
  </Accordion>

  <Accordion title="v1.2" id="v12" headingLevel="3" value="v12">
    Released on April 10, 2025.

    #### New features [#new-features-19]

    * **Broadcast a message using TTS**: A new message broadcast interface enables a specified agent to deliver a custom message. When interacting with an agent, calling this interface interrupts the agent's speech and thinking process, allowing the TTS module to immediately broadcast the custom message.

    * **Interrupt the agent**: The interrupt agent endpoint lets you stop the specified agent's speech and thinking process.

    #### API changes [#api-changes-19]

    This version adds the following APIs:

    * [Broadcast a message using TTS](/en/api-reference/api-ref/conversational-ai/speak)
    * [Interrupt the agent](/en/api-reference/api-ref/conversational-ai/interrupt)
  </Accordion>

  <Accordion title="v1.1" id="v11" headingLevel="3" value="v11">
    Released on March 27, 2025.

    #### New features [#new-features-20]

    The [Start a conversational agent](/en/api-reference/api-ref/conversational-ai/join) API adds the \`enable_rtm\` and \`agent_rtm_uid\` parameters to enable Signaling integration with the conversational AI agent. When this feature is enabled, the agent can leverage the Signaling SDK to obtain a user's custom context information such as speaking status, selected text, signature, and score, and pass this data to the agent to generate more relevant content. For details, see [Transmit custom information](build/shape-the-conversation/custom-information).

    #### Improvements [#improvements-13]

    To help you quickly integrate a custom large language model (LLM), this version adds documentation for [Custom LLMs](build/custom-model-integration/custom-llm). Refer to the sample code in the documentation to integrate your custom model into the Conversational AI Engine and enable advanced capabilities such as Retrieval-Augmented Generation (RAG), multi-modal processing, and tool invocation.

    #### API changes [#api-changes-20]

    The \`POST\` method to [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join) now includes the \`enable_rtm\` and \`agent_rtm_uid\` parameters.
  </Accordion>

  <Accordion title="v1.0 (Public Beta)" id="v10-public-beta" headingLevel="3" value="v10-public-beta">
    This version, released on March 4, 2025, adds pricing information for the Agora Conversational AI Engine. For more information, see [Pricing](reference/pricing).

    #### Integration guide [#integration-guide]

    To achieve the best conversation experience, use Agora Conversational AI Engine with the following Agora SDKs:

    * Agora RTC Native SDK, v4.5.1 or later.
    * Agora RTC Web SDK, version 4.23.2 or later.

    #### New features [#new-features-21]

    * **Live transcripts**: Supports real-time text output of conversations between users and the AI agent for transcript display in your app's UI. Agora provides an open-source transcript processing module. Integrate the module and call its API to implement live transcript. For details, see [Display live transcripts](build/transcripts).

    * **Message Notification Service**: Introduces a new Conversational AI Engine message notification service. Configure it in the Agora console and subscribe to agent creation, stop, and error events. When a subscribed event occurs, Agora sends the details to your specified callback address. See [Receive event notifications](build/handle-runtime-events/webhooks).

    * **Keywords**: Enhances recognition accuracy of Conversational AI Engine for proprietary words by adding keywords. This feature is currently in Beta stage. For details, [contact technical support](https://agoraio.zendesk.com/hc/en-us).
  </Accordion>

  <Accordion title="v1.0 (Private Beta)" id="v10-private-beta" headingLevel="3" value="v10-private-beta">
    Released on February 18, 2025. The first beta release of the Conversational AI Engine brings natural, smooth, low-latency, and highly reliable real-time voice conversations with AI agents to Agora channels. It enables you to efficiently build intelligent and immersive interactive experiences. See [Product overview](/en/ai) for details.

    #### Core features [#core-features]

    * **Real-time voice conversation**

      Supports natural and smooth real-time voice conversations with AI. It delivers a low-latency, ultra-responsive interactive experience as if the user is communicating with a real person.

    * **Intelligent noise suppression**

      Intelligently identifies and suppresses background noise, ensuring clear sound transmission even in noisy environments to provide users with a high-quality audio experience.

    * **Background human voice suppression**

      Suppresses background voices and noise while accurately preserving the primary speaker's voice. This ensures a clear and focused interactive experience in multi-speaker environments.

    * **Intelligent interruption handling**

      Allows users to interrupt AI at any time to ensure quick and natural responses. This feature enables smooth transitions and avoids mechanical interactions.

    * **Intelligent transmission**

      An AI-optimized transmission algorithm ensures stable voice data delivery even in weak network conditions where packet loss reaches 80%. This guarantees conversation continuity and reliability across diverse network environments.

    * **Flexible arrangement**

      Supports multiple Large Language Model (LLM) and Text-to-Speech (TTS) providers, enabling flexible orchestration to meet diverse business needs and deliver highly customizable AI dialogue solutions.

    * **Multi-platform support**

      Compatible with iOS, Android, Web, and various embedded hardware platforms, providing a seamless and consistent cross-platform experience.

    #### Integration guide [#integration-guide-1]

    * For the best conversational experience, Agora recommends using Conversational AI Engine with specific Agora Video/Voice SDK versions. For details, [contact technical support](mailto\\:support@agora.io).
    * The number of Peak Concurrent Users (PCU) allowed to call the server API under a single App ID is limited to 20. If you need to increase this limit, [contact technical support](mailto\\:support@agora.io).
  </Accordion>
</Accordions>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This document tracks notable changes and improvements to the Conversational AI Engine."
  }, {
    heading: "versions",
    content: "Released on September 25, 2026."
  }, {
    heading: "new-features",
    content: "Included in this release:"
  }, {
    heading: "new-features",
    content: "**Custom tools for MLLM agents**"
  }, {
    heading: "new-features",
    content: "MLLM agents can call your own HTTPS endpoints as tools. Tool definitions use the same format as for cascading LLM agents, so an existing tool works with either agent type. Available in the Agora Agents SDKs and the RESTful API. For details, see Call custom tools."
  }, {
    heading: "new-features",
    content: "**New ASR provider**"
  }, {
    heading: "new-features",
    content: "Smallest AI"
  }, {
    heading: "new-features",
    content: "**New TTS provider**"
  }, {
    heading: "new-features",
    content: "Smallest AI"
  }, {
    heading: "new-features",
    content: "**New MLLM provider**"
  }, {
    heading: "new-features",
    content: "OpenAI GPT-Live"
  }, {
    heading: "improvements",
    content: "This release includes the following enhancements."
  }, {
    heading: "improvements",
    content: "**MCP tool-use for MLLM agents in the Agora Agents SDKs**"
  }, {
    heading: "improvements",
    content: "MLLM agents have supported MCP tool-use through the RESTful API since v2.12. This release adds the same support to the Agora Agents SDKs, which accept MCP servers on their MLLM vendor classes, so you can configure MCP tool-use without calling the RESTful API directly. For details, see Use MCP tools."
  }, {
    heading: "improvements",
    content: "**Generated filler words use conversation context**"
  }, {
    heading: "improvements",
    content: "This release improves generated filler words so that they reflect the recent exchange, not just the current turn. You can set the conversation context for the generation service using a message count and a character budget. For details, see Talking while waiting."
  }, {
    heading: "api-changes",
    content: "This release introduces the following changes for the new Smallest AI and OpenAI GPT-Live providers, Gemini ASR, MLLM tool-use, and generated filler words."
  }, {
    heading: "api-changes",
    content: "`SmallestAISTT`: New ASR vendor class for Smallest AI."
  }, {
    heading: "api-changes",
    content: "`GeminiSTT`: New ASR vendor class for Gemini."
  }, {
    heading: "api-changes",
    content: "`OpenAIGPTLive`: New MLLM vendor class for OpenAI GPT-Live."
  }, {
    heading: "api-changes",
    content: "MLLM vendor classes: New `tools` option for custom tool definitions, and new `mcp_servers` option for MCP tool-use."
  }, {
    heading: "api-changes",
    content: "`SmallestAITTS`: New TTS vendor class for Smallest AI."
  }, {
    heading: "api-changes",
    content: "**New fields** on `FillerWordsContentGeneratedConfig`"
  }, {
    heading: "api-changes",
    content: "`context_message_limit`: How many of the most recent conversation messages to use, counting the current turn's message. Accepts `1` to `6`, and defaults to `1`."
  }, {
    heading: "api-changes",
    content: "`history_character_limit`: Maximum combined characters of the earlier messages in the window. Accepts `0` to `10000`, and defaults to `1000`."
  }, {
    heading: "api-changes",
    content: "**Updated behavior**"
  }, {
    heading: "api-changes",
    content: "`prompt`: A custom prompt fully replaces Agora's default prompt, and applies over the same conversation context window."
  }, {
    heading: "api-changes",
    content: "`SmallestAISTT`: New ASR vendor class for Smallest AI."
  }, {
    heading: "api-changes",
    content: "`GeminiSTT`: New ASR vendor class for Gemini."
  }, {
    heading: "api-changes",
    content: "`OpenAIGPTLive`: New MLLM vendor class for OpenAI GPT-Live."
  }, {
    heading: "api-changes",
    content: "MLLM vendor classes: New `tools` option for custom tool definitions, and new `mcpServers` option for MCP tool-use."
  }, {
    heading: "api-changes",
    content: "`SmallestAITTS`: New TTS vendor class for Smallest AI."
  }, {
    heading: "api-changes",
    content: "**New fields** on `FillerWordsContentGeneratedConfig`"
  }, {
    heading: "api-changes",
    content: "`context_message_limit`: How many of the most recent conversation messages to use, counting the current turn's message. Accepts `1` to `6`, and defaults to `1`."
  }, {
    heading: "api-changes",
    content: "`history_character_limit`: Maximum combined characters of the earlier messages in the window. Accepts `0` to `10000`, and defaults to `1000`."
  }, {
    heading: "api-changes",
    content: "**Updated behavior**"
  }, {
    heading: "api-changes",
    content: "`prompt`: A custom prompt fully replaces Agora's default prompt, and applies over the same conversation context window."
  }, {
    heading: "api-changes",
    content: "`NewSmallestAISTT`: New ASR vendor class for Smallest AI."
  }, {
    heading: "api-changes",
    content: "`NewGeminiSTT`: New ASR vendor class for Gemini."
  }, {
    heading: "api-changes",
    content: "`NewOpenAIGPTLive`: New MLLM vendor class for OpenAI GPT-Live."
  }, {
    heading: "api-changes",
    content: "MLLM vendor classes: New `Tools` option for custom tool definitions, and new `McpServers` option for MCP tool-use. `NewOpenAIGPTLive` uses `McpServerConfigs` for the same purpose."
  }, {
    heading: "api-changes",
    content: "`NewSmallestAITTS`: New TTS vendor class for Smallest AI."
  }, {
    heading: "api-changes",
    content: "**New fields** on `FillerWordsContentGeneratedConfig`, both `*int`"
  }, {
    heading: "api-changes",
    content: "`ContextMessageLimit`: How many of the most recent conversation messages to use, counting the current turn's message. Accepts `1` to `6`, and defaults to `1`."
  }, {
    heading: "api-changes",
    content: "`HistoryCharacterLimit`: Maximum combined characters of the earlier messages in the window. Accepts `0` to `10000`, and defaults to `1000`."
  }, {
    heading: "api-changes",
    content: "**Updated behavior**"
  }, {
    heading: "api-changes",
    content: "`Prompt`: A custom prompt fully replaces Agora's default prompt, and applies over the same conversation context window."
  }, {
    heading: "api-changes",
    content: "Changes to **Start a conversational AI agent**"
  }, {
    heading: "api-changes",
    content: "**New parameters**"
  }, {
    heading: "api-changes",
    content: "`filler_words.content.generated_config.context_message_limit`: How many of the most recent conversation messages to use to generate a filler phrase, counting the current turn's message. Accepts `1` to `6`, and defaults to `1`."
  }, {
    heading: "api-changes",
    content: "`filler_words.content.generated_config.history_character_limit`: Maximum combined characters of the earlier messages in the window. Accepts `0` to `10000`, and defaults to `1000`."
  }, {
    heading: "api-changes",
    content: "`mllm.tools`: Custom tool definitions an MLLM agent can call. Takes the same format as `llm.tools`, and requires `advanced_features.enable_tools`."
  }, {
    heading: "api-changes",
    content: "**Updated parameters**"
  }, {
    heading: "api-changes",
    content: "`asr.vendor` value `smallestai`: Use Smallest AI as the ASR provider. See Smallest AI."
  }, {
    heading: "api-changes",
    content: "`asr.vendor` value `gemini`: Use Gemini as the ASR provider. See Gemini."
  }, {
    heading: "api-changes",
    content: "`mllm.vendor` value `openai_gpt_live`: Use OpenAI GPT-Live as the MLLM provider. See OpenAI GPT-Live."
  }, {
    heading: "api-changes",
    content: "`tts.vendor` value `smallestai`: Use Smallest AI as the TTS provider. See Smallest AI."
  }, {
    heading: "api-changes",
    content: "`filler_words.content.generated_config.prompt`: A custom prompt fully replaces Agora's default prompt, and applies over the same conversation context window."
  }, {
    heading: "api-changes",
    content: "Released on September 10, 2026."
  }, {
    heading: "new-features-1",
    content: "Included in this release:"
  }, {
    heading: "new-features-1",
    content: "**Call custom tools**"
  }, {
    heading: "new-features-1",
    content: "Agents can now call your own HTTPS endpoints as tools during a conversation. The LLM decides when to call a tool and generates its parameters from the conversation. The Conversational AI Engine then calls your endpoint and returns the result to the LLM to continue generating a response. Available in the Agora Agents SDKs and the RESTful API. For details, see Call custom tools."
  }, {
    heading: "new-features-1",
    content: "**Generated filler words**"
  }, {
    heading: "new-features-1",
    content: "Agents can now generate filler words from the current conversation instead of selecting them from a fixed phrase list. Agora hosts the generation service, so you don't need your own model, endpoint, or credentials. You can optionally keep a static phrase list as a fallback. Available in the Agora Agents SDKs and the RESTful API. For details, see Talking while waiting."
  }, {
    heading: "new-features-1",
    content: "**Defer custom instructions**"
  }, {
    heading: "new-features-1",
    content: "Custom instructions now support an `append` action. Instead of interrupting the current interaction, the agent waits for the current turn to finish, then adds the instruction to the conversation and starts a new turn. Available in the Agora Agents SDKs and the RESTful API. For details, see Send custom instructions."
  }, {
    heading: "new-features-1",
    content: "**Client component support for direct speech and instruction injection**"
  }, {
    heading: "new-features-1",
    content: "The Android, iOS, and Web client toolkits add `speak` and `think` methods. Use `speak` to bypass the LLM and make the agent speak text directly, or `think` to inject text as user input for the LLM to process. Both methods send messages over RTM and support message priority, interruption behavior, and per-state Think actions."
  }, {
    heading: "new-features-1",
    content: "**MCP tool-use for MLLM agents**"
  }, {
    heading: "new-features-1",
    content: "MLLM agents now support MCP tool-use, in addition to cascading LLM agents. Available only in the RESTful API. For details, see Use MCP tools."
  }, {
    heading: "new-features-1",
    content: "**New ASR provider**"
  }, {
    heading: "new-features-1",
    content: "Gemini"
  }, {
    heading: "api-changes-1",
    content: "This release introduces the following changes for custom tool calling, generated filler words, MCP tool-use for MLLM agents, and the `think` API's `append` action."
  }, {
    heading: "api-changes-1",
    content: "`OpenAI` and other LLM vendor classes: New `tools` parameter for custom tool definitions."
  }, {
    heading: "api-changes-1",
    content: "`with_tools()`: Now also enables custom tools declared in `tools`, in addition to MCP tools."
  }, {
    heading: "api-changes-1",
    content: "`FillerWordsConfig`: New `generated` content mode and `FillerWordsContentGeneratedConfig` for generated filler words."
  }, {
    heading: "api-changes-1",
    content: "`AgentSession.think()`: `on_listening_action`, `on_thinking_action`, and `on_speaking_action` accept the new value `append`."
  }, {
    heading: "api-changes-1",
    content: "New custom tool type aliases: `LlmToolConfig`, `LlmToolFunctionConfig`, `LlmToolFunctionParametersConfig`, `LlmToolExecutionConfig`, and `LlmToolServerConfig`."
  }, {
    heading: "api-changes-1",
    content: "`OpenAI` and other LLM vendor classes: New `tools` option for custom tool definitions."
  }, {
    heading: "api-changes-1",
    content: "`withTools()`: Now also enables custom tools declared in `tools`, in addition to MCP tools."
  }, {
    heading: "api-changes-1",
    content: "`FillerWordsConfig`: New `generated` content mode and `FillerWordsContentGeneratedConfig` for generated filler words."
  }, {
    heading: "api-changes-1",
    content: "`AgentSession.think()`: `on_listening_action`, `on_thinking_action`, and `on_speaking_action` accept the new value `append`."
  }, {
    heading: "api-changes-1",
    content: "New custom tool type aliases: `LlmTool`, `LlmToolFunction`, `LlmToolServer`, and `LlmToolExecution`."
  }, {
    heading: "api-changes-1",
    content: "`NewOpenAI` and other LLM vendor constructors: New `Tools` field for custom tool definitions."
  }, {
    heading: "api-changes-1",
    content: "`WithTools()`: Now also enables custom tools declared in `Tools`, in addition to MCP tools."
  }, {
    heading: "api-changes-1",
    content: "`FillerWordsConfig`: New `FillerWordsContentModeGenerated` content mode and `FillerWordsContentGeneratedConfig` for generated filler words."
  }, {
    heading: "api-changes-1",
    content: "`Think()`: Each state action accepts the new value `append`."
  }, {
    heading: "api-changes-1",
    content: "New type aliases: `LlmTool`, `LlmToolFunction`, `LlmToolFunctionParameters`, `LlmToolExecution`, `LlmToolServer`, `FillerWordsContentMode`, and `FillerWordsContentGeneratedConfig`."
  }, {
    heading: "api-changes-1",
    content: "Changes to **Start a conversational AI agent**"
  }, {
    heading: "api-changes-1",
    content: "**New parameters**"
  }, {
    heading: "api-changes-1",
    content: "`llm.tools`: Custom tool definitions the LLM can call. Requires `advanced_features.enable_tools`."
  }, {
    heading: "api-changes-1",
    content: "`filler_words.content.generated_config`: Prompt and fallback strategy for generated filler words. Used when `filler_words.content.mode` is `generated`."
  }, {
    heading: "api-changes-1",
    content: "`mllm.mcp_servers`: MCP server connections for MLLM agents. Requires `advanced_features.enable_tools`."
  }, {
    heading: "api-changes-1",
    content: "**Updated parameters**"
  }, {
    heading: "api-changes-1",
    content: "`advanced_features.enable_tools`: Now also enables custom tools declared in `llm.tools` and MCP tools declared in `mllm.mcp_servers`, in addition to MCP tools configured in `llm.mcp_servers`."
  }, {
    heading: "api-changes-1",
    content: "`filler_words.content.mode` value `generated`: Generate a filler phrase from the current context, with an optional `filler_words.content.static_config` fallback."
  }, {
    heading: "api-changes-1",
    content: '`filler_words.content.static_config`: Now a named sibling property of `content` instead of the `"{mode}_config"` key.'
  }, {
    heading: "api-changes-1",
    content: "Changes to **Send custom instructions**"
  }, {
    heading: "api-changes-1",
    content: "**Updated parameters**"
  }, {
    heading: "api-changes-1",
    content: "`on_listening_action`, `on_thinking_action`, and `on_speaking_action` value `append`: Don't interrupt the current interaction; append the instruction as a separate user message once the current turn's LLM output finishes."
  }, {
    heading: "toolkit-api",
    content: "This release adds `speak` and `think` methods to the client toolkit, so you can bypass the LLM to play text directly or inject text as user input:"
  }, {
    heading: "toolkit-api",
    content: "`speak`"
  }, {
    heading: "toolkit-api",
    content: "`think`"
  }, {
    heading: "toolkit-api",
    content: "`SpeakMessage`, `ThinkMessage`, `ThinkListeningAction`, `ThinkThinkingAction`, `ThinkSpeakingAction`"
  }, {
    heading: "toolkit-api",
    content: "`speak`"
  }, {
    heading: "toolkit-api",
    content: "`think`"
  }, {
    heading: "toolkit-api",
    content: "`SpeakMessage`, `ThinkMessage`, `ThinkListeningAction`, `ThinkThinkingAction`, `ThinkSpeakingAction`"
  }, {
    heading: "toolkit-api",
    content: "`speak`"
  }, {
    heading: "toolkit-api",
    content: "`think`"
  }, {
    heading: "toolkit-api",
    content: "`SpeakMessage`, `ThinkMessage`, `EThinkListeningAction`, `EThinkThinkingAction`, `EThinkSpeakingAction`"
  }, {
    heading: "deprecation-notice",
    content: "These changes may affect your existing integration. Review each change and update your integration as needed."
  }, {
    heading: "deprecation-notice",
    content: "**`asr.params` becomes required for non-default ASR vendors in v2.13.** Starting in v2.13, a request that sets `asr.vendor` to a vendor other than `ares` and omits `asr.params` fails. Configure `asr.params` for your vendor, or omit `asr.vendor` to keep the default `ares` vendor."
  }, {
    heading: "deprecation-notice",
    content: "**Legacy `turn_detection` fields and the `keywords`/`disabled` start-of-speech modes lose their support guarantee in a future release.** Migrate to `turn_detection.config` and `interruption`, introduced in v2.6."
  }, {
    heading: "deprecation-notice",
    content: "**`advanced_features.enable_mllm` loses its support guarantee in a future release.** The MLLM switch may stop working. Migrate to `mllm.enable`, introduced in v2.6."
  }, {
    heading: "deprecation-notice",
    content: "Released on August 11, 2026."
  }, {
    heading: "new-features-2",
    content: "Included in this release:"
  }, {
    heading: "new-features-2",
    content: "**ASR keywords**"
  }, {
    heading: "new-features-2",
    content: "You can now configure keywords to improve ARES's recognition accuracy for specific terms, such as brand names, product names, or industry jargon. Configure keywords using the `AresSTT` vendor in the Agora Agents SDKs, or the `keywords` parameter within the `asr` block directly through the RESTful API. For details, see Improve ASR accuracy with keywords."
  }, {
    heading: "new-features-2",
    content: "**New TTS provider**"
  }, {
    heading: "new-features-2",
    content: "Typecast"
  }, {
    heading: "new-features-2",
    content: "**New MLLM provider**"
  }, {
    heading: "new-features-2",
    content: "Azure OpenAI Realtime API"
  }, {
    heading: "improvements-1",
    content: "This release includes the following enhancement."
  }, {
    heading: "improvements-1",
    content: "**Improved stability for long audio replies**"
  }, {
    heading: "improvements-1",
    content: "This release improves resource protection and error-recovery logic for long streaming audio replies, reducing the likelihood of an abnormal disconnect or failed recovery. As a result, service stability improves for long replies and free-form conversation scenarios."
  }, {
    heading: "api-changes-2",
    content: "This release introduces the following changes for ASR keywords and the new TTS and MLLM providers."
  }, {
    heading: "api-changes-2",
    content: "`AresSTT`: New `keywords` parameter."
  }, {
    heading: "api-changes-2",
    content: "`TypecastTTS`: New TTS vendor class."
  }, {
    heading: "api-changes-2",
    content: "`AzureOpenAIRealtime`: New MLLM vendor class."
  }, {
    heading: "api-changes-2",
    content: "`AresSTT`: New `keywords` option."
  }, {
    heading: "api-changes-2",
    content: "`TypecastTTS`: New TTS vendor class."
  }, {
    heading: "api-changes-2",
    content: "`AzureOpenAIRealtime`: New MLLM vendor class."
  }, {
    heading: "api-changes-2",
    content: "`NewAresSTT`: New `Keywords` field."
  }, {
    heading: "api-changes-2",
    content: "`NewTypecastTTS`: New TTS vendor constructor."
  }, {
    heading: "api-changes-2",
    content: "`NewAzureOpenAIRealtime`: New MLLM vendor constructor."
  }, {
    heading: "api-changes-2",
    content: "Changes to **Start a conversational AI agent**"
  }, {
    heading: "api-changes-2",
    content: "**New parameters**"
  }, {
    heading: "api-changes-2",
    content: "`asr.keywords`: ASR keywords used to improve recognition accuracy for specific terms. Only available when `asr.vendor` is not set or `ares`."
  }, {
    heading: "api-changes-2",
    content: "**Updated parameters**"
  }, {
    heading: "api-changes-2",
    content: "`tts.vendor` value `typecast`: Use Typecast as the TTS provider. See Typecast."
  }, {
    heading: "api-changes-2",
    content: "`mllm.vendor` value `azure`: Use Azure OpenAI Realtime API as the MLLM provider. See Azure OpenAI Realtime API."
  }, {
    heading: "api-changes-2",
    content: "Released on July 30, 2026."
  }, {
    heading: "new-features-3",
    content: "Included in this release:"
  }, {
    heading: "new-features-3",
    content: "**Connect custom TTS services using the OpenAI protocol**"
  }, {
    heading: "new-features-3",
    content: "You can now use a self-built, privately deployed, or third-party TTS service that implements the OpenAI TTS protocol as your agent's speech synthesis module. Configure it using the `GenericTTS` vendor in the Agora Agents SDKs (Go and TypeScript v2.4.0 or later, Python v2.4.1 or later), or the `generic_http` TTS vendor directly through the RESTful API. For details, see Connect your own TTS service and Generic TTS."
  }, {
    heading: "new-features-3",
    content: "**Client toolkit support for manual turn control**"
  }, {
    heading: "new-features-3",
    content: "The Android, iOS, and Web client toolkits now provide dedicated APIs for manual Start of Speech (SoS) and End of Speech (EoS) control, so you no longer need to construct raw Signaling (RTM) messages by hand. Call `manualSOS`/`manualEOS` to send requests, and register the new result callbacks to handle the server's response. This capability is suitable for scenarios that require explicit control of the user turn boundary from the client side, such as AI interviews, interactive quizzes, and walkie-talkie apps. For details, see Manually control start and end of speech."
  }, {
    heading: "new-features-3",
    content: "**New TTS providers**"
  }, {
    heading: "new-features-3",
    content: "Gradium"
  }, {
    heading: "new-features-3",
    content: "Mistral"
  }, {
    heading: "new-features-3",
    content: "**New Avatar provider**"
  }, {
    heading: "new-features-3",
    content: "LemonSlice"
  }, {
    heading: "toolkit-api-1",
    content: "This release adds the following APIs to the client toolkit for manual turn control:"
  }, {
    heading: "toolkit-api-1",
    content: "`manualSOS`"
  }, {
    heading: "toolkit-api-1",
    content: "`manualEOS`"
  }, {
    heading: "toolkit-api-1",
    content: "`onUserManualSosEvent`"
  }, {
    heading: "toolkit-api-1",
    content: "`onUserManualEosEvent`"
  }, {
    heading: "toolkit-api-1",
    content: "`onAgentManualEosEvent`"
  }, {
    heading: "toolkit-api-1",
    content: "`UserManualEventPayload`, `UserManualSosEvent`, `UserManualEosEvent`, `AgentManualEosPayload`, `AgentManualEosEvent`"
  }, {
    heading: "toolkit-api-1",
    content: "`manualSOS`"
  }, {
    heading: "toolkit-api-1",
    content: "`manualEOS`"
  }, {
    heading: "toolkit-api-1",
    content: "`onUserManualSosEvent`"
  }, {
    heading: "toolkit-api-1",
    content: "`onUserManualEosEvent`"
  }, {
    heading: "toolkit-api-1",
    content: "`onAgentManualEosEvent`"
  }, {
    heading: "toolkit-api-1",
    content: "`UserManualEventPayload`, `UserManualSosEvent`, `UserManualEosEvent`, `AgentManualEosPayload`, `AgentManualEosEvent`"
  }, {
    heading: "toolkit-api-1",
    content: "`manualSOS`"
  }, {
    heading: "toolkit-api-1",
    content: "`manualEOS`"
  }, {
    heading: "toolkit-api-1",
    content: "`EConversationalAIAPIEvents` values `USER_MANUAL_SOS_RESULT`, `USER_MANUAL_EOS_RESULT`, and `AGENT_MANUAL_EOS_RESULT`"
  }, {
    heading: "toolkit-api-1",
    content: "`TUserManualEventPayload`, `TUserManualSosEvent`, `TUserManualEosEvent`, `TAgentManualEosPayload`, `TAgentManualEosEvent`"
  }, {
    heading: "api-changes-3",
    content: "This release introduces the following changes for connecting TTS services."
  }, {
    heading: "api-changes-3",
    content: "This release adds the following TTS vendor classes:"
  }, {
    heading: "api-changes-3",
    content: "`GenericTTS`: Connect a custom TTS service using the OpenAI TTS protocol."
  }, {
    heading: "api-changes-3",
    content: "`GradiumTTS`"
  }, {
    heading: "api-changes-3",
    content: "`MistralTTS`"
  }, {
    heading: "api-changes-3",
    content: "This release adds the following TTS vendor classes:"
  }, {
    heading: "api-changes-3",
    content: "`GenericTTS`: Connect a custom TTS service using the OpenAI TTS protocol."
  }, {
    heading: "api-changes-3",
    content: "`GradiumTTS` and `MistralTTS`"
  }, {
    heading: "api-changes-3",
    content: "This release adds the following TTS vendor constructors:"
  }, {
    heading: "api-changes-3",
    content: "`NewGenericTTS`: Connect a custom TTS service using the OpenAI TTS protocol."
  }, {
    heading: "api-changes-3",
    content: "`NewGradiumTTS`"
  }, {
    heading: "api-changes-3",
    content: "`NewMistralTTS`"
  }, {
    heading: "api-changes-3",
    content: "Changes to **Start a conversational AI agent**"
  }, {
    heading: "api-changes-3",
    content: "**New parameters**"
  }, {
    heading: "api-changes-3",
    content: "`tts.url`: The OpenAI TTS protocol compatible service endpoint. Required only when `tts.vendor` is `generic_http`."
  }, {
    heading: "api-changes-3",
    content: "`tts.headers`: Custom request headers to include in requests to the TTS service. Required only when `tts.vendor` is `generic_http`."
  }, {
    heading: "api-changes-3",
    content: "**Updated parameters**"
  }, {
    heading: "api-changes-3",
    content: "`tts.vendor` value `generic_http`: Integrate a custom TTS service using the OpenAI TTS protocol. See Generic TTS."
  }, {
    heading: "api-changes-3",
    content: "`tts.vendor` value `gradium`: Use Gradium as the TTS provider. See Gradium."
  }, {
    heading: "api-changes-3",
    content: "`tts.vendor` value `mistral`: Use Mistral as the TTS provider. See Mistral."
  }, {
    heading: "api-changes-3",
    content: "`tts.params`: Now required when `tts.vendor` is `generic_http`."
  }, {
    heading: "api-changes-3",
    content: "Released on July 1, 2026."
  }, {
    heading: "new-features-4",
    content: "Included in this release:"
  }, {
    heading: "new-features-4",
    content: "**Manual turn control**"
  }, {
    heading: "new-features-4",
    content: "You can now explicitly control when a user's speech starts and ends by sending manual Start of Speech (SoS) and End of Speech (EoS) requests over Signaling (RTM), instead of relying on automatic detection. This supports scenarios with strict turn-boundary requirements, such as AI interviews, interactive quizzes, or push-to-talk. Set `start_of_speech.mode` and `end_of_speech.mode` to `manual` when starting the agent. For details, see Manually control start and end of speech."
  }, {
    heading: "new-features-4",
    content: "**Agent state notifications over RTM Message**"
  }, {
    heading: "new-features-4",
    content: "You can now track agent state changes in real time using Signaling (RTM) Message events. The agent pushes `state.listening`, `state.thinking`, and `state.speaking` events as individual RTM messages, making it easier to record state change timestamps, process events sequentially, or consume state events alongside other RTM Message events. For details, see Get agent state."
  }, {
    heading: "new-features-4",
    content: "**Pre-recorded greeting audio**"
  }, {
    heading: "new-features-4",
    content: "You can now play a pre-recorded audio file as the agent's greeting instead of synthesizing it with TTS. Set `properties.llm.greeting_audio_url` to the URL of an `mp3`, `wav`, or `pcm` file when starting the agent. If the audio fails to download, decode, or is in an unsupported format, the agent automatically falls back to TTS synthesis using `greeting_message`."
  }, {
    heading: "new-features-4",
    content: "**Managed mode**"
  }, {
    heading: "new-features-4",
    content: 'You can now use supported ASR, LLM, and TTS providers with Agora-managed credentials, without supplying your own API keys. Set `credential_mode` to `"managed"` within the `asr`, `llm`, or `tts` block when starting an agent. Managed mode replaces the deprecated `preset` parameter. For details, see Use managed mode.'
  }, {
    heading: "improvements-2",
    content: "This release includes the following enhancements."
  }, {
    heading: "improvements-2",
    content: "**Speech captured during an uninterruptible greeting**"
  }, {
    heading: "improvements-2",
    content: "When `properties.llm.greeting_configs.interruptable` is set to `false`, the agent now silently collects the user's ASR results while the greeting plays. After the greeting ends, the system concatenates the collected speech segments into a single user message and sends it to the LLM for a unified response, instead of discarding speech that occurs during playback."
  }, {
    heading: "api-changes-4",
    content: "This release introduces the following changes to the RESTful API."
  }, {
    heading: "api-changes-4",
    content: "Changes to **Start a conversational AI agent**"
  }, {
    heading: "api-changes-4",
    content: "**New parameters**"
  }, {
    heading: "api-changes-4",
    content: "`properties.llm.greeting_audio_url`: The URL of a pre-recorded audio file (`mp3`, `wav`, or `pcm`) to play as the agent's greeting instead of synthesizing it with TTS."
  }, {
    heading: "api-changes-4",
    content: "`properties.llm.greeting_configs.audio_download_timeout_ms`: The timeout in milliseconds for downloading the greeting audio file. Defaults to `1000`."
  }, {
    heading: "api-changes-4",
    content: "`properties.llm.greeting_configs.audio_pcm_sample_rate`: The sample rate in Hz of the greeting audio file when the format is PCM. Defaults to `16000`."
  }, {
    heading: "api-changes-4",
    content: '`properties.asr.credential_mode`, `properties.llm.credential_mode`, and `properties.tts.credential_mode`: Set to `"managed"` to use Agora-managed credentials for the provider without supplying your own API key.'
  }, {
    heading: "api-changes-4",
    content: "**Updated parameters**"
  }, {
    heading: "api-changes-4",
    content: "`properties.turn_detection.config.start_of_speech.mode`: Now accepts `manual`, which disables automatic start-of-speech detection so the client can explicitly signal the start of user speech over RTM."
  }, {
    heading: "api-changes-4",
    content: "`properties.turn_detection.config.end_of_speech.mode`: Now accepts `manual`, which disables automatic end-of-speech detection so the client can explicitly signal the end of user speech over RTM."
  }, {
    heading: "api-changes-4",
    content: "`properties.llm.greeting_message`: In addition to serving as a standalone greeting, this field is now required as a fallback when `greeting_audio_url` is configured, and is used to maintain conversation context when an audio greeting is interrupted."
  }, {
    heading: "api-changes-4",
    content: "**Deprecated parameters**"
  }, {
    heading: "api-changes-4",
    content: '`preset`: Deprecated in favor of setting `credential_mode` to `"managed"` within the `asr`, `llm`, or `tts` block. See Use managed mode.'
  }, {
    heading: "api-changes-4",
    content: "Changes to **Notification event types**"
  }, {
    heading: "api-changes-4",
    content: "**Updated events**"
  }, {
    heading: "api-changes-4",
    content: "`110 agent error`: Now reports greeting audio URL errors when the greeting audio file fails to download, times out, is in an unsupported format, or fails to decode. The agent automatically falls back to TTS synthesis using `greeting_message`. When `parameters.enable_error_message` is `true`, these errors are also delivered to the client via the `onMessageError` RTM callback."
  }, {
    heading: "api-changes-4",
    content: "Released on June 11, 2026."
  }, {
    heading: "new-features-5",
    content: "Included in this release:"
  }, {
    heading: "new-features-5",
    content: "**Session data retention control**"
  }, {
    heading: "new-features-5",
    content: "By default, session interaction text and audio are temporarily retained for the minimum necessary period to support service operation, agent optimization, and troubleshooting. To disable data retention for a session, set `properties.parameters.opt_out` to `true` when starting an agent."
  }, {
    heading: "new-features-5",
    content: "**RTC token expiry warning**"
  }, {
    heading: "new-features-5",
    content: "A new `104 agent expire` event is triggered when the agent's RTC token is about to expire. Upon receiving this event, call the Update agent API with a new token to refresh it. The agent does not exit the channel or interrupt the session when this event is triggered."
  }, {
    heading: "new-features-5",
    content: "**New ASR provider**"
  }, {
    heading: "new-features-5",
    content: "xAI"
  }, {
    heading: "new-features-5",
    content: "**New LLM provider**"
  }, {
    heading: "new-features-5",
    content: "xAI Grok"
  }, {
    heading: "new-features-5",
    content: "**New TTS provider**"
  }, {
    heading: "new-features-5",
    content: "xAI"
  }, {
    heading: "improvements-3",
    content: "This release includes the following enhancements."
  }, {
    heading: "improvements-3",
    content: "These changes may affect your existing integration. Review each change and update your integration as needed."
  }, {
    heading: "improvements-3",
    content: "**Idle timeout behavior change**"
  }, {
    heading: "improvements-3",
    content: "Setting `properties.idle_timeout` to `0` no longer means the agent runs indefinitely. From this release, `0` only disables the channel idle timeout. Regardless of the `idle_timeout` value, the maximum running time for a single session is 72 hours, after which the agent automatically exits."
  }, {
    heading: "improvements-3",
    content: "If your integration previously relied on `idle_timeout = 0` to keep an agent running until manually stopped, update your task scheduling and lifecycle management logic to account for the 72-hour limit."
  }, {
    heading: "api-changes-5",
    content: "This release introduces the following changes to the RESTful API."
  }, {
    heading: "api-changes-5",
    content: "Changes to **Start a conversational AI agent**"
  }, {
    heading: "api-changes-5",
    content: "**New parameters**"
  }, {
    heading: "api-changes-5",
    content: "`properties.parameters.opt_out`: Set to `true` to disable data retention for the current session."
  }, {
    heading: "api-changes-5",
    content: "**Updated parameters**"
  }, {
    heading: "api-changes-5",
    content: "`properties.idle_timeout`: Valid range is now `0` to `259200` seconds (72 hours). Regardless of the value set, the maximum running time for a single session is 72 hours."
  }, {
    heading: "api-changes-5",
    content: "Changes to **Retrieve agent history**"
  }, {
    heading: "api-changes-5",
    content: "**New response fields**"
  }, {
    heading: "api-changes-5",
    content: "`contents[].speech_start_ms`: Unix timestamp in milliseconds indicating when the user started speaking or the agent started TTS playback. Only returned when `llm.vendor` is `custom`."
  }, {
    heading: "api-changes-5",
    content: "`contents[].speech_end_ms`: Unix timestamp in milliseconds indicating when the user stopped speaking, or when TTS playback completed or was interrupted. Only returned when `llm.vendor` is `custom`."
  }, {
    heading: "api-changes-5",
    content: "`contents[].speech_algorithmic_delay`: The total delay in milliseconds introduced by audio processing algorithms after audio is captured from the user's microphone. Only returned when `llm.vendor` is `custom`, `contents[].role` is `user`, and actual voice input is present."
  }, {
    heading: "api-changes-5",
    content: "Changes to **Notification event types**"
  }, {
    heading: "api-changes-5",
    content: "**New events**"
  }, {
    heading: "api-changes-5",
    content: "`104 agent expire`: Triggered when the agent's RTC token is about to expire. Call the Update agent API with a new token upon receiving this event."
  }, {
    heading: "api-changes-5",
    content: "**Updated events**"
  }, {
    heading: "api-changes-5",
    content: "`102 agent left`: Added `Task lifetime limit exceeded` as a new exit reason when the 72-hour session limit is reached."
  }, {
    heading: "api-changes-5",
    content: "`103 agent history`: Added `contents[].speech_start_ms`, `contents[].speech_end_ms`, and `contents[].speech_algorithmic_delay`. Only returned when `llm.vendor` is `custom`."
  }, {
    heading: "api-changes-5",
    content: "Changes to **Retrieve a list of agents**"
  }, {
    heading: "api-changes-5",
    content: "**Updated parameters**"
  }, {
    heading: "api-changes-5",
    content: "`state`: Now accepts a comma-separated list of values to filter by multiple agent states in a single request. For example, `state=0,1,2`."
  }, {
    heading: "api-changes-5",
    content: "Released on May 20, 2026."
  }, {
    heading: "new-features-6",
    content: "Included in this release:"
  }, {
    heading: "new-features-6",
    content: "**New MLLM provider**"
  }, {
    heading: "new-features-6",
    content: "xAI Grok"
  }, {
    heading: "new-features-6",
    content: "**New Avatar providers**"
  }, {
    heading: "new-features-6",
    content: "Generic avatar (Beta)"
  }, {
    heading: "new-features-6",
    content: "**Greeting interruption control**"
  }, {
    heading: "new-features-6",
    content: "The `properties.llm.greeting_configs` object in the Start a conversational AI agent API now supports an `interruptable` parameter, which controls whether user speech can interrupt a greeting during playback."
  }, {
    heading: "improvements-4",
    content: "This release includes the following enhancements:"
  }, {
    heading: "improvements-4",
    content: "These changes may affect your existing integration. Review each change and update your integration as needed."
  }, {
    heading: "improvements-4",
    content: "**Response status codes updated**"
  }, {
    heading: "improvements-4",
    content: "This release adjusts the HTTP response status codes and `reason` values returned by the RESTful API. New status codes `401`, `429`, and `500` are added. New `reason` values `ServiceNotEnabled`, `AccountSuspended`, and `ResourceAllocationFailed` are introduced. The existing `InvalidRequest` reason is replaced by `InvalidRequestBody`, `MissingRequiredField`, and `InvalidFieldValue`. For details, see Status codes and error messages."
  }, {
    heading: "improvements-4",
    content: "If your integration relies on `reason` values for error handling, retry logic, or alerting, update your logic to handle the new values accordingly."
  }, {
    heading: "improvements-4",
    content: "**Query conversation turns API now returns paginated results**"
  }, {
    heading: "improvements-4",
    content: "The Query conversation turn information API no longer returns all turns in a single response. Results are now paginated, defaulting to page 1 with up to 50 turns per page."
  }, {
    heading: "improvements-4",
    content: "This affects sessions with more than 50 conversation turns. Update your integration to handle the new `total_turn_count` and `pagination` fields in the response, and retrieve subsequent pages as needed."
  }, {
    heading: "improvements-4",
    content: "This release also adds the 112 turns finished notification event, which delivers conversation turn data in batches after a session ends as an alternative way to retrieve turn data."
  }, {
    heading: "improvements-4",
    content: "**`on_listening_action` default behavior change**"
  }, {
    heading: "improvements-4",
    content: "The default value of `on_listening_action` in the Send a custom instruction API has changed from `inject` to `interrupt`. When set to `interrupt`, the API immediately interrupts the current flow and initiates a new round of dialogue. If you rely on the previous default behavior, explicitly set `on_listening_action` to `inject` in your requests."
  }, {
    heading: "api-changes-6",
    content: "This release introduces the following changes to the RESTful API."
  }, {
    heading: "api-changes-6",
    content: "Changes to **Start a conversational AI agent**"
  }, {
    heading: "api-changes-6",
    content: "**New parameters**"
  }, {
    heading: "api-changes-6",
    content: "`properties.llm.greeting_configs.interruptable`: Controls whether user speech can interrupt a greeting during playback."
  }, {
    heading: "api-changes-6",
    content: "Changes to **Query conversation turn information**"
  }, {
    heading: "api-changes-6",
    content: "**New query parameters**"
  }, {
    heading: "api-changes-6",
    content: "Adds `page_index` and `page_size` fields to query parameters."
  }, {
    heading: "api-changes-6",
    content: "**New response parameters**"
  }, {
    heading: "api-changes-6",
    content: "The response now includes additional top-level fields:"
  }, {
    heading: "api-changes-6",
    content: "`agent_id`: The unique identifier of the agent."
  }, {
    heading: "api-changes-6",
    content: "`name`: The name of the agent."
  }, {
    heading: "api-changes-6",
    content: "`channel`: The name of the RTC channel the agent joined."
  }, {
    heading: "api-changes-6",
    content: "`total_turn_count`: The total number of dialogue turns in the session."
  }, {
    heading: "api-changes-6",
    content: "`pagination`: Pagination details for the response, including `page_index`, `total_pages`, and `is_last_page`."
  }, {
    heading: "api-changes-6",
    content: "Changes to **Send a custom instruction**"
  }, {
    heading: "api-changes-6",
    content: "**Behavior changes**"
  }, {
    heading: "api-changes-6",
    content: "`on_listening_action`: The default value has changed from `inject` to `interrupt`. When set to `interrupt`, the API immediately interrupts the current flow and initiates a new round of dialogue."
  }, {
    heading: "api-changes-6",
    content: "Changes to **Notification event types**"
  }, {
    heading: "api-changes-6",
    content: "**New events**"
  }, {
    heading: "api-changes-6",
    content: "`112 turns finished`: Triggered after a session ends, delivering conversation turn data in batches for post-session analysis and processing."
  }, {
    heading: "api-changes-6",
    content: "Released on April 22, 2026."
  }, {
    heading: "new-features-7",
    content: "Included in this release:"
  }, {
    heading: "new-features-7",
    content: "**New TTS provider**"
  }, {
    heading: "new-features-7",
    content: "Deepgram"
  }, {
    heading: "new-features-7",
    content: "**New endpoint: Send a custom instruction**"
  }, {
    heading: "new-features-7",
    content: "Adds a new endpoint to inject a custom text instruction into the agent's current conversation pipeline. The instruction is processed as user input, enabling scenarios such as implicit instruction injection, client-side event triggering, and voice and text collaboration. For details, see Send a custom instruction."
  }, {
    heading: "new-features-7",
    content: "**MLLM turn detection refactoring**"
  }, {
    heading: "new-features-7",
    content: "Introduces a new `mllm.turn_detection` object for configuring turn detection when using MLLM. When defined, this overrides the top-level `turn_detection` object. Supported modes vary by vendor:"
  }, {
    heading: "new-features-7",
    content: "OpenAI Realtime API: `agora_vad`, `server_vad`, `semantic_vad`"
  }, {
    heading: "new-features-7",
    content: "Google Gemini Live: `agora_vad`, `server_vad`"
  }, {
    heading: "new-features-7",
    content: "**Interruption control**"
  }, {
    heading: "new-features-7",
    content: "Adds a new top-level `interruption` object for unified management of agent interruption behavior. Supports `start_of_speech` and `keywords` trigger modes, and configurable handling strategies when interruption is disabled."
  }, {
    heading: "improvements-5",
    content: "This release includes the following enhancements:"
  }, {
    heading: "improvements-5",
    content: "**New agent state callbacks**"
  }, {
    heading: "improvements-5",
    content: "Adds three callbacks to the Android, iOS, and web Toolkit event handler interface:"
  }, {
    heading: "improvements-5",
    content: "`onAgentListeningChanged`: Listen for changes in the agent's listening state to monitor when the agent starts or stops listening to user input."
  }, {
    heading: "improvements-5",
    content: "`onAgentThinkingChanged`: Listen for changes in the agent's thinking state to monitor when the agent starts or stops processing a request."
  }, {
    heading: "improvements-5",
    content: "`onAgentSpeakingChanged`: Listen for changes in the agent's speaking state to monitor when the agent starts or stops playing back speech."
  }, {
    heading: "improvements-5",
    content: "**Added `name` field to all NCS event payloads**"
  }, {
    heading: "improvements-5",
    content: "Returns the agent name provided when starting the agent."
  }, {
    heading: "api-changes-7",
    content: "This release introduces the following changes to the RESTful API."
  }, {
    heading: "api-changes-7",
    content: "**New endpoint**"
  }, {
    heading: "api-changes-7",
    content: "Send a custom instruction: `POST /v2/projects/{appid}/agents/{agentId}/think`"
  }, {
    heading: "api-changes-7",
    content: "Changes to **Start a conversational AI agent**"
  }, {
    heading: "api-changes-7",
    content: "**New parameters**"
  }, {
    heading: "api-changes-7",
    content: "`interruption`: Unified interruption control configuration. Supports `start_of_speech` and `keywords` trigger modes, and configurable handling strategies when interruption is disabled."
  }, {
    heading: "api-changes-7",
    content: "`greeting_configs.delay_ms`: Specifies the delay in milliseconds before the agent plays the greeting message after the user joins the channel."
  }, {
    heading: "api-changes-7",
    content: "`llm.headers`: Lets you pass custom headers in LLM requests, such as business-specific fields or tenant identifiers."
  }, {
    heading: "api-changes-7",
    content: "`mllm.enable`: Enables the MLLM module. Replaces the deprecated `advanced_features.enable_mllm`."
  }, {
    heading: "api-changes-7",
    content: "`mllm.turn_detection`: Turn detection configuration for the MLLM module. When defined, overrides the top-level `turn_detection` object."
  }, {
    heading: "api-changes-7",
    content: "`mllm.turn_detection.server_vad_config.idle_timeout_ms`: Idle timeout in milliseconds for server VAD mode. Applicable to OpenAI Realtime API only."
  }, {
    heading: "api-changes-7",
    content: "`mllm.vendor` value `gemini`: Enables Google Gemini Live integration using the Gemini Developer API."
  }, {
    heading: "api-changes-7",
    content: "**Behavior changes**"
  }, {
    heading: "api-changes-7",
    content: "`turn_detection` now handles SoS and EoS detection only. Interruption handling strategies have moved to the new top-level `interruption` field."
  }, {
    heading: "api-changes-7",
    content: "`turn_detection.config.start_of_speech.mode` values `keywords` and `disabled` are deprecated. Use the new `interruption` field instead."
  }, {
    heading: "api-changes-7",
    content: "When `turn_detection.end_of_speech.mode` is set to `semantic`, EOS detection supports English and Chinese only. For unsupported languages, the engine automatically falls back to VAD."
  }, {
    heading: "api-changes-7",
    content: "**Deprecated fields**"
  }, {
    heading: "api-changes-7",
    content: "`advanced_features.enable_mllm`: Use `mllm.enable` instead."
  }, {
    heading: "api-changes-7",
    content: '`turn_detection.config.start_of_speech.mode` value `keywords`: Use `interruption.mode = "keywords"` instead.'
  }, {
    heading: "api-changes-7",
    content: "`turn_detection.config.start_of_speech.mode` value `disabled`: Use `interruption.enable = false` with `interruption.disabled_config.strategy` instead."
  }, {
    heading: "api-changes-7",
    content: "**Removed fields**"
  }, {
    heading: "api-changes-7",
    content: "`mllm.style`"
  }, {
    heading: "api-changes-7",
    content: "`mllm.create_response` and `mllm.interrupt_response` for OpenAI Realtime API."
  }, {
    heading: "api-changes-7",
    content: "Changes to **Notification event types**"
  }, {
    heading: "api-changes-7",
    content: "**New fields**"
  }, {
    heading: "api-changes-7",
    content: "Added `name` to all NCS event payloads. Returns the agent name provided when starting the agent."
  }, {
    heading: "api-changes-7",
    content: "Released on March 31, 2026."
  }, {
    heading: "new-features-8",
    content: "Included in this release:"
  }, {
    heading: "new-features-8",
    content: "**Preset model configurations**"
  }, {
    heading: "new-features-8",
    content: "Adds a `preset` parameter to the Join API. Pass a comma-separated list of preset names to apply predefined configurations for ASR, LLM, and TTS providers. When you use a preset, you do not need to provide the endpoint URL, API key, or model for the preset provider. Use the `asr`, `llm`, and `tts` fields to configure additional settings. When you use a preset, the corresponding ASR, LLM, or TTS service is provided through Agora-managed accounts. For details, see the pricing page."
  }, {
    heading: "new-features-8",
    content: "Available presets:"
  }, {
    heading: "new-features-8",
    content: "ASR: `deepgram_nova_2`, `deepgram_nova_3`"
  }, {
    heading: "new-features-8",
    content: "LLM: `openai_gpt_4o_mini`, `openai_gpt_4_1_mini`, `openai_gpt_5_nano`, `openai_gpt_5_mini`"
  }, {
    heading: "new-features-8",
    content: "TTS: `minimax_speech_2_6_turbo`, `minimax_speech_2_8_turbo`, `openai_tts_1`"
  }, {
    heading: "new-features-8",
    content: "**Pause state detection**"
  }, {
    heading: "new-features-8",
    content: 'When enabled, the agent uses semantic understanding to detect when a user intends to pause the conversation. For example, if the user says "hold on" or "just a moment", the agent waits for further input instead of forwarding the utterance to the LLM. Controlled by the new `pause_state_enabled` parameter.'
  }, {
    heading: "new-features-8",
    content: "**Conversation turn insights**"
  }, {
    heading: "new-features-8",
    content: "You can now query per-turn start, end, and latency metrics for completed agent sessions. See Query conversation turn information."
  }, {
    heading: "new-features-8",
    content: "**Real-time TTS parameter updates with custom LLM**"
  }, {
    heading: "new-features-8",
    content: "In scenarios with a custom LLM integrated, this release adds support for real-time TTS parameter updates during conversations, enabling a more natural conversational experience. This feature applies to the following use cases:"
  }, {
    heading: "new-features-8",
    content: "The custom LLM detects a user request for the agent to change its voice or speaking style."
  }, {
    heading: "new-features-8",
    content: "The custom LLM identifies a user's positive emotion and adjusts TTS volume, pitch, speech rate, and other parameters in real time to better match the user's mood."
  }, {
    heading: "new-features-8",
    content: "For implementation details, refer to Real-time TTS parameter updates."
  }, {
    heading: "new-features-8",
    content: "**New TTS provider**"
  }, {
    heading: "new-features-8",
    content: "Murf (Beta)"
  }, {
    heading: "new-features-8",
    content: "**New Avatar provider**"
  }, {
    heading: "new-features-8",
    content: "Anam (Beta)"
  }, {
    heading: "improvements-6",
    content: "This release includes the following enhancements:"
  }, {
    heading: "improvements-6",
    content: "**Migration from HeyGen API to LiveAvatar (Beta) API**"
  }, {
    heading: "improvements-6",
    content: "Updates the HeyGen avatar model configuration to use the LiveAvatar (Beta) API."
  }, {
    heading: "api-changes-8",
    content: "This release introduces the following changes to the RESTful API."
  }, {
    heading: "api-changes-8",
    content: "**New endpoint: Query conversation turns**"
  }, {
    heading: "api-changes-8",
    content: "Adds a new GET endpoint to query conversation turn information for an agent session. After a conversation ends, use this endpoint to retrieve the start event, end event, and latency metrics for each turn within the session. For details, see Query conversation turn information."
  }, {
    heading: "api-changes-8",
    content: "Changes to **Start a conversational AI agent**"
  }, {
    heading: "api-changes-8",
    content: "**New parameters added**"
  }, {
    heading: "api-changes-8",
    content: "`preset`"
  }, {
    heading: "api-changes-8",
    content: "`pause_state_enabled`"
  }, {
    heading: "api-changes-8",
    content: "**Deprecated fields deleted**"
  }, {
    heading: "api-changes-8",
    content: "The following deprecated fields are deleted:"
  }, {
    heading: "api-changes-8",
    content: "`properties.silence_timeout`"
  }, {
    heading: "api-changes-8",
    content: "`properties.advanced_features.enable_aivad`"
  }, {
    heading: "api-changes-8",
    content: "`properties.llm.silence_message`"
  }, {
    heading: "api-changes-8",
    content: "Released on February 2, 2026."
  }, {
    heading: "new-features-9",
    content: "Included in this release:"
  }, {
    heading: "new-features-9",
    content: "**MCP integration**"
  }, {
    heading: "new-features-9",
    content: "Adds a `llm.mcp_servers` field to the Start a conversational AI agent API to connect the LLM to an MCP (Model Context Protocol) server. Set `advanced_features.enable_tools` to `true` to enable tool calls. This allows the agent to call tools provided by external services to extend functionality. For details, see Use MCP tools."
  }, {
    heading: "new-features-9",
    content: "**Filler phrases**"
  }, {
    heading: "new-features-9",
    content: "Adds a `properties.filler_words` field to insert pre-set or LLM-generated filler phrases during conversations to fill periods of silence while waiting for LLM output. This feature smooths dialogue flow, reduces user anxiety, and makes agent speech sound more natural."
  }, {
    heading: "improvements-7",
    content: "This release includes the following enhancements:"
  }, {
    heading: "improvements-7",
    content: "**Turn detection configuration optimization**"
  }, {
    heading: "improvements-7",
    content: "The `turn_detection` parameter structure has been updated to provide more flexible conversation turn detection. The new structure uses a `mode` + `config` pattern with separate Start of Speech (SoS) and End of Speech (EoS) detection configurations."
  }, {
    heading: "improvements-7",
    content: "**Basic configuration**"
  }, {
    heading: "improvements-7",
    content: "`mode`: Conversation turn detection mode (currently supports `default`)"
  }, {
    heading: "improvements-7",
    content: "`config.speech_threshold`: Voice activity detection sensitivity"
  }, {
    heading: "improvements-7",
    content: "**Start of Speech (SoS) detection**"
  }, {
    heading: "improvements-7",
    content: "Detects when the user begins speaking. When SoS is detected while the agent is speaking, an interruption occurs."
  }, {
    heading: "improvements-7",
    content: "The `config.start_of_speech` parameter supports three detection modes:"
  }, {
    heading: "improvements-7",
    content: "**VAD mode** (`vad`): Triggered by voice activity detection. Supports configuration of interruption threshold, prefix padding, and ignore word list."
  }, {
    heading: "improvements-7",
    content: "**Keyword mode (Beta)** (`keywords`): Based on keyword triggering. The agent begins conversation after detecting a specified keyword."
  }, {
    heading: "improvements-7",
    content: "**Disabled mode** (`disabled`): Disables interruption. Supports append or ignore strategies."
  }, {
    heading: "improvements-7",
    content: "**End of Speech (EoS) detection**"
  }, {
    heading: "improvements-7",
    content: "Detects when the user finishes speaking. When EoS is detected, the agent generates a response."
  }, {
    heading: "improvements-7",
    content: "The `config.end_of_speech` parameter supports two detection modes:"
  }, {
    heading: "improvements-7",
    content: "**VAD mode** (`vad`): Determines conversation end based on silence duration."
  }, {
    heading: "improvements-7",
    content: "**Semantic mode** (`semantic`): Determines conversation end based on semantic understanding. Supports configurable maximum wait time."
  }, {
    heading: "api-changes-9",
    content: "This release introduces the following changes to the RESTful API."
  }, {
    heading: "api-changes-9",
    content: "Changes to **Start a conversational AI agent**"
  }, {
    heading: "api-changes-9",
    content: "**`turn_detection` has a revamped structure**"
  }, {
    heading: "api-changes-9",
    content: "All previous fields under `turn_detection` have been deprecated and replaced with a new data structure."
  }, {
    heading: "api-changes-9",
    content: "Deprecated"
  }, {
    heading: "api-changes-9",
    content: "`turn_detection.interrupt_mode`"
  }, {
    heading: "api-changes-9",
    content: "`turn_detection.interrupt_keywords`"
  }, {
    heading: "api-changes-9",
    content: "`turn_detection.interrupt_duration_ms`"
  }, {
    heading: "api-changes-9",
    content: "`turn_detection.prefix_padding_ms`"
  }, {
    heading: "api-changes-9",
    content: "`turn_detection.silence_duration_ms`"
  }, {
    heading: "api-changes-9",
    content: "`turn_detection.threshold`"
  }, {
    heading: "api-changes-9",
    content: "**AIVAD activation**"
  }, {
    heading: "api-changes-9",
    content: 'The `advanced_features.enable_aivad` field is now deprecated; to configure AIVAD activation use `turn_detection.config.end_of_speech.mode = "semantic"`.'
  }, {
    heading: "api-changes-9",
    content: "**New parameters added**"
  }, {
    heading: "api-changes-9",
    content: "`advanced_features.enable_tools`"
  }, {
    heading: "api-changes-9",
    content: "`llm.mcp_servers`"
  }, {
    heading: "api-changes-9",
    content: "`properties.filler_words`"
  }, {
    heading: "api-changes-9",
    content: "`turn_detection.mode`"
  }, {
    heading: "api-changes-9",
    content: "`turn_detection.config`"
  }, {
    heading: "api-changes-9",
    content: "Released on January 7, 2026."
  }, {
    heading: "new-features-10",
    content: "Included in this release:"
  }, {
    heading: "new-features-10",
    content: "**Control LLM response interruption in custom LLM scenarios**"
  }, {
    heading: "new-features-10",
    content: "Adds a `metadata.interruptable` field in the first chunk of the `chat.completion.custom_metadata` object to control whether user speech can interrupt the agent's TTS output when using custom LLMs with streaming response (SSE). Use this to prevent interruptions when delivering critical information such as regulations, policies, or pricing. For more information, see Configure LLM response interruption."
  }, {
    heading: "new-features-10",
    content: "**RTC media content encryption**"
  }, {
    heading: "new-features-10",
    content: "Adds an `rtc` parameter to the Start a conversational AI agent API for configuring RTC encryption."
  }, {
    heading: "new-features-10",
    content: "**New ASR provider**"
  }, {
    heading: "new-features-10",
    content: "Sarvam (Beta)"
  }, {
    heading: "improvements-8",
    content: "This release includes the following enhancements:"
  }, {
    heading: "improvements-8",
    content: "**ElevenLabs TTS compatibility optimization**"
  }, {
    heading: "improvements-8",
    content: "Supports SSML parsing and forwarding to ensure ElevenLabs TTS correctly renders intended speech effects such as pauses, emphasis, and pronunciation."
  }, {
    heading: "improvements-8",
    content: "**Latency optimization best practices**"
  }, {
    heading: "improvements-8",
    content: "Adds a guide to Optimize conversation latency."
  }, {
    heading: "improvements-8",
    content: "**Cloud Recording best practices**"
  }, {
    heading: "improvements-8",
    content: "Adds a guide to Record conversations with Cloud Recording."
  }, {
    heading: "api-changes-10",
    content: "This release introduces the following changes to the RESTful API."
  }, {
    heading: "api-changes-10",
    content: "**Stop agent API is now asynchronous**"
  }, {
    heading: "api-changes-10",
    content: "The Stop a conversational AI agent API now responds immediately after request parameters are validated. The request is processed asynchronously after the API returns."
  }, {
    heading: "api-changes-10",
    content: "Changes to **Start a conversational AI agent**"
  }, {
    heading: "api-changes-10",
    content: "**New parameters added**"
  }, {
    heading: "api-changes-10",
    content: "`properties.rtc`"
  }, {
    heading: "api-changes-10",
    content: "Released on December 15, 2025."
  }, {
    heading: "new-features-11",
    content: "Included in this release:"
  }, {
    heading: "new-features-11",
    content: "**Geofencing**"
  }, {
    heading: "new-features-11",
    content: "Use `geofence` configuration when you Start a conversational AI agent to limit which Agora servers the Conversational AI Engine can access based on geographic regions. See Restrict agent zones for details."
  }, {
    heading: "new-features-11",
    content: "**Agent greeting mode**"
  }, {
    heading: "new-features-11",
    content: "Adds a field `llm.greeting_configs.mode` to the Start a conversational AI agent request to set the agent's greeting broadcast mode. The following modes are supported:"
  }, {
    heading: "new-features-11",
    content: "`single_every` (Default): The agent broadcasts a greeting every time a user joins a channel where there are no other users."
  }, {
    heading: "new-features-11",
    content: "`single_first`: The agent broadcasts a greeting only when the first user joins a channel."
  }, {
    heading: "new-features-11",
    content: "**New TTS providers**"
  }, {
    heading: "new-features-11",
    content: "Sarvam (Beta)"
  }, {
    heading: "improvements-9",
    content: "This release includes the following enhancements:"
  }, {
    heading: "improvements-9",
    content: "**TTS parameter update**"
  }, {
    heading: "improvements-9",
    content: "Adds `base_url` field to the TTS parameters for OpenAI and ElevenLabs. This field specifies the endpoint URL for the TTS service."
  }, {
    heading: "api-changes-11",
    content: "This release introduces the following changes to the RESTful API."
  }, {
    heading: "api-changes-11",
    content: "Changes to **Start a conversational AI agent**"
  }, {
    heading: "api-changes-11",
    content: "**New parameters added**"
  }, {
    heading: "api-changes-11",
    content: "`properties.geofence`"
  }, {
    heading: "api-changes-11",
    content: "`llm.greeting_configs.mode`"
  }, {
    heading: "api-changes-11",
    content: "Released on December 5, 2025."
  }, {
    heading: "new-features-12",
    content: "Included in this release:"
  }, {
    heading: "new-features-12",
    content: "**Template variables**"
  }, {
    heading: "new-features-12",
    content: "This version adds the `llm.template_variables` field to the Start a conversational AI agent API, used to insert variables into the agent's `system_messages`, `greeting_message`, `failure_message`, and `parameters.silence_config.content` text. By configuring these variables, the Conversational AI engine automatically replaces them with the corresponding values defined in `llm.template_variables`. Template variables, combined with prompt customization and SIP outbound calling functionality, enable you to dynamically inject content to automate processes such as automatic hang-up, voicemail recognition, automatic message leaving, and call transfer."
  }, {
    heading: "new-features-12",
    content: "**Custom labels**"
  }, {
    heading: "new-features-12",
    content: "This version adds a `labels` field to the Start a conversational AI agent API, enabling agents to carry custom labels. These labels are bound to the agent and returned in the `payload` field of all message notification callbacks from the Conversational AI engine, allowing you to implement custom business logic, such as tagging activity IDs, customer groups, and business scenarios."
  }, {
    heading: "new-features-12",
    content: "In SIP outbound call scenarios, you can pass a custom label in the `properties.labels` field when calling the outbound call interface to mark the call."
  }, {
    heading: "api-changes-12",
    content: "This release introduces the following changes to the RESTful API."
  }, {
    heading: "api-changes-12",
    content: "Changes to **Start a conversational AI agent**"
  }, {
    heading: "api-changes-12",
    content: "**New parameters added**"
  }, {
    heading: "api-changes-12",
    content: "`properties.labels`"
  }, {
    heading: "api-changes-12",
    content: "`llm.template_variables`"
  }, {
    heading: "api-changes-12",
    content: "Released on November 15, 2025."
  }, {
    heading: "new-features-13",
    content: "Included in this release:"
  }, {
    heading: "new-features-13",
    content: "**Telephony (Beta)**"
  }, {
    heading: "new-features-13",
    content: "This version adds an outbound calling feature that enables the conversational AI agent to initiate an outbound call to a specified number through a POST API. After the call is answered, the agent can engage in real-time dialogue with the callee. This feature supports a wide range of outbound AI call scenarios."
  }, {
    heading: "new-features-13",
    content: "A set of phone number management APIs is also added for handling numbers connected to Conversational AI Engine. Refer to the API changes section for details."
  }, {
    heading: "new-features-13",
    content: "The telephony feature is currently in **Beta** and is provided free of charge. Pricing terms may change upon official release."
  }, {
    heading: "new-features-13",
    content: "**Selective attention locking (Beta)**"
  }, {
    heading: "new-features-13",
    content: "This version adds the selective attention lock feature. Register voiceprints to enable the agent to identify specific speakers and suppress background voices and environmental noise, ensuring clearer, more focused conversations."
  }, {
    heading: "new-features-13",
    content: "**Graceful exit**"
  }, {
    heading: "new-features-13",
    content: "This version adds a new `farewell_config` field to Start a conversational AI agent API to configure the graceful exit feature. When enabled, calling the Stop a Conversational Agent API causes the agent to enter an `IDLE` state before leaving the channel."
  }, {
    heading: "new-features-13",
    content: "**Keyword interruption mode**"
  }, {
    heading: "new-features-13",
    content: 'This release adds a new option to the `turn_detection.interrupt_mode` field in the Start a conversational AI agent API. Set this field to `"keyword"` to enable keyword interruption mode.'
  }, {
    heading: "new-features-13",
    content: "When this mode is enabled, the agent stops its current behavior after detecting any of the keywords specified in the `turn_detection.interrupt_keywords` field."
  }, {
    heading: "new-features-13",
    content: "**Adaptive interruption mode**"
  }, {
    heading: "new-features-13",
    content: 'This release adds a new option to the `turn_detection.interrupt_mode` field in the Start a conversational AI agent API. Set this field to `"adaptive"` to enable adaptive interruption mode.'
  }, {
    heading: "new-features-13",
    content: "When this mode is enabled, the agent dynamically increases the voice continuity threshold while speaking to reduce accidental interruptions."
  }, {
    heading: "new-features-13",
    content: "**New ASR, LLM, MLLM, and TTS providers**"
  }, {
    heading: "new-features-13",
    content: "ASR"
  }, {
    heading: "new-features-13",
    content: "OpenAI (Beta)"
  }, {
    heading: "new-features-13",
    content: "Speechmatics"
  }, {
    heading: "new-features-13",
    content: "Google (Beta)"
  }, {
    heading: "new-features-13",
    content: "Amazon Transcribe (Beta)"
  }, {
    heading: "new-features-13",
    content: "AssemblyAI (Beta)"
  }, {
    heading: "new-features-13",
    content: "LLM"
  }, {
    heading: "new-features-13",
    content: "Groq"
  }, {
    heading: "new-features-13",
    content: "Amazon Bedrock"
  }, {
    heading: "new-features-13",
    content: "MLLM"
  }, {
    heading: "new-features-13",
    content: "Google Gemini Live"
  }, {
    heading: "new-features-13",
    content: "TTS"
  }, {
    heading: "new-features-13",
    content: "Rime (Beta)"
  }, {
    heading: "new-features-13",
    content: "Fish Audio (Beta)"
  }, {
    heading: "new-features-13",
    content: "Google (Beta)"
  }, {
    heading: "new-features-13",
    content: "Amazon Polly (Beta)"
  }, {
    heading: "new-features-13",
    content: "**New webhook notification events**"
  }, {
    heading: "new-features-13",
    content: "This release adds three new webhook notification event types to support metrics reporting and call-state monitoring:"
  }, {
    heading: "new-features-13",
    content: "`111`: agent metrics"
  }, {
    heading: "new-features-13",
    content: "Notifies real-time performance metrics for each dialogue turn, including ASR, LLM, and TTS latency measurements."
  }, {
    heading: "new-features-13",
    content: "`201`: inbound call state"
  }, {
    heading: "new-features-13",
    content: "Reports state changes for incoming calls, such as when a call starts, is answered, transferred, or hung up."
  }, {
    heading: "new-features-13",
    content: "`202`: outbound call state"
  }, {
    heading: "new-features-13",
    content: "Reports state changes for outbound calls initiated by the agent, including call start, dialing, ringing, answer, and hang-up events."
  }, {
    heading: "improvements-10",
    content: "This release includes the following enhancements:"
  }, {
    heading: "improvements-10",
    content: "**Support for avatars with MLLMs**"
  }, {
    heading: "improvements-10",
    content: "Added support for using avatars with MLLMs."
  }, {
    heading: "api-changes-13",
    content: "This release introduces the following changes to the RESTful API."
  }, {
    heading: "api-changes-13",
    content: "Changes to **Start a conversational AI agent**"
  }, {
    heading: "api-changes-13",
    content: "**New parameters added**"
  }, {
    heading: "api-changes-13",
    content: "`properties.parameters.farewell_config`"
  }, {
    heading: "api-changes-13",
    content: "`properties.advanced_features.enable_sal`"
  }, {
    heading: "api-changes-13",
    content: "`properties.sal`"
  }, {
    heading: "api-changes-13",
    content: "`properties.sal.sal_mode`"
  }, {
    heading: "api-changes-13",
    content: "`properties.sal.sample_urls`"
  }, {
    heading: "api-changes-13",
    content: "`properties.turn_detection.interrupt_mode` (supports `adaptive` and `keyword` values)"
  }, {
    heading: "api-changes-13",
    content: "`properties.turn_detection.interrupt_keywords`"
  }, {
    heading: "api-changes-13",
    content: "`properties.turn_detection.interrupt_duration_ms` (migrated from `vad.interrupt_duration_ms`)"
  }, {
    heading: "api-changes-13",
    content: "`properties.turn_detection.prefix_padding_ms` (migrated from `vad.prefix_padding_ms`)"
  }, {
    heading: "api-changes-13",
    content: "`properties.turn_detection.silence_duration_ms` (migrated from `vad.silence_duration_ms`)"
  }, {
    heading: "api-changes-13",
    content: "`properties.turn_detection.threshold` (migrated from `vad.threshold`)"
  }, {
    heading: "api-changes-13",
    content: "**Deprecated**"
  }, {
    heading: "api-changes-13",
    content: "The `vad` interface is deprecated. All configuration items have been moved to the `turn_detection` field."
  }, {
    heading: "api-changes-13",
    content: "**New APIs**"
  }, {
    heading: "api-changes-13",
    content: "Telephony (Beta)"
  }, {
    heading: "api-changes-13",
    content: "Initiate an outbound call"
  }, {
    heading: "api-changes-13",
    content: "Retrieve call records"
  }, {
    heading: "api-changes-13",
    content: "Hang-up a call"
  }, {
    heading: "api-changes-13",
    content: "Retrieve call status"
  }, {
    heading: "api-changes-13",
    content: "Phone number management (Beta)"
  }, {
    heading: "api-changes-13",
    content: "Retrieve list of numbers"
  }, {
    heading: "api-changes-13",
    content: "Import number"
  }, {
    heading: "api-changes-13",
    content: "Retrieve number information"
  }, {
    heading: "api-changes-13",
    content: "Update number configuration"
  }, {
    heading: "api-changes-13",
    content: "Delete number"
  }, {
    heading: "toolkit-api-2",
    content: "This release renames all APIs and parameters containing the word `transcription` in the client-side subtitle API to use `transcript`, as shown below:"
  }, {
    heading: "android",
    content: "`onTranscriptionUpdated` renamed to `onTranscriptUpdated`"
  }, {
    heading: "android",
    content: "`TranscriptionRenderMode` renamed to `TranscriptRenderMode`"
  }, {
    heading: "android",
    content: "`TranscriptionType` renamed to `TranscriptType`"
  }, {
    heading: "android",
    content: "`TranscriptionStatus` renamed to `TranscriptStatus`"
  }, {
    heading: "android",
    content: "`Transcription` renamed to `Transcript`"
  }, {
    heading: "ios",
    content: "`onTranscriptionUpdated` renamed to `onTranscriptUpdated`"
  }, {
    heading: "ios",
    content: "`TranscriptionRenderMode` renamed to `TranscriptRenderMode`"
  }, {
    heading: "ios",
    content: "`TranscriptionType` renamed to `TranscriptType`"
  }, {
    heading: "ios",
    content: "`TranscriptionStatus` renamed to `TranscriptStatus`"
  }, {
    heading: "ios",
    content: "`Transcription` renamed to `Transcript`"
  }, {
    heading: "web",
    content: "`TRANSCRIPTION_UPDATED` renamed to `TRANSCRIPT_UPDATED`"
  }, {
    heading: "web",
    content: "Released on July 31, 2025."
  }, {
    heading: "new-features-14",
    content: "**AI avatars**"
  }, {
    heading: "new-features-14",
    content: "Create visual avatar representations for your conversational agents using third-party avatar providers. AI avatars provide a visual presence during voice interactions, making conversations feel more natural and engaging. Enable AI avatars by setting `avatar.enable` to `true` and configuring the `avatar.vendor` and `avatar.params` fields when calling Start a conversational AI agent to create your agent."
  }, {
    heading: "new-features-14",
    content: "AI avatars require video streaming and incur additional charges. See video calling pricing for details."
  }, {
    heading: "new-features-14",
    content: "**Selective attention locking (Beta)**"
  }, {
    heading: "new-features-14",
    content: "This version introduces the selective attention locking feature, which uses voiceprint recognition technology to identify and filter out the speaker while suppressing background noise. This enhances the efficiency of conversational AI, particularly improving speech recognition accuracy. To experience this feature, contact technical support."
  }, {
    heading: "new-features-14",
    content: "**Send picture messages (Beta)**"
  }, {
    heading: "new-features-14",
    content: "The toolkit now includes an API for sending picture messages. You can send image URLs to the main model, which automatically references the image in future interactions to generate more relevant responses. A new callback is available to receive image message receipt details after successful transmission."
  }, {
    heading: "new-features-14",
    content: "The picture messaging feature is currently in Beta and free for a limited time."
  }, {
    heading: "new-features-14",
    content: "Image processing depends on the capabilities of the integrated LLM. Ensure the LLM you connect to the Conversational AI Engine supports image input."
  }, {
    heading: "api-changes-14",
    content: "This release introduces the following modifications to the RESTful API."
  }, {
    heading: "api-changes-14",
    content: "Start a conversational AI agent"
  }, {
    heading: "api-changes-14",
    content: "**New parameters added**"
  }, {
    heading: "api-changes-14",
    content: "`avatar.enable`"
  }, {
    heading: "api-changes-14",
    content: "`avatar.vendor`"
  }, {
    heading: "api-changes-14",
    content: "`avatar.params`"
  }, {
    heading: "toolkit-api-3",
    content: "Android:"
  }, {
    heading: "toolkit-api-3",
    content: "`chat`"
  }, {
    heading: "toolkit-api-3",
    content: "`ImageMessage`"
  }, {
    heading: "toolkit-api-3",
    content: "`onMessageReceiptUpdated`"
  }, {
    heading: "toolkit-api-3",
    content: "`MessageReceipt`"
  }, {
    heading: "toolkit-api-3",
    content: "iOS:"
  }, {
    heading: "toolkit-api-3",
    content: "`chat`"
  }, {
    heading: "toolkit-api-3",
    content: "`ChatMessage`"
  }, {
    heading: "toolkit-api-3",
    content: "`ChatMessageType`"
  }, {
    heading: "toolkit-api-3",
    content: "`ImageMessage`"
  }, {
    heading: "toolkit-api-3",
    content: "`onMessageReceiptUpdated`"
  }, {
    heading: "toolkit-api-3",
    content: "`MessageReceipt`"
  }, {
    heading: "toolkit-api-3",
    content: "Web:"
  }, {
    heading: "toolkit-api-3",
    content: "`chat`"
  }, {
    heading: "toolkit-api-3",
    content: "`TMessageReceipt`"
  }, {
    heading: "toolkit-api-3",
    content: "`EChatMessagePriority`"
  }, {
    heading: "toolkit-api-3",
    content: "`EChatMessageType`"
  }, {
    heading: "toolkit-api-3",
    content: "`IChatMessageBase`"
  }, {
    heading: "toolkit-api-3",
    content: "`IChatMessageImage`"
  }, {
    heading: "toolkit-api-3",
    content: "Released on July 15, 2025."
  }, {
    heading: "new-features-15",
    content: "**Support for OpenAI Realtime API**"
  }, {
    heading: "new-features-15",
    content: "Integrate Multimodal Large Language Models (MLLMs) with Conversational AI Engine to enable end-to-end real-time audio and text interactions. See OpenAI Realtime API for integration details."
  }, {
    heading: "new-features-15",
    content: "**Support for more TTS vendors**"
  }, {
    heading: "new-features-15",
    content: "Conversational AI Engine now supports the following additional TTS vendors:"
  }, {
    heading: "new-features-15",
    content: "Cartesia"
  }, {
    heading: "new-features-15",
    content: "OpenAI"
  }, {
    heading: "new-features-15",
    content: "**Custom ASR provider support**"
  }, {
    heading: "new-features-15",
    content: "To improve flexibility in configuring conversational agents, this release allows you to select a custom automatic speech recognition (ASR) provider. The Start a conversational AI agent API now includes the following new parameters:"
  }, {
    heading: "new-features-15",
    content: "`asr.vendor`: Specify the ASR provider"
  }, {
    heading: "new-features-15",
    content: "`asr.params`: Configure ASR parameters"
  }, {
    heading: "new-features-15",
    content: "The following ASR providers are supported:"
  }, {
    heading: "new-features-15",
    content: "**ARES** (default)"
  }, {
    heading: "new-features-15",
    content: "**Microsoft Azure**"
  }, {
    heading: "new-features-15",
    content: "**Deepgram**"
  }, {
    heading: "new-features-15",
    content: "**Billing update:**"
  }, {
    heading: "new-features-15",
    content: "In earlier versions, the service fee included the cost of the Ares ASR provider. Starting in v1.6, the pricing is restructured as follows:"
  }, {
    heading: "new-features-15",
    content: `If you use **ARES ASR*&#x2A;, the total price remains unchanged:
&#x2A;**Total cost = Conversational AI Engine Audio Basic Task + ARES ASR Task***`
  }, {
    heading: "new-features-15",
    content: "If you use **a different ASR provider**, you are charged **only** the new **Conversational AI Engine Audio Basic Task** fee."
  }, {
    heading: "new-features-15",
    content: "For further details, see Pricing."
  }, {
    heading: "new-features-15",
    content: "**Multi-platform toolkit**"
  }, {
    heading: "new-features-15",
    content: "Agora now offers a toolkit to help you quickly build conversational agent apps. The toolkit is available for **iOS**, **Android**, and **Web**, and includes APIs for common scenarios. Call these APIs to combine the capabilities of the Agora Voice SDK and Signaling SDK to achieve the following functions:"
  }, {
    heading: "new-features-15",
    content: `**Display live transcript**
Display real-time text output of user-agent conversations. The transcript component is now more robust, with better error handling, session management, and extensibility.`
  }, {
    heading: "new-features-15",
    content: `**Interrupt the agent**
Stop the agent from speaking or thinking mid-conversation.`
  }, {
    heading: "new-features-15",
    content: `**Client-side events**
Track changes in conversation state, performance metrics, and error events.`
  }, {
    heading: "new-features-15",
    content: `**Optimize audio settings**
Quickly apply best-practice audio configurations to improve agent responsiveness and clarity.`
  }, {
    heading: "rest-api",
    content: "This release introduces several important modifications to the RESTful API."
  }, {
    heading: "rest-api",
    content: "Start a conversational AI agent"
  }, {
    heading: "rest-api",
    content: "**New parameters added**"
  }, {
    heading: "rest-api",
    content: "`asr.vendor`"
  }, {
    heading: "rest-api",
    content: "`asr.params`"
  }, {
    heading: "rest-api",
    content: "`advanced_features.enable_mllm`"
  }, {
    heading: "rest-api",
    content: "`properties.mllm`"
  }, {
    heading: "rest-api",
    content: "`turn_detection.type`"
  }, {
    heading: "rest-api",
    content: "`turn_detection.interrupt_duration_ms`"
  }, {
    heading: "rest-api",
    content: "`turn_detection.prefix_padding_ms`"
  }, {
    heading: "rest-api",
    content: "`turn_detection.silence_duration_ms`"
  }, {
    heading: "rest-api",
    content: "`turn_detection.threshold`"
  }, {
    heading: "rest-api",
    content: "`turn_detection.create_response`"
  }, {
    heading: "rest-api",
    content: "`turn_detection.interrupt_response`"
  }, {
    heading: "rest-api",
    content: "`turn_detection.eagerness`"
  }, {
    heading: "rest-api",
    content: "`parameters.enable_metrics`"
  }, {
    heading: "rest-api",
    content: "`parameters.data_channel`"
  }, {
    heading: "rest-api",
    content: "`parameters.enable_error_message`"
  }, {
    heading: "toolkit-apis",
    content: "Android SDK"
  }, {
    heading: "toolkit-apis",
    content: "iOS SDK"
  }, {
    heading: "toolkit-apis",
    content: "Web SDK"
  }, {
    heading: "toolkit-apis",
    content: "Released on June 9, 2025."
  }, {
    heading: "new-features-16",
    content: "**Voice interruption mode**"
  }, {
    heading: "new-features-16",
    content: "This release adds the `turn_detection.interrupt_mode` parameter to the Start a conversational AI agent API, allowing you to control how the agent handles human voice interruptions. The following modes are supported:"
  }, {
    heading: "new-features-16",
    content: "**`interrupt`**: (Default) The human voice immediately interrupts the agent. The agent terminates the current interaction and processes the new human voice input."
  }, {
    heading: "new-features-16",
    content: "**`append`**: The human voice does not interrupt the agent. The agent processes the newly received human voice request after the current interaction ends."
  }, {
    heading: "new-features-16",
    content: "**`ignore`**: The agent ignores human voice requests received during speaking or thinking. These requests are discarded and not stored in the context."
  }, {
    heading: "new-features-16",
    content: "**TTS filtering**"
  }, {
    heading: "new-features-16",
    content: "This release adds the `tts.skip_patterns` parameter to the Start a conversational AI agent API. This parameter controls whether the TTS module skips bracketed content when reading LLM response text. This prevents the agent from vocalizing structural prompt information like tone indicators, action descriptions, and system prompts, creating a more natural and immersive listening experience."
  }, {
    heading: "api-changes-16",
    content: "This release introduces several important modifications to the RESTful API."
  }, {
    heading: "api-changes-16",
    content: "Start a conversational AI agent"
  }, {
    heading: "api-changes-16",
    content: "**New parameters added**"
  }, {
    heading: "api-changes-16",
    content: "`turn_detection.interrupt_mode`"
  }, {
    heading: "api-changes-16",
    content: "`parameters.silence_config`"
  }, {
    heading: "api-changes-16",
    content: "`tts.skip_patterns`"
  }, {
    heading: "api-changes-16",
    content: "Released on May 29, 2025."
  }, {
    heading: "new-features-17",
    content: "**Metadata support for LLM requests**"
  }, {
    heading: "new-features-17",
    content: 'This release adds the `llm.vendor` parameter to the Start a conversational AI agent API. When set to `"custom"`, the agent includes additional metadata when calling the LLM, such as `turn_id` and `timestamp`.'
  }, {
    heading: "new-features-17",
    content: "**Support for Anthropic**"
  }, {
    heading: "new-features-17",
    content: "Conversational AI Engine now supports `anthropic` as a request style for chat completion. Refer to the `llm.style` parameter in Start a conversational AI agent."
  }, {
    heading: "improvements-11",
    content: "This release includes the following enhancements:"
  }, {
    heading: "improvements-11",
    content: "**Advanced LLM configuration**: The Update agent configuration API now supports:"
  }, {
    heading: "improvements-11",
    content: "`llm.system_messages` for updating system prompts"
  }, {
    heading: "improvements-11",
    content: "`llm.params` for modifying configuration parameters used when calling the large language model"
  }, {
    heading: "api-changes-17",
    content: "This release introduces several important modifications to the RESTful API."
  }, {
    heading: "api-changes-17",
    content: "Start a conversational AI agent"
  }, {
    heading: "api-changes-17",
    content: "**New parameters added**"
  }, {
    heading: "api-changes-17",
    content: "`llm.vendor`"
  }, {
    heading: "api-changes-17",
    content: "**Removed parameters:**"
  }, {
    heading: "api-changes-17",
    content: "`agent_rtm_uid`"
  }, {
    heading: "api-changes-17",
    content: "Update agent configuration"
  }, {
    heading: "api-changes-17",
    content: "**New parameters added**"
  }, {
    heading: "api-changes-17",
    content: "`llm.system_messages`"
  }, {
    heading: "api-changes-17",
    content: "`llm.params`"
  }, {
    heading: "api-changes-17",
    content: "Released on April 16, 2025."
  }, {
    heading: "new-features-18",
    content: "**Agent conversation history**: This version adds two methods to retrieve an agent's history. The history includes messages exchanged between the user and the agent and timestamps of agent creation and exit."
  }, {
    heading: "new-features-18",
    content: "Call the RESTful API `history` endpoint to Retrieve agent history."
  }, {
    heading: "new-features-18",
    content: "Subscribe to the agent history event through the Agora message notification service. When the agent stops, Agora automatically sends the agent's history to your business server through a Webhook callback."
  }, {
    heading: "improvements-12",
    content: "**Customize the priority of broadcast information**: This version upgrades the Broadcast a message using TTS interface and adds two new configuration parameters related to broadcast interruption logic:"
  }, {
    heading: "improvements-12",
    content: "`priority`: Sets the priority of the message broadcast. Supports setting the following priorities:"
  }, {
    heading: "improvements-12",
    content: "`INTERRUPT` High priority"
  }, {
    heading: "improvements-12",
    content: "`APPEND`: Medium priority"
  }, {
    heading: "improvements-12",
    content: "`IGNORE`: Low priority"
  }, {
    heading: "improvements-12",
    content: "`interruptable`: Configure whether to allow human voice to interrupt the agent's broadcast."
  }, {
    heading: "api-changes-18",
    content: "Adds the Retrieve agent history method."
  }, {
    heading: "api-changes-18",
    content: "Adds `priority` and `interruptable` parameters to the Broadcast a message using TTS method."
  }, {
    heading: "api-changes-18",
    content: "Released on April 10, 2025."
  }, {
    heading: "new-features-19",
    content: "**Broadcast a message using TTS**: A new message broadcast interface enables a specified agent to deliver a custom message. When interacting with an agent, calling this interface interrupts the agent's speech and thinking process, allowing the TTS module to immediately broadcast the custom message."
  }, {
    heading: "new-features-19",
    content: "**Interrupt the agent**: The interrupt agent endpoint lets you stop the specified agent's speech and thinking process."
  }, {
    heading: "api-changes-19",
    content: "This version adds the following APIs:"
  }, {
    heading: "api-changes-19",
    content: "Broadcast a message using TTS"
  }, {
    heading: "api-changes-19",
    content: "Interrupt the agent"
  }, {
    heading: "api-changes-19",
    content: "Released on March 27, 2025."
  }, {
    heading: "new-features-20",
    content: "The Start a conversational agent API adds the `enable_rtm` and `agent_rtm_uid` parameters to enable Signaling integration with the conversational AI agent. When this feature is enabled, the agent can leverage the Signaling SDK to obtain a user's custom context information such as speaking status, selected text, signature, and score, and pass this data to the agent to generate more relevant content. For details, see Transmit custom information."
  }, {
    heading: "improvements-13",
    content: "To help you quickly integrate a custom large language model (LLM), this version adds documentation for Custom LLMs. Refer to the sample code in the documentation to integrate your custom model into the Conversational AI Engine and enable advanced capabilities such as Retrieval-Augmented Generation (RAG), multi-modal processing, and tool invocation."
  }, {
    heading: "api-changes-20",
    content: "The `POST` method to Start a conversational AI agent now includes the `enable_rtm` and `agent_rtm_uid` parameters."
  }, {
    heading: "api-changes-20",
    content: "This version, released on March 4, 2025, adds pricing information for the Agora Conversational AI Engine. For more information, see Pricing."
  }, {
    heading: "integration-guide",
    content: "To achieve the best conversation experience, use Agora Conversational AI Engine with the following Agora SDKs:"
  }, {
    heading: "integration-guide",
    content: "Agora RTC Native SDK, v4.5.1 or later."
  }, {
    heading: "integration-guide",
    content: "Agora RTC Web SDK, version 4.23.2 or later."
  }, {
    heading: "new-features-21",
    content: "**Live transcripts**: Supports real-time text output of conversations between users and the AI agent for transcript display in your app's UI. Agora provides an open-source transcript processing module. Integrate the module and call its API to implement live transcript. For details, see Display live transcripts."
  }, {
    heading: "new-features-21",
    content: "**Message Notification Service**: Introduces a new Conversational AI Engine message notification service. Configure it in the Agora console and subscribe to agent creation, stop, and error events. When a subscribed event occurs, Agora sends the details to your specified callback address. See Receive event notifications."
  }, {
    heading: "new-features-21",
    content: "**Keywords**: Enhances recognition accuracy of Conversational AI Engine for proprietary words by adding keywords. This feature is currently in Beta stage. For details, contact technical support."
  }, {
    heading: "new-features-21",
    content: "Released on February 18, 2025. The first beta release of the Conversational AI Engine brings natural, smooth, low-latency, and highly reliable real-time voice conversations with AI agents to Agora channels. It enables you to efficiently build intelligent and immersive interactive experiences. See Product overview for details."
  }, {
    heading: "core-features",
    content: "**Real-time voice conversation**"
  }, {
    heading: "core-features",
    content: "Supports natural and smooth real-time voice conversations with AI. It delivers a low-latency, ultra-responsive interactive experience as if the user is communicating with a real person."
  }, {
    heading: "core-features",
    content: "**Intelligent noise suppression**"
  }, {
    heading: "core-features",
    content: "Intelligently identifies and suppresses background noise, ensuring clear sound transmission even in noisy environments to provide users with a high-quality audio experience."
  }, {
    heading: "core-features",
    content: "**Background human voice suppression**"
  }, {
    heading: "core-features",
    content: "Suppresses background voices and noise while accurately preserving the primary speaker's voice. This ensures a clear and focused interactive experience in multi-speaker environments."
  }, {
    heading: "core-features",
    content: "**Intelligent interruption handling**"
  }, {
    heading: "core-features",
    content: "Allows users to interrupt AI at any time to ensure quick and natural responses. This feature enables smooth transitions and avoids mechanical interactions."
  }, {
    heading: "core-features",
    content: "**Intelligent transmission**"
  }, {
    heading: "core-features",
    content: "An AI-optimized transmission algorithm ensures stable voice data delivery even in weak network conditions where packet loss reaches 80%. This guarantees conversation continuity and reliability across diverse network environments."
  }, {
    heading: "core-features",
    content: "**Flexible arrangement**"
  }, {
    heading: "core-features",
    content: "Supports multiple Large Language Model (LLM) and Text-to-Speech (TTS) providers, enabling flexible orchestration to meet diverse business needs and deliver highly customizable AI dialogue solutions."
  }, {
    heading: "core-features",
    content: "**Multi-platform support**"
  }, {
    heading: "core-features",
    content: "Compatible with iOS, Android, Web, and various embedded hardware platforms, providing a seamless and consistent cross-platform experience."
  }, {
    heading: "integration-guide-1",
    content: "For the best conversational experience, Agora recommends using Conversational AI Engine with specific Agora Video/Voice SDK versions. For details, contact technical support."
  }, {
    heading: "integration-guide-1",
    content: "The number of Peak Concurrent Users (PCU) allowed to call the server API under a single App ID is limited to 20. If you need to increase this limit, contact technical support."
  }],
  headings: [{
    id: "versions",
    content: "Versions"
  }, {
    id: "new-features",
    content: "New features"
  }, {
    id: "improvements",
    content: "Improvements"
  }, {
    id: "api-changes",
    content: "API changes"
  }, {
    id: "new-features-1",
    content: "New features"
  }, {
    id: "api-changes-1",
    content: "API changes"
  }, {
    id: "toolkit-api",
    content: "Toolkit API"
  }, {
    id: "deprecation-notice",
    content: "Deprecation notice"
  }, {
    id: "new-features-2",
    content: "New features"
  }, {
    id: "improvements-1",
    content: "Improvements"
  }, {
    id: "api-changes-2",
    content: "API changes"
  }, {
    id: "new-features-3",
    content: "New features"
  }, {
    id: "toolkit-api-1",
    content: "Toolkit API"
  }, {
    id: "api-changes-3",
    content: "API changes"
  }, {
    id: "new-features-4",
    content: "New features"
  }, {
    id: "improvements-2",
    content: "Improvements"
  }, {
    id: "api-changes-4",
    content: "API changes"
  }, {
    id: "new-features-5",
    content: "New features"
  }, {
    id: "improvements-3",
    content: "Improvements"
  }, {
    id: "api-changes-5",
    content: "API changes"
  }, {
    id: "new-features-6",
    content: "New features"
  }, {
    id: "improvements-4",
    content: "Improvements"
  }, {
    id: "api-changes-6",
    content: "API changes"
  }, {
    id: "new-features-7",
    content: "New features"
  }, {
    id: "improvements-5",
    content: "Improvements"
  }, {
    id: "api-changes-7",
    content: "API changes"
  }, {
    id: "new-features-8",
    content: "New features"
  }, {
    id: "improvements-6",
    content: "Improvements"
  }, {
    id: "api-changes-8",
    content: "API changes"
  }, {
    id: "new-features-9",
    content: "New features"
  }, {
    id: "improvements-7",
    content: "Improvements"
  }, {
    id: "api-changes-9",
    content: "API changes"
  }, {
    id: "new-features-10",
    content: "New features"
  }, {
    id: "improvements-8",
    content: "Improvements"
  }, {
    id: "api-changes-10",
    content: "API changes"
  }, {
    id: "new-features-11",
    content: "New features"
  }, {
    id: "improvements-9",
    content: "Improvements"
  }, {
    id: "api-changes-11",
    content: "API changes"
  }, {
    id: "new-features-12",
    content: "New features"
  }, {
    id: "api-changes-12",
    content: "API changes"
  }, {
    id: "new-features-13",
    content: "New features"
  }, {
    id: "improvements-10",
    content: "Improvements"
  }, {
    id: "api-changes-13",
    content: "API changes"
  }, {
    id: "toolkit-api-2",
    content: "Toolkit API"
  }, {
    id: "android",
    content: "Android"
  }, {
    id: "ios",
    content: "iOS"
  }, {
    id: "web",
    content: "Web"
  }, {
    id: "new-features-14",
    content: "New features"
  }, {
    id: "api-changes-14",
    content: "API changes"
  }, {
    id: "toolkit-api-3",
    content: "Toolkit API"
  }, {
    id: "new-features-15",
    content: "New features"
  }, {
    id: "api-changes-15",
    content: "API changes"
  }, {
    id: "rest-api",
    content: "REST API"
  }, {
    id: "toolkit-apis",
    content: "Toolkit APIs"
  }, {
    id: "new-features-16",
    content: "New features"
  }, {
    id: "api-changes-16",
    content: "API changes"
  }, {
    id: "new-features-17",
    content: "New features"
  }, {
    id: "improvements-11",
    content: "Improvements"
  }, {
    id: "api-changes-17",
    content: "API changes"
  }, {
    id: "new-features-18",
    content: "New features"
  }, {
    id: "improvements-12",
    content: "Improvements"
  }, {
    id: "api-changes-18",
    content: "API changes"
  }, {
    id: "new-features-19",
    content: "New features"
  }, {
    id: "api-changes-19",
    content: "API changes"
  }, {
    id: "new-features-20",
    content: "New features"
  }, {
    id: "improvements-13",
    content: "Improvements"
  }, {
    id: "api-changes-20",
    content: "API changes"
  }, {
    id: "integration-guide",
    content: "Integration guide"
  }, {
    id: "new-features-21",
    content: "New features"
  }, {
    id: "core-features",
    content: "Core features"
  }, {
    id: "integration-guide-1",
    content: "Integration guide"
  }]
};
export let toc = [{
  depth: 2,
  url: "#versions",
  title: _jsx(_Fragment, {
    children: "Versions"
  })
}, {
  depth: 4,
  url: "#new-features",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#api-changes",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-1",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#api-changes-1",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#toolkit-api",
  title: _jsx(_Fragment, {
    children: "Toolkit API"
  })
}, {
  depth: 4,
  url: "#deprecation-notice",
  title: _jsx(_Fragment, {
    children: "Deprecation notice"
  })
}, {
  depth: 4,
  url: "#new-features-2",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-1",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#api-changes-2",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-3",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#toolkit-api-1",
  title: _jsx(_Fragment, {
    children: "Toolkit API"
  })
}, {
  depth: 4,
  url: "#api-changes-3",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-4",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-2",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#api-changes-4",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-5",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-3",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#api-changes-5",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-6",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-4",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#api-changes-6",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-7",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-5",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#api-changes-7",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-8",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-6",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#api-changes-8",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-9",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-7",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#api-changes-9",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-10",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-8",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#api-changes-10",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-11",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-9",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#api-changes-11",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-12",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#api-changes-12",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-13",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-10",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#api-changes-13",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#toolkit-api-2",
  title: _jsx(_Fragment, {
    children: "Toolkit API"
  })
}, {
  depth: 4,
  url: "#android",
  title: _jsx(_Fragment, {
    children: "Android"
  })
}, {
  depth: 4,
  url: "#ios",
  title: _jsx(_Fragment, {
    children: "iOS"
  })
}, {
  depth: 4,
  url: "#web",
  title: _jsx(_Fragment, {
    children: "Web"
  })
}, {
  depth: 4,
  url: "#new-features-14",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#api-changes-14",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 5,
  url: "#toolkit-api-3",
  title: _jsx(_Fragment, {
    children: "Toolkit API"
  })
}, {
  depth: 4,
  url: "#new-features-15",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#api-changes-15",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 5,
  url: "#rest-api",
  title: _jsx(_Fragment, {
    children: "REST API"
  })
}, {
  depth: 5,
  url: "#toolkit-apis",
  title: _jsx(_Fragment, {
    children: "Toolkit APIs"
  })
}, {
  depth: 4,
  url: "#new-features-16",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#api-changes-16",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-17",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-11",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#api-changes-17",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-18",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-12",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#api-changes-18",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-19",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#api-changes-19",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#new-features-20",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-13",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#api-changes-20",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#integration-guide",
  title: _jsx(_Fragment, {
    children: "Integration guide"
  })
}, {
  depth: 4,
  url: "#new-features-21",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#core-features",
  title: _jsx(_Fragment, {
    children: "Core features"
  })
}, {
  depth: 4,
  url: "#integration-guide-1",
  title: _jsx(_Fragment, {
    children: "Integration guide"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h4: "h4",
    h5: "h5",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { Accordion, Accordions, CalloutContainer, CalloutDescription, CalloutTitle, Tabs, TabsContent, TabsList, TabsTrigger } = _components;
  if (!Accordion)
    _missingMdxReference("Accordion", true);
  if (!Accordions)
    _missingMdxReference("Accordions", true);
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
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
      children: "This document tracks notable changes and improvements to the Conversational AI Engine."
    }), `
`, _jsx(_components.h2, {
      id: "versions",
      children: "Versions"
    }), `
`, _jsxs(Accordions, {
      type: "multiple",
      openFirst: true,
      children: [_jsxs(Accordion, {
        title: "v2.13",
        id: "v213",
        headingLevel: 3,
        value: "v213",
        children: [_jsx(_components.p, {
          children: "Released on September 25, 2026."
        }), _jsx(_components.h4, {
          id: "new-features",
          children: "New features"
        }), _jsx(_components.p, {
          children: "Included in this release:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Custom tools for MLLM agents"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["MLLM agents can call your own HTTPS endpoints as tools. Tool definitions use the same format as for cascading LLM agents, so an existing tool works with either agent type. Available in the Agora Agents SDKs and the RESTful API. For details, see ", _jsx(_components.a, {
                href: "build/tools/custom-tools",
                children: "Call custom tools"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New ASR provider"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/asr/smallest-ai",
                  children: "Smallest AI"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New TTS provider"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/tts/smallest-ai",
                  children: "Smallest AI"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New MLLM provider"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/mllm/openai-gpt-live",
                  children: "OpenAI GPT-Live"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "improvements",
          children: "Improvements"
        }), _jsx(_components.p, {
          children: "This release includes the following enhancements."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "MCP tool-use for MLLM agents in the Agora Agents SDKs"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["MLLM agents have supported MCP tool-use through the RESTful API since v2.12. This release adds the same support to the Agora Agents SDKs, which accept MCP servers on their MLLM vendor classes, so you can configure MCP tool-use without calling the RESTful API directly. For details, see ", _jsx(_components.a, {
                href: "build/tools/mcp-tools",
                children: "Use MCP tools"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Generated filler words use conversation context"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This release improves generated filler words so that they reflect the recent exchange, not just the current turn. You can set the conversation context for the generation service using a message count and a character budget. For details, see ", _jsx(_components.a, {
                href: "build/shape-the-conversation/filler-words",
                children: "Talking while waiting"
              }), "."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "api-changes",
          children: "API changes"
        }), _jsx(_components.p, {
          children: "This release introduces the following changes for the new Smallest AI and OpenAI GPT-Live providers, Gemini ASR, MLLM tool-use, and generated filler words."
        }), _jsxs(Tabs, {
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
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.a, {
                    href: "/en/api-reference/api-ref/server-sdk/python#stt-vendors",
                    children: _jsx(_components.code, {
                      children: "SmallestAISTT"
                    })
                  }), ": New ASR vendor class for Smallest AI."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.a, {
                    href: "/en/api-reference/api-ref/server-sdk/python#stt-vendors",
                    children: _jsx(_components.code, {
                      children: "GeminiSTT"
                    })
                  }), ": New ASR vendor class for Gemini."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.a, {
                    href: "/en/api-reference/api-ref/server-sdk/python#mllm-vendors",
                    children: _jsx(_components.code, {
                      children: "OpenAIGPTLive"
                    })
                  }), ": New MLLM vendor class for OpenAI GPT-Live."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.a, {
                    href: "/en/api-reference/api-ref/server-sdk/python#mllm-vendors",
                    children: "MLLM vendor classes"
                  }), ": New ", _jsx(_components.code, {
                    children: "tools"
                  }), " option for custom tool definitions, and new ", _jsx(_components.code, {
                    children: "mcp_servers"
                  }), " option for MCP tool-use."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.a, {
                    href: "/en/api-reference/api-ref/server-sdk/python#tts-vendors",
                    children: _jsx(_components.code, {
                      children: "SmallestAITTS"
                    })
                  }), ": New TTS vendor class for Smallest AI."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "New fields"
                  }), " on ", _jsx(_components.a, {
                    href: "/en/api-reference/api-ref/server-sdk/python#type-aliases",
                    children: _jsx(_components.code, {
                      children: "FillerWordsContentGeneratedConfig"
                    })
                  })]
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "context_message_limit"
                    }), ": How many of the most recent conversation messages to use, counting the current turn's message. Accepts ", _jsx(_components.code, {
                      children: "1"
                    }), " to ", _jsx(_components.code, {
                      children: "6"
                    }), ", and defaults to ", _jsx(_components.code, {
                      children: "1"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "history_character_limit"
                    }), ": Maximum combined characters of the earlier messages in the window. Accepts ", _jsx(_components.code, {
                      children: "0"
                    }), " to ", _jsx(_components.code, {
                      children: "10000"
                    }), ", and defaults to ", _jsx(_components.code, {
                      children: "1000"
                    }), "."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "Updated behavior"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "prompt"
                    }), ": A custom prompt fully replaces Agora's default prompt, and applies over the same conversation context window."]
                  }), `
`]
                }), `
`]
              }), `
`]
            })
          }), _jsx(TabsContent, {
            value: "typescript",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.a, {
                    href: "/en/api-reference/api-ref/server-sdk/typescript#stt-vendors",
                    children: _jsx(_components.code, {
                      children: "SmallestAISTT"
                    })
                  }), ": New ASR vendor class for Smallest AI."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.a, {
                    href: "/en/api-reference/api-ref/server-sdk/typescript#stt-vendors",
                    children: _jsx(_components.code, {
                      children: "GeminiSTT"
                    })
                  }), ": New ASR vendor class for Gemini."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.a, {
                    href: "/en/api-reference/api-ref/server-sdk/typescript#mllm-vendors",
                    children: _jsx(_components.code, {
                      children: "OpenAIGPTLive"
                    })
                  }), ": New MLLM vendor class for OpenAI GPT-Live."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.a, {
                    href: "/en/api-reference/api-ref/server-sdk/typescript#mllm-vendors",
                    children: "MLLM vendor classes"
                  }), ": New ", _jsx(_components.code, {
                    children: "tools"
                  }), " option for custom tool definitions, and new ", _jsx(_components.code, {
                    children: "mcpServers"
                  }), " option for MCP tool-use."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.a, {
                    href: "/en/api-reference/api-ref/server-sdk/typescript#tts-vendors",
                    children: _jsx(_components.code, {
                      children: "SmallestAITTS"
                    })
                  }), ": New TTS vendor class for Smallest AI."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "New fields"
                  }), " on ", _jsx(_components.a, {
                    href: "/en/api-reference/api-ref/server-sdk/typescript#type-aliases",
                    children: _jsx(_components.code, {
                      children: "FillerWordsContentGeneratedConfig"
                    })
                  })]
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "context_message_limit"
                    }), ": How many of the most recent conversation messages to use, counting the current turn's message. Accepts ", _jsx(_components.code, {
                      children: "1"
                    }), " to ", _jsx(_components.code, {
                      children: "6"
                    }), ", and defaults to ", _jsx(_components.code, {
                      children: "1"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "history_character_limit"
                    }), ": Maximum combined characters of the earlier messages in the window. Accepts ", _jsx(_components.code, {
                      children: "0"
                    }), " to ", _jsx(_components.code, {
                      children: "10000"
                    }), ", and defaults to ", _jsx(_components.code, {
                      children: "1000"
                    }), "."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "Updated behavior"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "prompt"
                    }), ": A custom prompt fully replaces Agora's default prompt, and applies over the same conversation context window."]
                  }), `
`]
                }), `
`]
              }), `
`]
            })
          }), _jsx(TabsContent, {
            value: "go",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.a, {
                    href: "/en/api-reference/api-ref/server-sdk/go#stt-vendors",
                    children: _jsx(_components.code, {
                      children: "NewSmallestAISTT"
                    })
                  }), ": New ASR vendor class for Smallest AI."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.a, {
                    href: "/en/api-reference/api-ref/server-sdk/go#stt-vendors",
                    children: _jsx(_components.code, {
                      children: "NewGeminiSTT"
                    })
                  }), ": New ASR vendor class for Gemini."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.a, {
                    href: "/en/api-reference/api-ref/server-sdk/go#mllm-vendors",
                    children: _jsx(_components.code, {
                      children: "NewOpenAIGPTLive"
                    })
                  }), ": New MLLM vendor class for OpenAI GPT-Live."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.a, {
                    href: "/en/api-reference/api-ref/server-sdk/go#mllm-vendors",
                    children: "MLLM vendor classes"
                  }), ": New ", _jsx(_components.code, {
                    children: "Tools"
                  }), " option for custom tool definitions, and new ", _jsx(_components.code, {
                    children: "McpServers"
                  }), " option for MCP tool-use. ", _jsx(_components.code, {
                    children: "NewOpenAIGPTLive"
                  }), " uses ", _jsx(_components.code, {
                    children: "McpServerConfigs"
                  }), " for the same purpose."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.a, {
                    href: "/en/api-reference/api-ref/server-sdk/go#tts-vendors",
                    children: _jsx(_components.code, {
                      children: "NewSmallestAITTS"
                    })
                  }), ": New TTS vendor class for Smallest AI."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "New fields"
                  }), " on ", _jsx(_components.a, {
                    href: "/en/api-reference/api-ref/server-sdk/go#type-aliases",
                    children: _jsx(_components.code, {
                      children: "FillerWordsContentGeneratedConfig"
                    })
                  }), ", both ", _jsx(_components.code, {
                    children: "*int"
                  })]
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "ContextMessageLimit"
                    }), ": How many of the most recent conversation messages to use, counting the current turn's message. Accepts ", _jsx(_components.code, {
                      children: "1"
                    }), " to ", _jsx(_components.code, {
                      children: "6"
                    }), ", and defaults to ", _jsx(_components.code, {
                      children: "1"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "HistoryCharacterLimit"
                    }), ": Maximum combined characters of the earlier messages in the window. Accepts ", _jsx(_components.code, {
                      children: "0"
                    }), " to ", _jsx(_components.code, {
                      children: "10000"
                    }), ", and defaults to ", _jsx(_components.code, {
                      children: "1000"
                    }), "."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "Updated behavior"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "Prompt"
                    }), ": A custom prompt fully replaces Agora's default prompt, and applies over the same conversation context window."]
                  }), `
`]
                }), `
`]
              }), `
`]
            })
          }), _jsx(TabsContent, {
            value: "rest-api",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Changes to ", _jsx(_components.a, {
                    href: "/en/api-reference/api-ref/conversational-ai/join",
                    children: _jsx(_components.strong, {
                      children: "Start a conversational AI agent"
                    })
                  })]
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: _jsx(_components.strong, {
                        children: "New parameters"
                      })
                    }), `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-filler-words-content-generated-config-context-message-limit",
                          children: _jsx(_components.code, {
                            children: "filler_words.content.generated_config.context_message_limit"
                          })
                        }), ": How many of the most recent conversation messages to use to generate a filler phrase, counting the current turn's message. Accepts ", _jsx(_components.code, {
                          children: "1"
                        }), " to ", _jsx(_components.code, {
                          children: "6"
                        }), ", and defaults to ", _jsx(_components.code, {
                          children: "1"
                        }), "."]
                      }), `
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-filler-words-content-generated-config-history-character-limit",
                          children: _jsx(_components.code, {
                            children: "filler_words.content.generated_config.history_character_limit"
                          })
                        }), ": Maximum combined characters of the earlier messages in the window. Accepts ", _jsx(_components.code, {
                          children: "0"
                        }), " to ", _jsx(_components.code, {
                          children: "10000"
                        }), ", and defaults to ", _jsx(_components.code, {
                          children: "1000"
                        }), "."]
                      }), `
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-tools",
                          children: _jsx(_components.code, {
                            children: "mllm.tools"
                          })
                        }), ": Custom tool definitions an MLLM agent can call. Takes the same format as ", _jsx(_components.code, {
                          children: "llm.tools"
                        }), ", and requires ", _jsx(_components.code, {
                          children: "advanced_features.enable_tools"
                        }), "."]
                      }), `
`]
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: _jsx(_components.strong, {
                        children: "Updated parameters"
                      })
                    }), `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-asr-vendor",
                          children: _jsx(_components.code, {
                            children: "asr.vendor"
                          })
                        }), " value ", _jsx(_components.code, {
                          children: "smallestai"
                        }), ": Use Smallest AI as the ASR provider. See ", _jsx(_components.a, {
                          href: "/en/ai/models/asr/smallest-ai",
                          children: "Smallest AI"
                        }), "."]
                      }), `
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-asr-vendor",
                          children: _jsx(_components.code, {
                            children: "asr.vendor"
                          })
                        }), " value ", _jsx(_components.code, {
                          children: "gemini"
                        }), ": Use Gemini as the ASR provider. See ", _jsx(_components.a, {
                          href: "/en/ai/models/asr/gemini",
                          children: "Gemini"
                        }), "."]
                      }), `
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-vendor",
                          children: _jsx(_components.code, {
                            children: "mllm.vendor"
                          })
                        }), " value ", _jsx(_components.code, {
                          children: "openai_gpt_live"
                        }), ": Use OpenAI GPT-Live as the MLLM provider. See ", _jsx(_components.a, {
                          href: "/en/ai/models/mllm/openai-gpt-live",
                          children: "OpenAI GPT-Live"
                        }), "."]
                      }), `
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-tts-vendor",
                          children: _jsx(_components.code, {
                            children: "tts.vendor"
                          })
                        }), " value ", _jsx(_components.code, {
                          children: "smallestai"
                        }), ": Use Smallest AI as the TTS provider. See ", _jsx(_components.a, {
                          href: "/en/ai/models/tts/smallest-ai",
                          children: "Smallest AI"
                        }), "."]
                      }), `
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-filler-words-content-generated-config-prompt",
                          children: _jsx(_components.code, {
                            children: "filler_words.content.generated_config.prompt"
                          })
                        }), ": A custom prompt fully replaces Agora's default prompt, and applies over the same conversation context window."]
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
            })
          })]
        })]
      }), _jsxs(Accordion, {
        title: "v2.12",
        id: "v212",
        headingLevel: 3,
        value: "v212",
        children: [_jsx(_components.p, {
          children: "Released on September 10, 2026."
        }), _jsx(_components.h4, {
          id: "new-features-1",
          children: "New features"
        }), _jsx(_components.p, {
          children: "Included in this release:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Call custom tools"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Agents can now call your own HTTPS endpoints as tools during a conversation. The LLM decides when to call a tool and generates its parameters from the conversation. The Conversational AI Engine then calls your endpoint and returns the result to the LLM to continue generating a response. Available in the Agora Agents SDKs and the RESTful API. For details, see ", _jsx(_components.a, {
                href: "build/tools/custom-tools",
                children: "Call custom tools"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Generated filler words"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Agents can now generate filler words from the current conversation instead of selecting them from a fixed phrase list. Agora hosts the generation service, so you don't need your own model, endpoint, or credentials. You can optionally keep a static phrase list as a fallback. Available in the Agora Agents SDKs and the RESTful API. For details, see ", _jsx(_components.a, {
                href: "build/shape-the-conversation/filler-words",
                children: "Talking while waiting"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Defer custom instructions"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Custom instructions now support an ", _jsx(_components.code, {
                children: "append"
              }), " action. Instead of interrupting the current interaction, the agent waits for the current turn to finish, then adds the instruction to the conversation and starts a new turn. Available in the Agora Agents SDKs and the RESTful API. For details, see ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/think",
                children: "Send custom instructions"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Client component support for direct speech and instruction injection"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["The ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/android",
                children: "Android"
              }), ", ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/ios",
                children: "iOS"
              }), ", and ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/web",
                children: "Web"
              }), " client toolkits add ", _jsx(_components.code, {
                children: "speak"
              }), " and ", _jsx(_components.code, {
                children: "think"
              }), " methods. Use ", _jsx(_components.code, {
                children: "speak"
              }), " to bypass the LLM and make the agent speak text directly, or ", _jsx(_components.code, {
                children: "think"
              }), " to inject text as user input for the LLM to process. Both methods send messages over RTM and support message priority, interruption behavior, and per-state Think actions."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "MCP tool-use for MLLM agents"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["MLLM agents now support MCP tool-use, in addition to cascading LLM agents. Available only in the RESTful API. For details, see ", _jsx(_components.a, {
                href: "build/tools/mcp-tools",
                children: "Use MCP tools"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New ASR provider"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/asr/gemini",
                  children: "Gemini"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "api-changes-1",
          children: "API changes"
        }), _jsxs(_components.p, {
          children: ["This release introduces the following changes for custom tool calling, generated filler words, MCP tool-use for MLLM agents, and the ", _jsx(_components.code, {
            children: "think"
          }), " API's ", _jsx(_components.code, {
            children: "append"
          }), " action."]
        }), _jsxs(Tabs, {
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
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/python#openai",
                  children: _jsx(_components.code, {
                    children: "OpenAI"
                  })
                }), " and other LLM vendor classes: New ", _jsx(_components.code, {
                  children: "tools"
                }), " parameter for custom tool definitions."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/python#other-builder-methods",
                  children: _jsx(_components.code, {
                    children: "with_tools()"
                  })
                }), ": Now also enables custom tools declared in ", _jsx(_components.code, {
                  children: "tools"
                }), ", in addition to MCP tools."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/python#type-aliases",
                  children: _jsx(_components.code, {
                    children: "FillerWordsConfig"
                  })
                }), ": New ", _jsx(_components.code, {
                  children: "generated"
                }), " content mode and ", _jsx(_components.code, {
                  children: "FillerWordsContentGeneratedConfig"
                }), " for generated filler words."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/python#thinktext",
                  children: _jsx(_components.code, {
                    children: "AgentSession.think()"
                  })
                }), ": ", _jsx(_components.code, {
                  children: "on_listening_action"
                }), ", ", _jsx(_components.code, {
                  children: "on_thinking_action"
                }), ", and ", _jsx(_components.code, {
                  children: "on_speaking_action"
                }), " accept the new value ", _jsx(_components.code, {
                  children: "append"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["New custom tool type aliases: ", _jsx(_components.code, {
                  children: "LlmToolConfig"
                }), ", ", _jsx(_components.code, {
                  children: "LlmToolFunctionConfig"
                }), ", ", _jsx(_components.code, {
                  children: "LlmToolFunctionParametersConfig"
                }), ", ", _jsx(_components.code, {
                  children: "LlmToolExecutionConfig"
                }), ", and ", _jsx(_components.code, {
                  children: "LlmToolServerConfig"
                }), "."]
              }), `
`]
            })
          }), _jsx(TabsContent, {
            value: "typescript",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/typescript#openai",
                  children: _jsx(_components.code, {
                    children: "OpenAI"
                  })
                }), " and other LLM vendor classes: New ", _jsx(_components.code, {
                  children: "tools"
                }), " option for custom tool definitions."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/typescript#other-builder-methods",
                  children: _jsx(_components.code, {
                    children: "withTools()"
                  })
                }), ": Now also enables custom tools declared in ", _jsx(_components.code, {
                  children: "tools"
                }), ", in addition to MCP tools."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/typescript#type-aliases",
                  children: _jsx(_components.code, {
                    children: "FillerWordsConfig"
                  })
                }), ": New ", _jsx(_components.code, {
                  children: "generated"
                }), " content mode and ", _jsx(_components.code, {
                  children: "FillerWordsContentGeneratedConfig"
                }), " for generated filler words."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/typescript#thinktext-options",
                  children: _jsx(_components.code, {
                    children: "AgentSession.think()"
                  })
                }), ": ", _jsx(_components.code, {
                  children: "on_listening_action"
                }), ", ", _jsx(_components.code, {
                  children: "on_thinking_action"
                }), ", and ", _jsx(_components.code, {
                  children: "on_speaking_action"
                }), " accept the new value ", _jsx(_components.code, {
                  children: "append"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["New custom tool type aliases: ", _jsx(_components.code, {
                  children: "LlmTool"
                }), ", ", _jsx(_components.code, {
                  children: "LlmToolFunction"
                }), ", ", _jsx(_components.code, {
                  children: "LlmToolServer"
                }), ", and ", _jsx(_components.code, {
                  children: "LlmToolExecution"
                }), "."]
              }), `
`]
            })
          }), _jsx(TabsContent, {
            value: "go",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/go#newopenai",
                  children: _jsx(_components.code, {
                    children: "NewOpenAI"
                  })
                }), " and other LLM vendor constructors: New ", _jsx(_components.code, {
                  children: "Tools"
                }), " field for custom tool definitions."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/go#other-builder-methods",
                  children: _jsx(_components.code, {
                    children: "WithTools()"
                  })
                }), ": Now also enables custom tools declared in ", _jsx(_components.code, {
                  children: "Tools"
                }), ", in addition to MCP tools."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/go#type-aliases",
                  children: _jsx(_components.code, {
                    children: "FillerWordsConfig"
                  })
                }), ": New ", _jsx(_components.code, {
                  children: "FillerWordsContentModeGenerated"
                }), " content mode and ", _jsx(_components.code, {
                  children: "FillerWordsContentGeneratedConfig"
                }), " for generated filler words."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/go#thinkctx",
                  children: _jsx(_components.code, {
                    children: "Think()"
                  })
                }), ": Each state action accepts the new value ", _jsx(_components.code, {
                  children: "append"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["New type aliases: ", _jsx(_components.code, {
                  children: "LlmTool"
                }), ", ", _jsx(_components.code, {
                  children: "LlmToolFunction"
                }), ", ", _jsx(_components.code, {
                  children: "LlmToolFunctionParameters"
                }), ", ", _jsx(_components.code, {
                  children: "LlmToolExecution"
                }), ", ", _jsx(_components.code, {
                  children: "LlmToolServer"
                }), ", ", _jsx(_components.code, {
                  children: "FillerWordsContentMode"
                }), ", and ", _jsx(_components.code, {
                  children: "FillerWordsContentGeneratedConfig"
                }), "."]
              }), `
`]
            })
          }), _jsx(TabsContent, {
            value: "rest-api",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Changes to ", _jsx(_components.a, {
                    href: "/en/api-reference/api-ref/conversational-ai/join",
                    children: _jsx(_components.strong, {
                      children: "Start a conversational AI agent"
                    })
                  })]
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: _jsx(_components.strong, {
                        children: "New parameters"
                      })
                    }), `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-tools",
                          children: _jsx(_components.code, {
                            children: "llm.tools"
                          })
                        }), ": Custom tool definitions the LLM can call. Requires ", _jsx(_components.code, {
                          children: "advanced_features.enable_tools"
                        }), "."]
                      }), `
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-filler-words-content-generated-config",
                          children: _jsx(_components.code, {
                            children: "filler_words.content.generated_config"
                          })
                        }), ": Prompt and fallback strategy for generated filler words. Used when ", _jsx(_components.code, {
                          children: "filler_words.content.mode"
                        }), " is ", _jsx(_components.code, {
                          children: "generated"
                        }), "."]
                      }), `
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-mcp-servers",
                          children: _jsx(_components.code, {
                            children: "mllm.mcp_servers"
                          })
                        }), ": MCP server connections for MLLM agents. Requires ", _jsx(_components.code, {
                          children: "advanced_features.enable_tools"
                        }), "."]
                      }), `
`]
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: _jsx(_components.strong, {
                        children: "Updated parameters"
                      })
                    }), `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-advanced-features-enable-tools",
                          children: _jsx(_components.code, {
                            children: "advanced_features.enable_tools"
                          })
                        }), ": Now also enables custom tools declared in ", _jsx(_components.code, {
                          children: "llm.tools"
                        }), " and MCP tools declared in ", _jsx(_components.code, {
                          children: "mllm.mcp_servers"
                        }), ", in addition to MCP tools configured in ", _jsx(_components.code, {
                          children: "llm.mcp_servers"
                        }), "."]
                      }), `
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-filler-words-content-mode",
                          children: _jsx(_components.code, {
                            children: "filler_words.content.mode"
                          })
                        }), " value ", _jsx(_components.code, {
                          children: "generated"
                        }), ": Generate a filler phrase from the current context, with an optional ", _jsx(_components.code, {
                          children: "filler_words.content.static_config"
                        }), " fallback."]
                      }), `
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-filler-words-content-static-config",
                          children: _jsx(_components.code, {
                            children: "filler_words.content.static_config"
                          })
                        }), ": Now a named sibling property of ", _jsx(_components.code, {
                          children: "content"
                        }), " instead of the ", _jsx(_components.code, {
                          children: '"{mode}_config"'
                        }), " key."]
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
                children: [`
`, _jsxs(_components.p, {
                  children: ["Changes to ", _jsx(_components.a, {
                    href: "/en/api-reference/api-ref/conversational-ai/think",
                    children: _jsx(_components.strong, {
                      children: "Send custom instructions"
                    })
                  })]
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: _jsx(_components.strong, {
                        children: "Updated parameters"
                      })
                    }), `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/think#request-body-properties-on-listening-action",
                          children: _jsx(_components.code, {
                            children: "on_listening_action"
                          })
                        }), ", ", _jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/think#request-body-properties-on-thinking-action",
                          children: _jsx(_components.code, {
                            children: "on_thinking_action"
                          })
                        }), ", and ", _jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/think#request-body-properties-on-speaking-action",
                          children: _jsx(_components.code, {
                            children: "on_speaking_action"
                          })
                        }), " value ", _jsx(_components.code, {
                          children: "append"
                        }), ": Don't interrupt the current interaction; append the instruction as a separate user message once the current turn's LLM output finishes."]
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
            })
          })]
        }), _jsx(_components.h4, {
          id: "toolkit-api",
          children: "Toolkit API"
        }), _jsxs(_components.p, {
          children: ["This release adds ", _jsx(_components.code, {
            children: "speak"
          }), " and ", _jsx(_components.code, {
            children: "think"
          }), " methods to the client toolkit, so you can bypass the LLM to play text directly or inject text as user input:"]
        }), _jsxs(Tabs, {
          defaultValue: "android",
          groupId: "ai-toolkit-platform",
          persist: true,
          children: [_jsxs(TabsList, {
            children: [_jsx(TabsTrigger, {
              value: "android",
              children: "Android"
            }), _jsx(TabsTrigger, {
              value: "ios",
              children: "iOS"
            }), _jsx(TabsTrigger, {
              value: "web",
              children: "Web"
            })]
          }), _jsx(TabsContent, {
            value: "android",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/android#speak",
                  children: _jsx(_components.code, {
                    children: "speak"
                  })
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/android#think",
                  children: _jsx(_components.code, {
                    children: "think"
                  })
                })
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "SpeakMessage"
                }), ", ", _jsx(_components.code, {
                  children: "ThinkMessage"
                }), ", ", _jsx(_components.code, {
                  children: "ThinkListeningAction"
                }), ", ", _jsx(_components.code, {
                  children: "ThinkThinkingAction"
                }), ", ", _jsx(_components.code, {
                  children: "ThinkSpeakingAction"
                })]
              }), `
`]
            })
          }), _jsx(TabsContent, {
            value: "ios",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#speak",
                  children: _jsx(_components.code, {
                    children: "speak"
                  })
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#think",
                  children: _jsx(_components.code, {
                    children: "think"
                  })
                })
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "SpeakMessage"
                }), ", ", _jsx(_components.code, {
                  children: "ThinkMessage"
                }), ", ", _jsx(_components.code, {
                  children: "ThinkListeningAction"
                }), ", ", _jsx(_components.code, {
                  children: "ThinkThinkingAction"
                }), ", ", _jsx(_components.code, {
                  children: "ThinkSpeakingAction"
                })]
              }), `
`]
            })
          }), _jsx(TabsContent, {
            value: "web",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/web#speak",
                  children: _jsx(_components.code, {
                    children: "speak"
                  })
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/web#think",
                  children: _jsx(_components.code, {
                    children: "think"
                  })
                })
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "SpeakMessage"
                }), ", ", _jsx(_components.code, {
                  children: "ThinkMessage"
                }), ", ", _jsx(_components.code, {
                  children: "EThinkListeningAction"
                }), ", ", _jsx(_components.code, {
                  children: "EThinkThinkingAction"
                }), ", ", _jsx(_components.code, {
                  children: "EThinkSpeakingAction"
                })]
              }), `
`]
            })
          })]
        }), _jsx(_components.h4, {
          id: "deprecation-notice",
          children: "Deprecation notice"
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Important"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "These changes may affect your existing integration. Review each change and update your integration as needed."
            })
          })]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsxs(_components.strong, {
              children: [_jsx(_components.code, {
                children: "asr.params"
              }), " becomes required for non-default ASR vendors in v2.13."]
            }), " Starting in v2.13, a request that sets ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-asr-vendor",
              children: _jsx(_components.code, {
                children: "asr.vendor"
              })
            }), " to a vendor other than ", _jsx(_components.code, {
              children: "ares"
            }), " and omits ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-asr-params",
              children: _jsx(_components.code, {
                children: "asr.params"
              })
            }), " fails. Configure ", _jsx(_components.code, {
              children: "asr.params"
            }), " for your vendor, or omit ", _jsx(_components.code, {
              children: "asr.vendor"
            }), " to keep the default ", _jsx(_components.code, {
              children: "ares"
            }), " vendor."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsxs(_components.strong, {
              children: ["Legacy ", _jsx(_components.code, {
                children: "turn_detection"
              }), " fields and the ", _jsx(_components.code, {
                children: "keywords"
              }), "/", _jsx(_components.code, {
                children: "disabled"
              }), " start-of-speech modes lose their support guarantee in a future release."]
            }), " Migrate to ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config",
              children: _jsx(_components.code, {
                children: "turn_detection.config"
              })
            }), " and ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-interruption",
              children: _jsx(_components.code, {
                children: "interruption"
              })
            }), ", introduced in v2.6."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsxs(_components.strong, {
              children: [_jsx(_components.code, {
                children: "advanced_features.enable_mllm"
              }), " loses its support guarantee in a future release."]
            }), " The MLLM switch may stop working. Migrate to ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-enable",
              children: _jsx(_components.code, {
                children: "mllm.enable"
              })
            }), ", introduced in v2.6."]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "v2.11",
        id: "v211",
        headingLevel: 3,
        value: "v211",
        children: [_jsx(_components.p, {
          children: "Released on August 11, 2026."
        }), _jsx(_components.h4, {
          id: "new-features-2",
          children: "New features"
        }), _jsx(_components.p, {
          children: "Included in this release:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "ASR keywords"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["You can now configure keywords to improve ARES's recognition accuracy for specific terms, such as brand names, product names, or industry jargon. Configure keywords using the ", _jsx(_components.code, {
                children: "AresSTT"
              }), " vendor in the Agora Agents SDKs, or the ", _jsx(_components.code, {
                children: "keywords"
              }), " parameter within the ", _jsx(_components.code, {
                children: "asr"
              }), " block directly through the RESTful API. For details, see ", _jsx(_components.a, {
                href: "build/shape-the-conversation/asr-keywords",
                children: "Improve ASR accuracy with keywords"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New TTS provider"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/tts/typecast",
                  children: "Typecast"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New MLLM provider"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/mllm/azure",
                  children: "Azure OpenAI Realtime API"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "improvements-1",
          children: "Improvements"
        }), _jsx(_components.p, {
          children: "This release includes the following enhancement."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Improved stability for long audio replies"
              })
            }), `
`, _jsx(_components.p, {
              children: "This release improves resource protection and error-recovery logic for long streaming audio replies, reducing the likelihood of an abnormal disconnect or failed recovery. As a result, service stability improves for long replies and free-form conversation scenarios."
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "api-changes-2",
          children: "API changes"
        }), _jsx(_components.p, {
          children: "This release introduces the following changes for ASR keywords and the new TTS and MLLM providers."
        }), _jsxs(Tabs, {
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
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/python#aresstt",
                  children: _jsx(_components.code, {
                    children: "AresSTT"
                  })
                }), ": New ", _jsx(_components.code, {
                  children: "keywords"
                }), " parameter."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/python#typecasttts",
                  children: _jsx(_components.code, {
                    children: "TypecastTTS"
                  })
                }), ": New TTS vendor class."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/python#azureopenairealtime",
                  children: _jsx(_components.code, {
                    children: "AzureOpenAIRealtime"
                  })
                }), ": New MLLM vendor class."]
              }), `
`]
            })
          }), _jsx(TabsContent, {
            value: "typescript",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/typescript#other-stt-vendors",
                  children: _jsx(_components.code, {
                    children: "AresSTT"
                  })
                }), ": New ", _jsx(_components.code, {
                  children: "keywords"
                }), " option."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/typescript#other-tts-vendors",
                  children: _jsx(_components.code, {
                    children: "TypecastTTS"
                  })
                }), ": New TTS vendor class."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/typescript#azureopenairealtime",
                  children: _jsx(_components.code, {
                    children: "AzureOpenAIRealtime"
                  })
                }), ": New MLLM vendor class."]
              }), `
`]
            })
          }), _jsx(TabsContent, {
            value: "go",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/go#newaresstt",
                  children: _jsx(_components.code, {
                    children: "NewAresSTT"
                  })
                }), ": New ", _jsx(_components.code, {
                  children: "Keywords"
                }), " field."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/go#newtypecasttts",
                  children: _jsx(_components.code, {
                    children: "NewTypecastTTS"
                  })
                }), ": New TTS vendor constructor."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/go#newazureopenairealtime",
                  children: _jsx(_components.code, {
                    children: "NewAzureOpenAIRealtime"
                  })
                }), ": New MLLM vendor constructor."]
              }), `
`]
            })
          }), _jsx(TabsContent, {
            value: "rest-api",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Changes to ", _jsx(_components.a, {
                    href: "/en/api-reference/api-ref/conversational-ai/join",
                    children: _jsx(_components.strong, {
                      children: "Start a conversational AI agent"
                    })
                  })]
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: _jsx(_components.strong, {
                        children: "New parameters"
                      })
                    }), `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-asr-keywords",
                          children: _jsx(_components.code, {
                            children: "asr.keywords"
                          })
                        }), ": ASR keywords used to improve recognition accuracy for specific terms. Only available when ", _jsx(_components.code, {
                          children: "asr.vendor"
                        }), " is not set or ", _jsx(_components.code, {
                          children: "ares"
                        }), "."]
                      }), `
`]
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: _jsx(_components.strong, {
                        children: "Updated parameters"
                      })
                    }), `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-tts-vendor",
                          children: _jsx(_components.code, {
                            children: "tts.vendor"
                          })
                        }), " value ", _jsx(_components.code, {
                          children: "typecast"
                        }), ": Use Typecast as the TTS provider. See ", _jsx(_components.a, {
                          href: "/en/ai/models/tts/typecast",
                          children: "Typecast"
                        }), "."]
                      }), `
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-vendor",
                          children: _jsx(_components.code, {
                            children: "mllm.vendor"
                          })
                        }), " value ", _jsx(_components.code, {
                          children: "azure"
                        }), ": Use Azure OpenAI Realtime API as the MLLM provider. See ", _jsx(_components.a, {
                          href: "/en/ai/models/mllm/azure",
                          children: "Azure OpenAI Realtime API"
                        }), "."]
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
            })
          })]
        })]
      }), _jsxs(Accordion, {
        title: "v2.10",
        id: "v210",
        headingLevel: 3,
        value: "v210",
        children: [_jsx(_components.p, {
          children: "Released on July 30, 2026."
        }), _jsx(_components.h4, {
          id: "new-features-3",
          children: "New features"
        }), _jsx(_components.p, {
          children: "Included in this release:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Connect custom TTS services using the OpenAI protocol"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["You can now use a self-built, privately deployed, or third-party TTS service that implements the OpenAI TTS protocol as your agent's speech synthesis module. Configure it using the ", _jsx(_components.code, {
                children: "GenericTTS"
              }), " vendor in the Agora Agents SDKs (Go and TypeScript v2.4.0 or later, Python v2.4.1 or later), or the ", _jsx(_components.code, {
                children: "generic_http"
              }), " TTS vendor directly through the RESTful API. For details, see ", _jsx(_components.a, {
                href: "/en/ai/build/custom-model-integration/custom-tts",
                children: "Connect your own TTS service"
              }), " and ", _jsx(_components.a, {
                href: "/en/ai/models/tts/generic-http",
                children: "Generic TTS"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Client toolkit support for manual turn control"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["The Android, iOS, and Web client toolkits now provide dedicated APIs for manual Start of Speech (SoS) and End of Speech (EoS) control, so you no longer need to construct raw Signaling (RTM) messages by hand. Call ", _jsx(_components.code, {
                children: "manualSOS"
              }), "/", _jsx(_components.code, {
                children: "manualEOS"
              }), " to send requests, and register the new result callbacks to handle the server's response. This capability is suitable for scenarios that require explicit control of the user turn boundary from the client side, such as AI interviews, interactive quizzes, and walkie-talkie apps. For details, see ", _jsx(_components.a, {
                href: "/en/ai/best-practices/manual-turn-control",
                children: "Manually control start and end of speech"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New TTS providers"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/tts/gradium",
                  children: "Gradium"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/tts/mistral",
                  children: "Mistral"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New Avatar provider"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/avatar/lemonslice",
                  children: "LemonSlice"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "toolkit-api-1",
          children: "Toolkit API"
        }), _jsx(_components.p, {
          children: "This release adds the following APIs to the client toolkit for manual turn control:"
        }), _jsxs(Tabs, {
          defaultValue: "android",
          groupId: "ai-toolkit-platform",
          persist: true,
          children: [_jsxs(TabsList, {
            children: [_jsx(TabsTrigger, {
              value: "android",
              children: "Android"
            }), _jsx(TabsTrigger, {
              value: "ios",
              children: "iOS"
            }), _jsx(TabsTrigger, {
              value: "web",
              children: "Web"
            })]
          }), _jsx(TabsContent, {
            value: "android",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/android#manualsos",
                  children: _jsx(_components.code, {
                    children: "manualSOS"
                  })
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/android#manualeos",
                  children: _jsx(_components.code, {
                    children: "manualEOS"
                  })
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/android#onusermanualsosevent",
                  children: _jsx(_components.code, {
                    children: "onUserManualSosEvent"
                  })
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/android#onusermanualeosevent",
                  children: _jsx(_components.code, {
                    children: "onUserManualEosEvent"
                  })
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/android#onagentmanualeosevent",
                  children: _jsx(_components.code, {
                    children: "onAgentManualEosEvent"
                  })
                })
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "UserManualEventPayload"
                }), ", ", _jsx(_components.code, {
                  children: "UserManualSosEvent"
                }), ", ", _jsx(_components.code, {
                  children: "UserManualEosEvent"
                }), ", ", _jsx(_components.code, {
                  children: "AgentManualEosPayload"
                }), ", ", _jsx(_components.code, {
                  children: "AgentManualEosEvent"
                })]
              }), `
`]
            })
          }), _jsx(TabsContent, {
            value: "ios",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#manualsos",
                  children: _jsx(_components.code, {
                    children: "manualSOS"
                  })
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#manualeos",
                  children: _jsx(_components.code, {
                    children: "manualEOS"
                  })
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#onusermanualsosevent",
                  children: _jsx(_components.code, {
                    children: "onUserManualSosEvent"
                  })
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#onusermanualeosevent",
                  children: _jsx(_components.code, {
                    children: "onUserManualEosEvent"
                  })
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#onagentmanualeosevent",
                  children: _jsx(_components.code, {
                    children: "onAgentManualEosEvent"
                  })
                })
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "UserManualEventPayload"
                }), ", ", _jsx(_components.code, {
                  children: "UserManualSosEvent"
                }), ", ", _jsx(_components.code, {
                  children: "UserManualEosEvent"
                }), ", ", _jsx(_components.code, {
                  children: "AgentManualEosPayload"
                }), ", ", _jsx(_components.code, {
                  children: "AgentManualEosEvent"
                })]
              }), `
`]
            })
          }), _jsx(TabsContent, {
            value: "web",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/web#manualsos",
                  children: _jsx(_components.code, {
                    children: "manualSOS"
                  })
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/web#manualeos",
                  children: _jsx(_components.code, {
                    children: "manualEOS"
                  })
                })
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/web#econversationalaiapievents",
                  children: _jsx(_components.code, {
                    children: "EConversationalAIAPIEvents"
                  })
                }), " values ", _jsx(_components.code, {
                  children: "USER_MANUAL_SOS_RESULT"
                }), ", ", _jsx(_components.code, {
                  children: "USER_MANUAL_EOS_RESULT"
                }), ", and ", _jsx(_components.code, {
                  children: "AGENT_MANUAL_EOS_RESULT"
                })]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "TUserManualEventPayload"
                }), ", ", _jsx(_components.code, {
                  children: "TUserManualSosEvent"
                }), ", ", _jsx(_components.code, {
                  children: "TUserManualEosEvent"
                }), ", ", _jsx(_components.code, {
                  children: "TAgentManualEosPayload"
                }), ", ", _jsx(_components.code, {
                  children: "TAgentManualEosEvent"
                })]
              }), `
`]
            })
          })]
        }), _jsx(_components.h4, {
          id: "api-changes-3",
          children: "API changes"
        }), _jsx(_components.p, {
          children: "This release introduces the following changes for connecting TTS services."
        }), _jsxs(Tabs, {
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
          }), _jsxs(TabsContent, {
            value: "python",
            children: [_jsx(_components.p, {
              children: "This release adds the following TTS vendor classes:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/python#generictts",
                  children: _jsx(_components.code, {
                    children: "GenericTTS"
                  })
                }), ": Connect a custom TTS service using the OpenAI TTS protocol."]
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/python#gradiumtts",
                  children: _jsx(_components.code, {
                    children: "GradiumTTS"
                  })
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/python#mistraltts",
                  children: _jsx(_components.code, {
                    children: "MistralTTS"
                  })
                })
              }), `
`]
            })]
          }), _jsxs(TabsContent, {
            value: "typescript",
            children: [_jsx(_components.p, {
              children: "This release adds the following TTS vendor classes:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/typescript#generictts",
                  children: _jsx(_components.code, {
                    children: "GenericTTS"
                  })
                }), ": Connect a custom TTS service using the OpenAI TTS protocol."]
              }), `
`, _jsx(_components.li, {
                children: _jsxs(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/typescript#other-tts-vendors",
                  children: [_jsx(_components.code, {
                    children: "GradiumTTS"
                  }), " and ", _jsx(_components.code, {
                    children: "MistralTTS"
                  })]
                })
              }), `
`]
            })]
          }), _jsxs(TabsContent, {
            value: "go",
            children: [_jsx(_components.p, {
              children: "This release adds the following TTS vendor constructors:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/go#newgenerictts",
                  children: _jsx(_components.code, {
                    children: "NewGenericTTS"
                  })
                }), ": Connect a custom TTS service using the OpenAI TTS protocol."]
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/go#newgradiumtts",
                  children: _jsx(_components.code, {
                    children: "NewGradiumTTS"
                  })
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/server-sdk/go#newmistraltts",
                  children: _jsx(_components.code, {
                    children: "NewMistralTTS"
                  })
                })
              }), `
`]
            })]
          }), _jsx(TabsContent, {
            value: "rest-api",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Changes to ", _jsx(_components.a, {
                    href: "/en/api-reference/api-ref/conversational-ai/join",
                    children: _jsx(_components.strong, {
                      children: "Start a conversational AI agent"
                    })
                  })]
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: _jsx(_components.strong, {
                        children: "New parameters"
                      })
                    }), `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-tts-url",
                          children: _jsx(_components.code, {
                            children: "tts.url"
                          })
                        }), ": The OpenAI TTS protocol compatible service endpoint. Required only when ", _jsx(_components.code, {
                          children: "tts.vendor"
                        }), " is ", _jsx(_components.code, {
                          children: "generic_http"
                        }), "."]
                      }), `
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-tts-headers",
                          children: _jsx(_components.code, {
                            children: "tts.headers"
                          })
                        }), ": Custom request headers to include in requests to the TTS service. Required only when ", _jsx(_components.code, {
                          children: "tts.vendor"
                        }), " is ", _jsx(_components.code, {
                          children: "generic_http"
                        }), "."]
                      }), `
`]
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: _jsx(_components.strong, {
                        children: "Updated parameters"
                      })
                    }), `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-tts-vendor",
                          children: _jsx(_components.code, {
                            children: "tts.vendor"
                          })
                        }), " value ", _jsx(_components.code, {
                          children: "generic_http"
                        }), ": Integrate a custom TTS service using the OpenAI TTS protocol. See ", _jsx(_components.a, {
                          href: "/en/ai/models/tts/generic-http",
                          children: "Generic TTS"
                        }), "."]
                      }), `
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-tts-vendor",
                          children: _jsx(_components.code, {
                            children: "tts.vendor"
                          })
                        }), " value ", _jsx(_components.code, {
                          children: "gradium"
                        }), ": Use Gradium as the TTS provider. See ", _jsx(_components.a, {
                          href: "/en/ai/models/tts/gradium",
                          children: "Gradium"
                        }), "."]
                      }), `
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-tts-vendor",
                          children: _jsx(_components.code, {
                            children: "tts.vendor"
                          })
                        }), " value ", _jsx(_components.code, {
                          children: "mistral"
                        }), ": Use Mistral as the TTS provider. See ", _jsx(_components.a, {
                          href: "/en/ai/models/tts/mistral",
                          children: "Mistral"
                        }), "."]
                      }), `
`, _jsxs(_components.li, {
                        children: [_jsx(_components.a, {
                          href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-tts-params",
                          children: _jsx(_components.code, {
                            children: "tts.params"
                          })
                        }), ": Now required when ", _jsx(_components.code, {
                          children: "tts.vendor"
                        }), " is ", _jsx(_components.code, {
                          children: "generic_http"
                        }), "."]
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
            })
          })]
        })]
      }), _jsxs(Accordion, {
        title: "v2.9",
        id: "v29",
        headingLevel: 3,
        value: "v29",
        children: [_jsx(_components.p, {
          children: "Released on July 1, 2026."
        }), _jsx(_components.h4, {
          id: "new-features-4",
          children: "New features"
        }), _jsx(_components.p, {
          children: "Included in this release:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Manual turn control"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["You can now explicitly control when a user's speech starts and ends by sending manual Start of Speech (SoS) and End of Speech (EoS) requests over Signaling (RTM), instead of relying on automatic detection. This supports scenarios with strict turn-boundary requirements, such as AI interviews, interactive quizzes, or push-to-talk. Set ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config-start-of-speech-mode",
                children: _jsx(_components.code, {
                  children: "start_of_speech.mode"
                })
              }), " and ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config-end-of-speech-mode",
                children: _jsx(_components.code, {
                  children: "end_of_speech.mode"
                })
              }), " to ", _jsx(_components.code, {
                children: "manual"
              }), " when starting the agent. For details, see ", _jsx(_components.a, {
                href: "/en/ai/best-practices/manual-turn-control",
                children: "Manually control start and end of speech"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Agent state notifications over RTM Message"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["You can now track agent state changes in real time using Signaling (RTM) Message events. The agent pushes ", _jsx(_components.code, {
                children: "state.listening"
              }), ", ", _jsx(_components.code, {
                children: "state.thinking"
              }), ", and ", _jsx(_components.code, {
                children: "state.speaking"
              }), " events as individual RTM messages, making it easier to record state change timestamps, process events sequentially, or consume state events alongside other RTM Message events. For details, see ", _jsx(_components.a, {
                href: "/en/ai/best-practices/get-agent-state",
                children: "Get agent state"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Pre-recorded greeting audio"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["You can now play a pre-recorded audio file as the agent's greeting instead of synthesizing it with TTS. Set ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-greeting-audio-url",
                children: _jsx(_components.code, {
                  children: "properties.llm.greeting_audio_url"
                })
              }), " to the URL of an ", _jsx(_components.code, {
                children: "mp3"
              }), ", ", _jsx(_components.code, {
                children: "wav"
              }), ", or ", _jsx(_components.code, {
                children: "pcm"
              }), " file when starting the agent. If the audio fails to download, decode, or is in an unsupported format, the agent automatically falls back to TTS synthesis using ", _jsx(_components.code, {
                children: "greeting_message"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Managed mode"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["You can now use supported ASR, LLM, and TTS providers with Agora-managed credentials, without supplying your own API keys. Set ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-asr-credential-mode",
                children: _jsx(_components.code, {
                  children: "credential_mode"
                })
              }), " to ", _jsx(_components.code, {
                children: '"managed"'
              }), " within the ", _jsx(_components.code, {
                children: "asr"
              }), ", ", _jsx(_components.code, {
                children: "llm"
              }), ", or ", _jsx(_components.code, {
                children: "tts"
              }), " block when starting an agent. Managed mode replaces the deprecated ", _jsx(_components.code, {
                children: "preset"
              }), " parameter. For details, see ", _jsx(_components.a, {
                href: "/en/ai/build/managed-mode",
                children: "Use managed mode"
              }), "."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "improvements-2",
          children: "Improvements"
        }), _jsx(_components.p, {
          children: "This release includes the following enhancements."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Speech captured during an uninterruptible greeting"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["When ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-greeting-configs-interruptable",
                children: _jsx(_components.code, {
                  children: "properties.llm.greeting_configs.interruptable"
                })
              }), " is set to ", _jsx(_components.code, {
                children: "false"
              }), ", the agent now silently collects the user's ASR results while the greeting plays. After the greeting ends, the system concatenates the collected speech segments into a single user message and sends it to the LLM for a unified response, instead of discarding speech that occurs during playback."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "api-changes-4",
          children: "API changes"
        }), _jsx(_components.p, {
          children: "This release introduces the following changes to the RESTful API."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Changes to ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: _jsx(_components.strong, {
                  children: "Start a conversational AI agent"
                })
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New parameters"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-greeting-audio-url",
                      children: _jsx(_components.code, {
                        children: "properties.llm.greeting_audio_url"
                      })
                    }), ": The URL of a pre-recorded audio file (", _jsx(_components.code, {
                      children: "mp3"
                    }), ", ", _jsx(_components.code, {
                      children: "wav"
                    }), ", or ", _jsx(_components.code, {
                      children: "pcm"
                    }), ") to play as the agent's greeting instead of synthesizing it with TTS."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-greeting-configs-audio-download-timeout-ms",
                      children: _jsx(_components.code, {
                        children: "properties.llm.greeting_configs.audio_download_timeout_ms"
                      })
                    }), ": The timeout in milliseconds for downloading the greeting audio file. Defaults to ", _jsx(_components.code, {
                      children: "1000"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-greeting-configs-audio-pcm-sample-rate",
                      children: _jsx(_components.code, {
                        children: "properties.llm.greeting_configs.audio_pcm_sample_rate"
                      })
                    }), ": The sample rate in Hz of the greeting audio file when the format is PCM. Defaults to ", _jsx(_components.code, {
                      children: "16000"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-asr-credential-mode",
                      children: _jsx(_components.code, {
                        children: "properties.asr.credential_mode"
                      })
                    }), ", ", _jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-credential-mode",
                      children: _jsx(_components.code, {
                        children: "properties.llm.credential_mode"
                      })
                    }), ", and ", _jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-tts-credential-mode",
                      children: _jsx(_components.code, {
                        children: "properties.tts.credential_mode"
                      })
                    }), ": Set to ", _jsx(_components.code, {
                      children: '"managed"'
                    }), " to use Agora-managed credentials for the provider without supplying your own API key."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "Updated parameters"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config-start-of-speech-mode",
                      children: _jsx(_components.code, {
                        children: "properties.turn_detection.config.start_of_speech.mode"
                      })
                    }), ": Now accepts ", _jsx(_components.code, {
                      children: "manual"
                    }), ", which disables automatic start-of-speech detection so the client can explicitly signal the start of user speech over RTM."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config-end-of-speech-mode",
                      children: _jsx(_components.code, {
                        children: "properties.turn_detection.config.end_of_speech.mode"
                      })
                    }), ": Now accepts ", _jsx(_components.code, {
                      children: "manual"
                    }), ", which disables automatic end-of-speech detection so the client can explicitly signal the end of user speech over RTM."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-greeting-message",
                      children: _jsx(_components.code, {
                        children: "properties.llm.greeting_message"
                      })
                    }), ": In addition to serving as a standalone greeting, this field is now required as a fallback when ", _jsx(_components.code, {
                      children: "greeting_audio_url"
                    }), " is configured, and is used to maintain conversation context when an audio greeting is interrupted."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "Deprecated parameters"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#preset",
                      children: _jsx(_components.code, {
                        children: "preset"
                      })
                    }), ": Deprecated in favor of setting ", _jsx(_components.code, {
                      children: "credential_mode"
                    }), " to ", _jsx(_components.code, {
                      children: '"managed"'
                    }), " within the ", _jsx(_components.code, {
                      children: "asr"
                    }), ", ", _jsx(_components.code, {
                      children: "llm"
                    }), ", or ", _jsx(_components.code, {
                      children: "tts"
                    }), " block. See ", _jsx(_components.a, {
                      href: "/en/ai/build/managed-mode",
                      children: "Use managed mode"
                    }), "."]
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
            children: [`
`, _jsxs(_components.p, {
              children: ["Changes to ", _jsx(_components.a, {
                href: "/en/ai/reference/event-types",
                children: _jsx(_components.strong, {
                  children: "Notification event types"
                })
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "Updated events"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/ai/reference/event-types#110-agent-error",
                      children: _jsx(_components.code, {
                        children: "110 agent error"
                      })
                    }), ": Now reports greeting audio URL errors when the greeting audio file fails to download, times out, is in an unsupported format, or fails to decode. The agent automatically falls back to TTS synthesis using ", _jsx(_components.code, {
                      children: "greeting_message"
                    }), ". When ", _jsx(_components.code, {
                      children: "parameters.enable_error_message"
                    }), " is ", _jsx(_components.code, {
                      children: "true"
                    }), ", these errors are also delivered to the client via the ", _jsx(_components.code, {
                      children: "onMessageError"
                    }), " RTM callback."]
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
        })]
      }), _jsxs(Accordion, {
        title: "v2.8",
        id: "v28",
        headingLevel: 3,
        value: "v28",
        children: [_jsx(_components.p, {
          children: "Released on June 11, 2026."
        }), _jsx(_components.h4, {
          id: "new-features-5",
          children: "New features"
        }), _jsx(_components.p, {
          children: "Included in this release:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Session data retention control"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["By default, session interaction text and audio are temporarily retained for the minimum necessary period to support service operation, agent optimization, and troubleshooting. To disable data retention for a session, set ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-parameters-opt-out",
                children: _jsx(_components.code, {
                  children: "properties.parameters.opt_out"
                })
              }), " to ", _jsx(_components.code, {
                children: "true"
              }), " when starting an agent."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "RTC token expiry warning"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["A new ", _jsx(_components.a, {
                href: "reference/event-types#104-agent-expire",
                children: _jsx(_components.code, {
                  children: "104 agent expire"
                })
              }), " event is triggered when the agent's RTC token is about to expire. Upon receiving this event, call the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/update",
                children: "Update agent"
              }), " API with a new token to refresh it. The agent does not exit the channel or interrupt the session when this event is triggered."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New ASR provider"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/asr/xai",
                  children: "xAI"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New LLM provider"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/llm/xai",
                  children: "xAI Grok"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New TTS provider"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/tts/xai",
                  children: "xAI"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "improvements-3",
          children: "Improvements"
        }), _jsx(_components.p, {
          children: "This release includes the following enhancements."
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Important"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "These changes may affect your existing integration. Review each change and update your integration as needed."
            })
          })]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Idle timeout behavior change"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Setting ", _jsx(_components.code, {
                children: "properties.idle_timeout"
              }), " to ", _jsx(_components.code, {
                children: "0"
              }), " no longer means the agent runs indefinitely. From this release, ", _jsx(_components.code, {
                children: "0"
              }), " only disables the channel idle timeout. Regardless of the ", _jsx(_components.code, {
                children: "idle_timeout"
              }), " value, the maximum running time for a single session is 72 hours, after which the agent automatically exits."]
            }), `
`, _jsxs(_components.p, {
              children: ["If your integration previously relied on ", _jsx(_components.code, {
                children: "idle_timeout = 0"
              }), " to keep an agent running until manually stopped, update your task scheduling and lifecycle management logic to account for the 72-hour limit."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "api-changes-5",
          children: "API changes"
        }), _jsx(_components.p, {
          children: "This release introduces the following changes to the RESTful API."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Changes to ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: _jsx(_components.strong, {
                  children: "Start a conversational AI agent"
                })
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New parameters"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-parameters-opt-out",
                      children: _jsx(_components.code, {
                        children: "properties.parameters.opt_out"
                      })
                    }), ": Set to ", _jsx(_components.code, {
                      children: "true"
                    }), " to disable data retention for the current session."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "Updated parameters"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-idle-timeout",
                      children: _jsx(_components.code, {
                        children: "properties.idle_timeout"
                      })
                    }), ": Valid range is now ", _jsx(_components.code, {
                      children: "0"
                    }), " to ", _jsx(_components.code, {
                      children: "259200"
                    }), " seconds (72 hours). Regardless of the value set, the maximum running time for a single session is 72 hours."]
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
            children: [`
`, _jsxs(_components.p, {
              children: ["Changes to ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/history",
                children: _jsx(_components.strong, {
                  children: "Retrieve agent history"
                })
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New response fields"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/history#contents-speech-start-ms",
                      children: _jsx(_components.code, {
                        children: "contents[].speech_start_ms"
                      })
                    }), ": Unix timestamp in milliseconds indicating when the user started speaking or the agent started TTS playback. Only returned when ", _jsx(_components.code, {
                      children: "llm.vendor"
                    }), " is ", _jsx(_components.code, {
                      children: "custom"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/history#contents-speech-end-ms",
                      children: _jsx(_components.code, {
                        children: "contents[].speech_end_ms"
                      })
                    }), ": Unix timestamp in milliseconds indicating when the user stopped speaking, or when TTS playback completed or was interrupted. Only returned when ", _jsx(_components.code, {
                      children: "llm.vendor"
                    }), " is ", _jsx(_components.code, {
                      children: "custom"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/history#contents-speech-algorithmic-delay",
                      children: _jsx(_components.code, {
                        children: "contents[].speech_algorithmic_delay"
                      })
                    }), ": The total delay in milliseconds introduced by audio processing algorithms after audio is captured from the user's microphone. Only returned when ", _jsx(_components.code, {
                      children: "llm.vendor"
                    }), " is ", _jsx(_components.code, {
                      children: "custom"
                    }), ", ", _jsx(_components.code, {
                      children: "contents[].role"
                    }), " is ", _jsx(_components.code, {
                      children: "user"
                    }), ", and actual voice input is present."]
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
            children: [`
`, _jsxs(_components.p, {
              children: ["Changes to ", _jsx(_components.a, {
                href: "reference/event-types",
                children: _jsx(_components.strong, {
                  children: "Notification event types"
                })
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New events"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "reference/event-types#104-agent-expire",
                      children: _jsx(_components.code, {
                        children: "104 agent expire"
                      })
                    }), ": Triggered when the agent's RTC token is about to expire. Call the Update agent API with a new token upon receiving this event."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "Updated events"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "reference/event-types#102-agent-left",
                      children: _jsx(_components.code, {
                        children: "102 agent left"
                      })
                    }), ": Added ", _jsx(_components.code, {
                      children: "Task lifetime limit exceeded"
                    }), " as a new exit reason when the 72-hour session limit is reached."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "reference/event-types#103-agent-history",
                      children: _jsx(_components.code, {
                        children: "103 agent history"
                      })
                    }), ": Added ", _jsx(_components.code, {
                      children: "contents[].speech_start_ms"
                    }), ", ", _jsx(_components.code, {
                      children: "contents[].speech_end_ms"
                    }), ", and ", _jsx(_components.code, {
                      children: "contents[].speech_algorithmic_delay"
                    }), ". Only returned when ", _jsx(_components.code, {
                      children: "llm.vendor"
                    }), " is ", _jsx(_components.code, {
                      children: "custom"
                    }), "."]
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
            children: [`
`, _jsxs(_components.p, {
              children: ["Changes to ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/list",
                children: _jsx(_components.strong, {
                  children: "Retrieve a list of agents"
                })
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "Updated parameters"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "state"
                    }), ": Now accepts a comma-separated list of values to filter by multiple agent states in a single request. For example, ", _jsx(_components.code, {
                      children: "state=0,1,2"
                    }), "."]
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
        })]
      }), _jsxs(Accordion, {
        title: "v2.7",
        id: "v27",
        headingLevel: 3,
        value: "v27",
        children: [_jsx(_components.p, {
          children: "Released on May 20, 2026."
        }), _jsx(_components.h4, {
          id: "new-features-6",
          children: "New features"
        }), _jsx(_components.p, {
          children: "Included in this release:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New MLLM provider"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/mllm/xai",
                  children: "xAI Grok"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New Avatar providers"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/avatar/generic",
                  children: "Generic avatar (Beta)"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Greeting interruption control"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["The ", _jsx(_components.code, {
                children: "properties.llm.greeting_configs"
              }), " object in the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              }), " API now supports an ", _jsx(_components.code, {
                children: "interruptable"
              }), " parameter, which controls whether user speech can interrupt a greeting during playback."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "improvements-4",
          children: "Improvements"
        }), _jsx(_components.p, {
          children: "This release includes the following enhancements:"
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Important"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "These changes may affect your existing integration. Review each change and update your integration as needed."
            })
          })]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Response status codes updated"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This release adjusts the HTTP response status codes and ", _jsx(_components.code, {
                children: "reason"
              }), " values returned by the RESTful API. New status codes ", _jsx(_components.code, {
                children: "401"
              }), ", ", _jsx(_components.code, {
                children: "429"
              }), ", and ", _jsx(_components.code, {
                children: "500"
              }), " are added. New ", _jsx(_components.code, {
                children: "reason"
              }), " values ", _jsx(_components.code, {
                children: "ServiceNotEnabled"
              }), ", ", _jsx(_components.code, {
                children: "AccountSuspended"
              }), ", and ", _jsx(_components.code, {
                children: "ResourceAllocationFailed"
              }), " are introduced. The existing ", _jsx(_components.code, {
                children: "InvalidRequest"
              }), " reason is replaced by ", _jsx(_components.code, {
                children: "InvalidRequestBody"
              }), ", ", _jsx(_components.code, {
                children: "MissingRequiredField"
              }), ", and ", _jsx(_components.code, {
                children: "InvalidFieldValue"
              }), ". For details, see ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/status-codes",
                children: "Status codes and error messages"
              }), "."]
            }), `
`, _jsxs(_components.p, {
              children: ["If your integration relies on ", _jsx(_components.code, {
                children: "reason"
              }), " values for error handling, retry logic, or alerting, update your logic to handle the new values accordingly."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Query conversation turns API now returns paginated results"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["The ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/turns",
                children: "Query conversation turn information"
              }), " API no longer returns all turns in a single response. Results are now paginated, defaulting to page 1 with up to 50 turns per page."]
            }), `
`, _jsxs(_components.p, {
              children: ["This affects sessions with more than 50 conversation turns. Update your integration to handle the new ", _jsx(_components.code, {
                children: "total_turn_count"
              }), " and ", _jsx(_components.code, {
                children: "pagination"
              }), " fields in the response, and retrieve subsequent pages as needed."]
            }), `
`, _jsxs(_components.p, {
              children: ["This release also adds the ", _jsx(_components.a, {
                href: "reference/event-types#112-turns-finished",
                children: "112 turns finished"
              }), " notification event, which delivers conversation turn data in batches after a session ends as an alternative way to retrieve turn data."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsxs(_components.strong, {
                children: [_jsx(_components.code, {
                  children: "on_listening_action"
                }), " default behavior change"]
              })
            }), `
`, _jsxs(_components.p, {
              children: ["The default value of ", _jsx(_components.code, {
                children: "on_listening_action"
              }), " in the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/think",
                children: "Send a custom instruction"
              }), " API has changed from ", _jsx(_components.code, {
                children: "inject"
              }), " to ", _jsx(_components.code, {
                children: "interrupt"
              }), ". When set to ", _jsx(_components.code, {
                children: "interrupt"
              }), ", the API immediately interrupts the current flow and initiates a new round of dialogue. If you rely on the previous default behavior, explicitly set ", _jsx(_components.code, {
                children: "on_listening_action"
              }), " to ", _jsx(_components.code, {
                children: "inject"
              }), " in your requests."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "api-changes-6",
          children: "API changes"
        }), _jsx(_components.p, {
          children: "This release introduces the following changes to the RESTful API."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Changes to ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: _jsx(_components.strong, {
                  children: "Start a conversational AI agent"
                })
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New parameters"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-greeting-configs-interruptable",
                      children: _jsx(_components.code, {
                        children: "properties.llm.greeting_configs.interruptable"
                      })
                    }), ": Controls whether user speech can interrupt a greeting during playback."]
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
            children: [`
`, _jsxs(_components.p, {
              children: ["Changes to ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/turns",
                children: _jsx(_components.strong, {
                  children: "Query conversation turn information"
                })
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New query parameters"
                  })
                }), `
`, _jsxs(_components.p, {
                  children: ["Adds ", _jsx(_components.code, {
                    children: "page_index"
                  }), " and ", _jsx(_components.code, {
                    children: "page_size"
                  }), " fields to ", _jsx(_components.a, {
                    href: "/en/api-reference/api-ref/conversational-ai/turns#query-parameters",
                    children: "query parameters"
                  }), "."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New response parameters"
                  })
                }), `
`, _jsxs(_components.p, {
                  children: ["The ", _jsx(_components.a, {
                    href: "/en/api-reference/api-ref/conversational-ai/turns#response",
                    children: "response"
                  }), " now includes additional top-level fields:"]
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "agent_id"
                    }), ": The unique identifier of the agent."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "name"
                    }), ": The name of the agent."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "channel"
                    }), ": The name of the RTC channel the agent joined."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "total_turn_count"
                    }), ": The total number of dialogue turns in the session."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "pagination"
                    }), ": Pagination details for the response, including ", _jsx(_components.code, {
                      children: "page_index"
                    }), ", ", _jsx(_components.code, {
                      children: "total_pages"
                    }), ", and ", _jsx(_components.code, {
                      children: "is_last_page"
                    }), "."]
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
            children: [`
`, _jsxs(_components.p, {
              children: ["Changes to ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/think",
                children: _jsx(_components.strong, {
                  children: "Send a custom instruction"
                })
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "Behavior changes"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/think#on-listening-action",
                      children: _jsx(_components.code, {
                        children: "on_listening_action"
                      })
                    }), ": The default value has changed from ", _jsx(_components.code, {
                      children: "inject"
                    }), " to ", _jsx(_components.code, {
                      children: "interrupt"
                    }), ". When set to ", _jsx(_components.code, {
                      children: "interrupt"
                    }), ", the API immediately interrupts the current flow and initiates a new round of dialogue."]
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
            children: [`
`, _jsxs(_components.p, {
              children: ["Changes to ", _jsx(_components.a, {
                href: "reference/event-types",
                children: _jsx(_components.strong, {
                  children: "Notification event types"
                })
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New events"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "112 turns finished"
                    }), ": Triggered after a session ends, delivering conversation turn data in batches for post-session analysis and processing."]
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
        })]
      }), _jsxs(Accordion, {
        title: "v2.6",
        id: "v26",
        headingLevel: 3,
        value: "v26",
        children: [_jsx(_components.p, {
          children: "Released on April 22, 2026."
        }), _jsx(_components.h4, {
          id: "new-features-7",
          children: "New features"
        }), _jsx(_components.p, {
          children: "Included in this release:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New TTS provider"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/tts/deepgram",
                  children: "Deepgram"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New endpoint: Send a custom instruction"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Adds a new endpoint to inject a custom text instruction into the agent's current conversation pipeline. The instruction is processed as user input, enabling scenarios such as implicit instruction injection, client-side event triggering, and voice and text collaboration. For details, see ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/think",
                children: "Send a custom instruction"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "MLLM turn detection refactoring"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Introduces a new ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-turn-detection",
                children: _jsx(_components.code, {
                  children: "mllm.turn_detection"
                })
              }), " object for configuring turn detection when using MLLM. When defined, this overrides the top-level ", _jsx(_components.code, {
                children: "turn_detection"
              }), " object. Supported modes vary by vendor:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["OpenAI Realtime API: ", _jsx(_components.code, {
                  children: "agora_vad"
                }), ", ", _jsx(_components.code, {
                  children: "server_vad"
                }), ", ", _jsx(_components.code, {
                  children: "semantic_vad"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Google Gemini Live: ", _jsx(_components.code, {
                  children: "agora_vad"
                }), ", ", _jsx(_components.code, {
                  children: "server_vad"
                })]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Interruption control"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Adds a new top-level ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-interruption",
                children: _jsx(_components.code, {
                  children: "interruption"
                })
              }), " object for unified management of agent interruption behavior. Supports ", _jsx(_components.code, {
                children: "start_of_speech"
              }), " and ", _jsx(_components.code, {
                children: "keywords"
              }), " trigger modes, and configurable handling strategies when interruption is disabled."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "improvements-5",
          children: "Improvements"
        }), _jsx(_components.p, {
          children: "This release includes the following enhancements:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New agent state callbacks"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Adds three callbacks to the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/android#onagentlisteningchanged",
                children: "Android"
              }), ", ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#onagentlisteningchanged",
                children: "iOS"
              }), ", and ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/web#econversationalaiapievents",
                children: "web"
              }), " Toolkit event handler interface:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "onAgentListeningChanged"
                }), ": Listen for changes in the agent's listening state to monitor when the agent starts or stops listening to user input."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "onAgentThinkingChanged"
                }), ": Listen for changes in the agent's thinking state to monitor when the agent starts or stops processing a request."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "onAgentSpeakingChanged"
                }), ": Listen for changes in the agent's speaking state to monitor when the agent starts or stops playing back speech."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsxs(_components.strong, {
                children: ["Added ", _jsx(_components.code, {
                  children: "name"
                }), " field to all ", _jsx(_components.a, {
                  href: "reference/event-types",
                  children: "NCS event"
                }), " payloads"]
              })
            }), `
`, _jsx(_components.p, {
              children: "Returns the agent name provided when starting the agent."
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "api-changes-7",
          children: "API changes"
        }), _jsx(_components.p, {
          children: "This release introduces the following changes to the RESTful API."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New endpoint"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/think",
                  children: "Send a custom instruction"
                }), ": ", _jsx(_components.code, {
                  children: "POST /v2/projects/{appid}/agents/{agentId}/think"
                })]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Changes to ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: _jsx(_components.strong, {
                  children: "Start a conversational AI agent"
                })
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New parameters"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-interruption",
                      children: _jsx(_components.code, {
                        children: "interruption"
                      })
                    }), ": Unified interruption control configuration. Supports ", _jsx(_components.code, {
                      children: "start_of_speech"
                    }), " and ", _jsx(_components.code, {
                      children: "keywords"
                    }), " trigger modes, and configurable handling strategies when interruption is disabled."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-greeting-configs-delay-ms",
                      children: _jsx(_components.code, {
                        children: "greeting_configs.delay_ms"
                      })
                    }), ": Specifies the delay in milliseconds before the agent plays the greeting message after the user joins the channel."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-headers",
                      children: _jsx(_components.code, {
                        children: "llm.headers"
                      })
                    }), ": Lets you pass custom headers in LLM requests, such as business-specific fields or tenant identifiers."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-enable",
                      children: _jsx(_components.code, {
                        children: "mllm.enable"
                      })
                    }), ": Enables the MLLM module. Replaces the deprecated ", _jsx(_components.code, {
                      children: "advanced_features.enable_mllm"
                    }), "."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-turn-detection",
                      children: _jsx(_components.code, {
                        children: "mllm.turn_detection"
                      })
                    }), ": Turn detection configuration for the MLLM module. When defined, overrides the top-level ", _jsx(_components.code, {
                      children: "turn_detection"
                    }), " object."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-turn-detection-server-vad-config-idle-timeout-ms",
                      children: _jsx(_components.code, {
                        children: "mllm.turn_detection.server_vad_config.idle_timeout_ms"
                      })
                    }), ": Idle timeout in milliseconds for server VAD mode. Applicable to OpenAI Realtime API only."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-mllm-vendor",
                      children: _jsx(_components.code, {
                        children: "mllm.vendor"
                      })
                    }), " value ", _jsx(_components.code, {
                      children: "gemini"
                    }), ": Enables Google Gemini Live integration using the Gemini Developer API."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "Behavior changes"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "turn_detection"
                    }), " now handles SoS and EoS detection only. Interruption handling strategies have moved to the new top-level ", _jsx(_components.code, {
                      children: "interruption"
                    }), " field."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "turn_detection.config.start_of_speech.mode"
                    }), " values ", _jsx(_components.code, {
                      children: "keywords"
                    }), " and ", _jsx(_components.code, {
                      children: "disabled"
                    }), " are deprecated. Use the new ", _jsx(_components.code, {
                      children: "interruption"
                    }), " field instead."]
                  }), `
`, _jsxs(_components.li, {
                    children: ["When ", _jsx(_components.code, {
                      children: "turn_detection.end_of_speech.mode"
                    }), " is set to ", _jsx(_components.code, {
                      children: "semantic"
                    }), ", EOS detection supports English and Chinese only. For unsupported languages, the engine automatically falls back to VAD."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "Deprecated fields"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "advanced_features.enable_mllm"
                    }), ": Use ", _jsx(_components.code, {
                      children: "mllm.enable"
                    }), " instead."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "turn_detection.config.start_of_speech.mode"
                    }), " value ", _jsx(_components.code, {
                      children: "keywords"
                    }), ": Use ", _jsx(_components.code, {
                      children: 'interruption.mode = "keywords"'
                    }), " instead."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "turn_detection.config.start_of_speech.mode"
                    }), " value ", _jsx(_components.code, {
                      children: "disabled"
                    }), ": Use ", _jsx(_components.code, {
                      children: "interruption.enable = false"
                    }), " with ", _jsx(_components.code, {
                      children: "interruption.disabled_config.strategy"
                    }), " instead."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "Removed fields"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "mllm.style"
                    })
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "mllm.create_response"
                    }), " and ", _jsx(_components.code, {
                      children: "mllm.interrupt_response"
                    }), " for OpenAI Realtime API."]
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
            children: [`
`, _jsxs(_components.p, {
              children: ["Changes to ", _jsx(_components.a, {
                href: "reference/event-types",
                children: _jsx(_components.strong, {
                  children: "Notification event types"
                })
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New fields"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["Added ", _jsx(_components.code, {
                      children: "name"
                    }), " to all ", _jsx(_components.a, {
                      href: "reference/event-types",
                      children: "NCS event payloads"
                    }), ". Returns the agent name provided when starting the agent."]
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
        })]
      }), _jsxs(Accordion, {
        title: "v2.5",
        id: "v25",
        headingLevel: 3,
        value: "v25",
        children: [_jsx(_components.p, {
          children: "Released on March 31, 2026."
        }), _jsx(_components.h4, {
          id: "new-features-8",
          children: "New features"
        }), _jsx(_components.p, {
          children: "Included in this release:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Preset model configurations"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Adds a ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join#preset",
                children: _jsx(_components.code, {
                  children: "preset"
                })
              }), " parameter to the Join API. Pass a comma-separated list of preset names to apply predefined configurations for ASR, LLM, and TTS providers. When you use a preset, you do not need to provide the endpoint URL, API key, or model for the preset provider. Use the ", _jsx(_components.code, {
                children: "asr"
              }), ", ", _jsx(_components.code, {
                children: "llm"
              }), ", and ", _jsx(_components.code, {
                children: "tts"
              }), " fields to configure additional settings. When you use a preset, the corresponding ASR, LLM, or TTS service is provided through Agora-managed accounts. For details, see the ", _jsx(_components.a, {
                href: "reference/pricing",
                children: "pricing"
              }), " page."]
            }), `
`, _jsx(_components.p, {
              children: "Available presets:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["ASR: ", _jsx(_components.code, {
                  children: "deepgram_nova_2"
                }), ", ", _jsx(_components.code, {
                  children: "deepgram_nova_3"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["LLM: ", _jsx(_components.code, {
                  children: "openai_gpt_4o_mini"
                }), ", ", _jsx(_components.code, {
                  children: "openai_gpt_4_1_mini"
                }), ", ", _jsx(_components.code, {
                  children: "openai_gpt_5_nano"
                }), ", ", _jsx(_components.code, {
                  children: "openai_gpt_5_mini"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["TTS: ", _jsx(_components.code, {
                  children: "minimax_speech_2_6_turbo"
                }), ", ", _jsx(_components.code, {
                  children: "minimax_speech_2_8_turbo"
                }), ", ", _jsx(_components.code, {
                  children: "openai_tts_1"
                })]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Pause state detection"
              })
            }), `
`, _jsxs(_components.p, {
              children: ['When enabled, the agent uses semantic understanding to detect when a user intends to pause the conversation. For example, if the user says "hold on" or "just a moment", the agent waits for further input instead of forwarding the utterance to the LLM. Controlled by the new ', _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config-end-of-speech--mode-config-pause-state-enabled",
                children: _jsx(_components.code, {
                  children: "pause_state_enabled"
                })
              }), " parameter."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Conversation turn insights"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["You can now query per-turn start, end, and latency metrics for completed agent sessions. See ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/turns",
                children: "Query conversation turn information"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Real-time TTS parameter updates with custom LLM"
              })
            }), `
`, _jsx(_components.p, {
              children: "In scenarios with a custom LLM integrated, this release adds support for real-time TTS parameter updates during conversations, enabling a more natural conversational experience. This feature applies to the following use cases:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "The custom LLM detects a user request for the agent to change its voice or speaking style."
              }), `
`, _jsx(_components.li, {
                children: "The custom LLM identifies a user's positive emotion and adjusts TTS volume, pitch, speech rate, and other parameters in real time to better match the user's mood."
              }), `
`]
            }), `
`, _jsxs(_components.p, {
              children: ["For implementation details, refer to ", _jsx(_components.a, {
                href: "build/custom-model-integration/custom-llm#update-tts-parameters-in-real-time",
                children: "Real-time TTS parameter updates"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New TTS provider"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/tts/murf",
                  children: "Murf (Beta)"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New Avatar provider"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/avatar/anam",
                  children: "Anam (Beta)"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "improvements-6",
          children: "Improvements"
        }), _jsx(_components.p, {
          children: "This release includes the following enhancements:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Migration from HeyGen API to LiveAvatar (Beta) API"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Updates the HeyGen avatar model configuration to use the ", _jsx(_components.a, {
                href: "models/avatar/heygen",
                children: "LiveAvatar (Beta)"
              }), " API."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "api-changes-8",
          children: "API changes"
        }), _jsx(_components.p, {
          children: "This release introduces the following changes to the RESTful API."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New endpoint: Query conversation turns"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Adds a new GET endpoint to query conversation turn information for an agent session. After a conversation ends, use this endpoint to retrieve the start event, end event, and latency metrics for each turn within the session. For details, see ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/turns",
                children: "Query conversation turn information"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Changes to ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: _jsx(_components.strong, {
                  children: "Start a conversational AI agent"
                })
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New parameters added"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#preset",
                      children: _jsx(_components.code, {
                        children: "preset"
                      })
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config-end-of-speech--mode-config-pause-state-enabled",
                      children: _jsx(_components.code, {
                        children: "pause_state_enabled"
                      })
                    })
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "Deprecated fields deleted"
                  })
                }), `
`, _jsx(_components.p, {
                  children: "The following deprecated fields are deleted:"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "properties.silence_timeout"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "properties.advanced_features.enable_aivad"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "properties.llm.silence_message"
                    })
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
        })]
      }), _jsxs(Accordion, {
        title: "v2.4",
        id: "v24",
        headingLevel: 3,
        value: "v24",
        children: [_jsx(_components.p, {
          children: "Released on February 2, 2026."
        }), _jsx(_components.h4, {
          id: "new-features-9",
          children: "New features"
        }), _jsx(_components.p, {
          children: "Included in this release:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "MCP integration"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Adds a ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-mcp-servers",
                children: _jsx(_components.code, {
                  children: "llm.mcp_servers"
                })
              }), " field to the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              }), " API to connect the LLM to an MCP (Model Context Protocol) server. Set ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-advanced-features-enable-tools",
                children: _jsx(_components.code, {
                  children: "advanced_features.enable_tools"
                })
              }), " to ", _jsx(_components.code, {
                children: "true"
              }), " to enable tool calls. This allows the agent to call tools provided by external services to extend functionality. For details, see ", _jsx(_components.a, {
                href: "build/tools/mcp-tools",
                children: "Use MCP tools"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Filler phrases"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Adds a ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-filler-words",
                children: _jsx(_components.code, {
                  children: "properties.filler_words"
                })
              }), " field to insert pre-set or LLM-generated filler phrases during conversations to fill periods of silence while waiting for LLM output. This feature smooths dialogue flow, reduces user anxiety, and makes agent speech sound more natural."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "improvements-7",
          children: "Improvements"
        }), _jsx(_components.p, {
          children: "This release includes the following enhancements:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Turn detection configuration optimization"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["The ", _jsx(_components.code, {
                children: "turn_detection"
              }), " parameter structure has been updated to provide more flexible conversation turn detection. The new structure uses a ", _jsx(_components.code, {
                children: "mode"
              }), " + ", _jsx(_components.code, {
                children: "config"
              }), " pattern with separate Start of Speech (SoS) and End of Speech (EoS) detection configurations."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Basic configuration"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "mode"
                }), ": Conversation turn detection mode (currently supports ", _jsx(_components.code, {
                  children: "default"
                }), ")"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "config.speech_threshold"
                }), ": Voice activity detection sensitivity"]
              }), `
`]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Start of Speech (SoS) detection"
              })
            }), `
`, _jsx(_components.p, {
              children: "Detects when the user begins speaking. When SoS is detected while the agent is speaking, an interruption occurs."
            }), `
`, _jsxs(_components.p, {
              children: ["The ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config-start-of-speech",
                children: _jsx(_components.code, {
                  children: "config.start_of_speech"
                })
              }), " parameter supports three detection modes:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "VAD mode"
                }), " (", _jsx(_components.code, {
                  children: "vad"
                }), "): Triggered by voice activity detection. Supports configuration of interruption threshold, prefix padding, and ignore word list."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Keyword mode (Beta)"
                }), " (", _jsx(_components.code, {
                  children: "keywords"
                }), "): Based on keyword triggering. The agent begins conversation after detecting a specified keyword."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Disabled mode"
                }), " (", _jsx(_components.code, {
                  children: "disabled"
                }), "): Disables interruption. Supports append or ignore strategies."]
              }), `
`]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "End of Speech (EoS) detection"
              })
            }), `
`, _jsx(_components.p, {
              children: "Detects when the user finishes speaking. When EoS is detected, the agent generates a response."
            }), `
`, _jsxs(_components.p, {
              children: ["The ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config-end-of-speech",
                children: _jsx(_components.code, {
                  children: "config.end_of_speech"
                })
              }), " parameter supports two detection modes:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "VAD mode"
                }), " (", _jsx(_components.code, {
                  children: "vad"
                }), "): Determines conversation end based on silence duration."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Semantic mode"
                }), " (", _jsx(_components.code, {
                  children: "semantic"
                }), "): Determines conversation end based on semantic understanding. Supports configurable maximum wait time."]
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "api-changes-9",
          children: "API changes"
        }), _jsx(_components.p, {
          children: "This release introduces the following changes to the RESTful API."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Changes to ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: _jsx(_components.strong, {
                  children: "Start a conversational AI agent"
                })
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsxs(_components.strong, {
                    children: [_jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection",
                      children: _jsx(_components.code, {
                        children: "turn_detection"
                      })
                    }), " has a revamped structure"]
                  })
                }), `
`, _jsxs(_components.p, {
                  children: ["All previous fields under ", _jsx(_components.code, {
                    children: "turn_detection"
                  }), " have been deprecated and replaced with a new data structure."]
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: "Deprecated"
                    }), `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsx(_components.li, {
                        children: _jsx(_components.code, {
                          children: "turn_detection.interrupt_mode"
                        })
                      }), `
`, _jsx(_components.li, {
                        children: _jsx(_components.code, {
                          children: "turn_detection.interrupt_keywords"
                        })
                      }), `
`, _jsx(_components.li, {
                        children: _jsx(_components.code, {
                          children: "turn_detection.interrupt_duration_ms"
                        })
                      }), `
`, _jsx(_components.li, {
                        children: _jsx(_components.code, {
                          children: "turn_detection.prefix_padding_ms"
                        })
                      }), `
`, _jsx(_components.li, {
                        children: _jsx(_components.code, {
                          children: "turn_detection.silence_duration_ms"
                        })
                      }), `
`, _jsx(_components.li, {
                        children: _jsx(_components.code, {
                          children: "turn_detection.threshold"
                        })
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
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "AIVAD activation"
                  })
                }), `
`, _jsxs(_components.p, {
                  children: ["The ", _jsx(_components.code, {
                    children: "advanced_features.enable_aivad"
                  }), " field is now deprecated; to configure AIVAD activation use ", _jsx(_components.a, {
                    href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config-end-of-speech-mode",
                    children: _jsx(_components.code, {
                      children: 'turn_detection.config.end_of_speech.mode = "semantic"'
                    })
                  }), "."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New parameters added"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-advanced-features-enable-tools",
                      children: _jsx(_components.code, {
                        children: "advanced_features.enable_tools"
                      })
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-llm-mcp-servers",
                      children: _jsx(_components.code, {
                        children: "llm.mcp_servers"
                      })
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-filler-words",
                      children: _jsx(_components.code, {
                        children: "properties.filler_words"
                      })
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-mode",
                      children: _jsx(_components.code, {
                        children: "turn_detection.mode"
                      })
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "/en/api-reference/api-ref/conversational-ai/join#request-body-properties-turn-detection-config",
                      children: _jsx(_components.code, {
                        children: "turn_detection.config"
                      })
                    })
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
        })]
      }), _jsxs(Accordion, {
        title: "v2.3",
        id: "v23",
        headingLevel: 3,
        value: "v23",
        children: [_jsx(_components.p, {
          children: "Released on January 7, 2026."
        }), _jsx(_components.h4, {
          id: "new-features-10",
          children: "New features"
        }), _jsx(_components.p, {
          children: "Included in this release:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Control LLM response interruption in custom LLM scenarios"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Adds a ", _jsx(_components.code, {
                children: "metadata.interruptable"
              }), " field in the first chunk of the ", _jsx(_components.code, {
                children: "chat.completion.custom_metadata"
              }), " object to control whether user speech can interrupt the agent's TTS output when using custom LLMs with streaming response (SSE). Use this to prevent interruptions when delivering critical information such as regulations, policies, or pricing. For more information, see ", _jsx(_components.a, {
                href: "build/custom-model-integration/custom-llm#configure-llm-response-interruption",
                children: "Configure LLM response interruption"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "RTC media content encryption"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Adds an ", _jsx(_components.code, {
                children: "rtc"
              }), " parameter to the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              }), " API for configuring RTC encryption."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New ASR provider"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/asr/sarvam",
                  children: "Sarvam (Beta)"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "improvements-8",
          children: "Improvements"
        }), _jsx(_components.p, {
          children: "This release includes the following enhancements:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "ElevenLabs TTS compatibility optimization"
              })
            }), `
`, _jsx(_components.p, {
              children: "Supports SSML parsing and forwarding to ensure ElevenLabs TTS correctly renders intended speech effects such as pauses, emphasis, and pronunciation."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Latency optimization best practices"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Adds a guide to ", _jsx(_components.a, {
                href: "best-practices/optimize-latency",
                children: "Optimize conversation latency"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Cloud Recording best practices"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Adds a guide to ", _jsx(_components.a, {
                href: "best-practices/record-agent-conversation",
                children: "Record conversations with Cloud Recording"
              }), "."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "api-changes-10",
          children: "API changes"
        }), _jsx(_components.p, {
          children: "This release introduces the following changes to the RESTful API."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Stop agent API is now asynchronous"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["The ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/leave",
                children: "Stop a conversational AI agent"
              }), " API now responds immediately after request parameters are validated. The request is processed asynchronously after the API returns."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Changes to ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: _jsx(_components.strong, {
                  children: "Start a conversational AI agent"
                })
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New parameters added"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "properties.rtc"
                    })
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
        })]
      }), _jsxs(Accordion, {
        title: "v2.2",
        id: "v22",
        headingLevel: 3,
        value: "v22",
        children: [_jsx(_components.p, {
          children: "Released on December 15, 2025."
        }), _jsx(_components.h4, {
          id: "new-features-11",
          children: "New features"
        }), _jsx(_components.p, {
          children: "Included in this release:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Geofencing"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Use ", _jsx(_components.code, {
                children: "geofence"
              }), " configuration when you ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              }), " to limit which Agora servers the Conversational AI Engine can access based on geographic regions. See ", _jsx(_components.a, {
                href: "best-practices/regional-restrictions",
                children: "Restrict agent zones"
              }), " for details."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Agent greeting mode"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Adds a field ", _jsx(_components.code, {
                children: "llm.greeting_configs.mode"
              }), " to the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              }), " request to set the agent's greeting broadcast mode. The following modes are supported:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "single_every"
                }), " (Default): The agent broadcasts a greeting every time a user joins a channel where there are no other users."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "single_first"
                }), ": The agent broadcasts a greeting only when the first user joins a channel."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New TTS providers"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/tts/sarvam",
                  children: "Sarvam (Beta)"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "improvements-9",
          children: "Improvements"
        }), _jsx(_components.p, {
          children: "This release includes the following enhancements:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "TTS parameter update"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Adds ", _jsx(_components.code, {
                children: "base_url"
              }), " field to the TTS parameters for ", _jsx(_components.a, {
                href: "models/tts/openai",
                children: "OpenAI"
              }), " and ", _jsx(_components.a, {
                href: "models/tts/elevenlabs",
                children: "ElevenLabs"
              }), ". This field specifies the endpoint URL for the TTS service."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "api-changes-11",
          children: "API changes"
        }), _jsx(_components.p, {
          children: "This release introduces the following changes to the RESTful API."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Changes to ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: _jsx(_components.strong, {
                  children: "Start a conversational AI agent"
                })
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New parameters added"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "properties.geofence"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "llm.greeting_configs.mode"
                    })
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
        })]
      }), _jsxs(Accordion, {
        title: "v2.1",
        id: "v21",
        headingLevel: 3,
        value: "v21",
        children: [_jsx(_components.p, {
          children: "Released on December 5, 2025."
        }), _jsx(_components.h4, {
          id: "new-features-12",
          children: "New features"
        }), _jsx(_components.p, {
          children: "Included in this release:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Template variables"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This version adds the ", _jsx(_components.code, {
                children: "llm.template_variables"
              }), " field to the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              }), " API, used to insert variables into the agent's ", _jsx(_components.code, {
                children: "system_messages"
              }), ", ", _jsx(_components.code, {
                children: "greeting_message"
              }), ", ", _jsx(_components.code, {
                children: "failure_message"
              }), ", and ", _jsx(_components.code, {
                children: "parameters.silence_config.content"
              }), " text. By configuring these variables, the Conversational AI engine automatically replaces them with the corresponding values defined in ", _jsx(_components.code, {
                children: "llm.template_variables"
              }), ". Template variables, combined with prompt customization and SIP outbound calling functionality, enable you to dynamically inject content to automate processes such as automatic hang-up, voicemail recognition, automatic message leaving, and call transfer."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Custom labels"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This version adds a ", _jsx(_components.code, {
                children: "labels"
              }), " field to the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              }), " API, enabling agents to carry custom labels. These labels are bound to the agent and returned in the ", _jsx(_components.code, {
                children: "payload"
              }), " field of all message notification callbacks from the Conversational AI engine, allowing you to implement custom business logic, such as tagging activity IDs, customer groups, and business scenarios."]
            }), `
`, _jsxs(_components.p, {
              children: ["In SIP outbound call scenarios, you can pass a custom label in the ", _jsx(_components.code, {
                children: "properties.labels"
              }), " field when calling the outbound call interface to mark the call."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "api-changes-12",
          children: "API changes"
        }), _jsx(_components.p, {
          children: "This release introduces the following changes to the RESTful API."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Changes to ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: _jsx(_components.strong, {
                  children: "Start a conversational AI agent"
                })
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New parameters added"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "properties.labels"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "llm.template_variables"
                    })
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
        })]
      }), _jsxs(Accordion, {
        title: "v2.0",
        id: "v20",
        headingLevel: 3,
        value: "v20",
        children: [_jsx(_components.p, {
          children: "Released on November 15, 2025."
        }), _jsx(_components.h4, {
          id: "new-features-13",
          children: "New features"
        }), _jsx(_components.p, {
          children: "Included in this release:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Telephony (Beta)"
              })
            }), `
`, _jsx(_components.p, {
              children: "This version adds an outbound calling feature that enables the conversational AI agent to initiate an outbound call to a specified number through a POST API. After the call is answered, the agent can engage in real-time dialogue with the callee. This feature supports a wide range of outbound AI call scenarios."
            }), `
`, _jsx(_components.p, {
              children: "A set of phone number management APIs is also added for handling numbers connected to Conversational AI Engine. Refer to the API changes section for details."
            }), `
`, _jsxs(CalloutContainer, {
              type: "info",
              children: [_jsx(CalloutTitle, {
                children: "Telephony pricing"
              }), _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["The telephony feature is currently in ", _jsx(_components.strong, {
                    children: "Beta"
                  }), " and is provided free of charge. Pricing terms may change upon official release."]
                })
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Selective attention locking (Beta)"
              })
            }), `
`, _jsx(_components.p, {
              children: "This version adds the selective attention lock feature. Register voiceprints to enable the agent to identify specific speakers and suppress background voices and environmental noise, ensuring clearer, more focused conversations."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Graceful exit"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This version adds a new ", _jsx(_components.code, {
                children: "farewell_config"
              }), " field to ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              }), " API to configure the graceful exit feature. When enabled, calling the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/leave",
                children: "Stop a Conversational Agent"
              }), " API causes the agent to enter an ", _jsx(_components.code, {
                children: "IDLE"
              }), " state before leaving the channel."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Keyword interruption mode"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This release adds a new option to the ", _jsx(_components.code, {
                children: "turn_detection.interrupt_mode"
              }), " field in the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              }), " API. Set this field to ", _jsx(_components.code, {
                children: '"keyword"'
              }), " to enable keyword interruption mode."]
            }), `
`, _jsxs(_components.p, {
              children: ["When this mode is enabled, the agent stops its current behavior after detecting any of the keywords specified in the ", _jsx(_components.code, {
                children: "turn_detection.interrupt_keywords"
              }), " field."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Adaptive interruption mode"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This release adds a new option to the ", _jsx(_components.code, {
                children: "turn_detection.interrupt_mode"
              }), " field in the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              }), " API. Set this field to ", _jsx(_components.code, {
                children: '"adaptive"'
              }), " to enable adaptive interruption mode."]
            }), `
`, _jsx(_components.p, {
              children: "When this mode is enabled, the agent dynamically increases the voice continuity threshold while speaking to reduce accidental interruptions."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New ASR, LLM, MLLM, and TTS providers"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["ASR", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "models/asr/openai",
                      children: "OpenAI (Beta)"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "models/asr/speechmatics",
                      children: "Speechmatics"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "models/asr/google",
                      children: "Google (Beta)"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: "Amazon Transcribe (Beta)"
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "models/asr/assembly-ai",
                      children: "AssemblyAI (Beta)"
                    })
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: ["LLM", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "models/llm/groq",
                      children: "Groq"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "models/llm/amazon",
                      children: "Amazon Bedrock"
                    })
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: ["MLLM", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "models/mllm/gemini",
                      children: "Google Gemini Live"
                    })
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: ["TTS", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "models/tts/rime",
                      children: "Rime (Beta)"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "models/tts/fish-audio",
                      children: "Fish Audio (Beta)"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "models/tts/google",
                      children: "Google (Beta)"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.a, {
                      href: "models/tts/amazon",
                      children: "Amazon Polly (Beta)"
                    })
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
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New webhook notification events"
              })
            }), `
`, _jsx(_components.p, {
              children: "This release adds three new webhook notification event types to support metrics reporting and call-state monitoring:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "111"
                  }), ": ", _jsx(_components.a, {
                    href: "reference/event-types#111-agent-metrics",
                    children: "agent metrics"
                  })]
                }), `
`, _jsx(_components.p, {
                  children: "Notifies real-time performance metrics for each dialogue turn, including ASR, LLM, and TTS latency measurements."
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "201"
                  }), ": ", _jsx(_components.a, {
                    href: "reference/event-types#201-inbound-call-state",
                    children: "inbound call state"
                  })]
                }), `
`, _jsx(_components.p, {
                  children: "Reports state changes for incoming calls, such as when a call starts, is answered, transferred, or hung up."
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "202"
                  }), ": ", _jsx(_components.a, {
                    href: "reference/event-types#202-outbound-call-state",
                    children: "outbound call state"
                  })]
                }), `
`, _jsx(_components.p, {
                  children: "Reports state changes for outbound calls initiated by the agent, including call start, dialing, ringing, answer, and hang-up events."
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "improvements-10",
          children: "Improvements"
        }), _jsx(_components.p, {
          children: "This release includes the following enhancements:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for avatars with MLLMs"
              })
            }), `
`, _jsx(_components.p, {
              children: "Added support for using avatars with MLLMs."
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "api-changes-13",
          children: "API changes"
        }), _jsx(_components.p, {
          children: "This release introduces the following changes to the RESTful API."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Changes to ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: _jsx(_components.strong, {
                  children: "Start a conversational AI agent"
                })
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New parameters added"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "properties.parameters.farewell_config"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "properties.advanced_features.enable_sal"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "properties.sal"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "properties.sal.sal_mode"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "properties.sal.sample_urls"
                    })
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "properties.turn_detection.interrupt_mode"
                    }), " (supports ", _jsx(_components.code, {
                      children: "adaptive"
                    }), " and ", _jsx(_components.code, {
                      children: "keyword"
                    }), " values)"]
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "properties.turn_detection.interrupt_keywords"
                    })
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "properties.turn_detection.interrupt_duration_ms"
                    }), " (migrated from ", _jsx(_components.code, {
                      children: "vad.interrupt_duration_ms"
                    }), ")"]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "properties.turn_detection.prefix_padding_ms"
                    }), " (migrated from ", _jsx(_components.code, {
                      children: "vad.prefix_padding_ms"
                    }), ")"]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "properties.turn_detection.silence_duration_ms"
                    }), " (migrated from ", _jsx(_components.code, {
                      children: "vad.silence_duration_ms"
                    }), ")"]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "properties.turn_detection.threshold"
                    }), " (migrated from ", _jsx(_components.code, {
                      children: "vad.threshold"
                    }), ")"]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "Deprecated"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: ["The ", _jsx(_components.code, {
                      children: "vad"
                    }), " interface is deprecated. All configuration items have been moved to the ", _jsx(_components.code, {
                      children: "turn_detection"
                    }), " field."]
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
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "New APIs"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Telephony (Beta)"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Initiate an outbound call"
                  }), `
`, _jsx(_components.li, {
                    children: "Retrieve call records"
                  }), `
`, _jsx(_components.li, {
                    children: "Hang-up a call"
                  }), `
`, _jsx(_components.li, {
                    children: "Retrieve call status"
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Phone number management (Beta)"
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Retrieve list of numbers"
                  }), `
`, _jsx(_components.li, {
                    children: "Import number"
                  }), `
`, _jsx(_components.li, {
                    children: "Retrieve number information"
                  }), `
`, _jsx(_components.li, {
                    children: "Update number configuration"
                  }), `
`, _jsx(_components.li, {
                    children: "Delete number"
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
        }), _jsx(_components.h4, {
          id: "toolkit-api-2",
          children: "Toolkit API"
        }), _jsxs(_components.p, {
          children: ["This release renames all APIs and parameters containing the word ", _jsx(_components.code, {
            children: "transcription"
          }), " in the client-side subtitle API to use ", _jsx(_components.code, {
            children: "transcript"
          }), ", as shown below:"]
        }), _jsx(_components.h4, {
          id: "android",
          children: "Android"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "onTranscriptionUpdated"
            }), " renamed to ", _jsx(_components.code, {
              children: "onTranscriptUpdated"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "TranscriptionRenderMode"
            }), " renamed to ", _jsx(_components.code, {
              children: "TranscriptRenderMode"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "TranscriptionType"
            }), " renamed to ", _jsx(_components.code, {
              children: "TranscriptType"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "TranscriptionStatus"
            }), " renamed to ", _jsx(_components.code, {
              children: "TranscriptStatus"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "Transcription"
            }), " renamed to ", _jsx(_components.code, {
              children: "Transcript"
            })]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "ios",
          children: "iOS"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "onTranscriptionUpdated"
            }), " renamed to ", _jsx(_components.code, {
              children: "onTranscriptUpdated"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "TranscriptionRenderMode"
            }), " renamed to ", _jsx(_components.code, {
              children: "TranscriptRenderMode"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "TranscriptionType"
            }), " renamed to ", _jsx(_components.code, {
              children: "TranscriptType"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "TranscriptionStatus"
            }), " renamed to ", _jsx(_components.code, {
              children: "TranscriptStatus"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "Transcription"
            }), " renamed to ", _jsx(_components.code, {
              children: "Transcript"
            })]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "web",
          children: "Web"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "TRANSCRIPTION_UPDATED"
            }), " renamed to ", _jsx(_components.code, {
              children: "TRANSCRIPT_UPDATED"
            })]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "v1.7",
        id: "v17",
        headingLevel: 3,
        value: "v17",
        children: [_jsx(_components.p, {
          children: "Released on July 31, 2025."
        }), _jsx(_components.h4, {
          id: "new-features-14",
          children: "New features"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "AI avatars"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Create visual avatar representations for your conversational agents using third-party avatar providers. AI avatars provide a visual presence during voice interactions, making conversations feel more natural and engaging. Enable AI avatars by setting ", _jsx(_components.code, {
                children: "avatar.enable"
              }), " to ", _jsx(_components.code, {
                children: "true"
              }), " and configuring the ", _jsx(_components.code, {
                children: "avatar.vendor"
              }), " and ", _jsx(_components.code, {
                children: "avatar.params"
              }), " fields when calling ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              }), " to create your agent."]
            }), `
`, _jsxs(CalloutContainer, {
              type: "info",
              children: [_jsx(CalloutTitle, {
                children: "Info"
              }), _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["AI avatars require video streaming and incur additional charges. See ", _jsx(_components.a, {
                    href: "/en/realtime-media/rtc/reference/pricing",
                    children: "video calling pricing"
                  }), " for details."]
                })
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Selective attention locking (Beta)"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This version introduces the selective attention locking feature, which uses voiceprint recognition technology to identify and filter out the speaker while suppressing background noise. This enhances the efficiency of conversational AI, particularly improving speech recognition accuracy. To experience this feature, contact ", _jsx(_components.a, {
                href: "mailto:support@agora.io",
                children: "technical support"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Send picture messages (Beta)"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["The toolkit now includes an API for ", _jsx(_components.a, {
                href: "build/send-multimodal-messages",
                children: "sending picture messages"
              }), ". You can send image URLs to the main model, which automatically references the image in future interactions to generate more relevant responses. A new callback is available to receive image message receipt details after successful transmission."]
            }), `
`, _jsxs(CalloutContainer, {
              type: "info",
              children: [_jsx(CalloutTitle, {
                children: "Info"
              }), _jsx(CalloutDescription, {
                children: _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "The picture messaging feature is currently in Beta and free for a limited time."
                  }), `
`, _jsx(_components.li, {
                    children: "Image processing depends on the capabilities of the integrated LLM. Ensure the LLM you connect to the Conversational AI Engine supports image input."
                  }), `
`]
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "api-changes-14",
          children: "API changes"
        }), _jsx(_components.p, {
          children: "This release introduces the following modifications to the RESTful API."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New parameters added"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "avatar.enable"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "avatar.vendor"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "avatar.params"
                    })
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
        }), _jsx(_components.h5, {
          id: "toolkit-api-3",
          children: "Toolkit API"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Android:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "chat"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "ImageMessage"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "onMessageReceiptUpdated"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "MessageReceipt"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: ["iOS:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "chat"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "ChatMessage"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "ChatMessageType"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "ImageMessage"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "onMessageReceiptUpdated"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "MessageReceipt"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: ["Web:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "chat"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "TMessageReceipt"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "EChatMessagePriority"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "EChatMessageType"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "IChatMessageBase"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "IChatMessageImage"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "v1.6",
        id: "v16",
        headingLevel: 3,
        value: "v16",
        children: [_jsx(_components.p, {
          children: "Released on July 15, 2025."
        }), _jsx(_components.h4, {
          id: "new-features-15",
          children: "New features"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for OpenAI Realtime API"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Integrate Multimodal Large Language Models (MLLMs) with Conversational AI Engine to enable end-to-end real-time audio and text interactions. See ", _jsx(_components.a, {
                href: "models/mllm/openai",
                children: "OpenAI Realtime API"
              }), " for integration details."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for more TTS vendors"
              })
            }), `
`, _jsx(_components.p, {
              children: "Conversational AI Engine now supports the following additional TTS vendors:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/tts/cartesia",
                  children: "Cartesia"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "models/tts/openai",
                  children: "OpenAI"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Custom ASR provider support"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["To improve flexibility in configuring conversational agents, this release allows you to select a custom automatic speech recognition (ASR) provider. The ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              }), " API now includes the following new parameters:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "asr.vendor"
                }), ": Specify the ASR provider"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "asr.params"
                }), ": Configure ASR parameters"]
              }), `
`]
            }), `
`, _jsx(_components.p, {
              children: "The following ASR providers are supported:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "ARES"
                }), " (default)"]
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.strong, {
                  children: "Microsoft Azure"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.strong, {
                  children: "Deepgram"
                })
              }), `
`]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Billing update:"
              })
            }), `
`, _jsx(_components.p, {
              children: "In earlier versions, the service fee included the cost of the Ares ASR provider. Starting in v1.6, the pricing is restructured as follows:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["If you use ", _jsx(_components.strong, {
                  children: "ARES ASR"
                }), `, the total price remains unchanged:
`, _jsx(_components.em, {
                  children: _jsx(_components.strong, {
                    children: "Total cost = Conversational AI Engine Audio Basic Task + ARES ASR Task"
                  })
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["If you use ", _jsx(_components.strong, {
                  children: "a different ASR provider"
                }), ", you are charged ", _jsx(_components.strong, {
                  children: "only"
                }), " the new ", _jsx(_components.strong, {
                  children: "Conversational AI Engine Audio Basic Task"
                }), " fee."]
              }), `
`]
            }), `
`, _jsxs(_components.p, {
              children: ["For further details, see ", _jsx(_components.a, {
                href: "reference/pricing",
                children: "Pricing"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Multi-platform toolkit"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Agora now offers a toolkit to help you quickly build conversational agent apps. The toolkit is available for ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/ios",
                children: _jsx(_components.strong, {
                  children: "iOS"
                })
              }), ", ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/android",
                children: _jsx(_components.strong, {
                  children: "Android"
                })
              }), ", and ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/web",
                children: _jsx(_components.strong, {
                  children: "Web"
                })
              }), ", and includes APIs for common scenarios. Call these APIs to combine the capabilities of the Agora Voice SDK and Signaling SDK to achieve the following functions:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "build/transcripts",
                  children: _jsx(_components.strong, {
                    children: "Display live transcript"
                  })
                }), `
Display real-time text output of user-agent conversations. The transcript component is now more robust, with better error handling, session management, and extensibility.`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "build/shape-the-conversation/interrupt-agent",
                  children: _jsx(_components.strong, {
                    children: "Interrupt the agent"
                  })
                }), `
Stop the agent from speaking or thinking mid-conversation.`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "build/handle-runtime-events/event-notifications",
                  children: _jsx(_components.strong, {
                    children: "Client-side events"
                  })
                }), `
Track changes in conversation state, performance metrics, and error events.`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.a, {
                  href: "best-practices/audio-setup",
                  children: _jsx(_components.strong, {
                    children: "Optimize audio settings"
                  })
                }), `
Quickly apply best-practice audio configurations to improve agent responsiveness and clarity.`]
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "api-changes-15",
          children: "API changes"
        }), _jsx(_components.h5, {
          id: "rest-api",
          children: "REST API"
        }), _jsx(_components.p, {
          children: "This release introduces several important modifications to the RESTful API."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New parameters added"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "asr.vendor"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "asr.params"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "advanced_features.enable_mllm"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "properties.mllm"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "turn_detection.type"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "turn_detection.interrupt_duration_ms"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "turn_detection.prefix_padding_ms"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "turn_detection.silence_duration_ms"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "turn_detection.threshold"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "turn_detection.create_response"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "turn_detection.interrupt_response"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "turn_detection.eagerness"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "parameters.enable_metrics"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "parameters.data_channel"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "parameters.enable_error_message"
                    })
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
        }), _jsx(_components.h5, {
          id: "toolkit-apis",
          children: "Toolkit APIs"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/android",
              children: "Android SDK"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/ios",
              children: "iOS SDK"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/web",
              children: "Web SDK"
            })
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "v1.5",
        id: "v15",
        headingLevel: 3,
        value: "v15",
        children: [_jsx(_components.p, {
          children: "Released on June 9, 2025."
        }), _jsx(_components.h4, {
          id: "new-features-16",
          children: "New features"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Voice interruption mode"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This release adds the ", _jsx(_components.code, {
                children: "turn_detection.interrupt_mode"
              }), " parameter to the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              }), " API, allowing you to control how the agent handles human voice interruptions. The following modes are supported:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: _jsx(_components.code, {
                    children: "interrupt"
                  })
                }), ": (Default) The human voice immediately interrupts the agent. The agent terminates the current interaction and processes the new human voice input."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: _jsx(_components.code, {
                    children: "append"
                  })
                }), ": The human voice does not interrupt the agent. The agent processes the newly received human voice request after the current interaction ends."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: _jsx(_components.code, {
                    children: "ignore"
                  })
                }), ": The agent ignores human voice requests received during speaking or thinking. These requests are discarded and not stored in the context."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "TTS filtering"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This release adds the ", _jsx(_components.code, {
                children: "tts.skip_patterns"
              }), " parameter to the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              }), " API. This parameter controls whether the TTS module skips bracketed content when reading LLM response text. This prevents the agent from vocalizing structural prompt information like tone indicators, action descriptions, and system prompts, creating a more natural and immersive listening experience."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "api-changes-16",
          children: "API changes"
        }), _jsx(_components.p, {
          children: "This release introduces several important modifications to the RESTful API."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New parameters added"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "turn_detection.interrupt_mode"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "parameters.silence_config"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "tts.skip_patterns"
                    })
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
        })]
      }), _jsxs(Accordion, {
        title: "v1.4",
        id: "v14",
        headingLevel: 3,
        value: "v14",
        children: [_jsx(_components.p, {
          children: "Released on May 29, 2025."
        }), _jsx(_components.h4, {
          id: "new-features-17",
          children: "New features"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Metadata support for LLM requests"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This release adds the ", _jsx(_components.code, {
                children: "llm.vendor"
              }), " parameter to the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              }), " API. When set to ", _jsx(_components.code, {
                children: '"custom"'
              }), ", the agent includes additional metadata when calling the LLM, such as ", _jsx(_components.code, {
                children: "turn_id"
              }), " and ", _jsx(_components.code, {
                children: "timestamp"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for Anthropic"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Conversational AI Engine now supports ", _jsx(_components.code, {
                children: "anthropic"
              }), " as a request style for chat completion. Refer to the ", _jsx(_components.code, {
                children: "llm.style"
              }), " parameter in ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              }), "."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "improvements-11",
          children: "Improvements"
        }), _jsx(_components.p, {
          children: "This release includes the following enhancements:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Advanced LLM configuration"
            }), ": The ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/update",
              children: "Update agent configuration"
            }), " API now supports:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "llm.system_messages"
                }), " for updating system prompts"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "llm.params"
                }), " for modifying configuration parameters used when calling the large language model"]
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "api-changes-17",
          children: "API changes"
        }), _jsx(_components.p, {
          children: "This release introduces several important modifications to the RESTful API."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "Start a conversational AI agent"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New parameters added"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "llm.vendor"
                    })
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "Removed parameters:"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "agent_rtm_uid"
                    })
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
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/update",
                children: "Update agent configuration"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "New parameters added"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "llm.system_messages"
                    })
                  }), `
`, _jsx(_components.li, {
                    children: _jsx(_components.code, {
                      children: "llm.params"
                    })
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
        })]
      }), _jsxs(Accordion, {
        title: "v1.3",
        id: "v13",
        headingLevel: 3,
        value: "v13",
        children: [_jsx(_components.p, {
          children: "Released on April 16, 2025."
        }), _jsx(_components.h4, {
          id: "new-features-18",
          children: "New features"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Agent conversation history"
              }), ": This version adds two methods to retrieve an agent's history. The history includes messages exchanged between the user and the agent and timestamps of agent creation and exit."]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["Call the RESTful API ", _jsx(_components.code, {
                  children: "history"
                }), " endpoint to ", _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/conversational-ai/history",
                  children: "Retrieve agent history"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["Subscribe to the ", _jsx(_components.a, {
                  href: "reference/event-types#103-agent-history",
                  children: "agent history event"
                }), " through the ", _jsx(_components.a, {
                  href: "build/handle-runtime-events/webhooks",
                  children: "Agora message notification service"
                }), ". When the agent stops, Agora automatically sends the agent's history to your business server through a Webhook callback."]
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "improvements-12",
          children: "Improvements"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Customize the priority of broadcast information"
              }), ": This version upgrades the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/speak",
                children: "Broadcast a message using TTS"
              }), " interface and adds two new configuration parameters related to broadcast interruption logic:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "priority"
                }), ": Sets the priority of the message broadcast. Supports setting the following priorities:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "INTERRUPT"
                    }), " High priority"]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "APPEND"
                    }), ": Medium priority"]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "IGNORE"
                    }), ": Low priority"]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "interruptable"
                }), ": Configure whether to allow human voice to interrupt the agent's broadcast."]
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "api-changes-18",
          children: "API changes"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Adds the ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/history",
              children: "Retrieve agent history"
            }), " method."]
          }), `
`, _jsxs(_components.li, {
            children: ["Adds ", _jsx(_components.code, {
              children: "priority"
            }), " and ", _jsx(_components.code, {
              children: "interruptable"
            }), " parameters to the ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/speak",
              children: "Broadcast a message using TTS"
            }), " method."]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "v1.2",
        id: "v12",
        headingLevel: 3,
        value: "v12",
        children: [_jsx(_components.p, {
          children: "Released on April 10, 2025."
        }), _jsx(_components.h4, {
          id: "new-features-19",
          children: "New features"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Broadcast a message using TTS"
              }), ": A new message broadcast interface enables a specified agent to deliver a custom message. When interacting with an agent, calling this interface interrupts the agent's speech and thinking process, allowing the TTS module to immediately broadcast the custom message."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Interrupt the agent"
              }), ": The interrupt agent endpoint lets you stop the specified agent's speech and thinking process."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "api-changes-19",
          children: "API changes"
        }), _jsx(_components.p, {
          children: "This version adds the following APIs:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/speak",
              children: "Broadcast a message using TTS"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/interrupt",
              children: "Interrupt the agent"
            })
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "v1.1",
        id: "v11",
        headingLevel: 3,
        value: "v11",
        children: [_jsx(_components.p, {
          children: "Released on March 27, 2025."
        }), _jsx(_components.h4, {
          id: "new-features-20",
          children: "New features"
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/conversational-ai/join",
            children: "Start a conversational agent"
          }), " API adds the ", _jsx(_components.code, {
            children: "enable_rtm"
          }), " and ", _jsx(_components.code, {
            children: "agent_rtm_uid"
          }), " parameters to enable Signaling integration with the conversational AI agent. When this feature is enabled, the agent can leverage the Signaling SDK to obtain a user's custom context information such as speaking status, selected text, signature, and score, and pass this data to the agent to generate more relevant content. For details, see ", _jsx(_components.a, {
            href: "build/shape-the-conversation/custom-information",
            children: "Transmit custom information"
          }), "."]
        }), _jsx(_components.h4, {
          id: "improvements-13",
          children: "Improvements"
        }), _jsxs(_components.p, {
          children: ["To help you quickly integrate a custom large language model (LLM), this version adds documentation for ", _jsx(_components.a, {
            href: "build/custom-model-integration/custom-llm",
            children: "Custom LLMs"
          }), ". Refer to the sample code in the documentation to integrate your custom model into the Conversational AI Engine and enable advanced capabilities such as Retrieval-Augmented Generation (RAG), multi-modal processing, and tool invocation."]
        }), _jsx(_components.h4, {
          id: "api-changes-20",
          children: "API changes"
        }), _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "POST"
          }), " method to ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/conversational-ai/join",
            children: "Start a conversational AI agent"
          }), " now includes the ", _jsx(_components.code, {
            children: "enable_rtm"
          }), " and ", _jsx(_components.code, {
            children: "agent_rtm_uid"
          }), " parameters."]
        })]
      }), _jsxs(Accordion, {
        title: "v1.0 (Public Beta)",
        id: "v10-public-beta",
        headingLevel: 3,
        value: "v10-public-beta",
        children: [_jsxs(_components.p, {
          children: ["This version, released on March 4, 2025, adds pricing information for the Agora Conversational AI Engine. For more information, see ", _jsx(_components.a, {
            href: "reference/pricing",
            children: "Pricing"
          }), "."]
        }), _jsx(_components.h4, {
          id: "integration-guide",
          children: "Integration guide"
        }), _jsx(_components.p, {
          children: "To achieve the best conversation experience, use Agora Conversational AI Engine with the following Agora SDKs:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Agora RTC Native SDK, v4.5.1 or later."
          }), `
`, _jsx(_components.li, {
            children: "Agora RTC Web SDK, version 4.23.2 or later."
          }), `
`]
        }), _jsx(_components.h4, {
          id: "new-features-21",
          children: "New features"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Live transcripts"
              }), ": Supports real-time text output of conversations between users and the AI agent for transcript display in your app's UI. Agora provides an open-source transcript processing module. Integrate the module and call its API to implement live transcript. For details, see ", _jsx(_components.a, {
                href: "build/transcripts",
                children: "Display live transcripts"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Message Notification Service"
              }), ": Introduces a new Conversational AI Engine message notification service. Configure it in the Agora console and subscribe to agent creation, stop, and error events. When a subscribed event occurs, Agora sends the details to your specified callback address. See ", _jsx(_components.a, {
                href: "build/handle-runtime-events/webhooks",
                children: "Receive event notifications"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Keywords"
              }), ": Enhances recognition accuracy of Conversational AI Engine for proprietary words by adding keywords. This feature is currently in Beta stage. For details, ", _jsx(_components.a, {
                href: "https://agoraio.zendesk.com/hc/en-us",
                children: "contact technical support"
              }), "."]
            }), `
`]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "v1.0 (Private Beta)",
        id: "v10-private-beta",
        headingLevel: 3,
        value: "v10-private-beta",
        children: [_jsxs(_components.p, {
          children: ["Released on February 18, 2025. The first beta release of the Conversational AI Engine brings natural, smooth, low-latency, and highly reliable real-time voice conversations with AI agents to Agora channels. It enables you to efficiently build intelligent and immersive interactive experiences. See ", _jsx(_components.a, {
            href: "/en/ai",
            children: "Product overview"
          }), " for details."]
        }), _jsx(_components.h4, {
          id: "core-features",
          children: "Core features"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Real-time voice conversation"
              })
            }), `
`, _jsx(_components.p, {
              children: "Supports natural and smooth real-time voice conversations with AI. It delivers a low-latency, ultra-responsive interactive experience as if the user is communicating with a real person."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Intelligent noise suppression"
              })
            }), `
`, _jsx(_components.p, {
              children: "Intelligently identifies and suppresses background noise, ensuring clear sound transmission even in noisy environments to provide users with a high-quality audio experience."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Background human voice suppression"
              })
            }), `
`, _jsx(_components.p, {
              children: "Suppresses background voices and noise while accurately preserving the primary speaker's voice. This ensures a clear and focused interactive experience in multi-speaker environments."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Intelligent interruption handling"
              })
            }), `
`, _jsx(_components.p, {
              children: "Allows users to interrupt AI at any time to ensure quick and natural responses. This feature enables smooth transitions and avoids mechanical interactions."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Intelligent transmission"
              })
            }), `
`, _jsx(_components.p, {
              children: "An AI-optimized transmission algorithm ensures stable voice data delivery even in weak network conditions where packet loss reaches 80%. This guarantees conversation continuity and reliability across diverse network environments."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Flexible arrangement"
              })
            }), `
`, _jsx(_components.p, {
              children: "Supports multiple Large Language Model (LLM) and Text-to-Speech (TTS) providers, enabling flexible orchestration to meet diverse business needs and deliver highly customizable AI dialogue solutions."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Multi-platform support"
              })
            }), `
`, _jsx(_components.p, {
              children: "Compatible with iOS, Android, Web, and various embedded hardware platforms, providing a seamless and consistent cross-platform experience."
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "integration-guide-1",
          children: "Integration guide"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["For the best conversational experience, Agora recommends using Conversational AI Engine with specific Agora Video/Voice SDK versions. For details, ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "contact technical support"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["The number of Peak Concurrent Users (PCU) allowed to call the server API under a single App ID is limited to 20. If you need to increase this limit, ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "contact technical support"
            }), "."]
          }), `
`]
        })]
      })]
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
