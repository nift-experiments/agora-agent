import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Integrate with Skills",
  description: "Use an AI coding agent to integrate Agora products more efficiently. By configuring Agora skills, your coding agent can follow product-specific task routing, integration workflows, and code generation rules, while also using the latest official documentation to provide more accurate support during requirements analysis, product integration, code generation, and troubleshooting."
};
export let _markdown = `

## Install Agora skills [#install-agora-skills]

Choose one of the following ways to install the skills:

#### Skills CLI [#skills-cli]

Install with the \`CLI\`:

\`\`\`bash
npx skills add AgoraIO/skills
\`\`\`

This is the most direct installation method. After the installation finishes, restart the session or refresh the skills list according to the instructions for your coding agent.

#### Claude Code Plugin Marketplace [#claude-code-plugin-marketplace]

Run the following command in \`Claude Code\`:

\`\`\`bash
plugin marketplace add AgoraIO/skills
\`\`\`

#### OpenClaw [#openclaw]

Install through \`ClawHub\`:

\`\`\`bash
clawhub install voice-ai-integration
clawhub update voice-ai-integration
\`\`\`

Use \`install\` the first time and \`update\` for later upgrades.

## Repository [#repository]

* [Agora skills](https://github.com/AgoraIO/skills)

## Best practices [#best-practices]

After configuring the skills, you can directly describe tasks such as integration, code generation, or troubleshooting in your coding agent. The skills help the agent choose the right integration workflow and generation rules, and supplement responses with the latest Agora documentation, making generated code, configuration guidance, and issue diagnosis more accurate.

* Clearly specify the Agora product, target platform, development language, and desired feature in your prompt.
* Provide as much context as possible, such as your current tech stack, existing code, expected interaction flow, whether you need a token, and whether you need server-side examples. This helps the AI produce solutions that are easier to use directly.
* When troubleshooting, include the observed issue, reproduction steps, logs, error codes, screenshots, or call stack details whenever possible so the coding agent can narrow down the cause faster.
* For complex tasks, prefer an AI IDE with stronger model support and more complete tooling for more stable code generation and problem analysis.

## Prompt example [#prompt-example]

After configuring the skills, you can send a prompt like the following to your coding agent to generate an AI voice conversation demo with real-time captions:

\`\`\`markdown
Build me an AI voice conversation demo. After the user opens the web page and clicks "Start conversation", they should be able to talk with the AI by voice, and the page should display real-time captions.

## Tech stack

- Frontend: Next.js + React + TypeScript + Tailwind CSS
- Backend: FastAPI (Python)

## Requirements

1. Start and end the voice conversation with one click
2. Show real-time captions for both the user and the AI
3. Mute and unmute the microphone
4. Display the AI status (listening, thinking, speaking)
5. Include a system log panel
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: "install-agora-skills",
    content: "Choose one of the following ways to install the skills:"
  }, {
    heading: "skills-cli",
    content: "Install with the `CLI`:"
  }, {
    heading: "skills-cli",
    content: "This is the most direct installation method. After the installation finishes, restart the session or refresh the skills list according to the instructions for your coding agent."
  }, {
    heading: "claude-code-plugin-marketplace",
    content: "Run the following command in `Claude Code`:"
  }, {
    heading: "openclaw",
    content: "Install through `ClawHub`:"
  }, {
    heading: "openclaw",
    content: "Use `install` the first time and `update` for later upgrades."
  }, {
    heading: "repository",
    content: "Agora skills"
  }, {
    heading: "best-practices",
    content: "After configuring the skills, you can directly describe tasks such as integration, code generation, or troubleshooting in your coding agent. The skills help the agent choose the right integration workflow and generation rules, and supplement responses with the latest Agora documentation, making generated code, configuration guidance, and issue diagnosis more accurate."
  }, {
    heading: "best-practices",
    content: "Clearly specify the Agora product, target platform, development language, and desired feature in your prompt."
  }, {
    heading: "best-practices",
    content: "Provide as much context as possible, such as your current tech stack, existing code, expected interaction flow, whether you need a token, and whether you need server-side examples. This helps the AI produce solutions that are easier to use directly."
  }, {
    heading: "best-practices",
    content: "When troubleshooting, include the observed issue, reproduction steps, logs, error codes, screenshots, or call stack details whenever possible so the coding agent can narrow down the cause faster."
  }, {
    heading: "best-practices",
    content: "For complex tasks, prefer an AI IDE with stronger model support and more complete tooling for more stable code generation and problem analysis."
  }, {
    heading: "prompt-example",
    content: "After configuring the skills, you can send a prompt like the following to your coding agent to generate an AI voice conversation demo with real-time captions:"
  }],
  headings: [{
    id: "install-agora-skills",
    content: "Install Agora skills"
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
    id: "repository",
    content: "Repository"
  }, {
    id: "best-practices",
    content: "Best practices"
  }, {
    id: "prompt-example",
    content: "Prompt example"
  }]
};
export let toc = [{
  depth: 2,
  url: "#install-agora-skills",
  title: _jsx(_Fragment, {
    children: "Install Agora skills"
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
  url: "#repository",
  title: _jsx(_Fragment, {
    children: "Repository"
  })
}, {
  depth: 2,
  url: "#best-practices",
  title: _jsx(_Fragment, {
    children: "Best practices"
  })
}, {
  depth: 2,
  url: "#prompt-example",
  title: _jsx(_Fragment, {
    children: "Prompt example"
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
    children: [_jsx(_components.h2, {
      id: "install-agora-skills",
      children: "Install Agora skills"
    }), `
`, _jsx(_components.p, {
      children: "Choose one of the following ways to install the skills:"
    }), `
`, _jsx(_components.h4, {
      id: "skills-cli",
      children: "Skills CLI"
    }), `
`, _jsxs(_components.p, {
      children: ["Install with the ", _jsx(_components.code, {
        children: "CLI"
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
      children: "This is the most direct installation method. After the installation finishes, restart the session or refresh the skills list according to the instructions for your coding agent."
    }), `
`, _jsx(_components.h4, {
      id: "claude-code-plugin-marketplace",
      children: "Claude Code Plugin Marketplace"
    }), `
`, _jsxs(_components.p, {
      children: ["Run the following command in ", _jsx(_components.code, {
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
      children: ["Install through ", _jsx(_components.code, {
        children: "ClawHub"
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
      children: ["Use ", _jsx(_components.code, {
        children: "install"
      }), " the first time and ", _jsx(_components.code, {
        children: "update"
      }), " for later upgrades."]
    }), `
`, _jsx(_components.h2, {
      id: "repository",
      children: "Repository"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://github.com/AgoraIO/skills",
          children: "Agora skills"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "best-practices",
      children: "Best practices"
    }), `
`, _jsx(_components.p, {
      children: "After configuring the skills, you can directly describe tasks such as integration, code generation, or troubleshooting in your coding agent. The skills help the agent choose the right integration workflow and generation rules, and supplement responses with the latest Agora documentation, making generated code, configuration guidance, and issue diagnosis more accurate."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Clearly specify the Agora product, target platform, development language, and desired feature in your prompt."
      }), `
`, _jsx(_components.li, {
        children: "Provide as much context as possible, such as your current tech stack, existing code, expected interaction flow, whether you need a token, and whether you need server-side examples. This helps the AI produce solutions that are easier to use directly."
      }), `
`, _jsx(_components.li, {
        children: "When troubleshooting, include the observed issue, reproduction steps, logs, error codes, screenshots, or call stack details whenever possible so the coding agent can narrow down the cause faster."
      }), `
`, _jsx(_components.li, {
        children: "For complex tasks, prefer an AI IDE with stronger model support and more complete tooling for more stable code generation and problem analysis."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "prompt-example",
      children: "Prompt example"
    }), `
`, _jsx(_components.p, {
      children: "After configuring the skills, you can send a prompt like the following to your coding agent to generate an AI voice conversation demo with real-time captions:"
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
              children: 'Build me an AI voice conversation demo. After the user opens the web page and clicks "Start conversation", they should be able to talk with the AI by voice, and the page should display real-time captions.'
            })
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
              children: "## Tech stack"
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
              children: "-"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Frontend: Next.js + React + TypeScript + Tailwind CSS"
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
              children: " Backend: FastAPI (Python)"
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
              children: "## Requirements"
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
              children: " Start and end the voice conversation with one click"
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
              children: " Show real-time captions for both the user and the AI"
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
              children: " Mute and unmute the microphone"
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
              children: " Display the AI status (listening, thinking, speaking)"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "5."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Include a system log panel"
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
