import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "计费说明",
  description: "本文介绍声网对话式 AI 引擎的计费方式。"
};
export let _markdown = `

本文介绍声网对话式 AI 引擎的计费方式。

## 费用组成 [#费用组成]

| 计费项目                                                                          | 单价                                             | 免费额度                    |
| ----------------------------------------------------------------------------- | ---------------------------------------------- | ----------------------- |
| [RTC 通话](https://doc.shengwang.cn/doc/rtc/android/billing/billing-strategy)费用 | 0.007 元 / 分钟                                   | 每月 10000 分钟             |
| 对话式 AI 引擎服务费用                                                                 | 0.021 元 / 分钟                                   | 1000 分钟总量（一次性赠予）        |
| ASR 处理费用                                                                      | - （默认）凤鸣 ASR：0.077 元 / 分钟<br>- 第三方 ASR：查看供应商文档 | 凤鸣 ASR 1000 分钟总量（一次性赠予） |
| LLM 推理费用                                                                      | 查看 LLM 供应商文档                                   | /                       |
| TTS 合成费用                                                                      | 查看 TTS 供应商文档                                   | /                       |
| 优雅打断处理费用（增值服务）                                                                | 0.042 元 / 分钟                                   | 无                       |

声网对话式 AI 引擎使用过程中可能产生的费用如下：

* **RTC 通话费用**：声网对话式 AI 引擎需配合声网实时互动 (RTC) SDK 使用，用户加入 RTC 频道后将产生 RTC 通话费用，单价为 0.007 元/分钟，单个 App ID 拥有每月 10000 分钟免费额度。你可以参考[实时互动计费说明](https://doc.shengwang.cn/doc/rtc/android/billing/billing-strategy)了解详情。
* **对话式 AI 引擎服务**：调用服务端 API [创建对话式智能体](../operations/start-agent.md)并加入 RTC 频道后，本次通话将产生对话式 AI 引擎服务费用，单价为 0.021 元/分钟。每个声网账号在生命周期内会一次性赠予 1000 分钟免费额度。该额度不会每月刷新，请合理规划使用。

> 注意
> 自声网对话式 AI 引擎 v1.6.0 起，ASR 模块支持自定义配置，ASR 服务费从对话式 AI 引擎服务费中拆分。对话式 AI 引擎服务费相应调整为 0.021 元/分钟。ASR 服务采用默认的凤鸣 ASR 时，总价不变（0.098 元/分钟）

* **ASR 处理费用**：使用语音识别服务 (ASR) 时产生的费用。支持自定义配置 ASR 模块的供应商为凤鸣 ASR 或第三方 ASR 服务（当前支持腾讯云和微软）。对话式 AI 引擎默认使用凤鸣 ASR，单价为 0.077 元/分钟，并一次性赠送 1000 分钟免费额度。
* **LLM 推理费用**：调用第三方大语言模型 (LLM) 时产生的费用，单价请参考 LLM 供应商文档。
* **TTS 合成费用**：调用第三方文本转语音 (TTS) 服务时产生的费用，单价请参考 TTS 供应商文档。
* **优雅打断处理费用**：优雅打断功能为可选开启的增值服务。开启后，用户可以随时打断 AI 智能体并快速响应，实现自然过渡和流畅对话。调用服务端 API [创建对话式智能体](../operations/start-agent.md)时，选择开启优雅打断功能，本次通话将额外收取优雅打断费用，单价为 0.042 元/分钟。

## 计费方式 [#计费方式]

声网对话式 AI 引擎采用**后付费**的计费方式。当你在项目中使用了对话式 AI 引擎服务，声网会收取费用，并按月发布账单、进行扣款。详见[账单、扣费与账户冻结](https://doc.shengwang.cn/faq/account-and-billing/billing-account)。每月结束时，声网会统计你的开发者账户下所有项目产生的对话式 AI 引擎用量，乘以相应的单价，得出本月总费用。声网会将每月的总费用四舍五入，精确到小数点后两位。

### 加油包 [#加油包]

你可以前往[**控制台**](https://console.shengwang.cn/)-**套餐包**-**预付费套餐包**-**对话式 AI 引擎**购买加油包，用于抵扣对话式 AI 引擎通话所产生的用量（不含 RTC 通话），同时享受一定折扣。目前，声网提供以下四种挡位的加油包：

| 加油包名称                  | 价格     | 配额                                                                           | 折扣  |
| ---------------------- | ------ | ---------------------------------------------------------------------------- | --- |
| 对话式 AI 引擎加油包 5K        | 469 元  | - 对话式 AI 引擎音频任务时长 5K 分钟<br>- 凤鸣 ASR 处理时长 5K 分钟                               | 96% |
| 对话式 AI 引擎加油包 20K       | 1799 元 | - 对话式 AI 引擎音频任务时长 20K 分钟<br>- 凤鸣 ASR 处理时长 20K 分钟                             | 92% |
| 对话式 AI 引擎加油包（优雅打断版）5K  | 669 元  | - 对话式 AI 引擎音频任务时长 5K 分钟<br>- 对话式 AI 引擎优雅打断时长 5K 分钟<br>- 凤鸣 ASR 处理时长 5K 分钟    | 96% |
| 对话式 AI 引擎加油包（优雅打断版）20K | 2579 元 | - 对话式 AI 引擎音频任务时长 20K 分钟<br>- 对话式 AI 引擎优雅打断时长 20K 分钟<br>- 凤鸣 ASR 处理时长 20K 分钟 | 92% |

> 注意
>
> * 优雅打断版加油包中的 AI 语音通话、优雅打断时长、凤鸣 ASR 处理时长相互独立计算，抵扣时对应用量时互不影响。
>   * 加油包默认赠送等量分钟数的凤鸣 ASR。即使未实际调用凤鸣 ASR（使用第三方ASR供应商时），系统亦视为整包资源已售出，暂不支持差价退还或时长置换。
>   * 月中购买的加油包可抵扣当月未结算的用量。
>   * 加油包的有效期为一年，到期后，未使用完的分钟数将失效。
>   * 加油包会在每月 6 日结算时正式抵扣，所以每月 1 日至 6 日期间系统显示的加油包余量为上月结算后的余量；每月 7 日至当月最后一日系统显示的加油包余量为本月结算后的余量。

## 用量查看 [#用量查看]

声网控制台提供产品用量查看功能，你可以参照以下步骤查看对话式 AI 引擎的用量：

1. 登录[声网控制台](https://console.shengwang.cn/)，在左侧导航栏访问**全部产品**-**对话式 AI 引擎**。

2. 在对话式 AI 引擎页面，点击**用量统计**标签页。

3. 用量统计页面展示当前项目用量明细，你可以自行选择用量展示方式、统计方式、查询时间段等。

> 注意
>
> * 仅支持查看当前项目一年内的用量数据。
> * 声网控制台展示的用量仅供参考，实际用量以账单为准。

## 计费示例 [#计费示例]

本节展示如何统计一个声网开发者账号下整月的对话式 AI 引擎用量，并根据相应单价，计算总费用。

> 信息
> 示例中的第三方 LLM 和 TTS 服务单价均来自市场真实价格，仅作计算示例用，实际费用和计费规则请参阅对应的供应商计费文档。

### 示例一 [#示例一]

用户 A 加入频道与对话式 AI 引擎创建的智能体发起语音对话，未开启优雅打断，互动持续了 10 分钟，用户 A 与智能体同时退出频道。在这 10 分钟内：

* 用户 A 订阅音频： 10 分钟
* 对话式 AI 引擎音频处理： 10 分钟
* 凤鸣 ASR： 10 分钟
* 第三方 LLM 调用：输入 500 tokens，输出 800 tokens
* 第三方 TTS 服务：转换 800 字符
* 优雅打断： 0 分钟

各模块费用如下：

| 计费项           | 用量                                 | 单价                                       | 费用                                                 | 费用合计                                          |
| ------------- | ---------------------------------- | ---------------------------------------- | -------------------------------------------------- | --------------------------------------------- |
| 用户 A 订阅音频     | 10 分钟                              | 0.007 元/分钟                               | 0.07 元                                             | 0.07 + 0.21 + 0.77 + 0.0074 + 0.28 = 1.3374 元 |
| 对话式 AI 引擎音频处理 | 10 分钟                              | 0.021 元/分钟                               | 0.21 元                                             |                                               |
| 凤鸣 ASR        | 10 分钟                              | 0.077 元/分钟                               | 0.77 元                                             |                                               |
| LLM 调用        | - 输入 500 tokens<br>- 输出 800 tokens | - 输入：2 元/百万 tokens<br>- 输出：8 元/百万 tokens | 2 \\* 500 / 1000000 + 8 \\* 800 / 1000000 = 0.0074 元 |                                               |
| TTS 服务        | 转换 800 字符                          | 3.5 元/万字符                                | 3.5 \\* 800 / 10000 = 0.28 元                        |                                               |
| 优雅打断          | 0 分钟                               | 0.042 元/分钟                               | 0 元                                                |                                               |

### 示例二 [#示例二]

用户 B 加入频道与对话式 AI 引擎创建的智能体发起语音对话，开启了优雅打断，互动持续了 10 分钟，用户 B 与智能体同时退出频道。在这 10 分钟内：

* 用户 B 订阅音频： 10 分钟
* 对话式 AI 引擎音频处理： 10 分钟
* 凤鸣 ASR： 10 分钟
* 第三方 LLM 调用：输入 500 tokens，输出 800 tokens
* 第三方 TTS 服务：转换 800 字符
* 优雅打断： 10 分钟

各模块费用如下：

| 用量类型          | 用量                                 | 单价                                       | 费用                                                 | 费用合计                                                 |
| ------------- | ---------------------------------- | ---------------------------------------- | -------------------------------------------------- | ---------------------------------------------------- |
| 用户 B 订阅音频     | 10 分钟                              | 0.007 元/分钟                               | 0.07 元                                             | 0.07 + 0.21 + 0.77 + 0.0009 + 0.28 + 0.42 = 1.7574 元 |
| 对话式 AI 引擎音频处理 | 10 分钟                              | 0.021 元/分钟                               | 0.21 元                                             |                                                      |
| 凤鸣 ASR        | 10 分钟                              | 0.077 元/分钟                               | 0.77 元                                             |                                                      |
| LLM 调用        | - 输入 500 tokens<br>- 输出 800 tokens | - 输入：2 元/百万 tokens<br>- 输出：8 元/百万 tokens | 2 \\* 500 / 1000000 + 8 \\* 800 / 1000000 = 0.0074 元 |                                                      |
| TTS 服务        | 转换 800 字符                          | 3.5 元/万字符                                | 3.5 \\* 800 / 10000 = 0.28 元                        |                                                      |
| 优雅打断服务        | 10 分钟                              | 0.042 元/分钟                               | 0.42 元                                             |                                                      |

## 常见问题 [#常见问题]

#### 如果所有用户都离开频道，但智能体没有退出频道，是否会一直计费？ [#如果所有用户都离开频道但智能体没有退出频道是否会一直计费]

会计费，因为对话式 AI 引擎底层只根据是否有活跃 (\`RUNNING\`) 的智能体来计算用量。因此，为避免产生额外费用，声网建议：

* 在最后一个用户离开频道时调用 [POST 停止对话式智能体](../operations/stop-agent.md)让智能体退出频道。
* 调用 [POST 创建对话式智能体](../operations/start-agent.md)时设置合适的最大空闲时间 (\`idle_timeout\`)，当智能体空闲超过该时间后，智能体会自动停止并退出频道。

#### 加油包是否可以叠加购买？ [#加油包是否可以叠加购买]

加油包支持叠加购买，如果你购买了多个加油包，则系统在抵扣时会按照购买的时间先后顺序依次抵扣。以下举例说明：
你在 2024 年 8 月 15 日购买了 20K 分钟的加油包，在 2024 年 8 月 16 日又购买了一个 5K 分钟的加油包，则在 9 月 1 日出账单时，首先从先购买的 20K 分钟加油包中抵扣、然后再从后购买的 5K 分钟加油包中抵扣。

#### 优雅打断版加油包中的 AI 语音通话时长用完后，包中剩余的优雅打断时长是否可以继续使用？ [#优雅打断版加油包中的-ai-语音通话时长用完后包中剩余的优雅打断时长是否可以继续使用]

可以继续使用。优雅打断版加油包中的 AI 语音通话和优雅打断时长相互独立计算，抵扣时对应用量时互不影响。

#### 加油包是否可以退订？ [#加油包是否可以退订]

当前不支持加油包退订。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "本文介绍声网对话式 AI 引擎的计费方式。"
  }, {
    heading: "费用组成",
    content: "计费项目"
  }, {
    heading: "费用组成",
    content: "单价"
  }, {
    heading: "费用组成",
    content: "免费额度"
  }, {
    heading: "费用组成",
    content: "RTC 通话费用"
  }, {
    heading: "费用组成",
    content: "0.007 元 / 分钟"
  }, {
    heading: "费用组成",
    content: "每月 10000 分钟"
  }, {
    heading: "费用组成",
    content: "对话式 AI 引擎服务费用"
  }, {
    heading: "费用组成",
    content: "0.021 元 / 分钟"
  }, {
    heading: "费用组成",
    content: "1000 分钟总量（一次性赠予）"
  }, {
    heading: "费用组成",
    content: "ASR 处理费用"
  }, {
    heading: "费用组成",
    content: "- （默认）凤鸣 ASR：0.077 元 / 分钟<br>- 第三方 ASR：查看供应商文档"
  }, {
    heading: "费用组成",
    content: "凤鸣 ASR 1000 分钟总量（一次性赠予）"
  }, {
    heading: "费用组成",
    content: "LLM 推理费用"
  }, {
    heading: "费用组成",
    content: "查看 LLM 供应商文档"
  }, {
    heading: "费用组成",
    content: "/"
  }, {
    heading: "费用组成",
    content: "TTS 合成费用"
  }, {
    heading: "费用组成",
    content: "查看 TTS 供应商文档"
  }, {
    heading: "费用组成",
    content: "/"
  }, {
    heading: "费用组成",
    content: "优雅打断处理费用（增值服务）"
  }, {
    heading: "费用组成",
    content: "0.042 元 / 分钟"
  }, {
    heading: "费用组成",
    content: "无"
  }, {
    heading: "费用组成",
    content: "声网对话式 AI 引擎使用过程中可能产生的费用如下："
  }, {
    heading: "费用组成",
    content: "**RTC 通话费用**：声网对话式 AI 引擎需配合声网实时互动 (RTC) SDK 使用，用户加入 RTC 频道后将产生 RTC 通话费用，单价为 0.007 元/分钟，单个 App ID 拥有每月 10000 分钟免费额度。你可以参考实时互动计费说明了解详情。"
  }, {
    heading: "费用组成",
    content: "**对话式 AI 引擎服务**：调用服务端 API 创建对话式智能体并加入 RTC 频道后，本次通话将产生对话式 AI 引擎服务费用，单价为 0.021 元/分钟。每个声网账号在生命周期内会一次性赠予 1000 分钟免费额度。该额度不会每月刷新，请合理规划使用。"
  }, {
    heading: "费用组成",
    content: `> 注意
> 自声网对话式 AI 引擎 v1.6.0 起，ASR 模块支持自定义配置，ASR 服务费从对话式 AI 引擎服务费中拆分。对话式 AI 引擎服务费相应调整为 0.021 元/分钟。ASR 服务采用默认的凤鸣 ASR 时，总价不变（0.098 元/分钟）`
  }, {
    heading: "费用组成",
    content: "**ASR 处理费用**：使用语音识别服务 (ASR) 时产生的费用。支持自定义配置 ASR 模块的供应商为凤鸣 ASR 或第三方 ASR 服务（当前支持腾讯云和微软）。对话式 AI 引擎默认使用凤鸣 ASR，单价为 0.077 元/分钟，并一次性赠送 1000 分钟免费额度。"
  }, {
    heading: "费用组成",
    content: "**LLM 推理费用**：调用第三方大语言模型 (LLM) 时产生的费用，单价请参考 LLM 供应商文档。"
  }, {
    heading: "费用组成",
    content: "**TTS 合成费用**：调用第三方文本转语音 (TTS) 服务时产生的费用，单价请参考 TTS 供应商文档。"
  }, {
    heading: "费用组成",
    content: "**优雅打断处理费用**：优雅打断功能为可选开启的增值服务。开启后，用户可以随时打断 AI 智能体并快速响应，实现自然过渡和流畅对话。调用服务端 API 创建对话式智能体时，选择开启优雅打断功能，本次通话将额外收取优雅打断费用，单价为 0.042 元/分钟。"
  }, {
    heading: "计费方式",
    content: "声网对话式 AI 引擎采用**后付费**的计费方式。当你在项目中使用了对话式 AI 引擎服务，声网会收取费用，并按月发布账单、进行扣款。详见账单、扣费与账户冻结。每月结束时，声网会统计你的开发者账户下所有项目产生的对话式 AI 引擎用量，乘以相应的单价，得出本月总费用。声网会将每月的总费用四舍五入，精确到小数点后两位。"
  }, {
    heading: "加油包",
    content: "你可以前往**控制台**-**套餐包**-**预付费套餐包**-**对话式 AI 引擎**购买加油包，用于抵扣对话式 AI 引擎通话所产生的用量（不含 RTC 通话），同时享受一定折扣。目前，声网提供以下四种挡位的加油包："
  }, {
    heading: "加油包",
    content: "加油包名称"
  }, {
    heading: "加油包",
    content: "价格"
  }, {
    heading: "加油包",
    content: "配额"
  }, {
    heading: "加油包",
    content: "折扣"
  }, {
    heading: "加油包",
    content: "对话式 AI 引擎加油包 5K"
  }, {
    heading: "加油包",
    content: "469 元"
  }, {
    heading: "加油包",
    content: "- 对话式 AI 引擎音频任务时长 5K 分钟<br>- 凤鸣 ASR 处理时长 5K 分钟"
  }, {
    heading: "加油包",
    content: "96%"
  }, {
    heading: "加油包",
    content: "对话式 AI 引擎加油包 20K"
  }, {
    heading: "加油包",
    content: "1799 元"
  }, {
    heading: "加油包",
    content: "- 对话式 AI 引擎音频任务时长 20K 分钟<br>- 凤鸣 ASR 处理时长 20K 分钟"
  }, {
    heading: "加油包",
    content: "92%"
  }, {
    heading: "加油包",
    content: "对话式 AI 引擎加油包（优雅打断版）5K"
  }, {
    heading: "加油包",
    content: "669 元"
  }, {
    heading: "加油包",
    content: "- 对话式 AI 引擎音频任务时长 5K 分钟<br>- 对话式 AI 引擎优雅打断时长 5K 分钟<br>- 凤鸣 ASR 处理时长 5K 分钟"
  }, {
    heading: "加油包",
    content: "96%"
  }, {
    heading: "加油包",
    content: "对话式 AI 引擎加油包（优雅打断版）20K"
  }, {
    heading: "加油包",
    content: "2579 元"
  }, {
    heading: "加油包",
    content: "- 对话式 AI 引擎音频任务时长 20K 分钟<br>- 对话式 AI 引擎优雅打断时长 20K 分钟<br>- 凤鸣 ASR 处理时长 20K 分钟"
  }, {
    heading: "加油包",
    content: "92%"
  }, {
    heading: "加油包",
    content: `> 注意
>
> * 优雅打断版加油包中的 AI 语音通话、优雅打断时长、凤鸣 ASR 处理时长相互独立计算，抵扣时对应用量时互不影响。
>   * 加油包默认赠送等量分钟数的凤鸣 ASR。即使未实际调用凤鸣 ASR（使用第三方ASR供应商时），系统亦视为整包资源已售出，暂不支持差价退还或时长置换。
>   * 月中购买的加油包可抵扣当月未结算的用量。
>   * 加油包的有效期为一年，到期后，未使用完的分钟数将失效。
>   * 加油包会在每月 6 日结算时正式抵扣，所以每月 1 日至 6 日期间系统显示的加油包余量为上月结算后的余量；每月 7 日至当月最后一日系统显示的加油包余量为本月结算后的余量。`
  }, {
    heading: "用量查看",
    content: "声网控制台提供产品用量查看功能，你可以参照以下步骤查看对话式 AI 引擎的用量："
  }, {
    heading: "用量查看",
    content: "登录声网控制台，在左侧导航栏访问**全部产品**-**对话式 AI 引擎**。"
  }, {
    heading: "用量查看",
    content: "在对话式 AI 引擎页面，点击**用量统计**标签页。"
  }, {
    heading: "用量查看",
    content: "用量统计页面展示当前项目用量明细，你可以自行选择用量展示方式、统计方式、查询时间段等。"
  }, {
    heading: "用量查看",
    content: `> 注意
>
> * 仅支持查看当前项目一年内的用量数据。
> * 声网控制台展示的用量仅供参考，实际用量以账单为准。`
  }, {
    heading: "计费示例",
    content: "本节展示如何统计一个声网开发者账号下整月的对话式 AI 引擎用量，并根据相应单价，计算总费用。"
  }, {
    heading: "计费示例",
    content: `> 信息
> 示例中的第三方 LLM 和 TTS 服务单价均来自市场真实价格，仅作计算示例用，实际费用和计费规则请参阅对应的供应商计费文档。`
  }, {
    heading: "示例一",
    content: "用户 A 加入频道与对话式 AI 引擎创建的智能体发起语音对话，未开启优雅打断，互动持续了 10 分钟，用户 A 与智能体同时退出频道。在这 10 分钟内："
  }, {
    heading: "示例一",
    content: "用户 A 订阅音频： 10 分钟"
  }, {
    heading: "示例一",
    content: "对话式 AI 引擎音频处理： 10 分钟"
  }, {
    heading: "示例一",
    content: "凤鸣 ASR： 10 分钟"
  }, {
    heading: "示例一",
    content: "第三方 LLM 调用：输入 500 tokens，输出 800 tokens"
  }, {
    heading: "示例一",
    content: "第三方 TTS 服务：转换 800 字符"
  }, {
    heading: "示例一",
    content: "优雅打断： 0 分钟"
  }, {
    heading: "示例一",
    content: "各模块费用如下："
  }, {
    heading: "示例一",
    content: "计费项"
  }, {
    heading: "示例一",
    content: "用量"
  }, {
    heading: "示例一",
    content: "单价"
  }, {
    heading: "示例一",
    content: "费用"
  }, {
    heading: "示例一",
    content: "费用合计"
  }, {
    heading: "示例一",
    content: "用户 A 订阅音频"
  }, {
    heading: "示例一",
    content: "10 分钟"
  }, {
    heading: "示例一",
    content: "0.007 元/分钟"
  }, {
    heading: "示例一",
    content: "0.07 元"
  }, {
    heading: "示例一",
    content: "0.07 + 0.21 + 0.77 + 0.0074 + 0.28 = 1.3374 元"
  }, {
    heading: "示例一",
    content: "对话式 AI 引擎音频处理"
  }, {
    heading: "示例一",
    content: "10 分钟"
  }, {
    heading: "示例一",
    content: "0.021 元/分钟"
  }, {
    heading: "示例一",
    content: "0.21 元"
  }, {
    heading: "示例一",
    content: "凤鸣 ASR"
  }, {
    heading: "示例一",
    content: "10 分钟"
  }, {
    heading: "示例一",
    content: "0.077 元/分钟"
  }, {
    heading: "示例一",
    content: "0.77 元"
  }, {
    heading: "示例一",
    content: "LLM 调用"
  }, {
    heading: "示例一",
    content: "- 输入 500 tokens<br>- 输出 800 tokens"
  }, {
    heading: "示例一",
    content: "- 输入：2 元/百万 tokens<br>- 输出：8 元/百万 tokens"
  }, {
    heading: "示例一",
    content: "2 \\* 500 / 1000000 + 8 \\* 800 / 1000000 = 0.0074 元"
  }, {
    heading: "示例一",
    content: "TTS 服务"
  }, {
    heading: "示例一",
    content: "转换 800 字符"
  }, {
    heading: "示例一",
    content: "3.5 元/万字符"
  }, {
    heading: "示例一",
    content: "3.5 \\* 800 / 10000 = 0.28 元"
  }, {
    heading: "示例一",
    content: "优雅打断"
  }, {
    heading: "示例一",
    content: "0 分钟"
  }, {
    heading: "示例一",
    content: "0.042 元/分钟"
  }, {
    heading: "示例一",
    content: "0 元"
  }, {
    heading: "示例二",
    content: "用户 B 加入频道与对话式 AI 引擎创建的智能体发起语音对话，开启了优雅打断，互动持续了 10 分钟，用户 B 与智能体同时退出频道。在这 10 分钟内："
  }, {
    heading: "示例二",
    content: "用户 B 订阅音频： 10 分钟"
  }, {
    heading: "示例二",
    content: "对话式 AI 引擎音频处理： 10 分钟"
  }, {
    heading: "示例二",
    content: "凤鸣 ASR： 10 分钟"
  }, {
    heading: "示例二",
    content: "第三方 LLM 调用：输入 500 tokens，输出 800 tokens"
  }, {
    heading: "示例二",
    content: "第三方 TTS 服务：转换 800 字符"
  }, {
    heading: "示例二",
    content: "优雅打断： 10 分钟"
  }, {
    heading: "示例二",
    content: "各模块费用如下："
  }, {
    heading: "示例二",
    content: "用量类型"
  }, {
    heading: "示例二",
    content: "用量"
  }, {
    heading: "示例二",
    content: "单价"
  }, {
    heading: "示例二",
    content: "费用"
  }, {
    heading: "示例二",
    content: "费用合计"
  }, {
    heading: "示例二",
    content: "用户 B 订阅音频"
  }, {
    heading: "示例二",
    content: "10 分钟"
  }, {
    heading: "示例二",
    content: "0.007 元/分钟"
  }, {
    heading: "示例二",
    content: "0.07 元"
  }, {
    heading: "示例二",
    content: "0.07 + 0.21 + 0.77 + 0.0009 + 0.28 + 0.42 = 1.7574 元"
  }, {
    heading: "示例二",
    content: "对话式 AI 引擎音频处理"
  }, {
    heading: "示例二",
    content: "10 分钟"
  }, {
    heading: "示例二",
    content: "0.021 元/分钟"
  }, {
    heading: "示例二",
    content: "0.21 元"
  }, {
    heading: "示例二",
    content: "凤鸣 ASR"
  }, {
    heading: "示例二",
    content: "10 分钟"
  }, {
    heading: "示例二",
    content: "0.077 元/分钟"
  }, {
    heading: "示例二",
    content: "0.77 元"
  }, {
    heading: "示例二",
    content: "LLM 调用"
  }, {
    heading: "示例二",
    content: "- 输入 500 tokens<br>- 输出 800 tokens"
  }, {
    heading: "示例二",
    content: "- 输入：2 元/百万 tokens<br>- 输出：8 元/百万 tokens"
  }, {
    heading: "示例二",
    content: "2 \\* 500 / 1000000 + 8 \\* 800 / 1000000 = 0.0074 元"
  }, {
    heading: "示例二",
    content: "TTS 服务"
  }, {
    heading: "示例二",
    content: "转换 800 字符"
  }, {
    heading: "示例二",
    content: "3.5 元/万字符"
  }, {
    heading: "示例二",
    content: "3.5 \\* 800 / 10000 = 0.28 元"
  }, {
    heading: "示例二",
    content: "优雅打断服务"
  }, {
    heading: "示例二",
    content: "10 分钟"
  }, {
    heading: "示例二",
    content: "0.042 元/分钟"
  }, {
    heading: "示例二",
    content: "0.42 元"
  }, {
    heading: "如果所有用户都离开频道但智能体没有退出频道是否会一直计费",
    content: "会计费，因为对话式 AI 引擎底层只根据是否有活跃 (`RUNNING`) 的智能体来计算用量。因此，为避免产生额外费用，声网建议："
  }, {
    heading: "如果所有用户都离开频道但智能体没有退出频道是否会一直计费",
    content: "在最后一个用户离开频道时调用 POST 停止对话式智能体让智能体退出频道。"
  }, {
    heading: "如果所有用户都离开频道但智能体没有退出频道是否会一直计费",
    content: "调用 POST 创建对话式智能体时设置合适的最大空闲时间 (`idle_timeout`)，当智能体空闲超过该时间后，智能体会自动停止并退出频道。"
  }, {
    heading: "加油包是否可以叠加购买",
    content: `加油包支持叠加购买，如果你购买了多个加油包，则系统在抵扣时会按照购买的时间先后顺序依次抵扣。以下举例说明：
你在 2024 年 8 月 15 日购买了 20K 分钟的加油包，在 2024 年 8 月 16 日又购买了一个 5K 分钟的加油包，则在 9 月 1 日出账单时，首先从先购买的 20K 分钟加油包中抵扣、然后再从后购买的 5K 分钟加油包中抵扣。`
  }, {
    heading: "优雅打断版加油包中的-ai-语音通话时长用完后包中剩余的优雅打断时长是否可以继续使用",
    content: "可以继续使用。优雅打断版加油包中的 AI 语音通话和优雅打断时长相互独立计算，抵扣时对应用量时互不影响。"
  }, {
    heading: "加油包是否可以退订",
    content: "当前不支持加油包退订。"
  }],
  headings: [{
    id: "费用组成",
    content: "费用组成"
  }, {
    id: "计费方式",
    content: "计费方式"
  }, {
    id: "加油包",
    content: "加油包"
  }, {
    id: "用量查看",
    content: "用量查看"
  }, {
    id: "计费示例",
    content: "计费示例"
  }, {
    id: "示例一",
    content: "示例一"
  }, {
    id: "示例二",
    content: "示例二"
  }, {
    id: "常见问题",
    content: "常见问题"
  }, {
    id: "如果所有用户都离开频道但智能体没有退出频道是否会一直计费",
    content: "如果所有用户都离开频道，但智能体没有退出频道，是否会一直计费？"
  }, {
    id: "加油包是否可以叠加购买",
    content: "加油包是否可以叠加购买？"
  }, {
    id: "优雅打断版加油包中的-ai-语音通话时长用完后包中剩余的优雅打断时长是否可以继续使用",
    content: "优雅打断版加油包中的 AI 语音通话时长用完后，包中剩余的优雅打断时长是否可以继续使用？"
  }, {
    id: "加油包是否可以退订",
    content: "加油包是否可以退订？"
  }]
};
export let toc = [{
  depth: 2,
  url: "#费用组成",
  title: _jsx(_Fragment, {
    children: "费用组成"
  })
}, {
  depth: 2,
  url: "#计费方式",
  title: _jsx(_Fragment, {
    children: "计费方式"
  })
}, {
  depth: 3,
  url: "#加油包",
  title: _jsx(_Fragment, {
    children: "加油包"
  })
}, {
  depth: 2,
  url: "#用量查看",
  title: _jsx(_Fragment, {
    children: "用量查看"
  })
}, {
  depth: 2,
  url: "#计费示例",
  title: _jsx(_Fragment, {
    children: "计费示例"
  })
}, {
  depth: 3,
  url: "#示例一",
  title: _jsx(_Fragment, {
    children: "示例一"
  })
}, {
  depth: 3,
  url: "#示例二",
  title: _jsx(_Fragment, {
    children: "示例二"
  })
}, {
  depth: 2,
  url: "#常见问题",
  title: _jsx(_Fragment, {
    children: "常见问题"
  })
}, {
  depth: 4,
  url: "#如果所有用户都离开频道但智能体没有退出频道是否会一直计费",
  title: _jsx(_Fragment, {
    children: "如果所有用户都离开频道，但智能体没有退出频道，是否会一直计费？"
  })
}, {
  depth: 4,
  url: "#加油包是否可以叠加购买",
  title: _jsx(_Fragment, {
    children: "加油包是否可以叠加购买？"
  })
}, {
  depth: 4,
  url: "#优雅打断版加油包中的-ai-语音通话时长用完后包中剩余的优雅打断时长是否可以继续使用",
  title: _jsx(_Fragment, {
    children: "优雅打断版加油包中的 AI 语音通话时长用完后，包中剩余的优雅打断时长是否可以继续使用？"
  })
}, {
  depth: 4,
  url: "#加油包是否可以退订",
  title: _jsx(_Fragment, {
    children: "加油包是否可以退订？"
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
      children: "本文介绍声网对话式 AI 引擎的计费方式。"
    }), `
`, _jsx(_components.h2, {
      id: "费用组成",
      children: "费用组成"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "计费项目"
          }), _jsx(_components.th, {
            children: "单价"
          }), _jsx(_components.th, {
            children: "免费额度"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "https://doc.shengwang.cn/doc/rtc/android/billing/billing-strategy",
              children: "RTC 通话"
            }), "费用"]
          }), _jsx(_components.td, {
            children: "0.007 元 / 分钟"
          }), _jsx(_components.td, {
            children: "每月 10000 分钟"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "对话式 AI 引擎服务费用"
          }), _jsx(_components.td, {
            children: "0.021 元 / 分钟"
          }), _jsx(_components.td, {
            children: "1000 分钟总量（一次性赠予）"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "ASR 处理费用"
          }), _jsxs(_components.td, {
            children: ["- （默认）凤鸣 ASR：0.077 元 / 分钟", "- 第三方 ASR：查看供应商文档"]
          }), _jsx(_components.td, {
            children: "凤鸣 ASR 1000 分钟总量（一次性赠予）"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "LLM 推理费用"
          }), _jsx(_components.td, {
            children: "查看 LLM 供应商文档"
          }), _jsx(_components.td, {
            children: "/"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "TTS 合成费用"
          }), _jsx(_components.td, {
            children: "查看 TTS 供应商文档"
          }), _jsx(_components.td, {
            children: "/"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "优雅打断处理费用（增值服务）"
          }), _jsx(_components.td, {
            children: "0.042 元 / 分钟"
          }), _jsx(_components.td, {
            children: "无"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "声网对话式 AI 引擎使用过程中可能产生的费用如下："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "RTC 通话费用"
        }), "：声网对话式 AI 引擎需配合声网实时互动 (RTC) SDK 使用，用户加入 RTC 频道后将产生 RTC 通话费用，单价为 0.007 元/分钟，单个 App ID 拥有每月 10000 分钟免费额度。你可以参考", _jsx(_components.a, {
          href: "https://doc.shengwang.cn/doc/rtc/android/billing/billing-strategy",
          children: "实时互动计费说明"
        }), "了解详情。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "对话式 AI 引擎服务"
        }), "：调用服务端 API ", _jsx(_components.a, {
          href: "../operations/start-agent.md",
          children: "创建对话式智能体"
        }), "并加入 RTC 频道后，本次通话将产生对话式 AI 引擎服务费用，单价为 0.021 元/分钟。每个声网账号在生命周期内会一次性赠予 1000 分钟免费额度。该额度不会每月刷新，请合理规划使用。"]
      }), `
`]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsx(_components.p, {
        children: `注意
自声网对话式 AI 引擎 v1.6.0 起，ASR 模块支持自定义配置，ASR 服务费从对话式 AI 引擎服务费中拆分。对话式 AI 引擎服务费相应调整为 0.021 元/分钟。ASR 服务采用默认的凤鸣 ASR 时，总价不变（0.098 元/分钟）`
      }), `
`]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "ASR 处理费用"
        }), "：使用语音识别服务 (ASR) 时产生的费用。支持自定义配置 ASR 模块的供应商为凤鸣 ASR 或第三方 ASR 服务（当前支持腾讯云和微软）。对话式 AI 引擎默认使用凤鸣 ASR，单价为 0.077 元/分钟，并一次性赠送 1000 分钟免费额度。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "LLM 推理费用"
        }), "：调用第三方大语言模型 (LLM) 时产生的费用，单价请参考 LLM 供应商文档。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "TTS 合成费用"
        }), "：调用第三方文本转语音 (TTS) 服务时产生的费用，单价请参考 TTS 供应商文档。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "优雅打断处理费用"
        }), "：优雅打断功能为可选开启的增值服务。开启后，用户可以随时打断 AI 智能体并快速响应，实现自然过渡和流畅对话。调用服务端 API ", _jsx(_components.a, {
          href: "../operations/start-agent.md",
          children: "创建对话式智能体"
        }), "时，选择开启优雅打断功能，本次通话将额外收取优雅打断费用，单价为 0.042 元/分钟。"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "计费方式",
      children: "计费方式"
    }), `
`, _jsxs(_components.p, {
      children: ["声网对话式 AI 引擎采用", _jsx(_components.strong, {
        children: "后付费"
      }), "的计费方式。当你在项目中使用了对话式 AI 引擎服务，声网会收取费用，并按月发布账单、进行扣款。详见", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/faq/account-and-billing/billing-account",
        children: "账单、扣费与账户冻结"
      }), "。每月结束时，声网会统计你的开发者账户下所有项目产生的对话式 AI 引擎用量，乘以相应的单价，得出本月总费用。声网会将每月的总费用四舍五入，精确到小数点后两位。"]
    }), `
`, _jsx(_components.h3, {
      id: "加油包",
      children: "加油包"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以前往", _jsx(_components.a, {
        href: "https://console.shengwang.cn/",
        children: _jsx(_components.strong, {
          children: "控制台"
        })
      }), "-", _jsx(_components.strong, {
        children: "套餐包"
      }), "-", _jsx(_components.strong, {
        children: "预付费套餐包"
      }), "-", _jsx(_components.strong, {
        children: "对话式 AI 引擎"
      }), "购买加油包，用于抵扣对话式 AI 引擎通话所产生的用量（不含 RTC 通话），同时享受一定折扣。目前，声网提供以下四种挡位的加油包："]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "加油包名称"
          }), _jsx(_components.th, {
            children: "价格"
          }), _jsx(_components.th, {
            children: "配额"
          }), _jsx(_components.th, {
            children: "折扣"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "对话式 AI 引擎加油包 5K"
          }), _jsx(_components.td, {
            children: "469 元"
          }), _jsxs(_components.td, {
            children: ["- 对话式 AI 引擎音频任务时长 5K 分钟", "- 凤鸣 ASR 处理时长 5K 分钟"]
          }), _jsx(_components.td, {
            children: "96%"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "对话式 AI 引擎加油包 20K"
          }), _jsx(_components.td, {
            children: "1799 元"
          }), _jsxs(_components.td, {
            children: ["- 对话式 AI 引擎音频任务时长 20K 分钟", "- 凤鸣 ASR 处理时长 20K 分钟"]
          }), _jsx(_components.td, {
            children: "92%"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "对话式 AI 引擎加油包（优雅打断版）5K"
          }), _jsx(_components.td, {
            children: "669 元"
          }), _jsxs(_components.td, {
            children: ["- 对话式 AI 引擎音频任务时长 5K 分钟", "- 对话式 AI 引擎优雅打断时长 5K 分钟", "- 凤鸣 ASR 处理时长 5K 分钟"]
          }), _jsx(_components.td, {
            children: "96%"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "对话式 AI 引擎加油包（优雅打断版）20K"
          }), _jsx(_components.td, {
            children: "2579 元"
          }), _jsxs(_components.td, {
            children: ["- 对话式 AI 引擎音频任务时长 20K 分钟", "- 对话式 AI 引擎优雅打断时长 20K 分钟", "- 凤鸣 ASR 处理时长 20K 分钟"]
          }), _jsx(_components.td, {
            children: "92%"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsx(_components.p, {
        children: "注意"
      }), `
`, _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["优雅打断版加油包中的 AI 语音通话、优雅打断时长、凤鸣 ASR 处理时长相互独立计算，抵扣时对应用量时互不影响。", `
`, _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "加油包默认赠送等量分钟数的凤鸣 ASR。即使未实际调用凤鸣 ASR（使用第三方ASR供应商时），系统亦视为整包资源已售出，暂不支持差价退还或时长置换。"
            }), `
`, _jsx(_components.li, {
              children: "月中购买的加油包可抵扣当月未结算的用量。"
            }), `
`, _jsx(_components.li, {
              children: "加油包的有效期为一年，到期后，未使用完的分钟数将失效。"
            }), `
`, _jsx(_components.li, {
              children: "加油包会在每月 6 日结算时正式抵扣，所以每月 1 日至 6 日期间系统显示的加油包余量为上月结算后的余量；每月 7 日至当月最后一日系统显示的加油包余量为本月结算后的余量。"
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "用量查看",
      children: "用量查看"
    }), `
`, _jsx(_components.p, {
      children: "声网控制台提供产品用量查看功能，你可以参照以下步骤查看对话式 AI 引擎的用量："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["登录", _jsx(_components.a, {
            href: "https://console.shengwang.cn/",
            children: "声网控制台"
          }), "，在左侧导航栏访问", _jsx(_components.strong, {
            children: "全部产品"
          }), "-", _jsx(_components.strong, {
            children: "对话式 AI 引擎"
          }), "。"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["在对话式 AI 引擎页面，点击", _jsx(_components.strong, {
            children: "用量统计"
          }), "标签页。"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "用量统计页面展示当前项目用量明细，你可以自行选择用量展示方式、统计方式、查询时间段等。"
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsx(_components.p, {
        children: "注意"
      }), `
`, _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "仅支持查看当前项目一年内的用量数据。"
        }), `
`, _jsx(_components.li, {
          children: "声网控制台展示的用量仅供参考，实际用量以账单为准。"
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "计费示例",
      children: "计费示例"
    }), `
`, _jsx(_components.p, {
      children: "本节展示如何统计一个声网开发者账号下整月的对话式 AI 引擎用量，并根据相应单价，计算总费用。"
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsx(_components.p, {
        children: `信息
示例中的第三方 LLM 和 TTS 服务单价均来自市场真实价格，仅作计算示例用，实际费用和计费规则请参阅对应的供应商计费文档。`
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "示例一",
      children: "示例一"
    }), `
`, _jsx(_components.p, {
      children: "用户 A 加入频道与对话式 AI 引擎创建的智能体发起语音对话，未开启优雅打断，互动持续了 10 分钟，用户 A 与智能体同时退出频道。在这 10 分钟内："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "用户 A 订阅音频： 10 分钟"
      }), `
`, _jsx(_components.li, {
        children: "对话式 AI 引擎音频处理： 10 分钟"
      }), `
`, _jsx(_components.li, {
        children: "凤鸣 ASR： 10 分钟"
      }), `
`, _jsx(_components.li, {
        children: "第三方 LLM 调用：输入 500 tokens，输出 800 tokens"
      }), `
`, _jsx(_components.li, {
        children: "第三方 TTS 服务：转换 800 字符"
      }), `
`, _jsx(_components.li, {
        children: "优雅打断： 0 分钟"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "各模块费用如下："
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "计费项"
          }), _jsx(_components.th, {
            children: "用量"
          }), _jsx(_components.th, {
            children: "单价"
          }), _jsx(_components.th, {
            children: "费用"
          }), _jsx(_components.th, {
            children: "费用合计"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "用户 A 订阅音频"
          }), _jsx(_components.td, {
            children: "10 分钟"
          }), _jsx(_components.td, {
            children: "0.007 元/分钟"
          }), _jsx(_components.td, {
            children: "0.07 元"
          }), _jsx(_components.td, {
            children: "0.07 + 0.21 + 0.77 + 0.0074 + 0.28 = 1.3374 元"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "对话式 AI 引擎音频处理"
          }), _jsx(_components.td, {
            children: "10 分钟"
          }), _jsx(_components.td, {
            children: "0.021 元/分钟"
          }), _jsx(_components.td, {
            children: "0.21 元"
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "凤鸣 ASR"
          }), _jsx(_components.td, {
            children: "10 分钟"
          }), _jsx(_components.td, {
            children: "0.077 元/分钟"
          }), _jsx(_components.td, {
            children: "0.77 元"
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "LLM 调用"
          }), _jsxs(_components.td, {
            children: ["- 输入 500 tokens", "- 输出 800 tokens"]
          }), _jsxs(_components.td, {
            children: ["- 输入：2 元/百万 tokens", "- 输出：8 元/百万 tokens"]
          }), _jsx(_components.td, {
            children: "2 * 500 / 1000000 + 8 * 800 / 1000000 = 0.0074 元"
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "TTS 服务"
          }), _jsx(_components.td, {
            children: "转换 800 字符"
          }), _jsx(_components.td, {
            children: "3.5 元/万字符"
          }), _jsx(_components.td, {
            children: "3.5 * 800 / 10000 = 0.28 元"
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "优雅打断"
          }), _jsx(_components.td, {
            children: "0 分钟"
          }), _jsx(_components.td, {
            children: "0.042 元/分钟"
          }), _jsx(_components.td, {
            children: "0 元"
          }), _jsx(_components.td, {})]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "示例二",
      children: "示例二"
    }), `
`, _jsx(_components.p, {
      children: "用户 B 加入频道与对话式 AI 引擎创建的智能体发起语音对话，开启了优雅打断，互动持续了 10 分钟，用户 B 与智能体同时退出频道。在这 10 分钟内："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "用户 B 订阅音频： 10 分钟"
      }), `
`, _jsx(_components.li, {
        children: "对话式 AI 引擎音频处理： 10 分钟"
      }), `
`, _jsx(_components.li, {
        children: "凤鸣 ASR： 10 分钟"
      }), `
`, _jsx(_components.li, {
        children: "第三方 LLM 调用：输入 500 tokens，输出 800 tokens"
      }), `
`, _jsx(_components.li, {
        children: "第三方 TTS 服务：转换 800 字符"
      }), `
`, _jsx(_components.li, {
        children: "优雅打断： 10 分钟"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "各模块费用如下："
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "用量类型"
          }), _jsx(_components.th, {
            children: "用量"
          }), _jsx(_components.th, {
            children: "单价"
          }), _jsx(_components.th, {
            children: "费用"
          }), _jsx(_components.th, {
            children: "费用合计"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "用户 B 订阅音频"
          }), _jsx(_components.td, {
            children: "10 分钟"
          }), _jsx(_components.td, {
            children: "0.007 元/分钟"
          }), _jsx(_components.td, {
            children: "0.07 元"
          }), _jsx(_components.td, {
            children: "0.07 + 0.21 + 0.77 + 0.0009 + 0.28 + 0.42 = 1.7574 元"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "对话式 AI 引擎音频处理"
          }), _jsx(_components.td, {
            children: "10 分钟"
          }), _jsx(_components.td, {
            children: "0.021 元/分钟"
          }), _jsx(_components.td, {
            children: "0.21 元"
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "凤鸣 ASR"
          }), _jsx(_components.td, {
            children: "10 分钟"
          }), _jsx(_components.td, {
            children: "0.077 元/分钟"
          }), _jsx(_components.td, {
            children: "0.77 元"
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "LLM 调用"
          }), _jsxs(_components.td, {
            children: ["- 输入 500 tokens", "- 输出 800 tokens"]
          }), _jsxs(_components.td, {
            children: ["- 输入：2 元/百万 tokens", "- 输出：8 元/百万 tokens"]
          }), _jsx(_components.td, {
            children: "2 * 500 / 1000000 + 8 * 800 / 1000000 = 0.0074 元"
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "TTS 服务"
          }), _jsx(_components.td, {
            children: "转换 800 字符"
          }), _jsx(_components.td, {
            children: "3.5 元/万字符"
          }), _jsx(_components.td, {
            children: "3.5 * 800 / 10000 = 0.28 元"
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "优雅打断服务"
          }), _jsx(_components.td, {
            children: "10 分钟"
          }), _jsx(_components.td, {
            children: "0.042 元/分钟"
          }), _jsx(_components.td, {
            children: "0.42 元"
          }), _jsx(_components.td, {})]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), `
`, _jsx(_components.h4, {
      id: "如果所有用户都离开频道但智能体没有退出频道是否会一直计费",
      children: "如果所有用户都离开频道，但智能体没有退出频道，是否会一直计费？"
    }), `
`, _jsxs(_components.p, {
      children: ["会计费，因为对话式 AI 引擎底层只根据是否有活跃 (", _jsx(_components.code, {
        children: "RUNNING"
      }), ") 的智能体来计算用量。因此，为避免产生额外费用，声网建议："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["在最后一个用户离开频道时调用 ", _jsx(_components.a, {
          href: "../operations/stop-agent.md",
          children: "POST 停止对话式智能体"
        }), "让智能体退出频道。"]
      }), `
`, _jsxs(_components.li, {
        children: ["调用 ", _jsx(_components.a, {
          href: "../operations/start-agent.md",
          children: "POST 创建对话式智能体"
        }), "时设置合适的最大空闲时间 (", _jsx(_components.code, {
          children: "idle_timeout"
        }), ")，当智能体空闲超过该时间后，智能体会自动停止并退出频道。"]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "加油包是否可以叠加购买",
      children: "加油包是否可以叠加购买？"
    }), `
`, _jsx(_components.p, {
      children: `加油包支持叠加购买，如果你购买了多个加油包，则系统在抵扣时会按照购买的时间先后顺序依次抵扣。以下举例说明：
你在 2024 年 8 月 15 日购买了 20K 分钟的加油包，在 2024 年 8 月 16 日又购买了一个 5K 分钟的加油包，则在 9 月 1 日出账单时，首先从先购买的 20K 分钟加油包中抵扣、然后再从后购买的 5K 分钟加油包中抵扣。`
    }), `
`, _jsx(_components.h4, {
      id: "优雅打断版加油包中的-ai-语音通话时长用完后包中剩余的优雅打断时长是否可以继续使用",
      children: "优雅打断版加油包中的 AI 语音通话时长用完后，包中剩余的优雅打断时长是否可以继续使用？"
    }), `
`, _jsx(_components.p, {
      children: "可以继续使用。优雅打断版加油包中的 AI 语音通话和优雅打断时长相互独立计算，抵扣时对应用量时互不影响。"
    }), `
`, _jsx(_components.h4, {
      id: "加油包是否可以退订",
      children: "加油包是否可以退订？"
    }), `
`, _jsx(_components.p, {
      children: "当前不支持加油包退订。"
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
