import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Start with AI",
  description: "Install the Agora CLI, add Agora Skills, then give your assistant a precise prompt so it can choose the right starter and setup path."
};
export let _markdown = `

Use this page when you want your coding assistant to help you get started without guessing. The steps are simple: install the CLI, add the Agora skill, then give the assistant a prompt with the product, platform, language, and goal.

If you also want live docs lookup while the assistant works, pair [Agora Skills](/en/introduction/agora-skills) with [Agora MCP](/en/introduction/agora-mcp). Skills handles workflow guidance, and MCP handles current documentation.

## Quick start [#quick-start]

### 1. Install CLI [#1-install-cli]

<Tabs>
  <TabsList>
    <TabsTrigger value="mac-linux">
      macOS and Linux
    </TabsTrigger>

    <TabsTrigger value="windows-powershell">
      Windows (PowerShell)
    </TabsTrigger>
  </TabsList>

  <TabsContent value="mac-linux">
    \`\`\`bash
    curl -fsSL https://dl.agora.io/cli/install.sh | sh
    agora --help
    \`\`\`
  </TabsContent>

  <TabsContent value="windows-powershell">
    \`\`\`powershell
    irm https://dl.agora.io/cli/install.ps1 | iex
    agora --help
    \`\`\`

    If your execution policy blocks inline scripts, download \`install.ps1\` and run:

    \`\`\`powershell
    powershell -ExecutionPolicy Bypass -File .\\install.ps1
    \`\`\`
  </TabsContent>
</Tabs>

After installation, confirm \`agora --help\` works in the same shell.

### 2. Add skill [#2-add-skill]

Install [Agora Skills](/en/introduction/agora-skills) so your assistant can choose the right Agora workflow, starter, and setup sequence before it edits code.

<Tabs>
  <TabsList>
    <TabsTrigger value="skills-cli">
      Skills CLI
    </TabsTrigger>

    <TabsTrigger value="manual">
      Manual installation
    </TabsTrigger>
  </TabsList>

  <TabsContent value="skills-cli">
    \`\`\`bash
    npx skills add AgoraIO/skills
    \`\`\`
  </TabsContent>

  <TabsContent value="manual">
    Clone the repository and point your coding assistant to the Agora skill files:

    \`\`\`bash
    git clone https://github.com/AgoraIO/skills.git ~/agora-skills
    \`\`\`

    Use \`skills/agora/\` as the directory entry point, or load \`SKILL.md\` directly if your tool expects a single root file.
  </TabsContent>
</Tabs>

If your tool prefers local instruction files, point it at \`skills/agora/\` or the top-level \`SKILL.md\`.

If you only want docs lookup and not workflow guidance, install [Agora MCP](/en/introduction/agora-mcp) instead. Many teams use both.

### 3. Prompt [#3-prompt]

Now tell the assistant what you want it to build and how to approach the setup. A strong prompt includes the Agora product, the target platform, the language or starter preference, and the end goal.

\`\`\`text
Use Agora Skills to help me build a web-based conversational AI demo in Python.
\`\`\`

From there, let the assistant choose the starter, run \`agora login\`, initialize the project, and explain any environment values it writes locally.

## What success looks like [#what-success-looks-like]

You are on the right path when the assistant can:

* choose an official starter instead of inventing one
* explain why that starter matches your product and platform
* use the Agora CLI for setup instead of ad hoc manual steps
* stay grounded in current Agora docs when platform details matter
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Use this page when you want your coding assistant to help you get started without guessing. The steps are simple: install the CLI, add the Agora skill, then give the assistant a prompt with the product, platform, language, and goal."
  }, {
    heading: undefined,
    content: "If you also want live docs lookup while the assistant works, pair Agora Skills with Agora MCP. Skills handles workflow guidance, and MCP handles current documentation."
  }, {
    heading: "1-install-cli",
    content: "If your execution policy blocks inline scripts, download `install.ps1` and run:"
  }, {
    heading: "1-install-cli",
    content: "After installation, confirm `agora --help` works in the same shell."
  }, {
    heading: "2-add-skill",
    content: "Install Agora Skills so your assistant can choose the right Agora workflow, starter, and setup sequence before it edits code."
  }, {
    heading: "2-add-skill",
    content: "Clone the repository and point your coding assistant to the Agora skill files:"
  }, {
    heading: "2-add-skill",
    content: "Use `skills/agora/` as the directory entry point, or load `SKILL.md` directly if your tool expects a single root file."
  }, {
    heading: "2-add-skill",
    content: "If your tool prefers local instruction files, point it at `skills/agora/` or the top-level `SKILL.md`."
  }, {
    heading: "2-add-skill",
    content: "If you only want docs lookup and not workflow guidance, install Agora MCP instead. Many teams use both."
  }, {
    heading: "3-prompt",
    content: "Now tell the assistant what you want it to build and how to approach the setup. A strong prompt includes the Agora product, the target platform, the language or starter preference, and the end goal."
  }, {
    heading: "3-prompt",
    content: "From there, let the assistant choose the starter, run `agora login`, initialize the project, and explain any environment values it writes locally."
  }, {
    heading: "what-success-looks-like",
    content: "You are on the right path when the assistant can:"
  }, {
    heading: "what-success-looks-like",
    content: "choose an official starter instead of inventing one"
  }, {
    heading: "what-success-looks-like",
    content: "explain why that starter matches your product and platform"
  }, {
    heading: "what-success-looks-like",
    content: "use the Agora CLI for setup instead of ad hoc manual steps"
  }, {
    heading: "what-success-looks-like",
    content: "stay grounded in current Agora docs when platform details matter"
  }],
  headings: [{
    id: "quick-start",
    content: "Quick start"
  }, {
    id: "1-install-cli",
    content: "1\\. Install CLI"
  }, {
    id: "2-add-skill",
    content: "2\\. Add skill"
  }, {
    id: "3-prompt",
    content: "3\\. Prompt"
  }, {
    id: "what-success-looks-like",
    content: "What success looks like"
  }]
};
export let toc = [{
  depth: 2,
  url: "#quick-start",
  title: _jsx(_Fragment, {
    children: "Quick start"
  })
}, {
  depth: 3,
  url: "#1-install-cli",
  title: _jsx(_Fragment, {
    children: "1. Install CLI"
  })
}, {
  depth: 3,
  url: "#2-add-skill",
  title: _jsx(_Fragment, {
    children: "2. Add skill"
  })
}, {
  depth: 3,
  url: "#3-prompt",
  title: _jsx(_Fragment, {
    children: "3. Prompt"
  })
}, {
  depth: 2,
  url: "#what-success-looks-like",
  title: _jsx(_Fragment, {
    children: "What success looks like"
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
      children: "Use this page when you want your coding assistant to help you get started without guessing. The steps are simple: install the CLI, add the Agora skill, then give the assistant a prompt with the product, platform, language, and goal."
    }), `
`, _jsxs(_components.p, {
      children: ["If you also want live docs lookup while the assistant works, pair ", _jsx(_components.a, {
        href: "/en/introduction/agora-skills",
        children: "Agora Skills"
      }), " with ", _jsx(_components.a, {
        href: "/en/introduction/agora-mcp",
        children: "Agora MCP"
      }), ". Skills handles workflow guidance, and MCP handles current documentation."]
    }), `
`, _jsx(_components.h2, {
      id: "quick-start",
      children: "Quick start"
    }), `
`, _jsx(_components.h3, {
      id: "1-install-cli",
      children: "1. Install CLI"
    }), `
`, _jsxs(Tabs, {
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "mac-linux",
          children: "macOS and Linux"
        }), _jsx(TabsTrigger, {
          value: "windows-powershell",
          children: "Windows (PowerShell)"
        })]
      }), _jsx(TabsContent, {
        value: "mac-linux",
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
                  children: " https://dl.agora.io/cli/install.sh"
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
        })
      }), _jsxs(TabsContent, {
        value: "windows-powershell",
        children: [_jsx(_Fragment, {
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
                  children: " https://dl.agora.io/cli/install.ps1"
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
        }), _jsxs(_components.p, {
          children: ["If your execution policy blocks inline scripts, download ", _jsx(_components.code, {
            children: "install.ps1"
          }), " and run:"]
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
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["After installation, confirm ", _jsx(_components.code, {
        children: "agora --help"
      }), " works in the same shell."]
    }), `
`, _jsx(_components.h3, {
      id: "2-add-skill",
      children: "2. Add skill"
    }), `
`, _jsxs(_components.p, {
      children: ["Install ", _jsx(_components.a, {
        href: "/en/introduction/agora-skills",
        children: "Agora Skills"
      }), " so your assistant can choose the right Agora workflow, starter, and setup sequence before it edits code."]
    }), `
`, _jsxs(Tabs, {
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "skills-cli",
          children: "Skills CLI"
        }), _jsx(TabsTrigger, {
          value: "manual",
          children: "Manual installation"
        })]
      }), _jsx(TabsContent, {
        value: "skills-cli",
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
        })
      }), _jsxs(TabsContent, {
        value: "manual",
        children: [_jsx(_components.p, {
          children: "Clone the repository and point your coding assistant to the Agora skill files:"
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
                  children: "git"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " clone"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " https://github.com/AgoraIO/skills.git"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " ~/agora-skills"
                })]
              })
            })
          })
        }), _jsxs(_components.p, {
          children: ["Use ", _jsx(_components.code, {
            children: "skills/agora/"
          }), " as the directory entry point, or load ", _jsx(_components.code, {
            children: "SKILL.md"
          }), " directly if your tool expects a single root file."]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If your tool prefers local instruction files, point it at ", _jsx(_components.code, {
        children: "skills/agora/"
      }), " or the top-level ", _jsx(_components.code, {
        children: "SKILL.md"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["If you only want docs lookup and not workflow guidance, install ", _jsx(_components.a, {
        href: "/en/introduction/agora-mcp",
        children: "Agora MCP"
      }), " instead. Many teams use both."]
    }), `
`, _jsx(_components.h3, {
      id: "3-prompt",
      children: "3. Prompt"
    }), `
`, _jsx(_components.p, {
      children: "Now tell the assistant what you want it to build and how to approach the setup. A strong prompt includes the Agora product, the target platform, the language or starter preference, and the end goal."
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
              children: " Skills"
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
              children: " help"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " me"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " build"
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
              children: " web-based"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " conversational"
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
              children: " demo"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " in"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Python."
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["From there, let the assistant choose the starter, run ", _jsx(_components.code, {
        children: "agora login"
      }), ", initialize the project, and explain any environment values it writes locally."]
    }), `
`, _jsx(_components.h2, {
      id: "what-success-looks-like",
      children: "What success looks like"
    }), `
`, _jsx(_components.p, {
      children: "You are on the right path when the assistant can:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "choose an official starter instead of inventing one"
      }), `
`, _jsx(_components.li, {
        children: "explain why that starter matches your product and platform"
      }), `
`, _jsx(_components.li, {
        children: "use the Agora CLI for setup instead of ad hoc manual steps"
      }), `
`, _jsx(_components.li, {
        children: "stay grounded in current Agora docs when platform details matter"
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
