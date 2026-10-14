import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Agora MCP",
  description: "Use Agora MCP with AI coding assistants to build with Agora faster."
};
export let _markdown = `

The Agora MCP server gives your AI assistant direct access to Agora's documentation, so it can look up APIs, SDK methods, and platform-specific details in real time.
The Agora MCP server is included when you install Agora Skills. If you prefer to install only the MCP server, it is available at:

\`\`\`text
https://mcp.agora.io
\`\`\`

### Installation [#installation]

Refer to the installation instructions for your coding assistant.

<Tabs defaultValue="cursor">
  <TabsList>
    <TabsTrigger value="cursor">
      Cursor
    </TabsTrigger>

    <TabsTrigger value="claude">
      Claude
    </TabsTrigger>

    <TabsTrigger value="codex">
      Codex
    </TabsTrigger>

    <TabsTrigger value="gemini">
      Gemini CLI
    </TabsTrigger>

    <TabsTrigger value="manual">
      Manual installation
    </TabsTrigger>
  </TabsList>

  <TabsContent value="cursor">
    Click the button below to install the MCP server in [Cursor](https://www.cursor.com/)

    [Install Agora MCP Server in Cursor](https://cursor.com/en-US/install-mcp?name=agora-docs\\&config=eyJ1cmwiOiJodHRwczovL21jcC5hZ29yYS5pbyJ9)

    or add it manually with the following JSON:

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

  <TabsContent value="claude">
    * **Claude Code**

      Run the following command in your terminal to install the MCP server in [Claude Code](https://claude.com/product/claude-code):

      \`\`\`bash
      claude mcp add --transport http agora-docs https://mcp.agora.io
      \`\`\`

    * **Claude Desktop**

      In **Settings**, select **Connectors** and then choose **Add custom connector**. Enter the following values and click **Add**:

      * **Name**: \`agora-docs\`
      * **Remote MCP server URL**: \`https://mcp.agora.io\`
  </TabsContent>

  <TabsContent value="codex">
    Run the following command in your terminal to install the server in [OpenAI Codex](https://openai.com/codex/):

    \`\`\`bash
    codex mcp add --url https://mcp.agora.io agora-docs
    \`\`\`
  </TabsContent>

  <TabsContent value="gemini">
    Run the following command in your terminal to install the server in [Gemini CLI](https://github.com/google-gemini/gemini-cli):

    \`\`\`bash
    gemini mcp add --transport http agora-docs https://mcp.agora.io
    \`\`\`
  </TabsContent>

  <TabsContent value="manual">
    Add the server URL \`https://mcp.agora.io\` to your MCP client of choice. If prompted, set the transport to \`http\` or "Streamable HTTP".
  </TabsContent>
</Tabs>

### Getting started [#getting-started]

Once installed, your coding assistant has access to Agora's documentation through the MCP server. The assistant will intelligently use this resource when relevant to your questions. For more targeted results, mention Agora along with your target product and platform, such as 'iOS', 'Web', 'Conversational AI', 'Video Calling' in your prompts.

### System prompt [#system-prompt]

This MCP works with all LLMs that support MCP, but performs best when the assistant understands facet-based exploration. Add the following prompt to your LLMs custom instructions:

<details>
  <summary>
    System prompt for LLMs
  </summary>

  \`\`\`markdown
  # Agora MCP Markdown - System Prompt

  You have access to Agora's documentation search via three tools:
  - \`algolia_search_index_docs_platform_aware_markdown\` - Full-text search with facets
  - \`algolia_search_for_facet_values\` - Browse products/platforms
  - \`algolia_recommendations\` - Find related documentation

  ## Key Behaviors

  **1. Use facets for discovery**
  - When users ask about "what's available", explore facets first
  - Example: User asks "what video products exist?"
    → Use \`algolia_search_for_facet_values(facetName: "product", facetQuery: "video")\`
    → Shows video-calling is the main product

  **2. Platform-aware searching**
  - Include target platform in search queries (iOS, Android, Web, etc.)
  - Results are intelligently ranked by platform relevance

  **3. Interpret facet results for refinement**
  - Search results include facet breakdowns by product and platform
  - Use these to suggest filtering: "15 results are for video-calling, 8 for voice-calling"

  **4. Maintain session continuity**
  - Use same sessionId (UUID) across related searches in a conversation
  - Improves ranking for follow-up queries

  ## Available Products & Platforms

  **Key Products:** conversational-ai, video-calling, broadcast-streaming, interactive-live-streaming, agora-chat, voice-calling, signaling, extensions-marketplace, interactive-whiteboard

  **Key Platforms:** android, web, ios, windows, macos, unity, flutter, react-native, electron, unreal

  ## Workflow Example

  User: "I'm building an iOS app with Video Calling. Where do I start?"

  1. Search: "iOS video calling quickstart"
  2. Results show facets indicating video-calling is the best match
  3. Suggest: "Most results are for Video Calling, here's the quickstart"
  4. Follow-up searches: Keep same sessionId for context
  \`\`\`
</details>

#### What This Enables [#what-this-enables]

* Intelligent facet exploration before deep searches
* Platform-aware result refinement suggestions
* Cross-search session continuity for better context

Without the prompt, searches still work but won't leverage faceted browsing patterns.

## AGENTS.md [#agentsmd]

To get the most out of Agora Skills and the MCP server, Agora recommends that you include an [AGENTS.md](https://agents.md) or similar file in your repository. This file ensures that your agent always consults Agora docs to produce reliable, working code.

Add the following instructions to your own \`AGENTS.md\` file:

\`\`\`markdown
## Agora Documentation

Agora documentation is updated frequently. You should always refer to the latest documentation when working with Agora products. Agora offers an MCP server that you can use to browse and search its documentation. If the developer has not yet installed this server, recommend that they install it at https://mcp.agora.io.

If the Agora Skills files are available in your context, use them for platform-specific API guidance and code examples.
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: `The Agora MCP server gives your AI assistant direct access to Agora's documentation, so it can look up APIs, SDK methods, and platform-specific details in real time.
The Agora MCP server is included when you install Agora Skills. If you prefer to install only the MCP server, it is available at:`
  }, {
    heading: "installation",
    content: "Refer to the installation instructions for your coding assistant."
  }, {
    heading: "installation",
    content: "Click the button below to install the MCP server in Cursor"
  }, {
    heading: "installation",
    content: "Install Agora MCP Server in Cursor"
  }, {
    heading: "installation",
    content: "or add it manually with the following JSON:"
  }, {
    heading: "installation",
    content: "**Claude Code**"
  }, {
    heading: "installation",
    content: "Run the following command in your terminal to install the MCP server in Claude Code:"
  }, {
    heading: "installation",
    content: "**Claude Desktop**"
  }, {
    heading: "installation",
    content: "In **Settings**, select **Connectors** and then choose **Add custom connector**. Enter the following values and click **Add**:"
  }, {
    heading: "installation",
    content: "**Name**: `agora-docs`"
  }, {
    heading: "installation",
    content: "**Remote MCP server URL**: `https://mcp.agora.io`"
  }, {
    heading: "installation",
    content: "Run the following command in your terminal to install the server in OpenAI Codex:"
  }, {
    heading: "installation",
    content: "Run the following command in your terminal to install the server in Gemini CLI:"
  }, {
    heading: "installation",
    content: 'Add the server URL `https://mcp.agora.io` to your MCP client of choice. If prompted, set the transport to `http` or "Streamable HTTP".'
  }, {
    heading: "getting-started",
    content: "Once installed, your coding assistant has access to Agora's documentation through the MCP server. The assistant will intelligently use this resource when relevant to your questions. For more targeted results, mention Agora along with your target product and platform, such as 'iOS', 'Web', 'Conversational AI', 'Video Calling' in your prompts."
  }, {
    heading: "system-prompt",
    content: "This MCP works with all LLMs that support MCP, but performs best when the assistant understands facet-based exploration. Add the following prompt to your LLMs custom instructions:"
  }, {
    heading: "what-this-enables",
    content: "Intelligent facet exploration before deep searches"
  }, {
    heading: "what-this-enables",
    content: "Platform-aware result refinement suggestions"
  }, {
    heading: "what-this-enables",
    content: "Cross-search session continuity for better context"
  }, {
    heading: "what-this-enables",
    content: "Without the prompt, searches still work but won't leverage faceted browsing patterns."
  }, {
    heading: "agentsmd",
    content: "To get the most out of Agora Skills and the MCP server, Agora recommends that you include an AGENTS.md or similar file in your repository. This file ensures that your agent always consults Agora docs to produce reliable, working code."
  }, {
    heading: "agentsmd",
    content: "Add the following instructions to your own `AGENTS.md` file:"
  }],
  headings: [{
    id: "installation",
    content: "Installation"
  }, {
    id: "getting-started",
    content: "Getting started"
  }, {
    id: "system-prompt",
    content: "System prompt"
  }, {
    id: "what-this-enables",
    content: "What This Enables"
  }, {
    id: "agentsmd",
    content: "AGENTS.md"
  }]
};
export let toc = [{
  depth: 3,
  url: "#installation",
  title: _jsx(_Fragment, {
    children: "Installation"
  })
}, {
  depth: 3,
  url: "#getting-started",
  title: _jsx(_Fragment, {
    children: "Getting started"
  })
}, {
  depth: 3,
  url: "#system-prompt",
  title: _jsx(_Fragment, {
    children: "System prompt"
  })
}, {
  depth: 4,
  url: "#what-this-enables",
  title: _jsx(_Fragment, {
    children: "What This Enables"
  })
}, {
  depth: 2,
  url: "#agentsmd",
  title: _jsx(_Fragment, {
    children: "AGENTS.md"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
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
      children: `The Agora MCP server gives your AI assistant direct access to Agora's documentation, so it can look up APIs, SDK methods, and platform-specific details in real time.
The Agora MCP server is included when you install Agora Skills. If you prefer to install only the MCP server, it is available at:`
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
`, _jsx(_components.h3, {
      id: "installation",
      children: "Installation"
    }), `
`, _jsx(_components.p, {
      children: "Refer to the installation instructions for your coding assistant."
    }), `
`, _jsxs(Tabs, {
      defaultValue: "cursor",
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "cursor",
          children: "Cursor"
        }), _jsx(TabsTrigger, {
          value: "claude",
          children: "Claude"
        }), _jsx(TabsTrigger, {
          value: "codex",
          children: "Codex"
        }), _jsx(TabsTrigger, {
          value: "gemini",
          children: "Gemini CLI"
        }), _jsx(TabsTrigger, {
          value: "manual",
          children: "Manual installation"
        })]
      }), _jsxs(TabsContent, {
        value: "cursor",
        children: [_jsxs(_components.p, {
          children: ["Click the button below to install the MCP server in ", _jsx(_components.a, {
            href: "https://www.cursor.com/",
            children: "Cursor"
          })]
        }), _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://cursor.com/en-US/install-mcp?name=agora-docs&config=eyJ1cmwiOiJodHRwczovL21jcC5hZ29yYS5pbyJ9",
            children: "Install Agora MCP Server in Cursor"
          })
        }), _jsx(_components.p, {
          children: "or add it manually with the following JSON:"
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
        value: "claude",
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Claude Code"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Run the following command in your terminal to install the MCP server in ", _jsx(_components.a, {
                href: "https://claude.com/product/claude-code",
                children: "Claude Code"
              }), ":"]
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
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Claude Desktop"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["In ", _jsx(_components.strong, {
                children: "Settings"
              }), ", select ", _jsx(_components.strong, {
                children: "Connectors"
              }), " and then choose ", _jsx(_components.strong, {
                children: "Add custom connector"
              }), ". Enter the following values and click ", _jsx(_components.strong, {
                children: "Add"
              }), ":"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Name"
                }), ": ", _jsx(_components.code, {
                  children: "agora-docs"
                })]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Remote MCP server URL"
                }), ": ", _jsx(_components.code, {
                  children: "https://mcp.agora.io"
                })]
              }), `
`]
            }), `
`]
          }), `
`]
        })
      }), _jsxs(TabsContent, {
        value: "codex",
        children: [_jsxs(_components.p, {
          children: ["Run the following command in your terminal to install the server in ", _jsx(_components.a, {
            href: "https://openai.com/codex/",
            children: "OpenAI Codex"
          }), ":"]
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
        })]
      }), _jsxs(TabsContent, {
        value: "gemini",
        children: [_jsxs(_components.p, {
          children: ["Run the following command in your terminal to install the server in ", _jsx(_components.a, {
            href: "https://github.com/google-gemini/gemini-cli",
            children: "Gemini CLI"
          }), ":"]
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
        })]
      }), _jsx(TabsContent, {
        value: "manual",
        children: _jsxs(_components.p, {
          children: ["Add the server URL ", _jsx(_components.code, {
            children: "https://mcp.agora.io"
          }), " to your MCP client of choice. If prompted, set the transport to ", _jsx(_components.code, {
            children: "http"
          }), ' or "Streamable HTTP".']
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "getting-started",
      children: "Getting started"
    }), `
`, _jsx(_components.p, {
      children: "Once installed, your coding assistant has access to Agora's documentation through the MCP server. The assistant will intelligently use this resource when relevant to your questions. For more targeted results, mention Agora along with your target product and platform, such as 'iOS', 'Web', 'Conversational AI', 'Video Calling' in your prompts."
    }), `
`, _jsx(_components.h3, {
      id: "system-prompt",
      children: "System prompt"
    }), `
`, _jsx(_components.p, {
      children: "This MCP works with all LLMs that support MCP, but performs best when the assistant understands facet-based exploration. Add the following prompt to your LLMs custom instructions:"
    }), `
`, _jsxs("details", {
      children: [_jsx("summary", {
        children: "System prompt for LLMs"
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
                  "--shiki-light": "#005CC5",
                  "--shiki-light-font-weight": "bold",
                  "--shiki-dark": "#79B8FF",
                  "--shiki-dark-font-weight": "bold"
                },
                children: "# Agora MCP Markdown - System Prompt"
              })
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
                children: "You have access to Agora's documentation search via three tools:"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " `algolia_search_index_docs_platform_aware_markdown`"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " - Full-text search with facets"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " `algolia_search_for_facet_values`"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " - Browse products/platforms"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " `algolia_recommendations`"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " - Find related documentation"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-light-font-weight": "bold",
                  "--shiki-dark": "#79B8FF",
                  "--shiki-dark-font-weight": "bold"
                },
                children: "## Key Behaviors"
              })
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-light-font-weight": "bold",
                  "--shiki-dark": "#E1E4E8",
                  "--shiki-dark-font-weight": "bold"
                },
                children: "**1. Use facets for discovery**"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ` When users ask about "what's available", explore facets first`
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ' Example: User asks "what video products exist?"'
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  → Use "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: '`algolia_search_for_facet_values(facetName: "product", facetQuery: "video")`'
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  → Shows video-calling is the main product"
              })
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-light-font-weight": "bold",
                  "--shiki-dark": "#E1E4E8",
                  "--shiki-dark-font-weight": "bold"
                },
                children: "**2. Platform-aware searching**"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " Include target platform in search queries (iOS, Android, Web, etc.)"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " Results are intelligently ranked by platform relevance"
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
                  "--shiki-light-font-weight": "bold",
                  "--shiki-dark": "#E1E4E8",
                  "--shiki-dark-font-weight": "bold"
                },
                children: "**3. Interpret facet results for refinement**"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " Search results include facet breakdowns by product and platform"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ' Use these to suggest filtering: "15 results are for video-calling, 8 for voice-calling"'
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
                  "--shiki-light-font-weight": "bold",
                  "--shiki-dark": "#E1E4E8",
                  "--shiki-dark-font-weight": "bold"
                },
                children: "**4. Maintain session continuity**"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " Use same sessionId (UUID) across related searches in a conversation"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " Improves ranking for follow-up queries"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-light-font-weight": "bold",
                  "--shiki-dark": "#79B8FF",
                  "--shiki-dark-font-weight": "bold"
                },
                children: "## Available Products & Platforms"
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
                  "--shiki-light-font-weight": "bold",
                  "--shiki-dark": "#E1E4E8",
                  "--shiki-dark-font-weight": "bold"
                },
                children: "**Key Products:**"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " conversational-ai, video-calling, broadcast-streaming, interactive-live-streaming, agora-chat, voice-calling, signaling, extensions-marketplace, interactive-whiteboard"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-light-font-weight": "bold",
                  "--shiki-dark": "#E1E4E8",
                  "--shiki-dark-font-weight": "bold"
                },
                children: "**Key Platforms:**"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " android, web, ios, windows, macos, unity, flutter, react-native, electron, unreal"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-light-font-weight": "bold",
                  "--shiki-dark": "#79B8FF",
                  "--shiki-dark-font-weight": "bold"
                },
                children: "## Workflow Example"
              })
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
                children: `User: "I'm building an iOS app with Video Calling. Where do I start?"`
              })
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "1."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ' Search: "iOS video calling quickstart"'
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "2."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " Results show facets indicating video-calling is the best match"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "3."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ` Suggest: "Most results are for Video Calling, here's the quickstart"`
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "4."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " Follow-up searches: Keep same sessionId for context"
              })]
            })]
          })
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "what-this-enables",
      children: "What This Enables"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Intelligent facet exploration before deep searches"
      }), `
`, _jsx(_components.li, {
        children: "Platform-aware result refinement suggestions"
      }), `
`, _jsx(_components.li, {
        children: "Cross-search session continuity for better context"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Without the prompt, searches still work but won't leverage faceted browsing patterns."
    }), `
`, _jsx(_components.h2, {
      id: "agentsmd",
      children: "AGENTS.md"
    }), `
`, _jsxs(_components.p, {
      children: ["To get the most out of Agora Skills and the MCP server, Agora recommends that you include an ", _jsx(_components.a, {
        href: "https://agents.md",
        children: "AGENTS.md"
      }), " or similar file in your repository. This file ensures that your agent always consults Agora docs to produce reliable, working code."]
    }), `
`, _jsxs(_components.p, {
      children: ["Add the following instructions to your own ", _jsx(_components.code, {
        children: "AGENTS.md"
      }), " file:"]
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
                "--shiki-light": "#005CC5",
                "--shiki-light-font-weight": "bold",
                "--shiki-dark": "#79B8FF",
                "--shiki-dark-font-weight": "bold"
              },
              children: "## Agora Documentation"
            })
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
              children: "Agora documentation is updated frequently. You should always refer to the latest documentation when working with Agora products. Agora offers an MCP server that you can use to browse and search its documentation. If the developer has not yet installed this server, recommend that they install it at https://mcp.agora.io."
            })
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
              children: "If the Agora Skills files are available in your context, use them for platform-specific API guidance and code examples."
            })
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
