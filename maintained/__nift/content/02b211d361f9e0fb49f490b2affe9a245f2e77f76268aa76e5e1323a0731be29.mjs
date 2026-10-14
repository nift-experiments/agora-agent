import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "发版说明",
  description: "该版本于 2026 年 4 月 22 日发布。"
};
export let _markdown = `

## v2.6 [#v26]

该版本于 2026 年 4 月 22 日发布。

### 升级必看 [#升级必看]

#### 对话检测与打断能力架构重构 [#对话检测与打断能力架构重构]

该版本从原有 \`turn_detection\` 字段剥离了**打断决策**能力，专注于**轮次检测**；同时全新新增同级配置模块 \`interruption\`，统一管理全局打断策略。

**\`turn_detection\` 能力精简**

原 \`turn_detection\` 字段承载语音检测、语义判定、打断开关、关键词打断等逻辑，2.6 版本仅保留纯对话轮次检测能力，专注负责用户开始说话（SOS）、结束说话（EOS）的 VAD 语音检测与语义识别，只输出语音事件信号，不再承载任何业务层打断控制逻辑。

**新增 \`interruption\` 全局打断模块**

该版本为 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口新增 \`properties.interruption\` 字段，用于统一配置智能体被用户打断的行为策略。该字段将原有内嵌在 \`turn_detection\` 中的打断开关与执行能力统一抽离迁移至该模块；支持全局一键开关打断功能，提供人声触发打断、关键词打断两种模式，同时可配置关闭打断后的后置策略（追加录入 / 直接忽略），适配更多业务场景的防误打断、免打扰交互诉求。

**配置迁移说明**

原 V2.5 版本中 \`turn_detection.config.start_of_speech\` 下的 \`keyword\` 和 \`disabled\` 打断模式及对应配置字段废弃，需迁移至 \`interruption\` 同级配置中完成适配升级。

### 新增特性 [#新增特性]

#### 配置智能体问候语播报延迟时间 [#配置智能体问候语播报延迟时间]

该版本为 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口新增 \`llm.greeting_configs.delay_ms\` 字段，用于配置智能体问候语的播报延迟时间。配置后，智能体问候语会在用户加入频道后等待指定时间再播报。该功能可用于确保用户正常听到问候语。

#### 自定义 LLM 请求头信息 [#自定义-llm-请求头信息]

该版本为 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口新增 \`llm.headers\` 字段，用于请求 LLM 时附带自定义请求 Header。如果你接入的 LLM 服务要求在请求 Header 中携带特定信息，如租户标识、业务自定义字段等业务相关信息，你可以通过该字段透传这些信息。

#### 新增智能体状态回调 [#新增智能体状态回调]

对话式 AI 引擎客户端组件新增三个用于分别监听智能体的倾听 (Listening)、思考 (Thinking) 和说话 (Speaking) 状态变化的细粒度状态回调。这些回调是对原有智能体状态变化回调 (\`onAgentStateChanged\`) 的补充，便于你更精细地驱动界面状态和业务逻辑。

#### 发送自定义指令 [#发送自定义指令]

该版本新增 [POST 发送自定义指令](../api-reference/conversational-ai/rest-api/agent/think.md)接口，用于将一段文本作为用户输入注入现有对话链路，并由对话式 AI 引擎继续按照普通用户输入的处理逻辑进行推理和响应。该能力适用于以下场景：

* 隐式指令注入：在不通过 ASR 模块处理语音输入的情况下静默注入业务提示或前置设定。
* 客户端事件触发：将按钮点击、页面切换等客户端事件转换为文本注入，让智能体结合当前对话状态做出响应。
* 语音与文本协同：在用户说话的同时补充文本信息，由对话式 AI 引擎合并输入后，LLM 统一处理。

该接口支持通过 \`on_listening_action\`、\`on_thinking_action\` 和 \`on_speaking_action\` 分别配置智能体处于不同状态时的处理方式：

* \`inject\`：注入当前轮次，不打断当前轮次。
* \`interrupt\`：打断当前状态，并发起新一轮对话。
* \`ignore\`：忽略本次请求。

### 改进 [#改进]

该版本为消息通知服务所有事件回调和 [GET 查询智能体状态](../api-reference/conversational-ai/rest-api/agent/query.md)接口响应体新增 \`name\` 字段，用于返回智能体名称。你可以使用该字段定位和关联业务实例。

### API 变更 [#api-变更]

#### 废弃 [#废弃]

* [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)废弃：
  * \`properties.turn_detection.config.start_of_speech.mode\` 的 \`keyword\` 模式及对应配置字段
  * \`properties.turn_detection.config.start_of_speech.mode\` 的 \`disabled\` 模式及对应配置字段

#### 新增 [#新增]

* [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)新增
  * \`properties.llm.greeting_configs.delay_ms\`
  * \`properties.llm.headers\`
  * \`properties.interruption\`
* 新增 [POST 发送自定义指令](../api-reference/conversational-ai/rest-api/agent/think.md)
* [GET 查询智能体状态](../api-reference/conversational-ai/rest-api/agent/query.md)响应新增 \`name\`
* 客户端组件 API：

#### Android [#android]

* [\`onAgentListeningChanged\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#onagentlisteningchanged)
  \\- [\`onAgentThinkingChanged\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#onagentthinkingchanged)
  \\- [\`onAgentSpeakingChanged\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#onagentspeakingchanged)

#### iOS [#ios]

* [\`onAgentListeningChanged\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#onagentlisteningchanged)
  \\- [\`onAgentThinkingChanged\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#onagentthinkingchanged)
  \\- [\`onAgentSpeakingChanged\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#onagentspeakingchanged)

#### Web [#web]

[\`EConversationalAIAPIEvents\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/enum#econversationalaiapievents) 新增
\\- \`AGENT_LISTENING_CHANGED\`
\\- \`AGENT_THINKING_CHANGED\`
\\- \`AGENT_SPEAKING_CHANGED\`

## v2.5 [#v25]

该版本于 2026 年 3 月 30 日发布。

### 新增特性 [#新增特性-1]

#### 优雅打断支持判断对话暂停意图 [#优雅打断支持判断对话暂停意图]

该版本为 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口的 \`turn_detection.config.end_of_speech.semantic_config\` 字段新增 \`pause_state_enabled\` 字段，用于配置智能体是否识别用户的暂停意图。开启后（默认开启），当用户说"等一下"、"稍等"等暂停词时，智能体将判断为暂停意图，等待用户后续输入而非立即响应。

#### 实时更新 TTS 参数 [#实时更新-tts-参数]

接入[自定义大模型](./custom-llm.md)场景下，该版本新增支持在用户和智能体互动期间实时更新 TTS 参数，实现更沉浸的对话交互体验。该功能可应用于以下场景：

* 自定义大模型识别到用户要求智能体换一个声音。
* 自定义大模型识别到用户高兴的情绪时，实时提高 TTS 的音量、音调和语速等，使智能体的回应更符合用户的心情。

实现方式可参考[实时更新 TTS 参数](./custom-llm.md#实时更新-tts-参数)。

#### 查询对话轮次信息 [#查询对话轮次信息]

该版本新增 [GET 查询对话轮次信息](../api-reference/conversational-ai/rest-api/agent/turns.md)接口，用于在与智能体对话结束后，查询本次会话的对话轮次信息，包含每个对话轮次的开始信息、结束信息和性能指标。

> 信息
> 目前仅支持查询 7 天内的会话。

### API 变更 [#api-变更-1]

#### 新增 [#新增-1]

* [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)的 \`properties.turn_detection.config.end_of_speech.semantic_config\` 字段新增 \`pause_state_enabled\` 字段
* [GET 查询对话轮次信息](../api-reference/conversational-ai/rest-api/agent/turns.md)

## v2.4 [#v24]

该版本于 2026 年 2 月 2 日发布。

### 新增特性 [#新增特性-2]

#### 接入 MCP 服务器 [#接入-mcp-服务器]

该版本为 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口新增 \`llm.mcp_servers\` 字段，用于接入 MCP (Model Context Protocol) 服务器。你可以在创建智能体时配置 MCP 服务器，并开启工具调用 (\`advanced_features.enable_tools\` 设为 \`true\`)，让智能体调用外部服务提供的工具 (tools)，实现更复杂的业务逻辑。

#### 垫词功能 (Beta) [#垫词功能-beta]

该版本为 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口新增 \`filler_words\` 字段，用于配置垫词功能。垫词功能可在 LLM 响应等待时播报垫词，缓解用户等待焦虑，提升对话流畅度。

### 改进 [#改进-1]

#### turn\\_detection 层级优化 [#turn_detection-层级优化]

该版本对 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口的 \`turn_detection\` 字段进行了层级优化，采用 \`mode\` + \`config\` 的双字段配置方式，提供更灵活的对话轮次检测能力。

新的配置结构包括：

**基础配置**

* \`mode\`：对话轮次检测模式（当前支持 \`default\`）
* \`config.speech_threshold\`：语音识别灵敏度

**对话开始检测 (Start of Speech, SoS)**

\`config.start_of_speech\` 支持三种检测模式：

* **VAD 模式** (\`vad\`)：基于语音活动检测触发，支持配置打断阈值、前缀填充和忽略词列表
* **关键词模式 (Beta)** (\`keywords\`)：基于关键词触发，智能体听到指定关键词后开始对话
* **禁用模式** (\`disabled\`)：禁用打断，支持追加或忽略策略

**对话结束检测 (End of Speech, EoS)**

\`config.end_of_speech\` 支持两种检测模式：

* **VAD 模式** (\`vad\`)：基于静音持续时间判定对话结束
* **语义模式** (\`semantic\`)：基于语义理解判定对话结束，支持配置最大等待时间

### API 变更 [#api-变更-2]

#### 废弃 [#废弃-1]

* [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)废弃以下字段：
  * \`turn_detection.interrupt_mode\`
  * \`turn_detection.interrupt_keywords\`
  * \`turn_detection.interrupt_duration_ms\`
  * \`turn_detection.prefix_padding_ms\`
  * \`turn_detection.silence_duration_ms\`
  * \`turn_detection.threshold\`
  * \`advanced_features.enable_aivad\`

#### 新增 [#新增-2]

* [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)新增:
  * \`advanced_features.enable_tools\`
  * \`llm.mcp_servers\`
  * \`filler_words\`
  * \`turn_detection.mode\`
  * \`turn_detection.config\`

## v2.3 [#v23]

该版本于 2026 年 1 月 7 日发布。

### 新增特性 [#新增特性-3]

#### 配置 LLM 响应是否可打断 [#配置-llm-响应是否可打断]

接入自定义大模型并采用流式响应（SSE）的场景下，大模型的单次回复被切分为多个包 (Chunk) 进行传输。自该版本起，对话式 AI 引擎支持处理 \`object\` 为 \`chat.completion.custom_metadata\` 的**首包**响应，其中的 \`metadata.interruptable\` 字段用于配置 TTS 播报本次 LLM 响应时是否能被用户发言打断。该能力可用于确保智能体在播报法规、政策、产品定价等重要信息时，不被用户发言打断。更多信息可参考[配置 LLM 响应是否可打断](./custom-llm.md#配置-llm-响应是否可打断)。

#### RTC 媒体内容加密 [#rtc-媒体内容加密]

该版本为 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口新增 \`properties.rtc\` 字段，用于设置 RTC 媒体内容加密配置。你可以通过该配置加密 RTC 传输的音视频媒体内容，从而保障和智能体对话过程中的数据安全。

### 改进 [#改进-2]

该版本将 [POST 停止对话式智能体](../api-reference/conversational-ai/rest-api/agent/leave.md)接口改为异步响应，对话式 AI 引擎会在检查请求参数合法性后立即返回响应，无需等待智能体完全退出频道。

### API 变更 [#api-变更-3]

#### 新增 [#新增-3]

* [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)新增 \`properties.rtc\` 字段

#### 修改 [#修改]

* [POST 停止对话式智能体](../api-reference/conversational-ai/rest-api/agent/leave.md)改为异步响应

## v2.2 [#v22]

该版本于 2025 年 12 月 11 日发布。

### 新增特性 [#新增特性-4]

#### 智能体问候模式 [#智能体问候模式]

该版本为 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口新增 \`llm.greeting_configs.mode\` 字段，用于设置智能体问候语播报模式，目前支持以下选项：

* \`"single_every"\`：（默认）每次有用户加入空频道时，智能体都播报一次问候语。
* \`"single_first"\`：仅首位用户加入空频道时，智能体播报一次问候语。

### API 变更 [#api-变更-4]

#### 新增 [#新增-4]

* [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)新增 \`llm.greeting_configs.mode\` 字段

## v2.1 [#v21]

该版本于 2025 年 12 月 1 日发布。

### 新增特性 [#新增特性-5]

#### 动态变量 [#动态变量]

该版本为 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口新增 \`llm.template_variables\` 字段，用于在智能体的 \`system_messages\`、\`greeting_message\`、\`failure_message\` 和 \`parameters.silence_config.content\` 的文本中插入变量。通过配置变量，对话式 AI 引擎可以自动将其替换为 \`llm.template_variables\` 中定义的对应值。

#### 自定义标签 [#自定义标签]

该版本为 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口新增 \`labels\` 字段，用于让智能体携带自定义业务信息。这些自定义的标签会与智能体绑定，并在对话式 AI 引擎所有类型消息通知回调的 \`payload\` 字段中返回，用于实现自定义业务逻辑，例如标记活动 ID、客户分组、业务场景等。

### API 变更 [#api-变更-5]

#### 新增 [#新增-5]

* [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)新增
  * \`llm.template_variables\`
  * \`labels\`

## v2.0 [#v20]

该版本于 2025 年 11 月 6 日发布。

### 升级必看 [#升级必看-1]

#### 语音活动检测配置更变 [#语音活动检测配置更变]

该版本废弃了 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口的 \`vad\` 字段，其中的所有配置项已迁移至 \`turn_detection\` 字段。

#### 客户端组件字幕 API 更名 [#客户端组件字幕-api-更名]

该版本对客户端组件字幕 API 中所有使用了 \`transcription\` 命名的 API、参数等更名为 \`transcript\`，具体如下：

#### Android [#android-1]

* \`onTranscriptionUpdated\` 更名为 \`onTranscriptUpdated\`
  * \`TranscriptionRenderMode\` 更名为 \`TranscriptRenderMode\`
  * \`TranscriptionType\` 更名为 \`TranscriptType\`
  * \`TranscriptionStatus\` 更名为 \`TranscriptStatus\`
  * \`Transcription\` 更名为 \`Transcript\`

#### iOS [#ios-1]

* \`onTranscriptionUpdated\` 更名为 \`onTranscriptUpdated\`
  * \`TranscriptionRenderMode\` 更名为 \`TranscriptRenderMode\`
  * \`TranscriptionType\` 更名为 \`TranscriptType\`
  * \`TranscriptionStatus\` 更名为 \`TranscriptStatus\`
  * \`Transcription\` 更名为 \`Transcript\`

#### Web [#web-1]

* \`TRANSCRIPTION_UPDATED\` 更名为 \`TRANSCRIPT_UPDATED\`

### 新增特性 [#新增特性-6]

#### 优雅退出 [#优雅退出]

该版本为 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口新增 \`parameters.farewell_config\` 字段，用于设置智能体优雅退出功能。开启后，调用 [POST 停止对话式智能体](../api-reference/conversational-ai/rest-api/agent/leave.md)接口让智能体退出频道时，会确保智能体处于静默状态后再离开频道。

#### 有感声纹识别 (Beta) [#有感声纹识别-beta]

该版本为选择性注意力锁定功能新增有感声纹识别模式，你可以在开始与智能体互动前，注册并上传最多 1 个声纹，后续互动期间，智能体将通过声纹识别用户身份，并抑制其他背景人声和环境噪音，确保对话专注度。如需体验有感声纹识别功能，请[联系技术支持](https://ticket.shengwang.cn)。

#### 关键词打断模式 [#关键词打断模式]

该版本为 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口的 \`turn_detection.interrupt_mode\` 字段新增 \`"keyword"\` 选项，用于将智能体打断模式为关键词打断模式，你可以在 \`turn_detection.interrupt_keywords\` 字段中设置打断关键词。启用后，智能体听到列表中的关键词后会打断智能体当前行为。

#### 自适应打断模式 [#自适应打断模式]

该版本为 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口的 \`turn_detection.interrupt_mode\` 字段新增 \`"adaptive"\` 选项，用于将智能体打断模式为自适应打断模式，启用后，智能体说话时，将自动调整打断相关参数，避免智能体被短暂人声误打断。

### 改进 [#改进-3]

#### MiniMax TTS 支持时间戳 [#minimax-tts-支持时间戳]

自该版本起，Minimax TTS 在文字转语音的同时会附带时间戳信息。该改进将有助于精确定位用户打断智能体说话的时间点，提升语音打断相关上下文信息的准确度。

#### 新增 TTS/ASR 可选 [#新增-ttsasr-可选]

该版本新增支持了以下供应商或模型，详见 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)：

* 新增 TTS：
  * 阿里云 CosyVoice TTS
  * 火山引擎双向流式 TTS
  * 阶跃星辰 TTS
* 新增 ASR：
  * 讯飞云传统语音转写识别服务
  * 讯飞云语音识别大模型服务
  * 讯飞云方言自由说识别服务

### API 变更 [#api-变更-6]

#### 废弃 [#废弃-2]

* [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)废弃 \`vad\` 字段

#### 新增 [#新增-6]

* [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)新增：
  * \`parameters.farewell_config\`
  * \`turn_detection.interrupt_mode.adaptive\`
  * \`turn_detection.interrupt_mode.keyword\`
  * \`turn_detection.interrupt_keywords\`
  * \`turn_detection.interrupt_duration_ms\` （迁移自 \`vad.interrupt_duration_ms\`）
  * \`turn_detection.prefix_padding_ms\` （迁移自 \`vad.prefix_padding_ms\`）
  * \`turn_detection.silence_duration_ms\` （迁移自 \`vad.silence_duration_ms\`）
  * \`turn_detection.threshold\` （迁移自 \`vad.threshold\`）

## v1.7 [#v17]

该版本于 2025 年 7 月 29 日发布。

### 新增特性 [#新增特性-7]

#### 数字人 [#数字人]

该版本新增数字人功能，启用后，智能体可以结合第三方数字人供应商提供的能力，为智能体生成口型准确、形象逼真的数字人形象，提升与 AI 对话互动的沉浸感。你可以在调用 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口时，将 \`avatar.enable\` 设置为 \`true\`，并配置 \`avatar.vendor\` 和 \`avatar.params\` 字段来启用数字人功能。

> 注意
> 开启数字人功能将产生 RTC 视频通话费用，详见 [RTC 计费说明](https://doc.shengwang.cn/doc/rtc/android/billing/billing-strategy)。

#### 无感声纹识别 [#无感声纹识别]

选择性注意力锁定新增无感声纹识别功能，该功能赋予 AI 精准识别用户声纹特征的能力，有效区分不同说话者。用户只需在对话初期大声、清晰地说话，即可提升 AI 对声音的锁定效果。无感声纹识别不仅可以智能屏蔽 95% 的环境人声、噪声，对 AI 对话更准确、高效，同时也适用于多人与 AI 对话的场景，实现更加多元化的对话式 AI 响应与服务。如需体验选择性注意力锁定功能，请[联系技术支持](https://ticket.shengwang.cn)。

#### 发送图片消息（Beta） [#发送图片消息beta]

对话式 AI 引擎客户端组件新增发送图片消息接口，支持将 URL 图片发送给大模型，并在后续与智能体对话时自动引用图片内容，让大模型根据图片内容生成更符合用户需求的回复。此外，本次客户端组件还新增了图片消息回执回调，用于确认图片消息发送是否成功。你可以参考[发送多模态消息](./send-multimodal-message.md)了解如何使用该功能。

> 注意
>
> * 发送图片消息功能目前处于 Beta 阶段，限时免费。
> * 图片处理能力依赖于 LLM 供应商提供的能力，你需要确保你接入对话式 AI 引擎的 LLM 供应商支持图片处理。

### API 变更 [#api-变更-7]

#### 新增 [#新增-7]

* [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)新增
  * \`avatar.enable\`
  * \`avatar.vendor\`
  * \`avatar.params\`
* 客户端组件 API：

#### Android [#android-2]

* [\`chat\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapi#chat)
  \\- [\`onMessageReceiptUpdated\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#onmessagereceiptupdated)
  \\- [\`onMessageError\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#onmessageerror)
  \\- [\`ChatMessage\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/struct#chatmessage)
  \\- [\`ChatMessageType\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/struct#chatmessagetype)
  \\- [\`ImageMessage\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/struct#imagemessage)
  \\- [\`MessageReceipt\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/struct#messagereceipt)
  \\- [\`MessageError\`](https://doc.shengwang.cn/api-ref/convoai/android/android-component/struct#messageerror)

#### iOS [#ios-2]

* [\`chat\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapi#chat)
  \\- [\`onMessageReceiptUpdated\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#onmessagereceiptupdated)
  \\- [\`onMessageError\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#onmessageerror)
  \\- [\`ChatMessage\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/struct#chatmessage)
  \\- [\`ChatMessageType\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/enum#chatmessagetype)
  \\- [\`ImageMessage\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/struct#imagemessage)
  \\- [\`MessageReceipt\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/struct#messagereceipt)
  \\- [\`MessageError\`](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/struct#messageerror)

#### Web [#web-2]

* [\`chat\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/conversationalaiapi#chat)
  \\- [\`TMessageReceipt\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/struct#tmessagereceipt)
  \\- [\`EChatMessagePriority\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/enum#echatmessagepriority)
  \\- [\`EChatMessageType\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/enum#echatmessagetype)
  \\- [\`IChatMessageBase\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/struct#ichatmessagebase)
  \\- [\`IChatMessageImage\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/struct#ichatmessageimage)
  \\- [\`EConversationalAIAPIEvents\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/enum#econversationalaiapievents) 新增 \`MESSAGE_RECEIPT_UPDATED\` 和 \`MESSAGE_ERROR\` 事件
  \\- [\`EModuleType\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/enum#emoduletype) 新增 \`CONTEXT\` 枚举值
  \\- [\`EAgentState\`](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/enum#eagentstate) 新增 \`SILENT\` 枚举值

## v1.6 [#v16]

该版本于 2025 年 7 月 1 日发布。

### 升级必看 [#升级必看-2]

#### 支持 ASR 供应商开放可选 [#支持-asr-供应商开放可选]

为了提高对话式智能体配置的灵活性，自该版本起，语音识别 (ASR) 供应商开放自定义选择。[POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口新增 \`asr.vendor\` 字段和 \`asr.params\` 字段，分别用于设置 ASR 供应商和配置参数。当前支持配置：

* （默认）凤鸣 ASR
* 腾讯云 ASR
* 微软 ASR

同时，**旧版对话式 AI 引擎服务费用**拆分出**凤鸣 ASR 处理费用**，当 ASR 服务采用默认的凤鸣 ASR 时，总价维持之前的版本不变，即**旧版对话式 AI 引擎服务费用** = **新版对话式 AI 引擎服务费用** + **凤鸣 ASR 处理费用**，当 ASR 服务采用其他供应商时，仅收取**新版对话式 AI 引擎服务费用**，详见[计费说明](./billing.md)。

### 新增特性 [#新增特性-8]

#### 客户端组件 [#客户端组件]

为了提高对话式智能体的开发效率，声网提供了一套灵活可扩展、标准化的对话式 AI 引擎客户端组件。该组件支持 iOS、Android、Web 平台，封装了多个场景化 API，你只需要调用这些 API 即可结合声网[实时互动 (RTC) SDK](https://doc.shengwang.cn/doc/rtc/homepage) 和[实时消息 (RTM) SDK](https://doc.shengwang.cn/doc/rtm2/homepage) 的能力实现以下功能：

* [实时字幕](./realtime-sub.md)：将用户与智能体的对话内容实时以文本输出并显示到终端界面上。该版本全面升级了字幕组件，提供更完善的功能支持、更强的可扩展性、更好的错误处理、更完善的会话管理和更强大的通信机制。
* [打断智能体](./interrupt-agent.md)：打断智能体说话和思考流程，让智能体“闭嘴”。
* [监听智能体相关事件](./listen-agent-events.md)：监听智能体对话状态变更、性能指标和错误事件。
* [设置最佳音频参数](./best-practices/audio-settings.md)：快速设置音频参数最佳实践，提升对话式智能体的对话体验。

### API 变更 [#api-变更-8]

#### 新增 [#新增-8]

* [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)新增
  * \`asr.vendor\`
  * \`asr.params\`
  * \`parameters.enable_metrics\`
  * \`parameters.data_channel\`
  * \`parameters.enable_error_message\`
* 客户端组件 API：
  * [Android](https://doc.shengwang.cn/api-ref/convoai/android/android-component/overview)
  * [iOS](https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/overview)
  * [Web](https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/overview)

## v1.5 [#v15]

该版本于 2025 年 6 月 6 日发布。

### 新增特性 [#新增特性-9]

#### TTS 过滤 [#tts-过滤]

[POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口新增 \`tts.skip_patterns\` 字段，用于控制 TTS 模块朗读 LLM 返回文本时，是否跳过指定括号内的内容，避免智能体播报不必要的结构性提示信息如语气、动作描述、系统提示等，提升听感自然度与沉浸感。

### API 变更 [#api-变更-9]

#### 新增 [#新增-9]

[POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口新增 \`tts.skip_patterns\` 字段。

## v1.4 [#v14]

该版本于 2025 年 5 月 26 日发布。

### 升级必看 [#升级必看-3]

v1.4 版本对 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口进行了以下变更，请在升级到该版本后更新相关代码。

#### RTM 认证管理 [#rtm-认证管理]

该版本废弃了 \`agent_rtm_uid\` 字段。开启 RTM 服务后，智能体加入 RTM 频道使用的 Token 和用户 ID 不再需要单独配置，而是会复用 \`token\` 和 \`agent_rtc_uid\` 字段配置的 Token 和用户 ID。你可以参考 [FAQ](https://doc.shengwang.cn/faq/integration-issues/generate-token) 了解如何生成同时具备 RTC 和 RTM 权限的 Token。

#### 静默配置 [#静默配置]

该版本废弃了 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口的 \`silence_timeout\` 和 \`llm.silence_message\` 字段，改用新增的 \`parameters.silence_config\` 字段配置智能体最大静默超时时长、静默提示方式和静默提示词。

### 新增特性 [#新增特性-10]

#### 支持微软 TTS [#支持微软-tts]

自该版本起，对话式 AI 引擎支持微软 TTS，你可以在调用 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口时，将 \`tts.vendor\` 设置为 \`microsoft\` 来接入微软 TTS。

#### 人声打断模式 [#人声打断模式]

该版本为 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口新增 \`turn_detection.interrupt_mode\` 字段，用于设置人声打断智能体行为的模式。当前支持以下三种模式：

* \`"interrupt"\`：（默认）打断模式，人声立即打断智能体交互。智能体会终止当前交互，直接处理人声输入。
* \`"append"\`: 追加模式，人声不打断智能体。智能体会在当前交互结束后处理刚才收到的人声请求。
* \`"ignore"\`: 忽略模式，智能体忽略人声请求。如果智能体正在说话或思考中途收到人声，智能体会直接忽略并丢弃人声请求，不存入上下文。

#### 传递短期记忆 [#传递短期记忆]

该版本为 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口新增 \`llm.vendor\` 字段，设置为 \`"custom"\` 后，智能体会在调用大模型时携带对话轮次 (\`turn_id\`) 和请求时间戳 (\`timestamp\`) 等信息。详见[传递记忆内容给大模型](./short-term-memory.md#传递记忆内容给大模型)。

### 改进 [#改进-4]

该版本进行了以下改进：

* 接入 Minimax TTS 时，新增支持透传 \`emotion\`、\`latex_read\`、\`pronunciation_dict\` 等字段，详见[示例代码](../api-reference/conversational-ai/rest-api/agent/join.md)。
* 和智能体对话期间，智能体的实时状态支持通过数据流回调至 RTC SDK。
* [POST 更新智能体配置](../api-reference/conversational-ai/rest-api/agent/update.md)接口新增 \`llm.system_messages\` 和 \`llm.params\` 字段，用于更新智能体调用大模型时携带的系统提示词和配置参数。

### API 变更 [#api-变更-10]

#### 新增 [#新增-10]

* [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)新增：
  * \`llm.vendor\`
  * \`turn_detection.interrupt_mode\`
  * \`parameters.silence_config\`
* [POST 更新智能体配置](../api-reference/conversational-ai/rest-api/agent/update.md)新增：
  * \`llm.system_messages\`
  * \`llm.params\`

#### 废弃 [#废弃-3]

[POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)废弃：

* \`agent_rtm_uid\`
* \`silence_timeout\`
* \`llm.silence_message\`

## v1.3 [#v13]

该版本于 2025 年 4 月 16 日发布。

### 集成必看 [#集成必看]

#### 加油包 [#加油包]

自该版本起，你可以在控制台购买加油包，用于抵扣对话式 AI 引擎服务的实际用量，同时享受一定折扣，详见[计费说明](./billing.md#计费方式)。

### 新增特性 [#新增特性-11]

#### 获取智能体短期记忆 [#获取智能体短期记忆]

用户和智能体之间的对话消息、智能体创建和停止的时间戳等会被存储在智能体的短期记忆中。该版本新增了以下两种方式获取智能体的短期记忆：

* 调用 [GET 获取智能体短期记忆](../api-reference/conversational-ai/rest-api/agent/history.md)接口获取指定运行中智能体的短期记忆。
* 通过[声网消息通知服务](../api-reference/enable-ncs.md)订阅[智能体短期记忆事件](../api-reference/ncs-events.md#103-agent-history)，当智能体停止时，声网将通过 Webhook 回调的方式自动发送智能体的短期记忆到你的业务服务器。

#### 支持智谱 AI 大模型 [#支持智谱-ai-大模型]

自该版本起，对话式 AI 引擎支持智谱 AI 大模型，你可以在调用 [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)接口时，将 \`llm.url\` 设置为智谱 AI 大模型的 API 地址来接入智谱 AI 大模型。

### 改进 [#改进-5]

#### 自定义播报信息优先级 [#自定义播报信息优先级]

该版本升级了 [POST 播报自定义信息](../api-reference/conversational-ai/rest-api/agent/speak.md)接口，新增了两种与播报行为打断逻辑相关的配置：

* \`priority\`：配置播报行为的优先级。支持配置打断并播报（高）、追加播报（中）和空闲时播报（低）三种优先级。
* \`interruptable\`：配置是否允许人声打断智能体播报。

#### 发送静默提示消息 [#发送静默提示消息]

[POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)新增 \`silence_timeout\` 和 \`llm.silence_message\` 参数，用于设置智能体最大静默时间和静默提示消息。智能体创建成功，且用户加入频道后，智能体不处于倾听、思考或说话状态的持续时间称为智能体静默时间，静默时间达到设定值后，智能体将播报中填写的静默提示消息。

### API 变更 [#api-变更-11]

#### 新增 [#新增-11]

* [GET 获取智能体短期记忆](../api-reference/conversational-ai/rest-api/agent/history.md)
* [POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)新增 \`silence_timeout\` 和 \`llm.silence_message\` 参数
* [POST 播报自定义信息](../api-reference/conversational-ai/rest-api/agent/speak.md)新增 \`priority\` 和 \`interruptable\` 参数

## v1.2 [#v12]

该版本于 2025 年 3 月 27 日发布。

### 新增特性 [#新增特性-12]

#### 播报自定义信息 [#播报自定义信息]

该版本新增 [POST 播报自定义信息](../api-reference/conversational-ai/rest-api/agent/speak.md)接口，用于让指定智能体播报自定义消息。与智能体对话期间，调用该接口可以打断智能体说话和思考，并使用 TTS 模块立刻播报自定义消息。

#### 打断智能体 [#打断智能体]

该版本新增 [POST 打断智能体](../api-reference/conversational-ai/rest-api/agent/interrupt.md)接口，用于打断指定智能体的说话和思考流程，让智能体“闭嘴”。

### API 变更 [#api-变更-12]

#### 新增 [#新增-12]

* [POST 播报自定义信息](../api-reference/conversational-ai/rest-api/agent/speak.md)
* [POST 打断智能体](../api-reference/conversational-ai/rest-api/agent/interrupt.md)

## v1.1 [#v11]

该版本于 2025 年 3 月 19 日发布。

### 新增特性 [#新增特性-13]

#### 传递自定义信息 [#传递自定义信息]

[POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)新增 \`enable_rtm\` 和 \`agent_rtm_uid\` 字段，用于为对话式智能体开启 RTM 功能。开启后，智能体可以结合 RTM SDK 提供的能力，获取用户的说话状态、选中的文字、个性签名、得分等自定义上下文信息，并将这些信息传递给智能体，引导智能体输出更符合用户需求的内容。详见[传递自定义信息](./custom-data.md)。

### 改进 [#改进-6]

为了帮助你快速接入自定义大模型，该版本上线了[自定义大模型](./custom-llm.md)文档，你可以参考文档中的示例代码将自定义大模型接入到对话式 AI 引擎中，实现检索增强生成（RAG）、多模态、工具调用等进阶能力。

### API 变更 [#api-变更-13]

#### 新增 [#新增-13]

[POST 创建对话式智能体](../api-reference/conversational-ai/rest-api/agent/join.md)新增 \`enable_rtm\` 和 \`agent_rtm_uid\` 字段

## v1.0 GA [#v10-ga]

该版本于 2025 年 3 月 5 日发布。

### 集成必看 [#集成必看-1]

#### 计费说明 [#计费说明]

声网对话式 AI 引擎于 2025 年 3 月 5 日正式 GA 发布，并公布了产品定价：声网对话式 AI 引擎的计费规则，详见[计费说明](./billing.md)。

#### SDK 版本要求 [#sdk-版本要求]

为了取得最好的对话体验效果，新版本声网对话式 AI 引擎建议与以下声网 SDK 搭配使用：
\\- 声网 RTC Native SDK，v4.5.1 及以上版本
\\- 声网 RTC Web SDK，4.23.2 及以上版本
\\- 声网 RTSA C SDK，1.9.x 及以上版本

### 新增特性 [#新增特性-14]

#### 实时字幕 [#实时字幕]

自该版本起，声网提供开源的字幕处理模块，你只需要将模块集成到项目中，并调用模块的 API 即可快速实现实时字幕功能，将用户与智能体的对话内容实时以文本输出并显示到终端界面上，详见[实时字幕](./realtime-sub.md)。

#### 消息通知服务 [#消息通知服务]

该版本新增对话式 AI 引擎消息通知服务，你可以在声网控制台设置消息通知服务地址，订阅智能体创建、停止或出错事件。当订阅的事件发生时，声网会调用你设置的回调地址，将事件详情发送至你的业务服务器。详见[消息通知服务](../api-reference/enable-ncs.md)。

#### 热词 Beta [#热词-beta]

该版本新增热词功能，添加热词可以显著提升对话式 AI 引擎在专有词汇上的识别准确率。目前该功能处于 Beta 发布阶段，请[联系技术支持](https://ticket.shengwang.cn)开通。

## v1.0 Public Beta [#v10-public-beta]

该版本于 2025 年 2 月 18 日发布。本次发版聚焦于提供自然流畅、低延迟、高可靠的实时语音对话能力，助力开发者快速构建智能化、沉浸式的交互体验。

### 集成必看 [#集成必看-2]

1. 为了取得最好的对话体验效果，已[联系声网技术支持](https://ticket.shengwang.cn/)获取指定版本的实时互动 SDK。

2. 目前仅支持使用中文和英文与 AI 互动，其他语种需求[联系技术支持](https://ticket.shengwang.cn)反馈。

3. 目前单一 App ID 的并发用户数 (Peak Concurrent Users) 限制为 20， 如需提升配额，请[联系技术支持](https://ticket.shengwang.cn)申请。

### 核心功能 [#核心功能]

#### 实时语音对话 [#实时语音对话]

支持与 AI 进行自然流畅的实时语音对话，如同与真人交流，提供低延迟、极速响应的交互体验。

#### 端上降噪 [#端上降噪]

SDK 会智能识别和消除背景噪音，即使在嘈杂的公共场所，都能够确保声音传输的清晰度，为用户提供高质量的对话体验。

#### 背景人声抑制 [#背景人声抑制]

智能抑制背景人声，精准保留对话人清晰语音，确保在多人声环境中仍能实现清晰、专注的交互体验。

#### 优雅打断 [#优雅打断]

支持用户随时打断 AI 并快速响应，实现自然过渡和流畅对话，避免机械式交互。

#### 智能传输 [#智能传输]

针对与 AI 智能体对话场景优化的传输算法，支持在弱网环境（如 80% 丢包率）下仍能稳定传输语音数据，确保对话的连续性和可靠性，适应多样化的复杂网络环境。

#### 灵活编排 [#灵活编排]

支持全球主流的 LLM（大语言模型）、TTS（语音合成） 适配，快速实现灵活编排，满足不同场景和业务需求，提供高度定制化的 AI 智能体对话解决方案。

#### 实时字幕 [#实时字幕-1]

支持用户与 AI 智能体的对话内容实时以文本输出并显示到终端界面上。

#### 多平台支持 [#多平台支持]

支持 iOS、Android、Web、 小程序、以及各类嵌入式硬件等客户端，提供跨平台的一致性和无缝集成体验，满足不同场景的应用需求。
`;
export let structuredData = {
  contents: [{
    heading: "v26",
    content: "该版本于 2026 年 4 月 22 日发布。"
  }, {
    heading: "对话检测与打断能力架构重构",
    content: "该版本从原有 `turn_detection` 字段剥离了**打断决策**能力，专注于**轮次检测**；同时全新新增同级配置模块 `interruption`，统一管理全局打断策略。"
  }, {
    heading: "对话检测与打断能力架构重构",
    content: "**`turn_detection` 能力精简**"
  }, {
    heading: "对话检测与打断能力架构重构",
    content: "原 `turn_detection` 字段承载语音检测、语义判定、打断开关、关键词打断等逻辑，2.6 版本仅保留纯对话轮次检测能力，专注负责用户开始说话（SOS）、结束说话（EOS）的 VAD 语音检测与语义识别，只输出语音事件信号，不再承载任何业务层打断控制逻辑。"
  }, {
    heading: "对话检测与打断能力架构重构",
    content: "**新增 `interruption` 全局打断模块**"
  }, {
    heading: "对话检测与打断能力架构重构",
    content: "该版本为 POST 创建对话式智能体接口新增 `properties.interruption` 字段，用于统一配置智能体被用户打断的行为策略。该字段将原有内嵌在 `turn_detection` 中的打断开关与执行能力统一抽离迁移至该模块；支持全局一键开关打断功能，提供人声触发打断、关键词打断两种模式，同时可配置关闭打断后的后置策略（追加录入 / 直接忽略），适配更多业务场景的防误打断、免打扰交互诉求。"
  }, {
    heading: "对话检测与打断能力架构重构",
    content: "**配置迁移说明**"
  }, {
    heading: "对话检测与打断能力架构重构",
    content: "原 V2.5 版本中 `turn_detection.config.start_of_speech` 下的 `keyword` 和 `disabled` 打断模式及对应配置字段废弃，需迁移至 `interruption` 同级配置中完成适配升级。"
  }, {
    heading: "配置智能体问候语播报延迟时间",
    content: "该版本为 POST 创建对话式智能体接口新增 `llm.greeting_configs.delay_ms` 字段，用于配置智能体问候语的播报延迟时间。配置后，智能体问候语会在用户加入频道后等待指定时间再播报。该功能可用于确保用户正常听到问候语。"
  }, {
    heading: "自定义-llm-请求头信息",
    content: "该版本为 POST 创建对话式智能体接口新增 `llm.headers` 字段，用于请求 LLM 时附带自定义请求 Header。如果你接入的 LLM 服务要求在请求 Header 中携带特定信息，如租户标识、业务自定义字段等业务相关信息，你可以通过该字段透传这些信息。"
  }, {
    heading: "新增智能体状态回调",
    content: "对话式 AI 引擎客户端组件新增三个用于分别监听智能体的倾听 (Listening)、思考 (Thinking) 和说话 (Speaking) 状态变化的细粒度状态回调。这些回调是对原有智能体状态变化回调 (`onAgentStateChanged`) 的补充，便于你更精细地驱动界面状态和业务逻辑。"
  }, {
    heading: "发送自定义指令",
    content: "该版本新增 POST 发送自定义指令接口，用于将一段文本作为用户输入注入现有对话链路，并由对话式 AI 引擎继续按照普通用户输入的处理逻辑进行推理和响应。该能力适用于以下场景："
  }, {
    heading: "发送自定义指令",
    content: "隐式指令注入：在不通过 ASR 模块处理语音输入的情况下静默注入业务提示或前置设定。"
  }, {
    heading: "发送自定义指令",
    content: "客户端事件触发：将按钮点击、页面切换等客户端事件转换为文本注入，让智能体结合当前对话状态做出响应。"
  }, {
    heading: "发送自定义指令",
    content: "语音与文本协同：在用户说话的同时补充文本信息，由对话式 AI 引擎合并输入后，LLM 统一处理。"
  }, {
    heading: "发送自定义指令",
    content: "该接口支持通过 `on_listening_action`、`on_thinking_action` 和 `on_speaking_action` 分别配置智能体处于不同状态时的处理方式："
  }, {
    heading: "发送自定义指令",
    content: "`inject`：注入当前轮次，不打断当前轮次。"
  }, {
    heading: "发送自定义指令",
    content: "`interrupt`：打断当前状态，并发起新一轮对话。"
  }, {
    heading: "发送自定义指令",
    content: "`ignore`：忽略本次请求。"
  }, {
    heading: "改进",
    content: "该版本为消息通知服务所有事件回调和 GET 查询智能体状态接口响应体新增 `name` 字段，用于返回智能体名称。你可以使用该字段定位和关联业务实例。"
  }, {
    heading: "废弃",
    content: "POST 创建对话式智能体废弃："
  }, {
    heading: "废弃",
    content: "`properties.turn_detection.config.start_of_speech.mode` 的 `keyword` 模式及对应配置字段"
  }, {
    heading: "废弃",
    content: "`properties.turn_detection.config.start_of_speech.mode` 的 `disabled` 模式及对应配置字段"
  }, {
    heading: "新增",
    content: "POST 创建对话式智能体新增"
  }, {
    heading: "新增",
    content: "`properties.llm.greeting_configs.delay_ms`"
  }, {
    heading: "新增",
    content: "`properties.llm.headers`"
  }, {
    heading: "新增",
    content: "`properties.interruption`"
  }, {
    heading: "新增",
    content: "新增 POST 发送自定义指令"
  }, {
    heading: "新增",
    content: "GET 查询智能体状态响应新增 `name`"
  }, {
    heading: "新增",
    content: "客户端组件 API："
  }, {
    heading: "android",
    content: "`onAgentListeningChanged`\n\\- `onAgentThinkingChanged`\n\\- `onAgentSpeakingChanged`"
  }, {
    heading: "ios",
    content: "`onAgentListeningChanged`\n\\- `onAgentThinkingChanged`\n\\- `onAgentSpeakingChanged`"
  }, {
    heading: "web",
    content: "`EConversationalAIAPIEvents` 新增\n\\- `AGENT_LISTENING_CHANGED`\n\\- `AGENT_THINKING_CHANGED`\n\\- `AGENT_SPEAKING_CHANGED`"
  }, {
    heading: "v25",
    content: "该版本于 2026 年 3 月 30 日发布。"
  }, {
    heading: "优雅打断支持判断对话暂停意图",
    content: '该版本为 POST 创建对话式智能体接口的 `turn_detection.config.end_of_speech.semantic_config` 字段新增 `pause_state_enabled` 字段，用于配置智能体是否识别用户的暂停意图。开启后（默认开启），当用户说"等一下"、"稍等"等暂停词时，智能体将判断为暂停意图，等待用户后续输入而非立即响应。'
  }, {
    heading: "实时更新-tts-参数",
    content: "接入自定义大模型场景下，该版本新增支持在用户和智能体互动期间实时更新 TTS 参数，实现更沉浸的对话交互体验。该功能可应用于以下场景："
  }, {
    heading: "实时更新-tts-参数",
    content: "自定义大模型识别到用户要求智能体换一个声音。"
  }, {
    heading: "实时更新-tts-参数",
    content: "自定义大模型识别到用户高兴的情绪时，实时提高 TTS 的音量、音调和语速等，使智能体的回应更符合用户的心情。"
  }, {
    heading: "实时更新-tts-参数",
    content: "实现方式可参考实时更新 TTS 参数。"
  }, {
    heading: "查询对话轮次信息",
    content: "该版本新增 GET 查询对话轮次信息接口，用于在与智能体对话结束后，查询本次会话的对话轮次信息，包含每个对话轮次的开始信息、结束信息和性能指标。"
  }, {
    heading: "查询对话轮次信息",
    content: `> 信息
> 目前仅支持查询 7 天内的会话。`
  }, {
    heading: "新增-1",
    content: "POST 创建对话式智能体的 `properties.turn_detection.config.end_of_speech.semantic_config` 字段新增 `pause_state_enabled` 字段"
  }, {
    heading: "新增-1",
    content: "GET 查询对话轮次信息"
  }, {
    heading: "v24",
    content: "该版本于 2026 年 2 月 2 日发布。"
  }, {
    heading: "接入-mcp-服务器",
    content: "该版本为 POST 创建对话式智能体接口新增 `llm.mcp_servers` 字段，用于接入 MCP (Model Context Protocol) 服务器。你可以在创建智能体时配置 MCP 服务器，并开启工具调用 (`advanced_features.enable_tools` 设为 `true`)，让智能体调用外部服务提供的工具 (tools)，实现更复杂的业务逻辑。"
  }, {
    heading: "垫词功能-beta",
    content: "该版本为 POST 创建对话式智能体接口新增 `filler_words` 字段，用于配置垫词功能。垫词功能可在 LLM 响应等待时播报垫词，缓解用户等待焦虑，提升对话流畅度。"
  }, {
    heading: "turn_detection-层级优化",
    content: "该版本对 POST 创建对话式智能体接口的 `turn_detection` 字段进行了层级优化，采用 `mode` + `config` 的双字段配置方式，提供更灵活的对话轮次检测能力。"
  }, {
    heading: "turn_detection-层级优化",
    content: "新的配置结构包括："
  }, {
    heading: "turn_detection-层级优化",
    content: "**基础配置**"
  }, {
    heading: "turn_detection-层级优化",
    content: "`mode`：对话轮次检测模式（当前支持 `default`）"
  }, {
    heading: "turn_detection-层级优化",
    content: "`config.speech_threshold`：语音识别灵敏度"
  }, {
    heading: "turn_detection-层级优化",
    content: "**对话开始检测 (Start of Speech, SoS)**"
  }, {
    heading: "turn_detection-层级优化",
    content: "`config.start_of_speech` 支持三种检测模式："
  }, {
    heading: "turn_detection-层级优化",
    content: "**VAD 模式** (`vad`)：基于语音活动检测触发，支持配置打断阈值、前缀填充和忽略词列表"
  }, {
    heading: "turn_detection-层级优化",
    content: "**关键词模式 (Beta)** (`keywords`)：基于关键词触发，智能体听到指定关键词后开始对话"
  }, {
    heading: "turn_detection-层级优化",
    content: "**禁用模式** (`disabled`)：禁用打断，支持追加或忽略策略"
  }, {
    heading: "turn_detection-层级优化",
    content: "**对话结束检测 (End of Speech, EoS)**"
  }, {
    heading: "turn_detection-层级优化",
    content: "`config.end_of_speech` 支持两种检测模式："
  }, {
    heading: "turn_detection-层级优化",
    content: "**VAD 模式** (`vad`)：基于静音持续时间判定对话结束"
  }, {
    heading: "turn_detection-层级优化",
    content: "**语义模式** (`semantic`)：基于语义理解判定对话结束，支持配置最大等待时间"
  }, {
    heading: "废弃-1",
    content: "POST 创建对话式智能体废弃以下字段："
  }, {
    heading: "废弃-1",
    content: "`turn_detection.interrupt_mode`"
  }, {
    heading: "废弃-1",
    content: "`turn_detection.interrupt_keywords`"
  }, {
    heading: "废弃-1",
    content: "`turn_detection.interrupt_duration_ms`"
  }, {
    heading: "废弃-1",
    content: "`turn_detection.prefix_padding_ms`"
  }, {
    heading: "废弃-1",
    content: "`turn_detection.silence_duration_ms`"
  }, {
    heading: "废弃-1",
    content: "`turn_detection.threshold`"
  }, {
    heading: "废弃-1",
    content: "`advanced_features.enable_aivad`"
  }, {
    heading: "新增-2",
    content: "POST 创建对话式智能体新增:"
  }, {
    heading: "新增-2",
    content: "`advanced_features.enable_tools`"
  }, {
    heading: "新增-2",
    content: "`llm.mcp_servers`"
  }, {
    heading: "新增-2",
    content: "`filler_words`"
  }, {
    heading: "新增-2",
    content: "`turn_detection.mode`"
  }, {
    heading: "新增-2",
    content: "`turn_detection.config`"
  }, {
    heading: "v23",
    content: "该版本于 2026 年 1 月 7 日发布。"
  }, {
    heading: "配置-llm-响应是否可打断",
    content: "接入自定义大模型并采用流式响应（SSE）的场景下，大模型的单次回复被切分为多个包 (Chunk) 进行传输。自该版本起，对话式 AI 引擎支持处理 `object` 为 `chat.completion.custom_metadata` 的**首包**响应，其中的 `metadata.interruptable` 字段用于配置 TTS 播报本次 LLM 响应时是否能被用户发言打断。该能力可用于确保智能体在播报法规、政策、产品定价等重要信息时，不被用户发言打断。更多信息可参考配置 LLM 响应是否可打断。"
  }, {
    heading: "rtc-媒体内容加密",
    content: "该版本为 POST 创建对话式智能体接口新增 `properties.rtc` 字段，用于设置 RTC 媒体内容加密配置。你可以通过该配置加密 RTC 传输的音视频媒体内容，从而保障和智能体对话过程中的数据安全。"
  }, {
    heading: "改进-2",
    content: "该版本将 POST 停止对话式智能体接口改为异步响应，对话式 AI 引擎会在检查请求参数合法性后立即返回响应，无需等待智能体完全退出频道。"
  }, {
    heading: "新增-3",
    content: "POST 创建对话式智能体新增 `properties.rtc` 字段"
  }, {
    heading: "修改",
    content: "POST 停止对话式智能体改为异步响应"
  }, {
    heading: "v22",
    content: "该版本于 2025 年 12 月 11 日发布。"
  }, {
    heading: "智能体问候模式",
    content: "该版本为 POST 创建对话式智能体接口新增 `llm.greeting_configs.mode` 字段，用于设置智能体问候语播报模式，目前支持以下选项："
  }, {
    heading: "智能体问候模式",
    content: '`"single_every"`：（默认）每次有用户加入空频道时，智能体都播报一次问候语。'
  }, {
    heading: "智能体问候模式",
    content: '`"single_first"`：仅首位用户加入空频道时，智能体播报一次问候语。'
  }, {
    heading: "新增-4",
    content: "POST 创建对话式智能体新增 `llm.greeting_configs.mode` 字段"
  }, {
    heading: "v21",
    content: "该版本于 2025 年 12 月 1 日发布。"
  }, {
    heading: "动态变量",
    content: "该版本为 POST 创建对话式智能体接口新增 `llm.template_variables` 字段，用于在智能体的 `system_messages`、`greeting_message`、`failure_message` 和 `parameters.silence_config.content` 的文本中插入变量。通过配置变量，对话式 AI 引擎可以自动将其替换为 `llm.template_variables` 中定义的对应值。"
  }, {
    heading: "自定义标签",
    content: "该版本为 POST 创建对话式智能体接口新增 `labels` 字段，用于让智能体携带自定义业务信息。这些自定义的标签会与智能体绑定，并在对话式 AI 引擎所有类型消息通知回调的 `payload` 字段中返回，用于实现自定义业务逻辑，例如标记活动 ID、客户分组、业务场景等。"
  }, {
    heading: "新增-5",
    content: "POST 创建对话式智能体新增"
  }, {
    heading: "新增-5",
    content: "`llm.template_variables`"
  }, {
    heading: "新增-5",
    content: "`labels`"
  }, {
    heading: "v20",
    content: "该版本于 2025 年 11 月 6 日发布。"
  }, {
    heading: "语音活动检测配置更变",
    content: "该版本废弃了 POST 创建对话式智能体接口的 `vad` 字段，其中的所有配置项已迁移至 `turn_detection` 字段。"
  }, {
    heading: "客户端组件字幕-api-更名",
    content: "该版本对客户端组件字幕 API 中所有使用了 `transcription` 命名的 API、参数等更名为 `transcript`，具体如下："
  }, {
    heading: "android-1",
    content: "`onTranscriptionUpdated` 更名为 `onTranscriptUpdated`"
  }, {
    heading: "android-1",
    content: "`TranscriptionRenderMode` 更名为 `TranscriptRenderMode`"
  }, {
    heading: "android-1",
    content: "`TranscriptionType` 更名为 `TranscriptType`"
  }, {
    heading: "android-1",
    content: "`TranscriptionStatus` 更名为 `TranscriptStatus`"
  }, {
    heading: "android-1",
    content: "`Transcription` 更名为 `Transcript`"
  }, {
    heading: "ios-1",
    content: "`onTranscriptionUpdated` 更名为 `onTranscriptUpdated`"
  }, {
    heading: "ios-1",
    content: "`TranscriptionRenderMode` 更名为 `TranscriptRenderMode`"
  }, {
    heading: "ios-1",
    content: "`TranscriptionType` 更名为 `TranscriptType`"
  }, {
    heading: "ios-1",
    content: "`TranscriptionStatus` 更名为 `TranscriptStatus`"
  }, {
    heading: "ios-1",
    content: "`Transcription` 更名为 `Transcript`"
  }, {
    heading: "web-1",
    content: "`TRANSCRIPTION_UPDATED` 更名为 `TRANSCRIPT_UPDATED`"
  }, {
    heading: "优雅退出",
    content: "该版本为 POST 创建对话式智能体接口新增 `parameters.farewell_config` 字段，用于设置智能体优雅退出功能。开启后，调用 POST 停止对话式智能体接口让智能体退出频道时，会确保智能体处于静默状态后再离开频道。"
  }, {
    heading: "有感声纹识别-beta",
    content: "该版本为选择性注意力锁定功能新增有感声纹识别模式，你可以在开始与智能体互动前，注册并上传最多 1 个声纹，后续互动期间，智能体将通过声纹识别用户身份，并抑制其他背景人声和环境噪音，确保对话专注度。如需体验有感声纹识别功能，请联系技术支持。"
  }, {
    heading: "关键词打断模式",
    content: '该版本为 POST 创建对话式智能体接口的 `turn_detection.interrupt_mode` 字段新增 `"keyword"` 选项，用于将智能体打断模式为关键词打断模式，你可以在 `turn_detection.interrupt_keywords` 字段中设置打断关键词。启用后，智能体听到列表中的关键词后会打断智能体当前行为。'
  }, {
    heading: "自适应打断模式",
    content: '该版本为 POST 创建对话式智能体接口的 `turn_detection.interrupt_mode` 字段新增 `"adaptive"` 选项，用于将智能体打断模式为自适应打断模式，启用后，智能体说话时，将自动调整打断相关参数，避免智能体被短暂人声误打断。'
  }, {
    heading: "minimax-tts-支持时间戳",
    content: "自该版本起，Minimax TTS 在文字转语音的同时会附带时间戳信息。该改进将有助于精确定位用户打断智能体说话的时间点，提升语音打断相关上下文信息的准确度。"
  }, {
    heading: "新增-ttsasr-可选",
    content: "该版本新增支持了以下供应商或模型，详见 POST 创建对话式智能体："
  }, {
    heading: "新增-ttsasr-可选",
    content: "新增 TTS："
  }, {
    heading: "新增-ttsasr-可选",
    content: "阿里云 CosyVoice TTS"
  }, {
    heading: "新增-ttsasr-可选",
    content: "火山引擎双向流式 TTS"
  }, {
    heading: "新增-ttsasr-可选",
    content: "阶跃星辰 TTS"
  }, {
    heading: "新增-ttsasr-可选",
    content: "新增 ASR："
  }, {
    heading: "新增-ttsasr-可选",
    content: "讯飞云传统语音转写识别服务"
  }, {
    heading: "新增-ttsasr-可选",
    content: "讯飞云语音识别大模型服务"
  }, {
    heading: "新增-ttsasr-可选",
    content: "讯飞云方言自由说识别服务"
  }, {
    heading: "废弃-2",
    content: "POST 创建对话式智能体废弃 `vad` 字段"
  }, {
    heading: "新增-6",
    content: "POST 创建对话式智能体新增："
  }, {
    heading: "新增-6",
    content: "`parameters.farewell_config`"
  }, {
    heading: "新增-6",
    content: "`turn_detection.interrupt_mode.adaptive`"
  }, {
    heading: "新增-6",
    content: "`turn_detection.interrupt_mode.keyword`"
  }, {
    heading: "新增-6",
    content: "`turn_detection.interrupt_keywords`"
  }, {
    heading: "新增-6",
    content: "`turn_detection.interrupt_duration_ms` （迁移自 `vad.interrupt_duration_ms`）"
  }, {
    heading: "新增-6",
    content: "`turn_detection.prefix_padding_ms` （迁移自 `vad.prefix_padding_ms`）"
  }, {
    heading: "新增-6",
    content: "`turn_detection.silence_duration_ms` （迁移自 `vad.silence_duration_ms`）"
  }, {
    heading: "新增-6",
    content: "`turn_detection.threshold` （迁移自 `vad.threshold`）"
  }, {
    heading: "v17",
    content: "该版本于 2025 年 7 月 29 日发布。"
  }, {
    heading: "数字人",
    content: "该版本新增数字人功能，启用后，智能体可以结合第三方数字人供应商提供的能力，为智能体生成口型准确、形象逼真的数字人形象，提升与 AI 对话互动的沉浸感。你可以在调用 POST 创建对话式智能体接口时，将 `avatar.enable` 设置为 `true`，并配置 `avatar.vendor` 和 `avatar.params` 字段来启用数字人功能。"
  }, {
    heading: "数字人",
    content: `> 注意
> 开启数字人功能将产生 RTC 视频通话费用，详见 RTC 计费说明。`
  }, {
    heading: "无感声纹识别",
    content: "选择性注意力锁定新增无感声纹识别功能，该功能赋予 AI 精准识别用户声纹特征的能力，有效区分不同说话者。用户只需在对话初期大声、清晰地说话，即可提升 AI 对声音的锁定效果。无感声纹识别不仅可以智能屏蔽 95% 的环境人声、噪声，对 AI 对话更准确、高效，同时也适用于多人与 AI 对话的场景，实现更加多元化的对话式 AI 响应与服务。如需体验选择性注意力锁定功能，请联系技术支持。"
  }, {
    heading: "发送图片消息beta",
    content: "对话式 AI 引擎客户端组件新增发送图片消息接口，支持将 URL 图片发送给大模型，并在后续与智能体对话时自动引用图片内容，让大模型根据图片内容生成更符合用户需求的回复。此外，本次客户端组件还新增了图片消息回执回调，用于确认图片消息发送是否成功。你可以参考发送多模态消息了解如何使用该功能。"
  }, {
    heading: "发送图片消息beta",
    content: `> 注意
>
> * 发送图片消息功能目前处于 Beta 阶段，限时免费。
> * 图片处理能力依赖于 LLM 供应商提供的能力，你需要确保你接入对话式 AI 引擎的 LLM 供应商支持图片处理。`
  }, {
    heading: "新增-7",
    content: "POST 创建对话式智能体新增"
  }, {
    heading: "新增-7",
    content: "`avatar.enable`"
  }, {
    heading: "新增-7",
    content: "`avatar.vendor`"
  }, {
    heading: "新增-7",
    content: "`avatar.params`"
  }, {
    heading: "新增-7",
    content: "客户端组件 API："
  }, {
    heading: "android-2",
    content: "`chat`\n\\- `onMessageReceiptUpdated`\n\\- `onMessageError`\n\\- `ChatMessage`\n\\- `ChatMessageType`\n\\- `ImageMessage`\n\\- `MessageReceipt`\n\\- `MessageError`"
  }, {
    heading: "ios-2",
    content: "`chat`\n\\- `onMessageReceiptUpdated`\n\\- `onMessageError`\n\\- `ChatMessage`\n\\- `ChatMessageType`\n\\- `ImageMessage`\n\\- `MessageReceipt`\n\\- `MessageError`"
  }, {
    heading: "web-2",
    content: "`chat`\n\\- `TMessageReceipt`\n\\- `EChatMessagePriority`\n\\- `EChatMessageType`\n\\- `IChatMessageBase`\n\\- `IChatMessageImage`\n\\- `EConversationalAIAPIEvents` 新增 `MESSAGE_RECEIPT_UPDATED` 和 `MESSAGE_ERROR` 事件\n\\- `EModuleType` 新增 `CONTEXT` 枚举值\n\\- `EAgentState` 新增 `SILENT` 枚举值"
  }, {
    heading: "v16",
    content: "该版本于 2025 年 7 月 1 日发布。"
  }, {
    heading: "支持-asr-供应商开放可选",
    content: "为了提高对话式智能体配置的灵活性，自该版本起，语音识别 (ASR) 供应商开放自定义选择。POST 创建对话式智能体接口新增 `asr.vendor` 字段和 `asr.params` 字段，分别用于设置 ASR 供应商和配置参数。当前支持配置："
  }, {
    heading: "支持-asr-供应商开放可选",
    content: "（默认）凤鸣 ASR"
  }, {
    heading: "支持-asr-供应商开放可选",
    content: "腾讯云 ASR"
  }, {
    heading: "支持-asr-供应商开放可选",
    content: "微软 ASR"
  }, {
    heading: "支持-asr-供应商开放可选",
    content: "同时，**旧版对话式 AI 引擎服务费用**拆分出**凤鸣 ASR 处理费用**，当 ASR 服务采用默认的凤鸣 ASR 时，总价维持之前的版本不变，即**旧版对话式 AI 引擎服务费用** = **新版对话式 AI 引擎服务费用** + **凤鸣 ASR 处理费用**，当 ASR 服务采用其他供应商时，仅收取**新版对话式 AI 引擎服务费用**，详见计费说明。"
  }, {
    heading: "客户端组件",
    content: "为了提高对话式智能体的开发效率，声网提供了一套灵活可扩展、标准化的对话式 AI 引擎客户端组件。该组件支持 iOS、Android、Web 平台，封装了多个场景化 API，你只需要调用这些 API 即可结合声网实时互动 (RTC) SDK 和实时消息 (RTM) SDK 的能力实现以下功能："
  }, {
    heading: "客户端组件",
    content: "实时字幕：将用户与智能体的对话内容实时以文本输出并显示到终端界面上。该版本全面升级了字幕组件，提供更完善的功能支持、更强的可扩展性、更好的错误处理、更完善的会话管理和更强大的通信机制。"
  }, {
    heading: "客户端组件",
    content: "打断智能体：打断智能体说话和思考流程，让智能体“闭嘴”。"
  }, {
    heading: "客户端组件",
    content: "监听智能体相关事件：监听智能体对话状态变更、性能指标和错误事件。"
  }, {
    heading: "客户端组件",
    content: "设置最佳音频参数：快速设置音频参数最佳实践，提升对话式智能体的对话体验。"
  }, {
    heading: "新增-8",
    content: "POST 创建对话式智能体新增"
  }, {
    heading: "新增-8",
    content: "`asr.vendor`"
  }, {
    heading: "新增-8",
    content: "`asr.params`"
  }, {
    heading: "新增-8",
    content: "`parameters.enable_metrics`"
  }, {
    heading: "新增-8",
    content: "`parameters.data_channel`"
  }, {
    heading: "新增-8",
    content: "`parameters.enable_error_message`"
  }, {
    heading: "新增-8",
    content: "客户端组件 API："
  }, {
    heading: "新增-8",
    content: "Android"
  }, {
    heading: "新增-8",
    content: "iOS"
  }, {
    heading: "新增-8",
    content: "Web"
  }, {
    heading: "v15",
    content: "该版本于 2025 年 6 月 6 日发布。"
  }, {
    heading: "tts-过滤",
    content: "POST 创建对话式智能体接口新增 `tts.skip_patterns` 字段，用于控制 TTS 模块朗读 LLM 返回文本时，是否跳过指定括号内的内容，避免智能体播报不必要的结构性提示信息如语气、动作描述、系统提示等，提升听感自然度与沉浸感。"
  }, {
    heading: "新增-9",
    content: "POST 创建对话式智能体接口新增 `tts.skip_patterns` 字段。"
  }, {
    heading: "v14",
    content: "该版本于 2025 年 5 月 26 日发布。"
  }, {
    heading: "升级必看-3",
    content: "v1.4 版本对 POST 创建对话式智能体接口进行了以下变更，请在升级到该版本后更新相关代码。"
  }, {
    heading: "rtm-认证管理",
    content: "该版本废弃了 `agent_rtm_uid` 字段。开启 RTM 服务后，智能体加入 RTM 频道使用的 Token 和用户 ID 不再需要单独配置，而是会复用 `token` 和 `agent_rtc_uid` 字段配置的 Token 和用户 ID。你可以参考 FAQ 了解如何生成同时具备 RTC 和 RTM 权限的 Token。"
  }, {
    heading: "静默配置",
    content: "该版本废弃了 POST 创建对话式智能体接口的 `silence_timeout` 和 `llm.silence_message` 字段，改用新增的 `parameters.silence_config` 字段配置智能体最大静默超时时长、静默提示方式和静默提示词。"
  }, {
    heading: "支持微软-tts",
    content: "自该版本起，对话式 AI 引擎支持微软 TTS，你可以在调用 POST 创建对话式智能体接口时，将 `tts.vendor` 设置为 `microsoft` 来接入微软 TTS。"
  }, {
    heading: "人声打断模式",
    content: "该版本为 POST 创建对话式智能体接口新增 `turn_detection.interrupt_mode` 字段，用于设置人声打断智能体行为的模式。当前支持以下三种模式："
  }, {
    heading: "人声打断模式",
    content: '`"interrupt"`：（默认）打断模式，人声立即打断智能体交互。智能体会终止当前交互，直接处理人声输入。'
  }, {
    heading: "人声打断模式",
    content: '`"append"`: 追加模式，人声不打断智能体。智能体会在当前交互结束后处理刚才收到的人声请求。'
  }, {
    heading: "人声打断模式",
    content: '`"ignore"`: 忽略模式，智能体忽略人声请求。如果智能体正在说话或思考中途收到人声，智能体会直接忽略并丢弃人声请求，不存入上下文。'
  }, {
    heading: "传递短期记忆",
    content: '该版本为 POST 创建对话式智能体接口新增 `llm.vendor` 字段，设置为 `"custom"` 后，智能体会在调用大模型时携带对话轮次 (`turn_id`) 和请求时间戳 (`timestamp`) 等信息。详见传递记忆内容给大模型。'
  }, {
    heading: "改进-4",
    content: "该版本进行了以下改进："
  }, {
    heading: "改进-4",
    content: "接入 Minimax TTS 时，新增支持透传 `emotion`、`latex_read`、`pronunciation_dict` 等字段，详见示例代码。"
  }, {
    heading: "改进-4",
    content: "和智能体对话期间，智能体的实时状态支持通过数据流回调至 RTC SDK。"
  }, {
    heading: "改进-4",
    content: "POST 更新智能体配置接口新增 `llm.system_messages` 和 `llm.params` 字段，用于更新智能体调用大模型时携带的系统提示词和配置参数。"
  }, {
    heading: "新增-10",
    content: "POST 创建对话式智能体新增："
  }, {
    heading: "新增-10",
    content: "`llm.vendor`"
  }, {
    heading: "新增-10",
    content: "`turn_detection.interrupt_mode`"
  }, {
    heading: "新增-10",
    content: "`parameters.silence_config`"
  }, {
    heading: "新增-10",
    content: "POST 更新智能体配置新增："
  }, {
    heading: "新增-10",
    content: "`llm.system_messages`"
  }, {
    heading: "新增-10",
    content: "`llm.params`"
  }, {
    heading: "废弃-3",
    content: "POST 创建对话式智能体废弃："
  }, {
    heading: "废弃-3",
    content: "`agent_rtm_uid`"
  }, {
    heading: "废弃-3",
    content: "`silence_timeout`"
  }, {
    heading: "废弃-3",
    content: "`llm.silence_message`"
  }, {
    heading: "v13",
    content: "该版本于 2025 年 4 月 16 日发布。"
  }, {
    heading: "加油包",
    content: "自该版本起，你可以在控制台购买加油包，用于抵扣对话式 AI 引擎服务的实际用量，同时享受一定折扣，详见计费说明。"
  }, {
    heading: "获取智能体短期记忆",
    content: "用户和智能体之间的对话消息、智能体创建和停止的时间戳等会被存储在智能体的短期记忆中。该版本新增了以下两种方式获取智能体的短期记忆："
  }, {
    heading: "获取智能体短期记忆",
    content: "调用 GET 获取智能体短期记忆接口获取指定运行中智能体的短期记忆。"
  }, {
    heading: "获取智能体短期记忆",
    content: "通过声网消息通知服务订阅智能体短期记忆事件，当智能体停止时，声网将通过 Webhook 回调的方式自动发送智能体的短期记忆到你的业务服务器。"
  }, {
    heading: "支持智谱-ai-大模型",
    content: "自该版本起，对话式 AI 引擎支持智谱 AI 大模型，你可以在调用 POST 创建对话式智能体接口时，将 `llm.url` 设置为智谱 AI 大模型的 API 地址来接入智谱 AI 大模型。"
  }, {
    heading: "自定义播报信息优先级",
    content: "该版本升级了 POST 播报自定义信息接口，新增了两种与播报行为打断逻辑相关的配置："
  }, {
    heading: "自定义播报信息优先级",
    content: "`priority`：配置播报行为的优先级。支持配置打断并播报（高）、追加播报（中）和空闲时播报（低）三种优先级。"
  }, {
    heading: "自定义播报信息优先级",
    content: "`interruptable`：配置是否允许人声打断智能体播报。"
  }, {
    heading: "发送静默提示消息",
    content: "POST 创建对话式智能体新增 `silence_timeout` 和 `llm.silence_message` 参数，用于设置智能体最大静默时间和静默提示消息。智能体创建成功，且用户加入频道后，智能体不处于倾听、思考或说话状态的持续时间称为智能体静默时间，静默时间达到设定值后，智能体将播报中填写的静默提示消息。"
  }, {
    heading: "新增-11",
    content: "GET 获取智能体短期记忆"
  }, {
    heading: "新增-11",
    content: "POST 创建对话式智能体新增 `silence_timeout` 和 `llm.silence_message` 参数"
  }, {
    heading: "新增-11",
    content: "POST 播报自定义信息新增 `priority` 和 `interruptable` 参数"
  }, {
    heading: "v12",
    content: "该版本于 2025 年 3 月 27 日发布。"
  }, {
    heading: "播报自定义信息",
    content: "该版本新增 POST 播报自定义信息接口，用于让指定智能体播报自定义消息。与智能体对话期间，调用该接口可以打断智能体说话和思考，并使用 TTS 模块立刻播报自定义消息。"
  }, {
    heading: "打断智能体",
    content: "该版本新增 POST 打断智能体接口，用于打断指定智能体的说话和思考流程，让智能体“闭嘴”。"
  }, {
    heading: "新增-12",
    content: "POST 播报自定义信息"
  }, {
    heading: "新增-12",
    content: "POST 打断智能体"
  }, {
    heading: "v11",
    content: "该版本于 2025 年 3 月 19 日发布。"
  }, {
    heading: "传递自定义信息",
    content: "POST 创建对话式智能体新增 `enable_rtm` 和 `agent_rtm_uid` 字段，用于为对话式智能体开启 RTM 功能。开启后，智能体可以结合 RTM SDK 提供的能力，获取用户的说话状态、选中的文字、个性签名、得分等自定义上下文信息，并将这些信息传递给智能体，引导智能体输出更符合用户需求的内容。详见传递自定义信息。"
  }, {
    heading: "改进-6",
    content: "为了帮助你快速接入自定义大模型，该版本上线了自定义大模型文档，你可以参考文档中的示例代码将自定义大模型接入到对话式 AI 引擎中，实现检索增强生成（RAG）、多模态、工具调用等进阶能力。"
  }, {
    heading: "新增-13",
    content: "POST 创建对话式智能体新增 `enable_rtm` 和 `agent_rtm_uid` 字段"
  }, {
    heading: "v10-ga",
    content: "该版本于 2025 年 3 月 5 日发布。"
  }, {
    heading: "计费说明",
    content: "声网对话式 AI 引擎于 2025 年 3 月 5 日正式 GA 发布，并公布了产品定价：声网对话式 AI 引擎的计费规则，详见计费说明。"
  }, {
    heading: "sdk-版本要求",
    content: `为了取得最好的对话体验效果，新版本声网对话式 AI 引擎建议与以下声网 SDK 搭配使用：
\\- 声网 RTC Native SDK，v4.5.1 及以上版本
\\- 声网 RTC Web SDK，4.23.2 及以上版本
\\- 声网 RTSA C SDK，1.9.x 及以上版本`
  }, {
    heading: "实时字幕",
    content: "自该版本起，声网提供开源的字幕处理模块，你只需要将模块集成到项目中，并调用模块的 API 即可快速实现实时字幕功能，将用户与智能体的对话内容实时以文本输出并显示到终端界面上，详见实时字幕。"
  }, {
    heading: "消息通知服务",
    content: "该版本新增对话式 AI 引擎消息通知服务，你可以在声网控制台设置消息通知服务地址，订阅智能体创建、停止或出错事件。当订阅的事件发生时，声网会调用你设置的回调地址，将事件详情发送至你的业务服务器。详见消息通知服务。"
  }, {
    heading: "热词-beta",
    content: "该版本新增热词功能，添加热词可以显著提升对话式 AI 引擎在专有词汇上的识别准确率。目前该功能处于 Beta 发布阶段，请联系技术支持开通。"
  }, {
    heading: "v10-public-beta",
    content: "该版本于 2025 年 2 月 18 日发布。本次发版聚焦于提供自然流畅、低延迟、高可靠的实时语音对话能力，助力开发者快速构建智能化、沉浸式的交互体验。"
  }, {
    heading: "集成必看-2",
    content: "为了取得最好的对话体验效果，已联系声网技术支持获取指定版本的实时互动 SDK。"
  }, {
    heading: "集成必看-2",
    content: "目前仅支持使用中文和英文与 AI 互动，其他语种需求联系技术支持反馈。"
  }, {
    heading: "集成必看-2",
    content: "目前单一 App ID 的并发用户数 (Peak Concurrent Users) 限制为 20， 如需提升配额，请联系技术支持申请。"
  }, {
    heading: "实时语音对话",
    content: "支持与 AI 进行自然流畅的实时语音对话，如同与真人交流，提供低延迟、极速响应的交互体验。"
  }, {
    heading: "端上降噪",
    content: "SDK 会智能识别和消除背景噪音，即使在嘈杂的公共场所，都能够确保声音传输的清晰度，为用户提供高质量的对话体验。"
  }, {
    heading: "背景人声抑制",
    content: "智能抑制背景人声，精准保留对话人清晰语音，确保在多人声环境中仍能实现清晰、专注的交互体验。"
  }, {
    heading: "优雅打断",
    content: "支持用户随时打断 AI 并快速响应，实现自然过渡和流畅对话，避免机械式交互。"
  }, {
    heading: "智能传输",
    content: "针对与 AI 智能体对话场景优化的传输算法，支持在弱网环境（如 80% 丢包率）下仍能稳定传输语音数据，确保对话的连续性和可靠性，适应多样化的复杂网络环境。"
  }, {
    heading: "灵活编排",
    content: "支持全球主流的 LLM（大语言模型）、TTS（语音合成） 适配，快速实现灵活编排，满足不同场景和业务需求，提供高度定制化的 AI 智能体对话解决方案。"
  }, {
    heading: "实时字幕-1",
    content: "支持用户与 AI 智能体的对话内容实时以文本输出并显示到终端界面上。"
  }, {
    heading: "多平台支持",
    content: "支持 iOS、Android、Web、 小程序、以及各类嵌入式硬件等客户端，提供跨平台的一致性和无缝集成体验，满足不同场景的应用需求。"
  }],
  headings: [{
    id: "v26",
    content: "v2.6"
  }, {
    id: "升级必看",
    content: "升级必看"
  }, {
    id: "对话检测与打断能力架构重构",
    content: "对话检测与打断能力架构重构"
  }, {
    id: "新增特性",
    content: "新增特性"
  }, {
    id: "配置智能体问候语播报延迟时间",
    content: "配置智能体问候语播报延迟时间"
  }, {
    id: "自定义-llm-请求头信息",
    content: "自定义 LLM 请求头信息"
  }, {
    id: "新增智能体状态回调",
    content: "新增智能体状态回调"
  }, {
    id: "发送自定义指令",
    content: "发送自定义指令"
  }, {
    id: "改进",
    content: "改进"
  }, {
    id: "api-变更",
    content: "API 变更"
  }, {
    id: "废弃",
    content: "废弃"
  }, {
    id: "新增",
    content: "新增"
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
    id: "v25",
    content: "v2.5"
  }, {
    id: "新增特性-1",
    content: "新增特性"
  }, {
    id: "优雅打断支持判断对话暂停意图",
    content: "优雅打断支持判断对话暂停意图"
  }, {
    id: "实时更新-tts-参数",
    content: "实时更新 TTS 参数"
  }, {
    id: "查询对话轮次信息",
    content: "查询对话轮次信息"
  }, {
    id: "api-变更-1",
    content: "API 变更"
  }, {
    id: "新增-1",
    content: "新增"
  }, {
    id: "v24",
    content: "v2.4"
  }, {
    id: "新增特性-2",
    content: "新增特性"
  }, {
    id: "接入-mcp-服务器",
    content: "接入 MCP 服务器"
  }, {
    id: "垫词功能-beta",
    content: "垫词功能 (Beta)"
  }, {
    id: "改进-1",
    content: "改进"
  }, {
    id: "turn_detection-层级优化",
    content: "turn_detection 层级优化"
  }, {
    id: "api-变更-2",
    content: "API 变更"
  }, {
    id: "废弃-1",
    content: "废弃"
  }, {
    id: "新增-2",
    content: "新增"
  }, {
    id: "v23",
    content: "v2.3"
  }, {
    id: "新增特性-3",
    content: "新增特性"
  }, {
    id: "配置-llm-响应是否可打断",
    content: "配置 LLM 响应是否可打断"
  }, {
    id: "rtc-媒体内容加密",
    content: "RTC 媒体内容加密"
  }, {
    id: "改进-2",
    content: "改进"
  }, {
    id: "api-变更-3",
    content: "API 变更"
  }, {
    id: "新增-3",
    content: "新增"
  }, {
    id: "修改",
    content: "修改"
  }, {
    id: "v22",
    content: "v2.2"
  }, {
    id: "新增特性-4",
    content: "新增特性"
  }, {
    id: "智能体问候模式",
    content: "智能体问候模式"
  }, {
    id: "api-变更-4",
    content: "API 变更"
  }, {
    id: "新增-4",
    content: "新增"
  }, {
    id: "v21",
    content: "v2.1"
  }, {
    id: "新增特性-5",
    content: "新增特性"
  }, {
    id: "动态变量",
    content: "动态变量"
  }, {
    id: "自定义标签",
    content: "自定义标签"
  }, {
    id: "api-变更-5",
    content: "API 变更"
  }, {
    id: "新增-5",
    content: "新增"
  }, {
    id: "v20",
    content: "v2.0"
  }, {
    id: "升级必看-1",
    content: "升级必看"
  }, {
    id: "语音活动检测配置更变",
    content: "语音活动检测配置更变"
  }, {
    id: "客户端组件字幕-api-更名",
    content: "客户端组件字幕 API 更名"
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
    id: "新增特性-6",
    content: "新增特性"
  }, {
    id: "优雅退出",
    content: "优雅退出"
  }, {
    id: "有感声纹识别-beta",
    content: "有感声纹识别 (Beta)"
  }, {
    id: "关键词打断模式",
    content: "关键词打断模式"
  }, {
    id: "自适应打断模式",
    content: "自适应打断模式"
  }, {
    id: "改进-3",
    content: "改进"
  }, {
    id: "minimax-tts-支持时间戳",
    content: "MiniMax TTS 支持时间戳"
  }, {
    id: "新增-ttsasr-可选",
    content: "新增 TTS/ASR 可选"
  }, {
    id: "api-变更-6",
    content: "API 变更"
  }, {
    id: "废弃-2",
    content: "废弃"
  }, {
    id: "新增-6",
    content: "新增"
  }, {
    id: "v17",
    content: "v1.7"
  }, {
    id: "新增特性-7",
    content: "新增特性"
  }, {
    id: "数字人",
    content: "数字人"
  }, {
    id: "无感声纹识别",
    content: "无感声纹识别"
  }, {
    id: "发送图片消息beta",
    content: "发送图片消息（Beta）"
  }, {
    id: "api-变更-7",
    content: "API 变更"
  }, {
    id: "新增-7",
    content: "新增"
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
    id: "v16",
    content: "v1.6"
  }, {
    id: "升级必看-2",
    content: "升级必看"
  }, {
    id: "支持-asr-供应商开放可选",
    content: "支持 ASR 供应商开放可选"
  }, {
    id: "新增特性-8",
    content: "新增特性"
  }, {
    id: "客户端组件",
    content: "客户端组件"
  }, {
    id: "api-变更-8",
    content: "API 变更"
  }, {
    id: "新增-8",
    content: "新增"
  }, {
    id: "v15",
    content: "v1.5"
  }, {
    id: "新增特性-9",
    content: "新增特性"
  }, {
    id: "tts-过滤",
    content: "TTS 过滤"
  }, {
    id: "api-变更-9",
    content: "API 变更"
  }, {
    id: "新增-9",
    content: "新增"
  }, {
    id: "v14",
    content: "v1.4"
  }, {
    id: "升级必看-3",
    content: "升级必看"
  }, {
    id: "rtm-认证管理",
    content: "RTM 认证管理"
  }, {
    id: "静默配置",
    content: "静默配置"
  }, {
    id: "新增特性-10",
    content: "新增特性"
  }, {
    id: "支持微软-tts",
    content: "支持微软 TTS"
  }, {
    id: "人声打断模式",
    content: "人声打断模式"
  }, {
    id: "传递短期记忆",
    content: "传递短期记忆"
  }, {
    id: "改进-4",
    content: "改进"
  }, {
    id: "api-变更-10",
    content: "API 变更"
  }, {
    id: "新增-10",
    content: "新增"
  }, {
    id: "废弃-3",
    content: "废弃"
  }, {
    id: "v13",
    content: "v1.3"
  }, {
    id: "集成必看",
    content: "集成必看"
  }, {
    id: "加油包",
    content: "加油包"
  }, {
    id: "新增特性-11",
    content: "新增特性"
  }, {
    id: "获取智能体短期记忆",
    content: "获取智能体短期记忆"
  }, {
    id: "支持智谱-ai-大模型",
    content: "支持智谱 AI 大模型"
  }, {
    id: "改进-5",
    content: "改进"
  }, {
    id: "自定义播报信息优先级",
    content: "自定义播报信息优先级"
  }, {
    id: "发送静默提示消息",
    content: "发送静默提示消息"
  }, {
    id: "api-变更-11",
    content: "API 变更"
  }, {
    id: "新增-11",
    content: "新增"
  }, {
    id: "v12",
    content: "v1.2"
  }, {
    id: "新增特性-12",
    content: "新增特性"
  }, {
    id: "播报自定义信息",
    content: "播报自定义信息"
  }, {
    id: "打断智能体",
    content: "打断智能体"
  }, {
    id: "api-变更-12",
    content: "API 变更"
  }, {
    id: "新增-12",
    content: "新增"
  }, {
    id: "v11",
    content: "v1.1"
  }, {
    id: "新增特性-13",
    content: "新增特性"
  }, {
    id: "传递自定义信息",
    content: "传递自定义信息"
  }, {
    id: "改进-6",
    content: "改进"
  }, {
    id: "api-变更-13",
    content: "API 变更"
  }, {
    id: "新增-13",
    content: "新增"
  }, {
    id: "v10-ga",
    content: "v1.0 GA"
  }, {
    id: "集成必看-1",
    content: "集成必看"
  }, {
    id: "计费说明",
    content: "计费说明"
  }, {
    id: "sdk-版本要求",
    content: "SDK 版本要求"
  }, {
    id: "新增特性-14",
    content: "新增特性"
  }, {
    id: "实时字幕",
    content: "实时字幕"
  }, {
    id: "消息通知服务",
    content: "消息通知服务"
  }, {
    id: "热词-beta",
    content: "热词 Beta"
  }, {
    id: "v10-public-beta",
    content: "v1.0 Public Beta"
  }, {
    id: "集成必看-2",
    content: "集成必看"
  }, {
    id: "核心功能",
    content: "核心功能"
  }, {
    id: "实时语音对话",
    content: "实时语音对话"
  }, {
    id: "端上降噪",
    content: "端上降噪"
  }, {
    id: "背景人声抑制",
    content: "背景人声抑制"
  }, {
    id: "优雅打断",
    content: "优雅打断"
  }, {
    id: "智能传输",
    content: "智能传输"
  }, {
    id: "灵活编排",
    content: "灵活编排"
  }, {
    id: "实时字幕-1",
    content: "实时字幕"
  }, {
    id: "多平台支持",
    content: "多平台支持"
  }]
};
export let toc = [{
  depth: 2,
  url: "#v26",
  title: _jsx(_Fragment, {
    children: "v2.6"
  })
}, {
  depth: 3,
  url: "#升级必看",
  title: _jsx(_Fragment, {
    children: "升级必看"
  })
}, {
  depth: 4,
  url: "#对话检测与打断能力架构重构",
  title: _jsx(_Fragment, {
    children: "对话检测与打断能力架构重构"
  })
}, {
  depth: 3,
  url: "#新增特性",
  title: _jsx(_Fragment, {
    children: "新增特性"
  })
}, {
  depth: 4,
  url: "#配置智能体问候语播报延迟时间",
  title: _jsx(_Fragment, {
    children: "配置智能体问候语播报延迟时间"
  })
}, {
  depth: 4,
  url: "#自定义-llm-请求头信息",
  title: _jsx(_Fragment, {
    children: "自定义 LLM 请求头信息"
  })
}, {
  depth: 4,
  url: "#新增智能体状态回调",
  title: _jsx(_Fragment, {
    children: "新增智能体状态回调"
  })
}, {
  depth: 4,
  url: "#发送自定义指令",
  title: _jsx(_Fragment, {
    children: "发送自定义指令"
  })
}, {
  depth: 3,
  url: "#改进",
  title: _jsx(_Fragment, {
    children: "改进"
  })
}, {
  depth: 3,
  url: "#api-变更",
  title: _jsx(_Fragment, {
    children: "API 变更"
  })
}, {
  depth: 4,
  url: "#废弃",
  title: _jsx(_Fragment, {
    children: "废弃"
  })
}, {
  depth: 4,
  url: "#新增",
  title: _jsx(_Fragment, {
    children: "新增"
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
  url: "#v25",
  title: _jsx(_Fragment, {
    children: "v2.5"
  })
}, {
  depth: 3,
  url: "#新增特性-1",
  title: _jsx(_Fragment, {
    children: "新增特性"
  })
}, {
  depth: 4,
  url: "#优雅打断支持判断对话暂停意图",
  title: _jsx(_Fragment, {
    children: "优雅打断支持判断对话暂停意图"
  })
}, {
  depth: 4,
  url: "#实时更新-tts-参数",
  title: _jsx(_Fragment, {
    children: "实时更新 TTS 参数"
  })
}, {
  depth: 4,
  url: "#查询对话轮次信息",
  title: _jsx(_Fragment, {
    children: "查询对话轮次信息"
  })
}, {
  depth: 3,
  url: "#api-变更-1",
  title: _jsx(_Fragment, {
    children: "API 变更"
  })
}, {
  depth: 4,
  url: "#新增-1",
  title: _jsx(_Fragment, {
    children: "新增"
  })
}, {
  depth: 2,
  url: "#v24",
  title: _jsx(_Fragment, {
    children: "v2.4"
  })
}, {
  depth: 3,
  url: "#新增特性-2",
  title: _jsx(_Fragment, {
    children: "新增特性"
  })
}, {
  depth: 4,
  url: "#接入-mcp-服务器",
  title: _jsx(_Fragment, {
    children: "接入 MCP 服务器"
  })
}, {
  depth: 4,
  url: "#垫词功能-beta",
  title: _jsx(_Fragment, {
    children: "垫词功能 (Beta)"
  })
}, {
  depth: 3,
  url: "#改进-1",
  title: _jsx(_Fragment, {
    children: "改进"
  })
}, {
  depth: 4,
  url: "#turn_detection-层级优化",
  title: _jsx(_Fragment, {
    children: "turn_detection 层级优化"
  })
}, {
  depth: 3,
  url: "#api-变更-2",
  title: _jsx(_Fragment, {
    children: "API 变更"
  })
}, {
  depth: 4,
  url: "#废弃-1",
  title: _jsx(_Fragment, {
    children: "废弃"
  })
}, {
  depth: 4,
  url: "#新增-2",
  title: _jsx(_Fragment, {
    children: "新增"
  })
}, {
  depth: 2,
  url: "#v23",
  title: _jsx(_Fragment, {
    children: "v2.3"
  })
}, {
  depth: 3,
  url: "#新增特性-3",
  title: _jsx(_Fragment, {
    children: "新增特性"
  })
}, {
  depth: 4,
  url: "#配置-llm-响应是否可打断",
  title: _jsx(_Fragment, {
    children: "配置 LLM 响应是否可打断"
  })
}, {
  depth: 4,
  url: "#rtc-媒体内容加密",
  title: _jsx(_Fragment, {
    children: "RTC 媒体内容加密"
  })
}, {
  depth: 3,
  url: "#改进-2",
  title: _jsx(_Fragment, {
    children: "改进"
  })
}, {
  depth: 3,
  url: "#api-变更-3",
  title: _jsx(_Fragment, {
    children: "API 变更"
  })
}, {
  depth: 4,
  url: "#新增-3",
  title: _jsx(_Fragment, {
    children: "新增"
  })
}, {
  depth: 4,
  url: "#修改",
  title: _jsx(_Fragment, {
    children: "修改"
  })
}, {
  depth: 2,
  url: "#v22",
  title: _jsx(_Fragment, {
    children: "v2.2"
  })
}, {
  depth: 3,
  url: "#新增特性-4",
  title: _jsx(_Fragment, {
    children: "新增特性"
  })
}, {
  depth: 4,
  url: "#智能体问候模式",
  title: _jsx(_Fragment, {
    children: "智能体问候模式"
  })
}, {
  depth: 3,
  url: "#api-变更-4",
  title: _jsx(_Fragment, {
    children: "API 变更"
  })
}, {
  depth: 4,
  url: "#新增-4",
  title: _jsx(_Fragment, {
    children: "新增"
  })
}, {
  depth: 2,
  url: "#v21",
  title: _jsx(_Fragment, {
    children: "v2.1"
  })
}, {
  depth: 3,
  url: "#新增特性-5",
  title: _jsx(_Fragment, {
    children: "新增特性"
  })
}, {
  depth: 4,
  url: "#动态变量",
  title: _jsx(_Fragment, {
    children: "动态变量"
  })
}, {
  depth: 4,
  url: "#自定义标签",
  title: _jsx(_Fragment, {
    children: "自定义标签"
  })
}, {
  depth: 3,
  url: "#api-变更-5",
  title: _jsx(_Fragment, {
    children: "API 变更"
  })
}, {
  depth: 4,
  url: "#新增-5",
  title: _jsx(_Fragment, {
    children: "新增"
  })
}, {
  depth: 2,
  url: "#v20",
  title: _jsx(_Fragment, {
    children: "v2.0"
  })
}, {
  depth: 3,
  url: "#升级必看-1",
  title: _jsx(_Fragment, {
    children: "升级必看"
  })
}, {
  depth: 4,
  url: "#语音活动检测配置更变",
  title: _jsx(_Fragment, {
    children: "语音活动检测配置更变"
  })
}, {
  depth: 4,
  url: "#客户端组件字幕-api-更名",
  title: _jsx(_Fragment, {
    children: "客户端组件字幕 API 更名"
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
  url: "#新增特性-6",
  title: _jsx(_Fragment, {
    children: "新增特性"
  })
}, {
  depth: 4,
  url: "#优雅退出",
  title: _jsx(_Fragment, {
    children: "优雅退出"
  })
}, {
  depth: 4,
  url: "#有感声纹识别-beta",
  title: _jsx(_Fragment, {
    children: "有感声纹识别 (Beta)"
  })
}, {
  depth: 4,
  url: "#关键词打断模式",
  title: _jsx(_Fragment, {
    children: "关键词打断模式"
  })
}, {
  depth: 4,
  url: "#自适应打断模式",
  title: _jsx(_Fragment, {
    children: "自适应打断模式"
  })
}, {
  depth: 3,
  url: "#改进-3",
  title: _jsx(_Fragment, {
    children: "改进"
  })
}, {
  depth: 4,
  url: "#minimax-tts-支持时间戳",
  title: _jsx(_Fragment, {
    children: "MiniMax TTS 支持时间戳"
  })
}, {
  depth: 4,
  url: "#新增-ttsasr-可选",
  title: _jsx(_Fragment, {
    children: "新增 TTS/ASR 可选"
  })
}, {
  depth: 3,
  url: "#api-变更-6",
  title: _jsx(_Fragment, {
    children: "API 变更"
  })
}, {
  depth: 4,
  url: "#废弃-2",
  title: _jsx(_Fragment, {
    children: "废弃"
  })
}, {
  depth: 4,
  url: "#新增-6",
  title: _jsx(_Fragment, {
    children: "新增"
  })
}, {
  depth: 2,
  url: "#v17",
  title: _jsx(_Fragment, {
    children: "v1.7"
  })
}, {
  depth: 3,
  url: "#新增特性-7",
  title: _jsx(_Fragment, {
    children: "新增特性"
  })
}, {
  depth: 4,
  url: "#数字人",
  title: _jsx(_Fragment, {
    children: "数字人"
  })
}, {
  depth: 4,
  url: "#无感声纹识别",
  title: _jsx(_Fragment, {
    children: "无感声纹识别"
  })
}, {
  depth: 4,
  url: "#发送图片消息beta",
  title: _jsx(_Fragment, {
    children: "发送图片消息（Beta）"
  })
}, {
  depth: 3,
  url: "#api-变更-7",
  title: _jsx(_Fragment, {
    children: "API 变更"
  })
}, {
  depth: 4,
  url: "#新增-7",
  title: _jsx(_Fragment, {
    children: "新增"
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
  depth: 2,
  url: "#v16",
  title: _jsx(_Fragment, {
    children: "v1.6"
  })
}, {
  depth: 3,
  url: "#升级必看-2",
  title: _jsx(_Fragment, {
    children: "升级必看"
  })
}, {
  depth: 4,
  url: "#支持-asr-供应商开放可选",
  title: _jsx(_Fragment, {
    children: "支持 ASR 供应商开放可选"
  })
}, {
  depth: 3,
  url: "#新增特性-8",
  title: _jsx(_Fragment, {
    children: "新增特性"
  })
}, {
  depth: 4,
  url: "#客户端组件",
  title: _jsx(_Fragment, {
    children: "客户端组件"
  })
}, {
  depth: 3,
  url: "#api-变更-8",
  title: _jsx(_Fragment, {
    children: "API 变更"
  })
}, {
  depth: 4,
  url: "#新增-8",
  title: _jsx(_Fragment, {
    children: "新增"
  })
}, {
  depth: 2,
  url: "#v15",
  title: _jsx(_Fragment, {
    children: "v1.5"
  })
}, {
  depth: 3,
  url: "#新增特性-9",
  title: _jsx(_Fragment, {
    children: "新增特性"
  })
}, {
  depth: 4,
  url: "#tts-过滤",
  title: _jsx(_Fragment, {
    children: "TTS 过滤"
  })
}, {
  depth: 3,
  url: "#api-变更-9",
  title: _jsx(_Fragment, {
    children: "API 变更"
  })
}, {
  depth: 4,
  url: "#新增-9",
  title: _jsx(_Fragment, {
    children: "新增"
  })
}, {
  depth: 2,
  url: "#v14",
  title: _jsx(_Fragment, {
    children: "v1.4"
  })
}, {
  depth: 3,
  url: "#升级必看-3",
  title: _jsx(_Fragment, {
    children: "升级必看"
  })
}, {
  depth: 4,
  url: "#rtm-认证管理",
  title: _jsx(_Fragment, {
    children: "RTM 认证管理"
  })
}, {
  depth: 4,
  url: "#静默配置",
  title: _jsx(_Fragment, {
    children: "静默配置"
  })
}, {
  depth: 3,
  url: "#新增特性-10",
  title: _jsx(_Fragment, {
    children: "新增特性"
  })
}, {
  depth: 4,
  url: "#支持微软-tts",
  title: _jsx(_Fragment, {
    children: "支持微软 TTS"
  })
}, {
  depth: 4,
  url: "#人声打断模式",
  title: _jsx(_Fragment, {
    children: "人声打断模式"
  })
}, {
  depth: 4,
  url: "#传递短期记忆",
  title: _jsx(_Fragment, {
    children: "传递短期记忆"
  })
}, {
  depth: 3,
  url: "#改进-4",
  title: _jsx(_Fragment, {
    children: "改进"
  })
}, {
  depth: 3,
  url: "#api-变更-10",
  title: _jsx(_Fragment, {
    children: "API 变更"
  })
}, {
  depth: 4,
  url: "#新增-10",
  title: _jsx(_Fragment, {
    children: "新增"
  })
}, {
  depth: 4,
  url: "#废弃-3",
  title: _jsx(_Fragment, {
    children: "废弃"
  })
}, {
  depth: 2,
  url: "#v13",
  title: _jsx(_Fragment, {
    children: "v1.3"
  })
}, {
  depth: 3,
  url: "#集成必看",
  title: _jsx(_Fragment, {
    children: "集成必看"
  })
}, {
  depth: 4,
  url: "#加油包",
  title: _jsx(_Fragment, {
    children: "加油包"
  })
}, {
  depth: 3,
  url: "#新增特性-11",
  title: _jsx(_Fragment, {
    children: "新增特性"
  })
}, {
  depth: 4,
  url: "#获取智能体短期记忆",
  title: _jsx(_Fragment, {
    children: "获取智能体短期记忆"
  })
}, {
  depth: 4,
  url: "#支持智谱-ai-大模型",
  title: _jsx(_Fragment, {
    children: "支持智谱 AI 大模型"
  })
}, {
  depth: 3,
  url: "#改进-5",
  title: _jsx(_Fragment, {
    children: "改进"
  })
}, {
  depth: 4,
  url: "#自定义播报信息优先级",
  title: _jsx(_Fragment, {
    children: "自定义播报信息优先级"
  })
}, {
  depth: 4,
  url: "#发送静默提示消息",
  title: _jsx(_Fragment, {
    children: "发送静默提示消息"
  })
}, {
  depth: 3,
  url: "#api-变更-11",
  title: _jsx(_Fragment, {
    children: "API 变更"
  })
}, {
  depth: 4,
  url: "#新增-11",
  title: _jsx(_Fragment, {
    children: "新增"
  })
}, {
  depth: 2,
  url: "#v12",
  title: _jsx(_Fragment, {
    children: "v1.2"
  })
}, {
  depth: 3,
  url: "#新增特性-12",
  title: _jsx(_Fragment, {
    children: "新增特性"
  })
}, {
  depth: 4,
  url: "#播报自定义信息",
  title: _jsx(_Fragment, {
    children: "播报自定义信息"
  })
}, {
  depth: 4,
  url: "#打断智能体",
  title: _jsx(_Fragment, {
    children: "打断智能体"
  })
}, {
  depth: 3,
  url: "#api-变更-12",
  title: _jsx(_Fragment, {
    children: "API 变更"
  })
}, {
  depth: 4,
  url: "#新增-12",
  title: _jsx(_Fragment, {
    children: "新增"
  })
}, {
  depth: 2,
  url: "#v11",
  title: _jsx(_Fragment, {
    children: "v1.1"
  })
}, {
  depth: 3,
  url: "#新增特性-13",
  title: _jsx(_Fragment, {
    children: "新增特性"
  })
}, {
  depth: 4,
  url: "#传递自定义信息",
  title: _jsx(_Fragment, {
    children: "传递自定义信息"
  })
}, {
  depth: 3,
  url: "#改进-6",
  title: _jsx(_Fragment, {
    children: "改进"
  })
}, {
  depth: 3,
  url: "#api-变更-13",
  title: _jsx(_Fragment, {
    children: "API 变更"
  })
}, {
  depth: 4,
  url: "#新增-13",
  title: _jsx(_Fragment, {
    children: "新增"
  })
}, {
  depth: 2,
  url: "#v10-ga",
  title: _jsx(_Fragment, {
    children: "v1.0 GA"
  })
}, {
  depth: 3,
  url: "#集成必看-1",
  title: _jsx(_Fragment, {
    children: "集成必看"
  })
}, {
  depth: 4,
  url: "#计费说明",
  title: _jsx(_Fragment, {
    children: "计费说明"
  })
}, {
  depth: 4,
  url: "#sdk-版本要求",
  title: _jsx(_Fragment, {
    children: "SDK 版本要求"
  })
}, {
  depth: 3,
  url: "#新增特性-14",
  title: _jsx(_Fragment, {
    children: "新增特性"
  })
}, {
  depth: 4,
  url: "#实时字幕",
  title: _jsx(_Fragment, {
    children: "实时字幕"
  })
}, {
  depth: 4,
  url: "#消息通知服务",
  title: _jsx(_Fragment, {
    children: "消息通知服务"
  })
}, {
  depth: 4,
  url: "#热词-beta",
  title: _jsx(_Fragment, {
    children: "热词 Beta"
  })
}, {
  depth: 2,
  url: "#v10-public-beta",
  title: _jsx(_Fragment, {
    children: "v1.0 Public Beta"
  })
}, {
  depth: 3,
  url: "#集成必看-2",
  title: _jsx(_Fragment, {
    children: "集成必看"
  })
}, {
  depth: 3,
  url: "#核心功能",
  title: _jsx(_Fragment, {
    children: "核心功能"
  })
}, {
  depth: 4,
  url: "#实时语音对话",
  title: _jsx(_Fragment, {
    children: "实时语音对话"
  })
}, {
  depth: 4,
  url: "#端上降噪",
  title: _jsx(_Fragment, {
    children: "端上降噪"
  })
}, {
  depth: 4,
  url: "#背景人声抑制",
  title: _jsx(_Fragment, {
    children: "背景人声抑制"
  })
}, {
  depth: 4,
  url: "#优雅打断",
  title: _jsx(_Fragment, {
    children: "优雅打断"
  })
}, {
  depth: 4,
  url: "#智能传输",
  title: _jsx(_Fragment, {
    children: "智能传输"
  })
}, {
  depth: 4,
  url: "#灵活编排",
  title: _jsx(_Fragment, {
    children: "灵活编排"
  })
}, {
  depth: 4,
  url: "#实时字幕-1",
  title: _jsx(_Fragment, {
    children: "实时字幕"
  })
}, {
  depth: 4,
  url: "#多平台支持",
  title: _jsx(_Fragment, {
    children: "多平台支持"
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
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "v26",
      children: "v2.6"
    }), `
`, _jsx(_components.p, {
      children: "该版本于 2026 年 4 月 22 日发布。"
    }), `
`, _jsx(_components.h3, {
      id: "升级必看",
      children: "升级必看"
    }), `
`, _jsx(_components.h4, {
      id: "对话检测与打断能力架构重构",
      children: "对话检测与打断能力架构重构"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本从原有 ", _jsx(_components.code, {
        children: "turn_detection"
      }), " 字段剥离了", _jsx(_components.strong, {
        children: "打断决策"
      }), "能力，专注于", _jsx(_components.strong, {
        children: "轮次检测"
      }), "；同时全新新增同级配置模块 ", _jsx(_components.code, {
        children: "interruption"
      }), "，统一管理全局打断策略。"]
    }), `
`, _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: [_jsx(_components.code, {
          children: "turn_detection"
        }), " 能力精简"]
      })
    }), `
`, _jsxs(_components.p, {
      children: ["原 ", _jsx(_components.code, {
        children: "turn_detection"
      }), " 字段承载语音检测、语义判定、打断开关、关键词打断等逻辑，2.6 版本仅保留纯对话轮次检测能力，专注负责用户开始说话（SOS）、结束说话（EOS）的 VAD 语音检测与语义识别，只输出语音事件信号，不再承载任何业务层打断控制逻辑。"]
    }), `
`, _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: ["新增 ", _jsx(_components.code, {
          children: "interruption"
        }), " 全局打断模块"]
      })
    }), `
`, _jsxs(_components.p, {
      children: ["该版本为 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口新增 ", _jsx(_components.code, {
        children: "properties.interruption"
      }), " 字段，用于统一配置智能体被用户打断的行为策略。该字段将原有内嵌在 ", _jsx(_components.code, {
        children: "turn_detection"
      }), " 中的打断开关与执行能力统一抽离迁移至该模块；支持全局一键开关打断功能，提供人声触发打断、关键词打断两种模式，同时可配置关闭打断后的后置策略（追加录入 / 直接忽略），适配更多业务场景的防误打断、免打扰交互诉求。"]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "配置迁移说明"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["原 V2.5 版本中 ", _jsx(_components.code, {
        children: "turn_detection.config.start_of_speech"
      }), " 下的 ", _jsx(_components.code, {
        children: "keyword"
      }), " 和 ", _jsx(_components.code, {
        children: "disabled"
      }), " 打断模式及对应配置字段废弃，需迁移至 ", _jsx(_components.code, {
        children: "interruption"
      }), " 同级配置中完成适配升级。"]
    }), `
`, _jsx(_components.h3, {
      id: "新增特性",
      children: "新增特性"
    }), `
`, _jsx(_components.h4, {
      id: "配置智能体问候语播报延迟时间",
      children: "配置智能体问候语播报延迟时间"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本为 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口新增 ", _jsx(_components.code, {
        children: "llm.greeting_configs.delay_ms"
      }), " 字段，用于配置智能体问候语的播报延迟时间。配置后，智能体问候语会在用户加入频道后等待指定时间再播报。该功能可用于确保用户正常听到问候语。"]
    }), `
`, _jsx(_components.h4, {
      id: "自定义-llm-请求头信息",
      children: "自定义 LLM 请求头信息"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本为 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口新增 ", _jsx(_components.code, {
        children: "llm.headers"
      }), " 字段，用于请求 LLM 时附带自定义请求 Header。如果你接入的 LLM 服务要求在请求 Header 中携带特定信息，如租户标识、业务自定义字段等业务相关信息，你可以通过该字段透传这些信息。"]
    }), `
`, _jsx(_components.h4, {
      id: "新增智能体状态回调",
      children: "新增智能体状态回调"
    }), `
`, _jsxs(_components.p, {
      children: ["对话式 AI 引擎客户端组件新增三个用于分别监听智能体的倾听 (Listening)、思考 (Thinking) 和说话 (Speaking) 状态变化的细粒度状态回调。这些回调是对原有智能体状态变化回调 (", _jsx(_components.code, {
        children: "onAgentStateChanged"
      }), ") 的补充，便于你更精细地驱动界面状态和业务逻辑。"]
    }), `
`, _jsx(_components.h4, {
      id: "发送自定义指令",
      children: "发送自定义指令"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本新增 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/think.md",
        children: "POST 发送自定义指令"
      }), "接口，用于将一段文本作为用户输入注入现有对话链路，并由对话式 AI 引擎继续按照普通用户输入的处理逻辑进行推理和响应。该能力适用于以下场景："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "隐式指令注入：在不通过 ASR 模块处理语音输入的情况下静默注入业务提示或前置设定。"
      }), `
`, _jsx(_components.li, {
        children: "客户端事件触发：将按钮点击、页面切换等客户端事件转换为文本注入，让智能体结合当前对话状态做出响应。"
      }), `
`, _jsx(_components.li, {
        children: "语音与文本协同：在用户说话的同时补充文本信息，由对话式 AI 引擎合并输入后，LLM 统一处理。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["该接口支持通过 ", _jsx(_components.code, {
        children: "on_listening_action"
      }), "、", _jsx(_components.code, {
        children: "on_thinking_action"
      }), " 和 ", _jsx(_components.code, {
        children: "on_speaking_action"
      }), " 分别配置智能体处于不同状态时的处理方式："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "inject"
        }), "：注入当前轮次，不打断当前轮次。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "interrupt"
        }), "：打断当前状态，并发起新一轮对话。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "ignore"
        }), "：忽略本次请求。"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "改进",
      children: "改进"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本为消息通知服务所有事件回调和 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/query.md",
        children: "GET 查询智能体状态"
      }), "接口响应体新增 ", _jsx(_components.code, {
        children: "name"
      }), " 字段，用于返回智能体名称。你可以使用该字段定位和关联业务实例。"]
    }), `
`, _jsx(_components.h3, {
      id: "api-变更",
      children: "API 变更"
    }), `
`, _jsx(_components.h4, {
      id: "废弃",
      children: "废弃"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/join.md",
          children: "POST 创建对话式智能体"
        }), "废弃：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "properties.turn_detection.config.start_of_speech.mode"
            }), " 的 ", _jsx(_components.code, {
              children: "keyword"
            }), " 模式及对应配置字段"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "properties.turn_detection.config.start_of_speech.mode"
            }), " 的 ", _jsx(_components.code, {
              children: "disabled"
            }), " 模式及对应配置字段"]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "新增",
      children: "新增"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/join.md",
          children: "POST 创建对话式智能体"
        }), "新增", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "properties.llm.greeting_configs.delay_ms"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "properties.llm.headers"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "properties.interruption"
            })
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["新增 ", _jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/think.md",
          children: "POST 发送自定义指令"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/query.md",
          children: "GET 查询智能体状态"
        }), "响应新增 ", _jsx(_components.code, {
          children: "name"
        })]
      }), `
`, _jsx(_components.li, {
        children: "客户端组件 API："
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "android",
      children: "Android"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#onagentlisteningchanged",
          children: _jsx(_components.code, {
            children: "onAgentListeningChanged"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#onagentthinkingchanged",
          children: _jsx(_components.code, {
            children: "onAgentThinkingChanged"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#onagentspeakingchanged",
          children: _jsx(_components.code, {
            children: "onAgentSpeakingChanged"
          })
        })]
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
        children: [_jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#onagentlisteningchanged",
          children: _jsx(_components.code, {
            children: "onAgentListeningChanged"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#onagentthinkingchanged",
          children: _jsx(_components.code, {
            children: "onAgentThinkingChanged"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#onagentspeakingchanged",
          children: _jsx(_components.code, {
            children: "onAgentSpeakingChanged"
          })
        })]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "web",
      children: "Web"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/enum#econversationalaiapievents",
        children: _jsx(_components.code, {
          children: "EConversationalAIAPIEvents"
        })
      }), ` 新增
- `, _jsx(_components.code, {
        children: "AGENT_LISTENING_CHANGED"
      }), `
- `, _jsx(_components.code, {
        children: "AGENT_THINKING_CHANGED"
      }), `
- `, _jsx(_components.code, {
        children: "AGENT_SPEAKING_CHANGED"
      })]
    }), `
`, _jsx(_components.h2, {
      id: "v25",
      children: "v2.5"
    }), `
`, _jsx(_components.p, {
      children: "该版本于 2026 年 3 月 30 日发布。"
    }), `
`, _jsx(_components.h3, {
      id: "新增特性-1",
      children: "新增特性"
    }), `
`, _jsx(_components.h4, {
      id: "优雅打断支持判断对话暂停意图",
      children: "优雅打断支持判断对话暂停意图"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本为 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口的 ", _jsx(_components.code, {
        children: "turn_detection.config.end_of_speech.semantic_config"
      }), " 字段新增 ", _jsx(_components.code, {
        children: "pause_state_enabled"
      }), ' 字段，用于配置智能体是否识别用户的暂停意图。开启后（默认开启），当用户说"等一下"、"稍等"等暂停词时，智能体将判断为暂停意图，等待用户后续输入而非立即响应。']
    }), `
`, _jsx(_components.h4, {
      id: "实时更新-tts-参数",
      children: "实时更新 TTS 参数"
    }), `
`, _jsxs(_components.p, {
      children: ["接入", _jsx(_components.a, {
        href: "./custom-llm.md",
        children: "自定义大模型"
      }), "场景下，该版本新增支持在用户和智能体互动期间实时更新 TTS 参数，实现更沉浸的对话交互体验。该功能可应用于以下场景："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "自定义大模型识别到用户要求智能体换一个声音。"
      }), `
`, _jsx(_components.li, {
        children: "自定义大模型识别到用户高兴的情绪时，实时提高 TTS 的音量、音调和语速等，使智能体的回应更符合用户的心情。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["实现方式可参考", _jsx(_components.a, {
        href: "./custom-llm.md#%E5%AE%9E%E6%97%B6%E6%9B%B4%E6%96%B0-tts-%E5%8F%82%E6%95%B0",
        children: "实时更新 TTS 参数"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "查询对话轮次信息",
      children: "查询对话轮次信息"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本新增 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/turns.md",
        children: "GET 查询对话轮次信息"
      }), "接口，用于在与智能体对话结束后，查询本次会话的对话轮次信息，包含每个对话轮次的开始信息、结束信息和性能指标。"]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsx(_components.p, {
        children: `信息
目前仅支持查询 7 天内的会话。`
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "api-变更-1",
      children: "API 变更"
    }), `
`, _jsx(_components.h4, {
      id: "新增-1",
      children: "新增"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/join.md",
          children: "POST 创建对话式智能体"
        }), "的 ", _jsx(_components.code, {
          children: "properties.turn_detection.config.end_of_speech.semantic_config"
        }), " 字段新增 ", _jsx(_components.code, {
          children: "pause_state_enabled"
        }), " 字段"]
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/turns.md",
          children: "GET 查询对话轮次信息"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "v24",
      children: "v2.4"
    }), `
`, _jsx(_components.p, {
      children: "该版本于 2026 年 2 月 2 日发布。"
    }), `
`, _jsx(_components.h3, {
      id: "新增特性-2",
      children: "新增特性"
    }), `
`, _jsx(_components.h4, {
      id: "接入-mcp-服务器",
      children: "接入 MCP 服务器"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本为 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口新增 ", _jsx(_components.code, {
        children: "llm.mcp_servers"
      }), " 字段，用于接入 MCP (Model Context Protocol) 服务器。你可以在创建智能体时配置 MCP 服务器，并开启工具调用 (", _jsx(_components.code, {
        children: "advanced_features.enable_tools"
      }), " 设为 ", _jsx(_components.code, {
        children: "true"
      }), ")，让智能体调用外部服务提供的工具 (tools)，实现更复杂的业务逻辑。"]
    }), `
`, _jsx(_components.h4, {
      id: "垫词功能-beta",
      children: "垫词功能 (Beta)"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本为 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口新增 ", _jsx(_components.code, {
        children: "filler_words"
      }), " 字段，用于配置垫词功能。垫词功能可在 LLM 响应等待时播报垫词，缓解用户等待焦虑，提升对话流畅度。"]
    }), `
`, _jsx(_components.h3, {
      id: "改进-1",
      children: "改进"
    }), `
`, _jsx(_components.h4, {
      id: "turn_detection-层级优化",
      children: "turn_detection 层级优化"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本对 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口的 ", _jsx(_components.code, {
        children: "turn_detection"
      }), " 字段进行了层级优化，采用 ", _jsx(_components.code, {
        children: "mode"
      }), " + ", _jsx(_components.code, {
        children: "config"
      }), " 的双字段配置方式，提供更灵活的对话轮次检测能力。"]
    }), `
`, _jsx(_components.p, {
      children: "新的配置结构包括："
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "基础配置"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "mode"
        }), "：对话轮次检测模式（当前支持 ", _jsx(_components.code, {
          children: "default"
        }), "）"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "config.speech_threshold"
        }), "：语音识别灵敏度"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "对话开始检测 (Start of Speech, SoS)"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "config.start_of_speech"
      }), " 支持三种检测模式："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "VAD 模式"
        }), " (", _jsx(_components.code, {
          children: "vad"
        }), ")：基于语音活动检测触发，支持配置打断阈值、前缀填充和忽略词列表"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "关键词模式 (Beta)"
        }), " (", _jsx(_components.code, {
          children: "keywords"
        }), ")：基于关键词触发，智能体听到指定关键词后开始对话"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "禁用模式"
        }), " (", _jsx(_components.code, {
          children: "disabled"
        }), ")：禁用打断，支持追加或忽略策略"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "对话结束检测 (End of Speech, EoS)"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "config.end_of_speech"
      }), " 支持两种检测模式："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "VAD 模式"
        }), " (", _jsx(_components.code, {
          children: "vad"
        }), ")：基于静音持续时间判定对话结束"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "语义模式"
        }), " (", _jsx(_components.code, {
          children: "semantic"
        }), ")：基于语义理解判定对话结束，支持配置最大等待时间"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "api-变更-2",
      children: "API 变更"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-1",
      children: "废弃"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/join.md",
          children: "POST 创建对话式智能体"
        }), "废弃以下字段：", `
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
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "advanced_features.enable_aivad"
            })
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "新增-2",
      children: "新增"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/join.md",
          children: "POST 创建对话式智能体"
        }), "新增:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "advanced_features.enable_tools"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "llm.mcp_servers"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "filler_words"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "turn_detection.mode"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "turn_detection.config"
            })
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "v23",
      children: "v2.3"
    }), `
`, _jsx(_components.p, {
      children: "该版本于 2026 年 1 月 7 日发布。"
    }), `
`, _jsx(_components.h3, {
      id: "新增特性-3",
      children: "新增特性"
    }), `
`, _jsx(_components.h4, {
      id: "配置-llm-响应是否可打断",
      children: "配置 LLM 响应是否可打断"
    }), `
`, _jsxs(_components.p, {
      children: ["接入自定义大模型并采用流式响应（SSE）的场景下，大模型的单次回复被切分为多个包 (Chunk) 进行传输。自该版本起，对话式 AI 引擎支持处理 ", _jsx(_components.code, {
        children: "object"
      }), " 为 ", _jsx(_components.code, {
        children: "chat.completion.custom_metadata"
      }), " 的", _jsx(_components.strong, {
        children: "首包"
      }), "响应，其中的 ", _jsx(_components.code, {
        children: "metadata.interruptable"
      }), " 字段用于配置 TTS 播报本次 LLM 响应时是否能被用户发言打断。该能力可用于确保智能体在播报法规、政策、产品定价等重要信息时，不被用户发言打断。更多信息可参考", _jsx(_components.a, {
        href: "./custom-llm.md#%E9%85%8D%E7%BD%AE-llm-%E5%93%8D%E5%BA%94%E6%98%AF%E5%90%A6%E5%8F%AF%E6%89%93%E6%96%AD",
        children: "配置 LLM 响应是否可打断"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "rtc-媒体内容加密",
      children: "RTC 媒体内容加密"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本为 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口新增 ", _jsx(_components.code, {
        children: "properties.rtc"
      }), " 字段，用于设置 RTC 媒体内容加密配置。你可以通过该配置加密 RTC 传输的音视频媒体内容，从而保障和智能体对话过程中的数据安全。"]
    }), `
`, _jsx(_components.h3, {
      id: "改进-2",
      children: "改进"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本将 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/leave.md",
        children: "POST 停止对话式智能体"
      }), "接口改为异步响应，对话式 AI 引擎会在检查请求参数合法性后立即返回响应，无需等待智能体完全退出频道。"]
    }), `
`, _jsx(_components.h3, {
      id: "api-变更-3",
      children: "API 变更"
    }), `
`, _jsx(_components.h4, {
      id: "新增-3",
      children: "新增"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/join.md",
          children: "POST 创建对话式智能体"
        }), "新增 ", _jsx(_components.code, {
          children: "properties.rtc"
        }), " 字段"]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "修改",
      children: "修改"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/leave.md",
          children: "POST 停止对话式智能体"
        }), "改为异步响应"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "v22",
      children: "v2.2"
    }), `
`, _jsx(_components.p, {
      children: "该版本于 2025 年 12 月 11 日发布。"
    }), `
`, _jsx(_components.h3, {
      id: "新增特性-4",
      children: "新增特性"
    }), `
`, _jsx(_components.h4, {
      id: "智能体问候模式",
      children: "智能体问候模式"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本为 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口新增 ", _jsx(_components.code, {
        children: "llm.greeting_configs.mode"
      }), " 字段，用于设置智能体问候语播报模式，目前支持以下选项："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: '"single_every"'
        }), "：（默认）每次有用户加入空频道时，智能体都播报一次问候语。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: '"single_first"'
        }), "：仅首位用户加入空频道时，智能体播报一次问候语。"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "api-变更-4",
      children: "API 变更"
    }), `
`, _jsx(_components.h4, {
      id: "新增-4",
      children: "新增"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/join.md",
          children: "POST 创建对话式智能体"
        }), "新增 ", _jsx(_components.code, {
          children: "llm.greeting_configs.mode"
        }), " 字段"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "v21",
      children: "v2.1"
    }), `
`, _jsx(_components.p, {
      children: "该版本于 2025 年 12 月 1 日发布。"
    }), `
`, _jsx(_components.h3, {
      id: "新增特性-5",
      children: "新增特性"
    }), `
`, _jsx(_components.h4, {
      id: "动态变量",
      children: "动态变量"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本为 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口新增 ", _jsx(_components.code, {
        children: "llm.template_variables"
      }), " 字段，用于在智能体的 ", _jsx(_components.code, {
        children: "system_messages"
      }), "、", _jsx(_components.code, {
        children: "greeting_message"
      }), "、", _jsx(_components.code, {
        children: "failure_message"
      }), " 和 ", _jsx(_components.code, {
        children: "parameters.silence_config.content"
      }), " 的文本中插入变量。通过配置变量，对话式 AI 引擎可以自动将其替换为 ", _jsx(_components.code, {
        children: "llm.template_variables"
      }), " 中定义的对应值。"]
    }), `
`, _jsx(_components.h4, {
      id: "自定义标签",
      children: "自定义标签"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本为 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口新增 ", _jsx(_components.code, {
        children: "labels"
      }), " 字段，用于让智能体携带自定义业务信息。这些自定义的标签会与智能体绑定，并在对话式 AI 引擎所有类型消息通知回调的 ", _jsx(_components.code, {
        children: "payload"
      }), " 字段中返回，用于实现自定义业务逻辑，例如标记活动 ID、客户分组、业务场景等。"]
    }), `
`, _jsx(_components.h3, {
      id: "api-变更-5",
      children: "API 变更"
    }), `
`, _jsx(_components.h4, {
      id: "新增-5",
      children: "新增"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/join.md",
          children: "POST 创建对话式智能体"
        }), "新增", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "llm.template_variables"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "labels"
            })
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "v20",
      children: "v2.0"
    }), `
`, _jsx(_components.p, {
      children: "该版本于 2025 年 11 月 6 日发布。"
    }), `
`, _jsx(_components.h3, {
      id: "升级必看-1",
      children: "升级必看"
    }), `
`, _jsx(_components.h4, {
      id: "语音活动检测配置更变",
      children: "语音活动检测配置更变"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本废弃了 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口的 ", _jsx(_components.code, {
        children: "vad"
      }), " 字段，其中的所有配置项已迁移至 ", _jsx(_components.code, {
        children: "turn_detection"
      }), " 字段。"]
    }), `
`, _jsx(_components.h4, {
      id: "客户端组件字幕-api-更名",
      children: "客户端组件字幕 API 更名"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本对客户端组件字幕 API 中所有使用了 ", _jsx(_components.code, {
        children: "transcription"
      }), " 命名的 API、参数等更名为 ", _jsx(_components.code, {
        children: "transcript"
      }), "，具体如下："]
    }), `
`, _jsx(_components.h4, {
      id: "android-1",
      children: "Android"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "onTranscriptionUpdated"
        }), " 更名为 ", _jsx(_components.code, {
          children: "onTranscriptUpdated"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "TranscriptionRenderMode"
            }), " 更名为 ", _jsx(_components.code, {
              children: "TranscriptRenderMode"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "TranscriptionType"
            }), " 更名为 ", _jsx(_components.code, {
              children: "TranscriptType"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "TranscriptionStatus"
            }), " 更名为 ", _jsx(_components.code, {
              children: "TranscriptStatus"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "Transcription"
            }), " 更名为 ", _jsx(_components.code, {
              children: "Transcript"
            })]
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
          children: "onTranscriptionUpdated"
        }), " 更名为 ", _jsx(_components.code, {
          children: "onTranscriptUpdated"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "TranscriptionRenderMode"
            }), " 更名为 ", _jsx(_components.code, {
              children: "TranscriptRenderMode"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "TranscriptionType"
            }), " 更名为 ", _jsx(_components.code, {
              children: "TranscriptType"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "TranscriptionStatus"
            }), " 更名为 ", _jsx(_components.code, {
              children: "TranscriptStatus"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "Transcription"
            }), " 更名为 ", _jsx(_components.code, {
              children: "Transcript"
            })]
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
          children: "TRANSCRIPTION_UPDATED"
        }), " 更名为 ", _jsx(_components.code, {
          children: "TRANSCRIPT_UPDATED"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "新增特性-6",
      children: "新增特性"
    }), `
`, _jsx(_components.h4, {
      id: "优雅退出",
      children: "优雅退出"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本为 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口新增 ", _jsx(_components.code, {
        children: "parameters.farewell_config"
      }), " 字段，用于设置智能体优雅退出功能。开启后，调用 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/leave.md",
        children: "POST 停止对话式智能体"
      }), "接口让智能体退出频道时，会确保智能体处于静默状态后再离开频道。"]
    }), `
`, _jsx(_components.h4, {
      id: "有感声纹识别-beta",
      children: "有感声纹识别 (Beta)"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本为选择性注意力锁定功能新增有感声纹识别模式，你可以在开始与智能体互动前，注册并上传最多 1 个声纹，后续互动期间，智能体将通过声纹识别用户身份，并抑制其他背景人声和环境噪音，确保对话专注度。如需体验有感声纹识别功能，请", _jsx(_components.a, {
        href: "https://ticket.shengwang.cn",
        children: "联系技术支持"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "关键词打断模式",
      children: "关键词打断模式"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本为 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口的 ", _jsx(_components.code, {
        children: "turn_detection.interrupt_mode"
      }), " 字段新增 ", _jsx(_components.code, {
        children: '"keyword"'
      }), " 选项，用于将智能体打断模式为关键词打断模式，你可以在 ", _jsx(_components.code, {
        children: "turn_detection.interrupt_keywords"
      }), " 字段中设置打断关键词。启用后，智能体听到列表中的关键词后会打断智能体当前行为。"]
    }), `
`, _jsx(_components.h4, {
      id: "自适应打断模式",
      children: "自适应打断模式"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本为 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口的 ", _jsx(_components.code, {
        children: "turn_detection.interrupt_mode"
      }), " 字段新增 ", _jsx(_components.code, {
        children: '"adaptive"'
      }), " 选项，用于将智能体打断模式为自适应打断模式，启用后，智能体说话时，将自动调整打断相关参数，避免智能体被短暂人声误打断。"]
    }), `
`, _jsx(_components.h3, {
      id: "改进-3",
      children: "改进"
    }), `
`, _jsx(_components.h4, {
      id: "minimax-tts-支持时间戳",
      children: "MiniMax TTS 支持时间戳"
    }), `
`, _jsx(_components.p, {
      children: "自该版本起，Minimax TTS 在文字转语音的同时会附带时间戳信息。该改进将有助于精确定位用户打断智能体说话的时间点，提升语音打断相关上下文信息的准确度。"
    }), `
`, _jsx(_components.h4, {
      id: "新增-ttsasr-可选",
      children: "新增 TTS/ASR 可选"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本新增支持了以下供应商或模型，详见 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["新增 TTS：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "阿里云 CosyVoice TTS"
          }), `
`, _jsx(_components.li, {
            children: "火山引擎双向流式 TTS"
          }), `
`, _jsx(_components.li, {
            children: "阶跃星辰 TTS"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["新增 ASR：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "讯飞云传统语音转写识别服务"
          }), `
`, _jsx(_components.li, {
            children: "讯飞云语音识别大模型服务"
          }), `
`, _jsx(_components.li, {
            children: "讯飞云方言自由说识别服务"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "api-变更-6",
      children: "API 变更"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-2",
      children: "废弃"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/join.md",
          children: "POST 创建对话式智能体"
        }), "废弃 ", _jsx(_components.code, {
          children: "vad"
        }), " 字段"]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "新增-6",
      children: "新增"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/join.md",
          children: "POST 创建对话式智能体"
        }), "新增：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "parameters.farewell_config"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "turn_detection.interrupt_mode.adaptive"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "turn_detection.interrupt_mode.keyword"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "turn_detection.interrupt_keywords"
            })
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "turn_detection.interrupt_duration_ms"
            }), " （迁移自 ", _jsx(_components.code, {
              children: "vad.interrupt_duration_ms"
            }), "）"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "turn_detection.prefix_padding_ms"
            }), " （迁移自 ", _jsx(_components.code, {
              children: "vad.prefix_padding_ms"
            }), "）"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "turn_detection.silence_duration_ms"
            }), " （迁移自 ", _jsx(_components.code, {
              children: "vad.silence_duration_ms"
            }), "）"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "turn_detection.threshold"
            }), " （迁移自 ", _jsx(_components.code, {
              children: "vad.threshold"
            }), "）"]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "v17",
      children: "v1.7"
    }), `
`, _jsx(_components.p, {
      children: "该版本于 2025 年 7 月 29 日发布。"
    }), `
`, _jsx(_components.h3, {
      id: "新增特性-7",
      children: "新增特性"
    }), `
`, _jsx(_components.h4, {
      id: "数字人",
      children: "数字人"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本新增数字人功能，启用后，智能体可以结合第三方数字人供应商提供的能力，为智能体生成口型准确、形象逼真的数字人形象，提升与 AI 对话互动的沉浸感。你可以在调用 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口时，将 ", _jsx(_components.code, {
        children: "avatar.enable"
      }), " 设置为 ", _jsx(_components.code, {
        children: "true"
      }), "，并配置 ", _jsx(_components.code, {
        children: "avatar.vendor"
      }), " 和 ", _jsx(_components.code, {
        children: "avatar.params"
      }), " 字段来启用数字人功能。"]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsxs(_components.p, {
        children: [`注意
开启数字人功能将产生 RTC 视频通话费用，详见 `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/doc/rtc/android/billing/billing-strategy",
          children: "RTC 计费说明"
        }), "。"]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "无感声纹识别",
      children: "无感声纹识别"
    }), `
`, _jsxs(_components.p, {
      children: ["选择性注意力锁定新增无感声纹识别功能，该功能赋予 AI 精准识别用户声纹特征的能力，有效区分不同说话者。用户只需在对话初期大声、清晰地说话，即可提升 AI 对声音的锁定效果。无感声纹识别不仅可以智能屏蔽 95% 的环境人声、噪声，对 AI 对话更准确、高效，同时也适用于多人与 AI 对话的场景，实现更加多元化的对话式 AI 响应与服务。如需体验选择性注意力锁定功能，请", _jsx(_components.a, {
        href: "https://ticket.shengwang.cn",
        children: "联系技术支持"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "发送图片消息beta",
      children: "发送图片消息（Beta）"
    }), `
`, _jsxs(_components.p, {
      children: ["对话式 AI 引擎客户端组件新增发送图片消息接口，支持将 URL 图片发送给大模型，并在后续与智能体对话时自动引用图片内容，让大模型根据图片内容生成更符合用户需求的回复。此外，本次客户端组件还新增了图片消息回执回调，用于确认图片消息发送是否成功。你可以参考", _jsx(_components.a, {
        href: "./send-multimodal-message.md",
        children: "发送多模态消息"
      }), "了解如何使用该功能。"]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsx(_components.p, {
        children: "注意"
      }), `
`, _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "发送图片消息功能目前处于 Beta 阶段，限时免费。"
        }), `
`, _jsx(_components.li, {
          children: "图片处理能力依赖于 LLM 供应商提供的能力，你需要确保你接入对话式 AI 引擎的 LLM 供应商支持图片处理。"
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "api-变更-7",
      children: "API 变更"
    }), `
`, _jsx(_components.h4, {
      id: "新增-7",
      children: "新增"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/join.md",
          children: "POST 创建对话式智能体"
        }), "新增", `
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
`, _jsx(_components.li, {
        children: "客户端组件 API："
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
        children: [_jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapi#chat",
          children: _jsx(_components.code, {
            children: "chat"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#onmessagereceiptupdated",
          children: _jsx(_components.code, {
            children: "onMessageReceiptUpdated"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/iconversationalaiapieventhandler#onmessageerror",
          children: _jsx(_components.code, {
            children: "onMessageError"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/struct#chatmessage",
          children: _jsx(_components.code, {
            children: "ChatMessage"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/struct#chatmessagetype",
          children: _jsx(_components.code, {
            children: "ChatMessageType"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/struct#imagemessage",
          children: _jsx(_components.code, {
            children: "ImageMessage"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/struct#messagereceipt",
          children: _jsx(_components.code, {
            children: "MessageReceipt"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/struct#messageerror",
          children: _jsx(_components.code, {
            children: "MessageError"
          })
        })]
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
          href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapi#chat",
          children: _jsx(_components.code, {
            children: "chat"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#onmessagereceiptupdated",
          children: _jsx(_components.code, {
            children: "onMessageReceiptUpdated"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/conversationalaiapieventhandler#onmessageerror",
          children: _jsx(_components.code, {
            children: "onMessageError"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/struct#chatmessage",
          children: _jsx(_components.code, {
            children: "ChatMessage"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/enum#chatmessagetype",
          children: _jsx(_components.code, {
            children: "ChatMessageType"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/struct#imagemessage",
          children: _jsx(_components.code, {
            children: "ImageMessage"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/struct#messagereceipt",
          children: _jsx(_components.code, {
            children: "MessageReceipt"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/struct#messageerror",
          children: _jsx(_components.code, {
            children: "MessageError"
          })
        })]
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
          href: "https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/conversationalaiapi#chat",
          children: _jsx(_components.code, {
            children: "chat"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/struct#tmessagereceipt",
          children: _jsx(_components.code, {
            children: "TMessageReceipt"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/enum#echatmessagepriority",
          children: _jsx(_components.code, {
            children: "EChatMessagePriority"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/enum#echatmessagetype",
          children: _jsx(_components.code, {
            children: "EChatMessageType"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/struct#ichatmessagebase",
          children: _jsx(_components.code, {
            children: "IChatMessageBase"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/struct#ichatmessageimage",
          children: _jsx(_components.code, {
            children: "IChatMessageImage"
          })
        }), `
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/enum#econversationalaiapievents",
          children: _jsx(_components.code, {
            children: "EConversationalAIAPIEvents"
          })
        }), " 新增 ", _jsx(_components.code, {
          children: "MESSAGE_RECEIPT_UPDATED"
        }), " 和 ", _jsx(_components.code, {
          children: "MESSAGE_ERROR"
        }), ` 事件
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/enum#emoduletype",
          children: _jsx(_components.code, {
            children: "EModuleType"
          })
        }), " 新增 ", _jsx(_components.code, {
          children: "CONTEXT"
        }), ` 枚举值
- `, _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/enum#eagentstate",
          children: _jsx(_components.code, {
            children: "EAgentState"
          })
        }), " 新增 ", _jsx(_components.code, {
          children: "SILENT"
        }), " 枚举值"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "v16",
      children: "v1.6"
    }), `
`, _jsx(_components.p, {
      children: "该版本于 2025 年 7 月 1 日发布。"
    }), `
`, _jsx(_components.h3, {
      id: "升级必看-2",
      children: "升级必看"
    }), `
`, _jsx(_components.h4, {
      id: "支持-asr-供应商开放可选",
      children: "支持 ASR 供应商开放可选"
    }), `
`, _jsxs(_components.p, {
      children: ["为了提高对话式智能体配置的灵活性，自该版本起，语音识别 (ASR) 供应商开放自定义选择。", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口新增 ", _jsx(_components.code, {
        children: "asr.vendor"
      }), " 字段和 ", _jsx(_components.code, {
        children: "asr.params"
      }), " 字段，分别用于设置 ASR 供应商和配置参数。当前支持配置："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "（默认）凤鸣 ASR"
      }), `
`, _jsx(_components.li, {
        children: "腾讯云 ASR"
      }), `
`, _jsx(_components.li, {
        children: "微软 ASR"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["同时，", _jsx(_components.strong, {
        children: "旧版对话式 AI 引擎服务费用"
      }), "拆分出", _jsx(_components.strong, {
        children: "凤鸣 ASR 处理费用"
      }), "，当 ASR 服务采用默认的凤鸣 ASR 时，总价维持之前的版本不变，即", _jsx(_components.strong, {
        children: "旧版对话式 AI 引擎服务费用"
      }), " = ", _jsx(_components.strong, {
        children: "新版对话式 AI 引擎服务费用"
      }), " + ", _jsx(_components.strong, {
        children: "凤鸣 ASR 处理费用"
      }), "，当 ASR 服务采用其他供应商时，仅收取", _jsx(_components.strong, {
        children: "新版对话式 AI 引擎服务费用"
      }), "，详见", _jsx(_components.a, {
        href: "./billing.md",
        children: "计费说明"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "新增特性-8",
      children: "新增特性"
    }), `
`, _jsx(_components.h4, {
      id: "客户端组件",
      children: "客户端组件"
    }), `
`, _jsxs(_components.p, {
      children: ["为了提高对话式智能体的开发效率，声网提供了一套灵活可扩展、标准化的对话式 AI 引擎客户端组件。该组件支持 iOS、Android、Web 平台，封装了多个场景化 API，你只需要调用这些 API 即可结合声网", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/doc/rtc/homepage",
        children: "实时互动 (RTC) SDK"
      }), " 和", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/doc/rtm2/homepage",
        children: "实时消息 (RTM) SDK"
      }), " 的能力实现以下功能："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "./realtime-sub.md",
          children: "实时字幕"
        }), "：将用户与智能体的对话内容实时以文本输出并显示到终端界面上。该版本全面升级了字幕组件，提供更完善的功能支持、更强的可扩展性、更好的错误处理、更完善的会话管理和更强大的通信机制。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "./interrupt-agent.md",
          children: "打断智能体"
        }), "：打断智能体说话和思考流程，让智能体“闭嘴”。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "./listen-agent-events.md",
          children: "监听智能体相关事件"
        }), "：监听智能体对话状态变更、性能指标和错误事件。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "./best-practices/audio-settings.md",
          children: "设置最佳音频参数"
        }), "：快速设置音频参数最佳实践，提升对话式智能体的对话体验。"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "api-变更-8",
      children: "API 变更"
    }), `
`, _jsx(_components.h4, {
      id: "新增-8",
      children: "新增"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/join.md",
          children: "POST 创建对话式智能体"
        }), "新增", `
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
`, _jsxs(_components.li, {
        children: ["客户端组件 API：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/android/android-component/overview",
              children: "Android"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/ios/ios-component/overview",
              children: "iOS"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://doc.shengwang.cn/api-ref/convoai/typescript/web-component/overview",
              children: "Web"
            })
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "v15",
      children: "v1.5"
    }), `
`, _jsx(_components.p, {
      children: "该版本于 2025 年 6 月 6 日发布。"
    }), `
`, _jsx(_components.h3, {
      id: "新增特性-9",
      children: "新增特性"
    }), `
`, _jsx(_components.h4, {
      id: "tts-过滤",
      children: "TTS 过滤"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口新增 ", _jsx(_components.code, {
        children: "tts.skip_patterns"
      }), " 字段，用于控制 TTS 模块朗读 LLM 返回文本时，是否跳过指定括号内的内容，避免智能体播报不必要的结构性提示信息如语气、动作描述、系统提示等，提升听感自然度与沉浸感。"]
    }), `
`, _jsx(_components.h3, {
      id: "api-变更-9",
      children: "API 变更"
    }), `
`, _jsx(_components.h4, {
      id: "新增-9",
      children: "新增"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口新增 ", _jsx(_components.code, {
        children: "tts.skip_patterns"
      }), " 字段。"]
    }), `
`, _jsx(_components.h2, {
      id: "v14",
      children: "v1.4"
    }), `
`, _jsx(_components.p, {
      children: "该版本于 2025 年 5 月 26 日发布。"
    }), `
`, _jsx(_components.h3, {
      id: "升级必看-3",
      children: "升级必看"
    }), `
`, _jsxs(_components.p, {
      children: ["v1.4 版本对 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口进行了以下变更，请在升级到该版本后更新相关代码。"]
    }), `
`, _jsx(_components.h4, {
      id: "rtm-认证管理",
      children: "RTM 认证管理"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本废弃了 ", _jsx(_components.code, {
        children: "agent_rtm_uid"
      }), " 字段。开启 RTM 服务后，智能体加入 RTM 频道使用的 Token 和用户 ID 不再需要单独配置，而是会复用 ", _jsx(_components.code, {
        children: "token"
      }), " 和 ", _jsx(_components.code, {
        children: "agent_rtc_uid"
      }), " 字段配置的 Token 和用户 ID。你可以参考 ", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/faq/integration-issues/generate-token",
        children: "FAQ"
      }), " 了解如何生成同时具备 RTC 和 RTM 权限的 Token。"]
    }), `
`, _jsx(_components.h4, {
      id: "静默配置",
      children: "静默配置"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本废弃了 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口的 ", _jsx(_components.code, {
        children: "silence_timeout"
      }), " 和 ", _jsx(_components.code, {
        children: "llm.silence_message"
      }), " 字段，改用新增的 ", _jsx(_components.code, {
        children: "parameters.silence_config"
      }), " 字段配置智能体最大静默超时时长、静默提示方式和静默提示词。"]
    }), `
`, _jsx(_components.h3, {
      id: "新增特性-10",
      children: "新增特性"
    }), `
`, _jsx(_components.h4, {
      id: "支持微软-tts",
      children: "支持微软 TTS"
    }), `
`, _jsxs(_components.p, {
      children: ["自该版本起，对话式 AI 引擎支持微软 TTS，你可以在调用 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口时，将 ", _jsx(_components.code, {
        children: "tts.vendor"
      }), " 设置为 ", _jsx(_components.code, {
        children: "microsoft"
      }), " 来接入微软 TTS。"]
    }), `
`, _jsx(_components.h4, {
      id: "人声打断模式",
      children: "人声打断模式"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本为 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口新增 ", _jsx(_components.code, {
        children: "turn_detection.interrupt_mode"
      }), " 字段，用于设置人声打断智能体行为的模式。当前支持以下三种模式："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: '"interrupt"'
        }), "：（默认）打断模式，人声立即打断智能体交互。智能体会终止当前交互，直接处理人声输入。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: '"append"'
        }), ": 追加模式，人声不打断智能体。智能体会在当前交互结束后处理刚才收到的人声请求。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: '"ignore"'
        }), ": 忽略模式，智能体忽略人声请求。如果智能体正在说话或思考中途收到人声，智能体会直接忽略并丢弃人声请求，不存入上下文。"]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "传递短期记忆",
      children: "传递短期记忆"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本为 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口新增 ", _jsx(_components.code, {
        children: "llm.vendor"
      }), " 字段，设置为 ", _jsx(_components.code, {
        children: '"custom"'
      }), " 后，智能体会在调用大模型时携带对话轮次 (", _jsx(_components.code, {
        children: "turn_id"
      }), ") 和请求时间戳 (", _jsx(_components.code, {
        children: "timestamp"
      }), ") 等信息。详见", _jsx(_components.a, {
        href: "./short-term-memory.md#%E4%BC%A0%E9%80%92%E8%AE%B0%E5%BF%86%E5%86%85%E5%AE%B9%E7%BB%99%E5%A4%A7%E6%A8%A1%E5%9E%8B",
        children: "传递记忆内容给大模型"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "改进-4",
      children: "改进"
    }), `
`, _jsx(_components.p, {
      children: "该版本进行了以下改进："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["接入 Minimax TTS 时，新增支持透传 ", _jsx(_components.code, {
          children: "emotion"
        }), "、", _jsx(_components.code, {
          children: "latex_read"
        }), "、", _jsx(_components.code, {
          children: "pronunciation_dict"
        }), " 等字段，详见", _jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/join.md",
          children: "示例代码"
        }), "。"]
      }), `
`, _jsx(_components.li, {
        children: "和智能体对话期间，智能体的实时状态支持通过数据流回调至 RTC SDK。"
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/update.md",
          children: "POST 更新智能体配置"
        }), "接口新增 ", _jsx(_components.code, {
          children: "llm.system_messages"
        }), " 和 ", _jsx(_components.code, {
          children: "llm.params"
        }), " 字段，用于更新智能体调用大模型时携带的系统提示词和配置参数。"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "api-变更-10",
      children: "API 变更"
    }), `
`, _jsx(_components.h4, {
      id: "新增-10",
      children: "新增"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/join.md",
          children: "POST 创建对话式智能体"
        }), "新增：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "llm.vendor"
            })
          }), `
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
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/update.md",
          children: "POST 更新智能体配置"
        }), "新增：", `
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
`, _jsx(_components.h4, {
      id: "废弃-3",
      children: "废弃"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "废弃："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "agent_rtm_uid"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "silence_timeout"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "llm.silence_message"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "v13",
      children: "v1.3"
    }), `
`, _jsx(_components.p, {
      children: "该版本于 2025 年 4 月 16 日发布。"
    }), `
`, _jsx(_components.h3, {
      id: "集成必看",
      children: "集成必看"
    }), `
`, _jsx(_components.h4, {
      id: "加油包",
      children: "加油包"
    }), `
`, _jsxs(_components.p, {
      children: ["自该版本起，你可以在控制台购买加油包，用于抵扣对话式 AI 引擎服务的实际用量，同时享受一定折扣，详见", _jsx(_components.a, {
        href: "./billing.md#%E8%AE%A1%E8%B4%B9%E6%96%B9%E5%BC%8F",
        children: "计费说明"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "新增特性-11",
      children: "新增特性"
    }), `
`, _jsx(_components.h4, {
      id: "获取智能体短期记忆",
      children: "获取智能体短期记忆"
    }), `
`, _jsx(_components.p, {
      children: "用户和智能体之间的对话消息、智能体创建和停止的时间戳等会被存储在智能体的短期记忆中。该版本新增了以下两种方式获取智能体的短期记忆："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["调用 ", _jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/history.md",
          children: "GET 获取智能体短期记忆"
        }), "接口获取指定运行中智能体的短期记忆。"]
      }), `
`, _jsxs(_components.li, {
        children: ["通过", _jsx(_components.a, {
          href: "../api-reference/enable-ncs.md",
          children: "声网消息通知服务"
        }), "订阅", _jsx(_components.a, {
          href: "../api-reference/ncs-events.md#103-agent-history",
          children: "智能体短期记忆事件"
        }), "，当智能体停止时，声网将通过 Webhook 回调的方式自动发送智能体的短期记忆到你的业务服务器。"]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "支持智谱-ai-大模型",
      children: "支持智谱 AI 大模型"
    }), `
`, _jsxs(_components.p, {
      children: ["自该版本起，对话式 AI 引擎支持智谱 AI 大模型，你可以在调用 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "接口时，将 ", _jsx(_components.code, {
        children: "llm.url"
      }), " 设置为智谱 AI 大模型的 API 地址来接入智谱 AI 大模型。"]
    }), `
`, _jsx(_components.h3, {
      id: "改进-5",
      children: "改进"
    }), `
`, _jsx(_components.h4, {
      id: "自定义播报信息优先级",
      children: "自定义播报信息优先级"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本升级了 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/speak.md",
        children: "POST 播报自定义信息"
      }), "接口，新增了两种与播报行为打断逻辑相关的配置："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "priority"
        }), "：配置播报行为的优先级。支持配置打断并播报（高）、追加播报（中）和空闲时播报（低）三种优先级。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "interruptable"
        }), "：配置是否允许人声打断智能体播报。"]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "发送静默提示消息",
      children: "发送静默提示消息"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "新增 ", _jsx(_components.code, {
        children: "silence_timeout"
      }), " 和 ", _jsx(_components.code, {
        children: "llm.silence_message"
      }), " 参数，用于设置智能体最大静默时间和静默提示消息。智能体创建成功，且用户加入频道后，智能体不处于倾听、思考或说话状态的持续时间称为智能体静默时间，静默时间达到设定值后，智能体将播报中填写的静默提示消息。"]
    }), `
`, _jsx(_components.h3, {
      id: "api-变更-11",
      children: "API 变更"
    }), `
`, _jsx(_components.h4, {
      id: "新增-11",
      children: "新增"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/history.md",
          children: "GET 获取智能体短期记忆"
        })
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/join.md",
          children: "POST 创建对话式智能体"
        }), "新增 ", _jsx(_components.code, {
          children: "silence_timeout"
        }), " 和 ", _jsx(_components.code, {
          children: "llm.silence_message"
        }), " 参数"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/speak.md",
          children: "POST 播报自定义信息"
        }), "新增 ", _jsx(_components.code, {
          children: "priority"
        }), " 和 ", _jsx(_components.code, {
          children: "interruptable"
        }), " 参数"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "v12",
      children: "v1.2"
    }), `
`, _jsx(_components.p, {
      children: "该版本于 2025 年 3 月 27 日发布。"
    }), `
`, _jsx(_components.h3, {
      id: "新增特性-12",
      children: "新增特性"
    }), `
`, _jsx(_components.h4, {
      id: "播报自定义信息",
      children: "播报自定义信息"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本新增 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/speak.md",
        children: "POST 播报自定义信息"
      }), "接口，用于让指定智能体播报自定义消息。与智能体对话期间，调用该接口可以打断智能体说话和思考，并使用 TTS 模块立刻播报自定义消息。"]
    }), `
`, _jsx(_components.h4, {
      id: "打断智能体",
      children: "打断智能体"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本新增 ", _jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/interrupt.md",
        children: "POST 打断智能体"
      }), "接口，用于打断指定智能体的说话和思考流程，让智能体“闭嘴”。"]
    }), `
`, _jsx(_components.h3, {
      id: "api-变更-12",
      children: "API 变更"
    }), `
`, _jsx(_components.h4, {
      id: "新增-12",
      children: "新增"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/speak.md",
          children: "POST 播报自定义信息"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../api-reference/conversational-ai/rest-api/agent/interrupt.md",
          children: "POST 打断智能体"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "v11",
      children: "v1.1"
    }), `
`, _jsx(_components.p, {
      children: "该版本于 2025 年 3 月 19 日发布。"
    }), `
`, _jsx(_components.h3, {
      id: "新增特性-13",
      children: "新增特性"
    }), `
`, _jsx(_components.h4, {
      id: "传递自定义信息",
      children: "传递自定义信息"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "新增 ", _jsx(_components.code, {
        children: "enable_rtm"
      }), " 和 ", _jsx(_components.code, {
        children: "agent_rtm_uid"
      }), " 字段，用于为对话式智能体开启 RTM 功能。开启后，智能体可以结合 RTM SDK 提供的能力，获取用户的说话状态、选中的文字、个性签名、得分等自定义上下文信息，并将这些信息传递给智能体，引导智能体输出更符合用户需求的内容。详见", _jsx(_components.a, {
        href: "./custom-data.md",
        children: "传递自定义信息"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "改进-6",
      children: "改进"
    }), `
`, _jsxs(_components.p, {
      children: ["为了帮助你快速接入自定义大模型，该版本上线了", _jsx(_components.a, {
        href: "./custom-llm.md",
        children: "自定义大模型"
      }), "文档，你可以参考文档中的示例代码将自定义大模型接入到对话式 AI 引擎中，实现检索增强生成（RAG）、多模态、工具调用等进阶能力。"]
    }), `
`, _jsx(_components.h3, {
      id: "api-变更-13",
      children: "API 变更"
    }), `
`, _jsx(_components.h4, {
      id: "新增-13",
      children: "新增"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "../api-reference/conversational-ai/rest-api/agent/join.md",
        children: "POST 创建对话式智能体"
      }), "新增 ", _jsx(_components.code, {
        children: "enable_rtm"
      }), " 和 ", _jsx(_components.code, {
        children: "agent_rtm_uid"
      }), " 字段"]
    }), `
`, _jsx(_components.h2, {
      id: "v10-ga",
      children: "v1.0 GA"
    }), `
`, _jsx(_components.p, {
      children: "该版本于 2025 年 3 月 5 日发布。"
    }), `
`, _jsx(_components.h3, {
      id: "集成必看-1",
      children: "集成必看"
    }), `
`, _jsx(_components.h4, {
      id: "计费说明",
      children: "计费说明"
    }), `
`, _jsxs(_components.p, {
      children: ["声网对话式 AI 引擎于 2025 年 3 月 5 日正式 GA 发布，并公布了产品定价：声网对话式 AI 引擎的计费规则，详见", _jsx(_components.a, {
        href: "./billing.md",
        children: "计费说明"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "sdk-版本要求",
      children: "SDK 版本要求"
    }), `
`, _jsx(_components.p, {
      children: `为了取得最好的对话体验效果，新版本声网对话式 AI 引擎建议与以下声网 SDK 搭配使用：
- 声网 RTC Native SDK，v4.5.1 及以上版本
- 声网 RTC Web SDK，4.23.2 及以上版本
- 声网 RTSA C SDK，1.9.x 及以上版本`
    }), `
`, _jsx(_components.h3, {
      id: "新增特性-14",
      children: "新增特性"
    }), `
`, _jsx(_components.h4, {
      id: "实时字幕",
      children: "实时字幕"
    }), `
`, _jsxs(_components.p, {
      children: ["自该版本起，声网提供开源的字幕处理模块，你只需要将模块集成到项目中，并调用模块的 API 即可快速实现实时字幕功能，将用户与智能体的对话内容实时以文本输出并显示到终端界面上，详见", _jsx(_components.a, {
        href: "./realtime-sub.md",
        children: "实时字幕"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "消息通知服务",
      children: "消息通知服务"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本新增对话式 AI 引擎消息通知服务，你可以在声网控制台设置消息通知服务地址，订阅智能体创建、停止或出错事件。当订阅的事件发生时，声网会调用你设置的回调地址，将事件详情发送至你的业务服务器。详见", _jsx(_components.a, {
        href: "../api-reference/enable-ncs.md",
        children: "消息通知服务"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "热词-beta",
      children: "热词 Beta"
    }), `
`, _jsxs(_components.p, {
      children: ["该版本新增热词功能，添加热词可以显著提升对话式 AI 引擎在专有词汇上的识别准确率。目前该功能处于 Beta 发布阶段，请", _jsx(_components.a, {
        href: "https://ticket.shengwang.cn",
        children: "联系技术支持"
      }), "开通。"]
    }), `
`, _jsx(_components.h2, {
      id: "v10-public-beta",
      children: "v1.0 Public Beta"
    }), `
`, _jsx(_components.p, {
      children: "该版本于 2025 年 2 月 18 日发布。本次发版聚焦于提供自然流畅、低延迟、高可靠的实时语音对话能力，助力开发者快速构建智能化、沉浸式的交互体验。"
    }), `
`, _jsx(_components.h3, {
      id: "集成必看-2",
      children: "集成必看"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["为了取得最好的对话体验效果，已", _jsx(_components.a, {
            href: "https://ticket.shengwang.cn/",
            children: "联系声网技术支持"
          }), "获取指定版本的实时互动 SDK。"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["目前仅支持使用中文和英文与 AI 互动，其他语种需求", _jsx(_components.a, {
            href: "https://ticket.shengwang.cn",
            children: "联系技术支持"
          }), "反馈。"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["目前单一 App ID 的并发用户数 (Peak Concurrent Users) 限制为 20， 如需提升配额，请", _jsx(_components.a, {
            href: "https://ticket.shengwang.cn",
            children: "联系技术支持"
          }), "申请。"]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "核心功能",
      children: "核心功能"
    }), `
`, _jsx(_components.h4, {
      id: "实时语音对话",
      children: "实时语音对话"
    }), `
`, _jsx(_components.p, {
      children: "支持与 AI 进行自然流畅的实时语音对话，如同与真人交流，提供低延迟、极速响应的交互体验。"
    }), `
`, _jsx(_components.h4, {
      id: "端上降噪",
      children: "端上降噪"
    }), `
`, _jsx(_components.p, {
      children: "SDK 会智能识别和消除背景噪音，即使在嘈杂的公共场所，都能够确保声音传输的清晰度，为用户提供高质量的对话体验。"
    }), `
`, _jsx(_components.h4, {
      id: "背景人声抑制",
      children: "背景人声抑制"
    }), `
`, _jsx(_components.p, {
      children: "智能抑制背景人声，精准保留对话人清晰语音，确保在多人声环境中仍能实现清晰、专注的交互体验。"
    }), `
`, _jsx(_components.h4, {
      id: "优雅打断",
      children: "优雅打断"
    }), `
`, _jsx(_components.p, {
      children: "支持用户随时打断 AI 并快速响应，实现自然过渡和流畅对话，避免机械式交互。"
    }), `
`, _jsx(_components.h4, {
      id: "智能传输",
      children: "智能传输"
    }), `
`, _jsx(_components.p, {
      children: "针对与 AI 智能体对话场景优化的传输算法，支持在弱网环境（如 80% 丢包率）下仍能稳定传输语音数据，确保对话的连续性和可靠性，适应多样化的复杂网络环境。"
    }), `
`, _jsx(_components.h4, {
      id: "灵活编排",
      children: "灵活编排"
    }), `
`, _jsx(_components.p, {
      children: "支持全球主流的 LLM（大语言模型）、TTS（语音合成） 适配，快速实现灵活编排，满足不同场景和业务需求，提供高度定制化的 AI 智能体对话解决方案。"
    }), `
`, _jsx(_components.h4, {
      id: "实时字幕-1",
      children: "实时字幕"
    }), `
`, _jsx(_components.p, {
      children: "支持用户与 AI 智能体的对话内容实时以文本输出并显示到终端界面上。"
    }), `
`, _jsx(_components.h4, {
      id: "多平台支持",
      children: "多平台支持"
    }), `
`, _jsx(_components.p, {
      children: "支持 iOS、Android、Web、 小程序、以及各类嵌入式硬件等客户端，提供跨平台的一致性和无缝集成体验，满足不同场景的应用需求。"
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
