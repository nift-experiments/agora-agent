import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Agora Skills",
  description: "Install Agora Skills so your AI coding assistant can follow product-aware workflows, choose the right starter, and use official Agora patterns."
};
export let _markdown = `

Install Agora Skills when you want your assistant to choose the right Agora workflow before it starts coding. Skills helps you pick the right product path, starter, and setup sequence, so your assistant can follow official Agora patterns instead of guessing.

Use Skills when docs lookup alone is not enough and the harder part is deciding what to build first or which official path to follow. If you also want fresh documentation while your assistant works, pair Skills with [Agora MCP](/en/introduction/agora-mcp).

## Install Agora Skills [#install-agora-skills]

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

    Skills activate automatically when the agent detects a relevant Agora task.
  </TabsContent>

  <TabsContent value="manual">
    Clone the repository and point your coding assistant to the Agora skill files:

    \`\`\`bash
    git clone https://github.com/AgoraIO/skills.git ~/agora-skills
    \`\`\`

    Use \`skills/agora/\` as the directory entry point, or load \`SKILL.md\` directly if your tool expects a single root file.
  </TabsContent>
</Tabs>

If you install Skills manually, place the files where your assistant already looks for local instructions:

<Tabs>
  <TabsList>
    <TabsTrigger value="claude-code">
      Claude Code
    </TabsTrigger>

    <TabsTrigger value="cursor">
      Cursor
    </TabsTrigger>

    <TabsTrigger value="windsurf">
      Windsurf
    </TabsTrigger>

    <TabsTrigger value="copilot">
      GitHub Copilot
    </TabsTrigger>

    <TabsTrigger value="other-tools">
      Other tools
    </TabsTrigger>
  </TabsList>

  <TabsContent value="claude-code">
    Run the following commands inside Claude Code:

    * **User-level** (available across all your projects)

      \`\`\`bash
      /plugin marketplace add AgoraIO/skills
      /plugin install agora
      \`\`\`

    * **Project-level** (shared with your team via version control)

      \`\`\`bash
      /plugin marketplace add AgoraIO/skills
      /plugin install agora --scope project
      \`\`\`
  </TabsContent>

  <TabsContent value="cursor">
    Copy or symlink \`skills/agora/\` into \`.cursor/rules/\`.
  </TabsContent>

  <TabsContent value="windsurf">
    Add \`skills/agora/\` to Cascade context.
  </TabsContent>

  <TabsContent value="copilot">
    Reference the files with \`@workspace\` or add them to Copilot instructions.
  </TabsContent>

  <TabsContent value="other-tools">
    Point the tool at \`skills/agora/\` or the top-level \`SKILL.md\`.
  </TabsContent>
</Tabs>

## Start with a prompt [#start-with-a-prompt]

Install Skills, then ask your assistant to choose the correct Agora path before it starts scaffolding or editing code.

\`\`\`text
Use Agora Skills and Agora MCP to help me build a web-based conversational AI demo.
Check the official docs first, choose the right starter, and use the Agora CLI for setup.
\`\`\`

From there, let your assistant choose the starter and setup path before it edits code.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Install Agora Skills when you want your assistant to choose the right Agora workflow before it starts coding. Skills helps you pick the right product path, starter, and setup sequence, so your assistant can follow official Agora patterns instead of guessing."
  }, {
    heading: undefined,
    content: "Use Skills when docs lookup alone is not enough and the harder part is deciding what to build first or which official path to follow. If you also want fresh documentation while your assistant works, pair Skills with Agora MCP."
  }, {
    heading: "install-agora-skills",
    content: "Skills activate automatically when the agent detects a relevant Agora task."
  }, {
    heading: "install-agora-skills",
    content: "Clone the repository and point your coding assistant to the Agora skill files:"
  }, {
    heading: "install-agora-skills",
    content: "Use `skills/agora/` as the directory entry point, or load `SKILL.md` directly if your tool expects a single root file."
  }, {
    heading: "install-agora-skills",
    content: "If you install Skills manually, place the files where your assistant already looks for local instructions:"
  }, {
    heading: "install-agora-skills",
    content: "Run the following commands inside Claude Code:"
  }, {
    heading: "install-agora-skills",
    content: "**User-level** (available across all your projects)"
  }, {
    heading: "install-agora-skills",
    content: "**Project-level** (shared with your team via version control)"
  }, {
    heading: "install-agora-skills",
    content: "Copy or symlink `skills/agora/` into `.cursor/rules/`."
  }, {
    heading: "install-agora-skills",
    content: "Add `skills/agora/` to Cascade context."
  }, {
    heading: "install-agora-skills",
    content: "Reference the files with `@workspace` or add them to Copilot instructions."
  }, {
    heading: "install-agora-skills",
    content: "Point the tool at `skills/agora/` or the top-level `SKILL.md`."
  }, {
    heading: "start-with-a-prompt",
    content: "Install Skills, then ask your assistant to choose the correct Agora path before it starts scaffolding or editing code."
  }, {
    heading: "start-with-a-prompt",
    content: "From there, let your assistant choose the starter and setup path before it edits code."
  }],
  headings: [{
    id: "install-agora-skills",
    content: "Install Agora Skills"
  }, {
    id: "start-with-a-prompt",
    content: "Start with a prompt"
  }]
};
export let toc = [{
  depth: 2,
  url: "#install-agora-skills",
  title: _jsx(_Fragment, {
    children: "Install Agora Skills"
  })
}, {
  depth: 2,
  url: "#start-with-a-prompt",
  title: _jsx(_Fragment, {
    children: "Start with a prompt"
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
      children: "Install Agora Skills when you want your assistant to choose the right Agora workflow before it starts coding. Skills helps you pick the right product path, starter, and setup sequence, so your assistant can follow official Agora patterns instead of guessing."
    }), `
`, _jsxs(_components.p, {
      children: ["Use Skills when docs lookup alone is not enough and the harder part is deciding what to build first or which official path to follow. If you also want fresh documentation while your assistant works, pair Skills with ", _jsx(_components.a, {
        href: "/en/introduction/agora-mcp",
        children: "Agora MCP"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "install-agora-skills",
      children: "Install Agora Skills"
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
      }), _jsxs(TabsContent, {
        value: "skills-cli",
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
        }), _jsx(_components.p, {
          children: "Skills activate automatically when the agent detects a relevant Agora task."
        })]
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
`, _jsx(_components.p, {
      children: "If you install Skills manually, place the files where your assistant already looks for local instructions:"
    }), `
`, _jsxs(Tabs, {
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "claude-code",
          children: "Claude Code"
        }), _jsx(TabsTrigger, {
          value: "cursor",
          children: "Cursor"
        }), _jsx(TabsTrigger, {
          value: "windsurf",
          children: "Windsurf"
        }), _jsx(TabsTrigger, {
          value: "copilot",
          children: "GitHub Copilot"
        }), _jsx(TabsTrigger, {
          value: "other-tools",
          children: "Other tools"
        })]
      }), _jsxs(TabsContent, {
        value: "claude-code",
        children: [_jsx(_components.p, {
          children: "Run the following commands inside Claude Code:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "User-level"
              }), " (available across all your projects)"]
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
                      children: "/plugin"
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
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "/plugin"
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
                      children: " agora"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Project-level"
              }), " (shared with your team via version control)"]
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
                      children: "/plugin"
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
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "/plugin"
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
                      children: " agora"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " --scope"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " project"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        })]
      }), _jsx(TabsContent, {
        value: "cursor",
        children: _jsxs(_components.p, {
          children: ["Copy or symlink ", _jsx(_components.code, {
            children: "skills/agora/"
          }), " into ", _jsx(_components.code, {
            children: ".cursor/rules/"
          }), "."]
        })
      }), _jsx(TabsContent, {
        value: "windsurf",
        children: _jsxs(_components.p, {
          children: ["Add ", _jsx(_components.code, {
            children: "skills/agora/"
          }), " to Cascade context."]
        })
      }), _jsx(TabsContent, {
        value: "copilot",
        children: _jsxs(_components.p, {
          children: ["Reference the files with ", _jsx(_components.code, {
            children: "@workspace"
          }), " or add them to Copilot instructions."]
        })
      }), _jsx(TabsContent, {
        value: "other-tools",
        children: _jsxs(_components.p, {
          children: ["Point the tool at ", _jsx(_components.code, {
            children: "skills/agora/"
          }), " or the top-level ", _jsx(_components.code, {
            children: "SKILL.md"
          }), "."]
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "start-with-a-prompt",
      children: "Start with a prompt"
    }), `
`, _jsx(_components.p, {
      children: "Install Skills, then ask your assistant to choose the correct Agora path before it starts scaffolding or editing code."
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
              children: " and"
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
              children: " demo."
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Check"
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
              children: " official"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " docs"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " first,"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " choose"
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
              children: " right"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " starter,"
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
              children: " use"
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
              children: " CLI"
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
              children: " setup."
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "From there, let your assistant choose the starter and setup path before it edits code."
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
