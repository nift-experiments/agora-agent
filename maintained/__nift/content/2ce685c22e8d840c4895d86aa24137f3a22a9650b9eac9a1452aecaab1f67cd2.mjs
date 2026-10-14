import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Agora MCP",
  description: "Use Agora MCP with AI coding assistants to build with Interactive Whiteboard faster."
};
export let _markdown = `

The Agora MCP server gives your AI assistant direct access to Agora's documentation, so it can look up APIs, SDK methods, and platform-specific details in real time.
The Agora MCP server is included when you install Agora Skills. If you prefer to install only the MCP server, it is available at:

\`\`\`text
https://mcp.agora.io
\`\`\`

### Installation [#installation]

Refer to the installation instructions for your coding assistant.

### Getting started [#getting-started]

Once installed, your coding assistant has access to Agora's documentation through the MCP server. The assistant will intelligently use this resource when relevant to your questions. For more targeted results, mention Agora along with your target product and platform, such as 'iOS', 'Web', 'Conversational AI', 'Video Calling' in your prompts.

### System prompt [#system-prompt]

This MCP works with all LLMs that support MCP, but performs best when the assistant understands facet-based exploration. Add the following prompt to your LLMs custom instructions:

System prompt for LLMs

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
    heading: "getting-started",
    content: "Once installed, your coding assistant has access to Agora's documentation through the MCP server. The assistant will intelligently use this resource when relevant to your questions. For more targeted results, mention Agora along with your target product and platform, such as 'iOS', 'Web', 'Conversational AI', 'Video Calling' in your prompts."
  }, {
    heading: "system-prompt",
    content: "This MCP works with all LLMs that support MCP, but performs best when the assistant understands facet-based exploration. Add the following prompt to your LLMs custom instructions:"
  }, {
    heading: "system-prompt",
    content: "System prompt for LLMs"
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
    ul: "ul",
    ...props.components
  };
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
`, _jsx(_components.p, {
      children: "System prompt for LLMs"
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
