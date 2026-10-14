import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "优化端到端对话延迟",
  description: "在和智能体对话场景中，延迟是影响用户体验的关键因素。本文帮助你理解和优化与对话式智能体的端到端对话延迟，从而提升用户体验。"
};
export let _markdown = `

在和智能体对话场景中，延迟是影响用户体验的关键因素。本文帮助你理解和优化与对话式智能体的端到端对话延迟，从而提升用户体验。

## 理解延迟构成 [#理解延迟构成]

使用 ASR、LLM、TTS 三段式（Cascaded）架构时，端到端延迟由以下部分组成：

\`端到端延迟 = RTC 延迟 + 算法前处理延迟 + ASR 延迟 + LLM 延迟 + TTS 延迟 (+ 数字人延迟)\`

### 各模块延迟说明 [#各模块延迟说明]

根据实际测试数据，各模块的典型延迟范围如下：

| 模块        | 延迟指标                    | 说明                                                                    | 典型延迟范围      |
| --------- | ----------------------- | --------------------------------------------------------------------- | ----------- |
| **RTC**   | 音视频延迟                   | 包括音频采集、编码、网络传输、解码、播放等环节                                               | 150-300 ms  |
| **算法前处理** | 前处理延迟                   | 包括 VAD（语音活动检测）、优雅打断（AIVAD）等算法处理时间                                     | 560-940 ms  |
| **ASR**   | \`asr_ttlw\`              | Time To Last Word，从用户说话结束到 ASR 输出最后一个词的延迟                             | 400-700 ms  |
| **LLM**   | \`llm_ttfb\` / \`llm_ttfs\` | TTFB: Time To First Byte，首字节延迟<br />TTFS: Time To First Sentence，首句延迟 | 250-1000 ms |
| **TTS**   | \`tts_ttfb\`              | Time To First Byte，从 TTS 请求开始到收到第一个字节的响应延迟                            | 100-350 ms  |
| **数字人**   | 渲染延迟                    | 数字人模块收到 TTS 音频第一帧到数字人生成并对齐音视频第一帧的延迟（如启用）                              | 50-200 ms   |

### 真实延迟示例 [#真实延迟示例]

以下是一次实际对话中三个对话轮次的延迟数据，来自声网消息通知服务的 [111 agent metrics](../webhook/ncs-events.md#111-agent-metrics) 事件：

\`\`\`json
{
  "metrics": [
    {
        "turn_id": 1,
        "tts_ttfb": 61
    },
    {
        "turn_id": 2,
        "asr_ttlw": 141,
        "llm_ttfb": 270,
        "llm_ttfs": 482,
        "tts_ttfb": 90,
    },
    {
        "turn_id": 3,
        "asr_ttlw": 103,
        "llm_ttfb": 306,
        "llm_ttfs": 948,
        "tts_ttfb": 106,
    }
  ]
}
\`\`\`

## 查看延迟指标 [#查看延迟指标]

对话式 AI 引擎提供了两种方式查看每个对话轮次的延迟指标：

### 方式一：通过客户端组件监听 [#方式一通过客户端组件监听]

如果你使用客户端组件（Android/iOS/Web），可以通过注册 \`onAgentMetrics\` 回调来实时监听智能体性能指标。

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
    api.addHandler(object : IConversationalAIAPIEventHandler {
        override fun onAgentMetrics(agentUserId: String, metric: Metric) {
            when (metric.type) {
                ModuleType.ASR -> {
                    Log.d("Metrics", "ASR TTLW: \${metric.value}ms")
                }
                ModuleType.LLM -> {
                    // metric.name 可能是 "ttfb" 或 "ttfs"
                    Log.d("Metrics", "LLM \${metric.name}: \${metric.value}ms")
                }
                ModuleType.TTS -> {
                    Log.d("Metrics", "TTS TTFB: \${metric.value}ms")
                }
                ModuleType.TOTAL -> {
                    Log.d("Metrics", "Total Delay: \${metric.value}ms")
                }
                else -> {
                    Log.d("Metrics", "\${metric.type}: \${metric.name} = \${metric.value}ms")
                }
            }
        }
    })
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="ios">
    \`\`\`swift
    func onAgentMetrics(agentUserId: String, metrics: Metric) {
        switch metrics.type {
        case .asr:
            print("ASR TTLW: \\(metrics.value)ms")
        case .llm:
            print("LLM \\(metrics.name): \\(metrics.value)ms")
        case .tts:
            print("TTS TTFB: \\(metrics.value)ms")
        case .total:
            print("Total Delay: \\(metrics.value)ms")
        case .unknown:
            print("Unknown metric: \\(metrics.name) = \\(metrics.value)ms")
        }
    }
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="web">
    \`\`\`typescript
    conversationalAIAPI.on(
      EConversationalAIAPIEvents.AGENT_METRICS,
      (agentUserId: string, metrics: Metric) => {
        console.log(\`[\${metrics.type}] \${metrics.name}: \${metrics.value}ms\`);

        if (metrics.type === 'TOTAL') {
          console.log(\`Total delay for turn: \${metrics.value}ms\`);
        }
      }
    );
    \`\`\`
  </CodeBlockTab>
</CodeBlockTabs>

详细的集成步骤和 API 参考请见[监听智能体事件](../user-guides/listen-agent-events.md)。

### 方式二：通过消息通知服务（NCS） [#方式二通过消息通知服务ncs]

如果你开通了[声网消息通知服务](../webhook/enable-ncs.md)，可以通过接收 \`eventType\` 为 \`111\` 的 \`agent metrics\` 事件来获取智能体性能指标。

#### 事件回调示例 [#事件回调示例]

\`\`\`json
{
  "noticeId": "2000001428:4330:107",
  "productId": 17,
  "eventType": 111,
  "notifyMs": 1611566412672,
  "payload": {
    "agent_id": "A42AC47Hxxxxxxxx4PK27ND25E",
    "start_ts": 1000,
    "stop_ts": 1672531200,
    "channel": "test-channel",
    "metrics": [
      {
          "turn_id": 1,
          "tts_ttfb": 61
      },
      {
        "turn_id": 2,
        "asr_ttlw": 141,
        "llm_ttfb": 270,
        "llm_ttfs": 482,
        "tts_ttfb": 90,
      }
    ]
  }
}
\`\`\`

详细的事件字段说明请见[事件类型 - 111 agent metrics](../webhook/ncs-events.md#111-agent-metrics)。

## 优化三段式架构延迟 [#优化三段式架构延迟]

### 1. 优化 LLM/ASR/TTS 模块 [#1-优化-llmasrtts-模块]

LLM 通常是延迟贡献最高的模块。优化 LLM 可以显著降低整体延迟。

#### 选择低延迟的供应商 [#选择低延迟的供应商]

不同的 LLM/ASR/TTS 供应商和模型在响应速度上存在显著差异。你可以参考[对话式 AI 引擎适配各主流模型的实时性能数据](https://www.shengwang.cn/duihua/benchmark/overview)来比较不同 ASR/LLM/TTS 供应商的性能指标。

#### 优化参数配置 [#优化参数配置]

在创建智能体时，可通过阅读 ASR/LLM/TTS 供应商文档，了解供应商提供的参数，结合实际场景进行参数调优。以下为一些通用的优化思路：

* LLM
  * **选择小型模型**: 如 \`gpt-4o-mini\`、\`claude-3-haiku\` 等，通常比大型模型响应更快。
  * **限制 max\\_tokens**: 减少生成的最大 Token 数可以降低 TTFS（首句延迟）。
* ASR
  * **使用供应商推荐的采样率**: 使用供应商推荐的采样率（如 16kHz），避免不必要的重采样。
  * **限制语言模型**: 使用 \`phrases\` 或 \`context\` 参数提供领域特定词汇，提高识别速度。
  * **禁用非必要功能**：部分供应商提供输出标点符号、语气等高级参数，可根据实际场景禁用以提高响应速度。
* TTS
  * **选择更快的模式**: 部分 TTS 提供 \`turbo\` 或 \`low-latency\` 等模式，通常比默认模式响应更快。
  * **选择更快的音色**: 部分 TTS 提供不同复杂度的输出音色可选，选择复杂度较低的音色可以减少生成时间。
  * **禁用非必要功能**：部分供应商提供语气、情感高级参数，可根据实际场景禁用以提高响应速度。

以下为优化 LLM 参数的示例：

\`\`\`json
{
  "properties": {
    "llm": {
      "url": "https://api.openai.com/v1/chat/completions",
      "api_key": "your_api_key",
      "params": {
        "model": "gpt-4o-mini",  // 选择响应更快的模型
        "temperature": 0.7,
        "max_tokens": 150,  // 限制生成长度以减少延迟
        "stream": true  // 启用流式响应
      }
    }
  }
}
\`\`\`

### 2. 优化 RTC 模块延迟 [#2-优化-rtc-模块延迟]

RTC 延迟包括音频采集、编码、网络传输、解码、播放等环节。优化 RTC 延迟需要在客户端进行音频设置。

#### 使用 AI 对话场景 [#使用-ai-对话场景]

声网 RTC SDK 4.5.1 及以上版本支持 AI 对话场景（\`AUDIO_SCENARIO_AI_CLIENT\`），该场景针对 AI 对话进行了专门优化，包括：

* 优化的音频 3A 算法（回声消除、降噪、增益控制）
* 更低的音频采集和播放延迟
* 针对 AI 语音特征的音频处理

<CodeBlockTabs defaultValue="android">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="android">
      Android
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="ios">
      iOS
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="android">
    \`\`\`kotlin
    // 方式一：使用客户端组件 API（推荐）
    val config = ConversationalAIAPIConfig(
        rtcEngine = rtcEngineInstance,
        rtmClient = rtmClientInstance,
        enableLog = true
    )
    val api = ConversationalAIAPIImpl(config)

    // 加载最佳音频设置
    api.loadAudioSettings()
    \`\`\`

    \`\`\`kotlin
    // 方式二：直接设置 RTC SDK
    val config = RtcEngineConfig()
    config.mAudioScenario = Constants.AUDIO_SCENARIO_AI_CLIENT
    rtcEngine = RtcEngine.create(config)
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="ios">
    \`\`\`swift
    // 方式一：使用客户端组件 API（推荐）
    let config = ConversationalAIAPIConfig(
        rtcEngine: rtcEngine,
        rtmEngine: rtmEngine,
        enableLog: true
    )
    convoAIAPI = ConversationalAIAPIImpl(config: config)

    // 加载最佳音频设置
    convoAIAPI.loadAudioSettings()
    \`\`\`

    \`\`\`swift
    // 方式二：直接设置 RTC SDK
    let config = AgoraRtcEngineConfig()
    config.audioScenario = .aiClient
    rtcEngine = AgoraRtcEngineKit.sharedEngine(with: config, delegate: delegate)
    \`\`\`
  </CodeBlockTab>
</CodeBlockTabs>

详细的优化音频设置请见[优化音频设置](./audio-settings.md)。

## 延迟优化检查清单 [#延迟优化检查清单]

使用以下检查清单来系统性地优化你的对话式智能体延迟：

### 服务端优化 [#服务端优化]

* [ ] **选择低延迟的 LLM 模型**: 参考[对话式 AI 引擎适配各主流模型的实时性能数据](https://www.shengwang.cn/duihua/benchmark/overview)选择延迟表现优秀的模型
* [ ] **启用流式响应**: 确保 \`stream: true\`
* [ ] **选择低延迟的 ASR/TTS 供应商**: 使用 \`turbo\` 或 \`low-latency\` 等模式
* [ ] **优化地理部署**: 将 ASR、LLM、TTS 部署在同一区域
* [ ] **配置区域访问限制**: 使用 \`geofence\` 参数锁定最佳区域

### 客户端优化 [#客户端优化]

* [ ] **使用 AI 对话场景**: 设置 \`AUDIO_SCENARIO_AI_CLIENT\`（RTC SDK 4.5.1+）
* [ ] **加载最佳音频设置**: 调用客户端组件的 \`loadAudioSettings()\` 方法
* [ ] **集成必需的音频插件**: 确保集成 AI 降噪和 AI 回声消除插件
* [ ] **优化网络条件**: 确保用户网络连接稳定，考虑使用 SD-RTN™ 优化网络传输

### 监控和分析 [#监控和分析]

* [ ] **实时监听延迟指标**: 通过客户端组件或 NCS 获取每轮对话的延迟数据
* [ ] **识别延迟瓶颈**: 分析哪个模块的延迟贡献最大
* [ ] **持续优化**: 根据实际数据调整配置，进行 A/B 测试

## 延迟与质量的权衡 [#延迟与质量的权衡]

在优化延迟时，需要在响应速度和对话质量之间找到平衡：

| 优化策略           | 延迟影响   | 质量影响       | 建议场景            |
| -------------- | ------ | ---------- | --------------- |
| 使用小型 LLM 模型    | ✅ 显著降低 | ⚠️ 可能降低    | 对延迟敏感、对话相对简单的场景 |
| 限制 max\\_tokens | ✅ 适度降低 | ⚠️ 可能影响完整性 | 需要简短回复的场景       |
| 区域访问限制         | ✅ 适度降低 | ➖ 无影响      | 用户集中在特定区域       |
| 优化 RTC 设置      | ✅ 适度降低 | ➖ 无影响      | 所有场景            |

> 提示
> 建议先通过监听延迟指标识别瓶颈，然后针对性地优化贡献最大的模块，而不是盲目追求极致的低延迟。

## 参考资料 [#参考资料]

* [监听智能体事件](../user-guides/listen-agent-events.md)
* [优化音频设置](./audio-settings.md)
* [消息通知服务 - agent metrics 事件](../webhook/ncs-events.md#111-agent-metrics)
* [对话式 AI 引擎适配各主流模型的实时性能数据](https://www.shengwang.cn/duihua/benchmark/overview)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "在和智能体对话场景中，延迟是影响用户体验的关键因素。本文帮助你理解和优化与对话式智能体的端到端对话延迟，从而提升用户体验。"
  }, {
    heading: "理解延迟构成",
    content: "使用 ASR、LLM、TTS 三段式（Cascaded）架构时，端到端延迟由以下部分组成："
  }, {
    heading: "理解延迟构成",
    content: "`端到端延迟 = RTC 延迟 + 算法前处理延迟 + ASR 延迟 + LLM 延迟 + TTS 延迟 (+ 数字人延迟)`"
  }, {
    heading: "各模块延迟说明",
    content: "根据实际测试数据，各模块的典型延迟范围如下："
  }, {
    heading: "各模块延迟说明",
    content: "模块"
  }, {
    heading: "各模块延迟说明",
    content: "延迟指标"
  }, {
    heading: "各模块延迟说明",
    content: "说明"
  }, {
    heading: "各模块延迟说明",
    content: "典型延迟范围"
  }, {
    heading: "各模块延迟说明",
    content: "**RTC**"
  }, {
    heading: "各模块延迟说明",
    content: "音视频延迟"
  }, {
    heading: "各模块延迟说明",
    content: "包括音频采集、编码、网络传输、解码、播放等环节"
  }, {
    heading: "各模块延迟说明",
    content: "150-300 ms"
  }, {
    heading: "各模块延迟说明",
    content: "**算法前处理**"
  }, {
    heading: "各模块延迟说明",
    content: "前处理延迟"
  }, {
    heading: "各模块延迟说明",
    content: "包括 VAD（语音活动检测）、优雅打断（AIVAD）等算法处理时间"
  }, {
    heading: "各模块延迟说明",
    content: "560-940 ms"
  }, {
    heading: "各模块延迟说明",
    content: "**ASR**"
  }, {
    heading: "各模块延迟说明",
    content: "`asr_ttlw`"
  }, {
    heading: "各模块延迟说明",
    content: "Time To Last Word，从用户说话结束到 ASR 输出最后一个词的延迟"
  }, {
    heading: "各模块延迟说明",
    content: "400-700 ms"
  }, {
    heading: "各模块延迟说明",
    content: "**LLM**"
  }, {
    heading: "各模块延迟说明",
    content: "`llm_ttfb` / `llm_ttfs`"
  }, {
    heading: "各模块延迟说明",
    content: "TTFB: Time To First Byte，首字节延迟TTFS: Time To First Sentence，首句延迟"
  }, {
    heading: "各模块延迟说明",
    content: "250-1000 ms"
  }, {
    heading: "各模块延迟说明",
    content: "**TTS**"
  }, {
    heading: "各模块延迟说明",
    content: "`tts_ttfb`"
  }, {
    heading: "各模块延迟说明",
    content: "Time To First Byte，从 TTS 请求开始到收到第一个字节的响应延迟"
  }, {
    heading: "各模块延迟说明",
    content: "100-350 ms"
  }, {
    heading: "各模块延迟说明",
    content: "**数字人**"
  }, {
    heading: "各模块延迟说明",
    content: "渲染延迟"
  }, {
    heading: "各模块延迟说明",
    content: "数字人模块收到 TTS 音频第一帧到数字人生成并对齐音视频第一帧的延迟（如启用）"
  }, {
    heading: "各模块延迟说明",
    content: "50-200 ms"
  }, {
    heading: "真实延迟示例",
    content: "以下是一次实际对话中三个对话轮次的延迟数据，来自声网消息通知服务的 111 agent metrics 事件："
  }, {
    heading: "查看延迟指标",
    content: "对话式 AI 引擎提供了两种方式查看每个对话轮次的延迟指标："
  }, {
    heading: "方式一通过客户端组件监听",
    content: "如果你使用客户端组件（Android/iOS/Web），可以通过注册 `onAgentMetrics` 回调来实时监听智能体性能指标。"
  }, {
    heading: "方式一通过客户端组件监听",
    content: "详细的集成步骤和 API 参考请见监听智能体事件。"
  }, {
    heading: "方式二通过消息通知服务ncs",
    content: "如果你开通了声网消息通知服务，可以通过接收 `eventType` 为 `111` 的 `agent metrics` 事件来获取智能体性能指标。"
  }, {
    heading: "事件回调示例",
    content: "详细的事件字段说明请见事件类型 - 111 agent metrics。"
  }, {
    heading: "1-优化-llmasrtts-模块",
    content: "LLM 通常是延迟贡献最高的模块。优化 LLM 可以显著降低整体延迟。"
  }, {
    heading: "选择低延迟的供应商",
    content: "不同的 LLM/ASR/TTS 供应商和模型在响应速度上存在显著差异。你可以参考对话式 AI 引擎适配各主流模型的实时性能数据来比较不同 ASR/LLM/TTS 供应商的性能指标。"
  }, {
    heading: "优化参数配置",
    content: "在创建智能体时，可通过阅读 ASR/LLM/TTS 供应商文档，了解供应商提供的参数，结合实际场景进行参数调优。以下为一些通用的优化思路："
  }, {
    heading: "优化参数配置",
    content: "LLM"
  }, {
    heading: "优化参数配置",
    content: "**选择小型模型**: 如 `gpt-4o-mini`、`claude-3-haiku` 等，通常比大型模型响应更快。"
  }, {
    heading: "优化参数配置",
    content: "**限制 max\\_tokens**: 减少生成的最大 Token 数可以降低 TTFS（首句延迟）。"
  }, {
    heading: "优化参数配置",
    content: "ASR"
  }, {
    heading: "优化参数配置",
    content: "**使用供应商推荐的采样率**: 使用供应商推荐的采样率（如 16kHz），避免不必要的重采样。"
  }, {
    heading: "优化参数配置",
    content: "**限制语言模型**: 使用 `phrases` 或 `context` 参数提供领域特定词汇，提高识别速度。"
  }, {
    heading: "优化参数配置",
    content: "**禁用非必要功能**：部分供应商提供输出标点符号、语气等高级参数，可根据实际场景禁用以提高响应速度。"
  }, {
    heading: "优化参数配置",
    content: "TTS"
  }, {
    heading: "优化参数配置",
    content: "**选择更快的模式**: 部分 TTS 提供 `turbo` 或 `low-latency` 等模式，通常比默认模式响应更快。"
  }, {
    heading: "优化参数配置",
    content: "**选择更快的音色**: 部分 TTS 提供不同复杂度的输出音色可选，选择复杂度较低的音色可以减少生成时间。"
  }, {
    heading: "优化参数配置",
    content: "**禁用非必要功能**：部分供应商提供语气、情感高级参数，可根据实际场景禁用以提高响应速度。"
  }, {
    heading: "优化参数配置",
    content: "以下为优化 LLM 参数的示例："
  }, {
    heading: "2-优化-rtc-模块延迟",
    content: "RTC 延迟包括音频采集、编码、网络传输、解码、播放等环节。优化 RTC 延迟需要在客户端进行音频设置。"
  }, {
    heading: "使用-ai-对话场景",
    content: "声网 RTC SDK 4.5.1 及以上版本支持 AI 对话场景（`AUDIO_SCENARIO_AI_CLIENT`），该场景针对 AI 对话进行了专门优化，包括："
  }, {
    heading: "使用-ai-对话场景",
    content: "优化的音频 3A 算法（回声消除、降噪、增益控制）"
  }, {
    heading: "使用-ai-对话场景",
    content: "更低的音频采集和播放延迟"
  }, {
    heading: "使用-ai-对话场景",
    content: "针对 AI 语音特征的音频处理"
  }, {
    heading: "使用-ai-对话场景",
    content: "详细的优化音频设置请见优化音频设置。"
  }, {
    heading: "延迟优化检查清单",
    content: "使用以下检查清单来系统性地优化你的对话式智能体延迟："
  }, {
    heading: "服务端优化",
    content: "**选择低延迟的 LLM 模型**: 参考对话式 AI 引擎适配各主流模型的实时性能数据选择延迟表现优秀的模型"
  }, {
    heading: "服务端优化",
    content: "**启用流式响应**: 确保 `stream: true`"
  }, {
    heading: "服务端优化",
    content: "**选择低延迟的 ASR/TTS 供应商**: 使用 `turbo` 或 `low-latency` 等模式"
  }, {
    heading: "服务端优化",
    content: "**优化地理部署**: 将 ASR、LLM、TTS 部署在同一区域"
  }, {
    heading: "服务端优化",
    content: "**配置区域访问限制**: 使用 `geofence` 参数锁定最佳区域"
  }, {
    heading: "客户端优化",
    content: "**使用 AI 对话场景**: 设置 `AUDIO_SCENARIO_AI_CLIENT`（RTC SDK 4.5.1+）"
  }, {
    heading: "客户端优化",
    content: "**加载最佳音频设置**: 调用客户端组件的 `loadAudioSettings()` 方法"
  }, {
    heading: "客户端优化",
    content: "**集成必需的音频插件**: 确保集成 AI 降噪和 AI 回声消除插件"
  }, {
    heading: "客户端优化",
    content: "**优化网络条件**: 确保用户网络连接稳定，考虑使用 SD-RTN™ 优化网络传输"
  }, {
    heading: "监控和分析",
    content: "**实时监听延迟指标**: 通过客户端组件或 NCS 获取每轮对话的延迟数据"
  }, {
    heading: "监控和分析",
    content: "**识别延迟瓶颈**: 分析哪个模块的延迟贡献最大"
  }, {
    heading: "监控和分析",
    content: "**持续优化**: 根据实际数据调整配置，进行 A/B 测试"
  }, {
    heading: "延迟与质量的权衡",
    content: "在优化延迟时，需要在响应速度和对话质量之间找到平衡："
  }, {
    heading: "延迟与质量的权衡",
    content: "优化策略"
  }, {
    heading: "延迟与质量的权衡",
    content: "延迟影响"
  }, {
    heading: "延迟与质量的权衡",
    content: "质量影响"
  }, {
    heading: "延迟与质量的权衡",
    content: "建议场景"
  }, {
    heading: "延迟与质量的权衡",
    content: "使用小型 LLM 模型"
  }, {
    heading: "延迟与质量的权衡",
    content: "✅ 显著降低"
  }, {
    heading: "延迟与质量的权衡",
    content: "⚠️ 可能降低"
  }, {
    heading: "延迟与质量的权衡",
    content: "对延迟敏感、对话相对简单的场景"
  }, {
    heading: "延迟与质量的权衡",
    content: "限制 max\\_tokens"
  }, {
    heading: "延迟与质量的权衡",
    content: "✅ 适度降低"
  }, {
    heading: "延迟与质量的权衡",
    content: "⚠️ 可能影响完整性"
  }, {
    heading: "延迟与质量的权衡",
    content: "需要简短回复的场景"
  }, {
    heading: "延迟与质量的权衡",
    content: "区域访问限制"
  }, {
    heading: "延迟与质量的权衡",
    content: "✅ 适度降低"
  }, {
    heading: "延迟与质量的权衡",
    content: "➖ 无影响"
  }, {
    heading: "延迟与质量的权衡",
    content: "用户集中在特定区域"
  }, {
    heading: "延迟与质量的权衡",
    content: "优化 RTC 设置"
  }, {
    heading: "延迟与质量的权衡",
    content: "✅ 适度降低"
  }, {
    heading: "延迟与质量的权衡",
    content: "➖ 无影响"
  }, {
    heading: "延迟与质量的权衡",
    content: "所有场景"
  }, {
    heading: "延迟与质量的权衡",
    content: `> 提示
> 建议先通过监听延迟指标识别瓶颈，然后针对性地优化贡献最大的模块，而不是盲目追求极致的低延迟。`
  }, {
    heading: "参考资料",
    content: "监听智能体事件"
  }, {
    heading: "参考资料",
    content: "优化音频设置"
  }, {
    heading: "参考资料",
    content: "消息通知服务 - agent metrics 事件"
  }, {
    heading: "参考资料",
    content: "对话式 AI 引擎适配各主流模型的实时性能数据"
  }],
  headings: [{
    id: "理解延迟构成",
    content: "理解延迟构成"
  }, {
    id: "各模块延迟说明",
    content: "各模块延迟说明"
  }, {
    id: "真实延迟示例",
    content: "真实延迟示例"
  }, {
    id: "查看延迟指标",
    content: "查看延迟指标"
  }, {
    id: "方式一通过客户端组件监听",
    content: "方式一：通过客户端组件监听"
  }, {
    id: "方式二通过消息通知服务ncs",
    content: "方式二：通过消息通知服务（NCS）"
  }, {
    id: "事件回调示例",
    content: "事件回调示例"
  }, {
    id: "优化三段式架构延迟",
    content: "优化三段式架构延迟"
  }, {
    id: "1-优化-llmasrtts-模块",
    content: "1\\. 优化 LLM/ASR/TTS 模块"
  }, {
    id: "选择低延迟的供应商",
    content: "选择低延迟的供应商"
  }, {
    id: "优化参数配置",
    content: "优化参数配置"
  }, {
    id: "2-优化-rtc-模块延迟",
    content: "2\\. 优化 RTC 模块延迟"
  }, {
    id: "使用-ai-对话场景",
    content: "使用 AI 对话场景"
  }, {
    id: "延迟优化检查清单",
    content: "延迟优化检查清单"
  }, {
    id: "服务端优化",
    content: "服务端优化"
  }, {
    id: "客户端优化",
    content: "客户端优化"
  }, {
    id: "监控和分析",
    content: "监控和分析"
  }, {
    id: "延迟与质量的权衡",
    content: "延迟与质量的权衡"
  }, {
    id: "参考资料",
    content: "参考资料"
  }]
};
export let toc = [{
  depth: 2,
  url: "#理解延迟构成",
  title: _jsx(_Fragment, {
    children: "理解延迟构成"
  })
}, {
  depth: 3,
  url: "#各模块延迟说明",
  title: _jsx(_Fragment, {
    children: "各模块延迟说明"
  })
}, {
  depth: 3,
  url: "#真实延迟示例",
  title: _jsx(_Fragment, {
    children: "真实延迟示例"
  })
}, {
  depth: 2,
  url: "#查看延迟指标",
  title: _jsx(_Fragment, {
    children: "查看延迟指标"
  })
}, {
  depth: 3,
  url: "#方式一通过客户端组件监听",
  title: _jsx(_Fragment, {
    children: "方式一：通过客户端组件监听"
  })
}, {
  depth: 3,
  url: "#方式二通过消息通知服务ncs",
  title: _jsx(_Fragment, {
    children: "方式二：通过消息通知服务（NCS）"
  })
}, {
  depth: 4,
  url: "#事件回调示例",
  title: _jsx(_Fragment, {
    children: "事件回调示例"
  })
}, {
  depth: 2,
  url: "#优化三段式架构延迟",
  title: _jsx(_Fragment, {
    children: "优化三段式架构延迟"
  })
}, {
  depth: 3,
  url: "#1-优化-llmasrtts-模块",
  title: _jsx(_Fragment, {
    children: "1. 优化 LLM/ASR/TTS 模块"
  })
}, {
  depth: 4,
  url: "#选择低延迟的供应商",
  title: _jsx(_Fragment, {
    children: "选择低延迟的供应商"
  })
}, {
  depth: 4,
  url: "#优化参数配置",
  title: _jsx(_Fragment, {
    children: "优化参数配置"
  })
}, {
  depth: 3,
  url: "#2-优化-rtc-模块延迟",
  title: _jsx(_Fragment, {
    children: "2. 优化 RTC 模块延迟"
  })
}, {
  depth: 4,
  url: "#使用-ai-对话场景",
  title: _jsx(_Fragment, {
    children: "使用 AI 对话场景"
  })
}, {
  depth: 2,
  url: "#延迟优化检查清单",
  title: _jsx(_Fragment, {
    children: "延迟优化检查清单"
  })
}, {
  depth: 3,
  url: "#服务端优化",
  title: _jsx(_Fragment, {
    children: "服务端优化"
  })
}, {
  depth: 3,
  url: "#客户端优化",
  title: _jsx(_Fragment, {
    children: "客户端优化"
  })
}, {
  depth: 3,
  url: "#监控和分析",
  title: _jsx(_Fragment, {
    children: "监控和分析"
  })
}, {
  depth: 2,
  url: "#延迟与质量的权衡",
  title: _jsx(_Fragment, {
    children: "延迟与质量的权衡"
  })
}, {
  depth: 2,
  url: "#参考资料",
  title: _jsx(_Fragment, {
    children: "参考资料"
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
    input: "input",
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
      children: "在和智能体对话场景中，延迟是影响用户体验的关键因素。本文帮助你理解和优化与对话式智能体的端到端对话延迟，从而提升用户体验。"
    }), `
`, _jsx(_components.h2, {
      id: "理解延迟构成",
      children: "理解延迟构成"
    }), `
`, _jsx(_components.p, {
      children: "使用 ASR、LLM、TTS 三段式（Cascaded）架构时，端到端延迟由以下部分组成："
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "端到端延迟 = RTC 延迟 + 算法前处理延迟 + ASR 延迟 + LLM 延迟 + TTS 延迟 (+ 数字人延迟)"
      })
    }), `
`, _jsx(_components.h3, {
      id: "各模块延迟说明",
      children: "各模块延迟说明"
    }), `
`, _jsx(_components.p, {
      children: "根据实际测试数据，各模块的典型延迟范围如下："
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "模块"
          }), _jsx(_components.th, {
            children: "延迟指标"
          }), _jsx(_components.th, {
            children: "说明"
          }), _jsx(_components.th, {
            children: "典型延迟范围"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "RTC"
            })
          }), _jsx(_components.td, {
            children: "音视频延迟"
          }), _jsx(_components.td, {
            children: "包括音频采集、编码、网络传输、解码、播放等环节"
          }), _jsx(_components.td, {
            children: "150-300 ms"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "算法前处理"
            })
          }), _jsx(_components.td, {
            children: "前处理延迟"
          }), _jsx(_components.td, {
            children: "包括 VAD（语音活动检测）、优雅打断（AIVAD）等算法处理时间"
          }), _jsx(_components.td, {
            children: "560-940 ms"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "ASR"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "asr_ttlw"
            })
          }), _jsx(_components.td, {
            children: "Time To Last Word，从用户说话结束到 ASR 输出最后一个词的延迟"
          }), _jsx(_components.td, {
            children: "400-700 ms"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "LLM"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "llm_ttfb"
            }), " / ", _jsx(_components.code, {
              children: "llm_ttfs"
            })]
          }), _jsxs(_components.td, {
            children: ["TTFB: Time To First Byte，首字节延迟", _jsx("br", {}), "TTFS: Time To First Sentence，首句延迟"]
          }), _jsx(_components.td, {
            children: "250-1000 ms"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "TTS"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "tts_ttfb"
            })
          }), _jsx(_components.td, {
            children: "Time To First Byte，从 TTS 请求开始到收到第一个字节的响应延迟"
          }), _jsx(_components.td, {
            children: "100-350 ms"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "数字人"
            })
          }), _jsx(_components.td, {
            children: "渲染延迟"
          }), _jsx(_components.td, {
            children: "数字人模块收到 TTS 音频第一帧到数字人生成并对齐音视频第一帧的延迟（如启用）"
          }), _jsx(_components.td, {
            children: "50-200 ms"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "真实延迟示例",
      children: "真实延迟示例"
    }), `
`, _jsxs(_components.p, {
      children: ["以下是一次实际对话中三个对话轮次的延迟数据，来自声网消息通知服务的 ", _jsx(_components.a, {
        href: "../webhook/ncs-events.md#111-agent-metrics",
        children: "111 agent metrics"
      }), " 事件："]
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
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "metrics"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "turn_id"'
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "tts_ttfb"'
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
              children: "61"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "turn_id"'
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
              children: "2"
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
              children: '        "asr_ttlw"'
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
              children: "141"
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
              children: '        "llm_ttfb"'
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
              children: "270"
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
              children: '        "llm_ttfs"'
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
              children: "482"
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
              children: '        "tts_ttfb"'
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
              children: "90"
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
              children: "    },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "turn_id"'
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
              children: "3"
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
              children: '        "asr_ttlw"'
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
              children: "103"
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
              children: '        "llm_ttfb"'
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
              children: "306"
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
              children: '        "llm_ttfs"'
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
              children: "948"
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
              children: '        "tts_ttfb"'
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
              children: "106"
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
              children: "  ]"
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
`, _jsx(_components.h2, {
      id: "查看延迟指标",
      children: "查看延迟指标"
    }), `
`, _jsx(_components.p, {
      children: "对话式 AI 引擎提供了两种方式查看每个对话轮次的延迟指标："
    }), `
`, _jsx(_components.h3, {
      id: "方式一通过客户端组件监听",
      children: "方式一：通过客户端组件监听"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你使用客户端组件（Android/iOS/Web），可以通过注册 ", _jsx(_components.code, {
        children: "onAgentMetrics"
      }), " 回调来实时监听智能体性能指标。"]
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
                  children: "            ModuleType.ASR "
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
                  children: '"ASR TTLW: ${metric.'
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
                  children: '                // metric.name 可能是 "ttfb" 或 "ttfs"'
                })
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
                  children: '"LLM ${metric.name}: ${metric.'
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
                  children: '"TTS TTFB: ${metric.'
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
                  children: "            ModuleType.TOTAL "
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
                  children: '"Total Delay: ${metric.'
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "})"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "func"
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    switch"
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
                  children: "    case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .asr"
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
                  children: '"ASR TTLW: '
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    case"
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
                  children: '"LLM '
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
                  children: ": "
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    case"
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
                  children: '"TTS TTFB: '
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .total"
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
                  children: '"Total Delay: '
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    case"
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
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
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
                  children: "  EConversationalAIAPIEvents."
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
                  children: "  ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "agentUserId"
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
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "metrics"
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
                  children: " Metric"
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
                  children: "    console."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "log"
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
                  children: "`[${"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "metrics"
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
                  children: "type"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "}] ${"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "metrics"
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
                  children: "name"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "}: ${"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "metrics"
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
                  children: "value"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "}ms`"
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
                  children: "    if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (metrics.type "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "==="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'TOTAL'"
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
                  children: "      console."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "log"
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
                  children: "`Total delay for turn: ${"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "metrics"
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
                  children: "value"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "}ms`"
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
                  children: ");"
                })
              })]
            })
          })
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["详细的集成步骤和 API 参考请见", _jsx(_components.a, {
        href: "../user-guides/listen-agent-events.md",
        children: "监听智能体事件"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "方式二通过消息通知服务ncs",
      children: "方式二：通过消息通知服务（NCS）"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你开通了", _jsx(_components.a, {
        href: "../webhook/enable-ncs.md",
        children: "声网消息通知服务"
      }), "，可以通过接收 ", _jsx(_components.code, {
        children: "eventType"
      }), " 为 ", _jsx(_components.code, {
        children: "111"
      }), " 的 ", _jsx(_components.code, {
        children: "agent metrics"
      }), " 事件来获取智能体性能指标。"]
    }), `
`, _jsx(_components.h4, {
      id: "事件回调示例",
      children: "事件回调示例"
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
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "noticeId"'
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
              children: '"2000001428:4330:107"'
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
              children: '  "productId"'
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
              children: "17"
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
              children: '  "eventType"'
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
              children: "111"
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
              children: '  "notifyMs"'
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
              children: "1611566412672"
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
              children: '  "payload"'
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
              children: '    "agent_id"'
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
              children: '"A42AC47Hxxxxxxxx4PK27ND25E"'
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
              children: '    "start_ts"'
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
              children: "1000"
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
              children: '    "stop_ts"'
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
              children: "1672531200"
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
              children: '    "channel"'
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
              children: '"test-channel"'
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
              children: '    "metrics"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '          "turn_id"'
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '          "tts_ttfb"'
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
              children: "61"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "turn_id"'
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
              children: "2"
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
              children: '        "asr_ttlw"'
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
              children: "141"
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
              children: '        "llm_ttfb"'
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
              children: "270"
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
              children: '        "llm_ttfs"'
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
              children: "482"
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
              children: '        "tts_ttfb"'
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
              children: "90"
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
              children: "      }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    ]"
            })
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
`, _jsxs(_components.p, {
      children: ["详细的事件字段说明请见", _jsx(_components.a, {
        href: "../webhook/ncs-events.md#111-agent-metrics",
        children: "事件类型 - 111 agent metrics"
      }), "。"]
    }), `
`, _jsx(_components.h2, {
      id: "优化三段式架构延迟",
      children: "优化三段式架构延迟"
    }), `
`, _jsx(_components.h3, {
      id: "1-优化-llmasrtts-模块",
      children: "1. 优化 LLM/ASR/TTS 模块"
    }), `
`, _jsx(_components.p, {
      children: "LLM 通常是延迟贡献最高的模块。优化 LLM 可以显著降低整体延迟。"
    }), `
`, _jsx(_components.h4, {
      id: "选择低延迟的供应商",
      children: "选择低延迟的供应商"
    }), `
`, _jsxs(_components.p, {
      children: ["不同的 LLM/ASR/TTS 供应商和模型在响应速度上存在显著差异。你可以参考", _jsx(_components.a, {
        href: "https://www.shengwang.cn/duihua/benchmark/overview",
        children: "对话式 AI 引擎适配各主流模型的实时性能数据"
      }), "来比较不同 ASR/LLM/TTS 供应商的性能指标。"]
    }), `
`, _jsx(_components.h4, {
      id: "优化参数配置",
      children: "优化参数配置"
    }), `
`, _jsx(_components.p, {
      children: "在创建智能体时，可通过阅读 ASR/LLM/TTS 供应商文档，了解供应商提供的参数，结合实际场景进行参数调优。以下为一些通用的优化思路："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["LLM", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "选择小型模型"
            }), ": 如 ", _jsx(_components.code, {
              children: "gpt-4o-mini"
            }), "、", _jsx(_components.code, {
              children: "claude-3-haiku"
            }), " 等，通常比大型模型响应更快。"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "限制 max_tokens"
            }), ": 减少生成的最大 Token 数可以降低 TTFS（首句延迟）。"]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["ASR", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "使用供应商推荐的采样率"
            }), ": 使用供应商推荐的采样率（如 16kHz），避免不必要的重采样。"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "限制语言模型"
            }), ": 使用 ", _jsx(_components.code, {
              children: "phrases"
            }), " 或 ", _jsx(_components.code, {
              children: "context"
            }), " 参数提供领域特定词汇，提高识别速度。"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "禁用非必要功能"
            }), "：部分供应商提供输出标点符号、语气等高级参数，可根据实际场景禁用以提高响应速度。"]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["TTS", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "选择更快的模式"
            }), ": 部分 TTS 提供 ", _jsx(_components.code, {
              children: "turbo"
            }), " 或 ", _jsx(_components.code, {
              children: "low-latency"
            }), " 等模式，通常比默认模式响应更快。"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "选择更快的音色"
            }), ": 部分 TTS 提供不同复杂度的输出音色可选，选择复杂度较低的音色可以减少生成时间。"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "禁用非必要功能"
            }), "：部分供应商提供语气、情感高级参数，可根据实际场景禁用以提高响应速度。"]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "以下为优化 LLM 参数的示例："
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
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "properties"'
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
              children: '    "llm"'
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
              children: '      "url"'
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
              children: '"https://api.openai.com/v1/chat/completions"'
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
              children: '      "api_key"'
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
              children: '"your_api_key"'
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
              children: '      "params"'
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
              children: '        "model"'
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
              children: '"gpt-4o-mini"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ",  "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// 选择响应更快的模型"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "temperature"'
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
              children: "0.7"
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
              children: '        "max_tokens"'
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
              children: "150"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ",  "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// 限制生成长度以减少延迟"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "stream"'
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
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // 启用流式响应"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      }"
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
`, _jsx(_components.h3, {
      id: "2-优化-rtc-模块延迟",
      children: "2. 优化 RTC 模块延迟"
    }), `
`, _jsx(_components.p, {
      children: "RTC 延迟包括音频采集、编码、网络传输、解码、播放等环节。优化 RTC 延迟需要在客户端进行音频设置。"
    }), `
`, _jsx(_components.h4, {
      id: "使用-ai-对话场景",
      children: "使用 AI 对话场景"
    }), `
`, _jsxs(_components.p, {
      children: ["声网 RTC SDK 4.5.1 及以上版本支持 AI 对话场景（", _jsx(_components.code, {
        children: "AUDIO_SCENARIO_AI_CLIENT"
      }), "），该场景针对 AI 对话进行了专门优化，包括："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "优化的音频 3A 算法（回声消除、降噪、增益控制）"
      }), `
`, _jsx(_components.li, {
        children: "更低的音频采集和播放延迟"
      }), `
`, _jsx(_components.li, {
        children: "针对 AI 语音特征的音频处理"
      }), `
`]
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
        })]
      }), _jsxs(CodeBlockTab, {
        value: "android",
        children: [_jsx(_Fragment, {
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
                  children: "// 方式一：使用客户端组件 API（推荐）"
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
                  children: "// 加载最佳音频设置"
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
                  children: "loadAudioSettings"
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
                  children: "// 方式二：直接设置 RTC SDK"
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
                  children: " RtcEngineConfig"
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
                  children: "config.mAudioScenario "
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
                  children: " Constants.AUDIO_SCENARIO_AI_CLIENT"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "rtcEngine "
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
                  children: " RtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "create"
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
        })]
      }), _jsxs(CodeBlockTab, {
        value: "ios",
        children: [_jsx(_Fragment, {
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
                  children: "// 方式一：使用客户端组件 API（推荐）"
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
                  children: "// 加载最佳音频设置"
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
                  children: "loadAudioSettings"
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
                  children: "// 方式二：直接设置 RTC SDK"
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
                  children: " AgoraRtcEngineConfig"
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
                  children: "config.audioScenario "
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
                  children: " .aiClient"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "rtcEngine "
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
                  children: " AgoraRtcEngineKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "sharedEngine"
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
                  children: "with"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": config, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "delegate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": delegate)"
                })]
              })]
            })
          })
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["详细的优化音频设置请见", _jsx(_components.a, {
        href: "./audio-settings.md",
        children: "优化音频设置"
      }), "。"]
    }), `
`, _jsx(_components.h2, {
      id: "延迟优化检查清单",
      children: "延迟优化检查清单"
    }), `
`, _jsx(_components.p, {
      children: "使用以下检查清单来系统性地优化你的对话式智能体延迟："
    }), `
`, _jsx(_components.h3, {
      id: "服务端优化",
      children: "服务端优化"
    }), `
`, _jsxs(_components.ul, {
      className: "contains-task-list",
      children: [`
`, _jsxs(_components.li, {
        className: "task-list-item",
        children: [_jsx(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", _jsx(_components.strong, {
          children: "选择低延迟的 LLM 模型"
        }), ": 参考", _jsx(_components.a, {
          href: "https://www.shengwang.cn/duihua/benchmark/overview",
          children: "对话式 AI 引擎适配各主流模型的实时性能数据"
        }), "选择延迟表现优秀的模型"]
      }), `
`, _jsxs(_components.li, {
        className: "task-list-item",
        children: [_jsx(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", _jsx(_components.strong, {
          children: "启用流式响应"
        }), ": 确保 ", _jsx(_components.code, {
          children: "stream: true"
        })]
      }), `
`, _jsxs(_components.li, {
        className: "task-list-item",
        children: [_jsx(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", _jsx(_components.strong, {
          children: "选择低延迟的 ASR/TTS 供应商"
        }), ": 使用 ", _jsx(_components.code, {
          children: "turbo"
        }), " 或 ", _jsx(_components.code, {
          children: "low-latency"
        }), " 等模式"]
      }), `
`, _jsxs(_components.li, {
        className: "task-list-item",
        children: [_jsx(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", _jsx(_components.strong, {
          children: "优化地理部署"
        }), ": 将 ASR、LLM、TTS 部署在同一区域"]
      }), `
`, _jsxs(_components.li, {
        className: "task-list-item",
        children: [_jsx(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", _jsx(_components.strong, {
          children: "配置区域访问限制"
        }), ": 使用 ", _jsx(_components.code, {
          children: "geofence"
        }), " 参数锁定最佳区域"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "客户端优化",
      children: "客户端优化"
    }), `
`, _jsxs(_components.ul, {
      className: "contains-task-list",
      children: [`
`, _jsxs(_components.li, {
        className: "task-list-item",
        children: [_jsx(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", _jsx(_components.strong, {
          children: "使用 AI 对话场景"
        }), ": 设置 ", _jsx(_components.code, {
          children: "AUDIO_SCENARIO_AI_CLIENT"
        }), "（RTC SDK 4.5.1+）"]
      }), `
`, _jsxs(_components.li, {
        className: "task-list-item",
        children: [_jsx(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", _jsx(_components.strong, {
          children: "加载最佳音频设置"
        }), ": 调用客户端组件的 ", _jsx(_components.code, {
          children: "loadAudioSettings()"
        }), " 方法"]
      }), `
`, _jsxs(_components.li, {
        className: "task-list-item",
        children: [_jsx(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", _jsx(_components.strong, {
          children: "集成必需的音频插件"
        }), ": 确保集成 AI 降噪和 AI 回声消除插件"]
      }), `
`, _jsxs(_components.li, {
        className: "task-list-item",
        children: [_jsx(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", _jsx(_components.strong, {
          children: "优化网络条件"
        }), ": 确保用户网络连接稳定，考虑使用 SD-RTN™ 优化网络传输"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "监控和分析",
      children: "监控和分析"
    }), `
`, _jsxs(_components.ul, {
      className: "contains-task-list",
      children: [`
`, _jsxs(_components.li, {
        className: "task-list-item",
        children: [_jsx(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", _jsx(_components.strong, {
          children: "实时监听延迟指标"
        }), ": 通过客户端组件或 NCS 获取每轮对话的延迟数据"]
      }), `
`, _jsxs(_components.li, {
        className: "task-list-item",
        children: [_jsx(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", _jsx(_components.strong, {
          children: "识别延迟瓶颈"
        }), ": 分析哪个模块的延迟贡献最大"]
      }), `
`, _jsxs(_components.li, {
        className: "task-list-item",
        children: [_jsx(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", _jsx(_components.strong, {
          children: "持续优化"
        }), ": 根据实际数据调整配置，进行 A/B 测试"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "延迟与质量的权衡",
      children: "延迟与质量的权衡"
    }), `
`, _jsx(_components.p, {
      children: "在优化延迟时，需要在响应速度和对话质量之间找到平衡："
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "优化策略"
          }), _jsx(_components.th, {
            children: "延迟影响"
          }), _jsx(_components.th, {
            children: "质量影响"
          }), _jsx(_components.th, {
            children: "建议场景"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "使用小型 LLM 模型"
          }), _jsx(_components.td, {
            children: "✅ 显著降低"
          }), _jsx(_components.td, {
            children: "⚠️ 可能降低"
          }), _jsx(_components.td, {
            children: "对延迟敏感、对话相对简单的场景"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "限制 max_tokens"
          }), _jsx(_components.td, {
            children: "✅ 适度降低"
          }), _jsx(_components.td, {
            children: "⚠️ 可能影响完整性"
          }), _jsx(_components.td, {
            children: "需要简短回复的场景"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "区域访问限制"
          }), _jsx(_components.td, {
            children: "✅ 适度降低"
          }), _jsx(_components.td, {
            children: "➖ 无影响"
          }), _jsx(_components.td, {
            children: "用户集中在特定区域"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "优化 RTC 设置"
          }), _jsx(_components.td, {
            children: "✅ 适度降低"
          }), _jsx(_components.td, {
            children: "➖ 无影响"
          }), _jsx(_components.td, {
            children: "所有场景"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsx(_components.p, {
        children: `提示
建议先通过监听延迟指标识别瓶颈，然后针对性地优化贡献最大的模块，而不是盲目追求极致的低延迟。`
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "参考资料",
      children: "参考资料"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../user-guides/listen-agent-events.md",
          children: "监听智能体事件"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./audio-settings.md",
          children: "优化音频设置"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../webhook/ncs-events.md#111-agent-metrics",
          children: "消息通知服务 - agent metrics 事件"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://www.shengwang.cn/duihua/benchmark/overview",
          children: "对话式 AI 引擎适配各主流模型的实时性能数据"
        })
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
