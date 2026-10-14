import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "监听智能体事件",
  description: "与对话式智能体进行实时互动时，你可能需要监听智能体相关事件来实现更丰富的功能。本文介绍如何在你的 App 中监听智能体相关事件。"
};
export let _markdown = `

与对话式智能体进行实时互动时，你可能需要监听智能体相关事件来实现更丰富的功能。本文介绍如何在你的 App 中监听智能体相关事件。

## 技术原理 [#技术原理]

声网提供一套灵活可扩展、标准化的对话式 AI 引擎客户端组件（以下简称组件）。该组件支持 iOS、Android、Web 平台，封装了多个场景化 API，你只需要调用这些 API 即可结合声网[实时互动 (RTC) SDK](https://doc.shengwang.cn/doc/rtc/homepage) 和[实时消息 (RTM) SDK](https://doc.shengwang.cn/doc/rtm2/homepage) 的能力实现以下功能：

* [打断智能体](./interrupt-agent.md)
* [实时字幕](./realtime-sub.md)
* [监听智能体相关事件](./listen-agent-events.md)
* [设置最佳音频参数](./best-practices/audio-settings) （仅支持 Android 和 iOS）
* [发送图片消息](./send-multimodal-message.md)

组件提供一系列回调，支持监听不同的智能体相关事件和信息：

* \`onAgentStateChanged\`：通过接收 RTM \`presence\` 事件，监听智能体状态变化（静默/聆听/思考/说话）。可用于更新智能体 UI 或追踪对话流程。
* \`onAgentInterrupted\`：通过接收 RTM \`message\` 事件，监听智能体打断事件。
* \`onAgentMetrics\`：通过接收 RTM \`message\` 事件，监听智能体性能指标，包括 LLM 推理延迟、TTS 合成延迟等。可用于监控系统性能。
* \`onAgentError\`：通过接收 RTM \`message\` 事件，监听智能体错误事件，例如智能体某模块（例如 LLM、TTS 等）发生错误。可用于错误监控、日志记录和实现优雅降级策略。

## 前提条件 [#前提条件]

开始前，请确保完成以下准备工作：

* 已集成 RTC v4.5.1 及以上版本 SDK，且在 App 中实现了基本的实时音视频功能、获取了相关设备的使用权限。请参考[实现音视频互动](https://doc.shengwang.cn/doc/rtc/android/get-started/quick-start)。
* 已在[控制台](https://console.shengwang.cn/)为项目启用 RTM 服务，并在 App 中实现了基本的实时消息功能。请参考[实现收发消息](https://doc.shengwang.cn/doc/rtm2/javascript/get-started/quick-start)。
* 已参考[实现对话式智能体](./quick-start)实现与智能体对话的基本逻辑。
* 确保 RTC 可用、RTM 已登录，且 RTC 和 RTM 实例的生命周期大于组件的生命周期。组件内部不负责维护 RTC，RTM 的初始化、生命周期以及鉴权/登录状态的逻辑。

## 实现步骤 [#实现步骤]

### 集成组件 [#集成组件]

#### Android [#android]

将 \`convoaiApi\` 文件夹拷贝到你的项目中，并在后续调用组件 API 前引入组件。你可以前往[组件结构](#组件结构)了解各个文件作用。

* [convoaiApi](https://github.com/AgoraIO-Community/Conversational-AI-Demo/tree/main/Android/scenes/convoai/src/main/java/io/agora/scene/convoai/convoaiApi)

#### iOS [#ios]

将 \`ConversationalAIAPI\` 文件夹拷贝到你的项目中，并在后续调用组件 API 前引入组件。你可以前往[组件结构](#组件结构)了解各个文件作用。

* [ConversationalAIAPI](https://github.com/AgoraIO-Community/Conversational-AI-Demo/tree/main/iOS/Scenes/ConvoAI/ConvoAI/ConvoAI/Classes/ConversationalAIAPI)

#### Web [#web]

将 \`conversational-ai-api\` 文件拷贝到你自己的项目中，并在后续调用组件 API 前引入组件。你可以前往[组件结构](#组件结构)了解各个文件作用。

* [conversational-ai-api](https://github.com/AgoraIO-Community/Conversational-AI-Demo/tree/main/Web/Scenes/VoiceAgent/src/conversational-ai-api)

### 初始化组件 [#初始化组件]

为 RTC 和 RTM 实例创建配置对象，之后创建组件实例：

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
    \`\`\`java
    // 为 RTC 和 RTM 实例创建配置对象
    val config = ConversationalAIAPIConfig(
        rtcEngine = rtcEngineInstance,
        rtmClient = rtmClientInstance,
        enableLog = true
    )
    // 创建组件实例
    val api = ConversationalAIAPIImpl(config)
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="ios">
    \`\`\`swift
    // 为 RTC 和 RTM 实例创建配置对象
    let config = ConversationalAIAPIConfig(
        rtcEngine: rtcEngine,
        rtmEngine: rtmEngine,
        enableLog: true
    )
    /// 创建组件实例
    convoAIAPI = ConversationalAIAPIImpl(config: config)
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="web">
    \`\`\`typescript
    // 为 RTC 和 RTM 实例创建配置对象
    ConversationalAIAPI.init({
        rtcEngine,
        rtmEngine,
        })

    // 获取 API 实例（单例）
    const conversationalAIAPI = ConversationalAIAPI.getInstance()
    \`\`\`
  </CodeBlockTab>
</CodeBlockTabs>

### 注册回调 [#注册回调]

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
    调用 \`addHandler\` 方法，注册并实现智能体相关事件回调：

    \`\`\`kotlin
    // 注册回调
    api.addHandler(object : IConversationalAIAPIEventHandler {
        // 监听智能体状态变化
        override fun onAgentStateChanged(agentUserId: String, event: StateChangeEvent) {
            when (event.state) {
                AgentState.SILENT -> {
                    updateAgentStatus("等待中...")
                }
                AgentState.LISTENING -> {
                    updateAgentStatus("正在听...")
                }
                AgentState.THINKING -> {
                    updateAgentStatus("思考中...")
                }
                AgentState.SPEAKING -> {
                    updateAgentStatus("说话中...")
                }
                AgentState.UNKNOWN -> {
                    Log.w("AgentState", "Unknown agent state: $event")
                }
            }
        }
        // 监听智能体打断事件
        override fun onAgentInterrupted(agentUserId: String, event: InterruptEvent) {
            // 智能体被打断，可以更新 UI 或记录日志
            Log.d("AgentInterrupt", "Agent $agentUserId interrupted at turn \${event.turnId}")
            // 可以在这里更新 UI，比如显示"对话已中断"
            showInterruptNotification()
        }
        // 监听智能体性能指标，用于监控和优化
        override fun onAgentMetrics(agentUserId: String, metric: Metric) {
            when (metric.type) {
                ModuleType.LLM -> {
                    Log.d("Metrics", "LLM latency: \${metric.value}ms")
                    // 可以记录 LLM 响应时间用于性能分析
                }
                ModuleType.TTS -> {
                    Log.d("Metrics", "TTS latency: \${metric.value}ms")
                    // 可以记录 TTS 合成时间
                }
                else -> {
                    Log.d("Metrics", "\${metric.type}: \${metric.name} = \${metric.value}")
                }
            }
        }
        // 监听智能体错误事件
        override fun onAgentError(agentUserId: String, error: ModuleError) {

            Log.e("AgentError", "Error in \${error.type}: \${error.message} (code: \${error.code})")

            when (error.type) {
                ModuleType.LLM -> {
                    // LLM 错误，可能需要重试或降级处理
                    showErrorMessage("AI处理出错，请稍后重试")
                }
                ModuleType.TTS -> {
                    // TTS 错误，可能需要切换到文本模式
                    showErrorMessage("语音合成出错")
                }
                else -> {
                    // 其他错误类型
                    showErrorMessage("系统错误: \${error.message}")
                }
            }
        }

        override fun onDebugLog(log: String) {
            // 处理调试日志
            if (BuildConfig.DEBUG) {
                Log.d("ConvoAI", log)
            }
            // 可以将日志发送到远程服务器进行问题诊断
        }
    })
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="ios">
    调用 \`addHandler\` 方法，注册并实现智能体相关事件回调：

    \`\`\`swift
    // 让你的类遵循 ConversationalAIAPIEventHandler 协议
    class ConversationViewController: UIViewController, ConversationalAIAPIEventHandler {

        // 实现协议方法
        func onAgentStateChanged(agentUserId: String, event: StateChangeEvent) {
            // 更新 UI 显示智能体当前状态
            DispatchQueue.main.async {
                self.updateAgentStatus(event.state)
            }
        }

        func onAgentInterrupted(agentUserId: String, event: InterruptEvent) {
            // 智能体被中断，可以更新 UI 或记录日志
            print("Agent \\(agentUserId) interrupted at turn \\(event.turnId)")
            DispatchQueue.main.async {
                self.showInterruptNotification()
            }
        }

        func onAgentMetrics(agentUserId: String, metrics: Metric) {
            // 监听智能体性能指标，用于监控和优化
            switch metrics.type {
            case .llm:
                print("LLM latency: \\(metrics.value)ms")
                // 可以记录LLM响应时间用于性能分析
            case .tts:
                print("TTS latency: \\(metrics.value)ms")
                // 可以记录TTS合成时间
            case .unknown:
                print("Unknown metric: \\(metrics.name) = \\(metrics.value)")
            }
        }

        func onAgentError(agentUserId: String, error: ModuleError) {
            // 监听智能体错误事件
            print("Error in \\(error.type): \\(error.message) (code: \\(error.code))")

            DispatchQueue.main.async {
                switch error.type {
                case .llm:
                    // LLM错误，可能需要重试或降级处理
                    self.showErrorMessage("AI处理出错，请稍后重试")
                case .tts:
                    // TTS错误，可能需要切换到文本模式
                    self.showErrorMessage("语音合成出错")
                case .mllm:
                    // MLLM错误
                    self.showErrorMessage("多模态AI处理出错")
                case .unknown:
                    // 其他错误类型
                    self.showErrorMessage("系统错误: \\(error.message)")
                }
            }
        }

        // 辅助方法，用于更新 UI 显示智能体当前状态
        private func updateAgentStatus(_ state: AgentState) {
            let (text, color): (String, UIColor) = {
                switch state {
                case .idle:
                    return ("空闲", .gray)
                case .silent:
                    return ("等待中...", .gray)
                case .listening:
                    return ("正在听...", .blue)
                case .thinking:
                    return ("思考中...", .orange)
                case .speaking:
                    return ("说话中...", .green)
                case .unknown:
                    return ("未知状态", .red)
                }
            }()

            statusLabel.text = text
            statusLabel.textColor = color
        }

        private func showInterruptNotification() {
            statusLabel.text = "对话已中断"
            statusLabel.textColor = .red
        }

        private func showErrorMessage(_ message: String) {
            let alert = UIAlertController(title: "错误", message: message, preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: "确定", style: .default))
            present(alert, animated: true)
        }
    }

    // 注册事件回调
    convoAIAPI.addHandler(handler: self)
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="web">
    \`\`\`typescript
    // 监听智能体状态变化
    conversationalAIAPI.on(EConversationalAIAPIEvents.AGENT_STATE_CHANGED, onAgentStateChanged)
    // 监听智能体性能指标
    conversationalAIAPI.on(EConversationalAIAPIEvents.AGENT_METRICS, onAgentMetricsChanged)
    // 监听智能体错误事件
    conversationalAIAPI.on(EConversationalAIAPIEvents.AGENT_ERROR, onAgentError)
    \`\`\`
  </CodeBlockTab>
</CodeBlockTabs>

### 订阅频道消息 [#订阅频道消息]

智能体的相关事件通过 RTM 频道消息传递，你需要在开始智能体会话前调用 \`subscribeMessage\` 订阅频道消息，以接收智能体相关事件。

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
    api.subscribeMessage("channelName") { error ->
        if (error != null) {
            // 处理错误
        }
    }
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="ios">
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

每次智能体会话结束后，你需要取消订阅频道消息，以释放回调事件相关资源。

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

声网提供了开源的示例项目供你参考，你可以前往下载或查看其中的源代码。

* [Conversational-AI-Demo](https://github.com/AgoraIO-Community/Conversational-AI-Demo/)

### 组件结构 [#组件结构]

客户端组件文件夹的结构和各文件作用如下：

> 信息
> 以下文件和文件夹即为集成客户端组件所需全部内容，无需拷贝其他文件。

#### Android [#android-1]

* \`IConversationalAIAPI.kt\` — API 接口及相关数据结构和枚举
  * \`ConversationalAIAPIImpl.kt\` — ConversationalAI API 主要实现逻辑
  * \`ConversationalAIUtils.kt\` — 工具函数与事件回调管理
  * \`subRender/\`
    * \`v3/\` — 字幕部分模块
      * \`TranscriptionController.kt\` — 字幕控制器
      * \`MessageParser.kt\` — 消息解析器

#### iOS [#ios-1]

* \`ConversationalAIAPI.swift\` — API 接口及相关数据结构和枚举
  * \`ConversationalAIAPIImpl.swift\` — ConversationalAI API 主要实现逻辑
  * \`Transcription/\`
    * \`TranscriptionController.swift\` — 字幕控制器

#### Web [#web-1]

* \`index.ts\` — API 类
  * \`type.ts\` — API 接口及相关数据结构和枚举
  * \`utils/index.ts\` — API 工具函数
  * \`utils/events.ts\` — 事件管理类，可以拓展该类以轻松实现事件监听和播报
  * \`utils/sub-render.ts\` — 字幕部分模块

### API 参考 [#api-参考]

#### Android [#android-2]

* [\`addHandler\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapi#addhandler)
  * [\`subscribeMessage\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapi#subscribemessage)
  * [\`unsubscribeMessage\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapi#unsubscribemessage)
  * [\`destroy\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapi#destroy)
  * [\`onAgentStateChanged\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#onagentstatechanged)
  * [\`onAgentInterrupted\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#onagentinterrupted)
  * [\`onAgentMetrics\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#onagentmetrics)
  * [\`onAgentError\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#onagenterror)

#### iOS [#ios-2]

* [\`addHandler\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapi#addhandler)
  * [\`subscribeMessage\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapi#subscribemessage)
  * [\`unsubscribeMessage\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapi#unsubscribemessage)
  * [\`destroy\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapi#destroy)
  * [\`onAgentStateChanged\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#onagentstatechanged)
  * [\`onAgentInterrupted\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#onagentinterrupted)
  * [\`onAgentMetrics\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#onagentmetrics)
  * [\`onAgentError\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#onagenterror)

#### Web [#web-2]

* [\`IConversationalAIAPIEventHandler\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/struct#iconversationalaiapieventhandlers)
  * [\`EConversationalAIAPIEvents\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/enum#econversationalaiapievents)
  * [\`subscribeMessage\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/conversationalaiapi#subscribemessage)
  * [\`unsubscribeMessage\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/conversationalaiapi#unsubscribemessage)
  * [\`destroy\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/conversationalaiapi#destroy)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "与对话式智能体进行实时互动时，你可能需要监听智能体相关事件来实现更丰富的功能。本文介绍如何在你的 App 中监听智能体相关事件。"
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
    content: "组件提供一系列回调，支持监听不同的智能体相关事件和信息："
  }, {
    heading: "技术原理",
    content: "`onAgentStateChanged`：通过接收 RTM `presence` 事件，监听智能体状态变化（静默/聆听/思考/说话）。可用于更新智能体 UI 或追踪对话流程。"
  }, {
    heading: "技术原理",
    content: "`onAgentInterrupted`：通过接收 RTM `message` 事件，监听智能体打断事件。"
  }, {
    heading: "技术原理",
    content: "`onAgentMetrics`：通过接收 RTM `message` 事件，监听智能体性能指标，包括 LLM 推理延迟、TTS 合成延迟等。可用于监控系统性能。"
  }, {
    heading: "技术原理",
    content: "`onAgentError`：通过接收 RTM `message` 事件，监听智能体错误事件，例如智能体某模块（例如 LLM、TTS 等）发生错误。可用于错误监控、日志记录和实现优雅降级策略。"
  }, {
    heading: "前提条件",
    content: "开始前，请确保完成以下准备工作："
  }, {
    heading: "前提条件",
    content: "已集成 RTC v4.5.1 及以上版本 SDK，且在 App 中实现了基本的实时音视频功能、获取了相关设备的使用权限。请参考实现音视频互动。"
  }, {
    heading: "前提条件",
    content: "已在控制台为项目启用 RTM 服务，并在 App 中实现了基本的实时消息功能。请参考实现收发消息。"
  }, {
    heading: "前提条件",
    content: "已参考实现对话式智能体实现与智能体对话的基本逻辑。"
  }, {
    heading: "前提条件",
    content: "确保 RTC 可用、RTM 已登录，且 RTC 和 RTM 实例的生命周期大于组件的生命周期。组件内部不负责维护 RTC，RTM 的初始化、生命周期以及鉴权/登录状态的逻辑。"
  }, {
    heading: "android",
    content: "将 `convoaiApi` 文件夹拷贝到你的项目中，并在后续调用组件 API 前引入组件。你可以前往组件结构了解各个文件作用。"
  }, {
    heading: "android",
    content: "convoaiApi"
  }, {
    heading: "ios",
    content: "将 `ConversationalAIAPI` 文件夹拷贝到你的项目中，并在后续调用组件 API 前引入组件。你可以前往组件结构了解各个文件作用。"
  }, {
    heading: "ios",
    content: "ConversationalAIAPI"
  }, {
    heading: "web",
    content: "将 `conversational-ai-api` 文件拷贝到你自己的项目中，并在后续调用组件 API 前引入组件。你可以前往组件结构了解各个文件作用。"
  }, {
    heading: "web",
    content: "conversational-ai-api"
  }, {
    heading: "初始化组件",
    content: "为 RTC 和 RTM 实例创建配置对象，之后创建组件实例："
  }, {
    heading: "注册回调",
    content: "调用 `addHandler` 方法，注册并实现智能体相关事件回调："
  }, {
    heading: "注册回调",
    content: "调用 `addHandler` 方法，注册并实现智能体相关事件回调："
  }, {
    heading: "订阅频道消息",
    content: "智能体的相关事件通过 RTM 频道消息传递，你需要在开始智能体会话前调用 `subscribeMessage` 订阅频道消息，以接收智能体相关事件。"
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
    content: "每次智能体会话结束后，你需要取消订阅频道消息，以释放回调事件相关资源。"
  }, {
    heading: "销毁组件实例",
    content: "结束 AI 对话场景后或关闭 App 前，你需要销毁组件实例，以释放组件的所有资源。"
  }, {
    heading: "示例项目",
    content: "声网提供了开源的示例项目供你参考，你可以前往下载或查看其中的源代码。"
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
    heading: "android-1",
    content: "`IConversationalAIAPI.kt` — API 接口及相关数据结构和枚举"
  }, {
    heading: "android-1",
    content: "`ConversationalAIAPIImpl.kt` — ConversationalAI API 主要实现逻辑"
  }, {
    heading: "android-1",
    content: "`ConversationalAIUtils.kt` — 工具函数与事件回调管理"
  }, {
    heading: "android-1",
    content: "`subRender/`"
  }, {
    heading: "android-1",
    content: "`v3/` — 字幕部分模块"
  }, {
    heading: "android-1",
    content: "`TranscriptionController.kt` — 字幕控制器"
  }, {
    heading: "android-1",
    content: "`MessageParser.kt` — 消息解析器"
  }, {
    heading: "ios-1",
    content: "`ConversationalAIAPI.swift` — API 接口及相关数据结构和枚举"
  }, {
    heading: "ios-1",
    content: "`ConversationalAIAPIImpl.swift` — ConversationalAI API 主要实现逻辑"
  }, {
    heading: "ios-1",
    content: "`Transcription/`"
  }, {
    heading: "ios-1",
    content: "`TranscriptionController.swift` — 字幕控制器"
  }, {
    heading: "web-1",
    content: "`index.ts` — API 类"
  }, {
    heading: "web-1",
    content: "`type.ts` — API 接口及相关数据结构和枚举"
  }, {
    heading: "web-1",
    content: "`utils/index.ts` — API 工具函数"
  }, {
    heading: "web-1",
    content: "`utils/events.ts` — 事件管理类，可以拓展该类以轻松实现事件监听和播报"
  }, {
    heading: "web-1",
    content: "`utils/sub-render.ts` — 字幕部分模块"
  }, {
    heading: "android-2",
    content: "`addHandler`"
  }, {
    heading: "android-2",
    content: "`subscribeMessage`"
  }, {
    heading: "android-2",
    content: "`unsubscribeMessage`"
  }, {
    heading: "android-2",
    content: "`destroy`"
  }, {
    heading: "android-2",
    content: "`onAgentStateChanged`"
  }, {
    heading: "android-2",
    content: "`onAgentInterrupted`"
  }, {
    heading: "android-2",
    content: "`onAgentMetrics`"
  }, {
    heading: "android-2",
    content: "`onAgentError`"
  }, {
    heading: "ios-2",
    content: "`addHandler`"
  }, {
    heading: "ios-2",
    content: "`subscribeMessage`"
  }, {
    heading: "ios-2",
    content: "`unsubscribeMessage`"
  }, {
    heading: "ios-2",
    content: "`destroy`"
  }, {
    heading: "ios-2",
    content: "`onAgentStateChanged`"
  }, {
    heading: "ios-2",
    content: "`onAgentInterrupted`"
  }, {
    heading: "ios-2",
    content: "`onAgentMetrics`"
  }, {
    heading: "ios-2",
    content: "`onAgentError`"
  }, {
    heading: "web-2",
    content: "`IConversationalAIAPIEventHandler`"
  }, {
    heading: "web-2",
    content: "`EConversationalAIAPIEvents`"
  }, {
    heading: "web-2",
    content: "`subscribeMessage`"
  }, {
    heading: "web-2",
    content: "`unsubscribeMessage`"
  }, {
    heading: "web-2",
    content: "`destroy`"
  }],
  headings: [{
    id: "技术原理",
    content: "技术原理"
  }, {
    id: "前提条件",
    content: "前提条件"
  }, {
    id: "实现步骤",
    content: "实现步骤"
  }, {
    id: "集成组件",
    content: "集成组件"
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
    id: "初始化组件",
    content: "初始化组件"
  }, {
    id: "注册回调",
    content: "注册回调"
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
    id: "android-1",
    content: "Android"
  }, {
    id: "ios-1",
    content: "iOS"
  }, {
    id: "web-1",
    content: "Web"
  }, {
    id: "api-参考",
    content: "API 参考"
  }, {
    id: "android-2",
    content: "Android"
  }, {
    id: "ios-2",
    content: "iOS"
  }, {
    id: "web-2",
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
  depth: 2,
  url: "#实现步骤",
  title: _jsx(_Fragment, {
    children: "实现步骤"
  })
}, {
  depth: 3,
  url: "#集成组件",
  title: _jsx(_Fragment, {
    children: "集成组件"
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
  depth: 3,
  url: "#初始化组件",
  title: _jsx(_Fragment, {
    children: "初始化组件"
  })
}, {
  depth: 3,
  url: "#注册回调",
  title: _jsx(_Fragment, {
    children: "注册回调"
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
  url: "#api-参考",
  title: _jsx(_Fragment, {
    children: "API 参考"
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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
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
      children: "与对话式智能体进行实时互动时，你可能需要监听智能体相关事件来实现更丰富的功能。本文介绍如何在你的 App 中监听智能体相关事件。"
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
`, _jsx(_components.p, {
      children: "组件提供一系列回调，支持监听不同的智能体相关事件和信息："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "onAgentStateChanged"
        }), "：通过接收 RTM ", _jsx(_components.code, {
          children: "presence"
        }), " 事件，监听智能体状态变化（静默/聆听/思考/说话）。可用于更新智能体 UI 或追踪对话流程。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "onAgentInterrupted"
        }), "：通过接收 RTM ", _jsx(_components.code, {
          children: "message"
        }), " 事件，监听智能体打断事件。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "onAgentMetrics"
        }), "：通过接收 RTM ", _jsx(_components.code, {
          children: "message"
        }), " 事件，监听智能体性能指标，包括 LLM 推理延迟、TTS 合成延迟等。可用于监控系统性能。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "onAgentError"
        }), "：通过接收 RTM ", _jsx(_components.code, {
          children: "message"
        }), " 事件，监听智能体错误事件，例如智能体某模块（例如 LLM、TTS 等）发生错误。可用于错误监控、日志记录和实现优雅降级策略。"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), `
`, _jsx(_components.p, {
      children: "开始前，请确保完成以下准备工作："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["已集成 RTC v4.5.1 及以上版本 SDK，且在 App 中实现了基本的实时音视频功能、获取了相关设备的使用权限。请参考", _jsx(_components.a, {
          href: "https://doc.shengwang.cn/doc/rtc/android/get-started/quick-start",
          children: "实现音视频互动"
        }), "。"]
      }), `
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
`, _jsx(_components.h2, {
      id: "实现步骤",
      children: "实现步骤"
    }), `
`, _jsx(_components.h3, {
      id: "集成组件",
      children: "集成组件"
    }), `
`, _jsx(_components.h4, {
      id: "android",
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
      id: "ios",
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
      id: "web",
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
      children: "为 RTC 和 RTM 实例创建配置对象，之后创建组件实例："
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "val config "
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "val api "
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
                  children: "// 为 RTC 和 RTM 实例创建配置对象"
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
`, _jsx(_components.h3, {
      id: "注册回调",
      children: "注册回调"
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
          children: ["调用 ", _jsx(_components.code, {
            children: "addHandler"
          }), " 方法，注册并实现智能体相关事件回调："]
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// 注册回调"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "object"
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
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // 监听智能体状态变化"
                })
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
                  children: "        when"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (event.state) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            AgentState.SILENT "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "->"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "                updateAgentStatus"
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
                  children: '"等待中..."'
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
                  children: "            }"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            AgentState.LISTENING "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "->"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "                updateAgentStatus"
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
                  children: '"正在听..."'
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
                  children: "            }"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            AgentState.THINKING "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "->"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "                updateAgentStatus"
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
                  children: '"思考中..."'
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
                  children: "            }"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            AgentState.SPEAKING "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "->"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "                updateAgentStatus"
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
                  children: '"说话中..."'
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
                  children: "            }"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            AgentState.UNKNOWN "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "->"
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
                  children: "                Log."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "w"
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
                  children: '"AgentState"'
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
                  children: '"Unknown agent state: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "$event"
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
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            }"
                })
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // 监听智能体打断事件"
                })
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
                  children: "        // 智能体被打断，可以更新 UI 或记录日志"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Log."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "d"
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
                  children: '"AgentInterrupt"'
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
                  children: '"Agent '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "$agentUserId"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' interrupted at turn ${event.turnId}"'
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: '        // 可以在这里更新 UI，比如显示"对话已中断"'
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "        showInterruptNotification"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // 监听智能体性能指标，用于监控和优化"
                })
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
                  children: "        when"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (metric.type) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            ModuleType.LLM "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "->"
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
                  children: "                Log."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "d"
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
                  children: '"Metrics"'
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
                  children: '"LLM latency: ${metric.'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "value"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '}ms"'
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "                // 可以记录 LLM 响应时间用于性能分析"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            }"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            ModuleType.TTS "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "->"
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
                  children: "                Log."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "d"
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
                  children: '"Metrics"'
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
                  children: '"TTS latency: ${metric.'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "value"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '}ms"'
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "                // 可以记录 TTS 合成时间"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            }"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            else"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ->"
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
                  children: "                Log."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "d"
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
                  children: '"Metrics"'
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
                  children: '"${metric.type}: ${metric.name} = ${metric.'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "value"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '}"'
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
                  children: "            }"
                })
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // 监听智能体错误事件"
                })
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
                  children: ") {"
                })]
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
                  children: "        Log."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "e"
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
                  children: '"AgentError"'
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
                  children: '"Error in ${error.type}: ${error.message} (code: ${error.code})"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "        when"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (error.type) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            ModuleType.LLM "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "->"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "                // LLM 错误，可能需要重试或降级处理"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "                showErrorMessage"
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
                  children: '"AI处理出错，请稍后重试"'
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
                  children: "            }"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            ModuleType.TTS "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "->"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "                // TTS 错误，可能需要切换到文本模式"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "                showErrorMessage"
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
                  children: '"语音合成出错"'
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
                  children: "            }"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            else"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ->"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "                // 其他错误类型"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "                showErrorMessage"
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
                  children: '"系统错误: ${error.message}"'
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
                  children: "            }"
                })
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
                className: "line"
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
                  children: "        // 处理调试日志"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (BuildConfig.DEBUG) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            Log."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "d"
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
                  children: '"ConvoAI"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", log)"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "        // 可以将日志发送到远程服务器进行问题诊断"
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
                  children: "})"
                })
              })]
            })
          })
        })]
      }), _jsxs(CodeBlockTab, {
        value: "ios",
        children: [_jsxs(_components.p, {
          children: ["调用 ", _jsx(_components.code, {
            children: "addHandler"
          }), " 方法，注册并实现智能体相关事件回调："]
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// 让你的类遵循 ConversationalAIAPIEventHandler 协议"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "class"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " ConversationViewController"
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
                  children: "UIViewController"
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
                  children: "ConversationalAIAPIEventHandler "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
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
                  children: "    // 实现协议方法"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    func"
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
                  children: "event"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": StateChangeEvent) {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "        // 更新 UI 显示智能体当前状态"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        DispatchQueue.main."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "async"
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
                  children: "            self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "updateAgentStatus"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(event.state)"
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    func"
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
                  children: "event"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": InterruptEvent) {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "        // 智能体被中断，可以更新 UI 或记录日志"
                })
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
                  children: '"Agent '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\\(agentUserId)"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " interrupted at turn "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\\(event."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "turnId"
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
                  children: "        DispatchQueue.main."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "async"
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
                  children: "            self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "showInterruptNotification"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    func"
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
                  children: "metrics"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": Metric) {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "        // 监听智能体性能指标，用于监控和优化"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        switch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " metrics.type {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .llm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "            print"
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
                  children: '"LLM latency: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\\(metrics."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "value"
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
                  children: 'ms"'
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "            // 可以记录LLM响应时间用于性能分析"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .tts"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "            print"
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
                  children: '"TTS latency: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\\(metrics."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "value"
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
                  children: 'ms"'
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "            // 可以记录TTS合成时间"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .unknown"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "            print"
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
                  children: '"Unknown metric: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\\(metrics."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "name"
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
                  children: " = "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\\(metrics."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "value"
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    func"
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
                  children: "error"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ModuleError) {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "        // 监听智能体错误事件"
                })
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
                  children: '"Error in '
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
                  children: "type"
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
                  children: ": "
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
                  children: " (code: "
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
                  children: "code"
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
                  children: ')"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
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
                  children: "        DispatchQueue.main."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "async"
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
                  children: "            switch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " error.type {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .llm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "                // LLM错误，可能需要重试或降级处理"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "                self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "showErrorMessage"
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
                  children: '"AI处理出错，请稍后重试"'
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
                  children: "            case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .tts"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "                // TTS错误，可能需要切换到文本模式"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "                self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "showErrorMessage"
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
                  children: '"语音合成出错"'
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
                  children: "            case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .mllm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "                // MLLM错误"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "                self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "showErrorMessage"
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
                  children: '"多模态AI处理出错"'
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
                  children: "            case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .unknown"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "                // 其他错误类型"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "                self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "showErrorMessage"
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
                  children: '"系统错误: '
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
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            }"
                })
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
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // 辅助方法，用于更新 UI 显示智能体当前状态"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    private"
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
                  children: " updateAgentStatus"
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
                  children: "_"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " state: AgentState) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (text, color)"
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
                  children: " ("
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
                  children: ", UIColor) "
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
                  children: "            switch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " state {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .idle"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "                return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"空闲"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", .gray)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .silent"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "                return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"等待中..."'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", .gray)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .listening"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "                return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"正在听..."'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", .blue)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .thinking"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "                return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"思考中..."'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", .orange)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .speaking"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "                return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"说话中..."'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", .green)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .unknown"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "                return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"未知状态"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", .red)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "            }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        }()"
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
                  children: "        statusLabel."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "text"
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
                  children: " text"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        statusLabel.textColor "
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
                  children: " color"
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    private"
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
                  children: " showInterruptNotification"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        statusLabel."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "text"
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
                  children: ' "对话已中断"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        statusLabel.textColor "
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
                  children: " .red"
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    private"
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
                  children: " showErrorMessage"
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
                  children: "_"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " message: "
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
                  children: "        let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " alert "
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
                  children: " UIAlertController"
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
                  children: "title"
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
                  children: '"错误"'
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
                  children: "message"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": message, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "preferredStyle"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": .alert)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        alert."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "addAction"
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
                  children: "UIAlertAction"
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
                  children: "title"
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
                  children: '"确定"'
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
                  children: "style"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": .default))"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "        present"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(alert, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "animated"
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
                  children: "// 注册事件回调"
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
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// 监听智能体状态变化"
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
                  children: "AGENT_STATE_CHANGED"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", onAgentStateChanged)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// 监听智能体性能指标"
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
                  children: "AGENT_METRICS"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", onAgentMetricsChanged)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// 监听智能体错误事件"
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
                  children: "AGENT_ERROR"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", onAgentError)"
                })]
              })]
            })
          })
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "订阅频道消息",
      children: "订阅频道消息"
    }), `
`, _jsxs(_components.p, {
      children: ["智能体的相关事件通过 RTM 频道消息传递，你需要在开始智能体会话前调用 ", _jsx(_components.code, {
        children: "subscribeMessage"
      }), " 订阅频道消息，以接收智能体相关事件。"]
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
      children: "每次智能体会话结束后，你需要取消订阅频道消息，以释放回调事件相关资源。"
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
      children: "声网提供了开源的示例项目供你参考，你可以前往下载或查看其中的源代码。"
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
      id: "android-1",
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
      id: "ios-1",
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
      id: "web-1",
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
      id: "android-2",
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
              href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#onagentstatechanged",
              children: _jsx(_components.code, {
                children: "onAgentStateChanged"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#onagentinterrupted",
              children: _jsx(_components.code, {
                children: "onAgentInterrupted"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#onagentmetrics",
              children: _jsx(_components.code, {
                children: "onAgentMetrics"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#onagenterror",
              children: _jsx(_components.code, {
                children: "onAgentError"
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
      id: "ios-2",
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
              href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#onagentstatechanged",
              children: _jsx(_components.code, {
                children: "onAgentStateChanged"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#onagentinterrupted",
              children: _jsx(_components.code, {
                children: "onAgentInterrupted"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#onagentmetrics",
              children: _jsx(_components.code, {
                children: "onAgentMetrics"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#onagenterror",
              children: _jsx(_components.code, {
                children: "onAgentError"
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
      id: "web-2",
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
