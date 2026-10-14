import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "使用 MCP 集成",
  description: "你可以借助 AI Coding Agent 更高效地集成声网产品。通过配置 Agora Doc MCP Server，Coding Agent 可直接搜索和读取声网官方文档，在回答问题或生成代码前先获取最新官方文档内容，从而提..."
};
export let _markdown = `

你可以借助 AI Coding Agent 更高效地集成声网产品。通过配置 Agora Doc MCP Server，Coding Agent 可直接搜索和读取声网官方文档，在回答问题或生成代码前先获取最新官方文档内容，从而提供更准确、更高效的协助。

## 连接声网文档 MCP Server [#连接声网文档-mcp-server]

选择以下方式连接 MCP Server：

#### Trae [#trae]

**手动配置：**

在 Trae 的 Settings > MCP 中手动添加以下配置：

\`\`\`json title=
{
  "mcpServers": {
    "shengwang-docs": {
      "type": "http",
      "url": "https://doc-mcp.shengwang.cn/mcp"
    }
  }
}
\`\`\`

#### Claude Code [#claude-code]

**使用 \`CLI\` 添加：**

\`\`\`bash
claude mcp add --transport http shengwang-docs https://doc-mcp.shengwang.cn/mcp
\`\`\`

**或手动配置：**

在项目根目录新建或编辑 \`.mcp.json\`，把下面这段加入。

\`\`\`json
{
  "mcpServers": {
    "shengwang-docs": {
      "type": "http",
      "url": "https://doc-mcp.shengwang.cn/mcp"
    }
  }
}
\`\`\`

#### Codex [#codex]

**使用 \`CLI\` 添加：**

\`\`\`bash
codex mcp add shengwang-docs --url https://doc-mcp.shengwang.cn/mcp
\`\`\`

**或手动配置：**

在项目根目录新建或编辑 \`.codex/config.toml\`，把下面这段加入。

\`\`\`toml
[mcp_servers.shengwang-docs]
url = "https://doc-mcp.shengwang.cn/mcp"
\`\`\`

#### Cursor [#cursor]

**手动配置：**

在项目根目录新建或编辑 \`.cursor/mcp.json\`，把下面这段加入。

\`\`\`json
{
  "mcpServers": {
    "shengwang-docs": {
      "url": "https://doc-mcp.shengwang.cn/mcp"
    }
  }
}
\`\`\`

#### Kiro [#kiro]

**手动配置：**

在项目根目录新建或编辑 \`.kiro/settings/mcp.json\`，把下面这段加入。

\`\`\`json
{
  "mcpServers": {
    "shengwang-docs": {
      "url": "https://doc-mcp.shengwang.cn/mcp"
    }
  }
}
\`\`\`

#### VS Code & Copilot [#vs-code--copilot]

**使用 \`CLI\` 添加：**

\`\`\`bash
code --add-mcp '{"name":"shengwang-docs","type":"http","url":"https://doc-mcp.shengwang.cn/mcp"}'
\`\`\`

**或手动配置：**

在根目录新建或编辑 \`.vscode/mcp.json\`，把下面这段加入。

\`\`\`json
{
  "servers": {
    "shengwang-docs": {
      "type": "http",
      "url": "https://doc-mcp.shengwang.cn/mcp"
    }
  }
}
\`\`\`

## MCP 工具 [#mcp-工具]

* \`search-docs\`：搜索相关文档。
* \`list-docs\`：浏览文档分类和文档列表。
* \`get-doc-content\`：读取指定文档的完整内容。

## 调用 MCP 工具 [#调用-mcp-工具]

**Coding Agent 自动调用**

可以在 Agent Mode 下你可以直接描述需求，由 Coding Agent 自己判断并调用 MCP 工具。

例如：

> 搜索相关的声网文档并获取文档内容，告诉我如何实现一个最简单的 1v1 实时音视频通话。

**在提示词中指定调用**

你也可以在提示词里通过 AI IDE 支持的工具调用方式指定要使用的 MCP 工具。

例如：

> \\#search-docs #get-doc-content 用 search-docs 搜索相关的声网文档，用 get-doc-content 获取对应文档的完整内容，告诉我如何实现与 AI 智能体对话互动。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "你可以借助 AI Coding Agent 更高效地集成声网产品。通过配置 Agora Doc MCP Server，Coding Agent 可直接搜索和读取声网官方文档，在回答问题或生成代码前先获取最新官方文档内容，从而提供更准确、更高效的协助。"
  }, {
    heading: "连接声网文档-mcp-server",
    content: "选择以下方式连接 MCP Server："
  }, {
    heading: "trae",
    content: "**手动配置：**"
  }, {
    heading: "trae",
    content: "在 Trae 的 Settings > MCP 中手动添加以下配置："
  }, {
    heading: "claude-code",
    content: "**使用 `CLI` 添加：**"
  }, {
    heading: "claude-code",
    content: "**或手动配置：**"
  }, {
    heading: "claude-code",
    content: "在项目根目录新建或编辑 `.mcp.json`，把下面这段加入。"
  }, {
    heading: "codex",
    content: "**使用 `CLI` 添加：**"
  }, {
    heading: "codex",
    content: "**或手动配置：**"
  }, {
    heading: "codex",
    content: "在项目根目录新建或编辑 `.codex/config.toml`，把下面这段加入。"
  }, {
    heading: "cursor",
    content: "**手动配置：**"
  }, {
    heading: "cursor",
    content: "在项目根目录新建或编辑 `.cursor/mcp.json`，把下面这段加入。"
  }, {
    heading: "kiro",
    content: "**手动配置：**"
  }, {
    heading: "kiro",
    content: "在项目根目录新建或编辑 `.kiro/settings/mcp.json`，把下面这段加入。"
  }, {
    heading: "vs-code--copilot",
    content: "**使用 `CLI` 添加：**"
  }, {
    heading: "vs-code--copilot",
    content: "**或手动配置：**"
  }, {
    heading: "vs-code--copilot",
    content: "在根目录新建或编辑 `.vscode/mcp.json`，把下面这段加入。"
  }, {
    heading: "mcp-工具",
    content: "`search-docs`：搜索相关文档。"
  }, {
    heading: "mcp-工具",
    content: "`list-docs`：浏览文档分类和文档列表。"
  }, {
    heading: "mcp-工具",
    content: "`get-doc-content`：读取指定文档的完整内容。"
  }, {
    heading: "调用-mcp-工具",
    content: "**Coding Agent 自动调用**"
  }, {
    heading: "调用-mcp-工具",
    content: "可以在 Agent Mode 下你可以直接描述需求，由 Coding Agent 自己判断并调用 MCP 工具。"
  }, {
    heading: "调用-mcp-工具",
    content: "例如："
  }, {
    heading: "调用-mcp-工具",
    content: "> 搜索相关的声网文档并获取文档内容，告诉我如何实现一个最简单的 1v1 实时音视频通话。"
  }, {
    heading: "调用-mcp-工具",
    content: "**在提示词中指定调用**"
  }, {
    heading: "调用-mcp-工具",
    content: "你也可以在提示词里通过 AI IDE 支持的工具调用方式指定要使用的 MCP 工具。"
  }, {
    heading: "调用-mcp-工具",
    content: "例如："
  }, {
    heading: "调用-mcp-工具",
    content: "> \\#search-docs #get-doc-content 用 search-docs 搜索相关的声网文档，用 get-doc-content 获取对应文档的完整内容，告诉我如何实现与 AI 智能体对话互动。"
  }],
  headings: [{
    id: "连接声网文档-mcp-server",
    content: "连接声网文档 MCP Server"
  }, {
    id: "trae",
    content: "Trae"
  }, {
    id: "claude-code",
    content: "Claude Code"
  }, {
    id: "codex",
    content: "Codex"
  }, {
    id: "cursor",
    content: "Cursor"
  }, {
    id: "kiro",
    content: "Kiro"
  }, {
    id: "vs-code--copilot",
    content: "VS Code & Copilot"
  }, {
    id: "mcp-工具",
    content: "MCP 工具"
  }, {
    id: "调用-mcp-工具",
    content: "调用 MCP 工具"
  }]
};
export let toc = [{
  depth: 2,
  url: "#连接声网文档-mcp-server",
  title: _jsx(_Fragment, {
    children: "连接声网文档 MCP Server"
  })
}, {
  depth: 4,
  url: "#trae",
  title: _jsx(_Fragment, {
    children: "Trae"
  })
}, {
  depth: 4,
  url: "#claude-code",
  title: _jsx(_Fragment, {
    children: "Claude Code"
  })
}, {
  depth: 4,
  url: "#codex",
  title: _jsx(_Fragment, {
    children: "Codex"
  })
}, {
  depth: 4,
  url: "#cursor",
  title: _jsx(_Fragment, {
    children: "Cursor"
  })
}, {
  depth: 4,
  url: "#kiro",
  title: _jsx(_Fragment, {
    children: "Kiro"
  })
}, {
  depth: 4,
  url: "#vs-code--copilot",
  title: _jsx(_Fragment, {
    children: "VS Code & Copilot"
  })
}, {
  depth: 2,
  url: "#mcp-工具",
  title: _jsx(_Fragment, {
    children: "MCP 工具"
  })
}, {
  depth: 2,
  url: "#调用-mcp-工具",
  title: _jsx(_Fragment, {
    children: "调用 MCP 工具"
  })
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "你可以借助 AI Coding Agent 更高效地集成声网产品。通过配置 Agora Doc MCP Server，Coding Agent 可直接搜索和读取声网官方文档，在回答问题或生成代码前先获取最新官方文档内容，从而提供更准确、更高效的协助。"
    }), `
`, _jsx(_components.h2, {
      id: "连接声网文档-mcp-server",
      children: "连接声网文档 MCP Server"
    }), `
`, _jsx(_components.p, {
      children: "选择以下方式连接 MCP Server："
    }), `
`, _jsx(_components.h4, {
      id: "trae",
      children: "Trae"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "手动配置："
      })
    }), `
`, _jsx(_components.p, {
      children: "在 Trae 的 Settings > MCP 中手动添加以下配置："
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
              children: '  "mcpServers"'
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
              children: '    "shengwang-docs"'
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
              children: '      "type"'
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
              children: '"http"'
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
              children: '"https://doc-mcp.shengwang.cn/mcp"'
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
`, _jsx(_components.h4, {
      id: "claude-code",
      children: "Claude Code"
    }), `
`, _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: ["使用 ", _jsx(_components.code, {
          children: "CLI"
        }), " 添加："]
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "claude"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " mcp"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " add"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --transport"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " http"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " shengwang-docs"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://doc-mcp.shengwang.cn/mcp"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "或手动配置："
      })
    }), `
`, _jsxs(_components.p, {
      children: ["在项目根目录新建或编辑 ", _jsx(_components.code, {
        children: ".mcp.json"
      }), "，把下面这段加入。"]
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
              children: '  "mcpServers"'
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
              children: '    "shengwang-docs"'
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
              children: '      "type"'
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
              children: '"http"'
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
              children: '"https://doc-mcp.shengwang.cn/mcp"'
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
`, _jsx(_components.h4, {
      id: "codex",
      children: "Codex"
    }), `
`, _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: ["使用 ", _jsx(_components.code, {
          children: "CLI"
        }), " 添加："]
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "codex"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " mcp"
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
              children: " shengwang-docs"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --url"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://doc-mcp.shengwang.cn/mcp"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "或手动配置："
      })
    }), `
`, _jsxs(_components.p, {
      children: ["在项目根目录新建或编辑 ", _jsx(_components.code, {
        children: ".codex/config.toml"
      }), "，把下面这段加入。"]
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[mcp_servers.shengwang-docs]"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "url"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "https://doc-mcp.shengwang.cn/mcp"'
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "cursor",
      children: "Cursor"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "手动配置："
      })
    }), `
`, _jsxs(_components.p, {
      children: ["在项目根目录新建或编辑 ", _jsx(_components.code, {
        children: ".cursor/mcp.json"
      }), "，把下面这段加入。"]
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
              children: '  "mcpServers"'
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
              children: '    "shengwang-docs"'
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
              children: '"https://doc-mcp.shengwang.cn/mcp"'
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
`, _jsx(_components.h4, {
      id: "kiro",
      children: "Kiro"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "手动配置："
      })
    }), `
`, _jsxs(_components.p, {
      children: ["在项目根目录新建或编辑 ", _jsx(_components.code, {
        children: ".kiro/settings/mcp.json"
      }), "，把下面这段加入。"]
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
              children: '  "mcpServers"'
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
              children: '    "shengwang-docs"'
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
              children: '"https://doc-mcp.shengwang.cn/mcp"'
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
`, _jsx(_components.h4, {
      id: "vs-code--copilot",
      children: "VS Code & Copilot"
    }), `
`, _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: ["使用 ", _jsx(_components.code, {
          children: "CLI"
        }), " 添加："]
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "code"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --add-mcp"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ` '{"name":"shengwang-docs","type":"http","url":"https://doc-mcp.shengwang.cn/mcp"}'`
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "或手动配置："
      })
    }), `
`, _jsxs(_components.p, {
      children: ["在根目录新建或编辑 ", _jsx(_components.code, {
        children: ".vscode/mcp.json"
      }), "，把下面这段加入。"]
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
              children: '  "servers"'
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
              children: '    "shengwang-docs"'
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
              children: '      "type"'
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
              children: '"http"'
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
              children: '"https://doc-mcp.shengwang.cn/mcp"'
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
`, _jsx(_components.h2, {
      id: "mcp-工具",
      children: "MCP 工具"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "search-docs"
        }), "：搜索相关文档。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "list-docs"
        }), "：浏览文档分类和文档列表。"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "get-doc-content"
        }), "：读取指定文档的完整内容。"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "调用-mcp-工具",
      children: "调用 MCP 工具"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Coding Agent 自动调用"
      })
    }), `
`, _jsx(_components.p, {
      children: "可以在 Agent Mode 下你可以直接描述需求，由 Coding Agent 自己判断并调用 MCP 工具。"
    }), `
`, _jsx(_components.p, {
      children: "例如："
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsx(_components.p, {
        children: "搜索相关的声网文档并获取文档内容，告诉我如何实现一个最简单的 1v1 实时音视频通话。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "在提示词中指定调用"
      })
    }), `
`, _jsx(_components.p, {
      children: "你也可以在提示词里通过 AI IDE 支持的工具调用方式指定要使用的 MCP 工具。"
    }), `
`, _jsx(_components.p, {
      children: "例如："
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsx(_components.p, {
        children: "#search-docs #get-doc-content 用 search-docs 搜索相关的声网文档，用 get-doc-content 获取对应文档的完整内容，告诉我如何实现与 AI 智能体对话互动。"
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
