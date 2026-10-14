import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Android toolkit API",
  description: "Android toolkit API reference for Conversational AI Engine."
};
export let _markdown = `

## Installation [#installation]

Add the toolkit to your project using Maven or by copying the source code.

<Tabs>
  <TabsList>
    <TabsTrigger value="maven">
      Maven
    </TabsTrigger>

    <TabsTrigger value="source">
      Source code
    </TabsTrigger>
  </TabsList>

  <TabsContent value="maven">
    Add the following dependency to your app-level \`build.gradle\` file:

    \`\`\`groovy
    implementation 'io.agora.agents:agora-agent-client-toolkit:2.9.0'
    \`\`\`
  </TabsContent>

  <TabsContent value="source">
    Copy the [\`conversational-ai\`](https://github.com/AgoraIO-Conversational-AI/agent-client-toolkit-kotlin/tree/main/conversational-ai) module into your project, then import the toolkit before calling its APIs.
  </TabsContent>
</Tabs>

<CalloutContainer type="info">
  <CalloutDescription>
    If you encounter library conflicts when integrating multiple Agora SDKs in your Android project, see [handle integration issues](/en/api-reference/faq/integration/rtm2_rtc_integration_issue).
  </CalloutDescription>
</CalloutContainer>

The [Android toolkit API](https://github.com/AgoraIO-Community/Conversational-AI-Demo/tree/main/Android/scenes/convoai/src/main/java/io/agora/scene/convoai/convoaiApi) for Conversational AI Engine provides the following classes and methods.

## IConversationalAIAPI class [#iconversationalaiapi-class]

| API                                         | Description                                                       |
| ------------------------------------------- | ----------------------------------------------------------------- |
| [\`chat\`](#chat)                             | Send chat messages to a conversational agent.                     |
| [\`addHandler\`](#addhandler)                 | Registers an event handler to receive agent session events.       |
| [\`removeHandler\`](#removehandler)           | Removes a registered event handler.                               |
| [\`subscribeMessage\`](#subscribemessage)     | Subscribes to a channel to receive agent conversation events.     |
| [\`unsubscribeMessage\`](#unsubscribemessage) | Unsubscribes from the channel and stops receiving events.         |
| [\`interrupt\`](#interrupt)                   | Interrupts the agent’s speech.                                    |
| [\`manualSOS\`](#manualsos)                   | Sends a manual Start of Speech (SoS) signal to the agent.         |
| [\`manualEOS\`](#manualeos)                   | Sends a manual End of Speech (EoS) signal to the agent.           |
| [\`speak\`](#speak)                           | Makes the agent speak text directly, bypassing the LLM.           |
| [\`think\`](#think)                           | Injects text as user input for the LLM to process.                |
| [\`loadAudioSettings\`](#loadaudiosettings)   | Sets audio parameters to optimize agent conversation performance. |
| [\`destroy\`](#destroy)                       | Destroys the API instance and releases resources.                 |

### \`chat\` [#chat]

Send a message to the agent.

Support for sending different types of messages through the \`ChatMessage\` sealed class hierarchy:

* \`ImageMessage\`: Used to send picture messages.

\`\`\`kotlin
fun chat(agentUserId: String, message: ChatMessage, completion: (error: ConversationalAIAPIError?) -> Unit)
\`\`\`

| Parameter     | Type                                         | Description                                                                                        |
| ------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`                                     | Agent user ID.                                                                                     |
| \`message\`     | \`ChatMessage\`                                | Message object of type [ImageMessage](#imagemessage). See [ChatMessage](#chatmessage) for details. |
| \`completion\`  | \`(error: ConversationalAIAPIError?) -> Unit\` | Callback function. \`error\` is null if the call succeeds, and non-null if it fails.                 |

### \`addHandler\` [#addhandler]

Registers an event handler to receive agent session events.

\`\`\`kotlin
fun addHandler(handler: IConversationalAIAPIEventHandler)
\`\`\`

| Parameter | Type                               | Description                                                                                                |
| --------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| \`handler\` | \`IConversationalAIAPIEventHandler\` | Event handler instance. See [\`IConversationalAIAPIEventHandler\`](#iconversationalaiapieventhandler-class). |

### \`removeHandler\` [#removehandler]

Removes a registered event handler.

\`\`\`kotlin
fun removeHandler(handler: IConversationalAIAPIEventHandler)
\`\`\`

| Parameter | Type                               | Description                                                                                                |
| --------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| \`handler\` | \`IConversationalAIAPIEventHandler\` | Event handler instance. See [\`IConversationalAIAPIEventHandler\`](#iconversationalaiapieventhandler-class). |

### \`subscribeMessage\` [#subscribemessage]

Subscribes to a channel to receive agent conversation events.

\`\`\`kotlin
fun subscribeMessage(channelName: String, completion: (error: ConversationalAIAPIError?) -> Unit)
\`\`\`

| Parameter     | Type                                         | Description                                                                                                                         |
| ------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| \`channelName\` | \`String\`                                     | Channel name.                                                                                                                       |
| \`completion\`  | \`(error: ConversationalAIAPIError?) -> Unit\` | Callback. \`error\` is \`null\` on success, or non-null if the call fails. See [\`ConversationalAIAPIError\`](#conversationalaiapierror). |

### \`unsubscribeMessage\` [#unsubscribemessage]

Unsubscribes from the channel and stops receiving events.

\`\`\`kotlin
fun unsubscribeMessage(channelName: String, completion: (error: ConversationalAIAPIError?) -> Unit)
\`\`\`

| Parameter     | Type                                         | Description                                                                                                                                              |
| ------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`channelName\` | \`String\`                                     | Channel name.                                                                                                                                            |
| \`completion\`  | \`(error: ConversationalAIAPIError?) -> Unit\` | Callback for unsubscription result. \`error\` is \`null\` if successful, or non-null if failed. See [\`ConversationalAIAPIError\`](#conversationalaiapierror). |

### \`interrupt\` [#interrupt]

Interrupts the agent’s speech.

\`\`\`kotlin
fun interrupt(agentUserId: String, completion: (error: ConversationalAIAPIError?) -> Unit)
\`\`\`

| Parameter     | Type                                         | Description                                                                                                                                   |
| ------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`                                     | Agent user ID.                                                                                                                                |
| \`completion\`  | \`(error: ConversationalAIAPIError?) -> Unit\` | Callback. \`error\` is \`null\` on success or contains error info if the call fails. See [\`ConversationalAIAPIError\`](#conversationalaiapierror). |

### \`manualSOS\` [#manualsos]

Sends a manual Start of Speech (SoS) signal to the agent over RTM, explicitly declaring that the current user has started speaking.

\`\`\`kotlin
fun manualSOS(agentUserId: String, completion: (requestId: String, error: ConversationalAIAPIError?) -> Unit)
\`\`\`

Keep the following in mind when calling this method:

* The component generates \`requestId\` internally. After the request is sent, the component returns the \`requestId\` for this request in \`completion\`. Your app can store this value to correlate it with the server-side callback.
* \`completion\` only indicates whether the RTM publish succeeded — it does not indicate that the server processed the request successfully.
* Whether the server successfully processed the request is determined by the subsequent [\`onUserManualSosEvent\`](#onusermanualsosevent) or [\`onUserManualEosEvent\`](#onusermanualeosevent) callback.
* The client does not check locally whether manual mode is enabled. Mode validation is handled by the server.
* Common failure reasons include: the current mode configuration does not allow manual signaling, there is no active user speech to mark, or a manual SoS or EoS that has already taken effect is resubmitted within the same turn.

| Parameter     | Type                                                            | Description                                                                                                                                                                                                 |
| ------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`                                                        | Agent user ID.                                                                                                                                                                                              |
| \`completion\`  | \`(requestId: String, error: ConversationalAIAPIError?) -> Unit\` | Callback function. \`requestId\` is the unique identifier for this request. \`error\` is \`null\` if the call succeeds, and non-null if it fails. This callback only indicates whether the RTM publish succeeded. |

### \`manualEOS\` [#manualeos]

Sends a manual End of Speech (EoS) signal to the agent over RTM, explicitly declaring that the current user has finished speaking.

\`\`\`kotlin
fun manualEOS(agentUserId: String, completion: (requestId: String, error: ConversationalAIAPIError?) -> Unit)
\`\`\`

Keep the following in mind when calling this method:

* The component generates \`requestId\` internally. After the request is sent, the component returns the \`requestId\` for this request in \`completion\`. Your app can store this value to correlate it with the server-side callback.
* \`completion\` only indicates whether the RTM publish succeeded — it does not indicate that the server processed the request successfully.
* Whether the server successfully processed the request is determined by the subsequent [\`onUserManualSosEvent\`](#onusermanualsosevent) or [\`onUserManualEosEvent\`](#onusermanualeosevent) callback.
* The client does not check locally whether manual mode is enabled. Mode validation is handled by the server.
* Common failure reasons include: the current mode configuration does not allow manual signaling, there is no active user speech to mark, or a manual SoS or EoS that has already taken effect is resubmitted within the same turn.

| Parameter     | Type                                                            | Description                                                                                                                                                                                                 |
| ------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`                                                        | Agent user ID.                                                                                                                                                                                              |
| \`completion\`  | \`(requestId: String, error: ConversationalAIAPIError?) -> Unit\` | Callback function. \`requestId\` is the unique identifier for this request. \`error\` is \`null\` if the call succeeds, and non-null if it fails. This callback only indicates whether the RTM publish succeeded. |

### \`speak\` [#speak]

Bypasses the LLM and makes the agent speak text directly through its TTS pipeline.

This method requires RTM. \`completion\` only indicates whether the RTM message was published successfully, not that the agent has finished speaking.

\`\`\`kotlin
fun speak(agentUserId: String, message: SpeakMessage, completion: (error: ConversationalAIAPIError?) -> Unit)
\`\`\`

| Parameter     | Type                                         | Description                                                                        |
| ------------- | -------------------------------------------- | ---------------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`                                     | Agent user ID.                                                                     |
| \`message\`     | \`SpeakMessage\`                               | The text to speak and its playback behavior. See [\`SpeakMessage\`](#speakmessage).  |
| \`completion\`  | \`(error: ConversationalAIAPIError?) -> Unit\` | Callback function. \`error\` is null if the call succeeds, and non-null if it fails. |

### \`think\` [#think]

Injects text as user input into the conversation for the LLM to process.

This method requires RTM. \`completion\` only indicates whether the RTM message was published successfully, not that the LLM has finished processing the instruction.

\`\`\`kotlin
fun think(agentUserId: String, message: ThinkMessage, completion: (error: ConversationalAIAPIError?) -> Unit)
\`\`\`

| Parameter     | Type                                         | Description                                                                                    |
| ------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`                                     | Agent user ID.                                                                                 |
| \`message\`     | \`ThinkMessage\`                               | The instruction text, state actions, and custom metadata. See [\`ThinkMessage\`](#thinkmessage). |
| \`completion\`  | \`(error: ConversationalAIAPIError?) -> Unit\` | Callback function. \`error\` is null if the call succeeds, and non-null if it fails.             |

### \`loadAudioSettings\` [#loadaudiosettings]

Sets audio parameters to optimize the agent’s conversation performance.

<CalloutContainer type="info">
  <CalloutDescription>
    You must call this method **before each** \`joinChannel\` call to ensure optimal audio quality.
  </CalloutDescription>
</CalloutContainer>

\`\`\`kotlin
fun loadAudioSettings(scenario: Int = Constants.AUDIO_SCENARIO_AI_CLIENT)
\`\`\`

| Parameter  | Type  | Description                                                                                                                                                                                                                                                                                             |
| ---------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`scenario\` | \`Int\` | Audio scene. \`AUDIO_SCENARIO_AI_CLIENT\` is the default. Use it for Conversational AI agent dialogue scenarios to optimize audio quality for speech recognition and semantic understanding. If you enable the AI Avatar feature, set the scenario to \`AUDIO_SCENARIO_DEFAULT\` for better mixing results. |

### \`destroy\` [#destroy]

Destroys the API instance and releases resources.

Call this method when the instance is no longer needed. After calling, the instance becomes unusable.

\`\`\`kotlin
fun destroy()
\`\`\`

## IConversationalAIAPIEventHandler class [#iconversationalaiapieventhandler-class]

| API                                                   | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- |
| [\`onMessageError\`](#onmessageerror)                   | Message processing error callback.                    |
| [\`onMessageReceiptUpdated\`](#onmessagereceiptupdated) | Message receipt update callback.                      |
| [\`onUserManualSosEvent\`](#onusermanualsosevent)       | Manual SoS result callback.                           |
| [\`onUserManualEosEvent\`](#onusermanualeosevent)       | Manual EoS result callback.                           |
| [\`onAgentManualEosEvent\`](#onagentmanualeosevent)     | Server-triggered automatic EoS notification callback. |
| [\`onAgentStateChanged\`](#onagentstatechanged)         | Called when the agent’s status changes.               |
| [\`onAgentListeningChanged\`](#onagentlisteningchanged) | Called when the agent's listening state changes.      |
| [\`onAgentThinkingChanged\`](#onagentthinkingchanged)   | Called when the agent's thinking state changes.       |
| [\`onAgentSpeakingChanged\`](#onagentspeakingchanged)   | Called when the agent's speaking state changes.       |
| [\`onAgentInterrupted\`](#onagentinterrupted)           | Called when an interrupt event occurs.                |
| [\`onAgentMetrics\`](#onagentmetrics)                   | Called when performance metrics are available.        |
| [\`onAgentError\`](#onagenterror)                       | Called when an agent error occurs.                    |
| [\`onTranscriptUpdated\`](#ontranscriptupdated)         | Called when transcription content is updated.         |
| [\`onDebugLog\`](#ondebuglog)                           | Called for internal debug logging.                    |

### \`onMessageError\` [#onmessageerror]

Message processing error callback.

This callback is triggered when an error occurs during message processing. For example, if a chat message fails to be sent, this callback is triggered and the error message is returned.

\`\`\`kotlin
fun onMessageError(agentUserId: String, error: MessageError)
\`\`\`

| Parameter     | Type           | Description                                                                                  |
| ------------- | -------------- | -------------------------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`       | Agent user ID.                                                                               |
| \`error\`       | \`MessageError\` | Message error information, including error type and content. See \`MessageError\` for details. |

### \`onMessageReceiptUpdated\` [#onmessagereceiptupdated]

Message receipt update callback.

\`\`\`kotlin
fun onMessageReceiptUpdated(agentUserId: String, receipt: MessageReceipt)
\`\`\`

| Parameter     | Type             | Description                                                    |
| ------------- | ---------------- | -------------------------------------------------------------- |
| \`agentUserId\` | \`String\`         | Agent user ID.                                                 |
| \`receipt\`     | \`MessageReceipt\` | Message receipt information. See \`MessageReceipt\` for details. |

### \`onUserManualSosEvent\` [#onusermanualsosevent]

Manual SoS result callback.

Receives the server's processing result for a manual SoS request. Both success and failure results are returned through this callback — check \`event.payload.success\` to determine the outcome.

This callback has a default empty implementation, so existing integrations do not need to implement it.

\`\`\`kotlin
fun onUserManualSosEvent(agentUserId: String, event: UserManualSosEvent)
\`\`\`

| Parameter     | Type                 | Description                                                               |
| ------------- | -------------------- | ------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`             | Agent user ID.                                                            |
| \`event\`       | \`UserManualSosEvent\` | Manual SoS event object. See [\`UserManualSosEvent\`](#usermanualsosevent). |

### \`onUserManualEosEvent\` [#onusermanualeosevent]

Manual EoS result callback.

Receives the server's processing result for a manual EoS request. Both success and failure results are returned through this callback — check \`event.payload.success\` to determine the outcome.

This callback has a default empty implementation, so existing integrations do not need to implement it.

\`\`\`kotlin
fun onUserManualEosEvent(agentUserId: String, event: UserManualEosEvent)
\`\`\`

| Parameter     | Type                 | Description                                                               |
| ------------- | -------------------- | ------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`             | Agent user ID.                                                            |
| \`event\`       | \`UserManualEosEvent\` | Manual EoS event object. See [\`UserManualEosEvent\`](#usermanualeosevent). |

### \`onAgentManualEosEvent\` [#onagentmanualeosevent]

Server-triggered automatic EoS notification callback.

Triggered when a user's single speaking turn exceeds the server-side duration threshold. In this case, the server ends the current user's turn on its own and notifies the client through this callback. This event is not a result of calling \`manualEOS()\`.

This callback has a default empty implementation, so existing integrations do not need to implement it.

\`\`\`kotlin
fun onAgentManualEosEvent(agentUserId: String, event: AgentManualEosEvent)
\`\`\`

| Parameter     | Type                  | Description                                                                                     |
| ------------- | --------------------- | ----------------------------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`              | Agent user ID.                                                                                  |
| \`event\`       | \`AgentManualEosEvent\` | Server-triggered automatic EoS event object. See [\`AgentManualEosEvent\`](#agentmanualeosevent). |

### \`onAgentStateChanged\` [#onagentstatechanged]

Triggered when the agent’s state changes.

\`\`\`kotlin
fun onAgentStateChanged(agentUserId: String, event: StateChangeEvent)
\`\`\`

| Parameter     | Type               | Description                                                      |
| ------------- | ------------------ | ---------------------------------------------------------------- |
| \`agentUserId\` | \`String\`           | Agent user ID.                                                   |
| \`event\`       | \`StateChangeEvent\` | State change event. See [\`StateChangeEvent\`](#statechangeevent). |

### \`onAgentListeningChanged\` [#onagentlisteningchanged]

Triggered when the agent's listening state changes.

This callback is a fine-grained complement to \`onAgentStateChanged\`, used to monitor whether the agent is actively listening to user input.

\`\`\`kotlin
fun onAgentListeningChanged(agentUserId: String, isListening: Boolean)
\`\`\`

| Parameter     | Type      | Description                                          |
| ------------- | --------- | ---------------------------------------------------- |
| \`agentUserId\` | \`String\`  | Agent user ID.                                       |
| \`isListening\` | \`Boolean\` | Whether the agent is currently in a listening state. |

### \`onAgentThinkingChanged\` [#onagentthinkingchanged]

Triggered when the agent's thinking state changes.

This callback is a fine-grained complement to \`onAgentStateChanged\`, used to monitor whether the agent is actively processing a request.

\`\`\`kotlin
fun onAgentThinkingChanged(agentUserId: String, isThinking: Boolean)
\`\`\`

| Parameter     | Type      | Description                                         |
| ------------- | --------- | --------------------------------------------------- |
| \`agentUserId\` | \`String\`  | Agent user ID.                                      |
| \`isThinking\`  | \`Boolean\` | Whether the agent is currently in a thinking state. |

### \`onAgentSpeakingChanged\` [#onagentspeakingchanged]

Triggered when the agent's speaking state changes.

This callback is a fine-grained complement to \`onAgentStateChanged\`, used to monitor whether the agent is actively playing back speech.

\`\`\`kotlin
fun onAgentSpeakingChanged(agentUserId: String, isSpeaking: Boolean)
\`\`\`

| Parameter     | Type      | Description                                         |
| ------------- | --------- | --------------------------------------------------- |
| \`agentUserId\` | \`String\`  | Agent user ID.                                      |
| \`isSpeaking\`  | \`Boolean\` | Whether the agent is currently in a speaking state. |

### \`onAgentInterrupted\` [#onagentinterrupted]

Triggered when an interrupt event occurs.

\`\`\`kotlin
fun onAgentInterrupted(agentUserId: String, event: InterruptEvent)
\`\`\`

| Parameter     | Type             | Description                                               |
| ------------- | ---------------- | --------------------------------------------------------- |
| \`agentUserId\` | \`String\`         | Agent user ID.                                            |
| \`event\`       | \`InterruptEvent\` | Interrupt event. See [\`InterruptEvent\`](#interruptevent). |

### \`onAgentMetrics\` [#onagentmetrics]

Triggered when performance metrics become available.

\`\`\`kotlin
fun onAgentMetrics(agentUserId: String, metric: Metric)
\`\`\`

| Parameter     | Type     | Description                                  |
| ------------- | -------- | -------------------------------------------- |
| \`agentUserId\` | \`String\` | Agent user ID.                               |
| \`metric\`      | \`Metric\` | Performance metric. See [\`Metric\`](#metric). |

### \`onAgentError\` [#onagenterror]

Triggered when an agent error occurs.

\`\`\`kotlin
fun onAgentError(agentUserId: String, error: ModuleError)
\`\`\`

| Parameter     | Type          | Description                                       |
| ------------- | ------------- | ------------------------------------------------- |
| \`agentUserId\` | \`String\`      | Agent user ID.                                    |
| \`error\`       | \`ModuleError\` | Error details. See [\`ModuleError\`](#moduleerror). |

### \`onTranscriptUpdated\` [#ontranscriptupdated]

Triggered when the transcription content is updated.

\`\`\`kotlin
fun onTranscriptUpdated(agentUserId: String, transcript: Transcript)
\`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    This callback may trigger frequently. If deduplication is needed, handle it in your business logic.
  </CalloutDescription>
</CalloutContainer>

| Parameter     | Type         | Description                                       |
| ------------- | ------------ | ------------------------------------------------- |
| \`agentUserId\` | \`String\`     | Agent user ID.                                    |
| \`transcript\`  | \`Transcript\` | Transcript data. See [\`Transcript\`](#transcript). |

### \`onDebugLog\` [#ondebuglog]

Triggered for internal debug logs.

\`\`\`kotlin
fun onDebugLog(log: String)
\`\`\`

| Parameter | Type     | Description            |
| --------- | -------- | ---------------------- |
| \`log\`     | \`String\` | Debug log information. |

## Structures [#structures]

### \`StateChangeEvent\` [#statechangeevent]

Represents an agent state change event.\\
Tracks session flow and updates status indications in the UI, including the event timestamp.

\`\`\`kotlin
data class StateChangeEvent(
    val state: AgentState,
    val turnId: Long,
    val timestamp: Long,
)
\`\`\`

| Parameter   | Type                        | Description                                                                                           |
| ----------- | --------------------------- | ----------------------------------------------------------------------------------------------------- |
| \`state\`     | [\`AgentState\`](#agentstate) | Current agent status: \`silent\`, \`listening\`, \`thinking\`, \`speaking\`. See [\`AgentState\`](#agentstate). |
| \`turnId\`    | \`Long\`                      | Conversation turn ID.                                                                                 |
| \`timestamp\` | \`Long\`                      | Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC).                                     |

### \`InterruptEvent\` [#interruptevent]

Indicates an interrupt event.\\
Triggered when the user or system interrupts the agent or when the system detects a high-priority message. Used for logging and handling.

\`\`\`kotlin
data class InterruptEvent(
    val turnId: Long,
    val timestamp: Long
)
\`\`\`

| Parameter   | Type   | Description                                                       |
| ----------- | ------ | ----------------------------------------------------------------- |
| \`turnId\`    | \`Long\` | ID of the interrupted conversation turn.                          |
| \`timestamp\` | \`Long\` | Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC). |

### \`Metric\` [#metric]

Used to record and transmit system performance data. This data can be used for performance monitoring, system optimization, and user experience improvement.

\`\`\`kotlin
data class Metric(
    val type: ModuleType,
    val name: String,
    val value: Double,
    val timestamp: Long
)
\`\`\`

| Parameter   | Type                        | Description                                                                                |
| ----------- | --------------------------- | ------------------------------------------------------------------------------------------ |
| \`type\`      | [\`ModuleType\`](#moduletype) | Type of indicator. See [\`ModuleType\`](#moduletype).                                        |
| \`name\`      | \`String\`                    | Descriptive name of the metric.                                                            |
| \`value\`     | \`Double\`                    | Metric value (e.g., latency in ms).                                                        |
| \`timestamp\` | \`Long\`                      | Timestamp when metric was recorded in milliseconds since Unix epoch (January 1, 1970 UTC). |

### \`ModuleError\` [#moduleerror]

Processes and reports agent-related error information.

\`\`\`kotlin
data class ModuleError(
    val type: ModuleType,
    val code: Int,
    val message: String,
    val timestamp: Long,
    val turnId: Long? = null
)
\`\`\`

| Parameter   | Type                        | Description                                                                     |
| ----------- | --------------------------- | ------------------------------------------------------------------------------- |
| \`type\`      | [\`ModuleType\`](#moduletype) | Error type (e.g., LLM failure, TTS exception). See [\`ModuleType\`](#moduletype). |
| \`code\`      | \`Int\`                       | Specific error code.                                                            |
| \`message\`   | \`String\`                    | Description of the error.                                                       |
| \`timestamp\` | \`Long\`                      | Timestamp of the error in milliseconds since Unix epoch (January 1, 1970 UTC).  |
| \`turnId\`    | \`Long?\`                     | (Optional) \`turnId\` corresponding to the image upload error.                    |

### \`ChatMessage\` [#chatmessage]

Sealed base class for all message types sent to agents.

This sealed class hierarchy provides a type-safe way to handle messages of different content types.

\`\`\`kotlin
sealed class ChatMessage
\`\`\`

### \`ImageMessage\` [#imagemessage]

Used to send image content to the agent.

Supports specifying image files via HTTP/HTTPS links.

\`\`\`kotlin
data class ImageMessage(
    val uuid: String,
    val imageUrl: String,
) : ChatMessage()
\`\`\`

| Parameter  | Type    | Description                              |
| ---------- | ------- | ---------------------------------------- |
| \`uuid\`     | String  | Unique identifier for the image message. |
| \`imageUrl\` | String? | HTTP/HTTPS image file link.              |

### MessageReceipt [#messagereceipt]

\`MessageReceipt\` represents message receipt information and supports processing multiple media types through \`MediaInfo\`.

\`\`\`kotlin
data class MessageReceipt(
    val type: ModuleType,
    val chatMessageType: ChatMessageType,
    val turnId: Long,
    val message: String
)
\`\`\`

| Parameter         | Type            | Description                                                                                                                                  |
| ----------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| \`type\`            | ModuleType      | Module type. See ModuleType, for example: llm, mllm, tts, context.                                                                           |
| \`chatMessageType\` | ChatMessageType | Message error type. See [ChatMessageType](#chatmessagetype).                                                                                 |
| \`turnId\`          | Long            | Turn ID of the message.                                                                                                                      |
| \`message\`         | String          | Message content. Must be parsed according to the \`type\` field. For \`context\`, this is usually a JSON string containing resource information. |

### ChatMessageType [#chatmessagetype]

Used to distinguish different types of messages in the session system.

\`\`\`kotlin
enum class ChatMessageType(val value: String) {
    Text("text"),
    Image("picture"),
    UNKNOWN("unknown");

    companion object {
        fun fromValue(value: String): ChatMessageType {
            return ChatMessageType.entries.find { it.value == value } ?: UNKNOWN
        }
    }
}
\`\`\`

| Parameter | Type     | Description                        |
| --------- | -------- | ---------------------------------- |
| \`value\`   | \`String\` | The string value to match against. |

### MessageError [#messageerror]

Used to process and report message error information.

\`\`\`kotlin
data class MessageError(
    val chatMessageType: ChatMessageType,
    val code: Int,
    val message: String,
    val timestamp: Long
)
\`\`\`

| Parameter         | Type              | Description                                                                                              |
| ----------------- | ----------------- | -------------------------------------------------------------------------------------------------------- |
| \`chatMessageType\` | \`ChatMessageType\` | Message error type. See \`ChatMessageType\` for details.                                                   |
| \`code\`            | \`Int\`             | Error code used to identify specific error scenarios.                                                    |
| \`message\`         | \`String\`          | Error description providing detailed explanation, usually a JSON string containing resource information. |
| \`timestamp\`       | \`Long\`            | Timestamp of when the event occurred (milliseconds since January 1, 1970 UTC).                           |

### \`UserManualEventPayload\` [#usermanualeventpayload]

Common payload for manual SoS/EoS events.

\`\`\`kotlin
data class UserManualEventPayload(
    val success: Boolean,
    val requestId: String,
    val turnId: Long?,
    val errorMessage: String?
)
\`\`\`

| Parameter      | Type      | Description                                                                                                     |
| -------------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| \`success\`      | \`Boolean\` | Whether the server successfully processed this manual signal.                                                   |
| \`requestId\`    | \`String\`  | Request ID, corresponding to the \`requestId\` returned in \`completion\` after calling \`manualSOS\` or \`manualEOS\`. |
| \`turnId\`       | \`Long?\`   | The associated conversation turn ID. \`null\` if the server's failure callback does not include a \`turn_id\`.      |
| \`errorMessage\` | \`String?\` | The raw error message returned by the server. Usually \`null\` on success.                                        |

### \`UserManualSosEvent\` [#usermanualsosevent]

Represents a manual SoS event.

\`\`\`kotlin
data class UserManualSosEvent(
    val eventId: String,
    val timestamp: Long,
    val payload: UserManualEventPayload
)
\`\`\`

| Parameter   | Type                     | Description                                                             |
| ----------- | ------------------------ | ----------------------------------------------------------------------- |
| \`eventId\`   | \`String\`                 | Unique event ID.                                                        |
| \`timestamp\` | \`Long\`                   | Event timestamp in milliseconds.                                        |
| \`payload\`   | \`UserManualEventPayload\` | Event payload. See [\`UserManualEventPayload\`](#usermanualeventpayload). |

### \`UserManualEosEvent\` [#usermanualeosevent]

Represents a manual EoS event.

\`\`\`kotlin
data class UserManualEosEvent(
    val eventId: String,
    val timestamp: Long,
    val payload: UserManualEventPayload
)
\`\`\`

| Parameter   | Type                     | Description                                                             |
| ----------- | ------------------------ | ----------------------------------------------------------------------- |
| \`eventId\`   | \`String\`                 | Unique event ID.                                                        |
| \`timestamp\` | \`Long\`                   | Event timestamp in milliseconds.                                        |
| \`payload\`   | \`UserManualEventPayload\` | Event payload. See [\`UserManualEventPayload\`](#usermanualeventpayload). |

### \`AgentManualEosPayload\` [#agentmanualeospayload]

Payload for a server-triggered automatic EoS event.

\`\`\`kotlin
data class AgentManualEosPayload(
    val reason: String,
    val maxDurationMs: Long,
    val turnId: Long
)
\`\`\`

| Parameter       | Type     | Description                                                                   |
| --------------- | -------- | ----------------------------------------------------------------------------- |
| \`reason\`        | \`String\` | The reason the server automatically ended the current user's turn.            |
| \`maxDurationMs\` | \`Long\`   | The configured maximum duration, in milliseconds, for a single speaking turn. |
| \`turnId\`        | \`Long\`   | The associated conversation turn ID.                                          |

### \`AgentManualEosEvent\` [#agentmanualeosevent]

Represents a server-triggered automatic EoS event.

\`\`\`kotlin
data class AgentManualEosEvent(
    val eventId: String,
    val timestamp: Long,
    val payload: AgentManualEosPayload
)
\`\`\`

| Parameter   | Type                    | Description                                                           |
| ----------- | ----------------------- | --------------------------------------------------------------------- |
| \`eventId\`   | \`String\`                | Unique event ID.                                                      |
| \`timestamp\` | \`Long\`                  | Event timestamp in milliseconds.                                      |
| \`payload\`   | \`AgentManualEosPayload\` | Event payload. See [\`AgentManualEosPayload\`](#agentmanualeospayload). |

### \`SpeakMessage\` [#speakmessage]

\`\`\`kotlin
data class SpeakMessage(
    val text: String,
    val priority: Priority = Priority.INTERRUPT,
    val interruptable: Boolean = true,
)
\`\`\`

Used to bypass the LLM and speak text directly through the agent's TTS pipeline.

| Parameter       | Type                    | Description                                                                                         |
| --------------- | ----------------------- | --------------------------------------------------------------------------------------------------- |
| \`text\`          | \`String\`                | The text to speak.                                                                                  |
| \`priority\`      | [\`Priority\`](#priority) | The priority for handling this speak request. Defaults to \`INTERRUPT\`. See [\`Priority\`](#priority). |
| \`interruptable\` | \`Boolean\`               | Whether the user can interrupt this speech by talking. Defaults to \`true\`.                          |

### \`ThinkMessage\` [#thinkmessage]

\`\`\`kotlin
data class ThinkMessage(
    val text: String,
    val onListeningAction: ThinkListeningAction = ThinkListeningAction.INTERRUPT,
    val onThinkingAction: ThinkThinkingAction = ThinkThinkingAction.IGNORE,
    val onSpeakingAction: ThinkSpeakingAction = ThinkSpeakingAction.IGNORE,
    val interruptable: Boolean = true,
    val metadata: Map<String, String>? = null,
)
\`\`\`

Used to inject text as user input for the LLM to process.

| Parameter           | Type                                            | Description                                                                                                                              |
| ------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| \`text\`              | \`String\`                                        | The instruction text to inject for the LLM.                                                                                              |
| \`onListeningAction\` | [\`ThinkListeningAction\`](#thinklisteningaction) | The action to take when the agent is in a listening state. Defaults to \`INTERRUPT\`. See [\`ThinkListeningAction\`](#thinklisteningaction). |
| \`onThinkingAction\`  | [\`ThinkThinkingAction\`](#thinkthinkingaction)   | The action to take when the agent is in a thinking state. Defaults to \`IGNORE\`. See [\`ThinkThinkingAction\`](#thinkthinkingaction).       |
| \`onSpeakingAction\`  | [\`ThinkSpeakingAction\`](#thinkspeakingaction)   | The action to take when the agent is in a speaking state. Defaults to \`IGNORE\`. See [\`ThinkSpeakingAction\`](#thinkspeakingaction).       |
| \`interruptable\`     | \`Boolean\`                                       | Whether the user can interrupt the response generated by this instruction by talking. Defaults to \`true\`.                                |
| \`metadata\`          | \`Map<String, String>?\`                          | Optional custom key-value pairs. When \`null\`, no metadata is written to the RTM message.                                                 |

### \`Transcript\` [#transcript]

Represents a full transcribed message used to render the UI.

\`\`\`kotlin
data class Transcript(
    val turnId: Long,
    val userId: String = "",
    val text: String,
    var status: TranscriptStatus,
    var type: TranscriptType
)
\`\`\`

| Parameter | Type               | Description                                                                       |
| --------- | ------------------ | --------------------------------------------------------------------------------- |
| \`turnId\`  | \`Long\`             | Session turn identifier.                                                          |
| \`userId\`  | \`String\`           | User ID linked to the transcript.                                                 |
| \`text\`    | \`String\`           | Transcribed message content.                                                      |
| \`status\`  | \`TranscriptStatus\` | Current status of transcription. See [\`TranscriptStatus\`](#transcriptstatus).     |
| \`type\`    | \`TranscriptType\`   | Transcript type (e.g., \`AGENT\`, \`USER\`). See [\`TranscriptType\`](#transcripttype). |

### \`ConversationalAIAPIConfig\` [#conversationalaiapiconfig]

Holds configuration parameters for initializing the Conversational AI API.

\`\`\`kotlin
data class ConversationalAIAPIConfig(
    val rtcEngine: RtcEngine,
    val rtmClient: RtmClient,
    val renderMode: TranscriptRenderMode = TranscriptRenderMode.Word,
    val enableLog: Boolean = true,
    val enableRenderModeFallback: Boolean = true
)
\`\`\`

| Parameter                  | Type                   | Description                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`rtcEngine\`                | \`RtcEngine\`            | Audio/video engine instance. See [\`RtcEngine\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#class_irtcengine).                                                                                                                                                                                                                                                   |
| \`rtmClient\`                | \`RtmClient\`            | Real-time messaging client. See the [Signaling Android API reference](https://api-ref.agora.io/en/signaling-sdk/android/2.x/index.html).                                                                                                                                                                                                                                                        |
| \`renderMode\`               | \`TranscriptRenderMode\` | Transcript rendering style. Default: word-by-word. See [\`TranscriptRenderMode\`](#transcriptrendermode).                                                                                                                                                                                                                                                                                         |
| \`enableLog\`                | \`Boolean\`              | Enables logging if \`true\`. When \`true\`, logs are written to the RTC SDK log file. Default is \`true\`.                                                                                                                                                                                                                                                                                            |
| \`enableRenderModeFallback\` | \`Boolean\`              | Whether to automatically fall back to text rendering when \`renderMode\` is set to word-level but the server doesn't provide word-level timing data. If \`true\` (default), the component falls back to text mode automatically. If \`false\`, the component stays in word mode regardless — this can result in no transcript being displayed if the server doesn't support word-level transcription. |

### \`ConversationalAIAPIError\` [#conversationalaiapierror]

Represents an error type in the Conversational AI API.

\`\`\`kotlin
sealed class ConversationalAIAPIError : Exception() {
    data class RtmError(val code: Int, val msg: String) : ConversationalAIAPIError()
    data class RtcError(val code: Int, val msg: String) : ConversationalAIAPIError()
    data class UnknownError(val msg: String) : ConversationalAIAPIError()

    val errorCode: Int
        get() = when (this) {
            is RtmError -> this.code
            is RtcError -> this.code
            is UnknownError -> -100
        }

    val errorMessage: String
        get() = when (this) {
            is RtmError -> this.msg
            is RtcError -> this.msg
            is UnknownError -> this.msg
        }
}
\`\`\`

| Property       | Type     | Description                                                           |
| -------------- | -------- | --------------------------------------------------------------------- |
| \`errorCode\`    | \`Int\`    | \`RtmError\`/\`RtcError\`: specific code; \`UnknownError\`: returns \`-100\`. |
| \`errorMessage\` | \`String\` | Human-readable description of the error.                              |

## Enum classes [#enum-classes]

### Priority [#priority]

Controls the priority with which the agent handles incoming messages during an interaction.

| Value       | Description                                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`INTERRUPT\` | High priority: Immediately interrupt the current interaction and process the message. Suitable for urgent or time-sensitive content.                   |
| \`APPEND\`    | Medium priority: The message is queued for processing after the current interaction is completed and is suitable for subsequent questions.             |
| \`IGNORE\`    | Low priority: This message is only processed when the agent is idle, and will be discarded during ongoing interactions. Suitable for optional content. |

### ThinkListeningAction [#thinklisteningaction]

The action to take when the agent is in a listening state when a Think instruction arrives.

| Value       | Description                                                                     |
| ----------- | ------------------------------------------------------------------------------- |
| \`INJECT\`    | Injects the instruction into the current turn without interrupting it.          |
| \`INTERRUPT\` | Interrupts the current interaction and processes the instruction.               |
| \`APPEND\`    | Appends the instruction for processing after the current interaction completes. |
| \`IGNORE\`    | Ignores the instruction.                                                        |

### ThinkThinkingAction [#thinkthinkingaction]

The action to take when the agent is in a thinking state when a Think instruction arrives.

| Value       | Description                                                                     |
| ----------- | ------------------------------------------------------------------------------- |
| \`INTERRUPT\` | Interrupts the current interaction and processes the instruction.               |
| \`APPEND\`    | Appends the instruction for processing after the current interaction completes. |
| \`IGNORE\`    | Ignores the instruction.                                                        |

### ThinkSpeakingAction [#thinkspeakingaction]

The action to take when the agent is in a speaking state when a Think instruction arrives.

| Value       | Description                                                                     |
| ----------- | ------------------------------------------------------------------------------- |
| \`INTERRUPT\` | Interrupts the current interaction and processes the instruction.               |
| \`APPEND\`    | Appends the instruction for processing after the current interaction completes. |
| \`IGNORE\`    | Ignores the instruction.                                                        |

### AgentState [#agentstate]

Represents the current state of the agent.

| Value       | Description                      |
| ----------- | -------------------------------- |
| \`SILENT\`    | Agent is silent.                 |
| \`LISTENING\` | Agent is listening.              |
| \`THINKING\`  | Agent is processing or thinking. |
| \`SPEAKING\`  | Agent is speaking.               |
| \`UNKNOWN\`   | Unknown state.                   |

### ModuleType [#moduletype]

Performance module type enumeration.

| Value     | Description                                   |
| --------- | --------------------------------------------- |
| \`LLM\`     | LLM inference latency measurement.            |
| \`MLLM\`    | MLLM inference latency measurement.           |
| \`TTS\`     | Text-to-speech synthesis latency measurement. |
| \`UNKNOWN\` | Unknown type.                                 |

### MessageType [#messagetype]

Used to distinguish different types of messages in the system.

| Value             | Description                      |
| ----------------- | -------------------------------- |
| \`ASSISTANT\`       | AI assistant transcript message. |
| \`USER\`            | User transcript message.         |
| \`ERROR\`           | Error message.                   |
| \`METRICS\`         | Performance metrics message.     |
| \`INTERRUPT\`       | Interrupt message.               |
| \`UNKNOWN\`         | Unknown message type.            |
| \`MESSAGE_RECEIPT\` | Message receipt.                 |

### TranscriptRenderMode [#transcriptrendermode]

Transcript rendering mode.

| Value  | Description                               |
| ------ | ----------------------------------------- |
| \`Word\` | Word-by-word transcription and rendering. |
| \`Text\` | Full text transcription and rendering.    |

### TranscriptType [#transcripttype]

Transcript source type.

| Value   | Description       |
| ------- | ----------------- |
| \`AGENT\` | Agent transcript. |
| \`USER\`  | User transcript.  |

### TranscriptStatus [#transcriptstatus]

Indicates the current status of the transcription.

| Value         | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| \`IN_PROGRESS\` | The transcript is still being generated or the speech is still in progress. |
| \`END\`         | The transcription completed normally.                                       |
| \`INTERRUPTED\` | Transcription was interrupted before completion.                            |
| \`UNKNOWN\`     | Unknown status.                                                             |
`;
export let structuredData = {
  contents: [{
    heading: "installation",
    content: "Add the toolkit to your project using Maven or by copying the source code."
  }, {
    heading: "installation",
    content: "Add the following dependency to your app-level `build.gradle` file:"
  }, {
    heading: "installation",
    content: "Copy the `conversational-ai` module into your project, then import the toolkit before calling its APIs."
  }, {
    heading: "installation",
    content: "If you encounter library conflicts when integrating multiple Agora SDKs in your Android project, see handle integration issues."
  }, {
    heading: "installation",
    content: "The Android toolkit API for Conversational AI Engine provides the following classes and methods."
  }, {
    heading: "iconversationalaiapi-class",
    content: "API"
  }, {
    heading: "iconversationalaiapi-class",
    content: "Description"
  }, {
    heading: "iconversationalaiapi-class",
    content: "`chat`"
  }, {
    heading: "iconversationalaiapi-class",
    content: "Send chat messages to a conversational agent."
  }, {
    heading: "iconversationalaiapi-class",
    content: "`addHandler`"
  }, {
    heading: "iconversationalaiapi-class",
    content: "Registers an event handler to receive agent session events."
  }, {
    heading: "iconversationalaiapi-class",
    content: "`removeHandler`"
  }, {
    heading: "iconversationalaiapi-class",
    content: "Removes a registered event handler."
  }, {
    heading: "iconversationalaiapi-class",
    content: "`subscribeMessage`"
  }, {
    heading: "iconversationalaiapi-class",
    content: "Subscribes to a channel to receive agent conversation events."
  }, {
    heading: "iconversationalaiapi-class",
    content: "`unsubscribeMessage`"
  }, {
    heading: "iconversationalaiapi-class",
    content: "Unsubscribes from the channel and stops receiving events."
  }, {
    heading: "iconversationalaiapi-class",
    content: "`interrupt`"
  }, {
    heading: "iconversationalaiapi-class",
    content: "Interrupts the agent’s speech."
  }, {
    heading: "iconversationalaiapi-class",
    content: "`manualSOS`"
  }, {
    heading: "iconversationalaiapi-class",
    content: "Sends a manual Start of Speech (SoS) signal to the agent."
  }, {
    heading: "iconversationalaiapi-class",
    content: "`manualEOS`"
  }, {
    heading: "iconversationalaiapi-class",
    content: "Sends a manual End of Speech (EoS) signal to the agent."
  }, {
    heading: "iconversationalaiapi-class",
    content: "`speak`"
  }, {
    heading: "iconversationalaiapi-class",
    content: "Makes the agent speak text directly, bypassing the LLM."
  }, {
    heading: "iconversationalaiapi-class",
    content: "`think`"
  }, {
    heading: "iconversationalaiapi-class",
    content: "Injects text as user input for the LLM to process."
  }, {
    heading: "iconversationalaiapi-class",
    content: "`loadAudioSettings`"
  }, {
    heading: "iconversationalaiapi-class",
    content: "Sets audio parameters to optimize agent conversation performance."
  }, {
    heading: "iconversationalaiapi-class",
    content: "`destroy`"
  }, {
    heading: "iconversationalaiapi-class",
    content: "Destroys the API instance and releases resources."
  }, {
    heading: "chat",
    content: "Send a message to the agent."
  }, {
    heading: "chat",
    content: "Support for sending different types of messages through the `ChatMessage` sealed class hierarchy:"
  }, {
    heading: "chat",
    content: "`ImageMessage`: Used to send picture messages."
  }, {
    heading: "chat",
    content: "Parameter"
  }, {
    heading: "chat",
    content: "Type"
  }, {
    heading: "chat",
    content: "Description"
  }, {
    heading: "chat",
    content: "`agentUserId`"
  }, {
    heading: "chat",
    content: "`String`"
  }, {
    heading: "chat",
    content: "Agent user ID."
  }, {
    heading: "chat",
    content: "`message`"
  }, {
    heading: "chat",
    content: "`ChatMessage`"
  }, {
    heading: "chat",
    content: "Message object of type ImageMessage. See ChatMessage for details."
  }, {
    heading: "chat",
    content: "`completion`"
  }, {
    heading: "chat",
    content: "`(error: ConversationalAIAPIError?) -> Unit`"
  }, {
    heading: "chat",
    content: "Callback function. `error` is null if the call succeeds, and non-null if it fails."
  }, {
    heading: "addhandler",
    content: "Registers an event handler to receive agent session events."
  }, {
    heading: "addhandler",
    content: "Parameter"
  }, {
    heading: "addhandler",
    content: "Type"
  }, {
    heading: "addhandler",
    content: "Description"
  }, {
    heading: "addhandler",
    content: "`handler`"
  }, {
    heading: "addhandler",
    content: "`IConversationalAIAPIEventHandler`"
  }, {
    heading: "addhandler",
    content: "Event handler instance. See `IConversationalAIAPIEventHandler`."
  }, {
    heading: "removehandler",
    content: "Removes a registered event handler."
  }, {
    heading: "removehandler",
    content: "Parameter"
  }, {
    heading: "removehandler",
    content: "Type"
  }, {
    heading: "removehandler",
    content: "Description"
  }, {
    heading: "removehandler",
    content: "`handler`"
  }, {
    heading: "removehandler",
    content: "`IConversationalAIAPIEventHandler`"
  }, {
    heading: "removehandler",
    content: "Event handler instance. See `IConversationalAIAPIEventHandler`."
  }, {
    heading: "subscribemessage",
    content: "Subscribes to a channel to receive agent conversation events."
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
    content: "`channelName`"
  }, {
    heading: "subscribemessage",
    content: "`String`"
  }, {
    heading: "subscribemessage",
    content: "Channel name."
  }, {
    heading: "subscribemessage",
    content: "`completion`"
  }, {
    heading: "subscribemessage",
    content: "`(error: ConversationalAIAPIError?) -> Unit`"
  }, {
    heading: "subscribemessage",
    content: "Callback. `error` is `null` on success, or non-null if the call fails. See `ConversationalAIAPIError`."
  }, {
    heading: "unsubscribemessage",
    content: "Unsubscribes from the channel and stops receiving events."
  }, {
    heading: "unsubscribemessage",
    content: "Parameter"
  }, {
    heading: "unsubscribemessage",
    content: "Type"
  }, {
    heading: "unsubscribemessage",
    content: "Description"
  }, {
    heading: "unsubscribemessage",
    content: "`channelName`"
  }, {
    heading: "unsubscribemessage",
    content: "`String`"
  }, {
    heading: "unsubscribemessage",
    content: "Channel name."
  }, {
    heading: "unsubscribemessage",
    content: "`completion`"
  }, {
    heading: "unsubscribemessage",
    content: "`(error: ConversationalAIAPIError?) -> Unit`"
  }, {
    heading: "unsubscribemessage",
    content: "Callback for unsubscription result. `error` is `null` if successful, or non-null if failed. See `ConversationalAIAPIError`."
  }, {
    heading: "interrupt",
    content: "Interrupts the agent’s speech."
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
    content: "`String`"
  }, {
    heading: "interrupt",
    content: "Agent user ID."
  }, {
    heading: "interrupt",
    content: "`completion`"
  }, {
    heading: "interrupt",
    content: "`(error: ConversationalAIAPIError?) -> Unit`"
  }, {
    heading: "interrupt",
    content: "Callback. `error` is `null` on success or contains error info if the call fails. See `ConversationalAIAPIError`."
  }, {
    heading: "manualsos",
    content: "Sends a manual Start of Speech (SoS) signal to the agent over RTM, explicitly declaring that the current user has started speaking."
  }, {
    heading: "manualsos",
    content: "Keep the following in mind when calling this method:"
  }, {
    heading: "manualsos",
    content: "The component generates `requestId` internally. After the request is sent, the component returns the `requestId` for this request in `completion`. Your app can store this value to correlate it with the server-side callback."
  }, {
    heading: "manualsos",
    content: "`completion` only indicates whether the RTM publish succeeded — it does not indicate that the server processed the request successfully."
  }, {
    heading: "manualsos",
    content: "Whether the server successfully processed the request is determined by the subsequent `onUserManualSosEvent` or `onUserManualEosEvent` callback."
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
    content: "`String`"
  }, {
    heading: "manualsos",
    content: "Agent user ID."
  }, {
    heading: "manualsos",
    content: "`completion`"
  }, {
    heading: "manualsos",
    content: "`(requestId: String, error: ConversationalAIAPIError?) -> Unit`"
  }, {
    heading: "manualsos",
    content: "Callback function. `requestId` is the unique identifier for this request. `error` is `null` if the call succeeds, and non-null if it fails. This callback only indicates whether the RTM publish succeeded."
  }, {
    heading: "manualeos",
    content: "Sends a manual End of Speech (EoS) signal to the agent over RTM, explicitly declaring that the current user has finished speaking."
  }, {
    heading: "manualeos",
    content: "Keep the following in mind when calling this method:"
  }, {
    heading: "manualeos",
    content: "The component generates `requestId` internally. After the request is sent, the component returns the `requestId` for this request in `completion`. Your app can store this value to correlate it with the server-side callback."
  }, {
    heading: "manualeos",
    content: "`completion` only indicates whether the RTM publish succeeded — it does not indicate that the server processed the request successfully."
  }, {
    heading: "manualeos",
    content: "Whether the server successfully processed the request is determined by the subsequent `onUserManualSosEvent` or `onUserManualEosEvent` callback."
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
    content: "`String`"
  }, {
    heading: "manualeos",
    content: "Agent user ID."
  }, {
    heading: "manualeos",
    content: "`completion`"
  }, {
    heading: "manualeos",
    content: "`(requestId: String, error: ConversationalAIAPIError?) -> Unit`"
  }, {
    heading: "manualeos",
    content: "Callback function. `requestId` is the unique identifier for this request. `error` is `null` if the call succeeds, and non-null if it fails. This callback only indicates whether the RTM publish succeeded."
  }, {
    heading: "speak",
    content: "Bypasses the LLM and makes the agent speak text directly through its TTS pipeline."
  }, {
    heading: "speak",
    content: "This method requires RTM. `completion` only indicates whether the RTM message was published successfully, not that the agent has finished speaking."
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
    content: "`String`"
  }, {
    heading: "speak",
    content: "Agent user ID."
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
    content: "`completion`"
  }, {
    heading: "speak",
    content: "`(error: ConversationalAIAPIError?) -> Unit`"
  }, {
    heading: "speak",
    content: "Callback function. `error` is null if the call succeeds, and non-null if it fails."
  }, {
    heading: "think",
    content: "Injects text as user input into the conversation for the LLM to process."
  }, {
    heading: "think",
    content: "This method requires RTM. `completion` only indicates whether the RTM message was published successfully, not that the LLM has finished processing the instruction."
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
    content: "`String`"
  }, {
    heading: "think",
    content: "Agent user ID."
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
    content: "`completion`"
  }, {
    heading: "think",
    content: "`(error: ConversationalAIAPIError?) -> Unit`"
  }, {
    heading: "think",
    content: "Callback function. `error` is null if the call succeeds, and non-null if it fails."
  }, {
    heading: "loadaudiosettings",
    content: "Sets audio parameters to optimize the agent’s conversation performance."
  }, {
    heading: "loadaudiosettings",
    content: "You must call this method **before each** `joinChannel` call to ensure optimal audio quality."
  }, {
    heading: "loadaudiosettings",
    content: "Parameter"
  }, {
    heading: "loadaudiosettings",
    content: "Type"
  }, {
    heading: "loadaudiosettings",
    content: "Description"
  }, {
    heading: "loadaudiosettings",
    content: "`scenario`"
  }, {
    heading: "loadaudiosettings",
    content: "`Int`"
  }, {
    heading: "loadaudiosettings",
    content: "Audio scene. `AUDIO_SCENARIO_AI_CLIENT` is the default. Use it for Conversational AI agent dialogue scenarios to optimize audio quality for speech recognition and semantic understanding. If you enable the AI Avatar feature, set the scenario to `AUDIO_SCENARIO_DEFAULT` for better mixing results."
  }, {
    heading: "destroy",
    content: "Destroys the API instance and releases resources."
  }, {
    heading: "destroy",
    content: "Call this method when the instance is no longer needed. After calling, the instance becomes unusable."
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "API"
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "Description"
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "`onMessageError`"
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "Message processing error callback."
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "`onMessageReceiptUpdated`"
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "Message receipt update callback."
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "`onUserManualSosEvent`"
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "Manual SoS result callback."
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "`onUserManualEosEvent`"
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "Manual EoS result callback."
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "`onAgentManualEosEvent`"
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "Server-triggered automatic EoS notification callback."
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "`onAgentStateChanged`"
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "Called when the agent’s status changes."
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "`onAgentListeningChanged`"
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "Called when the agent's listening state changes."
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "`onAgentThinkingChanged`"
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "Called when the agent's thinking state changes."
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "`onAgentSpeakingChanged`"
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "Called when the agent's speaking state changes."
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "`onAgentInterrupted`"
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "Called when an interrupt event occurs."
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "`onAgentMetrics`"
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "Called when performance metrics are available."
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "`onAgentError`"
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "Called when an agent error occurs."
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "`onTranscriptUpdated`"
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "Called when transcription content is updated."
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "`onDebugLog`"
  }, {
    heading: "iconversationalaiapieventhandler-class",
    content: "Called for internal debug logging."
  }, {
    heading: "onmessageerror",
    content: "Message processing error callback."
  }, {
    heading: "onmessageerror",
    content: "This callback is triggered when an error occurs during message processing. For example, if a chat message fails to be sent, this callback is triggered and the error message is returned."
  }, {
    heading: "onmessageerror",
    content: "Parameter"
  }, {
    heading: "onmessageerror",
    content: "Type"
  }, {
    heading: "onmessageerror",
    content: "Description"
  }, {
    heading: "onmessageerror",
    content: "`agentUserId`"
  }, {
    heading: "onmessageerror",
    content: "`String`"
  }, {
    heading: "onmessageerror",
    content: "Agent user ID."
  }, {
    heading: "onmessageerror",
    content: "`error`"
  }, {
    heading: "onmessageerror",
    content: "`MessageError`"
  }, {
    heading: "onmessageerror",
    content: "Message error information, including error type and content. See `MessageError` for details."
  }, {
    heading: "onmessagereceiptupdated",
    content: "Message receipt update callback."
  }, {
    heading: "onmessagereceiptupdated",
    content: "Parameter"
  }, {
    heading: "onmessagereceiptupdated",
    content: "Type"
  }, {
    heading: "onmessagereceiptupdated",
    content: "Description"
  }, {
    heading: "onmessagereceiptupdated",
    content: "`agentUserId`"
  }, {
    heading: "onmessagereceiptupdated",
    content: "`String`"
  }, {
    heading: "onmessagereceiptupdated",
    content: "Agent user ID."
  }, {
    heading: "onmessagereceiptupdated",
    content: "`receipt`"
  }, {
    heading: "onmessagereceiptupdated",
    content: "`MessageReceipt`"
  }, {
    heading: "onmessagereceiptupdated",
    content: "Message receipt information. See `MessageReceipt` for details."
  }, {
    heading: "onusermanualsosevent",
    content: "Manual SoS result callback."
  }, {
    heading: "onusermanualsosevent",
    content: "Receives the server's processing result for a manual SoS request. Both success and failure results are returned through this callback — check `event.payload.success` to determine the outcome."
  }, {
    heading: "onusermanualsosevent",
    content: "This callback has a default empty implementation, so existing integrations do not need to implement it."
  }, {
    heading: "onusermanualsosevent",
    content: "Parameter"
  }, {
    heading: "onusermanualsosevent",
    content: "Type"
  }, {
    heading: "onusermanualsosevent",
    content: "Description"
  }, {
    heading: "onusermanualsosevent",
    content: "`agentUserId`"
  }, {
    heading: "onusermanualsosevent",
    content: "`String`"
  }, {
    heading: "onusermanualsosevent",
    content: "Agent user ID."
  }, {
    heading: "onusermanualsosevent",
    content: "`event`"
  }, {
    heading: "onusermanualsosevent",
    content: "`UserManualSosEvent`"
  }, {
    heading: "onusermanualsosevent",
    content: "Manual SoS event object. See `UserManualSosEvent`."
  }, {
    heading: "onusermanualeosevent",
    content: "Manual EoS result callback."
  }, {
    heading: "onusermanualeosevent",
    content: "Receives the server's processing result for a manual EoS request. Both success and failure results are returned through this callback — check `event.payload.success` to determine the outcome."
  }, {
    heading: "onusermanualeosevent",
    content: "This callback has a default empty implementation, so existing integrations do not need to implement it."
  }, {
    heading: "onusermanualeosevent",
    content: "Parameter"
  }, {
    heading: "onusermanualeosevent",
    content: "Type"
  }, {
    heading: "onusermanualeosevent",
    content: "Description"
  }, {
    heading: "onusermanualeosevent",
    content: "`agentUserId`"
  }, {
    heading: "onusermanualeosevent",
    content: "`String`"
  }, {
    heading: "onusermanualeosevent",
    content: "Agent user ID."
  }, {
    heading: "onusermanualeosevent",
    content: "`event`"
  }, {
    heading: "onusermanualeosevent",
    content: "`UserManualEosEvent`"
  }, {
    heading: "onusermanualeosevent",
    content: "Manual EoS event object. See `UserManualEosEvent`."
  }, {
    heading: "onagentmanualeosevent",
    content: "Server-triggered automatic EoS notification callback."
  }, {
    heading: "onagentmanualeosevent",
    content: "Triggered when a user's single speaking turn exceeds the server-side duration threshold. In this case, the server ends the current user's turn on its own and notifies the client through this callback. This event is not a result of calling `manualEOS()`."
  }, {
    heading: "onagentmanualeosevent",
    content: "This callback has a default empty implementation, so existing integrations do not need to implement it."
  }, {
    heading: "onagentmanualeosevent",
    content: "Parameter"
  }, {
    heading: "onagentmanualeosevent",
    content: "Type"
  }, {
    heading: "onagentmanualeosevent",
    content: "Description"
  }, {
    heading: "onagentmanualeosevent",
    content: "`agentUserId`"
  }, {
    heading: "onagentmanualeosevent",
    content: "`String`"
  }, {
    heading: "onagentmanualeosevent",
    content: "Agent user ID."
  }, {
    heading: "onagentmanualeosevent",
    content: "`event`"
  }, {
    heading: "onagentmanualeosevent",
    content: "`AgentManualEosEvent`"
  }, {
    heading: "onagentmanualeosevent",
    content: "Server-triggered automatic EoS event object. See `AgentManualEosEvent`."
  }, {
    heading: "onagentstatechanged",
    content: "Triggered when the agent’s state changes."
  }, {
    heading: "onagentstatechanged",
    content: "Parameter"
  }, {
    heading: "onagentstatechanged",
    content: "Type"
  }, {
    heading: "onagentstatechanged",
    content: "Description"
  }, {
    heading: "onagentstatechanged",
    content: "`agentUserId`"
  }, {
    heading: "onagentstatechanged",
    content: "`String`"
  }, {
    heading: "onagentstatechanged",
    content: "Agent user ID."
  }, {
    heading: "onagentstatechanged",
    content: "`event`"
  }, {
    heading: "onagentstatechanged",
    content: "`StateChangeEvent`"
  }, {
    heading: "onagentstatechanged",
    content: "State change event. See `StateChangeEvent`."
  }, {
    heading: "onagentlisteningchanged",
    content: "Triggered when the agent's listening state changes."
  }, {
    heading: "onagentlisteningchanged",
    content: "This callback is a fine-grained complement to `onAgentStateChanged`, used to monitor whether the agent is actively listening to user input."
  }, {
    heading: "onagentlisteningchanged",
    content: "Parameter"
  }, {
    heading: "onagentlisteningchanged",
    content: "Type"
  }, {
    heading: "onagentlisteningchanged",
    content: "Description"
  }, {
    heading: "onagentlisteningchanged",
    content: "`agentUserId`"
  }, {
    heading: "onagentlisteningchanged",
    content: "`String`"
  }, {
    heading: "onagentlisteningchanged",
    content: "Agent user ID."
  }, {
    heading: "onagentlisteningchanged",
    content: "`isListening`"
  }, {
    heading: "onagentlisteningchanged",
    content: "`Boolean`"
  }, {
    heading: "onagentlisteningchanged",
    content: "Whether the agent is currently in a listening state."
  }, {
    heading: "onagentthinkingchanged",
    content: "Triggered when the agent's thinking state changes."
  }, {
    heading: "onagentthinkingchanged",
    content: "This callback is a fine-grained complement to `onAgentStateChanged`, used to monitor whether the agent is actively processing a request."
  }, {
    heading: "onagentthinkingchanged",
    content: "Parameter"
  }, {
    heading: "onagentthinkingchanged",
    content: "Type"
  }, {
    heading: "onagentthinkingchanged",
    content: "Description"
  }, {
    heading: "onagentthinkingchanged",
    content: "`agentUserId`"
  }, {
    heading: "onagentthinkingchanged",
    content: "`String`"
  }, {
    heading: "onagentthinkingchanged",
    content: "Agent user ID."
  }, {
    heading: "onagentthinkingchanged",
    content: "`isThinking`"
  }, {
    heading: "onagentthinkingchanged",
    content: "`Boolean`"
  }, {
    heading: "onagentthinkingchanged",
    content: "Whether the agent is currently in a thinking state."
  }, {
    heading: "onagentspeakingchanged",
    content: "Triggered when the agent's speaking state changes."
  }, {
    heading: "onagentspeakingchanged",
    content: "This callback is a fine-grained complement to `onAgentStateChanged`, used to monitor whether the agent is actively playing back speech."
  }, {
    heading: "onagentspeakingchanged",
    content: "Parameter"
  }, {
    heading: "onagentspeakingchanged",
    content: "Type"
  }, {
    heading: "onagentspeakingchanged",
    content: "Description"
  }, {
    heading: "onagentspeakingchanged",
    content: "`agentUserId`"
  }, {
    heading: "onagentspeakingchanged",
    content: "`String`"
  }, {
    heading: "onagentspeakingchanged",
    content: "Agent user ID."
  }, {
    heading: "onagentspeakingchanged",
    content: "`isSpeaking`"
  }, {
    heading: "onagentspeakingchanged",
    content: "`Boolean`"
  }, {
    heading: "onagentspeakingchanged",
    content: "Whether the agent is currently in a speaking state."
  }, {
    heading: "onagentinterrupted",
    content: "Triggered when an interrupt event occurs."
  }, {
    heading: "onagentinterrupted",
    content: "Parameter"
  }, {
    heading: "onagentinterrupted",
    content: "Type"
  }, {
    heading: "onagentinterrupted",
    content: "Description"
  }, {
    heading: "onagentinterrupted",
    content: "`agentUserId`"
  }, {
    heading: "onagentinterrupted",
    content: "`String`"
  }, {
    heading: "onagentinterrupted",
    content: "Agent user ID."
  }, {
    heading: "onagentinterrupted",
    content: "`event`"
  }, {
    heading: "onagentinterrupted",
    content: "`InterruptEvent`"
  }, {
    heading: "onagentinterrupted",
    content: "Interrupt event. See `InterruptEvent`."
  }, {
    heading: "onagentmetrics",
    content: "Triggered when performance metrics become available."
  }, {
    heading: "onagentmetrics",
    content: "Parameter"
  }, {
    heading: "onagentmetrics",
    content: "Type"
  }, {
    heading: "onagentmetrics",
    content: "Description"
  }, {
    heading: "onagentmetrics",
    content: "`agentUserId`"
  }, {
    heading: "onagentmetrics",
    content: "`String`"
  }, {
    heading: "onagentmetrics",
    content: "Agent user ID."
  }, {
    heading: "onagentmetrics",
    content: "`metric`"
  }, {
    heading: "onagentmetrics",
    content: "`Metric`"
  }, {
    heading: "onagentmetrics",
    content: "Performance metric. See `Metric`."
  }, {
    heading: "onagenterror",
    content: "Triggered when an agent error occurs."
  }, {
    heading: "onagenterror",
    content: "Parameter"
  }, {
    heading: "onagenterror",
    content: "Type"
  }, {
    heading: "onagenterror",
    content: "Description"
  }, {
    heading: "onagenterror",
    content: "`agentUserId`"
  }, {
    heading: "onagenterror",
    content: "`String`"
  }, {
    heading: "onagenterror",
    content: "Agent user ID."
  }, {
    heading: "onagenterror",
    content: "`error`"
  }, {
    heading: "onagenterror",
    content: "`ModuleError`"
  }, {
    heading: "onagenterror",
    content: "Error details. See `ModuleError`."
  }, {
    heading: "ontranscriptupdated",
    content: "Triggered when the transcription content is updated."
  }, {
    heading: "ontranscriptupdated",
    content: "This callback may trigger frequently. If deduplication is needed, handle it in your business logic."
  }, {
    heading: "ontranscriptupdated",
    content: "Parameter"
  }, {
    heading: "ontranscriptupdated",
    content: "Type"
  }, {
    heading: "ontranscriptupdated",
    content: "Description"
  }, {
    heading: "ontranscriptupdated",
    content: "`agentUserId`"
  }, {
    heading: "ontranscriptupdated",
    content: "`String`"
  }, {
    heading: "ontranscriptupdated",
    content: "Agent user ID."
  }, {
    heading: "ontranscriptupdated",
    content: "`transcript`"
  }, {
    heading: "ontranscriptupdated",
    content: "`Transcript`"
  }, {
    heading: "ontranscriptupdated",
    content: "Transcript data. See `Transcript`."
  }, {
    heading: "ondebuglog",
    content: "Triggered for internal debug logs."
  }, {
    heading: "ondebuglog",
    content: "Parameter"
  }, {
    heading: "ondebuglog",
    content: "Type"
  }, {
    heading: "ondebuglog",
    content: "Description"
  }, {
    heading: "ondebuglog",
    content: "`log`"
  }, {
    heading: "ondebuglog",
    content: "`String`"
  }, {
    heading: "ondebuglog",
    content: "Debug log information."
  }, {
    heading: "statechangeevent",
    content: "Represents an agent state change event.\\\nTracks session flow and updates status indications in the UI, including the event timestamp."
  }, {
    heading: "statechangeevent",
    content: "Parameter"
  }, {
    heading: "statechangeevent",
    content: "Type"
  }, {
    heading: "statechangeevent",
    content: "Description"
  }, {
    heading: "statechangeevent",
    content: "`state`"
  }, {
    heading: "statechangeevent",
    content: "`AgentState`"
  }, {
    heading: "statechangeevent",
    content: "Current agent status: `silent`, `listening`, `thinking`, `speaking`. See `AgentState`."
  }, {
    heading: "statechangeevent",
    content: "`turnId`"
  }, {
    heading: "statechangeevent",
    content: "`Long`"
  }, {
    heading: "statechangeevent",
    content: "Conversation turn ID."
  }, {
    heading: "statechangeevent",
    content: "`timestamp`"
  }, {
    heading: "statechangeevent",
    content: "`Long`"
  }, {
    heading: "statechangeevent",
    content: "Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC)."
  }, {
    heading: "interruptevent",
    content: "Indicates an interrupt event.\\\nTriggered when the user or system interrupts the agent or when the system detects a high-priority message. Used for logging and handling."
  }, {
    heading: "interruptevent",
    content: "Parameter"
  }, {
    heading: "interruptevent",
    content: "Type"
  }, {
    heading: "interruptevent",
    content: "Description"
  }, {
    heading: "interruptevent",
    content: "`turnId`"
  }, {
    heading: "interruptevent",
    content: "`Long`"
  }, {
    heading: "interruptevent",
    content: "ID of the interrupted conversation turn."
  }, {
    heading: "interruptevent",
    content: "`timestamp`"
  }, {
    heading: "interruptevent",
    content: "`Long`"
  }, {
    heading: "interruptevent",
    content: "Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC)."
  }, {
    heading: "metric",
    content: "Used to record and transmit system performance data. This data can be used for performance monitoring, system optimization, and user experience improvement."
  }, {
    heading: "metric",
    content: "Parameter"
  }, {
    heading: "metric",
    content: "Type"
  }, {
    heading: "metric",
    content: "Description"
  }, {
    heading: "metric",
    content: "`type`"
  }, {
    heading: "metric",
    content: "`ModuleType`"
  }, {
    heading: "metric",
    content: "Type of indicator. See `ModuleType`."
  }, {
    heading: "metric",
    content: "`name`"
  }, {
    heading: "metric",
    content: "`String`"
  }, {
    heading: "metric",
    content: "Descriptive name of the metric."
  }, {
    heading: "metric",
    content: "`value`"
  }, {
    heading: "metric",
    content: "`Double`"
  }, {
    heading: "metric",
    content: "Metric value (e.g., latency in ms)."
  }, {
    heading: "metric",
    content: "`timestamp`"
  }, {
    heading: "metric",
    content: "`Long`"
  }, {
    heading: "metric",
    content: "Timestamp when metric was recorded in milliseconds since Unix epoch (January 1, 1970 UTC)."
  }, {
    heading: "moduleerror",
    content: "Processes and reports agent-related error information."
  }, {
    heading: "moduleerror",
    content: "Parameter"
  }, {
    heading: "moduleerror",
    content: "Type"
  }, {
    heading: "moduleerror",
    content: "Description"
  }, {
    heading: "moduleerror",
    content: "`type`"
  }, {
    heading: "moduleerror",
    content: "`ModuleType`"
  }, {
    heading: "moduleerror",
    content: "Error type (e.g., LLM failure, TTS exception). See `ModuleType`."
  }, {
    heading: "moduleerror",
    content: "`code`"
  }, {
    heading: "moduleerror",
    content: "`Int`"
  }, {
    heading: "moduleerror",
    content: "Specific error code."
  }, {
    heading: "moduleerror",
    content: "`message`"
  }, {
    heading: "moduleerror",
    content: "`String`"
  }, {
    heading: "moduleerror",
    content: "Description of the error."
  }, {
    heading: "moduleerror",
    content: "`timestamp`"
  }, {
    heading: "moduleerror",
    content: "`Long`"
  }, {
    heading: "moduleerror",
    content: "Timestamp of the error in milliseconds since Unix epoch (January 1, 1970 UTC)."
  }, {
    heading: "moduleerror",
    content: "`turnId`"
  }, {
    heading: "moduleerror",
    content: "`Long?`"
  }, {
    heading: "moduleerror",
    content: "(Optional) `turnId` corresponding to the image upload error."
  }, {
    heading: "chatmessage",
    content: "Sealed base class for all message types sent to agents."
  }, {
    heading: "chatmessage",
    content: "This sealed class hierarchy provides a type-safe way to handle messages of different content types."
  }, {
    heading: "imagemessage",
    content: "Used to send image content to the agent."
  }, {
    heading: "imagemessage",
    content: "Supports specifying image files via HTTP/HTTPS links."
  }, {
    heading: "imagemessage",
    content: "Parameter"
  }, {
    heading: "imagemessage",
    content: "Type"
  }, {
    heading: "imagemessage",
    content: "Description"
  }, {
    heading: "imagemessage",
    content: "`uuid`"
  }, {
    heading: "imagemessage",
    content: "String"
  }, {
    heading: "imagemessage",
    content: "Unique identifier for the image message."
  }, {
    heading: "imagemessage",
    content: "`imageUrl`"
  }, {
    heading: "imagemessage",
    content: "String?"
  }, {
    heading: "imagemessage",
    content: "HTTP/HTTPS image file link."
  }, {
    heading: "messagereceipt",
    content: "`MessageReceipt` represents message receipt information and supports processing multiple media types through `MediaInfo`."
  }, {
    heading: "messagereceipt",
    content: "Parameter"
  }, {
    heading: "messagereceipt",
    content: "Type"
  }, {
    heading: "messagereceipt",
    content: "Description"
  }, {
    heading: "messagereceipt",
    content: "`type`"
  }, {
    heading: "messagereceipt",
    content: "ModuleType"
  }, {
    heading: "messagereceipt",
    content: "Module type. See ModuleType, for example: llm, mllm, tts, context."
  }, {
    heading: "messagereceipt",
    content: "`chatMessageType`"
  }, {
    heading: "messagereceipt",
    content: "ChatMessageType"
  }, {
    heading: "messagereceipt",
    content: "Message error type. See ChatMessageType."
  }, {
    heading: "messagereceipt",
    content: "`turnId`"
  }, {
    heading: "messagereceipt",
    content: "Long"
  }, {
    heading: "messagereceipt",
    content: "Turn ID of the message."
  }, {
    heading: "messagereceipt",
    content: "`message`"
  }, {
    heading: "messagereceipt",
    content: "String"
  }, {
    heading: "messagereceipt",
    content: "Message content. Must be parsed according to the `type` field. For `context`, this is usually a JSON string containing resource information."
  }, {
    heading: "chatmessagetype",
    content: "Used to distinguish different types of messages in the session system."
  }, {
    heading: "chatmessagetype",
    content: "Parameter"
  }, {
    heading: "chatmessagetype",
    content: "Type"
  }, {
    heading: "chatmessagetype",
    content: "Description"
  }, {
    heading: "chatmessagetype",
    content: "`value`"
  }, {
    heading: "chatmessagetype",
    content: "`String`"
  }, {
    heading: "chatmessagetype",
    content: "The string value to match against."
  }, {
    heading: "messageerror",
    content: "Used to process and report message error information."
  }, {
    heading: "messageerror",
    content: "Parameter"
  }, {
    heading: "messageerror",
    content: "Type"
  }, {
    heading: "messageerror",
    content: "Description"
  }, {
    heading: "messageerror",
    content: "`chatMessageType`"
  }, {
    heading: "messageerror",
    content: "`ChatMessageType`"
  }, {
    heading: "messageerror",
    content: "Message error type. See `ChatMessageType` for details."
  }, {
    heading: "messageerror",
    content: "`code`"
  }, {
    heading: "messageerror",
    content: "`Int`"
  }, {
    heading: "messageerror",
    content: "Error code used to identify specific error scenarios."
  }, {
    heading: "messageerror",
    content: "`message`"
  }, {
    heading: "messageerror",
    content: "`String`"
  }, {
    heading: "messageerror",
    content: "Error description providing detailed explanation, usually a JSON string containing resource information."
  }, {
    heading: "messageerror",
    content: "`timestamp`"
  }, {
    heading: "messageerror",
    content: "`Long`"
  }, {
    heading: "messageerror",
    content: "Timestamp of when the event occurred (milliseconds since January 1, 1970 UTC)."
  }, {
    heading: "usermanualeventpayload",
    content: "Common payload for manual SoS/EoS events."
  }, {
    heading: "usermanualeventpayload",
    content: "Parameter"
  }, {
    heading: "usermanualeventpayload",
    content: "Type"
  }, {
    heading: "usermanualeventpayload",
    content: "Description"
  }, {
    heading: "usermanualeventpayload",
    content: "`success`"
  }, {
    heading: "usermanualeventpayload",
    content: "`Boolean`"
  }, {
    heading: "usermanualeventpayload",
    content: "Whether the server successfully processed this manual signal."
  }, {
    heading: "usermanualeventpayload",
    content: "`requestId`"
  }, {
    heading: "usermanualeventpayload",
    content: "`String`"
  }, {
    heading: "usermanualeventpayload",
    content: "Request ID, corresponding to the `requestId` returned in `completion` after calling `manualSOS` or `manualEOS`."
  }, {
    heading: "usermanualeventpayload",
    content: "`turnId`"
  }, {
    heading: "usermanualeventpayload",
    content: "`Long?`"
  }, {
    heading: "usermanualeventpayload",
    content: "The associated conversation turn ID. `null` if the server's failure callback does not include a `turn_id`."
  }, {
    heading: "usermanualeventpayload",
    content: "`errorMessage`"
  }, {
    heading: "usermanualeventpayload",
    content: "`String?`"
  }, {
    heading: "usermanualeventpayload",
    content: "The raw error message returned by the server. Usually `null` on success."
  }, {
    heading: "usermanualsosevent",
    content: "Represents a manual SoS event."
  }, {
    heading: "usermanualsosevent",
    content: "Parameter"
  }, {
    heading: "usermanualsosevent",
    content: "Type"
  }, {
    heading: "usermanualsosevent",
    content: "Description"
  }, {
    heading: "usermanualsosevent",
    content: "`eventId`"
  }, {
    heading: "usermanualsosevent",
    content: "`String`"
  }, {
    heading: "usermanualsosevent",
    content: "Unique event ID."
  }, {
    heading: "usermanualsosevent",
    content: "`timestamp`"
  }, {
    heading: "usermanualsosevent",
    content: "`Long`"
  }, {
    heading: "usermanualsosevent",
    content: "Event timestamp in milliseconds."
  }, {
    heading: "usermanualsosevent",
    content: "`payload`"
  }, {
    heading: "usermanualsosevent",
    content: "`UserManualEventPayload`"
  }, {
    heading: "usermanualsosevent",
    content: "Event payload. See `UserManualEventPayload`."
  }, {
    heading: "usermanualeosevent",
    content: "Represents a manual EoS event."
  }, {
    heading: "usermanualeosevent",
    content: "Parameter"
  }, {
    heading: "usermanualeosevent",
    content: "Type"
  }, {
    heading: "usermanualeosevent",
    content: "Description"
  }, {
    heading: "usermanualeosevent",
    content: "`eventId`"
  }, {
    heading: "usermanualeosevent",
    content: "`String`"
  }, {
    heading: "usermanualeosevent",
    content: "Unique event ID."
  }, {
    heading: "usermanualeosevent",
    content: "`timestamp`"
  }, {
    heading: "usermanualeosevent",
    content: "`Long`"
  }, {
    heading: "usermanualeosevent",
    content: "Event timestamp in milliseconds."
  }, {
    heading: "usermanualeosevent",
    content: "`payload`"
  }, {
    heading: "usermanualeosevent",
    content: "`UserManualEventPayload`"
  }, {
    heading: "usermanualeosevent",
    content: "Event payload. See `UserManualEventPayload`."
  }, {
    heading: "agentmanualeospayload",
    content: "Payload for a server-triggered automatic EoS event."
  }, {
    heading: "agentmanualeospayload",
    content: "Parameter"
  }, {
    heading: "agentmanualeospayload",
    content: "Type"
  }, {
    heading: "agentmanualeospayload",
    content: "Description"
  }, {
    heading: "agentmanualeospayload",
    content: "`reason`"
  }, {
    heading: "agentmanualeospayload",
    content: "`String`"
  }, {
    heading: "agentmanualeospayload",
    content: "The reason the server automatically ended the current user's turn."
  }, {
    heading: "agentmanualeospayload",
    content: "`maxDurationMs`"
  }, {
    heading: "agentmanualeospayload",
    content: "`Long`"
  }, {
    heading: "agentmanualeospayload",
    content: "The configured maximum duration, in milliseconds, for a single speaking turn."
  }, {
    heading: "agentmanualeospayload",
    content: "`turnId`"
  }, {
    heading: "agentmanualeospayload",
    content: "`Long`"
  }, {
    heading: "agentmanualeospayload",
    content: "The associated conversation turn ID."
  }, {
    heading: "agentmanualeosevent",
    content: "Represents a server-triggered automatic EoS event."
  }, {
    heading: "agentmanualeosevent",
    content: "Parameter"
  }, {
    heading: "agentmanualeosevent",
    content: "Type"
  }, {
    heading: "agentmanualeosevent",
    content: "Description"
  }, {
    heading: "agentmanualeosevent",
    content: "`eventId`"
  }, {
    heading: "agentmanualeosevent",
    content: "`String`"
  }, {
    heading: "agentmanualeosevent",
    content: "Unique event ID."
  }, {
    heading: "agentmanualeosevent",
    content: "`timestamp`"
  }, {
    heading: "agentmanualeosevent",
    content: "`Long`"
  }, {
    heading: "agentmanualeosevent",
    content: "Event timestamp in milliseconds."
  }, {
    heading: "agentmanualeosevent",
    content: "`payload`"
  }, {
    heading: "agentmanualeosevent",
    content: "`AgentManualEosPayload`"
  }, {
    heading: "agentmanualeosevent",
    content: "Event payload. See `AgentManualEosPayload`."
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
    content: "`String`"
  }, {
    heading: "speakmessage",
    content: "The text to speak."
  }, {
    heading: "speakmessage",
    content: "`priority`"
  }, {
    heading: "speakmessage",
    content: "`Priority`"
  }, {
    heading: "speakmessage",
    content: "The priority for handling this speak request. Defaults to `INTERRUPT`. See `Priority`."
  }, {
    heading: "speakmessage",
    content: "`interruptable`"
  }, {
    heading: "speakmessage",
    content: "`Boolean`"
  }, {
    heading: "speakmessage",
    content: "Whether the user can interrupt this speech by talking. Defaults to `true`."
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
    content: "`String`"
  }, {
    heading: "thinkmessage",
    content: "The instruction text to inject for the LLM."
  }, {
    heading: "thinkmessage",
    content: "`onListeningAction`"
  }, {
    heading: "thinkmessage",
    content: "`ThinkListeningAction`"
  }, {
    heading: "thinkmessage",
    content: "The action to take when the agent is in a listening state. Defaults to `INTERRUPT`. See `ThinkListeningAction`."
  }, {
    heading: "thinkmessage",
    content: "`onThinkingAction`"
  }, {
    heading: "thinkmessage",
    content: "`ThinkThinkingAction`"
  }, {
    heading: "thinkmessage",
    content: "The action to take when the agent is in a thinking state. Defaults to `IGNORE`. See `ThinkThinkingAction`."
  }, {
    heading: "thinkmessage",
    content: "`onSpeakingAction`"
  }, {
    heading: "thinkmessage",
    content: "`ThinkSpeakingAction`"
  }, {
    heading: "thinkmessage",
    content: "The action to take when the agent is in a speaking state. Defaults to `IGNORE`. See `ThinkSpeakingAction`."
  }, {
    heading: "thinkmessage",
    content: "`interruptable`"
  }, {
    heading: "thinkmessage",
    content: "`Boolean`"
  }, {
    heading: "thinkmessage",
    content: "Whether the user can interrupt the response generated by this instruction by talking. Defaults to `true`."
  }, {
    heading: "thinkmessage",
    content: "`metadata`"
  }, {
    heading: "thinkmessage",
    content: "`Map<String, String>?`"
  }, {
    heading: "thinkmessage",
    content: "Optional custom key-value pairs. When `null`, no metadata is written to the RTM message."
  }, {
    heading: "transcript",
    content: "Represents a full transcribed message used to render the UI."
  }, {
    heading: "transcript",
    content: "Parameter"
  }, {
    heading: "transcript",
    content: "Type"
  }, {
    heading: "transcript",
    content: "Description"
  }, {
    heading: "transcript",
    content: "`turnId`"
  }, {
    heading: "transcript",
    content: "`Long`"
  }, {
    heading: "transcript",
    content: "Session turn identifier."
  }, {
    heading: "transcript",
    content: "`userId`"
  }, {
    heading: "transcript",
    content: "`String`"
  }, {
    heading: "transcript",
    content: "User ID linked to the transcript."
  }, {
    heading: "transcript",
    content: "`text`"
  }, {
    heading: "transcript",
    content: "`String`"
  }, {
    heading: "transcript",
    content: "Transcribed message content."
  }, {
    heading: "transcript",
    content: "`status`"
  }, {
    heading: "transcript",
    content: "`TranscriptStatus`"
  }, {
    heading: "transcript",
    content: "Current status of transcription. See `TranscriptStatus`."
  }, {
    heading: "transcript",
    content: "`type`"
  }, {
    heading: "transcript",
    content: "`TranscriptType`"
  }, {
    heading: "transcript",
    content: "Transcript type (e.g., `AGENT`, `USER`). See `TranscriptType`."
  }, {
    heading: "conversationalaiapiconfig",
    content: "Holds configuration parameters for initializing the Conversational AI API."
  }, {
    heading: "conversationalaiapiconfig",
    content: "Parameter"
  }, {
    heading: "conversationalaiapiconfig",
    content: "Type"
  }, {
    heading: "conversationalaiapiconfig",
    content: "Description"
  }, {
    heading: "conversationalaiapiconfig",
    content: "`rtcEngine`"
  }, {
    heading: "conversationalaiapiconfig",
    content: "`RtcEngine`"
  }, {
    heading: "conversationalaiapiconfig",
    content: "Audio/video engine instance. See `RtcEngine`."
  }, {
    heading: "conversationalaiapiconfig",
    content: "`rtmClient`"
  }, {
    heading: "conversationalaiapiconfig",
    content: "`RtmClient`"
  }, {
    heading: "conversationalaiapiconfig",
    content: "Real-time messaging client. See the Signaling Android API reference."
  }, {
    heading: "conversationalaiapiconfig",
    content: "`renderMode`"
  }, {
    heading: "conversationalaiapiconfig",
    content: "`TranscriptRenderMode`"
  }, {
    heading: "conversationalaiapiconfig",
    content: "Transcript rendering style. Default: word-by-word. See `TranscriptRenderMode`."
  }, {
    heading: "conversationalaiapiconfig",
    content: "`enableLog`"
  }, {
    heading: "conversationalaiapiconfig",
    content: "`Boolean`"
  }, {
    heading: "conversationalaiapiconfig",
    content: "Enables logging if `true`. When `true`, logs are written to the RTC SDK log file. Default is `true`."
  }, {
    heading: "conversationalaiapiconfig",
    content: "`enableRenderModeFallback`"
  }, {
    heading: "conversationalaiapiconfig",
    content: "`Boolean`"
  }, {
    heading: "conversationalaiapiconfig",
    content: "Whether to automatically fall back to text rendering when `renderMode` is set to word-level but the server doesn't provide word-level timing data. If `true` (default), the component falls back to text mode automatically. If `false`, the component stays in word mode regardless — this can result in no transcript being displayed if the server doesn't support word-level transcription."
  }, {
    heading: "conversationalaiapierror",
    content: "Represents an error type in the Conversational AI API."
  }, {
    heading: "conversationalaiapierror",
    content: "Property"
  }, {
    heading: "conversationalaiapierror",
    content: "Type"
  }, {
    heading: "conversationalaiapierror",
    content: "Description"
  }, {
    heading: "conversationalaiapierror",
    content: "`errorCode`"
  }, {
    heading: "conversationalaiapierror",
    content: "`Int`"
  }, {
    heading: "conversationalaiapierror",
    content: "`RtmError`/`RtcError`: specific code; `UnknownError`: returns `-100`."
  }, {
    heading: "conversationalaiapierror",
    content: "`errorMessage`"
  }, {
    heading: "conversationalaiapierror",
    content: "`String`"
  }, {
    heading: "conversationalaiapierror",
    content: "Human-readable description of the error."
  }, {
    heading: "priority",
    content: "Controls the priority with which the agent handles incoming messages during an interaction."
  }, {
    heading: "priority",
    content: "Value"
  }, {
    heading: "priority",
    content: "Description"
  }, {
    heading: "priority",
    content: "`INTERRUPT`"
  }, {
    heading: "priority",
    content: "High priority: Immediately interrupt the current interaction and process the message. Suitable for urgent or time-sensitive content."
  }, {
    heading: "priority",
    content: "`APPEND`"
  }, {
    heading: "priority",
    content: "Medium priority: The message is queued for processing after the current interaction is completed and is suitable for subsequent questions."
  }, {
    heading: "priority",
    content: "`IGNORE`"
  }, {
    heading: "priority",
    content: "Low priority: This message is only processed when the agent is idle, and will be discarded during ongoing interactions. Suitable for optional content."
  }, {
    heading: "thinklisteningaction",
    content: "The action to take when the agent is in a listening state when a Think instruction arrives."
  }, {
    heading: "thinklisteningaction",
    content: "Value"
  }, {
    heading: "thinklisteningaction",
    content: "Description"
  }, {
    heading: "thinklisteningaction",
    content: "`INJECT`"
  }, {
    heading: "thinklisteningaction",
    content: "Injects the instruction into the current turn without interrupting it."
  }, {
    heading: "thinklisteningaction",
    content: "`INTERRUPT`"
  }, {
    heading: "thinklisteningaction",
    content: "Interrupts the current interaction and processes the instruction."
  }, {
    heading: "thinklisteningaction",
    content: "`APPEND`"
  }, {
    heading: "thinklisteningaction",
    content: "Appends the instruction for processing after the current interaction completes."
  }, {
    heading: "thinklisteningaction",
    content: "`IGNORE`"
  }, {
    heading: "thinklisteningaction",
    content: "Ignores the instruction."
  }, {
    heading: "thinkthinkingaction",
    content: "The action to take when the agent is in a thinking state when a Think instruction arrives."
  }, {
    heading: "thinkthinkingaction",
    content: "Value"
  }, {
    heading: "thinkthinkingaction",
    content: "Description"
  }, {
    heading: "thinkthinkingaction",
    content: "`INTERRUPT`"
  }, {
    heading: "thinkthinkingaction",
    content: "Interrupts the current interaction and processes the instruction."
  }, {
    heading: "thinkthinkingaction",
    content: "`APPEND`"
  }, {
    heading: "thinkthinkingaction",
    content: "Appends the instruction for processing after the current interaction completes."
  }, {
    heading: "thinkthinkingaction",
    content: "`IGNORE`"
  }, {
    heading: "thinkthinkingaction",
    content: "Ignores the instruction."
  }, {
    heading: "thinkspeakingaction",
    content: "The action to take when the agent is in a speaking state when a Think instruction arrives."
  }, {
    heading: "thinkspeakingaction",
    content: "Value"
  }, {
    heading: "thinkspeakingaction",
    content: "Description"
  }, {
    heading: "thinkspeakingaction",
    content: "`INTERRUPT`"
  }, {
    heading: "thinkspeakingaction",
    content: "Interrupts the current interaction and processes the instruction."
  }, {
    heading: "thinkspeakingaction",
    content: "`APPEND`"
  }, {
    heading: "thinkspeakingaction",
    content: "Appends the instruction for processing after the current interaction completes."
  }, {
    heading: "thinkspeakingaction",
    content: "`IGNORE`"
  }, {
    heading: "thinkspeakingaction",
    content: "Ignores the instruction."
  }, {
    heading: "agentstate",
    content: "Represents the current state of the agent."
  }, {
    heading: "agentstate",
    content: "Value"
  }, {
    heading: "agentstate",
    content: "Description"
  }, {
    heading: "agentstate",
    content: "`SILENT`"
  }, {
    heading: "agentstate",
    content: "Agent is silent."
  }, {
    heading: "agentstate",
    content: "`LISTENING`"
  }, {
    heading: "agentstate",
    content: "Agent is listening."
  }, {
    heading: "agentstate",
    content: "`THINKING`"
  }, {
    heading: "agentstate",
    content: "Agent is processing or thinking."
  }, {
    heading: "agentstate",
    content: "`SPEAKING`"
  }, {
    heading: "agentstate",
    content: "Agent is speaking."
  }, {
    heading: "agentstate",
    content: "`UNKNOWN`"
  }, {
    heading: "agentstate",
    content: "Unknown state."
  }, {
    heading: "moduletype",
    content: "Performance module type enumeration."
  }, {
    heading: "moduletype",
    content: "Value"
  }, {
    heading: "moduletype",
    content: "Description"
  }, {
    heading: "moduletype",
    content: "`LLM`"
  }, {
    heading: "moduletype",
    content: "LLM inference latency measurement."
  }, {
    heading: "moduletype",
    content: "`MLLM`"
  }, {
    heading: "moduletype",
    content: "MLLM inference latency measurement."
  }, {
    heading: "moduletype",
    content: "`TTS`"
  }, {
    heading: "moduletype",
    content: "Text-to-speech synthesis latency measurement."
  }, {
    heading: "moduletype",
    content: "`UNKNOWN`"
  }, {
    heading: "moduletype",
    content: "Unknown type."
  }, {
    heading: "messagetype",
    content: "Used to distinguish different types of messages in the system."
  }, {
    heading: "messagetype",
    content: "Value"
  }, {
    heading: "messagetype",
    content: "Description"
  }, {
    heading: "messagetype",
    content: "`ASSISTANT`"
  }, {
    heading: "messagetype",
    content: "AI assistant transcript message."
  }, {
    heading: "messagetype",
    content: "`USER`"
  }, {
    heading: "messagetype",
    content: "User transcript message."
  }, {
    heading: "messagetype",
    content: "`ERROR`"
  }, {
    heading: "messagetype",
    content: "Error message."
  }, {
    heading: "messagetype",
    content: "`METRICS`"
  }, {
    heading: "messagetype",
    content: "Performance metrics message."
  }, {
    heading: "messagetype",
    content: "`INTERRUPT`"
  }, {
    heading: "messagetype",
    content: "Interrupt message."
  }, {
    heading: "messagetype",
    content: "`UNKNOWN`"
  }, {
    heading: "messagetype",
    content: "Unknown message type."
  }, {
    heading: "messagetype",
    content: "`MESSAGE_RECEIPT`"
  }, {
    heading: "messagetype",
    content: "Message receipt."
  }, {
    heading: "transcriptrendermode",
    content: "Transcript rendering mode."
  }, {
    heading: "transcriptrendermode",
    content: "Value"
  }, {
    heading: "transcriptrendermode",
    content: "Description"
  }, {
    heading: "transcriptrendermode",
    content: "`Word`"
  }, {
    heading: "transcriptrendermode",
    content: "Word-by-word transcription and rendering."
  }, {
    heading: "transcriptrendermode",
    content: "`Text`"
  }, {
    heading: "transcriptrendermode",
    content: "Full text transcription and rendering."
  }, {
    heading: "transcripttype",
    content: "Transcript source type."
  }, {
    heading: "transcripttype",
    content: "Value"
  }, {
    heading: "transcripttype",
    content: "Description"
  }, {
    heading: "transcripttype",
    content: "`AGENT`"
  }, {
    heading: "transcripttype",
    content: "Agent transcript."
  }, {
    heading: "transcripttype",
    content: "`USER`"
  }, {
    heading: "transcripttype",
    content: "User transcript."
  }, {
    heading: "transcriptstatus",
    content: "Indicates the current status of the transcription."
  }, {
    heading: "transcriptstatus",
    content: "Value"
  }, {
    heading: "transcriptstatus",
    content: "Description"
  }, {
    heading: "transcriptstatus",
    content: "`IN_PROGRESS`"
  }, {
    heading: "transcriptstatus",
    content: "The transcript is still being generated or the speech is still in progress."
  }, {
    heading: "transcriptstatus",
    content: "`END`"
  }, {
    heading: "transcriptstatus",
    content: "The transcription completed normally."
  }, {
    heading: "transcriptstatus",
    content: "`INTERRUPTED`"
  }, {
    heading: "transcriptstatus",
    content: "Transcription was interrupted before completion."
  }, {
    heading: "transcriptstatus",
    content: "`UNKNOWN`"
  }, {
    heading: "transcriptstatus",
    content: "Unknown status."
  }],
  headings: [{
    id: "installation",
    content: "Installation"
  }, {
    id: "iconversationalaiapi-class",
    content: "IConversationalAIAPI class"
  }, {
    id: "chat",
    content: "`chat`"
  }, {
    id: "addhandler",
    content: "`addHandler`"
  }, {
    id: "removehandler",
    content: "`removeHandler`"
  }, {
    id: "subscribemessage",
    content: "`subscribeMessage`"
  }, {
    id: "unsubscribemessage",
    content: "`unsubscribeMessage`"
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
    id: "loadaudiosettings",
    content: "`loadAudioSettings`"
  }, {
    id: "destroy",
    content: "`destroy`"
  }, {
    id: "iconversationalaiapieventhandler-class",
    content: "IConversationalAIAPIEventHandler class"
  }, {
    id: "onmessageerror",
    content: "`onMessageError`"
  }, {
    id: "onmessagereceiptupdated",
    content: "`onMessageReceiptUpdated`"
  }, {
    id: "onusermanualsosevent",
    content: "`onUserManualSosEvent`"
  }, {
    id: "onusermanualeosevent",
    content: "`onUserManualEosEvent`"
  }, {
    id: "onagentmanualeosevent",
    content: "`onAgentManualEosEvent`"
  }, {
    id: "onagentstatechanged",
    content: "`onAgentStateChanged`"
  }, {
    id: "onagentlisteningchanged",
    content: "`onAgentListeningChanged`"
  }, {
    id: "onagentthinkingchanged",
    content: "`onAgentThinkingChanged`"
  }, {
    id: "onagentspeakingchanged",
    content: "`onAgentSpeakingChanged`"
  }, {
    id: "onagentinterrupted",
    content: "`onAgentInterrupted`"
  }, {
    id: "onagentmetrics",
    content: "`onAgentMetrics`"
  }, {
    id: "onagenterror",
    content: "`onAgentError`"
  }, {
    id: "ontranscriptupdated",
    content: "`onTranscriptUpdated`"
  }, {
    id: "ondebuglog",
    content: "`onDebugLog`"
  }, {
    id: "structures",
    content: "Structures"
  }, {
    id: "statechangeevent",
    content: "`StateChangeEvent`"
  }, {
    id: "interruptevent",
    content: "`InterruptEvent`"
  }, {
    id: "metric",
    content: "`Metric`"
  }, {
    id: "moduleerror",
    content: "`ModuleError`"
  }, {
    id: "chatmessage",
    content: "`ChatMessage`"
  }, {
    id: "imagemessage",
    content: "`ImageMessage`"
  }, {
    id: "messagereceipt",
    content: "MessageReceipt"
  }, {
    id: "chatmessagetype",
    content: "ChatMessageType"
  }, {
    id: "messageerror",
    content: "MessageError"
  }, {
    id: "usermanualeventpayload",
    content: "`UserManualEventPayload`"
  }, {
    id: "usermanualsosevent",
    content: "`UserManualSosEvent`"
  }, {
    id: "usermanualeosevent",
    content: "`UserManualEosEvent`"
  }, {
    id: "agentmanualeospayload",
    content: "`AgentManualEosPayload`"
  }, {
    id: "agentmanualeosevent",
    content: "`AgentManualEosEvent`"
  }, {
    id: "speakmessage",
    content: "`SpeakMessage`"
  }, {
    id: "thinkmessage",
    content: "`ThinkMessage`"
  }, {
    id: "transcript",
    content: "`Transcript`"
  }, {
    id: "conversationalaiapiconfig",
    content: "`ConversationalAIAPIConfig`"
  }, {
    id: "conversationalaiapierror",
    content: "`ConversationalAIAPIError`"
  }, {
    id: "enum-classes",
    content: "Enum classes"
  }, {
    id: "priority",
    content: "Priority"
  }, {
    id: "thinklisteningaction",
    content: "ThinkListeningAction"
  }, {
    id: "thinkthinkingaction",
    content: "ThinkThinkingAction"
  }, {
    id: "thinkspeakingaction",
    content: "ThinkSpeakingAction"
  }, {
    id: "agentstate",
    content: "AgentState"
  }, {
    id: "moduletype",
    content: "ModuleType"
  }, {
    id: "messagetype",
    content: "MessageType"
  }, {
    id: "transcriptrendermode",
    content: "TranscriptRenderMode"
  }, {
    id: "transcripttype",
    content: "TranscriptType"
  }, {
    id: "transcriptstatus",
    content: "TranscriptStatus"
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
  url: "#iconversationalaiapi-class",
  title: _jsx(_Fragment, {
    children: "IConversationalAIAPI class"
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
  depth: 3,
  url: "#addhandler",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "addHandler"
    })
  })
}, {
  depth: 3,
  url: "#removehandler",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "removeHandler"
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
  url: "#unsubscribemessage",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "unsubscribeMessage"
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
  url: "#loadaudiosettings",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "loadAudioSettings"
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
  url: "#iconversationalaiapieventhandler-class",
  title: _jsx(_Fragment, {
    children: "IConversationalAIAPIEventHandler class"
  })
}, {
  depth: 3,
  url: "#onmessageerror",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "onMessageError"
    })
  })
}, {
  depth: 3,
  url: "#onmessagereceiptupdated",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "onMessageReceiptUpdated"
    })
  })
}, {
  depth: 3,
  url: "#onusermanualsosevent",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "onUserManualSosEvent"
    })
  })
}, {
  depth: 3,
  url: "#onusermanualeosevent",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "onUserManualEosEvent"
    })
  })
}, {
  depth: 3,
  url: "#onagentmanualeosevent",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "onAgentManualEosEvent"
    })
  })
}, {
  depth: 3,
  url: "#onagentstatechanged",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "onAgentStateChanged"
    })
  })
}, {
  depth: 3,
  url: "#onagentlisteningchanged",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "onAgentListeningChanged"
    })
  })
}, {
  depth: 3,
  url: "#onagentthinkingchanged",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "onAgentThinkingChanged"
    })
  })
}, {
  depth: 3,
  url: "#onagentspeakingchanged",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "onAgentSpeakingChanged"
    })
  })
}, {
  depth: 3,
  url: "#onagentinterrupted",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "onAgentInterrupted"
    })
  })
}, {
  depth: 3,
  url: "#onagentmetrics",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "onAgentMetrics"
    })
  })
}, {
  depth: 3,
  url: "#onagenterror",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "onAgentError"
    })
  })
}, {
  depth: 3,
  url: "#ontranscriptupdated",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "onTranscriptUpdated"
    })
  })
}, {
  depth: 3,
  url: "#ondebuglog",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "onDebugLog"
    })
  })
}, {
  depth: 2,
  url: "#structures",
  title: _jsx(_Fragment, {
    children: "Structures"
  })
}, {
  depth: 3,
  url: "#statechangeevent",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "StateChangeEvent"
    })
  })
}, {
  depth: 3,
  url: "#interruptevent",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "InterruptEvent"
    })
  })
}, {
  depth: 3,
  url: "#metric",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "Metric"
    })
  })
}, {
  depth: 3,
  url: "#moduleerror",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ModuleError"
    })
  })
}, {
  depth: 3,
  url: "#chatmessage",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ChatMessage"
    })
  })
}, {
  depth: 3,
  url: "#imagemessage",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ImageMessage"
    })
  })
}, {
  depth: 3,
  url: "#messagereceipt",
  title: _jsx(_Fragment, {
    children: "MessageReceipt"
  })
}, {
  depth: 3,
  url: "#chatmessagetype",
  title: _jsx(_Fragment, {
    children: "ChatMessageType"
  })
}, {
  depth: 3,
  url: "#messageerror",
  title: _jsx(_Fragment, {
    children: "MessageError"
  })
}, {
  depth: 3,
  url: "#usermanualeventpayload",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "UserManualEventPayload"
    })
  })
}, {
  depth: 3,
  url: "#usermanualsosevent",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "UserManualSosEvent"
    })
  })
}, {
  depth: 3,
  url: "#usermanualeosevent",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "UserManualEosEvent"
    })
  })
}, {
  depth: 3,
  url: "#agentmanualeospayload",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AgentManualEosPayload"
    })
  })
}, {
  depth: 3,
  url: "#agentmanualeosevent",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AgentManualEosEvent"
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
  url: "#transcript",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "Transcript"
    })
  })
}, {
  depth: 3,
  url: "#conversationalaiapiconfig",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ConversationalAIAPIConfig"
    })
  })
}, {
  depth: 3,
  url: "#conversationalaiapierror",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ConversationalAIAPIError"
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
  url: "#priority",
  title: _jsx(_Fragment, {
    children: "Priority"
  })
}, {
  depth: 3,
  url: "#thinklisteningaction",
  title: _jsx(_Fragment, {
    children: "ThinkListeningAction"
  })
}, {
  depth: 3,
  url: "#thinkthinkingaction",
  title: _jsx(_Fragment, {
    children: "ThinkThinkingAction"
  })
}, {
  depth: 3,
  url: "#thinkspeakingaction",
  title: _jsx(_Fragment, {
    children: "ThinkSpeakingAction"
  })
}, {
  depth: 3,
  url: "#agentstate",
  title: _jsx(_Fragment, {
    children: "AgentState"
  })
}, {
  depth: 3,
  url: "#moduletype",
  title: _jsx(_Fragment, {
    children: "ModuleType"
  })
}, {
  depth: 3,
  url: "#messagetype",
  title: _jsx(_Fragment, {
    children: "MessageType"
  })
}, {
  depth: 3,
  url: "#transcriptrendermode",
  title: _jsx(_Fragment, {
    children: "TranscriptRenderMode"
  })
}, {
  depth: 3,
  url: "#transcripttype",
  title: _jsx(_Fragment, {
    children: "TranscriptType"
  })
}, {
  depth: 3,
  url: "#transcriptstatus",
  title: _jsx(_Fragment, {
    children: "TranscriptStatus"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h2: "h2",
    h3: "h3",
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
      children: "Add the toolkit to your project using Maven or by copying the source code."
    }), `
`, _jsxs(Tabs, {
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "maven",
          children: "Maven"
        }), _jsx(TabsTrigger, {
          value: "source",
          children: "Source code"
        })]
      }), _jsxs(TabsContent, {
        value: "maven",
        children: [_jsxs(_components.p, {
          children: ["Add the following dependency to your app-level ", _jsx(_components.code, {
            children: "build.gradle"
          }), " file:"]
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
            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "implementation"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'io.agora.agents:agora-agent-client-toolkit:2.9.0'"
                })]
              })
            })
          })
        })]
      }), _jsx(TabsContent, {
        value: "source",
        children: _jsxs(_components.p, {
          children: ["Copy the ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Conversational-AI/agent-client-toolkit-kotlin/tree/main/conversational-ai",
            children: _jsx(_components.code, {
              children: "conversational-ai"
            })
          }), " module into your project, then import the toolkit before calling its APIs."]
        })
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If you encounter library conflicts when integrating multiple Agora SDKs in your Android project, see ", _jsx(_components.a, {
            href: "/en/api-reference/faq/integration/rtm2_rtc_integration_issue",
            children: "handle integration issues"
          }), "."]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.a, {
        href: "https://github.com/AgoraIO-Community/Conversational-AI-Demo/tree/main/Android/scenes/convoai/src/main/java/io/agora/scene/convoai/convoaiApi",
        children: "Android toolkit API"
      }), " for Conversational AI Engine provides the following classes and methods."]
    }), `
`, _jsx(_components.h2, {
      id: "iconversationalaiapi-class",
      children: "IConversationalAIAPI class"
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
              href: "#addhandler",
              children: _jsx(_components.code, {
                children: "addHandler"
              })
            })
          }), _jsx(_components.td, {
            children: "Registers an event handler to receive agent session events."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#removehandler",
              children: _jsx(_components.code, {
                children: "removeHandler"
              })
            })
          }), _jsx(_components.td, {
            children: "Removes a registered event handler."
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
            children: "Subscribes to a channel to receive agent conversation events."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#unsubscribemessage",
              children: _jsx(_components.code, {
                children: "unsubscribeMessage"
              })
            })
          }), _jsx(_components.td, {
            children: "Unsubscribes from the channel and stops receiving events."
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
            children: "Interrupts the agent’s speech."
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
              href: "#loadaudiosettings",
              children: _jsx(_components.code, {
                children: "loadAudioSettings"
              })
            })
          }), _jsx(_components.td, {
            children: "Sets audio parameters to optimize agent conversation performance."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#destroy",
              children: _jsx(_components.code, {
                children: "destroy"
              })
            })
          }), _jsx(_components.td, {
            children: "Destroys the API instance and releases resources."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "chat",
      children: _jsx(_components.code, {
        children: "chat"
      })
    }), `
`, _jsx(_components.p, {
      children: "Send a message to the agent."
    }), `
`, _jsxs(_components.p, {
      children: ["Support for sending different types of messages through the ", _jsx(_components.code, {
        children: "ChatMessage"
      }), " sealed class hierarchy:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "ImageMessage"
        }), ": Used to send picture messages."]
      }), `
`]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " chat"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", message: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ChatMessage"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", completion: ("
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
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "?) -> "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Unit"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Agent user ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "message"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ChatMessage"
            })
          }), _jsxs(_components.td, {
            children: ["Message object of type ", _jsx(_components.a, {
              href: "#imagemessage",
              children: "ImageMessage"
            }), ". See ", _jsx(_components.a, {
              href: "#chatmessage",
              children: "ChatMessage"
            }), " for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "completion"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "(error: ConversationalAIAPIError?) -> Unit"
            })
          }), _jsxs(_components.td, {
            children: ["Callback function. ", _jsx(_components.code, {
              children: "error"
            }), " is null if the call succeeds, and non-null if it fails."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "addhandler",
      children: _jsx(_components.code, {
        children: "addHandler"
      })
    }), `
`, _jsx(_components.p, {
      children: "Registers an event handler to receive agent session events."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " addHandler"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(handler: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "IConversationalAIAPIEventHandler"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "handler"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "IConversationalAIAPIEventHandler"
            })
          }), _jsxs(_components.td, {
            children: ["Event handler instance. See ", _jsx(_components.a, {
              href: "#iconversationalaiapieventhandler-class",
              children: _jsx(_components.code, {
                children: "IConversationalAIAPIEventHandler"
              })
            }), "."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "removehandler",
      children: _jsx(_components.code, {
        children: "removeHandler"
      })
    }), `
`, _jsx(_components.p, {
      children: "Removes a registered event handler."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " removeHandler"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(handler: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "IConversationalAIAPIEventHandler"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "handler"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "IConversationalAIAPIEventHandler"
            })
          }), _jsxs(_components.td, {
            children: ["Event handler instance. See ", _jsx(_components.a, {
              href: "#iconversationalaiapieventhandler-class",
              children: _jsx(_components.code, {
                children: "IConversationalAIAPIEventHandler"
              })
            }), "."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "subscribemessage",
      children: _jsx(_components.code, {
        children: "subscribeMessage"
      })
    }), `
`, _jsx(_components.p, {
      children: "Subscribes to a channel to receive agent conversation events."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " subscribeMessage"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(channelName: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", completion: ("
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
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "?) -> "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Unit"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "channelName"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Channel name."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "completion"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "(error: ConversationalAIAPIError?) -> Unit"
            })
          }), _jsxs(_components.td, {
            children: ["Callback. ", _jsx(_components.code, {
              children: "error"
            }), " is ", _jsx(_components.code, {
              children: "null"
            }), " on success, or non-null if the call fails. See ", _jsx(_components.a, {
              href: "#conversationalaiapierror",
              children: _jsx(_components.code, {
                children: "ConversationalAIAPIError"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "unsubscribemessage",
      children: _jsx(_components.code, {
        children: "unsubscribeMessage"
      })
    }), `
`, _jsx(_components.p, {
      children: "Unsubscribes from the channel and stops receiving events."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " unsubscribeMessage"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(channelName: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", completion: ("
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
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "?) -> "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Unit"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "channelName"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Channel name."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "completion"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "(error: ConversationalAIAPIError?) -> Unit"
            })
          }), _jsxs(_components.td, {
            children: ["Callback for unsubscription result. ", _jsx(_components.code, {
              children: "error"
            }), " is ", _jsx(_components.code, {
              children: "null"
            }), " if successful, or non-null if failed. See ", _jsx(_components.a, {
              href: "#conversationalaiapierror",
              children: _jsx(_components.code, {
                children: "ConversationalAIAPIError"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "interrupt",
      children: _jsx(_components.code, {
        children: "interrupt"
      })
    }), `
`, _jsx(_components.p, {
      children: "Interrupts the agent’s speech."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " interrupt"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", completion: ("
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
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "?) -> "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Unit"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Agent user ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "completion"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "(error: ConversationalAIAPIError?) -> Unit"
            })
          }), _jsxs(_components.td, {
            children: ["Callback. ", _jsx(_components.code, {
              children: "error"
            }), " is ", _jsx(_components.code, {
              children: "null"
            }), " on success or contains error info if the call fails. See ", _jsx(_components.a, {
              href: "#conversationalaiapierror",
              children: _jsx(_components.code, {
                children: "ConversationalAIAPIError"
              })
            }), "."]
          })]
        })]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " manualSOS"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", completion: ("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "requestId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
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
              children: "error"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "?) -> "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Unit"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
        }), " internally. After the request is sent, the component returns the ", _jsx(_components.code, {
          children: "requestId"
        }), " for this request in ", _jsx(_components.code, {
          children: "completion"
        }), ". Your app can store this value to correlate it with the server-side callback."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "completion"
        }), " only indicates whether the RTM publish succeeded — it does not indicate that the server processed the request successfully."]
      }), `
`, _jsxs(_components.li, {
        children: ["Whether the server successfully processed the request is determined by the subsequent ", _jsx(_components.a, {
          href: "#onusermanualsosevent",
          children: _jsx(_components.code, {
            children: "onUserManualSosEvent"
          })
        }), " or ", _jsx(_components.a, {
          href: "#onusermanualeosevent",
          children: _jsx(_components.code, {
            children: "onUserManualEosEvent"
          })
        }), " callback."]
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
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agentUserId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Agent user ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "completion"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "(requestId: String, error: ConversationalAIAPIError?) -> Unit"
            })
          }), _jsxs(_components.td, {
            children: ["Callback function. ", _jsx(_components.code, {
              children: "requestId"
            }), " is the unique identifier for this request. ", _jsx(_components.code, {
              children: "error"
            }), " is ", _jsx(_components.code, {
              children: "null"
            }), " if the call succeeds, and non-null if it fails. This callback only indicates whether the RTM publish succeeded."]
          })]
        })]
      })]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " manualEOS"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", completion: ("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "requestId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
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
              children: "error"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "?) -> "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Unit"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
        }), " internally. After the request is sent, the component returns the ", _jsx(_components.code, {
          children: "requestId"
        }), " for this request in ", _jsx(_components.code, {
          children: "completion"
        }), ". Your app can store this value to correlate it with the server-side callback."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "completion"
        }), " only indicates whether the RTM publish succeeded — it does not indicate that the server processed the request successfully."]
      }), `
`, _jsxs(_components.li, {
        children: ["Whether the server successfully processed the request is determined by the subsequent ", _jsx(_components.a, {
          href: "#onusermanualsosevent",
          children: _jsx(_components.code, {
            children: "onUserManualSosEvent"
          })
        }), " or ", _jsx(_components.a, {
          href: "#onusermanualeosevent",
          children: _jsx(_components.code, {
            children: "onUserManualEosEvent"
          })
        }), " callback."]
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
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agentUserId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Agent user ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "completion"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "(requestId: String, error: ConversationalAIAPIError?) -> Unit"
            })
          }), _jsxs(_components.td, {
            children: ["Callback function. ", _jsx(_components.code, {
              children: "requestId"
            }), " is the unique identifier for this request. ", _jsx(_components.code, {
              children: "error"
            }), " is ", _jsx(_components.code, {
              children: "null"
            }), " if the call succeeds, and non-null if it fails. This callback only indicates whether the RTM publish succeeded."]
          })]
        })]
      })]
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
      children: ["This method requires RTM. ", _jsx(_components.code, {
        children: "completion"
      }), " only indicates whether the RTM message was published successfully, not that the agent has finished speaking."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " speak"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", message: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "SpeakMessage"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", completion: ("
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
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "?) -> "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Unit"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Agent user ID."
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
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "completion"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "(error: ConversationalAIAPIError?) -> Unit"
            })
          }), _jsxs(_components.td, {
            children: ["Callback function. ", _jsx(_components.code, {
              children: "error"
            }), " is null if the call succeeds, and non-null if it fails."]
          })]
        })]
      })]
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
      children: ["This method requires RTM. ", _jsx(_components.code, {
        children: "completion"
      }), " only indicates whether the RTM message was published successfully, not that the LLM has finished processing the instruction."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " think"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", message: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ThinkMessage"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", completion: ("
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
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "?) -> "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Unit"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Agent user ID."
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
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "completion"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "(error: ConversationalAIAPIError?) -> Unit"
            })
          }), _jsxs(_components.td, {
            children: ["Callback function. ", _jsx(_components.code, {
              children: "error"
            }), " is null if the call succeeds, and non-null if it fails."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "loadaudiosettings",
      children: _jsx(_components.code, {
        children: "loadAudioSettings"
      })
    }), `
`, _jsx(_components.p, {
      children: "Sets audio parameters to optimize the agent’s conversation performance."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["You must call this method ", _jsx(_components.strong, {
            children: "before each"
          }), " ", _jsx(_components.code, {
            children: "joinChannel"
          }), " call to ensure optimal audio quality."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " loadAudioSettings"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(scenario: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Int"
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
              children: " Constants.AUDIO_SCENARIO_AI_CLIENT)"
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
              children: "scenario"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Int"
            })
          }), _jsxs(_components.td, {
            children: ["Audio scene. ", _jsx(_components.code, {
              children: "AUDIO_SCENARIO_AI_CLIENT"
            }), " is the default. Use it for Conversational AI agent dialogue scenarios to optimize audio quality for speech recognition and semantic understanding. If you enable the AI Avatar feature, set the scenario to ", _jsx(_components.code, {
              children: "AUDIO_SCENARIO_DEFAULT"
            }), " for better mixing results."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "destroy",
      children: _jsx(_components.code, {
        children: "destroy"
      })
    }), `
`, _jsx(_components.p, {
      children: "Destroys the API instance and releases resources."
    }), `
`, _jsx(_components.p, {
      children: "Call this method when the instance is no longer needed. After calling, the instance becomes unusable."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " destroy"
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
`, _jsx(_components.h2, {
      id: "iconversationalaiapieventhandler-class",
      children: "IConversationalAIAPIEventHandler class"
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
              href: "#onmessageerror",
              children: _jsx(_components.code, {
                children: "onMessageError"
              })
            })
          }), _jsx(_components.td, {
            children: "Message processing error callback."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#onmessagereceiptupdated",
              children: _jsx(_components.code, {
                children: "onMessageReceiptUpdated"
              })
            })
          }), _jsx(_components.td, {
            children: "Message receipt update callback."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#onusermanualsosevent",
              children: _jsx(_components.code, {
                children: "onUserManualSosEvent"
              })
            })
          }), _jsx(_components.td, {
            children: "Manual SoS result callback."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#onusermanualeosevent",
              children: _jsx(_components.code, {
                children: "onUserManualEosEvent"
              })
            })
          }), _jsx(_components.td, {
            children: "Manual EoS result callback."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#onagentmanualeosevent",
              children: _jsx(_components.code, {
                children: "onAgentManualEosEvent"
              })
            })
          }), _jsx(_components.td, {
            children: "Server-triggered automatic EoS notification callback."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#onagentstatechanged",
              children: _jsx(_components.code, {
                children: "onAgentStateChanged"
              })
            })
          }), _jsx(_components.td, {
            children: "Called when the agent’s status changes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#onagentlisteningchanged",
              children: _jsx(_components.code, {
                children: "onAgentListeningChanged"
              })
            })
          }), _jsx(_components.td, {
            children: "Called when the agent's listening state changes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#onagentthinkingchanged",
              children: _jsx(_components.code, {
                children: "onAgentThinkingChanged"
              })
            })
          }), _jsx(_components.td, {
            children: "Called when the agent's thinking state changes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#onagentspeakingchanged",
              children: _jsx(_components.code, {
                children: "onAgentSpeakingChanged"
              })
            })
          }), _jsx(_components.td, {
            children: "Called when the agent's speaking state changes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#onagentinterrupted",
              children: _jsx(_components.code, {
                children: "onAgentInterrupted"
              })
            })
          }), _jsx(_components.td, {
            children: "Called when an interrupt event occurs."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#onagentmetrics",
              children: _jsx(_components.code, {
                children: "onAgentMetrics"
              })
            })
          }), _jsx(_components.td, {
            children: "Called when performance metrics are available."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#onagenterror",
              children: _jsx(_components.code, {
                children: "onAgentError"
              })
            })
          }), _jsx(_components.td, {
            children: "Called when an agent error occurs."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#ontranscriptupdated",
              children: _jsx(_components.code, {
                children: "onTranscriptUpdated"
              })
            })
          }), _jsx(_components.td, {
            children: "Called when transcription content is updated."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#ondebuglog",
              children: _jsx(_components.code, {
                children: "onDebugLog"
              })
            })
          }), _jsx(_components.td, {
            children: "Called for internal debug logging."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "onmessageerror",
      children: _jsx(_components.code, {
        children: "onMessageError"
      })
    }), `
`, _jsx(_components.p, {
      children: "Message processing error callback."
    }), `
`, _jsx(_components.p, {
      children: "This callback is triggered when an error occurs during message processing. For example, if a chat message fails to be sent, this callback is triggered and the error message is returned."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onMessageError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", error: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "MessageError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Agent user ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "error"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MessageError"
            })
          }), _jsxs(_components.td, {
            children: ["Message error information, including error type and content. See ", _jsx(_components.code, {
              children: "MessageError"
            }), " for details."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "onmessagereceiptupdated",
      children: _jsx(_components.code, {
        children: "onMessageReceiptUpdated"
      })
    }), `
`, _jsx(_components.p, {
      children: "Message receipt update callback."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onMessageReceiptUpdated"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", receipt: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "MessageReceipt"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Agent user ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "receipt"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MessageReceipt"
            })
          }), _jsxs(_components.td, {
            children: ["Message receipt information. See ", _jsx(_components.code, {
              children: "MessageReceipt"
            }), " for details."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "onusermanualsosevent",
      children: _jsx(_components.code, {
        children: "onUserManualSosEvent"
      })
    }), `
`, _jsx(_components.p, {
      children: "Manual SoS result callback."
    }), `
`, _jsxs(_components.p, {
      children: ["Receives the server's processing result for a manual SoS request. Both success and failure results are returned through this callback — check ", _jsx(_components.code, {
        children: "event.payload.success"
      }), " to determine the outcome."]
    }), `
`, _jsx(_components.p, {
      children: "This callback has a default empty implementation, so existing integrations do not need to implement it."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onUserManualSosEvent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", event: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "UserManualSosEvent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Agent user ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "event"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "UserManualSosEvent"
            })
          }), _jsxs(_components.td, {
            children: ["Manual SoS event object. See ", _jsx(_components.a, {
              href: "#usermanualsosevent",
              children: _jsx(_components.code, {
                children: "UserManualSosEvent"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "onusermanualeosevent",
      children: _jsx(_components.code, {
        children: "onUserManualEosEvent"
      })
    }), `
`, _jsx(_components.p, {
      children: "Manual EoS result callback."
    }), `
`, _jsxs(_components.p, {
      children: ["Receives the server's processing result for a manual EoS request. Both success and failure results are returned through this callback — check ", _jsx(_components.code, {
        children: "event.payload.success"
      }), " to determine the outcome."]
    }), `
`, _jsx(_components.p, {
      children: "This callback has a default empty implementation, so existing integrations do not need to implement it."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onUserManualEosEvent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", event: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "UserManualEosEvent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Agent user ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "event"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "UserManualEosEvent"
            })
          }), _jsxs(_components.td, {
            children: ["Manual EoS event object. See ", _jsx(_components.a, {
              href: "#usermanualeosevent",
              children: _jsx(_components.code, {
                children: "UserManualEosEvent"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "onagentmanualeosevent",
      children: _jsx(_components.code, {
        children: "onAgentManualEosEvent"
      })
    }), `
`, _jsx(_components.p, {
      children: "Server-triggered automatic EoS notification callback."
    }), `
`, _jsxs(_components.p, {
      children: ["Triggered when a user's single speaking turn exceeds the server-side duration threshold. In this case, the server ends the current user's turn on its own and notifies the client through this callback. This event is not a result of calling ", _jsx(_components.code, {
        children: "manualEOS()"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "This callback has a default empty implementation, so existing integrations do not need to implement it."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onAgentManualEosEvent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", event: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "AgentManualEosEvent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Agent user ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "event"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AgentManualEosEvent"
            })
          }), _jsxs(_components.td, {
            children: ["Server-triggered automatic EoS event object. See ", _jsx(_components.a, {
              href: "#agentmanualeosevent",
              children: _jsx(_components.code, {
                children: "AgentManualEosEvent"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "onagentstatechanged",
      children: _jsx(_components.code, {
        children: "onAgentStateChanged"
      })
    }), `
`, _jsx(_components.p, {
      children: "Triggered when the agent’s state changes."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onAgentStateChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", event: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "StateChangeEvent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Agent user ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "event"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "StateChangeEvent"
            })
          }), _jsxs(_components.td, {
            children: ["State change event. See ", _jsx(_components.a, {
              href: "#statechangeevent",
              children: _jsx(_components.code, {
                children: "StateChangeEvent"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "onagentlisteningchanged",
      children: _jsx(_components.code, {
        children: "onAgentListeningChanged"
      })
    }), `
`, _jsx(_components.p, {
      children: "Triggered when the agent's listening state changes."
    }), `
`, _jsxs(_components.p, {
      children: ["This callback is a fine-grained complement to ", _jsx(_components.code, {
        children: "onAgentStateChanged"
      }), ", used to monitor whether the agent is actively listening to user input."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onAgentListeningChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", isListening: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Agent user ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "isListening"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Boolean"
            })
          }), _jsx(_components.td, {
            children: "Whether the agent is currently in a listening state."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "onagentthinkingchanged",
      children: _jsx(_components.code, {
        children: "onAgentThinkingChanged"
      })
    }), `
`, _jsx(_components.p, {
      children: "Triggered when the agent's thinking state changes."
    }), `
`, _jsxs(_components.p, {
      children: ["This callback is a fine-grained complement to ", _jsx(_components.code, {
        children: "onAgentStateChanged"
      }), ", used to monitor whether the agent is actively processing a request."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onAgentThinkingChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", isThinking: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Agent user ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "isThinking"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Boolean"
            })
          }), _jsx(_components.td, {
            children: "Whether the agent is currently in a thinking state."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "onagentspeakingchanged",
      children: _jsx(_components.code, {
        children: "onAgentSpeakingChanged"
      })
    }), `
`, _jsx(_components.p, {
      children: "Triggered when the agent's speaking state changes."
    }), `
`, _jsxs(_components.p, {
      children: ["This callback is a fine-grained complement to ", _jsx(_components.code, {
        children: "onAgentStateChanged"
      }), ", used to monitor whether the agent is actively playing back speech."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onAgentSpeakingChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", isSpeaking: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Agent user ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "isSpeaking"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Boolean"
            })
          }), _jsx(_components.td, {
            children: "Whether the agent is currently in a speaking state."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "onagentinterrupted",
      children: _jsx(_components.code, {
        children: "onAgentInterrupted"
      })
    }), `
`, _jsx(_components.p, {
      children: "Triggered when an interrupt event occurs."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onAgentInterrupted"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", event: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "InterruptEvent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Agent user ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "event"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "InterruptEvent"
            })
          }), _jsxs(_components.td, {
            children: ["Interrupt event. See ", _jsx(_components.a, {
              href: "#interruptevent",
              children: _jsx(_components.code, {
                children: "InterruptEvent"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "onagentmetrics",
      children: _jsx(_components.code, {
        children: "onAgentMetrics"
      })
    }), `
`, _jsx(_components.p, {
      children: "Triggered when performance metrics become available."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onAgentMetrics"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", metric: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Metric"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Agent user ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "metric"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Metric"
            })
          }), _jsxs(_components.td, {
            children: ["Performance metric. See ", _jsx(_components.a, {
              href: "#metric",
              children: _jsx(_components.code, {
                children: "Metric"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "onagenterror",
      children: _jsx(_components.code, {
        children: "onAgentError"
      })
    }), `
`, _jsx(_components.p, {
      children: "Triggered when an agent error occurs."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onAgentError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", error: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ModuleError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Agent user ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "error"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ModuleError"
            })
          }), _jsxs(_components.td, {
            children: ["Error details. See ", _jsx(_components.a, {
              href: "#moduleerror",
              children: _jsx(_components.code, {
                children: "ModuleError"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "ontranscriptupdated",
      children: _jsx(_components.code, {
        children: "onTranscriptUpdated"
      })
    }), `
`, _jsx(_components.p, {
      children: "Triggered when the transcription content is updated."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onTranscriptUpdated"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", transcript: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Transcript"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          })
        })
      })
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "This callback may trigger frequently. If deduplication is needed, handle it in your business logic."
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
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Agent user ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "transcript"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Transcript"
            })
          }), _jsxs(_components.td, {
            children: ["Transcript data. See ", _jsx(_components.a, {
              href: "#transcript",
              children: _jsx(_components.code, {
                children: "Transcript"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "ondebuglog",
      children: _jsx(_components.code, {
        children: "onDebugLog"
      })
    }), `
`, _jsx(_components.p, {
      children: "Triggered for internal debug logs."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onDebugLog"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(log: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: "log"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Debug log information."
          })]
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "structures",
      children: "Structures"
    }), `
`, _jsx(_components.h3, {
      id: "statechangeevent",
      children: _jsx(_components.code, {
        children: "StateChangeEvent"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Represents an agent state change event.", _jsx(_components.br, {}), `
`, "Tracks session flow and updates status indications in the UI, including the event timestamp."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " StateChangeEvent"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " state: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "AgentState"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " turnId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Long"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " timestamp: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Long"
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
              children: ")"
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
              children: "state"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#agentstate",
              children: _jsx(_components.code, {
                children: "AgentState"
              })
            })
          }), _jsxs(_components.td, {
            children: ["Current agent status: ", _jsx(_components.code, {
              children: "silent"
            }), ", ", _jsx(_components.code, {
              children: "listening"
            }), ", ", _jsx(_components.code, {
              children: "thinking"
            }), ", ", _jsx(_components.code, {
              children: "speaking"
            }), ". See ", _jsx(_components.a, {
              href: "#agentstate",
              children: _jsx(_components.code, {
                children: "AgentState"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turnId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Long"
            })
          }), _jsx(_components.td, {
            children: "Conversation turn ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "timestamp"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Long"
            })
          }), _jsx(_components.td, {
            children: "Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC)."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "interruptevent",
      children: _jsx(_components.code, {
        children: "InterruptEvent"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Indicates an interrupt event.", _jsx(_components.br, {}), `
`, "Triggered when the user or system interrupts the agent or when the system detects a high-priority message. Used for logging and handling."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " InterruptEvent"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " turnId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Long"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " timestamp: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Long"
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
              children: "turnId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Long"
            })
          }), _jsx(_components.td, {
            children: "ID of the interrupted conversation turn."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "timestamp"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Long"
            })
          }), _jsx(_components.td, {
            children: "Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC)."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "metric",
      children: _jsx(_components.code, {
        children: "Metric"
      })
    }), `
`, _jsx(_components.p, {
      children: "Used to record and transmit system performance data. This data can be used for performance monitoring, system optimization, and user experience improvement."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Metric"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " type: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ModuleType"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " name: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " value"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Double"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " timestamp: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Long"
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
              href: "#moduletype",
              children: _jsx(_components.code, {
                children: "ModuleType"
              })
            })
          }), _jsxs(_components.td, {
            children: ["Type of indicator. See ", _jsx(_components.a, {
              href: "#moduletype",
              children: _jsx(_components.code, {
                children: "ModuleType"
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
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Descriptive name of the metric."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "value"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Double"
            })
          }), _jsx(_components.td, {
            children: "Metric value (e.g., latency in ms)."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "timestamp"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Long"
            })
          }), _jsx(_components.td, {
            children: "Timestamp when metric was recorded in milliseconds since Unix epoch (January 1, 1970 UTC)."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "moduleerror",
      children: _jsx(_components.code, {
        children: "ModuleError"
      })
    }), `
`, _jsx(_components.p, {
      children: "Processes and reports agent-related error information."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " ModuleError"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " type: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ModuleType"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " code: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Int"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " message: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " timestamp: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Long"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " turnId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "? "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " null"
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
              href: "#moduletype",
              children: _jsx(_components.code, {
                children: "ModuleType"
              })
            })
          }), _jsxs(_components.td, {
            children: ["Error type (e.g., LLM failure, TTS exception). See ", _jsx(_components.a, {
              href: "#moduletype",
              children: _jsx(_components.code, {
                children: "ModuleType"
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
              children: "Int"
            })
          }), _jsx(_components.td, {
            children: "Specific error code."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "message"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Description of the error."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "timestamp"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Long"
            })
          }), _jsx(_components.td, {
            children: "Timestamp of the error in milliseconds since Unix epoch (January 1, 1970 UTC)."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turnId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Long?"
            })
          }), _jsxs(_components.td, {
            children: ["(Optional) ", _jsx(_components.code, {
              children: "turnId"
            }), " corresponding to the image upload error."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "chatmessage",
      children: _jsx(_components.code, {
        children: "ChatMessage"
      })
    }), `
`, _jsx(_components.p, {
      children: "Sealed base class for all message types sent to agents."
    }), `
`, _jsx(_components.p, {
      children: "This sealed class hierarchy provides a type-safe way to handle messages of different content types."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "sealed"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " ChatMessage"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "imagemessage",
      children: _jsx(_components.code, {
        children: "ImageMessage"
      })
    }), `
`, _jsx(_components.p, {
      children: "Used to send image content to the agent."
    }), `
`, _jsx(_components.p, {
      children: "Supports specifying image files via HTTP/HTTPS links."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " ImageMessage"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " uuid: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " imageUrl: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
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
              children: ") : "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ChatMessage"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "()"
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
              children: "uuid"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "Unique identifier for the image message."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "imageUrl"
            })
          }), _jsx(_components.td, {
            children: "String?"
          }), _jsx(_components.td, {
            children: "HTTP/HTTPS image file link."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "messagereceipt",
      children: "MessageReceipt"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "MessageReceipt"
      }), " represents message receipt information and supports processing multiple media types through ", _jsx(_components.code, {
        children: "MediaInfo"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " MessageReceipt"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " type: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ModuleType"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " chatMessageType: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ChatMessageType"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " turnId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Long"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " message: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
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
            children: "ModuleType"
          }), _jsx(_components.td, {
            children: "Module type. See ModuleType, for example: llm, mllm, tts, context."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "chatMessageType"
            })
          }), _jsx(_components.td, {
            children: "ChatMessageType"
          }), _jsxs(_components.td, {
            children: ["Message error type. See ", _jsx(_components.a, {
              href: "#chatmessagetype",
              children: "ChatMessageType"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turnId"
            })
          }), _jsx(_components.td, {
            children: "Long"
          }), _jsx(_components.td, {
            children: "Turn ID of the message."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "message"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: ["Message content. Must be parsed according to the ", _jsx(_components.code, {
              children: "type"
            }), " field. For ", _jsx(_components.code, {
              children: "context"
            }), ", this is usually a JSON string containing resource information."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "chatmessagetype",
      children: "ChatMessageType"
    }), `
`, _jsx(_components.p, {
      children: "Used to distinguish different types of messages in the session system."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "enum"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " ChatMessageType"
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
              children: "val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " value"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    Text"
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
              children: '"text"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "),"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    Image"
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
              children: '"picture"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "),"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    UNKNOWN"
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
              children: '"unknown"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
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
              children: "    companion"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " object"
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
              children: "        fun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " fromValue"
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
              children: "value"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "): "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ChatMessageType"
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
              children: "            return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ChatMessageType.entries."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "find"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " { it."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "value"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " =="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " value"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " } ?: UNKNOWN"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    }"
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
              children: "value"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "The string value to match against."
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "messageerror",
      children: "MessageError"
    }), `
`, _jsx(_components.p, {
      children: "Used to process and report message error information."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " MessageError"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " chatMessageType: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ChatMessageType"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " code: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Int"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " message: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " timestamp: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Long"
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
              children: "chatMessageType"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ChatMessageType"
            })
          }), _jsxs(_components.td, {
            children: ["Message error type. See ", _jsx(_components.code, {
              children: "ChatMessageType"
            }), " for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "code"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Int"
            })
          }), _jsx(_components.td, {
            children: "Error code used to identify specific error scenarios."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "message"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Error description providing detailed explanation, usually a JSON string containing resource information."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "timestamp"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Long"
            })
          }), _jsx(_components.td, {
            children: "Timestamp of when the event occurred (milliseconds since January 1, 1970 UTC)."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "usermanualeventpayload",
      children: _jsx(_components.code, {
        children: "UserManualEventPayload"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " UserManualEventPayload"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " success: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Boolean"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " requestId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " turnId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "?,"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " errorMessage: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "?"
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
              children: "Boolean"
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
              children: "String"
            })
          }), _jsxs(_components.td, {
            children: ["Request ID, corresponding to the ", _jsx(_components.code, {
              children: "requestId"
            }), " returned in ", _jsx(_components.code, {
              children: "completion"
            }), " after calling ", _jsx(_components.code, {
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
              children: "Long?"
            })
          }), _jsxs(_components.td, {
            children: ["The associated conversation turn ID. ", _jsx(_components.code, {
              children: "null"
            }), " if the server's failure callback does not include a ", _jsx(_components.code, {
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
              children: "String?"
            })
          }), _jsxs(_components.td, {
            children: ["The raw error message returned by the server. Usually ", _jsx(_components.code, {
              children: "null"
            }), " on success."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "usermanualsosevent",
      children: _jsx(_components.code, {
        children: "UserManualSosEvent"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " UserManualSosEvent"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " eventId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " timestamp: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Long"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " payload: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "UserManualEventPayload"
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
              children: "String"
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
              children: "Long"
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
              children: "UserManualEventPayload"
            })
          }), _jsxs(_components.td, {
            children: ["Event payload. See ", _jsx(_components.a, {
              href: "#usermanualeventpayload",
              children: _jsx(_components.code, {
                children: "UserManualEventPayload"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "usermanualeosevent",
      children: _jsx(_components.code, {
        children: "UserManualEosEvent"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " UserManualEosEvent"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " eventId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " timestamp: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Long"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " payload: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "UserManualEventPayload"
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
              children: "String"
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
              children: "Long"
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
              children: "UserManualEventPayload"
            })
          }), _jsxs(_components.td, {
            children: ["Event payload. See ", _jsx(_components.a, {
              href: "#usermanualeventpayload",
              children: _jsx(_components.code, {
                children: "UserManualEventPayload"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "agentmanualeospayload",
      children: _jsx(_components.code, {
        children: "AgentManualEosPayload"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " AgentManualEosPayload"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " reason: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " maxDurationMs: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Long"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " turnId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Long"
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
              children: "String"
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
              children: "Long"
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
              children: "Long"
            })
          }), _jsx(_components.td, {
            children: "The associated conversation turn ID."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "agentmanualeosevent",
      children: _jsx(_components.code, {
        children: "AgentManualEosEvent"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " AgentManualEosEvent"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " eventId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " timestamp: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Long"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " payload: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "AgentManualEosPayload"
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
              children: "String"
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
              children: "Long"
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
              children: "AgentManualEosPayload"
            })
          }), _jsxs(_components.td, {
            children: ["Event payload. See ", _jsx(_components.a, {
              href: "#agentmanualeospayload",
              children: _jsx(_components.code, {
                children: "AgentManualEosPayload"
              })
            }), "."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
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
              children: "("
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " text: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " priority: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Priority"
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
              children: " Priority.INTERRUPT,"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " interruptable: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Boolean"
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
              children: " true"
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
              children: ")"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Used to bypass the LLM and speak text directly through the agent's TTS pipeline."
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
              children: "String"
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
            children: _jsx(_components.a, {
              href: "#priority",
              children: _jsx(_components.code, {
                children: "Priority"
              })
            })
          }), _jsxs(_components.td, {
            children: ["The priority for handling this speak request. Defaults to ", _jsx(_components.code, {
              children: "INTERRUPT"
            }), ". See ", _jsx(_components.a, {
              href: "#priority",
              children: _jsx(_components.code, {
                children: "Priority"
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
              children: "Boolean"
            })
          }), _jsxs(_components.td, {
            children: ["Whether the user can interrupt this speech by talking. Defaults to ", _jsx(_components.code, {
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
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
              children: "("
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " text: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " onListeningAction: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ThinkListeningAction"
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
              children: " ThinkListeningAction.INTERRUPT,"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " onThinkingAction: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ThinkThinkingAction"
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
              children: " ThinkThinkingAction.IGNORE,"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " onSpeakingAction: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ThinkSpeakingAction"
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
              children: " ThinkSpeakingAction.IGNORE,"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " interruptable: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Boolean"
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
              children: " true"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " metadata: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Map"
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
              children: "String"
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
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">? "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
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
              children: ")"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Used to inject text as user input for the LLM to process."
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
              children: "String"
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
            children: _jsx(_components.a, {
              href: "#thinklisteningaction",
              children: _jsx(_components.code, {
                children: "ThinkListeningAction"
              })
            })
          }), _jsxs(_components.td, {
            children: ["The action to take when the agent is in a listening state. Defaults to ", _jsx(_components.code, {
              children: "INTERRUPT"
            }), ". See ", _jsx(_components.a, {
              href: "#thinklisteningaction",
              children: _jsx(_components.code, {
                children: "ThinkListeningAction"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "onThinkingAction"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#thinkthinkingaction",
              children: _jsx(_components.code, {
                children: "ThinkThinkingAction"
              })
            })
          }), _jsxs(_components.td, {
            children: ["The action to take when the agent is in a thinking state. Defaults to ", _jsx(_components.code, {
              children: "IGNORE"
            }), ". See ", _jsx(_components.a, {
              href: "#thinkthinkingaction",
              children: _jsx(_components.code, {
                children: "ThinkThinkingAction"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "onSpeakingAction"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.a, {
              href: "#thinkspeakingaction",
              children: _jsx(_components.code, {
                children: "ThinkSpeakingAction"
              })
            })
          }), _jsxs(_components.td, {
            children: ["The action to take when the agent is in a speaking state. Defaults to ", _jsx(_components.code, {
              children: "IGNORE"
            }), ". See ", _jsx(_components.a, {
              href: "#thinkspeakingaction",
              children: _jsx(_components.code, {
                children: "ThinkSpeakingAction"
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
              children: "Boolean"
            })
          }), _jsxs(_components.td, {
            children: ["Whether the user can interrupt the response generated by this instruction by talking. Defaults to ", _jsx(_components.code, {
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
              children: "Map<String, String>?"
            })
          }), _jsxs(_components.td, {
            children: ["Optional custom key-value pairs. When ", _jsx(_components.code, {
              children: "null"
            }), ", no metadata is written to the RTM message."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "transcript",
      children: _jsx(_components.code, {
        children: "Transcript"
      })
    }), `
`, _jsx(_components.p, {
      children: "Represents a full transcribed message used to render the UI."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Transcript"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " turnId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Long"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " userId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
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
              children: ' ""'
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " text: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    var"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " status: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "TranscriptStatus"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    var"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " type: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "TranscriptType"
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
              children: "turnId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Long"
            })
          }), _jsx(_components.td, {
            children: "Session turn identifier."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "userId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "User ID linked to the transcript."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "text"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Transcribed message content."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "status"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TranscriptStatus"
            })
          }), _jsxs(_components.td, {
            children: ["Current status of transcription. See ", _jsx(_components.a, {
              href: "#transcriptstatus",
              children: _jsx(_components.code, {
                children: "TranscriptStatus"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "type"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TranscriptType"
            })
          }), _jsxs(_components.td, {
            children: ["Transcript type (e.g., ", _jsx(_components.code, {
              children: "AGENT"
            }), ", ", _jsx(_components.code, {
              children: "USER"
            }), "). See ", _jsx(_components.a, {
              href: "#transcripttype",
              children: _jsx(_components.code, {
                children: "TranscriptType"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "conversationalaiapiconfig",
      children: _jsx(_components.code, {
        children: "ConversationalAIAPIConfig"
      })
    }), `
`, _jsx(_components.p, {
      children: "Holds configuration parameters for initializing the Conversational AI API."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " ConversationalAIAPIConfig"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " rtcEngine: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "RtcEngine"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " rtmClient: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "RtmClient"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " renderMode: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "TranscriptRenderMode"
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
              children: " TranscriptRenderMode.Word,"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " enableLog: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Boolean"
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
              children: " true"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " enableRenderModeFallback: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Boolean"
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
              children: " true"
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
              children: "RtcEngine"
            })
          }), _jsxs(_components.td, {
            children: ["Audio/video engine instance. See ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#class_irtcengine",
              children: _jsx(_components.code, {
                children: "RtcEngine"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "rtmClient"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "RtmClient"
            })
          }), _jsxs(_components.td, {
            children: ["Real-time messaging client. See the ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/signaling-sdk/android/2.x/index.html",
              children: "Signaling Android API reference"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "renderMode"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TranscriptRenderMode"
            })
          }), _jsxs(_components.td, {
            children: ["Transcript rendering style. Default: word-by-word. See ", _jsx(_components.a, {
              href: "#transcriptrendermode",
              children: _jsx(_components.code, {
                children: "TranscriptRenderMode"
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
              children: "Boolean"
            })
          }), _jsxs(_components.td, {
            children: ["Enables logging if ", _jsx(_components.code, {
              children: "true"
            }), ". When ", _jsx(_components.code, {
              children: "true"
            }), ", logs are written to the RTC SDK log file. Default is ", _jsx(_components.code, {
              children: "true"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "enableRenderModeFallback"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Boolean"
            })
          }), _jsxs(_components.td, {
            children: ["Whether to automatically fall back to text rendering when ", _jsx(_components.code, {
              children: "renderMode"
            }), " is set to word-level but the server doesn't provide word-level timing data. If ", _jsx(_components.code, {
              children: "true"
            }), " (default), the component falls back to text mode automatically. If ", _jsx(_components.code, {
              children: "false"
            }), ", the component stays in word mode regardless — this can result in no transcript being displayed if the server doesn't support word-level transcription."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "conversationalaiapierror",
      children: _jsx(_components.code, {
        children: "ConversationalAIAPIError"
      })
    }), `
`, _jsx(_components.p, {
      children: "Represents an error type in the Conversational AI API."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "sealed"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " : "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Exception"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " RtmError"
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
              children: "val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " code: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " msg: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") : "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "()"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " RtcError"
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
              children: "val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " code: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " msg: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") : "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "()"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " UnknownError"
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
              children: "val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " msg: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") : "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "()"
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
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " errorCode: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Int"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "        get"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " when"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "this"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "            is"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " RtmError "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "->"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " this"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".code"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "            is"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " RtcError "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "->"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " this"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".code"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "            is"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " UnknownError "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "->"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " -"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "100"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
            })
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
              children: "    val"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " errorMessage: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "String"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "        get"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " when"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "this"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "            is"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " RtmError "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "->"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " this"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".msg"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "            is"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " RtcError "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "->"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " this"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".msg"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "            is"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " UnknownError "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "->"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " this"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".msg"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
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
              children: "errorCode"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Int"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "RtmError"
            }), "/", _jsx(_components.code, {
              children: "RtcError"
            }), ": specific code; ", _jsx(_components.code, {
              children: "UnknownError"
            }), ": returns ", _jsx(_components.code, {
              children: "-100"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "errorMessage"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Human-readable description of the error."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "enum-classes",
      children: "Enum classes"
    }), `
`, _jsx(_components.h3, {
      id: "priority",
      children: "Priority"
    }), `
`, _jsx(_components.p, {
      children: "Controls the priority with which the agent handles incoming messages during an interaction."
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
              children: "INTERRUPT"
            })
          }), _jsx(_components.td, {
            children: "High priority: Immediately interrupt the current interaction and process the message. Suitable for urgent or time-sensitive content."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "APPEND"
            })
          }), _jsx(_components.td, {
            children: "Medium priority: The message is queued for processing after the current interaction is completed and is suitable for subsequent questions."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "IGNORE"
            })
          }), _jsx(_components.td, {
            children: "Low priority: This message is only processed when the agent is idle, and will be discarded during ongoing interactions. Suitable for optional content."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "thinklisteningaction",
      children: "ThinkListeningAction"
    }), `
`, _jsx(_components.p, {
      children: "The action to take when the agent is in a listening state when a Think instruction arrives."
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
              children: "INJECT"
            })
          }), _jsx(_components.td, {
            children: "Injects the instruction into the current turn without interrupting it."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "INTERRUPT"
            })
          }), _jsx(_components.td, {
            children: "Interrupts the current interaction and processes the instruction."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "APPEND"
            })
          }), _jsx(_components.td, {
            children: "Appends the instruction for processing after the current interaction completes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "IGNORE"
            })
          }), _jsx(_components.td, {
            children: "Ignores the instruction."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "thinkthinkingaction",
      children: "ThinkThinkingAction"
    }), `
`, _jsx(_components.p, {
      children: "The action to take when the agent is in a thinking state when a Think instruction arrives."
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
              children: "INTERRUPT"
            })
          }), _jsx(_components.td, {
            children: "Interrupts the current interaction and processes the instruction."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "APPEND"
            })
          }), _jsx(_components.td, {
            children: "Appends the instruction for processing after the current interaction completes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "IGNORE"
            })
          }), _jsx(_components.td, {
            children: "Ignores the instruction."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "thinkspeakingaction",
      children: "ThinkSpeakingAction"
    }), `
`, _jsx(_components.p, {
      children: "The action to take when the agent is in a speaking state when a Think instruction arrives."
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
              children: "INTERRUPT"
            })
          }), _jsx(_components.td, {
            children: "Interrupts the current interaction and processes the instruction."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "APPEND"
            })
          }), _jsx(_components.td, {
            children: "Appends the instruction for processing after the current interaction completes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "IGNORE"
            })
          }), _jsx(_components.td, {
            children: "Ignores the instruction."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "agentstate",
      children: "AgentState"
    }), `
`, _jsx(_components.p, {
      children: "Represents the current state of the agent."
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
              children: "SILENT"
            })
          }), _jsx(_components.td, {
            children: "Agent is silent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LISTENING"
            })
          }), _jsx(_components.td, {
            children: "Agent is listening."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "THINKING"
            })
          }), _jsx(_components.td, {
            children: "Agent is processing or thinking."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "SPEAKING"
            })
          }), _jsx(_components.td, {
            children: "Agent is speaking."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "UNKNOWN"
            })
          }), _jsx(_components.td, {
            children: "Unknown state."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "moduletype",
      children: "ModuleType"
    }), `
`, _jsx(_components.p, {
      children: "Performance module type enumeration."
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
            children: "LLM inference latency measurement."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MLLM"
            })
          }), _jsx(_components.td, {
            children: "MLLM inference latency measurement."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TTS"
            })
          }), _jsx(_components.td, {
            children: "Text-to-speech synthesis latency measurement."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "UNKNOWN"
            })
          }), _jsx(_components.td, {
            children: "Unknown type."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "messagetype",
      children: "MessageType"
    }), `
`, _jsx(_components.p, {
      children: "Used to distinguish different types of messages in the system."
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
              children: "ASSISTANT"
            })
          }), _jsx(_components.td, {
            children: "AI assistant transcript message."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "USER"
            })
          }), _jsx(_components.td, {
            children: "User transcript message."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERROR"
            })
          }), _jsx(_components.td, {
            children: "Error message."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "METRICS"
            })
          }), _jsx(_components.td, {
            children: "Performance metrics message."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "INTERRUPT"
            })
          }), _jsx(_components.td, {
            children: "Interrupt message."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "UNKNOWN"
            })
          }), _jsx(_components.td, {
            children: "Unknown message type."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MESSAGE_RECEIPT"
            })
          }), _jsx(_components.td, {
            children: "Message receipt."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "transcriptrendermode",
      children: "TranscriptRenderMode"
    }), `
`, _jsx(_components.p, {
      children: "Transcript rendering mode."
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
              children: "Word"
            })
          }), _jsx(_components.td, {
            children: "Word-by-word transcription and rendering."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Text"
            })
          }), _jsx(_components.td, {
            children: "Full text transcription and rendering."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "transcripttype",
      children: "TranscriptType"
    }), `
`, _jsx(_components.p, {
      children: "Transcript source type."
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
              children: "AGENT"
            })
          }), _jsx(_components.td, {
            children: "Agent transcript."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "USER"
            })
          }), _jsx(_components.td, {
            children: "User transcript."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "transcriptstatus",
      children: "TranscriptStatus"
    }), `
`, _jsx(_components.p, {
      children: "Indicates the current status of the transcription."
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
            children: "The transcript is still being generated or the speech is still in progress."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "END"
            })
          }), _jsx(_components.td, {
            children: "The transcription completed normally."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "INTERRUPTED"
            })
          }), _jsx(_components.td, {
            children: "Transcription was interrupted before completion."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "UNKNOWN"
            })
          }), _jsx(_components.td, {
            children: "Unknown status."
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
