import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Agora skills",
  description: "Use Agora skills with AI coding assistants to build with Agora faster."
};
export let _markdown = `

Agora skills are a set of structured reference files that give AI coding assistants deep knowledge of Agora's platform. When you ask your assistant to build something with Agora, it loads the relevant skill files covering products, APIs, and platform-specific code examples, so it can generate working code without guessing.

Skills include the [Agora MCP server](./mcp.mdx), which gives your assistant access to live Agora documentation. For installation instructions and supported tools, see the [Agora Skills repository](https://github.com/AgoraIO/skills).

## Installation [#installation]

\`\`\`bash
npx skills add github:AgoraIO/skills
\`\`\`

Skills activate automatically when your agent detects relevant tasks, for example, "build a voice agent", "integrate Agora RTC", or "generate a token".

## Manual installation [#manual-installation]

Clone the repository once and point your AI coding assistant to the skill files directly.

1. Clone the [Agora Skills repo](https://github.com/AgoraIO/skills.git):

   \`\`\`bash
   git clone https://github.com/AgoraIO/skills.git ~/agora-skills
   \`\`\`

2. Point your AI assistant to \`skills/agora/\`.

Follow the instructions for your AI coding assistant:

### Claude Code [#claude-code]

Run the following commands inside Claude Code:

* User-level, available across all your projects:

  \`\`\`bash
  /plugin marketplace add AgoraIO/skills
  /plugin install agora
  \`\`\`

* Project-level, shared with your team via version control:

  \`\`\`bash
  /plugin marketplace add AgoraIO/skills
  /plugin install agora --scope project
  \`\`\`

### Cursor [#cursor]

Copy or symlink \`skills/agora/\` into \`.cursor/rules/\`. For more information, see [Cursor skill directories](https://cursor.com/docs/skills#skill-directories).

### Windsurf [#windsurf]

Add \`skills/agora/\` to your Cascade context. For more information, see [Windsurf skills](https://docs.windsurf.com/windsurf/cascade/skills).

### GitHub Copilot [#github-copilot]

Reference via \`@workspace\` or add to \`.github/copilot-instructions.md\`. For more information, see [Create skills for Copilot in the CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-skills) or [Create skills for the Copilot coding agent](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-skills).

### Other tools [#other-tools]

The skill files are plain Markdown. Point your tool to \`skills/agora/\` or load individual files directly. Use \`SKILL.md\` as the entry point.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora skills are a set of structured reference files that give AI coding assistants deep knowledge of Agora's platform. When you ask your assistant to build something with Agora, it loads the relevant skill files covering products, APIs, and platform-specific code examples, so it can generate working code without guessing."
  }, {
    heading: undefined,
    content: "Skills include the Agora MCP server, which gives your assistant access to live Agora documentation. For installation instructions and supported tools, see the Agora Skills repository."
  }, {
    heading: "installation",
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
    heading: "claude-code",
    content: "Run the following commands inside Claude Code:"
  }, {
    heading: "claude-code",
    content: "User-level, available across all your projects:"
  }, {
    heading: "claude-code",
    content: "Project-level, shared with your team via version control:"
  }, {
    heading: "cursor",
    content: "Copy or symlink `skills/agora/` into `.cursor/rules/`. For more information, see Cursor skill directories."
  }, {
    heading: "windsurf",
    content: "Add `skills/agora/` to your Cascade context. For more information, see Windsurf skills."
  }, {
    heading: "github-copilot",
    content: "Reference via `@workspace` or add to `.github/copilot-instructions.md`. For more information, see Create skills for Copilot in the CLI or Create skills for the Copilot coding agent."
  }, {
    heading: "other-tools",
    content: "The skill files are plain Markdown. Point your tool to `skills/agora/` or load individual files directly. Use `SKILL.md` as the entry point."
  }],
  headings: [{
    id: "installation",
    content: "Installation"
  }, {
    id: "manual-installation",
    content: "Manual installation"
  }, {
    id: "claude-code",
    content: "Claude Code"
  }, {
    id: "cursor",
    content: "Cursor"
  }, {
    id: "windsurf",
    content: "Windsurf"
  }, {
    id: "github-copilot",
    content: "GitHub Copilot"
  }, {
    id: "other-tools",
    content: "Other tools"
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
  url: "#manual-installation",
  title: _jsx(_Fragment, {
    children: "Manual installation"
  })
}, {
  depth: 3,
  url: "#claude-code",
  title: _jsx(_Fragment, {
    children: "Claude Code"
  })
}, {
  depth: 3,
  url: "#cursor",
  title: _jsx(_Fragment, {
    children: "Cursor"
  })
}, {
  depth: 3,
  url: "#windsurf",
  title: _jsx(_Fragment, {
    children: "Windsurf"
  })
}, {
  depth: 3,
  url: "#github-copilot",
  title: _jsx(_Fragment, {
    children: "GitHub Copilot"
  })
}, {
  depth: 3,
  url: "#other-tools",
  title: _jsx(_Fragment, {
    children: "Other tools"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora skills are a set of structured reference files that give AI coding assistants deep knowledge of Agora's platform. When you ask your assistant to build something with Agora, it loads the relevant skill files covering products, APIs, and platform-specific code examples, so it can generate working code without guessing."
    }), `
`, _jsxs(_components.p, {
      children: ["Skills include the ", _jsx(_components.a, {
        href: "./mcp.mdx",
        children: "Agora MCP server"
      }), ", which gives your assistant access to live Agora documentation. For installation instructions and supported tools, see the ", _jsx(_components.a, {
        href: "https://github.com/AgoraIO/skills",
        children: "Agora Skills repository"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "installation",
      children: "Installation"
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
`, _jsx(_components.h2, {
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
`, _jsx(_components.h3, {
      id: "claude-code",
      children: "Claude Code"
    }), `
`, _jsx(_components.p, {
      children: "Run the following commands inside Claude Code:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "User-level, available across all your projects:"
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
`, _jsx(_components.p, {
          children: "Project-level, shared with your team via version control:"
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
    }), `
`, _jsx(_components.h3, {
      id: "cursor",
      children: "Cursor"
    }), `
`, _jsxs(_components.p, {
      children: ["Copy or symlink ", _jsx(_components.code, {
        children: "skills/agora/"
      }), " into ", _jsx(_components.code, {
        children: ".cursor/rules/"
      }), ". For more information, see ", _jsx(_components.a, {
        href: "https://cursor.com/docs/skills#skill-directories",
        children: "Cursor skill directories"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "windsurf",
      children: "Windsurf"
    }), `
`, _jsxs(_components.p, {
      children: ["Add ", _jsx(_components.code, {
        children: "skills/agora/"
      }), " to your Cascade context. For more information, see ", _jsx(_components.a, {
        href: "https://docs.windsurf.com/windsurf/cascade/skills",
        children: "Windsurf skills"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "github-copilot",
      children: "GitHub Copilot"
    }), `
`, _jsxs(_components.p, {
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
    }), `
`, _jsx(_components.h3, {
      id: "other-tools",
      children: "Other tools"
    }), `
`, _jsxs(_components.p, {
      children: ["The skill files are plain Markdown. Point your tool to ", _jsx(_components.code, {
        children: "skills/agora/"
      }), " or load individual files directly. Use ", _jsx(_components.code, {
        children: "SKILL.md"
      }), " as the entry point."]
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
