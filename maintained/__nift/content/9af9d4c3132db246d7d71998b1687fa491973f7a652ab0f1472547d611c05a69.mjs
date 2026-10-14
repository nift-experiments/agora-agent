import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "区域访问限制",
  description: "为适应不同国家或地区的法律法规，声网对话式 AI 引擎支持区域访问限制功能。开启区域访问限制后，不论用户在哪个区域使用你的 App，对话式 AI 引擎都只会访问指定区域的声网服务器。"
};
export let _markdown = `

为适应不同国家或地区的法律法规，声网对话式 AI 引擎支持区域访问限制功能。开启区域访问限制后，不论用户在哪个区域使用你的 App，对话式 AI 引擎都只会访问指定区域的声网服务器。

例如你指定了北美为访问区域，假设有两位用户分别从北美和中国发起通话:

| 指定访问区域 | 用户所在区域 | 实际访问区域 | 连接后的用户体验                                                                                       |
| ------ | ------ | ------ | ---------------------------------------------------------------------------------------------- |
| 北美     | 北美     | 北美     | 正常                                                                                             |
| 北美     | 新加坡    | 北美     | 可能受到较大影响。由于指定区域与 App 用户所在区域之间存在跨区域公共互联网，公共互联网网络质量较差会导致音视频体验受到影响。<p>如果指定区域的服务器都不可用，服务会直接报错。</p> |

## 默认行为 [#默认行为]

在未开启区域访问限制或使用 \`GLOBAL\` 区域访问限制时，对话式 AI 引擎会根据 LLM URL 的 IP 地址自动选择最近的服务器启动对话式 AI 引擎服务，并支持故障转移 (failover):

1. **智能部署**: 系统会根据你配置的 LLM URL 对应的 IP 地址，自动在相应区域启动对话式 AI 引擎服务。
2. **就近选择**: 如果对应区域没有可用服务器，系统会自动选择最近的可用区域。
3. **故障转移**: 当某个区域的服务不可用时，系统会自动切换到其他可用区域。

> 注意
> 开启区域访问限制后，上述默认行为将不再适用。系统会严格限制在指定区域内访问，不会进行跨区域的故障转移。

## 实现方法 [#实现方法]

### 配置对话式 AI 引擎区域访问限制 [#配置对话式-ai-引擎区域访问限制]

在调用[创建对话式智能体 API](../operations/start-agent.md) 时，通过 \`properties.geofence\` 字段配置区域访问限制。

#### 参数说明 [#参数说明]

| 字段             | 类型     | 必填 | 描述                                                                                                                                      |
| -------------- | ------ | -- | --------------------------------------------------------------------------------------------------------------------------------------- |
| \`area\`         | String | 是  | 允许访问的区域。可选以下值：<br />- \`GLOBAL\`：全球<br />- \`NORTH_AMERICA\`：北美<br />- \`EUROPE\`：欧洲<br />- \`ASIA\`：亚洲<br />- \`INDIA\`：印度<br />- \`JAPAN\`：日本     |
| \`exclude_area\` | String | 否  | 排除的区域。仅当 \`area\` 为 \`GLOBAL\` 时可用。可选以下值：<br />- \`NORTH_AMERICA\`：北美<br />- \`EUROPE\`：欧洲<br />- \`ASIA\`：亚洲<br />- \`INDIA\`：印度<br />- \`JAPAN\`：日本 |

#### 配置示例 [#配置示例]

**示例 1: 限制仅访问北美区域**

\`\`\`json
{
  "name": "customer_service",
  "properties": {
    "channel": "test_channel",
    "token": "your_rtc_token",
    "agent_rtc_uid": "123",
    "remote_rtc_uids": ["456"],
    "geofence": {
      "area": "NORTH_AMERICA"
    },
    "llm": {
      // ... LLM 配置
    },
    "tts": {
      // ... TTS 配置
    }
  }
}
\`\`\`

**示例 2: 全球访问但排除印度**

\`\`\`json
{
  "name": "customer_service",
  "properties": {
    "channel": "test_channel",
    "token": "your_rtc_token",
    "agent_rtc_uid": "123",
    "remote_rtc_uids": ["456"],
    "geofence": {
      "area": "GLOBAL",
      "exclude_area": "INDIA"
    },
    "llm": {
      // ... LLM 配置
    },
    "tts": {
      // ... TTS 配置
    }
  }
}
\`\`\`

### 配置 RTC 区域访问限制 [#配置-rtc-区域访问限制]

声网对话式 AI 引擎服务和声网 RTC 服务的区域访问限制配置是**相互独立**的。如果你需要实现完整的端到端区域访问限制，确保和智能体互动的整个音视频通话链路都限定在指定区域内，你还需要参考 [RTC 区域访问限制](https://doc.shengwang.cn/doc/rtc-server-sdk/cpp/advanced-features/set-region)进行配置。

## 数据驻留 (Data Residency) [#数据驻留-data-residency]

除了配置对话式 AI 引擎的区域访问限制外，部分 LLM、TTS、ASR 供应商也提供了不同区域的数据驻留服务。你可以通过配置 LLM、TTS、ASR 模块使用的 URL 来确保数据不会跨区域传输。

例如，ElevenLabs 支持通过不同的 URL 端点选择数据处理区域，详见 [ElevenLabs 文档](https://elevenlabs.io/docs/overview/administration/data-residency)。

以下示例代码展示了如何配置 ElevenLabs 的 TTS 服务，使用欧洲区域的 URL 端点：

\`\`\`json
{
  "properties": {
    "tts": {
      "vendor": {
        "name": "elevenlabs"
      },
      "url": "wss://api.eu.elevenlabs.io/v1/text-to-speech/{voice_id}/stream-input"
    }
  }
}
\`\`\`

### 最佳实践建议 [#最佳实践建议]

为了确保数据完全驻留在指定区域，建议采取以下措施:

1. **配置对话式 AI 引擎区域限制**: 使用 \`geofence\` 参数限制对话式 AI 引擎服务器的访问区域。

2. **配置 RTC 区域限制**: 在 RTC SDK 中配置相应的区域访问限制。

3. **选择区域化的 AI 服务**: 在配置 LLM、TTS、ASR 时，选择支持区域数据驻留的供应商，并使用对应区域的 URL 端点。

4. **验证配置**: 在生产环境部署前，充分测试区域访问限制是否生效，确保数据不会意外跨区域传输。

## 注意事项 [#注意事项]

1. **性能影响**: 区域访问限制可能会影响用户体验。如果用户所在区域与指定区域相距较远，可能会出现较高的网络延迟。

2. **服务可用性**: 开启区域访问限制后，如果指定区域的服务器不可用或资源不足，服务将直接报错，不会自动切换到其他区域。

3. **配置一致性**: 确保对话式 AI 引擎、RTC SDK 和 LLM、TTS、ASR 供应商的区域配置保持一致，避免数据跨区域传输。

4. **合规要求**: 在配置区域访问限制前，请充分了解目标区域的法律法规要求，确保配置符合当地的数据保护和隐私法规。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "为适应不同国家或地区的法律法规，声网对话式 AI 引擎支持区域访问限制功能。开启区域访问限制后，不论用户在哪个区域使用你的 App，对话式 AI 引擎都只会访问指定区域的声网服务器。"
  }, {
    heading: undefined,
    content: "例如你指定了北美为访问区域，假设有两位用户分别从北美和中国发起通话:"
  }, {
    heading: undefined,
    content: "指定访问区域"
  }, {
    heading: undefined,
    content: "用户所在区域"
  }, {
    heading: undefined,
    content: "实际访问区域"
  }, {
    heading: undefined,
    content: "连接后的用户体验"
  }, {
    heading: undefined,
    content: "北美"
  }, {
    heading: undefined,
    content: "北美"
  }, {
    heading: undefined,
    content: "北美"
  }, {
    heading: undefined,
    content: "正常"
  }, {
    heading: undefined,
    content: "北美"
  }, {
    heading: undefined,
    content: "新加坡"
  }, {
    heading: undefined,
    content: "北美"
  }, {
    heading: undefined,
    content: "可能受到较大影响。由于指定区域与 App 用户所在区域之间存在跨区域公共互联网，公共互联网网络质量较差会导致音视频体验受到影响。如果指定区域的服务器都不可用，服务会直接报错。"
  }, {
    heading: "默认行为",
    content: "在未开启区域访问限制或使用 `GLOBAL` 区域访问限制时，对话式 AI 引擎会根据 LLM URL 的 IP 地址自动选择最近的服务器启动对话式 AI 引擎服务，并支持故障转移 (failover):"
  }, {
    heading: "默认行为",
    content: "**智能部署**: 系统会根据你配置的 LLM URL 对应的 IP 地址，自动在相应区域启动对话式 AI 引擎服务。"
  }, {
    heading: "默认行为",
    content: "**就近选择**: 如果对应区域没有可用服务器，系统会自动选择最近的可用区域。"
  }, {
    heading: "默认行为",
    content: "**故障转移**: 当某个区域的服务不可用时，系统会自动切换到其他可用区域。"
  }, {
    heading: "默认行为",
    content: `> 注意
> 开启区域访问限制后，上述默认行为将不再适用。系统会严格限制在指定区域内访问，不会进行跨区域的故障转移。`
  }, {
    heading: "配置对话式-ai-引擎区域访问限制",
    content: "在调用创建对话式智能体 API 时，通过 `properties.geofence` 字段配置区域访问限制。"
  }, {
    heading: "参数说明",
    content: "字段"
  }, {
    heading: "参数说明",
    content: "类型"
  }, {
    heading: "参数说明",
    content: "必填"
  }, {
    heading: "参数说明",
    content: "描述"
  }, {
    heading: "参数说明",
    content: "`area`"
  }, {
    heading: "参数说明",
    content: "String"
  }, {
    heading: "参数说明",
    content: "是"
  }, {
    heading: "参数说明",
    content: "允许访问的区域。可选以下值：- `GLOBAL`：全球- `NORTH_AMERICA`：北美- `EUROPE`：欧洲- `ASIA`：亚洲- `INDIA`：印度- `JAPAN`：日本"
  }, {
    heading: "参数说明",
    content: "`exclude_area`"
  }, {
    heading: "参数说明",
    content: "String"
  }, {
    heading: "参数说明",
    content: "否"
  }, {
    heading: "参数说明",
    content: "排除的区域。仅当 `area` 为 `GLOBAL` 时可用。可选以下值：- `NORTH_AMERICA`：北美- `EUROPE`：欧洲- `ASIA`：亚洲- `INDIA`：印度- `JAPAN`：日本"
  }, {
    heading: "配置示例",
    content: "**示例 1: 限制仅访问北美区域**"
  }, {
    heading: "配置示例",
    content: "**示例 2: 全球访问但排除印度**"
  }, {
    heading: "配置-rtc-区域访问限制",
    content: "声网对话式 AI 引擎服务和声网 RTC 服务的区域访问限制配置是**相互独立**的。如果你需要实现完整的端到端区域访问限制，确保和智能体互动的整个音视频通话链路都限定在指定区域内，你还需要参考 RTC 区域访问限制进行配置。"
  }, {
    heading: "数据驻留-data-residency",
    content: "除了配置对话式 AI 引擎的区域访问限制外，部分 LLM、TTS、ASR 供应商也提供了不同区域的数据驻留服务。你可以通过配置 LLM、TTS、ASR 模块使用的 URL 来确保数据不会跨区域传输。"
  }, {
    heading: "数据驻留-data-residency",
    content: "例如，ElevenLabs 支持通过不同的 URL 端点选择数据处理区域，详见 ElevenLabs 文档。"
  }, {
    heading: "数据驻留-data-residency",
    content: "以下示例代码展示了如何配置 ElevenLabs 的 TTS 服务，使用欧洲区域的 URL 端点："
  }, {
    heading: "最佳实践建议",
    content: "为了确保数据完全驻留在指定区域，建议采取以下措施:"
  }, {
    heading: "最佳实践建议",
    content: "**配置对话式 AI 引擎区域限制**: 使用 `geofence` 参数限制对话式 AI 引擎服务器的访问区域。"
  }, {
    heading: "最佳实践建议",
    content: "**配置 RTC 区域限制**: 在 RTC SDK 中配置相应的区域访问限制。"
  }, {
    heading: "最佳实践建议",
    content: "**选择区域化的 AI 服务**: 在配置 LLM、TTS、ASR 时，选择支持区域数据驻留的供应商，并使用对应区域的 URL 端点。"
  }, {
    heading: "最佳实践建议",
    content: "**验证配置**: 在生产环境部署前，充分测试区域访问限制是否生效，确保数据不会意外跨区域传输。"
  }, {
    heading: "注意事项",
    content: "**性能影响**: 区域访问限制可能会影响用户体验。如果用户所在区域与指定区域相距较远，可能会出现较高的网络延迟。"
  }, {
    heading: "注意事项",
    content: "**服务可用性**: 开启区域访问限制后，如果指定区域的服务器不可用或资源不足，服务将直接报错，不会自动切换到其他区域。"
  }, {
    heading: "注意事项",
    content: "**配置一致性**: 确保对话式 AI 引擎、RTC SDK 和 LLM、TTS、ASR 供应商的区域配置保持一致，避免数据跨区域传输。"
  }, {
    heading: "注意事项",
    content: "**合规要求**: 在配置区域访问限制前，请充分了解目标区域的法律法规要求，确保配置符合当地的数据保护和隐私法规。"
  }],
  headings: [{
    id: "默认行为",
    content: "默认行为"
  }, {
    id: "实现方法",
    content: "实现方法"
  }, {
    id: "配置对话式-ai-引擎区域访问限制",
    content: "配置对话式 AI 引擎区域访问限制"
  }, {
    id: "参数说明",
    content: "参数说明"
  }, {
    id: "配置示例",
    content: "配置示例"
  }, {
    id: "配置-rtc-区域访问限制",
    content: "配置 RTC 区域访问限制"
  }, {
    id: "数据驻留-data-residency",
    content: "数据驻留 (Data Residency)"
  }, {
    id: "最佳实践建议",
    content: "最佳实践建议"
  }, {
    id: "注意事项",
    content: "注意事项"
  }]
};
export let toc = [{
  depth: 2,
  url: "#默认行为",
  title: _jsx(_Fragment, {
    children: "默认行为"
  })
}, {
  depth: 2,
  url: "#实现方法",
  title: _jsx(_Fragment, {
    children: "实现方法"
  })
}, {
  depth: 3,
  url: "#配置对话式-ai-引擎区域访问限制",
  title: _jsx(_Fragment, {
    children: "配置对话式 AI 引擎区域访问限制"
  })
}, {
  depth: 4,
  url: "#参数说明",
  title: _jsx(_Fragment, {
    children: "参数说明"
  })
}, {
  depth: 4,
  url: "#配置示例",
  title: _jsx(_Fragment, {
    children: "配置示例"
  })
}, {
  depth: 3,
  url: "#配置-rtc-区域访问限制",
  title: _jsx(_Fragment, {
    children: "配置 RTC 区域访问限制"
  })
}, {
  depth: 2,
  url: "#数据驻留-data-residency",
  title: _jsx(_Fragment, {
    children: "数据驻留 (Data Residency)"
  })
}, {
  depth: 3,
  url: "#最佳实践建议",
  title: _jsx(_Fragment, {
    children: "最佳实践建议"
  })
}, {
  depth: 2,
  url: "#注意事项",
  title: _jsx(_Fragment, {
    children: "注意事项"
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
      children: "为适应不同国家或地区的法律法规，声网对话式 AI 引擎支持区域访问限制功能。开启区域访问限制后，不论用户在哪个区域使用你的 App，对话式 AI 引擎都只会访问指定区域的声网服务器。"
    }), `
`, _jsx(_components.p, {
      children: "例如你指定了北美为访问区域，假设有两位用户分别从北美和中国发起通话:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "指定访问区域"
          }), _jsx(_components.th, {
            children: "用户所在区域"
          }), _jsx(_components.th, {
            children: "实际访问区域"
          }), _jsx(_components.th, {
            children: "连接后的用户体验"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "北美"
          }), _jsx(_components.td, {
            children: "北美"
          }), _jsx(_components.td, {
            children: "北美"
          }), _jsx(_components.td, {
            children: "正常"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "北美"
          }), _jsx(_components.td, {
            children: "新加坡"
          }), _jsx(_components.td, {
            children: "北美"
          }), _jsxs(_components.td, {
            children: ["可能受到较大影响。由于指定区域与 App 用户所在区域之间存在跨区域公共互联网，公共互联网网络质量较差会导致音视频体验受到影响。", _jsx("p", {
              children: "如果指定区域的服务器都不可用，服务会直接报错。"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "默认行为",
      children: "默认行为"
    }), `
`, _jsxs(_components.p, {
      children: ["在未开启区域访问限制或使用 ", _jsx(_components.code, {
        children: "GLOBAL"
      }), " 区域访问限制时，对话式 AI 引擎会根据 LLM URL 的 IP 地址自动选择最近的服务器启动对话式 AI 引擎服务，并支持故障转移 (failover):"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "智能部署"
        }), ": 系统会根据你配置的 LLM URL 对应的 IP 地址，自动在相应区域启动对话式 AI 引擎服务。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "就近选择"
        }), ": 如果对应区域没有可用服务器，系统会自动选择最近的可用区域。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "故障转移"
        }), ": 当某个区域的服务不可用时，系统会自动切换到其他可用区域。"]
      }), `
`]
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsx(_components.p, {
        children: `注意
开启区域访问限制后，上述默认行为将不再适用。系统会严格限制在指定区域内访问，不会进行跨区域的故障转移。`
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "实现方法",
      children: "实现方法"
    }), `
`, _jsx(_components.h3, {
      id: "配置对话式-ai-引擎区域访问限制",
      children: "配置对话式 AI 引擎区域访问限制"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用", _jsx(_components.a, {
        href: "../operations/start-agent.md",
        children: "创建对话式智能体 API"
      }), " 时，通过 ", _jsx(_components.code, {
        children: "properties.geofence"
      }), " 字段配置区域访问限制。"]
    }), `
`, _jsx(_components.h4, {
      id: "参数说明",
      children: "参数说明"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "字段"
          }), _jsx(_components.th, {
            children: "类型"
          }), _jsx(_components.th, {
            children: "必填"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "area"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "是"
          }), _jsxs(_components.td, {
            children: ["允许访问的区域。可选以下值：", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "GLOBAL"
            }), "：全球", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "NORTH_AMERICA"
            }), "：北美", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "EUROPE"
            }), "：欧洲", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "ASIA"
            }), "：亚洲", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "INDIA"
            }), "：印度", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "JAPAN"
            }), "：日本"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "exclude_area"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "否"
          }), _jsxs(_components.td, {
            children: ["排除的区域。仅当 ", _jsx(_components.code, {
              children: "area"
            }), " 为 ", _jsx(_components.code, {
              children: "GLOBAL"
            }), " 时可用。可选以下值：", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "NORTH_AMERICA"
            }), "：北美", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "EUROPE"
            }), "：欧洲", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "ASIA"
            }), "：亚洲", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "INDIA"
            }), "：印度", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "JAPAN"
            }), "：日本"]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "配置示例",
      children: "配置示例"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "示例 1: 限制仅访问北美区域"
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
              children: '  "name"'
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
              children: '"customer_service"'
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
              children: '"test_channel"'
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
              children: '    "token"'
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
              children: '"your_rtc_token"'
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
              children: '    "agent_rtc_uid"'
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
              children: '"123"'
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
              children: '    "remote_rtc_uids"'
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
              children: '"456"'
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
              children: '    "geofence"'
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
              children: '      "area"'
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
              children: '"NORTH_AMERICA"'
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
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "      // ... LLM 配置"
            })
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "tts"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "      // ... TTS 配置"
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
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "示例 2: 全球访问但排除印度"
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
              children: '  "name"'
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
              children: '"customer_service"'
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
              children: '"test_channel"'
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
              children: '    "token"'
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
              children: '"your_rtc_token"'
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
              children: '    "agent_rtc_uid"'
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
              children: '"123"'
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
              children: '    "remote_rtc_uids"'
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
              children: '"456"'
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
              children: '    "geofence"'
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
              children: '      "area"'
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
              children: '"GLOBAL"'
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
              children: '      "exclude_area"'
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
              children: '"INDIA"'
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
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "      // ... LLM 配置"
            })
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "tts"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "      // ... TTS 配置"
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
      id: "配置-rtc-区域访问限制",
      children: "配置 RTC 区域访问限制"
    }), `
`, _jsxs(_components.p, {
      children: ["声网对话式 AI 引擎服务和声网 RTC 服务的区域访问限制配置是", _jsx(_components.strong, {
        children: "相互独立"
      }), "的。如果你需要实现完整的端到端区域访问限制，确保和智能体互动的整个音视频通话链路都限定在指定区域内，你还需要参考 ", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/doc/rtc-server-sdk/cpp/advanced-features/set-region",
        children: "RTC 区域访问限制"
      }), "进行配置。"]
    }), `
`, _jsx(_components.h2, {
      id: "数据驻留-data-residency",
      children: "数据驻留 (Data Residency)"
    }), `
`, _jsx(_components.p, {
      children: "除了配置对话式 AI 引擎的区域访问限制外，部分 LLM、TTS、ASR 供应商也提供了不同区域的数据驻留服务。你可以通过配置 LLM、TTS、ASR 模块使用的 URL 来确保数据不会跨区域传输。"
    }), `
`, _jsxs(_components.p, {
      children: ["例如，ElevenLabs 支持通过不同的 URL 端点选择数据处理区域，详见 ", _jsx(_components.a, {
        href: "https://elevenlabs.io/docs/overview/administration/data-residency",
        children: "ElevenLabs 文档"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "以下示例代码展示了如何配置 ElevenLabs 的 TTS 服务，使用欧洲区域的 URL 端点："
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
              children: '    "tts"'
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
              children: '      "vendor"'
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
              children: '"elevenlabs"'
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
              children: '"wss://api.eu.elevenlabs.io/v1/text-to-speech/{voice_id}/stream-input"'
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
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "最佳实践建议",
      children: "最佳实践建议"
    }), `
`, _jsx(_components.p, {
      children: "为了确保数据完全驻留在指定区域，建议采取以下措施:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "配置对话式 AI 引擎区域限制"
          }), ": 使用 ", _jsx(_components.code, {
            children: "geofence"
          }), " 参数限制对话式 AI 引擎服务器的访问区域。"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "配置 RTC 区域限制"
          }), ": 在 RTC SDK 中配置相应的区域访问限制。"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "选择区域化的 AI 服务"
          }), ": 在配置 LLM、TTS、ASR 时，选择支持区域数据驻留的供应商，并使用对应区域的 URL 端点。"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "验证配置"
          }), ": 在生产环境部署前，充分测试区域访问限制是否生效，确保数据不会意外跨区域传输。"]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "性能影响"
          }), ": 区域访问限制可能会影响用户体验。如果用户所在区域与指定区域相距较远，可能会出现较高的网络延迟。"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "服务可用性"
          }), ": 开启区域访问限制后，如果指定区域的服务器不可用或资源不足，服务将直接报错，不会自动切换到其他区域。"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "配置一致性"
          }), ": 确保对话式 AI 引擎、RTC SDK 和 LLM、TTS、ASR 供应商的区域配置保持一致，避免数据跨区域传输。"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "合规要求"
          }), ": 在配置区域访问限制前，请充分了解目标区域的法律法规要求，确保配置符合当地的数据保护和隐私法规。"]
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
