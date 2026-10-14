import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Display live transcripts",
  description: "Add real-time transcripts to your conversations with the Conversational AI agent."
};
export let _markdown = `

When interacting with conversational AI in real time, you can enable live transcripts to display the conversation content. This page explains how to implement live transcripts in your app.

## Understand the tech [#understand-the-tech]

Agora provides a flexible, scalable, and standardized conversational AI engine toolkit. The toolkit supports **iOS**, **Android**, and **Web** platforms, and encapsulates scenario-based APIs. You can use these APIs to integrate the capabilities of the [Agora Signaling SDK](/en/realtime-media/rtm) and [Agora RTC SDK](../../realtime-media/rtc/get-started-sdk) to enable the following features:

* [Interrupt agents](shape-the-conversation/interrupt-agent)
* [Display live transcripts](transcripts)
* [Client-side events](handle-runtime-events/event-notifications)
* [Set optimal audio parameters](../best-practices/audio-setup) for iOS and Android
* [Send picture messages](send-multimodal-messages)

The toolkit receives transcript content through the \`onTranscriptUpdated\` callback and supports monitoring the following transcript data types:

* **Agent transcript**: The agent's speech, including streaming updates and final results.
* **User transcript**: The user's speech, including real-time display and status management.
* **Transcript status**: State changes such as in progress, completed, or interrupted.

The following diagram outlines the step-by-step process to integrate live transcript functionality into your application:

<details>
  <summary>
    Transcript rendering workflow
  </summary>

  ![](https://assets-docs.agora.io/images/conversational-ai/transcript-workflow.svg)
</details>

## Prerequisites [#prerequisites]

Before you begin, ensure the following:

* You have implemented the Conversational AI Engine [quickstart](../get-started/quickstart).
* Your app integrates Agora RTC SDK v4.5.1 or later and includes the [RTC SDK quickstart](../../realtime-media/rtc/get-started-sdk).
* You have enabled Signaling in the Agora Console and completed the [Signaling quickstart](/en/realtime-media/rtm/quickstart) for basic messaging.
* You maintain active and authenticated RTC and Signaling instances that persist beyond the component lifecycle. The toolkit does not manage RTC or Signaling initialization, lifecycle, or authentication.

## Implementation [#implementation]

This section describes how to receive transcript content from the transcript processing module and display it in your app UI.

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
    1. **Integrate the toolkit**

       Add the toolkit to your project using Maven or source code. See [Install the Android toolkit](/en/api-reference/api-ref/conversational-ai/client-toolkit/android#installation). Refer to [Folder structure](#reference) to understand the role of each file.

    2. **Create a toolkit instance**

       Create a configuration object with the RTC SDK and Signaling engine instances. Set the transcript rendering mode, then use the configuration to create a toolkit instance.

       \`\`\`kotlin
       // Create configuration objects for the RTC and RTM instances
       val config = ConversationalAIAPIConfig(
           rtcEngine = rtcEngineInstance,
           rtmClient = rtmClientInstance,

           // Set the transcript rendering mode. Options:
           // - TranscriptRenderMode.Word: render transcript word by word.
           // - TranscriptRenderMode.Text: render the full sentence at once.
           renderMode = TranscriptRenderMode.Word,
           enableLog = true
       )

       // Create component instance
       val api = ConversationalAIAPIImpl(config)
       \`\`\`

    3. **Subscribe to the channel**

       Transcript data is delivered through Signaling channel messages. To receive transcript data, call \`subscribeMessage\` before starting the agent session.

       \`\`\`kotlin
       api.subscribeMessage("channelName") { error ->
           if (error != null) {
               // Handle error
           }
       }
       \`\`\`

    4. **Receive transcript**

       Call the \`addHandler\` method to register your implementation of the transcription callback.

       \`\`\`kotlin
       api.addHandler(covEventHandler)
       \`\`\`

    5. **Implement UI rendering logic**

       Inherit your UI module from the \`IConversationalAIAPIEventHandler\` interface. Implement the \`onTranscriptUpdated\` method to handle transcript rendering to the UI.

       \`\`\`kotlin
       private val covEventHandler = object : IConversationalAIAPIEventHandler {
           override fun onTranscriptUpdated(agentUserId: String, transcript: Transcript) {
               // Handle transcript data and update the UI here
           }
       }
       \`\`\`

    6. **Add a conversational AI agent to the channel**

       To [start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join), configure the following parameters in your \`POST\` request:

       | Parameter                               | Description                                        | Required |
       | --------------------------------------- | -------------------------------------------------- | -------- |
       | \`advanced_features.enable_rtm: true\`    | Starts the Signaling service                       | Yes      |
       | \`parameters.data_channel: "rtm"\`        | Enables Signaling as the data transmission channel | Yes      |
       | \`parameters.enable_metrics: true\`       | Enables agent performance data collection          | Optional |
       | \`parameters.enable_error_message: true\` | Enables reporting of agent error events            | Optional |

       After a successful response, the agent joins the specified RTC channel and is ready to interact with the user.

    7. **Unsubscribe from the channel**

       After an agent session ends, unsubscribe from channel messages to release transcription resources.

       \`\`\`kotlin
       api.unsubscribeMessage("channelName") { error ->
           if (error != null) {
               // Handle the error
           }
       }
       \`\`\`

    8. **Release resources**

       At the end of each call, use the \`destroy\` method to clean up the cache.

       \`\`\`kotlin
       api.destroy()
       \`\`\`
  </TabsContent>

  <TabsContent value="ios">
    1. **Integrate the toolkit**

       Add the toolkit to your project using CocoaPods, Swift Package Manager, or source code. See [Install the iOS toolkit](/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#installation). Refer to [Folder structure](#reference) to understand the role of each file.

    2. **Create a toolkit instance**

       Create a configuration object with the RTC SDK and Signaling engine instances. Set the transcript rendering mode, then use the configuration to create a toolkit instance.

       \`\`\`swift
       // Create a configuration object for the RTC and RTM instances
       let config = ConversationalAIAPIConfig(
           rtcEngine: rtcEngine,
           rtmEngine: rtmEngine,
           /**
            * Set the transcript rendering mode. Available options:
            * - .words: Word-by-word rendering mode.
            * - .text: Sentence-by-sentence rendering mode.
            */
           renderMode: .words,
           enableLog: true
       )

       // Create the component instance
       convoAIAPI = ConversationalAIAPIImpl(config: config)
       \`\`\`

    3. **Subscribe to the channel**

       Transcript data is delivered through Signaling channel messages. To receive transcript data, call \`subscribeMessage\` before starting the agent session.

       \`\`\`swift
       convoAIAPI.subscribeMessage(channelName: channelName) { error in
           if let error = error {
               print("Subscription failed: \\(error.message)")
           } else {
               print("Subscription successful")
           }
       }
       \`\`\`

    4. **Receive transcript**

       Call the \`addHandler\` method to register and implement the transcript callback.

       \`\`\`swift
       convoAIAPI.addHandler(handler: self)
       \`\`\`

    5. **Implement UI rendering logic**

       Implement the \`ConversationalAIAPIEventHandler\` protocol in your UI module, and use \`onTranscriptUpdated\` to handle and render transcript updates.

       \`\`\`swift
       extension ChatViewController: ConversationalAIAPIEventHandler {
           public func onTranscriptUpdated(agentUserId: String, transcript: Transcript) {
               // Handle transcript data and update the UI here
           }
       }
       \`\`\`

    6. **Add a conversational AI agent to the channel**

       To [start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join), configure the following parameters in your \`POST\` request:

       | Parameter                               | Description                                        | Required |
       | --------------------------------------- | -------------------------------------------------- | -------- |
       | \`advanced_features.enable_rtm: true\`    | Starts the Signaling service                       | Yes      |
       | \`parameters.data_channel: "rtm"\`        | Enables Signaling as the data transmission channel | Yes      |
       | \`parameters.enable_metrics: true\`       | Enables agent performance data collection          | Optional |
       | \`parameters.enable_error_message: true\` | Enables reporting of agent error events            | Optional |

       After a successful response, the agent joins the specified RTC channel and is ready to interact with the user.

    7. **Unsubscribe from the channel**

       After each agent session ends, unsubscribe from channel messages to release transcript-related resources.

       \`\`\`swift
       convoAIAPI.unsubscribeMessage(channelName: channelName) { error in
           if let error = error {
               print("Unsubscription failed: \\(error.message)")
           } else {
               print("Unsubscribed successfully")
           }
       }
       \`\`\`

    8. **Release resources**

       At the end of each call, use the \`destroy\` method to clean up the cache.

       \`\`\`swift
       convoAIAPI.destroy()
       \`\`\`
  </TabsContent>

  <TabsContent value="web">
    1. **Integrate the toolkit**

       Add the toolkit to your project using a package manager or source code. See [Install the Web toolkit](/en/api-reference/api-ref/conversational-ai/client-toolkit/web#installation). Refer to [Folder structure](#reference) to understand the role of each file.

    2. **Create a toolkit instance**

       Before joining an RTC channel, create RTC SDK and Signaling engine instances and pass them into the toolkit instance.

       \`\`\`ts
       // Initialize the component
       ConversationalAIAPI.init({
         rtcEngine,
         rtmEngine,

         /**
          * Set the rendering mode for transcript. Available options:
          * - ETranscriptHelperMode.WORD: render transcript word by word.
          * - ETranscriptHelperMode.TEXT: render the full transcript at once.
          */
         renderMode: ETranscriptHelperMode.WORD,
       })

       // Get the API instance (singleton)
       const conversationalAIAPI = ConversationalAIAPI.getInstance()
       \`\`\`

    3. **Set audio parameters**

       In word-by-word rendering mode, you must receive audio timestamp metadata from RTC to synchronize subtitles with speech. Before creating the client object, configure the following parameter:

       \`\`\`ts
       AgoraRTC.setParameter('ENABLE_AUDIO_PTS_METADATA', true)
       const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' })
       \`\`\`

    4. **Subscribe to the channel**

       Agent-related events are delivered through Signaling messages. Before starting an agent session, call \`subscribeMessage\` to receive these events:

       \`\`\`ts
       conversationalAIAPI.subscribeMessage(channel_name)
       \`\`\`

    5. **Receive transcript**

       Register an event listener to receive transcript updates:

       \`\`\`tsx
       import * as React from 'react'
       import {
         type IUserTranscription,
         type IAgentTranscription,
         type ISubtitleHelperItem,
         EConversationalAIAPIEvents,
       } from '@/conversational-ai-api/type'
       import { ConversationalAIAPI } from '@/conversational-ai-api'

       export const ChatHistory = () => {
         const [chatHistory, setChatHistory] = React.useState<
           ISubtitleHelperItem<Partial<IUserTranscription | IAgentTranscription>>[]
         >([])

         const conversationalAIAPI = ConversationalAIAPI.getInstance()
         conversationalAIAPI.on(
           EConversationalAIAPIEvents.TRANSCRIPT_UPDATED,
           setChatHistory
         )

         return (
           <>
             {chatHistory.map((message) => (
               <div key={\`\${message.uid}-\${message.turn_id}\`}>
                 {message.uid}: {message.text}
               </div>
             ))}
           </>
         )
       }
       \`\`\`

    6. **Add a conversational AI agent to the channel**

       To [start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join), configure the following parameters in your \`POST\` request:

       | Parameter                               | Description                                        | Required |
       | --------------------------------------- | -------------------------------------------------- | -------- |
       | \`advanced_features.enable_rtm: true\`    | Starts the Signaling service                       | Yes      |
       | \`parameters.data_channel: "rtm"\`        | Enables Signaling as the data transmission channel | Yes      |
       | \`parameters.enable_metrics: true\`       | Enables agent performance data collection          | Optional |
       | \`parameters.enable_error_message: true\` | Enables reporting of agent error events            | Optional |

       After a successful response, the agent joins the specified RTC channel and is ready to interact with the user.

    7. **Unsubscribe from the channel**

       After each agent session ends, unsubscribe from channel messages to release resources associated with callback events.

       \`\`\`ts
       conversationalAIAPI.unsubscribeMessage(channel_name)
       \`\`\`

    8. **Release resources**

       At the end of each call, use the \`destroy\` method to clean up the cache.

       \`\`\`ts
       conversationalAIAPI.destroy()
       \`\`\`
  </TabsContent>
</Tabs>

## Reference [#reference]

This section contains supporting information that completes the guidance on this page.

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
    **Folder structure**

    * \`IConversationalAIAPI.kt\`: API interface and related data structures and enumerations
    * \`ConversationalAIAPIImpl.kt\`: ConversationalAI API main implementation logic
    * \`ConversationalAIUtils.kt\`: tool functions and event callback management
    * \`subRender/\`
      * \`v3/\`: transcription module
      * \`TranscriptionController.kt\`: transcription controller
      * \`MessageParser.kt\`: message parser

    **API reference**

    * [\`addHandler\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/android#addhandler)
    * [\`subscribeMessage\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/android#subscribemessage)
    * [\`unsubscribeMessage\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/android#unsubscribemessage)
    * [\`destroy\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/android#destroy)
    * [\`onTranscriptUpdated\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/android#ontranscriptupdated)
  </TabsContent>

  <TabsContent value="ios">
    **Folder structure**

    * \`ConversationalAIAPI.swift\`: API interface and related data structures and enumerations
    * \`ConversationalAIAPIImpl.swift\`: ConversationalAI API main implementation logic
    * \`Transcription/\`
      * \`TranscriptionController.swift\`: transcription controller

    **API reference**

    * [\`addHandler\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#addhandler)
    * [\`subscribeMessage\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#subscribemessage)
    * [\`unsubscribeMessage\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#unsubscribemessage)
    * [\`destroy\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#destroy)
    * [\`onTranscriptUpdated\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#ontranscriptupdated)
  </TabsContent>

  <TabsContent value="web">
    **Folder structure**

    * \`index.ts\`: API class
    * \`type.ts\`: API interface and related data structures and enumerations
    * \`utils/\`
      * \`index.ts\`: API utility functions
      * \`events.ts\`: event management class
      * \`sub-render.ts\`: transcription module

    **API reference**

    * [\`IConversationalAIAPIEventHandler interface\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/web#iconversationalaiapieventhandlers-interface)
    * [\`EConversationalAIAPIEvents\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/web#econversationalaiapievents)
    * [\`subscribeMessage\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/web#subscribemessage)
    * [\`unsubscribeMessage\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/web#unsubscribe)
    * [\`destroy\`](/en/api-reference/api-ref/conversational-ai/client-toolkit/web#destroy)
  </TabsContent>
</Tabs>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When interacting with conversational AI in real time, you can enable live transcripts to display the conversation content. This page explains how to implement live transcripts in your app."
  }, {
    heading: "understand-the-tech",
    content: "Agora provides a flexible, scalable, and standardized conversational AI engine toolkit. The toolkit supports **iOS**, **Android**, and **Web** platforms, and encapsulates scenario-based APIs. You can use these APIs to integrate the capabilities of the Agora Signaling SDK and Agora RTC SDK to enable the following features:"
  }, {
    heading: "understand-the-tech",
    content: "Interrupt agents"
  }, {
    heading: "understand-the-tech",
    content: "Display live transcripts"
  }, {
    heading: "understand-the-tech",
    content: "Client-side events"
  }, {
    heading: "understand-the-tech",
    content: "Set optimal audio parameters for iOS and Android"
  }, {
    heading: "understand-the-tech",
    content: "Send picture messages"
  }, {
    heading: "understand-the-tech",
    content: "The toolkit receives transcript content through the `onTranscriptUpdated` callback and supports monitoring the following transcript data types:"
  }, {
    heading: "understand-the-tech",
    content: "**Agent transcript**: The agent's speech, including streaming updates and final results."
  }, {
    heading: "understand-the-tech",
    content: "**User transcript**: The user's speech, including real-time display and status management."
  }, {
    heading: "understand-the-tech",
    content: "**Transcript status**: State changes such as in progress, completed, or interrupted."
  }, {
    heading: "understand-the-tech",
    content: "The following diagram outlines the step-by-step process to integrate live transcript functionality into your application:"
  }, {
    heading: "prerequisites",
    content: "Before you begin, ensure the following:"
  }, {
    heading: "prerequisites",
    content: "You have implemented the Conversational AI Engine quickstart."
  }, {
    heading: "prerequisites",
    content: "Your app integrates Agora RTC SDK v4.5.1 or later and includes the RTC SDK quickstart."
  }, {
    heading: "prerequisites",
    content: "You have enabled Signaling in the Agora Console and completed the Signaling quickstart for basic messaging."
  }, {
    heading: "prerequisites",
    content: "You maintain active and authenticated RTC and Signaling instances that persist beyond the component lifecycle. The toolkit does not manage RTC or Signaling initialization, lifecycle, or authentication."
  }, {
    heading: "implementation",
    content: "This section describes how to receive transcript content from the transcript processing module and display it in your app UI."
  }, {
    heading: "implementation",
    content: "**Integrate the toolkit**"
  }, {
    heading: "implementation",
    content: "Add the toolkit to your project using Maven or source code. See Install the Android toolkit. Refer to Folder structure to understand the role of each file."
  }, {
    heading: "implementation",
    content: "**Create a toolkit instance**"
  }, {
    heading: "implementation",
    content: "Create a configuration object with the RTC SDK and Signaling engine instances. Set the transcript rendering mode, then use the configuration to create a toolkit instance."
  }, {
    heading: "implementation",
    content: "**Subscribe to the channel**"
  }, {
    heading: "implementation",
    content: "Transcript data is delivered through Signaling channel messages. To receive transcript data, call `subscribeMessage` before starting the agent session."
  }, {
    heading: "implementation",
    content: "**Receive transcript**"
  }, {
    heading: "implementation",
    content: "Call the `addHandler` method to register your implementation of the transcription callback."
  }, {
    heading: "implementation",
    content: "**Implement UI rendering logic**"
  }, {
    heading: "implementation",
    content: "Inherit your UI module from the `IConversationalAIAPIEventHandler` interface. Implement the `onTranscriptUpdated` method to handle transcript rendering to the UI."
  }, {
    heading: "implementation",
    content: "**Add a conversational AI agent to the channel**"
  }, {
    heading: "implementation",
    content: "To start a conversational AI agent, configure the following parameters in your `POST` request:"
  }, {
    heading: "implementation",
    content: "Parameter"
  }, {
    heading: "implementation",
    content: "Description"
  }, {
    heading: "implementation",
    content: "Required"
  }, {
    heading: "implementation",
    content: "`advanced_features.enable_rtm: true`"
  }, {
    heading: "implementation",
    content: "Starts the Signaling service"
  }, {
    heading: "implementation",
    content: "Yes"
  }, {
    heading: "implementation",
    content: '`parameters.data_channel: "rtm"`'
  }, {
    heading: "implementation",
    content: "Enables Signaling as the data transmission channel"
  }, {
    heading: "implementation",
    content: "Yes"
  }, {
    heading: "implementation",
    content: "`parameters.enable_metrics: true`"
  }, {
    heading: "implementation",
    content: "Enables agent performance data collection"
  }, {
    heading: "implementation",
    content: "Optional"
  }, {
    heading: "implementation",
    content: "`parameters.enable_error_message: true`"
  }, {
    heading: "implementation",
    content: "Enables reporting of agent error events"
  }, {
    heading: "implementation",
    content: "Optional"
  }, {
    heading: "implementation",
    content: "After a successful response, the agent joins the specified RTC channel and is ready to interact with the user."
  }, {
    heading: "implementation",
    content: "**Unsubscribe from the channel**"
  }, {
    heading: "implementation",
    content: "After an agent session ends, unsubscribe from channel messages to release transcription resources."
  }, {
    heading: "implementation",
    content: "**Release resources**"
  }, {
    heading: "implementation",
    content: "At the end of each call, use the `destroy` method to clean up the cache."
  }, {
    heading: "implementation",
    content: "**Integrate the toolkit**"
  }, {
    heading: "implementation",
    content: "Add the toolkit to your project using CocoaPods, Swift Package Manager, or source code. See Install the iOS toolkit. Refer to Folder structure to understand the role of each file."
  }, {
    heading: "implementation",
    content: "**Create a toolkit instance**"
  }, {
    heading: "implementation",
    content: "Create a configuration object with the RTC SDK and Signaling engine instances. Set the transcript rendering mode, then use the configuration to create a toolkit instance."
  }, {
    heading: "implementation",
    content: "**Subscribe to the channel**"
  }, {
    heading: "implementation",
    content: "Transcript data is delivered through Signaling channel messages. To receive transcript data, call `subscribeMessage` before starting the agent session."
  }, {
    heading: "implementation",
    content: "**Receive transcript**"
  }, {
    heading: "implementation",
    content: "Call the `addHandler` method to register and implement the transcript callback."
  }, {
    heading: "implementation",
    content: "**Implement UI rendering logic**"
  }, {
    heading: "implementation",
    content: "Implement the `ConversationalAIAPIEventHandler` protocol in your UI module, and use `onTranscriptUpdated` to handle and render transcript updates."
  }, {
    heading: "implementation",
    content: "**Add a conversational AI agent to the channel**"
  }, {
    heading: "implementation",
    content: "To start a conversational AI agent, configure the following parameters in your `POST` request:"
  }, {
    heading: "implementation",
    content: "Parameter"
  }, {
    heading: "implementation",
    content: "Description"
  }, {
    heading: "implementation",
    content: "Required"
  }, {
    heading: "implementation",
    content: "`advanced_features.enable_rtm: true`"
  }, {
    heading: "implementation",
    content: "Starts the Signaling service"
  }, {
    heading: "implementation",
    content: "Yes"
  }, {
    heading: "implementation",
    content: '`parameters.data_channel: "rtm"`'
  }, {
    heading: "implementation",
    content: "Enables Signaling as the data transmission channel"
  }, {
    heading: "implementation",
    content: "Yes"
  }, {
    heading: "implementation",
    content: "`parameters.enable_metrics: true`"
  }, {
    heading: "implementation",
    content: "Enables agent performance data collection"
  }, {
    heading: "implementation",
    content: "Optional"
  }, {
    heading: "implementation",
    content: "`parameters.enable_error_message: true`"
  }, {
    heading: "implementation",
    content: "Enables reporting of agent error events"
  }, {
    heading: "implementation",
    content: "Optional"
  }, {
    heading: "implementation",
    content: "After a successful response, the agent joins the specified RTC channel and is ready to interact with the user."
  }, {
    heading: "implementation",
    content: "**Unsubscribe from the channel**"
  }, {
    heading: "implementation",
    content: "After each agent session ends, unsubscribe from channel messages to release transcript-related resources."
  }, {
    heading: "implementation",
    content: "**Release resources**"
  }, {
    heading: "implementation",
    content: "At the end of each call, use the `destroy` method to clean up the cache."
  }, {
    heading: "implementation",
    content: "**Integrate the toolkit**"
  }, {
    heading: "implementation",
    content: "Add the toolkit to your project using a package manager or source code. See Install the Web toolkit. Refer to Folder structure to understand the role of each file."
  }, {
    heading: "implementation",
    content: "**Create a toolkit instance**"
  }, {
    heading: "implementation",
    content: "Before joining an RTC channel, create RTC SDK and Signaling engine instances and pass them into the toolkit instance."
  }, {
    heading: "implementation",
    content: "**Set audio parameters**"
  }, {
    heading: "implementation",
    content: "In word-by-word rendering mode, you must receive audio timestamp metadata from RTC to synchronize subtitles with speech. Before creating the client object, configure the following parameter:"
  }, {
    heading: "implementation",
    content: "**Subscribe to the channel**"
  }, {
    heading: "implementation",
    content: "Agent-related events are delivered through Signaling messages. Before starting an agent session, call `subscribeMessage` to receive these events:"
  }, {
    heading: "implementation",
    content: "**Receive transcript**"
  }, {
    heading: "implementation",
    content: "Register an event listener to receive transcript updates:"
  }, {
    heading: "implementation",
    content: "**Add a conversational AI agent to the channel**"
  }, {
    heading: "implementation",
    content: "To start a conversational AI agent, configure the following parameters in your `POST` request:"
  }, {
    heading: "implementation",
    content: "Parameter"
  }, {
    heading: "implementation",
    content: "Description"
  }, {
    heading: "implementation",
    content: "Required"
  }, {
    heading: "implementation",
    content: "`advanced_features.enable_rtm: true`"
  }, {
    heading: "implementation",
    content: "Starts the Signaling service"
  }, {
    heading: "implementation",
    content: "Yes"
  }, {
    heading: "implementation",
    content: '`parameters.data_channel: "rtm"`'
  }, {
    heading: "implementation",
    content: "Enables Signaling as the data transmission channel"
  }, {
    heading: "implementation",
    content: "Yes"
  }, {
    heading: "implementation",
    content: "`parameters.enable_metrics: true`"
  }, {
    heading: "implementation",
    content: "Enables agent performance data collection"
  }, {
    heading: "implementation",
    content: "Optional"
  }, {
    heading: "implementation",
    content: "`parameters.enable_error_message: true`"
  }, {
    heading: "implementation",
    content: "Enables reporting of agent error events"
  }, {
    heading: "implementation",
    content: "Optional"
  }, {
    heading: "implementation",
    content: "After a successful response, the agent joins the specified RTC channel and is ready to interact with the user."
  }, {
    heading: "implementation",
    content: "**Unsubscribe from the channel**"
  }, {
    heading: "implementation",
    content: "After each agent session ends, unsubscribe from channel messages to release resources associated with callback events."
  }, {
    heading: "implementation",
    content: "**Release resources**"
  }, {
    heading: "implementation",
    content: "At the end of each call, use the `destroy` method to clean up the cache."
  }, {
    heading: "reference",
    content: "This section contains supporting information that completes the guidance on this page."
  }, {
    heading: "reference",
    content: "**Folder structure**"
  }, {
    heading: "reference",
    content: "`IConversationalAIAPI.kt`: API interface and related data structures and enumerations"
  }, {
    heading: "reference",
    content: "`ConversationalAIAPIImpl.kt`: ConversationalAI API main implementation logic"
  }, {
    heading: "reference",
    content: "`ConversationalAIUtils.kt`: tool functions and event callback management"
  }, {
    heading: "reference",
    content: "`subRender/`"
  }, {
    heading: "reference",
    content: "`v3/`: transcription module"
  }, {
    heading: "reference",
    content: "`TranscriptionController.kt`: transcription controller"
  }, {
    heading: "reference",
    content: "`MessageParser.kt`: message parser"
  }, {
    heading: "reference",
    content: "**API reference**"
  }, {
    heading: "reference",
    content: "`addHandler`"
  }, {
    heading: "reference",
    content: "`subscribeMessage`"
  }, {
    heading: "reference",
    content: "`unsubscribeMessage`"
  }, {
    heading: "reference",
    content: "`destroy`"
  }, {
    heading: "reference",
    content: "`onTranscriptUpdated`"
  }, {
    heading: "reference",
    content: "**Folder structure**"
  }, {
    heading: "reference",
    content: "`ConversationalAIAPI.swift`: API interface and related data structures and enumerations"
  }, {
    heading: "reference",
    content: "`ConversationalAIAPIImpl.swift`: ConversationalAI API main implementation logic"
  }, {
    heading: "reference",
    content: "`Transcription/`"
  }, {
    heading: "reference",
    content: "`TranscriptionController.swift`: transcription controller"
  }, {
    heading: "reference",
    content: "**API reference**"
  }, {
    heading: "reference",
    content: "`addHandler`"
  }, {
    heading: "reference",
    content: "`subscribeMessage`"
  }, {
    heading: "reference",
    content: "`unsubscribeMessage`"
  }, {
    heading: "reference",
    content: "`destroy`"
  }, {
    heading: "reference",
    content: "`onTranscriptUpdated`"
  }, {
    heading: "reference",
    content: "**Folder structure**"
  }, {
    heading: "reference",
    content: "`index.ts`: API class"
  }, {
    heading: "reference",
    content: "`type.ts`: API interface and related data structures and enumerations"
  }, {
    heading: "reference",
    content: "`utils/`"
  }, {
    heading: "reference",
    content: "`index.ts`: API utility functions"
  }, {
    heading: "reference",
    content: "`events.ts`: event management class"
  }, {
    heading: "reference",
    content: "`sub-render.ts`: transcription module"
  }, {
    heading: "reference",
    content: "**API reference**"
  }, {
    heading: "reference",
    content: "`IConversationalAIAPIEventHandler interface`"
  }, {
    heading: "reference",
    content: "`EConversationalAIAPIEvents`"
  }, {
    heading: "reference",
    content: "`subscribeMessage`"
  }, {
    heading: "reference",
    content: "`unsubscribeMessage`"
  }, {
    heading: "reference",
    content: "`destroy`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implementation",
    content: "Implementation"
  }, {
    id: "reference",
    content: "Reference"
  }]
};
export let toc = [{
  depth: 2,
  url: "#understand-the-tech",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
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
  }, { Tabs, TabsContent, TabsList, TabsTrigger } = _components;
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
      children: "When interacting with conversational AI in real time, you can enable live transcripts to display the conversation content. This page explains how to implement live transcripts in your app."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora provides a flexible, scalable, and standardized conversational AI engine toolkit. The toolkit supports ", _jsx(_components.strong, {
        children: "iOS"
      }), ", ", _jsx(_components.strong, {
        children: "Android"
      }), ", and ", _jsx(_components.strong, {
        children: "Web"
      }), " platforms, and encapsulates scenario-based APIs. You can use these APIs to integrate the capabilities of the ", _jsx(_components.a, {
        href: "/en/realtime-media/rtm",
        children: "Agora Signaling SDK"
      }), " and ", _jsx(_components.a, {
        href: "../../realtime-media/rtc/get-started-sdk",
        children: "Agora RTC SDK"
      }), " to enable the following features:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "shape-the-conversation/interrupt-agent",
          children: "Interrupt agents"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "transcripts",
          children: "Display live transcripts"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "handle-runtime-events/event-notifications",
          children: "Client-side events"
        })
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../best-practices/audio-setup",
          children: "Set optimal audio parameters"
        }), " for iOS and Android"]
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "send-multimodal-messages",
          children: "Send picture messages"
        })
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The toolkit receives transcript content through the ", _jsx(_components.code, {
        children: "onTranscriptUpdated"
      }), " callback and supports monitoring the following transcript data types:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Agent transcript"
        }), ": The agent's speech, including streaming updates and final results."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "User transcript"
        }), ": The user's speech, including real-time display and status management."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Transcript status"
        }), ": State changes such as in progress, completed, or interrupted."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The following diagram outlines the step-by-step process to integrate live transcript functionality into your application:"
    }), `
`, _jsxs("details", {
      children: [_jsx("summary", {
        children: "Transcript rendering workflow"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/conversational-ai/transcript-workflow.svg",
          alt: ""
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Before you begin, ensure the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["You have implemented the Conversational AI Engine ", _jsx(_components.a, {
          href: "../get-started/quickstart",
          children: "quickstart"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Your app integrates Agora RTC SDK v4.5.1 or later and includes the ", _jsx(_components.a, {
          href: "../../realtime-media/rtc/get-started-sdk",
          children: "RTC SDK quickstart"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["You have enabled Signaling in the Agora Console and completed the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtm/quickstart",
          children: "Signaling quickstart"
        }), " for basic messaging."]
      }), `
`, _jsx(_components.li, {
        children: "You maintain active and authenticated RTC and Signaling instances that persist beyond the component lifecycle. The toolkit does not manage RTC or Signaling initialization, lifecycle, or authentication."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsx(_components.p, {
      children: "This section describes how to receive transcript content from the transcript processing module and display it in your app UI."
    }), `
`, _jsxs(Tabs, {
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
        children: _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Integrate the toolkit"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Add the toolkit to your project using Maven or source code. See ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/android#installation",
                children: "Install the Android toolkit"
              }), ". Refer to ", _jsx(_components.a, {
                href: "#reference",
                children: "Folder structure"
              }), " to understand the role of each file."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Create a toolkit instance"
              })
            }), `
`, _jsx(_components.p, {
              children: "Create a configuration object with the RTC SDK and Signaling engine instances. Set the transcript rendering mode, then use the configuration to create a toolkit instance."
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
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create configuration objects for the RTC and RTM instances"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: " config "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    rtcEngine "
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
                      children: " rtcEngineInstance,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    rtmClient "
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
                      children: " rtmClientInstance,"
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
                      children: "    // Set the transcript rendering mode. Options:"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // - TranscriptRenderMode.Word: render transcript word by word."
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // - TranscriptRenderMode.Text: render the full sentence at once."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    renderMode "
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
                      children: " TranscriptRenderMode.Word,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    enableLog "
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
                      children: "// Create component instance"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: " api "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " ConversationalAIAPIImpl"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(config)"
                    })]
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
                children: "Subscribe to the channel"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Transcript data is delivered through Signaling channel messages. To receive transcript data, call ", _jsx(_components.code, {
                children: "subscribeMessage"
              }), " before starting the agent session."]
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "api."
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
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"channelName"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ") { error "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "->"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    if"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " (error "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "!="
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
                      children: ") {"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "        // Handle error"
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
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Receive transcript"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Call the ", _jsx(_components.code, {
                children: "addHandler"
              }), " method to register your implementation of the transcription callback."]
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "api."
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
                      children: "(covEventHandler)"
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
              children: _jsx(_components.strong, {
                children: "Implement UI rendering logic"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Inherit your UI module from the ", _jsx(_components.code, {
                children: "IConversationalAIAPIEventHandler"
              }), " interface. Implement the ", _jsx(_components.code, {
                children: "onTranscriptUpdated"
              }), " method to handle transcript rendering to the UI."]
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
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " val"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " covEventHandler "
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
                      children: " object"
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
                      children: "IConversationalAIAPIEventHandler"
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
                      children: "    override"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " fun"
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
                      children: ") {"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "        // Handle transcript data and update the UI here"
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
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Add a conversational AI agent to the channel"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["To ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "start a conversational AI agent"
              }), ", configure the following parameters in your ", _jsx(_components.code, {
                children: "POST"
              }), " request:"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    children: "Parameter"
                  }), _jsx(_components.th, {
                    children: "Description"
                  }), _jsx(_components.th, {
                    children: "Required"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "advanced_features.enable_rtm: true"
                    })
                  }), _jsx(_components.td, {
                    children: "Starts the Signaling service"
                  }), _jsx(_components.td, {
                    children: "Yes"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: 'parameters.data_channel: "rtm"'
                    })
                  }), _jsx(_components.td, {
                    children: "Enables Signaling as the data transmission channel"
                  }), _jsx(_components.td, {
                    children: "Yes"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "parameters.enable_metrics: true"
                    })
                  }), _jsx(_components.td, {
                    children: "Enables agent performance data collection"
                  }), _jsx(_components.td, {
                    children: "Optional"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "parameters.enable_error_message: true"
                    })
                  }), _jsx(_components.td, {
                    children: "Enables reporting of agent error events"
                  }), _jsx(_components.td, {
                    children: "Optional"
                  })]
                })]
              })]
            }), `
`, _jsx(_components.p, {
              children: "After a successful response, the agent joins the specified RTC channel and is ready to interact with the user."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Unsubscribe from the channel"
              })
            }), `
`, _jsx(_components.p, {
              children: "After an agent session ends, unsubscribe from channel messages to release transcription resources."
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "api."
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
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"channelName"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ") { error "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "->"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    if"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " (error "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "!="
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
                      children: ") {"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "        // Handle the error"
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
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Release resources"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["At the end of each call, use the ", _jsx(_components.code, {
                children: "destroy"
              }), " method to clean up the cache."]
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "api."
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
`]
          }), `
`]
        })
      }), _jsx(TabsContent, {
        value: "ios",
        children: _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Integrate the toolkit"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Add the toolkit to your project using CocoaPods, Swift Package Manager, or source code. See ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#installation",
                children: "Install the iOS toolkit"
              }), ". Refer to ", _jsx(_components.a, {
                href: "#reference",
                children: "Folder structure"
              }), " to understand the role of each file."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Create a toolkit instance"
              })
            }), `
`, _jsx(_components.p, {
              children: "Create a configuration object with the RTC SDK and Signaling engine instances. Set the transcript rendering mode, then use the configuration to create a toolkit instance."
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
                      children: "// Create a configuration object for the RTC and RTM instances"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " config "
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
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "    rtcEngine"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": rtcEngine,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "    rtmEngine"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": rtmEngine,"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    /**"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "     * Set the transcript rendering mode. Available options:"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "     * - .words: Word-by-word rendering mode."
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "     * - .text: Sentence-by-sentence rendering mode."
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "     */"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "    renderMode"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": .words,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "    enableLog"
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
                      children: "// Create the component instance"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "convoAIAPI "
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
                      children: " ConversationalAIAPIImpl"
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
                      children: "config"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": config)"
                    })]
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
                children: "Subscribe to the channel"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Transcript data is delivered through Signaling channel messages. To receive transcript data, call ", _jsx(_components.code, {
                children: "subscribeMessage"
              }), " before starting the agent session."]
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
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "convoAIAPI."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "subscribeMessage"
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
                      children: "channelName"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": channelName) { error "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "in"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    if"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " error "
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
                      children: " error {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "        print"
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
                      children: '"Subscription failed: '
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "\\(error."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "message"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ")"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    } "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "else"
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
                      children: "        print"
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
                      children: '"Subscription successful"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
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
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Receive transcript"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Call the ", _jsx(_components.code, {
                children: "addHandler"
              }), " method to register and implement the transcript callback."]
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
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "convoAIAPI."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "addHandler"
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
                      children: "handler"
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
                      children: "self"
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
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Implement UI rendering logic"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Implement the ", _jsx(_components.code, {
                children: "ConversationalAIAPIEventHandler"
              }), " protocol in your UI module, and use ", _jsx(_components.code, {
                children: "onTranscriptUpdated"
              }), " to handle and render transcript updates."]
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
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "extension"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " ChatViewController"
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
                      children: "ConversationalAIAPIEventHandler "
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
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    public"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " func"
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
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "agentUserId"
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
                      children: "transcript"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": Transcript) {"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "        // Handle transcript data and update the UI here"
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
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Add a conversational AI agent to the channel"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["To ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "start a conversational AI agent"
              }), ", configure the following parameters in your ", _jsx(_components.code, {
                children: "POST"
              }), " request:"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    children: "Parameter"
                  }), _jsx(_components.th, {
                    children: "Description"
                  }), _jsx(_components.th, {
                    children: "Required"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "advanced_features.enable_rtm: true"
                    })
                  }), _jsx(_components.td, {
                    children: "Starts the Signaling service"
                  }), _jsx(_components.td, {
                    children: "Yes"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: 'parameters.data_channel: "rtm"'
                    })
                  }), _jsx(_components.td, {
                    children: "Enables Signaling as the data transmission channel"
                  }), _jsx(_components.td, {
                    children: "Yes"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "parameters.enable_metrics: true"
                    })
                  }), _jsx(_components.td, {
                    children: "Enables agent performance data collection"
                  }), _jsx(_components.td, {
                    children: "Optional"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "parameters.enable_error_message: true"
                    })
                  }), _jsx(_components.td, {
                    children: "Enables reporting of agent error events"
                  }), _jsx(_components.td, {
                    children: "Optional"
                  })]
                })]
              })]
            }), `
`, _jsx(_components.p, {
              children: "After a successful response, the agent joins the specified RTC channel and is ready to interact with the user."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Unsubscribe from the channel"
              })
            }), `
`, _jsx(_components.p, {
              children: "After each agent session ends, unsubscribe from channel messages to release transcript-related resources."
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
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "convoAIAPI."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "unsubscribeMessage"
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
                      children: "channelName"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": channelName) { error "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "in"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    if"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " let"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " error "
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
                      children: " error {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "        print"
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
                      children: '"Unsubscription failed: '
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "\\(error."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "message"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ")"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    } "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "else"
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
                      children: "        print"
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
                      children: '"Unsubscribed successfully"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
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
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Release resources"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["At the end of each call, use the ", _jsx(_components.code, {
                children: "destroy"
              }), " method to clean up the cache."]
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
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "convoAIAPI."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
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
`]
          }), `
`]
        })
      }), _jsx(TabsContent, {
        value: "web",
        children: _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Integrate the toolkit"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Add the toolkit to your project using a package manager or source code. See ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/web#installation",
                children: "Install the Web toolkit"
              }), ". Refer to ", _jsx(_components.a, {
                href: "#reference",
                children: "Folder structure"
              }), " to understand the role of each file."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Create a toolkit instance"
              })
            }), `
`, _jsx(_components.p, {
              children: "Before joining an RTC channel, create RTC SDK and Signaling engine instances and pass them into the toolkit instance."
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
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Initialize the component"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "ConversationalAIAPI."
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
                      children: "  rtcEngine,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  rtmEngine,"
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
                      children: "  /**"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "   * Set the rendering mode for transcript. Available options:"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "   * - ETranscriptHelperMode.WORD: render transcript word by word."
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "   * - ETranscriptHelperMode.TEXT: render the full transcript at once."
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "   */"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  renderMode: ETranscriptHelperMode."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "WORD"
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
                      children: "})"
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
                      children: "// Get the API instance (singleton)"
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
                      children: " conversationalAIAPI"
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
                      children: " ConversationalAIAPI."
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
                children: "Set audio parameters"
              })
            }), `
`, _jsx(_components.p, {
              children: "In word-by-word rendering mode, you must receive audio timestamp metadata from RTC to synchronize subtitles with speech. Before creating the client object, configure the following parameter:"
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
                      children: "AgoraRTC."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setParameter"
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
                      children: "'ENABLE_AUDIO_PTS_METADATA'"
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
                      children: "true"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })]
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
                      children: " client"
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
                      children: " AgoraRTC."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "createClient"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "({ mode: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "'rtc'"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", codec: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "'vp8'"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " })"
                    })]
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
                children: "Subscribe to the channel"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Agent-related events are delivered through Signaling messages. Before starting an agent session, call ", _jsx(_components.code, {
                children: "subscribeMessage"
              }), " to receive these events:"]
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
                      children: "conversationalAIAPI."
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
                      children: "(channel_name)"
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
              children: _jsx(_components.strong, {
                children: "Receive transcript"
              })
            }), `
`, _jsx(_components.p, {
              children: "Register an event listener to receive transcript updates:"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="currentColor" /></svg>',
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
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " *"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " as"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " React "
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
                      children: " 'react'"
                    })]
                  }), `
`, _jsxs(_components.span, {
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
                      children: "  type"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " IUserTranscription,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  type"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " IAgentTranscription,"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  type"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ISubtitleHelperItem,"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  EConversationalAIAPIEvents,"
                    })
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
                      children: "from"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " '@/conversational-ai-api/type'"
                    })]
                  }), `
`, _jsxs(_components.span, {
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
                      children: " { ConversationalAIAPI } "
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
                      children: " '@/conversational-ai-api'"
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
                      children: "export"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " ChatHistory"
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
                      children: " () "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "=>"
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ["
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "chatHistory"
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
                      children: "setChatHistory"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "] "
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
                      children: " React.useState"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "<"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    ISubtitleHelperItem"
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
                      children: "Partial"
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
                      children: "IUserTranscription "
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
                      children: " IAgentTranscription"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ">>"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[]"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  >"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "([])"
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
                      children: "  const"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " conversationalAIAPI"
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
                      children: " ConversationalAIAPI."
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
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  conversationalAIAPI."
                    }), _jsx(_components.span, {
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
                      children: "    EConversationalAIAPIEvents."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "TRANSCRIPT_UPDATED"
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
                      children: "    setChatHistory"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  )"
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
                      children: "  return"
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
                      children: "    <>"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      {chatHistory."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "map"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: "message"
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        <"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#22863A",
                        "--shiki-dark": "#85E89D"
                      },
                      children: "div"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " key"
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
                      children: "`${"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "message"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "uid"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "}-${"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "message"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "turn_id"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "}`"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "}>"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "          {message.uid}: {message.text}"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        </"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#22863A",
                        "--shiki-dark": "#85E89D"
                      },
                      children: "div"
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
                      children: "      ))}"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    </>"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "  )"
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
                children: "Add a conversational AI agent to the channel"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["To ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/conversational-ai/join",
                children: "start a conversational AI agent"
              }), ", configure the following parameters in your ", _jsx(_components.code, {
                children: "POST"
              }), " request:"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    children: "Parameter"
                  }), _jsx(_components.th, {
                    children: "Description"
                  }), _jsx(_components.th, {
                    children: "Required"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "advanced_features.enable_rtm: true"
                    })
                  }), _jsx(_components.td, {
                    children: "Starts the Signaling service"
                  }), _jsx(_components.td, {
                    children: "Yes"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: 'parameters.data_channel: "rtm"'
                    })
                  }), _jsx(_components.td, {
                    children: "Enables Signaling as the data transmission channel"
                  }), _jsx(_components.td, {
                    children: "Yes"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "parameters.enable_metrics: true"
                    })
                  }), _jsx(_components.td, {
                    children: "Enables agent performance data collection"
                  }), _jsx(_components.td, {
                    children: "Optional"
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "parameters.enable_error_message: true"
                    })
                  }), _jsx(_components.td, {
                    children: "Enables reporting of agent error events"
                  }), _jsx(_components.td, {
                    children: "Optional"
                  })]
                })]
              })]
            }), `
`, _jsx(_components.p, {
              children: "After a successful response, the agent joins the specified RTC channel and is ready to interact with the user."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Unsubscribe from the channel"
              })
            }), `
`, _jsx(_components.p, {
              children: "After each agent session ends, unsubscribe from channel messages to release resources associated with callback events."
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
                      children: "conversationalAIAPI."
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
                      children: "(channel_name)"
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
              children: _jsx(_components.strong, {
                children: "Release resources"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["At the end of each call, use the ", _jsx(_components.code, {
                children: "destroy"
              }), " method to clean up the cache."]
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
                      children: "conversationalAIAPI."
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
`]
          }), `
`]
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section contains supporting information that completes the guidance on this page."
    }), `
`, _jsxs(Tabs, {
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
      }), _jsxs(TabsContent, {
        value: "android",
        children: [_jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Folder structure"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "IConversationalAIAPI.kt"
            }), ": API interface and related data structures and enumerations"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "ConversationalAIAPIImpl.kt"
            }), ": ConversationalAI API main implementation logic"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "ConversationalAIUtils.kt"
            }), ": tool functions and event callback management"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "subRender/"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "v3/"
                }), ": transcription module"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "TranscriptionController.kt"
                }), ": transcription controller"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "MessageParser.kt"
                }), ": message parser"]
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "API reference"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/android#addhandler",
              children: _jsx(_components.code, {
                children: "addHandler"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/android#subscribemessage",
              children: _jsx(_components.code, {
                children: "subscribeMessage"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/android#unsubscribemessage",
              children: _jsx(_components.code, {
                children: "unsubscribeMessage"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/android#destroy",
              children: _jsx(_components.code, {
                children: "destroy"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/android#ontranscriptupdated",
              children: _jsx(_components.code, {
                children: "onTranscriptUpdated"
              })
            })
          }), `
`]
        })]
      }), _jsxs(TabsContent, {
        value: "ios",
        children: [_jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Folder structure"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "ConversationalAIAPI.swift"
            }), ": API interface and related data structures and enumerations"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "ConversationalAIAPIImpl.swift"
            }), ": ConversationalAI API main implementation logic"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "Transcription/"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "TranscriptionController.swift"
                }), ": transcription controller"]
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "API reference"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#addhandler",
              children: _jsx(_components.code, {
                children: "addHandler"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#subscribemessage",
              children: _jsx(_components.code, {
                children: "subscribeMessage"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#unsubscribemessage",
              children: _jsx(_components.code, {
                children: "unsubscribeMessage"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#destroy",
              children: _jsx(_components.code, {
                children: "destroy"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/ios#ontranscriptupdated",
              children: _jsx(_components.code, {
                children: "onTranscriptUpdated"
              })
            })
          }), `
`]
        })]
      }), _jsxs(TabsContent, {
        value: "web",
        children: [_jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Folder structure"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "index.ts"
            }), ": API class"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "type.ts"
            }), ": API interface and related data structures and enumerations"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "utils/"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "index.ts"
                }), ": API utility functions"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "events.ts"
                }), ": event management class"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "sub-render.ts"
                }), ": transcription module"]
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "API reference"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/web#iconversationalaiapieventhandlers-interface",
              children: _jsx(_components.code, {
                children: "IConversationalAIAPIEventHandler interface"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/web#econversationalaiapievents",
              children: _jsx(_components.code, {
                children: "EConversationalAIAPIEvents"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/web#subscribemessage",
              children: _jsx(_components.code, {
                children: "subscribeMessage"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/web#unsubscribe",
              children: _jsx(_components.code, {
                children: "unsubscribeMessage"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/api-ref/conversational-ai/client-toolkit/web#destroy",
              children: _jsx(_components.code, {
                children: "destroy"
              })
            })
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
