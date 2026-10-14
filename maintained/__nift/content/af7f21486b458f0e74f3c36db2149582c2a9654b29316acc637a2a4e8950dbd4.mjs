import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "TypeScript",
  description: "Full API reference for the Agora Agent TypeScript SDK — AgoraClient, Agent, AgentSession, and vendor classes."
};
export let _markdown = "\n\nFull API reference for the Agora Conversational AI TypeScript SDK.\n\n## AgoraClient [#agoraclient]\n\n`AgoraClient` extends the Fern-generated base client with domain pool support for regional URL cycling and three authentication modes. Pass `appId` and `appCertificate` only for the recommended app-credentials mode. The SDK mints fresh REST tokens per request and generates RTC join tokens at session start.\n\n```typescript\nimport { AgoraClient, Area } from 'agora-agents';\n```\n\n### Constructor [#constructor]\n\n```typescript\nconst client = new AgoraClient(options: AgoraClient.Options);\n```\n\nThe authentication mode is resolved automatically from the options you provide.\n\n| Option             | Type            | Required | Description                                                             |\n| ------------------ | --------------- | -------- | ----------------------------------------------------------------------- |\n| `area`             | [`Area`](#area) | Yes      | Region for API routing (`Area.US`, `Area.EU`, `Area.AP`, `Area.CN`)     |\n| `appId`            | `string`        | Yes      | Agora App ID                                                            |\n| `appCertificate`   | `string`        | Yes      | Agora App Certificate. Keep this secret and never expose it client-side |\n| `customerId`       | `string`        | No       | Customer ID for Basic Auth                                              |\n| `customerSecret`   | `string`        | No       | Customer Secret for Basic Auth                                          |\n| `authToken`        | `string`        | No       | Raw Agora token. The SDK sends `Authorization: agora token=<authToken>` |\n| `timeoutInSeconds` | `number`        | No       | Default request timeout in seconds                                      |\n| `maxRetries`       | `number`        | No       | Maximum retry attempts                                                  |\n| `fetch`            | `typeof fetch`  | No       | Custom fetch implementation for unsupported runtimes                    |\n\nAuthentication mode is resolved from the options you provide:\n\n| Options provided                | Resolved [`authMode`](#agoraauthmode) |\n| ------------------------------- | ------------------------------------- |\n| `customerId` + `customerSecret` | `\"basic\"`                             |\n| `authToken`                     | `\"token\"`                             |\n| Neither                         | `\"app-credentials\"`                   |\n\nPassing `customerId` without `customerSecret` throws an error.\n\nSee [Authentication](/en/api-reference/api-ref/conversational-ai/authentication) for details on each mode.\n\n### Properties [#properties]\n\nThe following read-only properties are available on any `AgoraClient` instance.\n\n| Property         | Type                              | Description                                                   |\n| ---------------- | --------------------------------- | ------------------------------------------------------------- |\n| `appId`          | `string`                          | The Agora App ID                                              |\n| `appCertificate` | `string`                          | The Agora App Certificate                                     |\n| `authMode`       | [`AgoraAuthMode`](#agoraauthmode) | The resolved authentication mode                              |\n| `area`           | [`Area`](#area)                   | The configured region                                         |\n| `pool`           | `Pool`                            | The underlying domain pool instance used for regional routing |\n\n### Methods [#methods]\n\nThe following methods are available in addition to the Fern-generated sub-client methods.\n\n#### `nextRegion()` [#nextregion]\n\nCycles to the next region prefix in the domain pool. Call this after a request failure to try a different regional endpoint.\n\n```typescript\nclient.nextRegion();\n```\n\n#### `selectBestDomain(signal?)` [#selectbestdomainsignal]\n\nRuns a DNS check to select the best domain suffix. Calls made within 30 seconds of the last successful selection are no-ops.\n\n```typescript\nawait client.selectBestDomain();\n```\n\n| Parameter | Type          | Description                                   |\n| --------- | ------------- | --------------------------------------------- |\n| `signal`  | `AbortSignal` | Optional abort signal to cancel the DNS check |\n\n#### `stopAgent(agentId)` [#stopagentagentid]\n\nStops an agent by ID without an `AgentSession` reference, for example, from an end-call handler. The method treats a `404` response as success.\n\n```typescript\nstopAgent(agentId: string): Promise<void>\n```\n\n#### `getCurrentURL()` [#getcurrenturl]\n\nReturns the full API URL currently in use as a `string`.\n\n```typescript\nconst url = client.getCurrentURL();\n// Example: 'https://api-us-west-1.agora.io/api/conversational-ai-agent'\n```\n\n### Sub-clients [#sub-clients]\n\n`AgoraClient` exposes Fern-generated sub-clients for direct REST API access. You typically do not need these when using the [agentkit layer](#agent).\n\n| Property                 | Description                                                     |\n| ------------------------ | --------------------------------------------------------------- |\n| `client.agents`          | Start, stop, update, speak, interrupt, get history, list agents |\n| `client.agentManagement` | Inject instructions into a running agent (`think`)              |\n| `client.telephony`       | Telephony operations                                            |\n| `client.phoneNumbers`    | Phone number management                                         |\n\nFor full method signatures and request parameters, see the [REST API reference](/en/api-reference/api-ref/conversational-ai/join).\n\n## Agent [#agent]\n\n`Agent` is an immutable configuration object. Each builder method returns a new `Agent` instance — the original is never modified. Define one `Agent` at startup and call `createSession()` on it for each user conversation.\n\n```typescript\nimport { Agent } from 'agora-agents';\n```\n\n### Constructor [#constructor-1]\n\n```typescript\nnew Agent(options: AgentOptions)\n```\n\n`client` is required. All other options are optional. Use the [builder methods](#builder-methods) to set vendor configuration after construction.\n\n| Option             | Type                  | Default     | Description                                                                                              |\n| ------------------ | --------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |\n| `client`           | `AgoraClient`         | —           | Required. Agora client used by `createSession()`                                                         |\n| `pipelineId`       | `string`              | `undefined` | Published AI Studio pipeline ID used as the base configuration. `SessionOptions.pipelineId` overrides it |\n| `instructions`     | `string`              | `undefined` | Deprecated. Set `systemMessages` on the LLM vendor instead                                               |\n| `greeting`         | `string`              | `undefined` | Deprecated. Set `greetingMessage` on the LLM or MLLM vendor instead                                      |\n| `failureMessage`   | `string`              | `undefined` | Deprecated. Set `failureMessage` on the LLM or MLLM vendor instead                                       |\n| `maxHistory`       | `number`              | `undefined` | Deprecated. Set `maxHistory` on the LLM vendor instead                                                   |\n| `greetingConfigs`  | `LlmGreetingConfigs`  | `undefined` | Deprecated. Set `greetingConfigs` on the LLM vendor instead                                              |\n| `turnDetection`    | `TurnDetectionConfig` | `undefined` | Voice activity detection settings                                                                        |\n| `interruption`     | `InterruptionConfig`  | `undefined` | Unified interruption control settings                                                                    |\n| `sal`              | `SalConfig`           | `undefined` | Selective Attention Locking configuration                                                                |\n| `avatar`           | `AvatarConfig`        | `undefined` | Avatar configuration                                                                                     |\n| `advancedFeatures` | `AdvancedFeatures`    | `undefined` | Enable MLLM mode, AI-VAD, and other advanced features                                                    |\n| `parameters`       | `SessionParamsInput`  | `undefined` | Session parameters including silence and farewell config                                                 |\n| `geofence`         | `GeofenceConfig`      | `undefined` | Regional access restriction                                                                              |\n| `labels`           | `Labels`              | `undefined` | Custom key-value labels returned in notification callbacks                                               |\n| `rtc`              | `RtcConfig`           | `undefined` | RTC media encryption                                                                                     |\n| `fillerWords`      | `FillerWordsConfig`   | `undefined` | Filler words played while waiting for the LLM response                                                   |\n\n### Builder methods [#builder-methods]\n\nAll builder methods return a **new** `Agent` instance. The original is never modified.\n\n#### `withLlm(vendor)` [#withllmvendor]\n\nSets the LLM vendor. Pass an instance of [`OpenAI`](#openai), [`AzureOpenAI`](#azureopenai), [`Anthropic`](#anthropic), [`Gemini`](#gemini), or any [other LLM vendor](#other-llm-vendors).\n\n```typescript\nwithLlm(vendor: LlmVendor): Agent<TTSSampleRate, TArea>\n```\n\n#### `withTts(vendor)` [#withttsvendor]\n\nSets the TTS vendor. The sample rate type is captured and tracked for [avatar](#avatar-vendors) compatibility.\n\n```typescript\nwithTts<SR extends number>(vendor: TtsVendor<SR>): Agent<SR, TArea>\n```\n\n#### `withStt(vendor)` [#withsttvendor]\n\nSets the STT vendor. Pass an instance of any [STT vendor class](#stt-vendors).\n\n```typescript\nwithStt(vendor: SttVendor): Agent<TTSSampleRate, TArea>\n```\n\n#### `withMllm(vendor)` [#withmllmvendor]\n\nSets the MLLM vendor for multimodal mode. Pass [`OpenAIRealtime`](#openairealtime), [`AzureOpenAIRealtime`](#azureopenairealtime), [`GeminiLive`](#geminilive), [`VertexAI`](#vertexai), [`XaiGrok`](#xaigrok), or [`OpenAIGPTLive`](#openaigptlive). Calling `withMllm()` automatically sets `mllm.enable = true`. MLLM mode does not require `withTts()` / `withLlm()` / `withStt()`.\n\n<CalloutContainer type=\"info\">\n  <CalloutDescription>\n    Avatars are only supported with the cascading ASR + LLM + TTS pipeline. If you combine `withMllm()` with `withAvatar()`, the SDK throws an error when `toProperties()` or `session.start()` is called.\n  </CalloutDescription>\n</CalloutContainer>\n\n```typescript\nwithMllm(vendor: GlobalMllmVendor | CNMllmVendor): Agent<TTSSampleRate, TArea>\n```\n\n#### `withAvatar(vendor)` [#withavatarvendor]\n\nSets the avatar vendor. The `this` constraint enforces at compile time that the agent's TTS sample rate matches the avatar's required rate.\n\n<CalloutContainer type=\"info\">\n  <CalloutDescription>\n    Requires the cascading ASR + LLM + TTS pipeline. If you combine `withAvatar()` with `withMllm()`, the SDK throws an error when `toProperties()` or `session.start()` is called.\n  </CalloutDescription>\n</CalloutContainer>\n\n```typescript\nwithAvatar<RequiredSR extends number>(\n  this: Agent<RequiredSR>,\n  vendor: AvatarVendor<RequiredSR>\n): Agent<RequiredSR, TArea>\n```\n\n#### `withTurnDetection(config)` [#withturndetectionconfig]\n\nConfigures cascading-flow turn detection. Pass `{ config: { start_of_speech, end_of_speech } }` for SOS/EOS detection. Use `withInterruption()` for interruption behavior and MLLM vendor `turnDetection` for MLLM turn detection.\n\n```typescript\nwithTurnDetection(config: TurnDetectionConfig): Agent<TTSSampleRate, TArea>\n```\n\n#### `withInterruption(config)` [#withinterruptionconfig]\n\nConfigures unified interruption behavior using the top-level `interruption` object. Use this for `start_of_speech` and `keywords` interruption modes.\n\n```typescript\nwithInterruption(config: InterruptionConfig): Agent<TTSSampleRate, TArea>\n```\n\n#### `withInstructions(text)` [#withinstructionstext]\n\nOverrides the LLM system prompt on a new `Agent` instance. Deprecated. Set `systemMessages` on the LLM vendor instead.\n\n```typescript\nwithInstructions(instructions: string): Agent<TTSSampleRate, TArea>\n```\n\n#### `withGreeting(text)` [#withgreetingtext]\n\nOverrides the greeting message on a new `Agent` instance. Deprecated. Set `greetingMessage` on the LLM or MLLM vendor instead.\n\n```typescript\nwithGreeting(greeting: string): Agent<TTSSampleRate, TArea>\n```\n\n#### Other builder methods [#other-builder-methods]\n\nThe following methods follow the same pattern — each returns a new `Agent` instance with the updated configuration.\n\n| Method                             | Parameter type            | Description                                                                                                                                                    |\n| ---------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `withSal(config)`                  | `SalConfig`               | Set Selective Attention Locking configuration                                                                                                                  |\n| `withAdvancedFeatures(features)`   | `AdvancedFeatures`        | Set advanced features                                                                                                                                          |\n| `withTools(enabled = true)`        | `boolean`                 | Enable or disable MCP tool and custom tool invocation                                                                                                          |\n| `withParameters(parameters)`       | `SessionParamsInput`      | Set session parameters                                                                                                                                         |\n| `withAudioScenario(audioScenario)` | `ParametersAudioScenario` | Set `parameters.audio_scenario`. Use the exported `AudioScenario` constants for discoverability, for example `agent.withAudioScenario(AudioScenario.Aiserver)` |\n| `withFailureMessage(message)`      | `string`                  | Deprecated. Set `failureMessage` on the LLM or MLLM vendor instead                                                                                             |\n| `withMaxHistory(n)`                | `number`                  | Deprecated. Set `maxHistory` on the LLM vendor instead. For Azure OpenAI Realtime MLLM, set `maxHistory` on the MLLM vendor                                    |\n| `withGreetingConfigs(configs)`     | `LlmGreetingConfigs`      | Deprecated. Set `greetingConfigs` on the LLM vendor instead                                                                                                    |\n| `withGeofence(geofence)`           | `GeofenceConfig`          | Set geofence configuration                                                                                                                                     |\n| `withLabels(labels)`               | `Labels`                  | Set custom labels                                                                                                                                              |\n| `withRtc(rtc)`                     | `RtcConfig`               | Set RTC configuration                                                                                                                                          |\n| `withFillerWords(fillerWords)`     | `FillerWordsConfig`       | Set filler words configuration                                                                                                                                 |\n\n### `createSession(options)` [#createsessionoptions]\n\nCreates an [`AgentSession`](#agentsession) for a channel using the agent's client. Doesn't start the agent. Call [`session.start()`](#start) to join the channel.\n\n```typescript\ncreateSession(options: SessionOptions): AgentSession\n```\n\n`SessionOptions` fields:\n\n| Option            | Type                        | Required | Description                                                                                                                                        |\n| ----------------- | --------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `channel`         | `string`                    | Yes      | Channel name to join                                                                                                                               |\n| `agentUid`        | `string`                    | Yes      | The agent's RTC UID. Must be a numeric string when `token` is omitted                                                                              |\n| `remoteUids`      | `string[]`                  | Yes      | Remote user UIDs the agent listens and responds to                                                                                                 |\n| `name`            | `string`                    | No       | Agent instance name sent to the Agora API. Defaults to `agent-{timestamp}`                                                                         |\n| `token`           | `string`                    | No       | Pre-built RTC+RTM token. Omit to auto-generate from app credentials                                                                                |\n| `expiresIn`       | `number`                    | No       | Token lifetime in seconds. Only applies when the token is auto-generated. Valid range: 1–86400. Use [`ExpiresIn`](#expiresin) helpers for clarity  |\n| `idleTimeout`     | `number`                    | No       | Seconds before the agent auto-exits when no audio is detected. `0` disables the timeout                                                            |\n| `enableStringUid` | `boolean`                   | No       | Use string UIDs instead of numeric UIDs                                                                                                            |\n| `preset`          | `PresetInput`               | No       | Advanced project-specific presets. Use only when Agora provides a specific preset ID for your project. Most applications should not set this field |\n| `pipelineId`      | `string`                    | No       | Published AI Studio pipeline ID to use as the base configuration                                                                                   |\n| `debug`           | `boolean`                   | No       | Log API requests to the console                                                                                                                    |\n| `warn`            | `(message: string) => void` | No       | Custom warning logger; pass a no-op to silence warnings                                                                                            |\n\n`preset` is session-scoped because the underlying Agora start/join API applies presets per session, not per reusable `Agent` definition.\n\nWhen you omit credentials for supported reseller-backed vendor models, AgentKit infers the matching session preset automatically:\n\n* Deepgram STT: `nova-2`, `nova-3`\n* OpenAI LLM: `gpt-4o-mini`, `gpt-4.1-mini`, `gpt-5-nano`, `gpt-5-mini`\n* OpenAI TTS: `tts-1`\n* MiniMax TTS: `speech-2.6-turbo`, `speech-2.8-turbo`\n\nIf you provide your own vendor API key for those same models, AgentKit keeps the request in BYOK mode and does not infer a preset.\n\n### Properties [#properties-1]\n\nRead-only properties available on any `Agent` instance.\n\n| Property           | Type                               | Description                           |\n| ------------------ | ---------------------------------- | ------------------------------------- |\n| `pipelineId`       | `string \\| undefined`              | AI Studio pipeline ID                 |\n| `greetingConfigs`  | `LlmGreetingConfigs \\| undefined`  | Greeting playback configuration       |\n| `instructions`     | `string \\| undefined`              | LLM system prompt                     |\n| `greeting`         | `string \\| undefined`              | Greeting message                      |\n| `failureMessage`   | `string \\| undefined`              | Message spoken when LLM fails         |\n| `maxHistory`       | `number \\| undefined`              | Maximum conversation history length   |\n| `llm`              | `LlmConfig \\| undefined`           | LLM configuration                     |\n| `tts`              | `TtsConfig \\| undefined`           | TTS configuration                     |\n| `stt`              | `SttConfig \\| undefined`           | STT configuration                     |\n| `mllm`             | `MllmConfig \\| undefined`          | MLLM configuration                    |\n| `avatar`           | `AvatarConfig \\| undefined`        | Avatar configuration                  |\n| `turnDetection`    | `TurnDetectionConfig \\| undefined` | Turn detection configuration          |\n| `interruption`     | `InterruptionConfig \\| undefined`  | Interruption configuration            |\n| `sal`              | `SalConfig \\| undefined`           | SAL configuration                     |\n| `advancedFeatures` | `AdvancedFeatures \\| undefined`    | Advanced features                     |\n| `parameters`       | `SessionParams \\| undefined`       | Session parameters                    |\n| `geofence`         | `GeofenceConfig \\| undefined`      | Geofence configuration                |\n| `labels`           | `Labels \\| undefined`              | Custom labels                         |\n| `rtc`              | `RtcConfig \\| undefined`           | RTC configuration                     |\n| `fillerWords`      | `FillerWordsConfig \\| undefined`   | Filler words configuration            |\n| `config`           | `AgentOptions`                     | Full read-only configuration snapshot |\n\n### `toProperties(opts)` [#topropertiesopts]\n\nLow-level method to convert the agent configuration to the Fern request format. Used internally by `AgentSession.start()`. You typically do not need to call this directly unless building custom request bodies.\n\n```typescript\ntoProperties(opts): StartAgentsRequest.Properties\n```\n\nIn cascading mode, throws if TTS or LLM isn't set. If you don't call `withStt()`, ASR defaults to ARES (`fengming` for `Area.CN`). `turnDetection.language` defaults to `en-US` and is also sent as `asr.language`.\n\n### Type aliases [#type-aliases]\n\nPublic aliases over Fern-generated types include `LlmConfig`, `SttConfig`, `AsrConfig` (= `SttConfig`), `MllmConfig`, `AvatarConfig`, session/conversation types, and think types (`ThinkOnListeningAction`, etc.).\n\nThink value constants: `ThinkOnListeningActionInject`, `ThinkOnListeningActionInterrupt`, `ThinkOnListeningActionIgnore`, `ThinkOnThinkingActionInterrupt`, `ThinkOnThinkingActionIgnore`, `ThinkOnSpeakingActionInterrupt`, `ThinkOnSpeakingActionIgnore`.\n\nThe think action options also accept the string `append`, which has no convenience constant. With `append`, the instruction doesn't interrupt the current interaction. The agent waits for the current user turn, LLM inference, or TTS playback to finish, then appends the instruction to the context as a separate user message and starts a new turn.\n\n`FillerWordsConfig` supports static and generated filler words. Generated mode requires static fallback phrases, while `generated_config` and `prompt` are optional. Agora hosts the generation service, so you can't configure its model endpoint, API key, or model parameters. For the field structure, see [Configure generated filler words](/en/ai/build/shape-the-conversation/filler-words#configure-generated-filler-words).\n\n`FillerWordsContentGeneratedConfig` sets the conversation context for generated filler words. Use `context_message_limit` (`1` to `6`, defaults to `1`) to set how many of the most recent conversation messages to use, counting the current turn's message, and `history_character_limit` (`0` to `10000`, defaults to `1000`) to cap the combined characters of the earlier messages. For details, see [Talking while waiting](/en/ai/build/shape-the-conversation/filler-words#widen-the-conversation-window).\n\nPublic aliases also include `FillerWordsContentGeneratedConfig` and the custom tool types `LlmTool`, `LlmToolFunction`, `LlmToolServer`, and `LlmToolExecution`. `llm.tools` is independent of MCP server configuration, but both require `withTools(true)` to enable tool calling.\n\n## AgentSession [#agentsession]\n\n`AgentSession` manages the full lifecycle of a running agent. Create sessions using [`agent.createSession()`](#createsessionoptions); do not call the constructor directly.\n\n```typescript\nimport { AgentSession } from 'agora-agents';\n```\n\n### State machine [#state-machine]\n\nA session progresses through the following states:\n\n```text\nidle ──► starting ──► running ──► stopping ──► stopped\n            │                         │\n            ▼                         ▼\n          error                     error\n```\n\n| Transition           | Trigger                                 |\n| -------------------- | --------------------------------------- |\n| `idle → starting`    | `start()` called                        |\n| `starting → running` | API responds with agent ID              |\n| `starting → error`   | API request fails                       |\n| `running → stopping` | `stop()` called                         |\n| `stopping → stopped` | API confirms agent stopped              |\n| `stopping → error`   | Stop request fails with a non-404 error |\n\n`start()` can also be called from `stopped` or `error` state to restart the session. `say()`, `interrupt()`, `update()`, and `think()` reject on failure but don't change the session state.\n\n### Methods [#methods-1]\n\nThe following methods are available on an `AgentSession` instance.\n\n#### `start()` [#start]\n\nStarts the agent session. Generates tokens if not provided, sends the start request, and returns the agent ID. Resolves explicit `preset` values and also infers reseller presets from supported vendor configs when credentials are omitted.\n\n```typescript\nstart(): Promise<string>\n```\n\n* Transitions: `idle` / `stopped` / `error` → `starting` → `running`\n* Throws if called in `starting`, `running`, or `stopping` state\n* Throws if avatar config is invalid (wrong TTS sample rate)\n* Throws if no `token` is provided and the client has no `appCertificate`\n* Throws if `agentUid` (or avatar `agoraUid`) isn't numeric when tokens are auto-generated\n* Throws if `appId` or `appCertificate` isn't exactly 32 characters when tokens are auto-generated\n* Throws if MLLM is enabled together with an enabled avatar — avatars are only supported with the cascading ASR + LLM + TTS pipeline\n* Applies explicit `preset` values when provided and sends Agora-managed configuration when supported vendor credentials are omitted\n* Fills generic avatar `agora_appid` and `agora_channel` from the session when omitted\n* Generates avatar `agora_token` for `HeyGenAvatar`, `LiveAvatarAvatar`, `GenericAvatar`, `Tavus`, `Protoface`, and `LemonSlice` when `agoraToken` is omitted and the client has an `appCertificate`. Other vendors (`AkoolAvatar`, `AnamAvatar`) never receive an auto-generated token.\n\n#### `stop()` [#stop]\n\nStops the agent session and removes the agent from the channel. If the agent has already stopped — for example due to idle timeout — resolves silently rather than throwing a 404 error.\n\n```typescript\nstop(): Promise<void>\n```\n\n* Transitions: `running` → `stopping` → `stopped`\n* Throws if called outside `running` state\n\n#### `say(text, options?)` [#saytext-options]\n\nInstructs the agent to speak the given text.\n\n```typescript\nsay(text: string, options?: SayOptions): Promise<void>\n```\n\n| Parameter               | Type                              | Required | Description                                         |\n| ----------------------- | --------------------------------- | -------- | --------------------------------------------------- |\n| `text`                  | `string`                          | Yes      | The text for the agent to speak                     |\n| `options.priority`      | [`SpeakPriority`](#speakpriority) | No       | Message priority                                    |\n| `options.interruptable` | `boolean`                         | No       | Whether this message can be interrupted by the user |\n\n* Only valid in `running` state\n\n#### `interrupt()` [#interrupt]\n\nInterrupts the agent's current speech.\n\n```typescript\ninterrupt(): Promise<void>\n```\n\n* Only valid in `running` state\n\n#### `think(text, options?)` [#thinktext-options]\n\nInjects a custom text instruction into the running agent.\n\n```typescript\nthink(text: string, options?: ThinkOptions): Promise<ThinkResponse>\n```\n\n| Parameter                     | Type                     | Required | Description                                                                      |\n| ----------------------------- | ------------------------ | -------- | -------------------------------------------------------------------------------- |\n| `text`                        | `string`                 | Yes      | The instruction text                                                             |\n| `options.on_listening_action` | `ThinkOnListeningAction` | No       | Action when the agent is listening: `inject`, `interrupt`, `ignore`, or `append` |\n| `options.on_thinking_action`  | `ThinkOnThinkingAction`  | No       | Action when the agent is thinking: `interrupt`, `ignore`, or `append`            |\n| `options.on_speaking_action`  | `ThinkOnSpeakingAction`  | No       | Action when the agent is speaking: `interrupt`, `ignore`, or `append`            |\n| `options.interruptable`       | `boolean`                | No       | Whether the user can interrupt the resulting response                            |\n| `options.metadata`            | `Record<string, string>` | No       | Custom key-value metadata                                                        |\n\n* Only valid in `running` state\n\n#### `update(config)` [#updateconfig]\n\nUpdates the agent configuration mid-session without restarting. Accepts a partial configuration object in REST API format.\n\n```typescript\nupdate(config: AgentConfigUpdate): Promise<void>\n```\n\n* Only valid in `running` state\n\n#### `getHistory()` [#gethistory]\n\nFetches the conversation history for this session. Requires a valid agent ID — `start()` must have been called successfully.\n\n```typescript\ngetHistory(): Promise<ConversationHistory>\n```\n\n#### `getTurns(options?)` [#getturnsoptions]\n\nFetches turn-by-turn analytics for this session, including start/end events and latency metrics. Requires a valid agent ID and `start()` must have been called successfully.\n\n```typescript\ngetTurns(options?: GetTurnsOptions): Promise<ConversationTurns>\n```\n\n* `options.page_index`: page number, starting from `1`\n* `options.page_size`: number of turns per page\n\n#### `getAllTurns(options?)` [#getallturnsoptions]\n\nFetches all turn analytics pages and merges the `turns` array. Requires a valid agent ID and `start()` must have been called successfully.\n\n```typescript\ngetAllTurns(options?: Omit<GetTurnsOptions, \"page_index\">): Promise<ConversationTurns>\n```\n\n* Requires a valid `agentId`\n* For very long sessions, prefer processing pages with `getTurns()` to avoid holding all turns in memory\n\n#### `getInfo()` [#getinfo]\n\nFetches current agent metadata from the API. Requires a valid agent ID.\n\n```typescript\ngetInfo(): Promise<SessionInfo>\n```\n\n#### `on(event, handler)` [#onevent-handler]\n\nSubscribes to a session event. Register handlers **before** calling `start()` to avoid missing the `started` event.\n\n```typescript\non<T>(event: AgentSessionEvent, handler: AgentSessionEventHandler<T>): void\n```\n\n#### `off(event, handler)` [#offevent-handler]\n\nUnsubscribes a previously registered event handler.\n\n```typescript\noff<T>(event: AgentSessionEvent, handler: AgentSessionEventHandler<T>): void\n```\n\n### Events [#events]\n\nThe session emits the following events. See [`AgentSessionEvent`](#agentsessionevent) and [`AgentSessionEventHandler`](#agentsessioneventhandler) for type details.\n\n| Event       | Payload type          | Description                                   |\n| ----------- | --------------------- | --------------------------------------------- |\n| `\"started\"` | `{ agentId: string }` | Agent successfully joined the channel         |\n| `\"stopped\"` | `{ agentId: string }` | Agent left the channel                        |\n| `\"error\"`   | `unknown`             | The error thrown during `start()` or `stop()` |\n\n### Properties [#properties-2]\n\nThe following read-only properties are available on any `AgentSession` instance.\n\n| Property             | Type                                                                      | Description                                                                                             |\n| -------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |\n| `status`             | `\"idle\" \\| \"starting\" \\| \"running\" \\| \"stopping\" \\| \"stopped\" \\| \"error\"` | Current session state. One of `\"idle\"`, `\"starting\"`, `\"running\"`, `\"stopping\"`, `\"stopped\"`, `\"error\"` |\n| `id`                 | `string \\| null`                                                          | Agent ID, populated after `start()` resolves                                                            |\n| `agent`              | `Agent`                                                                   | The agent configuration this session was created from                                                   |\n| `appId`              | `string`                                                                  | The Agora App ID for this session                                                                       |\n| `raw`                | `AgentsClient`                                                            | Direct access to the Fern-generated `AgentsClient` for advanced operations                              |\n| `rawAgentManagement` | `AgentManagementClient`                                                   | Direct access to the Fern-generated agent management client                                             |\n\n#### Using `session.raw` [#using-sessionraw]\n\nAccess the generated REST client to call endpoints not yet wrapped:\n\n```typescript\nawait session.raw.getTurns({\n  appid: session.appId,\n  agentId: session.id!,\n});\n```\n\nYou must pass `appid` and `agentId` manually when using raw methods.\n\n### Presets and BYOK [#presets-and-byok]\n\nPrefer configuring vendors on the `Agent` builder. When you omit credentials for supported Agora-managed models, AgentKit sends the matching Agora-managed configuration at session start.\n\n`preset` is an advanced session option for project-specific settings, not for selecting Agora-managed models. Most applications should use the builder instead.\n\n* Omit vendor credentials on the builder for supported Agora-managed models.\n* Provide vendor API keys when you want BYOK.\n* Pass `preset` on `agent.createSession(...)` only when you need to access specific project-specific settings.\n\nSupported Agora-managed models:\n\n* Deepgram STT: `nova-2`, `nova-3`\n* OpenAI LLM: `gpt-4o-mini`, `gpt-4.1-mini`, `gpt-5-nano`, `gpt-5-mini`\n* OpenAI TTS: `tts-1`\n* MiniMax TTS: `speech-2.6-turbo`, `speech-2.8-turbo`\n\n## Vendors [#vendors]\n\nAll vendor classes are imported from `agora-agents`. Pass vendor instances to the [Agent builder methods](#builder-methods).\n\n### LLM vendors [#llm-vendors]\n\nUse with [`withLlm()`](#withllmvendor).\n\n#### OpenAI [#openai]\n\n```typescript\nnew OpenAI(options: OpenAIOptions)\n```\n\n| Option              | Type                        | Required    | Description                                                                                                  |\n| ------------------- | --------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------ |\n| `apiKey`            | `string`                    | Usually     | OpenAI API key. Optional for Agora-managed preset models                                                     |\n| `model`             | `string`                    | Yes         | Model name, for example `'gpt-4o-mini'`                                                                      |\n| `url`               | `string`                    | Conditional | API endpoint URL. Required when `apiKey` is set (BYOK); default `https://api.openai.com/v1/chat/completions` |\n| `maxHistory`        | `number`                    | No          | Maximum conversation history to cache                                                                        |\n| `temperature`       | `number`                    | No          | Sampling temperature (0.0–2.0)                                                                               |\n| `topP`              | `number`                    | No          | Nucleus sampling (0.0–1.0)                                                                                   |\n| `maxTokens`         | `number`                    | No          | Maximum tokens to generate                                                                                   |\n| `systemMessages`    | `Record<string, unknown>[]` | No          | Additional system messages                                                                                   |\n| `greetingMessage`   | `string`                    | No          | Agent greeting message                                                                                       |\n| `failureMessage`    | `string`                    | No          | Message spoken when the LLM call fails                                                                       |\n| `inputModalities`   | `string[]`                  | No          | Input modalities. Default: `[\"text\"]`                                                                        |\n| `outputModalities`  | `string[]`                  | No          | Output modalities                                                                                            |\n| `params`            | `Record<string, unknown>`   | No          | Additional LLM parameters passed to the model                                                                |\n| `headers`           | `Record<string, string>`    | No          | Custom HTTP headers forwarded to the LLM provider                                                            |\n| `vendor`            | `string`                    | No          | Vendor override                                                                                              |\n| `mcpServers`        | `Record<string, unknown>[]` | No          | MCP server connections                                                                                       |\n| `tools`             | `LlmTool[]`                 | No          | Synchronous custom tool definitions the LLM can call. Requires `withTools(true)`                             |\n| `greetingConfigs`   | `LlmGreetingConfigs`        | No          | Greeting playback configuration                                                                              |\n| `templateVariables` | `Record<string, string>`    | No          | Template variables for messages. Custom tools can reference them with `{{template_variables.<name>}}`        |\n\n`apiKey` is optional for the following reseller preset models: `gpt-4o-mini`, `gpt-4.1-mini`, `gpt-5-nano`, `gpt-5-mini`. If `apiKey` is omitted for one of those models, AgentKit infers the matching session preset. This no-key branch is only available with the default OpenAI endpoint and without a custom vendor hint. If `apiKey` is provided, AgentKit uses standard BYOK behavior instead.\n\n#### AzureOpenAI [#azureopenai]\n\n```typescript\nnew AzureOpenAI(options: AzureOpenAIOptions)\n```\n\n| Option              | Type                        | Required    | Description                                                                                           |\n| ------------------- | --------------------------- | ----------- | ----------------------------------------------------------------------------------------------------- |\n| `apiKey`            | `string`                    | Yes         | Azure OpenAI API key                                                                                  |\n| `model`             | `string`                    | Yes         | Model or deployment name                                                                              |\n| `resourceName`      | `string`                    | Conditional | Azure resource name. Required unless `endpoint` is set                                                |\n| `endpoint`          | `string`                    | Conditional | Full Azure base URL. Takes precedence over `resourceName`; required unless `resourceName` is set      |\n| `deploymentName`    | `string`                    | Yes         | Deployment name in Azure                                                                              |\n| `apiVersion`        | `string`                    | No          | Azure API version. Default: `'2024-08-01-preview'`                                                    |\n| `maxHistory`        | `number`                    | No          | Maximum conversation history to cache                                                                 |\n| `temperature`       | `number`                    | No          | Sampling temperature (0.0–2.0)                                                                        |\n| `topP`              | `number`                    | No          | Nucleus sampling (0.0–1.0)                                                                            |\n| `maxTokens`         | `number`                    | No          | Maximum tokens to generate                                                                            |\n| `systemMessages`    | `Record<string, unknown>[]` | No          | Additional system messages                                                                            |\n| `greetingMessage`   | `string`                    | No          | Agent greeting message                                                                                |\n| `failureMessage`    | `string`                    | No          | Message spoken when the LLM call fails                                                                |\n| `inputModalities`   | `string[]`                  | No          | Input modalities. Default: `[\"text\"]`                                                                 |\n| `outputModalities`  | `string[]`                  | No          | Output modalities                                                                                     |\n| `params`            | `Record<string, unknown>`   | No          | Additional LLM parameters                                                                             |\n| `headers`           | `Record<string, string>`    | No          | Custom HTTP headers forwarded to the LLM provider                                                     |\n| `vendor`            | `string`                    | No          | Vendor override. Defaults to `azure`                                                                  |\n| `mcpServers`        | `Record<string, unknown>[]` | No          | MCP server connections                                                                                |\n| `tools`             | `LlmTool[]`                 | No          | Synchronous custom tool definitions the LLM can call. Requires `withTools(true)`                      |\n| `greetingConfigs`   | `LlmGreetingConfigs`        | No          | Greeting playback configuration                                                                       |\n| `templateVariables` | `Record<string, string>`    | No          | Template variables for messages. Custom tools can reference them with `{{template_variables.<name>}}` |\n\n#### Anthropic [#anthropic]\n\n```typescript\nnew Anthropic(options: AnthropicOptions)\n```\n\n| Option              | Type                        | Required | Description                                                                                           |\n| ------------------- | --------------------------- | -------- | ----------------------------------------------------------------------------------------------------- |\n| `apiKey`            | `string`                    | Yes      | Anthropic API key                                                                                     |\n| `model`             | `string`                    | Yes      | Model name                                                                                            |\n| `url`               | `string`                    | Yes      | Anthropic messages endpoint URL                                                                       |\n| `maxTokens`         | `number`                    | Yes      | Maximum tokens to generate                                                                            |\n| `headers`           | `Record<string, string>`    | Yes      | Request headers, including `anthropic-version`                                                        |\n| `maxHistory`        | `number`                    | No       | Maximum conversation history to cache                                                                 |\n| `temperature`       | `number`                    | No       | Sampling temperature (0.0–1.0)                                                                        |\n| `topP`              | `number`                    | No       | Nucleus sampling (0.0–1.0)                                                                            |\n| `systemMessages`    | `Record<string, unknown>[]` | No       | Additional system messages                                                                            |\n| `greetingMessage`   | `string`                    | No       | Agent greeting message                                                                                |\n| `failureMessage`    | `string`                    | No       | Message spoken when the LLM call fails                                                                |\n| `inputModalities`   | `string[]`                  | No       | Input modalities. Default: `[\"text\"]`                                                                 |\n| `outputModalities`  | `string[]`                  | No       | Output modalities                                                                                     |\n| `params`            | `Record<string, unknown>`   | No       | Additional LLM parameters                                                                             |\n| `vendor`            | `string`                    | No       | Vendor override                                                                                       |\n| `mcpServers`        | `Record<string, unknown>[]` | No       | MCP server connections                                                                                |\n| `tools`             | `LlmTool[]`                 | No       | Synchronous custom tool definitions the LLM can call. Requires `withTools(true)`                      |\n| `greetingConfigs`   | `LlmGreetingConfigs`        | No       | Greeting playback configuration                                                                       |\n| `templateVariables` | `Record<string, string>`    | No       | Template variables for messages. Custom tools can reference them with `{{template_variables.<name>}}` |\n\n#### Gemini [#gemini]\n\n```typescript\nnew Gemini(options: GeminiOptions)\n```\n\n| Option              | Type                        | Required | Description                                                                                                                                                          |\n| ------------------- | --------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `apiKey`            | `string`                    | Yes      | Google API key                                                                                                                                                       |\n| `model`             | `string`                    | Yes      | Model name, for example `'gemini-pro'`                                                                                                                               |\n| `url`               | `string`                    | No       | API endpoint URL. Default: `https://generativelanguage.googleapis.com/v1beta/models/{model}:streamGenerateContent?alt=sse&key={apiKey}`, with the API key in the URL |\n| `maxHistory`        | `number`                    | No       | Maximum conversation history to cache                                                                                                                                |\n| `temperature`       | `number`                    | No       | Sampling temperature (0.0–2.0)                                                                                                                                       |\n| `topP`              | `number`                    | No       | Nucleus sampling (0.0–1.0)                                                                                                                                           |\n| `topK`              | `number`                    | No       | Top-k sampling                                                                                                                                                       |\n| `maxOutputTokens`   | `number`                    | No       | Maximum output tokens to generate                                                                                                                                    |\n| `systemMessages`    | `Record<string, unknown>[]` | No       | Additional system messages                                                                                                                                           |\n| `greetingMessage`   | `string`                    | No       | Agent greeting message                                                                                                                                               |\n| `failureMessage`    | `string`                    | No       | Message spoken when the LLM call fails                                                                                                                               |\n| `inputModalities`   | `string[]`                  | No       | Input modalities. Default: `[\"text\"]`                                                                                                                                |\n| `outputModalities`  | `string[]`                  | No       | Output modalities                                                                                                                                                    |\n| `params`            | `Record<string, unknown>`   | No       | Additional LLM parameters                                                                                                                                            |\n| `headers`           | `Record<string, string>`    | No       | Custom HTTP headers forwarded to the LLM provider                                                                                                                    |\n| `vendor`            | `string`                    | No       | Vendor override                                                                                                                                                      |\n| `mcpServers`        | `Record<string, unknown>[]` | No       | MCP server connections                                                                                                                                               |\n| `tools`             | `LlmTool[]`                 | No       | Synchronous custom tool definitions the LLM can call. Requires `withTools(true)`                                                                                     |\n| `greetingConfigs`   | `LlmGreetingConfigs`        | No       | Greeting playback configuration                                                                                                                                      |\n| `templateVariables` | `Record<string, string>`    | No       | Template variables for messages. Custom tools can reference them with `{{template_variables.<name>}}`                                                                |\n\n### Other LLM vendors [#other-llm-vendors]\n\n| Class           | Provider              | Key options                                          |\n| --------------- | --------------------- | ---------------------------------------------------- |\n| `Groq`          | Groq                  | `apiKey`, `model`, `url`                             |\n| `VertexAILLM`   | Google Vertex AI      | `apiKey`, `model`, `projectId`, `location`, `url?`   |\n| `AmazonBedrock` | Amazon Bedrock        | `accessKey`, `secretKey`, `region`, `model`          |\n| `Dify`          | Dify                  | `apiKey`, `url`, `model`, `user?`, `conversationId?` |\n| `CustomLLM`     | OpenAI-compatible LLM | `apiKey`, `model`, `url`                             |\n\n`Groq` and `CustomLLM` share `OpenAI`'s option shape; `VertexAILLM` mirrors `Gemini`. All accept common LLM fields, such as `systemMessages`, `greetingMessage`, `failureMessage`, `maxHistory`, `params`, `headers`, and `tools`.\n\n`tools` declares custom tools the LLM can choose to call. Each tool includes a model-visible function definition and the server configuration for a synchronous `GET` or `POST` request. `withTools(true)` applies to both `tools` and MCP server configuration. For more information, see [Call custom tools](/en/ai/build/tools/custom-tools).\n\n### TTS vendors [#tts-vendors]\n\nUse with [`withTts()`](#withttsvendor). The `sampleRate` option determines avatar compatibility — see [`withAvatar()`](#withavatarvendor).\n\n#### ElevenLabsTTS [#elevenlabstts]\n\n```typescript\nnew ElevenLabsTTS<SR extends ElevenLabsSampleRate>(options: ElevenLabsTTSOptions<SR>)\n```\n\n| Option                     | Type                               | Required | Description                                 |\n| -------------------------- | ---------------------------------- | -------- | ------------------------------------------- |\n| `key`                      | `string`                           | Yes      | ElevenLabs API key                          |\n| `modelId`                  | `string`                           | Yes      | Model ID, for example `'eleven_flash_v2_5'` |\n| `voiceId`                  | `string`                           | Yes      | Voice ID                                    |\n| `baseUrl`                  | `string`                           | Yes      | WebSocket base URL                          |\n| `sampleRate`               | `16000 \\| 22050 \\| 24000 \\| 44100` | No       | Audio sample rate in Hz                     |\n| `optimizeStreamingLatency` | `number`                           | No       | Latency optimization level (0–4)            |\n| `stability`                | `number`                           | No       | Voice stability (0.0–1.0)                   |\n| `similarityBoost`          | `number`                           | No       | Voice similarity boost (0.0–1.0)            |\n| `style`                    | `number`                           | No       | Voice style exaggeration (0.0–1.0)          |\n| `useSpeakerBoost`          | `boolean`                          | No       | Enable speaker boost                        |\n| `skipPatterns`             | `number[]`                         | No       | Skip patterns for bracketed content         |\n\n#### MicrosoftTTS [#microsofttts]\n\n```typescript\nnew MicrosoftTTS<SR extends MicrosoftSampleRate>(options: MicrosoftTTSOptions<SR>)\n```\n\n| Option         | Type                      | Required | Description                                   |\n| -------------- | ------------------------- | -------- | --------------------------------------------- |\n| `key`          | `string`                  | Yes      | Azure Speech API key                          |\n| `region`       | `string`                  | Yes      | Azure region, for example `'eastus'`          |\n| `voiceName`    | `string`                  | Yes      | Voice name, for example `'en-US-JennyNeural'` |\n| `sampleRate`   | `16000 \\| 24000 \\| 48000` | No       | Audio sample rate in Hz                       |\n| `speed`        | `number`                  | No       | Speaking rate multiplier                      |\n| `volume`       | `number`                  | No       | Audio volume                                  |\n| `skipPatterns` | `number[]`                | No       | Skip patterns for bracketed content           |\n\n#### OpenAITTS [#openaitts]\n\nFixed at 24,000 Hz — no configurable sample rate.\n\n```typescript\nnew OpenAITTS(options: OpenAITTSOptions)\n```\n\n| Option         | Type       | Required | Description                                                                    |\n| -------------- | ---------- | -------- | ------------------------------------------------------------------------------ |\n| `apiKey`       | `string`   | Usually  | OpenAI API key                                                                 |\n| `voice`        | `string`   | Yes      | Voice name: `'alloy'`, `'echo'`, `'fable'`, `'onyx'`, `'nova'`, or `'shimmer'` |\n| `model`        | `string`   | No       | Model name. Required (with `apiKey` and `baseUrl`) for BYOK                    |\n| `baseUrl`      | `string`   | No       | Endpoint URL. Required (with `apiKey` and `model`) for BYOK                    |\n| `instructions` | `string`   | No       | Custom voice instructions                                                      |\n| `speed`        | `number`   | No       | Speech speed multiplier                                                        |\n| `skipPatterns` | `number[]` | No       | Skip patterns for bracketed content                                            |\n\n`apiKey` is optional only for the reseller-backed `tts-1` preset path. If omitted with `model: 'tts-1'` or no explicit model, AgentKit infers `openai_tts_1`. If provided, the request stays in BYOK mode.\n\n#### CartesiaTTS [#cartesiatts]\n\n```typescript\nnew CartesiaTTS<SR extends CartesiaSampleRate>(options: CartesiaTTSOptions<SR>)\n```\n\n| Option         | Type                                                | Required | Description                                            |\n| -------------- | --------------------------------------------------- | -------- | ------------------------------------------------------ |\n| `apiKey`       | `string`                                            | Yes      | Cartesia API key                                       |\n| `voiceId`      | `string`                                            | Yes      | Voice ID (serialized as `{\"mode\": \"id\", \"id\": \"...\"}`) |\n| `modelId`      | `string`                                            | Yes      | Model ID                                               |\n| `baseUrl`      | `string`                                            | No       | WebSocket URL                                          |\n| `language`     | `string`                                            | No       | Target language                                        |\n| `sampleRate`   | `8000 \\| 16000 \\| 22050 \\| 24000 \\| 44100 \\| 48000` | No       | Audio sample rate in Hz                                |\n| `skipPatterns` | `number[]`                                          | No       | Skip patterns for bracketed content                    |\n\n#### Other TTS vendors [#other-tts-vendors]\n\n| Class           | Key parameters                                                                                                                                    |\n| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `GoogleTTS`     | `key`, `voiceName`, `languageCode?`, `sampleRate?`                                                                                                |\n| `AmazonTTS`     | `accessKey`, `secretKey`, `region`, `voiceId`, `engine`                                                                                           |\n| `DeepgramTTS`   | `apiKey`, `model`, `baseUrl?`, `sampleRate?`, `additionalParams?`                                                                                 |\n| `HumeAITTS`     | `key`, `voiceId`, `provider`, `configId?`, `baseUrl?`, `speed?`, `trailingSilence?`                                                               |\n| `RimeTTS`       | `key`, `speaker`, `modelId`, `baseUrl?`, `credentialMode?`. In managed mode (`CredentialMode.Managed`), only `modelId` and `baseUrl` are required |\n| `FishAudioTTS`  | `key`, `referenceId`, `backend`                                                                                                                   |\n| `MiniMaxTTS`    | `key?`, `groupId?`, `model`, `voiceId?`, `url?`                                                                                                   |\n| `MurfTTS`       | `key`, `voiceId?`, `baseUrl?`, `locale?`, `rate?`, `pitch?`, `model?`, `sampleRate?`                                                              |\n| `SarvamTTS`     | `key`, `speaker`, `targetLanguageCode`, `pitch?`, `pace?`, `loudness?`, `sampleRate?`                                                             |\n| `GradiumTTS`    | `apiKey`, `url?`, `modelName?`, `voiceId?`, `sampleRate?`, `additionalParams?`                                                                    |\n| `MistralTTS`    | `apiKey`, `model?`, `voice?`, `additionalParams?`                                                                                                 |\n| `TypecastTTS`   | `apiKey`, `voiceId`, `model`, `additionalParams?`                                                                                                 |\n| `XAiTTS`        | `apiKey`, `language`, `voiceId?`, `sampleRate?`, `additionalParams?`                                                                              |\n| `SmallestAITTS` | `apiKey`, `url?`, `model?`, `voiceId?`, `sampleRate?`, `speed?`, `language?`, `additionalParams?`                                                 |\n\n`SmallestAITTS` also accepts `numberPronunciationLanguage?`, `mathNotation?`, `pronunciationDicts?`, `sessionId?`, and `requestId?`. Voice identifiers are model-specific, so `voiceId` must belong to the model set in `model`. For details, see [Smallest AI](/en/ai/models/tts/smallest-ai).\n\nFor `MiniMaxTTS`, `key` is optional only for reseller-backed models: `speech-2.6-turbo`, `speech-2.8-turbo`. If `key` is omitted for one of those models, AgentKit infers the matching session preset. In that preset-backed path, `groupId`, `voiceId`, and `url` are optional overrides rather than required fields. If `key` is provided, AgentKit uses BYOK, and `groupId`, `voiceId`, and `url` are required.\n\n#### GenericTTS [#generictts]\n\nCustom OpenAI-compatible HTTP TTS. `url` is required and must be an absolute HTTP or HTTPS address — the constructor throws if `url` is missing, badly formatted, or uses a non-HTTP(S) scheme such as `ws:` or `wss:`. A valid URL is serialized as `tts.vendor = \"generic_http\"`.\n\n```typescript\nnew GenericTTS(options: GenericTTSOptions)\n```\n\n| Option             | Type                      | Required | Description                                                                                                                                                           |\n| ------------------ | ------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `url`              | `string`                  | Yes      | The HTTP(S) endpoint of your custom TTS service                                                                                                                       |\n| `headers`          | `Record<string, string>`  | No       | Custom HTTP headers to forward to the TTS service. Omitted from the request if not set                                                                                |\n| `apiKey`           | `string`                  | No       | The API key used to authenticate with the TTS service                                                                                                                 |\n| `model`            | `string`                  | No       | The TTS model name                                                                                                                                                    |\n| `voice`            | `string`                  | No       | The voice name                                                                                                                                                        |\n| `speed`            | `number`                  | No       | The speech rate                                                                                                                                                       |\n| `sampleRate`       | `number`                  | No       | The sample rate, in Hz, of the output audio. If your TTS service doesn't support multiple sample rates, make sure the returned audio's sample rate matches this value |\n| `responseFormat`   | `\"pcm\"`                   | No       | The output audio format. Conversational AI Engine currently supports `pcm`                                                                                            |\n| `instruction`      | `string`                  | No       | Instructions for voice style, emotion, or other playback directives                                                                                                   |\n| `additionalParams` | `Record<string, unknown>` | No       | Additional parameters passed through to the TTS service. Explicit fields with the same name take precedence                                                           |\n| `skipPatterns`     | `number[]`                | No       | Skip patterns for bracketed content                                                                                                                                   |\n\n### STT vendors [#stt-vendors]\n\nUse with [`withStt()`](#withsttvendor).\n\n#### DeepgramSTT [#deepgramstt]\n\n```typescript\nnew DeepgramSTT(options?: DeepgramSTTOptions)\n```\n\nProvide `apiKey`, or omit it and set `model` to `nova-2` or `nova-3` to use Agora-managed credentials. The constructor throws otherwise.\n\n| Option             | Type                      | Required    | Description                                                                           |\n| ------------------ | ------------------------- | ----------- | ------------------------------------------------------------------------------------- |\n| `apiKey`           | `string`                  | No          | Deepgram API key. Optional for `nova-2` and `nova-3` reseller preset usage            |\n| `model`            | `string`                  | Conditional | Model name, for example `'nova-2'` or `'enhanced'`. Required when `apiKey` is omitted |\n| `language`         | `string`                  | No          | Language code, for example `'en-US'`                                                  |\n| `keyterm`          | `string`                  | No          | Boost specialized terms and brands                                                    |\n| `smartFormat`      | `boolean`                 | No          | Enable smart formatting                                                               |\n| `punctuation`      | `boolean`                 | No          | Enable punctuation                                                                    |\n| `additionalParams` | `Record<string, unknown>` | No          | Additional vendor parameters                                                          |\n\nFor `nova-2` and `nova-3`, omit `apiKey` to use Agora-managed credentials. For all other Deepgram models, `apiKey` is required.\n\n#### Other STT vendors [#other-stt-vendors]\n\n| Class             | Key parameters                                                                                                                                                                                  |\n| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `SpeechmaticsSTT` | `key`, `language`, `model?`, `uri?`. `apiKey` is a deprecated alias of `key`                                                                                                                    |\n| `MicrosoftSTT`    | `key`, `region`, `language`                                                                                                                                                                     |\n| `OpenAISTT`       | `apiKey`, `model?`, `language?`, `prompt?`, `inputAudioTranscription?`                                                                                                                          |\n| `GoogleSTT`       | `projectId`, `location`, `adcCredentialsString`, `language`, `model?`                                                                                                                           |\n| `AmazonSTT`       | `accessKey`, `secretKey`, `region`, `language`                                                                                                                                                  |\n| `AssemblyAISTT`   | `apiKey`, `language`, `ws_url?`                                                                                                                                                                 |\n| `AresSTT`         | `keywords?`, `additionalParams?`                                                                                                                                                                |\n| `GeminiSTT`       | `apiKey`, `model?`, `language?`, `languageHints?`, `customVocabulary?`, `sampleRate?` (default `16000`), `wordTimestamp?`, `mode?` (`SMART` or `VERBATIM`), `diarization?`, `additionalParams?` |\n| `XAiSTT`          | `apiKey`, `language?`, `baseUrl?`, `sampleRate?`, `additionalParams?`                                                                                                                           |\n| `SarvamSTT`       | `apiKey`, `language`, `model?`                                                                                                                                                                  |\n| `SmallestAISTT`   | `apiKey`, `language?`, `url?`, `sampleRate?`, `encoding?`, `keywords?`, `additionalParams?`                                                                                                     |\n\n`SmallestAISTT` also accepts the boolean options `wordTimestamps?`, `sentenceTimestamps?`, `diarize?`, `vadEvents?`, `endpointing?`, `format?`, `finalizeOnWords?`, `punctuate?`, `capitalize?`, `itnNormalize?`, `fullTranscript?`, `redactPii?`, and `redactPci?`, plus `eouTimeoutMs?` and `maxWords?`. Boolean options are serialized as the strings `\"true\"` or `\"false\"` for the Smallest AI wire protocol. For details, see [Smallest AI](/en/ai/models/asr/smallest-ai).\n\nFor `OpenAISTT`, the serialized configuration requires a transcription `prompt` and `language` — provide them through the `prompt` and `language` options or within `inputAudioTranscription`. `model` defaults to `gpt-4o-mini-transcribe`.\n\n### MLLM vendors [#mllm-vendors]\n\nUse with [`withMllm()`](#withmllmvendor) for multimodal end-to-end audio processing without separate STT or TTS steps. Calling `withMllm()` automatically enables the MLLM module (sets `mllm.enable = true`); the older `advancedFeatures.enable_mllm` flag is deprecated.\n\n#### OpenAIRealtime [#openairealtime]\n\n```typescript\nnew OpenAIRealtime(options: OpenAIRealtimeOptions)\n```\n\n| Option                    | Type                        | Required | Description                                                            |\n| ------------------------- | --------------------------- | -------- | ---------------------------------------------------------------------- |\n| `apiKey`                  | `string`                    | Yes      | OpenAI API key                                                         |\n| `model`                   | `string`                    | No       | Model name, for example `'gpt-4o-realtime-preview'`                    |\n| `voice`                   | `string`                    | No       | Voice identifier                                                       |\n| `instructions`            | `string`                    | No       | System instructions                                                    |\n| `inputAudioTranscription` | `Record<string, unknown>`   | No       | Audio transcription settings                                           |\n| `url`                     | `string`                    | No       | WebSocket URL                                                          |\n| `greetingMessage`         | `string`                    | No       | Agent greeting message                                                 |\n| `failureMessage`          | `string`                    | No       | Message played when the model call fails                               |\n| `inputModalities`         | `string[]`                  | No       | Input modalities, for example `['audio']`                              |\n| `outputModalities`        | `string[]`                  | No       | Output modalities, for example `['text', 'audio']`                     |\n| `messages`                | `Record<string, unknown>[]` | No       | Conversation messages for short-term memory                            |\n| `params`                  | `Record<string, unknown>`   | No       | Additional MLLM parameters                                             |\n| `turnDetection`           | `MllmTurnDetectionConfig`   | No       | MLLM turn detection configuration; overrides top-level `turnDetection` |\n\n#### AzureOpenAIRealtime [#azureopenairealtime]\n\n```typescript\nnew AzureOpenAIRealtime(options: AzureOpenAIRealtimeOptions)\n```\n\n| Option             | Type                        | Required | Description                                                            |\n| ------------------ | --------------------------- | -------- | ---------------------------------------------------------------------- |\n| `apiKey`           | `string`                    | Yes      | Azure OpenAI API key                                                   |\n| `url`              | `string`                    | Yes      | Azure OpenAI Realtime WebSocket URL                                    |\n| `turnDetection`    | `MllmTurnDetectionConfig`   | Yes      | MLLM turn detection configuration; overrides top-level `turnDetection` |\n| `model`            | `string`                    | No       | Azure OpenAI Realtime model or deployment name                         |\n| `voice`            | `string`                    | No       | Voice identifier                                                       |\n| `instructions`     | `string`                    | No       | System instructions                                                    |\n| `maxHistory`       | `number`                    | No       | Number of conversation history messages to cache                       |\n| `greetingMessage`  | `string`                    | No       | Agent greeting message                                                 |\n| `outputModalities` | `string[]`                  | No       | Output modalities, for example `['text', 'audio']`                     |\n| `messages`         | `Record<string, unknown>[]` | No       | Conversation messages for short-term memory                            |\n| `params`           | `AzureOpenAIRealtimeParams` | No       | Additional Azure OpenAI parameters                                     |\n\n#### GeminiLive [#geminilive]\n\n```typescript\nnew GeminiLive(options: GeminiLiveOptions)\n```\n\n| Option             | Type                        | Required | Description                                                                                                         |\n| ------------------ | --------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------- |\n| `apiKey`           | `string`                    | Yes      | Google API key                                                                                                      |\n| `model`            | `string`                    | Yes      | Model name, for example `'models/gemini-3.8-live-extended-thinking'`                                                |\n| `thinkingLevel`    | `GeminiThinkingLevel`       | No       | Reasoning budget (`'low'`, `'medium'`, or `'high'`), supported only by `'models/gemini-3.8-live-extended-thinking'` |\n| `url`              | `string`                    | No       | WebSocket URL                                                                                                       |\n| `instructions`     | `string`                    | No       | System instructions for the model                                                                                   |\n| `voice`            | `string`                    | No       | Voice name, for example `'Aoede'` or `'Charon'`                                                                     |\n| `affectiveDialog`  | `boolean`                   | No       | Enable affective dialog                                                                                             |\n| `proactiveAudio`   | `boolean`                   | No       | Enable proactive audio                                                                                              |\n| `transcribeAgent`  | `boolean`                   | No       | Transcribe agent speech                                                                                             |\n| `transcribeUser`   | `boolean`                   | No       | Transcribe user speech                                                                                              |\n| `httpOptions`      | `Record<string, unknown>`   | No       | HTTP options                                                                                                        |\n| `greetingMessage`  | `string`                    | No       | Agent greeting message                                                                                              |\n| `failureMessage`   | `string`                    | No       | Message played when the model call fails                                                                            |\n| `inputModalities`  | `string[]`                  | No       | Input modalities                                                                                                    |\n| `outputModalities` | `string[]`                  | No       | Output modalities                                                                                                   |\n| `messages`         | `Record<string, unknown>[]` | No       | Conversation messages for short-term memory                                                                         |\n| `additionalParams` | `Record<string, unknown>`   | No       | Additional parameters                                                                                               |\n| `turnDetection`    | `MllmTurnDetectionConfig`   | No       | MLLM turn detection configuration; overrides top-level `turnDetection`                                              |\n\n#### VertexAI [#vertexai]\n\n```typescript\nnew VertexAI(options: VertexAIOptions)\n```\n\n| Option                 | Type                        | Required | Description                                                                    |\n| ---------------------- | --------------------------- | -------- | ------------------------------------------------------------------------------ |\n| `model`                | `string`                    | Yes      | Model name, for example `'gemini-live-2.5-flash-preview-native-audio-09-2025'` |\n| `projectId`            | `string`                    | Yes      | Google Cloud project ID                                                        |\n| `location`             | `string`                    | Yes      | Google Cloud location or region                                                |\n| `adcCredentialsString` | `string`                    | Yes      | Application Default Credentials JSON string                                    |\n| `url`                  | `string`                    | No       | WebSocket URL                                                                  |\n| `instructions`         | `string`                    | No       | System instructions for the model                                              |\n| `voice`                | `string`                    | No       | Voice name, for example `'Aoede'` or `'Charon'`                                |\n| `affectiveDialog`      | `boolean`                   | No       | Enable affective dialog                                                        |\n| `proactiveAudio`       | `boolean`                   | No       | Enable proactive audio                                                         |\n| `transcribeAgent`      | `boolean`                   | No       | Transcribe agent speech                                                        |\n| `transcribeUser`       | `boolean`                   | No       | Transcribe user speech                                                         |\n| `httpOptions`          | `Record<string, unknown>`   | No       | HTTP options                                                                   |\n| `greetingMessage`      | `string`                    | No       | Agent greeting message                                                         |\n| `failureMessage`       | `string`                    | No       | Message played when the model call fails                                       |\n| `inputModalities`      | `string[]`                  | No       | Input modalities                                                               |\n| `outputModalities`     | `string[]`                  | No       | Output modalities                                                              |\n| `messages`             | `Record<string, unknown>[]` | No       | Conversation messages for short-term memory                                    |\n| `additionalParams`     | `Record<string, unknown>`   | No       | Additional parameters                                                          |\n| `turnDetection`        | `MllmTurnDetectionConfig`   | No       | MLLM turn detection configuration; overrides top-level `turnDetection`         |\n\n#### XaiGrok [#xaigrok]\n\n```typescript\nnew XaiGrok(options: XaiGrokOptions)\n```\n\n| Option             | Type                        | Required | Description                                                            |\n| ------------------ | --------------------------- | -------- | ---------------------------------------------------------------------- |\n| `apiKey`           | `string`                    | Yes      | xAI API key                                                            |\n| `url`              | `string`                    | No       | WebSocket URL (defaults to xAI Realtime API)                           |\n| `voice`            | `string`                    | No       | Voice identifier, for example `'eve'`                                  |\n| `language`         | `string`                    | No       | Language code                                                          |\n| `sampleRate`       | `number`                    | No       | Audio sample rate in Hz                                                |\n| `greetingMessage`  | `string`                    | No       | Agent greeting message                                                 |\n| `failureMessage`   | `string`                    | No       | Message played when the model call fails                               |\n| `inputModalities`  | `string[]`                  | No       | Input modalities                                                       |\n| `outputModalities` | `string[]`                  | No       | Output modalities                                                      |\n| `messages`         | `Record<string, unknown>[]` | No       | Conversation messages for short-term memory                            |\n| `params`           | `Record<string, unknown>`   | No       | Additional xAI parameters                                              |\n| `turnDetection`    | `MllmTurnDetectionConfig`   | No       | MLLM turn detection configuration; overrides top-level `turnDetection` |\n\n#### OpenAIGPTLive [#openaigptlive]\n\n[OpenAI GPT-Live](/en/ai/models/mllm/openai-gpt-live) MLLM vendor (`mllm.vendor`: `\"openai_gpt_live\"`). The constructor throws if `apiKey` is empty. `withMllm()` throws if `url` isn't a full `ws://` or `wss://` endpoint, `headers` isn't a JSON object string, `delegation` isn't `client` or `responses`, or `sessionParams` overrides a protected field.\n\n<CalloutContainer type=\"warning\">\n  <CalloutTitle>\n    Early access\n  </CalloutTitle>\n\n  <CalloutDescription>\n    OpenAI GPT-Live is available in early access and isn't intended for production traffic. The SDK automatically routes sessions that use this vendor to the preview endpoint. GPT-Live doesn't support turn detection or input audio transcription.\n  </CalloutDescription>\n</CalloutContainer>\n\n```typescript\nnew OpenAIGPTLive(options: OpenAIGPTLiveOptions)\n```\n\n| Option                | Type                        | Required | Description                                                                                                       |\n| --------------------- | --------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------- |\n| `apiKey`              | `string`                    | Yes      | OpenAI API key                                                                                                    |\n| `model`               | `string`                    | No       | Model name. Defaults to `gpt-live-1`                                                                              |\n| `voice`               | `string`                    | No       | Output voice. Provider default: `marin`                                                                           |\n| `prompt`              | `string`                    | No       | Session instructions that define the assistant's behavior                                                         |\n| `greeting`            | `string`                    | No       | Greeting the agent speaks when a user joins. Serialized as `greeting_message`                                     |\n| `failureMessage`      | `string`                    | No       | Message played when the model call fails                                                                          |\n| `url`                 | `string`                    | No       | Full `ws://` or `wss://` endpoint. Defaults to `wss://api.openai.com/v1/live/sessions`                            |\n| `baseUrl`             | `string`                    | No       | Host used when `url` is omitted. Defaults to `wss://api.openai.com`                                               |\n| `path`                | `string`                    | No       | WebSocket path used when `url` is omitted. Defaults to `/v1/live/sessions`                                        |\n| `inputModalities`     | `string[]`                  | No       | Input modalities                                                                                                  |\n| `outputModalities`    | `string[]`                  | No       | Output modalities                                                                                                 |\n| `messages`            | `Record<string, unknown>[]` | No       | Conversation history passed to the model as context                                                               |\n| `mcpServers`          | `McpServersItem[]`          | No       | MCP servers whose tools GPT-Live can call. Requires `withTools(true)`                                             |\n| `toolEnabled`         | `boolean`                   | No       | Advertise the agent's tools to GPT-Live. Provider default: `false`                                                |\n| `delegation`          | `'client' \\| 'responses'`   | No       | Tool delegation mode: `client` or `responses`. Provider default: `responses`. Can't be changed during the session |\n| `responsesModel`      | `string`                    | No       | Model used for delegated tool calls                                                                               |\n| `interruptOnUserTurn` | `boolean`                   | No       | Interrupt playback when the user speaks. Provider default: `false`                                                |\n| `outputIdleEndMs`     | `number`                    | No       | Agent silence boundary in milliseconds. Provider default: `600`. `0` disables inference                           |\n| `inputIdleEndMs`      | `number`                    | No       | User silence boundary in milliseconds. Provider default: `1500`                                                   |\n| `outputSilencePeak`   | `number`                    | No       | Speech amplitude threshold on the 16-bit scale. Provider default: `50`                                            |\n| `outputSampleRate`    | `number`                    | No       | Output PCM sample rate in Hz. Provider default: `24000`                                                           |\n| `outputBufferMs`      | `number`                    | No       | Initial audio cushion in milliseconds. Provider default: `0`. A negative value disables pacing                    |\n| `inputBatchMs`        | `number`                    | No       | Microphone audio batching interval in milliseconds                                                                |\n| `alphaSelector`       | `string`                    | No       | OpenAI-Alpha selector for preview contracts. Omitted when not set                                                 |\n| `headers`             | `string`                    | No       | Extra provider request headers, as a JSON object string                                                           |\n| `sessionParams`       | `Record<string, unknown>`   | No       | Additional session fields. Can't override `model`, `delegation`, `audio`, `instructions`, or `input`              |\n| `params`              | `Record<string, unknown>`   | No       | Additional provider parameters. Explicit options take precedence                                                  |\n| `instructions`        | `string`                    | No       | Deprecated. Use `prompt` instead                                                                                  |\n\n`inputAudioTranscription` and `turnDetection` are deprecated and accepted only for compatibility. GPT-Live doesn't support them: setting `inputAudioTranscription` throws, and the SDK ignores `turnDetection` and logs a warning.\n\n### Avatar vendors [#avatar-vendors]\n\nUse with [`withAvatar()`](#withavatarvendor). Some avatar vendors require a specific TTS sample rate, enforced at compile time and runtime.\n\n#### HeyGenAvatar [#heygenavatar]\n\nDeprecated. Use [`LiveAvatarAvatar`](#liveavataravatar) for new integrations. `HeyGenAvatar` still works and serializes `vendor: \"heygen\"`. Requires TTS at **24,000 Hz**.\n\n```typescript\nnew HeyGenAvatar(options: HeyGenAvatarOptions)\n```\n\n| Option                | Type                          | Required | Description                                   |\n| --------------------- | ----------------------------- | -------- | --------------------------------------------- |\n| `apiKey`              | `string`                      | Yes      | HeyGen API key                                |\n| `quality`             | `'low' \\| 'medium' \\| 'high'` | Yes      | Video quality: 360p, 480p, or 720p            |\n| `agoraUid`            | `string`                      | Yes      | RTC UID for the avatar stream                 |\n| `agoraToken`          | `string`                      | No       | RTC token for avatar authentication           |\n| `avatarId`            | `string`                      | No       | HeyGen avatar ID                              |\n| `disableIdleTimeout`  | `boolean`                     | No       | Disable idle timeout. Default: `false`        |\n| `activityIdleTimeout` | `number`                      | No       | Idle timeout in seconds. Default: `120`       |\n| `enable`              | `boolean`                     | No       | Enable or disable the avatar. Default: `true` |\n\n#### AkoolAvatar [#akoolavatar]\n\nRequires TTS at **16,000 Hz**.\n\n```typescript\nnew AkoolAvatar(options: AkoolAvatarOptions)\n```\n\n| Option     | Type      | Required | Description                                   |\n| ---------- | --------- | -------- | --------------------------------------------- |\n| `apiKey`   | `string`  | Yes      | Akool API key                                 |\n| `avatarId` | `string`  | No       | Akool avatar ID                               |\n| `enable`   | `boolean` | No       | Enable or disable the avatar. Default: `true` |\n\n#### LiveAvatarAvatar [#liveavataravatar]\n\nRequires TTS at **24,000 Hz**.\n\n```typescript\nnew LiveAvatarAvatar(options: LiveAvatarAvatarOptions)\n```\n\n| Option                | Type                          | Required | Description                                   |\n| --------------------- | ----------------------------- | -------- | --------------------------------------------- |\n| `apiKey`              | `string`                      | Yes      | LiveAvatar API key                            |\n| `quality`             | `'low' \\| 'medium' \\| 'high'` | Yes      | Video quality                                 |\n| `agoraUid`            | `string`                      | Yes      | RTC UID for the avatar stream                 |\n| `agoraToken`          | `string`                      | No       | Avatar token override                         |\n| `avatarId`            | `string`                      | No       | Avatar ID                                     |\n| `disableIdleTimeout`  | `boolean`                     | No       | Disable idle timeout                          |\n| `activityIdleTimeout` | `number`                      | No       | Idle timeout in seconds                       |\n| `enable`              | `boolean`                     | No       | Enable or disable the avatar. Default: `true` |\n\n#### AnamAvatar [#anamavatar]\n\n```typescript\nnew AnamAvatar(options: AnamAvatarOptions)\n```\n\n| Option     | Type      | Required | Description                                   |\n| ---------- | --------- | -------- | --------------------------------------------- |\n| `apiKey`   | `string`  | Yes      | Anam API key                                  |\n| `avatarId` | `string`  | No       | Anam avatar ID                                |\n| `enable`   | `boolean` | No       | Enable or disable the avatar. Default: `true` |\n\n#### GenericAvatar [#genericavatar]\n\nGeneric avatars can omit `agoraAppId`, `agoraChannel`, and `agoraToken`. AgentKit fills them from the session at `start()`.\n\n```typescript\nnew GenericAvatar(options: GenericAvatarOptions)\n```\n\n| Option             | Type                      | Required | Description                                                                        |\n| ------------------ | ------------------------- | -------- | ---------------------------------------------------------------------------------- |\n| `apiKey`           | `string`                  | Yes      | Custom avatar provider API key                                                     |\n| `apiBaseUrl`       | `string`                  | Yes      | Avatar provider API base URL                                                       |\n| `avatarId`         | `string`                  | Yes      | Avatar ID                                                                          |\n| `agoraUid`         | `string`                  | Yes      | RTC UID for the avatar stream                                                      |\n| `agoraAppId`       | `string`                  | No       | Agora App ID override                                                              |\n| `agoraChannel`     | `string`                  | No       | Agora channel override                                                             |\n| `agoraToken`       | `string`                  | No       | Avatar token override                                                              |\n| `enable`           | `boolean`                 | No       | Enable or disable the avatar. Default: `true`                                      |\n| `additionalParams` | `Record<string, unknown>` | No       | Additional vendor parameters. Explicit options take precedence over matching keys. |\n\n#### Tavus [#tavus]\n\nTavus avatars can omit `agoraAppId`, `agoraChannel`, and `agoraToken`. AgentKit fills them from the session at `start()`. Serializes `vendor: \"generic\"`. For the endpoint and a full example, see [Tavus](/en/ai/models/avatar/tavus).\n\n```typescript\nnew Tavus(options: TavusOptions)\n```\n\n| Option             | Type                      | Required | Description                                                                        |\n| ------------------ | ------------------------- | -------- | ---------------------------------------------------------------------------------- |\n| `apiKey`           | `string`                  | Yes      | Tavus API key                                                                      |\n| `apiBaseUrl`       | `string`                  | Yes      | Tavus API base URL                                                                 |\n| `avatarId`         | `string`                  | Yes      | Tavus avatar ID                                                                    |\n| `agoraUid`         | `string`                  | Yes      | RTC UID for the avatar stream                                                      |\n| `agoraAppId`       | `string`                  | No       | Agora App ID override                                                              |\n| `agoraChannel`     | `string`                  | No       | Agora channel override                                                             |\n| `agoraToken`       | `string`                  | No       | Avatar token override                                                              |\n| `enable`           | `boolean`                 | No       | Enable or disable the avatar. Default: `true`                                      |\n| `additionalParams` | `Record<string, unknown>` | No       | Additional vendor parameters. Explicit options take precedence over matching keys. |\n\n#### Protoface [#protoface]\n\nProtoface avatars can omit `agoraAppId`, `agoraChannel`, and `agoraToken`. AgentKit fills them from the session at `start()`. Serializes `vendor: \"generic\"`. For the endpoint and a full example, see [Protoface](/en/ai/models/avatar/protoface).\n\n```typescript\nnew Protoface(options: ProtofaceOptions)\n```\n\n| Option             | Type                      | Required | Description                                                                        |\n| ------------------ | ------------------------- | -------- | ---------------------------------------------------------------------------------- |\n| `apiKey`           | `string`                  | Yes      | Protoface API key                                                                  |\n| `apiBaseUrl`       | `string`                  | Yes      | Protoface API base URL                                                             |\n| `avatarId`         | `string`                  | Yes      | Protoface avatar ID                                                                |\n| `agoraUid`         | `string`                  | Yes      | RTC UID for the avatar stream                                                      |\n| `agoraAppId`       | `string`                  | No       | Agora App ID override                                                              |\n| `agoraChannel`     | `string`                  | No       | Agora channel override                                                             |\n| `agoraToken`       | `string`                  | No       | Avatar token override                                                              |\n| `enable`           | `boolean`                 | No       | Enable or disable the avatar. Default: `true`                                      |\n| `additionalParams` | `Record<string, unknown>` | No       | Additional vendor parameters. Explicit options take precedence over matching keys. |\n\n#### LemonSlice [#lemonslice]\n\nLemonSlice avatars can omit `agoraAppId`, `agoraChannel`, and `agoraToken`. AgentKit fills them from the session at `start()`. Serializes `vendor: \"generic\"`. For the endpoint and a full example, see [LemonSlice](/en/ai/models/avatar/lemonslice).\n\n```typescript\nnew LemonSlice(options: LemonSliceOptions)\n```\n\n| Option             | Type                      | Required | Description                                                                        |\n| ------------------ | ------------------------- | -------- | ---------------------------------------------------------------------------------- |\n| `apiKey`           | `string`                  | Yes      | LemonSlice API key                                                                 |\n| `apiBaseUrl`       | `string`                  | Yes      | LemonSlice API base URL                                                            |\n| `avatarId`         | `string`                  | Yes      | Always `lemonslice`                                                                |\n| `agoraUid`         | `string`                  | Yes      | RTC UID for the avatar stream                                                      |\n| `agoraAppId`       | `string`                  | No       | Agora App ID override                                                              |\n| `agoraChannel`     | `string`                  | No       | Agora channel override                                                             |\n| `agoraToken`       | `string`                  | No       | Avatar token override                                                              |\n| `enable`           | `boolean`                 | No       | Enable or disable the avatar. Default: `true`                                      |\n| `additionalParams` | `Record<string, unknown>` | No       | Additional vendor parameters. Explicit options take precedence over matching keys. |\n\n## Token utilities [#token-utilities]\n\nHelper functions and classes for generating and managing tokens. Use these when you need control over token lifetime, or when generating tokens outside of a session.\n\n```typescript\nimport { generateConvoAIToken, ExpiresIn } from 'agora-agents';\n```\n\n### `generateConvoAIToken(options)` [#generateconvoaitokenoptions]\n\nGenerates a Conversational AI token combining RTC and RTM privileges. This is the same token the SDK generates automatically in app-credentials mode. Use this when you need a token outside of a session, or when passing a pre-built token to [`SessionOptions.token`](#createsessionoptions).\n\n```typescript\ngenerateConvoAIToken(options: GenerateConvoAITokenOptions): string\n```\n\n| Option            | Type     | Required | Description                                                   |\n| ----------------- | -------- | -------- | ------------------------------------------------------------- |\n| `appId`           | `string` | Yes      | Agora App ID                                                  |\n| `appCertificate`  | `string` | Yes      | Agora App Certificate                                         |\n| `channelName`     | `string` | Yes      | The channel the token grants access to                        |\n| `uid`             | `number` | Yes      | Numeric RTC UID the token is issued for                       |\n| `tokenExpire`     | `number` | No       | Token lifetime in seconds. Default: `86400`                   |\n| `privilegeExpire` | `number` | No       | Privilege lifetime in seconds. Default: same as `tokenExpire` |\n\n**Returns:** `string` — the generated token.\n\n**Throws:** if `appId` or `appCertificate` isn't exactly 32 characters.\n\n```typescript\nconst token = generateConvoAIToken({\n  appId: 'your-app-id',\n  appCertificate: 'your-app-certificate',\n  channelName: 'support-room-123',\n  uid: 1,\n  tokenExpire: ExpiresIn.hours(12),\n});\n```\n\n### `ExpiresIn` [#expiresin]\n\nHelper for specifying token lifetimes. Use with [`SessionOptions.expiresIn`](#createsessionoptions) or [`generateConvoAIToken`](#generateconvoaitokenoptions). Values are validated and capped at the Agora maximum of 86400 seconds (24 hours).\n\n| Value or method        | Returns  | Description                                                            |\n| ---------------------- | -------- | ---------------------------------------------------------------------- |\n| `ExpiresIn.DAY`        | `86400`  | 24 hours — the Agora maximum and default                               |\n| `ExpiresIn.MAX`        | `86400`  | The Agora maximum                                                      |\n| `ExpiresIn.HOUR`       | `3600`   | One hour                                                               |\n| `ExpiresIn.seconds(n)` | `number` | `n` seconds, validated and capped at 24 h                              |\n| `ExpiresIn.hours(n)`   | `number` | `n` hours in seconds. Throws if `n` ≤ 0, caps at 24 h with a warning   |\n| `ExpiresIn.minutes(n)` | `number` | `n` minutes in seconds. Throws if `n` ≤ 0, caps at 24 h with a warning |\n\n## Types and enums [#types-and-enums]\n\nShared types and enums used across `AgoraClient`, `Agent`, `AgentSession`, and vendor classes.\n\n### `Area` [#area]\n\nRegion used for API routing. Pass to `AgoraClient` via the `area` option.\n\n```typescript\nimport { Area } from 'agora-agents';\n```\n\n| Value     | Region         |\n| --------- | -------------- |\n| `Area.US` | United States  |\n| `Area.EU` | Europe         |\n| `Area.AP` | Asia-Pacific   |\n| `Area.CN` | China mainland |\n\n### `AgoraAuthMode` [#agoraauthmode]\n\nThe resolved authentication mode on an `AgoraClient` instance. Read via `client.authMode`.\n\n```typescript\ntype AgoraAuthMode = \"app-credentials\" | \"token\" | \"basic\";\n```\n\n| Value               | Description                                                    |\n| ------------------- | -------------------------------------------------------------- |\n| `\"app-credentials\"` | App ID and App Certificate provided. SDK auto-generates tokens |\n| `\"token\"`           | Pre-built `authToken` provided                                 |\n| `\"basic\"`           | `customerId` and `customerSecret` provided                     |\n\n### `AgentSessionEvent` [#agentsessionevent]\n\nUnion type of all valid event names for `session.on()` and `session.off()`.\n\n```typescript\ntype AgentSessionEvent = \"started\" | \"stopped\" | \"error\";\n```\n\n### `AgentSessionEventHandler` [#agentsessioneventhandler]\n\nGeneric handler type for session event callbacks.\n\n```typescript\ntype AgentSessionEventHandler<T = unknown> = (data: T) => void;\n```\n\n| Event       | `T`                          |\n| ----------- | ---------------------------- |\n| `\"started\"` | `{ agentId: string }`        |\n| `\"stopped\"` | `{ agentId: string }`        |\n| `\"error\"`   | `unknown` (the thrown error) |\n\n### `SpeakPriority` [#speakpriority]\n\nControls how the agent handles a [`say()`](#saytext-options) call relative to its current activity.\n\n```typescript\ntype SpeakPriority = \"INTERRUPT\" | \"APPEND\" | \"IGNORE\";\n```\n\n| Value         | Description                                                     |\n| ------------- | --------------------------------------------------------------- |\n| `\"INTERRUPT\"` | Agent immediately stops current speech and delivers the message |\n| `\"APPEND\"`    | Message is queued and delivered after current speech ends       |\n| `\"IGNORE\"`    | Message is discarded if the agent is currently speaking         |\n\nThe `SpeakPriorityInterrupt`, `SpeakPriorityAppend`, and `SpeakPriorityIgnore` constants are also exported.\n\n### `AgoraError` [#agoraerror]\n\nThrown when the API returns a 4xx or 5xx response. Catch this to inspect the status code and response body.\n\n```typescript\nimport { AgoraError } from 'agora-agents';\n\ntry {\n  const agentId = await session.start();\n} catch (err) {\n  if (err instanceof AgoraError) {\n    console.error('Status:', err.statusCode);\n    console.error('Message:', err.message);\n    console.error('Body:', err.body);\n  }\n}\n```\n\n| Property      | Type                       | Description                                       |\n| ------------- | -------------------------- | ------------------------------------------------- |\n| `statusCode`  | `number \\| undefined`      | HTTP status code returned by the API              |\n| `message`     | `string`                   | Error message, including the status code and body |\n| `body`        | `unknown`                  | Raw response body from the API, if any            |\n| `rawResponse` | `RawResponse \\| undefined` | The raw HTTP response                             |\n";
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Full API reference for the Agora Conversational AI TypeScript SDK."
  }, {
    heading: "agoraclient",
    content: "`AgoraClient` extends the Fern-generated base client with domain pool support for regional URL cycling and three authentication modes. Pass `appId` and `appCertificate` only for the recommended app-credentials mode. The SDK mints fresh REST tokens per request and generates RTC join tokens at session start."
  }, {
    heading: "constructor",
    content: "The authentication mode is resolved automatically from the options you provide."
  }, {
    heading: "constructor",
    content: "Option"
  }, {
    heading: "constructor",
    content: "Type"
  }, {
    heading: "constructor",
    content: "Required"
  }, {
    heading: "constructor",
    content: "Description"
  }, {
    heading: "constructor",
    content: "`area`"
  }, {
    heading: "constructor",
    content: "`Area`"
  }, {
    heading: "constructor",
    content: "Yes"
  }, {
    heading: "constructor",
    content: "Region for API routing (`Area.US`, `Area.EU`, `Area.AP`, `Area.CN`)"
  }, {
    heading: "constructor",
    content: "`appId`"
  }, {
    heading: "constructor",
    content: "`string`"
  }, {
    heading: "constructor",
    content: "Yes"
  }, {
    heading: "constructor",
    content: "Agora App ID"
  }, {
    heading: "constructor",
    content: "`appCertificate`"
  }, {
    heading: "constructor",
    content: "`string`"
  }, {
    heading: "constructor",
    content: "Yes"
  }, {
    heading: "constructor",
    content: "Agora App Certificate. Keep this secret and never expose it client-side"
  }, {
    heading: "constructor",
    content: "`customerId`"
  }, {
    heading: "constructor",
    content: "`string`"
  }, {
    heading: "constructor",
    content: "No"
  }, {
    heading: "constructor",
    content: "Customer ID for Basic Auth"
  }, {
    heading: "constructor",
    content: "`customerSecret`"
  }, {
    heading: "constructor",
    content: "`string`"
  }, {
    heading: "constructor",
    content: "No"
  }, {
    heading: "constructor",
    content: "Customer Secret for Basic Auth"
  }, {
    heading: "constructor",
    content: "`authToken`"
  }, {
    heading: "constructor",
    content: "`string`"
  }, {
    heading: "constructor",
    content: "No"
  }, {
    heading: "constructor",
    content: "Raw Agora token. The SDK sends `Authorization: agora token=<authToken>`"
  }, {
    heading: "constructor",
    content: "`timeoutInSeconds`"
  }, {
    heading: "constructor",
    content: "`number`"
  }, {
    heading: "constructor",
    content: "No"
  }, {
    heading: "constructor",
    content: "Default request timeout in seconds"
  }, {
    heading: "constructor",
    content: "`maxRetries`"
  }, {
    heading: "constructor",
    content: "`number`"
  }, {
    heading: "constructor",
    content: "No"
  }, {
    heading: "constructor",
    content: "Maximum retry attempts"
  }, {
    heading: "constructor",
    content: "`fetch`"
  }, {
    heading: "constructor",
    content: "`typeof fetch`"
  }, {
    heading: "constructor",
    content: "No"
  }, {
    heading: "constructor",
    content: "Custom fetch implementation for unsupported runtimes"
  }, {
    heading: "constructor",
    content: "Authentication mode is resolved from the options you provide:"
  }, {
    heading: "constructor",
    content: "Options provided"
  }, {
    heading: "constructor",
    content: "Resolved `authMode`"
  }, {
    heading: "constructor",
    content: "`customerId` + `customerSecret`"
  }, {
    heading: "constructor",
    content: '`"basic"`'
  }, {
    heading: "constructor",
    content: "`authToken`"
  }, {
    heading: "constructor",
    content: '`"token"`'
  }, {
    heading: "constructor",
    content: "Neither"
  }, {
    heading: "constructor",
    content: '`"app-credentials"`'
  }, {
    heading: "constructor",
    content: "Passing `customerId` without `customerSecret` throws an error."
  }, {
    heading: "constructor",
    content: "See Authentication for details on each mode."
  }, {
    heading: "properties",
    content: "The following read-only properties are available on any `AgoraClient` instance."
  }, {
    heading: "properties",
    content: "Property"
  }, {
    heading: "properties",
    content: "Type"
  }, {
    heading: "properties",
    content: "Description"
  }, {
    heading: "properties",
    content: "`appId`"
  }, {
    heading: "properties",
    content: "`string`"
  }, {
    heading: "properties",
    content: "The Agora App ID"
  }, {
    heading: "properties",
    content: "`appCertificate`"
  }, {
    heading: "properties",
    content: "`string`"
  }, {
    heading: "properties",
    content: "The Agora App Certificate"
  }, {
    heading: "properties",
    content: "`authMode`"
  }, {
    heading: "properties",
    content: "`AgoraAuthMode`"
  }, {
    heading: "properties",
    content: "The resolved authentication mode"
  }, {
    heading: "properties",
    content: "`area`"
  }, {
    heading: "properties",
    content: "`Area`"
  }, {
    heading: "properties",
    content: "The configured region"
  }, {
    heading: "properties",
    content: "`pool`"
  }, {
    heading: "properties",
    content: "`Pool`"
  }, {
    heading: "properties",
    content: "The underlying domain pool instance used for regional routing"
  }, {
    heading: "methods",
    content: "The following methods are available in addition to the Fern-generated sub-client methods."
  }, {
    heading: "nextregion",
    content: "Cycles to the next region prefix in the domain pool. Call this after a request failure to try a different regional endpoint."
  }, {
    heading: "selectbestdomainsignal",
    content: "Runs a DNS check to select the best domain suffix. Calls made within 30 seconds of the last successful selection are no-ops."
  }, {
    heading: "selectbestdomainsignal",
    content: "Parameter"
  }, {
    heading: "selectbestdomainsignal",
    content: "Type"
  }, {
    heading: "selectbestdomainsignal",
    content: "Description"
  }, {
    heading: "selectbestdomainsignal",
    content: "`signal`"
  }, {
    heading: "selectbestdomainsignal",
    content: "`AbortSignal`"
  }, {
    heading: "selectbestdomainsignal",
    content: "Optional abort signal to cancel the DNS check"
  }, {
    heading: "stopagentagentid",
    content: "Stops an agent by ID without an `AgentSession` reference, for example, from an end-call handler. The method treats a `404` response as success."
  }, {
    heading: "getcurrenturl",
    content: "Returns the full API URL currently in use as a `string`."
  }, {
    heading: "sub-clients",
    content: "`AgoraClient` exposes Fern-generated sub-clients for direct REST API access. You typically do not need these when using the agentkit layer."
  }, {
    heading: "sub-clients",
    content: "Property"
  }, {
    heading: "sub-clients",
    content: "Description"
  }, {
    heading: "sub-clients",
    content: "`client.agents`"
  }, {
    heading: "sub-clients",
    content: "Start, stop, update, speak, interrupt, get history, list agents"
  }, {
    heading: "sub-clients",
    content: "`client.agentManagement`"
  }, {
    heading: "sub-clients",
    content: "Inject instructions into a running agent (`think`)"
  }, {
    heading: "sub-clients",
    content: "`client.telephony`"
  }, {
    heading: "sub-clients",
    content: "Telephony operations"
  }, {
    heading: "sub-clients",
    content: "`client.phoneNumbers`"
  }, {
    heading: "sub-clients",
    content: "Phone number management"
  }, {
    heading: "sub-clients",
    content: "For full method signatures and request parameters, see the REST API reference."
  }, {
    heading: "agent",
    content: "`Agent` is an immutable configuration object. Each builder method returns a new `Agent` instance — the original is never modified. Define one `Agent` at startup and call `createSession()` on it for each user conversation."
  }, {
    heading: "constructor-1",
    content: "`client` is required. All other options are optional. Use the builder methods to set vendor configuration after construction."
  }, {
    heading: "constructor-1",
    content: "Option"
  }, {
    heading: "constructor-1",
    content: "Type"
  }, {
    heading: "constructor-1",
    content: "Default"
  }, {
    heading: "constructor-1",
    content: "Description"
  }, {
    heading: "constructor-1",
    content: "`client`"
  }, {
    heading: "constructor-1",
    content: "`AgoraClient`"
  }, {
    heading: "constructor-1",
    content: "—"
  }, {
    heading: "constructor-1",
    content: "Required. Agora client used by `createSession()`"
  }, {
    heading: "constructor-1",
    content: "`pipelineId`"
  }, {
    heading: "constructor-1",
    content: "`string`"
  }, {
    heading: "constructor-1",
    content: "`undefined`"
  }, {
    heading: "constructor-1",
    content: "Published AI Studio pipeline ID used as the base configuration. `SessionOptions.pipelineId` overrides it"
  }, {
    heading: "constructor-1",
    content: "`instructions`"
  }, {
    heading: "constructor-1",
    content: "`string`"
  }, {
    heading: "constructor-1",
    content: "`undefined`"
  }, {
    heading: "constructor-1",
    content: "Deprecated. Set `systemMessages` on the LLM vendor instead"
  }, {
    heading: "constructor-1",
    content: "`greeting`"
  }, {
    heading: "constructor-1",
    content: "`string`"
  }, {
    heading: "constructor-1",
    content: "`undefined`"
  }, {
    heading: "constructor-1",
    content: "Deprecated. Set `greetingMessage` on the LLM or MLLM vendor instead"
  }, {
    heading: "constructor-1",
    content: "`failureMessage`"
  }, {
    heading: "constructor-1",
    content: "`string`"
  }, {
    heading: "constructor-1",
    content: "`undefined`"
  }, {
    heading: "constructor-1",
    content: "Deprecated. Set `failureMessage` on the LLM or MLLM vendor instead"
  }, {
    heading: "constructor-1",
    content: "`maxHistory`"
  }, {
    heading: "constructor-1",
    content: "`number`"
  }, {
    heading: "constructor-1",
    content: "`undefined`"
  }, {
    heading: "constructor-1",
    content: "Deprecated. Set `maxHistory` on the LLM vendor instead"
  }, {
    heading: "constructor-1",
    content: "`greetingConfigs`"
  }, {
    heading: "constructor-1",
    content: "`LlmGreetingConfigs`"
  }, {
    heading: "constructor-1",
    content: "`undefined`"
  }, {
    heading: "constructor-1",
    content: "Deprecated. Set `greetingConfigs` on the LLM vendor instead"
  }, {
    heading: "constructor-1",
    content: "`turnDetection`"
  }, {
    heading: "constructor-1",
    content: "`TurnDetectionConfig`"
  }, {
    heading: "constructor-1",
    content: "`undefined`"
  }, {
    heading: "constructor-1",
    content: "Voice activity detection settings"
  }, {
    heading: "constructor-1",
    content: "`interruption`"
  }, {
    heading: "constructor-1",
    content: "`InterruptionConfig`"
  }, {
    heading: "constructor-1",
    content: "`undefined`"
  }, {
    heading: "constructor-1",
    content: "Unified interruption control settings"
  }, {
    heading: "constructor-1",
    content: "`sal`"
  }, {
    heading: "constructor-1",
    content: "`SalConfig`"
  }, {
    heading: "constructor-1",
    content: "`undefined`"
  }, {
    heading: "constructor-1",
    content: "Selective Attention Locking configuration"
  }, {
    heading: "constructor-1",
    content: "`avatar`"
  }, {
    heading: "constructor-1",
    content: "`AvatarConfig`"
  }, {
    heading: "constructor-1",
    content: "`undefined`"
  }, {
    heading: "constructor-1",
    content: "Avatar configuration"
  }, {
    heading: "constructor-1",
    content: "`advancedFeatures`"
  }, {
    heading: "constructor-1",
    content: "`AdvancedFeatures`"
  }, {
    heading: "constructor-1",
    content: "`undefined`"
  }, {
    heading: "constructor-1",
    content: "Enable MLLM mode, AI-VAD, and other advanced features"
  }, {
    heading: "constructor-1",
    content: "`parameters`"
  }, {
    heading: "constructor-1",
    content: "`SessionParamsInput`"
  }, {
    heading: "constructor-1",
    content: "`undefined`"
  }, {
    heading: "constructor-1",
    content: "Session parameters including silence and farewell config"
  }, {
    heading: "constructor-1",
    content: "`geofence`"
  }, {
    heading: "constructor-1",
    content: "`GeofenceConfig`"
  }, {
    heading: "constructor-1",
    content: "`undefined`"
  }, {
    heading: "constructor-1",
    content: "Regional access restriction"
  }, {
    heading: "constructor-1",
    content: "`labels`"
  }, {
    heading: "constructor-1",
    content: "`Labels`"
  }, {
    heading: "constructor-1",
    content: "`undefined`"
  }, {
    heading: "constructor-1",
    content: "Custom key-value labels returned in notification callbacks"
  }, {
    heading: "constructor-1",
    content: "`rtc`"
  }, {
    heading: "constructor-1",
    content: "`RtcConfig`"
  }, {
    heading: "constructor-1",
    content: "`undefined`"
  }, {
    heading: "constructor-1",
    content: "RTC media encryption"
  }, {
    heading: "constructor-1",
    content: "`fillerWords`"
  }, {
    heading: "constructor-1",
    content: "`FillerWordsConfig`"
  }, {
    heading: "constructor-1",
    content: "`undefined`"
  }, {
    heading: "constructor-1",
    content: "Filler words played while waiting for the LLM response"
  }, {
    heading: "builder-methods",
    content: "All builder methods return a **new** `Agent` instance. The original is never modified."
  }, {
    heading: "withllmvendor",
    content: "Sets the LLM vendor. Pass an instance of `OpenAI`, `AzureOpenAI`, `Anthropic`, `Gemini`, or any other LLM vendor."
  }, {
    heading: "withttsvendor",
    content: "Sets the TTS vendor. The sample rate type is captured and tracked for avatar compatibility."
  }, {
    heading: "withsttvendor",
    content: "Sets the STT vendor. Pass an instance of any STT vendor class."
  }, {
    heading: "withmllmvendor",
    content: "Sets the MLLM vendor for multimodal mode. Pass `OpenAIRealtime`, `AzureOpenAIRealtime`, `GeminiLive`, `VertexAI`, `XaiGrok`, or `OpenAIGPTLive`. Calling `withMllm()` automatically sets `mllm.enable = true`. MLLM mode does not require `withTts()` / `withLlm()` / `withStt()`."
  }, {
    heading: "withmllmvendor",
    content: "Avatars are only supported with the cascading ASR + LLM + TTS pipeline. If you combine `withMllm()` with `withAvatar()`, the SDK throws an error when `toProperties()` or `session.start()` is called."
  }, {
    heading: "withavatarvendor",
    content: "Sets the avatar vendor. The `this` constraint enforces at compile time that the agent's TTS sample rate matches the avatar's required rate."
  }, {
    heading: "withavatarvendor",
    content: "Requires the cascading ASR + LLM + TTS pipeline. If you combine `withAvatar()` with `withMllm()`, the SDK throws an error when `toProperties()` or `session.start()` is called."
  }, {
    heading: "withturndetectionconfig",
    content: "Configures cascading-flow turn detection. Pass `{ config: { start_of_speech, end_of_speech } }` for SOS/EOS detection. Use `withInterruption()` for interruption behavior and MLLM vendor `turnDetection` for MLLM turn detection."
  }, {
    heading: "withinterruptionconfig",
    content: "Configures unified interruption behavior using the top-level `interruption` object. Use this for `start_of_speech` and `keywords` interruption modes."
  }, {
    heading: "withinstructionstext",
    content: "Overrides the LLM system prompt on a new `Agent` instance. Deprecated. Set `systemMessages` on the LLM vendor instead."
  }, {
    heading: "withgreetingtext",
    content: "Overrides the greeting message on a new `Agent` instance. Deprecated. Set `greetingMessage` on the LLM or MLLM vendor instead."
  }, {
    heading: "other-builder-methods",
    content: "The following methods follow the same pattern — each returns a new `Agent` instance with the updated configuration."
  }, {
    heading: "other-builder-methods",
    content: "Method"
  }, {
    heading: "other-builder-methods",
    content: "Parameter type"
  }, {
    heading: "other-builder-methods",
    content: "Description"
  }, {
    heading: "other-builder-methods",
    content: "`withSal(config)`"
  }, {
    heading: "other-builder-methods",
    content: "`SalConfig`"
  }, {
    heading: "other-builder-methods",
    content: "Set Selective Attention Locking configuration"
  }, {
    heading: "other-builder-methods",
    content: "`withAdvancedFeatures(features)`"
  }, {
    heading: "other-builder-methods",
    content: "`AdvancedFeatures`"
  }, {
    heading: "other-builder-methods",
    content: "Set advanced features"
  }, {
    heading: "other-builder-methods",
    content: "`withTools(enabled = true)`"
  }, {
    heading: "other-builder-methods",
    content: "`boolean`"
  }, {
    heading: "other-builder-methods",
    content: "Enable or disable MCP tool and custom tool invocation"
  }, {
    heading: "other-builder-methods",
    content: "`withParameters(parameters)`"
  }, {
    heading: "other-builder-methods",
    content: "`SessionParamsInput`"
  }, {
    heading: "other-builder-methods",
    content: "Set session parameters"
  }, {
    heading: "other-builder-methods",
    content: "`withAudioScenario(audioScenario)`"
  }, {
    heading: "other-builder-methods",
    content: "`ParametersAudioScenario`"
  }, {
    heading: "other-builder-methods",
    content: "Set `parameters.audio_scenario`. Use the exported `AudioScenario` constants for discoverability, for example `agent.withAudioScenario(AudioScenario.Aiserver)`"
  }, {
    heading: "other-builder-methods",
    content: "`withFailureMessage(message)`"
  }, {
    heading: "other-builder-methods",
    content: "`string`"
  }, {
    heading: "other-builder-methods",
    content: "Deprecated. Set `failureMessage` on the LLM or MLLM vendor instead"
  }, {
    heading: "other-builder-methods",
    content: "`withMaxHistory(n)`"
  }, {
    heading: "other-builder-methods",
    content: "`number`"
  }, {
    heading: "other-builder-methods",
    content: "Deprecated. Set `maxHistory` on the LLM vendor instead. For Azure OpenAI Realtime MLLM, set `maxHistory` on the MLLM vendor"
  }, {
    heading: "other-builder-methods",
    content: "`withGreetingConfigs(configs)`"
  }, {
    heading: "other-builder-methods",
    content: "`LlmGreetingConfigs`"
  }, {
    heading: "other-builder-methods",
    content: "Deprecated. Set `greetingConfigs` on the LLM vendor instead"
  }, {
    heading: "other-builder-methods",
    content: "`withGeofence(geofence)`"
  }, {
    heading: "other-builder-methods",
    content: "`GeofenceConfig`"
  }, {
    heading: "other-builder-methods",
    content: "Set geofence configuration"
  }, {
    heading: "other-builder-methods",
    content: "`withLabels(labels)`"
  }, {
    heading: "other-builder-methods",
    content: "`Labels`"
  }, {
    heading: "other-builder-methods",
    content: "Set custom labels"
  }, {
    heading: "other-builder-methods",
    content: "`withRtc(rtc)`"
  }, {
    heading: "other-builder-methods",
    content: "`RtcConfig`"
  }, {
    heading: "other-builder-methods",
    content: "Set RTC configuration"
  }, {
    heading: "other-builder-methods",
    content: "`withFillerWords(fillerWords)`"
  }, {
    heading: "other-builder-methods",
    content: "`FillerWordsConfig`"
  }, {
    heading: "other-builder-methods",
    content: "Set filler words configuration"
  }, {
    heading: "createsessionoptions",
    content: "Creates an `AgentSession` for a channel using the agent's client. Doesn't start the agent. Call `session.start()` to join the channel."
  }, {
    heading: "createsessionoptions",
    content: "`SessionOptions` fields:"
  }, {
    heading: "createsessionoptions",
    content: "Option"
  }, {
    heading: "createsessionoptions",
    content: "Type"
  }, {
    heading: "createsessionoptions",
    content: "Required"
  }, {
    heading: "createsessionoptions",
    content: "Description"
  }, {
    heading: "createsessionoptions",
    content: "`channel`"
  }, {
    heading: "createsessionoptions",
    content: "`string`"
  }, {
    heading: "createsessionoptions",
    content: "Yes"
  }, {
    heading: "createsessionoptions",
    content: "Channel name to join"
  }, {
    heading: "createsessionoptions",
    content: "`agentUid`"
  }, {
    heading: "createsessionoptions",
    content: "`string`"
  }, {
    heading: "createsessionoptions",
    content: "Yes"
  }, {
    heading: "createsessionoptions",
    content: "The agent's RTC UID. Must be a numeric string when `token` is omitted"
  }, {
    heading: "createsessionoptions",
    content: "`remoteUids`"
  }, {
    heading: "createsessionoptions",
    content: "`string[]`"
  }, {
    heading: "createsessionoptions",
    content: "Yes"
  }, {
    heading: "createsessionoptions",
    content: "Remote user UIDs the agent listens and responds to"
  }, {
    heading: "createsessionoptions",
    content: "`name`"
  }, {
    heading: "createsessionoptions",
    content: "`string`"
  }, {
    heading: "createsessionoptions",
    content: "No"
  }, {
    heading: "createsessionoptions",
    content: "Agent instance name sent to the Agora API. Defaults to `agent-{timestamp}`"
  }, {
    heading: "createsessionoptions",
    content: "`token`"
  }, {
    heading: "createsessionoptions",
    content: "`string`"
  }, {
    heading: "createsessionoptions",
    content: "No"
  }, {
    heading: "createsessionoptions",
    content: "Pre-built RTC+RTM token. Omit to auto-generate from app credentials"
  }, {
    heading: "createsessionoptions",
    content: "`expiresIn`"
  }, {
    heading: "createsessionoptions",
    content: "`number`"
  }, {
    heading: "createsessionoptions",
    content: "No"
  }, {
    heading: "createsessionoptions",
    content: "Token lifetime in seconds. Only applies when the token is auto-generated. Valid range: 1–86400. Use `ExpiresIn` helpers for clarity"
  }, {
    heading: "createsessionoptions",
    content: "`idleTimeout`"
  }, {
    heading: "createsessionoptions",
    content: "`number`"
  }, {
    heading: "createsessionoptions",
    content: "No"
  }, {
    heading: "createsessionoptions",
    content: "Seconds before the agent auto-exits when no audio is detected. `0` disables the timeout"
  }, {
    heading: "createsessionoptions",
    content: "`enableStringUid`"
  }, {
    heading: "createsessionoptions",
    content: "`boolean`"
  }, {
    heading: "createsessionoptions",
    content: "No"
  }, {
    heading: "createsessionoptions",
    content: "Use string UIDs instead of numeric UIDs"
  }, {
    heading: "createsessionoptions",
    content: "`preset`"
  }, {
    heading: "createsessionoptions",
    content: "`PresetInput`"
  }, {
    heading: "createsessionoptions",
    content: "No"
  }, {
    heading: "createsessionoptions",
    content: "Advanced project-specific presets. Use only when Agora provides a specific preset ID for your project. Most applications should not set this field"
  }, {
    heading: "createsessionoptions",
    content: "`pipelineId`"
  }, {
    heading: "createsessionoptions",
    content: "`string`"
  }, {
    heading: "createsessionoptions",
    content: "No"
  }, {
    heading: "createsessionoptions",
    content: "Published AI Studio pipeline ID to use as the base configuration"
  }, {
    heading: "createsessionoptions",
    content: "`debug`"
  }, {
    heading: "createsessionoptions",
    content: "`boolean`"
  }, {
    heading: "createsessionoptions",
    content: "No"
  }, {
    heading: "createsessionoptions",
    content: "Log API requests to the console"
  }, {
    heading: "createsessionoptions",
    content: "`warn`"
  }, {
    heading: "createsessionoptions",
    content: "`(message: string) => void`"
  }, {
    heading: "createsessionoptions",
    content: "No"
  }, {
    heading: "createsessionoptions",
    content: "Custom warning logger; pass a no-op to silence warnings"
  }, {
    heading: "createsessionoptions",
    content: "`preset` is session-scoped because the underlying Agora start/join API applies presets per session, not per reusable `Agent` definition."
  }, {
    heading: "createsessionoptions",
    content: "When you omit credentials for supported reseller-backed vendor models, AgentKit infers the matching session preset automatically:"
  }, {
    heading: "createsessionoptions",
    content: "Deepgram STT: `nova-2`, `nova-3`"
  }, {
    heading: "createsessionoptions",
    content: "OpenAI LLM: `gpt-4o-mini`, `gpt-4.1-mini`, `gpt-5-nano`, `gpt-5-mini`"
  }, {
    heading: "createsessionoptions",
    content: "OpenAI TTS: `tts-1`"
  }, {
    heading: "createsessionoptions",
    content: "MiniMax TTS: `speech-2.6-turbo`, `speech-2.8-turbo`"
  }, {
    heading: "createsessionoptions",
    content: "If you provide your own vendor API key for those same models, AgentKit keeps the request in BYOK mode and does not infer a preset."
  }, {
    heading: "properties-1",
    content: "Read-only properties available on any `Agent` instance."
  }, {
    heading: "properties-1",
    content: "Property"
  }, {
    heading: "properties-1",
    content: "Type"
  }, {
    heading: "properties-1",
    content: "Description"
  }, {
    heading: "properties-1",
    content: "`pipelineId`"
  }, {
    heading: "properties-1",
    content: "`string \\| undefined`"
  }, {
    heading: "properties-1",
    content: "AI Studio pipeline ID"
  }, {
    heading: "properties-1",
    content: "`greetingConfigs`"
  }, {
    heading: "properties-1",
    content: "`LlmGreetingConfigs \\| undefined`"
  }, {
    heading: "properties-1",
    content: "Greeting playback configuration"
  }, {
    heading: "properties-1",
    content: "`instructions`"
  }, {
    heading: "properties-1",
    content: "`string \\| undefined`"
  }, {
    heading: "properties-1",
    content: "LLM system prompt"
  }, {
    heading: "properties-1",
    content: "`greeting`"
  }, {
    heading: "properties-1",
    content: "`string \\| undefined`"
  }, {
    heading: "properties-1",
    content: "Greeting message"
  }, {
    heading: "properties-1",
    content: "`failureMessage`"
  }, {
    heading: "properties-1",
    content: "`string \\| undefined`"
  }, {
    heading: "properties-1",
    content: "Message spoken when LLM fails"
  }, {
    heading: "properties-1",
    content: "`maxHistory`"
  }, {
    heading: "properties-1",
    content: "`number \\| undefined`"
  }, {
    heading: "properties-1",
    content: "Maximum conversation history length"
  }, {
    heading: "properties-1",
    content: "`llm`"
  }, {
    heading: "properties-1",
    content: "`LlmConfig \\| undefined`"
  }, {
    heading: "properties-1",
    content: "LLM configuration"
  }, {
    heading: "properties-1",
    content: "`tts`"
  }, {
    heading: "properties-1",
    content: "`TtsConfig \\| undefined`"
  }, {
    heading: "properties-1",
    content: "TTS configuration"
  }, {
    heading: "properties-1",
    content: "`stt`"
  }, {
    heading: "properties-1",
    content: "`SttConfig \\| undefined`"
  }, {
    heading: "properties-1",
    content: "STT configuration"
  }, {
    heading: "properties-1",
    content: "`mllm`"
  }, {
    heading: "properties-1",
    content: "`MllmConfig \\| undefined`"
  }, {
    heading: "properties-1",
    content: "MLLM configuration"
  }, {
    heading: "properties-1",
    content: "`avatar`"
  }, {
    heading: "properties-1",
    content: "`AvatarConfig \\| undefined`"
  }, {
    heading: "properties-1",
    content: "Avatar configuration"
  }, {
    heading: "properties-1",
    content: "`turnDetection`"
  }, {
    heading: "properties-1",
    content: "`TurnDetectionConfig \\| undefined`"
  }, {
    heading: "properties-1",
    content: "Turn detection configuration"
  }, {
    heading: "properties-1",
    content: "`interruption`"
  }, {
    heading: "properties-1",
    content: "`InterruptionConfig \\| undefined`"
  }, {
    heading: "properties-1",
    content: "Interruption configuration"
  }, {
    heading: "properties-1",
    content: "`sal`"
  }, {
    heading: "properties-1",
    content: "`SalConfig \\| undefined`"
  }, {
    heading: "properties-1",
    content: "SAL configuration"
  }, {
    heading: "properties-1",
    content: "`advancedFeatures`"
  }, {
    heading: "properties-1",
    content: "`AdvancedFeatures \\| undefined`"
  }, {
    heading: "properties-1",
    content: "Advanced features"
  }, {
    heading: "properties-1",
    content: "`parameters`"
  }, {
    heading: "properties-1",
    content: "`SessionParams \\| undefined`"
  }, {
    heading: "properties-1",
    content: "Session parameters"
  }, {
    heading: "properties-1",
    content: "`geofence`"
  }, {
    heading: "properties-1",
    content: "`GeofenceConfig \\| undefined`"
  }, {
    heading: "properties-1",
    content: "Geofence configuration"
  }, {
    heading: "properties-1",
    content: "`labels`"
  }, {
    heading: "properties-1",
    content: "`Labels \\| undefined`"
  }, {
    heading: "properties-1",
    content: "Custom labels"
  }, {
    heading: "properties-1",
    content: "`rtc`"
  }, {
    heading: "properties-1",
    content: "`RtcConfig \\| undefined`"
  }, {
    heading: "properties-1",
    content: "RTC configuration"
  }, {
    heading: "properties-1",
    content: "`fillerWords`"
  }, {
    heading: "properties-1",
    content: "`FillerWordsConfig \\| undefined`"
  }, {
    heading: "properties-1",
    content: "Filler words configuration"
  }, {
    heading: "properties-1",
    content: "`config`"
  }, {
    heading: "properties-1",
    content: "`AgentOptions`"
  }, {
    heading: "properties-1",
    content: "Full read-only configuration snapshot"
  }, {
    heading: "topropertiesopts",
    content: "Low-level method to convert the agent configuration to the Fern request format. Used internally by `AgentSession.start()`. You typically do not need to call this directly unless building custom request bodies."
  }, {
    heading: "topropertiesopts",
    content: "In cascading mode, throws if TTS or LLM isn't set. If you don't call `withStt()`, ASR defaults to ARES (`fengming` for `Area.CN`). `turnDetection.language` defaults to `en-US` and is also sent as `asr.language`."
  }, {
    heading: "type-aliases",
    content: "Public aliases over Fern-generated types include `LlmConfig`, `SttConfig`, `AsrConfig` (= `SttConfig`), `MllmConfig`, `AvatarConfig`, session/conversation types, and think types (`ThinkOnListeningAction`, etc.)."
  }, {
    heading: "type-aliases",
    content: "Think value constants: `ThinkOnListeningActionInject`, `ThinkOnListeningActionInterrupt`, `ThinkOnListeningActionIgnore`, `ThinkOnThinkingActionInterrupt`, `ThinkOnThinkingActionIgnore`, `ThinkOnSpeakingActionInterrupt`, `ThinkOnSpeakingActionIgnore`."
  }, {
    heading: "type-aliases",
    content: "The think action options also accept the string `append`, which has no convenience constant. With `append`, the instruction doesn't interrupt the current interaction. The agent waits for the current user turn, LLM inference, or TTS playback to finish, then appends the instruction to the context as a separate user message and starts a new turn."
  }, {
    heading: "type-aliases",
    content: "`FillerWordsConfig` supports static and generated filler words. Generated mode requires static fallback phrases, while `generated_config` and `prompt` are optional. Agora hosts the generation service, so you can't configure its model endpoint, API key, or model parameters. For the field structure, see Configure generated filler words."
  }, {
    heading: "type-aliases",
    content: "`FillerWordsContentGeneratedConfig` sets the conversation context for generated filler words. Use `context_message_limit` (`1` to `6`, defaults to `1`) to set how many of the most recent conversation messages to use, counting the current turn's message, and `history_character_limit` (`0` to `10000`, defaults to `1000`) to cap the combined characters of the earlier messages. For details, see Talking while waiting."
  }, {
    heading: "type-aliases",
    content: "Public aliases also include `FillerWordsContentGeneratedConfig` and the custom tool types `LlmTool`, `LlmToolFunction`, `LlmToolServer`, and `LlmToolExecution`. `llm.tools` is independent of MCP server configuration, but both require `withTools(true)` to enable tool calling."
  }, {
    heading: "agentsession",
    content: "`AgentSession` manages the full lifecycle of a running agent. Create sessions using `agent.createSession()`; do not call the constructor directly."
  }, {
    heading: "state-machine",
    content: "A session progresses through the following states:"
  }, {
    heading: "state-machine",
    content: "Transition"
  }, {
    heading: "state-machine",
    content: "Trigger"
  }, {
    heading: "state-machine",
    content: "`idle → starting`"
  }, {
    heading: "state-machine",
    content: "`start()` called"
  }, {
    heading: "state-machine",
    content: "`starting → running`"
  }, {
    heading: "state-machine",
    content: "API responds with agent ID"
  }, {
    heading: "state-machine",
    content: "`starting → error`"
  }, {
    heading: "state-machine",
    content: "API request fails"
  }, {
    heading: "state-machine",
    content: "`running → stopping`"
  }, {
    heading: "state-machine",
    content: "`stop()` called"
  }, {
    heading: "state-machine",
    content: "`stopping → stopped`"
  }, {
    heading: "state-machine",
    content: "API confirms agent stopped"
  }, {
    heading: "state-machine",
    content: "`stopping → error`"
  }, {
    heading: "state-machine",
    content: "Stop request fails with a non-404 error"
  }, {
    heading: "state-machine",
    content: "`start()` can also be called from `stopped` or `error` state to restart the session. `say()`, `interrupt()`, `update()`, and `think()` reject on failure but don't change the session state."
  }, {
    heading: "methods-1",
    content: "The following methods are available on an `AgentSession` instance."
  }, {
    heading: "start",
    content: "Starts the agent session. Generates tokens if not provided, sends the start request, and returns the agent ID. Resolves explicit `preset` values and also infers reseller presets from supported vendor configs when credentials are omitted."
  }, {
    heading: "start",
    content: "Transitions: `idle` / `stopped` / `error` → `starting` → `running`"
  }, {
    heading: "start",
    content: "Throws if called in `starting`, `running`, or `stopping` state"
  }, {
    heading: "start",
    content: "Throws if avatar config is invalid (wrong TTS sample rate)"
  }, {
    heading: "start",
    content: "Throws if no `token` is provided and the client has no `appCertificate`"
  }, {
    heading: "start",
    content: "Throws if `agentUid` (or avatar `agoraUid`) isn't numeric when tokens are auto-generated"
  }, {
    heading: "start",
    content: "Throws if `appId` or `appCertificate` isn't exactly 32 characters when tokens are auto-generated"
  }, {
    heading: "start",
    content: "Throws if MLLM is enabled together with an enabled avatar — avatars are only supported with the cascading ASR + LLM + TTS pipeline"
  }, {
    heading: "start",
    content: "Applies explicit `preset` values when provided and sends Agora-managed configuration when supported vendor credentials are omitted"
  }, {
    heading: "start",
    content: "Fills generic avatar `agora_appid` and `agora_channel` from the session when omitted"
  }, {
    heading: "start",
    content: "Generates avatar `agora_token` for `HeyGenAvatar`, `LiveAvatarAvatar`, `GenericAvatar`, `Tavus`, `Protoface`, and `LemonSlice` when `agoraToken` is omitted and the client has an `appCertificate`. Other vendors (`AkoolAvatar`, `AnamAvatar`) never receive an auto-generated token."
  }, {
    heading: "stop",
    content: "Stops the agent session and removes the agent from the channel. If the agent has already stopped — for example due to idle timeout — resolves silently rather than throwing a 404 error."
  }, {
    heading: "stop",
    content: "Transitions: `running` → `stopping` → `stopped`"
  }, {
    heading: "stop",
    content: "Throws if called outside `running` state"
  }, {
    heading: "saytext-options",
    content: "Instructs the agent to speak the given text."
  }, {
    heading: "saytext-options",
    content: "Parameter"
  }, {
    heading: "saytext-options",
    content: "Type"
  }, {
    heading: "saytext-options",
    content: "Required"
  }, {
    heading: "saytext-options",
    content: "Description"
  }, {
    heading: "saytext-options",
    content: "`text`"
  }, {
    heading: "saytext-options",
    content: "`string`"
  }, {
    heading: "saytext-options",
    content: "Yes"
  }, {
    heading: "saytext-options",
    content: "The text for the agent to speak"
  }, {
    heading: "saytext-options",
    content: "`options.priority`"
  }, {
    heading: "saytext-options",
    content: "`SpeakPriority`"
  }, {
    heading: "saytext-options",
    content: "No"
  }, {
    heading: "saytext-options",
    content: "Message priority"
  }, {
    heading: "saytext-options",
    content: "`options.interruptable`"
  }, {
    heading: "saytext-options",
    content: "`boolean`"
  }, {
    heading: "saytext-options",
    content: "No"
  }, {
    heading: "saytext-options",
    content: "Whether this message can be interrupted by the user"
  }, {
    heading: "saytext-options",
    content: "Only valid in `running` state"
  }, {
    heading: "interrupt",
    content: "Interrupts the agent's current speech."
  }, {
    heading: "interrupt",
    content: "Only valid in `running` state"
  }, {
    heading: "thinktext-options",
    content: "Injects a custom text instruction into the running agent."
  }, {
    heading: "thinktext-options",
    content: "Parameter"
  }, {
    heading: "thinktext-options",
    content: "Type"
  }, {
    heading: "thinktext-options",
    content: "Required"
  }, {
    heading: "thinktext-options",
    content: "Description"
  }, {
    heading: "thinktext-options",
    content: "`text`"
  }, {
    heading: "thinktext-options",
    content: "`string`"
  }, {
    heading: "thinktext-options",
    content: "Yes"
  }, {
    heading: "thinktext-options",
    content: "The instruction text"
  }, {
    heading: "thinktext-options",
    content: "`options.on_listening_action`"
  }, {
    heading: "thinktext-options",
    content: "`ThinkOnListeningAction`"
  }, {
    heading: "thinktext-options",
    content: "No"
  }, {
    heading: "thinktext-options",
    content: "Action when the agent is listening: `inject`, `interrupt`, `ignore`, or `append`"
  }, {
    heading: "thinktext-options",
    content: "`options.on_thinking_action`"
  }, {
    heading: "thinktext-options",
    content: "`ThinkOnThinkingAction`"
  }, {
    heading: "thinktext-options",
    content: "No"
  }, {
    heading: "thinktext-options",
    content: "Action when the agent is thinking: `interrupt`, `ignore`, or `append`"
  }, {
    heading: "thinktext-options",
    content: "`options.on_speaking_action`"
  }, {
    heading: "thinktext-options",
    content: "`ThinkOnSpeakingAction`"
  }, {
    heading: "thinktext-options",
    content: "No"
  }, {
    heading: "thinktext-options",
    content: "Action when the agent is speaking: `interrupt`, `ignore`, or `append`"
  }, {
    heading: "thinktext-options",
    content: "`options.interruptable`"
  }, {
    heading: "thinktext-options",
    content: "`boolean`"
  }, {
    heading: "thinktext-options",
    content: "No"
  }, {
    heading: "thinktext-options",
    content: "Whether the user can interrupt the resulting response"
  }, {
    heading: "thinktext-options",
    content: "`options.metadata`"
  }, {
    heading: "thinktext-options",
    content: "`Record<string, string>`"
  }, {
    heading: "thinktext-options",
    content: "No"
  }, {
    heading: "thinktext-options",
    content: "Custom key-value metadata"
  }, {
    heading: "thinktext-options",
    content: "Only valid in `running` state"
  }, {
    heading: "updateconfig",
    content: "Updates the agent configuration mid-session without restarting. Accepts a partial configuration object in REST API format."
  }, {
    heading: "updateconfig",
    content: "Only valid in `running` state"
  }, {
    heading: "gethistory",
    content: "Fetches the conversation history for this session. Requires a valid agent ID — `start()` must have been called successfully."
  }, {
    heading: "getturnsoptions",
    content: "Fetches turn-by-turn analytics for this session, including start/end events and latency metrics. Requires a valid agent ID and `start()` must have been called successfully."
  }, {
    heading: "getturnsoptions",
    content: "`options.page_index`: page number, starting from `1`"
  }, {
    heading: "getturnsoptions",
    content: "`options.page_size`: number of turns per page"
  }, {
    heading: "getallturnsoptions",
    content: "Fetches all turn analytics pages and merges the `turns` array. Requires a valid agent ID and `start()` must have been called successfully."
  }, {
    heading: "getallturnsoptions",
    content: "Requires a valid `agentId`"
  }, {
    heading: "getallturnsoptions",
    content: "For very long sessions, prefer processing pages with `getTurns()` to avoid holding all turns in memory"
  }, {
    heading: "getinfo",
    content: "Fetches current agent metadata from the API. Requires a valid agent ID."
  }, {
    heading: "onevent-handler",
    content: "Subscribes to a session event. Register handlers **before** calling `start()` to avoid missing the `started` event."
  }, {
    heading: "offevent-handler",
    content: "Unsubscribes a previously registered event handler."
  }, {
    heading: "events",
    content: "The session emits the following events. See `AgentSessionEvent` and `AgentSessionEventHandler` for type details."
  }, {
    heading: "events",
    content: "Event"
  }, {
    heading: "events",
    content: "Payload type"
  }, {
    heading: "events",
    content: "Description"
  }, {
    heading: "events",
    content: '`"started"`'
  }, {
    heading: "events",
    content: "`{ agentId: string }`"
  }, {
    heading: "events",
    content: "Agent successfully joined the channel"
  }, {
    heading: "events",
    content: '`"stopped"`'
  }, {
    heading: "events",
    content: "`{ agentId: string }`"
  }, {
    heading: "events",
    content: "Agent left the channel"
  }, {
    heading: "events",
    content: '`"error"`'
  }, {
    heading: "events",
    content: "`unknown`"
  }, {
    heading: "events",
    content: "The error thrown during `start()` or `stop()`"
  }, {
    heading: "properties-2",
    content: "The following read-only properties are available on any `AgentSession` instance."
  }, {
    heading: "properties-2",
    content: "Property"
  }, {
    heading: "properties-2",
    content: "Type"
  }, {
    heading: "properties-2",
    content: "Description"
  }, {
    heading: "properties-2",
    content: "`status`"
  }, {
    heading: "properties-2",
    content: '`"idle" \\| "starting" \\| "running" \\| "stopping" \\| "stopped" \\| "error"`'
  }, {
    heading: "properties-2",
    content: 'Current session state. One of `"idle"`, `"starting"`, `"running"`, `"stopping"`, `"stopped"`, `"error"`'
  }, {
    heading: "properties-2",
    content: "`id`"
  }, {
    heading: "properties-2",
    content: "`string \\| null`"
  }, {
    heading: "properties-2",
    content: "Agent ID, populated after `start()` resolves"
  }, {
    heading: "properties-2",
    content: "`agent`"
  }, {
    heading: "properties-2",
    content: "`Agent`"
  }, {
    heading: "properties-2",
    content: "The agent configuration this session was created from"
  }, {
    heading: "properties-2",
    content: "`appId`"
  }, {
    heading: "properties-2",
    content: "`string`"
  }, {
    heading: "properties-2",
    content: "The Agora App ID for this session"
  }, {
    heading: "properties-2",
    content: "`raw`"
  }, {
    heading: "properties-2",
    content: "`AgentsClient`"
  }, {
    heading: "properties-2",
    content: "Direct access to the Fern-generated `AgentsClient` for advanced operations"
  }, {
    heading: "properties-2",
    content: "`rawAgentManagement`"
  }, {
    heading: "properties-2",
    content: "`AgentManagementClient`"
  }, {
    heading: "properties-2",
    content: "Direct access to the Fern-generated agent management client"
  }, {
    heading: "using-sessionraw",
    content: "Access the generated REST client to call endpoints not yet wrapped:"
  }, {
    heading: "using-sessionraw",
    content: "You must pass `appid` and `agentId` manually when using raw methods."
  }, {
    heading: "presets-and-byok",
    content: "Prefer configuring vendors on the `Agent` builder. When you omit credentials for supported Agora-managed models, AgentKit sends the matching Agora-managed configuration at session start."
  }, {
    heading: "presets-and-byok",
    content: "`preset` is an advanced session option for project-specific settings, not for selecting Agora-managed models. Most applications should use the builder instead."
  }, {
    heading: "presets-and-byok",
    content: "Omit vendor credentials on the builder for supported Agora-managed models."
  }, {
    heading: "presets-and-byok",
    content: "Provide vendor API keys when you want BYOK."
  }, {
    heading: "presets-and-byok",
    content: "Pass `preset` on `agent.createSession(...)` only when you need to access specific project-specific settings."
  }, {
    heading: "presets-and-byok",
    content: "Supported Agora-managed models:"
  }, {
    heading: "presets-and-byok",
    content: "Deepgram STT: `nova-2`, `nova-3`"
  }, {
    heading: "presets-and-byok",
    content: "OpenAI LLM: `gpt-4o-mini`, `gpt-4.1-mini`, `gpt-5-nano`, `gpt-5-mini`"
  }, {
    heading: "presets-and-byok",
    content: "OpenAI TTS: `tts-1`"
  }, {
    heading: "presets-and-byok",
    content: "MiniMax TTS: `speech-2.6-turbo`, `speech-2.8-turbo`"
  }, {
    heading: "vendors",
    content: "All vendor classes are imported from `agora-agents`. Pass vendor instances to the Agent builder methods."
  }, {
    heading: "llm-vendors",
    content: "Use with `withLlm()`."
  }, {
    heading: "openai",
    content: "Option"
  }, {
    heading: "openai",
    content: "Type"
  }, {
    heading: "openai",
    content: "Required"
  }, {
    heading: "openai",
    content: "Description"
  }, {
    heading: "openai",
    content: "`apiKey`"
  }, {
    heading: "openai",
    content: "`string`"
  }, {
    heading: "openai",
    content: "Usually"
  }, {
    heading: "openai",
    content: "OpenAI API key. Optional for Agora-managed preset models"
  }, {
    heading: "openai",
    content: "`model`"
  }, {
    heading: "openai",
    content: "`string`"
  }, {
    heading: "openai",
    content: "Yes"
  }, {
    heading: "openai",
    content: "Model name, for example `'gpt-4o-mini'`"
  }, {
    heading: "openai",
    content: "`url`"
  }, {
    heading: "openai",
    content: "`string`"
  }, {
    heading: "openai",
    content: "Conditional"
  }, {
    heading: "openai",
    content: "API endpoint URL. Required when `apiKey` is set (BYOK); default `https://api.openai.com/v1/chat/completions`"
  }, {
    heading: "openai",
    content: "`maxHistory`"
  }, {
    heading: "openai",
    content: "`number`"
  }, {
    heading: "openai",
    content: "No"
  }, {
    heading: "openai",
    content: "Maximum conversation history to cache"
  }, {
    heading: "openai",
    content: "`temperature`"
  }, {
    heading: "openai",
    content: "`number`"
  }, {
    heading: "openai",
    content: "No"
  }, {
    heading: "openai",
    content: "Sampling temperature (0.0–2.0)"
  }, {
    heading: "openai",
    content: "`topP`"
  }, {
    heading: "openai",
    content: "`number`"
  }, {
    heading: "openai",
    content: "No"
  }, {
    heading: "openai",
    content: "Nucleus sampling (0.0–1.0)"
  }, {
    heading: "openai",
    content: "`maxTokens`"
  }, {
    heading: "openai",
    content: "`number`"
  }, {
    heading: "openai",
    content: "No"
  }, {
    heading: "openai",
    content: "Maximum tokens to generate"
  }, {
    heading: "openai",
    content: "`systemMessages`"
  }, {
    heading: "openai",
    content: "`Record<string, unknown>[]`"
  }, {
    heading: "openai",
    content: "No"
  }, {
    heading: "openai",
    content: "Additional system messages"
  }, {
    heading: "openai",
    content: "`greetingMessage`"
  }, {
    heading: "openai",
    content: "`string`"
  }, {
    heading: "openai",
    content: "No"
  }, {
    heading: "openai",
    content: "Agent greeting message"
  }, {
    heading: "openai",
    content: "`failureMessage`"
  }, {
    heading: "openai",
    content: "`string`"
  }, {
    heading: "openai",
    content: "No"
  }, {
    heading: "openai",
    content: "Message spoken when the LLM call fails"
  }, {
    heading: "openai",
    content: "`inputModalities`"
  }, {
    heading: "openai",
    content: "`string[]`"
  }, {
    heading: "openai",
    content: "No"
  }, {
    heading: "openai",
    content: 'Input modalities. Default: `["text"]`'
  }, {
    heading: "openai",
    content: "`outputModalities`"
  }, {
    heading: "openai",
    content: "`string[]`"
  }, {
    heading: "openai",
    content: "No"
  }, {
    heading: "openai",
    content: "Output modalities"
  }, {
    heading: "openai",
    content: "`params`"
  }, {
    heading: "openai",
    content: "`Record<string, unknown>`"
  }, {
    heading: "openai",
    content: "No"
  }, {
    heading: "openai",
    content: "Additional LLM parameters passed to the model"
  }, {
    heading: "openai",
    content: "`headers`"
  }, {
    heading: "openai",
    content: "`Record<string, string>`"
  }, {
    heading: "openai",
    content: "No"
  }, {
    heading: "openai",
    content: "Custom HTTP headers forwarded to the LLM provider"
  }, {
    heading: "openai",
    content: "`vendor`"
  }, {
    heading: "openai",
    content: "`string`"
  }, {
    heading: "openai",
    content: "No"
  }, {
    heading: "openai",
    content: "Vendor override"
  }, {
    heading: "openai",
    content: "`mcpServers`"
  }, {
    heading: "openai",
    content: "`Record<string, unknown>[]`"
  }, {
    heading: "openai",
    content: "No"
  }, {
    heading: "openai",
    content: "MCP server connections"
  }, {
    heading: "openai",
    content: "`tools`"
  }, {
    heading: "openai",
    content: "`LlmTool[]`"
  }, {
    heading: "openai",
    content: "No"
  }, {
    heading: "openai",
    content: "Synchronous custom tool definitions the LLM can call. Requires `withTools(true)`"
  }, {
    heading: "openai",
    content: "`greetingConfigs`"
  }, {
    heading: "openai",
    content: "`LlmGreetingConfigs`"
  }, {
    heading: "openai",
    content: "No"
  }, {
    heading: "openai",
    content: "Greeting playback configuration"
  }, {
    heading: "openai",
    content: "`templateVariables`"
  }, {
    heading: "openai",
    content: "`Record<string, string>`"
  }, {
    heading: "openai",
    content: "No"
  }, {
    heading: "openai",
    content: "Template variables for messages. Custom tools can reference them with `{{template_variables.<name>}}`"
  }, {
    heading: "openai",
    content: "`apiKey` is optional for the following reseller preset models: `gpt-4o-mini`, `gpt-4.1-mini`, `gpt-5-nano`, `gpt-5-mini`. If `apiKey` is omitted for one of those models, AgentKit infers the matching session preset. This no-key branch is only available with the default OpenAI endpoint and without a custom vendor hint. If `apiKey` is provided, AgentKit uses standard BYOK behavior instead."
  }, {
    heading: "azureopenai",
    content: "Option"
  }, {
    heading: "azureopenai",
    content: "Type"
  }, {
    heading: "azureopenai",
    content: "Required"
  }, {
    heading: "azureopenai",
    content: "Description"
  }, {
    heading: "azureopenai",
    content: "`apiKey`"
  }, {
    heading: "azureopenai",
    content: "`string`"
  }, {
    heading: "azureopenai",
    content: "Yes"
  }, {
    heading: "azureopenai",
    content: "Azure OpenAI API key"
  }, {
    heading: "azureopenai",
    content: "`model`"
  }, {
    heading: "azureopenai",
    content: "`string`"
  }, {
    heading: "azureopenai",
    content: "Yes"
  }, {
    heading: "azureopenai",
    content: "Model or deployment name"
  }, {
    heading: "azureopenai",
    content: "`resourceName`"
  }, {
    heading: "azureopenai",
    content: "`string`"
  }, {
    heading: "azureopenai",
    content: "Conditional"
  }, {
    heading: "azureopenai",
    content: "Azure resource name. Required unless `endpoint` is set"
  }, {
    heading: "azureopenai",
    content: "`endpoint`"
  }, {
    heading: "azureopenai",
    content: "`string`"
  }, {
    heading: "azureopenai",
    content: "Conditional"
  }, {
    heading: "azureopenai",
    content: "Full Azure base URL. Takes precedence over `resourceName`; required unless `resourceName` is set"
  }, {
    heading: "azureopenai",
    content: "`deploymentName`"
  }, {
    heading: "azureopenai",
    content: "`string`"
  }, {
    heading: "azureopenai",
    content: "Yes"
  }, {
    heading: "azureopenai",
    content: "Deployment name in Azure"
  }, {
    heading: "azureopenai",
    content: "`apiVersion`"
  }, {
    heading: "azureopenai",
    content: "`string`"
  }, {
    heading: "azureopenai",
    content: "No"
  }, {
    heading: "azureopenai",
    content: "Azure API version. Default: `'2024-08-01-preview'`"
  }, {
    heading: "azureopenai",
    content: "`maxHistory`"
  }, {
    heading: "azureopenai",
    content: "`number`"
  }, {
    heading: "azureopenai",
    content: "No"
  }, {
    heading: "azureopenai",
    content: "Maximum conversation history to cache"
  }, {
    heading: "azureopenai",
    content: "`temperature`"
  }, {
    heading: "azureopenai",
    content: "`number`"
  }, {
    heading: "azureopenai",
    content: "No"
  }, {
    heading: "azureopenai",
    content: "Sampling temperature (0.0–2.0)"
  }, {
    heading: "azureopenai",
    content: "`topP`"
  }, {
    heading: "azureopenai",
    content: "`number`"
  }, {
    heading: "azureopenai",
    content: "No"
  }, {
    heading: "azureopenai",
    content: "Nucleus sampling (0.0–1.0)"
  }, {
    heading: "azureopenai",
    content: "`maxTokens`"
  }, {
    heading: "azureopenai",
    content: "`number`"
  }, {
    heading: "azureopenai",
    content: "No"
  }, {
    heading: "azureopenai",
    content: "Maximum tokens to generate"
  }, {
    heading: "azureopenai",
    content: "`systemMessages`"
  }, {
    heading: "azureopenai",
    content: "`Record<string, unknown>[]`"
  }, {
    heading: "azureopenai",
    content: "No"
  }, {
    heading: "azureopenai",
    content: "Additional system messages"
  }, {
    heading: "azureopenai",
    content: "`greetingMessage`"
  }, {
    heading: "azureopenai",
    content: "`string`"
  }, {
    heading: "azureopenai",
    content: "No"
  }, {
    heading: "azureopenai",
    content: "Agent greeting message"
  }, {
    heading: "azureopenai",
    content: "`failureMessage`"
  }, {
    heading: "azureopenai",
    content: "`string`"
  }, {
    heading: "azureopenai",
    content: "No"
  }, {
    heading: "azureopenai",
    content: "Message spoken when the LLM call fails"
  }, {
    heading: "azureopenai",
    content: "`inputModalities`"
  }, {
    heading: "azureopenai",
    content: "`string[]`"
  }, {
    heading: "azureopenai",
    content: "No"
  }, {
    heading: "azureopenai",
    content: 'Input modalities. Default: `["text"]`'
  }, {
    heading: "azureopenai",
    content: "`outputModalities`"
  }, {
    heading: "azureopenai",
    content: "`string[]`"
  }, {
    heading: "azureopenai",
    content: "No"
  }, {
    heading: "azureopenai",
    content: "Output modalities"
  }, {
    heading: "azureopenai",
    content: "`params`"
  }, {
    heading: "azureopenai",
    content: "`Record<string, unknown>`"
  }, {
    heading: "azureopenai",
    content: "No"
  }, {
    heading: "azureopenai",
    content: "Additional LLM parameters"
  }, {
    heading: "azureopenai",
    content: "`headers`"
  }, {
    heading: "azureopenai",
    content: "`Record<string, string>`"
  }, {
    heading: "azureopenai",
    content: "No"
  }, {
    heading: "azureopenai",
    content: "Custom HTTP headers forwarded to the LLM provider"
  }, {
    heading: "azureopenai",
    content: "`vendor`"
  }, {
    heading: "azureopenai",
    content: "`string`"
  }, {
    heading: "azureopenai",
    content: "No"
  }, {
    heading: "azureopenai",
    content: "Vendor override. Defaults to `azure`"
  }, {
    heading: "azureopenai",
    content: "`mcpServers`"
  }, {
    heading: "azureopenai",
    content: "`Record<string, unknown>[]`"
  }, {
    heading: "azureopenai",
    content: "No"
  }, {
    heading: "azureopenai",
    content: "MCP server connections"
  }, {
    heading: "azureopenai",
    content: "`tools`"
  }, {
    heading: "azureopenai",
    content: "`LlmTool[]`"
  }, {
    heading: "azureopenai",
    content: "No"
  }, {
    heading: "azureopenai",
    content: "Synchronous custom tool definitions the LLM can call. Requires `withTools(true)`"
  }, {
    heading: "azureopenai",
    content: "`greetingConfigs`"
  }, {
    heading: "azureopenai",
    content: "`LlmGreetingConfigs`"
  }, {
    heading: "azureopenai",
    content: "No"
  }, {
    heading: "azureopenai",
    content: "Greeting playback configuration"
  }, {
    heading: "azureopenai",
    content: "`templateVariables`"
  }, {
    heading: "azureopenai",
    content: "`Record<string, string>`"
  }, {
    heading: "azureopenai",
    content: "No"
  }, {
    heading: "azureopenai",
    content: "Template variables for messages. Custom tools can reference them with `{{template_variables.<name>}}`"
  }, {
    heading: "anthropic",
    content: "Option"
  }, {
    heading: "anthropic",
    content: "Type"
  }, {
    heading: "anthropic",
    content: "Required"
  }, {
    heading: "anthropic",
    content: "Description"
  }, {
    heading: "anthropic",
    content: "`apiKey`"
  }, {
    heading: "anthropic",
    content: "`string`"
  }, {
    heading: "anthropic",
    content: "Yes"
  }, {
    heading: "anthropic",
    content: "Anthropic API key"
  }, {
    heading: "anthropic",
    content: "`model`"
  }, {
    heading: "anthropic",
    content: "`string`"
  }, {
    heading: "anthropic",
    content: "Yes"
  }, {
    heading: "anthropic",
    content: "Model name"
  }, {
    heading: "anthropic",
    content: "`url`"
  }, {
    heading: "anthropic",
    content: "`string`"
  }, {
    heading: "anthropic",
    content: "Yes"
  }, {
    heading: "anthropic",
    content: "Anthropic messages endpoint URL"
  }, {
    heading: "anthropic",
    content: "`maxTokens`"
  }, {
    heading: "anthropic",
    content: "`number`"
  }, {
    heading: "anthropic",
    content: "Yes"
  }, {
    heading: "anthropic",
    content: "Maximum tokens to generate"
  }, {
    heading: "anthropic",
    content: "`headers`"
  }, {
    heading: "anthropic",
    content: "`Record<string, string>`"
  }, {
    heading: "anthropic",
    content: "Yes"
  }, {
    heading: "anthropic",
    content: "Request headers, including `anthropic-version`"
  }, {
    heading: "anthropic",
    content: "`maxHistory`"
  }, {
    heading: "anthropic",
    content: "`number`"
  }, {
    heading: "anthropic",
    content: "No"
  }, {
    heading: "anthropic",
    content: "Maximum conversation history to cache"
  }, {
    heading: "anthropic",
    content: "`temperature`"
  }, {
    heading: "anthropic",
    content: "`number`"
  }, {
    heading: "anthropic",
    content: "No"
  }, {
    heading: "anthropic",
    content: "Sampling temperature (0.0–1.0)"
  }, {
    heading: "anthropic",
    content: "`topP`"
  }, {
    heading: "anthropic",
    content: "`number`"
  }, {
    heading: "anthropic",
    content: "No"
  }, {
    heading: "anthropic",
    content: "Nucleus sampling (0.0–1.0)"
  }, {
    heading: "anthropic",
    content: "`systemMessages`"
  }, {
    heading: "anthropic",
    content: "`Record<string, unknown>[]`"
  }, {
    heading: "anthropic",
    content: "No"
  }, {
    heading: "anthropic",
    content: "Additional system messages"
  }, {
    heading: "anthropic",
    content: "`greetingMessage`"
  }, {
    heading: "anthropic",
    content: "`string`"
  }, {
    heading: "anthropic",
    content: "No"
  }, {
    heading: "anthropic",
    content: "Agent greeting message"
  }, {
    heading: "anthropic",
    content: "`failureMessage`"
  }, {
    heading: "anthropic",
    content: "`string`"
  }, {
    heading: "anthropic",
    content: "No"
  }, {
    heading: "anthropic",
    content: "Message spoken when the LLM call fails"
  }, {
    heading: "anthropic",
    content: "`inputModalities`"
  }, {
    heading: "anthropic",
    content: "`string[]`"
  }, {
    heading: "anthropic",
    content: "No"
  }, {
    heading: "anthropic",
    content: 'Input modalities. Default: `["text"]`'
  }, {
    heading: "anthropic",
    content: "`outputModalities`"
  }, {
    heading: "anthropic",
    content: "`string[]`"
  }, {
    heading: "anthropic",
    content: "No"
  }, {
    heading: "anthropic",
    content: "Output modalities"
  }, {
    heading: "anthropic",
    content: "`params`"
  }, {
    heading: "anthropic",
    content: "`Record<string, unknown>`"
  }, {
    heading: "anthropic",
    content: "No"
  }, {
    heading: "anthropic",
    content: "Additional LLM parameters"
  }, {
    heading: "anthropic",
    content: "`vendor`"
  }, {
    heading: "anthropic",
    content: "`string`"
  }, {
    heading: "anthropic",
    content: "No"
  }, {
    heading: "anthropic",
    content: "Vendor override"
  }, {
    heading: "anthropic",
    content: "`mcpServers`"
  }, {
    heading: "anthropic",
    content: "`Record<string, unknown>[]`"
  }, {
    heading: "anthropic",
    content: "No"
  }, {
    heading: "anthropic",
    content: "MCP server connections"
  }, {
    heading: "anthropic",
    content: "`tools`"
  }, {
    heading: "anthropic",
    content: "`LlmTool[]`"
  }, {
    heading: "anthropic",
    content: "No"
  }, {
    heading: "anthropic",
    content: "Synchronous custom tool definitions the LLM can call. Requires `withTools(true)`"
  }, {
    heading: "anthropic",
    content: "`greetingConfigs`"
  }, {
    heading: "anthropic",
    content: "`LlmGreetingConfigs`"
  }, {
    heading: "anthropic",
    content: "No"
  }, {
    heading: "anthropic",
    content: "Greeting playback configuration"
  }, {
    heading: "anthropic",
    content: "`templateVariables`"
  }, {
    heading: "anthropic",
    content: "`Record<string, string>`"
  }, {
    heading: "anthropic",
    content: "No"
  }, {
    heading: "anthropic",
    content: "Template variables for messages. Custom tools can reference them with `{{template_variables.<name>}}`"
  }, {
    heading: "gemini",
    content: "Option"
  }, {
    heading: "gemini",
    content: "Type"
  }, {
    heading: "gemini",
    content: "Required"
  }, {
    heading: "gemini",
    content: "Description"
  }, {
    heading: "gemini",
    content: "`apiKey`"
  }, {
    heading: "gemini",
    content: "`string`"
  }, {
    heading: "gemini",
    content: "Yes"
  }, {
    heading: "gemini",
    content: "Google API key"
  }, {
    heading: "gemini",
    content: "`model`"
  }, {
    heading: "gemini",
    content: "`string`"
  }, {
    heading: "gemini",
    content: "Yes"
  }, {
    heading: "gemini",
    content: "Model name, for example `'gemini-pro'`"
  }, {
    heading: "gemini",
    content: "`url`"
  }, {
    heading: "gemini",
    content: "`string`"
  }, {
    heading: "gemini",
    content: "No"
  }, {
    heading: "gemini",
    content: "API endpoint URL. Default: `https://generativelanguage.googleapis.com/v1beta/models/{model}:streamGenerateContent?alt=sse&key={apiKey}`, with the API key in the URL"
  }, {
    heading: "gemini",
    content: "`maxHistory`"
  }, {
    heading: "gemini",
    content: "`number`"
  }, {
    heading: "gemini",
    content: "No"
  }, {
    heading: "gemini",
    content: "Maximum conversation history to cache"
  }, {
    heading: "gemini",
    content: "`temperature`"
  }, {
    heading: "gemini",
    content: "`number`"
  }, {
    heading: "gemini",
    content: "No"
  }, {
    heading: "gemini",
    content: "Sampling temperature (0.0–2.0)"
  }, {
    heading: "gemini",
    content: "`topP`"
  }, {
    heading: "gemini",
    content: "`number`"
  }, {
    heading: "gemini",
    content: "No"
  }, {
    heading: "gemini",
    content: "Nucleus sampling (0.0–1.0)"
  }, {
    heading: "gemini",
    content: "`topK`"
  }, {
    heading: "gemini",
    content: "`number`"
  }, {
    heading: "gemini",
    content: "No"
  }, {
    heading: "gemini",
    content: "Top-k sampling"
  }, {
    heading: "gemini",
    content: "`maxOutputTokens`"
  }, {
    heading: "gemini",
    content: "`number`"
  }, {
    heading: "gemini",
    content: "No"
  }, {
    heading: "gemini",
    content: "Maximum output tokens to generate"
  }, {
    heading: "gemini",
    content: "`systemMessages`"
  }, {
    heading: "gemini",
    content: "`Record<string, unknown>[]`"
  }, {
    heading: "gemini",
    content: "No"
  }, {
    heading: "gemini",
    content: "Additional system messages"
  }, {
    heading: "gemini",
    content: "`greetingMessage`"
  }, {
    heading: "gemini",
    content: "`string`"
  }, {
    heading: "gemini",
    content: "No"
  }, {
    heading: "gemini",
    content: "Agent greeting message"
  }, {
    heading: "gemini",
    content: "`failureMessage`"
  }, {
    heading: "gemini",
    content: "`string`"
  }, {
    heading: "gemini",
    content: "No"
  }, {
    heading: "gemini",
    content: "Message spoken when the LLM call fails"
  }, {
    heading: "gemini",
    content: "`inputModalities`"
  }, {
    heading: "gemini",
    content: "`string[]`"
  }, {
    heading: "gemini",
    content: "No"
  }, {
    heading: "gemini",
    content: 'Input modalities. Default: `["text"]`'
  }, {
    heading: "gemini",
    content: "`outputModalities`"
  }, {
    heading: "gemini",
    content: "`string[]`"
  }, {
    heading: "gemini",
    content: "No"
  }, {
    heading: "gemini",
    content: "Output modalities"
  }, {
    heading: "gemini",
    content: "`params`"
  }, {
    heading: "gemini",
    content: "`Record<string, unknown>`"
  }, {
    heading: "gemini",
    content: "No"
  }, {
    heading: "gemini",
    content: "Additional LLM parameters"
  }, {
    heading: "gemini",
    content: "`headers`"
  }, {
    heading: "gemini",
    content: "`Record<string, string>`"
  }, {
    heading: "gemini",
    content: "No"
  }, {
    heading: "gemini",
    content: "Custom HTTP headers forwarded to the LLM provider"
  }, {
    heading: "gemini",
    content: "`vendor`"
  }, {
    heading: "gemini",
    content: "`string`"
  }, {
    heading: "gemini",
    content: "No"
  }, {
    heading: "gemini",
    content: "Vendor override"
  }, {
    heading: "gemini",
    content: "`mcpServers`"
  }, {
    heading: "gemini",
    content: "`Record<string, unknown>[]`"
  }, {
    heading: "gemini",
    content: "No"
  }, {
    heading: "gemini",
    content: "MCP server connections"
  }, {
    heading: "gemini",
    content: "`tools`"
  }, {
    heading: "gemini",
    content: "`LlmTool[]`"
  }, {
    heading: "gemini",
    content: "No"
  }, {
    heading: "gemini",
    content: "Synchronous custom tool definitions the LLM can call. Requires `withTools(true)`"
  }, {
    heading: "gemini",
    content: "`greetingConfigs`"
  }, {
    heading: "gemini",
    content: "`LlmGreetingConfigs`"
  }, {
    heading: "gemini",
    content: "No"
  }, {
    heading: "gemini",
    content: "Greeting playback configuration"
  }, {
    heading: "gemini",
    content: "`templateVariables`"
  }, {
    heading: "gemini",
    content: "`Record<string, string>`"
  }, {
    heading: "gemini",
    content: "No"
  }, {
    heading: "gemini",
    content: "Template variables for messages. Custom tools can reference them with `{{template_variables.<name>}}`"
  }, {
    heading: "other-llm-vendors",
    content: "Class"
  }, {
    heading: "other-llm-vendors",
    content: "Provider"
  }, {
    heading: "other-llm-vendors",
    content: "Key options"
  }, {
    heading: "other-llm-vendors",
    content: "`Groq`"
  }, {
    heading: "other-llm-vendors",
    content: "Groq"
  }, {
    heading: "other-llm-vendors",
    content: "`apiKey`, `model`, `url`"
  }, {
    heading: "other-llm-vendors",
    content: "`VertexAILLM`"
  }, {
    heading: "other-llm-vendors",
    content: "Google Vertex AI"
  }, {
    heading: "other-llm-vendors",
    content: "`apiKey`, `model`, `projectId`, `location`, `url?`"
  }, {
    heading: "other-llm-vendors",
    content: "`AmazonBedrock`"
  }, {
    heading: "other-llm-vendors",
    content: "Amazon Bedrock"
  }, {
    heading: "other-llm-vendors",
    content: "`accessKey`, `secretKey`, `region`, `model`"
  }, {
    heading: "other-llm-vendors",
    content: "`Dify`"
  }, {
    heading: "other-llm-vendors",
    content: "Dify"
  }, {
    heading: "other-llm-vendors",
    content: "`apiKey`, `url`, `model`, `user?`, `conversationId?`"
  }, {
    heading: "other-llm-vendors",
    content: "`CustomLLM`"
  }, {
    heading: "other-llm-vendors",
    content: "OpenAI-compatible LLM"
  }, {
    heading: "other-llm-vendors",
    content: "`apiKey`, `model`, `url`"
  }, {
    heading: "other-llm-vendors",
    content: "`Groq` and `CustomLLM` share `OpenAI`'s option shape; `VertexAILLM` mirrors `Gemini`. All accept common LLM fields, such as `systemMessages`, `greetingMessage`, `failureMessage`, `maxHistory`, `params`, `headers`, and `tools`."
  }, {
    heading: "other-llm-vendors",
    content: "`tools` declares custom tools the LLM can choose to call. Each tool includes a model-visible function definition and the server configuration for a synchronous `GET` or `POST` request. `withTools(true)` applies to both `tools` and MCP server configuration. For more information, see Call custom tools."
  }, {
    heading: "tts-vendors",
    content: "Use with `withTts()`. The `sampleRate` option determines avatar compatibility — see `withAvatar()`."
  }, {
    heading: "elevenlabstts",
    content: "Option"
  }, {
    heading: "elevenlabstts",
    content: "Type"
  }, {
    heading: "elevenlabstts",
    content: "Required"
  }, {
    heading: "elevenlabstts",
    content: "Description"
  }, {
    heading: "elevenlabstts",
    content: "`key`"
  }, {
    heading: "elevenlabstts",
    content: "`string`"
  }, {
    heading: "elevenlabstts",
    content: "Yes"
  }, {
    heading: "elevenlabstts",
    content: "ElevenLabs API key"
  }, {
    heading: "elevenlabstts",
    content: "`modelId`"
  }, {
    heading: "elevenlabstts",
    content: "`string`"
  }, {
    heading: "elevenlabstts",
    content: "Yes"
  }, {
    heading: "elevenlabstts",
    content: "Model ID, for example `'eleven_flash_v2_5'`"
  }, {
    heading: "elevenlabstts",
    content: "`voiceId`"
  }, {
    heading: "elevenlabstts",
    content: "`string`"
  }, {
    heading: "elevenlabstts",
    content: "Yes"
  }, {
    heading: "elevenlabstts",
    content: "Voice ID"
  }, {
    heading: "elevenlabstts",
    content: "`baseUrl`"
  }, {
    heading: "elevenlabstts",
    content: "`string`"
  }, {
    heading: "elevenlabstts",
    content: "Yes"
  }, {
    heading: "elevenlabstts",
    content: "WebSocket base URL"
  }, {
    heading: "elevenlabstts",
    content: "`sampleRate`"
  }, {
    heading: "elevenlabstts",
    content: "`16000 \\| 22050 \\| 24000 \\| 44100`"
  }, {
    heading: "elevenlabstts",
    content: "No"
  }, {
    heading: "elevenlabstts",
    content: "Audio sample rate in Hz"
  }, {
    heading: "elevenlabstts",
    content: "`optimizeStreamingLatency`"
  }, {
    heading: "elevenlabstts",
    content: "`number`"
  }, {
    heading: "elevenlabstts",
    content: "No"
  }, {
    heading: "elevenlabstts",
    content: "Latency optimization level (0–4)"
  }, {
    heading: "elevenlabstts",
    content: "`stability`"
  }, {
    heading: "elevenlabstts",
    content: "`number`"
  }, {
    heading: "elevenlabstts",
    content: "No"
  }, {
    heading: "elevenlabstts",
    content: "Voice stability (0.0–1.0)"
  }, {
    heading: "elevenlabstts",
    content: "`similarityBoost`"
  }, {
    heading: "elevenlabstts",
    content: "`number`"
  }, {
    heading: "elevenlabstts",
    content: "No"
  }, {
    heading: "elevenlabstts",
    content: "Voice similarity boost (0.0–1.0)"
  }, {
    heading: "elevenlabstts",
    content: "`style`"
  }, {
    heading: "elevenlabstts",
    content: "`number`"
  }, {
    heading: "elevenlabstts",
    content: "No"
  }, {
    heading: "elevenlabstts",
    content: "Voice style exaggeration (0.0–1.0)"
  }, {
    heading: "elevenlabstts",
    content: "`useSpeakerBoost`"
  }, {
    heading: "elevenlabstts",
    content: "`boolean`"
  }, {
    heading: "elevenlabstts",
    content: "No"
  }, {
    heading: "elevenlabstts",
    content: "Enable speaker boost"
  }, {
    heading: "elevenlabstts",
    content: "`skipPatterns`"
  }, {
    heading: "elevenlabstts",
    content: "`number[]`"
  }, {
    heading: "elevenlabstts",
    content: "No"
  }, {
    heading: "elevenlabstts",
    content: "Skip patterns for bracketed content"
  }, {
    heading: "microsofttts",
    content: "Option"
  }, {
    heading: "microsofttts",
    content: "Type"
  }, {
    heading: "microsofttts",
    content: "Required"
  }, {
    heading: "microsofttts",
    content: "Description"
  }, {
    heading: "microsofttts",
    content: "`key`"
  }, {
    heading: "microsofttts",
    content: "`string`"
  }, {
    heading: "microsofttts",
    content: "Yes"
  }, {
    heading: "microsofttts",
    content: "Azure Speech API key"
  }, {
    heading: "microsofttts",
    content: "`region`"
  }, {
    heading: "microsofttts",
    content: "`string`"
  }, {
    heading: "microsofttts",
    content: "Yes"
  }, {
    heading: "microsofttts",
    content: "Azure region, for example `'eastus'`"
  }, {
    heading: "microsofttts",
    content: "`voiceName`"
  }, {
    heading: "microsofttts",
    content: "`string`"
  }, {
    heading: "microsofttts",
    content: "Yes"
  }, {
    heading: "microsofttts",
    content: "Voice name, for example `'en-US-JennyNeural'`"
  }, {
    heading: "microsofttts",
    content: "`sampleRate`"
  }, {
    heading: "microsofttts",
    content: "`16000 \\| 24000 \\| 48000`"
  }, {
    heading: "microsofttts",
    content: "No"
  }, {
    heading: "microsofttts",
    content: "Audio sample rate in Hz"
  }, {
    heading: "microsofttts",
    content: "`speed`"
  }, {
    heading: "microsofttts",
    content: "`number`"
  }, {
    heading: "microsofttts",
    content: "No"
  }, {
    heading: "microsofttts",
    content: "Speaking rate multiplier"
  }, {
    heading: "microsofttts",
    content: "`volume`"
  }, {
    heading: "microsofttts",
    content: "`number`"
  }, {
    heading: "microsofttts",
    content: "No"
  }, {
    heading: "microsofttts",
    content: "Audio volume"
  }, {
    heading: "microsofttts",
    content: "`skipPatterns`"
  }, {
    heading: "microsofttts",
    content: "`number[]`"
  }, {
    heading: "microsofttts",
    content: "No"
  }, {
    heading: "microsofttts",
    content: "Skip patterns for bracketed content"
  }, {
    heading: "openaitts",
    content: "Fixed at 24,000 Hz — no configurable sample rate."
  }, {
    heading: "openaitts",
    content: "Option"
  }, {
    heading: "openaitts",
    content: "Type"
  }, {
    heading: "openaitts",
    content: "Required"
  }, {
    heading: "openaitts",
    content: "Description"
  }, {
    heading: "openaitts",
    content: "`apiKey`"
  }, {
    heading: "openaitts",
    content: "`string`"
  }, {
    heading: "openaitts",
    content: "Usually"
  }, {
    heading: "openaitts",
    content: "OpenAI API key"
  }, {
    heading: "openaitts",
    content: "`voice`"
  }, {
    heading: "openaitts",
    content: "`string`"
  }, {
    heading: "openaitts",
    content: "Yes"
  }, {
    heading: "openaitts",
    content: "Voice name: `'alloy'`, `'echo'`, `'fable'`, `'onyx'`, `'nova'`, or `'shimmer'`"
  }, {
    heading: "openaitts",
    content: "`model`"
  }, {
    heading: "openaitts",
    content: "`string`"
  }, {
    heading: "openaitts",
    content: "No"
  }, {
    heading: "openaitts",
    content: "Model name. Required (with `apiKey` and `baseUrl`) for BYOK"
  }, {
    heading: "openaitts",
    content: "`baseUrl`"
  }, {
    heading: "openaitts",
    content: "`string`"
  }, {
    heading: "openaitts",
    content: "No"
  }, {
    heading: "openaitts",
    content: "Endpoint URL. Required (with `apiKey` and `model`) for BYOK"
  }, {
    heading: "openaitts",
    content: "`instructions`"
  }, {
    heading: "openaitts",
    content: "`string`"
  }, {
    heading: "openaitts",
    content: "No"
  }, {
    heading: "openaitts",
    content: "Custom voice instructions"
  }, {
    heading: "openaitts",
    content: "`speed`"
  }, {
    heading: "openaitts",
    content: "`number`"
  }, {
    heading: "openaitts",
    content: "No"
  }, {
    heading: "openaitts",
    content: "Speech speed multiplier"
  }, {
    heading: "openaitts",
    content: "`skipPatterns`"
  }, {
    heading: "openaitts",
    content: "`number[]`"
  }, {
    heading: "openaitts",
    content: "No"
  }, {
    heading: "openaitts",
    content: "Skip patterns for bracketed content"
  }, {
    heading: "openaitts",
    content: "`apiKey` is optional only for the reseller-backed `tts-1` preset path. If omitted with `model: 'tts-1'` or no explicit model, AgentKit infers `openai_tts_1`. If provided, the request stays in BYOK mode."
  }, {
    heading: "cartesiatts",
    content: "Option"
  }, {
    heading: "cartesiatts",
    content: "Type"
  }, {
    heading: "cartesiatts",
    content: "Required"
  }, {
    heading: "cartesiatts",
    content: "Description"
  }, {
    heading: "cartesiatts",
    content: "`apiKey`"
  }, {
    heading: "cartesiatts",
    content: "`string`"
  }, {
    heading: "cartesiatts",
    content: "Yes"
  }, {
    heading: "cartesiatts",
    content: "Cartesia API key"
  }, {
    heading: "cartesiatts",
    content: "`voiceId`"
  }, {
    heading: "cartesiatts",
    content: "`string`"
  }, {
    heading: "cartesiatts",
    content: "Yes"
  }, {
    heading: "cartesiatts",
    content: 'Voice ID (serialized as `{"mode": "id", "id": "..."}`)'
  }, {
    heading: "cartesiatts",
    content: "`modelId`"
  }, {
    heading: "cartesiatts",
    content: "`string`"
  }, {
    heading: "cartesiatts",
    content: "Yes"
  }, {
    heading: "cartesiatts",
    content: "Model ID"
  }, {
    heading: "cartesiatts",
    content: "`baseUrl`"
  }, {
    heading: "cartesiatts",
    content: "`string`"
  }, {
    heading: "cartesiatts",
    content: "No"
  }, {
    heading: "cartesiatts",
    content: "WebSocket URL"
  }, {
    heading: "cartesiatts",
    content: "`language`"
  }, {
    heading: "cartesiatts",
    content: "`string`"
  }, {
    heading: "cartesiatts",
    content: "No"
  }, {
    heading: "cartesiatts",
    content: "Target language"
  }, {
    heading: "cartesiatts",
    content: "`sampleRate`"
  }, {
    heading: "cartesiatts",
    content: "`8000 \\| 16000 \\| 22050 \\| 24000 \\| 44100 \\| 48000`"
  }, {
    heading: "cartesiatts",
    content: "No"
  }, {
    heading: "cartesiatts",
    content: "Audio sample rate in Hz"
  }, {
    heading: "cartesiatts",
    content: "`skipPatterns`"
  }, {
    heading: "cartesiatts",
    content: "`number[]`"
  }, {
    heading: "cartesiatts",
    content: "No"
  }, {
    heading: "cartesiatts",
    content: "Skip patterns for bracketed content"
  }, {
    heading: "other-tts-vendors",
    content: "Class"
  }, {
    heading: "other-tts-vendors",
    content: "Key parameters"
  }, {
    heading: "other-tts-vendors",
    content: "`GoogleTTS`"
  }, {
    heading: "other-tts-vendors",
    content: "`key`, `voiceName`, `languageCode?`, `sampleRate?`"
  }, {
    heading: "other-tts-vendors",
    content: "`AmazonTTS`"
  }, {
    heading: "other-tts-vendors",
    content: "`accessKey`, `secretKey`, `region`, `voiceId`, `engine`"
  }, {
    heading: "other-tts-vendors",
    content: "`DeepgramTTS`"
  }, {
    heading: "other-tts-vendors",
    content: "`apiKey`, `model`, `baseUrl?`, `sampleRate?`, `additionalParams?`"
  }, {
    heading: "other-tts-vendors",
    content: "`HumeAITTS`"
  }, {
    heading: "other-tts-vendors",
    content: "`key`, `voiceId`, `provider`, `configId?`, `baseUrl?`, `speed?`, `trailingSilence?`"
  }, {
    heading: "other-tts-vendors",
    content: "`RimeTTS`"
  }, {
    heading: "other-tts-vendors",
    content: "`key`, `speaker`, `modelId`, `baseUrl?`, `credentialMode?`. In managed mode (`CredentialMode.Managed`), only `modelId` and `baseUrl` are required"
  }, {
    heading: "other-tts-vendors",
    content: "`FishAudioTTS`"
  }, {
    heading: "other-tts-vendors",
    content: "`key`, `referenceId`, `backend`"
  }, {
    heading: "other-tts-vendors",
    content: "`MiniMaxTTS`"
  }, {
    heading: "other-tts-vendors",
    content: "`key?`, `groupId?`, `model`, `voiceId?`, `url?`"
  }, {
    heading: "other-tts-vendors",
    content: "`MurfTTS`"
  }, {
    heading: "other-tts-vendors",
    content: "`key`, `voiceId?`, `baseUrl?`, `locale?`, `rate?`, `pitch?`, `model?`, `sampleRate?`"
  }, {
    heading: "other-tts-vendors",
    content: "`SarvamTTS`"
  }, {
    heading: "other-tts-vendors",
    content: "`key`, `speaker`, `targetLanguageCode`, `pitch?`, `pace?`, `loudness?`, `sampleRate?`"
  }, {
    heading: "other-tts-vendors",
    content: "`GradiumTTS`"
  }, {
    heading: "other-tts-vendors",
    content: "`apiKey`, `url?`, `modelName?`, `voiceId?`, `sampleRate?`, `additionalParams?`"
  }, {
    heading: "other-tts-vendors",
    content: "`MistralTTS`"
  }, {
    heading: "other-tts-vendors",
    content: "`apiKey`, `model?`, `voice?`, `additionalParams?`"
  }, {
    heading: "other-tts-vendors",
    content: "`TypecastTTS`"
  }, {
    heading: "other-tts-vendors",
    content: "`apiKey`, `voiceId`, `model`, `additionalParams?`"
  }, {
    heading: "other-tts-vendors",
    content: "`XAiTTS`"
  }, {
    heading: "other-tts-vendors",
    content: "`apiKey`, `language`, `voiceId?`, `sampleRate?`, `additionalParams?`"
  }, {
    heading: "other-tts-vendors",
    content: "`SmallestAITTS`"
  }, {
    heading: "other-tts-vendors",
    content: "`apiKey`, `url?`, `model?`, `voiceId?`, `sampleRate?`, `speed?`, `language?`, `additionalParams?`"
  }, {
    heading: "other-tts-vendors",
    content: "`SmallestAITTS` also accepts `numberPronunciationLanguage?`, `mathNotation?`, `pronunciationDicts?`, `sessionId?`, and `requestId?`. Voice identifiers are model-specific, so `voiceId` must belong to the model set in `model`. For details, see Smallest AI."
  }, {
    heading: "other-tts-vendors",
    content: "For `MiniMaxTTS`, `key` is optional only for reseller-backed models: `speech-2.6-turbo`, `speech-2.8-turbo`. If `key` is omitted for one of those models, AgentKit infers the matching session preset. In that preset-backed path, `groupId`, `voiceId`, and `url` are optional overrides rather than required fields. If `key` is provided, AgentKit uses BYOK, and `groupId`, `voiceId`, and `url` are required."
  }, {
    heading: "generictts",
    content: 'Custom OpenAI-compatible HTTP TTS. `url` is required and must be an absolute HTTP or HTTPS address — the constructor throws if `url` is missing, badly formatted, or uses a non-HTTP(S) scheme such as `ws:` or `wss:`. A valid URL is serialized as `tts.vendor = "generic_http"`.'
  }, {
    heading: "generictts",
    content: "Option"
  }, {
    heading: "generictts",
    content: "Type"
  }, {
    heading: "generictts",
    content: "Required"
  }, {
    heading: "generictts",
    content: "Description"
  }, {
    heading: "generictts",
    content: "`url`"
  }, {
    heading: "generictts",
    content: "`string`"
  }, {
    heading: "generictts",
    content: "Yes"
  }, {
    heading: "generictts",
    content: "The HTTP(S) endpoint of your custom TTS service"
  }, {
    heading: "generictts",
    content: "`headers`"
  }, {
    heading: "generictts",
    content: "`Record<string, string>`"
  }, {
    heading: "generictts",
    content: "No"
  }, {
    heading: "generictts",
    content: "Custom HTTP headers to forward to the TTS service. Omitted from the request if not set"
  }, {
    heading: "generictts",
    content: "`apiKey`"
  }, {
    heading: "generictts",
    content: "`string`"
  }, {
    heading: "generictts",
    content: "No"
  }, {
    heading: "generictts",
    content: "The API key used to authenticate with the TTS service"
  }, {
    heading: "generictts",
    content: "`model`"
  }, {
    heading: "generictts",
    content: "`string`"
  }, {
    heading: "generictts",
    content: "No"
  }, {
    heading: "generictts",
    content: "The TTS model name"
  }, {
    heading: "generictts",
    content: "`voice`"
  }, {
    heading: "generictts",
    content: "`string`"
  }, {
    heading: "generictts",
    content: "No"
  }, {
    heading: "generictts",
    content: "The voice name"
  }, {
    heading: "generictts",
    content: "`speed`"
  }, {
    heading: "generictts",
    content: "`number`"
  }, {
    heading: "generictts",
    content: "No"
  }, {
    heading: "generictts",
    content: "The speech rate"
  }, {
    heading: "generictts",
    content: "`sampleRate`"
  }, {
    heading: "generictts",
    content: "`number`"
  }, {
    heading: "generictts",
    content: "No"
  }, {
    heading: "generictts",
    content: "The sample rate, in Hz, of the output audio. If your TTS service doesn't support multiple sample rates, make sure the returned audio's sample rate matches this value"
  }, {
    heading: "generictts",
    content: "`responseFormat`"
  }, {
    heading: "generictts",
    content: '`"pcm"`'
  }, {
    heading: "generictts",
    content: "No"
  }, {
    heading: "generictts",
    content: "The output audio format. Conversational AI Engine currently supports `pcm`"
  }, {
    heading: "generictts",
    content: "`instruction`"
  }, {
    heading: "generictts",
    content: "`string`"
  }, {
    heading: "generictts",
    content: "No"
  }, {
    heading: "generictts",
    content: "Instructions for voice style, emotion, or other playback directives"
  }, {
    heading: "generictts",
    content: "`additionalParams`"
  }, {
    heading: "generictts",
    content: "`Record<string, unknown>`"
  }, {
    heading: "generictts",
    content: "No"
  }, {
    heading: "generictts",
    content: "Additional parameters passed through to the TTS service. Explicit fields with the same name take precedence"
  }, {
    heading: "generictts",
    content: "`skipPatterns`"
  }, {
    heading: "generictts",
    content: "`number[]`"
  }, {
    heading: "generictts",
    content: "No"
  }, {
    heading: "generictts",
    content: "Skip patterns for bracketed content"
  }, {
    heading: "stt-vendors",
    content: "Use with `withStt()`."
  }, {
    heading: "deepgramstt",
    content: "Provide `apiKey`, or omit it and set `model` to `nova-2` or `nova-3` to use Agora-managed credentials. The constructor throws otherwise."
  }, {
    heading: "deepgramstt",
    content: "Option"
  }, {
    heading: "deepgramstt",
    content: "Type"
  }, {
    heading: "deepgramstt",
    content: "Required"
  }, {
    heading: "deepgramstt",
    content: "Description"
  }, {
    heading: "deepgramstt",
    content: "`apiKey`"
  }, {
    heading: "deepgramstt",
    content: "`string`"
  }, {
    heading: "deepgramstt",
    content: "No"
  }, {
    heading: "deepgramstt",
    content: "Deepgram API key. Optional for `nova-2` and `nova-3` reseller preset usage"
  }, {
    heading: "deepgramstt",
    content: "`model`"
  }, {
    heading: "deepgramstt",
    content: "`string`"
  }, {
    heading: "deepgramstt",
    content: "Conditional"
  }, {
    heading: "deepgramstt",
    content: "Model name, for example `'nova-2'` or `'enhanced'`. Required when `apiKey` is omitted"
  }, {
    heading: "deepgramstt",
    content: "`language`"
  }, {
    heading: "deepgramstt",
    content: "`string`"
  }, {
    heading: "deepgramstt",
    content: "No"
  }, {
    heading: "deepgramstt",
    content: "Language code, for example `'en-US'`"
  }, {
    heading: "deepgramstt",
    content: "`keyterm`"
  }, {
    heading: "deepgramstt",
    content: "`string`"
  }, {
    heading: "deepgramstt",
    content: "No"
  }, {
    heading: "deepgramstt",
    content: "Boost specialized terms and brands"
  }, {
    heading: "deepgramstt",
    content: "`smartFormat`"
  }, {
    heading: "deepgramstt",
    content: "`boolean`"
  }, {
    heading: "deepgramstt",
    content: "No"
  }, {
    heading: "deepgramstt",
    content: "Enable smart formatting"
  }, {
    heading: "deepgramstt",
    content: "`punctuation`"
  }, {
    heading: "deepgramstt",
    content: "`boolean`"
  }, {
    heading: "deepgramstt",
    content: "No"
  }, {
    heading: "deepgramstt",
    content: "Enable punctuation"
  }, {
    heading: "deepgramstt",
    content: "`additionalParams`"
  }, {
    heading: "deepgramstt",
    content: "`Record<string, unknown>`"
  }, {
    heading: "deepgramstt",
    content: "No"
  }, {
    heading: "deepgramstt",
    content: "Additional vendor parameters"
  }, {
    heading: "deepgramstt",
    content: "For `nova-2` and `nova-3`, omit `apiKey` to use Agora-managed credentials. For all other Deepgram models, `apiKey` is required."
  }, {
    heading: "other-stt-vendors",
    content: "Class"
  }, {
    heading: "other-stt-vendors",
    content: "Key parameters"
  }, {
    heading: "other-stt-vendors",
    content: "`SpeechmaticsSTT`"
  }, {
    heading: "other-stt-vendors",
    content: "`key`, `language`, `model?`, `uri?`. `apiKey` is a deprecated alias of `key`"
  }, {
    heading: "other-stt-vendors",
    content: "`MicrosoftSTT`"
  }, {
    heading: "other-stt-vendors",
    content: "`key`, `region`, `language`"
  }, {
    heading: "other-stt-vendors",
    content: "`OpenAISTT`"
  }, {
    heading: "other-stt-vendors",
    content: "`apiKey`, `model?`, `language?`, `prompt?`, `inputAudioTranscription?`"
  }, {
    heading: "other-stt-vendors",
    content: "`GoogleSTT`"
  }, {
    heading: "other-stt-vendors",
    content: "`projectId`, `location`, `adcCredentialsString`, `language`, `model?`"
  }, {
    heading: "other-stt-vendors",
    content: "`AmazonSTT`"
  }, {
    heading: "other-stt-vendors",
    content: "`accessKey`, `secretKey`, `region`, `language`"
  }, {
    heading: "other-stt-vendors",
    content: "`AssemblyAISTT`"
  }, {
    heading: "other-stt-vendors",
    content: "`apiKey`, `language`, `ws_url?`"
  }, {
    heading: "other-stt-vendors",
    content: "`AresSTT`"
  }, {
    heading: "other-stt-vendors",
    content: "`keywords?`, `additionalParams?`"
  }, {
    heading: "other-stt-vendors",
    content: "`GeminiSTT`"
  }, {
    heading: "other-stt-vendors",
    content: "`apiKey`, `model?`, `language?`, `languageHints?`, `customVocabulary?`, `sampleRate?` (default `16000`), `wordTimestamp?`, `mode?` (`SMART` or `VERBATIM`), `diarization?`, `additionalParams?`"
  }, {
    heading: "other-stt-vendors",
    content: "`XAiSTT`"
  }, {
    heading: "other-stt-vendors",
    content: "`apiKey`, `language?`, `baseUrl?`, `sampleRate?`, `additionalParams?`"
  }, {
    heading: "other-stt-vendors",
    content: "`SarvamSTT`"
  }, {
    heading: "other-stt-vendors",
    content: "`apiKey`, `language`, `model?`"
  }, {
    heading: "other-stt-vendors",
    content: "`SmallestAISTT`"
  }, {
    heading: "other-stt-vendors",
    content: "`apiKey`, `language?`, `url?`, `sampleRate?`, `encoding?`, `keywords?`, `additionalParams?`"
  }, {
    heading: "other-stt-vendors",
    content: '`SmallestAISTT` also accepts the boolean options `wordTimestamps?`, `sentenceTimestamps?`, `diarize?`, `vadEvents?`, `endpointing?`, `format?`, `finalizeOnWords?`, `punctuate?`, `capitalize?`, `itnNormalize?`, `fullTranscript?`, `redactPii?`, and `redactPci?`, plus `eouTimeoutMs?` and `maxWords?`. Boolean options are serialized as the strings `"true"` or `"false"` for the Smallest AI wire protocol. For details, see Smallest AI.'
  }, {
    heading: "other-stt-vendors",
    content: "For `OpenAISTT`, the serialized configuration requires a transcription `prompt` and `language` — provide them through the `prompt` and `language` options or within `inputAudioTranscription`. `model` defaults to `gpt-4o-mini-transcribe`."
  }, {
    heading: "mllm-vendors",
    content: "Use with `withMllm()` for multimodal end-to-end audio processing without separate STT or TTS steps. Calling `withMllm()` automatically enables the MLLM module (sets `mllm.enable = true`); the older `advancedFeatures.enable_mllm` flag is deprecated."
  }, {
    heading: "openairealtime",
    content: "Option"
  }, {
    heading: "openairealtime",
    content: "Type"
  }, {
    heading: "openairealtime",
    content: "Required"
  }, {
    heading: "openairealtime",
    content: "Description"
  }, {
    heading: "openairealtime",
    content: "`apiKey`"
  }, {
    heading: "openairealtime",
    content: "`string`"
  }, {
    heading: "openairealtime",
    content: "Yes"
  }, {
    heading: "openairealtime",
    content: "OpenAI API key"
  }, {
    heading: "openairealtime",
    content: "`model`"
  }, {
    heading: "openairealtime",
    content: "`string`"
  }, {
    heading: "openairealtime",
    content: "No"
  }, {
    heading: "openairealtime",
    content: "Model name, for example `'gpt-4o-realtime-preview'`"
  }, {
    heading: "openairealtime",
    content: "`voice`"
  }, {
    heading: "openairealtime",
    content: "`string`"
  }, {
    heading: "openairealtime",
    content: "No"
  }, {
    heading: "openairealtime",
    content: "Voice identifier"
  }, {
    heading: "openairealtime",
    content: "`instructions`"
  }, {
    heading: "openairealtime",
    content: "`string`"
  }, {
    heading: "openairealtime",
    content: "No"
  }, {
    heading: "openairealtime",
    content: "System instructions"
  }, {
    heading: "openairealtime",
    content: "`inputAudioTranscription`"
  }, {
    heading: "openairealtime",
    content: "`Record<string, unknown>`"
  }, {
    heading: "openairealtime",
    content: "No"
  }, {
    heading: "openairealtime",
    content: "Audio transcription settings"
  }, {
    heading: "openairealtime",
    content: "`url`"
  }, {
    heading: "openairealtime",
    content: "`string`"
  }, {
    heading: "openairealtime",
    content: "No"
  }, {
    heading: "openairealtime",
    content: "WebSocket URL"
  }, {
    heading: "openairealtime",
    content: "`greetingMessage`"
  }, {
    heading: "openairealtime",
    content: "`string`"
  }, {
    heading: "openairealtime",
    content: "No"
  }, {
    heading: "openairealtime",
    content: "Agent greeting message"
  }, {
    heading: "openairealtime",
    content: "`failureMessage`"
  }, {
    heading: "openairealtime",
    content: "`string`"
  }, {
    heading: "openairealtime",
    content: "No"
  }, {
    heading: "openairealtime",
    content: "Message played when the model call fails"
  }, {
    heading: "openairealtime",
    content: "`inputModalities`"
  }, {
    heading: "openairealtime",
    content: "`string[]`"
  }, {
    heading: "openairealtime",
    content: "No"
  }, {
    heading: "openairealtime",
    content: "Input modalities, for example `['audio']`"
  }, {
    heading: "openairealtime",
    content: "`outputModalities`"
  }, {
    heading: "openairealtime",
    content: "`string[]`"
  }, {
    heading: "openairealtime",
    content: "No"
  }, {
    heading: "openairealtime",
    content: "Output modalities, for example `['text', 'audio']`"
  }, {
    heading: "openairealtime",
    content: "`messages`"
  }, {
    heading: "openairealtime",
    content: "`Record<string, unknown>[]`"
  }, {
    heading: "openairealtime",
    content: "No"
  }, {
    heading: "openairealtime",
    content: "Conversation messages for short-term memory"
  }, {
    heading: "openairealtime",
    content: "`params`"
  }, {
    heading: "openairealtime",
    content: "`Record<string, unknown>`"
  }, {
    heading: "openairealtime",
    content: "No"
  }, {
    heading: "openairealtime",
    content: "Additional MLLM parameters"
  }, {
    heading: "openairealtime",
    content: "`turnDetection`"
  }, {
    heading: "openairealtime",
    content: "`MllmTurnDetectionConfig`"
  }, {
    heading: "openairealtime",
    content: "No"
  }, {
    heading: "openairealtime",
    content: "MLLM turn detection configuration; overrides top-level `turnDetection`"
  }, {
    heading: "azureopenairealtime",
    content: "Option"
  }, {
    heading: "azureopenairealtime",
    content: "Type"
  }, {
    heading: "azureopenairealtime",
    content: "Required"
  }, {
    heading: "azureopenairealtime",
    content: "Description"
  }, {
    heading: "azureopenairealtime",
    content: "`apiKey`"
  }, {
    heading: "azureopenairealtime",
    content: "`string`"
  }, {
    heading: "azureopenairealtime",
    content: "Yes"
  }, {
    heading: "azureopenairealtime",
    content: "Azure OpenAI API key"
  }, {
    heading: "azureopenairealtime",
    content: "`url`"
  }, {
    heading: "azureopenairealtime",
    content: "`string`"
  }, {
    heading: "azureopenairealtime",
    content: "Yes"
  }, {
    heading: "azureopenairealtime",
    content: "Azure OpenAI Realtime WebSocket URL"
  }, {
    heading: "azureopenairealtime",
    content: "`turnDetection`"
  }, {
    heading: "azureopenairealtime",
    content: "`MllmTurnDetectionConfig`"
  }, {
    heading: "azureopenairealtime",
    content: "Yes"
  }, {
    heading: "azureopenairealtime",
    content: "MLLM turn detection configuration; overrides top-level `turnDetection`"
  }, {
    heading: "azureopenairealtime",
    content: "`model`"
  }, {
    heading: "azureopenairealtime",
    content: "`string`"
  }, {
    heading: "azureopenairealtime",
    content: "No"
  }, {
    heading: "azureopenairealtime",
    content: "Azure OpenAI Realtime model or deployment name"
  }, {
    heading: "azureopenairealtime",
    content: "`voice`"
  }, {
    heading: "azureopenairealtime",
    content: "`string`"
  }, {
    heading: "azureopenairealtime",
    content: "No"
  }, {
    heading: "azureopenairealtime",
    content: "Voice identifier"
  }, {
    heading: "azureopenairealtime",
    content: "`instructions`"
  }, {
    heading: "azureopenairealtime",
    content: "`string`"
  }, {
    heading: "azureopenairealtime",
    content: "No"
  }, {
    heading: "azureopenairealtime",
    content: "System instructions"
  }, {
    heading: "azureopenairealtime",
    content: "`maxHistory`"
  }, {
    heading: "azureopenairealtime",
    content: "`number`"
  }, {
    heading: "azureopenairealtime",
    content: "No"
  }, {
    heading: "azureopenairealtime",
    content: "Number of conversation history messages to cache"
  }, {
    heading: "azureopenairealtime",
    content: "`greetingMessage`"
  }, {
    heading: "azureopenairealtime",
    content: "`string`"
  }, {
    heading: "azureopenairealtime",
    content: "No"
  }, {
    heading: "azureopenairealtime",
    content: "Agent greeting message"
  }, {
    heading: "azureopenairealtime",
    content: "`outputModalities`"
  }, {
    heading: "azureopenairealtime",
    content: "`string[]`"
  }, {
    heading: "azureopenairealtime",
    content: "No"
  }, {
    heading: "azureopenairealtime",
    content: "Output modalities, for example `['text', 'audio']`"
  }, {
    heading: "azureopenairealtime",
    content: "`messages`"
  }, {
    heading: "azureopenairealtime",
    content: "`Record<string, unknown>[]`"
  }, {
    heading: "azureopenairealtime",
    content: "No"
  }, {
    heading: "azureopenairealtime",
    content: "Conversation messages for short-term memory"
  }, {
    heading: "azureopenairealtime",
    content: "`params`"
  }, {
    heading: "azureopenairealtime",
    content: "`AzureOpenAIRealtimeParams`"
  }, {
    heading: "azureopenairealtime",
    content: "No"
  }, {
    heading: "azureopenairealtime",
    content: "Additional Azure OpenAI parameters"
  }, {
    heading: "geminilive",
    content: "Option"
  }, {
    heading: "geminilive",
    content: "Type"
  }, {
    heading: "geminilive",
    content: "Required"
  }, {
    heading: "geminilive",
    content: "Description"
  }, {
    heading: "geminilive",
    content: "`apiKey`"
  }, {
    heading: "geminilive",
    content: "`string`"
  }, {
    heading: "geminilive",
    content: "Yes"
  }, {
    heading: "geminilive",
    content: "Google API key"
  }, {
    heading: "geminilive",
    content: "`model`"
  }, {
    heading: "geminilive",
    content: "`string`"
  }, {
    heading: "geminilive",
    content: "Yes"
  }, {
    heading: "geminilive",
    content: "Model name, for example `'models/gemini-3.8-live-extended-thinking'`"
  }, {
    heading: "geminilive",
    content: "`thinkingLevel`"
  }, {
    heading: "geminilive",
    content: "`GeminiThinkingLevel`"
  }, {
    heading: "geminilive",
    content: "No"
  }, {
    heading: "geminilive",
    content: "Reasoning budget (`'low'`, `'medium'`, or `'high'`), supported only by `'models/gemini-3.8-live-extended-thinking'`"
  }, {
    heading: "geminilive",
    content: "`url`"
  }, {
    heading: "geminilive",
    content: "`string`"
  }, {
    heading: "geminilive",
    content: "No"
  }, {
    heading: "geminilive",
    content: "WebSocket URL"
  }, {
    heading: "geminilive",
    content: "`instructions`"
  }, {
    heading: "geminilive",
    content: "`string`"
  }, {
    heading: "geminilive",
    content: "No"
  }, {
    heading: "geminilive",
    content: "System instructions for the model"
  }, {
    heading: "geminilive",
    content: "`voice`"
  }, {
    heading: "geminilive",
    content: "`string`"
  }, {
    heading: "geminilive",
    content: "No"
  }, {
    heading: "geminilive",
    content: "Voice name, for example `'Aoede'` or `'Charon'`"
  }, {
    heading: "geminilive",
    content: "`affectiveDialog`"
  }, {
    heading: "geminilive",
    content: "`boolean`"
  }, {
    heading: "geminilive",
    content: "No"
  }, {
    heading: "geminilive",
    content: "Enable affective dialog"
  }, {
    heading: "geminilive",
    content: "`proactiveAudio`"
  }, {
    heading: "geminilive",
    content: "`boolean`"
  }, {
    heading: "geminilive",
    content: "No"
  }, {
    heading: "geminilive",
    content: "Enable proactive audio"
  }, {
    heading: "geminilive",
    content: "`transcribeAgent`"
  }, {
    heading: "geminilive",
    content: "`boolean`"
  }, {
    heading: "geminilive",
    content: "No"
  }, {
    heading: "geminilive",
    content: "Transcribe agent speech"
  }, {
    heading: "geminilive",
    content: "`transcribeUser`"
  }, {
    heading: "geminilive",
    content: "`boolean`"
  }, {
    heading: "geminilive",
    content: "No"
  }, {
    heading: "geminilive",
    content: "Transcribe user speech"
  }, {
    heading: "geminilive",
    content: "`httpOptions`"
  }, {
    heading: "geminilive",
    content: "`Record<string, unknown>`"
  }, {
    heading: "geminilive",
    content: "No"
  }, {
    heading: "geminilive",
    content: "HTTP options"
  }, {
    heading: "geminilive",
    content: "`greetingMessage`"
  }, {
    heading: "geminilive",
    content: "`string`"
  }, {
    heading: "geminilive",
    content: "No"
  }, {
    heading: "geminilive",
    content: "Agent greeting message"
  }, {
    heading: "geminilive",
    content: "`failureMessage`"
  }, {
    heading: "geminilive",
    content: "`string`"
  }, {
    heading: "geminilive",
    content: "No"
  }, {
    heading: "geminilive",
    content: "Message played when the model call fails"
  }, {
    heading: "geminilive",
    content: "`inputModalities`"
  }, {
    heading: "geminilive",
    content: "`string[]`"
  }, {
    heading: "geminilive",
    content: "No"
  }, {
    heading: "geminilive",
    content: "Input modalities"
  }, {
    heading: "geminilive",
    content: "`outputModalities`"
  }, {
    heading: "geminilive",
    content: "`string[]`"
  }, {
    heading: "geminilive",
    content: "No"
  }, {
    heading: "geminilive",
    content: "Output modalities"
  }, {
    heading: "geminilive",
    content: "`messages`"
  }, {
    heading: "geminilive",
    content: "`Record<string, unknown>[]`"
  }, {
    heading: "geminilive",
    content: "No"
  }, {
    heading: "geminilive",
    content: "Conversation messages for short-term memory"
  }, {
    heading: "geminilive",
    content: "`additionalParams`"
  }, {
    heading: "geminilive",
    content: "`Record<string, unknown>`"
  }, {
    heading: "geminilive",
    content: "No"
  }, {
    heading: "geminilive",
    content: "Additional parameters"
  }, {
    heading: "geminilive",
    content: "`turnDetection`"
  }, {
    heading: "geminilive",
    content: "`MllmTurnDetectionConfig`"
  }, {
    heading: "geminilive",
    content: "No"
  }, {
    heading: "geminilive",
    content: "MLLM turn detection configuration; overrides top-level `turnDetection`"
  }, {
    heading: "vertexai",
    content: "Option"
  }, {
    heading: "vertexai",
    content: "Type"
  }, {
    heading: "vertexai",
    content: "Required"
  }, {
    heading: "vertexai",
    content: "Description"
  }, {
    heading: "vertexai",
    content: "`model`"
  }, {
    heading: "vertexai",
    content: "`string`"
  }, {
    heading: "vertexai",
    content: "Yes"
  }, {
    heading: "vertexai",
    content: "Model name, for example `'gemini-live-2.5-flash-preview-native-audio-09-2025'`"
  }, {
    heading: "vertexai",
    content: "`projectId`"
  }, {
    heading: "vertexai",
    content: "`string`"
  }, {
    heading: "vertexai",
    content: "Yes"
  }, {
    heading: "vertexai",
    content: "Google Cloud project ID"
  }, {
    heading: "vertexai",
    content: "`location`"
  }, {
    heading: "vertexai",
    content: "`string`"
  }, {
    heading: "vertexai",
    content: "Yes"
  }, {
    heading: "vertexai",
    content: "Google Cloud location or region"
  }, {
    heading: "vertexai",
    content: "`adcCredentialsString`"
  }, {
    heading: "vertexai",
    content: "`string`"
  }, {
    heading: "vertexai",
    content: "Yes"
  }, {
    heading: "vertexai",
    content: "Application Default Credentials JSON string"
  }, {
    heading: "vertexai",
    content: "`url`"
  }, {
    heading: "vertexai",
    content: "`string`"
  }, {
    heading: "vertexai",
    content: "No"
  }, {
    heading: "vertexai",
    content: "WebSocket URL"
  }, {
    heading: "vertexai",
    content: "`instructions`"
  }, {
    heading: "vertexai",
    content: "`string`"
  }, {
    heading: "vertexai",
    content: "No"
  }, {
    heading: "vertexai",
    content: "System instructions for the model"
  }, {
    heading: "vertexai",
    content: "`voice`"
  }, {
    heading: "vertexai",
    content: "`string`"
  }, {
    heading: "vertexai",
    content: "No"
  }, {
    heading: "vertexai",
    content: "Voice name, for example `'Aoede'` or `'Charon'`"
  }, {
    heading: "vertexai",
    content: "`affectiveDialog`"
  }, {
    heading: "vertexai",
    content: "`boolean`"
  }, {
    heading: "vertexai",
    content: "No"
  }, {
    heading: "vertexai",
    content: "Enable affective dialog"
  }, {
    heading: "vertexai",
    content: "`proactiveAudio`"
  }, {
    heading: "vertexai",
    content: "`boolean`"
  }, {
    heading: "vertexai",
    content: "No"
  }, {
    heading: "vertexai",
    content: "Enable proactive audio"
  }, {
    heading: "vertexai",
    content: "`transcribeAgent`"
  }, {
    heading: "vertexai",
    content: "`boolean`"
  }, {
    heading: "vertexai",
    content: "No"
  }, {
    heading: "vertexai",
    content: "Transcribe agent speech"
  }, {
    heading: "vertexai",
    content: "`transcribeUser`"
  }, {
    heading: "vertexai",
    content: "`boolean`"
  }, {
    heading: "vertexai",
    content: "No"
  }, {
    heading: "vertexai",
    content: "Transcribe user speech"
  }, {
    heading: "vertexai",
    content: "`httpOptions`"
  }, {
    heading: "vertexai",
    content: "`Record<string, unknown>`"
  }, {
    heading: "vertexai",
    content: "No"
  }, {
    heading: "vertexai",
    content: "HTTP options"
  }, {
    heading: "vertexai",
    content: "`greetingMessage`"
  }, {
    heading: "vertexai",
    content: "`string`"
  }, {
    heading: "vertexai",
    content: "No"
  }, {
    heading: "vertexai",
    content: "Agent greeting message"
  }, {
    heading: "vertexai",
    content: "`failureMessage`"
  }, {
    heading: "vertexai",
    content: "`string`"
  }, {
    heading: "vertexai",
    content: "No"
  }, {
    heading: "vertexai",
    content: "Message played when the model call fails"
  }, {
    heading: "vertexai",
    content: "`inputModalities`"
  }, {
    heading: "vertexai",
    content: "`string[]`"
  }, {
    heading: "vertexai",
    content: "No"
  }, {
    heading: "vertexai",
    content: "Input modalities"
  }, {
    heading: "vertexai",
    content: "`outputModalities`"
  }, {
    heading: "vertexai",
    content: "`string[]`"
  }, {
    heading: "vertexai",
    content: "No"
  }, {
    heading: "vertexai",
    content: "Output modalities"
  }, {
    heading: "vertexai",
    content: "`messages`"
  }, {
    heading: "vertexai",
    content: "`Record<string, unknown>[]`"
  }, {
    heading: "vertexai",
    content: "No"
  }, {
    heading: "vertexai",
    content: "Conversation messages for short-term memory"
  }, {
    heading: "vertexai",
    content: "`additionalParams`"
  }, {
    heading: "vertexai",
    content: "`Record<string, unknown>`"
  }, {
    heading: "vertexai",
    content: "No"
  }, {
    heading: "vertexai",
    content: "Additional parameters"
  }, {
    heading: "vertexai",
    content: "`turnDetection`"
  }, {
    heading: "vertexai",
    content: "`MllmTurnDetectionConfig`"
  }, {
    heading: "vertexai",
    content: "No"
  }, {
    heading: "vertexai",
    content: "MLLM turn detection configuration; overrides top-level `turnDetection`"
  }, {
    heading: "xaigrok",
    content: "Option"
  }, {
    heading: "xaigrok",
    content: "Type"
  }, {
    heading: "xaigrok",
    content: "Required"
  }, {
    heading: "xaigrok",
    content: "Description"
  }, {
    heading: "xaigrok",
    content: "`apiKey`"
  }, {
    heading: "xaigrok",
    content: "`string`"
  }, {
    heading: "xaigrok",
    content: "Yes"
  }, {
    heading: "xaigrok",
    content: "xAI API key"
  }, {
    heading: "xaigrok",
    content: "`url`"
  }, {
    heading: "xaigrok",
    content: "`string`"
  }, {
    heading: "xaigrok",
    content: "No"
  }, {
    heading: "xaigrok",
    content: "WebSocket URL (defaults to xAI Realtime API)"
  }, {
    heading: "xaigrok",
    content: "`voice`"
  }, {
    heading: "xaigrok",
    content: "`string`"
  }, {
    heading: "xaigrok",
    content: "No"
  }, {
    heading: "xaigrok",
    content: "Voice identifier, for example `'eve'`"
  }, {
    heading: "xaigrok",
    content: "`language`"
  }, {
    heading: "xaigrok",
    content: "`string`"
  }, {
    heading: "xaigrok",
    content: "No"
  }, {
    heading: "xaigrok",
    content: "Language code"
  }, {
    heading: "xaigrok",
    content: "`sampleRate`"
  }, {
    heading: "xaigrok",
    content: "`number`"
  }, {
    heading: "xaigrok",
    content: "No"
  }, {
    heading: "xaigrok",
    content: "Audio sample rate in Hz"
  }, {
    heading: "xaigrok",
    content: "`greetingMessage`"
  }, {
    heading: "xaigrok",
    content: "`string`"
  }, {
    heading: "xaigrok",
    content: "No"
  }, {
    heading: "xaigrok",
    content: "Agent greeting message"
  }, {
    heading: "xaigrok",
    content: "`failureMessage`"
  }, {
    heading: "xaigrok",
    content: "`string`"
  }, {
    heading: "xaigrok",
    content: "No"
  }, {
    heading: "xaigrok",
    content: "Message played when the model call fails"
  }, {
    heading: "xaigrok",
    content: "`inputModalities`"
  }, {
    heading: "xaigrok",
    content: "`string[]`"
  }, {
    heading: "xaigrok",
    content: "No"
  }, {
    heading: "xaigrok",
    content: "Input modalities"
  }, {
    heading: "xaigrok",
    content: "`outputModalities`"
  }, {
    heading: "xaigrok",
    content: "`string[]`"
  }, {
    heading: "xaigrok",
    content: "No"
  }, {
    heading: "xaigrok",
    content: "Output modalities"
  }, {
    heading: "xaigrok",
    content: "`messages`"
  }, {
    heading: "xaigrok",
    content: "`Record<string, unknown>[]`"
  }, {
    heading: "xaigrok",
    content: "No"
  }, {
    heading: "xaigrok",
    content: "Conversation messages for short-term memory"
  }, {
    heading: "xaigrok",
    content: "`params`"
  }, {
    heading: "xaigrok",
    content: "`Record<string, unknown>`"
  }, {
    heading: "xaigrok",
    content: "No"
  }, {
    heading: "xaigrok",
    content: "Additional xAI parameters"
  }, {
    heading: "xaigrok",
    content: "`turnDetection`"
  }, {
    heading: "xaigrok",
    content: "`MllmTurnDetectionConfig`"
  }, {
    heading: "xaigrok",
    content: "No"
  }, {
    heading: "xaigrok",
    content: "MLLM turn detection configuration; overrides top-level `turnDetection`"
  }, {
    heading: "openaigptlive",
    content: "OpenAI GPT-Live MLLM vendor (`mllm.vendor`: `\"openai_gpt_live\"`). The constructor throws if `apiKey` is empty. `withMllm()` throws if `url` isn't a full `ws://` or `wss://` endpoint, `headers` isn't a JSON object string, `delegation` isn't `client` or `responses`, or `sessionParams` overrides a protected field."
  }, {
    heading: "openaigptlive",
    content: "OpenAI GPT-Live is available in early access and isn't intended for production traffic. The SDK automatically routes sessions that use this vendor to the preview endpoint. GPT-Live doesn't support turn detection or input audio transcription."
  }, {
    heading: "openaigptlive",
    content: "Option"
  }, {
    heading: "openaigptlive",
    content: "Type"
  }, {
    heading: "openaigptlive",
    content: "Required"
  }, {
    heading: "openaigptlive",
    content: "Description"
  }, {
    heading: "openaigptlive",
    content: "`apiKey`"
  }, {
    heading: "openaigptlive",
    content: "`string`"
  }, {
    heading: "openaigptlive",
    content: "Yes"
  }, {
    heading: "openaigptlive",
    content: "OpenAI API key"
  }, {
    heading: "openaigptlive",
    content: "`model`"
  }, {
    heading: "openaigptlive",
    content: "`string`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Model name. Defaults to `gpt-live-1`"
  }, {
    heading: "openaigptlive",
    content: "`voice`"
  }, {
    heading: "openaigptlive",
    content: "`string`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Output voice. Provider default: `marin`"
  }, {
    heading: "openaigptlive",
    content: "`prompt`"
  }, {
    heading: "openaigptlive",
    content: "`string`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Session instructions that define the assistant's behavior"
  }, {
    heading: "openaigptlive",
    content: "`greeting`"
  }, {
    heading: "openaigptlive",
    content: "`string`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Greeting the agent speaks when a user joins. Serialized as `greeting_message`"
  }, {
    heading: "openaigptlive",
    content: "`failureMessage`"
  }, {
    heading: "openaigptlive",
    content: "`string`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Message played when the model call fails"
  }, {
    heading: "openaigptlive",
    content: "`url`"
  }, {
    heading: "openaigptlive",
    content: "`string`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Full `ws://` or `wss://` endpoint. Defaults to `wss://api.openai.com/v1/live/sessions`"
  }, {
    heading: "openaigptlive",
    content: "`baseUrl`"
  }, {
    heading: "openaigptlive",
    content: "`string`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Host used when `url` is omitted. Defaults to `wss://api.openai.com`"
  }, {
    heading: "openaigptlive",
    content: "`path`"
  }, {
    heading: "openaigptlive",
    content: "`string`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "WebSocket path used when `url` is omitted. Defaults to `/v1/live/sessions`"
  }, {
    heading: "openaigptlive",
    content: "`inputModalities`"
  }, {
    heading: "openaigptlive",
    content: "`string[]`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Input modalities"
  }, {
    heading: "openaigptlive",
    content: "`outputModalities`"
  }, {
    heading: "openaigptlive",
    content: "`string[]`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Output modalities"
  }, {
    heading: "openaigptlive",
    content: "`messages`"
  }, {
    heading: "openaigptlive",
    content: "`Record<string, unknown>[]`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Conversation history passed to the model as context"
  }, {
    heading: "openaigptlive",
    content: "`mcpServers`"
  }, {
    heading: "openaigptlive",
    content: "`McpServersItem[]`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "MCP servers whose tools GPT-Live can call. Requires `withTools(true)`"
  }, {
    heading: "openaigptlive",
    content: "`toolEnabled`"
  }, {
    heading: "openaigptlive",
    content: "`boolean`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Advertise the agent's tools to GPT-Live. Provider default: `false`"
  }, {
    heading: "openaigptlive",
    content: "`delegation`"
  }, {
    heading: "openaigptlive",
    content: "`'client' \\| 'responses'`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Tool delegation mode: `client` or `responses`. Provider default: `responses`. Can't be changed during the session"
  }, {
    heading: "openaigptlive",
    content: "`responsesModel`"
  }, {
    heading: "openaigptlive",
    content: "`string`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Model used for delegated tool calls"
  }, {
    heading: "openaigptlive",
    content: "`interruptOnUserTurn`"
  }, {
    heading: "openaigptlive",
    content: "`boolean`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Interrupt playback when the user speaks. Provider default: `false`"
  }, {
    heading: "openaigptlive",
    content: "`outputIdleEndMs`"
  }, {
    heading: "openaigptlive",
    content: "`number`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Agent silence boundary in milliseconds. Provider default: `600`. `0` disables inference"
  }, {
    heading: "openaigptlive",
    content: "`inputIdleEndMs`"
  }, {
    heading: "openaigptlive",
    content: "`number`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "User silence boundary in milliseconds. Provider default: `1500`"
  }, {
    heading: "openaigptlive",
    content: "`outputSilencePeak`"
  }, {
    heading: "openaigptlive",
    content: "`number`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Speech amplitude threshold on the 16-bit scale. Provider default: `50`"
  }, {
    heading: "openaigptlive",
    content: "`outputSampleRate`"
  }, {
    heading: "openaigptlive",
    content: "`number`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Output PCM sample rate in Hz. Provider default: `24000`"
  }, {
    heading: "openaigptlive",
    content: "`outputBufferMs`"
  }, {
    heading: "openaigptlive",
    content: "`number`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Initial audio cushion in milliseconds. Provider default: `0`. A negative value disables pacing"
  }, {
    heading: "openaigptlive",
    content: "`inputBatchMs`"
  }, {
    heading: "openaigptlive",
    content: "`number`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Microphone audio batching interval in milliseconds"
  }, {
    heading: "openaigptlive",
    content: "`alphaSelector`"
  }, {
    heading: "openaigptlive",
    content: "`string`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "OpenAI-Alpha selector for preview contracts. Omitted when not set"
  }, {
    heading: "openaigptlive",
    content: "`headers`"
  }, {
    heading: "openaigptlive",
    content: "`string`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Extra provider request headers, as a JSON object string"
  }, {
    heading: "openaigptlive",
    content: "`sessionParams`"
  }, {
    heading: "openaigptlive",
    content: "`Record<string, unknown>`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Additional session fields. Can't override `model`, `delegation`, `audio`, `instructions`, or `input`"
  }, {
    heading: "openaigptlive",
    content: "`params`"
  }, {
    heading: "openaigptlive",
    content: "`Record<string, unknown>`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Additional provider parameters. Explicit options take precedence"
  }, {
    heading: "openaigptlive",
    content: "`instructions`"
  }, {
    heading: "openaigptlive",
    content: "`string`"
  }, {
    heading: "openaigptlive",
    content: "No"
  }, {
    heading: "openaigptlive",
    content: "Deprecated. Use `prompt` instead"
  }, {
    heading: "openaigptlive",
    content: "`inputAudioTranscription` and `turnDetection` are deprecated and accepted only for compatibility. GPT-Live doesn't support them: setting `inputAudioTranscription` throws, and the SDK ignores `turnDetection` and logs a warning."
  }, {
    heading: "avatar-vendors",
    content: "Use with `withAvatar()`. Some avatar vendors require a specific TTS sample rate, enforced at compile time and runtime."
  }, {
    heading: "heygenavatar",
    content: 'Deprecated. Use `LiveAvatarAvatar` for new integrations. `HeyGenAvatar` still works and serializes `vendor: "heygen"`. Requires TTS at **24,000 Hz**.'
  }, {
    heading: "heygenavatar",
    content: "Option"
  }, {
    heading: "heygenavatar",
    content: "Type"
  }, {
    heading: "heygenavatar",
    content: "Required"
  }, {
    heading: "heygenavatar",
    content: "Description"
  }, {
    heading: "heygenavatar",
    content: "`apiKey`"
  }, {
    heading: "heygenavatar",
    content: "`string`"
  }, {
    heading: "heygenavatar",
    content: "Yes"
  }, {
    heading: "heygenavatar",
    content: "HeyGen API key"
  }, {
    heading: "heygenavatar",
    content: "`quality`"
  }, {
    heading: "heygenavatar",
    content: "`'low' \\| 'medium' \\| 'high'`"
  }, {
    heading: "heygenavatar",
    content: "Yes"
  }, {
    heading: "heygenavatar",
    content: "Video quality: 360p, 480p, or 720p"
  }, {
    heading: "heygenavatar",
    content: "`agoraUid`"
  }, {
    heading: "heygenavatar",
    content: "`string`"
  }, {
    heading: "heygenavatar",
    content: "Yes"
  }, {
    heading: "heygenavatar",
    content: "RTC UID for the avatar stream"
  }, {
    heading: "heygenavatar",
    content: "`agoraToken`"
  }, {
    heading: "heygenavatar",
    content: "`string`"
  }, {
    heading: "heygenavatar",
    content: "No"
  }, {
    heading: "heygenavatar",
    content: "RTC token for avatar authentication"
  }, {
    heading: "heygenavatar",
    content: "`avatarId`"
  }, {
    heading: "heygenavatar",
    content: "`string`"
  }, {
    heading: "heygenavatar",
    content: "No"
  }, {
    heading: "heygenavatar",
    content: "HeyGen avatar ID"
  }, {
    heading: "heygenavatar",
    content: "`disableIdleTimeout`"
  }, {
    heading: "heygenavatar",
    content: "`boolean`"
  }, {
    heading: "heygenavatar",
    content: "No"
  }, {
    heading: "heygenavatar",
    content: "Disable idle timeout. Default: `false`"
  }, {
    heading: "heygenavatar",
    content: "`activityIdleTimeout`"
  }, {
    heading: "heygenavatar",
    content: "`number`"
  }, {
    heading: "heygenavatar",
    content: "No"
  }, {
    heading: "heygenavatar",
    content: "Idle timeout in seconds. Default: `120`"
  }, {
    heading: "heygenavatar",
    content: "`enable`"
  }, {
    heading: "heygenavatar",
    content: "`boolean`"
  }, {
    heading: "heygenavatar",
    content: "No"
  }, {
    heading: "heygenavatar",
    content: "Enable or disable the avatar. Default: `true`"
  }, {
    heading: "akoolavatar",
    content: "Requires TTS at **16,000 Hz**."
  }, {
    heading: "akoolavatar",
    content: "Option"
  }, {
    heading: "akoolavatar",
    content: "Type"
  }, {
    heading: "akoolavatar",
    content: "Required"
  }, {
    heading: "akoolavatar",
    content: "Description"
  }, {
    heading: "akoolavatar",
    content: "`apiKey`"
  }, {
    heading: "akoolavatar",
    content: "`string`"
  }, {
    heading: "akoolavatar",
    content: "Yes"
  }, {
    heading: "akoolavatar",
    content: "Akool API key"
  }, {
    heading: "akoolavatar",
    content: "`avatarId`"
  }, {
    heading: "akoolavatar",
    content: "`string`"
  }, {
    heading: "akoolavatar",
    content: "No"
  }, {
    heading: "akoolavatar",
    content: "Akool avatar ID"
  }, {
    heading: "akoolavatar",
    content: "`enable`"
  }, {
    heading: "akoolavatar",
    content: "`boolean`"
  }, {
    heading: "akoolavatar",
    content: "No"
  }, {
    heading: "akoolavatar",
    content: "Enable or disable the avatar. Default: `true`"
  }, {
    heading: "liveavataravatar",
    content: "Requires TTS at **24,000 Hz**."
  }, {
    heading: "liveavataravatar",
    content: "Option"
  }, {
    heading: "liveavataravatar",
    content: "Type"
  }, {
    heading: "liveavataravatar",
    content: "Required"
  }, {
    heading: "liveavataravatar",
    content: "Description"
  }, {
    heading: "liveavataravatar",
    content: "`apiKey`"
  }, {
    heading: "liveavataravatar",
    content: "`string`"
  }, {
    heading: "liveavataravatar",
    content: "Yes"
  }, {
    heading: "liveavataravatar",
    content: "LiveAvatar API key"
  }, {
    heading: "liveavataravatar",
    content: "`quality`"
  }, {
    heading: "liveavataravatar",
    content: "`'low' \\| 'medium' \\| 'high'`"
  }, {
    heading: "liveavataravatar",
    content: "Yes"
  }, {
    heading: "liveavataravatar",
    content: "Video quality"
  }, {
    heading: "liveavataravatar",
    content: "`agoraUid`"
  }, {
    heading: "liveavataravatar",
    content: "`string`"
  }, {
    heading: "liveavataravatar",
    content: "Yes"
  }, {
    heading: "liveavataravatar",
    content: "RTC UID for the avatar stream"
  }, {
    heading: "liveavataravatar",
    content: "`agoraToken`"
  }, {
    heading: "liveavataravatar",
    content: "`string`"
  }, {
    heading: "liveavataravatar",
    content: "No"
  }, {
    heading: "liveavataravatar",
    content: "Avatar token override"
  }, {
    heading: "liveavataravatar",
    content: "`avatarId`"
  }, {
    heading: "liveavataravatar",
    content: "`string`"
  }, {
    heading: "liveavataravatar",
    content: "No"
  }, {
    heading: "liveavataravatar",
    content: "Avatar ID"
  }, {
    heading: "liveavataravatar",
    content: "`disableIdleTimeout`"
  }, {
    heading: "liveavataravatar",
    content: "`boolean`"
  }, {
    heading: "liveavataravatar",
    content: "No"
  }, {
    heading: "liveavataravatar",
    content: "Disable idle timeout"
  }, {
    heading: "liveavataravatar",
    content: "`activityIdleTimeout`"
  }, {
    heading: "liveavataravatar",
    content: "`number`"
  }, {
    heading: "liveavataravatar",
    content: "No"
  }, {
    heading: "liveavataravatar",
    content: "Idle timeout in seconds"
  }, {
    heading: "liveavataravatar",
    content: "`enable`"
  }, {
    heading: "liveavataravatar",
    content: "`boolean`"
  }, {
    heading: "liveavataravatar",
    content: "No"
  }, {
    heading: "liveavataravatar",
    content: "Enable or disable the avatar. Default: `true`"
  }, {
    heading: "anamavatar",
    content: "Option"
  }, {
    heading: "anamavatar",
    content: "Type"
  }, {
    heading: "anamavatar",
    content: "Required"
  }, {
    heading: "anamavatar",
    content: "Description"
  }, {
    heading: "anamavatar",
    content: "`apiKey`"
  }, {
    heading: "anamavatar",
    content: "`string`"
  }, {
    heading: "anamavatar",
    content: "Yes"
  }, {
    heading: "anamavatar",
    content: "Anam API key"
  }, {
    heading: "anamavatar",
    content: "`avatarId`"
  }, {
    heading: "anamavatar",
    content: "`string`"
  }, {
    heading: "anamavatar",
    content: "No"
  }, {
    heading: "anamavatar",
    content: "Anam avatar ID"
  }, {
    heading: "anamavatar",
    content: "`enable`"
  }, {
    heading: "anamavatar",
    content: "`boolean`"
  }, {
    heading: "anamavatar",
    content: "No"
  }, {
    heading: "anamavatar",
    content: "Enable or disable the avatar. Default: `true`"
  }, {
    heading: "genericavatar",
    content: "Generic avatars can omit `agoraAppId`, `agoraChannel`, and `agoraToken`. AgentKit fills them from the session at `start()`."
  }, {
    heading: "genericavatar",
    content: "Option"
  }, {
    heading: "genericavatar",
    content: "Type"
  }, {
    heading: "genericavatar",
    content: "Required"
  }, {
    heading: "genericavatar",
    content: "Description"
  }, {
    heading: "genericavatar",
    content: "`apiKey`"
  }, {
    heading: "genericavatar",
    content: "`string`"
  }, {
    heading: "genericavatar",
    content: "Yes"
  }, {
    heading: "genericavatar",
    content: "Custom avatar provider API key"
  }, {
    heading: "genericavatar",
    content: "`apiBaseUrl`"
  }, {
    heading: "genericavatar",
    content: "`string`"
  }, {
    heading: "genericavatar",
    content: "Yes"
  }, {
    heading: "genericavatar",
    content: "Avatar provider API base URL"
  }, {
    heading: "genericavatar",
    content: "`avatarId`"
  }, {
    heading: "genericavatar",
    content: "`string`"
  }, {
    heading: "genericavatar",
    content: "Yes"
  }, {
    heading: "genericavatar",
    content: "Avatar ID"
  }, {
    heading: "genericavatar",
    content: "`agoraUid`"
  }, {
    heading: "genericavatar",
    content: "`string`"
  }, {
    heading: "genericavatar",
    content: "Yes"
  }, {
    heading: "genericavatar",
    content: "RTC UID for the avatar stream"
  }, {
    heading: "genericavatar",
    content: "`agoraAppId`"
  }, {
    heading: "genericavatar",
    content: "`string`"
  }, {
    heading: "genericavatar",
    content: "No"
  }, {
    heading: "genericavatar",
    content: "Agora App ID override"
  }, {
    heading: "genericavatar",
    content: "`agoraChannel`"
  }, {
    heading: "genericavatar",
    content: "`string`"
  }, {
    heading: "genericavatar",
    content: "No"
  }, {
    heading: "genericavatar",
    content: "Agora channel override"
  }, {
    heading: "genericavatar",
    content: "`agoraToken`"
  }, {
    heading: "genericavatar",
    content: "`string`"
  }, {
    heading: "genericavatar",
    content: "No"
  }, {
    heading: "genericavatar",
    content: "Avatar token override"
  }, {
    heading: "genericavatar",
    content: "`enable`"
  }, {
    heading: "genericavatar",
    content: "`boolean`"
  }, {
    heading: "genericavatar",
    content: "No"
  }, {
    heading: "genericavatar",
    content: "Enable or disable the avatar. Default: `true`"
  }, {
    heading: "genericavatar",
    content: "`additionalParams`"
  }, {
    heading: "genericavatar",
    content: "`Record<string, unknown>`"
  }, {
    heading: "genericavatar",
    content: "No"
  }, {
    heading: "genericavatar",
    content: "Additional vendor parameters. Explicit options take precedence over matching keys."
  }, {
    heading: "tavus",
    content: 'Tavus avatars can omit `agoraAppId`, `agoraChannel`, and `agoraToken`. AgentKit fills them from the session at `start()`. Serializes `vendor: "generic"`. For the endpoint and a full example, see Tavus.'
  }, {
    heading: "tavus",
    content: "Option"
  }, {
    heading: "tavus",
    content: "Type"
  }, {
    heading: "tavus",
    content: "Required"
  }, {
    heading: "tavus",
    content: "Description"
  }, {
    heading: "tavus",
    content: "`apiKey`"
  }, {
    heading: "tavus",
    content: "`string`"
  }, {
    heading: "tavus",
    content: "Yes"
  }, {
    heading: "tavus",
    content: "Tavus API key"
  }, {
    heading: "tavus",
    content: "`apiBaseUrl`"
  }, {
    heading: "tavus",
    content: "`string`"
  }, {
    heading: "tavus",
    content: "Yes"
  }, {
    heading: "tavus",
    content: "Tavus API base URL"
  }, {
    heading: "tavus",
    content: "`avatarId`"
  }, {
    heading: "tavus",
    content: "`string`"
  }, {
    heading: "tavus",
    content: "Yes"
  }, {
    heading: "tavus",
    content: "Tavus avatar ID"
  }, {
    heading: "tavus",
    content: "`agoraUid`"
  }, {
    heading: "tavus",
    content: "`string`"
  }, {
    heading: "tavus",
    content: "Yes"
  }, {
    heading: "tavus",
    content: "RTC UID for the avatar stream"
  }, {
    heading: "tavus",
    content: "`agoraAppId`"
  }, {
    heading: "tavus",
    content: "`string`"
  }, {
    heading: "tavus",
    content: "No"
  }, {
    heading: "tavus",
    content: "Agora App ID override"
  }, {
    heading: "tavus",
    content: "`agoraChannel`"
  }, {
    heading: "tavus",
    content: "`string`"
  }, {
    heading: "tavus",
    content: "No"
  }, {
    heading: "tavus",
    content: "Agora channel override"
  }, {
    heading: "tavus",
    content: "`agoraToken`"
  }, {
    heading: "tavus",
    content: "`string`"
  }, {
    heading: "tavus",
    content: "No"
  }, {
    heading: "tavus",
    content: "Avatar token override"
  }, {
    heading: "tavus",
    content: "`enable`"
  }, {
    heading: "tavus",
    content: "`boolean`"
  }, {
    heading: "tavus",
    content: "No"
  }, {
    heading: "tavus",
    content: "Enable or disable the avatar. Default: `true`"
  }, {
    heading: "tavus",
    content: "`additionalParams`"
  }, {
    heading: "tavus",
    content: "`Record<string, unknown>`"
  }, {
    heading: "tavus",
    content: "No"
  }, {
    heading: "tavus",
    content: "Additional vendor parameters. Explicit options take precedence over matching keys."
  }, {
    heading: "protoface",
    content: 'Protoface avatars can omit `agoraAppId`, `agoraChannel`, and `agoraToken`. AgentKit fills them from the session at `start()`. Serializes `vendor: "generic"`. For the endpoint and a full example, see Protoface.'
  }, {
    heading: "protoface",
    content: "Option"
  }, {
    heading: "protoface",
    content: "Type"
  }, {
    heading: "protoface",
    content: "Required"
  }, {
    heading: "protoface",
    content: "Description"
  }, {
    heading: "protoface",
    content: "`apiKey`"
  }, {
    heading: "protoface",
    content: "`string`"
  }, {
    heading: "protoface",
    content: "Yes"
  }, {
    heading: "protoface",
    content: "Protoface API key"
  }, {
    heading: "protoface",
    content: "`apiBaseUrl`"
  }, {
    heading: "protoface",
    content: "`string`"
  }, {
    heading: "protoface",
    content: "Yes"
  }, {
    heading: "protoface",
    content: "Protoface API base URL"
  }, {
    heading: "protoface",
    content: "`avatarId`"
  }, {
    heading: "protoface",
    content: "`string`"
  }, {
    heading: "protoface",
    content: "Yes"
  }, {
    heading: "protoface",
    content: "Protoface avatar ID"
  }, {
    heading: "protoface",
    content: "`agoraUid`"
  }, {
    heading: "protoface",
    content: "`string`"
  }, {
    heading: "protoface",
    content: "Yes"
  }, {
    heading: "protoface",
    content: "RTC UID for the avatar stream"
  }, {
    heading: "protoface",
    content: "`agoraAppId`"
  }, {
    heading: "protoface",
    content: "`string`"
  }, {
    heading: "protoface",
    content: "No"
  }, {
    heading: "protoface",
    content: "Agora App ID override"
  }, {
    heading: "protoface",
    content: "`agoraChannel`"
  }, {
    heading: "protoface",
    content: "`string`"
  }, {
    heading: "protoface",
    content: "No"
  }, {
    heading: "protoface",
    content: "Agora channel override"
  }, {
    heading: "protoface",
    content: "`agoraToken`"
  }, {
    heading: "protoface",
    content: "`string`"
  }, {
    heading: "protoface",
    content: "No"
  }, {
    heading: "protoface",
    content: "Avatar token override"
  }, {
    heading: "protoface",
    content: "`enable`"
  }, {
    heading: "protoface",
    content: "`boolean`"
  }, {
    heading: "protoface",
    content: "No"
  }, {
    heading: "protoface",
    content: "Enable or disable the avatar. Default: `true`"
  }, {
    heading: "protoface",
    content: "`additionalParams`"
  }, {
    heading: "protoface",
    content: "`Record<string, unknown>`"
  }, {
    heading: "protoface",
    content: "No"
  }, {
    heading: "protoface",
    content: "Additional vendor parameters. Explicit options take precedence over matching keys."
  }, {
    heading: "lemonslice",
    content: 'LemonSlice avatars can omit `agoraAppId`, `agoraChannel`, and `agoraToken`. AgentKit fills them from the session at `start()`. Serializes `vendor: "generic"`. For the endpoint and a full example, see LemonSlice.'
  }, {
    heading: "lemonslice",
    content: "Option"
  }, {
    heading: "lemonslice",
    content: "Type"
  }, {
    heading: "lemonslice",
    content: "Required"
  }, {
    heading: "lemonslice",
    content: "Description"
  }, {
    heading: "lemonslice",
    content: "`apiKey`"
  }, {
    heading: "lemonslice",
    content: "`string`"
  }, {
    heading: "lemonslice",
    content: "Yes"
  }, {
    heading: "lemonslice",
    content: "LemonSlice API key"
  }, {
    heading: "lemonslice",
    content: "`apiBaseUrl`"
  }, {
    heading: "lemonslice",
    content: "`string`"
  }, {
    heading: "lemonslice",
    content: "Yes"
  }, {
    heading: "lemonslice",
    content: "LemonSlice API base URL"
  }, {
    heading: "lemonslice",
    content: "`avatarId`"
  }, {
    heading: "lemonslice",
    content: "`string`"
  }, {
    heading: "lemonslice",
    content: "Yes"
  }, {
    heading: "lemonslice",
    content: "Always `lemonslice`"
  }, {
    heading: "lemonslice",
    content: "`agoraUid`"
  }, {
    heading: "lemonslice",
    content: "`string`"
  }, {
    heading: "lemonslice",
    content: "Yes"
  }, {
    heading: "lemonslice",
    content: "RTC UID for the avatar stream"
  }, {
    heading: "lemonslice",
    content: "`agoraAppId`"
  }, {
    heading: "lemonslice",
    content: "`string`"
  }, {
    heading: "lemonslice",
    content: "No"
  }, {
    heading: "lemonslice",
    content: "Agora App ID override"
  }, {
    heading: "lemonslice",
    content: "`agoraChannel`"
  }, {
    heading: "lemonslice",
    content: "`string`"
  }, {
    heading: "lemonslice",
    content: "No"
  }, {
    heading: "lemonslice",
    content: "Agora channel override"
  }, {
    heading: "lemonslice",
    content: "`agoraToken`"
  }, {
    heading: "lemonslice",
    content: "`string`"
  }, {
    heading: "lemonslice",
    content: "No"
  }, {
    heading: "lemonslice",
    content: "Avatar token override"
  }, {
    heading: "lemonslice",
    content: "`enable`"
  }, {
    heading: "lemonslice",
    content: "`boolean`"
  }, {
    heading: "lemonslice",
    content: "No"
  }, {
    heading: "lemonslice",
    content: "Enable or disable the avatar. Default: `true`"
  }, {
    heading: "lemonslice",
    content: "`additionalParams`"
  }, {
    heading: "lemonslice",
    content: "`Record<string, unknown>`"
  }, {
    heading: "lemonslice",
    content: "No"
  }, {
    heading: "lemonslice",
    content: "Additional vendor parameters. Explicit options take precedence over matching keys."
  }, {
    heading: "token-utilities",
    content: "Helper functions and classes for generating and managing tokens. Use these when you need control over token lifetime, or when generating tokens outside of a session."
  }, {
    heading: "generateconvoaitokenoptions",
    content: "Generates a Conversational AI token combining RTC and RTM privileges. This is the same token the SDK generates automatically in app-credentials mode. Use this when you need a token outside of a session, or when passing a pre-built token to `SessionOptions.token`."
  }, {
    heading: "generateconvoaitokenoptions",
    content: "Option"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "Type"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "Required"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "Description"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "`appId`"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "`string`"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "Yes"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "Agora App ID"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "`appCertificate`"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "`string`"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "Yes"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "Agora App Certificate"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "`channelName`"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "`string`"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "Yes"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "The channel the token grants access to"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "`uid`"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "`number`"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "Yes"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "Numeric RTC UID the token is issued for"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "`tokenExpire`"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "`number`"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "No"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "Token lifetime in seconds. Default: `86400`"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "`privilegeExpire`"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "`number`"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "No"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "Privilege lifetime in seconds. Default: same as `tokenExpire`"
  }, {
    heading: "generateconvoaitokenoptions",
    content: "**Returns:** `string` — the generated token."
  }, {
    heading: "generateconvoaitokenoptions",
    content: "**Throws:** if `appId` or `appCertificate` isn't exactly 32 characters."
  }, {
    heading: "expiresin",
    content: "Helper for specifying token lifetimes. Use with `SessionOptions.expiresIn` or `generateConvoAIToken`. Values are validated and capped at the Agora maximum of 86400 seconds (24 hours)."
  }, {
    heading: "expiresin",
    content: "Value or method"
  }, {
    heading: "expiresin",
    content: "Returns"
  }, {
    heading: "expiresin",
    content: "Description"
  }, {
    heading: "expiresin",
    content: "`ExpiresIn.DAY`"
  }, {
    heading: "expiresin",
    content: "`86400`"
  }, {
    heading: "expiresin",
    content: "24 hours — the Agora maximum and default"
  }, {
    heading: "expiresin",
    content: "`ExpiresIn.MAX`"
  }, {
    heading: "expiresin",
    content: "`86400`"
  }, {
    heading: "expiresin",
    content: "The Agora maximum"
  }, {
    heading: "expiresin",
    content: "`ExpiresIn.HOUR`"
  }, {
    heading: "expiresin",
    content: "`3600`"
  }, {
    heading: "expiresin",
    content: "One hour"
  }, {
    heading: "expiresin",
    content: "`ExpiresIn.seconds(n)`"
  }, {
    heading: "expiresin",
    content: "`number`"
  }, {
    heading: "expiresin",
    content: "`n` seconds, validated and capped at 24 h"
  }, {
    heading: "expiresin",
    content: "`ExpiresIn.hours(n)`"
  }, {
    heading: "expiresin",
    content: "`number`"
  }, {
    heading: "expiresin",
    content: "`n` hours in seconds. Throws if `n` ≤ 0, caps at 24 h with a warning"
  }, {
    heading: "expiresin",
    content: "`ExpiresIn.minutes(n)`"
  }, {
    heading: "expiresin",
    content: "`number`"
  }, {
    heading: "expiresin",
    content: "`n` minutes in seconds. Throws if `n` ≤ 0, caps at 24 h with a warning"
  }, {
    heading: "types-and-enums",
    content: "Shared types and enums used across `AgoraClient`, `Agent`, `AgentSession`, and vendor classes."
  }, {
    heading: "area",
    content: "Region used for API routing. Pass to `AgoraClient` via the `area` option."
  }, {
    heading: "area",
    content: "Value"
  }, {
    heading: "area",
    content: "Region"
  }, {
    heading: "area",
    content: "`Area.US`"
  }, {
    heading: "area",
    content: "United States"
  }, {
    heading: "area",
    content: "`Area.EU`"
  }, {
    heading: "area",
    content: "Europe"
  }, {
    heading: "area",
    content: "`Area.AP`"
  }, {
    heading: "area",
    content: "Asia-Pacific"
  }, {
    heading: "area",
    content: "`Area.CN`"
  }, {
    heading: "area",
    content: "China mainland"
  }, {
    heading: "agoraauthmode",
    content: "The resolved authentication mode on an `AgoraClient` instance. Read via `client.authMode`."
  }, {
    heading: "agoraauthmode",
    content: "Value"
  }, {
    heading: "agoraauthmode",
    content: "Description"
  }, {
    heading: "agoraauthmode",
    content: '`"app-credentials"`'
  }, {
    heading: "agoraauthmode",
    content: "App ID and App Certificate provided. SDK auto-generates tokens"
  }, {
    heading: "agoraauthmode",
    content: '`"token"`'
  }, {
    heading: "agoraauthmode",
    content: "Pre-built `authToken` provided"
  }, {
    heading: "agoraauthmode",
    content: '`"basic"`'
  }, {
    heading: "agoraauthmode",
    content: "`customerId` and `customerSecret` provided"
  }, {
    heading: "agentsessionevent",
    content: "Union type of all valid event names for `session.on()` and `session.off()`."
  }, {
    heading: "agentsessioneventhandler",
    content: "Generic handler type for session event callbacks."
  }, {
    heading: "agentsessioneventhandler",
    content: "Event"
  }, {
    heading: "agentsessioneventhandler",
    content: "`T`"
  }, {
    heading: "agentsessioneventhandler",
    content: '`"started"`'
  }, {
    heading: "agentsessioneventhandler",
    content: "`{ agentId: string }`"
  }, {
    heading: "agentsessioneventhandler",
    content: '`"stopped"`'
  }, {
    heading: "agentsessioneventhandler",
    content: "`{ agentId: string }`"
  }, {
    heading: "agentsessioneventhandler",
    content: '`"error"`'
  }, {
    heading: "agentsessioneventhandler",
    content: "`unknown` (the thrown error)"
  }, {
    heading: "speakpriority",
    content: "Controls how the agent handles a `say()` call relative to its current activity."
  }, {
    heading: "speakpriority",
    content: "Value"
  }, {
    heading: "speakpriority",
    content: "Description"
  }, {
    heading: "speakpriority",
    content: '`"INTERRUPT"`'
  }, {
    heading: "speakpriority",
    content: "Agent immediately stops current speech and delivers the message"
  }, {
    heading: "speakpriority",
    content: '`"APPEND"`'
  }, {
    heading: "speakpriority",
    content: "Message is queued and delivered after current speech ends"
  }, {
    heading: "speakpriority",
    content: '`"IGNORE"`'
  }, {
    heading: "speakpriority",
    content: "Message is discarded if the agent is currently speaking"
  }, {
    heading: "speakpriority",
    content: "The `SpeakPriorityInterrupt`, `SpeakPriorityAppend`, and `SpeakPriorityIgnore` constants are also exported."
  }, {
    heading: "agoraerror",
    content: "Thrown when the API returns a 4xx or 5xx response. Catch this to inspect the status code and response body."
  }, {
    heading: "agoraerror",
    content: "Property"
  }, {
    heading: "agoraerror",
    content: "Type"
  }, {
    heading: "agoraerror",
    content: "Description"
  }, {
    heading: "agoraerror",
    content: "`statusCode`"
  }, {
    heading: "agoraerror",
    content: "`number \\| undefined`"
  }, {
    heading: "agoraerror",
    content: "HTTP status code returned by the API"
  }, {
    heading: "agoraerror",
    content: "`message`"
  }, {
    heading: "agoraerror",
    content: "`string`"
  }, {
    heading: "agoraerror",
    content: "Error message, including the status code and body"
  }, {
    heading: "agoraerror",
    content: "`body`"
  }, {
    heading: "agoraerror",
    content: "`unknown`"
  }, {
    heading: "agoraerror",
    content: "Raw response body from the API, if any"
  }, {
    heading: "agoraerror",
    content: "`rawResponse`"
  }, {
    heading: "agoraerror",
    content: "`RawResponse \\| undefined`"
  }, {
    heading: "agoraerror",
    content: "The raw HTTP response"
  }],
  headings: [{
    id: "agoraclient",
    content: "AgoraClient"
  }, {
    id: "constructor",
    content: "Constructor"
  }, {
    id: "properties",
    content: "Properties"
  }, {
    id: "methods",
    content: "Methods"
  }, {
    id: "nextregion",
    content: "`nextRegion()`"
  }, {
    id: "selectbestdomainsignal",
    content: "`selectBestDomain(signal?)`"
  }, {
    id: "stopagentagentid",
    content: "`stopAgent(agentId)`"
  }, {
    id: "getcurrenturl",
    content: "`getCurrentURL()`"
  }, {
    id: "sub-clients",
    content: "Sub-clients"
  }, {
    id: "agent",
    content: "Agent"
  }, {
    id: "constructor-1",
    content: "Constructor"
  }, {
    id: "builder-methods",
    content: "Builder methods"
  }, {
    id: "withllmvendor",
    content: "`withLlm(vendor)`"
  }, {
    id: "withttsvendor",
    content: "`withTts(vendor)`"
  }, {
    id: "withsttvendor",
    content: "`withStt(vendor)`"
  }, {
    id: "withmllmvendor",
    content: "`withMllm(vendor)`"
  }, {
    id: "withavatarvendor",
    content: "`withAvatar(vendor)`"
  }, {
    id: "withturndetectionconfig",
    content: "`withTurnDetection(config)`"
  }, {
    id: "withinterruptionconfig",
    content: "`withInterruption(config)`"
  }, {
    id: "withinstructionstext",
    content: "`withInstructions(text)`"
  }, {
    id: "withgreetingtext",
    content: "`withGreeting(text)`"
  }, {
    id: "other-builder-methods",
    content: "Other builder methods"
  }, {
    id: "createsessionoptions",
    content: "`createSession(options)`"
  }, {
    id: "properties-1",
    content: "Properties"
  }, {
    id: "topropertiesopts",
    content: "`toProperties(opts)`"
  }, {
    id: "type-aliases",
    content: "Type aliases"
  }, {
    id: "agentsession",
    content: "AgentSession"
  }, {
    id: "state-machine",
    content: "State machine"
  }, {
    id: "methods-1",
    content: "Methods"
  }, {
    id: "start",
    content: "`start()`"
  }, {
    id: "stop",
    content: "`stop()`"
  }, {
    id: "saytext-options",
    content: "`say(text, options?)`"
  }, {
    id: "interrupt",
    content: "`interrupt()`"
  }, {
    id: "thinktext-options",
    content: "`think(text, options?)`"
  }, {
    id: "updateconfig",
    content: "`update(config)`"
  }, {
    id: "gethistory",
    content: "`getHistory()`"
  }, {
    id: "getturnsoptions",
    content: "`getTurns(options?)`"
  }, {
    id: "getallturnsoptions",
    content: "`getAllTurns(options?)`"
  }, {
    id: "getinfo",
    content: "`getInfo()`"
  }, {
    id: "onevent-handler",
    content: "`on(event, handler)`"
  }, {
    id: "offevent-handler",
    content: "`off(event, handler)`"
  }, {
    id: "events",
    content: "Events"
  }, {
    id: "properties-2",
    content: "Properties"
  }, {
    id: "using-sessionraw",
    content: "Using `session.raw`"
  }, {
    id: "presets-and-byok",
    content: "Presets and BYOK"
  }, {
    id: "vendors",
    content: "Vendors"
  }, {
    id: "llm-vendors",
    content: "LLM vendors"
  }, {
    id: "openai",
    content: "OpenAI"
  }, {
    id: "azureopenai",
    content: "AzureOpenAI"
  }, {
    id: "anthropic",
    content: "Anthropic"
  }, {
    id: "gemini",
    content: "Gemini"
  }, {
    id: "other-llm-vendors",
    content: "Other LLM vendors"
  }, {
    id: "tts-vendors",
    content: "TTS vendors"
  }, {
    id: "elevenlabstts",
    content: "ElevenLabsTTS"
  }, {
    id: "microsofttts",
    content: "MicrosoftTTS"
  }, {
    id: "openaitts",
    content: "OpenAITTS"
  }, {
    id: "cartesiatts",
    content: "CartesiaTTS"
  }, {
    id: "other-tts-vendors",
    content: "Other TTS vendors"
  }, {
    id: "generictts",
    content: "GenericTTS"
  }, {
    id: "stt-vendors",
    content: "STT vendors"
  }, {
    id: "deepgramstt",
    content: "DeepgramSTT"
  }, {
    id: "other-stt-vendors",
    content: "Other STT vendors"
  }, {
    id: "mllm-vendors",
    content: "MLLM vendors"
  }, {
    id: "openairealtime",
    content: "OpenAIRealtime"
  }, {
    id: "azureopenairealtime",
    content: "AzureOpenAIRealtime"
  }, {
    id: "geminilive",
    content: "GeminiLive"
  }, {
    id: "vertexai",
    content: "VertexAI"
  }, {
    id: "xaigrok",
    content: "XaiGrok"
  }, {
    id: "openaigptlive",
    content: "OpenAIGPTLive"
  }, {
    id: "avatar-vendors",
    content: "Avatar vendors"
  }, {
    id: "heygenavatar",
    content: "HeyGenAvatar"
  }, {
    id: "akoolavatar",
    content: "AkoolAvatar"
  }, {
    id: "liveavataravatar",
    content: "LiveAvatarAvatar"
  }, {
    id: "anamavatar",
    content: "AnamAvatar"
  }, {
    id: "genericavatar",
    content: "GenericAvatar"
  }, {
    id: "tavus",
    content: "Tavus"
  }, {
    id: "protoface",
    content: "Protoface"
  }, {
    id: "lemonslice",
    content: "LemonSlice"
  }, {
    id: "token-utilities",
    content: "Token utilities"
  }, {
    id: "generateconvoaitokenoptions",
    content: "`generateConvoAIToken(options)`"
  }, {
    id: "expiresin",
    content: "`ExpiresIn`"
  }, {
    id: "types-and-enums",
    content: "Types and enums"
  }, {
    id: "area",
    content: "`Area`"
  }, {
    id: "agoraauthmode",
    content: "`AgoraAuthMode`"
  }, {
    id: "agentsessionevent",
    content: "`AgentSessionEvent`"
  }, {
    id: "agentsessioneventhandler",
    content: "`AgentSessionEventHandler`"
  }, {
    id: "speakpriority",
    content: "`SpeakPriority`"
  }, {
    id: "agoraerror",
    content: "`AgoraError`"
  }]
};
export let toc = [{
  depth: 2,
  url: "#agoraclient",
  title: _jsx(_Fragment, {
    children: "AgoraClient"
  })
}, {
  depth: 3,
  url: "#constructor",
  title: _jsx(_Fragment, {
    children: "Constructor"
  })
}, {
  depth: 3,
  url: "#properties",
  title: _jsx(_Fragment, {
    children: "Properties"
  })
}, {
  depth: 3,
  url: "#methods",
  title: _jsx(_Fragment, {
    children: "Methods"
  })
}, {
  depth: 4,
  url: "#nextregion",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "nextRegion()"
    })
  })
}, {
  depth: 4,
  url: "#selectbestdomainsignal",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "selectBestDomain(signal?)"
    })
  })
}, {
  depth: 4,
  url: "#stopagentagentid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "stopAgent(agentId)"
    })
  })
}, {
  depth: 4,
  url: "#getcurrenturl",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "getCurrentURL()"
    })
  })
}, {
  depth: 3,
  url: "#sub-clients",
  title: _jsx(_Fragment, {
    children: "Sub-clients"
  })
}, {
  depth: 2,
  url: "#agent",
  title: _jsx(_Fragment, {
    children: "Agent"
  })
}, {
  depth: 3,
  url: "#constructor-1",
  title: _jsx(_Fragment, {
    children: "Constructor"
  })
}, {
  depth: 3,
  url: "#builder-methods",
  title: _jsx(_Fragment, {
    children: "Builder methods"
  })
}, {
  depth: 4,
  url: "#withllmvendor",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "withLlm(vendor)"
    })
  })
}, {
  depth: 4,
  url: "#withttsvendor",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "withTts(vendor)"
    })
  })
}, {
  depth: 4,
  url: "#withsttvendor",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "withStt(vendor)"
    })
  })
}, {
  depth: 4,
  url: "#withmllmvendor",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "withMllm(vendor)"
    })
  })
}, {
  depth: 4,
  url: "#withavatarvendor",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "withAvatar(vendor)"
    })
  })
}, {
  depth: 4,
  url: "#withturndetectionconfig",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "withTurnDetection(config)"
    })
  })
}, {
  depth: 4,
  url: "#withinterruptionconfig",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "withInterruption(config)"
    })
  })
}, {
  depth: 4,
  url: "#withinstructionstext",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "withInstructions(text)"
    })
  })
}, {
  depth: 4,
  url: "#withgreetingtext",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "withGreeting(text)"
    })
  })
}, {
  depth: 4,
  url: "#other-builder-methods",
  title: _jsx(_Fragment, {
    children: "Other builder methods"
  })
}, {
  depth: 3,
  url: "#createsessionoptions",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "createSession(options)"
    })
  })
}, {
  depth: 3,
  url: "#properties-1",
  title: _jsx(_Fragment, {
    children: "Properties"
  })
}, {
  depth: 3,
  url: "#topropertiesopts",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "toProperties(opts)"
    })
  })
}, {
  depth: 3,
  url: "#type-aliases",
  title: _jsx(_Fragment, {
    children: "Type aliases"
  })
}, {
  depth: 2,
  url: "#agentsession",
  title: _jsx(_Fragment, {
    children: "AgentSession"
  })
}, {
  depth: 3,
  url: "#state-machine",
  title: _jsx(_Fragment, {
    children: "State machine"
  })
}, {
  depth: 3,
  url: "#methods-1",
  title: _jsx(_Fragment, {
    children: "Methods"
  })
}, {
  depth: 4,
  url: "#start",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "start()"
    })
  })
}, {
  depth: 4,
  url: "#stop",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "stop()"
    })
  })
}, {
  depth: 4,
  url: "#saytext-options",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "say(text, options?)"
    })
  })
}, {
  depth: 4,
  url: "#interrupt",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "interrupt()"
    })
  })
}, {
  depth: 4,
  url: "#thinktext-options",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "think(text, options?)"
    })
  })
}, {
  depth: 4,
  url: "#updateconfig",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "update(config)"
    })
  })
}, {
  depth: 4,
  url: "#gethistory",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "getHistory()"
    })
  })
}, {
  depth: 4,
  url: "#getturnsoptions",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "getTurns(options?)"
    })
  })
}, {
  depth: 4,
  url: "#getallturnsoptions",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "getAllTurns(options?)"
    })
  })
}, {
  depth: 4,
  url: "#getinfo",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "getInfo()"
    })
  })
}, {
  depth: 4,
  url: "#onevent-handler",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "on(event, handler)"
    })
  })
}, {
  depth: 4,
  url: "#offevent-handler",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "off(event, handler)"
    })
  })
}, {
  depth: 3,
  url: "#events",
  title: _jsx(_Fragment, {
    children: "Events"
  })
}, {
  depth: 3,
  url: "#properties-2",
  title: _jsx(_Fragment, {
    children: "Properties"
  })
}, {
  depth: 4,
  url: "#using-sessionraw",
  title: _jsxs(_Fragment, {
    children: ["Using ", _jsx("code", {
      children: "session.raw"
    })]
  })
}, {
  depth: 3,
  url: "#presets-and-byok",
  title: _jsx(_Fragment, {
    children: "Presets and BYOK"
  })
}, {
  depth: 2,
  url: "#vendors",
  title: _jsx(_Fragment, {
    children: "Vendors"
  })
}, {
  depth: 3,
  url: "#llm-vendors",
  title: _jsx(_Fragment, {
    children: "LLM vendors"
  })
}, {
  depth: 4,
  url: "#openai",
  title: _jsx(_Fragment, {
    children: "OpenAI"
  })
}, {
  depth: 4,
  url: "#azureopenai",
  title: _jsx(_Fragment, {
    children: "AzureOpenAI"
  })
}, {
  depth: 4,
  url: "#anthropic",
  title: _jsx(_Fragment, {
    children: "Anthropic"
  })
}, {
  depth: 4,
  url: "#gemini",
  title: _jsx(_Fragment, {
    children: "Gemini"
  })
}, {
  depth: 3,
  url: "#other-llm-vendors",
  title: _jsx(_Fragment, {
    children: "Other LLM vendors"
  })
}, {
  depth: 3,
  url: "#tts-vendors",
  title: _jsx(_Fragment, {
    children: "TTS vendors"
  })
}, {
  depth: 4,
  url: "#elevenlabstts",
  title: _jsx(_Fragment, {
    children: "ElevenLabsTTS"
  })
}, {
  depth: 4,
  url: "#microsofttts",
  title: _jsx(_Fragment, {
    children: "MicrosoftTTS"
  })
}, {
  depth: 4,
  url: "#openaitts",
  title: _jsx(_Fragment, {
    children: "OpenAITTS"
  })
}, {
  depth: 4,
  url: "#cartesiatts",
  title: _jsx(_Fragment, {
    children: "CartesiaTTS"
  })
}, {
  depth: 4,
  url: "#other-tts-vendors",
  title: _jsx(_Fragment, {
    children: "Other TTS vendors"
  })
}, {
  depth: 4,
  url: "#generictts",
  title: _jsx(_Fragment, {
    children: "GenericTTS"
  })
}, {
  depth: 3,
  url: "#stt-vendors",
  title: _jsx(_Fragment, {
    children: "STT vendors"
  })
}, {
  depth: 4,
  url: "#deepgramstt",
  title: _jsx(_Fragment, {
    children: "DeepgramSTT"
  })
}, {
  depth: 4,
  url: "#other-stt-vendors",
  title: _jsx(_Fragment, {
    children: "Other STT vendors"
  })
}, {
  depth: 3,
  url: "#mllm-vendors",
  title: _jsx(_Fragment, {
    children: "MLLM vendors"
  })
}, {
  depth: 4,
  url: "#openairealtime",
  title: _jsx(_Fragment, {
    children: "OpenAIRealtime"
  })
}, {
  depth: 4,
  url: "#azureopenairealtime",
  title: _jsx(_Fragment, {
    children: "AzureOpenAIRealtime"
  })
}, {
  depth: 4,
  url: "#geminilive",
  title: _jsx(_Fragment, {
    children: "GeminiLive"
  })
}, {
  depth: 4,
  url: "#vertexai",
  title: _jsx(_Fragment, {
    children: "VertexAI"
  })
}, {
  depth: 4,
  url: "#xaigrok",
  title: _jsx(_Fragment, {
    children: "XaiGrok"
  })
}, {
  depth: 4,
  url: "#openaigptlive",
  title: _jsx(_Fragment, {
    children: "OpenAIGPTLive"
  })
}, {
  depth: 3,
  url: "#avatar-vendors",
  title: _jsx(_Fragment, {
    children: "Avatar vendors"
  })
}, {
  depth: 4,
  url: "#heygenavatar",
  title: _jsx(_Fragment, {
    children: "HeyGenAvatar"
  })
}, {
  depth: 4,
  url: "#akoolavatar",
  title: _jsx(_Fragment, {
    children: "AkoolAvatar"
  })
}, {
  depth: 4,
  url: "#liveavataravatar",
  title: _jsx(_Fragment, {
    children: "LiveAvatarAvatar"
  })
}, {
  depth: 4,
  url: "#anamavatar",
  title: _jsx(_Fragment, {
    children: "AnamAvatar"
  })
}, {
  depth: 4,
  url: "#genericavatar",
  title: _jsx(_Fragment, {
    children: "GenericAvatar"
  })
}, {
  depth: 4,
  url: "#tavus",
  title: _jsx(_Fragment, {
    children: "Tavus"
  })
}, {
  depth: 4,
  url: "#protoface",
  title: _jsx(_Fragment, {
    children: "Protoface"
  })
}, {
  depth: 4,
  url: "#lemonslice",
  title: _jsx(_Fragment, {
    children: "LemonSlice"
  })
}, {
  depth: 2,
  url: "#token-utilities",
  title: _jsx(_Fragment, {
    children: "Token utilities"
  })
}, {
  depth: 3,
  url: "#generateconvoaitokenoptions",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "generateConvoAIToken(options)"
    })
  })
}, {
  depth: 3,
  url: "#expiresin",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ExpiresIn"
    })
  })
}, {
  depth: 2,
  url: "#types-and-enums",
  title: _jsx(_Fragment, {
    children: "Types and enums"
  })
}, {
  depth: 3,
  url: "#area",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "Area"
    })
  })
}, {
  depth: 3,
  url: "#agoraauthmode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AgoraAuthMode"
    })
  })
}, {
  depth: 3,
  url: "#agentsessionevent",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AgentSessionEvent"
    })
  })
}, {
  depth: 3,
  url: "#agentsessioneventhandler",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AgentSessionEventHandler"
    })
  })
}, {
  depth: 3,
  url: "#speakpriority",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "SpeakPriority"
    })
  })
}, {
  depth: 3,
  url: "#agoraerror",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AgoraError"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
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
      children: "Full API reference for the Agora Conversational AI TypeScript SDK."
    }), `
`, _jsx(_components.h2, {
      id: "agoraclient",
      children: "AgoraClient"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "AgoraClient"
      }), " extends the Fern-generated base client with domain pool support for regional URL cycling and three authentication modes. Pass ", _jsx(_components.code, {
        children: "appId"
      }), " and ", _jsx(_components.code, {
        children: "appCertificate"
      }), " only for the recommended app-credentials mode. The SDK mints fresh REST tokens per request and generates RTC join tokens at session start."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
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
              children: " { AgoraClient, Area } "
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
          })
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "constructor",
      children: "Constructor"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
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
              children: " client"
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
              children: " AgoraClient"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: AgoraClient.Options);"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "The authentication mode is resolved automatically from the options you provide."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "area"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#area",
              children: _jsx(_components.code, {
                children: "Area"
              })
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsxs(_components.td, {
            children: ["Region for API routing (", _jsx(_components.code, {
              children: "Area.US"
            }), ", ", _jsx(_components.code, {
              children: "Area.EU"
            }), ", ", _jsx(_components.code, {
              children: "Area.AP"
            }), ", ", _jsx(_components.code, {
              children: "Area.CN"
            }), ")"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "appId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Agora App ID"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "appCertificate"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Agora App Certificate. Keep this secret and never expose it client-side"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "customerId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Customer ID for Basic Auth"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "customerSecret"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Customer Secret for Basic Auth"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "authToken"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Raw Agora token. The SDK sends ", _jsx(_components.code, {
              children: "Authorization: agora token=<authToken>"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "timeoutInSeconds"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Default request timeout in seconds"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "maxRetries"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Maximum retry attempts"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "fetch"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "typeof fetch"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Custom fetch implementation for unsupported runtimes"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "Authentication mode is resolved from the options you provide:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Options provided"
          }), _jsxs(_components.th, {
            children: ["Resolved ", _jsx(_components.a, {
              href: "#agoraauthmode",
              children: _jsx(_components.code, {
                children: "authMode"
              })
            })]
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "customerId"
            }), " + ", _jsx(_components.code, {
              children: "customerSecret"
            })]
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"basic"'
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "authToken"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"token"'
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Neither"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"app-credentials"'
            })
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["Passing ", _jsx(_components.code, {
        children: "customerId"
      }), " without ", _jsx(_components.code, {
        children: "customerSecret"
      }), " throws an error."]
    }), `
`, _jsxs(_components.p, {
      children: ["See ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/conversational-ai/authentication",
        children: "Authentication"
      }), " for details on each mode."]
    }), `
`, _jsx(_components.h3, {
      id: "properties",
      children: "Properties"
    }), `
`, _jsxs(_components.p, {
      children: ["The following read-only properties are available on any ", _jsx(_components.code, {
        children: "AgoraClient"
      }), " instance."]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Property"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "appId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "The Agora App ID"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "appCertificate"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "The Agora App Certificate"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "authMode"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#agoraauthmode",
              children: _jsx(_components.code, {
                children: "AgoraAuthMode"
              })
            })
          }), _jsx(_components.td, {
            children: "The resolved authentication mode"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "area"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#area",
              children: _jsx(_components.code, {
                children: "Area"
              })
            })
          }), _jsx(_components.td, {
            children: "The configured region"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "pool"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Pool"
            })
          }), _jsx(_components.td, {
            children: "The underlying domain pool instance used for regional routing"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "methods",
      children: "Methods"
    }), `
`, _jsx(_components.p, {
      children: "The following methods are available in addition to the Fern-generated sub-client methods."
    }), `
`, _jsx(_components.h4, {
      id: "nextregion",
      children: _jsx(_components.code, {
        children: "nextRegion()"
      })
    }), `
`, _jsx(_components.p, {
      children: "Cycles to the next region prefix in the domain pool. Call this after a request failure to try a different regional endpoint."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "client."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "nextRegion"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "selectbestdomainsignal",
      children: _jsx(_components.code, {
        children: "selectBestDomain(signal?)"
      })
    }), `
`, _jsx(_components.p, {
      children: "Runs a DNS check to select the best domain suffix. Calls made within 30 seconds of the last successful selection are no-ops."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " client."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "selectBestDomain"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "signal"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AbortSignal"
            })
          }), _jsx(_components.td, {
            children: "Optional abort signal to cancel the DNS check"
          })]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "stopagentagentid",
      children: _jsx(_components.code, {
        children: "stopAgent(agentId)"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Stops an agent by ID without an ", _jsx(_components.code, {
        children: "AgentSession"
      }), " reference, for example, from an end-call handler. The method treats a ", _jsx(_components.code, {
        children: "404"
      }), " response as success."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "stopAgent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentId: string): "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Promise"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<void>"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "getcurrenturl",
      children: _jsx(_components.code, {
        children: "getCurrentURL()"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Returns the full API URL currently in use as a ", _jsx(_components.code, {
        children: "string"
      }), "."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
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
              children: " url"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " client."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getCurrentURL"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Example: 'https://api-us-west-1.agora.io/api/conversational-ai-agent'"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "sub-clients",
      children: "Sub-clients"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "AgoraClient"
      }), " exposes Fern-generated sub-clients for direct REST API access. You typically do not need these when using the ", _jsx(_components.a, {
        href: "#agent",
        children: "agentkit layer"
      }), "."]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Property"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "client.agents"
            })
          }), _jsx(_components.td, {
            children: "Start, stop, update, speak, interrupt, get history, list agents"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "client.agentManagement"
            })
          }), _jsxs(_components.td, {
            children: ["Inject instructions into a running agent (", _jsx(_components.code, {
              children: "think"
            }), ")"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "client.telephony"
            })
          }), _jsx(_components.td, {
            children: "Telephony operations"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "client.phoneNumbers"
            })
          }), _jsx(_components.td, {
            children: "Phone number management"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For full method signatures and request parameters, see the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/conversational-ai/join",
        children: "REST API reference"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "agent",
      children: "Agent"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "Agent"
      }), " is an immutable configuration object. Each builder method returns a new ", _jsx(_components.code, {
        children: "Agent"
      }), " instance — the original is never modified. Define one ", _jsx(_components.code, {
        children: "Agent"
      }), " at startup and call ", _jsx(_components.code, {
        children: "createSession()"
      }), " on it for each user conversation."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
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
              children: " { Agent } "
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
          })
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "constructor-1",
      children: "Constructor"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " Agent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: AgentOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "client"
      }), " is required. All other options are optional. Use the ", _jsx(_components.a, {
        href: "#builder-methods",
        children: "builder methods"
      }), " to set vendor configuration after construction."]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Default"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "client"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AgoraClient"
            })
          }), _jsx(_components.td, {
            children: "—"
          }), _jsxs(_components.td, {
            children: ["Required. Agora client used by ", _jsx(_components.code, {
              children: "createSession()"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "pipelineId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "undefined"
            })
          }), _jsxs(_components.td, {
            children: ["Published AI Studio pipeline ID used as the base configuration. ", _jsx(_components.code, {
              children: "SessionOptions.pipelineId"
            }), " overrides it"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "instructions"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "undefined"
            })
          }), _jsxs(_components.td, {
            children: ["Deprecated. Set ", _jsx(_components.code, {
              children: "systemMessages"
            }), " on the LLM vendor instead"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "greeting"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "undefined"
            })
          }), _jsxs(_components.td, {
            children: ["Deprecated. Set ", _jsx(_components.code, {
              children: "greetingMessage"
            }), " on the LLM or MLLM vendor instead"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "failureMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "undefined"
            })
          }), _jsxs(_components.td, {
            children: ["Deprecated. Set ", _jsx(_components.code, {
              children: "failureMessage"
            }), " on the LLM or MLLM vendor instead"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "maxHistory"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "undefined"
            })
          }), _jsxs(_components.td, {
            children: ["Deprecated. Set ", _jsx(_components.code, {
              children: "maxHistory"
            }), " on the LLM vendor instead"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "greetingConfigs"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LlmGreetingConfigs"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "undefined"
            })
          }), _jsxs(_components.td, {
            children: ["Deprecated. Set ", _jsx(_components.code, {
              children: "greetingConfigs"
            }), " on the LLM vendor instead"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turnDetection"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TurnDetectionConfig"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "undefined"
            })
          }), _jsx(_components.td, {
            children: "Voice activity detection settings"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "interruption"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "InterruptionConfig"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "undefined"
            })
          }), _jsx(_components.td, {
            children: "Unified interruption control settings"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "sal"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "SalConfig"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "undefined"
            })
          }), _jsx(_components.td, {
            children: "Selective Attention Locking configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "avatar"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AvatarConfig"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "undefined"
            })
          }), _jsx(_components.td, {
            children: "Avatar configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "advancedFeatures"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AdvancedFeatures"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "undefined"
            })
          }), _jsx(_components.td, {
            children: "Enable MLLM mode, AI-VAD, and other advanced features"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "parameters"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "SessionParamsInput"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "undefined"
            })
          }), _jsx(_components.td, {
            children: "Session parameters including silence and farewell config"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "geofence"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "GeofenceConfig"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "undefined"
            })
          }), _jsx(_components.td, {
            children: "Regional access restriction"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "labels"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Labels"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "undefined"
            })
          }), _jsx(_components.td, {
            children: "Custom key-value labels returned in notification callbacks"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "rtc"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "RtcConfig"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "undefined"
            })
          }), _jsx(_components.td, {
            children: "RTC media encryption"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "fillerWords"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "FillerWordsConfig"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "undefined"
            })
          }), _jsx(_components.td, {
            children: "Filler words played while waiting for the LLM response"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "builder-methods",
      children: "Builder methods"
    }), `
`, _jsxs(_components.p, {
      children: ["All builder methods return a ", _jsx(_components.strong, {
        children: "new"
      }), " ", _jsx(_components.code, {
        children: "Agent"
      }), " instance. The original is never modified."]
    }), `
`, _jsx(_components.h4, {
      id: "withllmvendor",
      children: _jsx(_components.code, {
        children: "withLlm(vendor)"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Sets the LLM vendor. Pass an instance of ", _jsx(_components.a, {
        href: "#openai",
        children: _jsx(_components.code, {
          children: "OpenAI"
        })
      }), ", ", _jsx(_components.a, {
        href: "#azureopenai",
        children: _jsx(_components.code, {
          children: "AzureOpenAI"
        })
      }), ", ", _jsx(_components.a, {
        href: "#anthropic",
        children: _jsx(_components.code, {
          children: "Anthropic"
        })
      }), ", ", _jsx(_components.a, {
        href: "#gemini",
        children: _jsx(_components.code, {
          children: "Gemini"
        })
      }), ", or any ", _jsx(_components.a, {
        href: "#other-llm-vendors",
        children: "other LLM vendor"
      }), "."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "withLlm"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(vendor: LlmVendor): Agent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "TTSSampleRate, TArea"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "withttsvendor",
      children: _jsx(_components.code, {
        children: "withTts(vendor)"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Sets the TTS vendor. The sample rate type is captured and tracked for ", _jsx(_components.a, {
        href: "#avatar-vendors",
        children: "avatar"
      }), " compatibility."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "withTts<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "SR"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " extends"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " number"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "vendor"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " TtsVendor"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "SR"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">)"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
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
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "SR"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "TArea"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "withsttvendor",
      children: _jsx(_components.code, {
        children: "withStt(vendor)"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Sets the STT vendor. Pass an instance of any ", _jsx(_components.a, {
        href: "#stt-vendors",
        children: "STT vendor class"
      }), "."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "withStt"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(vendor: SttVendor): Agent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "TTSSampleRate, TArea"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "withmllmvendor",
      children: _jsx(_components.code, {
        children: "withMllm(vendor)"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Sets the MLLM vendor for multimodal mode. Pass ", _jsx(_components.a, {
        href: "#openairealtime",
        children: _jsx(_components.code, {
          children: "OpenAIRealtime"
        })
      }), ", ", _jsx(_components.a, {
        href: "#azureopenairealtime",
        children: _jsx(_components.code, {
          children: "AzureOpenAIRealtime"
        })
      }), ", ", _jsx(_components.a, {
        href: "#geminilive",
        children: _jsx(_components.code, {
          children: "GeminiLive"
        })
      }), ", ", _jsx(_components.a, {
        href: "#vertexai",
        children: _jsx(_components.code, {
          children: "VertexAI"
        })
      }), ", ", _jsx(_components.a, {
        href: "#xaigrok",
        children: _jsx(_components.code, {
          children: "XaiGrok"
        })
      }), ", or ", _jsx(_components.a, {
        href: "#openaigptlive",
        children: _jsx(_components.code, {
          children: "OpenAIGPTLive"
        })
      }), ". Calling ", _jsx(_components.code, {
        children: "withMllm()"
      }), " automatically sets ", _jsx(_components.code, {
        children: "mllm.enable = true"
      }), ". MLLM mode does not require ", _jsx(_components.code, {
        children: "withTts()"
      }), " / ", _jsx(_components.code, {
        children: "withLlm()"
      }), " / ", _jsx(_components.code, {
        children: "withStt()"
      }), "."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Avatars are only supported with the cascading ASR + LLM + TTS pipeline. If you combine ", _jsx(_components.code, {
            children: "withMllm()"
          }), " with ", _jsx(_components.code, {
            children: "withAvatar()"
          }), ", the SDK throws an error when ", _jsx(_components.code, {
            children: "toProperties()"
          }), " or ", _jsx(_components.code, {
            children: "session.start()"
          }), " is called."]
        })
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: "(vendor: GlobalMllmVendor "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "|"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " CNMllmVendor): Agent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "TTSSampleRate, TArea"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "withavatarvendor",
      children: _jsx(_components.code, {
        children: "withAvatar(vendor)"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Sets the avatar vendor. The ", _jsx(_components.code, {
        children: "this"
      }), " constraint enforces at compile time that the agent's TTS sample rate matches the avatar's required rate."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Requires the cascading ASR + LLM + TTS pipeline. If you combine ", _jsx(_components.code, {
            children: "withAvatar()"
          }), " with ", _jsx(_components.code, {
            children: "withMllm()"
          }), ", the SDK throws an error when ", _jsx(_components.code, {
            children: "toProperties()"
          }), " or ", _jsx(_components.code, {
            children: "session.start()"
          }), " is called."]
        })
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "withAvatar"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "RequiredSR extends number"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  this"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": Agent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "RequiredSR"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
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
              children: "  vendor: AvatarVendor"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "RequiredSR"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "): Agent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "RequiredSR, TArea"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "withturndetectionconfig",
      children: _jsx(_components.code, {
        children: "withTurnDetection(config)"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Configures cascading-flow turn detection. Pass ", _jsx(_components.code, {
        children: "{ config: { start_of_speech, end_of_speech } }"
      }), " for SOS/EOS detection. Use ", _jsx(_components.code, {
        children: "withInterruption()"
      }), " for interruption behavior and MLLM vendor ", _jsx(_components.code, {
        children: "turnDetection"
      }), " for MLLM turn detection."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "withTurnDetection"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(config: TurnDetectionConfig): Agent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "TTSSampleRate, TArea"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "withinterruptionconfig",
      children: _jsx(_components.code, {
        children: "withInterruption(config)"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Configures unified interruption behavior using the top-level ", _jsx(_components.code, {
        children: "interruption"
      }), " object. Use this for ", _jsx(_components.code, {
        children: "start_of_speech"
      }), " and ", _jsx(_components.code, {
        children: "keywords"
      }), " interruption modes."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "withInterruption"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(config: InterruptionConfig): Agent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "TTSSampleRate, TArea"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "withinstructionstext",
      children: _jsx(_components.code, {
        children: "withInstructions(text)"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Overrides the LLM system prompt on a new ", _jsx(_components.code, {
        children: "Agent"
      }), " instance. Deprecated. Set ", _jsx(_components.code, {
        children: "systemMessages"
      }), " on the LLM vendor instead."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "withInstructions"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(instructions: string): Agent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "TTSSampleRate, TArea"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "withgreetingtext",
      children: _jsx(_components.code, {
        children: "withGreeting(text)"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Overrides the greeting message on a new ", _jsx(_components.code, {
        children: "Agent"
      }), " instance. Deprecated. Set ", _jsx(_components.code, {
        children: "greetingMessage"
      }), " on the LLM or MLLM vendor instead."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "withGreeting"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(greeting: string): Agent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "TTSSampleRate, TArea"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "other-builder-methods",
      children: "Other builder methods"
    }), `
`, _jsxs(_components.p, {
      children: ["The following methods follow the same pattern — each returns a new ", _jsx(_components.code, {
        children: "Agent"
      }), " instance with the updated configuration."]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Method"
          }), _jsx(_components.th, {
            children: "Parameter type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "withSal(config)"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "SalConfig"
            })
          }), _jsx(_components.td, {
            children: "Set Selective Attention Locking configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "withAdvancedFeatures(features)"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AdvancedFeatures"
            })
          }), _jsx(_components.td, {
            children: "Set advanced features"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "withTools(enabled = true)"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "Enable or disable MCP tool and custom tool invocation"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "withParameters(parameters)"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "SessionParamsInput"
            })
          }), _jsx(_components.td, {
            children: "Set session parameters"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "withAudioScenario(audioScenario)"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ParametersAudioScenario"
            })
          }), _jsxs(_components.td, {
            children: ["Set ", _jsx(_components.code, {
              children: "parameters.audio_scenario"
            }), ". Use the exported ", _jsx(_components.code, {
              children: "AudioScenario"
            }), " constants for discoverability, for example ", _jsx(_components.code, {
              children: "agent.withAudioScenario(AudioScenario.Aiserver)"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "withFailureMessage(message)"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsxs(_components.td, {
            children: ["Deprecated. Set ", _jsx(_components.code, {
              children: "failureMessage"
            }), " on the LLM or MLLM vendor instead"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "withMaxHistory(n)"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsxs(_components.td, {
            children: ["Deprecated. Set ", _jsx(_components.code, {
              children: "maxHistory"
            }), " on the LLM vendor instead. For Azure OpenAI Realtime MLLM, set ", _jsx(_components.code, {
              children: "maxHistory"
            }), " on the MLLM vendor"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "withGreetingConfigs(configs)"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LlmGreetingConfigs"
            })
          }), _jsxs(_components.td, {
            children: ["Deprecated. Set ", _jsx(_components.code, {
              children: "greetingConfigs"
            }), " on the LLM vendor instead"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "withGeofence(geofence)"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "GeofenceConfig"
            })
          }), _jsx(_components.td, {
            children: "Set geofence configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "withLabels(labels)"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Labels"
            })
          }), _jsx(_components.td, {
            children: "Set custom labels"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "withRtc(rtc)"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "RtcConfig"
            })
          }), _jsx(_components.td, {
            children: "Set RTC configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "withFillerWords(fillerWords)"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "FillerWordsConfig"
            })
          }), _jsx(_components.td, {
            children: "Set filler words configuration"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "createsessionoptions",
      children: _jsx(_components.code, {
        children: "createSession(options)"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Creates an ", _jsx(_components.a, {
        href: "#agentsession",
        children: _jsx(_components.code, {
          children: "AgentSession"
        })
      }), " for a channel using the agent's client. Doesn't start the agent. Call ", _jsx(_components.a, {
        href: "#start",
        children: _jsx(_components.code, {
          children: "session.start()"
        })
      }), " to join the channel."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "createSession"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: SessionOptions): AgentSession"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "SessionOptions"
      }), " fields:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "channel"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Channel name to join"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agentUid"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsxs(_components.td, {
            children: ["The agent's RTC UID. Must be a numeric string when ", _jsx(_components.code, {
              children: "token"
            }), " is omitted"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "remoteUids"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Remote user UIDs the agent listens and responds to"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "name"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Agent instance name sent to the Agora API. Defaults to ", _jsx(_components.code, {
              children: "agent-{timestamp}"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "token"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Pre-built RTC+RTM token. Omit to auto-generate from app credentials"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "expiresIn"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Token lifetime in seconds. Only applies when the token is auto-generated. Valid range: 1–86400. Use ", _jsx(_components.a, {
              href: "#expiresin",
              children: _jsx(_components.code, {
                children: "ExpiresIn"
              })
            }), " helpers for clarity"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "idleTimeout"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Seconds before the agent auto-exits when no audio is detected. ", _jsx(_components.code, {
              children: "0"
            }), " disables the timeout"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "enableStringUid"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Use string UIDs instead of numeric UIDs"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "preset"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "PresetInput"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Advanced project-specific presets. Use only when Agora provides a specific preset ID for your project. Most applications should not set this field"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "pipelineId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Published AI Studio pipeline ID to use as the base configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "debug"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Log API requests to the console"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "warn"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "(message: string) => void"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Custom warning logger; pass a no-op to silence warnings"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "preset"
      }), " is session-scoped because the underlying Agora start/join API applies presets per session, not per reusable ", _jsx(_components.code, {
        children: "Agent"
      }), " definition."]
    }), `
`, _jsx(_components.p, {
      children: "When you omit credentials for supported reseller-backed vendor models, AgentKit infers the matching session preset automatically:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Deepgram STT: ", _jsx(_components.code, {
          children: "nova-2"
        }), ", ", _jsx(_components.code, {
          children: "nova-3"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["OpenAI LLM: ", _jsx(_components.code, {
          children: "gpt-4o-mini"
        }), ", ", _jsx(_components.code, {
          children: "gpt-4.1-mini"
        }), ", ", _jsx(_components.code, {
          children: "gpt-5-nano"
        }), ", ", _jsx(_components.code, {
          children: "gpt-5-mini"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["OpenAI TTS: ", _jsx(_components.code, {
          children: "tts-1"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["MiniMax TTS: ", _jsx(_components.code, {
          children: "speech-2.6-turbo"
        }), ", ", _jsx(_components.code, {
          children: "speech-2.8-turbo"
        })]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "If you provide your own vendor API key for those same models, AgentKit keeps the request in BYOK mode and does not infer a preset."
    }), `
`, _jsx(_components.h3, {
      id: "properties-1",
      children: "Properties"
    }), `
`, _jsxs(_components.p, {
      children: ["Read-only properties available on any ", _jsx(_components.code, {
        children: "Agent"
      }), " instance."]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Property"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "pipelineId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string | undefined"
            })
          }), _jsx(_components.td, {
            children: "AI Studio pipeline ID"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "greetingConfigs"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LlmGreetingConfigs | undefined"
            })
          }), _jsx(_components.td, {
            children: "Greeting playback configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "instructions"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string | undefined"
            })
          }), _jsx(_components.td, {
            children: "LLM system prompt"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "greeting"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string | undefined"
            })
          }), _jsx(_components.td, {
            children: "Greeting message"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "failureMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string | undefined"
            })
          }), _jsx(_components.td, {
            children: "Message spoken when LLM fails"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "maxHistory"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number | undefined"
            })
          }), _jsx(_components.td, {
            children: "Maximum conversation history length"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "llm"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LlmConfig | undefined"
            })
          }), _jsx(_components.td, {
            children: "LLM configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tts"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TtsConfig | undefined"
            })
          }), _jsx(_components.td, {
            children: "TTS configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "stt"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "SttConfig | undefined"
            })
          }), _jsx(_components.td, {
            children: "STT configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "mllm"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MllmConfig | undefined"
            })
          }), _jsx(_components.td, {
            children: "MLLM configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "avatar"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AvatarConfig | undefined"
            })
          }), _jsx(_components.td, {
            children: "Avatar configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turnDetection"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TurnDetectionConfig | undefined"
            })
          }), _jsx(_components.td, {
            children: "Turn detection configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "interruption"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "InterruptionConfig | undefined"
            })
          }), _jsx(_components.td, {
            children: "Interruption configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "sal"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "SalConfig | undefined"
            })
          }), _jsx(_components.td, {
            children: "SAL configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "advancedFeatures"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AdvancedFeatures | undefined"
            })
          }), _jsx(_components.td, {
            children: "Advanced features"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "parameters"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "SessionParams | undefined"
            })
          }), _jsx(_components.td, {
            children: "Session parameters"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "geofence"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "GeofenceConfig | undefined"
            })
          }), _jsx(_components.td, {
            children: "Geofence configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "labels"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Labels | undefined"
            })
          }), _jsx(_components.td, {
            children: "Custom labels"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "rtc"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "RtcConfig | undefined"
            })
          }), _jsx(_components.td, {
            children: "RTC configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "fillerWords"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "FillerWordsConfig | undefined"
            })
          }), _jsx(_components.td, {
            children: "Filler words configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "config"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AgentOptions"
            })
          }), _jsx(_components.td, {
            children: "Full read-only configuration snapshot"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "topropertiesopts",
      children: _jsx(_components.code, {
        children: "toProperties(opts)"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Low-level method to convert the agent configuration to the Fern request format. Used internally by ", _jsx(_components.code, {
        children: "AgentSession.start()"
      }), ". You typically do not need to call this directly unless building custom request bodies."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "toProperties"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(opts): StartAgentsRequest.Properties"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["In cascading mode, throws if TTS or LLM isn't set. If you don't call ", _jsx(_components.code, {
        children: "withStt()"
      }), ", ASR defaults to ARES (", _jsx(_components.code, {
        children: "fengming"
      }), " for ", _jsx(_components.code, {
        children: "Area.CN"
      }), "). ", _jsx(_components.code, {
        children: "turnDetection.language"
      }), " defaults to ", _jsx(_components.code, {
        children: "en-US"
      }), " and is also sent as ", _jsx(_components.code, {
        children: "asr.language"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "type-aliases",
      children: "Type aliases"
    }), `
`, _jsxs(_components.p, {
      children: ["Public aliases over Fern-generated types include ", _jsx(_components.code, {
        children: "LlmConfig"
      }), ", ", _jsx(_components.code, {
        children: "SttConfig"
      }), ", ", _jsx(_components.code, {
        children: "AsrConfig"
      }), " (= ", _jsx(_components.code, {
        children: "SttConfig"
      }), "), ", _jsx(_components.code, {
        children: "MllmConfig"
      }), ", ", _jsx(_components.code, {
        children: "AvatarConfig"
      }), ", session/conversation types, and think types (", _jsx(_components.code, {
        children: "ThinkOnListeningAction"
      }), ", etc.)."]
    }), `
`, _jsxs(_components.p, {
      children: ["Think value constants: ", _jsx(_components.code, {
        children: "ThinkOnListeningActionInject"
      }), ", ", _jsx(_components.code, {
        children: "ThinkOnListeningActionInterrupt"
      }), ", ", _jsx(_components.code, {
        children: "ThinkOnListeningActionIgnore"
      }), ", ", _jsx(_components.code, {
        children: "ThinkOnThinkingActionInterrupt"
      }), ", ", _jsx(_components.code, {
        children: "ThinkOnThinkingActionIgnore"
      }), ", ", _jsx(_components.code, {
        children: "ThinkOnSpeakingActionInterrupt"
      }), ", ", _jsx(_components.code, {
        children: "ThinkOnSpeakingActionIgnore"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["The think action options also accept the string ", _jsx(_components.code, {
        children: "append"
      }), ", which has no convenience constant. With ", _jsx(_components.code, {
        children: "append"
      }), ", the instruction doesn't interrupt the current interaction. The agent waits for the current user turn, LLM inference, or TTS playback to finish, then appends the instruction to the context as a separate user message and starts a new turn."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "FillerWordsConfig"
      }), " supports static and generated filler words. Generated mode requires static fallback phrases, while ", _jsx(_components.code, {
        children: "generated_config"
      }), " and ", _jsx(_components.code, {
        children: "prompt"
      }), " are optional. Agora hosts the generation service, so you can't configure its model endpoint, API key, or model parameters. For the field structure, see ", _jsx(_components.a, {
        href: "/en/ai/build/shape-the-conversation/filler-words#configure-generated-filler-words",
        children: "Configure generated filler words"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "FillerWordsContentGeneratedConfig"
      }), " sets the conversation context for generated filler words. Use ", _jsx(_components.code, {
        children: "context_message_limit"
      }), " (", _jsx(_components.code, {
        children: "1"
      }), " to ", _jsx(_components.code, {
        children: "6"
      }), ", defaults to ", _jsx(_components.code, {
        children: "1"
      }), ") to set how many of the most recent conversation messages to use, counting the current turn's message, and ", _jsx(_components.code, {
        children: "history_character_limit"
      }), " (", _jsx(_components.code, {
        children: "0"
      }), " to ", _jsx(_components.code, {
        children: "10000"
      }), ", defaults to ", _jsx(_components.code, {
        children: "1000"
      }), ") to cap the combined characters of the earlier messages. For details, see ", _jsx(_components.a, {
        href: "/en/ai/build/shape-the-conversation/filler-words#widen-the-conversation-window",
        children: "Talking while waiting"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["Public aliases also include ", _jsx(_components.code, {
        children: "FillerWordsContentGeneratedConfig"
      }), " and the custom tool types ", _jsx(_components.code, {
        children: "LlmTool"
      }), ", ", _jsx(_components.code, {
        children: "LlmToolFunction"
      }), ", ", _jsx(_components.code, {
        children: "LlmToolServer"
      }), ", and ", _jsx(_components.code, {
        children: "LlmToolExecution"
      }), ". ", _jsx(_components.code, {
        children: "llm.tools"
      }), " is independent of MCP server configuration, but both require ", _jsx(_components.code, {
        children: "withTools(true)"
      }), " to enable tool calling."]
    }), `
`, _jsx(_components.h2, {
      id: "agentsession",
      children: "AgentSession"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "AgentSession"
      }), " manages the full lifecycle of a running agent. Create sessions using ", _jsx(_components.a, {
        href: "#createsessionoptions",
        children: _jsx(_components.code, {
          children: "agent.createSession()"
        })
      }), "; do not call the constructor directly."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
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
              children: " { AgentSession } "
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
          })
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "state-machine",
      children: "State machine"
    }), `
`, _jsx(_components.p, {
      children: "A session progresses through the following states:"
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "idle"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ──►"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " starting"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ──►"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " running"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ──►"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " stopping"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ──►"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " stopped"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "            │"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "                         │"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "            ▼"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "                         ▼"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "          error"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "                     error"
            })]
          })]
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Transition"
          }), _jsx(_components.th, {
            children: "Trigger"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "idle → starting"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "start()"
            }), " called"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "starting → running"
            })
          }), _jsx(_components.td, {
            children: "API responds with agent ID"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "starting → error"
            })
          }), _jsx(_components.td, {
            children: "API request fails"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "running → stopping"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "stop()"
            }), " called"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "stopping → stopped"
            })
          }), _jsx(_components.td, {
            children: "API confirms agent stopped"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "stopping → error"
            })
          }), _jsx(_components.td, {
            children: "Stop request fails with a non-404 error"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "start()"
      }), " can also be called from ", _jsx(_components.code, {
        children: "stopped"
      }), " or ", _jsx(_components.code, {
        children: "error"
      }), " state to restart the session. ", _jsx(_components.code, {
        children: "say()"
      }), ", ", _jsx(_components.code, {
        children: "interrupt()"
      }), ", ", _jsx(_components.code, {
        children: "update()"
      }), ", and ", _jsx(_components.code, {
        children: "think()"
      }), " reject on failure but don't change the session state."]
    }), `
`, _jsx(_components.h3, {
      id: "methods-1",
      children: "Methods"
    }), `
`, _jsxs(_components.p, {
      children: ["The following methods are available on an ", _jsx(_components.code, {
        children: "AgentSession"
      }), " instance."]
    }), `
`, _jsx(_components.h4, {
      id: "start",
      children: _jsx(_components.code, {
        children: "start()"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Starts the agent session. Generates tokens if not provided, sends the start request, and returns the agent ID. Resolves explicit ", _jsx(_components.code, {
        children: "preset"
      }), " values and also infers reseller presets from supported vendor configs when credentials are omitted."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "start"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(): "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Promise"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "string"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Transitions: ", _jsx(_components.code, {
          children: "idle"
        }), " / ", _jsx(_components.code, {
          children: "stopped"
        }), " / ", _jsx(_components.code, {
          children: "error"
        }), " → ", _jsx(_components.code, {
          children: "starting"
        }), " → ", _jsx(_components.code, {
          children: "running"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Throws if called in ", _jsx(_components.code, {
          children: "starting"
        }), ", ", _jsx(_components.code, {
          children: "running"
        }), ", or ", _jsx(_components.code, {
          children: "stopping"
        }), " state"]
      }), `
`, _jsx(_components.li, {
        children: "Throws if avatar config is invalid (wrong TTS sample rate)"
      }), `
`, _jsxs(_components.li, {
        children: ["Throws if no ", _jsx(_components.code, {
          children: "token"
        }), " is provided and the client has no ", _jsx(_components.code, {
          children: "appCertificate"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Throws if ", _jsx(_components.code, {
          children: "agentUid"
        }), " (or avatar ", _jsx(_components.code, {
          children: "agoraUid"
        }), ") isn't numeric when tokens are auto-generated"]
      }), `
`, _jsxs(_components.li, {
        children: ["Throws if ", _jsx(_components.code, {
          children: "appId"
        }), " or ", _jsx(_components.code, {
          children: "appCertificate"
        }), " isn't exactly 32 characters when tokens are auto-generated"]
      }), `
`, _jsx(_components.li, {
        children: "Throws if MLLM is enabled together with an enabled avatar — avatars are only supported with the cascading ASR + LLM + TTS pipeline"
      }), `
`, _jsxs(_components.li, {
        children: ["Applies explicit ", _jsx(_components.code, {
          children: "preset"
        }), " values when provided and sends Agora-managed configuration when supported vendor credentials are omitted"]
      }), `
`, _jsxs(_components.li, {
        children: ["Fills generic avatar ", _jsx(_components.code, {
          children: "agora_appid"
        }), " and ", _jsx(_components.code, {
          children: "agora_channel"
        }), " from the session when omitted"]
      }), `
`, _jsxs(_components.li, {
        children: ["Generates avatar ", _jsx(_components.code, {
          children: "agora_token"
        }), " for ", _jsx(_components.code, {
          children: "HeyGenAvatar"
        }), ", ", _jsx(_components.code, {
          children: "LiveAvatarAvatar"
        }), ", ", _jsx(_components.code, {
          children: "GenericAvatar"
        }), ", ", _jsx(_components.code, {
          children: "Tavus"
        }), ", ", _jsx(_components.code, {
          children: "Protoface"
        }), ", and ", _jsx(_components.code, {
          children: "LemonSlice"
        }), " when ", _jsx(_components.code, {
          children: "agoraToken"
        }), " is omitted and the client has an ", _jsx(_components.code, {
          children: "appCertificate"
        }), ". Other vendors (", _jsx(_components.code, {
          children: "AkoolAvatar"
        }), ", ", _jsx(_components.code, {
          children: "AnamAvatar"
        }), ") never receive an auto-generated token."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "stop",
      children: _jsx(_components.code, {
        children: "stop()"
      })
    }), `
`, _jsx(_components.p, {
      children: "Stops the agent session and removes the agent from the channel. If the agent has already stopped — for example due to idle timeout — resolves silently rather than throwing a 404 error."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "stop"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(): "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Promise"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<void>"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Transitions: ", _jsx(_components.code, {
          children: "running"
        }), " → ", _jsx(_components.code, {
          children: "stopping"
        }), " → ", _jsx(_components.code, {
          children: "stopped"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Throws if called outside ", _jsx(_components.code, {
          children: "running"
        }), " state"]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "saytext-options",
      children: _jsx(_components.code, {
        children: "say(text, options?)"
      })
    }), `
`, _jsx(_components.p, {
      children: "Instructs the agent to speak the given text."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "say"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(text: string, options"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " SayOptions): "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Promise"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<void>"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "text"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "The text for the agent to speak"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "options.priority"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#speakpriority",
              children: _jsx(_components.code, {
                children: "SpeakPriority"
              })
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Message priority"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "options.interruptable"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Whether this message can be interrupted by the user"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Only valid in ", _jsx(_components.code, {
          children: "running"
        }), " state"]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "interrupt",
      children: _jsx(_components.code, {
        children: "interrupt()"
      })
    }), `
`, _jsx(_components.p, {
      children: "Interrupts the agent's current speech."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "interrupt"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(): "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Promise"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<void>"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Only valid in ", _jsx(_components.code, {
          children: "running"
        }), " state"]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "thinktext-options",
      children: _jsx(_components.code, {
        children: "think(text, options?)"
      })
    }), `
`, _jsx(_components.p, {
      children: "Injects a custom text instruction into the running agent."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "think"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(text: string, options"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ThinkOptions): "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Promise"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "ThinkResponse"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "text"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "The instruction text"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "options.on_listening_action"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ThinkOnListeningAction"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Action when the agent is listening: ", _jsx(_components.code, {
              children: "inject"
            }), ", ", _jsx(_components.code, {
              children: "interrupt"
            }), ", ", _jsx(_components.code, {
              children: "ignore"
            }), ", or ", _jsx(_components.code, {
              children: "append"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "options.on_thinking_action"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ThinkOnThinkingAction"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Action when the agent is thinking: ", _jsx(_components.code, {
              children: "interrupt"
            }), ", ", _jsx(_components.code, {
              children: "ignore"
            }), ", or ", _jsx(_components.code, {
              children: "append"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "options.on_speaking_action"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ThinkOnSpeakingAction"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Action when the agent is speaking: ", _jsx(_components.code, {
              children: "interrupt"
            }), ", ", _jsx(_components.code, {
              children: "ignore"
            }), ", or ", _jsx(_components.code, {
              children: "append"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "options.interruptable"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Whether the user can interrupt the resulting response"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "options.metadata"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, string>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Custom key-value metadata"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Only valid in ", _jsx(_components.code, {
          children: "running"
        }), " state"]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "updateconfig",
      children: _jsx(_components.code, {
        children: "update(config)"
      })
    }), `
`, _jsx(_components.p, {
      children: "Updates the agent configuration mid-session without restarting. Accepts a partial configuration object in REST API format."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "update"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(config: AgentConfigUpdate): "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Promise"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<void>"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Only valid in ", _jsx(_components.code, {
          children: "running"
        }), " state"]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "gethistory",
      children: _jsx(_components.code, {
        children: "getHistory()"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Fetches the conversation history for this session. Requires a valid agent ID — ", _jsx(_components.code, {
        children: "start()"
      }), " must have been called successfully."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getHistory"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(): "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Promise"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "ConversationHistory"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "getturnsoptions",
      children: _jsx(_components.code, {
        children: "getTurns(options?)"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Fetches turn-by-turn analytics for this session, including start/end events and latency metrics. Requires a valid agent ID and ", _jsx(_components.code, {
        children: "start()"
      }), " must have been called successfully."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getTurns"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " GetTurnsOptions): "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Promise"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "ConversationTurns"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "options.page_index"
        }), ": page number, starting from ", _jsx(_components.code, {
          children: "1"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "options.page_size"
        }), ": number of turns per page"]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "getallturnsoptions",
      children: _jsx(_components.code, {
        children: "getAllTurns(options?)"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Fetches all turn analytics pages and merges the ", _jsx(_components.code, {
        children: "turns"
      }), " array. Requires a valid agent ID and ", _jsx(_components.code, {
        children: "start()"
      }), " must have been called successfully."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getAllTurns"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Omit"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "GetTurnsOptions, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"page_index"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "): "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Promise"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "ConversationTurns"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Requires a valid ", _jsx(_components.code, {
          children: "agentId"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["For very long sessions, prefer processing pages with ", _jsx(_components.code, {
          children: "getTurns()"
        }), " to avoid holding all turns in memory"]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "getinfo",
      children: _jsx(_components.code, {
        children: "getInfo()"
      })
    }), `
`, _jsx(_components.p, {
      children: "Fetches current agent metadata from the API. Requires a valid agent ID."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getInfo"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(): "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Promise"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "SessionInfo"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "onevent-handler",
      children: _jsx(_components.code, {
        children: "on(event, handler)"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Subscribes to a session event. Register handlers ", _jsx(_components.strong, {
        children: "before"
      }), " calling ", _jsx(_components.code, {
        children: "start()"
      }), " to avoid missing the ", _jsx(_components.code, {
        children: "started"
      }), " event."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "on"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "T"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">(event: AgentSessionEvent, handler: AgentSessionEventHandler"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "T"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "): "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "void"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "offevent-handler",
      children: _jsx(_components.code, {
        children: "off(event, handler)"
      })
    }), `
`, _jsx(_components.p, {
      children: "Unsubscribes a previously registered event handler."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "off"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "T"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">(event: AgentSessionEvent, handler: AgentSessionEventHandler"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "T"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "): "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "void"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "events",
      children: "Events"
    }), `
`, _jsxs(_components.p, {
      children: ["The session emits the following events. See ", _jsx(_components.a, {
        href: "#agentsessionevent",
        children: _jsx(_components.code, {
          children: "AgentSessionEvent"
        })
      }), " and ", _jsx(_components.a, {
        href: "#agentsessioneventhandler",
        children: _jsx(_components.code, {
          children: "AgentSessionEventHandler"
        })
      }), " for type details."]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Event"
          }), _jsx(_components.th, {
            children: "Payload type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"started"'
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "{ agentId: string }"
            })
          }), _jsx(_components.td, {
            children: "Agent successfully joined the channel"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"stopped"'
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "{ agentId: string }"
            })
          }), _jsx(_components.td, {
            children: "Agent left the channel"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"error"'
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "unknown"
            })
          }), _jsxs(_components.td, {
            children: ["The error thrown during ", _jsx(_components.code, {
              children: "start()"
            }), " or ", _jsx(_components.code, {
              children: "stop()"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "properties-2",
      children: "Properties"
    }), `
`, _jsxs(_components.p, {
      children: ["The following read-only properties are available on any ", _jsx(_components.code, {
        children: "AgentSession"
      }), " instance."]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Property"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "status"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"idle" | "starting" | "running" | "stopping" | "stopped" | "error"'
            })
          }), _jsxs(_components.td, {
            children: ["Current session state. One of ", _jsx(_components.code, {
              children: '"idle"'
            }), ", ", _jsx(_components.code, {
              children: '"starting"'
            }), ", ", _jsx(_components.code, {
              children: '"running"'
            }), ", ", _jsx(_components.code, {
              children: '"stopping"'
            }), ", ", _jsx(_components.code, {
              children: '"stopped"'
            }), ", ", _jsx(_components.code, {
              children: '"error"'
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "id"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string | null"
            })
          }), _jsxs(_components.td, {
            children: ["Agent ID, populated after ", _jsx(_components.code, {
              children: "start()"
            }), " resolves"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agent"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Agent"
            })
          }), _jsx(_components.td, {
            children: "The agent configuration this session was created from"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "appId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "The Agora App ID for this session"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "raw"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AgentsClient"
            })
          }), _jsxs(_components.td, {
            children: ["Direct access to the Fern-generated ", _jsx(_components.code, {
              children: "AgentsClient"
            }), " for advanced operations"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "rawAgentManagement"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AgentManagementClient"
            })
          }), _jsx(_components.td, {
            children: "Direct access to the Fern-generated agent management client"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.h4, {
      id: "using-sessionraw",
      children: ["Using ", _jsx(_components.code, {
        children: "session.raw"
      })]
    }), `
`, _jsx(_components.p, {
      children: "Access the generated REST client to call endpoints not yet wrapped:"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " session.raw."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getTurns"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "({"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  appid: session.appId,"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  agentId: session.id"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "!"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "});"
            })
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["You must pass ", _jsx(_components.code, {
        children: "appid"
      }), " and ", _jsx(_components.code, {
        children: "agentId"
      }), " manually when using raw methods."]
    }), `
`, _jsx(_components.h3, {
      id: "presets-and-byok",
      children: "Presets and BYOK"
    }), `
`, _jsxs(_components.p, {
      children: ["Prefer configuring vendors on the ", _jsx(_components.code, {
        children: "Agent"
      }), " builder. When you omit credentials for supported Agora-managed models, AgentKit sends the matching Agora-managed configuration at session start."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "preset"
      }), " is an advanced session option for project-specific settings, not for selecting Agora-managed models. Most applications should use the builder instead."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Omit vendor credentials on the builder for supported Agora-managed models."
      }), `
`, _jsx(_components.li, {
        children: "Provide vendor API keys when you want BYOK."
      }), `
`, _jsxs(_components.li, {
        children: ["Pass ", _jsx(_components.code, {
          children: "preset"
        }), " on ", _jsx(_components.code, {
          children: "agent.createSession(...)"
        }), " only when you need to access specific project-specific settings."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Supported Agora-managed models:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Deepgram STT: ", _jsx(_components.code, {
          children: "nova-2"
        }), ", ", _jsx(_components.code, {
          children: "nova-3"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["OpenAI LLM: ", _jsx(_components.code, {
          children: "gpt-4o-mini"
        }), ", ", _jsx(_components.code, {
          children: "gpt-4.1-mini"
        }), ", ", _jsx(_components.code, {
          children: "gpt-5-nano"
        }), ", ", _jsx(_components.code, {
          children: "gpt-5-mini"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["OpenAI TTS: ", _jsx(_components.code, {
          children: "tts-1"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["MiniMax TTS: ", _jsx(_components.code, {
          children: "speech-2.6-turbo"
        }), ", ", _jsx(_components.code, {
          children: "speech-2.8-turbo"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "vendors",
      children: "Vendors"
    }), `
`, _jsxs(_components.p, {
      children: ["All vendor classes are imported from ", _jsx(_components.code, {
        children: "agora-agents"
      }), ". Pass vendor instances to the ", _jsx(_components.a, {
        href: "#builder-methods",
        children: "Agent builder methods"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "llm-vendors",
      children: "LLM vendors"
    }), `
`, _jsxs(_components.p, {
      children: ["Use with ", _jsx(_components.a, {
        href: "#withllmvendor",
        children: _jsx(_components.code, {
          children: "withLlm()"
        })
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "openai",
      children: "OpenAI"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " OpenAI"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: OpenAIOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Usually"
          }), _jsx(_components.td, {
            children: "OpenAI API key. Optional for Agora-managed preset models"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "model"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsxs(_components.td, {
            children: ["Model name, for example ", _jsx(_components.code, {
              children: "'gpt-4o-mini'"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "url"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Conditional"
          }), _jsxs(_components.td, {
            children: ["API endpoint URL. Required when ", _jsx(_components.code, {
              children: "apiKey"
            }), " is set (BYOK); default ", _jsx(_components.code, {
              children: "https://api.openai.com/v1/chat/completions"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "maxHistory"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Maximum conversation history to cache"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "temperature"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Sampling temperature (0.0–2.0)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "topP"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Nucleus sampling (0.0–1.0)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "maxTokens"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Maximum tokens to generate"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "systemMessages"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional system messages"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "greetingMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Agent greeting message"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "failureMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Message spoken when the LLM call fails"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "inputModalities"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Input modalities. Default: ", _jsx(_components.code, {
              children: '["text"]'
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "outputModalities"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Output modalities"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "params"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional LLM parameters passed to the model"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "headers"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, string>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Custom HTTP headers forwarded to the LLM provider"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "vendor"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Vendor override"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "mcpServers"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "MCP server connections"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tools"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LlmTool[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Synchronous custom tool definitions the LLM can call. Requires ", _jsx(_components.code, {
              children: "withTools(true)"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "greetingConfigs"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LlmGreetingConfigs"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Greeting playback configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "templateVariables"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, string>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Template variables for messages. Custom tools can reference them with ", _jsx(_components.code, {
              children: "{{template_variables.<name>}}"
            })]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "apiKey"
      }), " is optional for the following reseller preset models: ", _jsx(_components.code, {
        children: "gpt-4o-mini"
      }), ", ", _jsx(_components.code, {
        children: "gpt-4.1-mini"
      }), ", ", _jsx(_components.code, {
        children: "gpt-5-nano"
      }), ", ", _jsx(_components.code, {
        children: "gpt-5-mini"
      }), ". If ", _jsx(_components.code, {
        children: "apiKey"
      }), " is omitted for one of those models, AgentKit infers the matching session preset. This no-key branch is only available with the default OpenAI endpoint and without a custom vendor hint. If ", _jsx(_components.code, {
        children: "apiKey"
      }), " is provided, AgentKit uses standard BYOK behavior instead."]
    }), `
`, _jsx(_components.h4, {
      id: "azureopenai",
      children: "AzureOpenAI"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " AzureOpenAI"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: AzureOpenAIOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Azure OpenAI API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "model"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Model or deployment name"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "resourceName"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Conditional"
          }), _jsxs(_components.td, {
            children: ["Azure resource name. Required unless ", _jsx(_components.code, {
              children: "endpoint"
            }), " is set"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "endpoint"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Conditional"
          }), _jsxs(_components.td, {
            children: ["Full Azure base URL. Takes precedence over ", _jsx(_components.code, {
              children: "resourceName"
            }), "; required unless ", _jsx(_components.code, {
              children: "resourceName"
            }), " is set"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "deploymentName"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Deployment name in Azure"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiVersion"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Azure API version. Default: ", _jsx(_components.code, {
              children: "'2024-08-01-preview'"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "maxHistory"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Maximum conversation history to cache"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "temperature"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Sampling temperature (0.0–2.0)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "topP"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Nucleus sampling (0.0–1.0)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "maxTokens"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Maximum tokens to generate"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "systemMessages"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional system messages"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "greetingMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Agent greeting message"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "failureMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Message spoken when the LLM call fails"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "inputModalities"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Input modalities. Default: ", _jsx(_components.code, {
              children: '["text"]'
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "outputModalities"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Output modalities"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "params"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional LLM parameters"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "headers"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, string>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Custom HTTP headers forwarded to the LLM provider"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "vendor"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Vendor override. Defaults to ", _jsx(_components.code, {
              children: "azure"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "mcpServers"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "MCP server connections"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tools"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LlmTool[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Synchronous custom tool definitions the LLM can call. Requires ", _jsx(_components.code, {
              children: "withTools(true)"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "greetingConfigs"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LlmGreetingConfigs"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Greeting playback configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "templateVariables"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, string>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Template variables for messages. Custom tools can reference them with ", _jsx(_components.code, {
              children: "{{template_variables.<name>}}"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "anthropic",
      children: "Anthropic"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " Anthropic"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: AnthropicOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Anthropic API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "model"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Model name"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "url"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Anthropic messages endpoint URL"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "maxTokens"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Maximum tokens to generate"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "headers"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, string>"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsxs(_components.td, {
            children: ["Request headers, including ", _jsx(_components.code, {
              children: "anthropic-version"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "maxHistory"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Maximum conversation history to cache"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "temperature"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Sampling temperature (0.0–1.0)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "topP"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Nucleus sampling (0.0–1.0)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "systemMessages"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional system messages"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "greetingMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Agent greeting message"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "failureMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Message spoken when the LLM call fails"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "inputModalities"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Input modalities. Default: ", _jsx(_components.code, {
              children: '["text"]'
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "outputModalities"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Output modalities"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "params"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional LLM parameters"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "vendor"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Vendor override"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "mcpServers"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "MCP server connections"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tools"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LlmTool[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Synchronous custom tool definitions the LLM can call. Requires ", _jsx(_components.code, {
              children: "withTools(true)"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "greetingConfigs"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LlmGreetingConfigs"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Greeting playback configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "templateVariables"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, string>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Template variables for messages. Custom tools can reference them with ", _jsx(_components.code, {
              children: "{{template_variables.<name>}}"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "gemini",
      children: "Gemini"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " Gemini"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: GeminiOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Google API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "model"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsxs(_components.td, {
            children: ["Model name, for example ", _jsx(_components.code, {
              children: "'gemini-pro'"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "url"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["API endpoint URL. Default: ", _jsx(_components.code, {
              children: "https://generativelanguage.googleapis.com/v1beta/models/{model}:streamGenerateContent?alt=sse&key={apiKey}"
            }), ", with the API key in the URL"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "maxHistory"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Maximum conversation history to cache"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "temperature"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Sampling temperature (0.0–2.0)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "topP"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Nucleus sampling (0.0–1.0)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "topK"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Top-k sampling"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "maxOutputTokens"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Maximum output tokens to generate"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "systemMessages"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional system messages"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "greetingMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Agent greeting message"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "failureMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Message spoken when the LLM call fails"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "inputModalities"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Input modalities. Default: ", _jsx(_components.code, {
              children: '["text"]'
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "outputModalities"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Output modalities"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "params"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional LLM parameters"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "headers"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, string>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Custom HTTP headers forwarded to the LLM provider"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "vendor"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Vendor override"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "mcpServers"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "MCP server connections"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tools"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LlmTool[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Synchronous custom tool definitions the LLM can call. Requires ", _jsx(_components.code, {
              children: "withTools(true)"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "greetingConfigs"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LlmGreetingConfigs"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Greeting playback configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "templateVariables"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, string>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Template variables for messages. Custom tools can reference them with ", _jsx(_components.code, {
              children: "{{template_variables.<name>}}"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "other-llm-vendors",
      children: "Other LLM vendors"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Class"
          }), _jsx(_components.th, {
            children: "Provider"
          }), _jsx(_components.th, {
            children: "Key options"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Groq"
            })
          }), _jsx(_components.td, {
            children: "Groq"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "apiKey"
            }), ", ", _jsx(_components.code, {
              children: "model"
            }), ", ", _jsx(_components.code, {
              children: "url"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "VertexAILLM"
            })
          }), _jsx(_components.td, {
            children: "Google Vertex AI"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "apiKey"
            }), ", ", _jsx(_components.code, {
              children: "model"
            }), ", ", _jsx(_components.code, {
              children: "projectId"
            }), ", ", _jsx(_components.code, {
              children: "location"
            }), ", ", _jsx(_components.code, {
              children: "url?"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AmazonBedrock"
            })
          }), _jsx(_components.td, {
            children: "Amazon Bedrock"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "accessKey"
            }), ", ", _jsx(_components.code, {
              children: "secretKey"
            }), ", ", _jsx(_components.code, {
              children: "region"
            }), ", ", _jsx(_components.code, {
              children: "model"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Dify"
            })
          }), _jsx(_components.td, {
            children: "Dify"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "apiKey"
            }), ", ", _jsx(_components.code, {
              children: "url"
            }), ", ", _jsx(_components.code, {
              children: "model"
            }), ", ", _jsx(_components.code, {
              children: "user?"
            }), ", ", _jsx(_components.code, {
              children: "conversationId?"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "CustomLLM"
            })
          }), _jsx(_components.td, {
            children: "OpenAI-compatible LLM"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "apiKey"
            }), ", ", _jsx(_components.code, {
              children: "model"
            }), ", ", _jsx(_components.code, {
              children: "url"
            })]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "Groq"
      }), " and ", _jsx(_components.code, {
        children: "CustomLLM"
      }), " share ", _jsx(_components.code, {
        children: "OpenAI"
      }), "'s option shape; ", _jsx(_components.code, {
        children: "VertexAILLM"
      }), " mirrors ", _jsx(_components.code, {
        children: "Gemini"
      }), ". All accept common LLM fields, such as ", _jsx(_components.code, {
        children: "systemMessages"
      }), ", ", _jsx(_components.code, {
        children: "greetingMessage"
      }), ", ", _jsx(_components.code, {
        children: "failureMessage"
      }), ", ", _jsx(_components.code, {
        children: "maxHistory"
      }), ", ", _jsx(_components.code, {
        children: "params"
      }), ", ", _jsx(_components.code, {
        children: "headers"
      }), ", and ", _jsx(_components.code, {
        children: "tools"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "tools"
      }), " declares custom tools the LLM can choose to call. Each tool includes a model-visible function definition and the server configuration for a synchronous ", _jsx(_components.code, {
        children: "GET"
      }), " or ", _jsx(_components.code, {
        children: "POST"
      }), " request. ", _jsx(_components.code, {
        children: "withTools(true)"
      }), " applies to both ", _jsx(_components.code, {
        children: "tools"
      }), " and MCP server configuration. For more information, see ", _jsx(_components.a, {
        href: "/en/ai/build/tools/custom-tools",
        children: "Call custom tools"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "tts-vendors",
      children: "TTS vendors"
    }), `
`, _jsxs(_components.p, {
      children: ["Use with ", _jsx(_components.a, {
        href: "#withttsvendor",
        children: _jsx(_components.code, {
          children: "withTts()"
        })
      }), ". The ", _jsx(_components.code, {
        children: "sampleRate"
      }), " option determines avatar compatibility — see ", _jsx(_components.a, {
        href: "#withavatarvendor",
        children: _jsx(_components.code, {
          children: "withAvatar()"
        })
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "elevenlabstts",
      children: "ElevenLabsTTS"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "new"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ElevenLabsTTS<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "SR"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " extends"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " ElevenLabsSampleRate"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "options"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " ElevenLabsTTSOptions"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "SR"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "key"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "ElevenLabs API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "modelId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsxs(_components.td, {
            children: ["Model ID, for example ", _jsx(_components.code, {
              children: "'eleven_flash_v2_5'"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "voiceId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Voice ID"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "baseUrl"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "WebSocket base URL"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "sampleRate"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "16000 | 22050 | 24000 | 44100"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Audio sample rate in Hz"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "optimizeStreamingLatency"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Latency optimization level (0–4)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "stability"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Voice stability (0.0–1.0)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "similarityBoost"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Voice similarity boost (0.0–1.0)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "style"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Voice style exaggeration (0.0–1.0)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "useSpeakerBoost"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Enable speaker boost"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "skipPatterns"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Skip patterns for bracketed content"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "microsofttts",
      children: "MicrosoftTTS"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "new"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " MicrosoftTTS<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "SR"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " extends"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " MicrosoftSampleRate"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "options"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " MicrosoftTTSOptions"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "SR"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "key"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Azure Speech API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "region"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsxs(_components.td, {
            children: ["Azure region, for example ", _jsx(_components.code, {
              children: "'eastus'"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "voiceName"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsxs(_components.td, {
            children: ["Voice name, for example ", _jsx(_components.code, {
              children: "'en-US-JennyNeural'"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "sampleRate"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "16000 | 24000 | 48000"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Audio sample rate in Hz"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "speed"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Speaking rate multiplier"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "volume"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Audio volume"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "skipPatterns"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Skip patterns for bracketed content"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "openaitts",
      children: "OpenAITTS"
    }), `
`, _jsx(_components.p, {
      children: "Fixed at 24,000 Hz — no configurable sample rate."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " OpenAITTS"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: OpenAITTSOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Usually"
          }), _jsx(_components.td, {
            children: "OpenAI API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "voice"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsxs(_components.td, {
            children: ["Voice name: ", _jsx(_components.code, {
              children: "'alloy'"
            }), ", ", _jsx(_components.code, {
              children: "'echo'"
            }), ", ", _jsx(_components.code, {
              children: "'fable'"
            }), ", ", _jsx(_components.code, {
              children: "'onyx'"
            }), ", ", _jsx(_components.code, {
              children: "'nova'"
            }), ", or ", _jsx(_components.code, {
              children: "'shimmer'"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "model"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Model name. Required (with ", _jsx(_components.code, {
              children: "apiKey"
            }), " and ", _jsx(_components.code, {
              children: "baseUrl"
            }), ") for BYOK"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "baseUrl"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Endpoint URL. Required (with ", _jsx(_components.code, {
              children: "apiKey"
            }), " and ", _jsx(_components.code, {
              children: "model"
            }), ") for BYOK"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "instructions"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Custom voice instructions"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "speed"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Speech speed multiplier"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "skipPatterns"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Skip patterns for bracketed content"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "apiKey"
      }), " is optional only for the reseller-backed ", _jsx(_components.code, {
        children: "tts-1"
      }), " preset path. If omitted with ", _jsx(_components.code, {
        children: "model: 'tts-1'"
      }), " or no explicit model, AgentKit infers ", _jsx(_components.code, {
        children: "openai_tts_1"
      }), ". If provided, the request stays in BYOK mode."]
    }), `
`, _jsx(_components.h4, {
      id: "cartesiatts",
      children: "CartesiaTTS"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "new"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " CartesiaTTS<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "SR"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " extends"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " CartesiaSampleRate"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "options"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " CartesiaTTSOptions"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "SR"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Cartesia API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "voiceId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsxs(_components.td, {
            children: ["Voice ID (serialized as ", _jsx(_components.code, {
              children: '{"mode": "id", "id": "..."}'
            }), ")"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "modelId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Model ID"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "baseUrl"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "WebSocket URL"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "language"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Target language"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "sampleRate"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "8000 | 16000 | 22050 | 24000 | 44100 | 48000"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Audio sample rate in Hz"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "skipPatterns"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Skip patterns for bracketed content"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "other-tts-vendors",
      children: "Other TTS vendors"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Class"
          }), _jsx(_components.th, {
            children: "Key parameters"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "GoogleTTS"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "key"
            }), ", ", _jsx(_components.code, {
              children: "voiceName"
            }), ", ", _jsx(_components.code, {
              children: "languageCode?"
            }), ", ", _jsx(_components.code, {
              children: "sampleRate?"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AmazonTTS"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "accessKey"
            }), ", ", _jsx(_components.code, {
              children: "secretKey"
            }), ", ", _jsx(_components.code, {
              children: "region"
            }), ", ", _jsx(_components.code, {
              children: "voiceId"
            }), ", ", _jsx(_components.code, {
              children: "engine"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "DeepgramTTS"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "apiKey"
            }), ", ", _jsx(_components.code, {
              children: "model"
            }), ", ", _jsx(_components.code, {
              children: "baseUrl?"
            }), ", ", _jsx(_components.code, {
              children: "sampleRate?"
            }), ", ", _jsx(_components.code, {
              children: "additionalParams?"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "HumeAITTS"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "key"
            }), ", ", _jsx(_components.code, {
              children: "voiceId"
            }), ", ", _jsx(_components.code, {
              children: "provider"
            }), ", ", _jsx(_components.code, {
              children: "configId?"
            }), ", ", _jsx(_components.code, {
              children: "baseUrl?"
            }), ", ", _jsx(_components.code, {
              children: "speed?"
            }), ", ", _jsx(_components.code, {
              children: "trailingSilence?"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "RimeTTS"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "key"
            }), ", ", _jsx(_components.code, {
              children: "speaker"
            }), ", ", _jsx(_components.code, {
              children: "modelId"
            }), ", ", _jsx(_components.code, {
              children: "baseUrl?"
            }), ", ", _jsx(_components.code, {
              children: "credentialMode?"
            }), ". In managed mode (", _jsx(_components.code, {
              children: "CredentialMode.Managed"
            }), "), only ", _jsx(_components.code, {
              children: "modelId"
            }), " and ", _jsx(_components.code, {
              children: "baseUrl"
            }), " are required"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "FishAudioTTS"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "key"
            }), ", ", _jsx(_components.code, {
              children: "referenceId"
            }), ", ", _jsx(_components.code, {
              children: "backend"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MiniMaxTTS"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "key?"
            }), ", ", _jsx(_components.code, {
              children: "groupId?"
            }), ", ", _jsx(_components.code, {
              children: "model"
            }), ", ", _jsx(_components.code, {
              children: "voiceId?"
            }), ", ", _jsx(_components.code, {
              children: "url?"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MurfTTS"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "key"
            }), ", ", _jsx(_components.code, {
              children: "voiceId?"
            }), ", ", _jsx(_components.code, {
              children: "baseUrl?"
            }), ", ", _jsx(_components.code, {
              children: "locale?"
            }), ", ", _jsx(_components.code, {
              children: "rate?"
            }), ", ", _jsx(_components.code, {
              children: "pitch?"
            }), ", ", _jsx(_components.code, {
              children: "model?"
            }), ", ", _jsx(_components.code, {
              children: "sampleRate?"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "SarvamTTS"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "key"
            }), ", ", _jsx(_components.code, {
              children: "speaker"
            }), ", ", _jsx(_components.code, {
              children: "targetLanguageCode"
            }), ", ", _jsx(_components.code, {
              children: "pitch?"
            }), ", ", _jsx(_components.code, {
              children: "pace?"
            }), ", ", _jsx(_components.code, {
              children: "loudness?"
            }), ", ", _jsx(_components.code, {
              children: "sampleRate?"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "GradiumTTS"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "apiKey"
            }), ", ", _jsx(_components.code, {
              children: "url?"
            }), ", ", _jsx(_components.code, {
              children: "modelName?"
            }), ", ", _jsx(_components.code, {
              children: "voiceId?"
            }), ", ", _jsx(_components.code, {
              children: "sampleRate?"
            }), ", ", _jsx(_components.code, {
              children: "additionalParams?"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MistralTTS"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "apiKey"
            }), ", ", _jsx(_components.code, {
              children: "model?"
            }), ", ", _jsx(_components.code, {
              children: "voice?"
            }), ", ", _jsx(_components.code, {
              children: "additionalParams?"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TypecastTTS"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "apiKey"
            }), ", ", _jsx(_components.code, {
              children: "voiceId"
            }), ", ", _jsx(_components.code, {
              children: "model"
            }), ", ", _jsx(_components.code, {
              children: "additionalParams?"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "XAiTTS"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "apiKey"
            }), ", ", _jsx(_components.code, {
              children: "language"
            }), ", ", _jsx(_components.code, {
              children: "voiceId?"
            }), ", ", _jsx(_components.code, {
              children: "sampleRate?"
            }), ", ", _jsx(_components.code, {
              children: "additionalParams?"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "SmallestAITTS"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "apiKey"
            }), ", ", _jsx(_components.code, {
              children: "url?"
            }), ", ", _jsx(_components.code, {
              children: "model?"
            }), ", ", _jsx(_components.code, {
              children: "voiceId?"
            }), ", ", _jsx(_components.code, {
              children: "sampleRate?"
            }), ", ", _jsx(_components.code, {
              children: "speed?"
            }), ", ", _jsx(_components.code, {
              children: "language?"
            }), ", ", _jsx(_components.code, {
              children: "additionalParams?"
            })]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "SmallestAITTS"
      }), " also accepts ", _jsx(_components.code, {
        children: "numberPronunciationLanguage?"
      }), ", ", _jsx(_components.code, {
        children: "mathNotation?"
      }), ", ", _jsx(_components.code, {
        children: "pronunciationDicts?"
      }), ", ", _jsx(_components.code, {
        children: "sessionId?"
      }), ", and ", _jsx(_components.code, {
        children: "requestId?"
      }), ". Voice identifiers are model-specific, so ", _jsx(_components.code, {
        children: "voiceId"
      }), " must belong to the model set in ", _jsx(_components.code, {
        children: "model"
      }), ". For details, see ", _jsx(_components.a, {
        href: "/en/ai/models/tts/smallest-ai",
        children: "Smallest AI"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["For ", _jsx(_components.code, {
        children: "MiniMaxTTS"
      }), ", ", _jsx(_components.code, {
        children: "key"
      }), " is optional only for reseller-backed models: ", _jsx(_components.code, {
        children: "speech-2.6-turbo"
      }), ", ", _jsx(_components.code, {
        children: "speech-2.8-turbo"
      }), ". If ", _jsx(_components.code, {
        children: "key"
      }), " is omitted for one of those models, AgentKit infers the matching session preset. In that preset-backed path, ", _jsx(_components.code, {
        children: "groupId"
      }), ", ", _jsx(_components.code, {
        children: "voiceId"
      }), ", and ", _jsx(_components.code, {
        children: "url"
      }), " are optional overrides rather than required fields. If ", _jsx(_components.code, {
        children: "key"
      }), " is provided, AgentKit uses BYOK, and ", _jsx(_components.code, {
        children: "groupId"
      }), ", ", _jsx(_components.code, {
        children: "voiceId"
      }), ", and ", _jsx(_components.code, {
        children: "url"
      }), " are required."]
    }), `
`, _jsx(_components.h4, {
      id: "generictts",
      children: "GenericTTS"
    }), `
`, _jsxs(_components.p, {
      children: ["Custom OpenAI-compatible HTTP TTS. ", _jsx(_components.code, {
        children: "url"
      }), " is required and must be an absolute HTTP or HTTPS address — the constructor throws if ", _jsx(_components.code, {
        children: "url"
      }), " is missing, badly formatted, or uses a non-HTTP(S) scheme such as ", _jsx(_components.code, {
        children: "ws:"
      }), " or ", _jsx(_components.code, {
        children: "wss:"
      }), ". A valid URL is serialized as ", _jsx(_components.code, {
        children: 'tts.vendor = "generic_http"'
      }), "."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " GenericTTS"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: GenericTTSOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "url"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "The HTTP(S) endpoint of your custom TTS service"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "headers"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, string>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Custom HTTP headers to forward to the TTS service. Omitted from the request if not set"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "The API key used to authenticate with the TTS service"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "model"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "The TTS model name"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "voice"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "The voice name"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "speed"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "The speech rate"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "sampleRate"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "The sample rate, in Hz, of the output audio. If your TTS service doesn't support multiple sample rates, make sure the returned audio's sample rate matches this value"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "responseFormat"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"pcm"'
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["The output audio format. Conversational AI Engine currently supports ", _jsx(_components.code, {
              children: "pcm"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "instruction"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Instructions for voice style, emotion, or other playback directives"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "additionalParams"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional parameters passed through to the TTS service. Explicit fields with the same name take precedence"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "skipPatterns"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Skip patterns for bracketed content"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "stt-vendors",
      children: "STT vendors"
    }), `
`, _jsxs(_components.p, {
      children: ["Use with ", _jsx(_components.a, {
        href: "#withsttvendor",
        children: _jsx(_components.code, {
          children: "withStt()"
        })
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "deepgramstt",
      children: "DeepgramSTT"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " DeepgramSTT"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " DeepgramSTTOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Provide ", _jsx(_components.code, {
        children: "apiKey"
      }), ", or omit it and set ", _jsx(_components.code, {
        children: "model"
      }), " to ", _jsx(_components.code, {
        children: "nova-2"
      }), " or ", _jsx(_components.code, {
        children: "nova-3"
      }), " to use Agora-managed credentials. The constructor throws otherwise."]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Deepgram API key. Optional for ", _jsx(_components.code, {
              children: "nova-2"
            }), " and ", _jsx(_components.code, {
              children: "nova-3"
            }), " reseller preset usage"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "model"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Conditional"
          }), _jsxs(_components.td, {
            children: ["Model name, for example ", _jsx(_components.code, {
              children: "'nova-2'"
            }), " or ", _jsx(_components.code, {
              children: "'enhanced'"
            }), ". Required when ", _jsx(_components.code, {
              children: "apiKey"
            }), " is omitted"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "language"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Language code, for example ", _jsx(_components.code, {
              children: "'en-US'"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "keyterm"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Boost specialized terms and brands"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "smartFormat"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Enable smart formatting"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "punctuation"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Enable punctuation"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "additionalParams"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional vendor parameters"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For ", _jsx(_components.code, {
        children: "nova-2"
      }), " and ", _jsx(_components.code, {
        children: "nova-3"
      }), ", omit ", _jsx(_components.code, {
        children: "apiKey"
      }), " to use Agora-managed credentials. For all other Deepgram models, ", _jsx(_components.code, {
        children: "apiKey"
      }), " is required."]
    }), `
`, _jsx(_components.h4, {
      id: "other-stt-vendors",
      children: "Other STT vendors"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Class"
          }), _jsx(_components.th, {
            children: "Key parameters"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "SpeechmaticsSTT"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "key"
            }), ", ", _jsx(_components.code, {
              children: "language"
            }), ", ", _jsx(_components.code, {
              children: "model?"
            }), ", ", _jsx(_components.code, {
              children: "uri?"
            }), ". ", _jsx(_components.code, {
              children: "apiKey"
            }), " is a deprecated alias of ", _jsx(_components.code, {
              children: "key"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MicrosoftSTT"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "key"
            }), ", ", _jsx(_components.code, {
              children: "region"
            }), ", ", _jsx(_components.code, {
              children: "language"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "OpenAISTT"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "apiKey"
            }), ", ", _jsx(_components.code, {
              children: "model?"
            }), ", ", _jsx(_components.code, {
              children: "language?"
            }), ", ", _jsx(_components.code, {
              children: "prompt?"
            }), ", ", _jsx(_components.code, {
              children: "inputAudioTranscription?"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "GoogleSTT"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "projectId"
            }), ", ", _jsx(_components.code, {
              children: "location"
            }), ", ", _jsx(_components.code, {
              children: "adcCredentialsString"
            }), ", ", _jsx(_components.code, {
              children: "language"
            }), ", ", _jsx(_components.code, {
              children: "model?"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AmazonSTT"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "accessKey"
            }), ", ", _jsx(_components.code, {
              children: "secretKey"
            }), ", ", _jsx(_components.code, {
              children: "region"
            }), ", ", _jsx(_components.code, {
              children: "language"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AssemblyAISTT"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "apiKey"
            }), ", ", _jsx(_components.code, {
              children: "language"
            }), ", ", _jsx(_components.code, {
              children: "ws_url?"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AresSTT"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "keywords?"
            }), ", ", _jsx(_components.code, {
              children: "additionalParams?"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "GeminiSTT"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "apiKey"
            }), ", ", _jsx(_components.code, {
              children: "model?"
            }), ", ", _jsx(_components.code, {
              children: "language?"
            }), ", ", _jsx(_components.code, {
              children: "languageHints?"
            }), ", ", _jsx(_components.code, {
              children: "customVocabulary?"
            }), ", ", _jsx(_components.code, {
              children: "sampleRate?"
            }), " (default ", _jsx(_components.code, {
              children: "16000"
            }), "), ", _jsx(_components.code, {
              children: "wordTimestamp?"
            }), ", ", _jsx(_components.code, {
              children: "mode?"
            }), " (", _jsx(_components.code, {
              children: "SMART"
            }), " or ", _jsx(_components.code, {
              children: "VERBATIM"
            }), "), ", _jsx(_components.code, {
              children: "diarization?"
            }), ", ", _jsx(_components.code, {
              children: "additionalParams?"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "XAiSTT"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "apiKey"
            }), ", ", _jsx(_components.code, {
              children: "language?"
            }), ", ", _jsx(_components.code, {
              children: "baseUrl?"
            }), ", ", _jsx(_components.code, {
              children: "sampleRate?"
            }), ", ", _jsx(_components.code, {
              children: "additionalParams?"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "SarvamSTT"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "apiKey"
            }), ", ", _jsx(_components.code, {
              children: "language"
            }), ", ", _jsx(_components.code, {
              children: "model?"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "SmallestAISTT"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "apiKey"
            }), ", ", _jsx(_components.code, {
              children: "language?"
            }), ", ", _jsx(_components.code, {
              children: "url?"
            }), ", ", _jsx(_components.code, {
              children: "sampleRate?"
            }), ", ", _jsx(_components.code, {
              children: "encoding?"
            }), ", ", _jsx(_components.code, {
              children: "keywords?"
            }), ", ", _jsx(_components.code, {
              children: "additionalParams?"
            })]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "SmallestAISTT"
      }), " also accepts the boolean options ", _jsx(_components.code, {
        children: "wordTimestamps?"
      }), ", ", _jsx(_components.code, {
        children: "sentenceTimestamps?"
      }), ", ", _jsx(_components.code, {
        children: "diarize?"
      }), ", ", _jsx(_components.code, {
        children: "vadEvents?"
      }), ", ", _jsx(_components.code, {
        children: "endpointing?"
      }), ", ", _jsx(_components.code, {
        children: "format?"
      }), ", ", _jsx(_components.code, {
        children: "finalizeOnWords?"
      }), ", ", _jsx(_components.code, {
        children: "punctuate?"
      }), ", ", _jsx(_components.code, {
        children: "capitalize?"
      }), ", ", _jsx(_components.code, {
        children: "itnNormalize?"
      }), ", ", _jsx(_components.code, {
        children: "fullTranscript?"
      }), ", ", _jsx(_components.code, {
        children: "redactPii?"
      }), ", and ", _jsx(_components.code, {
        children: "redactPci?"
      }), ", plus ", _jsx(_components.code, {
        children: "eouTimeoutMs?"
      }), " and ", _jsx(_components.code, {
        children: "maxWords?"
      }), ". Boolean options are serialized as the strings ", _jsx(_components.code, {
        children: '"true"'
      }), " or ", _jsx(_components.code, {
        children: '"false"'
      }), " for the Smallest AI wire protocol. For details, see ", _jsx(_components.a, {
        href: "/en/ai/models/asr/smallest-ai",
        children: "Smallest AI"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["For ", _jsx(_components.code, {
        children: "OpenAISTT"
      }), ", the serialized configuration requires a transcription ", _jsx(_components.code, {
        children: "prompt"
      }), " and ", _jsx(_components.code, {
        children: "language"
      }), " — provide them through the ", _jsx(_components.code, {
        children: "prompt"
      }), " and ", _jsx(_components.code, {
        children: "language"
      }), " options or within ", _jsx(_components.code, {
        children: "inputAudioTranscription"
      }), ". ", _jsx(_components.code, {
        children: "model"
      }), " defaults to ", _jsx(_components.code, {
        children: "gpt-4o-mini-transcribe"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "mllm-vendors",
      children: "MLLM vendors"
    }), `
`, _jsxs(_components.p, {
      children: ["Use with ", _jsx(_components.a, {
        href: "#withmllmvendor",
        children: _jsx(_components.code, {
          children: "withMllm()"
        })
      }), " for multimodal end-to-end audio processing without separate STT or TTS steps. Calling ", _jsx(_components.code, {
        children: "withMllm()"
      }), " automatically enables the MLLM module (sets ", _jsx(_components.code, {
        children: "mllm.enable = true"
      }), "); the older ", _jsx(_components.code, {
        children: "advancedFeatures.enable_mllm"
      }), " flag is deprecated."]
    }), `
`, _jsx(_components.h4, {
      id: "openairealtime",
      children: "OpenAIRealtime"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " OpenAIRealtime"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: OpenAIRealtimeOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "OpenAI API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "model"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Model name, for example ", _jsx(_components.code, {
              children: "'gpt-4o-realtime-preview'"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "voice"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Voice identifier"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "instructions"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "System instructions"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "inputAudioTranscription"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Audio transcription settings"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "url"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "WebSocket URL"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "greetingMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Agent greeting message"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "failureMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Message played when the model call fails"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "inputModalities"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Input modalities, for example ", _jsx(_components.code, {
              children: "['audio']"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "outputModalities"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Output modalities, for example ", _jsx(_components.code, {
              children: "['text', 'audio']"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "messages"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Conversation messages for short-term memory"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "params"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional MLLM parameters"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turnDetection"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MllmTurnDetectionConfig"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["MLLM turn detection configuration; overrides top-level ", _jsx(_components.code, {
              children: "turnDetection"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "azureopenairealtime",
      children: "AzureOpenAIRealtime"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: "(options: AzureOpenAIRealtimeOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Azure OpenAI API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "url"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Azure OpenAI Realtime WebSocket URL"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turnDetection"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MllmTurnDetectionConfig"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsxs(_components.td, {
            children: ["MLLM turn detection configuration; overrides top-level ", _jsx(_components.code, {
              children: "turnDetection"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "model"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Azure OpenAI Realtime model or deployment name"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "voice"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Voice identifier"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "instructions"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "System instructions"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "maxHistory"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Number of conversation history messages to cache"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "greetingMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Agent greeting message"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "outputModalities"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Output modalities, for example ", _jsx(_components.code, {
              children: "['text', 'audio']"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "messages"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Conversation messages for short-term memory"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "params"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AzureOpenAIRealtimeParams"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional Azure OpenAI parameters"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "geminilive",
      children: "GeminiLive"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " GeminiLive"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: GeminiLiveOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Google API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "model"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsxs(_components.td, {
            children: ["Model name, for example ", _jsx(_components.code, {
              children: "'models/gemini-3.8-live-extended-thinking'"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "thinkingLevel"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "GeminiThinkingLevel"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Reasoning budget (", _jsx(_components.code, {
              children: "'low'"
            }), ", ", _jsx(_components.code, {
              children: "'medium'"
            }), ", or ", _jsx(_components.code, {
              children: "'high'"
            }), "), supported only by ", _jsx(_components.code, {
              children: "'models/gemini-3.8-live-extended-thinking'"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "url"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "WebSocket URL"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "instructions"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "System instructions for the model"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "voice"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Voice name, for example ", _jsx(_components.code, {
              children: "'Aoede'"
            }), " or ", _jsx(_components.code, {
              children: "'Charon'"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "affectiveDialog"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Enable affective dialog"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "proactiveAudio"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Enable proactive audio"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "transcribeAgent"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Transcribe agent speech"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "transcribeUser"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Transcribe user speech"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "httpOptions"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "HTTP options"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "greetingMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Agent greeting message"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "failureMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Message played when the model call fails"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "inputModalities"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Input modalities"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "outputModalities"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Output modalities"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "messages"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Conversation messages for short-term memory"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "additionalParams"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional parameters"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turnDetection"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MllmTurnDetectionConfig"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["MLLM turn detection configuration; overrides top-level ", _jsx(_components.code, {
              children: "turnDetection"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "vertexai",
      children: "VertexAI"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " VertexAI"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: VertexAIOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "model"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsxs(_components.td, {
            children: ["Model name, for example ", _jsx(_components.code, {
              children: "'gemini-live-2.5-flash-preview-native-audio-09-2025'"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "projectId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Google Cloud project ID"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "location"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Google Cloud location or region"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "adcCredentialsString"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Application Default Credentials JSON string"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "url"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "WebSocket URL"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "instructions"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "System instructions for the model"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "voice"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Voice name, for example ", _jsx(_components.code, {
              children: "'Aoede'"
            }), " or ", _jsx(_components.code, {
              children: "'Charon'"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "affectiveDialog"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Enable affective dialog"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "proactiveAudio"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Enable proactive audio"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "transcribeAgent"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Transcribe agent speech"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "transcribeUser"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Transcribe user speech"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "httpOptions"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "HTTP options"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "greetingMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Agent greeting message"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "failureMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Message played when the model call fails"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "inputModalities"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Input modalities"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "outputModalities"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Output modalities"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "messages"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Conversation messages for short-term memory"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "additionalParams"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional parameters"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turnDetection"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MllmTurnDetectionConfig"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["MLLM turn detection configuration; overrides top-level ", _jsx(_components.code, {
              children: "turnDetection"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "xaigrok",
      children: "XaiGrok"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " XaiGrok"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: XaiGrokOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "xAI API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "url"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "WebSocket URL (defaults to xAI Realtime API)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "voice"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Voice identifier, for example ", _jsx(_components.code, {
              children: "'eve'"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "language"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Language code"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "sampleRate"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Audio sample rate in Hz"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "greetingMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Agent greeting message"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "failureMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Message played when the model call fails"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "inputModalities"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Input modalities"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "outputModalities"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Output modalities"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "messages"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Conversation messages for short-term memory"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "params"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional xAI parameters"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turnDetection"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MllmTurnDetectionConfig"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["MLLM turn detection configuration; overrides top-level ", _jsx(_components.code, {
              children: "turnDetection"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "openaigptlive",
      children: "OpenAIGPTLive"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/en/ai/models/mllm/openai-gpt-live",
        children: "OpenAI GPT-Live"
      }), " MLLM vendor (", _jsx(_components.code, {
        children: "mllm.vendor"
      }), ": ", _jsx(_components.code, {
        children: '"openai_gpt_live"'
      }), "). The constructor throws if ", _jsx(_components.code, {
        children: "apiKey"
      }), " is empty. ", _jsx(_components.code, {
        children: "withMllm()"
      }), " throws if ", _jsx(_components.code, {
        children: "url"
      }), " isn't a full ", _jsx(_components.code, {
        children: "ws://"
      }), " or ", _jsx(_components.code, {
        children: "wss://"
      }), " endpoint, ", _jsx(_components.code, {
        children: "headers"
      }), " isn't a JSON object string, ", _jsx(_components.code, {
        children: "delegation"
      }), " isn't ", _jsx(_components.code, {
        children: "client"
      }), " or ", _jsx(_components.code, {
        children: "responses"
      }), ", or ", _jsx(_components.code, {
        children: "sessionParams"
      }), " overrides a protected field."]
    }), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "Early access"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "OpenAI GPT-Live is available in early access and isn't intended for production traffic. The SDK automatically routes sessions that use this vendor to the preview endpoint. GPT-Live doesn't support turn detection or input audio transcription."
        })
      })]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " OpenAIGPTLive"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: OpenAIGPTLiveOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "OpenAI API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "model"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Model name. Defaults to ", _jsx(_components.code, {
              children: "gpt-live-1"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "voice"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Output voice. Provider default: ", _jsx(_components.code, {
              children: "marin"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "prompt"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Session instructions that define the assistant's behavior"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "greeting"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Greeting the agent speaks when a user joins. Serialized as ", _jsx(_components.code, {
              children: "greeting_message"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "failureMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Message played when the model call fails"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "url"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Full ", _jsx(_components.code, {
              children: "ws://"
            }), " or ", _jsx(_components.code, {
              children: "wss://"
            }), " endpoint. Defaults to ", _jsx(_components.code, {
              children: "wss://api.openai.com/v1/live/sessions"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "baseUrl"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Host used when ", _jsx(_components.code, {
              children: "url"
            }), " is omitted. Defaults to ", _jsx(_components.code, {
              children: "wss://api.openai.com"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "path"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["WebSocket path used when ", _jsx(_components.code, {
              children: "url"
            }), " is omitted. Defaults to ", _jsx(_components.code, {
              children: "/v1/live/sessions"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "inputModalities"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Input modalities"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "outputModalities"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Output modalities"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "messages"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Conversation history passed to the model as context"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "mcpServers"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "McpServersItem[]"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["MCP servers whose tools GPT-Live can call. Requires ", _jsx(_components.code, {
              children: "withTools(true)"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "toolEnabled"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Advertise the agent's tools to GPT-Live. Provider default: ", _jsx(_components.code, {
              children: "false"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "delegation"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "'client' | 'responses'"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Tool delegation mode: ", _jsx(_components.code, {
              children: "client"
            }), " or ", _jsx(_components.code, {
              children: "responses"
            }), ". Provider default: ", _jsx(_components.code, {
              children: "responses"
            }), ". Can't be changed during the session"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "responsesModel"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Model used for delegated tool calls"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "interruptOnUserTurn"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Interrupt playback when the user speaks. Provider default: ", _jsx(_components.code, {
              children: "false"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "outputIdleEndMs"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Agent silence boundary in milliseconds. Provider default: ", _jsx(_components.code, {
              children: "600"
            }), ". ", _jsx(_components.code, {
              children: "0"
            }), " disables inference"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "inputIdleEndMs"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["User silence boundary in milliseconds. Provider default: ", _jsx(_components.code, {
              children: "1500"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "outputSilencePeak"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Speech amplitude threshold on the 16-bit scale. Provider default: ", _jsx(_components.code, {
              children: "50"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "outputSampleRate"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Output PCM sample rate in Hz. Provider default: ", _jsx(_components.code, {
              children: "24000"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "outputBufferMs"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Initial audio cushion in milliseconds. Provider default: ", _jsx(_components.code, {
              children: "0"
            }), ". A negative value disables pacing"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "inputBatchMs"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Microphone audio batching interval in milliseconds"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "alphaSelector"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "OpenAI-Alpha selector for preview contracts. Omitted when not set"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "headers"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Extra provider request headers, as a JSON object string"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "sessionParams"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Additional session fields. Can't override ", _jsx(_components.code, {
              children: "model"
            }), ", ", _jsx(_components.code, {
              children: "delegation"
            }), ", ", _jsx(_components.code, {
              children: "audio"
            }), ", ", _jsx(_components.code, {
              children: "instructions"
            }), ", or ", _jsx(_components.code, {
              children: "input"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "params"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional provider parameters. Explicit options take precedence"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "instructions"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Deprecated. Use ", _jsx(_components.code, {
              children: "prompt"
            }), " instead"]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "inputAudioTranscription"
      }), " and ", _jsx(_components.code, {
        children: "turnDetection"
      }), " are deprecated and accepted only for compatibility. GPT-Live doesn't support them: setting ", _jsx(_components.code, {
        children: "inputAudioTranscription"
      }), " throws, and the SDK ignores ", _jsx(_components.code, {
        children: "turnDetection"
      }), " and logs a warning."]
    }), `
`, _jsx(_components.h3, {
      id: "avatar-vendors",
      children: "Avatar vendors"
    }), `
`, _jsxs(_components.p, {
      children: ["Use with ", _jsx(_components.a, {
        href: "#withavatarvendor",
        children: _jsx(_components.code, {
          children: "withAvatar()"
        })
      }), ". Some avatar vendors require a specific TTS sample rate, enforced at compile time and runtime."]
    }), `
`, _jsx(_components.h4, {
      id: "heygenavatar",
      children: "HeyGenAvatar"
    }), `
`, _jsxs(_components.p, {
      children: ["Deprecated. Use ", _jsx(_components.a, {
        href: "#liveavataravatar",
        children: _jsx(_components.code, {
          children: "LiveAvatarAvatar"
        })
      }), " for new integrations. ", _jsx(_components.code, {
        children: "HeyGenAvatar"
      }), " still works and serializes ", _jsx(_components.code, {
        children: 'vendor: "heygen"'
      }), ". Requires TTS at ", _jsx(_components.strong, {
        children: "24,000 Hz"
      }), "."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " HeyGenAvatar"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: HeyGenAvatarOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "HeyGen API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "quality"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "'low' | 'medium' | 'high'"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Video quality: 360p, 480p, or 720p"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraUid"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "RTC UID for the avatar stream"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraToken"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "RTC token for avatar authentication"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "avatarId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "HeyGen avatar ID"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "disableIdleTimeout"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Disable idle timeout. Default: ", _jsx(_components.code, {
              children: "false"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "activityIdleTimeout"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Idle timeout in seconds. Default: ", _jsx(_components.code, {
              children: "120"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "enable"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Enable or disable the avatar. Default: ", _jsx(_components.code, {
              children: "true"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "akoolavatar",
      children: "AkoolAvatar"
    }), `
`, _jsxs(_components.p, {
      children: ["Requires TTS at ", _jsx(_components.strong, {
        children: "16,000 Hz"
      }), "."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " AkoolAvatar"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: AkoolAvatarOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Akool API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "avatarId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Akool avatar ID"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "enable"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Enable or disable the avatar. Default: ", _jsx(_components.code, {
              children: "true"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "liveavataravatar",
      children: "LiveAvatarAvatar"
    }), `
`, _jsxs(_components.p, {
      children: ["Requires TTS at ", _jsx(_components.strong, {
        children: "24,000 Hz"
      }), "."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " LiveAvatarAvatar"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: LiveAvatarAvatarOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "LiveAvatar API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "quality"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "'low' | 'medium' | 'high'"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Video quality"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraUid"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "RTC UID for the avatar stream"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraToken"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Avatar token override"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "avatarId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Avatar ID"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "disableIdleTimeout"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Disable idle timeout"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "activityIdleTimeout"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Idle timeout in seconds"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "enable"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Enable or disable the avatar. Default: ", _jsx(_components.code, {
              children: "true"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "anamavatar",
      children: "AnamAvatar"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " AnamAvatar"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: AnamAvatarOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Anam API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "avatarId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Anam avatar ID"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "enable"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Enable or disable the avatar. Default: ", _jsx(_components.code, {
              children: "true"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "genericavatar",
      children: "GenericAvatar"
    }), `
`, _jsxs(_components.p, {
      children: ["Generic avatars can omit ", _jsx(_components.code, {
        children: "agoraAppId"
      }), ", ", _jsx(_components.code, {
        children: "agoraChannel"
      }), ", and ", _jsx(_components.code, {
        children: "agoraToken"
      }), ". AgentKit fills them from the session at ", _jsx(_components.code, {
        children: "start()"
      }), "."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " GenericAvatar"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: GenericAvatarOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Custom avatar provider API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiBaseUrl"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Avatar provider API base URL"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "avatarId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Avatar ID"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraUid"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "RTC UID for the avatar stream"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraAppId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Agora App ID override"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraChannel"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Agora channel override"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraToken"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Avatar token override"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "enable"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Enable or disable the avatar. Default: ", _jsx(_components.code, {
              children: "true"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "additionalParams"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional vendor parameters. Explicit options take precedence over matching keys."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "tavus",
      children: "Tavus"
    }), `
`, _jsxs(_components.p, {
      children: ["Tavus avatars can omit ", _jsx(_components.code, {
        children: "agoraAppId"
      }), ", ", _jsx(_components.code, {
        children: "agoraChannel"
      }), ", and ", _jsx(_components.code, {
        children: "agoraToken"
      }), ". AgentKit fills them from the session at ", _jsx(_components.code, {
        children: "start()"
      }), ". Serializes ", _jsx(_components.code, {
        children: 'vendor: "generic"'
      }), ". For the endpoint and a full example, see ", _jsx(_components.a, {
        href: "/en/ai/models/avatar/tavus",
        children: "Tavus"
      }), "."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " Tavus"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: TavusOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Tavus API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiBaseUrl"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Tavus API base URL"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "avatarId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Tavus avatar ID"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraUid"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "RTC UID for the avatar stream"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraAppId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Agora App ID override"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraChannel"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Agora channel override"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraToken"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Avatar token override"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "enable"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Enable or disable the avatar. Default: ", _jsx(_components.code, {
              children: "true"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "additionalParams"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional vendor parameters. Explicit options take precedence over matching keys."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "protoface",
      children: "Protoface"
    }), `
`, _jsxs(_components.p, {
      children: ["Protoface avatars can omit ", _jsx(_components.code, {
        children: "agoraAppId"
      }), ", ", _jsx(_components.code, {
        children: "agoraChannel"
      }), ", and ", _jsx(_components.code, {
        children: "agoraToken"
      }), ". AgentKit fills them from the session at ", _jsx(_components.code, {
        children: "start()"
      }), ". Serializes ", _jsx(_components.code, {
        children: 'vendor: "generic"'
      }), ". For the endpoint and a full example, see ", _jsx(_components.a, {
        href: "/en/ai/models/avatar/protoface",
        children: "Protoface"
      }), "."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " Protoface"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: ProtofaceOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Protoface API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiBaseUrl"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Protoface API base URL"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "avatarId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Protoface avatar ID"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraUid"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "RTC UID for the avatar stream"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraAppId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Agora App ID override"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraChannel"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Agora channel override"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraToken"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Avatar token override"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "enable"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Enable or disable the avatar. Default: ", _jsx(_components.code, {
              children: "true"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "additionalParams"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional vendor parameters. Explicit options take precedence over matching keys."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "lemonslice",
      children: "LemonSlice"
    }), `
`, _jsxs(_components.p, {
      children: ["LemonSlice avatars can omit ", _jsx(_components.code, {
        children: "agoraAppId"
      }), ", ", _jsx(_components.code, {
        children: "agoraChannel"
      }), ", and ", _jsx(_components.code, {
        children: "agoraToken"
      }), ". AgentKit fills them from the session at ", _jsx(_components.code, {
        children: "start()"
      }), ". Serializes ", _jsx(_components.code, {
        children: 'vendor: "generic"'
      }), ". For the endpoint and a full example, see ", _jsx(_components.a, {
        href: "/en/ai/models/avatar/lemonslice",
        children: "LemonSlice"
      }), "."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
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
              children: " LemonSlice"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: LemonSliceOptions)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiKey"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "LemonSlice API key"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "apiBaseUrl"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "LemonSlice API base URL"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "avatarId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsxs(_components.td, {
            children: ["Always ", _jsx(_components.code, {
              children: "lemonslice"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraUid"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "RTC UID for the avatar stream"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraAppId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Agora App ID override"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraChannel"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Agora channel override"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agoraToken"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Avatar token override"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "enable"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Enable or disable the avatar. Default: ", _jsx(_components.code, {
              children: "true"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "additionalParams"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, unknown>"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Additional vendor parameters. Explicit options take precedence over matching keys."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "token-utilities",
      children: "Token utilities"
    }), `
`, _jsx(_components.p, {
      children: "Helper functions and classes for generating and managing tokens. Use these when you need control over token lifetime, or when generating tokens outside of a session."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
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
              children: " { generateConvoAIToken, ExpiresIn } "
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
          })
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "generateconvoaitokenoptions",
      children: _jsx(_components.code, {
        children: "generateConvoAIToken(options)"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Generates a Conversational AI token combining RTC and RTM privileges. This is the same token the SDK generates automatically in app-credentials mode. Use this when you need a token outside of a session, or when passing a pre-built token to ", _jsx(_components.a, {
        href: "#createsessionoptions",
        children: _jsx(_components.code, {
          children: "SessionOptions.token"
        })
      }), "."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "generateConvoAIToken"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(options: GenerateConvoAITokenOptions): string"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Option"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "appId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Agora App ID"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "appCertificate"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Agora App Certificate"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "channelName"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "The channel the token grants access to"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uid"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Numeric RTC UID the token is issued for"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tokenExpire"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Token lifetime in seconds. Default: ", _jsx(_components.code, {
              children: "86400"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "privilegeExpire"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["Privilege lifetime in seconds. Default: same as ", _jsx(_components.code, {
              children: "tokenExpire"
            })]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Returns:"
      }), " ", _jsx(_components.code, {
        children: "string"
      }), " — the generated token."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Throws:"
      }), " if ", _jsx(_components.code, {
        children: "appId"
      }), " or ", _jsx(_components.code, {
        children: "appCertificate"
      }), " isn't exactly 32 characters."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
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
              children: " token"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " generateConvoAIToken"
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
              children: "  appId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'your-app-id'"
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
              children: "  appCertificate: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'your-app-certificate'"
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
              children: "  channelName: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'support-room-123'"
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
              children: "  uid: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1"
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
              children: "  tokenExpire: ExpiresIn."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "hours"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "12"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "),"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "});"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "expiresin",
      children: _jsx(_components.code, {
        children: "ExpiresIn"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Helper for specifying token lifetimes. Use with ", _jsx(_components.a, {
        href: "#createsessionoptions",
        children: _jsx(_components.code, {
          children: "SessionOptions.expiresIn"
        })
      }), " or ", _jsx(_components.a, {
        href: "#generateconvoaitokenoptions",
        children: _jsx(_components.code, {
          children: "generateConvoAIToken"
        })
      }), ". Values are validated and capped at the Agora maximum of 86400 seconds (24 hours)."]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Value or method"
          }), _jsx(_components.th, {
            children: "Returns"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ExpiresIn.DAY"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "86400"
            })
          }), _jsx(_components.td, {
            children: "24 hours — the Agora maximum and default"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ExpiresIn.MAX"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "86400"
            })
          }), _jsx(_components.td, {
            children: "The Agora maximum"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ExpiresIn.HOUR"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "3600"
            })
          }), _jsx(_components.td, {
            children: "One hour"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ExpiresIn.seconds(n)"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "n"
            }), " seconds, validated and capped at 24 h"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ExpiresIn.hours(n)"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "n"
            }), " hours in seconds. Throws if ", _jsx(_components.code, {
              children: "n"
            }), " ≤ 0, caps at 24 h with a warning"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ExpiresIn.minutes(n)"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "n"
            }), " minutes in seconds. Throws if ", _jsx(_components.code, {
              children: "n"
            }), " ≤ 0, caps at 24 h with a warning"]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "types-and-enums",
      children: "Types and enums"
    }), `
`, _jsxs(_components.p, {
      children: ["Shared types and enums used across ", _jsx(_components.code, {
        children: "AgoraClient"
      }), ", ", _jsx(_components.code, {
        children: "Agent"
      }), ", ", _jsx(_components.code, {
        children: "AgentSession"
      }), ", and vendor classes."]
    }), `
`, _jsx(_components.h3, {
      id: "area",
      children: _jsx(_components.code, {
        children: "Area"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Region used for API routing. Pass to ", _jsx(_components.code, {
        children: "AgoraClient"
      }), " via the ", _jsx(_components.code, {
        children: "area"
      }), " option."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
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
              children: " { Area } "
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
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Value"
          }), _jsx(_components.th, {
            children: "Region"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Area.US"
            })
          }), _jsx(_components.td, {
            children: "United States"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Area.EU"
            })
          }), _jsx(_components.td, {
            children: "Europe"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Area.AP"
            })
          }), _jsx(_components.td, {
            children: "Asia-Pacific"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Area.CN"
            })
          }), _jsx(_components.td, {
            children: "China mainland"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "agoraauthmode",
      children: _jsx(_components.code, {
        children: "AgoraAuthMode"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The resolved authentication mode on an ", _jsx(_components.code, {
        children: "AgoraClient"
      }), " instance. Read via ", _jsx(_components.code, {
        children: "client.authMode"
      }), "."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " AgoraAuthMode"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "app-credentials"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " |"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "token"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " |"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "basic"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Value"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"app-credentials"'
            })
          }), _jsx(_components.td, {
            children: "App ID and App Certificate provided. SDK auto-generates tokens"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"token"'
            })
          }), _jsxs(_components.td, {
            children: ["Pre-built ", _jsx(_components.code, {
              children: "authToken"
            }), " provided"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"basic"'
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "customerId"
            }), " and ", _jsx(_components.code, {
              children: "customerSecret"
            }), " provided"]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "agentsessionevent",
      children: _jsx(_components.code, {
        children: "AgentSessionEvent"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Union type of all valid event names for ", _jsx(_components.code, {
        children: "session.on()"
      }), " and ", _jsx(_components.code, {
        children: "session.off()"
      }), "."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " AgentSessionEvent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "started"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " |"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "stopped"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " |"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "error"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "agentsessioneventhandler",
      children: _jsx(_components.code, {
        children: "AgentSessionEventHandler"
      })
    }), `
`, _jsx(_components.p, {
      children: "Generic handler type for session event callbacks."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " AgentSessionEventHandler"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "T"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " unknown"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "> "
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
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " T"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Event"
          }), _jsx(_components.th, {
            children: _jsx(_components.code, {
              children: "T"
            })
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"started"'
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "{ agentId: string }"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"stopped"'
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "{ agentId: string }"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"error"'
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "unknown"
            }), " (the thrown error)"]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "speakpriority",
      children: _jsx(_components.code, {
        children: "SpeakPriority"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Controls how the agent handles a ", _jsx(_components.a, {
        href: "#saytext-options",
        children: _jsx(_components.code, {
          children: "say()"
        })
      }), " call relative to its current activity."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " SpeakPriority"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "INTERRUPT"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " |"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "APPEND"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " |"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "IGNORE"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Value"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"INTERRUPT"'
            })
          }), _jsx(_components.td, {
            children: "Agent immediately stops current speech and delivers the message"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"APPEND"'
            })
          }), _jsx(_components.td, {
            children: "Message is queued and delivered after current speech ends"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"IGNORE"'
            })
          }), _jsx(_components.td, {
            children: "Message is discarded if the agent is currently speaking"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "SpeakPriorityInterrupt"
      }), ", ", _jsx(_components.code, {
        children: "SpeakPriorityAppend"
      }), ", and ", _jsx(_components.code, {
        children: "SpeakPriorityIgnore"
      }), " constants are also exported."]
    }), `
`, _jsx(_components.h3, {
      id: "agoraerror",
      children: _jsx(_components.code, {
        children: "AgoraError"
      })
    }), `
`, _jsx(_components.p, {
      children: "Thrown when the API returns a 4xx or 5xx response. Catch this to inspect the status code and response body."
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
              children: " { AgoraError } "
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "try"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " agentId"
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
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " session."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "start"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "} "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "catch"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (err) {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  if"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (err "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "instanceof"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " AgoraError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Status:'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", err.statusCode);"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Message:'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", err.message);"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Body:'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", err.body);"
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
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Property"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "statusCode"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number | undefined"
            })
          }), _jsx(_components.td, {
            children: "HTTP status code returned by the API"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "message"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Error message, including the status code and body"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "body"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "unknown"
            })
          }), _jsx(_components.td, {
            children: "Raw response body from the API, if any"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "rawResponse"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "RawResponse | undefined"
            })
          }), _jsx(_components.td, {
            children: "The raw HTTP response"
          })]
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
