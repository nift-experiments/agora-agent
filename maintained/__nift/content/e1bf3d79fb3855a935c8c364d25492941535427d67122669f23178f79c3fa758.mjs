import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Agora skills",
  description: "Use Agora skills with AI coding assistants to build with Agora faster."
};
export let _markdown = `

Agora skills is a set of structured reference files that give AI coding assistants deep knowledge of Agora's platform. When you ask your assistant to build something with Agora, it loads the relevant skill files covering products, APIs, and platform-specific code examples, so it can generate working code without guessing.

Skills includes integration with the [Agora MCP server](#agora-mcp-server), which gives your assistant access to live Agora documentation. For installation instructions and supported tools, see the [Agora Skills repository](https://github.com/AgoraIO/skills).

### Installation [#installation]

Install Agora Skills using one of the following methods:

#### Skills CLI (recommended) [#skills-cli-recommended]

Run the following command:

\`\`\`bash
npx skills add github:AgoraIO/skills
\`\`\`

Skills activate automatically when your agent detects relevant tasks, for example, "build a voice agent", "integrate Agora RTC", or "generate a token".

#### Manual installation [#manual-installation]

Clone the repository once and point your AI coding assistant to the skill files directly.

1. Clone the [Agora Skills repo](https://github.com/AgoraIO/skills.git):

   \`\`\`bash
   git clone https://github.com/AgoraIO/skills.git ~/agora-skills
   \`\`\`

2. Point your AI assistant to \`skills/agora/\`.

Follow the instructions for your AI coding assistant:

<Tabs defaultValue="claude">
  <TabsList>
    <TabsTrigger value="claude">
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

    <TabsTrigger value="other">
      Other tools
    </TabsTrigger>
  </TabsList>

  <TabsContent value="claude">
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
    Copy or symlink \`skills/agora/\` into \`.cursor/rules/\`. For more information, see [Cursor skill directories](https://cursor.com/docs/skills#skill-directories).
  </TabsContent>

  <TabsContent value="windsurf">
    Add \`skills/agora/\` to your Cascade context. For more information, see [Windsurf skills](https://docs.windsurf.com/windsurf/cascade/skills).
  </TabsContent>

  <TabsContent value="copilot">
    Reference via \`@workspace\` or add to \`.github/copilot-instructions.md\`. For more information, see [Create skills for Copilot in the CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-skills) or [Create skills for the Copilot coding agent](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-skills).
  </TabsContent>

  <TabsContent value="other">
    The skill files are plain markdown. Point your tool to \`skills/agora/\` or load individual files directly. Use \`SKILL.md\` as the entry point.
  </TabsContent>
</Tabs>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora skills is a set of structured reference files that give AI coding assistants deep knowledge of Agora's platform. When you ask your assistant to build something with Agora, it loads the relevant skill files covering products, APIs, and platform-specific code examples, so it can generate working code without guessing."
  }, {
    heading: undefined,
    content: "Skills includes integration with the Agora MCP server, which gives your assistant access to live Agora documentation. For installation instructions and supported tools, see the Agora Skills repository."
  }, {
    heading: "installation",
    content: "Install Agora Skills using one of the following methods:"
  }, {
    heading: "skills-cli-recommended",
    content: "Run the following command:"
  }, {
    heading: "skills-cli-recommended",
    content: 'Skills activate automatically when your agent detects relevant tasks, for example, "build a voice agent", "integrate Agora RTC", or "generate a token".'
  }, {
    heading: "manual-installation",
    content: "Clone the repository once and point your AI coding assistant to the skill files directly."
  }, {
    heading: "manual-installation",
    content: "Clone the Agora Skills repo:"
  }, {
    heading: "manual-installation",
    content: "Point your AI assistant to `skills/agora/`."
  }, {
    heading: "manual-installation",
    content: "Follow the instructions for your AI coding assistant:"
  }, {
    heading: "manual-installation",
    content: "Run the following commands inside Claude Code:"
  }, {
    heading: "manual-installation",
    content: "**User-level** (available across all your projects)"
  }, {
    heading: "manual-installation",
    content: "**Project-level** (shared with your team via version control)"
  }, {
    heading: "manual-installation",
    content: "Copy or symlink `skills/agora/` into `.cursor/rules/`. For more information, see Cursor skill directories."
  }, {
    heading: "manual-installation",
    content: "Add `skills/agora/` to your Cascade context. For more information, see Windsurf skills."
  }, {
    heading: "manual-installation",
    content: "Reference via `@workspace` or add to `.github/copilot-instructions.md`. For more information, see Create skills for Copilot in the CLI or Create skills for the Copilot coding agent."
  }, {
    heading: "manual-installation",
    content: "The skill files are plain markdown. Point your tool to `skills/agora/` or load individual files directly. Use `SKILL.md` as the entry point."
  }],
  headings: [{
    id: "installation",
    content: "Installation"
  }, {
    id: "skills-cli-recommended",
    content: "Skills CLI (recommended)"
  }, {
    id: "manual-installation",
    content: "Manual installation"
  }]
};
export let toc = [{
  depth: 3,
  url: "#installation",
  title: _jsx(_Fragment, {
    children: "Installation"
  })
}, {
  depth: 4,
  url: "#skills-cli-recommended",
  title: _jsx(_Fragment, {
    children: "Skills CLI (recommended)"
  })
}, {
  depth: 4,
  url: "#manual-installation",
  title: _jsx(_Fragment, {
    children: "Manual installation"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
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
      children: "Agora skills is a set of structured reference files that give AI coding assistants deep knowledge of Agora's platform. When you ask your assistant to build something with Agora, it loads the relevant skill files covering products, APIs, and platform-specific code examples, so it can generate working code without guessing."
    }), `
`, _jsxs(_components.p, {
      children: ["Skills includes integration with the ", _jsx(_components.a, {
        href: "#agora-mcp-server",
        children: "Agora MCP server"
      }), ", which gives your assistant access to live Agora documentation. For installation instructions and supported tools, see the ", _jsx(_components.a, {
        href: "https://github.com/AgoraIO/skills",
        children: "Agora Skills repository"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "installation",
      children: "Installation"
    }), `
`, _jsx(_components.p, {
      children: "Install Agora Skills using one of the following methods:"
    }), `
`, _jsx(_components.h4, {
      id: "skills-cli-recommended",
      children: "Skills CLI (recommended)"
    }), `
`, _jsx(_components.p, {
      children: "Run the following command:"
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
              children: " github:AgoraIO/skills"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: 'Skills activate automatically when your agent detects relevant tasks, for example, "build a voice agent", "integrate Agora RTC", or "generate a token".'
    }), `
`, _jsx(_components.h4, {
      id: "manual-installation",
      children: "Manual installation"
    }), `
`, _jsx(_components.p, {
      children: "Clone the repository once and point your AI coding assistant to the skill files directly."
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Clone the ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/skills.git",
            children: "Agora Skills repo"
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
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Point your AI assistant to ", _jsx(_components.code, {
            children: "skills/agora/"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Follow the instructions for your AI coding assistant:"
    }), `
`, _jsxs(Tabs, {
      defaultValue: "claude",
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "claude",
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
          value: "other",
          children: "Other tools"
        })]
      }), _jsxs(TabsContent, {
        value: "claude",
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
          }), ". For more information, see ", _jsx(_components.a, {
            href: "https://cursor.com/docs/skills#skill-directories",
            children: "Cursor skill directories"
          }), "."]
        })
      }), _jsx(TabsContent, {
        value: "windsurf",
        children: _jsxs(_components.p, {
          children: ["Add ", _jsx(_components.code, {
            children: "skills/agora/"
          }), " to your Cascade context. For more information, see ", _jsx(_components.a, {
            href: "https://docs.windsurf.com/windsurf/cascade/skills",
            children: "Windsurf skills"
          }), "."]
        })
      }), _jsx(TabsContent, {
        value: "copilot",
        children: _jsxs(_components.p, {
          children: ["Reference via ", _jsx(_components.code, {
            children: "@workspace"
          }), " or add to ", _jsx(_components.code, {
            children: ".github/copilot-instructions.md"
          }), ". For more information, see ", _jsx(_components.a, {
            href: "https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-skills",
            children: "Create skills for Copilot in the CLI"
          }), " or ", _jsx(_components.a, {
            href: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-skills",
            children: "Create skills for the Copilot coding agent"
          }), "."]
        })
      }), _jsx(TabsContent, {
        value: "other",
        children: _jsxs(_components.p, {
          children: ["The skill files are plain markdown. Point your tool to ", _jsx(_components.code, {
            children: "skills/agora/"
          }), " or load individual files directly. Use ", _jsx(_components.code, {
            children: "SKILL.md"
          }), " as the entry point."]
        })
      })]
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
