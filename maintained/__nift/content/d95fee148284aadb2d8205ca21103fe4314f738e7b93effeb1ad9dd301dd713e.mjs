import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "使用音频模态输出",
  description: "声网对话式 AI 引擎以音频模态输出。你可以阅读本文了解如何配置智能体以音频模态输出，并做好接口改造，进而实现上下文管理、字幕对齐、智能体播报等功能。"
};
export let _markdown = `

声网对话式 AI 引擎以音频模态输出。你可以阅读本文了解如何配置智能体以音频模态输出，并做好接口改造，进而实现上下文管理、字幕对齐、智能体播报等功能。

## 前提条件 [#前提条件]

开始前，请确保你已经：

* 参考[实现对话式智能体](../get-started/quick-start.md)实现了与 AI 智能体对话互动的基本逻辑
* 如果想实现输出音频的字幕功能，确保已阅读[实时字幕](../../ai/realtime-sub.md)文档完成配置

## 实现方式 [#实现方式]

### 选择输出模态 [#选择输出模态]

要使用音频模态输出，你可以在调用 [POST 创建对话式智能体](../operations/start-agent.md)接口时将 \`llm.output_modalities\` 设置为以下值：

* \`["audio"]\`：以纯音频模态输出。该场景下，你无需配置文本转语音 (TTS) 模块，自定义大模型返回的音频会直接由智能体播放。本文主要介绍该配置下如何使用音频模态。
* \`["text", "audio"]\`：以文本和音频模态输出。该场景下会同时存在两种音频，一种是 TTS 模块生成的音频，另一种是自定义大模型发送给智能体的音频。

### 按标准改造接口 [#按标准改造接口]

声网对话式 AI 引擎使用 [OpenAI Chat Completions API](https://platform.openai.com/docs/api-reference/chat) 兼容的接口与大语言模型进行交互，但针对不同类型的响应（文本、音频、字幕、逐字字幕时间戳）做了汇总，并拓展了一个 \`words\` 字段用于实现实时字幕对齐。你可以参考[自定义大模型](../../ai/custom-llm.md#实现方式)改造你的大语言模型服务，使其兼容以下请求和响应格式。

#### 请求格式 [#请求格式]

相比文本请求，音频请求的请求体中多了指定输出模态的 \`modalities\` 字段和指定输出音色和格式的 \`audio\` 字段。

这两个参数为可选参数，如有需要，可以在 [POST 创建对话式智能体](../operations/start-agent.md)接口的 \`llm.params\` 字段中传入。

以下为生成音频的对话请求格式：

\`\`\`json
{
  "model": "gpt-4o-audio-preview",
  "modalities": ["audio"],
  "audio": { "voice": "alloy", "format": "wav" },
  "messages": [
    {
      "role": "user",
      "content": "Is a golden retriever a good family dog?"
    }
  ]
}
\`\`\`

#### 响应格式 [#响应格式]

音频响应内容 (\`audio\`) 包含三种类型，均可独立发送至智能体处理：

| \`audio\` 类型          | 解释                      | 来源                                    | 智能体处理       |
| ------------------- | ----------------------- | ------------------------------------- | ----------- |
| 音频数据 (\`data\`)       | 经过 Base64 编码的 PCM 字节流数组 | - 具备音频处理能力的 LLM 生成<br />- 自定义音频处理服务生成 | 直接播放音频      |
| 转录内容 (\`transcript\`) | 音频对应的完整文字内容             | LLM 生成                                | 存入短期记忆（上下文） |
| 逐字字幕 (\`words\`)      | 含逐字（词）时间戳的字幕内容          | 支持逐字输出的 LLM 生成                        | 处理为逐字的实时字幕  |

具体数据结构如下（流式响应）：

\`\`\`json
{"choices":[{"index":0,"delta":{"role":"assistant","audio":{"data": ""}},"logprobs":null,"finish_reason":null}]}

/// 音频数据
{"choices":[{"index":0,"delta":{"audio":{"data": "base64 encoded pcm data"}},"logprobs":null,"finish_reason":null}]}

/// 转录字幕
{"choices":[{"index":0,"delta":{"audio":{"transcript": "Hello world!", "words":[{"text":"Hello", "start_ts":100, "end_ts":140, "duration":40}]}},"logprobs":null,"finish_reason":null}]}

/// 逐字（词）字幕
{"choices":[{"index":0,"delta":{"audio":{"words":[{"text":"world", "start_ts":150, "end_ts":190, "duration":40}, {"text":"!", "start_ts":190, "end_ts":200, "duration":10}]}},"logprobs":null,"finish_reason":null}]}

....

{"choices":[{"index":0,"delta":{},"logprobs":null,"finish_reason":"stop"}]}
\`\`\`

声网对话式 AI 引擎会对不同类型响应按以下格式进行汇总：

\`\`\`json
{
    "choices": [
        {
            "delta": {
                "audio": {
                    "data": "base64 encoded pcm data",
                    "transcript": "Hello world!",
                    "words": [
                        {
                            "text": "Hello",
                            "start_ts": 100,
                            "end_ts": 140,
                            "duration": 40
                        },
                        {
                            "text": "world",
                            "start_ts": 150,
                            "end_ts": 190,
                            "duration": 40
                        },
                        {
                            "text": "!",
                            "start_ts": 190,
                            "end_ts": 200,
                            "duration": 10
                        }
                    ]
                }
            }
        }
    ]
}
\`\`\`

\`audio\` 字段中各字段含义如下：

* \`data\`：音频数据，为经过 Base64 编码的 PCM 字节流。
* \`transcript\`：音频对应的字幕内容。
* \`words\`：字幕对应的逐字（词）时间戳。要求大模型支持逐字输出。
  * \`text\`：具体的字（词）。
  * \`start_ts\`：相对本次请求音频 PCM 数据开始时间的毫秒数。
  * \`end_ts\`：相对本次请求音频 PCM 数据结束时间的毫秒数。
  * \`duration\`：对应字（词）实际播放时长。

根据你的应用场景，可以让你的自定义大模型选择性处理并发送以上字段，例如：

* 纯音频输出：仅 \`data\` 字段必选。
* 纯字幕输出：仅 \`transcript\` 字段必选。单纯发送字幕内容，且该字幕不会通过 TTS 模块播报。
* 音频＋逐字字幕输出：\`data\` 和 \`words\` 字段必选。其中，\`words\` 字段中必选发送 \`text\` 和 \`start_ts\` 字段，\`end_ts\` 字段和 \`duration\` 字段可二选一。

## 进阶功能 [#进阶功能]

### 上下文管理 [#上下文管理]

响应中包含 \`audio.transcript\` 字段时，其中的字幕内容会自动存入智能体的上下文管理器中，并用于后续的上下文管理。如果没有收到 \`audio.transcript\` 字段，则不会存入上下文管理器中。

如果你想让智能体的短期记忆中包含音频模态输出的内容，请确保响应中包含 \`audio.transcript\` 字段。

### 字幕对齐 [#字幕对齐]

参考[实时字幕](../../ai/realtime-sub.md)文档完成字幕渲染逻辑后，如果大模型的响应中包含 \`audio.words\` 字段，声网对话式 AI 引擎会根据 \`audio.words\` 字段中的 \`start_ts\` 和 \`end_ts\`/\`duration\` 字段对音频进行断句，并根据断句结果进行字幕对齐。

因此，如果你想让智能体在播报音频时，能够根据字幕内容进行断句，请确保大模型发送了 \`audio.data\` 和 \`audio.words\` 字段。

### 智能体播报消息 [#智能体播报消息]

如果你创建的智能体没有配置 TTS 模块，但配置了音频模态输出（\`output_modalities\` 为 \`["audio"]\`），为了让智能体语音播报自定义消息，你可以按以下规则适配你的自定义大模型：

智能体接收并发送给自定义大模型的消息列表 \`messages\` 中，期望大模型根据最后一条消息的 \`role\` 进行以下处理：

* \`role\` 为 \`assistant\`：大模型视为该条消息无需思考，你可以自行转换为音频并发送给智能体，智能体收到后将直接播报该音频。
* \`role\` 为 \`user\`：大模型视为该条消息需要经过思考，智能体将根据思考后返回的响应内容是否包含音频决定是否播报该条消息。对应用户和智能体对话问答的常规场景。

> 信息
> 以下智能体播报行为同样采取该协议：
>
> * 智能体播报问候语 (\`greeting_message\`)、处理失败提示 (\`failure_message\`) 和静默提示 (\`silence_message\`) 时
> * 调用 [POST 播报自定义消息](../operations/agent-speak.md)时

## 参考信息 [#参考信息]

### 示例项目 [#示例项目]

声网提供了开源的示例项目供你参考，你可以前往下载或查看其中的源代码。

* [Conversational-AI-Server-Sample](https://github.com/AgoraIO-Community/Conversational-AI-Server-Sample)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "声网对话式 AI 引擎以音频模态输出。你可以阅读本文了解如何配置智能体以音频模态输出，并做好接口改造，进而实现上下文管理、字幕对齐、智能体播报等功能。"
  }, {
    heading: "前提条件",
    content: "开始前，请确保你已经："
  }, {
    heading: "前提条件",
    content: "参考实现对话式智能体实现了与 AI 智能体对话互动的基本逻辑"
  }, {
    heading: "前提条件",
    content: "如果想实现输出音频的字幕功能，确保已阅读实时字幕文档完成配置"
  }, {
    heading: "选择输出模态",
    content: "要使用音频模态输出，你可以在调用 POST 创建对话式智能体接口时将 `llm.output_modalities` 设置为以下值："
  }, {
    heading: "选择输出模态",
    content: '`["audio"]`：以纯音频模态输出。该场景下，你无需配置文本转语音 (TTS) 模块，自定义大模型返回的音频会直接由智能体播放。本文主要介绍该配置下如何使用音频模态。'
  }, {
    heading: "选择输出模态",
    content: '`["text", "audio"]`：以文本和音频模态输出。该场景下会同时存在两种音频，一种是 TTS 模块生成的音频，另一种是自定义大模型发送给智能体的音频。'
  }, {
    heading: "按标准改造接口",
    content: "声网对话式 AI 引擎使用 OpenAI Chat Completions API 兼容的接口与大语言模型进行交互，但针对不同类型的响应（文本、音频、字幕、逐字字幕时间戳）做了汇总，并拓展了一个 `words` 字段用于实现实时字幕对齐。你可以参考自定义大模型改造你的大语言模型服务，使其兼容以下请求和响应格式。"
  }, {
    heading: "请求格式",
    content: "相比文本请求，音频请求的请求体中多了指定输出模态的 `modalities` 字段和指定输出音色和格式的 `audio` 字段。"
  }, {
    heading: "请求格式",
    content: "这两个参数为可选参数，如有需要，可以在 POST 创建对话式智能体接口的 `llm.params` 字段中传入。"
  }, {
    heading: "请求格式",
    content: "以下为生成音频的对话请求格式："
  }, {
    heading: "响应格式",
    content: "音频响应内容 (`audio`) 包含三种类型，均可独立发送至智能体处理："
  }, {
    heading: "响应格式",
    content: "`audio` 类型"
  }, {
    heading: "响应格式",
    content: "解释"
  }, {
    heading: "响应格式",
    content: "来源"
  }, {
    heading: "响应格式",
    content: "智能体处理"
  }, {
    heading: "响应格式",
    content: "音频数据 (`data`)"
  }, {
    heading: "响应格式",
    content: "经过 Base64 编码的 PCM 字节流数组"
  }, {
    heading: "响应格式",
    content: "- 具备音频处理能力的 LLM 生成- 自定义音频处理服务生成"
  }, {
    heading: "响应格式",
    content: "直接播放音频"
  }, {
    heading: "响应格式",
    content: "转录内容 (`transcript`)"
  }, {
    heading: "响应格式",
    content: "音频对应的完整文字内容"
  }, {
    heading: "响应格式",
    content: "LLM 生成"
  }, {
    heading: "响应格式",
    content: "存入短期记忆（上下文）"
  }, {
    heading: "响应格式",
    content: "逐字字幕 (`words`)"
  }, {
    heading: "响应格式",
    content: "含逐字（词）时间戳的字幕内容"
  }, {
    heading: "响应格式",
    content: "支持逐字输出的 LLM 生成"
  }, {
    heading: "响应格式",
    content: "处理为逐字的实时字幕"
  }, {
    heading: "响应格式",
    content: "具体数据结构如下（流式响应）："
  }, {
    heading: "响应格式",
    content: "声网对话式 AI 引擎会对不同类型响应按以下格式进行汇总："
  }, {
    heading: "响应格式",
    content: "`audio` 字段中各字段含义如下："
  }, {
    heading: "响应格式",
    content: "`data`：音频数据，为经过 Base64 编码的 PCM 字节流。"
  }, {
    heading: "响应格式",
    content: "`transcript`：音频对应的字幕内容。"
  }, {
    heading: "响应格式",
    content: "`words`：字幕对应的逐字（词）时间戳。要求大模型支持逐字输出。"
  }, {
    heading: "响应格式",
    content: "`text`：具体的字（词）。"
  }, {
    heading: "响应格式",
    content: "`start_ts`：相对本次请求音频 PCM 数据开始时间的毫秒数。"
  }, {
    heading: "响应格式",
    content: "`end_ts`：相对本次请求音频 PCM 数据结束时间的毫秒数。"
  }, {
    heading: "响应格式",
    content: "`duration`：对应字（词）实际播放时长。"
  }, {
    heading: "响应格式",
    content: "根据你的应用场景，可以让你的自定义大模型选择性处理并发送以上字段，例如："
  }, {
    heading: "响应格式",
    content: "纯音频输出：仅 `data` 字段必选。"
  }, {
    heading: "响应格式",
    content: "纯字幕输出：仅 `transcript` 字段必选。单纯发送字幕内容，且该字幕不会通过 TTS 模块播报。"
  }, {
    heading: "响应格式",
    content: "音频＋逐字字幕输出：`data` 和 `words` 字段必选。其中，`words` 字段中必选发送 `text` 和 `start_ts` 字段，`end_ts` 字段和 `duration` 字段可二选一。"
  }, {
    heading: "上下文管理",
    content: "响应中包含 `audio.transcript` 字段时，其中的字幕内容会自动存入智能体的上下文管理器中，并用于后续的上下文管理。如果没有收到 `audio.transcript` 字段，则不会存入上下文管理器中。"
  }, {
    heading: "上下文管理",
    content: "如果你想让智能体的短期记忆中包含音频模态输出的内容，请确保响应中包含 `audio.transcript` 字段。"
  }, {
    heading: "字幕对齐",
    content: "参考实时字幕文档完成字幕渲染逻辑后，如果大模型的响应中包含 `audio.words` 字段，声网对话式 AI 引擎会根据 `audio.words` 字段中的 `start_ts` 和 `end_ts`/`duration` 字段对音频进行断句，并根据断句结果进行字幕对齐。"
  }, {
    heading: "字幕对齐",
    content: "因此，如果你想让智能体在播报音频时，能够根据字幕内容进行断句，请确保大模型发送了 `audio.data` 和 `audio.words` 字段。"
  }, {
    heading: "智能体播报消息",
    content: '如果你创建的智能体没有配置 TTS 模块，但配置了音频模态输出（`output_modalities` 为 `["audio"]`），为了让智能体语音播报自定义消息，你可以按以下规则适配你的自定义大模型：'
  }, {
    heading: "智能体播报消息",
    content: "智能体接收并发送给自定义大模型的消息列表 `messages` 中，期望大模型根据最后一条消息的 `role` 进行以下处理："
  }, {
    heading: "智能体播报消息",
    content: "`role` 为 `assistant`：大模型视为该条消息无需思考，你可以自行转换为音频并发送给智能体，智能体收到后将直接播报该音频。"
  }, {
    heading: "智能体播报消息",
    content: "`role` 为 `user`：大模型视为该条消息需要经过思考，智能体将根据思考后返回的响应内容是否包含音频决定是否播报该条消息。对应用户和智能体对话问答的常规场景。"
  }, {
    heading: "智能体播报消息",
    content: "> 信息\n> 以下智能体播报行为同样采取该协议：\n>\n> * 智能体播报问候语 (`greeting_message`)、处理失败提示 (`failure_message`) 和静默提示 (`silence_message`) 时\n> * 调用 POST 播报自定义消息时"
  }, {
    heading: "示例项目",
    content: "声网提供了开源的示例项目供你参考，你可以前往下载或查看其中的源代码。"
  }, {
    heading: "示例项目",
    content: "Conversational-AI-Server-Sample"
  }],
  headings: [{
    id: "前提条件",
    content: "前提条件"
  }, {
    id: "实现方式",
    content: "实现方式"
  }, {
    id: "选择输出模态",
    content: "选择输出模态"
  }, {
    id: "按标准改造接口",
    content: "按标准改造接口"
  }, {
    id: "请求格式",
    content: "请求格式"
  }, {
    id: "响应格式",
    content: "响应格式"
  }, {
    id: "进阶功能",
    content: "进阶功能"
  }, {
    id: "上下文管理",
    content: "上下文管理"
  }, {
    id: "字幕对齐",
    content: "字幕对齐"
  }, {
    id: "智能体播报消息",
    content: "智能体播报消息"
  }, {
    id: "参考信息",
    content: "参考信息"
  }, {
    id: "示例项目",
    content: "示例项目"
  }]
};
export let toc = [{
  depth: 2,
  url: "#前提条件",
  title: _jsx(_Fragment, {
    children: "前提条件"
  })
}, {
  depth: 2,
  url: "#实现方式",
  title: _jsx(_Fragment, {
    children: "实现方式"
  })
}, {
  depth: 3,
  url: "#选择输出模态",
  title: _jsx(_Fragment, {
    children: "选择输出模态"
  })
}, {
  depth: 3,
  url: "#按标准改造接口",
  title: _jsx(_Fragment, {
    children: "按标准改造接口"
  })
}, {
  depth: 4,
  url: "#请求格式",
  title: _jsx(_Fragment, {
    children: "请求格式"
  })
}, {
  depth: 4,
  url: "#响应格式",
  title: _jsx(_Fragment, {
    children: "响应格式"
  })
}, {
  depth: 2,
  url: "#进阶功能",
  title: _jsx(_Fragment, {
    children: "进阶功能"
  })
}, {
  depth: 3,
  url: "#上下文管理",
  title: _jsx(_Fragment, {
    children: "上下文管理"
  })
}, {
  depth: 3,
  url: "#字幕对齐",
  title: _jsx(_Fragment, {
    children: "字幕对齐"
  })
}, {
  depth: 3,
  url: "#智能体播报消息",
  title: _jsx(_Fragment, {
    children: "智能体播报消息"
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "声网对话式 AI 引擎以音频模态输出。你可以阅读本文了解如何配置智能体以音频模态输出，并做好接口改造，进而实现上下文管理、字幕对齐、智能体播报等功能。"
    }), `
`, _jsx(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), `
`, _jsx(_components.p, {
      children: "开始前，请确保你已经："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["参考", _jsx(_components.a, {
          href: "../get-started/quick-start.md",
          children: "实现对话式智能体"
        }), "实现了与 AI 智能体对话互动的基本逻辑"]
      }), `
`, _jsxs(_components.li, {
        children: ["如果想实现输出音频的字幕功能，确保已阅读", _jsx(_components.a, {
          href: "../../ai/realtime-sub.md",
          children: "实时字幕"
        }), "文档完成配置"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "实现方式",
      children: "实现方式"
    }), `
`, _jsx(_components.h3, {
      id: "选择输出模态",
      children: "选择输出模态"
    }), `
`, _jsxs(_components.p, {
      children: ["要使用音频模态输出，你可以在调用 ", _jsx(_components.a, {
        href: "../operations/start-agent.md",
        children: "POST 创建对话式智能体"
      }), "接口时将 ", _jsx(_components.code, {
        children: "llm.output_modalities"
      }), " 设置为以下值："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: '["audio"]'
        }), "：以纯音频模态输出。该场景下，你无需配置文本转语音 (TTS) 模块，自定义大模型返回的音频会直接由智能体播放。本文主要介绍该配置下如何使用音频模态。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: '["text", "audio"]'
        }), "：以文本和音频模态输出。该场景下会同时存在两种音频，一种是 TTS 模块生成的音频，另一种是自定义大模型发送给智能体的音频。"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "按标准改造接口",
      children: "按标准改造接口"
    }), `
`, _jsxs(_components.p, {
      children: ["声网对话式 AI 引擎使用 ", _jsx(_components.a, {
        href: "https://platform.openai.com/docs/api-reference/chat",
        children: "OpenAI Chat Completions API"
      }), " 兼容的接口与大语言模型进行交互，但针对不同类型的响应（文本、音频、字幕、逐字字幕时间戳）做了汇总，并拓展了一个 ", _jsx(_components.code, {
        children: "words"
      }), " 字段用于实现实时字幕对齐。你可以参考", _jsx(_components.a, {
        href: "../../ai/custom-llm.md#%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F",
        children: "自定义大模型"
      }), "改造你的大语言模型服务，使其兼容以下请求和响应格式。"]
    }), `
`, _jsx(_components.h4, {
      id: "请求格式",
      children: "请求格式"
    }), `
`, _jsxs(_components.p, {
      children: ["相比文本请求，音频请求的请求体中多了指定输出模态的 ", _jsx(_components.code, {
        children: "modalities"
      }), " 字段和指定输出音色和格式的 ", _jsx(_components.code, {
        children: "audio"
      }), " 字段。"]
    }), `
`, _jsxs(_components.p, {
      children: ["这两个参数为可选参数，如有需要，可以在 ", _jsx(_components.a, {
        href: "../operations/start-agent.md",
        children: "POST 创建对话式智能体"
      }), "接口的 ", _jsx(_components.code, {
        children: "llm.params"
      }), " 字段中传入。"]
    }), `
`, _jsx(_components.p, {
      children: "以下为生成音频的对话请求格式："
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
              children: '  "model"'
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
              children: '"gpt-4o-audio-preview"'
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
              children: '  "modalities"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"audio"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "audio"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": { "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"voice"'
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
              children: '"alloy"'
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
              children: '"format"'
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
              children: '"wav"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " },"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "messages"'
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
              children: '      "role"'
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
              children: '"user"'
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
              children: '      "content"'
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
              children: '"Is a golden retriever a good family dog?"'
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
`, _jsx(_components.h4, {
      id: "响应格式",
      children: "响应格式"
    }), `
`, _jsxs(_components.p, {
      children: ["音频响应内容 (", _jsx(_components.code, {
        children: "audio"
      }), ") 包含三种类型，均可独立发送至智能体处理："]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsxs(_components.th, {
            children: [_jsx(_components.code, {
              children: "audio"
            }), " 类型"]
          }), _jsx(_components.th, {
            children: "解释"
          }), _jsx(_components.th, {
            children: "来源"
          }), _jsx(_components.th, {
            children: "智能体处理"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["音频数据 (", _jsx(_components.code, {
              children: "data"
            }), ")"]
          }), _jsx(_components.td, {
            children: "经过 Base64 编码的 PCM 字节流数组"
          }), _jsxs(_components.td, {
            children: ["- 具备音频处理能力的 LLM 生成", _jsx("br", {}), "- 自定义音频处理服务生成"]
          }), _jsx(_components.td, {
            children: "直接播放音频"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["转录内容 (", _jsx(_components.code, {
              children: "transcript"
            }), ")"]
          }), _jsx(_components.td, {
            children: "音频对应的完整文字内容"
          }), _jsx(_components.td, {
            children: "LLM 生成"
          }), _jsx(_components.td, {
            children: "存入短期记忆（上下文）"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["逐字字幕 (", _jsx(_components.code, {
              children: "words"
            }), ")"]
          }), _jsx(_components.td, {
            children: "含逐字（词）时间戳的字幕内容"
          }), _jsx(_components.td, {
            children: "支持逐字输出的 LLM 生成"
          }), _jsx(_components.td, {
            children: "处理为逐字的实时字幕"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "具体数据结构如下（流式响应）："
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
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"choices"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":[{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"index"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"delta"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"role"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"assistant"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"audio"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"data"'
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
              children: '""'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}},"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"logprobs"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"finish_reason"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}]}"
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
              children: "/// 音频数据"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"choices"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":[{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"index"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"delta"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"audio"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"data"'
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
              children: '"base64 encoded pcm data"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}},"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"logprobs"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"finish_reason"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}]}"
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
              children: "/// 转录字幕"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"choices"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":[{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"index"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"delta"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"audio"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"transcript"'
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
              children: '"Hello world!"'
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
              children: '"words"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":[{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"text"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Hello"'
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
              children: '"start_ts"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "100"
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
              children: '"end_ts"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "140"
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
              children: '"duration"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "40"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}]}},"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"logprobs"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"finish_reason"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}]}"
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
              children: "/// 逐字（词）字幕"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"choices"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":[{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"index"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"delta"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"audio"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"words"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":[{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"text"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"world"'
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
              children: '"start_ts"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
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
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"end_ts"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "190"
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
              children: '"duration"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "40"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}, {"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"text"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"!"'
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
              children: '"start_ts"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "190"
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
              children: '"end_ts"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "200"
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
              children: '"duration"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "10"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}]}},"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"logprobs"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"finish_reason"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}]}"
            })]
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
              children: "...."
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
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"choices"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":[{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"index"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"delta"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":{},"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"logprobs"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"finish_reason"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"stop"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}]}"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "声网对话式 AI 引擎会对不同类型响应按以下格式进行汇总："
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
              children: '    "choices"'
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
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "delta"'
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
              children: '                "audio"'
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
              children: '                    "data"'
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
              children: '"base64 encoded pcm data"'
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
              children: '                    "transcript"'
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
              children: '"Hello world!"'
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
              children: '                    "words"'
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
              children: "                        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                            "text"'
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
              children: '"Hello"'
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
              children: '                            "start_ts"'
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
              children: "100"
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
              children: '                            "end_ts"'
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
              children: "140"
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
              children: '                            "duration"'
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
              children: "40"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                            "text"'
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
              children: '"world"'
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
              children: '                            "start_ts"'
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
              children: '                            "end_ts"'
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
              children: "190"
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
              children: '                            "duration"'
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
              children: "40"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                            "text"'
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
              children: '"!"'
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
              children: '                            "start_ts"'
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
              children: "190"
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
              children: '                            "end_ts"'
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
              children: "200"
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
              children: '                            "duration"'
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
              children: "10"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                    ]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                }"
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
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "audio"
      }), " 字段中各字段含义如下："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "data"
        }), "：音频数据，为经过 Base64 编码的 PCM 字节流。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "transcript"
        }), "：音频对应的字幕内容。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "words"
        }), "：字幕对应的逐字（词）时间戳。要求大模型支持逐字输出。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "text"
            }), "：具体的字（词）。"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "start_ts"
            }), "：相对本次请求音频 PCM 数据开始时间的毫秒数。"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "end_ts"
            }), "：相对本次请求音频 PCM 数据结束时间的毫秒数。"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "duration"
            }), "：对应字（词）实际播放时长。"]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "根据你的应用场景，可以让你的自定义大模型选择性处理并发送以上字段，例如："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["纯音频输出：仅 ", _jsx(_components.code, {
          children: "data"
        }), " 字段必选。"]
      }), `
`, _jsxs(_components.li, {
        children: ["纯字幕输出：仅 ", _jsx(_components.code, {
          children: "transcript"
        }), " 字段必选。单纯发送字幕内容，且该字幕不会通过 TTS 模块播报。"]
      }), `
`, _jsxs(_components.li, {
        children: ["音频＋逐字字幕输出：", _jsx(_components.code, {
          children: "data"
        }), " 和 ", _jsx(_components.code, {
          children: "words"
        }), " 字段必选。其中，", _jsx(_components.code, {
          children: "words"
        }), " 字段中必选发送 ", _jsx(_components.code, {
          children: "text"
        }), " 和 ", _jsx(_components.code, {
          children: "start_ts"
        }), " 字段，", _jsx(_components.code, {
          children: "end_ts"
        }), " 字段和 ", _jsx(_components.code, {
          children: "duration"
        }), " 字段可二选一。"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "进阶功能",
      children: "进阶功能"
    }), `
`, _jsx(_components.h3, {
      id: "上下文管理",
      children: "上下文管理"
    }), `
`, _jsxs(_components.p, {
      children: ["响应中包含 ", _jsx(_components.code, {
        children: "audio.transcript"
      }), " 字段时，其中的字幕内容会自动存入智能体的上下文管理器中，并用于后续的上下文管理。如果没有收到 ", _jsx(_components.code, {
        children: "audio.transcript"
      }), " 字段，则不会存入上下文管理器中。"]
    }), `
`, _jsxs(_components.p, {
      children: ["如果你想让智能体的短期记忆中包含音频模态输出的内容，请确保响应中包含 ", _jsx(_components.code, {
        children: "audio.transcript"
      }), " 字段。"]
    }), `
`, _jsx(_components.h3, {
      id: "字幕对齐",
      children: "字幕对齐"
    }), `
`, _jsxs(_components.p, {
      children: ["参考", _jsx(_components.a, {
        href: "../../ai/realtime-sub.md",
        children: "实时字幕"
      }), "文档完成字幕渲染逻辑后，如果大模型的响应中包含 ", _jsx(_components.code, {
        children: "audio.words"
      }), " 字段，声网对话式 AI 引擎会根据 ", _jsx(_components.code, {
        children: "audio.words"
      }), " 字段中的 ", _jsx(_components.code, {
        children: "start_ts"
      }), " 和 ", _jsx(_components.code, {
        children: "end_ts"
      }), "/", _jsx(_components.code, {
        children: "duration"
      }), " 字段对音频进行断句，并根据断句结果进行字幕对齐。"]
    }), `
`, _jsxs(_components.p, {
      children: ["因此，如果你想让智能体在播报音频时，能够根据字幕内容进行断句，请确保大模型发送了 ", _jsx(_components.code, {
        children: "audio.data"
      }), " 和 ", _jsx(_components.code, {
        children: "audio.words"
      }), " 字段。"]
    }), `
`, _jsx(_components.h3, {
      id: "智能体播报消息",
      children: "智能体播报消息"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你创建的智能体没有配置 TTS 模块，但配置了音频模态输出（", _jsx(_components.code, {
        children: "output_modalities"
      }), " 为 ", _jsx(_components.code, {
        children: '["audio"]'
      }), "），为了让智能体语音播报自定义消息，你可以按以下规则适配你的自定义大模型："]
    }), `
`, _jsxs(_components.p, {
      children: ["智能体接收并发送给自定义大模型的消息列表 ", _jsx(_components.code, {
        children: "messages"
      }), " 中，期望大模型根据最后一条消息的 ", _jsx(_components.code, {
        children: "role"
      }), " 进行以下处理："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "role"
        }), " 为 ", _jsx(_components.code, {
          children: "assistant"
        }), "：大模型视为该条消息无需思考，你可以自行转换为音频并发送给智能体，智能体收到后将直接播报该音频。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "role"
        }), " 为 ", _jsx(_components.code, {
          children: "user"
        }), "：大模型视为该条消息需要经过思考，智能体将根据思考后返回的响应内容是否包含音频决定是否播报该条消息。对应用户和智能体对话问答的常规场景。"]
      }), `
`]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsx(_components.p, {
        children: `信息
以下智能体播报行为同样采取该协议：`
      }), `
`, _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["智能体播报问候语 (", _jsx(_components.code, {
            children: "greeting_message"
          }), ")、处理失败提示 (", _jsx(_components.code, {
            children: "failure_message"
          }), ") 和静默提示 (", _jsx(_components.code, {
            children: "silence_message"
          }), ") 时"]
        }), `
`, _jsxs(_components.li, {
          children: ["调用 ", _jsx(_components.a, {
            href: "../operations/agent-speak.md",
            children: "POST 播报自定义消息"
          }), "时"]
        }), `
`]
      }), `
`]
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
          href: "https://github.com/AgoraIO-Community/Conversational-AI-Server-Sample",
          children: "Conversational-AI-Server-Sample"
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
