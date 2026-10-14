import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Agora MCP",
  description: "Connect your AI coding assistant to Agora MCP so it can search the latest official documentation while building or debugging an Agora project."
};
export let _markdown = `

Install Agora MCP when you want your assistant to check the latest Agora docs before it writes or changes code. Use it to confirm current SDK methods, parameters, quickstarts, and product or platform differences while you build or debug.

This is most useful when documentation freshness is the risky part of the task. If you also want help choosing the right Agora workflow or starter, add [Agora Skills](/en/introduction/agora-skills).

## Install the MCP server [#install-the-mcp-server]

\`Agora MCP\` is included when you install [Agora Skills](/en/introduction/agora-skills), but you can also install the MCP server on its own:

\`\`\`text
https://mcp.agora.io
\`\`\`

Agora MCP is available only in coding tools where you install or configure it. A regular browser-based chat session does not connect to this server automatically.

<Tabs>
  <TabsList>
    <TabsTrigger value="cursor">
      Cursor
    </TabsTrigger>

    <TabsTrigger value="claude-code">
      Claude Code
    </TabsTrigger>

    <TabsTrigger value="codex">
      Codex
    </TabsTrigger>

    <TabsTrigger value="gemini-cli">
      Gemini CLI
    </TabsTrigger>

    <TabsTrigger value="manual">
      Manual installation
    </TabsTrigger>
  </TabsList>

  <TabsContent value="cursor">
    Add the following JSON to your MCP configuration:

    \`\`\`json
    {
      "mcpServers": {
        "agora-docs": {
          "url": "https://mcp.agora.io"
        }
      }
    }
    \`\`\`
  </TabsContent>

  <TabsContent value="claude-code">
    \`\`\`bash
    claude mcp add --transport http agora-docs https://mcp.agora.io
    \`\`\`
  </TabsContent>

  <TabsContent value="codex">
    \`\`\`bash
    codex mcp add --url https://mcp.agora.io agora-docs
    \`\`\`
  </TabsContent>

  <TabsContent value="gemini-cli">
    \`\`\`bash
    gemini mcp add --transport http agora-docs https://mcp.agora.io
    \`\`\`
  </TabsContent>

  <TabsContent value="manual">
    Add \`https://mcp.agora.io\` to your MCP client and use \`http\` or \`Streamable HTTP\` transport if the client asks for a transport type.
  </TabsContent>
</Tabs>

## Start with a prompt [#start-with-a-prompt]

Install the server in your coding tool, then ask your assistant to search Agora docs before it writes code. Include the Agora product, the target platform, and the task type in the same prompt.

\`\`\`text
Use Agora MCP to find the current web quickstart for Conversational AI and explain the minimum setup for a browser voice demo.
\`\`\`

## Make docs lookup part of the workflow [#make-docs-lookup-part-of-the-workflow]

If your repository includes \`AGENTS.md\` or similar instructions, tell your assistant to prefer Agora MCP for product-specific lookups. That turns docs checks into a normal part of the workflow instead of an optional extra step.

If your MCP client is not available, these fallback resources still help:

* Use \`https://docs.agora.io/llms.txt\` as the lightweight documentation index. Its entries link directly to Markdown pages.
* Append \`.md\` to a documentation URL to read that page as Markdown. For example, use \`https://docs.agora.io/en/ai/get-started/quickstart.md\`.
* Use \`https://docs.agora.io/llms-full.txt\` only for offline indexing or bulk processing. It is too large to use as the default context for an interactive assistant.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Install Agora MCP when you want your assistant to check the latest Agora docs before it writes or changes code. Use it to confirm current SDK methods, parameters, quickstarts, and product or platform differences while you build or debug."
  }, {
    heading: undefined,
    content: "This is most useful when documentation freshness is the risky part of the task. If you also want help choosing the right Agora workflow or starter, add Agora Skills."
  }, {
    heading: "install-the-mcp-server",
    content: "`Agora MCP` is included when you install Agora Skills, but you can also install the MCP server on its own:"
  }, {
    heading: "install-the-mcp-server",
    content: "Agora MCP is available only in coding tools where you install or configure it. A regular browser-based chat session does not connect to this server automatically."
  }, {
    heading: "install-the-mcp-server",
    content: "Add the following JSON to your MCP configuration:"
  }, {
    heading: "install-the-mcp-server",
    content: "Add `https://mcp.agora.io` to your MCP client and use `http` or `Streamable HTTP` transport if the client asks for a transport type."
  }, {
    heading: "start-with-a-prompt",
    content: "Install the server in your coding tool, then ask your assistant to search Agora docs before it writes code. Include the Agora product, the target platform, and the task type in the same prompt."
  }, {
    heading: "make-docs-lookup-part-of-the-workflow",
    content: "If your repository includes `AGENTS.md` or similar instructions, tell your assistant to prefer Agora MCP for product-specific lookups. That turns docs checks into a normal part of the workflow instead of an optional extra step."
  }, {
    heading: "make-docs-lookup-part-of-the-workflow",
    content: "If your MCP client is not available, these fallback resources still help:"
  }, {
    heading: "make-docs-lookup-part-of-the-workflow",
    content: "Use `https://docs.agora.io/llms.txt` as the lightweight documentation index. Its entries link directly to Markdown pages."
  }, {
    heading: "make-docs-lookup-part-of-the-workflow",
    content: "Append `.md` to a documentation URL to read that page as Markdown. For example, use `https://docs.agora.io/en/ai/get-started/quickstart.md`."
  }, {
    heading: "make-docs-lookup-part-of-the-workflow",
    content: "Use `https://docs.agora.io/llms-full.txt` only for offline indexing or bulk processing. It is too large to use as the default context for an interactive assistant."
  }],
  headings: [{
    id: "install-the-mcp-server",
    content: "Install the MCP server"
  }, {
    id: "start-with-a-prompt",
    content: "Start with a prompt"
  }, {
    id: "make-docs-lookup-part-of-the-workflow",
    content: "Make docs lookup part of the workflow"
  }]
};
export let toc = [{
  depth: 2,
  url: "#install-the-mcp-server",
  title: _jsx(_Fragment, {
    children: "Install the MCP server"
  })
}, {
  depth: 2,
  url: "#start-with-a-prompt",
  title: _jsx(_Fragment, {
    children: "Start with a prompt"
  })
}, {
  depth: 2,
  url: "#make-docs-lookup-part-of-the-workflow",
  title: _jsx(_Fragment, {
    children: "Make docs lookup part of the workflow"
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
  }, { Tabs, TabsContent, TabsList, TabsTrigger } = _components;
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  if (!TabsContent)
    _missingMdxReference("TabsContent", true);
  if (!TabsList)
    _missingMdxReference("TabsList", true);
  if (!TabsTrigger)
    _missingMdxReference("TabsTrigger", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Install Agora MCP when you want your assistant to check the latest Agora docs before it writes or changes code. Use it to confirm current SDK methods, parameters, quickstarts, and product or platform differences while you build or debug."
    }), `
`, _jsxs(_components.p, {
      children: ["This is most useful when documentation freshness is the risky part of the task. If you also want help choosing the right Agora workflow or starter, add ", _jsx(_components.a, {
        href: "/en/introduction/agora-skills",
        children: "Agora Skills"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "install-the-mcp-server",
      children: "Install the MCP server"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "Agora MCP"
      }), " is included when you install ", _jsx(_components.a, {
        href: "/en/introduction/agora-skills",
        children: "Agora Skills"
      }), ", but you can also install the MCP server on its own:"]
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
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "https://mcp.agora.io"
            })
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Agora MCP is available only in coding tools where you install or configure it. A regular browser-based chat session does not connect to this server automatically."
    }), `
`, _jsxs(Tabs, {
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "cursor",
          children: "Cursor"
        }), _jsx(TabsTrigger, {
          value: "claude-code",
          children: "Claude Code"
        }), _jsx(TabsTrigger, {
          value: "codex",
          children: "Codex"
        }), _jsx(TabsTrigger, {
          value: "gemini-cli",
          children: "Gemini CLI"
        }), _jsx(TabsTrigger, {
          value: "manual",
          children: "Manual installation"
        })]
      }), _jsxs(TabsContent, {
        value: "cursor",
        children: [_jsx(_components.p, {
          children: "Add the following JSON to your MCP configuration:"
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
                  children: '    "agora-docs"'
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
                  children: '"https://mcp.agora.io"'
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
        })]
      }), _jsx(TabsContent, {
        value: "claude-code",
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
                  children: " agora-docs"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " https://mcp.agora.io"
                })]
              })
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "codex",
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --url"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " https://mcp.agora.io"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " agora-docs"
                })]
              })
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "gemini-cli",
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
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "gemini"
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
                  children: " agora-docs"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " https://mcp.agora.io"
                })]
              })
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "manual",
        children: _jsxs(_components.p, {
          children: ["Add ", _jsx(_components.code, {
            children: "https://mcp.agora.io"
          }), " to your MCP client and use ", _jsx(_components.code, {
            children: "http"
          }), " or ", _jsx(_components.code, {
            children: "Streamable HTTP"
          }), " transport if the client asks for a transport type."]
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "start-with-a-prompt",
      children: "Start with a prompt"
    }), `
`, _jsx(_components.p, {
      children: "Install the server in your coding tool, then ask your assistant to search Agora docs before it writes code. Include the Agora product, the target platform, and the task type in the same prompt."
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
              children: "Use"
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
              children: " MCP"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " to"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " find"
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
              children: " current"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " web"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " quickstart"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " for"
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
              children: " and"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " explain"
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
              children: " minimum"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " setup"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " for"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " a"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " browser"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " voice"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " demo."
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "make-docs-lookup-part-of-the-workflow",
      children: "Make docs lookup part of the workflow"
    }), `
`, _jsxs(_components.p, {
      children: ["If your repository includes ", _jsx(_components.code, {
        children: "AGENTS.md"
      }), " or similar instructions, tell your assistant to prefer Agora MCP for product-specific lookups. That turns docs checks into a normal part of the workflow instead of an optional extra step."]
    }), `
`, _jsx(_components.p, {
      children: "If your MCP client is not available, these fallback resources still help:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Use ", _jsx(_components.code, {
          children: "https://docs.agora.io/llms.txt"
        }), " as the lightweight documentation index. Its entries link directly to Markdown pages."]
      }), `
`, _jsxs(_components.li, {
        children: ["Append ", _jsx(_components.code, {
          children: ".md"
        }), " to a documentation URL to read that page as Markdown. For example, use ", _jsx(_components.code, {
          children: "https://docs.agora.io/en/ai/get-started/quickstart.md"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Use ", _jsx(_components.code, {
          children: "https://docs.agora.io/llms-full.txt"
        }), " only for offline indexing or bulk processing. It is too large to use as the default context for an interactive assistant."]
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
