import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Agora skills",
  description: "Use Agora skills with AI coding assistants to build with Agora faster."
};
export let _markdown = `

Agora skills is a set of structured reference files that give AI coding assistants deep knowledge of Agora's platform. When you ask your assistant to build something with Agora, it loads the relevant skill files covering products, APIs, and platform-specific code examples, so it can generate working code without guessing.

Skills includes integration with the [Agora MCP server](./mcp), which gives your assistant access to live Agora documentation. For installation instructions and supported tools, see the [Agora Skills repository](https://github.com/AgoraIO/skills).

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
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora skills is a set of structured reference files that give AI coding assistants deep knowledge of Agora's platform. When you ask your assistant to build something with Agora, it loads the relevant skill files covering products, APIs, and platform-specific code examples, so it can generate working code without guessing."
    }), `
`, _jsxs(_components.p, {
      children: ["Skills includes integration with the ", _jsx(_components.a, {
        href: "./mcp",
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
