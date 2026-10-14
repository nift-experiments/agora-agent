import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "使用 Skills 集成",
  description: "你可以借助 AI Coding Agent 更高效地集成声网产品。通过配置 Agora skills，Coding Agent 可获得面向声网产品的任务路由、接入流程和生成规则，并结合最新官方文档内容，在需求分析、产品接入、代..."
};
export let _markdown = `

你可以借助 AI Coding Agent 更高效地集成声网产品。通过配置 Agora skills，Coding Agent 可获得面向声网产品的任务路由、接入流程和生成规则，并结合最新官方文档内容，在需求分析、产品接入、代码生成和问题排查等场景中提供更准确、更高效的协助。

## 安装 Agora skills [#安装-agora-skills]

选择以下方式安装 skills：

#### Skills CLI [#skills-cli]

使用 \`CLI\` 安装：

\`\`\`bash
npx skills add AgoraIO/skills
\`\`\`

这是最直接的安装方式。安装完成后，再按对应 Coding Agent 的说明重启会话或刷新技能列表。

#### Claude Code Plugin Marketplace [#claude-code-plugin-marketplace]

在 \`Claude Code\` 中执行下面的命令安装：

\`\`\`bash
plugin marketplace add AgoraIO/skills
\`\`\`

#### OpenClaw [#openclaw]

通过 \`ClawHub\` 安装：

\`\`\`bash
clawhub install voice-ai-integration
clawhub update voice-ai-integration
\`\`\`

首次安装使用 \`install\`，后续更新使用 \`update\`。

## 仓库地址 [#仓库地址]

* [Agora skills](https://github.com/Shengwang-Community/skills)

## 最佳实践 [#最佳实践]

完成 skills 配置后，你就可以直接在 Coding Agent 中描述接入、生成代码或排查问题等任务。Skills 会帮助 Coding Agent 选择合适的接入流程和生成规则，并补充最新的声网文档内容，从而让代码生成、配置说明和问题定位更准确。

* 在提示词中明确写出声网产品名称、目标平台、开发语言和目标功能。
* 尽量补充更多上下文信息，例如你当前的技术栈、已有代码、期望的交互流程、是否需要 Token、是否需要服务端示例等，这样 AI 更容易给出可直接落地的方案。
* 如果是在排查问题，尽量同时提供错误现象、复现步骤、报错日志、错误码，以及控制台截图或调用栈信息，便于 Coding Agent 更快缩小问题范围。
* 对于复杂任务，优先使用支持更强模型能力和更完整的 AI IDE，以获得更稳定的代码生成和问题分析效果。

## 提示词示例 [#提示词示例]

完成 skills 配置后，可将以下内容作为提示词发给 Coding Agent，用于生成带实时字幕的 AI 语音对话 Demo：

\`\`\`text
帮我做一个 AI 语音对话 Demo，用户打开网页后点击"开始对话"就能和 AI 语音交流，页面实时显示对话字幕。

## 技术栈

- 前端：Next.js + React + TypeScript + Tailwind CSS
- 后端：FastAPI (Python)

## 功能要求

1. 一键开始/结束语音对话
2. 实时显示用户和 AI 的对话字幕
3. 麦克风静音/取消静音
4. 显示 AI 状态（聆听中、思考中、说话中）
5. 系统日志面板
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "你可以借助 AI Coding Agent 更高效地集成声网产品。通过配置 Agora skills，Coding Agent 可获得面向声网产品的任务路由、接入流程和生成规则，并结合最新官方文档内容，在需求分析、产品接入、代码生成和问题排查等场景中提供更准确、更高效的协助。"
  }, {
    heading: "安装-agora-skills",
    content: "选择以下方式安装 skills："
  }, {
    heading: "skills-cli",
    content: "使用 `CLI` 安装："
  }, {
    heading: "skills-cli",
    content: "这是最直接的安装方式。安装完成后，再按对应 Coding Agent 的说明重启会话或刷新技能列表。"
  }, {
    heading: "claude-code-plugin-marketplace",
    content: "在 `Claude Code` 中执行下面的命令安装："
  }, {
    heading: "openclaw",
    content: "通过 `ClawHub` 安装："
  }, {
    heading: "openclaw",
    content: "首次安装使用 `install`，后续更新使用 `update`。"
  }, {
    heading: "仓库地址",
    content: "Agora skills"
  }, {
    heading: "最佳实践",
    content: "完成 skills 配置后，你就可以直接在 Coding Agent 中描述接入、生成代码或排查问题等任务。Skills 会帮助 Coding Agent 选择合适的接入流程和生成规则，并补充最新的声网文档内容，从而让代码生成、配置说明和问题定位更准确。"
  }, {
    heading: "最佳实践",
    content: "在提示词中明确写出声网产品名称、目标平台、开发语言和目标功能。"
  }, {
    heading: "最佳实践",
    content: "尽量补充更多上下文信息，例如你当前的技术栈、已有代码、期望的交互流程、是否需要 Token、是否需要服务端示例等，这样 AI 更容易给出可直接落地的方案。"
  }, {
    heading: "最佳实践",
    content: "如果是在排查问题，尽量同时提供错误现象、复现步骤、报错日志、错误码，以及控制台截图或调用栈信息，便于 Coding Agent 更快缩小问题范围。"
  }, {
    heading: "最佳实践",
    content: "对于复杂任务，优先使用支持更强模型能力和更完整的 AI IDE，以获得更稳定的代码生成和问题分析效果。"
  }, {
    heading: "提示词示例",
    content: "完成 skills 配置后，可将以下内容作为提示词发给 Coding Agent，用于生成带实时字幕的 AI 语音对话 Demo："
  }],
  headings: [{
    id: "安装-agora-skills",
    content: "安装 Agora skills"
  }, {
    id: "skills-cli",
    content: "Skills CLI"
  }, {
    id: "claude-code-plugin-marketplace",
    content: "Claude Code Plugin Marketplace"
  }, {
    id: "openclaw",
    content: "OpenClaw"
  }, {
    id: "仓库地址",
    content: "仓库地址"
  }, {
    id: "最佳实践",
    content: "最佳实践"
  }, {
    id: "提示词示例",
    content: "提示词示例"
  }]
};
export let toc = [{
  depth: 2,
  url: "#安装-agora-skills",
  title: _jsx(_Fragment, {
    children: "安装 Agora skills"
  })
}, {
  depth: 4,
  url: "#skills-cli",
  title: _jsx(_Fragment, {
    children: "Skills CLI"
  })
}, {
  depth: 4,
  url: "#claude-code-plugin-marketplace",
  title: _jsx(_Fragment, {
    children: "Claude Code Plugin Marketplace"
  })
}, {
  depth: 4,
  url: "#openclaw",
  title: _jsx(_Fragment, {
    children: "OpenClaw"
  })
}, {
  depth: 2,
  url: "#仓库地址",
  title: _jsx(_Fragment, {
    children: "仓库地址"
  })
}, {
  depth: 2,
  url: "#最佳实践",
  title: _jsx(_Fragment, {
    children: "最佳实践"
  })
}, {
  depth: 2,
  url: "#提示词示例",
  title: _jsx(_Fragment, {
    children: "提示词示例"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "你可以借助 AI Coding Agent 更高效地集成声网产品。通过配置 Agora skills，Coding Agent 可获得面向声网产品的任务路由、接入流程和生成规则，并结合最新官方文档内容，在需求分析、产品接入、代码生成和问题排查等场景中提供更准确、更高效的协助。"
    }), `
`, _jsx(_components.h2, {
      id: "安装-agora-skills",
      children: "安装 Agora skills"
    }), `
`, _jsx(_components.p, {
      children: "选择以下方式安装 skills："
    }), `
`, _jsx(_components.h4, {
      id: "skills-cli",
      children: "Skills CLI"
    }), `
`, _jsxs(_components.p, {
      children: ["使用 ", _jsx(_components.code, {
        children: "CLI"
      }), " 安装："]
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "npx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " skills"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " add"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " AgoraIO/skills"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "这是最直接的安装方式。安装完成后，再按对应 Coding Agent 的说明重启会话或刷新技能列表。"
    }), `
`, _jsx(_components.h4, {
      id: "claude-code-plugin-marketplace",
      children: "Claude Code Plugin Marketplace"
    }), `
`, _jsxs(_components.p, {
      children: ["在 ", _jsx(_components.code, {
        children: "Claude Code"
      }), " 中执行下面的命令安装："]
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "plugin"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " marketplace"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " add"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " AgoraIO/skills"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "openclaw",
      children: "OpenClaw"
    }), `
`, _jsxs(_components.p, {
      children: ["通过 ", _jsx(_components.code, {
        children: "ClawHub"
      }), " 安装："]
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "clawhub"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " install"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " voice-ai-integration"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "clawhub"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " update"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " voice-ai-integration"
            })]
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["首次安装使用 ", _jsx(_components.code, {
        children: "install"
      }), "，后续更新使用 ", _jsx(_components.code, {
        children: "update"
      }), "。"]
    }), `
`, _jsx(_components.h2, {
      id: "仓库地址",
      children: "仓库地址"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://github.com/Shengwang-Community/skills",
          children: "Agora skills"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "最佳实践",
      children: "最佳实践"
    }), `
`, _jsx(_components.p, {
      children: "完成 skills 配置后，你就可以直接在 Coding Agent 中描述接入、生成代码或排查问题等任务。Skills 会帮助 Coding Agent 选择合适的接入流程和生成规则，并补充最新的声网文档内容，从而让代码生成、配置说明和问题定位更准确。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "在提示词中明确写出声网产品名称、目标平台、开发语言和目标功能。"
      }), `
`, _jsx(_components.li, {
        children: "尽量补充更多上下文信息，例如你当前的技术栈、已有代码、期望的交互流程、是否需要 Token、是否需要服务端示例等，这样 AI 更容易给出可直接落地的方案。"
      }), `
`, _jsx(_components.li, {
        children: "如果是在排查问题，尽量同时提供错误现象、复现步骤、报错日志、错误码，以及控制台截图或调用栈信息，便于 Coding Agent 更快缩小问题范围。"
      }), `
`, _jsx(_components.li, {
        children: "对于复杂任务，优先使用支持更强模型能力和更完整的 AI IDE，以获得更稳定的代码生成和问题分析效果。"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "提示词示例",
      children: "提示词示例"
    }), `
`, _jsx(_components.p, {
      children: "完成 skills 配置后，可将以下内容作为提示词发给 Coding Agent，用于生成带实时字幕的 AI 语音对话 Demo："
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "帮我做一个"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " AI"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 语音对话"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' Demo，用户打开网页后点击"开始对话"就能和'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " AI"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 语音交流，页面实时显示对话字幕。"
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
              children: "## 技术栈"
            })
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 前端：Next.js"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " +"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " React"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " +"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " TypeScript"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " +"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Tailwind"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " CSS"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 后端：FastAPI"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (Python)"
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
              children: "## 功能要求"
            })
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "1."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 一键开始/结束语音对话"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "2."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 实时显示用户和"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " AI"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 的对话字幕"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "3."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 麦克风静音/取消静音"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "4."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 显示"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " AI"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 状态（聆听中、思考中、说话中）"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "5."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 系统日志面板"
            })]
          })]
        })
      })
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
