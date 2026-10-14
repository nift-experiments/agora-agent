import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Agora skills",
  description: "Use Agora skills with AI coding assistants to build with Agora faster."
};
export let _markdown = `

Agora skills is a structured reference bundle that gives AI coding assistants product-aware guidance for building with Agora. In the device-kit workflow, it helps assistants discover the right setup steps, docs, and integration patterns without guessing.

Skills includes integration with the Agora MCP server, which gives your assistant live access to Agora documentation.

## Installation [#installation]

### Skills CLI (recommended) [#skills-cli-recommended]

\`\`\`bash
npx skills add github:AgoraIO/skills
\`\`\`

### Manual installation [#manual-installation]

Clone the repository once and point your coding assistant to the Agora skill files:

\`\`\`bash
git clone https://github.com/AgoraIO/skills.git ~/agora-skills
\`\`\`

Then point your tool to \`skills/agora/\` or load \`SKILL.md\` as the entry point.

## Recommended use [#recommended-use]

Use Agora skills when you want an assistant to help with:

* Device Kit setup
* Conversational AI quickstarts
* Agora CLI workflows
* platform-specific guidance across Android, Web, iOS, and device-oriented paths

## Related resources [#related-resources]

* [Agora MCP](mcp)
* [Agora Skills repository](https://github.com/AgoraIO/skills)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora skills is a structured reference bundle that gives AI coding assistants product-aware guidance for building with Agora. In the device-kit workflow, it helps assistants discover the right setup steps, docs, and integration patterns without guessing."
  }, {
    heading: undefined,
    content: "Skills includes integration with the Agora MCP server, which gives your assistant live access to Agora documentation."
  }, {
    heading: "manual-installation",
    content: "Clone the repository once and point your coding assistant to the Agora skill files:"
  }, {
    heading: "manual-installation",
    content: "Then point your tool to `skills/agora/` or load `SKILL.md` as the entry point."
  }, {
    heading: "recommended-use",
    content: "Use Agora skills when you want an assistant to help with:"
  }, {
    heading: "recommended-use",
    content: "Device Kit setup"
  }, {
    heading: "recommended-use",
    content: "Conversational AI quickstarts"
  }, {
    heading: "recommended-use",
    content: "Agora CLI workflows"
  }, {
    heading: "recommended-use",
    content: "platform-specific guidance across Android, Web, iOS, and device-oriented paths"
  }, {
    heading: "related-resources",
    content: "Agora MCP"
  }, {
    heading: "related-resources",
    content: "Agora Skills repository"
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
  }, {
    id: "recommended-use",
    content: "Recommended use"
  }, {
    id: "related-resources",
    content: "Related resources"
  }]
};
export let toc = [{
  depth: 2,
  url: "#installation",
  title: _jsx(_Fragment, {
    children: "Installation"
  })
}, {
  depth: 3,
  url: "#skills-cli-recommended",
  title: _jsx(_Fragment, {
    children: "Skills CLI (recommended)"
  })
}, {
  depth: 3,
  url: "#manual-installation",
  title: _jsx(_Fragment, {
    children: "Manual installation"
  })
}, {
  depth: 2,
  url: "#recommended-use",
  title: _jsx(_Fragment, {
    children: "Recommended use"
  })
}, {
  depth: 2,
  url: "#related-resources",
  title: _jsx(_Fragment, {
    children: "Related resources"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora skills is a structured reference bundle that gives AI coding assistants product-aware guidance for building with Agora. In the device-kit workflow, it helps assistants discover the right setup steps, docs, and integration patterns without guessing."
    }), `
`, _jsx(_components.p, {
      children: "Skills includes integration with the Agora MCP server, which gives your assistant live access to Agora documentation."
    }), `
`, _jsx(_components.h2, {
      id: "installation",
      children: "Installation"
    }), `
`, _jsx(_components.h3, {
      id: "skills-cli-recommended",
      children: "Skills CLI (recommended)"
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
`, _jsx(_components.h3, {
      id: "manual-installation",
      children: "Manual installation"
    }), `
`, _jsx(_components.p, {
      children: "Clone the repository once and point your coding assistant to the Agora skill files:"
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
`, _jsxs(_components.p, {
      children: ["Then point your tool to ", _jsx(_components.code, {
        children: "skills/agora/"
      }), " or load ", _jsx(_components.code, {
        children: "SKILL.md"
      }), " as the entry point."]
    }), `
`, _jsx(_components.h2, {
      id: "recommended-use",
      children: "Recommended use"
    }), `
`, _jsx(_components.p, {
      children: "Use Agora skills when you want an assistant to help with:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Device Kit setup"
      }), `
`, _jsx(_components.li, {
        children: "Conversational AI quickstarts"
      }), `
`, _jsx(_components.li, {
        children: "Agora CLI workflows"
      }), `
`, _jsx(_components.li, {
        children: "platform-specific guidance across Android, Web, iOS, and device-oriented paths"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "related-resources",
      children: "Related resources"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "mcp",
          children: "Agora MCP"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://github.com/AgoraIO/skills",
          children: "Agora Skills repository"
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
