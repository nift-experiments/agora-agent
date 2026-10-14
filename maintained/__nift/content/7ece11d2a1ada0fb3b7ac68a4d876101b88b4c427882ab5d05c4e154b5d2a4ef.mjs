import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Agora MCP",
  description: "Use Agora MCP with AI coding assistants to build with Agora faster."
};
export let _markdown = `

The Agora MCP server gives your AI assistant direct access to Agora documentation so it can look up APIs, SDK methods, and platform-specific details in real time.

The MCP server is included when you install Agora Skills. If you prefer to install only the MCP server, use:

\`\`\`text
https://mcp.agora.io
\`\`\`

## Installation [#installation]

### Codex [#codex]

\`\`\`bash
codex mcp add --url https://mcp.agora.io agora-docs
\`\`\`

### Claude Code [#claude-code]

\`\`\`bash
claude mcp add --transport http agora-docs https://mcp.agora.io
\`\`\`

### Gemini CLI [#gemini-cli]

\`\`\`bash
gemini mcp add --transport http agora-docs https://mcp.agora.io
\`\`\`

### Manual installation [#manual-installation]

Add the server URL \`https://mcp.agora.io\` to your MCP client of choice. If prompted, use \`http\` or \`Streamable HTTP\` transport.

## Related resources [#related-resources]

* [Agora skills](skills)
* [Agora MCP server](https://mcp.agora.io)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Agora MCP server gives your AI assistant direct access to Agora documentation so it can look up APIs, SDK methods, and platform-specific details in real time."
  }, {
    heading: undefined,
    content: "The MCP server is included when you install Agora Skills. If you prefer to install only the MCP server, use:"
  }, {
    heading: "manual-installation",
    content: "Add the server URL `https://mcp.agora.io` to your MCP client of choice. If prompted, use `http` or `Streamable HTTP` transport."
  }, {
    heading: "related-resources",
    content: "Agora skills"
  }, {
    heading: "related-resources",
    content: "Agora MCP server"
  }],
  headings: [{
    id: "installation",
    content: "Installation"
  }, {
    id: "codex",
    content: "Codex"
  }, {
    id: "claude-code",
    content: "Claude Code"
  }, {
    id: "gemini-cli",
    content: "Gemini CLI"
  }, {
    id: "manual-installation",
    content: "Manual installation"
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
  url: "#codex",
  title: _jsx(_Fragment, {
    children: "Codex"
  })
}, {
  depth: 3,
  url: "#claude-code",
  title: _jsx(_Fragment, {
    children: "Claude Code"
  })
}, {
  depth: 3,
  url: "#gemini-cli",
  title: _jsx(_Fragment, {
    children: "Gemini CLI"
  })
}, {
  depth: 3,
  url: "#manual-installation",
  title: _jsx(_Fragment, {
    children: "Manual installation"
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
      children: "The Agora MCP server gives your AI assistant direct access to Agora documentation so it can look up APIs, SDK methods, and platform-specific details in real time."
    }), `
`, _jsx(_components.p, {
      children: "The MCP server is included when you install Agora Skills. If you prefer to install only the MCP server, use:"
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
`, _jsx(_components.h3, {
      id: "codex",
      children: "Codex"
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
    }), `
`, _jsx(_components.h3, {
      id: "claude-code",
      children: "Claude Code"
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
`, _jsx(_components.h3, {
      id: "gemini-cli",
      children: "Gemini CLI"
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
    }), `
`, _jsx(_components.h3, {
      id: "manual-installation",
      children: "Manual installation"
    }), `
`, _jsxs(_components.p, {
      children: ["Add the server URL ", _jsx(_components.code, {
        children: "https://mcp.agora.io"
      }), " to your MCP client of choice. If prompted, use ", _jsx(_components.code, {
        children: "http"
      }), " or ", _jsx(_components.code, {
        children: "Streamable HTTP"
      }), " transport."]
    }), `
`, _jsx(_components.h2, {
      id: "related-resources",
      children: "Related resources"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "skills",
          children: "Agora skills"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://mcp.agora.io",
          children: "Agora MCP server"
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
