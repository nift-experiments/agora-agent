import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "事件类型",
  description: "开通声网消息通知后，声网通知服务器以 HTTPS POST 请求方法向你的服务器发送频道事件通知回调。数据格式为 JSON，字符编码为 UTF-8，签名算法为 HMAC/SHA1 或 HMAC/SHA256。"
};
export let _markdown = `

开通声网消息通知后，声网通知服务器以 HTTPS POST 请求方法向你的服务器发送频道事件通知回调。数据格式为 JSON，字符编码为 UTF-8，签名算法为 HMAC/SHA1 或 HMAC/SHA256。

本页介绍频道事件回调中返回的各事件类型及含义。

## 请求的 Header [#请求的-header]

消息通知回调的 \`header\` 中包含以下字段：

| 字段名                  | 值                                                                                              |
| :------------------- | :--------------------------------------------------------------------------------------------- |
| \`Content-Type\`       | Application/json                                                                               |
| \`Agora-Signature\`    | 声网用客户密钥和 HMAC/SHA1 算法生成的签名值。你需要使用客户密钥和 HMAC/SHA1 算法来验证该签名值。详见[验证签名](./enable-ncs.md#验证签名)。     |
| \`Agora-Signature-V2\` | 声网用客户密钥和 HMAC/SHA256 算法生成的签名值。你需要使用客户密钥和 HMAC/SHA256 算法来验证该签名值。详见[验证签名](./enable-ncs.md#验证签名)。 |

## 请求的 Body [#请求的-body]

消息通知回调的请求包体包含以下字段：

| 字段          | 类型          | 描述                                                         |
| :---------- | :---------- | :--------------------------------------------------------- |
| \`noticeId\`  | String      | 通知 ID，标识来自声网业务服务器的一次事件通知。                                  |
| \`productId\` | Number      | 业务 ID。值为 \`17\` 表示对话式 AI 引擎业务。                               |
| \`eventType\` | Number      | 通知的事件类型。详见[事件类型](#eventtype)。                              |
| \`notifyMs\`  | Number      | 声网消息服务器向你的服务器发送事件通知的 Unix 时间戳 (ms)。通知**重试**时该值会更新。         |
| \`payload\`   | JSON Object | 通知事件的具体内容。\`payload\` 因 \`eventType\` 而异，详见[事件类型](#eventtype)。 |

消息通知回调的请求包体示例：

\`\`\`json
{
    "noticeId": "2000001428:4330:107",
    "productId": 17,
    "eventType": 101,
    "notifyMs": 1611566412672,
    "payload": {...}
}
\`\`\`

<a id="eventtype" />

## 事件类型 [#事件类型]

声网消息通知服务可以通知对话式 AI 引擎服务中的以下事件：

| eventType | event\\_name           | 事件描述                                                                                                                                                           |
| --------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 101       | \`agent joined\`        | 智能体加入频道。                                                                                                                                                       |
| 102       | \`agent left\`          | 智能体离开频道。                                                                                                                                                       |
| 103       | \`agent history\`       | 智能体停止后回调其储存的短期记忆（最大条数由[创建智能体](../operations/start-agent.md#llm-max_history)时传入的 \`llm.max_history\` 参数决定，默认为 32 条），包括以下信息：<br />- 用户和智能体对话消息<br />- 智能体创建和停止的时间戳 |
| 110       | \`agent error\`         | 智能体错误。                                                                                                                                                         |
| 111       | \`agent metrics\`       | 智能体性能指标。                                                                                                                                                       |
| 112       | \`turn finished\`       | 对话轮次 (turn) 结束。                                                                                                                                                |
| 201       | \`inbound call state\`  | 呼入电话状态变化。                                                                                                                                                      |
| 202       | \`outbound call state\` | 呼出电话状态变化。                                                                                                                                                      |

<a id="101" />

### 101 agent joined [#101-agent-joined]

\`eventType\` 为 \`101\` 表示智能体加入频道，\`payload\` 中包含以下字段：

| 字段         | 数据类型   | 含义                                 |
| :--------- | :----- | :--------------------------------- |
| \`agent_id\` | String | 智能体 ID。                            |
| \`name\`     | String | 智能体名称。                             |
| \`start_ts\` | Number | 智能体创建并加入频道的时间戳。                    |
| \`channel\`  | String | 智能体所在频道名。                          |
| \`labels\`   | Object | 自定义标签。仅在创建智能体时传入了 \`labels\` 字段才会返回。 |

\`payload\` 示例：

\`\`\`json
{
    "agent_id": "1NT29X10YHxxxxxWJOXLYHNYB",
    "name": "support_agent_001",
    "start_ts": 1737111452,
    "channel": "xxxxx",
    "labels": {
        "campaign_id": "test_campaign",
        "customer_group": "vip"
    }
}
\`\`\`

<a id="102" />

### 102 agent left [#102-agent-left]

\`eventType\` 为 \`102\` 表示智能体离开频道，\`payload\` 中包含以下字段：

| 字段         | 数据类型   | 含义                                 |
| :--------- | :----- | :--------------------------------- |
| \`agent_id\` | String | 智能体 ID。                            |
| \`name\`     | String | 智能体名称。                             |
| \`start_ts\` | Number | 智能体创建并加入频道的时间戳。                    |
| \`stop_ts\`  | Number | 智能体停止并离开频道的时间戳。                    |
| \`channel\`  | String | 智能体所在频道名。                          |
| \`status\`   | String | 智能体状态。                             |
| \`message\`  | String | 智能体离开频道的原因。                        |
| \`labels\`   | Object | 自定义标签。仅在创建智能体时传入了 \`labels\` 字段才会返回。 |

智能体因不同原因离开频道的 \`payload\` 示例：

#### 手动停止智能体 [#手动停止智能体]

\`\`\`json
    {
        "agent_id": "1NT29X10YHxxxxxWJOXLYHNYB",
        "name": "support_agent_001",
        "start_ts": 1737111452,
        "stop_ts": 1737111455,
        "channel": "xxxxx",
        "status": "STOPPED",
        "message": "OK"
    }
\`\`\`

#### 智能体空闲超时 [#智能体空闲超时]

\`\`\`json
    {
        "agent_id": "1NT29X10YHxxxxxWJOXLYHNYB",
        "name": "support_agent_001",
        "start_ts": 1737111452,
        "stop_ts": 1737111455,
        "channel": "xxxxx",
        "status": "STOPPED",
        "message": "Idle for too long"
    }
\`\`\`

#### 智能体出错 [#智能体出错]

\`\`\`json
    {
        "agent_id": "1NT29X10YHxxxxxWJOXLYHNYB",
        "name": "support_agent_001",
        "start_ts": 1737111452,
        "stop_ts": 1737111455,
        "channel": "xxxxx",
        "status": "FAILED",
        "message": "Connecting for too long"
    }
\`\`\`

#### RTC 连接出错 [#rtc-连接出错]

\`\`\`json
    {
        "agent_id": "1NT29X10YHxxxxxWJOXLYHNYB",
        "name": "support_agent_001",
        "start_ts": 1737111452,
        "stop_ts": 1737111455,
        "channel": "xxxxx",
        "status": "FAILED",
        "message": "RTC connection error"
    }
\`\`\`

<a id="103" />

### 103 agent history [#103-agent-history]

\`eventType\` 为 \`103\` 表示用户和智能体对话的短期记忆，\`payload\` 中包含以下字段：

| 字段         | 数据类型           | 含义                                                                                                                 |
| ---------- | -------------- | ------------------------------------------------------------------------------------------------------------------ |
| \`agent_id\` | String         | 智能体 ID。                                                                                                            |
| \`name\`     | String         | 智能体名称。                                                                                                             |
| \`channel\`  | String         | 智能体所在频道名。                                                                                                          |
| \`start_ts\` | Number         | 智能体创建并加入频道的时间戳。                                                                                                    |
| \`stop_ts\`  | Number         | 智能体停止并离开频道的时间戳。                                                                                                    |
| \`contents\` | Array\\[Object] | 用户和智能体对话的短期记忆。包含以下字段：<br />- \`role\`：消息发送角色，包括以下值：<br />- \`user\`：用户。<br />- \`assistant\`：智能体。<br />- \`content\`：消息内容。 |
| \`labels\`   | Object         | 自定义标签。仅在创建智能体时传入了 \`labels\` 字段才会返回。                                                                                 |

\`payload\` 示例：

\`\`\`json
{
    "agent_id": "xxxx",
    "name": "support_agent_001",
    "channel": "xxxx",
    "start_ts": 123,
    "stop_ts": 123,
    "contents": [
        {
            "role": "user",
            "content": "hello."
        },
        {
            "role": "assistant",
            "content": "hi, how can I help you?",
        }
    ],
    "labels": {
        "campaign_id": "test_campaign",
        "customer_group": "vip"
    }
}
\`\`\`

<a id="110" />

### 110 agent error [#110-agent-error]

\`eventType\` 为 \`110\` 表示智能体出错，\`payload\` 中包含以下字段：

| 字段         | 数据类型   | 含义                                                                                                                                  |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| \`agent_id\` | String | 智能体 ID。                                                                                                                             |
| \`name\`     | String | 智能体名称。                                                                                                                              |
| \`start_ts\` | Number | 智能体创建并加入频道的时间戳。                                                                                                                     |
| \`channel\`  | String | 智能体所在频道名。                                                                                                                           |
| \`turn_id\`  | String | 字幕对话轮次，详见[实时字幕 API 参考](../user-guides/realtime-sub.md#api-参考)。                                                                      |
| \`errors\`   | Array  | 错误信息。包含以下字段：<br />- \`module\`：错误发生的模块。<br />- \`turn_id\`：字幕对话轮次。<br />- \`code\`：错误码。你可以前往错误模块对应供应商的错误码文档查看详细信息。<br />- \`message\`：错误信息。 |
| \`labels\`   | Object | 自定义标签。仅在创建智能体时传入了 \`labels\` 字段才会返回。                                                                                                  |

智能体出错时返回的 \`payload\` 示例：

\`\`\`json
{
    "agent_id": "1NT29X10YHxxxxxWJOXLYHNYB",
    "name": "support_agent_001",
    "start_ts": 1737111452,
    "channel": "xxxxx",
    "turn_id": 2,
    "errors": [{"module": "llm", "turn_id":2, "code":503, "message": "Insufficient balance."}],
}
\`\`\`

<a id="111" />

### 111 agent metrics [#111-agent-metrics]

\`eventType\` 为 \`111\` 表示智能体性能指标，\`payload\` 中包含以下字段：

| 字段         | 数据类型           | 含义                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`agent_id\` | String         | 智能体 ID。                                                                                                                                                                                                                                                                                                                                                                                                     |
| \`name\`     | String         | 智能体名称。                                                                                                                                                                                                                                                                                                                                                                                                      |
| \`start_ts\` | Number         | 智能体创建并加入频道的时间戳。                                                                                                                                                                                                                                                                                                                                                                                             |
| \`stop_ts\`  | Number         | 智能体停止并离开频道的时间戳。                                                                                                                                                                                                                                                                                                                                                                                             |
| \`channel\`  | String         | 智能体所在频道名。                                                                                                                                                                                                                                                                                                                                                                                                   |
| \`metrics\`  | Array\\[Object] | 性能指标数组。每个对象包含以下字段：<br />- \`turn_id\`：对话轮次 ID。<br />- \`asr_ttlw\`：ASR 模块的 ttlw（Time To Last Word）指标，表示从用户说话结束到 ASR 输出最后一个词的延迟时间（ms）。<br />- \`llm_ttfb\`：LLM 模块的 ttfb（Time To First Byte）指标，表示从 LLM 请求开始到收到第一个字节的响应延迟时间（ms）。<br />- \`llm_ttfs\`：LLM 模块的 ttfs（Time To First Sentence）指标，表示从 LLM 请求开始到收到第一个完整句子的响应所经过的时间（ms）。<br />- \`tts_ttfb\`：TTS 模块的 ttfb（Time To First Byte）指标，表示从 TTS 请求开始到收到第一个字节的响应延迟时间（ms）。 |
| \`labels\`   | Object         | 自定义标签。仅在创建智能体时传入了 \`labels\` 字段才会返回。                                                                                                                                                                                                                                                                                                                                                                          |

\`payload\` 示例：

\`\`\`json
{
    "agent_id": "A42AC47Hxxxxxxxx4PK27ND25E",
    "name": "support_agent_001",
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
        },
        {
            "turn_id": 3,
            "asr_ttlw": 103,
            "llm_ttfb": 306,
            "llm_ttfs": 948,
            "tts_ttfb": 106,
        }
    ],
    "labels": {
        "campaign_id": "test_campaign",
        "customer_group": "vip"
    }
}
\`\`\`

<a id="201" />
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "开通声网消息通知后，声网通知服务器以 HTTPS POST 请求方法向你的服务器发送频道事件通知回调。数据格式为 JSON，字符编码为 UTF-8，签名算法为 HMAC/SHA1 或 HMAC/SHA256。"
  }, {
    heading: undefined,
    content: "本页介绍频道事件回调中返回的各事件类型及含义。"
  }, {
    heading: "请求的-header",
    content: "消息通知回调的 `header` 中包含以下字段："
  }, {
    heading: "请求的-header",
    content: "字段名"
  }, {
    heading: "请求的-header",
    content: "值"
  }, {
    heading: "请求的-header",
    content: "`Content-Type`"
  }, {
    heading: "请求的-header",
    content: "Application/json"
  }, {
    heading: "请求的-header",
    content: "`Agora-Signature`"
  }, {
    heading: "请求的-header",
    content: "声网用客户密钥和 HMAC/SHA1 算法生成的签名值。你需要使用客户密钥和 HMAC/SHA1 算法来验证该签名值。详见验证签名。"
  }, {
    heading: "请求的-header",
    content: "`Agora-Signature-V2`"
  }, {
    heading: "请求的-header",
    content: "声网用客户密钥和 HMAC/SHA256 算法生成的签名值。你需要使用客户密钥和 HMAC/SHA256 算法来验证该签名值。详见验证签名。"
  }, {
    heading: "请求的-body",
    content: "消息通知回调的请求包体包含以下字段："
  }, {
    heading: "请求的-body",
    content: "字段"
  }, {
    heading: "请求的-body",
    content: "类型"
  }, {
    heading: "请求的-body",
    content: "描述"
  }, {
    heading: "请求的-body",
    content: "`noticeId`"
  }, {
    heading: "请求的-body",
    content: "String"
  }, {
    heading: "请求的-body",
    content: "通知 ID，标识来自声网业务服务器的一次事件通知。"
  }, {
    heading: "请求的-body",
    content: "`productId`"
  }, {
    heading: "请求的-body",
    content: "Number"
  }, {
    heading: "请求的-body",
    content: "业务 ID。值为 `17` 表示对话式 AI 引擎业务。"
  }, {
    heading: "请求的-body",
    content: "`eventType`"
  }, {
    heading: "请求的-body",
    content: "Number"
  }, {
    heading: "请求的-body",
    content: "通知的事件类型。详见事件类型。"
  }, {
    heading: "请求的-body",
    content: "`notifyMs`"
  }, {
    heading: "请求的-body",
    content: "Number"
  }, {
    heading: "请求的-body",
    content: "声网消息服务器向你的服务器发送事件通知的 Unix 时间戳 (ms)。通知**重试**时该值会更新。"
  }, {
    heading: "请求的-body",
    content: "`payload`"
  }, {
    heading: "请求的-body",
    content: "JSON Object"
  }, {
    heading: "请求的-body",
    content: "通知事件的具体内容。`payload` 因 `eventType` 而异，详见事件类型。"
  }, {
    heading: "请求的-body",
    content: "消息通知回调的请求包体示例："
  }, {
    heading: "事件类型",
    content: "声网消息通知服务可以通知对话式 AI 引擎服务中的以下事件："
  }, {
    heading: "事件类型",
    content: "eventType"
  }, {
    heading: "事件类型",
    content: "event\\_name"
  }, {
    heading: "事件类型",
    content: "事件描述"
  }, {
    heading: "事件类型",
    content: "101"
  }, {
    heading: "事件类型",
    content: "`agent joined`"
  }, {
    heading: "事件类型",
    content: "智能体加入频道。"
  }, {
    heading: "事件类型",
    content: "102"
  }, {
    heading: "事件类型",
    content: "`agent left`"
  }, {
    heading: "事件类型",
    content: "智能体离开频道。"
  }, {
    heading: "事件类型",
    content: "103"
  }, {
    heading: "事件类型",
    content: "`agent history`"
  }, {
    heading: "事件类型",
    content: "智能体停止后回调其储存的短期记忆（最大条数由创建智能体时传入的 `llm.max_history` 参数决定，默认为 32 条），包括以下信息：- 用户和智能体对话消息- 智能体创建和停止的时间戳"
  }, {
    heading: "事件类型",
    content: "110"
  }, {
    heading: "事件类型",
    content: "`agent error`"
  }, {
    heading: "事件类型",
    content: "智能体错误。"
  }, {
    heading: "事件类型",
    content: "111"
  }, {
    heading: "事件类型",
    content: "`agent metrics`"
  }, {
    heading: "事件类型",
    content: "智能体性能指标。"
  }, {
    heading: "事件类型",
    content: "112"
  }, {
    heading: "事件类型",
    content: "`turn finished`"
  }, {
    heading: "事件类型",
    content: "对话轮次 (turn) 结束。"
  }, {
    heading: "事件类型",
    content: "201"
  }, {
    heading: "事件类型",
    content: "`inbound call state`"
  }, {
    heading: "事件类型",
    content: "呼入电话状态变化。"
  }, {
    heading: "事件类型",
    content: "202"
  }, {
    heading: "事件类型",
    content: "`outbound call state`"
  }, {
    heading: "事件类型",
    content: "呼出电话状态变化。"
  }, {
    heading: "101-agent-joined",
    content: "`eventType` 为 `101` 表示智能体加入频道，`payload` 中包含以下字段："
  }, {
    heading: "101-agent-joined",
    content: "字段"
  }, {
    heading: "101-agent-joined",
    content: "数据类型"
  }, {
    heading: "101-agent-joined",
    content: "含义"
  }, {
    heading: "101-agent-joined",
    content: "`agent_id`"
  }, {
    heading: "101-agent-joined",
    content: "String"
  }, {
    heading: "101-agent-joined",
    content: "智能体 ID。"
  }, {
    heading: "101-agent-joined",
    content: "`name`"
  }, {
    heading: "101-agent-joined",
    content: "String"
  }, {
    heading: "101-agent-joined",
    content: "智能体名称。"
  }, {
    heading: "101-agent-joined",
    content: "`start_ts`"
  }, {
    heading: "101-agent-joined",
    content: "Number"
  }, {
    heading: "101-agent-joined",
    content: "智能体创建并加入频道的时间戳。"
  }, {
    heading: "101-agent-joined",
    content: "`channel`"
  }, {
    heading: "101-agent-joined",
    content: "String"
  }, {
    heading: "101-agent-joined",
    content: "智能体所在频道名。"
  }, {
    heading: "101-agent-joined",
    content: "`labels`"
  }, {
    heading: "101-agent-joined",
    content: "Object"
  }, {
    heading: "101-agent-joined",
    content: "自定义标签。仅在创建智能体时传入了 `labels` 字段才会返回。"
  }, {
    heading: "101-agent-joined",
    content: "`payload` 示例："
  }, {
    heading: "102-agent-left",
    content: "`eventType` 为 `102` 表示智能体离开频道，`payload` 中包含以下字段："
  }, {
    heading: "102-agent-left",
    content: "字段"
  }, {
    heading: "102-agent-left",
    content: "数据类型"
  }, {
    heading: "102-agent-left",
    content: "含义"
  }, {
    heading: "102-agent-left",
    content: "`agent_id`"
  }, {
    heading: "102-agent-left",
    content: "String"
  }, {
    heading: "102-agent-left",
    content: "智能体 ID。"
  }, {
    heading: "102-agent-left",
    content: "`name`"
  }, {
    heading: "102-agent-left",
    content: "String"
  }, {
    heading: "102-agent-left",
    content: "智能体名称。"
  }, {
    heading: "102-agent-left",
    content: "`start_ts`"
  }, {
    heading: "102-agent-left",
    content: "Number"
  }, {
    heading: "102-agent-left",
    content: "智能体创建并加入频道的时间戳。"
  }, {
    heading: "102-agent-left",
    content: "`stop_ts`"
  }, {
    heading: "102-agent-left",
    content: "Number"
  }, {
    heading: "102-agent-left",
    content: "智能体停止并离开频道的时间戳。"
  }, {
    heading: "102-agent-left",
    content: "`channel`"
  }, {
    heading: "102-agent-left",
    content: "String"
  }, {
    heading: "102-agent-left",
    content: "智能体所在频道名。"
  }, {
    heading: "102-agent-left",
    content: "`status`"
  }, {
    heading: "102-agent-left",
    content: "String"
  }, {
    heading: "102-agent-left",
    content: "智能体状态。"
  }, {
    heading: "102-agent-left",
    content: "`message`"
  }, {
    heading: "102-agent-left",
    content: "String"
  }, {
    heading: "102-agent-left",
    content: "智能体离开频道的原因。"
  }, {
    heading: "102-agent-left",
    content: "`labels`"
  }, {
    heading: "102-agent-left",
    content: "Object"
  }, {
    heading: "102-agent-left",
    content: "自定义标签。仅在创建智能体时传入了 `labels` 字段才会返回。"
  }, {
    heading: "102-agent-left",
    content: "智能体因不同原因离开频道的 `payload` 示例："
  }, {
    heading: "103-agent-history",
    content: "`eventType` 为 `103` 表示用户和智能体对话的短期记忆，`payload` 中包含以下字段："
  }, {
    heading: "103-agent-history",
    content: "字段"
  }, {
    heading: "103-agent-history",
    content: "数据类型"
  }, {
    heading: "103-agent-history",
    content: "含义"
  }, {
    heading: "103-agent-history",
    content: "`agent_id`"
  }, {
    heading: "103-agent-history",
    content: "String"
  }, {
    heading: "103-agent-history",
    content: "智能体 ID。"
  }, {
    heading: "103-agent-history",
    content: "`name`"
  }, {
    heading: "103-agent-history",
    content: "String"
  }, {
    heading: "103-agent-history",
    content: "智能体名称。"
  }, {
    heading: "103-agent-history",
    content: "`channel`"
  }, {
    heading: "103-agent-history",
    content: "String"
  }, {
    heading: "103-agent-history",
    content: "智能体所在频道名。"
  }, {
    heading: "103-agent-history",
    content: "`start_ts`"
  }, {
    heading: "103-agent-history",
    content: "Number"
  }, {
    heading: "103-agent-history",
    content: "智能体创建并加入频道的时间戳。"
  }, {
    heading: "103-agent-history",
    content: "`stop_ts`"
  }, {
    heading: "103-agent-history",
    content: "Number"
  }, {
    heading: "103-agent-history",
    content: "智能体停止并离开频道的时间戳。"
  }, {
    heading: "103-agent-history",
    content: "`contents`"
  }, {
    heading: "103-agent-history",
    content: "Array\\[Object]"
  }, {
    heading: "103-agent-history",
    content: "用户和智能体对话的短期记忆。包含以下字段：- `role`：消息发送角色，包括以下值：- `user`：用户。- `assistant`：智能体。- `content`：消息内容。"
  }, {
    heading: "103-agent-history",
    content: "`labels`"
  }, {
    heading: "103-agent-history",
    content: "Object"
  }, {
    heading: "103-agent-history",
    content: "自定义标签。仅在创建智能体时传入了 `labels` 字段才会返回。"
  }, {
    heading: "103-agent-history",
    content: "`payload` 示例："
  }, {
    heading: "110-agent-error",
    content: "`eventType` 为 `110` 表示智能体出错，`payload` 中包含以下字段："
  }, {
    heading: "110-agent-error",
    content: "字段"
  }, {
    heading: "110-agent-error",
    content: "数据类型"
  }, {
    heading: "110-agent-error",
    content: "含义"
  }, {
    heading: "110-agent-error",
    content: "`agent_id`"
  }, {
    heading: "110-agent-error",
    content: "String"
  }, {
    heading: "110-agent-error",
    content: "智能体 ID。"
  }, {
    heading: "110-agent-error",
    content: "`name`"
  }, {
    heading: "110-agent-error",
    content: "String"
  }, {
    heading: "110-agent-error",
    content: "智能体名称。"
  }, {
    heading: "110-agent-error",
    content: "`start_ts`"
  }, {
    heading: "110-agent-error",
    content: "Number"
  }, {
    heading: "110-agent-error",
    content: "智能体创建并加入频道的时间戳。"
  }, {
    heading: "110-agent-error",
    content: "`channel`"
  }, {
    heading: "110-agent-error",
    content: "String"
  }, {
    heading: "110-agent-error",
    content: "智能体所在频道名。"
  }, {
    heading: "110-agent-error",
    content: "`turn_id`"
  }, {
    heading: "110-agent-error",
    content: "String"
  }, {
    heading: "110-agent-error",
    content: "字幕对话轮次，详见实时字幕 API 参考。"
  }, {
    heading: "110-agent-error",
    content: "`errors`"
  }, {
    heading: "110-agent-error",
    content: "Array"
  }, {
    heading: "110-agent-error",
    content: "错误信息。包含以下字段：- `module`：错误发生的模块。- `turn_id`：字幕对话轮次。- `code`：错误码。你可以前往错误模块对应供应商的错误码文档查看详细信息。- `message`：错误信息。"
  }, {
    heading: "110-agent-error",
    content: "`labels`"
  }, {
    heading: "110-agent-error",
    content: "Object"
  }, {
    heading: "110-agent-error",
    content: "自定义标签。仅在创建智能体时传入了 `labels` 字段才会返回。"
  }, {
    heading: "110-agent-error",
    content: "智能体出错时返回的 `payload` 示例："
  }, {
    heading: "111-agent-metrics",
    content: "`eventType` 为 `111` 表示智能体性能指标，`payload` 中包含以下字段："
  }, {
    heading: "111-agent-metrics",
    content: "字段"
  }, {
    heading: "111-agent-metrics",
    content: "数据类型"
  }, {
    heading: "111-agent-metrics",
    content: "含义"
  }, {
    heading: "111-agent-metrics",
    content: "`agent_id`"
  }, {
    heading: "111-agent-metrics",
    content: "String"
  }, {
    heading: "111-agent-metrics",
    content: "智能体 ID。"
  }, {
    heading: "111-agent-metrics",
    content: "`name`"
  }, {
    heading: "111-agent-metrics",
    content: "String"
  }, {
    heading: "111-agent-metrics",
    content: "智能体名称。"
  }, {
    heading: "111-agent-metrics",
    content: "`start_ts`"
  }, {
    heading: "111-agent-metrics",
    content: "Number"
  }, {
    heading: "111-agent-metrics",
    content: "智能体创建并加入频道的时间戳。"
  }, {
    heading: "111-agent-metrics",
    content: "`stop_ts`"
  }, {
    heading: "111-agent-metrics",
    content: "Number"
  }, {
    heading: "111-agent-metrics",
    content: "智能体停止并离开频道的时间戳。"
  }, {
    heading: "111-agent-metrics",
    content: "`channel`"
  }, {
    heading: "111-agent-metrics",
    content: "String"
  }, {
    heading: "111-agent-metrics",
    content: "智能体所在频道名。"
  }, {
    heading: "111-agent-metrics",
    content: "`metrics`"
  }, {
    heading: "111-agent-metrics",
    content: "Array\\[Object]"
  }, {
    heading: "111-agent-metrics",
    content: "性能指标数组。每个对象包含以下字段：- `turn_id`：对话轮次 ID。- `asr_ttlw`：ASR 模块的 ttlw（Time To Last Word）指标，表示从用户说话结束到 ASR 输出最后一个词的延迟时间（ms）。- `llm_ttfb`：LLM 模块的 ttfb（Time To First Byte）指标，表示从 LLM 请求开始到收到第一个字节的响应延迟时间（ms）。- `llm_ttfs`：LLM 模块的 ttfs（Time To First Sentence）指标，表示从 LLM 请求开始到收到第一个完整句子的响应所经过的时间（ms）。- `tts_ttfb`：TTS 模块的 ttfb（Time To First Byte）指标，表示从 TTS 请求开始到收到第一个字节的响应延迟时间（ms）。"
  }, {
    heading: "111-agent-metrics",
    content: "`labels`"
  }, {
    heading: "111-agent-metrics",
    content: "Object"
  }, {
    heading: "111-agent-metrics",
    content: "自定义标签。仅在创建智能体时传入了 `labels` 字段才会返回。"
  }, {
    heading: "111-agent-metrics",
    content: "`payload` 示例："
  }],
  headings: [{
    id: "请求的-header",
    content: "请求的 Header"
  }, {
    id: "请求的-body",
    content: "请求的 Body"
  }, {
    id: "事件类型",
    content: "事件类型"
  }, {
    id: "101-agent-joined",
    content: "101 agent joined"
  }, {
    id: "102-agent-left",
    content: "102 agent left"
  }, {
    id: "手动停止智能体",
    content: "手动停止智能体"
  }, {
    id: "智能体空闲超时",
    content: "智能体空闲超时"
  }, {
    id: "智能体出错",
    content: "智能体出错"
  }, {
    id: "rtc-连接出错",
    content: "RTC 连接出错"
  }, {
    id: "103-agent-history",
    content: "103 agent history"
  }, {
    id: "110-agent-error",
    content: "110 agent error"
  }, {
    id: "111-agent-metrics",
    content: "111 agent metrics"
  }]
};
export let toc = [{
  depth: 2,
  url: "#请求的-header",
  title: _jsx(_Fragment, {
    children: "请求的 Header"
  })
}, {
  depth: 2,
  url: "#请求的-body",
  title: _jsx(_Fragment, {
    children: "请求的 Body"
  })
}, {
  depth: 2,
  url: "#事件类型",
  title: _jsx(_Fragment, {
    children: "事件类型"
  })
}, {
  depth: 3,
  url: "#101-agent-joined",
  title: _jsx(_Fragment, {
    children: "101 agent joined"
  })
}, {
  depth: 3,
  url: "#102-agent-left",
  title: _jsx(_Fragment, {
    children: "102 agent left"
  })
}, {
  depth: 4,
  url: "#手动停止智能体",
  title: _jsx(_Fragment, {
    children: "手动停止智能体"
  })
}, {
  depth: 4,
  url: "#智能体空闲超时",
  title: _jsx(_Fragment, {
    children: "智能体空闲超时"
  })
}, {
  depth: 4,
  url: "#智能体出错",
  title: _jsx(_Fragment, {
    children: "智能体出错"
  })
}, {
  depth: 4,
  url: "#rtc-连接出错",
  title: _jsx(_Fragment, {
    children: "RTC 连接出错"
  })
}, {
  depth: 3,
  url: "#103-agent-history",
  title: _jsx(_Fragment, {
    children: "103 agent history"
  })
}, {
  depth: 3,
  url: "#110-agent-error",
  title: _jsx(_Fragment, {
    children: "110 agent error"
  })
}, {
  depth: 3,
  url: "#111-agent-metrics",
  title: _jsx(_Fragment, {
    children: "111 agent metrics"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "开通声网消息通知后，声网通知服务器以 HTTPS POST 请求方法向你的服务器发送频道事件通知回调。数据格式为 JSON，字符编码为 UTF-8，签名算法为 HMAC/SHA1 或 HMAC/SHA256。"
    }), `
`, _jsx(_components.p, {
      children: "本页介绍频道事件回调中返回的各事件类型及含义。"
    }), `
`, _jsx(_components.h2, {
      id: "请求的-header",
      children: "请求的 Header"
    }), `
`, _jsxs(_components.p, {
      children: ["消息通知回调的 ", _jsx(_components.code, {
        children: "header"
      }), " 中包含以下字段："]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "字段名"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "值"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Content-Type"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Application/json"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Agora-Signature"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["声网用客户密钥和 HMAC/SHA1 算法生成的签名值。你需要使用客户密钥和 HMAC/SHA1 算法来验证该签名值。详见", _jsx(_components.a, {
              href: "./enable-ncs.md#%E9%AA%8C%E8%AF%81%E7%AD%BE%E5%90%8D",
              children: "验证签名"
            }), "。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Agora-Signature-V2"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["声网用客户密钥和 HMAC/SHA256 算法生成的签名值。你需要使用客户密钥和 HMAC/SHA256 算法来验证该签名值。详见", _jsx(_components.a, {
              href: "./enable-ncs.md#%E9%AA%8C%E8%AF%81%E7%AD%BE%E5%90%8D",
              children: "验证签名"
            }), "。"]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "请求的-body",
      children: "请求的 Body"
    }), `
`, _jsx(_components.p, {
      children: "消息通知回调的请求包体包含以下字段："
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "字段"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "类型"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "noticeId"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "通知 ID，标识来自声网业务服务器的一次事件通知。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "productId"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["业务 ID。值为 ", _jsx(_components.code, {
              children: "17"
            }), " 表示对话式 AI 引擎业务。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "eventType"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["通知的事件类型。详见", _jsx(_components.a, {
              href: "#eventtype",
              children: "事件类型"
            }), "。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "notifyMs"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["声网消息服务器向你的服务器发送事件通知的 Unix 时间戳 (ms)。通知", _jsx(_components.strong, {
              children: "重试"
            }), "时该值会更新。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "payload"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["通知事件的具体内容。", _jsx(_components.code, {
              children: "payload"
            }), " 因 ", _jsx(_components.code, {
              children: "eventType"
            }), " 而异，详见", _jsx(_components.a, {
              href: "#eventtype",
              children: "事件类型"
            }), "。"]
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "消息通知回调的请求包体示例："
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
              children: '    "noticeId"'
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
              children: '    "productId"'
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
              children: '    "eventType"'
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
              children: "101"
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
              children: '    "notifyMs"'
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
              children: '    "payload"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
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
`, _jsx("a", {
      id: "eventtype"
    }), `
`, _jsx(_components.h2, {
      id: "事件类型",
      children: "事件类型"
    }), `
`, _jsx(_components.p, {
      children: "声网消息通知服务可以通知对话式 AI 引擎服务中的以下事件："
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "eventType"
          }), _jsx(_components.th, {
            children: "event_name"
          }), _jsx(_components.th, {
            children: "事件描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "101"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agent joined"
            })
          }), _jsx(_components.td, {
            children: "智能体加入频道。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "102"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agent left"
            })
          }), _jsx(_components.td, {
            children: "智能体离开频道。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "103"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agent history"
            })
          }), _jsxs(_components.td, {
            children: ["智能体停止后回调其储存的短期记忆（最大条数由", _jsx(_components.a, {
              href: "../operations/start-agent.md#llm-max_history",
              children: "创建智能体"
            }), "时传入的 ", _jsx(_components.code, {
              children: "llm.max_history"
            }), " 参数决定，默认为 32 条），包括以下信息：", _jsx("br", {}), "- 用户和智能体对话消息", _jsx("br", {}), "- 智能体创建和停止的时间戳"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "110"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agent error"
            })
          }), _jsx(_components.td, {
            children: "智能体错误。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "111"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agent metrics"
            })
          }), _jsx(_components.td, {
            children: "智能体性能指标。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "112"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turn finished"
            })
          }), _jsx(_components.td, {
            children: "对话轮次 (turn) 结束。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "201"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "inbound call state"
            })
          }), _jsx(_components.td, {
            children: "呼入电话状态变化。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "202"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "outbound call state"
            })
          }), _jsx(_components.td, {
            children: "呼出电话状态变化。"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "101"
    }), `
`, _jsx(_components.h3, {
      id: "101-agent-joined",
      children: "101 agent joined"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 为 ", _jsx(_components.code, {
        children: "101"
      }), " 表示智能体加入频道，", _jsx(_components.code, {
        children: "payload"
      }), " 中包含以下字段："]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "字段"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "数据类型"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "含义"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "agent_id"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "智能体 ID。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "name"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "智能体名称。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "start_ts"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "智能体创建并加入频道的时间戳。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "channel"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "智能体所在频道名。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "labels"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["自定义标签。仅在创建智能体时传入了 ", _jsx(_components.code, {
              children: "labels"
            }), " 字段才会返回。"]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "payload"
      }), " 示例："]
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
              children: '"1NT29X10YHxxxxxWJOXLYHNYB"'
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
              children: '    "name"'
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
              children: '"support_agent_001"'
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
              children: "1737111452"
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
              children: '"xxxxx"'
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
              children: '    "labels"'
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
              children: '        "campaign_id"'
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
              children: '"test_campaign"'
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
              children: '        "customer_group"'
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
              children: '"vip"'
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
`, _jsx("a", {
      id: "102"
    }), `
`, _jsx(_components.h3, {
      id: "102-agent-left",
      children: "102 agent left"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 为 ", _jsx(_components.code, {
        children: "102"
      }), " 表示智能体离开频道，", _jsx(_components.code, {
        children: "payload"
      }), " 中包含以下字段："]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "字段"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "数据类型"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "含义"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "agent_id"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "智能体 ID。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "name"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "智能体名称。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "start_ts"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "智能体创建并加入频道的时间戳。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "stop_ts"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "智能体停止并离开频道的时间戳。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "channel"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "智能体所在频道名。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "status"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "智能体状态。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "message"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "智能体离开频道的原因。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "labels"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["自定义标签。仅在创建智能体时传入了 ", _jsx(_components.code, {
              children: "labels"
            }), " 字段才会返回。"]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["智能体因不同原因离开频道的 ", _jsx(_components.code, {
        children: "payload"
      }), " 示例："]
    }), `
`, _jsx(_components.h4, {
      id: "手动停止智能体",
      children: "手动停止智能体"
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
              children: '        "agent_id"'
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
              children: '"1NT29X10YHxxxxxWJOXLYHNYB"'
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
              children: '        "name"'
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
              children: '"support_agent_001"'
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
              children: '        "start_ts"'
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
              children: "1737111452"
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
              children: '        "stop_ts"'
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
              children: "1737111455"
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
              children: '        "channel"'
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
              children: '"xxxxx"'
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
              children: '        "status"'
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
              children: '"STOPPED"'
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
              children: '        "message"'
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
              children: '"OK"'
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
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "智能体空闲超时",
      children: "智能体空闲超时"
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
              children: '        "agent_id"'
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
              children: '"1NT29X10YHxxxxxWJOXLYHNYB"'
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
              children: '        "name"'
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
              children: '"support_agent_001"'
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
              children: '        "start_ts"'
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
              children: "1737111452"
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
              children: '        "stop_ts"'
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
              children: "1737111455"
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
              children: '        "channel"'
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
              children: '"xxxxx"'
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
              children: '        "status"'
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
              children: '"STOPPED"'
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
              children: '        "message"'
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
              children: '"Idle for too long"'
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
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "智能体出错",
      children: "智能体出错"
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
              children: '        "agent_id"'
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
              children: '"1NT29X10YHxxxxxWJOXLYHNYB"'
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
              children: '        "name"'
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
              children: '"support_agent_001"'
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
              children: '        "start_ts"'
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
              children: "1737111452"
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
              children: '        "stop_ts"'
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
              children: "1737111455"
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
              children: '        "channel"'
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
              children: '"xxxxx"'
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
              children: '        "status"'
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
              children: '"FAILED"'
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
              children: '        "message"'
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
              children: '"Connecting for too long"'
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
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "rtc-连接出错",
      children: "RTC 连接出错"
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
              children: '        "agent_id"'
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
              children: '"1NT29X10YHxxxxxWJOXLYHNYB"'
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
              children: '        "name"'
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
              children: '"support_agent_001"'
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
              children: '        "start_ts"'
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
              children: "1737111452"
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
              children: '        "stop_ts"'
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
              children: "1737111455"
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
              children: '        "channel"'
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
              children: '"xxxxx"'
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
              children: '        "status"'
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
              children: '"FAILED"'
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
              children: '        "message"'
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
              children: '"RTC connection error"'
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
          })]
        })
      })
    }), `
`, _jsx("a", {
      id: "103"
    }), `
`, _jsx(_components.h3, {
      id: "103-agent-history",
      children: "103 agent history"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 为 ", _jsx(_components.code, {
        children: "103"
      }), " 表示用户和智能体对话的短期记忆，", _jsx(_components.code, {
        children: "payload"
      }), " 中包含以下字段："]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "字段"
          }), _jsx(_components.th, {
            children: "数据类型"
          }), _jsx(_components.th, {
            children: "含义"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agent_id"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "智能体 ID。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "name"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "智能体名称。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "channel"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "智能体所在频道名。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "start_ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "智能体创建并加入频道的时间戳。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "stop_ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "智能体停止并离开频道的时间戳。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "contents"
            })
          }), _jsx(_components.td, {
            children: "Array[Object]"
          }), _jsxs(_components.td, {
            children: ["用户和智能体对话的短期记忆。包含以下字段：", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "role"
            }), "：消息发送角色，包括以下值：", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "user"
            }), "：用户。", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "assistant"
            }), "：智能体。", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "content"
            }), "：消息内容。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "labels"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsxs(_components.td, {
            children: ["自定义标签。仅在创建智能体时传入了 ", _jsx(_components.code, {
              children: "labels"
            }), " 字段才会返回。"]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "payload"
      }), " 示例："]
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
              children: '"xxxx"'
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
              children: '    "name"'
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
              children: '"support_agent_001"'
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
              children: '"xxxx"'
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
              children: "123"
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
              children: "123"
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
              children: '    "contents"'
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
              children: '            "role"'
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
              children: '            "content"'
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
              children: '"hello."'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
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
              children: '            "role"'
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
              children: '"assistant"'
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
              children: '            "content"'
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
              children: '"hi, how can I help you?"'
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
              children: "    ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "labels"'
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
              children: '        "campaign_id"'
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
              children: '"test_campaign"'
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
              children: '        "customer_group"'
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
              children: '"vip"'
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
`, _jsx("a", {
      id: "110"
    }), `
`, _jsx(_components.h3, {
      id: "110-agent-error",
      children: "110 agent error"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 为 ", _jsx(_components.code, {
        children: "110"
      }), " 表示智能体出错，", _jsx(_components.code, {
        children: "payload"
      }), " 中包含以下字段："]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "字段"
          }), _jsx(_components.th, {
            children: "数据类型"
          }), _jsx(_components.th, {
            children: "含义"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agent_id"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "智能体 ID。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "name"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "智能体名称。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "start_ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "智能体创建并加入频道的时间戳。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "channel"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "智能体所在频道名。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "turn_id"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: ["字幕对话轮次，详见", _jsx(_components.a, {
              href: "../user-guides/realtime-sub.md#api-%E5%8F%82%E8%80%83",
              children: "实时字幕 API 参考"
            }), "。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "errors"
            })
          }), _jsx(_components.td, {
            children: "Array"
          }), _jsxs(_components.td, {
            children: ["错误信息。包含以下字段：", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "module"
            }), "：错误发生的模块。", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "turn_id"
            }), "：字幕对话轮次。", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "code"
            }), "：错误码。你可以前往错误模块对应供应商的错误码文档查看详细信息。", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "message"
            }), "：错误信息。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "labels"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsxs(_components.td, {
            children: ["自定义标签。仅在创建智能体时传入了 ", _jsx(_components.code, {
              children: "labels"
            }), " 字段才会返回。"]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["智能体出错时返回的 ", _jsx(_components.code, {
        children: "payload"
      }), " 示例："]
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
              children: '"1NT29X10YHxxxxxWJOXLYHNYB"'
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
              children: '    "name"'
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
              children: '"support_agent_001"'
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
              children: "1737111452"
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
              children: '"xxxxx"'
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
              children: '    "turn_id"'
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
              children: '    "errors"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": [{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"module"'
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
              children: '"llm"'
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
              children: '"turn_id"'
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
              children: "2"
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
              children: '"code"'
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
              children: "503"
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
              children: '"message"'
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
              children: '"Insufficient balance."'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}],"
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
`, _jsx("a", {
      id: "111"
    }), `
`, _jsx(_components.h3, {
      id: "111-agent-metrics",
      children: "111 agent metrics"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 为 ", _jsx(_components.code, {
        children: "111"
      }), " 表示智能体性能指标，", _jsx(_components.code, {
        children: "payload"
      }), " 中包含以下字段："]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "字段"
          }), _jsx(_components.th, {
            children: "数据类型"
          }), _jsx(_components.th, {
            children: "含义"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agent_id"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "智能体 ID。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "name"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "智能体名称。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "start_ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "智能体创建并加入频道的时间戳。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "stop_ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "智能体停止并离开频道的时间戳。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "channel"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "智能体所在频道名。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "metrics"
            })
          }), _jsx(_components.td, {
            children: "Array[Object]"
          }), _jsxs(_components.td, {
            children: ["性能指标数组。每个对象包含以下字段：", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "turn_id"
            }), "：对话轮次 ID。", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "asr_ttlw"
            }), "：ASR 模块的 ttlw（Time To Last Word）指标，表示从用户说话结束到 ASR 输出最后一个词的延迟时间（ms）。", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "llm_ttfb"
            }), "：LLM 模块的 ttfb（Time To First Byte）指标，表示从 LLM 请求开始到收到第一个字节的响应延迟时间（ms）。", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "llm_ttfs"
            }), "：LLM 模块的 ttfs（Time To First Sentence）指标，表示从 LLM 请求开始到收到第一个完整句子的响应所经过的时间（ms）。", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "tts_ttfb"
            }), "：TTS 模块的 ttfb（Time To First Byte）指标，表示从 TTS 请求开始到收到第一个字节的响应延迟时间（ms）。"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "labels"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsxs(_components.td, {
            children: ["自定义标签。仅在创建智能体时传入了 ", _jsx(_components.code, {
              children: "labels"
            }), " 字段才会返回。"]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "payload"
      }), " 示例："]
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
              children: '    "name"'
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
              children: '"support_agent_001"'
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
              children: '            "turn_id"'
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
              children: '            "tts_ttfb"'
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
              children: "        },"
            })
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
              children: '            "turn_id"'
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
              children: '            "asr_ttlw"'
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
              children: '            "llm_ttfb"'
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
              children: '            "llm_ttfs"'
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
              children: '            "tts_ttfb"'
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
              children: "        },"
            })
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
              children: '            "turn_id"'
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
              children: '            "asr_ttlw"'
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
              children: '            "llm_ttfb"'
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
              children: '            "llm_ttfs"'
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
              children: '            "tts_ttfb"'
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
              children: "    ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "labels"'
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
              children: '        "campaign_id"'
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
              children: '"test_campaign"'
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
              children: '        "customer_group"'
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
              children: '"vip"'
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
`, _jsx("a", {
      id: "201"
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
