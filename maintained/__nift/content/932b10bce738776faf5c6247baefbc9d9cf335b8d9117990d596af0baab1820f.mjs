import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "多轮对话中的短期记忆",
  description: "使用短期记忆保存当前会话上下文，让智能体在多轮对话中保持连贯理解与回应。"
};
export let _markdown = `

短期记忆用于在一次会话中缓存结构化的对话上下文，帮助智能体在多轮对话里维持连贯性。它保存的不只是消息文本，还包括轮次、时间戳、打断状态以及来源元数据。

## 你会在什么场景里用到它 [#你会在什么场景里用到它]

短期记忆常见于以下场景：

* 用户追问上一轮提到的人、地点或任务
* 智能体需要记住本轮会话中的约束条件
* 用户中途打断，智能体需要知道上一轮回复是否被截断
* 你想在后端存储或分析当前会话中的上下文轨迹

## 数据结构思路 [#数据结构思路]

对话式 AI 引擎使用兼容 OpenAI Chat Completions 的 JSON 结构来表示短期记忆。你可以把它理解为“按轮次组织的对话历史”。

\`\`\`json
{
  "contents": [
    {
      "role": "assistant",
      "content": "你好，我可以帮你做什么？",
      "turn_id": 1,
      "timestamp": 1678901234,
      "metadata": {
        "source": "greeting"
      }
    },
    {
      "role": "user",
      "content": "帮我讲一个笑话。",
      "turn_id": 2,
      "timestamp": 1678901235,
      "metadata": {
        "source": "asr"
      }
    }
  ]
}
\`\`\`

## 如何影响记忆长度 [#如何影响记忆长度]

短期记忆的保留长度通常由创建智能体时的 \`llm.max_history\` 决定。默认值通常是 \`32\`。如果你的会话更长，可以在启动智能体时调大这个值：

\`\`\`json
{
  "llm": {
    "max_history": 64
  }
}
\`\`\`

## 使用建议 [#使用建议]

* 如果你的主要诉求是多轮连贯性，先调 \`max_history\`，再评估是否需要长期记忆。
* 如果你需要在会话结束后做归档或回放，结合[检索会话历史](retrieve-session-history.mdx)一起使用。
* 如果你需要把用户状态、业务数据等动态信息注入模型，结合[传递自定义信息](custom-information.mdx)使用。

## 继续阅读 [#继续阅读]

* [传递自定义信息](custom-information.mdx)
* [检索会话历史](retrieve-session-history.mdx)
* [调试智能体故障](debug-agent-failures.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "短期记忆用于在一次会话中缓存结构化的对话上下文，帮助智能体在多轮对话里维持连贯性。它保存的不只是消息文本，还包括轮次、时间戳、打断状态以及来源元数据。"
  }, {
    heading: "你会在什么场景里用到它",
    content: "短期记忆常见于以下场景："
  }, {
    heading: "你会在什么场景里用到它",
    content: "用户追问上一轮提到的人、地点或任务"
  }, {
    heading: "你会在什么场景里用到它",
    content: "智能体需要记住本轮会话中的约束条件"
  }, {
    heading: "你会在什么场景里用到它",
    content: "用户中途打断，智能体需要知道上一轮回复是否被截断"
  }, {
    heading: "你会在什么场景里用到它",
    content: "你想在后端存储或分析当前会话中的上下文轨迹"
  }, {
    heading: "数据结构思路",
    content: "对话式 AI 引擎使用兼容 OpenAI Chat Completions 的 JSON 结构来表示短期记忆。你可以把它理解为“按轮次组织的对话历史”。"
  }, {
    heading: "如何影响记忆长度",
    content: "短期记忆的保留长度通常由创建智能体时的 `llm.max_history` 决定。默认值通常是 `32`。如果你的会话更长，可以在启动智能体时调大这个值："
  }, {
    heading: "使用建议",
    content: "如果你的主要诉求是多轮连贯性，先调 `max_history`，再评估是否需要长期记忆。"
  }, {
    heading: "使用建议",
    content: "如果你需要在会话结束后做归档或回放，结合检索会话历史一起使用。"
  }, {
    heading: "使用建议",
    content: "如果你需要把用户状态、业务数据等动态信息注入模型，结合传递自定义信息使用。"
  }, {
    heading: "继续阅读",
    content: "传递自定义信息"
  }, {
    heading: "继续阅读",
    content: "检索会话历史"
  }, {
    heading: "继续阅读",
    content: "调试智能体故障"
  }],
  headings: [{
    id: "你会在什么场景里用到它",
    content: "你会在什么场景里用到它"
  }, {
    id: "数据结构思路",
    content: "数据结构思路"
  }, {
    id: "如何影响记忆长度",
    content: "如何影响记忆长度"
  }, {
    id: "使用建议",
    content: "使用建议"
  }, {
    id: "继续阅读",
    content: "继续阅读"
  }]
};
export let toc = [{
  depth: 2,
  url: "#你会在什么场景里用到它",
  title: _jsx(_Fragment, {
    children: "你会在什么场景里用到它"
  })
}, {
  depth: 2,
  url: "#数据结构思路",
  title: _jsx(_Fragment, {
    children: "数据结构思路"
  })
}, {
  depth: 2,
  url: "#如何影响记忆长度",
  title: _jsx(_Fragment, {
    children: "如何影响记忆长度"
  })
}, {
  depth: 2,
  url: "#使用建议",
  title: _jsx(_Fragment, {
    children: "使用建议"
  })
}, {
  depth: 2,
  url: "#继续阅读",
  title: _jsx(_Fragment, {
    children: "继续阅读"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "短期记忆用于在一次会话中缓存结构化的对话上下文，帮助智能体在多轮对话里维持连贯性。它保存的不只是消息文本，还包括轮次、时间戳、打断状态以及来源元数据。"
    }), `
`, _jsx(_components.h2, {
      id: "你会在什么场景里用到它",
      children: "你会在什么场景里用到它"
    }), `
`, _jsx(_components.p, {
      children: "短期记忆常见于以下场景："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "用户追问上一轮提到的人、地点或任务"
      }), `
`, _jsx(_components.li, {
        children: "智能体需要记住本轮会话中的约束条件"
      }), `
`, _jsx(_components.li, {
        children: "用户中途打断，智能体需要知道上一轮回复是否被截断"
      }), `
`, _jsx(_components.li, {
        children: "你想在后端存储或分析当前会话中的上下文轨迹"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "数据结构思路",
      children: "数据结构思路"
    }), `
`, _jsx(_components.p, {
      children: "对话式 AI 引擎使用兼容 OpenAI Chat Completions 的 JSON 结构来表示短期记忆。你可以把它理解为“按轮次组织的对话历史”。"
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
              children: '  "contents"'
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
              children: '"你好，我可以帮你做什么？"'
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
              children: '      "turn_id"'
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
              children: '      "timestamp"'
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
              children: "1678901234"
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
              children: '      "metadata"'
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
              children: '        "source"'
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
              children: '"greeting"'
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
              children: '"帮我讲一个笑话。"'
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
              children: '      "turn_id"'
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
              children: '      "timestamp"'
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
              children: "1678901235"
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
              children: '      "metadata"'
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
              children: '        "source"'
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
              children: '"asr"'
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
      id: "如何影响记忆长度",
      children: "如何影响记忆长度"
    }), `
`, _jsxs(_components.p, {
      children: ["短期记忆的保留长度通常由创建智能体时的 ", _jsx(_components.code, {
        children: "llm.max_history"
      }), " 决定。默认值通常是 ", _jsx(_components.code, {
        children: "32"
      }), "。如果你的会话更长，可以在启动智能体时调大这个值："]
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
              children: '  "llm"'
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
              children: '    "max_history"'
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
              children: "64"
            })]
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
`, _jsx(_components.h2, {
      id: "使用建议",
      children: "使用建议"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["如果你的主要诉求是多轮连贯性，先调 ", _jsx(_components.code, {
          children: "max_history"
        }), "，再评估是否需要长期记忆。"]
      }), `
`, _jsxs(_components.li, {
        children: ["如果你需要在会话结束后做归档或回放，结合", _jsx(_components.a, {
          href: "retrieve-session-history.mdx",
          children: "检索会话历史"
        }), "一起使用。"]
      }), `
`, _jsxs(_components.li, {
        children: ["如果你需要把用户状态、业务数据等动态信息注入模型，结合", _jsx(_components.a, {
          href: "custom-information.mdx",
          children: "传递自定义信息"
        }), "使用。"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "继续阅读",
      children: "继续阅读"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "custom-information.mdx",
          children: "传递自定义信息"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "retrieve-session-history.mdx",
          children: "检索会话历史"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "debug-agent-failures.mdx",
          children: "调试智能体故障"
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
