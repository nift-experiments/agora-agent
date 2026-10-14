import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Voice agent 快速开始",
  description: "使用官方维护的 starter 项目，在几分钟内跑起一个可工作的 voice agent。"
};
export let _markdown = `

这一页帮助你在较短时间内跑通一个可工作的 voice agent。推荐路径是先为 AI 编码助手安装 Agora skills，再使用 Agora CLI 登录、初始化官方 starter，并直接在本地运行。

如果你已经在使用 AI 编码助手，也可以把示例提示词直接贴给助手，让它替你完成安装和初始化；如果你更喜欢手动执行命令，也可以按本文的 CLI 步骤逐步完成。

## 安装 Agora skills [#安装-agora-skills]

Agora skills 会让你的 AI 编码助手了解 Conversational AI 项目的官方 starter、Agora CLI 工作流、项目绑定、环境文件生成和诊断方式。

\`\`\`bash
npx skills add https://github.com/agoraio/skills --skill agora
\`\`\`

你可以把下面这句提示词直接发给你的 AI 编码助手：

\`\`\`text
Set up and run the Agora Conversational AI Python starter project locally.
\`\`\`

如果你偏好其他语言，可以把 \`Python\` 替换成 \`TypeScript\` 或 \`Go\`。

## 安装 Agora CLI [#安装-agora-cli]

Agora CLI 是一个原生 Go 二进制工具，仓库地址是 [AgoraIO-Community/cli](https://github.com/AgoraIO-Community/cli)。

### macOS 和 Linux [#macos-和-linux]

\`\`\`bash
curl -fsSL https://raw.githubusercontent.com/AgoraIO/cli/main/install.sh | sh -s -- --add-to-path
agora --help
\`\`\`

如果安装后找不到 \`agora\` 命令，请再次运行并保留 \`--add-to-path\`，或者手动把安装目录写入 shell profile。

### Windows PowerShell [#windows-powershell]

\`\`\`powershell
irm https://raw.githubusercontent.com/AgoraIO/cli/main/install.ps1 | iex
agora --help
\`\`\`

如果执行策略不允许内联脚本，可以先下载 \`install.ps1\`，再运行：

\`\`\`powershell
powershell -ExecutionPolicy Bypass -File .\\install.ps1
\`\`\`

## 登录、初始化并运行 starter [#登录初始化并运行-starter]

### 1. 登录 Agora Console [#1-登录-agora-console]

\`\`\`bash
agora login
\`\`\`

### 2. 使用 \`agora init\` 初始化官方 starter [#2-使用-agora-init-初始化官方-starter]

根据你选择的语言初始化项目、绑定 Agora 项目，并生成所需环境文件。

<CodeBlockTabs defaultValue="python">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="python">
      Python
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="typescript">
      TypeScript
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="go">
      Go
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="python">
    \`\`\`bash
    agora init my-python-demo --template python
    cd my-python-demo
    bun install
    bun run dev
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="typescript">
    \`\`\`bash
    agora init my-nextjs-demo --template nextjs
    cd my-nextjs-demo
    pnpm install
    pnpm dev
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="go">
    \`\`\`bash
    agora init my-go-demo --template go
    cd my-go-demo
    make setup
    make dev
    \`\`\`
  </CodeBlockTab>
</CodeBlockTabs>

### 3. 打开本地页面开始对话 [#3-打开本地页面开始对话]

打开 \`http://localhost:3000\`，点击 **Start conversation**。

如果智能体没有成功加入频道，或者转写内容没有出现，可以运行下面的诊断命令：

\`\`\`bash
agora project doctor
\`\`\`

这个命令会帮助你检查：

* 项目凭据是否有效
* 对话式 AI 功能是否已开通
* 本地环境和网络连通性是否正常

## 下一步 [#下一步]

跑通 starter 之后，建议继续阅读：

* [启动和停止智能体](../build/start-stop-agent.mdx)
* [打断智能体](../build/interrupt-agent.mdx)
* [监听运行时事件](../build/get-runtime-events.mdx)
* [模型概览](../models/index.md)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "这一页帮助你在较短时间内跑通一个可工作的 voice agent。推荐路径是先为 AI 编码助手安装 Agora skills，再使用 Agora CLI 登录、初始化官方 starter，并直接在本地运行。"
  }, {
    heading: undefined,
    content: "如果你已经在使用 AI 编码助手，也可以把示例提示词直接贴给助手，让它替你完成安装和初始化；如果你更喜欢手动执行命令，也可以按本文的 CLI 步骤逐步完成。"
  }, {
    heading: "安装-agora-skills",
    content: "Agora skills 会让你的 AI 编码助手了解 Conversational AI 项目的官方 starter、Agora CLI 工作流、项目绑定、环境文件生成和诊断方式。"
  }, {
    heading: "安装-agora-skills",
    content: "你可以把下面这句提示词直接发给你的 AI 编码助手："
  }, {
    heading: "安装-agora-skills",
    content: "如果你偏好其他语言，可以把 `Python` 替换成 `TypeScript` 或 `Go`。"
  }, {
    heading: "安装-agora-cli",
    content: "Agora CLI 是一个原生 Go 二进制工具，仓库地址是 AgoraIO-Community/cli。"
  }, {
    heading: "macos-和-linux",
    content: "如果安装后找不到 `agora` 命令，请再次运行并保留 `--add-to-path`，或者手动把安装目录写入 shell profile。"
  }, {
    heading: "windows-powershell",
    content: "如果执行策略不允许内联脚本，可以先下载 `install.ps1`，再运行："
  }, {
    heading: "2-使用-agora-init-初始化官方-starter",
    content: "根据你选择的语言初始化项目、绑定 Agora 项目，并生成所需环境文件。"
  }, {
    heading: "3-打开本地页面开始对话",
    content: "打开 `http://localhost:3000`，点击 **Start conversation**。"
  }, {
    heading: "3-打开本地页面开始对话",
    content: "如果智能体没有成功加入频道，或者转写内容没有出现，可以运行下面的诊断命令："
  }, {
    heading: "3-打开本地页面开始对话",
    content: "这个命令会帮助你检查："
  }, {
    heading: "3-打开本地页面开始对话",
    content: "项目凭据是否有效"
  }, {
    heading: "3-打开本地页面开始对话",
    content: "对话式 AI 功能是否已开通"
  }, {
    heading: "3-打开本地页面开始对话",
    content: "本地环境和网络连通性是否正常"
  }, {
    heading: "下一步",
    content: "跑通 starter 之后，建议继续阅读："
  }, {
    heading: "下一步",
    content: "启动和停止智能体"
  }, {
    heading: "下一步",
    content: "打断智能体"
  }, {
    heading: "下一步",
    content: "监听运行时事件"
  }, {
    heading: "下一步",
    content: "模型概览"
  }],
  headings: [{
    id: "安装-agora-skills",
    content: "安装 Agora skills"
  }, {
    id: "安装-agora-cli",
    content: "安装 Agora CLI"
  }, {
    id: "macos-和-linux",
    content: "macOS 和 Linux"
  }, {
    id: "windows-powershell",
    content: "Windows PowerShell"
  }, {
    id: "登录初始化并运行-starter",
    content: "登录、初始化并运行 starter"
  }, {
    id: "1-登录-agora-console",
    content: "1\\. 登录 Agora Console"
  }, {
    id: "2-使用-agora-init-初始化官方-starter",
    content: "2\\. 使用 `agora init` 初始化官方 starter"
  }, {
    id: "3-打开本地页面开始对话",
    content: "3\\. 打开本地页面开始对话"
  }, {
    id: "下一步",
    content: "下一步"
  }]
};
export let toc = [{
  depth: 2,
  url: "#安装-agora-skills",
  title: _jsx(_Fragment, {
    children: "安装 Agora skills"
  })
}, {
  depth: 2,
  url: "#安装-agora-cli",
  title: _jsx(_Fragment, {
    children: "安装 Agora CLI"
  })
}, {
  depth: 3,
  url: "#macos-和-linux",
  title: _jsx(_Fragment, {
    children: "macOS 和 Linux"
  })
}, {
  depth: 3,
  url: "#windows-powershell",
  title: _jsx(_Fragment, {
    children: "Windows PowerShell"
  })
}, {
  depth: 2,
  url: "#登录初始化并运行-starter",
  title: _jsx(_Fragment, {
    children: "登录、初始化并运行 starter"
  })
}, {
  depth: 3,
  url: "#1-登录-agora-console",
  title: _jsx(_Fragment, {
    children: "1. 登录 Agora Console"
  })
}, {
  depth: 3,
  url: "#2-使用-agora-init-初始化官方-starter",
  title: _jsxs(_Fragment, {
    children: ["2. 使用 ", _jsx("code", {
      children: "agora init"
    }), " 初始化官方 starter"]
  })
}, {
  depth: 3,
  url: "#3-打开本地页面开始对话",
  title: _jsx(_Fragment, {
    children: "3. 打开本地页面开始对话"
  })
}, {
  depth: 2,
  url: "#下一步",
  title: _jsx(_Fragment, {
    children: "下一步"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
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
      children: "这一页帮助你在较短时间内跑通一个可工作的 voice agent。推荐路径是先为 AI 编码助手安装 Agora skills，再使用 Agora CLI 登录、初始化官方 starter，并直接在本地运行。"
    }), `
`, _jsx(_components.p, {
      children: "如果你已经在使用 AI 编码助手，也可以把示例提示词直接贴给助手，让它替你完成安装和初始化；如果你更喜欢手动执行命令，也可以按本文的 CLI 步骤逐步完成。"
    }), `
`, _jsx(_components.h2, {
      id: "安装-agora-skills",
      children: "安装 Agora skills"
    }), `
`, _jsx(_components.p, {
      children: "Agora skills 会让你的 AI 编码助手了解 Conversational AI 项目的官方 starter、Agora CLI 工作流、项目绑定、环境文件生成和诊断方式。"
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
              children: " https://github.com/agoraio/skills"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --skill"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " agora"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "你可以把下面这句提示词直接发给你的 AI 编码助手："
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Set"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " up"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " and"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " run"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " the"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Agora"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Conversational"
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
              children: " Python"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " starter"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " project"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " locally."
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["如果你偏好其他语言，可以把 ", _jsx(_components.code, {
        children: "Python"
      }), " 替换成 ", _jsx(_components.code, {
        children: "TypeScript"
      }), " 或 ", _jsx(_components.code, {
        children: "Go"
      }), "。"]
    }), `
`, _jsx(_components.h2, {
      id: "安装-agora-cli",
      children: "安装 Agora CLI"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora CLI 是一个原生 Go 二进制工具，仓库地址是 ", _jsx(_components.a, {
        href: "https://github.com/AgoraIO-Community/cli",
        children: "AgoraIO-Community/cli"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "macos-和-linux",
      children: "macOS 和 Linux"
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
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -fsSL"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://raw.githubusercontent.com/AgoraIO/cli/main/install.sh"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " |"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " sh"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -s"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --add-to-path"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "agora"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --help"
            })]
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["如果安装后找不到 ", _jsx(_components.code, {
        children: "agora"
      }), " 命令，请再次运行并保留 ", _jsx(_components.code, {
        children: "--add-to-path"
      }), "，或者手动把安装目录写入 shell profile。"]
    }), `
`, _jsx(_components.h3, {
      id: "windows-powershell",
      children: "Windows PowerShell"
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
              children: "irm"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://raw.githubusercontent.com/AgoraIO/cli/main/install.ps1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " |"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " iex"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "agora"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --help"
            })]
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["如果执行策略不允许内联脚本，可以先下载 ", _jsx(_components.code, {
        children: "install.ps1"
      }), "，再运行："]
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
              children: "powershell"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -ExecutionPolicy"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Bypass"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -File"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\\i"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "nstall.ps1"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "登录初始化并运行-starter",
      children: "登录、初始化并运行 starter"
    }), `
`, _jsx(_components.h3, {
      id: "1-登录-agora-console",
      children: "1. 登录 Agora Console"
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
              children: "agora"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " login"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.h3, {
      id: "2-使用-agora-init-初始化官方-starter",
      children: ["2. 使用 ", _jsx(_components.code, {
        children: "agora init"
      }), " 初始化官方 starter"]
    }), `
`, _jsx(_components.p, {
      children: "根据你选择的语言初始化项目、绑定 Agora 项目，并生成所需环境文件。"
    }), `
`, _jsxs(CodeBlockTabs, {
      defaultValue: "python",
      children: [_jsxs(CodeBlockTabsList, {
        children: [_jsx(CodeBlockTabsTrigger, {
          value: "python",
          children: "Python"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "typescript",
          children: "TypeScript"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "go",
          children: "Go"
        })]
      }), _jsx(CodeBlockTab, {
        value: "python",
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
            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " init"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " my-python-demo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --template"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " python"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "cd"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " my-python-demo"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "bun"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " install"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "bun"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " run"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " dev"
                })]
              })]
            })
          })
        })
      }), _jsx(CodeBlockTab, {
        value: "typescript",
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
            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " init"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " my-nextjs-demo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --template"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " nextjs"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "cd"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " my-nextjs-demo"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "pnpm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " install"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "pnpm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " dev"
                })]
              })]
            })
          })
        })
      }), _jsx(CodeBlockTab, {
        value: "go",
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
            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " init"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " my-go-demo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --template"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " go"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "cd"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " my-go-demo"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "make"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " setup"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "make"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " dev"
                })]
              })]
            })
          })
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "3-打开本地页面开始对话",
      children: "3. 打开本地页面开始对话"
    }), `
`, _jsxs(_components.p, {
      children: ["打开 ", _jsx(_components.code, {
        children: "http://localhost:3000"
      }), "，点击 ", _jsx(_components.strong, {
        children: "Start conversation"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "如果智能体没有成功加入频道，或者转写内容没有出现，可以运行下面的诊断命令："
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
              children: "agora"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " project"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " doctor"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "这个命令会帮助你检查："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "项目凭据是否有效"
      }), `
`, _jsx(_components.li, {
        children: "对话式 AI 功能是否已开通"
      }), `
`, _jsx(_components.li, {
        children: "本地环境和网络连通性是否正常"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "下一步",
      children: "下一步"
    }), `
`, _jsx(_components.p, {
      children: "跑通 starter 之后，建议继续阅读："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../build/start-stop-agent.mdx",
          children: "启动和停止智能体"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../build/interrupt-agent.mdx",
          children: "打断智能体"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../build/get-runtime-events.mdx",
          children: "监听运行时事件"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../models/index.md",
          children: "模型概览"
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
