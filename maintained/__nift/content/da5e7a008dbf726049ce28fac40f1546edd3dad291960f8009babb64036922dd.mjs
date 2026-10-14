import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "iOS toolkit API",
  description: "iOS toolkit API reference for Conversational AI Engine."
};
export let _markdown = `

## Installation [#installation]

Add the toolkit to your project using CocoaPods, Swift Package Manager, or by copying the source code.

<Tabs>
  <TabsList>
    <TabsTrigger value="cocoapods">
      CocoaPods
    </TabsTrigger>

    <TabsTrigger value="spm">
      Swift Package Manager
    </TabsTrigger>

    <TabsTrigger value="source">
      Source code
    </TabsTrigger>
  </TabsList>

  <TabsContent value="cocoapods">
    Add the following dependency to your \`Podfile\`:

    \`\`\`ruby
    pod 'agent-client-toolkit-swift', '2.9.0'
    \`\`\`
  </TabsContent>

  <TabsContent value="spm">
    In Xcode, add the following package URL and set the version rule to the \`2.9.0\` tag:

    \`\`\`text
    https://github.com/AgoraIO/agent-client-toolkit-swift.git
    \`\`\`
  </TabsContent>

  <TabsContent value="source">
    Copy the [\`AgoraAgentClientToolkit\`](https://github.com/AgoraIO/agent-client-toolkit-swift/tree/source/main/AgoraAgentClientToolkit) sources into your project, then import the toolkit before calling its APIs.
  </TabsContent>
</Tabs>

<CalloutContainer type="info">
  <CalloutDescription>
    If you encounter library conflicts when integrating multiple Agora SDKs in your iOS project, see [handle integration issues](/en/api-reference/faq/integration/rtm2_rtc_integration_issue).
  </CalloutDescription>
</CalloutContainer>

The [iOS toolkit API](https://github.com/AgoraIO-Community/Conversational-AI-Demo/tree/main/iOS/Scenes/ConvoAI/ConvoAI/ConvoAI/Classes/ConversationalAIAPI) provides the following classes and methods.

## ConversationalAIAPI class [#conversationalaiapi-class]

| API                                                | Description                                                 |
| -------------------------------------------------- | ----------------------------------------------------------- |
| [\`chat\`](#chat)                                    | Send a message to the agent.                                |
| [\`addHandler\`](#addhandler)                        | Add an event handler to receive the callback.               |
| [\`removeHandler\`](#removehandler)                  | Removes an event handler.                                   |
| [\`subscribeMessage\`](#subscribemessage)            | Subscribe to channel messages.                              |
| [\`unsubscribeMessage\`](#unsubscribemessage)        | Unsubscribe from channel messages.                          |
| [\`interrupt\`](#interrupt)                          | Interrupt the agent's current speech or task processing.    |
| [\`manualSOS\`](#manualsos)                          | Sends a manual Start of Speech (SoS) signal to the agent.   |
| [\`manualEOS\`](#manualeos)                          | Sends a manual End of Speech (EoS) signal to the agent.     |
| [\`speak\`](#speak)                                  | Makes the agent speak text directly, bypassing the LLM.     |
| [\`think\`](#think)                                  | Injects text as user input for the LLM to process.          |
| [\`loadAudioSettings\`\\[1/2\\]](#loadaudiosettings12) | Set audio best practice parameters for optimal performance. |
| [\`loadAudioSettings\`\\[2/2\\]](#loadaudiosettings22) | Set audio best practice parameters for specific scenarios.  |
| [\`destroy\`](#destroy)                              | Destroys the API instance and releases all resources.       |

### \`chat\` [#chat]

Sends a message to the agent for processing.

You can use this method to send text and image messages to the agent, and the completion callback indicates the success or failure of the operation.

\`\`\`objc
@objc func chat(agentUserId: String, message: ChatMessage, completion: @escaping (ConversationalAIAPIError?) -> Void)
\`\`\`

| Parameter     | Type                                            | Description                                                                                                                                                                                 |
| ------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`                                        | The RTM user ID of the agent. Must be globally unique.                                                                                                                                      |
| \`message\`     | \`ChatMessage\`                                   | Message object containing the image URL. See [\`ChatMessage\`](#chatmessage) for details.                                                                                                     |
| \`completion\`  | \`@escaping (ConversationalAIAPIError?) -> Void\` | Callback function invoked when the operation completes. Returns \`nil\` on success, or error information on failure. See [\`ConversationalAIAPIError\`](#conversationalaiapierror) for details. |

### \`addHandler\` [#addhandler]

Add an event handler to receive the callback.

You can register a delegate to receive session events, state changes, and other notifications.

\`\`\`objc
@objc func addHandler(handler: ConversationalAIAPIEventHandler)
\`\`\`

| Parameter | Type                              | Description                                                                                                                                                 |
| --------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`handler\` | \`ConversationalAIAPIEventHandler\` | Event handler to implement the \`ConversationalAIAPIEventHandler\` protocol. See [\`ConversationalAIAPIEventHandler\`](#conversationalaiapieventhandler-class). |

### \`removeHandler\` [#removehandler]

Removes an event handler.

\`\`\`objc
@objc func removeHandler(handler: ConversationalAIAPIEventHandler)
\`\`\`

| Parameter | Type                              | Description                                                                                                   |
| --------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| \`handler\` | \`ConversationalAIAPIEventHandler\` | The event handler to remove. See [\`ConversationalAIAPIEventHandler\`](#conversationalaiapieventhandler-class). |

### \`subscribeMessage\` [#subscribemessage]

Subscribe to channel messages.

Set channel parameters and register message subscription callbacks. This method is called when the channel changes, usually when the agent starts.

\`\`\`objc
@objc func subscribeMessage(channelName: String, completion: @escaping (ConversationalAIAPIError?) -> Void)
\`\`\`

| Parameter     | Type                                  | Description                                                                                                                     |
| ------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| \`channelName\` | \`String\`                              | The name of the channel to subscribe to.                                                                                        |
| \`completion\`  | \`(ConversationalAIAPIError?) -> Void\` | A callback that returns error information when subscription fails. See [\`ConversationalAIAPIError\`](#conversationalaiapierror). |

### \`unsubscribeMessage\` [#unsubscribemessage]

Unsubscribe from channel messages.

Calling this method can stop receiving messages from the specified channel, which is suitable for scenarios where the connection with the agent is disconnected.

\`\`\`objc
@objc func unsubscribeMessage(channelName: String, completion: @escaping (ConversationalAIAPIError?) -> Void)
\`\`\`

| Parameter     | Type                                  | Description                                                                                                                                                                     |
| ------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`channelName\` | \`String\`                              | The name of the channel to unsubscribe from.                                                                                                                                    |
| \`completion\`  | \`(ConversationalAIAPIError?) -> Void\` | The callback after the unsubscription operation is completed. You can get error information through this callback. See [\`ConversationalAIAPIError\`](#conversationalaiapierror). |

### \`interrupt\` [#interrupt]

Interrupt the agent's current ongoing speech or task processing.

This method can be used to interrupt an agent that is currently speaking or processing a task.

\`\`\`objc
@objc func interrupt(agentUserId: String, completion: @escaping (ConversationalAIAPIError?) -> Void)
\`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    If \`error\` has a value, it means the message sending failed. If \`error\` is nil, it means the message was sent successfully, but it does not guarantee that the agent was successfully interrupted.
  </CalloutDescription>
</CalloutContainer>

| Parameter     | Type                                  | Description                                                                                                                                                                                                              |
| ------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`agentUserId\` | \`String\`                              | The RTM user ID of the agent, must be globally unique.                                                                                                                                                                   |
| \`completion\`  | \`(ConversationalAIAPIError?) -> Void\` | The callback function when the operation is completed. You can get the result or error information of the operation through the parameters of the callback. See [\`ConversationalAIAPIError\`](#conversationalaiapierror). |

### \`manualSOS\` [#manualsos]

Sends a manual Start of Speech (SoS) signal to the agent over RTM, explicitly declaring that the current user has started speaking.

\`\`\`objc
@objc func manualSOS(agentUserId: String, completion: @escaping (String, ConversationalAIAPIError?) -> Void)
\`\`\`

Keep the following in mind when calling this method:

* The component generates \`requestId\` internally. After the request is sent, the component returns the \`requestId\` for this request in \`completion\`. Your app can store this value to correlate it with the server-side callback.
* \`completion\` only indicates whether the RTM publish succeeded — it does not indicate that the server processed the request successfully.
* Whether the server successfully processed the request is determined by the subsequent [\`onUserManualSosEvent\`](#onusermanualsosevent) or [\`onUserManualEosEvent\`](#onusermanualeosevent) callback.
* The client does not check locally whether manual mode is enabled. Mode validation is handled by the server.
* Common failure reasons include: the current mode configuration does not allow manual signaling, there is no active user speech to mark, or a manual SoS or EoS that has already taken effect is resubmitted within the same turn.

| Parameter     | Type                                                    | Description                                                                                                                                                                                                                         |
| ------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`                                                | The RTM user ID of the agent. Must be globally unique.                                                                                                                                                                              |
| \`completion\`  | \`@escaping (String, ConversationalAIAPIError?) -> Void\` | Callback invoked when the operation completes. The first parameter is the \`requestId\` unique to this request; the second is error information, or \`nil\` on success. This callback only indicates whether the RTM publish succeeded. |

### \`manualEOS\` [#manualeos]

Sends a manual End of Speech (EoS) signal to the agent over RTM, explicitly declaring that the current user has finished speaking.

\`\`\`objc
@objc func manualEOS(agentUserId: String, completion: @escaping (String, ConversationalAIAPIError?) -> Void)
\`\`\`

Keep the following in mind when calling this method:

* The component generates \`requestId\` internally. After the request is sent, the component returns the \`requestId\` for this request in \`completion\`. Your app can store this value to correlate it with the server-side callback.
* \`completion\` only indicates whether the RTM publish succeeded — it does not indicate that the server processed the request successfully.
* Whether the server successfully processed the request is determined by the subsequent [\`onUserManualSosEvent\`](#onusermanualsosevent) or [\`onUserManualEosEvent\`](#onusermanualeosevent) callback.
* The client does not check locally whether manual mode is enabled. Mode validation is handled by the server.
* Common failure reasons include: the current mode configuration does not allow manual signaling, there is no active user speech to mark, or a manual SoS or EoS that has already taken effect is resubmitted within the same turn.

| Parameter     | Type                                                    | Description                                                                                                                                                                                                                         |
| ------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`                                                | The RTM user ID of the agent. Must be globally unique.                                                                                                                                                                              |
| \`completion\`  | \`@escaping (String, ConversationalAIAPIError?) -> Void\` | Callback invoked when the operation completes. The first parameter is the \`requestId\` unique to this request; the second is error information, or \`nil\` on success. This callback only indicates whether the RTM publish succeeded. |

### \`speak\` [#speak]

Bypasses the LLM and makes the agent speak text directly through its TTS pipeline.

This method requires RTM. \`completion\` only indicates whether the RTM message was published successfully, not that the agent has finished speaking.

\`\`\`objc
@objc func speak(agentUserId: String, message: SpeakMessage, completion: @escaping (ConversationalAIAPIError?) -> Void)
\`\`\`

| Parameter     | Type                                            | Description                                                                                                                                                                     |
| ------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`                                        | The RTM user ID of the agent. Must be globally unique.                                                                                                                          |
| \`message\`     | \`SpeakMessage\`                                  | The text to speak and its playback behavior. See [\`SpeakMessage\`](#speakmessage).                                                                                               |
| \`completion\`  | \`@escaping (ConversationalAIAPIError?) -> Void\` | Callback function invoked when the operation completes. Returns \`nil\` on success, or error information on failure. See [\`ConversationalAIAPIError\`](#conversationalaiapierror). |

### \`think\` [#think]

Injects text as user input into the conversation for the LLM to process.

This method requires RTM. \`completion\` only indicates whether the RTM message was published successfully, not that the LLM has finished processing the instruction.

\`\`\`objc
@objc func think(agentUserId: String, message: ThinkMessage, completion: @escaping (ConversationalAIAPIError?) -> Void)
\`\`\`

| Parameter     | Type                                            | Description                                                                                                                                                                     |
| ------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`                                        | The RTM user ID of the agent. Must be globally unique.                                                                                                                          |
| \`message\`     | \`ThinkMessage\`                                  | The instruction text, state actions, and custom metadata. See [\`ThinkMessage\`](#thinkmessage).                                                                                  |
| \`completion\`  | \`@escaping (ConversationalAIAPIError?) -> Void\` | Callback function invoked when the operation completes. Returns \`nil\` on success, or error information on failure. See [\`ConversationalAIAPIError\`](#conversationalaiapierror). |

### \`loadAudioSettings[1/2]\` [#loadaudiosettings12]

Set audio best practice parameters for optimal performance.

Sets the audio parameters needed for optimal performance in agent conversations. By default, \`.aiClient\` Audio Scene is used.

\`\`\`objc
@objc func loadAudioSettings()
\`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    To enable audio best practices, you must call this method before each \`joinChannel\` call.
  </CalloutDescription>
</CalloutContainer>

**Sample code:**

\`\`\`swift
// Set audio best practice parameters before joining the channel
api.loadAudioSettings()  // Use default scenario

// Then join the channel
rtcEngine.joinChannel(byToken: token, channelId: channelName, info: nil, uid: userId)
\`\`\`

### \`loadAudioSettings[2/2]\` [#loadaudiosettings22]

Set audio best practice parameters for specific scenarios.

This method allows you to configure the audio parameters required for optimal performance in your agent conversations.

\`\`\`objc
@objc func loadAudioSettings(scenario: AgoraAudioScenario)
\`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    If you need to enable audio best practices, you must call this method before each \`joinChannel\` call.
  </CalloutDescription>
</CalloutContainer>

| Parameter  | Type                 | Description                                                                                                                                                                                                                             |
| ---------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`scenario\` | \`AgoraAudioScenario\` | The audio scenario. See [AgoraAudioScenario](https://api-ref.agora.io/en/voice-sdk/ios/4.x/documentation/agorartckit/agoraaudioscenario). If you enable the AI Avatar feature, set the scenario to \`default\` for better mixing results. |

### \`destroy\` [#destroy]

Destroys the API instance and releases all resources.

Calling this method destroys the current API instance and releases all resources. After calling this method, the instance cannot be used again. Please call this method when you no longer need to use the API.

\`\`\`objc
@objc func destroy()
\`\`\`

## ConversationalAIAPIEventHandler class [#conversationalaiapieventhandler-class]

| API                                                   | Description                                                          |
| ----------------------------------------------------- | -------------------------------------------------------------------- |
| [\`onMessageError\`](#onmessageerror)                   | A callback triggered when an error occurs during message processing. |
| [\`onMessageReceiptUpdated\`](#onmessagereceiptupdated) | Image message information update callback.                           |
| [\`onUserManualSosEvent\`](#onusermanualsosevent)       | Manual SoS result callback.                                          |
| [\`onUserManualEosEvent\`](#onusermanualeosevent)       | Manual EoS result callback.                                          |
| [\`onAgentManualEosEvent\`](#onagentmanualeosevent)     | Server-triggered automatic EoS notification callback.                |
| [\`onAgentStateChanged\`](#onagentstatechanged)         | Callback when the agent status changes.                              |
| [\`onAgentListeningChanged\`](#onagentlisteningchanged) | Called when the agent's listening state changes.                     |
| [\`onAgentThinkingChanged\`](#onagentthinkingchanged)   | Called when the agent's thinking state changes.                      |
| [\`onAgentSpeakingChanged\`](#onagentspeakingchanged)   | Called when the agent's speaking state changes.                      |
| [\`onAgentInterrupted\`](#onagentinterrupted)           | The callback triggered when an interrupt event occurs.               |
| [\`onAgentMetrics\`](#onagentmetrics)                   | A callback that is triggered when performance metrics are available. |
| [\`onAgentError\`](#onagenterror)                       | Callback when an error occurs in the AI module.                      |
| [\`onTranscriptUpdated\`](#ontranscriptupdated)         | Transcription content update callback.                               |

### \`onMessageError\` [#onmessageerror]

This callback is triggered when an error occurs during message processing. For example, if sending a chat message fails, an error message is returned.

\`\`\`objc
@objc func onMessageError(agentUserId: String, error: MessageError)
\`\`\`

| Parameter     | Type           | Description                                                                   |
| ------------- | -------------- | ----------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`       | RTM user ID of the agent.                                                     |
| \`error\`       | \`MessageError\` | [\`MessageError\`](#messageerror) object containing the error type and details. |

### \`onMessageReceiptUpdated\` [#onmessagereceiptupdated]

Image message information update callback.

This callback is triggered when an image is processed in a session and provides image metadata.

\`\`\`objc
@objc func onMessageReceiptUpdated(agentUserId: String, messageReceipt: MessageReceipt)
\`\`\`

| Parameter        | Type             | Description                                                                                                                   |
| ---------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| \`agentUserId\`    | \`String\`         | RTM user ID of the agent.                                                                                                     |
| \`messageReceipt\` | \`MessageReceipt\` | Message receipt containing the type, module, and image information. See [\`MessageReceipt\`](#messagereceipt) for more details. |

### \`onUserManualSosEvent\` [#onusermanualsosevent]

Manual SoS result callback.

Receives the server's processing result for a manual SoS request. Both success and failure results are returned through this callback — check \`event.payload.success\` to determine the outcome.

This callback has a default empty implementation, so existing integrations do not need to implement it.

\`\`\`objc
@objc optional func onUserManualSosEvent(agentUserId: String, event: UserManualSosEvent)
\`\`\`

| Parameter     | Type                 | Description                                                               |
| ------------- | -------------------- | ------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`             | The RTM user ID of the agent.                                             |
| \`event\`       | \`UserManualSosEvent\` | Manual SoS event object. See [\`UserManualSosEvent\`](#usermanualsosevent). |

### \`onUserManualEosEvent\` [#onusermanualeosevent]

Manual EoS result callback.

Receives the server's processing result for a manual EoS request. Both success and failure results are returned through this callback — check \`event.payload.success\` to determine the outcome.

This callback has a default empty implementation, so existing integrations do not need to implement it.

\`\`\`objc
@objc optional func onUserManualEosEvent(agentUserId: String, event: UserManualEosEvent)
\`\`\`

| Parameter     | Type                 | Description                                                               |
| ------------- | -------------------- | ------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`             | The RTM user ID of the agent.                                             |
| \`event\`       | \`UserManualEosEvent\` | Manual EoS event object. See [\`UserManualEosEvent\`](#usermanualeosevent). |

### \`onAgentManualEosEvent\` [#onagentmanualeosevent]

Server-triggered automatic EoS notification callback.

Triggered when a user's single speaking turn exceeds the server-side duration threshold. In this case, the server ends the current user's turn on its own and notifies the client through this callback. This event is not a result of calling \`manualEOS()\`.

This callback has a default empty implementation, so existing integrations do not need to implement it.

\`\`\`objc
@objc optional func onAgentManualEosEvent(agentUserId: String, event: AgentManualEosEvent)
\`\`\`

| Parameter     | Type                  | Description                                                                                     |
| ------------- | --------------------- | ----------------------------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`              | The RTM user ID of the agent.                                                                   |
| \`event\`       | \`AgentManualEosEvent\` | Server-triggered automatic EoS event object. See [\`AgentManualEosEvent\`](#agentmanualeosevent). |

### \`onAgentStateChanged\` [#onagentstatechanged]

Callback when the agent status changes.

This callback is triggered when the agent state changes, such as switching from idle to silent, listening, thinking, or speaking. You can use this callback to update the user interface or track the flow of the conversation.

\`\`\`objc
@objc func onAgentStateChanged(agentUserId: String, event: StateChangeEvent)
\`\`\`

| Parameter     | Type               | Description                                                                                                               |
| ------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`           | The RTM user ID of the agent.                                                                                             |
| \`event\`       | \`StateChangeEvent\` | Agent status change event, including status, round ID, timestamp and reason. See [\`StateChangeEvent\`](#statechangeevent). |

### \`onAgentListeningChanged\` [#onagentlisteningchanged]

Triggered when the agent's listening state changes.

This callback is a fine-grained complement to \`onAgentStateChanged\`, used to monitor whether the agent has started or stopped listening to user input.

\`\`\`objc
@objc optional func onAgentListeningChanged(agentUserId: String, isListening: Bool)
\`\`\`

| Parameter     | Type     | Description                                          |
| ------------- | -------- | ---------------------------------------------------- |
| \`agentUserId\` | \`String\` | The RTM user ID of the agent.                        |
| \`isListening\` | \`Bool\`   | Whether the agent is currently in a listening state. |

### \`onAgentThinkingChanged\` [#onagentthinkingchanged]

Triggered when the agent's thinking state changes.

This callback is a fine-grained complement to \`onAgentStateChanged\`, used to monitor whether the agent has started or stopped processing a request.

\`\`\`objc
@objc optional func onAgentThinkingChanged(agentUserId: String, isThinking: Bool)
\`\`\`

| Parameter     | Type     | Description                                         |
| ------------- | -------- | --------------------------------------------------- |
| \`agentUserId\` | \`String\` | The RTM user ID of the agent.                       |
| \`isThinking\`  | \`Bool\`   | Whether the agent is currently in a thinking state. |

### \`onAgentSpeakingChanged\` [#onagentspeakingchanged]

Triggered when the agent's speaking state changes.

This callback is a fine-grained complement to \`onAgentStateChanged\`, used to monitor whether the agent has started or stopped playing back speech.

\`\`\`objc
@objc optional func onAgentSpeakingChanged(agentUserId: String, isSpeaking: Bool)
\`\`\`

| Parameter     | Type     | Description                                         |
| ------------- | -------- | --------------------------------------------------- |
| \`agentUserId\` | \`String\` | The RTM user ID of the agent.                       |
| \`isSpeaking\`  | \`Bool\`   | Whether the agent is currently in a speaking state. |

### \`onAgentInterrupted\` [#onagentinterrupted]

The callback triggered when an interrupt event occurs.

\`\`\`objc
@objc func onAgentInterrupted(agentUserId: String, event: InterruptEvent)
\`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    This callback may not be synchronized with the agent's state. It is not recommended to process business logic in this callback.
  </CalloutDescription>
</CalloutContainer>

| Parameter     | Type             | Description                                                                                 |
| ------------- | ---------------- | ------------------------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`         | The RTM user ID of the agent.                                                               |
| \`event\`       | \`InterruptEvent\` | Interrupt event, including round ID and timestamp. See [\`InterruptEvent\`](#interruptevent). |

### \`onAgentMetrics\` [#onagentmetrics]

A callback that is triggered when performance metrics are available.

This callback provides performance data, such as LLM inference latency and TTS speech synthesis latency, for monitoring system performance.

\`\`\`objc
@objc func onAgentMetrics(agentUserId: String, metrics: Metric)
\`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    This performance indicator callback is not necessarily synchronized with the agent's state, so it is not recommended to process business logic in this callback.
  </CalloutDescription>
</CalloutContainer>

| Parameter     | Type     | Description                                                                          |
| ------------- | -------- | ------------------------------------------------------------------------------------ |
| \`agentUserId\` | \`String\` | The RTM user ID of the agent.                                                        |
| \`metrics\`     | \`Metric\` | Performance indicator, including type, value and timestamp. See [\`Metric\`](#metric). |

### \`onAgentError\` [#onagenterror]

Callback when an error occurs in the AI module.

This callback is called when an error occurs in a module component (such as LLM, TTS, etc.). It can be used for error monitoring, logging, and implementing service degradation strategies.

\`\`\`objc
@objc func onAgentError(agentUserId: String, error: ModuleError)
\`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    This callback is not necessarily synchronized with the state of the agent, so it is not recommended to process business logic in this callback.
  </CalloutDescription>
</CalloutContainer>

| Parameter     | Type          | Description                                                                                               |
| ------------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`      | The RTM user ID of the agent.                                                                             |
| \`error\`       | \`ModuleError\` | Module error, including type, error code, error message and timestamp. See [\`ModuleError\`](#moduleerror). |

### \`onTranscriptUpdated\` [#ontranscriptupdated]

Transcript content update callback.

This callback is triggered when the speech transcript content in the session is updated.

\`\`\`objc
@objc func onTranscriptUpdated(agentUserId: String, transcript: Transcript)
\`\`\`

| Parameter     | Type         | Description                                                                                    |
| ------------- | ------------ | ---------------------------------------------------------------------------------------------- |
| \`agentUserId\` | \`String\`     | The RTM user ID of the agent.                                                                  |
| \`transcript\`  | \`Transcript\` | Transcript data, including text content, status and metadata. See [\`Transcript\`](#transcript). |

## Structures [#structures]

### \`ChatMessage\` [#chatmessage]

Defines a common interface for different types of chat messages.

\`\`\`objc
@objc public protocol ChatMessage {
    var messageType: ChatMessageType { get }
}
\`\`\`

| Parameter     | Type              | Description                                                          |
| ------------- | ----------------- | -------------------------------------------------------------------- |
| \`messageType\` | \`ChatMessageType\` | Message type. See [\`ChatMessageType\`](#chatmessagetype) for details. |

### \`ImageMessage\` [#imagemessage]

Used to send image content to an agent.

Images are displayed as URLs, which are HTTP/HTTPS links pointing to the image file (recommended for large images). Example usage: \`ImageMessage(uuid = "img_123", url = "https://example.com/image.jpg")\`

\`\`\`objc
@objc public class ImageMessage: NSObject, ChatMessage {
    @objc public let messageType: ChatMessageType = .image
    @objc public let uuid: String
    @objc public let url: String?
}
\`\`\`

| Parameter     | Type              | Description                                                                                   |
| ------------- | ----------------- | --------------------------------------------------------------------------------------------- |
| \`messageType\` | \`ChatMessageType\` | Type of the message. See \`ChatMessageType\` for more details.                                  |
| \`uuid\`        | \`String\`          | Unique identifier for the image message. The agent uses this UUID to identify the image.      |
| \`url\`         | \`String?\`         | HTTP/HTTPS link to the image file which the proxy will use to download and process the image. |

### \`MessageReceipt\` [#messagereceipt]

The \`MessageReceipt\` model is used to track message processing status and metadata.

\`\`\`objc
@objc public class MessageReceipt: NSObject {
    @objc public let moduleType: ModuleType
    @objc public let messageType: ChatMessageType
    @objc public let message: String
    @objc public let turnId: Int
}
\`\`\`

| Parameter     | Type              | Description                                                            |
| ------------- | ----------------- | ---------------------------------------------------------------------- |
| \`moduleType\`  | \`ModuleType\`      | Module type. See \`ModuleType\` for more details.                        |
| \`messageType\` | \`ChatMessageType\` | Type of the message. See \`ChatMessageType\` for more details.           |
| \`message\`     | \`String\`          | Image information.                                                     |
| \`turnId\`      | \`Int\`             | Conversation turn ID, used to identify a specific turn in the session. |

### \`MessageError\` [#messageerror]

A data class for processing and reporting message errors.

Contains the error type, error code, error description, and timestamp.

\`\`\`objc
@objc public class MessageError: NSObject {
    @objc public let type: ChatMessageType
    @objc public let code: Int
    @objc public let message: String
    @objc public let timestamp: TimeInterval
    @objc public init(type: ChatMessageType, code: Int, message: String, timestamp: TimeInterval)
}
\`\`\`

| Parameter   | Type              | Description                                                                                                     |
| ----------- | ----------------- | --------------------------------------------------------------------------------------------------------------- |
| \`type\`      | \`ChatMessageType\` | Message error type. See ChatMessageType.                                                                        |
| \`code\`      | \`Int\`             | Error code to identify specific error conditions.                                                               |
| \`message\`   | \`String\`          | Error description, providing detailed error explanation, usually a JSON string containing resource information. |
| \`timestamp\` | \`TimeInterval\`    | Timestamp of the error (milliseconds since January 1, 1970, UTC).                                               |

### \`UserManualEventPayload\` [#usermanualeventpayload]

Common payload for manual SoS/EoS events.

\`\`\`objc
@objc public class UserManualEventPayload: NSObject {
    @objc public let success: Bool
    @objc public let requestId: String
    @objc public let turnId: Int
    @objc public let errorMessage: String?
}
\`\`\`

| Parameter      | Type      | Description                                                                                                                                        |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`success\`      | \`Bool\`    | Whether the server successfully processed this manual signal.                                                                                      |
| \`requestId\`    | \`String\`  | Request ID, corresponding to the \`requestId\` returned in \`completion\` after calling \`manualSOS\` or \`manualEOS\`.                                    |
| \`turnId\`       | \`Int\`     | The associated conversation turn ID. This field may be empty or hold no valid value if the server's failure callback does not include a \`turn_id\`. |
| \`errorMessage\` | \`String?\` | The raw error message returned by the server. Usually \`nil\` on success.                                                                            |

### \`UserManualSosEvent\` [#usermanualsosevent]

Represents a manual SoS event.

\`\`\`objc
@objc public class UserManualSosEvent: NSObject {
    @objc public let eventId: String
    @objc public let timestamp: TimeInterval
    @objc public let payload: UserManualEventPayload
}
\`\`\`

| Parameter   | Type                     | Description                                                             |
| ----------- | ------------------------ | ----------------------------------------------------------------------- |
| \`eventId\`   | \`String\`                 | Unique event ID.                                                        |
| \`timestamp\` | \`TimeInterval\`           | Event timestamp in milliseconds.                                        |
| \`payload\`   | \`UserManualEventPayload\` | Event payload. See [\`UserManualEventPayload\`](#usermanualeventpayload). |

### \`UserManualEosEvent\` [#usermanualeosevent]

Represents a manual EoS event.

\`\`\`objc
@objc public class UserManualEosEvent: NSObject {
    @objc public let eventId: String
    @objc public let timestamp: TimeInterval
    @objc public let payload: UserManualEventPayload
}
\`\`\`

| Parameter   | Type                     | Description                                                             |
| ----------- | ------------------------ | ----------------------------------------------------------------------- |
| \`eventId\`   | \`String\`                 | Unique event ID.                                                        |
| \`timestamp\` | \`TimeInterval\`           | Event timestamp in milliseconds.                                        |
| \`payload\`   | \`UserManualEventPayload\` | Event payload. See [\`UserManualEventPayload\`](#usermanualeventpayload). |

### \`AgentManualEosPayload\` [#agentmanualeospayload]

Payload for a server-triggered automatic EoS event.

\`\`\`objc
@objc public class AgentManualEosPayload: NSObject {
    @objc public let reason: String
    @objc public let maxDurationMs: Int
    @objc public let turnId: Int
}
\`\`\`

| Parameter       | Type     | Description                                                                   |
| --------------- | -------- | ----------------------------------------------------------------------------- |
| \`reason\`        | \`String\` | The reason the server automatically ended the current user's turn.            |
| \`maxDurationMs\` | \`Int\`    | The configured maximum duration, in milliseconds, for a single speaking turn. |
| \`turnId\`        | \`Int\`    | The associated conversation turn ID.                                          |

### \`AgentManualEosEvent\` [#agentmanualeosevent]

Represents a server-triggered automatic EoS event.

\`\`\`objc
@objc public class AgentManualEosEvent: NSObject {
    @objc public let eventId: String
    @objc public let timestamp: TimeInterval
    @objc public let payload: AgentManualEosPayload
}
\`\`\`

| Parameter   | Type                    | Description                                                           |
| ----------- | ----------------------- | --------------------------------------------------------------------- |
| \`eventId\`   | \`String\`                | Unique event ID.                                                      |
| \`timestamp\` | \`TimeInterval\`          | Event timestamp in milliseconds.                                      |
| \`payload\`   | \`AgentManualEosPayload\` | Event payload. See [\`AgentManualEosPayload\`](#agentmanualeospayload). |

### \`TextMessage\` [#textmessage]

Used to send natural language text content to an agent.

Supports priority control and interruptibility settings, enabling fine-grained control over how the AI processes and responds to text input.

\`\`\`objc
@objc public class TextMessage: NSObject, ChatMessage {
    @objc public let messageType: ChatMessageType = .text
    @objc public let priority: Priority
    @objc public let responseInterruptable: Bool
    @objc public let text: String?
}
\`\`\`

| Parameter               | Type              | Description                                                                                                                                                                                 |
| ----------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`messageType\`           | \`ChatMessageType\` | Message type. See [\`ChatMessageType\`](#chatmessagetype).                                                                                                                                    |
| \`priority\`              | \`Priority\`        | Message handling priority. See \`Priority\`.                                                                                                                                                  |
| \`responseInterruptable\` | \`Bool\`            | Whether the response to this message can be interrupted by a higher-priority message. \`YES\` (default) means the response can be interrupted. \`NO\` means the response cannot be interrupted. |
| \`text\`                  | \`String?\`         | Text content of the message.                                                                                                                                                                |

### \`SpeakMessage\` [#speakmessage]

Used to bypass the LLM and speak text directly through the agent's TTS pipeline.

\`\`\`objc
@objc public class SpeakMessage: NSObject {
    @objc public let text: String
    @objc public let priority: Priority
    @objc public let interruptable: Bool
}
\`\`\`

| Parameter       | Type       | Description                                                                                          |
| --------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| \`text\`          | \`String\`   | The text to speak.                                                                                   |
| \`priority\`      | \`Priority\` | The priority for handling this speak request. Defaults to \`.interrupt\`. See [\`Priority\`](#priority). |
| \`interruptable\` | \`Bool\`     | Whether the user can interrupt this speech by talking. Defaults to \`true\`.                           |

### \`ThinkMessage\` [#thinkmessage]

Used to inject text as user input for the LLM to process.

\`\`\`objc
@objc public class ThinkMessage: NSObject {
    @objc public let text: String
    @objc public let onListeningAction: ThinkListeningAction
    @objc public let onThinkingAction: ThinkThinkingAction
    @objc public let onSpeakingAction: ThinkSpeakingAction
    @objc public let interruptable: Bool
    @objc public let metadata: [String: String]?
}
\`\`\`

| Parameter           | Type                   | Description                                                                                                                               |
| ------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| \`text\`              | \`String\`               | The instruction text to inject for the LLM.                                                                                               |
| \`onListeningAction\` | \`ThinkListeningAction\` | The action to take when the agent is in a listening state. Defaults to \`.interrupt\`. See [\`ThinkListeningAction\`](#thinklisteningaction). |
| \`onThinkingAction\`  | \`ThinkThinkingAction\`  | The action to take when the agent is in a thinking state. Defaults to \`.ignore\`. See [\`ThinkThinkingAction\`](#thinkthinkingaction).       |
| \`onSpeakingAction\`  | \`ThinkSpeakingAction\`  | The action to take when the agent is in a speaking state. Defaults to \`.ignore\`. See [\`ThinkSpeakingAction\`](#thinkspeakingaction).       |
| \`interruptable\`     | \`Bool\`                 | Whether the user can interrupt the response generated by this instruction by talking. Defaults to \`true\`.                                 |
| \`metadata\`          | \`[String: String]?\`    | Optional custom key-value pairs. When \`nil\`, no metadata is written to the RTM message.                                                   |

### \`StateChangeEvent\` [#statechangeevent]

Indicates an agent state change event, including complete state information and timestamp.

Used to track session flow and update UI status indicators.

\`\`\`objc
@objc public class StateChangeEvent: NSObject {
    @objc public let state: AgentState
    @objc public let turnId: Int
    @objc public let timestamp: TimeInterval
    @objc public let reason: String
    
    @objc public init(state: AgentState, turnId: Int, timestamp: TimeInterval, reason: String)
    
    public override var description: String {
        return "StateChangeEvent(state: \\(state), turnId: \\(turnId), timestamp: \\(timestamp), reason: \\(reason))"
    }
}
\`\`\`

| Parameter   | Type                        | Description                                                       |
| ----------- | --------------------------- | ----------------------------------------------------------------- |
| \`state\`     | [\`AgentState\`](#agentstate) | Current agent state. See [\`AgentState\`](#agentstate).             |
| \`turnId\`    | \`Int\`                       | Session round ID, used to identify a specific session round.      |
| \`timestamp\` | \`TimeInterval\`              | Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC). |
| \`reason\`    | \`String\`                    | The reason for the status change.                                 |

### \`InterruptEvent\` [#interruptevent]

Indicates a session interruption event.

It is usually triggered when the user actively interrupts the AI speech or the system detects a high-priority message. It is used to record the interruption behavior and perform corresponding processing.

\`\`\`objc
@objc public class InterruptEvent: NSObject {
    @objc public let turnId: Int
    @objc public let timestamp: TimeInterval

    @objc public init(turnId: Int, timestamp: TimeInterval) {
        self.turnId = turnId
        self.timestamp = timestamp
    }

    public override var description: String {
        return "InterruptEvent(turnId: \\(turnId), timestamp: \\(timestamp))"
    }
}
\`\`\`

| Parameter   | Type           | Description                                                       |
| ----------- | -------------- | ----------------------------------------------------------------- |
| \`turnId\`    | \`Int\`          | The ID of the interrupted session round.                          |
| \`timestamp\` | \`TimeInterval\` | Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC). |

### \`Metric\` [#metric]

Used to record and transmit system performance data.

For example, LLM inference delay, TTS synthesis delay, etc. This data can be used for performance monitoring, system optimization, and user experience improvement.

\`\`\`objc
@objc public class Metric: NSObject {
    @objc public let type: ModuleType
    @objc public let name: String
    @objc public let value: Double
    @objc public let timestamp: TimeInterval
    
    @objc public init(type: ModuleType, name: String, value: Double, timestamp: TimeInterval)
    
    public override var description: String {
        return "Metric(type: \\(type.stringValue), name: \\(name), value: \\(value), timestamp: \\(timestamp))"
    }
}
\`\`\`

| Parameter   | Type                        | Description                                                                 |
| ----------- | --------------------------- | --------------------------------------------------------------------------- |
| \`type\`      | [\`ModuleType\`](#moduletype) | Indicator type. See [\`ModuleType\`](#moduletype).                            |
| \`name\`      | \`String\`                    | The indicator name of a specific performance item.                          |
| \`value\`     | \`Double\`                    | Metric value, usually latency (milliseconds) or other quantitative metrics. |
| \`timestamp\` | \`TimeInterval\`              | Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC).           |

### \`ModuleError\` [#moduleerror]

Used to process and report AI module related error information.

Contains error type, error code, error description, and timestamp to facilitate error monitoring, logging, and troubleshooting.

\`\`\`objc
@objc public class ModuleError: NSObject {
    @objc public let type: ModuleType
    @objc public let code: Int
    @objc public let message: String
    @objc public let timestamp: TimeInterval

    @objc public init(type: ModuleType, code: Int, message: String, timestamp: TimeInterval) {
        self.type = type
        self.code = code
        self.message = message
        self.timestamp = timestamp
    }

    public override var description: String {
        return "ModuleError(type: \\(type.stringValue), code: \\(code), message: \\(message), timestamp: \\(timestamp))"
    }
}
\`\`\`

| Parameter   | Type                        | Description                                                       |
| ----------- | --------------------------- | ----------------------------------------------------------------- |
| \`type\`      | [\`ModuleType\`](#moduletype) | Error type. See [\`ModuleType\`](#moduletype).                      |
| \`code\`      | \`Int\`                       | Error codes that identify specific error conditions.              |
| \`message\`   | \`String\`                    | Provides an error description that details the error.             |
| \`timestamp\` | \`TimeInterval\`              | Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC). |

### \`Transcript\` [#transcript]

Used to represent a user-visible transcript message.

Complete data class for rendering transcripts at the UI level.

\`\`\`objc
@objc public class Transcript: NSObject {
   @objc public let turnId: Int
   @objc public let userId: String
   @objc public let text: String
   @objc public var status: TranscriptStatus
   @objc public var type: TranscriptType
}
\`\`\`

| Parameter | Type               | Description                                                                              |
| --------- | ------------------ | ---------------------------------------------------------------------------------------- |
| \`turnId\`  | \`Int\`              | Unique identifier for the session turn.                                                  |
| \`userId\`  | \`String\`           | The user identifier associated with this transcript.                                     |
| \`text\`    | \`String\`           | The actual transcript text content.                                                      |
| \`status\`  | \`TranscriptStatus\` | The current status of the transcription. See [\`TranscriptStatus\`](#transcriptstatus).    |
| \`type\`    | \`TranscriptType\`   | The current type of transcript (agent or user). See [\`TranscriptType\`](#transcripttype). |

### \`ConversationalAIAPIConfig\` [#conversationalaiapiconfig]

Conversational AI API initialization configuration class.

Contains the configuration parameters required for Conversational AI API initialization, including \`rtcEngine\` for audio and video communication, \`rtmEngine\` for message communication, and transcript rendering mode settings.

\`\`\`objc
@objc public class ConversationalAIAPIConfig: NSObject {
    @objc public weak var rtcEngine: AgoraRtcEngineKit?
    @objc public weak var rtmEngine: AgoraRtmClientKit?
    @objc public var renderMode: TranscriptRenderMode
    @objc public var enableLog: Bool
    @objc public var enableRenderModeFallback: Bool
}
\`\`\`

| Parameter                  | Type                   | Description                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`rtcEngine\`                | \`AgoraRtcEngineKit?\`   | Engine instance used for audio and video communication. See [\`AgoraRtcEngineKit\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/API/class_agorartcenginekit.html).                                                                                                                                                                                                                          |
| \`rtmEngine\`                | \`AgoraRtmClientKit?\`   | Client instance for real-time messaging. See the [Signaling iOS API reference](https://agoraio.github.io/AgoraRtm_Apple/documentation/agorartm).                                                                                                                                                                                                                                            |
| \`renderMode\`               | \`TranscriptRenderMode\` | Transcript rendering mode. See [\`TranscriptRenderMode\`](#transcriptrendermode).                                                                                                                                                                                                                                                                                                             |
| \`enableLog\`                | \`Bool\`                 | Whether to enable verbose logging. \`YES\` enables verbose logging. \`NO\` (default) disables logging.                                                                                                                                                                                                                                                                                          |
| \`enableRenderModeFallback\` | \`Bool\`                 | Whether to automatically fall back to text rendering when \`renderMode\` is set to word-level but the server doesn't provide word-level timing data. If \`YES\` (default), the component falls back to text mode automatically. If \`NO\`, the component stays in word mode regardless — this can result in no transcript being displayed if the server doesn't support word-level transcription. |

### \`ConversationalAIAPIError\` [#conversationalaiapierror]

Class for logging and communicating error information.

\`\`\`objc
@objc public class ConversationalAIAPIError: NSObject {
    @objc public let type: ConversationalAIAPIErrorType
    @objc public let code: Int
    @objc public let message: String

    @objc public init(type: ConversationalAIAPIErrorType, code: Int, message: String) {
        self.type = type
        self.code = code
        self.message = message
    }

    public override var description: String {
        return "ConversationalAIAPIError(type: \\(type), code: \\(code), message: \\(message))"
    }
}
\`\`\`

| Property  | Type                           | Description                                                                      |
| --------- | ------------------------------ | -------------------------------------------------------------------------------- |
| \`type\`    | \`ConversationalAIAPIErrorType\` | Error type. See [\`ConversationalAIAPIErrorType\`](#conversationalaiapierrortype). |
| \`code\`    | \`Int\`                          | Error codes that identify specific error conditions.                             |
| \`message\` | \`String\`                       | Provides an error description that details the error.                            |

## Enum classes [#enum-classes]

### \`ChatMessageType\` [#chatmessagetype]

Message type enumeration.

Used to distinguish different message types within a session.

| Value     | Description                |
| --------- | -------------------------- |
| \`text\`    | (0): Text message type.    |
| \`image\`   | (1): Image message type.   |
| \`unknown\` | (2): Unknown message type. |

### \`Priority\` [#priority]

Controls the priority with which the agent processes messages.

| Value       | Description                                                                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`interrupt\` | (0): High priority. The agent will immediately interrupt the current interaction and process the message. Suitable for urgent or time-sensitive messages. |
| \`append\`    | (1): Medium priority. The agent will queue the message after the current interaction is completed, suitable for subsequent questions.                     |
| \`ignore\`    | (2): Low priority. If the agent is currently interacting, the message will be discarded and only processed when idle, suitable for optional content.      |

### \`ThinkListeningAction\` [#thinklisteningaction]

The action to take when the agent is in a listening state when a Think instruction arrives.

| Value       | Description                                                                          |
| ----------- | ------------------------------------------------------------------------------------ |
| \`inject\`    | (0): Injects the instruction into the current turn without interrupting it.          |
| \`interrupt\` | (1): Interrupts the current interaction and processes the instruction.               |
| \`append\`    | (2): Appends the instruction for processing after the current interaction completes. |
| \`ignore\`    | (3): Ignores the instruction.                                                        |

### \`ThinkThinkingAction\` [#thinkthinkingaction]

The action to take when the agent is in a thinking state when a Think instruction arrives.

| Value       | Description                                                                          |
| ----------- | ------------------------------------------------------------------------------------ |
| \`interrupt\` | (0): Interrupts the current interaction and processes the instruction.               |
| \`append\`    | (1): Appends the instruction for processing after the current interaction completes. |
| \`ignore\`    | (2): Ignores the instruction.                                                        |

### \`ThinkSpeakingAction\` [#thinkspeakingaction]

The action to take when the agent is in a speaking state when a Think instruction arrives.

| Value       | Description                                                                          |
| ----------- | ------------------------------------------------------------------------------------ |
| \`interrupt\` | (0): Interrupts the current interaction and processes the instruction.               |
| \`append\`    | (1): Appends the instruction for processing after the current interaction completes. |
| \`ignore\`    | (2): Ignores the instruction.                                                        |

### \`AgentState\` [#agentstate]

Represents the different states of the agent during the dialogue.

| Value       | Description                                                                       |
| ----------- | --------------------------------------------------------------------------------- |
| \`idle\`      | (0): Idle state, the agent is not actively processing.                            |
| \`silent\`    | (1): Silent state, the agent remains silent but is ready to listen.               |
| \`listening\` | (2): Listening state, the agent is actively listening to user input.              |
| \`thinking\`  | (3): Thinking state, the agent is processing user input and generating responses. |
| \`speaking\`  | (4): Speaking state, the agent is speaking or outputting audio content.           |
| \`unknown\`   | (5): Unknown state, used for fallback processing of unrecognized states.          |

### \`ModuleType\` [#moduletype]

Represents different types of AI modules for performance monitoring.

| Value     | Description                                     |
| --------- | ----------------------------------------------- |
| \`llm\`     | (0): Reasoning with large language models.      |
| \`mllm\`    | (1): Multimodal large language model reasoning. |
| \`tts\`     | (2): Text-to-speech synthesis.                  |
| \`context\` | (3): Context module type.                       |
| \`unknown\` | (4): Unknown module type.                       |

### \`MessageType\` [#messagetype]

Used to distinguish different types of messages in the session system.

| Value       | Description                       |
| ----------- | --------------------------------- |
| \`metrics\`   | The indicator message type.       |
| \`error\`     | The error message type.           |
| \`assistant\` | AI agent transcript message type. |
| \`user\`      | User transcript message type.     |
| \`interrupt\` | The interrupt message type.       |
| \`state\`     | Status message type.              |
| \`imageInfo\` | Image information message type.   |
| \`unknown\`   | Unknown message type.             |

### \`TranscriptRenderMode\` [#transcriptrendermode]

Transcript rendering mode.

| Value   | Description                                                                                       |
| ------- | ------------------------------------------------------------------------------------------------- |
| \`words\` | (0): Word-by-word transcript rendering mode, updated every time a word is processed.              |
| \`text\`  | (1): Sentence-by-sentence transcript rendering mode, updated when the complete sentence is ready. |

### \`TranscriptType\` [#transcripttype]

Distinguish the source type of the transcribed text.

By identifying whether the transcribed text comes from an agent or a user, it helps manage the conversation flow and interface presentation.

| Value   | Description                                                                                                                                                               |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`agent\` | Transcript generated by the agent. Contains the responses and statements of the agent assistant, and is used to render the agent's voice in the conversational interface. |
| \`user\`  | Transcribed text from the user. Contains the text converted from the user's voice input, which is used to display the user's voice content in the conversation process.   |

### \`TranscriptStatus\` [#transcriptstatus]

Indicates the current state of the transcription in the conversation flow.

Used to track and manage the lifecycle status of transcripts.

| Value         | Description                                                                                                                                                             |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`inprogress\`  | (0): Transcription in progress. This state is set while the transcript is being generated or played, indicating that the content is still being processed or streamed.  |
| \`end\`         | (1): Transcription completed. This status is set when text generation ends normally, indicating the natural end of the transcript segment.                              |
| \`interrupted\` | (2): Transcription interrupted. This state is set when text generation is stopped prematurely, which is applicable when it is interrupted by a higher priority message. |

### \`ConversationalAIAPIErrorType\` [#conversationalaiapierrortype]

Used to distinguish different error types in conversational agent systems.

| Value      | Description                                        |
| ---------- | -------------------------------------------------- |
| \`unknown\`  | (0): Unknown error type.                           |
| \`rtcError\` | (2): RTC (real-time communication) related errors. |
| \`rtmError\` | (3): RTM (Real Time Messaging) related errors.     |
`;
export let structuredData = {
  contents: [{
    heading: "installation",
    content: "Add the toolkit to your project using CocoaPods, Swift Package Manager, or by copying the source code."
  }, {
    heading: "installation",
    content: "Add the following dependency to your `Podfile`:"
  }, {
    heading: "installation",
    content: "In Xcode, add the following package URL and set the version rule to the `2.9.0` tag:"
  }, {
    heading: "installation",
    content: "Copy the `AgoraAgentClientToolkit` sources into your project, then import the toolkit before calling its APIs."
  }, {
    heading: "installation",
    content: "If you encounter library conflicts when integrating multiple Agora SDKs in your iOS project, see handle integration issues."
  }, {
    heading: "installation",
    content: "The iOS toolkit API provides the following classes and methods."
  }, {
    heading: "conversationalaiapi-class",
    content: "API"
  }, {
    heading: "conversationalaiapi-class",
    content: "Description"
  }, {
    heading: "conversationalaiapi-class",
    content: "`chat`"
  }, {
    heading: "conversationalaiapi-class",
    content: "Send a message to the agent."
  }, {
    heading: "conversationalaiapi-class",
    content: "`addHandler`"
  }, {
    heading: "conversationalaiapi-class",
    content: "Add an event handler to receive the callback."
  }, {
    heading: "conversationalaiapi-class",
    content: "`removeHandler`"
  }, {
    heading: "conversationalaiapi-class",
    content: "Removes an event handler."
  }, {
    heading: "conversationalaiapi-class",
    content: "`subscribeMessage`"
  }, {
    heading: "conversationalaiapi-class",
    content: "Subscribe to channel messages."
  }, {
    heading: "conversationalaiapi-class",
    content: "`unsubscribeMessage`"
  }, {
    heading: "conversationalaiapi-class",
    content: "Unsubscribe from channel messages."
  }, {
    heading: "conversationalaiapi-class",
    content: "`interrupt`"
  }, {
    heading: "conversationalaiapi-class",
    content: "Interrupt the agent's current speech or task processing."
  }, {
    heading: "conversationalaiapi-class",
    content: "`manualSOS`"
  }, {
    heading: "conversationalaiapi-class",
    content: "Sends a manual Start of Speech (SoS) signal to the agent."
  }, {
    heading: "conversationalaiapi-class",
    content: "`manualEOS`"
  }, {
    heading: "conversationalaiapi-class",
    content: "Sends a manual End of Speech (EoS) signal to the agent."
  }, {
    heading: "conversationalaiapi-class",
    content: "`speak`"
  }, {
    heading: "conversationalaiapi-class",
    content: "Makes the agent speak text directly, bypassing the LLM."
  }, {
    heading: "conversationalaiapi-class",
    content: "`think`"
  }, {
    heading: "conversationalaiapi-class",
    content: "Injects text as user input for the LLM to process."
  }, {
    heading: "conversationalaiapi-class",
    content: "`loadAudioSettings`\\[1/2]"
  }, {
    heading: "conversationalaiapi-class",
    content: "Set audio best practice parameters for optimal performance."
  }, {
    heading: "conversationalaiapi-class",
    content: "`loadAudioSettings`\\[2/2]"
  }, {
    heading: "conversationalaiapi-class",
    content: "Set audio best practice parameters for specific scenarios."
  }, {
    heading: "conversationalaiapi-class",
    content: "`destroy`"
  }, {
    heading: "conversationalaiapi-class",
    content: "Destroys the API instance and releases all resources."
  }, {
    heading: "chat",
    content: "Sends a message to the agent for processing."
  }, {
    heading: "chat",
    content: "You can use this method to send text and image messages to the agent, and the completion callback indicates the success or failure of the operation."
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
    content: "The RTM user ID of the agent. Must be globally unique."
  }, {
    heading: "chat",
    content: "`message`"
  }, {
    heading: "chat",
    content: "`ChatMessage`"
  }, {
    heading: "chat",
    content: "Message object containing the image URL. See `ChatMessage` for details."
  }, {
    heading: "chat",
    content: "`completion`"
  }, {
    heading: "chat",
    content: "`@escaping (ConversationalAIAPIError?) -> Void`"
  }, {
    heading: "chat",
    content: "Callback function invoked when the operation completes. Returns `nil` on success, or error information on failure. See `ConversationalAIAPIError` for details."
  }, {
    heading: "addhandler",
    content: "Add an event handler to receive the callback."
  }, {
    heading: "addhandler",
    content: "You can register a delegate to receive session events, state changes, and other notifications."
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
    content: "`ConversationalAIAPIEventHandler`"
  }, {
    heading: "addhandler",
    content: "Event handler to implement the `ConversationalAIAPIEventHandler` protocol. See `ConversationalAIAPIEventHandler`."
  }, {
    heading: "removehandler",
    content: "Removes an event handler."
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
    content: "`ConversationalAIAPIEventHandler`"
  }, {
    heading: "removehandler",
    content: "The event handler to remove. See `ConversationalAIAPIEventHandler`."
  }, {
    heading: "subscribemessage",
    content: "Subscribe to channel messages."
  }, {
    heading: "subscribemessage",
    content: "Set channel parameters and register message subscription callbacks. This method is called when the channel changes, usually when the agent starts."
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
    content: "The name of the channel to subscribe to."
  }, {
    heading: "subscribemessage",
    content: "`completion`"
  }, {
    heading: "subscribemessage",
    content: "`(ConversationalAIAPIError?) -> Void`"
  }, {
    heading: "subscribemessage",
    content: "A callback that returns error information when subscription fails. See `ConversationalAIAPIError`."
  }, {
    heading: "unsubscribemessage",
    content: "Unsubscribe from channel messages."
  }, {
    heading: "unsubscribemessage",
    content: "Calling this method can stop receiving messages from the specified channel, which is suitable for scenarios where the connection with the agent is disconnected."
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
    content: "The name of the channel to unsubscribe from."
  }, {
    heading: "unsubscribemessage",
    content: "`completion`"
  }, {
    heading: "unsubscribemessage",
    content: "`(ConversationalAIAPIError?) -> Void`"
  }, {
    heading: "unsubscribemessage",
    content: "The callback after the unsubscription operation is completed. You can get error information through this callback. See `ConversationalAIAPIError`."
  }, {
    heading: "interrupt",
    content: "Interrupt the agent's current ongoing speech or task processing."
  }, {
    heading: "interrupt",
    content: "This method can be used to interrupt an agent that is currently speaking or processing a task."
  }, {
    heading: "interrupt",
    content: "If `error` has a value, it means the message sending failed. If `error` is nil, it means the message was sent successfully, but it does not guarantee that the agent was successfully interrupted."
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
    content: "The RTM user ID of the agent, must be globally unique."
  }, {
    heading: "interrupt",
    content: "`completion`"
  }, {
    heading: "interrupt",
    content: "`(ConversationalAIAPIError?) -> Void`"
  }, {
    heading: "interrupt",
    content: "The callback function when the operation is completed. You can get the result or error information of the operation through the parameters of the callback. See `ConversationalAIAPIError`."
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
    content: "The RTM user ID of the agent. Must be globally unique."
  }, {
    heading: "manualsos",
    content: "`completion`"
  }, {
    heading: "manualsos",
    content: "`@escaping (String, ConversationalAIAPIError?) -> Void`"
  }, {
    heading: "manualsos",
    content: "Callback invoked when the operation completes. The first parameter is the `requestId` unique to this request; the second is error information, or `nil` on success. This callback only indicates whether the RTM publish succeeded."
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
    content: "The RTM user ID of the agent. Must be globally unique."
  }, {
    heading: "manualeos",
    content: "`completion`"
  }, {
    heading: "manualeos",
    content: "`@escaping (String, ConversationalAIAPIError?) -> Void`"
  }, {
    heading: "manualeos",
    content: "Callback invoked when the operation completes. The first parameter is the `requestId` unique to this request; the second is error information, or `nil` on success. This callback only indicates whether the RTM publish succeeded."
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
    content: "The RTM user ID of the agent. Must be globally unique."
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
    content: "`@escaping (ConversationalAIAPIError?) -> Void`"
  }, {
    heading: "speak",
    content: "Callback function invoked when the operation completes. Returns `nil` on success, or error information on failure. See `ConversationalAIAPIError`."
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
    content: "The RTM user ID of the agent. Must be globally unique."
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
    content: "`@escaping (ConversationalAIAPIError?) -> Void`"
  }, {
    heading: "think",
    content: "Callback function invoked when the operation completes. Returns `nil` on success, or error information on failure. See `ConversationalAIAPIError`."
  }, {
    heading: "loadaudiosettings12",
    content: "Set audio best practice parameters for optimal performance."
  }, {
    heading: "loadaudiosettings12",
    content: "Sets the audio parameters needed for optimal performance in agent conversations. By default, `.aiClient` Audio Scene is used."
  }, {
    heading: "loadaudiosettings12",
    content: "To enable audio best practices, you must call this method before each `joinChannel` call."
  }, {
    heading: "loadaudiosettings12",
    content: "**Sample code:**"
  }, {
    heading: "loadaudiosettings22",
    content: "Set audio best practice parameters for specific scenarios."
  }, {
    heading: "loadaudiosettings22",
    content: "This method allows you to configure the audio parameters required for optimal performance in your agent conversations."
  }, {
    heading: "loadaudiosettings22",
    content: "If you need to enable audio best practices, you must call this method before each `joinChannel` call."
  }, {
    heading: "loadaudiosettings22",
    content: "Parameter"
  }, {
    heading: "loadaudiosettings22",
    content: "Type"
  }, {
    heading: "loadaudiosettings22",
    content: "Description"
  }, {
    heading: "loadaudiosettings22",
    content: "`scenario`"
  }, {
    heading: "loadaudiosettings22",
    content: "`AgoraAudioScenario`"
  }, {
    heading: "loadaudiosettings22",
    content: "The audio scenario. See AgoraAudioScenario. If you enable the AI Avatar feature, set the scenario to `default` for better mixing results."
  }, {
    heading: "destroy",
    content: "Destroys the API instance and releases all resources."
  }, {
    heading: "destroy",
    content: "Calling this method destroys the current API instance and releases all resources. After calling this method, the instance cannot be used again. Please call this method when you no longer need to use the API."
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "API"
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "Description"
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "`onMessageError`"
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "A callback triggered when an error occurs during message processing."
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "`onMessageReceiptUpdated`"
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "Image message information update callback."
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "`onUserManualSosEvent`"
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "Manual SoS result callback."
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "`onUserManualEosEvent`"
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "Manual EoS result callback."
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "`onAgentManualEosEvent`"
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "Server-triggered automatic EoS notification callback."
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "`onAgentStateChanged`"
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "Callback when the agent status changes."
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "`onAgentListeningChanged`"
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "Called when the agent's listening state changes."
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "`onAgentThinkingChanged`"
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "Called when the agent's thinking state changes."
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "`onAgentSpeakingChanged`"
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "Called when the agent's speaking state changes."
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "`onAgentInterrupted`"
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "The callback triggered when an interrupt event occurs."
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "`onAgentMetrics`"
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "A callback that is triggered when performance metrics are available."
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "`onAgentError`"
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "Callback when an error occurs in the AI module."
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "`onTranscriptUpdated`"
  }, {
    heading: "conversationalaiapieventhandler-class",
    content: "Transcription content update callback."
  }, {
    heading: "onmessageerror",
    content: "This callback is triggered when an error occurs during message processing. For example, if sending a chat message fails, an error message is returned."
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
    content: "RTM user ID of the agent."
  }, {
    heading: "onmessageerror",
    content: "`error`"
  }, {
    heading: "onmessageerror",
    content: "`MessageError`"
  }, {
    heading: "onmessageerror",
    content: "`MessageError` object containing the error type and details."
  }, {
    heading: "onmessagereceiptupdated",
    content: "Image message information update callback."
  }, {
    heading: "onmessagereceiptupdated",
    content: "This callback is triggered when an image is processed in a session and provides image metadata."
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
    content: "RTM user ID of the agent."
  }, {
    heading: "onmessagereceiptupdated",
    content: "`messageReceipt`"
  }, {
    heading: "onmessagereceiptupdated",
    content: "`MessageReceipt`"
  }, {
    heading: "onmessagereceiptupdated",
    content: "Message receipt containing the type, module, and image information. See `MessageReceipt` for more details."
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
    content: "The RTM user ID of the agent."
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
    content: "The RTM user ID of the agent."
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
    content: "The RTM user ID of the agent."
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
    content: "Callback when the agent status changes."
  }, {
    heading: "onagentstatechanged",
    content: "This callback is triggered when the agent state changes, such as switching from idle to silent, listening, thinking, or speaking. You can use this callback to update the user interface or track the flow of the conversation."
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
    content: "The RTM user ID of the agent."
  }, {
    heading: "onagentstatechanged",
    content: "`event`"
  }, {
    heading: "onagentstatechanged",
    content: "`StateChangeEvent`"
  }, {
    heading: "onagentstatechanged",
    content: "Agent status change event, including status, round ID, timestamp and reason. See `StateChangeEvent`."
  }, {
    heading: "onagentlisteningchanged",
    content: "Triggered when the agent's listening state changes."
  }, {
    heading: "onagentlisteningchanged",
    content: "This callback is a fine-grained complement to `onAgentStateChanged`, used to monitor whether the agent has started or stopped listening to user input."
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
    content: "The RTM user ID of the agent."
  }, {
    heading: "onagentlisteningchanged",
    content: "`isListening`"
  }, {
    heading: "onagentlisteningchanged",
    content: "`Bool`"
  }, {
    heading: "onagentlisteningchanged",
    content: "Whether the agent is currently in a listening state."
  }, {
    heading: "onagentthinkingchanged",
    content: "Triggered when the agent's thinking state changes."
  }, {
    heading: "onagentthinkingchanged",
    content: "This callback is a fine-grained complement to `onAgentStateChanged`, used to monitor whether the agent has started or stopped processing a request."
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
    content: "The RTM user ID of the agent."
  }, {
    heading: "onagentthinkingchanged",
    content: "`isThinking`"
  }, {
    heading: "onagentthinkingchanged",
    content: "`Bool`"
  }, {
    heading: "onagentthinkingchanged",
    content: "Whether the agent is currently in a thinking state."
  }, {
    heading: "onagentspeakingchanged",
    content: "Triggered when the agent's speaking state changes."
  }, {
    heading: "onagentspeakingchanged",
    content: "This callback is a fine-grained complement to `onAgentStateChanged`, used to monitor whether the agent has started or stopped playing back speech."
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
    content: "The RTM user ID of the agent."
  }, {
    heading: "onagentspeakingchanged",
    content: "`isSpeaking`"
  }, {
    heading: "onagentspeakingchanged",
    content: "`Bool`"
  }, {
    heading: "onagentspeakingchanged",
    content: "Whether the agent is currently in a speaking state."
  }, {
    heading: "onagentinterrupted",
    content: "The callback triggered when an interrupt event occurs."
  }, {
    heading: "onagentinterrupted",
    content: "This callback may not be synchronized with the agent's state. It is not recommended to process business logic in this callback."
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
    content: "The RTM user ID of the agent."
  }, {
    heading: "onagentinterrupted",
    content: "`event`"
  }, {
    heading: "onagentinterrupted",
    content: "`InterruptEvent`"
  }, {
    heading: "onagentinterrupted",
    content: "Interrupt event, including round ID and timestamp. See `InterruptEvent`."
  }, {
    heading: "onagentmetrics",
    content: "A callback that is triggered when performance metrics are available."
  }, {
    heading: "onagentmetrics",
    content: "This callback provides performance data, such as LLM inference latency and TTS speech synthesis latency, for monitoring system performance."
  }, {
    heading: "onagentmetrics",
    content: "This performance indicator callback is not necessarily synchronized with the agent's state, so it is not recommended to process business logic in this callback."
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
    content: "The RTM user ID of the agent."
  }, {
    heading: "onagentmetrics",
    content: "`metrics`"
  }, {
    heading: "onagentmetrics",
    content: "`Metric`"
  }, {
    heading: "onagentmetrics",
    content: "Performance indicator, including type, value and timestamp. See `Metric`."
  }, {
    heading: "onagenterror",
    content: "Callback when an error occurs in the AI module."
  }, {
    heading: "onagenterror",
    content: "This callback is called when an error occurs in a module component (such as LLM, TTS, etc.). It can be used for error monitoring, logging, and implementing service degradation strategies."
  }, {
    heading: "onagenterror",
    content: "This callback is not necessarily synchronized with the state of the agent, so it is not recommended to process business logic in this callback."
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
    content: "The RTM user ID of the agent."
  }, {
    heading: "onagenterror",
    content: "`error`"
  }, {
    heading: "onagenterror",
    content: "`ModuleError`"
  }, {
    heading: "onagenterror",
    content: "Module error, including type, error code, error message and timestamp. See `ModuleError`."
  }, {
    heading: "ontranscriptupdated",
    content: "Transcript content update callback."
  }, {
    heading: "ontranscriptupdated",
    content: "This callback is triggered when the speech transcript content in the session is updated."
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
    content: "The RTM user ID of the agent."
  }, {
    heading: "ontranscriptupdated",
    content: "`transcript`"
  }, {
    heading: "ontranscriptupdated",
    content: "`Transcript`"
  }, {
    heading: "ontranscriptupdated",
    content: "Transcript data, including text content, status and metadata. See `Transcript`."
  }, {
    heading: "chatmessage",
    content: "Defines a common interface for different types of chat messages."
  }, {
    heading: "chatmessage",
    content: "Parameter"
  }, {
    heading: "chatmessage",
    content: "Type"
  }, {
    heading: "chatmessage",
    content: "Description"
  }, {
    heading: "chatmessage",
    content: "`messageType`"
  }, {
    heading: "chatmessage",
    content: "`ChatMessageType`"
  }, {
    heading: "chatmessage",
    content: "Message type. See `ChatMessageType` for details."
  }, {
    heading: "imagemessage",
    content: "Used to send image content to an agent."
  }, {
    heading: "imagemessage",
    content: 'Images are displayed as URLs, which are HTTP/HTTPS links pointing to the image file (recommended for large images). Example usage: `ImageMessage(uuid = "img_123", url = "https://example.com/image.jpg")`'
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
    content: "`messageType`"
  }, {
    heading: "imagemessage",
    content: "`ChatMessageType`"
  }, {
    heading: "imagemessage",
    content: "Type of the message. See `ChatMessageType` for more details."
  }, {
    heading: "imagemessage",
    content: "`uuid`"
  }, {
    heading: "imagemessage",
    content: "`String`"
  }, {
    heading: "imagemessage",
    content: "Unique identifier for the image message. The agent uses this UUID to identify the image."
  }, {
    heading: "imagemessage",
    content: "`url`"
  }, {
    heading: "imagemessage",
    content: "`String?`"
  }, {
    heading: "imagemessage",
    content: "HTTP/HTTPS link to the image file which the proxy will use to download and process the image."
  }, {
    heading: "messagereceipt",
    content: "The `MessageReceipt` model is used to track message processing status and metadata."
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
    content: "`moduleType`"
  }, {
    heading: "messagereceipt",
    content: "`ModuleType`"
  }, {
    heading: "messagereceipt",
    content: "Module type. See `ModuleType` for more details."
  }, {
    heading: "messagereceipt",
    content: "`messageType`"
  }, {
    heading: "messagereceipt",
    content: "`ChatMessageType`"
  }, {
    heading: "messagereceipt",
    content: "Type of the message. See `ChatMessageType` for more details."
  }, {
    heading: "messagereceipt",
    content: "`message`"
  }, {
    heading: "messagereceipt",
    content: "`String`"
  }, {
    heading: "messagereceipt",
    content: "Image information."
  }, {
    heading: "messagereceipt",
    content: "`turnId`"
  }, {
    heading: "messagereceipt",
    content: "`Int`"
  }, {
    heading: "messagereceipt",
    content: "Conversation turn ID, used to identify a specific turn in the session."
  }, {
    heading: "messageerror",
    content: "A data class for processing and reporting message errors."
  }, {
    heading: "messageerror",
    content: "Contains the error type, error code, error description, and timestamp."
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
    content: "`type`"
  }, {
    heading: "messageerror",
    content: "`ChatMessageType`"
  }, {
    heading: "messageerror",
    content: "Message error type. See ChatMessageType."
  }, {
    heading: "messageerror",
    content: "`code`"
  }, {
    heading: "messageerror",
    content: "`Int`"
  }, {
    heading: "messageerror",
    content: "Error code to identify specific error conditions."
  }, {
    heading: "messageerror",
    content: "`message`"
  }, {
    heading: "messageerror",
    content: "`String`"
  }, {
    heading: "messageerror",
    content: "Error description, providing detailed error explanation, usually a JSON string containing resource information."
  }, {
    heading: "messageerror",
    content: "`timestamp`"
  }, {
    heading: "messageerror",
    content: "`TimeInterval`"
  }, {
    heading: "messageerror",
    content: "Timestamp of the error (milliseconds since January 1, 1970, UTC)."
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
    content: "`Bool`"
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
    content: "`Int`"
  }, {
    heading: "usermanualeventpayload",
    content: "The associated conversation turn ID. This field may be empty or hold no valid value if the server's failure callback does not include a `turn_id`."
  }, {
    heading: "usermanualeventpayload",
    content: "`errorMessage`"
  }, {
    heading: "usermanualeventpayload",
    content: "`String?`"
  }, {
    heading: "usermanualeventpayload",
    content: "The raw error message returned by the server. Usually `nil` on success."
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
    content: "`TimeInterval`"
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
    content: "`TimeInterval`"
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
    content: "`Int`"
  }, {
    heading: "agentmanualeospayload",
    content: "The configured maximum duration, in milliseconds, for a single speaking turn."
  }, {
    heading: "agentmanualeospayload",
    content: "`turnId`"
  }, {
    heading: "agentmanualeospayload",
    content: "`Int`"
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
    content: "`TimeInterval`"
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
    heading: "textmessage",
    content: "Used to send natural language text content to an agent."
  }, {
    heading: "textmessage",
    content: "Supports priority control and interruptibility settings, enabling fine-grained control over how the AI processes and responds to text input."
  }, {
    heading: "textmessage",
    content: "Parameter"
  }, {
    heading: "textmessage",
    content: "Type"
  }, {
    heading: "textmessage",
    content: "Description"
  }, {
    heading: "textmessage",
    content: "`messageType`"
  }, {
    heading: "textmessage",
    content: "`ChatMessageType`"
  }, {
    heading: "textmessage",
    content: "Message type. See `ChatMessageType`."
  }, {
    heading: "textmessage",
    content: "`priority`"
  }, {
    heading: "textmessage",
    content: "`Priority`"
  }, {
    heading: "textmessage",
    content: "Message handling priority. See `Priority`."
  }, {
    heading: "textmessage",
    content: "`responseInterruptable`"
  }, {
    heading: "textmessage",
    content: "`Bool`"
  }, {
    heading: "textmessage",
    content: "Whether the response to this message can be interrupted by a higher-priority message. `YES` (default) means the response can be interrupted. `NO` means the response cannot be interrupted."
  }, {
    heading: "textmessage",
    content: "`text`"
  }, {
    heading: "textmessage",
    content: "`String?`"
  }, {
    heading: "textmessage",
    content: "Text content of the message."
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
    content: "The priority for handling this speak request. Defaults to `.interrupt`. See `Priority`."
  }, {
    heading: "speakmessage",
    content: "`interruptable`"
  }, {
    heading: "speakmessage",
    content: "`Bool`"
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
    content: "The action to take when the agent is in a listening state. Defaults to `.interrupt`. See `ThinkListeningAction`."
  }, {
    heading: "thinkmessage",
    content: "`onThinkingAction`"
  }, {
    heading: "thinkmessage",
    content: "`ThinkThinkingAction`"
  }, {
    heading: "thinkmessage",
    content: "The action to take when the agent is in a thinking state. Defaults to `.ignore`. See `ThinkThinkingAction`."
  }, {
    heading: "thinkmessage",
    content: "`onSpeakingAction`"
  }, {
    heading: "thinkmessage",
    content: "`ThinkSpeakingAction`"
  }, {
    heading: "thinkmessage",
    content: "The action to take when the agent is in a speaking state. Defaults to `.ignore`. See `ThinkSpeakingAction`."
  }, {
    heading: "thinkmessage",
    content: "`interruptable`"
  }, {
    heading: "thinkmessage",
    content: "`Bool`"
  }, {
    heading: "thinkmessage",
    content: "Whether the user can interrupt the response generated by this instruction by talking. Defaults to `true`."
  }, {
    heading: "thinkmessage",
    content: "`metadata`"
  }, {
    heading: "thinkmessage",
    content: "`[String: String]?`"
  }, {
    heading: "thinkmessage",
    content: "Optional custom key-value pairs. When `nil`, no metadata is written to the RTM message."
  }, {
    heading: "statechangeevent",
    content: "Indicates an agent state change event, including complete state information and timestamp."
  }, {
    heading: "statechangeevent",
    content: "Used to track session flow and update UI status indicators."
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
    content: "Current agent state. See `AgentState`."
  }, {
    heading: "statechangeevent",
    content: "`turnId`"
  }, {
    heading: "statechangeevent",
    content: "`Int`"
  }, {
    heading: "statechangeevent",
    content: "Session round ID, used to identify a specific session round."
  }, {
    heading: "statechangeevent",
    content: "`timestamp`"
  }, {
    heading: "statechangeevent",
    content: "`TimeInterval`"
  }, {
    heading: "statechangeevent",
    content: "Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC)."
  }, {
    heading: "statechangeevent",
    content: "`reason`"
  }, {
    heading: "statechangeevent",
    content: "`String`"
  }, {
    heading: "statechangeevent",
    content: "The reason for the status change."
  }, {
    heading: "interruptevent",
    content: "Indicates a session interruption event."
  }, {
    heading: "interruptevent",
    content: "It is usually triggered when the user actively interrupts the AI speech or the system detects a high-priority message. It is used to record the interruption behavior and perform corresponding processing."
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
    content: "`Int`"
  }, {
    heading: "interruptevent",
    content: "The ID of the interrupted session round."
  }, {
    heading: "interruptevent",
    content: "`timestamp`"
  }, {
    heading: "interruptevent",
    content: "`TimeInterval`"
  }, {
    heading: "interruptevent",
    content: "Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC)."
  }, {
    heading: "metric",
    content: "Used to record and transmit system performance data."
  }, {
    heading: "metric",
    content: "For example, LLM inference delay, TTS synthesis delay, etc. This data can be used for performance monitoring, system optimization, and user experience improvement."
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
    content: "Indicator type. See `ModuleType`."
  }, {
    heading: "metric",
    content: "`name`"
  }, {
    heading: "metric",
    content: "`String`"
  }, {
    heading: "metric",
    content: "The indicator name of a specific performance item."
  }, {
    heading: "metric",
    content: "`value`"
  }, {
    heading: "metric",
    content: "`Double`"
  }, {
    heading: "metric",
    content: "Metric value, usually latency (milliseconds) or other quantitative metrics."
  }, {
    heading: "metric",
    content: "`timestamp`"
  }, {
    heading: "metric",
    content: "`TimeInterval`"
  }, {
    heading: "metric",
    content: "Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC)."
  }, {
    heading: "moduleerror",
    content: "Used to process and report AI module related error information."
  }, {
    heading: "moduleerror",
    content: "Contains error type, error code, error description, and timestamp to facilitate error monitoring, logging, and troubleshooting."
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
    content: "Error type. See `ModuleType`."
  }, {
    heading: "moduleerror",
    content: "`code`"
  }, {
    heading: "moduleerror",
    content: "`Int`"
  }, {
    heading: "moduleerror",
    content: "Error codes that identify specific error conditions."
  }, {
    heading: "moduleerror",
    content: "`message`"
  }, {
    heading: "moduleerror",
    content: "`String`"
  }, {
    heading: "moduleerror",
    content: "Provides an error description that details the error."
  }, {
    heading: "moduleerror",
    content: "`timestamp`"
  }, {
    heading: "moduleerror",
    content: "`TimeInterval`"
  }, {
    heading: "moduleerror",
    content: "Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC)."
  }, {
    heading: "transcript",
    content: "Used to represent a user-visible transcript message."
  }, {
    heading: "transcript",
    content: "Complete data class for rendering transcripts at the UI level."
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
    content: "`Int`"
  }, {
    heading: "transcript",
    content: "Unique identifier for the session turn."
  }, {
    heading: "transcript",
    content: "`userId`"
  }, {
    heading: "transcript",
    content: "`String`"
  }, {
    heading: "transcript",
    content: "The user identifier associated with this transcript."
  }, {
    heading: "transcript",
    content: "`text`"
  }, {
    heading: "transcript",
    content: "`String`"
  }, {
    heading: "transcript",
    content: "The actual transcript text content."
  }, {
    heading: "transcript",
    content: "`status`"
  }, {
    heading: "transcript",
    content: "`TranscriptStatus`"
  }, {
    heading: "transcript",
    content: "The current status of the transcription. See `TranscriptStatus`."
  }, {
    heading: "transcript",
    content: "`type`"
  }, {
    heading: "transcript",
    content: "`TranscriptType`"
  }, {
    heading: "transcript",
    content: "The current type of transcript (agent or user). See `TranscriptType`."
  }, {
    heading: "conversationalaiapiconfig",
    content: "Conversational AI API initialization configuration class."
  }, {
    heading: "conversationalaiapiconfig",
    content: "Contains the configuration parameters required for Conversational AI API initialization, including `rtcEngine` for audio and video communication, `rtmEngine` for message communication, and transcript rendering mode settings."
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
    content: "`AgoraRtcEngineKit?`"
  }, {
    heading: "conversationalaiapiconfig",
    content: "Engine instance used for audio and video communication. See `AgoraRtcEngineKit`."
  }, {
    heading: "conversationalaiapiconfig",
    content: "`rtmEngine`"
  }, {
    heading: "conversationalaiapiconfig",
    content: "`AgoraRtmClientKit?`"
  }, {
    heading: "conversationalaiapiconfig",
    content: "Client instance for real-time messaging. See the Signaling iOS API reference."
  }, {
    heading: "conversationalaiapiconfig",
    content: "`renderMode`"
  }, {
    heading: "conversationalaiapiconfig",
    content: "`TranscriptRenderMode`"
  }, {
    heading: "conversationalaiapiconfig",
    content: "Transcript rendering mode. See `TranscriptRenderMode`."
  }, {
    heading: "conversationalaiapiconfig",
    content: "`enableLog`"
  }, {
    heading: "conversationalaiapiconfig",
    content: "`Bool`"
  }, {
    heading: "conversationalaiapiconfig",
    content: "Whether to enable verbose logging. `YES` enables verbose logging. `NO` (default) disables logging."
  }, {
    heading: "conversationalaiapiconfig",
    content: "`enableRenderModeFallback`"
  }, {
    heading: "conversationalaiapiconfig",
    content: "`Bool`"
  }, {
    heading: "conversationalaiapiconfig",
    content: "Whether to automatically fall back to text rendering when `renderMode` is set to word-level but the server doesn't provide word-level timing data. If `YES` (default), the component falls back to text mode automatically. If `NO`, the component stays in word mode regardless — this can result in no transcript being displayed if the server doesn't support word-level transcription."
  }, {
    heading: "conversationalaiapierror",
    content: "Class for logging and communicating error information."
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
    content: "`type`"
  }, {
    heading: "conversationalaiapierror",
    content: "`ConversationalAIAPIErrorType`"
  }, {
    heading: "conversationalaiapierror",
    content: "Error type. See `ConversationalAIAPIErrorType`."
  }, {
    heading: "conversationalaiapierror",
    content: "`code`"
  }, {
    heading: "conversationalaiapierror",
    content: "`Int`"
  }, {
    heading: "conversationalaiapierror",
    content: "Error codes that identify specific error conditions."
  }, {
    heading: "conversationalaiapierror",
    content: "`message`"
  }, {
    heading: "conversationalaiapierror",
    content: "`String`"
  }, {
    heading: "conversationalaiapierror",
    content: "Provides an error description that details the error."
  }, {
    heading: "chatmessagetype",
    content: "Message type enumeration."
  }, {
    heading: "chatmessagetype",
    content: "Used to distinguish different message types within a session."
  }, {
    heading: "chatmessagetype",
    content: "Value"
  }, {
    heading: "chatmessagetype",
    content: "Description"
  }, {
    heading: "chatmessagetype",
    content: "`text`"
  }, {
    heading: "chatmessagetype",
    content: "(0): Text message type."
  }, {
    heading: "chatmessagetype",
    content: "`image`"
  }, {
    heading: "chatmessagetype",
    content: "(1): Image message type."
  }, {
    heading: "chatmessagetype",
    content: "`unknown`"
  }, {
    heading: "chatmessagetype",
    content: "(2): Unknown message type."
  }, {
    heading: "priority",
    content: "Controls the priority with which the agent processes messages."
  }, {
    heading: "priority",
    content: "Value"
  }, {
    heading: "priority",
    content: "Description"
  }, {
    heading: "priority",
    content: "`interrupt`"
  }, {
    heading: "priority",
    content: "(0): High priority. The agent will immediately interrupt the current interaction and process the message. Suitable for urgent or time-sensitive messages."
  }, {
    heading: "priority",
    content: "`append`"
  }, {
    heading: "priority",
    content: "(1): Medium priority. The agent will queue the message after the current interaction is completed, suitable for subsequent questions."
  }, {
    heading: "priority",
    content: "`ignore`"
  }, {
    heading: "priority",
    content: "(2): Low priority. If the agent is currently interacting, the message will be discarded and only processed when idle, suitable for optional content."
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
    content: "`inject`"
  }, {
    heading: "thinklisteningaction",
    content: "(0): Injects the instruction into the current turn without interrupting it."
  }, {
    heading: "thinklisteningaction",
    content: "`interrupt`"
  }, {
    heading: "thinklisteningaction",
    content: "(1): Interrupts the current interaction and processes the instruction."
  }, {
    heading: "thinklisteningaction",
    content: "`append`"
  }, {
    heading: "thinklisteningaction",
    content: "(2): Appends the instruction for processing after the current interaction completes."
  }, {
    heading: "thinklisteningaction",
    content: "`ignore`"
  }, {
    heading: "thinklisteningaction",
    content: "(3): Ignores the instruction."
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
    content: "`interrupt`"
  }, {
    heading: "thinkthinkingaction",
    content: "(0): Interrupts the current interaction and processes the instruction."
  }, {
    heading: "thinkthinkingaction",
    content: "`append`"
  }, {
    heading: "thinkthinkingaction",
    content: "(1): Appends the instruction for processing after the current interaction completes."
  }, {
    heading: "thinkthinkingaction",
    content: "`ignore`"
  }, {
    heading: "thinkthinkingaction",
    content: "(2): Ignores the instruction."
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
    content: "`interrupt`"
  }, {
    heading: "thinkspeakingaction",
    content: "(0): Interrupts the current interaction and processes the instruction."
  }, {
    heading: "thinkspeakingaction",
    content: "`append`"
  }, {
    heading: "thinkspeakingaction",
    content: "(1): Appends the instruction for processing after the current interaction completes."
  }, {
    heading: "thinkspeakingaction",
    content: "`ignore`"
  }, {
    heading: "thinkspeakingaction",
    content: "(2): Ignores the instruction."
  }, {
    heading: "agentstate",
    content: "Represents the different states of the agent during the dialogue."
  }, {
    heading: "agentstate",
    content: "Value"
  }, {
    heading: "agentstate",
    content: "Description"
  }, {
    heading: "agentstate",
    content: "`idle`"
  }, {
    heading: "agentstate",
    content: "(0): Idle state, the agent is not actively processing."
  }, {
    heading: "agentstate",
    content: "`silent`"
  }, {
    heading: "agentstate",
    content: "(1): Silent state, the agent remains silent but is ready to listen."
  }, {
    heading: "agentstate",
    content: "`listening`"
  }, {
    heading: "agentstate",
    content: "(2): Listening state, the agent is actively listening to user input."
  }, {
    heading: "agentstate",
    content: "`thinking`"
  }, {
    heading: "agentstate",
    content: "(3): Thinking state, the agent is processing user input and generating responses."
  }, {
    heading: "agentstate",
    content: "`speaking`"
  }, {
    heading: "agentstate",
    content: "(4): Speaking state, the agent is speaking or outputting audio content."
  }, {
    heading: "agentstate",
    content: "`unknown`"
  }, {
    heading: "agentstate",
    content: "(5): Unknown state, used for fallback processing of unrecognized states."
  }, {
    heading: "moduletype",
    content: "Represents different types of AI modules for performance monitoring."
  }, {
    heading: "moduletype",
    content: "Value"
  }, {
    heading: "moduletype",
    content: "Description"
  }, {
    heading: "moduletype",
    content: "`llm`"
  }, {
    heading: "moduletype",
    content: "(0): Reasoning with large language models."
  }, {
    heading: "moduletype",
    content: "`mllm`"
  }, {
    heading: "moduletype",
    content: "(1): Multimodal large language model reasoning."
  }, {
    heading: "moduletype",
    content: "`tts`"
  }, {
    heading: "moduletype",
    content: "(2): Text-to-speech synthesis."
  }, {
    heading: "moduletype",
    content: "`context`"
  }, {
    heading: "moduletype",
    content: "(3): Context module type."
  }, {
    heading: "moduletype",
    content: "`unknown`"
  }, {
    heading: "moduletype",
    content: "(4): Unknown module type."
  }, {
    heading: "messagetype",
    content: "Used to distinguish different types of messages in the session system."
  }, {
    heading: "messagetype",
    content: "Value"
  }, {
    heading: "messagetype",
    content: "Description"
  }, {
    heading: "messagetype",
    content: "`metrics`"
  }, {
    heading: "messagetype",
    content: "The indicator message type."
  }, {
    heading: "messagetype",
    content: "`error`"
  }, {
    heading: "messagetype",
    content: "The error message type."
  }, {
    heading: "messagetype",
    content: "`assistant`"
  }, {
    heading: "messagetype",
    content: "AI agent transcript message type."
  }, {
    heading: "messagetype",
    content: "`user`"
  }, {
    heading: "messagetype",
    content: "User transcript message type."
  }, {
    heading: "messagetype",
    content: "`interrupt`"
  }, {
    heading: "messagetype",
    content: "The interrupt message type."
  }, {
    heading: "messagetype",
    content: "`state`"
  }, {
    heading: "messagetype",
    content: "Status message type."
  }, {
    heading: "messagetype",
    content: "`imageInfo`"
  }, {
    heading: "messagetype",
    content: "Image information message type."
  }, {
    heading: "messagetype",
    content: "`unknown`"
  }, {
    heading: "messagetype",
    content: "Unknown message type."
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
    content: "`words`"
  }, {
    heading: "transcriptrendermode",
    content: "(0): Word-by-word transcript rendering mode, updated every time a word is processed."
  }, {
    heading: "transcriptrendermode",
    content: "`text`"
  }, {
    heading: "transcriptrendermode",
    content: "(1): Sentence-by-sentence transcript rendering mode, updated when the complete sentence is ready."
  }, {
    heading: "transcripttype",
    content: "Distinguish the source type of the transcribed text."
  }, {
    heading: "transcripttype",
    content: "By identifying whether the transcribed text comes from an agent or a user, it helps manage the conversation flow and interface presentation."
  }, {
    heading: "transcripttype",
    content: "Value"
  }, {
    heading: "transcripttype",
    content: "Description"
  }, {
    heading: "transcripttype",
    content: "`agent`"
  }, {
    heading: "transcripttype",
    content: "Transcript generated by the agent. Contains the responses and statements of the agent assistant, and is used to render the agent's voice in the conversational interface."
  }, {
    heading: "transcripttype",
    content: "`user`"
  }, {
    heading: "transcripttype",
    content: "Transcribed text from the user. Contains the text converted from the user's voice input, which is used to display the user's voice content in the conversation process."
  }, {
    heading: "transcriptstatus",
    content: "Indicates the current state of the transcription in the conversation flow."
  }, {
    heading: "transcriptstatus",
    content: "Used to track and manage the lifecycle status of transcripts."
  }, {
    heading: "transcriptstatus",
    content: "Value"
  }, {
    heading: "transcriptstatus",
    content: "Description"
  }, {
    heading: "transcriptstatus",
    content: "`inprogress`"
  }, {
    heading: "transcriptstatus",
    content: "(0): Transcription in progress. This state is set while the transcript is being generated or played, indicating that the content is still being processed or streamed."
  }, {
    heading: "transcriptstatus",
    content: "`end`"
  }, {
    heading: "transcriptstatus",
    content: "(1): Transcription completed. This status is set when text generation ends normally, indicating the natural end of the transcript segment."
  }, {
    heading: "transcriptstatus",
    content: "`interrupted`"
  }, {
    heading: "transcriptstatus",
    content: "(2): Transcription interrupted. This state is set when text generation is stopped prematurely, which is applicable when it is interrupted by a higher priority message."
  }, {
    heading: "conversationalaiapierrortype",
    content: "Used to distinguish different error types in conversational agent systems."
  }, {
    heading: "conversationalaiapierrortype",
    content: "Value"
  }, {
    heading: "conversationalaiapierrortype",
    content: "Description"
  }, {
    heading: "conversationalaiapierrortype",
    content: "`unknown`"
  }, {
    heading: "conversationalaiapierrortype",
    content: "(0): Unknown error type."
  }, {
    heading: "conversationalaiapierrortype",
    content: "`rtcError`"
  }, {
    heading: "conversationalaiapierrortype",
    content: "(2): RTC (real-time communication) related errors."
  }, {
    heading: "conversationalaiapierrortype",
    content: "`rtmError`"
  }, {
    heading: "conversationalaiapierrortype",
    content: "(3): RTM (Real Time Messaging) related errors."
  }],
  headings: [{
    id: "installation",
    content: "Installation"
  }, {
    id: "conversationalaiapi-class",
    content: "ConversationalAIAPI class"
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
    id: "loadaudiosettings12",
    content: "`loadAudioSettings[1/2]`"
  }, {
    id: "loadaudiosettings22",
    content: "`loadAudioSettings[2/2]`"
  }, {
    id: "destroy",
    content: "`destroy`"
  }, {
    id: "conversationalaiapieventhandler-class",
    content: "ConversationalAIAPIEventHandler class"
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
    id: "structures",
    content: "Structures"
  }, {
    id: "chatmessage",
    content: "`ChatMessage`"
  }, {
    id: "imagemessage",
    content: "`ImageMessage`"
  }, {
    id: "messagereceipt",
    content: "`MessageReceipt`"
  }, {
    id: "messageerror",
    content: "`MessageError`"
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
    id: "textmessage",
    content: "`TextMessage`"
  }, {
    id: "speakmessage",
    content: "`SpeakMessage`"
  }, {
    id: "thinkmessage",
    content: "`ThinkMessage`"
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
    id: "chatmessagetype",
    content: "`ChatMessageType`"
  }, {
    id: "priority",
    content: "`Priority`"
  }, {
    id: "thinklisteningaction",
    content: "`ThinkListeningAction`"
  }, {
    id: "thinkthinkingaction",
    content: "`ThinkThinkingAction`"
  }, {
    id: "thinkspeakingaction",
    content: "`ThinkSpeakingAction`"
  }, {
    id: "agentstate",
    content: "`AgentState`"
  }, {
    id: "moduletype",
    content: "`ModuleType`"
  }, {
    id: "messagetype",
    content: "`MessageType`"
  }, {
    id: "transcriptrendermode",
    content: "`TranscriptRenderMode`"
  }, {
    id: "transcripttype",
    content: "`TranscriptType`"
  }, {
    id: "transcriptstatus",
    content: "`TranscriptStatus`"
  }, {
    id: "conversationalaiapierrortype",
    content: "`ConversationalAIAPIErrorType`"
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
  url: "#loadaudiosettings12",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "loadAudioSettings[1/2]"
    })
  })
}, {
  depth: 3,
  url: "#loadaudiosettings22",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "loadAudioSettings[2/2]"
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
  url: "#conversationalaiapieventhandler-class",
  title: _jsx(_Fragment, {
    children: "ConversationalAIAPIEventHandler class"
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
  depth: 2,
  url: "#structures",
  title: _jsx(_Fragment, {
    children: "Structures"
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
    children: _jsx("code", {
      children: "MessageReceipt"
    })
  })
}, {
  depth: 3,
  url: "#messageerror",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MessageError"
    })
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
  url: "#textmessage",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "TextMessage"
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
  url: "#chatmessagetype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ChatMessageType"
    })
  })
}, {
  depth: 3,
  url: "#priority",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "Priority"
    })
  })
}, {
  depth: 3,
  url: "#thinklisteningaction",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ThinkListeningAction"
    })
  })
}, {
  depth: 3,
  url: "#thinkthinkingaction",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ThinkThinkingAction"
    })
  })
}, {
  depth: 3,
  url: "#thinkspeakingaction",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ThinkSpeakingAction"
    })
  })
}, {
  depth: 3,
  url: "#agentstate",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AgentState"
    })
  })
}, {
  depth: 3,
  url: "#moduletype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ModuleType"
    })
  })
}, {
  depth: 3,
  url: "#messagetype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MessageType"
    })
  })
}, {
  depth: 3,
  url: "#transcriptrendermode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "TranscriptRenderMode"
    })
  })
}, {
  depth: 3,
  url: "#transcripttype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "TranscriptType"
    })
  })
}, {
  depth: 3,
  url: "#transcriptstatus",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "TranscriptStatus"
    })
  })
}, {
  depth: 3,
  url: "#conversationalaiapierrortype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ConversationalAIAPIErrorType"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      children: "Add the toolkit to your project using CocoaPods, Swift Package Manager, or by copying the source code."
    }), `
`, _jsxs(Tabs, {
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "cocoapods",
          children: "CocoaPods"
        }), _jsx(TabsTrigger, {
          value: "spm",
          children: "Swift Package Manager"
        }), _jsx(TabsTrigger, {
          value: "source",
          children: "Source code"
        })]
      }), _jsxs(TabsContent, {
        value: "cocoapods",
        children: [_jsxs(_components.p, {
          children: ["Add the following dependency to your ", _jsx(_components.code, {
            children: "Podfile"
          }), ":"]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "pod "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'agent-client-toolkit-swift'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'2.9.0'"
                })]
              })
            })
          })
        })]
      }), _jsxs(TabsContent, {
        value: "spm",
        children: [_jsxs(_components.p, {
          children: ["In Xcode, add the following package URL and set the version rule to the ", _jsx(_components.code, {
            children: "2.9.0"
          }), " tag:"]
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
            children: _jsx(_components.code, {
              children: _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "https://github.com/AgoraIO/agent-client-toolkit-swift.git"
                })
              })
            })
          })
        })]
      }), _jsx(TabsContent, {
        value: "source",
        children: _jsxs(_components.p, {
          children: ["Copy the ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/agent-client-toolkit-swift/tree/source/main/AgoraAgentClientToolkit",
            children: _jsx(_components.code, {
              children: "AgoraAgentClientToolkit"
            })
          }), " sources into your project, then import the toolkit before calling its APIs."]
        })
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If you encounter library conflicts when integrating multiple Agora SDKs in your iOS project, see ", _jsx(_components.a, {
            href: "/en/api-reference/faq/integration/rtm2_rtc_integration_issue",
            children: "handle integration issues"
          }), "."]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.a, {
        href: "https://github.com/AgoraIO-Community/Conversational-AI-Demo/tree/main/iOS/Scenes/ConvoAI/ConvoAI/ConvoAI/Classes/ConversationalAIAPI",
        children: "iOS toolkit API"
      }), " provides the following classes and methods."]
    }), `
`, _jsx(_components.h2, {
      id: "conversationalaiapi-class",
      children: "ConversationalAIAPI class"
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
            children: "Send a message to the agent."
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
            children: "Add an event handler to receive the callback."
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
            children: "Removes an event handler."
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
            children: "Subscribe to channel messages."
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
            children: "Unsubscribe from channel messages."
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
            children: "Interrupt the agent's current speech or task processing."
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
            children: _jsxs(_components.a, {
              href: "#loadaudiosettings12",
              children: [_jsx(_components.code, {
                children: "loadAudioSettings"
              }), "[1/2]"]
            })
          }), _jsx(_components.td, {
            children: "Set audio best practice parameters for optimal performance."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsxs(_components.a, {
              href: "#loadaudiosettings22",
              children: [_jsx(_components.code, {
                children: "loadAudioSettings"
              }), "[2/2]"]
            })
          }), _jsx(_components.td, {
            children: "Set audio best practice parameters for specific scenarios."
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
            children: "Destroys the API instance and releases all resources."
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
      children: "Sends a message to the agent for processing."
    }), `
`, _jsx(_components.p, {
      children: "You can use this method to send text and image messages to the agent, and the completion callback indicates the success or failure of the operation."
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
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
              children: "(agentUserId: String, message: ChatMessage, completion: @"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "escaping"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") -> Void)"
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
            children: "The RTM user ID of the agent. Must be globally unique."
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
            children: ["Message object containing the image URL. See ", _jsx(_components.a, {
              href: "#chatmessage",
              children: _jsx(_components.code, {
                children: "ChatMessage"
              })
            }), " for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "completion"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "@escaping (ConversationalAIAPIError?) -> Void"
            })
          }), _jsxs(_components.td, {
            children: ["Callback function invoked when the operation completes. Returns ", _jsx(_components.code, {
              children: "nil"
            }), " on success, or error information on failure. See ", _jsx(_components.a, {
              href: "#conversationalaiapierror",
              children: _jsx(_components.code, {
                children: "ConversationalAIAPIError"
              })
            }), " for details."]
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
      children: "Add an event handler to receive the callback."
    }), `
`, _jsx(_components.p, {
      children: "You can register a delegate to receive session events, state changes, and other notifications."
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "addHandler"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(handler: ConversationalAIAPIEventHandler)"
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
              children: "ConversationalAIAPIEventHandler"
            })
          }), _jsxs(_components.td, {
            children: ["Event handler to implement the ", _jsx(_components.code, {
              children: "ConversationalAIAPIEventHandler"
            }), " protocol. See ", _jsx(_components.a, {
              href: "#conversationalaiapieventhandler-class",
              children: _jsx(_components.code, {
                children: "ConversationalAIAPIEventHandler"
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
      children: "Removes an event handler."
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "removeHandler"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(handler: ConversationalAIAPIEventHandler)"
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
              children: "ConversationalAIAPIEventHandler"
            })
          }), _jsxs(_components.td, {
            children: ["The event handler to remove. See ", _jsx(_components.a, {
              href: "#conversationalaiapieventhandler-class",
              children: _jsx(_components.code, {
                children: "ConversationalAIAPIEventHandler"
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
      children: "Subscribe to channel messages."
    }), `
`, _jsx(_components.p, {
      children: "Set channel parameters and register message subscription callbacks. This method is called when the channel changes, usually when the agent starts."
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
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
              children: "(channelName: String, completion: @"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "escaping"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") -> Void)"
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
            children: "The name of the channel to subscribe to."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "completion"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "(ConversationalAIAPIError?) -> Void"
            })
          }), _jsxs(_components.td, {
            children: ["A callback that returns error information when subscription fails. See ", _jsx(_components.a, {
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
      children: "Unsubscribe from channel messages."
    }), `
`, _jsx(_components.p, {
      children: "Calling this method can stop receiving messages from the specified channel, which is suitable for scenarios where the connection with the agent is disconnected."
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "unsubscribeMessage"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(channelName: String, completion: @"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "escaping"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") -> Void)"
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
            children: "The name of the channel to unsubscribe from."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "completion"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "(ConversationalAIAPIError?) -> Void"
            })
          }), _jsxs(_components.td, {
            children: ["The callback after the unsubscription operation is completed. You can get error information through this callback. See ", _jsx(_components.a, {
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
      children: "Interrupt the agent's current ongoing speech or task processing."
    }), `
`, _jsx(_components.p, {
      children: "This method can be used to interrupt an agent that is currently speaking or processing a task."
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
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
              children: "(agentUserId: String, completion: @"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "escaping"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") -> Void)"
            })]
          })
        })
      })
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If ", _jsx(_components.code, {
            children: "error"
          }), " has a value, it means the message sending failed. If ", _jsx(_components.code, {
            children: "error"
          }), " is nil, it means the message was sent successfully, but it does not guarantee that the agent was successfully interrupted."]
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
            children: "The RTM user ID of the agent, must be globally unique."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "completion"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "(ConversationalAIAPIError?) -> Void"
            })
          }), _jsxs(_components.td, {
            children: ["The callback function when the operation is completed. You can get the result or error information of the operation through the parameters of the callback. See ", _jsx(_components.a, {
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
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
              children: "(agentUserId: String, completion: @"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "escaping"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (String, ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") -> Void)"
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
            children: "The RTM user ID of the agent. Must be globally unique."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "completion"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "@escaping (String, ConversationalAIAPIError?) -> Void"
            })
          }), _jsxs(_components.td, {
            children: ["Callback invoked when the operation completes. The first parameter is the ", _jsx(_components.code, {
              children: "requestId"
            }), " unique to this request; the second is error information, or ", _jsx(_components.code, {
              children: "nil"
            }), " on success. This callback only indicates whether the RTM publish succeeded."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
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
              children: "(agentUserId: String, completion: @"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "escaping"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (String, ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") -> Void)"
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
            children: "The RTM user ID of the agent. Must be globally unique."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "completion"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "@escaping (String, ConversationalAIAPIError?) -> Void"
            })
          }), _jsxs(_components.td, {
            children: ["Callback invoked when the operation completes. The first parameter is the ", _jsx(_components.code, {
              children: "requestId"
            }), " unique to this request; the second is error information, or ", _jsx(_components.code, {
              children: "nil"
            }), " on success. This callback only indicates whether the RTM publish succeeded."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
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
              children: "(agentUserId: String, message: SpeakMessage, completion: @"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "escaping"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") -> Void)"
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
            children: "The RTM user ID of the agent. Must be globally unique."
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
              children: "@escaping (ConversationalAIAPIError?) -> Void"
            })
          }), _jsxs(_components.td, {
            children: ["Callback function invoked when the operation completes. Returns ", _jsx(_components.code, {
              children: "nil"
            }), " on success, or error information on failure. See ", _jsx(_components.a, {
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
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
              children: "(agentUserId: String, message: ThinkMessage, completion: @"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "escaping"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (ConversationalAIAPIError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") -> Void)"
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
            children: "The RTM user ID of the agent. Must be globally unique."
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
              children: "@escaping (ConversationalAIAPIError?) -> Void"
            })
          }), _jsxs(_components.td, {
            children: ["Callback function invoked when the operation completes. Returns ", _jsx(_components.code, {
              children: "nil"
            }), " on success, or error information on failure. See ", _jsx(_components.a, {
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
      id: "loadaudiosettings12",
      children: _jsx(_components.code, {
        children: "loadAudioSettings[1/2]"
      })
    }), `
`, _jsx(_components.p, {
      children: "Set audio best practice parameters for optimal performance."
    }), `
`, _jsxs(_components.p, {
      children: ["Sets the audio parameters needed for optimal performance in agent conversations. By default, ", _jsx(_components.code, {
        children: ".aiClient"
      }), " Audio Scene is used."]
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "loadAudioSettings"
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
          children: ["To enable audio best practices, you must call this method before each ", _jsx(_components.code, {
            children: "joinChannel"
          }), " call."]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Sample code:"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Set audio best practice parameters before joining the channel"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "api."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "loadAudioSettings"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "()  "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Use default scenario"
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
              children: "// Then join the channel"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "rtcEngine."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "joinChannel"
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
              children: "byToken"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": token, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "channelId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": channelName, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "info"
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
              children: "nil"
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
              children: "uid"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": userId)"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "loadaudiosettings22",
      children: _jsx(_components.code, {
        children: "loadAudioSettings[2/2]"
      })
    }), `
`, _jsx(_components.p, {
      children: "Set audio best practice parameters for specific scenarios."
    }), `
`, _jsx(_components.p, {
      children: "This method allows you to configure the audio parameters required for optimal performance in your agent conversations."
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "loadAudioSettings"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(scenario: AgoraAudioScenario)"
            })]
          })
        })
      })
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If you need to enable audio best practices, you must call this method before each ", _jsx(_components.code, {
            children: "joinChannel"
          }), " call."]
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
              children: "AgoraAudioScenario"
            })
          }), _jsxs(_components.td, {
            children: ["The audio scenario. See ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/voice-sdk/ios/4.x/documentation/agorartckit/agoraaudioscenario",
              children: "AgoraAudioScenario"
            }), ". If you enable the AI Avatar feature, set the scenario to ", _jsx(_components.code, {
              children: "default"
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
      children: "Destroys the API instance and releases all resources."
    }), `
`, _jsx(_components.p, {
      children: "Calling this method destroys the current API instance and releases all resources. After calling this method, the instance cannot be used again. Please call this method when you no longer need to use the API."
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
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
              children: "()"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "conversationalaiapieventhandler-class",
      children: "ConversationalAIAPIEventHandler class"
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
            children: "A callback triggered when an error occurs during message processing."
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
            children: "Image message information update callback."
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
            children: "Callback when the agent status changes."
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
            children: "The callback triggered when an interrupt event occurs."
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
            children: "A callback that is triggered when performance metrics are available."
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
            children: "Callback when an error occurs in the AI module."
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
            children: "Transcription content update callback."
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
      children: "This callback is triggered when an error occurs during message processing. For example, if sending a chat message fails, an error message is returned."
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "onMessageError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: String, error: MessageError)"
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
            children: "RTM user ID of the agent."
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
            children: [_jsx(_components.a, {
              href: "#messageerror",
              children: _jsx(_components.code, {
                children: "MessageError"
              })
            }), " object containing the error type and details."]
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
      children: "Image message information update callback."
    }), `
`, _jsx(_components.p, {
      children: "This callback is triggered when an image is processed in a session and provides image metadata."
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "onMessageReceiptUpdated"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: String, messageReceipt: MessageReceipt)"
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
            children: "RTM user ID of the agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "messageReceipt"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "MessageReceipt"
            })
          }), _jsxs(_components.td, {
            children: ["Message receipt containing the type, module, and image information. See ", _jsx(_components.a, {
              href: "#messagereceipt",
              children: _jsx(_components.code, {
                children: "MessageReceipt"
              })
            }), " for more details."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc optional func "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "onUserManualSosEvent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: String, event: UserManualSosEvent)"
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
            children: "The RTM user ID of the agent."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc optional func "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "onUserManualEosEvent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: String, event: UserManualEosEvent)"
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
            children: "The RTM user ID of the agent."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc optional func "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "onAgentManualEosEvent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: String, event: AgentManualEosEvent)"
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
            children: "The RTM user ID of the agent."
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
      children: "Callback when the agent status changes."
    }), `
`, _jsx(_components.p, {
      children: "This callback is triggered when the agent state changes, such as switching from idle to silent, listening, thinking, or speaking. You can use this callback to update the user interface or track the flow of the conversation."
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "onAgentStateChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: String, event: StateChangeEvent)"
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
            children: "The RTM user ID of the agent."
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
            children: ["Agent status change event, including status, round ID, timestamp and reason. See ", _jsx(_components.a, {
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
      }), ", used to monitor whether the agent has started or stopped listening to user input."]
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc optional func "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "onAgentListeningChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: String, isListening: Bool)"
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
            children: "The RTM user ID of the agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "isListening"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Bool"
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
      }), ", used to monitor whether the agent has started or stopped processing a request."]
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc optional func "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "onAgentThinkingChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: String, isThinking: Bool)"
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
            children: "The RTM user ID of the agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "isThinking"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Bool"
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
      }), ", used to monitor whether the agent has started or stopped playing back speech."]
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc optional func "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "onAgentSpeakingChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: String, isSpeaking: Bool)"
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
            children: "The RTM user ID of the agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "isSpeaking"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Bool"
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
      children: "The callback triggered when an interrupt event occurs."
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "onAgentInterrupted"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: String, event: InterruptEvent)"
            })]
          })
        })
      })
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "This callback may not be synchronized with the agent's state. It is not recommended to process business logic in this callback."
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
            children: "The RTM user ID of the agent."
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
            children: ["Interrupt event, including round ID and timestamp. See ", _jsx(_components.a, {
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
      children: "A callback that is triggered when performance metrics are available."
    }), `
`, _jsx(_components.p, {
      children: "This callback provides performance data, such as LLM inference latency and TTS speech synthesis latency, for monitoring system performance."
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "onAgentMetrics"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: String, metrics: Metric)"
            })]
          })
        })
      })
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "This performance indicator callback is not necessarily synchronized with the agent's state, so it is not recommended to process business logic in this callback."
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
            children: "The RTM user ID of the agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "metrics"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Metric"
            })
          }), _jsxs(_components.td, {
            children: ["Performance indicator, including type, value and timestamp. See ", _jsx(_components.a, {
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
      children: "Callback when an error occurs in the AI module."
    }), `
`, _jsx(_components.p, {
      children: "This callback is called when an error occurs in a module component (such as LLM, TTS, etc.). It can be used for error monitoring, logging, and implementing service degradation strategies."
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "onAgentError"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: String, error: ModuleError)"
            })]
          })
        })
      })
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "This callback is not necessarily synchronized with the state of the agent, so it is not recommended to process business logic in this callback."
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
            children: "The RTM user ID of the agent."
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
            children: ["Module error, including type, error code, error message and timestamp. See ", _jsx(_components.a, {
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
      children: "Transcript content update callback."
    }), `
`, _jsx(_components.p, {
      children: "This callback is triggered when the speech transcript content in the session is updated."
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc func "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "onTranscriptUpdated"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(agentUserId: String, transcript: Transcript)"
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
            children: "The RTM user ID of the agent."
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
            children: ["Transcript data, including text content, status and metadata. See ", _jsx(_components.a, {
              href: "#transcript",
              children: _jsx(_components.code, {
                children: "Transcript"
              })
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "structures",
      children: "Structures"
    }), `
`, _jsx(_components.h3, {
      id: "chatmessage",
      children: _jsx(_components.code, {
        children: "ChatMessage"
      })
    }), `
`, _jsx(_components.p, {
      children: "Defines a common interface for different types of chat messages."
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc public protocol ChatMessage {"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    var messageType: ChatMessageType { get }"
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
              children: "messageType"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ChatMessageType"
            })
          }), _jsxs(_components.td, {
            children: ["Message type. See ", _jsx(_components.a, {
              href: "#chatmessagetype",
              children: _jsx(_components.code, {
                children: "ChatMessageType"
              })
            }), " for details."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "imagemessage",
      children: _jsx(_components.code, {
        children: "ImageMessage"
      })
    }), `
`, _jsx(_components.p, {
      children: "Used to send image content to an agent."
    }), `
`, _jsxs(_components.p, {
      children: ["Images are displayed as URLs, which are HTTP/HTTPS links pointing to the image file (recommended for large images). Example usage: ", _jsx(_components.code, {
        children: 'ImageMessage(uuid = "img_123", url = "https://example.com/image.jpg")'
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc public class ImageMessage: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "NSObject"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", ChatMessage {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let messageType: ChatMessageType "
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
              children: " .image"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let uuid: String"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let url: String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
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
              children: "ChatMessageType"
            })
          }), _jsxs(_components.td, {
            children: ["Type of the message. See ", _jsx(_components.code, {
              children: "ChatMessageType"
            }), " for more details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uuid"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Unique identifier for the image message. The agent uses this UUID to identify the image."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "url"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String?"
            })
          }), _jsx(_components.td, {
            children: "HTTP/HTTPS link to the image file which the proxy will use to download and process the image."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "messagereceipt",
      children: _jsx(_components.code, {
        children: "MessageReceipt"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "MessageReceipt"
      }), " model is used to track message processing status and metadata."]
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc public class MessageReceipt: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "NSObject"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let moduleType: ModuleType"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let messageType: ChatMessageType"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let message: String"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let turnId: Int"
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
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "moduleType"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ModuleType"
            })
          }), _jsxs(_components.td, {
            children: ["Module type. See ", _jsx(_components.code, {
              children: "ModuleType"
            }), " for more details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "messageType"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ChatMessageType"
            })
          }), _jsxs(_components.td, {
            children: ["Type of the message. See ", _jsx(_components.code, {
              children: "ChatMessageType"
            }), " for more details."]
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
            children: "Image information."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turnId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Int"
            })
          }), _jsx(_components.td, {
            children: "Conversation turn ID, used to identify a specific turn in the session."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "messageerror",
      children: _jsx(_components.code, {
        children: "MessageError"
      })
    }), `
`, _jsx(_components.p, {
      children: "A data class for processing and reporting message errors."
    }), `
`, _jsx(_components.p, {
      children: "Contains the error type, error code, error description, and timestamp."
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc public class MessageError: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "NSObject"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let type: ChatMessageType"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let code: Int"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let message: String"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let timestamp: TimeInterval"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public "
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
              children: "(type: ChatMessageType, code: Int, message: String, timestamp: TimeInterval)"
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
            children: _jsx(_components.code, {
              children: "ChatMessageType"
            })
          }), _jsx(_components.td, {
            children: "Message error type. See ChatMessageType."
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
            children: "Error code to identify specific error conditions."
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
            children: "Error description, providing detailed error explanation, usually a JSON string containing resource information."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "timestamp"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TimeInterval"
            })
          }), _jsx(_components.td, {
            children: "Timestamp of the error (milliseconds since January 1, 1970, UTC)."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc public class UserManualEventPayload: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "NSObject"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let success: Bool"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let requestId: String"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let turnId: Int"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let errorMessage: String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
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
              children: "Bool"
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
              children: "Int"
            })
          }), _jsxs(_components.td, {
            children: ["The associated conversation turn ID. This field may be empty or hold no valid value if the server's failure callback does not include a ", _jsx(_components.code, {
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
              children: "nil"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc public class UserManualSosEvent: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "NSObject"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let eventId: String"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let timestamp: TimeInterval"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let payload: UserManualEventPayload"
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
              children: "TimeInterval"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc public class UserManualEosEvent: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "NSObject"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let eventId: String"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let timestamp: TimeInterval"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let payload: UserManualEventPayload"
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
              children: "TimeInterval"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc public class AgentManualEosPayload: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "NSObject"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let reason: String"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let maxDurationMs: Int"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let turnId: Int"
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
              children: "Int"
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
              children: "Int"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc public class AgentManualEosEvent: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "NSObject"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let eventId: String"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let timestamp: TimeInterval"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let payload: AgentManualEosPayload"
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
              children: "TimeInterval"
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
      id: "textmessage",
      children: _jsx(_components.code, {
        children: "TextMessage"
      })
    }), `
`, _jsx(_components.p, {
      children: "Used to send natural language text content to an agent."
    }), `
`, _jsx(_components.p, {
      children: "Supports priority control and interruptibility settings, enabling fine-grained control over how the AI processes and responds to text input."
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc public class TextMessage: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "NSObject"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", ChatMessage {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let messageType: ChatMessageType "
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
              children: " .text"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let priority: Priority"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let responseInterruptable: Bool"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let text: String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
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
              children: "ChatMessageType"
            })
          }), _jsxs(_components.td, {
            children: ["Message type. See ", _jsx(_components.a, {
              href: "#chatmessagetype",
              children: _jsx(_components.code, {
                children: "ChatMessageType"
              })
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "priority"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Priority"
            })
          }), _jsxs(_components.td, {
            children: ["Message handling priority. See ", _jsx(_components.code, {
              children: "Priority"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "responseInterruptable"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Bool"
            })
          }), _jsxs(_components.td, {
            children: ["Whether the response to this message can be interrupted by a higher-priority message. ", _jsx(_components.code, {
              children: "YES"
            }), " (default) means the response can be interrupted. ", _jsx(_components.code, {
              children: "NO"
            }), " means the response cannot be interrupted."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "text"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String?"
            })
          }), _jsx(_components.td, {
            children: "Text content of the message."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc public class SpeakMessage: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "NSObject"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let text: String"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let priority: Priority"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let interruptable: Bool"
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
            children: _jsx(_components.code, {
              children: "Priority"
            })
          }), _jsxs(_components.td, {
            children: ["The priority for handling this speak request. Defaults to ", _jsx(_components.code, {
              children: ".interrupt"
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
              children: "Bool"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc public class ThinkMessage: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "NSObject"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let text: String"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let onListeningAction: ThinkListeningAction"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let onThinkingAction: ThinkThinkingAction"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let onSpeakingAction: ThinkSpeakingAction"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let interruptable: Bool"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let metadata: [String: String]"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
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
            children: _jsx(_components.code, {
              children: "ThinkListeningAction"
            })
          }), _jsxs(_components.td, {
            children: ["The action to take when the agent is in a listening state. Defaults to ", _jsx(_components.code, {
              children: ".interrupt"
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
            children: _jsx(_components.code, {
              children: "ThinkThinkingAction"
            })
          }), _jsxs(_components.td, {
            children: ["The action to take when the agent is in a thinking state. Defaults to ", _jsx(_components.code, {
              children: ".ignore"
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
            children: _jsx(_components.code, {
              children: "ThinkSpeakingAction"
            })
          }), _jsxs(_components.td, {
            children: ["The action to take when the agent is in a speaking state. Defaults to ", _jsx(_components.code, {
              children: ".ignore"
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
              children: "Bool"
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
              children: "[String: String]?"
            })
          }), _jsxs(_components.td, {
            children: ["Optional custom key-value pairs. When ", _jsx(_components.code, {
              children: "nil"
            }), ", no metadata is written to the RTM message."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "statechangeevent",
      children: _jsx(_components.code, {
        children: "StateChangeEvent"
      })
    }), `
`, _jsx(_components.p, {
      children: "Indicates an agent state change event, including complete state information and timestamp."
    }), `
`, _jsx(_components.p, {
      children: "Used to track session flow and update UI status indicators."
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc public class StateChangeEvent: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "NSObject"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let state: AgentState"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let turnId: Int"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let timestamp: TimeInterval"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let reason: String"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    "
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public "
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
              children: "(state: AgentState, turnId: Int, timestamp: TimeInterval, reason: String)"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    "
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    public override var description: String {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "        return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "StateChangeEvent(state: '
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "\\("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "state), turnId: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "\\("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "turnId), timestamp: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "\\("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "timestamp), reason: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "\\("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: 'reason))"'
            })]
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
            children: ["Current agent state. See ", _jsx(_components.a, {
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
              children: "Int"
            })
          }), _jsx(_components.td, {
            children: "Session round ID, used to identify a specific session round."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "timestamp"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TimeInterval"
            })
          }), _jsx(_components.td, {
            children: "Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC)."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "reason"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "The reason for the status change."
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
`, _jsx(_components.p, {
      children: "Indicates a session interruption event."
    }), `
`, _jsx(_components.p, {
      children: "It is usually triggered when the user actively interrupts the AI speech or the system detects a high-priority message. It is used to record the interruption behavior and perform corresponding processing."
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc public class InterruptEvent: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "NSObject"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let turnId: Int"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let timestamp: TimeInterval"
            })
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public "
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
              children: "(turnId: Int, timestamp: TimeInterval) {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "        self"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".turnId "
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
              children: " turnId"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "        self"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".timestamp "
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
              children: " timestamp"
            })]
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
            className: "line"
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    public override var description: String {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "        return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "InterruptEvent(turnId: '
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "\\("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "turnId), timestamp: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "\\("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: 'timestamp))"'
            })]
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
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turnId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Int"
            })
          }), _jsx(_components.td, {
            children: "The ID of the interrupted session round."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "timestamp"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TimeInterval"
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
      children: "Used to record and transmit system performance data."
    }), `
`, _jsx(_components.p, {
      children: "For example, LLM inference delay, TTS synthesis delay, etc. This data can be used for performance monitoring, system optimization, and user experience improvement."
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc public class Metric: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "NSObject"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let type: ModuleType"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let name: String"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let value: Double"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let timestamp: TimeInterval"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    "
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public "
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
              children: "(type: ModuleType, name: String, value: Double, timestamp: TimeInterval)"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    "
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    public override var description: String {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "        return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "Metric(type: '
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "\\("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "type.stringValue), name: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "\\("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "name), value: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "\\("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "value), timestamp: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "\\("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: 'timestamp))"'
            })]
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
            children: ["Indicator type. See ", _jsx(_components.a, {
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
            children: "The indicator name of a specific performance item."
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
            children: "Metric value, usually latency (milliseconds) or other quantitative metrics."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "timestamp"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TimeInterval"
            })
          }), _jsx(_components.td, {
            children: "Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC)."
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
      children: "Used to process and report AI module related error information."
    }), `
`, _jsx(_components.p, {
      children: "Contains error type, error code, error description, and timestamp to facilitate error monitoring, logging, and troubleshooting."
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc public class ModuleError: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "NSObject"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let type: ModuleType"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let code: Int"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let message: String"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let timestamp: TimeInterval"
            })
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public "
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
              children: "(type: ModuleType, code: Int, message: String, timestamp: TimeInterval) {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "        self"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".type "
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
              children: " type"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "        self"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".code "
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
              children: " code"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "        self"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".message "
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
              children: " message"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "        self"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".timestamp "
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
              children: " timestamp"
            })]
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
            className: "line"
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    public override var description: String {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "        return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "ModuleError(type: '
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "\\("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "type.stringValue), code: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "\\("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "code), message: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "\\("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "message), timestamp: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "\\("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: 'timestamp))"'
            })]
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
            children: ["Error type. See ", _jsx(_components.a, {
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
            children: "Error codes that identify specific error conditions."
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
            children: "Provides an error description that details the error."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "timestamp"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "TimeInterval"
            })
          }), _jsx(_components.td, {
            children: "Timestamp in milliseconds since Unix epoch (January 1, 1970 UTC)."
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
      children: "Used to represent a user-visible transcript message."
    }), `
`, _jsx(_components.p, {
      children: "Complete data class for rendering transcripts at the UI level."
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc public class Transcript: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "NSObject"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   @objc public let turnId: Int"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   @objc public let userId: String"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   @objc public let text: String"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   @objc public var status: TranscriptStatus"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   @objc public var type: TranscriptType"
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
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turnId"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Int"
            })
          }), _jsx(_components.td, {
            children: "Unique identifier for the session turn."
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
            children: "The user identifier associated with this transcript."
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
            children: "The actual transcript text content."
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
            children: ["The current status of the transcription. See ", _jsx(_components.a, {
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
            children: ["The current type of transcript (agent or user). See ", _jsx(_components.a, {
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
      children: "Conversational AI API initialization configuration class."
    }), `
`, _jsxs(_components.p, {
      children: ["Contains the configuration parameters required for Conversational AI API initialization, including ", _jsx(_components.code, {
        children: "rtcEngine"
      }), " for audio and video communication, ", _jsx(_components.code, {
        children: "rtmEngine"
      }), " for message communication, and transcript rendering mode settings."]
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc public class ConversationalAIAPIConfig: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "NSObject"
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
              children: "    @objc public weak var rtcEngine: AgoraRtcEngineKit"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public weak var rtmEngine"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " AgoraRtmClientKit"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public var renderMode"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " TranscriptRenderMode"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public var enableLog: Bool"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public var enableRenderModeFallback: Bool"
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
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "rtcEngine"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AgoraRtcEngineKit?"
            })
          }), _jsxs(_components.td, {
            children: ["Engine instance used for audio and video communication. See ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/API/class_agorartcenginekit.html",
              children: _jsx(_components.code, {
                children: "AgoraRtcEngineKit"
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
              children: "AgoraRtmClientKit?"
            })
          }), _jsxs(_components.td, {
            children: ["Client instance for real-time messaging. See the ", _jsx(_components.a, {
              href: "https://agoraio.github.io/AgoraRtm_Apple/documentation/agorartm",
              children: "Signaling iOS API reference"
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
            children: ["Transcript rendering mode. See ", _jsx(_components.a, {
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
              children: "Bool"
            })
          }), _jsxs(_components.td, {
            children: ["Whether to enable verbose logging. ", _jsx(_components.code, {
              children: "YES"
            }), " enables verbose logging. ", _jsx(_components.code, {
              children: "NO"
            }), " (default) disables logging."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "enableRenderModeFallback"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Bool"
            })
          }), _jsxs(_components.td, {
            children: ["Whether to automatically fall back to text rendering when ", _jsx(_components.code, {
              children: "renderMode"
            }), " is set to word-level but the server doesn't provide word-level timing data. If ", _jsx(_components.code, {
              children: "YES"
            }), " (default), the component falls back to text mode automatically. If ", _jsx(_components.code, {
              children: "NO"
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
      children: "Class for logging and communicating error information."
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@objc public class ConversationalAIAPIError: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "NSObject"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let type: ConversationalAIAPIErrorType"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let code: Int"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public let message: String"
            })
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    @objc public "
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
              children: "(type: ConversationalAIAPIErrorType, code: Int, message: String) {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "        self"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".type "
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
              children: " type"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "        self"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".code "
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
              children: " code"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "        self"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".message "
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
              children: " message"
            })]
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
            className: "line"
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    public override var description: String {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "        return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "ConversationalAIAPIError(type: '
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "\\("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "type), code: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "\\("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "code), message: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "\\("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: 'message))"'
            })]
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
              children: "type"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ConversationalAIAPIErrorType"
            })
          }), _jsxs(_components.td, {
            children: ["Error type. See ", _jsx(_components.a, {
              href: "#conversationalaiapierrortype",
              children: _jsx(_components.code, {
                children: "ConversationalAIAPIErrorType"
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
            children: "Error codes that identify specific error conditions."
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
            children: "Provides an error description that details the error."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "enum-classes",
      children: "Enum classes"
    }), `
`, _jsx(_components.h3, {
      id: "chatmessagetype",
      children: _jsx(_components.code, {
        children: "ChatMessageType"
      })
    }), `
`, _jsx(_components.p, {
      children: "Message type enumeration."
    }), `
`, _jsx(_components.p, {
      children: "Used to distinguish different message types within a session."
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
              children: "text"
            })
          }), _jsx(_components.td, {
            children: "(0): Text message type."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "image"
            })
          }), _jsx(_components.td, {
            children: "(1): Image message type."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "unknown"
            })
          }), _jsx(_components.td, {
            children: "(2): Unknown message type."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "priority",
      children: _jsx(_components.code, {
        children: "Priority"
      })
    }), `
`, _jsx(_components.p, {
      children: "Controls the priority with which the agent processes messages."
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
              children: "interrupt"
            })
          }), _jsx(_components.td, {
            children: "(0): High priority. The agent will immediately interrupt the current interaction and process the message. Suitable for urgent or time-sensitive messages."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "append"
            })
          }), _jsx(_components.td, {
            children: "(1): Medium priority. The agent will queue the message after the current interaction is completed, suitable for subsequent questions."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ignore"
            })
          }), _jsx(_components.td, {
            children: "(2): Low priority. If the agent is currently interacting, the message will be discarded and only processed when idle, suitable for optional content."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "thinklisteningaction",
      children: _jsx(_components.code, {
        children: "ThinkListeningAction"
      })
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
              children: "inject"
            })
          }), _jsx(_components.td, {
            children: "(0): Injects the instruction into the current turn without interrupting it."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "interrupt"
            })
          }), _jsx(_components.td, {
            children: "(1): Interrupts the current interaction and processes the instruction."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "append"
            })
          }), _jsx(_components.td, {
            children: "(2): Appends the instruction for processing after the current interaction completes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ignore"
            })
          }), _jsx(_components.td, {
            children: "(3): Ignores the instruction."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "thinkthinkingaction",
      children: _jsx(_components.code, {
        children: "ThinkThinkingAction"
      })
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
              children: "interrupt"
            })
          }), _jsx(_components.td, {
            children: "(0): Interrupts the current interaction and processes the instruction."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "append"
            })
          }), _jsx(_components.td, {
            children: "(1): Appends the instruction for processing after the current interaction completes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ignore"
            })
          }), _jsx(_components.td, {
            children: "(2): Ignores the instruction."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "thinkspeakingaction",
      children: _jsx(_components.code, {
        children: "ThinkSpeakingAction"
      })
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
              children: "interrupt"
            })
          }), _jsx(_components.td, {
            children: "(0): Interrupts the current interaction and processes the instruction."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "append"
            })
          }), _jsx(_components.td, {
            children: "(1): Appends the instruction for processing after the current interaction completes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ignore"
            })
          }), _jsx(_components.td, {
            children: "(2): Ignores the instruction."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "agentstate",
      children: _jsx(_components.code, {
        children: "AgentState"
      })
    }), `
`, _jsx(_components.p, {
      children: "Represents the different states of the agent during the dialogue."
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
              children: "idle"
            })
          }), _jsx(_components.td, {
            children: "(0): Idle state, the agent is not actively processing."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "silent"
            })
          }), _jsx(_components.td, {
            children: "(1): Silent state, the agent remains silent but is ready to listen."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "listening"
            })
          }), _jsx(_components.td, {
            children: "(2): Listening state, the agent is actively listening to user input."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "thinking"
            })
          }), _jsx(_components.td, {
            children: "(3): Thinking state, the agent is processing user input and generating responses."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "speaking"
            })
          }), _jsx(_components.td, {
            children: "(4): Speaking state, the agent is speaking or outputting audio content."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "unknown"
            })
          }), _jsx(_components.td, {
            children: "(5): Unknown state, used for fallback processing of unrecognized states."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "moduletype",
      children: _jsx(_components.code, {
        children: "ModuleType"
      })
    }), `
`, _jsx(_components.p, {
      children: "Represents different types of AI modules for performance monitoring."
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
              children: "llm"
            })
          }), _jsx(_components.td, {
            children: "(0): Reasoning with large language models."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "mllm"
            })
          }), _jsx(_components.td, {
            children: "(1): Multimodal large language model reasoning."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tts"
            })
          }), _jsx(_components.td, {
            children: "(2): Text-to-speech synthesis."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "context"
            })
          }), _jsx(_components.td, {
            children: "(3): Context module type."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "unknown"
            })
          }), _jsx(_components.td, {
            children: "(4): Unknown module type."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "messagetype",
      children: _jsx(_components.code, {
        children: "MessageType"
      })
    }), `
`, _jsx(_components.p, {
      children: "Used to distinguish different types of messages in the session system."
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
              children: "metrics"
            })
          }), _jsx(_components.td, {
            children: "The indicator message type."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "error"
            })
          }), _jsx(_components.td, {
            children: "The error message type."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "assistant"
            })
          }), _jsx(_components.td, {
            children: "AI agent transcript message type."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "user"
            })
          }), _jsx(_components.td, {
            children: "User transcript message type."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "interrupt"
            })
          }), _jsx(_components.td, {
            children: "The interrupt message type."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "state"
            })
          }), _jsx(_components.td, {
            children: "Status message type."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "imageInfo"
            })
          }), _jsx(_components.td, {
            children: "Image information message type."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "unknown"
            })
          }), _jsx(_components.td, {
            children: "Unknown message type."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "transcriptrendermode",
      children: _jsx(_components.code, {
        children: "TranscriptRenderMode"
      })
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
              children: "words"
            })
          }), _jsx(_components.td, {
            children: "(0): Word-by-word transcript rendering mode, updated every time a word is processed."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "text"
            })
          }), _jsx(_components.td, {
            children: "(1): Sentence-by-sentence transcript rendering mode, updated when the complete sentence is ready."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "transcripttype",
      children: _jsx(_components.code, {
        children: "TranscriptType"
      })
    }), `
`, _jsx(_components.p, {
      children: "Distinguish the source type of the transcribed text."
    }), `
`, _jsx(_components.p, {
      children: "By identifying whether the transcribed text comes from an agent or a user, it helps manage the conversation flow and interface presentation."
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
              children: "agent"
            })
          }), _jsx(_components.td, {
            children: "Transcript generated by the agent. Contains the responses and statements of the agent assistant, and is used to render the agent's voice in the conversational interface."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "user"
            })
          }), _jsx(_components.td, {
            children: "Transcribed text from the user. Contains the text converted from the user's voice input, which is used to display the user's voice content in the conversation process."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "transcriptstatus",
      children: _jsx(_components.code, {
        children: "TranscriptStatus"
      })
    }), `
`, _jsx(_components.p, {
      children: "Indicates the current state of the transcription in the conversation flow."
    }), `
`, _jsx(_components.p, {
      children: "Used to track and manage the lifecycle status of transcripts."
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
              children: "inprogress"
            })
          }), _jsx(_components.td, {
            children: "(0): Transcription in progress. This state is set while the transcript is being generated or played, indicating that the content is still being processed or streamed."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "end"
            })
          }), _jsx(_components.td, {
            children: "(1): Transcription completed. This status is set when text generation ends normally, indicating the natural end of the transcript segment."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "interrupted"
            })
          }), _jsx(_components.td, {
            children: "(2): Transcription interrupted. This state is set when text generation is stopped prematurely, which is applicable when it is interrupted by a higher priority message."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "conversationalaiapierrortype",
      children: _jsx(_components.code, {
        children: "ConversationalAIAPIErrorType"
      })
    }), `
`, _jsx(_components.p, {
      children: "Used to distinguish different error types in conversational agent systems."
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
              children: "unknown"
            })
          }), _jsx(_components.td, {
            children: "(0): Unknown error type."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "rtcError"
            })
          }), _jsx(_components.td, {
            children: "(2): RTC (real-time communication) related errors."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "rtmError"
            })
          }), _jsx(_components.td, {
            children: "(3): RTM (Real Time Messaging) related errors."
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
