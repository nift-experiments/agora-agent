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

## Installation [#installation]

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

    <a href="https://cursor.com/en-US/install-mcp?name=agora-docs&config=eyJ1cmwiOiJodHRwczovL21jcC5hZ29yYS5pbyJ9" style="{ display: 'inline-block', margin: '0', padding: '0' }" onClick="(e) => e.stopPropagation()">
      <img
        src="https://cursor.com/deeplink/mcp-install-dark.svg"
        alt="Install Agora MCP Server in Cursor"
        style="{
    width: '140px',
    height: 'auto',
    border: '1px solid white',
    display: 'block',
    margin: '0',
    padding: '0',
    cursor: 'pointer',
  }"
      />
    </a>

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

## Getting started [#getting-started]

Once installed, your coding assistant has access to Agora's documentation through the MCP server. The assistant will intelligently use this resource when relevant to your questions. For more targeted results, mention Agora along with your target product and platform, such as \`Cloud Recording\`, \`Web\`, and \`REST API\` in your prompts.

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
    content: "Once installed, your coding assistant has access to Agora's documentation through the MCP server. The assistant will intelligently use this resource when relevant to your questions. For more targeted results, mention Agora along with your target product and platform, such as `Cloud Recording`, `Web`, and `REST API` in your prompts."
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
    id: "agentsmd",
    content: "AGENTS.md"
  }]
};
export let toc = [{
  depth: 2,
  url: "#installation",
  title: _jsx(_Fragment, {
    children: "Installation"
  })
}, {
  depth: 2,
  url: "#getting-started",
  title: _jsx(_Fragment, {
    children: "Getting started"
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
`, _jsx(_components.h2, {
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
        }), _jsx("a", {
          href: "https://cursor.com/en-US/install-mcp?name=agora-docs&config=eyJ1cmwiOiJodHRwczovL21jcC5hZ29yYS5pbyJ9",
          style: {
            display: "inline-block",
            margin: "0",
            padding: "0"
          },
          onClick: (e) => e.stopPropagation(),
          children: _jsx("img", {
            "data-no-zoom": true,
            src: "https://cursor.com/deeplink/mcp-install-dark.svg",
            alt: "Install Agora MCP Server in Cursor",
            style: {
              width: "140px",
              height: "auto",
              border: "1px solid white",
              display: "block",
              margin: "0",
              padding: "0",
              cursor: "pointer"
            }
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
`, _jsx(_components.h2, {
      id: "getting-started",
      children: "Getting started"
    }), `
`, _jsxs(_components.p, {
      children: ["Once installed, your coding assistant has access to Agora's documentation through the MCP server. The assistant will intelligently use this resource when relevant to your questions. For more targeted results, mention Agora along with your target product and platform, such as ", _jsx(_components.code, {
        children: "Cloud Recording"
      }), ", ", _jsx(_components.code, {
        children: "Web"
      }), ", and ", _jsx(_components.code, {
        children: "REST API"
      }), " in your prompts."]
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
