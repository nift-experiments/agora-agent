import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Web toolkit API",
  description: "Web toolkit API reference for Conversational AI Engine."
};
export let _markdown = `

## Installation [#installation]

Add the toolkit to your project using a package manager or by copying the source code.

<Tabs>
  <TabsList>
    <TabsTrigger value="package">
      Package manager
    </TabsTrigger>

    <TabsTrigger value="source">
      Source code
    </TabsTrigger>
  </TabsList>

  <TabsContent value="package">
    Install the toolkit package for your project type:

    * Vanilla JS or TypeScript:

      \`\`\`bash
      pnpm add agora-agent-client-toolkit@2.9.0
      \`\`\`

    * React:

      \`\`\`bash
      pnpm add agora-agent-client-toolkit@2.9.0 agora-agent-client-toolkit-react@2.9.0
      \`\`\`
  </TabsContent>

  <TabsContent value="source">
    Copy the [\`conversational-ai\`](https://github.com/AgoraIO-Conversational-AI/agent-client-toolkit-ts/tree/main/packages/conversational-ai) package into your project, then import the toolkit before calling its APIs.
  </TabsContent>
</Tabs>

The [Web toolkit API](https://github.com/AgoraIO-Community/Conversational-AI-Demo/tree/main/Web/Scenes/VoiceAgent/src/conversational-ai-api) provides the following classes and methods.

## API overview [#api-overview]

| API                                     | Description                                                          |
| --------------------------------------- | -------------------------------------------------------------------- |
| [\`chat\`](#chat)                         | Send chat messages to a conversational agent.                        |
| [\`getInstance\`](#getinstance)           | Gets a singleton instance of \`ConversationalAIAPI\`.                  |
| [\`init\`](#init)                         | Initializes the \`ConversationalAIAPI\` singleton instance.            |
| [\`subscribeMessage\`](#subscribemessage) | Subscribes to the messaging channel to get real-time updates.        |
| [\`unsubscribe\`](#unsubscribe)           | Unsubscribes from the message channel and cleans up resources.       |
| [\`interrupt\`](#interrupt)               | Sends an interrupt message to the specified agent user.              |
| [\`manualSOS\`](#manualsos)               | Sends a manual Start of Speech (SoS) signal to the agent.            |
| [\`manualEOS\`](#manualeos)               | Sends a manual End of Speech (EoS) signal to the agent.              |
| [\`speak\`](#speak)                       | Makes the agent speak text directly, bypassing the LLM.              |
| [\`think\`](#think)                       | Injects text as user input for the LLM to process.                   |
| [\`destroy\`](#destroy)                   | Destroys the \`ConversationalAIAPI\` instance and cleans up resources. |

## ConversationalAIAPI class [#conversationalaiapi-class]

Class for managing conversational AI engine interactions through Agora's RTC and RTM services.

### \`chat\` [#chat]

Send chat messages to a conversational agent.

<CalloutContainer type="info">
  <CalloutDescription>
    Since v1.7
  </CalloutDescription>
</CalloutContainer>

\`\`\`javascript
public async chat(agentUserId: string, message: IChatMessageText | IChatMessageImage)
\`\`\`

#### Sample code [#sample-code]

\`\`\`js
// Send an image message
const imageMessage: IChatMessageImage = {
  messageType: EChatMessageType.IMAGE,
  imageData: urlImageData
};
await api.chat("user123", imageMessage);
\`\`\`

| Parameter     | Type                                      | Description                                                                                                               |
| ------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| \`agentUserId\` | \`string\`                                  | Unique identifier of the agent.                                                                                           |
| \`message\`     | \`IChatMessageText\` \\| \`IChatMessageImage\` | Chat message to be sent. Should be of type \`IChatMessageImage\`, see details in [\`IChatMessageImage\`](#ichatmessageimage). |

**Return Value**\\
If the method call succeeds, a Promise is returned, indicating the result of the message sending.

### \`getInstance\` [#getinstance]

Gets a singleton instance of \`ConversationalAIAPI\`. This method ensures that only one instance exists throughout the entire application lifecycle.

\`\`\`javascript
public static getInstance()
\`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    * You must call [\`init\`](#init) before using this method.
    * If not initialized, an error is thrown.
  </CalloutDescription>
</CalloutContainer>

**Return Value:**
If the method call succeeds, a \`ConversationalAIAPI\` instance is returned. If not initialized, a \`NotFoundError\` exception is thrown.

### \`init\` [#init]

Initializes the \`ConversationalAIAPI\` singleton instance.

\`\`\`javascript
public static async init(cfg: IConversationalAIAPIConfig): Promise<ConversationalAIAPI>
\`\`\`

This method sets the RTC and RTM engines, rendering mode, and logging options. You must call this method before calling other methods of \`ConversationalAIAPI\`. Awaiting this method returns the initialized instance directly, so a separate call to [\`getInstance\`](#getinstance) is not required immediately after initialization.

<CalloutContainer type="info">
  <CalloutDescription>
    * Only one instance can be initialized at a time.
    * If already initialized, an error is thrown.
  </CalloutDescription>
</CalloutContainer>

| Parameter | Type                         | Description                                                                                                       |
| --------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| \`cfg\`     | \`IConversationalAIAPIConfig\` | Configuration object used to initialize the API. See [\`IConversationalAIAPIConfig\`](#iconversationalaiapiconfig). |

**Return Value:**
If the method call succeeds, a \`Promise\` resolving to the initialized \`ConversationalAIAPI\` instance.

### \`subscribeMessage\` [#subscribemessage]

Subscribes to the messaging channel to get real-time updates.

\`\`\`javascript
public subscribeMessage(channel: string)
\`\`\`

This method binds the necessary RTC and RTM events and starts \`CovSubRenderController\` to process received messages.

<CalloutContainer type="info">
  <CalloutDescription>
    * You must call [\`init\`](#init) before using this method.
    * If not initialized, an error is thrown.
  </CalloutDescription>
</CalloutContainer>

| Parameter | Type     | Description                               |
| --------- | -------- | ----------------------------------------- |
| \`channel\` | \`string\` | The channel to subscribe to for messages. |

### \`unsubscribe\` [#unsubscribe]

Unsubscribes from the message channel and cleans up resources.

\`\`\`javascript
public unsubscribe()
\`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    This method unbinds RTC and RTM events, clears channels, and cleans up \`CovSubRenderController\`. You must call \`subscribeMessage\` before calling this method, otherwise an error is thrown.
  </CalloutDescription>
</CalloutContainer>

### \`interrupt\` [#interrupt]

Sends an interrupt message to the specified agent user.

\`\`\`javascript
public async interrupt(agentUserId: string)
\`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    * You must call [\`init\`](#init) before using this method.
    * If not initialized or sending fails, an error is thrown.
  </CalloutDescription>
</CalloutContainer>

| Parameter     | Type     | Description                                      |
| ------------- | -------- | ------------------------------------------------ |
| \`agentUserId\` | \`string\` | The user ID of the agent user to be interrupted. |

### \`manualSOS\` [#manualsos]

Sends a manual Start of Speech (SoS) signal to the agent over RTM, explicitly declaring that the current user has started speaking.

\`\`\`javascript
public async manualSOS(agentUserId: string): Promise<string>
\`\`\`

Keep the following in mind when calling this method:

* The component generates \`requestId\` internally and resolves it in the returned \`Promise\`. Your app can store this value to correlate it with the server-side event.
* A resolved \`Promise\` only indicates that the RTM publish succeeded — it does not indicate that the server processed the request successfully.
* Whether the server successfully processed the request is determined by the subsequent \`USER_MANUAL_SOS_RESULT\` or \`USER_MANUAL_EOS_RESULT\` event. See [\`EConversationalAIAPIEvents\`](#econversationalaiapievents).
* The client does not check locally whether manual mode is enabled. Mode validation is handled by the server.
* Common failure reasons include: the current mode configuration does not allow manual signaling, there is no active user speech to mark, or a manual SoS or EoS that has already taken effect is resubmitted within the same turn.

| Parameter     | Type     | Description                     |
| ------------- | -------- | ------------------------------- |
| \`agentUserId\` | \`string\` | Unique identifier of the agent. |

**Return Value**\\
If the method call succeeds, a \`Promise<string>\` is returned, resolving to the \`requestId\` for this request. This result only indicates that the RTM publish succeeded.

### \`manualEOS\` [#manualeos]

Sends a manual End of Speech (EoS) signal to the agent over RTM, explicitly declaring that the current user has finished speaking.

\`\`\`javascript
public async manualEOS(agentUserId: string): Promise<string>
\`\`\`

Keep the following in mind when calling this method:

* The component generates \`requestId\` internally and resolves it in the returned \`Promise\`. Your app can store this value to correlate it with the server-side event.
* A resolved \`Promise\` only indicates that the RTM publish succeeded — it does not indicate that the server processed the request successfully.
* Whether the server successfully processed the request is determined by the subsequent \`USER_MANUAL_SOS_RESULT\` or \`USER_MANUAL_EOS_RESULT\` event. See [\`EConversationalAIAPIEvents\`](#econversationalaiapievents).
* The client does not check locally whether manual mode is enabled. Mode validation is handled by the server.
* Common failure reasons include: the current mode configuration does not allow manual signaling, there is no active user speech to mark, or a manual SoS or EoS that has already taken effect is resubmitted within the same turn.

| Parameter     | Type     | Description                     |
| ------------- | -------- | ------------------------------- |
| \`agentUserId\` | \`string\` | Unique identifier of the agent. |

**Return Value**\\
If the method call succeeds, a \`Promise<string>\` is returned, resolving to the \`requestId\` for this request. This result only indicates that the RTM publish succeeded.

### \`speak\` [#speak]

Bypasses the LLM and makes the agent speak text directly through its TTS pipeline.

This method requires RTM. A resolved \`Promise\` only indicates that the RTM message was published successfully, not that the agent has finished speaking.

\`\`\`javascript
public async speak(agentUserId: string, message: SpeakMessage): Promise<void>
\`\`\`

| Parameter     | Type           | Description                                                                       |
| ------------- | -------------- | --------------------------------------------------------------------------------- |
| \`agentUserId\` | \`string\`       | Unique identifier of the agent.                                                   |
| \`message\`     | \`SpeakMessage\` | The text to speak and its playback behavior. See [\`SpeakMessage\`](#speakmessage). |

**Return Value**\\
If the method call succeeds, a \`Promise<void>\` is returned.

### \`think\` [#think]

Injects text as user input into the conversation for the LLM to process.

This method requires RTM. A resolved \`Promise\` only indicates that the RTM message was published successfully, not that the LLM has finished processing the instruction.

\`\`\`javascript
public async think(agentUserId: string, message: ThinkMessage): Promise<void>
\`\`\`

| Parameter     | Type           | Description                                                                                    |
| ------------- | -------------- | ---------------------------------------------------------------------------------------------- |
| \`agentUserId\` | \`string\`       | Unique identifier of the agent.                                                                |
| \`message\`     | \`ThinkMessage\` | The instruction text, state actions, and custom metadata. See [\`ThinkMessage\`](#thinkmessage). |

**Return Value**\\
If the method call succeeds, a \`Promise<void>\` is returned.

### \`destroy\` [#destroy]

Destroys the \`ConversationalAIAPI\` instance and cleans up resources.

\`\`\`javascript
public destroy(): void
\`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    * You must call \`unsubscribe\` before calling this method.
    * If not initialized, an error is thrown.
  </CalloutDescription>
</CalloutContainer>

## IConversationalAIAPIEventHandlers interface [#iconversationalaiapieventhandlers-interface]

Event handler interface for the Conversational AI API module.

A set of event handlers that respond to various events emitted by the conversational AI system, including agent state changes, interruptions, performance metrics, errors, and transcription updates.

| Parameter       | Type                                                                                                                               | Description                                                                                                                                                                                                                                       |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`agentUserId\`   | \`string\`                                                                                                                           | Unique identifier for the AI agent.                                                                                                                                                                                                               |
| \`event\`         | \`TStateChangeEvent \\| { turnID: number; timestamp: number } \\| TUserManualSosEvent \\| TUserManualEosEvent \\| TAgentManualEosEvent\` | Event data. The type depends on the event type. See [\`TStateChangeEvent\`](#tstatechangeevent), [\`TUserManualSosEvent\`](#tusermanualsosevent), [\`TUserManualEosEvent\`](#tusermanualeosevent), and [\`TAgentManualEosEvent\`](#tagentmanualeosevent). |
| \`metrics\`       | \`TAgentMetric\`                                                                                                                     | Performance indicator data of the agent. See [\`TAgentMetric\`](#tagentmetric).                                                                                                                                                                     |
| \`error\`         | \`TModuleError\`                                                                                                                     | Error message when an error occurs in the agent. See [\`TModuleError\`](#tmoduleerror).                                                                                                                                                             |
| \`transcription\` | \`ISubtitleHelperItem<Partial<IUserTranscription \\| IAgentTranscription>>[]\`                                                        | An array of transcripts of the conversation between the user and the agent. See [\`ISubtitleHelperItem\`](#isubtitlehelperitem).                                                                                                                    |
| \`message\`       | \`string\`                                                                                                                           | Debug log message string.                                                                                                                                                                                                                         |

## Types and Interfaces [#types-and-interfaces]

### \`TMessageReceipt\` [#tmessagereceipt]

Message receipt type definition.

<CalloutContainer type="info">
  <CalloutDescription>
    Since v1.7
  </CalloutDescription>
</CalloutContainer>

\`\`\`js
export type TMessageReceipt = {
  moduleType: EModuleType
  messageType: EChatMessageType
  message: string
  turnId: number
}
\`\`\`

| Parameter     | Type               | Description                                                                |
| ------------- | ------------------ | -------------------------------------------------------------------------- |
| \`moduleType\`  | \`EModuleType\`      | The type of module sending the message. See [\`EModuleType\`](#emoduletype). |
| \`messageType\` | \`EChatMessageType\` | The type of message. See [\`EChatMessageType\`](#echatmessagetype).          |
| \`message\`     | \`string\`           | The content of the message.                                                |
| \`turnId\`      | \`number\`           | Unique identifier for the conversation turn.                               |

### \`TUserManualEventPayload\` [#tusermanualeventpayload]

Common payload for manual SoS/EoS events.

\`\`\`typescript
export type TUserManualEventPayload = {
  success: boolean
  requestId: string
  turnId?: number
  errorMessage?: string
}
\`\`\`

| Parameter      | Type      | Description                                                                                              |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------- |
| \`success\`      | \`boolean\` | Whether the server successfully processed this manual signal.                                            |
| \`requestId\`    | \`string\`  | Request ID, corresponding to the \`requestId\` resolved by \`manualSOS\` or \`manualEOS\`.                     |
| \`turnId\`       | \`number\`  | The associated conversation turn ID. Omitted if the server's failure event does not include a \`turn_id\`. |
| \`errorMessage\` | \`string\`  | The raw error message returned by the server. Usually omitted on success.                                |

### \`TUserManualSosEvent\` [#tusermanualsosevent]

Represents a manual SoS event.

\`\`\`typescript
export type TUserManualSosEvent = {
  eventId: string
  timestamp: number
  payload: TUserManualEventPayload
}
\`\`\`

| Parameter   | Type                      | Description                                                               |
| ----------- | ------------------------- | ------------------------------------------------------------------------- |
| \`eventId\`   | \`string\`                  | Unique event ID.                                                          |
| \`timestamp\` | \`number\`                  | Event timestamp in milliseconds.                                          |
| \`payload\`   | \`TUserManualEventPayload\` | Event payload. See [\`TUserManualEventPayload\`](#tusermanualeventpayload). |

### \`TUserManualEosEvent\` [#tusermanualeosevent]

Represents a manual EoS event.

\`\`\`typescript
export type TUserManualEosEvent = {
  eventId: string
  timestamp: number
  payload: TUserManualEventPayload
}
\`\`\`

| Parameter   | Type                      | Description                                                               |
| ----------- | ------------------------- | ------------------------------------------------------------------------- |
| \`eventId\`   | \`string\`                  | Unique event ID.                                                          |
| \`timestamp\` | \`number\`                  | Event timestamp in milliseconds.                                          |
| \`payload\`   | \`TUserManualEventPayload\` | Event payload. See [\`TUserManualEventPayload\`](#tusermanualeventpayload). |

### \`TAgentManualEosPayload\` [#tagentmanualeospayload]

Payload for a server-triggered automatic EoS event.

\`\`\`typescript
export type TAgentManualEosPayload = {
  reason: string
  maxDurationMs: number
  turnId: number
}
\`\`\`

| Parameter       | Type     | Description                                                                   |
| --------------- | -------- | ----------------------------------------------------------------------------- |
| \`reason\`        | \`string\` | The reason the server automatically ended the current user's turn.            |
| \`maxDurationMs\` | \`number\` | The configured maximum duration, in milliseconds, for a single speaking turn. |
| \`turnId\`        | \`number\` | The associated conversation turn ID.                                          |

### \`TAgentManualEosEvent\` [#tagentmanualeosevent]

Represents a server-triggered automatic EoS event.

\`\`\`typescript
export type TAgentManualEosEvent = {
  eventId: string
  timestamp: number
  payload: TAgentManualEosPayload
}
\`\`\`

| Parameter   | Type                     | Description                                                             |
| ----------- | ------------------------ | ----------------------------------------------------------------------- |
| \`eventId\`   | \`string\`                 | Unique event ID.                                                        |
| \`timestamp\` | \`number\`                 | Event timestamp in milliseconds.                                        |
| \`payload\`   | \`TAgentManualEosPayload\` | Event payload. See [\`TAgentManualEosPayload\`](#tagentmanualeospayload). |

### \`IChatMessageBase\` [#ichatmessagebase]

The \`IChatMessageBase\` interface that contains the properties of the underlying message type.

<CalloutContainer type="info">
  <CalloutDescription>
    Since v1.7
  </CalloutDescription>
</CalloutContainer>

\`\`\`js
export interface IChatMessageBase {
  messageType: EChatMessageType
}
\`\`\`

| Parameter     | Type               | Description                                                               |
| ------------- | ------------------ | ------------------------------------------------------------------------- |
| \`messageType\` | \`EChatMessageType\` | Type of message. See [\`EChatMessageType\`](#echatmessagetype) for details. |

### \`IChatMessageImage\` [#ichatmessageimage]

Represents an image-based chat message, which can contain URL image data.

<CalloutContainer type="info">
  <CalloutDescription>
    Since v1.7
  </CalloutDescription>
</CalloutContainer>

\`\`\`js
export interface IChatMessageImage extends IChatMessageBase {
  messageType: EChatMessageType.IMAGE
  uuid: string
  url?: string
}
\`\`\`

| Parameter     | Type                     | Description                                                                 |
| ------------- | ------------------------ | --------------------------------------------------------------------------- |
| \`messageType\` | \`EChatMessageType.IMAGE\` | Message type, must be \`IMAGE\`. See [\`EChatMessageType\`](#echatmessagetype). |
| \`uuid\`        | \`string\`                 | Unique identifier for the image message.                                    |
| \`url\`         | \`string\`                 | Optional. URL pointing to the image resource.                               |

### \`SpeakMessage\` [#speakmessage]

Used to bypass the LLM and speak text directly through the agent's TTS pipeline.

\`\`\`js
export interface SpeakMessage {
  text: string
  priority?: EChatMessagePriority
  interruptable?: boolean
}
\`\`\`

| Parameter       | Type                   | Description                                                                                                                             |
| --------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| \`text\`          | \`string\`               | The text to speak.                                                                                                                      |
| \`priority\`      | \`EChatMessagePriority\` | Optional. The priority for handling this speak request. Defaults to \`INTERRUPTED\`. See [\`EChatMessagePriority\`](#echatmessagepriority). |
| \`interruptable\` | \`boolean\`              | Optional. Whether the user can interrupt this speech by talking. Defaults to \`true\`.                                                    |

### \`ThinkMessage\` [#thinkmessage]

Used to inject text as user input for the LLM to process.

\`\`\`js
export interface ThinkMessage {
  text: string
  onListeningAction?: EThinkListeningAction
  onThinkingAction?: EThinkThinkingAction
  onSpeakingAction?: EThinkSpeakingAction
  interruptable?: boolean
  metadata?: Record<string, string>
}
\`\`\`

| Parameter           | Type                     | Description                                                                                                                                          |
| ------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`text\`              | \`string\`                 | The instruction text to inject for the LLM.                                                                                                          |
| \`onListeningAction\` | \`EThinkListeningAction\`  | Optional. The action to take when the agent is in a listening state. Defaults to \`INTERRUPT\`. See [\`EThinkListeningAction\`](#ethinklisteningaction). |
| \`onThinkingAction\`  | \`EThinkThinkingAction\`   | Optional. The action to take when the agent is in a thinking state. Defaults to \`IGNORE\`. See [\`EThinkThinkingAction\`](#ethinkthinkingaction).       |
| \`onSpeakingAction\`  | \`EThinkSpeakingAction\`   | Optional. The action to take when the agent is in a speaking state. Defaults to \`IGNORE\`. See [\`EThinkSpeakingAction\`](#ethinkspeakingaction).       |
| \`interruptable\`     | \`boolean\`                | Optional. Whether the user can interrupt the response generated by this instruction by talking. Defaults to \`true\`.                                  |
| \`metadata\`          | \`Record<string, string>\` | Optional. Custom key-value pairs. When omitted, no metadata is written to the RTM message.                                                           |

### \`IConversationalAIAPIConfig\` [#iconversationalaiapiconfig]

Parameters used to configure the interface.

\`\`\`javascript
export interface IConversationalAIAPIConfig {
 rtcEngine: IAgoraRTCClient;
 rtmEngine: RTMClient;
 renderMode?: ETranscriptHelperMode;
 enableLog?: boolean;
 enableRenderModeFallback?: boolean;
}
\`\`\`

| Parameter                  | Type                    | Description                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`rtcEngine\`                | \`IAgoraRTCClient\`       | Agora RTC engine instance. See [\`IAgoraRTCClient\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html).                                                                                                                                                                                                                                  |
| \`rtmEngine\`                | \`RTMClient\`             | Agora RTM engine instance. See the [Signaling Web API reference](https://api-ref.agora.io/en/signaling-sdk/web/2.x/index.html).                                                                                                                                                                                                                                     |
| \`renderMode\`               | \`ETranscriptHelperMode\` | Rendering mode. See [\`ETranscriptHelperMode\`](#etranscripthelpermode).                                                                                                                                                                                                                                                                                              |
| \`enableLog\`                | \`boolean\`               | Whether to enable logging: \`true\` enables logging, \`false\` disables logging.                                                                                                                                                                                                                                                                                        |
| \`enableRenderModeFallback\` | \`boolean\`               | Whether to automatically fall back to text rendering when \`renderMode\` is set to word-level but the server doesn't provide word-level timing data. If \`true\` (default), falls back to text mode automatically. If \`false\`, stays in word mode regardless — this can result in no transcript being displayed if the server doesn't support word-level transcription. |

### \`TStateChangeEvent\` [#tstatechangeevent]

Event type used to describe a change in the state of a voice agent.

\`\`\`javascript
export type TStateChangeEvent = {
 state: EAgentState
 turnID: number
 timestamp: number
 reason: string
}
\`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    The state change event is triggered when the state of the voice agent changes. The timestamp uses the UNIX timestamp in milliseconds.
  </CalloutDescription>
</CalloutContainer>

| Parameter   | Type                          | Description                                                              |
| ----------- | ----------------------------- | ------------------------------------------------------------------------ |
| \`state\`     | [\`EAgentState\`](#eagentstate) | The current state of the voice agent. See [\`EAgentState\`](#eagentstate). |
| \`turnID\`    | \`number\`                      | Unique identifier for the current session turn.                          |
| \`timestamp\` | \`number\`                      | Timestamp in milliseconds when the state change occurred.                |
| \`reason\`    | \`string\`                      | Description of the reason for the status change.                         |

### \`TAgentMetric\` [#tagentmetric]

Used to store metric data during agent runtime.

\`\`\`javascript
export type TAgentMetric = {
 type: EModuleType
 name: string
 value: number
 timestamp: number
}
\`\`\`

| Parameter   | Type                          | Description                                                       |
| ----------- | ----------------------------- | ----------------------------------------------------------------- |
| \`type\`      | [\`EModuleType\`](#emoduletype) | Indicator module type. See [\`EModuleType\`](#emoduletype).         |
| \`name\`      | \`string\`                      | The name of the indicator.                                        |
| \`value\`     | \`number\`                      | The indicator value.                                              |
| \`timestamp\` | \`number\`                      | Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC). |

### \`TModuleError\` [#tmoduleerror]

Used to represent error messages from different AI modules, including error type, error code, error message, and timestamp.

\`\`\`javascript
export type TModuleError = {
 type: EModuleType
 code: number
 message: string
 timestamp: number
}
\`\`\`

| Parameter   | Type                          | Description                                                                  |
| ----------- | ----------------------------- | ---------------------------------------------------------------------------- |
| \`type\`      | [\`EModuleType\`](#emoduletype) | The module type where the error occurred. See [\`EModuleType\`](#emoduletype). |
| \`code\`      | \`number\`                      | Module-specific error code.                                                  |
| \`message\`   | \`string\`                      | Readable error description that makes it easier to understand and handle.    |
| \`timestamp\` | \`number\`                      | Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC).            |

### \`ISubtitleHelperItem\` [#isubtitlehelperitem]

Transcript auxiliary item interface.

The data structure for a single transcript item in the transcription system. This includes information such as user ID, stream ID, turn ID, timestamp, text content, status, and metadata.

\`\`\`javascript
export interface ISubtitleHelperItem<T> {
 uid: string;
 stream_id: number;
 turn_id: number;
 _time: number;
 text: string;
 status: ETurnStatus;
 metadata: T | null;
}
\`\`\`

| Parameter   | Type                          | Description                                                           |
| ----------- | ----------------------------- | --------------------------------------------------------------------- |
| \`uid\`       | \`string\`                      | Unique user identifier.                                               |
| \`stream_id\` | \`number\`                      | Stream identifier.                                                    |
| \`turn_id\`   | \`number\`                      | The turn identifier within the session.                               |
| \`_time\`     | \`number\`                      | Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC).     |
| \`text\`      | \`string\`                      | Transcript text content.                                              |
| \`status\`    | [\`ETurnStatus\`](#eturnstatus) | The status of the transcript item. See [\`ETurnStatus\`](#eturnstatus). |
| \`metadata\`  | \`T \\| null\`                   | Additional metadata information.                                      |

## Enum classes [#enum-classes]

### EConversationalAIAPIEvents [#econversationalaiapievents]

Event types that can be triggered by the Conversational AI API.

<CalloutContainer type="info">
  <CalloutDescription>
    Since v1.6.0
  </CalloutDescription>
</CalloutContainer>

| Value                     | Description                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------- |
| \`AGENT_STATE_CHANGED\`     | \`"agent-state-changed"\`: Agent state change event.                                  |
| \`AGENT_LISTENING_CHANGED\` | \`"agent-listening-changed"\`: Agent listening state change event.                    |
| \`AGENT_THINKING_CHANGED\`  | \`"agent-thinking-changed"\`: Agent thinking state change event.                      |
| \`AGENT_SPEAKING_CHANGED\`  | \`"agent-speaking-changed"\`: Agent speaking state change event.                      |
| \`AGENT_INTERRUPTED\`       | \`"agent-interrupted"\`: Agent interrupted event.                                     |
| \`AGENT_METRICS\`           | \`"agent-metrics"\`: Agent metrics event.                                             |
| \`AGENT_ERROR\`             | \`"agent-error"\`: Agent error event.                                                 |
| \`TRANSCRIPT_UPDATED\`      | \`"transcript-updated"\`: Transcript updated event.                                   |
| \`DEBUG_LOG\`               | \`"debug-log"\`: Debug log event.                                                     |
| \`MESSAGE_RECEIPT_UPDATED\` | \`"message-receipt-updated"\`: Message receipt updated event.                         |
| \`MESSAGE_ERROR\`           | \`"message-error"\`: Message error event.                                             |
| \`USER_MANUAL_SOS_RESULT\`  | \`"user.manual_sos.result"\`: Manual SoS result event.                                |
| \`USER_MANUAL_EOS_RESULT\`  | \`"user.manual_eos.result"\`: Manual EoS result event.                                |
| \`AGENT_MANUAL_EOS_RESULT\` | \`"assistant.manual_eos.result"\`: Server-triggered automatic EoS notification event. |

### EChatMessagePriority [#echatmessagepriority]

<CalloutContainer type="info">
  <CalloutDescription>
    Since v1.7
  </CalloutDescription>
</CalloutContainer>

Used to set the chat message processing priority.

| \`Value\`       | \`description\`                                                                          |
| ------------- | -------------------------------------------------------------------------------------- |
| \`INTERRUPTED\` | (\`'interrupted'\`): Interrupts current processing and immediately handles this message. |
| \`APPEND\`      | (\`'append'\`): Adds the message to the processing queue to be handled in order.         |
| \`IGNORE\`      | (\`'ignore'\`): Discards the message without processing.                                 |

### EThinkListeningAction [#ethinklisteningaction]

The action to take when the agent is in a listening state when a Think instruction arrives.

| \`Value\`     | \`Description\`                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------- |
| \`INJECT\`    | (\`'inject'\`): Injects the instruction into the current turn without interrupting it.          |
| \`INTERRUPT\` | (\`'interrupt'\`): Interrupts the current interaction and processes the instruction.            |
| \`APPEND\`    | (\`'append'\`): Appends the instruction for processing after the current interaction completes. |
| \`IGNORE\`    | (\`'ignore'\`): Ignores the instruction.                                                        |

### EThinkThinkingAction [#ethinkthinkingaction]

The action to take when the agent is in a thinking state when a Think instruction arrives.

| \`Value\`     | \`Description\`                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------- |
| \`INTERRUPT\` | (\`'interrupt'\`): Interrupts the current interaction and processes the instruction.            |
| \`APPEND\`    | (\`'append'\`): Appends the instruction for processing after the current interaction completes. |
| \`IGNORE\`    | (\`'ignore'\`): Ignores the instruction.                                                        |

### EThinkSpeakingAction [#ethinkspeakingaction]

The action to take when the agent is in a speaking state when a Think instruction arrives.

| \`Value\`     | \`Description\`                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------- |
| \`INTERRUPT\` | (\`'interrupt'\`): Interrupts the current interaction and processes the instruction.            |
| \`APPEND\`    | (\`'append'\`): Appends the instruction for processing after the current interaction completes. |
| \`IGNORE\`    | (\`'ignore'\`): Ignores the instruction.                                                        |

### EChatMessageType [#echatmessagetype]

Chat message types supported in conversational AI.

<CalloutContainer type="info">
  <CalloutDescription>
    Since v1.7
  </CalloutDescription>
</CalloutContainer>

| \`Value\`   | \`Description\`                        |
| --------- | ------------------------------------ |
| \`TEXT\`    | (\`'text'\`): Text message.            |
| \`IMAGE\`   | (\`'image'\`): Image message.          |
| \`UNKNOWN\` | (\`'unknown'\`): Unknown message type. |

### EAgentState [#eagentstate]

Agent state enumeration.

\`\`\`javascript
export enum EAgentState {
 IDLE = "idle",
 LISTENING = "listening", 
 THINKING = "thinking",
 SPEAKING = "speaking",
 SILENT = "silent"
}
\`\`\`

| Value       | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| \`IDLE\`      | ("idle"): The agent is idle and ready for new interactions.  |
| \`LISTENING\` | ("listening"): The agent is receiving user input.            |
| \`THINKING\`  | ("thinking"): The agent is processing the input it receives. |
| \`SPEAKING\`  | ("speaking"): The agent is outputting a response.            |
| \`SILENT\`    | ("silent"): The agent intentionally does not respond.        |

### EModuleType [#emoduletype]

Enumeration of module types for AI capabilities.

| Value     | Description                                |
| --------- | ------------------------------------------ |
| \`LLM\`     | ("llm"): Large Language Model.             |
| \`MLLM\`    | ("mllm"): Multimodal Large Language Model. |
| \`TTS\`     | ("tts"): Text-to-speech module.            |
| \`CONTEXT\` | ("context"): Context management module.    |
| \`UNKNOWN\` | ("unknown"): Unknown module type.          |

### ETranscriptHelperMode [#etranscripthelpermode]

The mode type for transcript processing.

| Value     | Description                         |
| --------- | ----------------------------------- |
| \`TEXT\`    | Processes transcript in text mode.  |
| \`WORD\`    | Processes transcript in word mode.  |
| \`UNKNOWN\` | Unknown transcript processing mode. |

### ETurnStatus [#eturnstatus]

TURN connection status enumeration.

| Value         | Description                                 |
| ------------- | ------------------------------------------- |
| \`IN_PROGRESS\` | (0): TURN connection in progress.           |
| \`END\`         | (1): TURN connection has ended.             |
| \`INTERRUPTED\` | (2): TURN connection has been disconnected. |
`;
export let structuredData = {
  contents: [{
    heading: "installation",
    content: "Add the toolkit to your project using a package manager or by copying the source code."
  }, {
    heading: "installation",
    content: "Install the toolkit package for your project type:"
  }, {
    heading: "installation",
    content: "Vanilla JS or TypeScript:"
  }, {
    heading: "installation",
    content: "React:"
  }, {
    heading: "installation",
    content: "Copy the `conversational-ai` package into your project, then import the toolkit before calling its APIs."
  }, {
    heading: "installation",
    content: "The Web toolkit API provides the following classes and methods."
  }, {
    heading: "api-overview",
    content: "API"
  }, {
    heading: "api-overview",
    content: "Description"
  }, {
    heading: "api-overview",
    content: "`chat`"
  }, {
    heading: "api-overview",
    content: "Send chat messages to a conversational agent."
  }, {
    heading: "api-overview",
    content: "`getInstance`"
  }, {
    heading: "api-overview",
    content: "Gets a singleton instance of `ConversationalAIAPI`."
  }, {
    heading: "api-overview",
    content: "`init`"
  }, {
    heading: "api-overview",
    content: "Initializes the `ConversationalAIAPI` singleton instance."
  }, {
    heading: "api-overview",
    content: "`subscribeMessage`"
  }, {
    heading: "api-overview",
    content: "Subscribes to the messaging channel to get real-time updates."
  }, {
    heading: "api-overview",
    content: "`unsubscribe`"
  }, {
    heading: "api-overview",
    content: "Unsubscribes from the message channel and cleans up resources."
  }, {
    heading: "api-overview",
    content: "`interrupt`"
  }, {
    heading: "api-overview",
    content: "Sends an interrupt message to the specified agent user."
  }, {
    heading: "api-overview",
    content: "`manualSOS`"
  }, {
    heading: "api-overview",
    content: "Sends a manual Start of Speech (SoS) signal to the agent."
  }, {
    heading: "api-overview",
    content: "`manualEOS`"
  }, {
    heading: "api-overview",
    content: "Sends a manual End of Speech (EoS) signal to the agent."
  }, {
    heading: "api-overview",
    content: "`speak`"
  }, {
    heading: "api-overview",
    content: "Makes the agent speak text directly, bypassing the LLM."
  }, {
    heading: "api-overview",
    content: "`think`"
  }, {
    heading: "api-overview",
    content: "Injects text as user input for the LLM to process."
  }, {
    heading: "api-overview",
    content: "`destroy`"
  }, {
    heading: "api-overview",
    content: "Destroys the `ConversationalAIAPI` instance and cleans up resources."
  }, {
    heading: "conversationalaiapi-class",
    content: "Class for managing conversational AI engine interactions through Agora's RTC and RTM services."
  }, {
    heading: "chat",
    content: "Send chat messages to a conversational agent."
  }, {
    heading: "chat",
    content: "Since v1.7"
  }, {
    heading: "sample-code",
    content: "Parameter"
  }, {
    heading: "sample-code",
    content: "Type"
  }, {
    heading: "sample-code",
    content: "Description"
  }, {
    heading: "sample-code",
    content: "`agentUserId`"
  }, {
    heading: "sample-code",
    content: "`string`"
  }, {
    heading: "sample-code",
    content: "Unique identifier of the agent."
  }, {
    heading: "sample-code",
    content: "`message`"
  }, {
    heading: "sample-code",
    content: "`IChatMessageText` \\| `IChatMessageImage`"
  }, {
    heading: "sample-code",
    content: "Chat message to be sent. Should be of type `IChatMessageImage`, see details in `IChatMessageImage`."
  }, {
    heading: "sample-code",
    content: "**Return Value**\\\nIf the method call succeeds, a Promise is returned, indicating the result of the message sending."
  }, {
    heading: "getinstance",
    content: "Gets a singleton instance of `ConversationalAIAPI`. This method ensures that only one instance exists throughout the entire application lifecycle."
  }, {
    heading: "getinstance",
    content: "You must call `init` before using this method."
  }, {
    heading: "getinstance",
    content: "If not initialized, an error is thrown."
  }, {
    heading: "getinstance",
    content: "**Return Value:**\nIf the method call succeeds, a `ConversationalAIAPI` instance is returned. If not initialized, a `NotFoundError` exception is thrown."
  }, {
    heading: "init",
    content: "Initializes the `ConversationalAIAPI` singleton instance."
  }, {
    heading: "init",
    content: "This method sets the RTC and RTM engines, rendering mode, and logging options. You must call this method before calling other methods of `ConversationalAIAPI`. Awaiting this method returns the initialized instance directly, so a separate call to `getInstance` is not required immediately after initialization."
  }, {
    heading: "init",
    content: "Only one instance can be initialized at a time."
  }, {
    heading: "init",
    content: "If already initialized, an error is thrown."
  }, {
    heading: "init",
    content: "Parameter"
  }, {
    heading: "init",
    content: "Type"
  }, {
    heading: "init",
    content: "Description"
  }, {
    heading: "init",
    content: "`cfg`"
  }, {
    heading: "init",
    content: "`IConversationalAIAPIConfig`"
  }, {
    heading: "init",
    content: "Configuration object used to initialize the API. See `IConversationalAIAPIConfig`."
  }, {
    heading: "init",
    content: "**Return Value:**\nIf the method call succeeds, a `Promise` resolving to the initialized `ConversationalAIAPI` instance."
  }, {
    heading: "subscribemessage",
    content: "Subscribes to the messaging channel to get real-time updates."
  }, {
    heading: "subscribemessage",
    content: "This method binds the necessary RTC and RTM events and starts `CovSubRenderController` to process received messages."
  }, {
    heading: "subscribemessage",
    content: "You must call `init` before using this method."
  }, {
    heading: "subscribemessage",
    content: "If not initialized, an error is thrown."
  }, {
    heading: "subscribemessage",
    content: "Parameter"
  }, {
    heading: "subscribemessage",
    content: "Type"
  }, {
    heading: "subscribemessage",
    content: "Description"
  }, {
    heading: "subscribemessage",
    content: "`channel`"
  }, {
    heading: "subscribemessage",
    content: "`string`"
  }, {
    heading: "subscribemessage",
    content: "The channel to subscribe to for messages."
  }, {
    heading: "unsubscribe",
    content: "Unsubscribes from the message channel and cleans up resources."
  }, {
    heading: "unsubscribe",
    content: "This method unbinds RTC and RTM events, clears channels, and cleans up `CovSubRenderController`. You must call `subscribeMessage` before calling this method, otherwise an error is thrown."
  }, {
    heading: "interrupt",
    content: "Sends an interrupt message to the specified agent user."
  }, {
    heading: "interrupt",
    content: "You must call `init` before using this method."
  }, {
    heading: "interrupt",
    content: "If not initialized or sending fails, an error is thrown."
  }, {
    heading: "interrupt",
    content: "Parameter"
  }, {
    heading: "interrupt",
    content: "Type"
  }, {
    heading: "interrupt",
    content: "Description"
  }, {
    heading: "interrupt",
    content: "`agentUserId`"
  }, {
    heading: "interrupt",
    content: "`string`"
  }, {
    heading: "interrupt",
    content: "The user ID of the agent user to be interrupted."
  }, {
    heading: "manualsos",
    content: "Sends a manual Start of Speech (SoS) signal to the agent over RTM, explicitly declaring that the current user has started speaking."
  }, {
    heading: "manualsos",
    content: "Keep the following in mind when calling this method:"
  }, {
    heading: "manualsos",
    content: "The component generates `requestId` internally and resolves it in the returned `Promise`. Your app can store this value to correlate it with the server-side event."
  }, {
    heading: "manualsos",
    content: "A resolved `Promise` only indicates that the RTM publish succeeded — it does not indicate that the server processed the request successfully."
  }, {
    heading: "manualsos",
    content: "Whether the server successfully processed the request is determined by the subsequent `USER_MANUAL_SOS_RESULT` or `USER_MANUAL_EOS_RESULT` event. See `EConversationalAIAPIEvents`."
  }, {
    heading: "manualsos",
    content: "The client does not check locally whether manual mode is enabled. Mode validation is handled by the server."
  }, {
    heading: "manualsos",
    content: "Common failure reasons include: the current mode configuration does not allow manual signaling, there is no active user speech to mark, or a manual SoS or EoS that has already taken effect is resubmitted within the same turn."
  }, {
    heading: "manualsos",
    content: "Parameter"
  }, {
    heading: "manualsos",
    content: "Type"
  }, {
    heading: "manualsos",
    content: "Description"
  }, {
    heading: "manualsos",
    content: "`agentUserId`"
  }, {
    heading: "manualsos",
    content: "`string`"
  }, {
    heading: "manualsos",
    content: "Unique identifier of the agent."
  }, {
    heading: "manualsos",
    content: "**Return Value**\\\nIf the method call succeeds, a `Promise<string>` is returned, resolving to the `requestId` for this request. This result only indicates that the RTM publish succeeded."
  }, {
    heading: "manualeos",
    content: "Sends a manual End of Speech (EoS) signal to the agent over RTM, explicitly declaring that the current user has finished speaking."
  }, {
    heading: "manualeos",
    content: "Keep the following in mind when calling this method:"
  }, {
    heading: "manualeos",
    content: "The component generates `requestId` internally and resolves it in the returned `Promise`. Your app can store this value to correlate it with the server-side event."
  }, {
    heading: "manualeos",
    content: "A resolved `Promise` only indicates that the RTM publish succeeded — it does not indicate that the server processed the request successfully."
  }, {
    heading: "manualeos",
    content: "Whether the server successfully processed the request is determined by the subsequent `USER_MANUAL_SOS_RESULT` or `USER_MANUAL_EOS_RESULT` event. See `EConversationalAIAPIEvents`."
  }, {
    heading: "manualeos",
    content: "The client does not check locally whether manual mode is enabled. Mode validation is handled by the server."
  }, {
    heading: "manualeos",
    content: "Common failure reasons include: the current mode configuration does not allow manual signaling, there is no active user speech to mark, or a manual SoS or EoS that has already taken effect is resubmitted within the same turn."
  }, {
    heading: "manualeos",
    content: "Parameter"
  }, {
    heading: "manualeos",
    content: "Type"
  }, {
    heading: "manualeos",
    content: "Description"
  }, {
    heading: "manualeos",
    content: "`agentUserId`"
  }, {
    heading: "manualeos",
    content: "`string`"
  }, {
    heading: "manualeos",
    content: "Unique identifier of the agent."
  }, {
    heading: "manualeos",
    content: "**Return Value**\\\nIf the method call succeeds, a `Promise<string>` is returned, resolving to the `requestId` for this request. This result only indicates that the RTM publish succeeded."
  }, {
    heading: "speak",
    content: "Bypasses the LLM and makes the agent speak text directly through its TTS pipeline."
  }, {
    heading: "speak",
    content: "This method requires RTM. A resolved `Promise` only indicates that the RTM message was published successfully, not that the agent has finished speaking."
  }, {
    heading: "speak",
    content: "Parameter"
  }, {
    heading: "speak",
    content: "Type"
  }, {
    heading: "speak",
    content: "Description"
  }, {
    heading: "speak",
    content: "`agentUserId`"
  }, {
    heading: "speak",
    content: "`string`"
  }, {
    heading: "speak",
    content: "Unique identifier of the agent."
  }, {
    heading: "speak",
    content: "`message`"
  }, {
    heading: "speak",
    content: "`SpeakMessage`"
  }, {
    heading: "speak",
    content: "The text to speak and its playback behavior. See `SpeakMessage`."
  }, {
    heading: "speak",
    content: "**Return Value**\\\nIf the method call succeeds, a `Promise<void>` is returned."
  }, {
    heading: "think",
    content: "Injects text as user input into the conversation for the LLM to process."
  }, {
    heading: "think",
    content: "This method requires RTM. A resolved `Promise` only indicates that the RTM message was published successfully, not that the LLM has finished processing the instruction."
  }, {
    heading: "think",
    content: "Parameter"
  }, {
    heading: "think",
    content: "Type"
  }, {
    heading: "think",
    content: "Description"
  }, {
    heading: "think",
    content: "`agentUserId`"
  }, {
    heading: "think",
    content: "`string`"
  }, {
    heading: "think",
    content: "Unique identifier of the agent."
  }, {
    heading: "think",
    content: "`message`"
  }, {
    heading: "think",
    content: "`ThinkMessage`"
  }, {
    heading: "think",
    content: "The instruction text, state actions, and custom metadata. See `ThinkMessage`."
  }, {
    heading: "think",
    content: "**Return Value**\\\nIf the method call succeeds, a `Promise<void>` is returned."
  }, {
    heading: "destroy",
    content: "Destroys the `ConversationalAIAPI` instance and cleans up resources."
  }, {
    heading: "destroy",
    content: "You must call `unsubscribe` before calling this method."
  }, {
    heading: "destroy",
    content: "If not initialized, an error is thrown."
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "Event handler interface for the Conversational AI API module."
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "A set of event handlers that respond to various events emitted by the conversational AI system, including agent state changes, interruptions, performance metrics, errors, and transcription updates."
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "Parameter"
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "Type"
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "Description"
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "`agentUserId`"
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "`string`"
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "Unique identifier for the AI agent."
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "`event`"
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "`TStateChangeEvent \\| { turnID: number; timestamp: number } \\| TUserManualSosEvent \\| TUserManualEosEvent \\| TAgentManualEosEvent`"
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "Event data. The type depends on the event type. See `TStateChangeEvent`, `TUserManualSosEvent`, `TUserManualEosEvent`, and `TAgentManualEosEvent`."
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "`metrics`"
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "`TAgentMetric`"
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "Performance indicator data of the agent. See `TAgentMetric`."
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "`error`"
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "`TModuleError`"
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "Error message when an error occurs in the agent. See `TModuleError`."
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "`transcription`"
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "`ISubtitleHelperItem<Partial<IUserTranscription \\| IAgentTranscription>>[]`"
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "An array of transcripts of the conversation between the user and the agent. See `ISubtitleHelperItem`."
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "`message`"
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "`string`"
  }, {
    heading: "iconversationalaiapieventhandlers-interface",
    content: "Debug log message string."
  }, {
    heading: "tmessagereceipt",
    content: "Message receipt type definition."
  }, {
    heading: "tmessagereceipt",
    content: "Since v1.7"
  }, {
    heading: "tmessagereceipt",
    content: "Parameter"
  }, {
    heading: "tmessagereceipt",
    content: "Type"
  }, {
    heading: "tmessagereceipt",
    content: "Description"
  }, {
    heading: "tmessagereceipt",
    content: "`moduleType`"
  }, {
    heading: "tmessagereceipt",
    content: "`EModuleType`"
  }, {
    heading: "tmessagereceipt",
    content: "The type of module sending the message. See `EModuleType`."
  }, {
    heading: "tmessagereceipt",
    content: "`messageType`"
  }, {
    heading: "tmessagereceipt",
    content: "`EChatMessageType`"
  }, {
    heading: "tmessagereceipt",
    content: "The type of message. See `EChatMessageType`."
  }, {
    heading: "tmessagereceipt",
    content: "`message`"
  }, {
    heading: "tmessagereceipt",
    content: "`string`"
  }, {
    heading: "tmessagereceipt",
    content: "The content of the message."
  }, {
    heading: "tmessagereceipt",
    content: "`turnId`"
  }, {
    heading: "tmessagereceipt",
    content: "`number`"
  }, {
    heading: "tmessagereceipt",
    content: "Unique identifier for the conversation turn."
  }, {
    heading: "tusermanualeventpayload",
    content: "Common payload for manual SoS/EoS events."
  }, {
    heading: "tusermanualeventpayload",
    content: "Parameter"
  }, {
    heading: "tusermanualeventpayload",
    content: "Type"
  }, {
    heading: "tusermanualeventpayload",
    content: "Description"
  }, {
    heading: "tusermanualeventpayload",
    content: "`success`"
  }, {
    heading: "tusermanualeventpayload",
    content: "`boolean`"
  }, {
    heading: "tusermanualeventpayload",
    content: "Whether the server successfully processed this manual signal."
  }, {
    heading: "tusermanualeventpayload",
    content: "`requestId`"
  }, {
    heading: "tusermanualeventpayload",
    content: "`string`"
  }, {
    heading: "tusermanualeventpayload",
    content: "Request ID, corresponding to the `requestId` resolved by `manualSOS` or `manualEOS`."
  }, {
    heading: "tusermanualeventpayload",
    content: "`turnId`"
  }, {
    heading: "tusermanualeventpayload",
    content: "`number`"
  }, {
    heading: "tusermanualeventpayload",
    content: "The associated conversation turn ID. Omitted if the server's failure event does not include a `turn_id`."
  }, {
    heading: "tusermanualeventpayload",
    content: "`errorMessage`"
  }, {
    heading: "tusermanualeventpayload",
    content: "`string`"
  }, {
    heading: "tusermanualeventpayload",
    content: "The raw error message returned by the server. Usually omitted on success."
  }, {
    heading: "tusermanualsosevent",
    content: "Represents a manual SoS event."
  }, {
    heading: "tusermanualsosevent",
    content: "Parameter"
  }, {
    heading: "tusermanualsosevent",
    content: "Type"
  }, {
    heading: "tusermanualsosevent",
    content: "Description"
  }, {
    heading: "tusermanualsosevent",
    content: "`eventId`"
  }, {
    heading: "tusermanualsosevent",
    content: "`string`"
  }, {
    heading: "tusermanualsosevent",
    content: "Unique event ID."
  }, {
    heading: "tusermanualsosevent",
    content: "`timestamp`"
  }, {
    heading: "tusermanualsosevent",
    content: "`number`"
  }, {
    heading: "tusermanualsosevent",
    content: "Event timestamp in milliseconds."
  }, {
    heading: "tusermanualsosevent",
    content: "`payload`"
  }, {
    heading: "tusermanualsosevent",
    content: "`TUserManualEventPayload`"
  }, {
    heading: "tusermanualsosevent",
    content: "Event payload. See `TUserManualEventPayload`."
  }, {
    heading: "tusermanualeosevent",
    content: "Represents a manual EoS event."
  }, {
    heading: "tusermanualeosevent",
    content: "Parameter"
  }, {
    heading: "tusermanualeosevent",
    content: "Type"
  }, {
    heading: "tusermanualeosevent",
    content: "Description"
  }, {
    heading: "tusermanualeosevent",
    content: "`eventId`"
  }, {
    heading: "tusermanualeosevent",
    content: "`string`"
  }, {
    heading: "tusermanualeosevent",
    content: "Unique event ID."
  }, {
    heading: "tusermanualeosevent",
    content: "`timestamp`"
  }, {
    heading: "tusermanualeosevent",
    content: "`number`"
  }, {
    heading: "tusermanualeosevent",
    content: "Event timestamp in milliseconds."
  }, {
    heading: "tusermanualeosevent",
    content: "`payload`"
  }, {
    heading: "tusermanualeosevent",
    content: "`TUserManualEventPayload`"
  }, {
    heading: "tusermanualeosevent",
    content: "Event payload. See `TUserManualEventPayload`."
  }, {
    heading: "tagentmanualeospayload",
    content: "Payload for a server-triggered automatic EoS event."
  }, {
    heading: "tagentmanualeospayload",
    content: "Parameter"
  }, {
    heading: "tagentmanualeospayload",
    content: "Type"
  }, {
    heading: "tagentmanualeospayload",
    content: "Description"
  }, {
    heading: "tagentmanualeospayload",
    content: "`reason`"
  }, {
    heading: "tagentmanualeospayload",
    content: "`string`"
  }, {
    heading: "tagentmanualeospayload",
    content: "The reason the server automatically ended the current user's turn."
  }, {
    heading: "tagentmanualeospayload",
    content: "`maxDurationMs`"
  }, {
    heading: "tagentmanualeospayload",
    content: "`number`"
  }, {
    heading: "tagentmanualeospayload",
    content: "The configured maximum duration, in milliseconds, for a single speaking turn."
  }, {
    heading: "tagentmanualeospayload",
    content: "`turnId`"
  }, {
    heading: "tagentmanualeospayload",
    content: "`number`"
  }, {
    heading: "tagentmanualeospayload",
    content: "The associated conversation turn ID."
  }, {
    heading: "tagentmanualeosevent",
    content: "Represents a server-triggered automatic EoS event."
  }, {
    heading: "tagentmanualeosevent",
    content: "Parameter"
  }, {
    heading: "tagentmanualeosevent",
    content: "Type"
  }, {
    heading: "tagentmanualeosevent",
    content: "Description"
  }, {
    heading: "tagentmanualeosevent",
    content: "`eventId`"
  }, {
    heading: "tagentmanualeosevent",
    content: "`string`"
  }, {
    heading: "tagentmanualeosevent",
    content: "Unique event ID."
  }, {
    heading: "tagentmanualeosevent",
    content: "`timestamp`"
  }, {
    heading: "tagentmanualeosevent",
    content: "`number`"
  }, {
    heading: "tagentmanualeosevent",
    content: "Event timestamp in milliseconds."
  }, {
    heading: "tagentmanualeosevent",
    content: "`payload`"
  }, {
    heading: "tagentmanualeosevent",
    content: "`TAgentManualEosPayload`"
  }, {
    heading: "tagentmanualeosevent",
    content: "Event payload. See `TAgentManualEosPayload`."
  }, {
    heading: "ichatmessagebase",
    content: "The `IChatMessageBase` interface that contains the properties of the underlying message type."
  }, {
    heading: "ichatmessagebase",
    content: "Since v1.7"
  }, {
    heading: "ichatmessagebase",
    content: "Parameter"
  }, {
    heading: "ichatmessagebase",
    content: "Type"
  }, {
    heading: "ichatmessagebase",
    content: "Description"
  }, {
    heading: "ichatmessagebase",
    content: "`messageType`"
  }, {
    heading: "ichatmessagebase",
    content: "`EChatMessageType`"
  }, {
    heading: "ichatmessagebase",
    content: "Type of message. See `EChatMessageType` for details."
  }, {
    heading: "ichatmessageimage",
    content: "Represents an image-based chat message, which can contain URL image data."
  }, {
    heading: "ichatmessageimage",
    content: "Since v1.7"
  }, {
    heading: "ichatmessageimage",
    content: "Parameter"
  }, {
    heading: "ichatmessageimage",
    content: "Type"
  }, {
    heading: "ichatmessageimage",
    content: "Description"
  }, {
    heading: "ichatmessageimage",
    content: "`messageType`"
  }, {
    heading: "ichatmessageimage",
    content: "`EChatMessageType.IMAGE`"
  }, {
    heading: "ichatmessageimage",
    content: "Message type, must be `IMAGE`. See `EChatMessageType`."
  }, {
    heading: "ichatmessageimage",
    content: "`uuid`"
  }, {
    heading: "ichatmessageimage",
    content: "`string`"
  }, {
    heading: "ichatmessageimage",
    content: "Unique identifier for the image message."
  }, {
    heading: "ichatmessageimage",
    content: "`url`"
  }, {
    heading: "ichatmessageimage",
    content: "`string`"
  }, {
    heading: "ichatmessageimage",
    content: "Optional. URL pointing to the image resource."
  }, {
    heading: "speakmessage",
    content: "Used to bypass the LLM and speak text directly through the agent's TTS pipeline."
  }, {
    heading: "speakmessage",
    content: "Parameter"
  }, {
    heading: "speakmessage",
    content: "Type"
  }, {
    heading: "speakmessage",
    content: "Description"
  }, {
    heading: "speakmessage",
    content: "`text`"
  }, {
    heading: "speakmessage",
    content: "`string`"
  }, {
    heading: "speakmessage",
    content: "The text to speak."
  }, {
    heading: "speakmessage",
    content: "`priority`"
  }, {
    heading: "speakmessage",
    content: "`EChatMessagePriority`"
  }, {
    heading: "speakmessage",
    content: "Optional. The priority for handling this speak request. Defaults to `INTERRUPTED`. See `EChatMessagePriority`."
  }, {
    heading: "speakmessage",
    content: "`interruptable`"
  }, {
    heading: "speakmessage",
    content: "`boolean`"
  }, {
    heading: "speakmessage",
    content: "Optional. Whether the user can interrupt this speech by talking. Defaults to `true`."
  }, {
    heading: "thinkmessage",
    content: "Used to inject text as user input for the LLM to process."
  }, {
    heading: "thinkmessage",
    content: "Parameter"
  }, {
    heading: "thinkmessage",
    content: "Type"
  }, {
    heading: "thinkmessage",
    content: "Description"
  }, {
    heading: "thinkmessage",
    content: "`text`"
  }, {
    heading: "thinkmessage",
    content: "`string`"
  }, {
    heading: "thinkmessage",
    content: "The instruction text to inject for the LLM."
  }, {
    heading: "thinkmessage",
    content: "`onListeningAction`"
  }, {
    heading: "thinkmessage",
    content: "`EThinkListeningAction`"
  }, {
    heading: "thinkmessage",
    content: "Optional. The action to take when the agent is in a listening state. Defaults to `INTERRUPT`. See `EThinkListeningAction`."
  }, {
    heading: "thinkmessage",
    content: "`onThinkingAction`"
  }, {
    heading: "thinkmessage",
    content: "`EThinkThinkingAction`"
  }, {
    heading: "thinkmessage",
    content: "Optional. The action to take when the agent is in a thinking state. Defaults to `IGNORE`. See `EThinkThinkingAction`."
  }, {
    heading: "thinkmessage",
    content: "`onSpeakingAction`"
  }, {
    heading: "thinkmessage",
    content: "`EThinkSpeakingAction`"
  }, {
    heading: "thinkmessage",
    content: "Optional. The action to take when the agent is in a speaking state. Defaults to `IGNORE`. See `EThinkSpeakingAction`."
  }, {
    heading: "thinkmessage",
    content: "`interruptable`"
  }, {
    heading: "thinkmessage",
    content: "`boolean`"
  }, {
    heading: "thinkmessage",
    content: "Optional. Whether the user can interrupt the response generated by this instruction by talking. Defaults to `true`."
  }, {
    heading: "thinkmessage",
    content: "`metadata`"
  }, {
    heading: "thinkmessage",
    content: "`Record<string, string>`"
  }, {
    heading: "thinkmessage",
    content: "Optional. Custom key-value pairs. When omitted, no metadata is written to the RTM message."
  }, {
    heading: "iconversationalaiapiconfig",
    content: "Parameters used to configure the interface."
  }, {
    heading: "iconversationalaiapiconfig",
    content: "Parameter"
  }, {
    heading: "iconversationalaiapiconfig",
    content: "Type"
  }, {
    heading: "iconversationalaiapiconfig",
    content: "Description"
  }, {
    heading: "iconversationalaiapiconfig",
    content: "`rtcEngine`"
  }, {
    heading: "iconversationalaiapiconfig",
    content: "`IAgoraRTCClient`"
  }, {
    heading: "iconversationalaiapiconfig",
    content: "Agora RTC engine instance. See `IAgoraRTCClient`."
  }, {
    heading: "iconversationalaiapiconfig",
    content: "`rtmEngine`"
  }, {
    heading: "iconversationalaiapiconfig",
    content: "`RTMClient`"
  }, {
    heading: "iconversationalaiapiconfig",
    content: "Agora RTM engine instance. See the Signaling Web API reference."
  }, {
    heading: "iconversationalaiapiconfig",
    content: "`renderMode`"
  }, {
    heading: "iconversationalaiapiconfig",
    content: "`ETranscriptHelperMode`"
  }, {
    heading: "iconversationalaiapiconfig",
    content: "Rendering mode. See `ETranscriptHelperMode`."
  }, {
    heading: "iconversationalaiapiconfig",
    content: "`enableLog`"
  }, {
    heading: "iconversationalaiapiconfig",
    content: "`boolean`"
  }, {
    heading: "iconversationalaiapiconfig",
    content: "Whether to enable logging: `true` enables logging, `false` disables logging."
  }, {
    heading: "iconversationalaiapiconfig",
    content: "`enableRenderModeFallback`"
  }, {
    heading: "iconversationalaiapiconfig",
    content: "`boolean`"
  }, {
    heading: "iconversationalaiapiconfig",
    content: "Whether to automatically fall back to text rendering when `renderMode` is set to word-level but the server doesn't provide word-level timing data. If `true` (default), falls back to text mode automatically. If `false`, stays in word mode regardless — this can result in no transcript being displayed if the server doesn't support word-level transcription."
  }, {
    heading: "tstatechangeevent",
    content: "Event type used to describe a change in the state of a voice agent."
  }, {
    heading: "tstatechangeevent",
    content: "The state change event is triggered when the state of the voice agent changes. The timestamp uses the UNIX timestamp in milliseconds."
  }, {
    heading: "tstatechangeevent",
    content: "Parameter"
  }, {
    heading: "tstatechangeevent",
    content: "Type"
  }, {
    heading: "tstatechangeevent",
    content: "Description"
  }, {
    heading: "tstatechangeevent",
    content: "`state`"
  }, {
    heading: "tstatechangeevent",
    content: "`EAgentState`"
  }, {
    heading: "tstatechangeevent",
    content: "The current state of the voice agent. See `EAgentState`."
  }, {
    heading: "tstatechangeevent",
    content: "`turnID`"
  }, {
    heading: "tstatechangeevent",
    content: "`number`"
  }, {
    heading: "tstatechangeevent",
    content: "Unique identifier for the current session turn."
  }, {
    heading: "tstatechangeevent",
    content: "`timestamp`"
  }, {
    heading: "tstatechangeevent",
    content: "`number`"
  }, {
    heading: "tstatechangeevent",
    content: "Timestamp in milliseconds when the state change occurred."
  }, {
    heading: "tstatechangeevent",
    content: "`reason`"
  }, {
    heading: "tstatechangeevent",
    content: "`string`"
  }, {
    heading: "tstatechangeevent",
    content: "Description of the reason for the status change."
  }, {
    heading: "tagentmetric",
    content: "Used to store metric data during agent runtime."
  }, {
    heading: "tagentmetric",
    content: "Parameter"
  }, {
    heading: "tagentmetric",
    content: "Type"
  }, {
    heading: "tagentmetric",
    content: "Description"
  }, {
    heading: "tagentmetric",
    content: "`type`"
  }, {
    heading: "tagentmetric",
    content: "`EModuleType`"
  }, {
    heading: "tagentmetric",
    content: "Indicator module type. See `EModuleType`."
  }, {
    heading: "tagentmetric",
    content: "`name`"
  }, {
    heading: "tagentmetric",
    content: "`string`"
  }, {
    heading: "tagentmetric",
    content: "The name of the indicator."
  }, {
    heading: "tagentmetric",
    content: "`value`"
  }, {
    heading: "tagentmetric",
    content: "`number`"
  }, {
    heading: "tagentmetric",
    content: "The indicator value."
  }, {
    heading: "tagentmetric",
    content: "`timestamp`"
  }, {
    heading: "tagentmetric",
    content: "`number`"
  }, {
    heading: "tagentmetric",
    content: "Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC)."
  }, {
    heading: "tmoduleerror",
    content: "Used to represent error messages from different AI modules, including error type, error code, error message, and timestamp."
  }, {
    heading: "tmoduleerror",
    content: "Parameter"
  }, {
    heading: "tmoduleerror",
    content: "Type"
  }, {
    heading: "tmoduleerror",
    content: "Description"
  }, {
    heading: "tmoduleerror",
    content: "`type`"
  }, {
    heading: "tmoduleerror",
    content: "`EModuleType`"
  }, {
    heading: "tmoduleerror",
    content: "The module type where the error occurred. See `EModuleType`."
  }, {
    heading: "tmoduleerror",
    content: "`code`"
  }, {
    heading: "tmoduleerror",
    content: "`number`"
  }, {
    heading: "tmoduleerror",
    content: "Module-specific error code."
  }, {
    heading: "tmoduleerror",
    content: "`message`"
  }, {
    heading: "tmoduleerror",
    content: "`string`"
  }, {
    heading: "tmoduleerror",
    content: "Readable error description that makes it easier to understand and handle."
  }, {
    heading: "tmoduleerror",
    content: "`timestamp`"
  }, {
    heading: "tmoduleerror",
    content: "`number`"
  }, {
    heading: "tmoduleerror",
    content: "Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC)."
  }, {
    heading: "isubtitlehelperitem",
    content: "Transcript auxiliary item interface."
  }, {
    heading: "isubtitlehelperitem",
    content: "The data structure for a single transcript item in the transcription system. This includes information such as user ID, stream ID, turn ID, timestamp, text content, status, and metadata."
  }, {
    heading: "isubtitlehelperitem",
    content: "Parameter"
  }, {
    heading: "isubtitlehelperitem",
    content: "Type"
  }, {
    heading: "isubtitlehelperitem",
    content: "Description"
  }, {
    heading: "isubtitlehelperitem",
    content: "`uid`"
  }, {
    heading: "isubtitlehelperitem",
    content: "`string`"
  }, {
    heading: "isubtitlehelperitem",
    content: "Unique user identifier."
  }, {
    heading: "isubtitlehelperitem",
    content: "`stream_id`"
  }, {
    heading: "isubtitlehelperitem",
    content: "`number`"
  }, {
    heading: "isubtitlehelperitem",
    content: "Stream identifier."
  }, {
    heading: "isubtitlehelperitem",
    content: "`turn_id`"
  }, {
    heading: "isubtitlehelperitem",
    content: "`number`"
  }, {
    heading: "isubtitlehelperitem",
    content: "The turn identifier within the session."
  }, {
    heading: "isubtitlehelperitem",
    content: "`_time`"
  }, {
    heading: "isubtitlehelperitem",
    content: "`number`"
  }, {
    heading: "isubtitlehelperitem",
    content: "Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC)."
  }, {
    heading: "isubtitlehelperitem",
    content: "`text`"
  }, {
    heading: "isubtitlehelperitem",
    content: "`string`"
  }, {
    heading: "isubtitlehelperitem",
    content: "Transcript text content."
  }, {
    heading: "isubtitlehelperitem",
    content: "`status`"
  }, {
    heading: "isubtitlehelperitem",
    content: "`ETurnStatus`"
  }, {
    heading: "isubtitlehelperitem",
    content: "The status of the transcript item. See `ETurnStatus`."
  }, {
    heading: "isubtitlehelperitem",
    content: "`metadata`"
  }, {
    heading: "isubtitlehelperitem",
    content: "`T \\| null`"
  }, {
    heading: "isubtitlehelperitem",
    content: "Additional metadata information."
  }, {
    heading: "econversationalaiapievents",
    content: "Event types that can be triggered by the Conversational AI API."
  }, {
    heading: "econversationalaiapievents",
    content: "Since v1.6.0"
  }, {
    heading: "econversationalaiapievents",
    content: "Value"
  }, {
    heading: "econversationalaiapievents",
    content: "Description"
  }, {
    heading: "econversationalaiapievents",
    content: "`AGENT_STATE_CHANGED`"
  }, {
    heading: "econversationalaiapievents",
    content: '`"agent-state-changed"`: Agent state change event.'
  }, {
    heading: "econversationalaiapievents",
    content: "`AGENT_LISTENING_CHANGED`"
  }, {
    heading: "econversationalaiapievents",
    content: '`"agent-listening-changed"`: Agent listening state change event.'
  }, {
    heading: "econversationalaiapievents",
    content: "`AGENT_THINKING_CHANGED`"
  }, {
    heading: "econversationalaiapievents",
    content: '`"agent-thinking-changed"`: Agent thinking state change event.'
  }, {
    heading: "econversationalaiapievents",
    content: "`AGENT_SPEAKING_CHANGED`"
  }, {
    heading: "econversationalaiapievents",
    content: '`"agent-speaking-changed"`: Agent speaking state change event.'
  }, {
    heading: "econversationalaiapievents",
    content: "`AGENT_INTERRUPTED`"
  }, {
    heading: "econversationalaiapievents",
    content: '`"agent-interrupted"`: Agent interrupted event.'
  }, {
    heading: "econversationalaiapievents",
    content: "`AGENT_METRICS`"
  }, {
    heading: "econversationalaiapievents",
    content: '`"agent-metrics"`: Agent metrics event.'
  }, {
    heading: "econversationalaiapievents",
    content: "`AGENT_ERROR`"
  }, {
    heading: "econversationalaiapievents",
    content: '`"agent-error"`: Agent error event.'
  }, {
    heading: "econversationalaiapievents",
    content: "`TRANSCRIPT_UPDATED`"
  }, {
    heading: "econversationalaiapievents",
    content: '`"transcript-updated"`: Transcript updated event.'
  }, {
    heading: "econversationalaiapievents",
    content: "`DEBUG_LOG`"
  }, {
    heading: "econversationalaiapievents",
    content: '`"debug-log"`: Debug log event.'
  }, {
    heading: "econversationalaiapievents",
    content: "`MESSAGE_RECEIPT_UPDATED`"
  }, {
    heading: "econversationalaiapievents",
    content: '`"message-receipt-updated"`: Message receipt updated event.'
  }, {
    heading: "econversationalaiapievents",
    content: "`MESSAGE_ERROR`"
  }, {
    heading: "econversationalaiapievents",
    content: '`"message-error"`: Message error event.'
  }, {
    heading: "econversationalaiapievents",
    content: "`USER_MANUAL_SOS_RESULT`"
  }, {
    heading: "econversationalaiapievents",
    content: '`"user.manual_sos.result"`: Manual SoS result event.'
  }, {
    heading: "econversationalaiapievents",
    content: "`USER_MANUAL_EOS_RESULT`"
  }, {
    heading: "econversationalaiapievents",
    content: '`"user.manual_eos.result"`: Manual EoS result event.'
  }, {
    heading: "econversationalaiapievents",
    content: "`AGENT_MANUAL_EOS_RESULT`"
  }, {
    heading: "econversationalaiapievents",
    content: '`"assistant.manual_eos.result"`: Server-triggered automatic EoS notification event.'
  }, {
    heading: "echatmessagepriority",
    content: "Since v1.7"
  }, {
    heading: "echatmessagepriority",
    content: "Used to set the chat message processing priority."
  }, {
    heading: "echatmessagepriority",
    content: "`Value`"
  }, {
    heading: "echatmessagepriority",
    content: "`description`"
  }, {
    heading: "echatmessagepriority",
    content: "`INTERRUPTED`"
  }, {
    heading: "echatmessagepriority",
    content: "(`'interrupted'`): Interrupts current processing and immediately handles this message."
  }, {
    heading: "echatmessagepriority",
    content: "`APPEND`"
  }, {
    heading: "echatmessagepriority",
    content: "(`'append'`): Adds the message to the processing queue to be handled in order."
  }, {
    heading: "echatmessagepriority",
    content: "`IGNORE`"
  }, {
    heading: "echatmessagepriority",
    content: "(`'ignore'`): Discards the message without processing."
  }, {
    heading: "ethinklisteningaction",
    content: "The action to take when the agent is in a listening state when a Think instruction arrives."
  }, {
    heading: "ethinklisteningaction",
    content: "`Value`"
  }, {
    heading: "ethinklisteningaction",
    content: "`Description`"
  }, {
    heading: "ethinklisteningaction",
    content: "`INJECT`"
  }, {
    heading: "ethinklisteningaction",
    content: "(`'inject'`): Injects the instruction into the current turn without interrupting it."
  }, {
    heading: "ethinklisteningaction",
    content: "`INTERRUPT`"
  }, {
    heading: "ethinklisteningaction",
    content: "(`'interrupt'`): Interrupts the current interaction and processes the instruction."
  }, {
    heading: "ethinklisteningaction",
    content: "`APPEND`"
  }, {
    heading: "ethinklisteningaction",
    content: "(`'append'`): Appends the instruction for processing after the current interaction completes."
  }, {
    heading: "ethinklisteningaction",
    content: "`IGNORE`"
  }, {
    heading: "ethinklisteningaction",
    content: "(`'ignore'`): Ignores the instruction."
  }, {
    heading: "ethinkthinkingaction",
    content: "The action to take when the agent is in a thinking state when a Think instruction arrives."
  }, {
    heading: "ethinkthinkingaction",
    content: "`Value`"
  }, {
    heading: "ethinkthinkingaction",
    content: "`Description`"
  }, {
    heading: "ethinkthinkingaction",
    content: "`INTERRUPT`"
  }, {
    heading: "ethinkthinkingaction",
    content: "(`'interrupt'`): Interrupts the current interaction and processes the instruction."
  }, {
    heading: "ethinkthinkingaction",
    content: "`APPEND`"
  }, {
    heading: "ethinkthinkingaction",
    content: "(`'append'`): Appends the instruction for processing after the current interaction completes."
  }, {
    heading: "ethinkthinkingaction",
    content: "`IGNORE`"
  }, {
    heading: "ethinkthinkingaction",
    content: "(`'ignore'`): Ignores the instruction."
  }, {
    heading: "ethinkspeakingaction",
    content: "The action to take when the agent is in a speaking state when a Think instruction arrives."
  }, {
    heading: "ethinkspeakingaction",
    content: "`Value`"
  }, {
    heading: "ethinkspeakingaction",
    content: "`Description`"
  }, {
    heading: "ethinkspeakingaction",
    content: "`INTERRUPT`"
  }, {
    heading: "ethinkspeakingaction",
    content: "(`'interrupt'`): Interrupts the current interaction and processes the instruction."
  }, {
    heading: "ethinkspeakingaction",
    content: "`APPEND`"
  }, {
    heading: "ethinkspeakingaction",
    content: "(`'append'`): Appends the instruction for processing after the current interaction completes."
  }, {
    heading: "ethinkspeakingaction",
    content: "`IGNORE`"
  }, {
    heading: "ethinkspeakingaction",
    content: "(`'ignore'`): Ignores the instruction."
  }, {
    heading: "echatmessagetype",
    content: "Chat message types supported in conversational AI."
  }, {
    heading: "echatmessagetype",
    content: "Since v1.7"
  }, {
    heading: "echatmessagetype",
    content: "`Value`"
  }, {
    heading: "echatmessagetype",
    content: "`Description`"
  }, {
    heading: "echatmessagetype",
    content: "`TEXT`"
  }, {
    heading: "echatmessagetype",
    content: "(`'text'`): Text message."
  }, {
    heading: "echatmessagetype",
    content: "`IMAGE`"
  }, {
    heading: "echatmessagetype",
    content: "(`'image'`): Image message."
  }, {
    heading: "echatmessagetype",
    content: "`UNKNOWN`"
  }, {
    heading: "echatmessagetype",
    content: "(`'unknown'`): Unknown message type."
  }, {
    heading: "eagentstate",
    content: "Agent state enumeration."
  }, {
    heading: "eagentstate",
    content: "Value"
  }, {
    heading: "eagentstate",
    content: "Description"
  }, {
    heading: "eagentstate",
    content: "`IDLE`"
  }, {
    heading: "eagentstate",
    content: '("idle"): The agent is idle and ready for new interactions.'
  }, {
    heading: "eagentstate",
    content: "`LISTENING`"
  }, {
    heading: "eagentstate",
    content: '("listening"): The agent is receiving user input.'
  }, {
    heading: "eagentstate",
    content: "`THINKING`"
  }, {
    heading: "eagentstate",
    content: '("thinking"): The agent is processing the input it receives.'
  }, {
    heading: "eagentstate",
    content: "`SPEAKING`"
  }, {
    heading: "eagentstate",
    content: '("speaking"): The agent is outputting a response.'
  }, {
    heading: "eagentstate",
    content: "`SILENT`"
  }, {
    heading: "eagentstate",
    content: '("silent"): The agent intentionally does not respond.'
  }, {
    heading: "emoduletype",
    content: "Enumeration of module types for AI capabilities."
  }, {
    heading: "emoduletype",
    content: "Value"
  }, {
    heading: "emoduletype",
    content: "Description"
  }, {
    heading: "emoduletype",
    content: "`LLM`"
  }, {
    heading: "emoduletype",
    content: '("llm"): Large Language Model.'
  }, {
    heading: "emoduletype",
    content: "`MLLM`"
  }, {
    heading: "emoduletype",
    content: '("mllm"): Multimodal Large Language Model.'
  }, {
    heading: "emoduletype",
    content: "`TTS`"
  }, {
    heading: "emoduletype",
    content: '("tts"): Text-to-speech module.'
  }, {
    heading: "emoduletype",
    content: "`CONTEXT`"
  }, {
    heading: "emoduletype",
    content: '("context"): Context management module.'
  }, {
    heading: "emoduletype",
    content: "`UNKNOWN`"
  }, {
    heading: "emoduletype",
    content: '("unknown"): Unknown module type.'
  }, {
    heading: "etranscripthelpermode",
    content: "The mode type for transcript processing."
  }, {
    heading: "etranscripthelpermode",
    content: "Value"
  }, {
    heading: "etranscripthelpermode",
    content: "Description"
  }, {
    heading: "etranscripthelpermode",
    content: "`TEXT`"
  }, {
    heading: "etranscripthelpermode",
    content: "Processes transcript in text mode."
  }, {
    heading: "etranscripthelpermode",
    content: "`WORD`"
  }, {
    heading: "etranscripthelpermode",
    content: "Processes transcript in word mode."
  }, {
    heading: "etranscripthelpermode",
    content: "`UNKNOWN`"
  }, {
    heading: "etranscripthelpermode",
    content: "Unknown transcript processing mode."
  }, {
    heading: "eturnstatus",
    content: "TURN connection status enumeration."
  }, {
    heading: "eturnstatus",
    content: "Value"
  }, {
    heading: "eturnstatus",
    content: "Description"
  }, {
    heading: "eturnstatus",
    content: "`IN_PROGRESS`"
  }, {
    heading: "eturnstatus",
    content: "(0): TURN connection in progress."
  }, {
    heading: "eturnstatus",
    content: "`END`"
  }, {
    heading: "eturnstatus",
    content: "(1): TURN connection has ended."
  }, {
    heading: "eturnstatus",
    content: "`INTERRUPTED`"
  }, {
    heading: "eturnstatus",
    content: "(2): TURN connection has been disconnected."
  }],
  headings: [{
    id: "installation",
    content: "Installation"
  }, {
    id: "api-overview",
    content: "API overview"
  }, {
    id: "conversationalaiapi-class",
    content: "ConversationalAIAPI class"
  }, {
    id: "chat",
    content: "`chat`"
  }, {
    id: "sample-code",
    content: "Sample code"
  }, {
    id: "getinstance",
    content: "`getInstance`"
  }, {
    id: "init",
    content: "`init`"
  }, {
    id: "subscribemessage",
    content: "`subscribeMessage`"
  }, {
    id: "unsubscribe",
    content: "`unsubscribe`"
  }, {
    id: "interrupt",
    content: "`interrupt`"
  }, {
    id: "manualsos",
    content: "`manualSOS`"
  }, {
    id: "manualeos",
    content: "`manualEOS`"
  }, {
    id: "speak",
    content: "`speak`"
  }, {
    id: "think",
    content: "`think`"
  }, {
    id: "destroy",
    content: "`destroy`"
  }, {
    id: "iconversationalaiapieventhandlers-interface",
    content: "IConversationalAIAPIEventHandlers interface"
  }, {
    id: "types-and-interfaces",
    content: "Types and Interfaces"
  }, {
    id: "tmessagereceipt",
    content: "`TMessageReceipt`"
  }, {
    id: "tusermanualeventpayload",
    content: "`TUserManualEventPayload`"
  }, {
    id: "tusermanualsosevent",
    content: "`TUserManualSosEvent`"
  }, {
    id: "tusermanualeosevent",
    content: "`TUserManualEosEvent`"
  }, {
    id: "tagentmanualeospayload",
    content: "`TAgentManualEosPayload`"
  }, {
    id: "tagentmanualeosevent",
    content: "`TAgentManualEosEvent`"
  }, {
    id: "ichatmessagebase",
    content: "`IChatMessageBase`"
  }, {
    id: "ichatmessageimage",
    content: "`IChatMessageImage`"
  }, {
    id: "speakmessage",
    content: "`SpeakMessage`"
  }, {
    id: "thinkmessage",
    content: "`ThinkMessage`"
  }, {
    id: "iconversationalaiapiconfig",
    content: "`IConversationalAIAPIConfig`"
  }, {
    id: "tstatechangeevent",
    content: "`TStateChangeEvent`"
  }, {
    id: "tagentmetric",
    content: "`TAgentMetric`"
  }, {
    id: "tmoduleerror",
    content: "`TModuleError`"
  }, {
    id: "isubtitlehelperitem",
    content: "`ISubtitleHelperItem`"
  }, {
    id: "enum-classes",
    content: "Enum classes"
  }, {
    id: "econversationalaiapievents",
    content: "EConversationalAIAPIEvents"
  }, {
    id: "echatmessagepriority",
    content: "EChatMessagePriority"
  }, {
    id: "ethinklisteningaction",
    content: "EThinkListeningAction"
  }, {
    id: "ethinkthinkingaction",
    content: "EThinkThinkingAction"
  }, {
    id: "ethinkspeakingaction",
    content: "EThinkSpeakingAction"
  }, {
    id: "echatmessagetype",
    content: "EChatMessageType"
  }, {
    id: "eagentstate",
    content: "EAgentState"
  }, {
    id: "emoduletype",
    content: "EModuleType"
  }, {
    id: "etranscripthelpermode",
    content: "ETranscriptHelperMode"
  }, {
    id: "eturnstatus",
    content: "ETurnStatus"
  }]
};
export let toc = [{
  depth: 2,
  url: "#installation",
  title: _jsx(_Fragment, {
    children: "Installation"
  })
}, {
  depth: 2,
  url: "#api-overview",
  title: _jsx(_Fragment, {
    children: "API overview"
  })
}, {
  depth: 2,
  url: "#conversationalaiapi-class",
  title: _jsx(_Fragment, {
    children: "ConversationalAIAPI class"
  })
}, {
  depth: 3,
  url: "#chat",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "chat"
    })
  })
}, {
  depth: 4,
  url: "#sample-code",
  title: _jsx(_Fragment, {
    children: "Sample code"
  })
}, {
  depth: 3,
  url: "#getinstance",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "getInstance"
    })
  })
}, {
  depth: 3,
  url: "#init",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "init"
    })
  })
}, {
  depth: 3,
  url: "#subscribemessage",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "subscribeMessage"
    })
  })
}, {
  depth: 3,
  url: "#unsubscribe",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "unsubscribe"
    })
  })
}, {
  depth: 3,
  url: "#interrupt",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "interrupt"
    })
  })
}, {
  depth: 3,
  url: "#manualsos",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "manualSOS"
    })
  })
}, {
  depth: 3,
  url: "#manualeos",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "manualEOS"
    })
  })
}, {
  depth: 3,
  url: "#speak",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "speak"
    })
  })
}, {
  depth: 3,
  url: "#think",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "think"
    })
  })
}, {
  depth: 3,
  url: "#destroy",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "destroy"
    })
  })
}, {
  depth: 2,
  url: "#iconversationalaiapieventhandlers-interface",
  title: _jsx(_Fragment, {
    children: "IConversationalAIAPIEventHandlers interface"
  })
}, {
  depth: 2,
  url: "#types-and-interfaces",
  title: _jsx(_Fragment, {
    children: "Types and Interfaces"
  })
}, {
  depth: 3,
  url: "#tmessagereceipt",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "TMessageReceipt"
    })
  })
}, {
  depth: 3,
  url: "#tusermanualeventpayload",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "TUserManualEventPayload"
    })
  })
}, {
  depth: 3,
  url: "#tusermanualsosevent",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "TUserManualSosEvent"
    })
  })
}, {
  depth: 3,
  url: "#tusermanualeosevent",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "TUserManualEosEvent"
    })
  })
}, {
  depth: 3,
  url: "#tagentmanualeospayload",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "TAgentManualEosPayload"
    })
  })
}, {
  depth: 3,
  url: "#tagentmanualeosevent",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "TAgentManualEosEvent"
    })
  })
}, {
  depth: 3,
  url: "#ichatmessagebase",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "IChatMessageBase"
    })
  })
}, {
  depth: 3,
  url: "#ichatmessageimage",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "IChatMessageImage"
    })
  })
}, {
  depth: 3,
  url: "#speakmessage",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "SpeakMessage"
    })
  })
}, {
  depth: 3,
  url: "#thinkmessage",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ThinkMessage"
    })
  })
}, {
  depth: 3,
  url: "#iconversationalaiapiconfig",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "IConversationalAIAPIConfig"
    })
  })
}, {
  depth: 3,
  url: "#tstatechangeevent",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "TStateChangeEvent"
    })
  })
}, {
  depth: 3,
  url: "#tagentmetric",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "TAgentMetric"
    })
  })
}, {
  depth: 3,
  url: "#tmoduleerror",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "TModuleError"
    })
  })
}, {
  depth: 3,
  url: "#isubtitlehelperitem",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ISubtitleHelperItem"
    })
  })
}, {
  depth: 2,
  url: "#enum-classes",
  title: _jsx(_Fragment, {
    children: "Enum classes"
  })
}, {
  depth: 3,
  url: "#econversationalaiapievents",
  title: _jsx(_Fragment, {
    children: "EConversationalAIAPIEvents"
  })
}, {
  depth: 3,
  url: "#echatmessagepriority",
  title: _jsx(_Fragment, {
    children: "EChatMessagePriority"
  })
}, {
  depth: 3,
  url: "#ethinklisteningaction",
  title: _jsx(_Fragment, {
    children: "EThinkListeningAction"
  })
}, {
  depth: 3,
  url: "#ethinkthinkingaction",
  title: _jsx(_Fragment, {
    children: "EThinkThinkingAction"
  })
}, {
  depth: 3,
  url: "#ethinkspeakingaction",
  title: _jsx(_Fragment, {
    children: "EThinkSpeakingAction"
  })
}, {
  depth: 3,
  url: "#echatmessagetype",
  title: _jsx(_Fragment, {
    children: "EChatMessageType"
  })
}, {
  depth: 3,
  url: "#eagentstate",
  title: _jsx(_Fragment, {
    children: "EAgentState"
  })
}, {
  depth: 3,
  url: "#emoduletype",
  title: _jsx(_Fragment, {
    children: "EModuleType"
  })
}, {
  depth: 3,
  url: "#etranscripthelpermode",
  title: _jsx(_Fragment, {
    children: "ETranscriptHelperMode"
  })
}, {
  depth: 3,
  url: "#eturnstatus",
  title: _jsx(_Fragment, {
    children: "ETurnStatus"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
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
  }, { CalloutContainer, CalloutDescription, Tabs, TabsContent, TabsList, TabsTrigger } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  if (!TabsContent)
    _missingMdxReference("TabsContent", true);
  if (!TabsList)
    _missingMdxReference("TabsList", true);
  if (!TabsTrigger)
    _missingMdxReference("TabsTrigger", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "installation",
      children: "Installation"
    }), `
`, _jsx(_components.p, {
      children: "Add the toolkit to your project using a package manager or by copying the source code."
    }), `
`, _jsxs(Tabs, {
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "package",
          children: "Package manager"
        }), _jsx(TabsTrigger, {
          value: "source",
          children: "Source code"
        })]
      }), _jsxs(TabsContent, {
        value: "package",
        children: [_jsx(_components.p, {
          children: "Install the toolkit package for your project type:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Vanilla JS or TypeScript:"
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
                icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pnpm"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " add"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " agora-agent-client-toolkit@2.9.0"
                    })]
                  })
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "React:"
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
                icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pnpm"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " add"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " agora-agent-client-toolkit@2.9.0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " agora-agent-client-toolkit-react@2.9.0"
                    })]
                  })
                })
              })
            }), `
`]
          }), `
`]
        })]
      }), _jsx(TabsContent, {
        value: "source",
        children: _jsxs(_components.p, {
          children: ["Copy the ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Conversational-AI/agent-client-toolkit-ts/tree/main/packages/conversational-ai",
            children: _jsx(_components.code, {
              children: "conversational-ai"
            })
          }), " package into your project, then import the toolkit before calling its APIs."]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.a, {
        href: "https://github.com/AgoraIO-Community/Conversational-AI-Demo/tree/main/Web/Scenes/VoiceAgent/src/conversational-ai-api",
        children: "Web toolkit API"
      }), " provides the following classes and methods."]
    }), `
`, _jsx(_components.h2, {
      id: "api-overview",
      children: "API overview"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#chat",
              children: _jsx(_components.code, {
                children: "chat"
              })
            })
          }), _jsx(_components.td, {
            children: "Send chat messages to a conversational agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#getinstance",
              children: _jsx(_components.code, {
                children: "getInstance"
              })
            })
          }), _jsxs(_components.td, {
            children: ["Gets a singleton instance of ", _jsx(_components.code, {
              children: "ConversationalAIAPI"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#init",
              children: _jsx(_components.code, {
                children: "init"
              })
            })
          }), _jsxs(_components.td, {
            children: ["Initializes the ", _jsx(_components.code, {
              children: "ConversationalAIAPI"
            }), " singleton instance."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#subscribemessage",
              children: _jsx(_components.code, {
                children: "subscribeMessage"
              })
            })
          }), _jsx(_components.td, {
            children: "Subscribes to the messaging channel to get real-time updates."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#unsubscribe",
              children: _jsx(_components.code, {
                children: "unsubscribe"
              })
            })
          }), _jsx(_components.td, {
            children: "Unsubscribes from the message channel and cleans up resources."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#interrupt",
              children: _jsx(_components.code, {
                children: "interrupt"
              })
            })
          }), _jsx(_components.td, {
            children: "Sends an interrupt message to the specified agent user."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#manualsos",
              children: _jsx(_components.code, {
                children: "manualSOS"
              })
            })
          }), _jsx(_components.td, {
            children: "Sends a manual Start of Speech (SoS) signal to the agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#manualeos",
              children: _jsx(_components.code, {
                children: "manualEOS"
              })
            })
          }), _jsx(_components.td, {
            children: "Sends a manual End of Speech (EoS) signal to the agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#speak",
              children: _jsx(_components.code, {
                children: "speak"
              })
            })
          }), _jsx(_components.td, {
            children: "Makes the agent speak text directly, bypassing the LLM."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#think",
              children: _jsx(_components.code, {
                children: "think"
              })
            })
          }), _jsx(_components.td, {
            children: "Injects text as user input for the LLM to process."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#destroy",
              children: _jsx(_components.code, {
                children: "destroy"
              })
            })
          }), _jsxs(_components.td, {
            children: ["Destroys the ", _jsx(_components.code, {
              children: "ConversationalAIAPI"
            }), " instance and cleans up resources."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "conversationalaiapi-class",
      children: "ConversationalAIAPI class"
    }), `
`, _jsx(_components.p, {
      children: "Class for managing conversational AI engine interactions through Agora's RTC and RTM services."
    }), `
`, _jsx(_components.h3, {
      id: "chat",
      children: _jsx(_components.code, {
        children: "chat"
      })
    }), `
`, _jsx(_components.p, {
      children: "Send chat messages to a conversational agent."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Since v1.7"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "public async "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "chat"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: string, message: IChatMessageText "
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
              children: " IChatMessageImage)"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "sample-code",
      children: "Sample code"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Send an image message"
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
              children: " imageMessage"
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
              children: " IChatMessageImage"
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
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  messageType: EChatMessageType."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "IMAGE"
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
              children: "  imageData: urlImageData"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "};"
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " api."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "chat"
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
              children: '"user123"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", imageMessage);"
            })]
          })]
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
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agentUserId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Unique identifier of the agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "message"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "IChatMessageText"
            }), " | ", _jsx(_components.code, {
              children: "IChatMessageImage"
            })]
          }), _jsxs(_components.td, {
            children: ["Chat message to be sent. Should be of type ", _jsx(_components.code, {
              children: "IChatMessageImage"
            }), ", see details in ", _jsx(_components.a, {
              href: "#ichatmessageimage",
              children: _jsx(_components.code, {
                children: "IChatMessageImage"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Return Value"
      }), _jsx(_components.br, {}), `
`, "If the method call succeeds, a Promise is returned, indicating the result of the message sending."]
    }), `
`, _jsx(_components.h3, {
      id: "getinstance",
      children: _jsx(_components.code, {
        children: "getInstance"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Gets a singleton instance of ", _jsx(_components.code, {
        children: "ConversationalAIAPI"
      }), ". This method ensures that only one instance exists throughout the entire application lifecycle."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "public static "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getInstance"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "()"
            })]
          })
        })
      })
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["You must call ", _jsx(_components.a, {
              href: "#init",
              children: _jsx(_components.code, {
                children: "init"
              })
            }), " before using this method."]
          }), `
`, _jsx(_components.li, {
            children: "If not initialized, an error is thrown."
          }), `
`]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Return Value:"
      }), `
If the method call succeeds, a `, _jsx(_components.code, {
        children: "ConversationalAIAPI"
      }), " instance is returned. If not initialized, a ", _jsx(_components.code, {
        children: "NotFoundError"
      }), " exception is thrown."]
    }), `
`, _jsx(_components.h3, {
      id: "init",
      children: _jsx(_components.code, {
        children: "init"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Initializes the ", _jsx(_components.code, {
        children: "ConversationalAIAPI"
      }), " singleton instance."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "public static async "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "init"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(cfg: IConversationalAIAPIConfig): "
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
              children: "ConversationalAIAPI"
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
`, _jsxs(_components.p, {
      children: ["This method sets the RTC and RTM engines, rendering mode, and logging options. You must call this method before calling other methods of ", _jsx(_components.code, {
        children: "ConversationalAIAPI"
      }), ". Awaiting this method returns the initialized instance directly, so a separate call to ", _jsx(_components.a, {
        href: "#getinstance",
        children: _jsx(_components.code, {
          children: "getInstance"
        })
      }), " is not required immediately after initialization."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Only one instance can be initialized at a time."
          }), `
`, _jsx(_components.li, {
            children: "If already initialized, an error is thrown."
          }), `
`]
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
              children: "cfg"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "IConversationalAIAPIConfig"
            })
          }), _jsxs(_components.td, {
            children: ["Configuration object used to initialize the API. See ", _jsx(_components.a, {
              href: "#iconversationalaiapiconfig",
              children: _jsx(_components.code, {
                children: "IConversationalAIAPIConfig"
              })
            }), "."]
          })]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Return Value:"
      }), `
If the method call succeeds, a `, _jsx(_components.code, {
        children: "Promise"
      }), " resolving to the initialized ", _jsx(_components.code, {
        children: "ConversationalAIAPI"
      }), " instance."]
    }), `
`, _jsx(_components.h3, {
      id: "subscribemessage",
      children: _jsx(_components.code, {
        children: "subscribeMessage"
      })
    }), `
`, _jsx(_components.p, {
      children: "Subscribes to the messaging channel to get real-time updates."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "public "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "subscribeMessage"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(channel: string)"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["This method binds the necessary RTC and RTM events and starts ", _jsx(_components.code, {
        children: "CovSubRenderController"
      }), " to process received messages."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["You must call ", _jsx(_components.a, {
              href: "#init",
              children: _jsx(_components.code, {
                children: "init"
              })
            }), " before using this method."]
          }), `
`, _jsx(_components.li, {
            children: "If not initialized, an error is thrown."
          }), `
`]
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
              children: "channel"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "The channel to subscribe to for messages."
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "unsubscribe",
      children: _jsx(_components.code, {
        children: "unsubscribe"
      })
    }), `
`, _jsx(_components.p, {
      children: "Unsubscribes from the message channel and cleans up resources."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "public "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "unsubscribe"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "()"
            })]
          })
        })
      })
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["This method unbinds RTC and RTM events, clears channels, and cleans up ", _jsx(_components.code, {
            children: "CovSubRenderController"
          }), ". You must call ", _jsx(_components.code, {
            children: "subscribeMessage"
          }), " before calling this method, otherwise an error is thrown."]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "interrupt",
      children: _jsx(_components.code, {
        children: "interrupt"
      })
    }), `
`, _jsx(_components.p, {
      children: "Sends an interrupt message to the specified agent user."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "public async "
            }), _jsx(_components.span, {
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
              children: "(agentUserId: string)"
            })]
          })
        })
      })
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["You must call ", _jsx(_components.a, {
              href: "#init",
              children: _jsx(_components.code, {
                children: "init"
              })
            }), " before using this method."]
          }), `
`, _jsx(_components.li, {
            children: "If not initialized or sending fails, an error is thrown."
          }), `
`]
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
              children: "agentUserId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "The user ID of the agent user to be interrupted."
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "manualsos",
      children: _jsx(_components.code, {
        children: "manualSOS"
      })
    }), `
`, _jsx(_components.p, {
      children: "Sends a manual Start of Speech (SoS) signal to the agent over RTM, explicitly declaring that the current user has started speaking."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "public async "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "manualSOS"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: string): "
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
`, _jsx(_components.p, {
      children: "Keep the following in mind when calling this method:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The component generates ", _jsx(_components.code, {
          children: "requestId"
        }), " internally and resolves it in the returned ", _jsx(_components.code, {
          children: "Promise"
        }), ". Your app can store this value to correlate it with the server-side event."]
      }), `
`, _jsxs(_components.li, {
        children: ["A resolved ", _jsx(_components.code, {
          children: "Promise"
        }), " only indicates that the RTM publish succeeded — it does not indicate that the server processed the request successfully."]
      }), `
`, _jsxs(_components.li, {
        children: ["Whether the server successfully processed the request is determined by the subsequent ", _jsx(_components.code, {
          children: "USER_MANUAL_SOS_RESULT"
        }), " or ", _jsx(_components.code, {
          children: "USER_MANUAL_EOS_RESULT"
        }), " event. See ", _jsx(_components.a, {
          href: "#econversationalaiapievents",
          children: _jsx(_components.code, {
            children: "EConversationalAIAPIEvents"
          })
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "The client does not check locally whether manual mode is enabled. Mode validation is handled by the server."
      }), `
`, _jsx(_components.li, {
        children: "Common failure reasons include: the current mode configuration does not allow manual signaling, there is no active user speech to mark, or a manual SoS or EoS that has already taken effect is resubmitted within the same turn."
      }), `
`]
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
              children: "agentUserId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Unique identifier of the agent."
          })]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Return Value"
      }), _jsx(_components.br, {}), `
`, "If the method call succeeds, a ", _jsx(_components.code, {
        children: "Promise<string>"
      }), " is returned, resolving to the ", _jsx(_components.code, {
        children: "requestId"
      }), " for this request. This result only indicates that the RTM publish succeeded."]
    }), `
`, _jsx(_components.h3, {
      id: "manualeos",
      children: _jsx(_components.code, {
        children: "manualEOS"
      })
    }), `
`, _jsx(_components.p, {
      children: "Sends a manual End of Speech (EoS) signal to the agent over RTM, explicitly declaring that the current user has finished speaking."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "public async "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "manualEOS"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: string): "
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
`, _jsx(_components.p, {
      children: "Keep the following in mind when calling this method:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The component generates ", _jsx(_components.code, {
          children: "requestId"
        }), " internally and resolves it in the returned ", _jsx(_components.code, {
          children: "Promise"
        }), ". Your app can store this value to correlate it with the server-side event."]
      }), `
`, _jsxs(_components.li, {
        children: ["A resolved ", _jsx(_components.code, {
          children: "Promise"
        }), " only indicates that the RTM publish succeeded — it does not indicate that the server processed the request successfully."]
      }), `
`, _jsxs(_components.li, {
        children: ["Whether the server successfully processed the request is determined by the subsequent ", _jsx(_components.code, {
          children: "USER_MANUAL_SOS_RESULT"
        }), " or ", _jsx(_components.code, {
          children: "USER_MANUAL_EOS_RESULT"
        }), " event. See ", _jsx(_components.a, {
          href: "#econversationalaiapievents",
          children: _jsx(_components.code, {
            children: "EConversationalAIAPIEvents"
          })
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "The client does not check locally whether manual mode is enabled. Mode validation is handled by the server."
      }), `
`, _jsx(_components.li, {
        children: "Common failure reasons include: the current mode configuration does not allow manual signaling, there is no active user speech to mark, or a manual SoS or EoS that has already taken effect is resubmitted within the same turn."
      }), `
`]
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
              children: "agentUserId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Unique identifier of the agent."
          })]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Return Value"
      }), _jsx(_components.br, {}), `
`, "If the method call succeeds, a ", _jsx(_components.code, {
        children: "Promise<string>"
      }), " is returned, resolving to the ", _jsx(_components.code, {
        children: "requestId"
      }), " for this request. This result only indicates that the RTM publish succeeded."]
    }), `
`, _jsx(_components.h3, {
      id: "speak",
      children: _jsx(_components.code, {
        children: "speak"
      })
    }), `
`, _jsx(_components.p, {
      children: "Bypasses the LLM and makes the agent speak text directly through its TTS pipeline."
    }), `
`, _jsxs(_components.p, {
      children: ["This method requires RTM. A resolved ", _jsx(_components.code, {
        children: "Promise"
      }), " only indicates that the RTM message was published successfully, not that the agent has finished speaking."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "public async "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "speak"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: string, message: SpeakMessage): "
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
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agentUserId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Unique identifier of the agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "message"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "SpeakMessage"
            })
          }), _jsxs(_components.td, {
            children: ["The text to speak and its playback behavior. See ", _jsx(_components.a, {
              href: "#speakmessage",
              children: _jsx(_components.code, {
                children: "SpeakMessage"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Return Value"
      }), _jsx(_components.br, {}), `
`, "If the method call succeeds, a ", _jsx(_components.code, {
        children: "Promise<void>"
      }), " is returned."]
    }), `
`, _jsx(_components.h3, {
      id: "think",
      children: _jsx(_components.code, {
        children: "think"
      })
    }), `
`, _jsx(_components.p, {
      children: "Injects text as user input into the conversation for the LLM to process."
    }), `
`, _jsxs(_components.p, {
      children: ["This method requires RTM. A resolved ", _jsx(_components.code, {
        children: "Promise"
      }), " only indicates that the RTM message was published successfully, not that the LLM has finished processing the instruction."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "public async "
            }), _jsx(_components.span, {
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
              children: "(agentUserId: string, message: ThinkMessage): "
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
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agentUserId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Unique identifier of the agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "message"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ThinkMessage"
            })
          }), _jsxs(_components.td, {
            children: ["The instruction text, state actions, and custom metadata. See ", _jsx(_components.a, {
              href: "#thinkmessage",
              children: _jsx(_components.code, {
                children: "ThinkMessage"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Return Value"
      }), _jsx(_components.br, {}), `
`, "If the method call succeeds, a ", _jsx(_components.code, {
        children: "Promise<void>"
      }), " is returned."]
    }), `
`, _jsx(_components.h3, {
      id: "destroy",
      children: _jsx(_components.code, {
        children: "destroy"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Destroys the ", _jsx(_components.code, {
        children: "ConversationalAIAPI"
      }), " instance and cleans up resources."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "public "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "destroy"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(): "
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
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["You must call ", _jsx(_components.code, {
              children: "unsubscribe"
            }), " before calling this method."]
          }), `
`, _jsx(_components.li, {
            children: "If not initialized, an error is thrown."
          }), `
`]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "iconversationalaiapieventhandlers-interface",
      children: "IConversationalAIAPIEventHandlers interface"
    }), `
`, _jsx(_components.p, {
      children: "Event handler interface for the Conversational AI API module."
    }), `
`, _jsx(_components.p, {
      children: "A set of event handlers that respond to various events emitted by the conversational AI system, including agent state changes, interruptions, performance metrics, errors, and transcription updates."
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
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agentUserId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Unique identifier for the AI agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "event"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TStateChangeEvent | { turnID: number; timestamp: number } | TUserManualSosEvent | TUserManualEosEvent | TAgentManualEosEvent"
            })
          }), _jsxs(_components.td, {
            children: ["Event data. The type depends on the event type. See ", _jsx(_components.a, {
              href: "#tstatechangeevent",
              children: _jsx(_components.code, {
                children: "TStateChangeEvent"
              })
            }), ", ", _jsx(_components.a, {
              href: "#tusermanualsosevent",
              children: _jsx(_components.code, {
                children: "TUserManualSosEvent"
              })
            }), ", ", _jsx(_components.a, {
              href: "#tusermanualeosevent",
              children: _jsx(_components.code, {
                children: "TUserManualEosEvent"
              })
            }), ", and ", _jsx(_components.a, {
              href: "#tagentmanualeosevent",
              children: _jsx(_components.code, {
                children: "TAgentManualEosEvent"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "metrics"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TAgentMetric"
            })
          }), _jsxs(_components.td, {
            children: ["Performance indicator data of the agent. See ", _jsx(_components.a, {
              href: "#tagentmetric",
              children: _jsx(_components.code, {
                children: "TAgentMetric"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "error"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TModuleError"
            })
          }), _jsxs(_components.td, {
            children: ["Error message when an error occurs in the agent. See ", _jsx(_components.a, {
              href: "#tmoduleerror",
              children: _jsx(_components.code, {
                children: "TModuleError"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "transcription"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ISubtitleHelperItem<Partial<IUserTranscription | IAgentTranscription>>[]"
            })
          }), _jsxs(_components.td, {
            children: ["An array of transcripts of the conversation between the user and the agent. See ", _jsx(_components.a, {
              href: "#isubtitlehelperitem",
              children: _jsx(_components.code, {
                children: "ISubtitleHelperItem"
              })
            }), "."]
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
            children: "Debug log message string."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "types-and-interfaces",
      children: "Types and Interfaces"
    }), `
`, _jsx(_components.h3, {
      id: "tmessagereceipt",
      children: _jsx(_components.code, {
        children: "TMessageReceipt"
      })
    }), `
`, _jsx(_components.p, {
      children: "Message receipt type definition."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Since v1.7"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " TMessageReceipt"
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
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  moduleType"
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
              children: " EModuleType"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  messageType"
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
              children: " EChatMessageType"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  message"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " string"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  turnId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " number"
            })]
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
            children: "Parameter"
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
              children: "moduleType"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "EModuleType"
            })
          }), _jsxs(_components.td, {
            children: ["The type of module sending the message. See ", _jsx(_components.a, {
              href: "#emoduletype",
              children: _jsx(_components.code, {
                children: "EModuleType"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "messageType"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "EChatMessageType"
            })
          }), _jsxs(_components.td, {
            children: ["The type of message. See ", _jsx(_components.a, {
              href: "#echatmessagetype",
              children: _jsx(_components.code, {
                children: "EChatMessageType"
              })
            }), "."]
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
            children: "The content of the message."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turnId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "Unique identifier for the conversation turn."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "tusermanualeventpayload",
      children: _jsx(_components.code, {
        children: "TUserManualEventPayload"
      })
    }), `
`, _jsx(_components.p, {
      children: "Common payload for manual SoS/EoS events."
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " TUserManualEventPayload"
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
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  success"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " boolean"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  requestId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " string"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  turnId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " number"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  errorMessage"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " string"
            })]
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
            children: "Parameter"
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
              children: "success"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsx(_components.td, {
            children: "Whether the server successfully processed this manual signal."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "requestId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsxs(_components.td, {
            children: ["Request ID, corresponding to the ", _jsx(_components.code, {
              children: "requestId"
            }), " resolved by ", _jsx(_components.code, {
              children: "manualSOS"
            }), " or ", _jsx(_components.code, {
              children: "manualEOS"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turnId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsxs(_components.td, {
            children: ["The associated conversation turn ID. Omitted if the server's failure event does not include a ", _jsx(_components.code, {
              children: "turn_id"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "errorMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "The raw error message returned by the server. Usually omitted on success."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "tusermanualsosevent",
      children: _jsx(_components.code, {
        children: "TUserManualSosEvent"
      })
    }), `
`, _jsx(_components.p, {
      children: "Represents a manual SoS event."
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " TUserManualSosEvent"
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
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  eventId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " string"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  timestamp"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " number"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  payload"
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
              children: " TUserManualEventPayload"
            })]
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
            children: "Parameter"
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
              children: "eventId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Unique event ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "timestamp"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "Event timestamp in milliseconds."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "payload"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TUserManualEventPayload"
            })
          }), _jsxs(_components.td, {
            children: ["Event payload. See ", _jsx(_components.a, {
              href: "#tusermanualeventpayload",
              children: _jsx(_components.code, {
                children: "TUserManualEventPayload"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "tusermanualeosevent",
      children: _jsx(_components.code, {
        children: "TUserManualEosEvent"
      })
    }), `
`, _jsx(_components.p, {
      children: "Represents a manual EoS event."
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " TUserManualEosEvent"
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
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  eventId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " string"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  timestamp"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " number"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  payload"
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
              children: " TUserManualEventPayload"
            })]
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
            children: "Parameter"
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
              children: "eventId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Unique event ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "timestamp"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "Event timestamp in milliseconds."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "payload"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TUserManualEventPayload"
            })
          }), _jsxs(_components.td, {
            children: ["Event payload. See ", _jsx(_components.a, {
              href: "#tusermanualeventpayload",
              children: _jsx(_components.code, {
                children: "TUserManualEventPayload"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "tagentmanualeospayload",
      children: _jsx(_components.code, {
        children: "TAgentManualEosPayload"
      })
    }), `
`, _jsx(_components.p, {
      children: "Payload for a server-triggered automatic EoS event."
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " TAgentManualEosPayload"
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
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  reason"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " string"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  maxDurationMs"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " number"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  turnId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " number"
            })]
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
            children: "Parameter"
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
              children: "reason"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "The reason the server automatically ended the current user's turn."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "maxDurationMs"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "The configured maximum duration, in milliseconds, for a single speaking turn."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turnId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "The associated conversation turn ID."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "tagentmanualeosevent",
      children: _jsx(_components.code, {
        children: "TAgentManualEosEvent"
      })
    }), `
`, _jsx(_components.p, {
      children: "Represents a server-triggered automatic EoS event."
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " TAgentManualEosEvent"
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
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  eventId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " string"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  timestamp"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " number"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  payload"
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
              children: " TAgentManualEosPayload"
            })]
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
            children: "Parameter"
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
              children: "eventId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Unique event ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "timestamp"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "Event timestamp in milliseconds."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "payload"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TAgentManualEosPayload"
            })
          }), _jsxs(_components.td, {
            children: ["Event payload. See ", _jsx(_components.a, {
              href: "#tagentmanualeospayload",
              children: _jsx(_components.code, {
                children: "TAgentManualEosPayload"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "ichatmessagebase",
      children: _jsx(_components.code, {
        children: "IChatMessageBase"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "IChatMessageBase"
      }), " interface that contains the properties of the underlying message type."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Since v1.7"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " interface"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " IChatMessageBase"
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
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  messageType"
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
              children: " EChatMessageType"
            })]
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
              children: "messageType"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "EChatMessageType"
            })
          }), _jsxs(_components.td, {
            children: ["Type of message. See ", _jsx(_components.a, {
              href: "#echatmessagetype",
              children: _jsx(_components.code, {
                children: "EChatMessageType"
              })
            }), " for details."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "ichatmessageimage",
      children: _jsx(_components.code, {
        children: "IChatMessageImage"
      })
    }), `
`, _jsx(_components.p, {
      children: "Represents an image-based chat message, which can contain URL image data."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Since v1.7"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " interface"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " IChatMessageImage"
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
              children: " IChatMessageBase"
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
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  messageType"
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
              children: " EChatMessageType"
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
              children: "IMAGE"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  uuid"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " string"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  url"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " string"
            })]
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
            children: "Parameter"
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
              children: "messageType"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "EChatMessageType.IMAGE"
            })
          }), _jsxs(_components.td, {
            children: ["Message type, must be ", _jsx(_components.code, {
              children: "IMAGE"
            }), ". See ", _jsx(_components.a, {
              href: "#echatmessagetype",
              children: _jsx(_components.code, {
                children: "EChatMessageType"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uuid"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Unique identifier for the image message."
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
            children: "Optional. URL pointing to the image resource."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "speakmessage",
      children: _jsx(_components.code, {
        children: "SpeakMessage"
      })
    }), `
`, _jsx(_components.p, {
      children: "Used to bypass the LLM and speak text directly through the agent's TTS pipeline."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " interface"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " SpeakMessage"
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
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  text"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " string"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  priority"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " EChatMessagePriority"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  interruptable"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " boolean"
            })]
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
            children: "Parameter"
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
              children: "text"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "The text to speak."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "priority"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "EChatMessagePriority"
            })
          }), _jsxs(_components.td, {
            children: ["Optional. The priority for handling this speak request. Defaults to ", _jsx(_components.code, {
              children: "INTERRUPTED"
            }), ". See ", _jsx(_components.a, {
              href: "#echatmessagepriority",
              children: _jsx(_components.code, {
                children: "EChatMessagePriority"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "interruptable"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsxs(_components.td, {
            children: ["Optional. Whether the user can interrupt this speech by talking. Defaults to ", _jsx(_components.code, {
              children: "true"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "thinkmessage",
      children: _jsx(_components.code, {
        children: "ThinkMessage"
      })
    }), `
`, _jsx(_components.p, {
      children: "Used to inject text as user input for the LLM to process."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " interface"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " ThinkMessage"
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
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  text"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " string"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  onListeningAction"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " EThinkListeningAction"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  onThinkingAction"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " EThinkThinkingAction"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  onSpeakingAction"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " EThinkSpeakingAction"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  interruptable"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " boolean"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "  metadata"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Record"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "string"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "string"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
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
            children: "Parameter"
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
              children: "text"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "The instruction text to inject for the LLM."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "onListeningAction"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "EThinkListeningAction"
            })
          }), _jsxs(_components.td, {
            children: ["Optional. The action to take when the agent is in a listening state. Defaults to ", _jsx(_components.code, {
              children: "INTERRUPT"
            }), ". See ", _jsx(_components.a, {
              href: "#ethinklisteningaction",
              children: _jsx(_components.code, {
                children: "EThinkListeningAction"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "onThinkingAction"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "EThinkThinkingAction"
            })
          }), _jsxs(_components.td, {
            children: ["Optional. The action to take when the agent is in a thinking state. Defaults to ", _jsx(_components.code, {
              children: "IGNORE"
            }), ". See ", _jsx(_components.a, {
              href: "#ethinkthinkingaction",
              children: _jsx(_components.code, {
                children: "EThinkThinkingAction"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "onSpeakingAction"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "EThinkSpeakingAction"
            })
          }), _jsxs(_components.td, {
            children: ["Optional. The action to take when the agent is in a speaking state. Defaults to ", _jsx(_components.code, {
              children: "IGNORE"
            }), ". See ", _jsx(_components.a, {
              href: "#ethinkspeakingaction",
              children: _jsx(_components.code, {
                children: "EThinkSpeakingAction"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "interruptable"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsxs(_components.td, {
            children: ["Optional. Whether the user can interrupt the response generated by this instruction by talking. Defaults to ", _jsx(_components.code, {
              children: "true"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "metadata"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Record<string, string>"
            })
          }), _jsx(_components.td, {
            children: "Optional. Custom key-value pairs. When omitted, no metadata is written to the RTM message."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "iconversationalaiapiconfig",
      children: _jsx(_components.code, {
        children: "IConversationalAIAPIConfig"
      })
    }), `
`, _jsx(_components.p, {
      children: "Parameters used to configure the interface."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " interface"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " IConversationalAIAPIConfig"
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
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " rtcEngine"
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
              children: " IAgoraRTCClient"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " rtmEngine"
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
              children: " RTMClient"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " renderMode"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " ETranscriptHelperMode"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " enableLog"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " enableRenderModeFallback"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
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
            children: "Parameter"
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
              children: "rtcEngine"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "IAgoraRTCClient"
            })
          }), _jsxs(_components.td, {
            children: ["Agora RTC engine instance. See ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html",
              children: _jsx(_components.code, {
                children: "IAgoraRTCClient"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "rtmEngine"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "RTMClient"
            })
          }), _jsxs(_components.td, {
            children: ["Agora RTM engine instance. See the ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/signaling-sdk/web/2.x/index.html",
              children: "Signaling Web API reference"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "renderMode"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ETranscriptHelperMode"
            })
          }), _jsxs(_components.td, {
            children: ["Rendering mode. See ", _jsx(_components.a, {
              href: "#etranscripthelpermode",
              children: _jsx(_components.code, {
                children: "ETranscriptHelperMode"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "enableLog"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsxs(_components.td, {
            children: ["Whether to enable logging: ", _jsx(_components.code, {
              children: "true"
            }), " enables logging, ", _jsx(_components.code, {
              children: "false"
            }), " disables logging."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "enableRenderModeFallback"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "boolean"
            })
          }), _jsxs(_components.td, {
            children: ["Whether to automatically fall back to text rendering when ", _jsx(_components.code, {
              children: "renderMode"
            }), " is set to word-level but the server doesn't provide word-level timing data. If ", _jsx(_components.code, {
              children: "true"
            }), " (default), falls back to text mode automatically. If ", _jsx(_components.code, {
              children: "false"
            }), ", stays in word mode regardless — this can result in no transcript being displayed if the server doesn't support word-level transcription."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "tstatechangeevent",
      children: _jsx(_components.code, {
        children: "TStateChangeEvent"
      })
    }), `
`, _jsx(_components.p, {
      children: "Event type used to describe a change in the state of a voice agent."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " TStateChangeEvent"
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
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " state"
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
              children: " EAgentState"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " turnID"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " number"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " timestamp"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " number"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " reason"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " string"
            })]
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
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "The state change event is triggered when the state of the voice agent changes. The timestamp uses the UNIX timestamp in milliseconds."
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
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "state"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#eagentstate",
              children: _jsx(_components.code, {
                children: "EAgentState"
              })
            })
          }), _jsxs(_components.td, {
            children: ["The current state of the voice agent. See ", _jsx(_components.a, {
              href: "#eagentstate",
              children: _jsx(_components.code, {
                children: "EAgentState"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turnID"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "Unique identifier for the current session turn."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "timestamp"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "Timestamp in milliseconds when the state change occurred."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "reason"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Description of the reason for the status change."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "tagentmetric",
      children: _jsx(_components.code, {
        children: "TAgentMetric"
      })
    }), `
`, _jsx(_components.p, {
      children: "Used to store metric data during agent runtime."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " TAgentMetric"
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
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " type"
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
              children: " EModuleType"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " name"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " string"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " value"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " number"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " timestamp"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " number"
            })]
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
            children: "Parameter"
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
              children: "type"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#emoduletype",
              children: _jsx(_components.code, {
                children: "EModuleType"
              })
            })
          }), _jsxs(_components.td, {
            children: ["Indicator module type. See ", _jsx(_components.a, {
              href: "#emoduletype",
              children: _jsx(_components.code, {
                children: "EModuleType"
              })
            }), "."]
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
            children: "The name of the indicator."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "value"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "The indicator value."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "timestamp"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC)."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "tmoduleerror",
      children: _jsx(_components.code, {
        children: "TModuleError"
      })
    }), `
`, _jsx(_components.p, {
      children: "Used to represent error messages from different AI modules, including error type, error code, error message, and timestamp."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " TModuleError"
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
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " type"
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
              children: " EModuleType"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " code"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " number"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " message"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " string"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " timestamp"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " number"
            })]
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
            children: "Parameter"
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
              children: "type"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#emoduletype",
              children: _jsx(_components.code, {
                children: "EModuleType"
              })
            })
          }), _jsxs(_components.td, {
            children: ["The module type where the error occurred. See ", _jsx(_components.a, {
              href: "#emoduletype",
              children: _jsx(_components.code, {
                children: "EModuleType"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "code"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "Module-specific error code."
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
            children: "Readable error description that makes it easier to understand and handle."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "timestamp"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC)."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "isubtitlehelperitem",
      children: _jsx(_components.code, {
        children: "ISubtitleHelperItem"
      })
    }), `
`, _jsx(_components.p, {
      children: "Transcript auxiliary item interface."
    }), `
`, _jsx(_components.p, {
      children: "The data structure for a single transcript item in the transcription system. This includes information such as user ID, stream ID, turn ID, timestamp, text content, status, and metadata."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " interface"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " ISubtitleHelperItem"
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
              children: "> {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " uid"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " string"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " stream_id"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
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
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " turn_id"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
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
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " _time"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
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
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " text"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " string"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " status"
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
              children: " ETurnStatus"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " metadata"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " |"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " null"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
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
            children: "Parameter"
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
              children: "uid"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Unique user identifier."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "stream_id"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "Stream identifier."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turn_id"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "The turn identifier within the session."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "_time"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "number"
            })
          }), _jsx(_components.td, {
            children: "Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC)."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "text"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            children: "Transcript text content."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "status"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#eturnstatus",
              children: _jsx(_components.code, {
                children: "ETurnStatus"
              })
            })
          }), _jsxs(_components.td, {
            children: ["The status of the transcript item. See ", _jsx(_components.a, {
              href: "#eturnstatus",
              children: _jsx(_components.code, {
                children: "ETurnStatus"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "metadata"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "T | null"
            })
          }), _jsx(_components.td, {
            children: "Additional metadata information."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "enum-classes",
      children: "Enum classes"
    }), `
`, _jsx(_components.h3, {
      id: "econversationalaiapievents",
      children: "EConversationalAIAPIEvents"
    }), `
`, _jsx(_components.p, {
      children: "Event types that can be triggered by the Conversational AI API."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Since v1.6.0"
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
              children: "AGENT_STATE_CHANGED"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: '"agent-state-changed"'
            }), ": Agent state change event."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AGENT_LISTENING_CHANGED"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: '"agent-listening-changed"'
            }), ": Agent listening state change event."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AGENT_THINKING_CHANGED"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: '"agent-thinking-changed"'
            }), ": Agent thinking state change event."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AGENT_SPEAKING_CHANGED"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: '"agent-speaking-changed"'
            }), ": Agent speaking state change event."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AGENT_INTERRUPTED"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: '"agent-interrupted"'
            }), ": Agent interrupted event."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AGENT_METRICS"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: '"agent-metrics"'
            }), ": Agent metrics event."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AGENT_ERROR"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: '"agent-error"'
            }), ": Agent error event."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TRANSCRIPT_UPDATED"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: '"transcript-updated"'
            }), ": Transcript updated event."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "DEBUG_LOG"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: '"debug-log"'
            }), ": Debug log event."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MESSAGE_RECEIPT_UPDATED"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: '"message-receipt-updated"'
            }), ": Message receipt updated event."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MESSAGE_ERROR"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: '"message-error"'
            }), ": Message error event."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "USER_MANUAL_SOS_RESULT"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: '"user.manual_sos.result"'
            }), ": Manual SoS result event."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "USER_MANUAL_EOS_RESULT"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: '"user.manual_eos.result"'
            }), ": Manual EoS result event."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AGENT_MANUAL_EOS_RESULT"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: '"assistant.manual_eos.result"'
            }), ": Server-triggered automatic EoS notification event."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "echatmessagepriority",
      children: "EChatMessagePriority"
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Since v1.7"
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Used to set the chat message processing priority."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: _jsx(_components.code, {
              children: "Value"
            })
          }), _jsx(_components.th, {
            children: _jsx(_components.code, {
              children: "description"
            })
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "INTERRUPTED"
            })
          }), _jsxs(_components.td, {
            children: ["(", _jsx(_components.code, {
              children: "'interrupted'"
            }), "): Interrupts current processing and immediately handles this message."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "APPEND"
            })
          }), _jsxs(_components.td, {
            children: ["(", _jsx(_components.code, {
              children: "'append'"
            }), "): Adds the message to the processing queue to be handled in order."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "IGNORE"
            })
          }), _jsxs(_components.td, {
            children: ["(", _jsx(_components.code, {
              children: "'ignore'"
            }), "): Discards the message without processing."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "ethinklisteningaction",
      children: "EThinkListeningAction"
    }), `
`, _jsx(_components.p, {
      children: "The action to take when the agent is in a listening state when a Think instruction arrives."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: _jsx(_components.code, {
              children: "Value"
            })
          }), _jsx(_components.th, {
            children: _jsx(_components.code, {
              children: "Description"
            })
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "INJECT"
            })
          }), _jsxs(_components.td, {
            children: ["(", _jsx(_components.code, {
              children: "'inject'"
            }), "): Injects the instruction into the current turn without interrupting it."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "INTERRUPT"
            })
          }), _jsxs(_components.td, {
            children: ["(", _jsx(_components.code, {
              children: "'interrupt'"
            }), "): Interrupts the current interaction and processes the instruction."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "APPEND"
            })
          }), _jsxs(_components.td, {
            children: ["(", _jsx(_components.code, {
              children: "'append'"
            }), "): Appends the instruction for processing after the current interaction completes."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "IGNORE"
            })
          }), _jsxs(_components.td, {
            children: ["(", _jsx(_components.code, {
              children: "'ignore'"
            }), "): Ignores the instruction."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "ethinkthinkingaction",
      children: "EThinkThinkingAction"
    }), `
`, _jsx(_components.p, {
      children: "The action to take when the agent is in a thinking state when a Think instruction arrives."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: _jsx(_components.code, {
              children: "Value"
            })
          }), _jsx(_components.th, {
            children: _jsx(_components.code, {
              children: "Description"
            })
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "INTERRUPT"
            })
          }), _jsxs(_components.td, {
            children: ["(", _jsx(_components.code, {
              children: "'interrupt'"
            }), "): Interrupts the current interaction and processes the instruction."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "APPEND"
            })
          }), _jsxs(_components.td, {
            children: ["(", _jsx(_components.code, {
              children: "'append'"
            }), "): Appends the instruction for processing after the current interaction completes."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "IGNORE"
            })
          }), _jsxs(_components.td, {
            children: ["(", _jsx(_components.code, {
              children: "'ignore'"
            }), "): Ignores the instruction."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "ethinkspeakingaction",
      children: "EThinkSpeakingAction"
    }), `
`, _jsx(_components.p, {
      children: "The action to take when the agent is in a speaking state when a Think instruction arrives."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: _jsx(_components.code, {
              children: "Value"
            })
          }), _jsx(_components.th, {
            children: _jsx(_components.code, {
              children: "Description"
            })
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "INTERRUPT"
            })
          }), _jsxs(_components.td, {
            children: ["(", _jsx(_components.code, {
              children: "'interrupt'"
            }), "): Interrupts the current interaction and processes the instruction."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "APPEND"
            })
          }), _jsxs(_components.td, {
            children: ["(", _jsx(_components.code, {
              children: "'append'"
            }), "): Appends the instruction for processing after the current interaction completes."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "IGNORE"
            })
          }), _jsxs(_components.td, {
            children: ["(", _jsx(_components.code, {
              children: "'ignore'"
            }), "): Ignores the instruction."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "echatmessagetype",
      children: "EChatMessageType"
    }), `
`, _jsx(_components.p, {
      children: "Chat message types supported in conversational AI."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Since v1.7"
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: _jsx(_components.code, {
              children: "Value"
            })
          }), _jsx(_components.th, {
            children: _jsx(_components.code, {
              children: "Description"
            })
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TEXT"
            })
          }), _jsxs(_components.td, {
            children: ["(", _jsx(_components.code, {
              children: "'text'"
            }), "): Text message."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "IMAGE"
            })
          }), _jsxs(_components.td, {
            children: ["(", _jsx(_components.code, {
              children: "'image'"
            }), "): Image message."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "UNKNOWN"
            })
          }), _jsxs(_components.td, {
            children: ["(", _jsx(_components.code, {
              children: "'unknown'"
            }), "): Unknown message type."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "eagentstate",
      children: "EAgentState"
    }), `
`, _jsx(_components.p, {
      children: "Agent state enumeration."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " enum"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " EAgentState"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " IDLE"
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
              children: ' "idle"'
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
              children: " LISTENING"
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
              children: ' "listening"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " THINKING"
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
              children: ' "thinking"'
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
              children: " SPEAKING"
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
              children: ' "speaking"'
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
              children: " SILENT"
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
              children: ' "silent"'
            })]
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
            children: "Value"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "IDLE"
            })
          }), _jsx(_components.td, {
            children: '("idle"): The agent is idle and ready for new interactions.'
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LISTENING"
            })
          }), _jsx(_components.td, {
            children: '("listening"): The agent is receiving user input.'
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "THINKING"
            })
          }), _jsx(_components.td, {
            children: '("thinking"): The agent is processing the input it receives.'
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "SPEAKING"
            })
          }), _jsx(_components.td, {
            children: '("speaking"): The agent is outputting a response.'
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "SILENT"
            })
          }), _jsx(_components.td, {
            children: '("silent"): The agent intentionally does not respond.'
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "emoduletype",
      children: "EModuleType"
    }), `
`, _jsx(_components.p, {
      children: "Enumeration of module types for AI capabilities."
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
              children: "LLM"
            })
          }), _jsx(_components.td, {
            children: '("llm"): Large Language Model.'
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MLLM"
            })
          }), _jsx(_components.td, {
            children: '("mllm"): Multimodal Large Language Model.'
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TTS"
            })
          }), _jsx(_components.td, {
            children: '("tts"): Text-to-speech module.'
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "CONTEXT"
            })
          }), _jsx(_components.td, {
            children: '("context"): Context management module.'
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "UNKNOWN"
            })
          }), _jsx(_components.td, {
            children: '("unknown"): Unknown module type.'
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "etranscripthelpermode",
      children: "ETranscriptHelperMode"
    }), `
`, _jsx(_components.p, {
      children: "The mode type for transcript processing."
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
              children: "TEXT"
            })
          }), _jsx(_components.td, {
            children: "Processes transcript in text mode."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "WORD"
            })
          }), _jsx(_components.td, {
            children: "Processes transcript in word mode."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "UNKNOWN"
            })
          }), _jsx(_components.td, {
            children: "Unknown transcript processing mode."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "eturnstatus",
      children: "ETurnStatus"
    }), `
`, _jsx(_components.p, {
      children: "TURN connection status enumeration."
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
              children: "IN_PROGRESS"
            })
          }), _jsx(_components.td, {
            children: "(0): TURN connection in progress."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "END"
            })
          }), _jsx(_components.td, {
            children: "(1): TURN connection has ended."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "INTERRUPTED"
            })
          }), _jsx(_components.td, {
            children: "(2): TURN connection has been disconnected."
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
