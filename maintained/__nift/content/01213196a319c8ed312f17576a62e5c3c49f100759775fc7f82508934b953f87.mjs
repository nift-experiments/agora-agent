import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "实时字幕",
  description: "与对话式智能体进行实时互动时，你可能需要实时字幕来显示你与智能体的对话内容。本文介绍如何在你的 App 中实现实时字幕功能。"
};
export let _markdown = `

与对话式智能体进行实时互动时，你可能需要实时字幕来显示你与智能体的对话内容。本文介绍如何在你的 App 中实现实时字幕功能。

## 技术原理 [#技术原理]

声网提供一套灵活可扩展、标准化的对话式 AI 引擎客户端组件（以下简称组件）。该组件支持 iOS、Android、Web 平台，封装了多个场景化 API，你只需要调用这些 API 即可结合声网[实时互动 (RTC) SDK](https://doc.shengwang.cn/doc/rtc/homepage) 和[实时消息 (RTM) SDK](https://doc.shengwang.cn/doc/rtm2/homepage) 的能力实现以下功能：

* [打断智能体](./interrupt-agent.md)
* [实时字幕](./realtime-sub.md)
* [监听智能体相关事件](./listen-agent-events.md)
* [设置最佳音频参数](./best-practices/audio-settings) （仅支持 Android 和 iOS）
* [发送图片消息](./send-multimodal-message.md)

组件通过 \`onTranscriptUpdated\` 回调接收字幕转录内容，支持监听不同类型的字幕转录信息：

* **智能体字幕**：智能体的语音转录内容，包括实时更新和最终结果。
* **用户字幕**：用户的语音转录内容，支持实时显示和状态管理。
* **字幕转录状态**：支持进行中、完成、中断等不同状态的处理。

以下为使用组件实现实时字幕功能的工作流程图：

![image](https://doc.shengwang.cn/img/convoai/realtime-sub.svg)

## 前提条件 [#前提条件]

开始前，请确保完成以下准备工作：

#### Android [#android]

* 已集成 RTC v4.5.1 及以上版本 SDK，且在 App 中实现了基本的实时音视频功能、获取了相关设备的使用权限。请参考[实现音视频互动](https://doc.shengwang.cn/doc/rtc/android/get-started/quick-start)。
  * 已在[控制台](https://console.shengwang.cn/)为项目启用 RTM 服务，并在 App 中实现了基本的实时消息功能。请参考[实现收发消息](https://doc.shengwang.cn/doc/rtm2/javascript/get-started/quick-start)。
  * 已参考[实现对话式智能体](./quick-start)实现与智能体对话的基本逻辑。
  * 确保 RTC 可用、RTM 已登录，且 RTC 和 RTM 实例的生命周期大于组件的生命周期。组件内部不负责维护 RTC，RTM 的初始化、生命周期以及鉴权/登录状态的逻辑。

#### iOS [#ios]

* 已集成 RTC v4.5.1 及以上版本 SDK，且在 App 中实现了基本的实时音视频功能、获取了相关设备的使用权限。请参考[实现音视频互动](https://doc.shengwang.cn/doc/rtc/ios/get-started/quick-start)。
  * 已在[控制台](https://console.shengwang.cn/)为项目启用 RTM 服务，并在 App 中实现了基本的实时消息功能。请参考[实现收发消息](https://doc.shengwang.cn/doc/rtm2/javascript/get-started/quick-start)。
  * 已参考[实现对话式智能体](./quick-start)实现与智能体对话的基本逻辑。
  * 确保 RTC 可用、RTM 已登录，且 RTC 和 RTM 实例的生命周期大于组件的生命周期。组件内部不负责维护 RTC，RTM 的初始化、生命周期以及鉴权/登录状态的逻辑。

#### Web [#web]

* 已集成 v4.24.0 及以上版本的 RTC Web SDK，并参考[实现音视频互动](https://doc.shengwang.cn/doc/rtc/javascript/get-started/quick-start)在 App 中实现了基本的实时音视频功能、获取了相关设备的使用权限。
  * 已在[控制台](https://console.shengwang.cn/)为项目启用 RTM 服务，并在 App 中实现了基本的实时消息功能。请参考[实现收发消息](https://doc.shengwang.cn/doc/rtm2/javascript/get-started/quick-start)。
  * 已参考[实现对话式智能体](./quick-start)实现与智能体对话的基本逻辑。
  * 确保 RTC 可用、RTM 已登录，且 RTC 和 RTM 实例的生命周期大于组件的生命周期。组件内部不负责维护 RTC，RTM 的初始化、生命周期以及鉴权/登录状态的逻辑。

## 实现方法 [#实现方法]

### 集成组件 [#集成组件]

#### Android [#android-1]

将 \`convoaiApi\` 文件夹拷贝到你的项目中，并在后续调用组件 API 前引入组件。你可以前往[组件结构](#组件结构)了解各个文件作用。

* [convoaiApi](https://github.com/AgoraIO-Community/Conversational-AI-Demo/tree/main/Android/scenes/convoai/src/main/java/io/agora/scene/convoai/convoaiApi)

#### iOS [#ios-1]

将 \`ConversationalAIAPI\` 文件夹拷贝到你的项目中，并在后续调用组件 API 前引入组件。你可以前往[组件结构](#组件结构)了解各个文件作用。

* [ConversationalAIAPI](https://github.com/AgoraIO-Community/Conversational-AI-Demo/tree/main/iOS/Scenes/ConvoAI/ConvoAI/ConvoAI/Classes/ConversationalAIAPI)

#### Web [#web-1]

将 \`conversational-ai-api\` 文件拷贝到你自己的项目中，并在后续调用组件 API 前引入组件。你可以前往[组件结构](#组件结构)了解各个文件作用。

* [conversational-ai-api](https://github.com/AgoraIO-Community/Conversational-AI-Demo/tree/main/Web/Scenes/VoiceAgent/src/conversational-ai-api)

### 初始化组件 [#初始化组件]

为 RTC 和 RTM 实例创建配置对象，并设置转录字幕渲染模式，之后创建组件实例：

<CodeBlockTabs defaultValue="android">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="android">
      Android
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="ios">
      iOS
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="web">
      Web
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="android">
    \`\`\`kotlin
    // 为 RTC 和 RTM 实例创建配置对象
    val config = ConversationalAIAPIConfig(
        rtcEngine = rtcEngineInstance,
        rtmClient = rtmClientInstance,
        /**
         * 设置转录字幕渲染模式，可选值：
         * - \`TranscriptRenderMode.Word\`：逐字渲染模式，即回调接收的字幕内容将逐字渲染到 UI 上。
         * - \`TranscriptRenderMode.Text\`：逐句渲染模式，即回调接收的字幕内容将全量渲染到 UI 上。
         */
        renderMode = TranscriptRenderMode.Word,
        enableLog = true
    )
    // 创建组件实例
    val api = ConversationalAIAPIImpl(config)
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="ios">
    \`\`\`swift
    /// 为 RTC 和 RTM 实例创建配置对象
    let config = ConversationalAIAPIConfig(
        rtcEngine: rtcEngine,
        rtmEngine: rtmEngine,
        /**
         * 设置转录字幕渲染模式，可选值：
         * - \`.words\`：逐字渲染模式，即回调接收的字幕内容将逐字渲染到 UI 上。
         * - \`.text\`：逐句渲染模式，即回调接收的字幕内容将全量渲染到 UI 上。
         */
        renderMode: .words,
        enableLog: true
    )
    /// 创建组件实例
    convoAIAPI = ConversationalAIAPIImpl(config: config)
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="web">
    \`\`\`typescript
    // 初始化组件
    ConversationalAIAPI.init({
        rtcEngine,
        rtmEngine,
    /**
     * 设置转录字幕渲染模式，可选值：
     * - \`ESubtitleHelperMode.WORD\`：逐字渲染模式，即回调接收的字幕内容将逐字渲染到 UI 上。
     * - \`ESubtitleHelperMode.TEXT\`：逐句渲染模式，即回调接收的字幕内容将全量渲染到 UI 上。
     *
     * 不指定则自动根据消息判断模式，或手动指定模式
     */
        renderMode: ESubtitleHelperMode.WORD,
        })

    // 获取 API 实例（单例）
    const conversationalAIAPI = ConversationalAIAPI.getInstance()
    \`\`\`
  </CodeBlockTab>
</CodeBlockTabs>

> 信息
> 逐字渲染模式 (\`ESubtitleHelperMode.WORD\`) 下需要接收来自 RTC 的音频时间戳信息才能实现字幕和语音同步输出。为此，在创建客户端对象前，请确保完成以下设置：
>
> \`\`\`typescript
> // 设置传递音频时间戳信息
> AgoraRTC.setParameter("ENABLE_AUDIO_PTS_METADATA", true);
> // 创建客户端对象并指定频道场景和浏览器编码方式
> const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
> \`\`\`

### 注册字幕回调 [#注册字幕回调]

调用 \`addHandler\` 方法，注册并实现字幕转录回调：

<CodeBlockTabs defaultValue="android">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="android">
      Android
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="ios">
      iOS
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="web">
      Web
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="android">
    \`\`\`kotlin
    api.addHandler(covEventHandler)
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="ios">
    \`\`\`swift
    convoAIAPI.addHandler(handler: self)
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="web">
    \`\`\`typescript
    // 监听转录内容更新，用于实时显示字幕转录内容
    conversationalAIAPI.on(EConversationalAIAPIEvents.TRANSCRIPT_UPDATED, onTextChanged)
    \`\`\`
  </CodeBlockTab>
</CodeBlockTabs>

### 实现字幕数据回调接口 [#实现字幕数据回调接口]

你需要自行实现字幕处理逻辑，根据转录内容更新 UI 显示。

<CodeBlockTabs defaultValue="android">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="android">
      Android
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="ios">
      iOS
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="web">
      Web
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="android">
    将你实现的字幕 UI 模块继承自 \`IConversationalAIAPIEventHandler\` 接口, 并实现 \`onTranscriptUpdated\` 方法, 在该方法内处理字幕渲染至 UI 的逻辑。

    \`\`\`kotlin
     private val covEventHandler = object : IConversationalAIAPIEventHandler {
       override fun onTranscriptUpdated(agentUserId: String, transcript: Transcript) {
            // 在此处接收字幕更新 UI
        }
    }
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="ios">
    将你实现的字幕 UI 模块实现 \`ConversationalAIAPIEventHandler\` 协议, 并实现 \`onTranscriptUpdated\` 方法, 在该方法内处理字幕渲染至 UI 的逻辑：

    \`\`\`swift
    extension ChatViewController: ConversationalAIAPIEventHandler {
        public func onTranscriptUpdated(agentUserId: String, transcript: Transcript) {
            //可以在此处接收字幕更新 UI
        }
    }
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="web">
    将你实现的字幕 UI 模块接收客户端组件的字幕数据回调，并实现一个简单的 React JS 组件来展示这些消息:

    > 信息
    >
    > * 所有 \`TRANSCRIPT_UPDATED\` 事件回调均返回完整聊天对话列表。每次均有可能更新最近的几条对话字幕，请根据完整的列表渲染 UI。
    > * 推荐使用状态管理库如 \`zustand\`、\`redux\` 等来代替 \`React.useState\` 管理状态，以便在组件间共享状态。

    \`\`\`tsx
    import * as React from "react"
    import {
      type IUserTranscript,
      type IAgentTranscript,
      type ISubtitleHelperItem,
      EConversationalAIAPIEvents,
    } from "@/conversational-ai-api/type"
    import { ConversationalAIAPI } from "@/conversational-ai-api"

    // 监听转录内容更新，用于实时显示字幕转录内容
    export const ChatHistory = () => {
      const [chatHistory, setChatHistory] = React.useState<
        ISubtitleHelperItem<Partial<IUserTranscript | IAgentTranscript>>[]
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
  </CodeBlockTab>
</CodeBlockTabs>

### 订阅频道消息 [#订阅频道消息]

字幕转录内容通过 RTM 频道消息传递，你需要在开始智能体会话前订阅频道消息，以接收字幕数据。

<CodeBlockTabs defaultValue="android">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="android">
      Android
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="ios">
      iOS
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="web">
      Web
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="android">
    在开始智能体会话前调用 \`subscribeMessage\` 订阅频道消息：

    \`\`\`kotlin
    api.subscribeMessage("channelName") { error ->
        if (error != null) {
            // 处理错误
        }
    }
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="ios">
    在开始智能体会话前调用 \`subscribeMessage\` 订阅频道消息：

    \`\`\`swift
    convoAIAPI.subscribeMessage(channelName: channelName) { error in
        if let error = error {
            print("订阅失败: \\(error.message)")
        } else {
            print("订阅成功")
        }
    }
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="web">
    \`\`\`typescript
    conversationalAIAPI.subscribeMessage(channel_name)
    \`\`\`
  </CodeBlockTab>
</CodeBlockTabs>

### 智能体加入频道 [#智能体加入频道]

调用 [POST 创建对话式智能体](../operations/start-agent.md)接口，并完成以下参数设置：

* \`advanced_features.enable_rtm: true\` —— （必选）启动 RTM 服务
* \`parameters.data_channel: "rtm"\` —— （必选）开启 RTM 数据传输通道
* \`parameters.enable_metrics: true\` —— （按需开启）接收智能体性能数据
* \`parameters.enable_error_message: true\` —— （按需开启）接收智能体错误事件

调用成功后，智能体会加入指定 RTC 频道，用户可以开始与智能体互动。

### 取消订阅频道消息 [#取消订阅频道消息]

每次智能体会话结束后，你需要取消订阅频道消息，以释放字幕相关资源。

<CodeBlockTabs defaultValue="android">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="android">
      Android
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="ios">
      iOS
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="web">
      Web
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="android">
    \`\`\`kotlin
    api.unsubscribeMessage("channelName") { error ->
        if (error != null) {
            // 处理错误
        }
    }
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="ios">
    \`\`\`swift
    /// 取消订阅频道消息
    convoAIAPI.unsubscribeMessage(channelName: channelName) { error in
        if let error = error {
            print("取消订阅失败: \\(error.message)")
        } else {
            print("取消订阅成功")
        }
    }
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="web">
    \`\`\`typescript
    conversationalAIAPI.unsubscribeMessage(channel_name)
    \`\`\`
  </CodeBlockTab>
</CodeBlockTabs>

### 销毁组件实例 [#销毁组件实例]

结束 AI 对话场景后或关闭 App 前，你需要销毁组件实例，以释放组件的所有资源。

<CodeBlockTabs defaultValue="android">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="android">
      Android
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="ios">
      iOS
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="web">
      Web
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="android">
    \`\`\`kotlin
    api.destroy()
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="ios">
    \`\`\`swift
    convoAIAPI.destroy()
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="web">
    \`\`\`typescript
    conversationalAIAPI.destroy()
    \`\`\`
  </CodeBlockTab>
</CodeBlockTabs>

## 参考信息 [#参考信息]

### 示例项目 [#示例项目]

声网提供了开源的实时字幕示例项目供你参考，你可以前往下载或查看其中的源代码。

* [Conversational-AI-Demo](https://github.com/AgoraIO-Community/Conversational-AI-Demo/)

### 组件结构 [#组件结构]

客户端组件文件夹的结构和各文件作用如下：

> 信息
> 以下文件和文件夹即为集成客户端组件所需全部内容，无需拷贝其他文件。

#### Android [#android-2]

* \`IConversationalAIAPI.kt\` — API 接口及相关数据结构和枚举
  * \`ConversationalAIAPIImpl.kt\` — ConversationalAI API 主要实现逻辑
  * \`ConversationalAIUtils.kt\` — 工具函数与事件回调管理
  * \`subRender/\`
    * \`v3/\` — 字幕部分模块
      * \`TranscriptionController.kt\` — 字幕控制器
      * \`MessageParser.kt\` — 消息解析器

#### iOS [#ios-2]

* \`ConversationalAIAPI.swift\` — API 接口及相关数据结构和枚举
  * \`ConversationalAIAPIImpl.swift\` — ConversationalAI API 主要实现逻辑
  * \`Transcription/\`
    * \`TranscriptionController.swift\` — 字幕控制器

#### Web [#web-2]

* \`index.ts\` — API 类
  * \`type.ts\` — API 接口及相关数据结构和枚举
  * \`utils/index.ts\` — API 工具函数
  * \`utils/events.ts\` — 事件管理类，可以拓展该类以轻松实现事件监听和播报
  * \`utils/sub-render.ts\` — 字幕部分模块

### API 参考 [#api-参考]

#### Android [#android-3]

* [\`addHandler\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapi#addhandler)
  * [\`subscribeMessage\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapi#subscribemessage)
  * [\`unsubscribeMessage\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapi#unsubscribemessage)
  * [\`destroy\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapi#destroy)
  * [\`onTranscriptUpdated\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#ontranscriptupdated)

#### iOS [#ios-3]

* [\`addHandler\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapi#addhandler)
  * [\`subscribeMessage\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapi#subscribemessage)
  * [\`unsubscribeMessage\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapi#unsubscribemessage)
  * [\`destroy\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapi#destroy)
  * [\`onTranscriptUpdated\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#ontranscriptupdated)

#### Web [#web-3]

* [\`IConversationalAIAPIEventHandler\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/struct#iconversationalaiapieventhandlers)
  * [\`EConversationalAIAPIEvents\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/enum#econversationalaiapievents)
  * [\`subscribeMessage\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/conversationalaiapi#subscribemessage)
  * [\`unsubscribeMessage\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/conversationalaiapi#unsubscribemessage)
  * [\`destroy\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/conversationalaiapi#destroy)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "与对话式智能体进行实时互动时，你可能需要实时字幕来显示你与智能体的对话内容。本文介绍如何在你的 App 中实现实时字幕功能。"
  }, {
    heading: "技术原理",
    content: "声网提供一套灵活可扩展、标准化的对话式 AI 引擎客户端组件（以下简称组件）。该组件支持 iOS、Android、Web 平台，封装了多个场景化 API，你只需要调用这些 API 即可结合声网实时互动 (RTC) SDK 和实时消息 (RTM) SDK 的能力实现以下功能："
  }, {
    heading: "技术原理",
    content: "打断智能体"
  }, {
    heading: "技术原理",
    content: "实时字幕"
  }, {
    heading: "技术原理",
    content: "监听智能体相关事件"
  }, {
    heading: "技术原理",
    content: "设置最佳音频参数 （仅支持 Android 和 iOS）"
  }, {
    heading: "技术原理",
    content: "发送图片消息"
  }, {
    heading: "技术原理",
    content: "组件通过 `onTranscriptUpdated` 回调接收字幕转录内容，支持监听不同类型的字幕转录信息："
  }, {
    heading: "技术原理",
    content: "**智能体字幕**：智能体的语音转录内容，包括实时更新和最终结果。"
  }, {
    heading: "技术原理",
    content: "**用户字幕**：用户的语音转录内容，支持实时显示和状态管理。"
  }, {
    heading: "技术原理",
    content: "**字幕转录状态**：支持进行中、完成、中断等不同状态的处理。"
  }, {
    heading: "技术原理",
    content: "以下为使用组件实现实时字幕功能的工作流程图："
  }, {
    heading: "前提条件",
    content: "开始前，请确保完成以下准备工作："
  }, {
    heading: "android",
    content: "已集成 RTC v4.5.1 及以上版本 SDK，且在 App 中实现了基本的实时音视频功能、获取了相关设备的使用权限。请参考实现音视频互动。"
  }, {
    heading: "android",
    content: "已在控制台为项目启用 RTM 服务，并在 App 中实现了基本的实时消息功能。请参考实现收发消息。"
  }, {
    heading: "android",
    content: "已参考实现对话式智能体实现与智能体对话的基本逻辑。"
  }, {
    heading: "android",
    content: "确保 RTC 可用、RTM 已登录，且 RTC 和 RTM 实例的生命周期大于组件的生命周期。组件内部不负责维护 RTC，RTM 的初始化、生命周期以及鉴权/登录状态的逻辑。"
  }, {
    heading: "ios",
    content: "已集成 RTC v4.5.1 及以上版本 SDK，且在 App 中实现了基本的实时音视频功能、获取了相关设备的使用权限。请参考实现音视频互动。"
  }, {
    heading: "ios",
    content: "已在控制台为项目启用 RTM 服务，并在 App 中实现了基本的实时消息功能。请参考实现收发消息。"
  }, {
    heading: "ios",
    content: "已参考实现对话式智能体实现与智能体对话的基本逻辑。"
  }, {
    heading: "ios",
    content: "确保 RTC 可用、RTM 已登录，且 RTC 和 RTM 实例的生命周期大于组件的生命周期。组件内部不负责维护 RTC，RTM 的初始化、生命周期以及鉴权/登录状态的逻辑。"
  }, {
    heading: "web",
    content: "已集成 v4.24.0 及以上版本的 RTC Web SDK，并参考实现音视频互动在 App 中实现了基本的实时音视频功能、获取了相关设备的使用权限。"
  }, {
    heading: "web",
    content: "已在控制台为项目启用 RTM 服务，并在 App 中实现了基本的实时消息功能。请参考实现收发消息。"
  }, {
    heading: "web",
    content: "已参考实现对话式智能体实现与智能体对话的基本逻辑。"
  }, {
    heading: "web",
    content: "确保 RTC 可用、RTM 已登录，且 RTC 和 RTM 实例的生命周期大于组件的生命周期。组件内部不负责维护 RTC，RTM 的初始化、生命周期以及鉴权/登录状态的逻辑。"
  }, {
    heading: "android-1",
    content: "将 `convoaiApi` 文件夹拷贝到你的项目中，并在后续调用组件 API 前引入组件。你可以前往组件结构了解各个文件作用。"
  }, {
    heading: "android-1",
    content: "convoaiApi"
  }, {
    heading: "ios-1",
    content: "将 `ConversationalAIAPI` 文件夹拷贝到你的项目中，并在后续调用组件 API 前引入组件。你可以前往组件结构了解各个文件作用。"
  }, {
    heading: "ios-1",
    content: "ConversationalAIAPI"
  }, {
    heading: "web-1",
    content: "将 `conversational-ai-api` 文件拷贝到你自己的项目中，并在后续调用组件 API 前引入组件。你可以前往组件结构了解各个文件作用。"
  }, {
    heading: "web-1",
    content: "conversational-ai-api"
  }, {
    heading: "初始化组件",
    content: "为 RTC 和 RTM 实例创建配置对象，并设置转录字幕渲染模式，之后创建组件实例："
  }, {
    heading: "初始化组件",
    content: '> 信息\n> 逐字渲染模式 (`ESubtitleHelperMode.WORD`) 下需要接收来自 RTC 的音频时间戳信息才能实现字幕和语音同步输出。为此，在创建客户端对象前，请确保完成以下设置：\n>\n> ```typescript\n> // 设置传递音频时间戳信息\n> AgoraRTC.setParameter("ENABLE_AUDIO_PTS_METADATA", true);\n> // 创建客户端对象并指定频道场景和浏览器编码方式\n> const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });\n> ```'
  }, {
    heading: "注册字幕回调",
    content: "调用 `addHandler` 方法，注册并实现字幕转录回调："
  }, {
    heading: "实现字幕数据回调接口",
    content: "你需要自行实现字幕处理逻辑，根据转录内容更新 UI 显示。"
  }, {
    heading: "实现字幕数据回调接口",
    content: "将你实现的字幕 UI 模块继承自 `IConversationalAIAPIEventHandler` 接口, 并实现 `onTranscriptUpdated` 方法, 在该方法内处理字幕渲染至 UI 的逻辑。"
  }, {
    heading: "实现字幕数据回调接口",
    content: "将你实现的字幕 UI 模块实现 `ConversationalAIAPIEventHandler` 协议, 并实现 `onTranscriptUpdated` 方法, 在该方法内处理字幕渲染至 UI 的逻辑："
  }, {
    heading: "实现字幕数据回调接口",
    content: "将你实现的字幕 UI 模块接收客户端组件的字幕数据回调，并实现一个简单的 React JS 组件来展示这些消息:"
  }, {
    heading: "实现字幕数据回调接口",
    content: "> 信息\n>\n> * 所有 `TRANSCRIPT_UPDATED` 事件回调均返回完整聊天对话列表。每次均有可能更新最近的几条对话字幕，请根据完整的列表渲染 UI。\n> * 推荐使用状态管理库如 `zustand`、`redux` 等来代替 `React.useState` 管理状态，以便在组件间共享状态。"
  }, {
    heading: "订阅频道消息",
    content: "字幕转录内容通过 RTM 频道消息传递，你需要在开始智能体会话前订阅频道消息，以接收字幕数据。"
  }, {
    heading: "订阅频道消息",
    content: "在开始智能体会话前调用 `subscribeMessage` 订阅频道消息："
  }, {
    heading: "订阅频道消息",
    content: "在开始智能体会话前调用 `subscribeMessage` 订阅频道消息："
  }, {
    heading: "智能体加入频道",
    content: "调用 POST 创建对话式智能体接口，并完成以下参数设置："
  }, {
    heading: "智能体加入频道",
    content: "`advanced_features.enable_rtm: true` —— （必选）启动 RTM 服务"
  }, {
    heading: "智能体加入频道",
    content: '`parameters.data_channel: "rtm"` —— （必选）开启 RTM 数据传输通道'
  }, {
    heading: "智能体加入频道",
    content: "`parameters.enable_metrics: true` —— （按需开启）接收智能体性能数据"
  }, {
    heading: "智能体加入频道",
    content: "`parameters.enable_error_message: true` —— （按需开启）接收智能体错误事件"
  }, {
    heading: "智能体加入频道",
    content: "调用成功后，智能体会加入指定 RTC 频道，用户可以开始与智能体互动。"
  }, {
    heading: "取消订阅频道消息",
    content: "每次智能体会话结束后，你需要取消订阅频道消息，以释放字幕相关资源。"
  }, {
    heading: "销毁组件实例",
    content: "结束 AI 对话场景后或关闭 App 前，你需要销毁组件实例，以释放组件的所有资源。"
  }, {
    heading: "示例项目",
    content: "声网提供了开源的实时字幕示例项目供你参考，你可以前往下载或查看其中的源代码。"
  }, {
    heading: "示例项目",
    content: "Conversational-AI-Demo"
  }, {
    heading: "组件结构",
    content: "客户端组件文件夹的结构和各文件作用如下："
  }, {
    heading: "组件结构",
    content: `> 信息
> 以下文件和文件夹即为集成客户端组件所需全部内容，无需拷贝其他文件。`
  }, {
    heading: "android-2",
    content: "`IConversationalAIAPI.kt` — API 接口及相关数据结构和枚举"
  }, {
    heading: "android-2",
    content: "`ConversationalAIAPIImpl.kt` — ConversationalAI API 主要实现逻辑"
  }, {
    heading: "android-2",
    content: "`ConversationalAIUtils.kt` — 工具函数与事件回调管理"
  }, {
    heading: "android-2",
    content: "`subRender/`"
  }, {
    heading: "android-2",
    content: "`v3/` — 字幕部分模块"
  }, {
    heading: "android-2",
    content: "`TranscriptionController.kt` — 字幕控制器"
  }, {
    heading: "android-2",
    content: "`MessageParser.kt` — 消息解析器"
  }, {
    heading: "ios-2",
    content: "`ConversationalAIAPI.swift` — API 接口及相关数据结构和枚举"
  }, {
    heading: "ios-2",
    content: "`ConversationalAIAPIImpl.swift` — ConversationalAI API 主要实现逻辑"
  }, {
    heading: "ios-2",
    content: "`Transcription/`"
  }, {
    heading: "ios-2",
    content: "`TranscriptionController.swift` — 字幕控制器"
  }, {
    heading: "web-2",
    content: "`index.ts` — API 类"
  }, {
    heading: "web-2",
    content: "`type.ts` — API 接口及相关数据结构和枚举"
  }, {
    heading: "web-2",
    content: "`utils/index.ts` — API 工具函数"
  }, {
    heading: "web-2",
    content: "`utils/events.ts` — 事件管理类，可以拓展该类以轻松实现事件监听和播报"
  }, {
    heading: "web-2",
    content: "`utils/sub-render.ts` — 字幕部分模块"
  }, {
    heading: "android-3",
    content: "`addHandler`"
  }, {
    heading: "android-3",
    content: "`subscribeMessage`"
  }, {
    heading: "android-3",
    content: "`unsubscribeMessage`"
  }, {
    heading: "android-3",
    content: "`destroy`"
  }, {
    heading: "android-3",
    content: "`onTranscriptUpdated`"
  }, {
    heading: "ios-3",
    content: "`addHandler`"
  }, {
    heading: "ios-3",
    content: "`subscribeMessage`"
  }, {
    heading: "ios-3",
    content: "`unsubscribeMessage`"
  }, {
    heading: "ios-3",
    content: "`destroy`"
  }, {
    heading: "ios-3",
    content: "`onTranscriptUpdated`"
  }, {
    heading: "web-3",
    content: "`IConversationalAIAPIEventHandler`"
  }, {
    heading: "web-3",
    content: "`EConversationalAIAPIEvents`"
  }, {
    heading: "web-3",
    content: "`subscribeMessage`"
  }, {
    heading: "web-3",
    content: "`unsubscribeMessage`"
  }, {
    heading: "web-3",
    content: "`destroy`"
  }],
  headings: [{
    id: "技术原理",
    content: "技术原理"
  }, {
    id: "前提条件",
    content: "前提条件"
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
    id: "实现方法",
    content: "实现方法"
  }, {
    id: "集成组件",
    content: "集成组件"
  }, {
    id: "android-1",
    content: "Android"
  }, {
    id: "ios-1",
    content: "iOS"
  }, {
    id: "web-1",
    content: "Web"
  }, {
    id: "初始化组件",
    content: "初始化组件"
  }, {
    id: "注册字幕回调",
    content: "注册字幕回调"
  }, {
    id: "实现字幕数据回调接口",
    content: "实现字幕数据回调接口"
  }, {
    id: "订阅频道消息",
    content: "订阅频道消息"
  }, {
    id: "智能体加入频道",
    content: "智能体加入频道"
  }, {
    id: "取消订阅频道消息",
    content: "取消订阅频道消息"
  }, {
    id: "销毁组件实例",
    content: "销毁组件实例"
  }, {
    id: "参考信息",
    content: "参考信息"
  }, {
    id: "示例项目",
    content: "示例项目"
  }, {
    id: "组件结构",
    content: "组件结构"
  }, {
    id: "android-2",
    content: "Android"
  }, {
    id: "ios-2",
    content: "iOS"
  }, {
    id: "web-2",
    content: "Web"
  }, {
    id: "api-参考",
    content: "API 参考"
  }, {
    id: "android-3",
    content: "Android"
  }, {
    id: "ios-3",
    content: "iOS"
  }, {
    id: "web-3",
    content: "Web"
  }]
};
export let toc = [{
  depth: 2,
  url: "#技术原理",
  title: _jsx(_Fragment, {
    children: "技术原理"
  })
}, {
  depth: 2,
  url: "#前提条件",
  title: _jsx(_Fragment, {
    children: "前提条件"
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
  depth: 2,
  url: "#实现方法",
  title: _jsx(_Fragment, {
    children: "实现方法"
  })
}, {
  depth: 3,
  url: "#集成组件",
  title: _jsx(_Fragment, {
    children: "集成组件"
  })
}, {
  depth: 4,
  url: "#android-1",
  title: _jsx(_Fragment, {
    children: "Android"
  })
}, {
  depth: 4,
  url: "#ios-1",
  title: _jsx(_Fragment, {
    children: "iOS"
  })
}, {
  depth: 4,
  url: "#web-1",
  title: _jsx(_Fragment, {
    children: "Web"
  })
}, {
  depth: 3,
  url: "#初始化组件",
  title: _jsx(_Fragment, {
    children: "初始化组件"
  })
}, {
  depth: 3,
  url: "#注册字幕回调",
  title: _jsx(_Fragment, {
    children: "注册字幕回调"
  })
}, {
  depth: 3,
  url: "#实现字幕数据回调接口",
  title: _jsx(_Fragment, {
    children: "实现字幕数据回调接口"
  })
}, {
  depth: 3,
  url: "#订阅频道消息",
  title: _jsx(_Fragment, {
    children: "订阅频道消息"
  })
}, {
  depth: 3,
  url: "#智能体加入频道",
  title: _jsx(_Fragment, {
    children: "智能体加入频道"
  })
}, {
  depth: 3,
  url: "#取消订阅频道消息",
  title: _jsx(_Fragment, {
    children: "取消订阅频道消息"
  })
}, {
  depth: 3,
  url: "#销毁组件实例",
  title: _jsx(_Fragment, {
    children: "销毁组件实例"
  })
}, {
  depth: 2,
  url: "#参考信息",
  title: _jsx(_Fragment, {
    children: "参考信息"
  })
}, {
  depth: 3,
  url: "#示例项目",
  title: _jsx(_Fragment, {
    children: "示例项目"
  })
}, {
  depth: 3,
  url: "#组件结构",
  title: _jsx(_Fragment, {
    children: "组件结构"
  })
}, {
  depth: 4,
  url: "#android-2",
  title: _jsx(_Fragment, {
    children: "Android"
  })
}, {
  depth: 4,
  url: "#ios-2",
  title: _jsx(_Fragment, {
    children: "iOS"
  })
}, {
  depth: 4,
  url: "#web-2",
  title: _jsx(_Fragment, {
    children: "Web"
  })
}, {
  depth: 3,
  url: "#api-参考",
  title: _jsx(_Fragment, {
    children: "API 参考"
  })
}, {
  depth: 4,
  url: "#android-3",
  title: _jsx(_Fragment, {
    children: "Android"
  })
}, {
  depth: 4,
  url: "#ios-3",
  title: _jsx(_Fragment, {
    children: "iOS"
  })
}, {
  depth: 4,
  url: "#web-3",
  title: _jsx(_Fragment, {
    children: "Web"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger } = _components;
  if (!CodeBlockTab)
    _missingMdxReference("CodeBlockTab", true);
  if (!CodeBlockTabs)
    _missingMdxReference("CodeBlockTabs", true);
  if (!CodeBlockTabsList)
    _missingMdxReference("CodeBlockTabsList", true);
  if (!CodeBlockTabsTrigger)
    _missingMdxReference("CodeBlockTabsTrigger", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "与对话式智能体进行实时互动时，你可能需要实时字幕来显示你与智能体的对话内容。本文介绍如何在你的 App 中实现实时字幕功能。"
    }), `
`, _jsx(_components.h2, {
      id: "技术原理",
      children: "技术原理"
    }), `
`, _jsxs(_components.p, {
      children: ["声网提供一套灵活可扩展、标准化的对话式 AI 引擎客户端组件（以下简称组件）。该组件支持 iOS、Android、Web 平台，封装了多个场景化 API，你只需要调用这些 API 即可结合声网", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/doc/rtc/homepage",
        children: "实时互动 (RTC) SDK"
      }), " 和", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/doc/rtm2/homepage",
        children: "实时消息 (RTM) SDK"
      }), " 的能力实现以下功能："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./interrupt-agent.md",
          children: "打断智能体"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./realtime-sub.md",
          children: "实时字幕"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./listen-agent-events.md",
          children: "监听智能体相关事件"
        })
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "./best-practices/audio-settings",
          children: "设置最佳音频参数"
        }), " （仅支持 Android 和 iOS）"]
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./send-multimodal-message.md",
          children: "发送图片消息"
        })
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["组件通过 ", _jsx(_components.code, {
        children: "onTranscriptUpdated"
      }), " 回调接收字幕转录内容，支持监听不同类型的字幕转录信息："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "智能体字幕"
        }), "：智能体的语音转录内容，包括实时更新和最终结果。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "用户字幕"
        }), "：用户的语音转录内容，支持实时显示和状态管理。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "字幕转录状态"
        }), "：支持进行中、完成、中断等不同状态的处理。"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "以下为使用组件实现实时字幕功能的工作流程图："
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://doc.shengwang.cn/img/convoai/realtime-sub.svg",
        alt: "image"
      })
    }), `
`, _jsx(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), `
`, _jsx(_components.p, {
      children: "开始前，请确保完成以下准备工作："
    }), `
`, _jsx(_components.h4, {
      id: "android",
      children: "Android"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["已集成 RTC v4.5.1 及以上版本 SDK，且在 App 中实现了基本的实时音视频功能、获取了相关设备的使用权限。请参考", _jsx(_components.a, {
          href: "https://doc.shengwang.cn/doc/rtc/android/get-started/quick-start",
          children: "实现音视频互动"
        }), "。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["已在", _jsx(_components.a, {
              href: "https://console.shengwang.cn/",
              children: "控制台"
            }), "为项目启用 RTM 服务，并在 App 中实现了基本的实时消息功能。请参考", _jsx(_components.a, {
              href: "https://doc.shengwang.cn/doc/rtm2/javascript/get-started/quick-start",
              children: "实现收发消息"
            }), "。"]
          }), `
`, _jsxs(_components.li, {
            children: ["已参考", _jsx(_components.a, {
              href: "./quick-start",
              children: "实现对话式智能体"
            }), "实现与智能体对话的基本逻辑。"]
          }), `
`, _jsx(_components.li, {
            children: "确保 RTC 可用、RTM 已登录，且 RTC 和 RTM 实例的生命周期大于组件的生命周期。组件内部不负责维护 RTC，RTM 的初始化、生命周期以及鉴权/登录状态的逻辑。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "ios",
      children: "iOS"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["已集成 RTC v4.5.1 及以上版本 SDK，且在 App 中实现了基本的实时音视频功能、获取了相关设备的使用权限。请参考", _jsx(_components.a, {
          href: "https://doc.shengwang.cn/doc/rtc/ios/get-started/quick-start",
          children: "实现音视频互动"
        }), "。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["已在", _jsx(_components.a, {
              href: "https://console.shengwang.cn/",
              children: "控制台"
            }), "为项目启用 RTM 服务，并在 App 中实现了基本的实时消息功能。请参考", _jsx(_components.a, {
              href: "https://doc.shengwang.cn/doc/rtm2/javascript/get-started/quick-start",
              children: "实现收发消息"
            }), "。"]
          }), `
`, _jsxs(_components.li, {
            children: ["已参考", _jsx(_components.a, {
              href: "./quick-start",
              children: "实现对话式智能体"
            }), "实现与智能体对话的基本逻辑。"]
          }), `
`, _jsx(_components.li, {
            children: "确保 RTC 可用、RTM 已登录，且 RTC 和 RTM 实例的生命周期大于组件的生命周期。组件内部不负责维护 RTC，RTM 的初始化、生命周期以及鉴权/登录状态的逻辑。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "web",
      children: "Web"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["已集成 v4.24.0 及以上版本的 RTC Web SDK，并参考", _jsx(_components.a, {
          href: "https://doc.shengwang.cn/doc/rtc/javascript/get-started/quick-start",
          children: "实现音视频互动"
        }), "在 App 中实现了基本的实时音视频功能、获取了相关设备的使用权限。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["已在", _jsx(_components.a, {
              href: "https://console.shengwang.cn/",
              children: "控制台"
            }), "为项目启用 RTM 服务，并在 App 中实现了基本的实时消息功能。请参考", _jsx(_components.a, {
              href: "https://doc.shengwang.cn/doc/rtm2/javascript/get-started/quick-start",
              children: "实现收发消息"
            }), "。"]
          }), `
`, _jsxs(_components.li, {
            children: ["已参考", _jsx(_components.a, {
              href: "./quick-start",
              children: "实现对话式智能体"
            }), "实现与智能体对话的基本逻辑。"]
          }), `
`, _jsx(_components.li, {
            children: "确保 RTC 可用、RTM 已登录，且 RTC 和 RTM 实例的生命周期大于组件的生命周期。组件内部不负责维护 RTC，RTM 的初始化、生命周期以及鉴权/登录状态的逻辑。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "实现方法",
      children: "实现方法"
    }), `
`, _jsx(_components.h3, {
      id: "集成组件",
      children: "集成组件"
    }), `
`, _jsx(_components.h4, {
      id: "android-1",
      children: "Android"
    }), `
`, _jsxs(_components.p, {
      children: ["将 ", _jsx(_components.code, {
        children: "convoaiApi"
      }), " 文件夹拷贝到你的项目中，并在后续调用组件 API 前引入组件。你可以前往", _jsx(_components.a, {
        href: "#%E7%BB%84%E4%BB%B6%E7%BB%93%E6%9E%84",
        children: "组件结构"
      }), "了解各个文件作用。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://github.com/AgoraIO-Community/Conversational-AI-Demo/tree/main/Android/scenes/convoai/src/main/java/io/agora/scene/convoai/convoaiApi",
          children: "convoaiApi"
        })
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "ios-1",
      children: "iOS"
    }), `
`, _jsxs(_components.p, {
      children: ["将 ", _jsx(_components.code, {
        children: "ConversationalAIAPI"
      }), " 文件夹拷贝到你的项目中，并在后续调用组件 API 前引入组件。你可以前往", _jsx(_components.a, {
        href: "#%E7%BB%84%E4%BB%B6%E7%BB%93%E6%9E%84",
        children: "组件结构"
      }), "了解各个文件作用。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://github.com/AgoraIO-Community/Conversational-AI-Demo/tree/main/iOS/Scenes/ConvoAI/ConvoAI/ConvoAI/Classes/ConversationalAIAPI",
          children: "ConversationalAIAPI"
        })
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "web-1",
      children: "Web"
    }), `
`, _jsxs(_components.p, {
      children: ["将 ", _jsx(_components.code, {
        children: "conversational-ai-api"
      }), " 文件拷贝到你自己的项目中，并在后续调用组件 API 前引入组件。你可以前往", _jsx(_components.a, {
        href: "#%E7%BB%84%E4%BB%B6%E7%BB%93%E6%9E%84",
        children: "组件结构"
      }), "了解各个文件作用。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://github.com/AgoraIO-Community/Conversational-AI-Demo/tree/main/Web/Scenes/VoiceAgent/src/conversational-ai-api",
          children: "conversational-ai-api"
        })
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "初始化组件",
      children: "初始化组件"
    }), `
`, _jsx(_components.p, {
      children: "为 RTC 和 RTM 实例创建配置对象，并设置转录字幕渲染模式，之后创建组件实例："
    }), `
`, _jsxs(CodeBlockTabs, {
      defaultValue: "android",
      children: [_jsxs(CodeBlockTabsList, {
        children: [_jsx(CodeBlockTabsTrigger, {
          value: "android",
          children: "Android"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "ios",
          children: "iOS"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "web",
          children: "Web"
        })]
      }), _jsx(CodeBlockTab, {
        value: "android",
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
            icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// 为 RTC 和 RTM 实例创建配置对象"
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
                  children: "     * 设置转录字幕渲染模式，可选值："
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "     * - `TranscriptRenderMode.Word`：逐字渲染模式，即回调接收的字幕内容将逐字渲染到 UI 上。"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "     * - `TranscriptRenderMode.Text`：逐句渲染模式，即回调接收的字幕内容将全量渲染到 UI 上。"
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
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// 创建组件实例"
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
        })
      }), _jsx(CodeBlockTab, {
        value: "ios",
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
            icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "/// 为 RTC 和 RTM 实例创建配置对象"
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
                  children: "     * 设置转录字幕渲染模式，可选值："
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "     * - `.words`：逐字渲染模式，即回调接收的字幕内容将逐字渲染到 UI 上。"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "     * - `.text`：逐句渲染模式，即回调接收的字幕内容将全量渲染到 UI 上。"
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
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "/// 创建组件实例"
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
        })
      }), _jsx(CodeBlockTab, {
        value: "web",
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// 初始化组件"
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
                  children: "    rtcEngine,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    rtmEngine,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "/**"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: " * 设置转录字幕渲染模式，可选值："
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: " * - `ESubtitleHelperMode.WORD`：逐字渲染模式，即回调接收的字幕内容将逐字渲染到 UI 上。"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: " * - `ESubtitleHelperMode.TEXT`：逐句渲染模式，即回调接收的字幕内容将全量渲染到 UI 上。"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: " *"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: " * 不指定则自动根据消息判断模式，或手动指定模式"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: " */"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    renderMode: ESubtitleHelperMode."
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
                  children: "    })"
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
                  children: "// 获取 API 实例（单例）"
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
        })
      })]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsxs(_components.p, {
        children: [`信息
逐字渲染模式 (`, _jsx(_components.code, {
          children: "ESubtitleHelperMode.WORD"
        }), ") 下需要接收来自 RTC 的音频时间戳信息才能实现字幕和语音同步输出。为此，在创建客户端对象前，请确保完成以下设置："]
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
                children: "// 设置传递音频时间戳信息"
              })
            }), `
`, _jsxs(_components.span, {
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
                children: '"ENABLE_AUDIO_PTS_METADATA"'
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
                children: ");"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// 创建客户端对象并指定频道场景和浏览器编码方式"
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
                children: '"rtc"'
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
                children: '"vp8"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " });"
              })]
            })]
          })
        })
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "注册字幕回调",
      children: "注册字幕回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.code, {
        children: "addHandler"
      }), " 方法，注册并实现字幕转录回调："]
    }), `
`, _jsxs(CodeBlockTabs, {
      defaultValue: "android",
      children: [_jsxs(CodeBlockTabsList, {
        children: [_jsx(CodeBlockTabsTrigger, {
          value: "android",
          children: "Android"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "ios",
          children: "iOS"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "web",
          children: "Web"
        })]
      }), _jsx(CodeBlockTab, {
        value: "android",
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
        })
      }), _jsx(CodeBlockTab, {
        value: "ios",
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
        })
      }), _jsx(CodeBlockTab, {
        value: "web",
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// 监听转录内容更新，用于实时显示字幕转录内容"
                })
              }), `
`, _jsxs(_components.span, {
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
                  children: "on"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EConversationalAIAPIEvents."
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
                  children: ", onTextChanged)"
                })]
              })]
            })
          })
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "实现字幕数据回调接口",
      children: "实现字幕数据回调接口"
    }), `
`, _jsx(_components.p, {
      children: "你需要自行实现字幕处理逻辑，根据转录内容更新 UI 显示。"
    }), `
`, _jsxs(CodeBlockTabs, {
      defaultValue: "android",
      children: [_jsxs(CodeBlockTabsList, {
        children: [_jsx(CodeBlockTabsTrigger, {
          value: "android",
          children: "Android"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "ios",
          children: "iOS"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "web",
          children: "Web"
        })]
      }), _jsxs(CodeBlockTab, {
        value: "android",
        children: [_jsxs(_components.p, {
          children: ["将你实现的字幕 UI 模块继承自 ", _jsx(_components.code, {
            children: "IConversationalAIAPIEventHandler"
          }), " 接口, 并实现 ", _jsx(_components.code, {
            children: "onTranscriptUpdated"
          }), " 方法, 在该方法内处理字幕渲染至 UI 的逻辑。"]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " private"
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
                  children: "   override"
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
                  children: "        // 在此处接收字幕更新 UI"
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
        })]
      }), _jsxs(CodeBlockTab, {
        value: "ios",
        children: [_jsxs(_components.p, {
          children: ["将你实现的字幕 UI 模块实现 ", _jsx(_components.code, {
            children: "ConversationalAIAPIEventHandler"
          }), " 协议, 并实现 ", _jsx(_components.code, {
            children: "onTranscriptUpdated"
          }), " 方法, 在该方法内处理字幕渲染至 UI 的逻辑："]
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
                  children: "        //可以在此处接收字幕更新 UI"
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
        })]
      }), _jsxs(CodeBlockTab, {
        value: "web",
        children: [_jsx(_components.p, {
          children: "将你实现的字幕 UI 模块接收客户端组件的字幕数据回调，并实现一个简单的 React JS 组件来展示这些消息:"
        }), _jsxs(_components.blockquote, {
          children: [`
`, _jsx(_components.p, {
            children: "信息"
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["所有 ", _jsx(_components.code, {
                children: "TRANSCRIPT_UPDATED"
              }), " 事件回调均返回完整聊天对话列表。每次均有可能更新最近的几条对话字幕，请根据完整的列表渲染 UI。"]
            }), `
`, _jsxs(_components.li, {
              children: ["推荐使用状态管理库如 ", _jsx(_components.code, {
                children: "zustand"
              }), "、", _jsx(_components.code, {
                children: "redux"
              }), " 等来代替 ", _jsx(_components.code, {
                children: "React.useState"
              }), " 管理状态，以便在组件间共享状态。"]
            }), `
`]
          }), `
`]
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
                  children: ' "react"'
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
                  children: " IUserTranscript,"
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
                  children: " IAgentTranscript,"
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
                  children: ' "@/conversational-ai-api/type"'
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
                  children: ' "@/conversational-ai-api"'
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
                  children: "// 监听转录内容更新，用于实时显示字幕转录内容"
                })
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
                  children: "IUserTranscript "
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
                  children: " IAgentTranscript"
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
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "订阅频道消息",
      children: "订阅频道消息"
    }), `
`, _jsx(_components.p, {
      children: "字幕转录内容通过 RTM 频道消息传递，你需要在开始智能体会话前订阅频道消息，以接收字幕数据。"
    }), `
`, _jsxs(CodeBlockTabs, {
      defaultValue: "android",
      children: [_jsxs(CodeBlockTabsList, {
        children: [_jsx(CodeBlockTabsTrigger, {
          value: "android",
          children: "Android"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "ios",
          children: "iOS"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "web",
          children: "Web"
        })]
      }), _jsxs(CodeBlockTab, {
        value: "android",
        children: [_jsxs(_components.p, {
          children: ["在开始智能体会话前调用 ", _jsx(_components.code, {
            children: "subscribeMessage"
          }), " 订阅频道消息："]
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
                  children: "        // 处理错误"
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
        })]
      }), _jsxs(CodeBlockTab, {
        value: "ios",
        children: [_jsxs(_components.p, {
          children: ["在开始智能体会话前调用 ", _jsx(_components.code, {
            children: "subscribeMessage"
          }), " 订阅频道消息："]
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
                  children: '"订阅失败: '
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
                  children: '"订阅成功"'
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
        })]
      }), _jsx(CodeBlockTab, {
        value: "web",
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
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "智能体加入频道",
      children: "智能体加入频道"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "../operations/start-agent.md",
        children: "POST 创建对话式智能体"
      }), "接口，并完成以下参数设置："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "advanced_features.enable_rtm: true"
        }), " —— （必选）启动 RTM 服务"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: 'parameters.data_channel: "rtm"'
        }), " —— （必选）开启 RTM 数据传输通道"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "parameters.enable_metrics: true"
        }), " —— （按需开启）接收智能体性能数据"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "parameters.enable_error_message: true"
        }), " —— （按需开启）接收智能体错误事件"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "调用成功后，智能体会加入指定 RTC 频道，用户可以开始与智能体互动。"
    }), `
`, _jsx(_components.h3, {
      id: "取消订阅频道消息",
      children: "取消订阅频道消息"
    }), `
`, _jsx(_components.p, {
      children: "每次智能体会话结束后，你需要取消订阅频道消息，以释放字幕相关资源。"
    }), `
`, _jsxs(CodeBlockTabs, {
      defaultValue: "android",
      children: [_jsxs(CodeBlockTabsList, {
        children: [_jsx(CodeBlockTabsTrigger, {
          value: "android",
          children: "Android"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "ios",
          children: "iOS"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "web",
          children: "Web"
        })]
      }), _jsx(CodeBlockTab, {
        value: "android",
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
                  children: "        // 处理错误"
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
        })
      }), _jsx(CodeBlockTab, {
        value: "ios",
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
            icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "/// 取消订阅频道消息"
                })
              }), `
`, _jsxs(_components.span, {
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
                  children: '"取消订阅失败: '
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
                  children: '"取消订阅成功"'
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
        })
      }), _jsx(CodeBlockTab, {
        value: "web",
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
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "销毁组件实例",
      children: "销毁组件实例"
    }), `
`, _jsx(_components.p, {
      children: "结束 AI 对话场景后或关闭 App 前，你需要销毁组件实例，以释放组件的所有资源。"
    }), `
`, _jsxs(CodeBlockTabs, {
      defaultValue: "android",
      children: [_jsxs(CodeBlockTabsList, {
        children: [_jsx(CodeBlockTabsTrigger, {
          value: "android",
          children: "Android"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "ios",
          children: "iOS"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "web",
          children: "Web"
        })]
      }), _jsx(CodeBlockTab, {
        value: "android",
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
        })
      }), _jsx(CodeBlockTab, {
        value: "ios",
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
        })
      }), _jsx(CodeBlockTab, {
        value: "web",
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
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "参考信息",
      children: "参考信息"
    }), `
`, _jsx(_components.h3, {
      id: "示例项目",
      children: "示例项目"
    }), `
`, _jsx(_components.p, {
      children: "声网提供了开源的实时字幕示例项目供你参考，你可以前往下载或查看其中的源代码。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://github.com/AgoraIO-Community/Conversational-AI-Demo/",
          children: "Conversational-AI-Demo"
        })
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "组件结构",
      children: "组件结构"
    }), `
`, _jsx(_components.p, {
      children: "客户端组件文件夹的结构和各文件作用如下："
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsx(_components.p, {
        children: `信息
以下文件和文件夹即为集成客户端组件所需全部内容，无需拷贝其他文件。`
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "android-2",
      children: "Android"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "IConversationalAIAPI.kt"
        }), " — API 接口及相关数据结构和枚举", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "ConversationalAIAPIImpl.kt"
            }), " — ConversationalAI API 主要实现逻辑"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "ConversationalAIUtils.kt"
            }), " — 工具函数与事件回调管理"]
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
                }), " — 字幕部分模块", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "TranscriptionController.kt"
                    }), " — 字幕控制器"]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "MessageParser.kt"
                    }), " — 消息解析器"]
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
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "ios-2",
      children: "iOS"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "ConversationalAIAPI.swift"
        }), " — API 接口及相关数据结构和枚举", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "ConversationalAIAPIImpl.swift"
            }), " — ConversationalAI API 主要实现逻辑"]
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
                }), " — 字幕控制器"]
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
`, _jsx(_components.h4, {
      id: "web-2",
      children: "Web"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "index.ts"
        }), " — API 类", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "type.ts"
            }), " — API 接口及相关数据结构和枚举"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "utils/index.ts"
            }), " — API 工具函数"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "utils/events.ts"
            }), " — 事件管理类，可以拓展该类以轻松实现事件监听和播报"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "utils/sub-render.ts"
            }), " — 字幕部分模块"]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "api-参考",
      children: "API 参考"
    }), `
`, _jsx(_components.h4, {
      id: "android-3",
      children: "Android"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapi#addhandler",
          children: _jsx(_components.code, {
            children: "addHandler"
          })
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapi#subscribemessage",
              children: _jsx(_components.code, {
                children: "subscribeMessage"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapi#unsubscribemessage",
              children: _jsx(_components.code, {
                children: "unsubscribeMessage"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapi#destroy",
              children: _jsx(_components.code, {
                children: "destroy"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#ontranscriptupdated",
              children: _jsx(_components.code, {
                children: "onTranscriptUpdated"
              })
            })
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "ios-3",
      children: "iOS"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapi#addhandler",
          children: _jsx(_components.code, {
            children: "addHandler"
          })
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapi#subscribemessage",
              children: _jsx(_components.code, {
                children: "subscribeMessage"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapi#unsubscribemessage",
              children: _jsx(_components.code, {
                children: "unsubscribeMessage"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapi#destroy",
              children: _jsx(_components.code, {
                children: "destroy"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#ontranscriptupdated",
              children: _jsx(_components.code, {
                children: "onTranscriptUpdated"
              })
            })
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "web-3",
      children: "Web"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/struct#iconversationalaiapieventhandlers",
          children: _jsx(_components.code, {
            children: "IConversationalAIAPIEventHandler"
          })
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/enum#econversationalaiapievents",
              children: _jsx(_components.code, {
                children: "EConversationalAIAPIEvents"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/conversationalaiapi#subscribemessage",
              children: _jsx(_components.code, {
                children: "subscribeMessage"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/conversationalaiapi#unsubscribemessage",
              children: _jsx(_components.code, {
                children: "unsubscribeMessage"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/conversationalaiapi#destroy",
              children: _jsx(_components.code, {
                children: "destroy"
              })
            })
          }), `
`]
        }), `
`]
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
