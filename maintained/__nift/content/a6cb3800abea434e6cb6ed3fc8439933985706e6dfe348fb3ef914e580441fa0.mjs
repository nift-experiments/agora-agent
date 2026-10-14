import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "xAI Grok",
  description: `Integrate xAI Grok as the LLM with the Conversational AI Engine.
`
};
export let _markdown = `

xAI provides access to Grok large language models through an OpenAI-compatible chat completions API for conversational AI applications.

### Sample configuration [#sample-configuration]

The following example shows a starting \`llm\` parameter configuration you can use when you [Start a conversational AI agent](/en/api-reference/api-ref/conversational-ai/join).

\`\`\`json
"llm": {
  "url": "https://api.x.ai/v1/chat/completions",
  "api_key": "<your_llm_key>",
  "system_messages": [
    {
      "role": "system",
      "content": "You are a helpful chatbot."
    }
  ],
  "max_history": 32,
  "greeting_message": "Hello, how can I assist you?",
  "failure_message": "Please hold on a second.",
  "params": {
    "model": "grok-4.3"
  },
  "vendor": "xai"
}
\`\`\`

### Key parameters [#key-parameters]

<ParameterList required="true">
  <Parameter name="url" type="string" required="true">
    The xAI chat completions endpoint. Set to \`https://api.x.ai/v1/chat/completions\`.
  </Parameter>

  <Parameter name="api_key" type="string" required="true">
    The xAI API key used to authenticate requests.
  </Parameter>

  <Parameter name="vendor" type="string" required="true">
    The LLM vendor. Set to \`xai\`.
  </Parameter>

  <Parameter name="params" type="object" required="false">
    Additional parameters passed directly to the xAI API.

    <ParameterList title="params">
      <Parameter name="model" type="string" required="true">
        The Grok model to use. For example, \`grok-4.3\`. For available models, refer to the [xAI models documentation](https://docs.x.ai/developers/models).
      </Parameter>
    </ParameterList>
  </Parameter>
</ParameterList>

For more information, refer to the [xAI Chat Completions documentation](https://docs.x.ai/developers/model-capabilities/legacy/chat-completions).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "xAI provides access to Grok large language models through an OpenAI-compatible chat completions API for conversational AI applications."
  }, {
    heading: "sample-configuration",
    content: "The following example shows a starting `llm` parameter configuration you can use when you Start a conversational AI agent."
  }, {
    heading: "key-parameters",
    content: "The xAI chat completions endpoint. Set to `https://api.x.ai/v1/chat/completions`."
  }, {
    heading: "key-parameters",
    content: "The xAI API key used to authenticate requests."
  }, {
    heading: "key-parameters",
    content: "The LLM vendor. Set to `xai`."
  }, {
    heading: "key-parameters",
    content: "Additional parameters passed directly to the xAI API."
  }, {
    heading: "key-parameters",
    content: "The Grok model to use. For example, `grok-4.3`. For available models, refer to the xAI models documentation."
  }, {
    heading: "key-parameters",
    content: "For more information, refer to the xAI Chat Completions documentation."
  }],
  headings: [{
    id: "sample-configuration",
    content: "Sample configuration"
  }, {
    id: "key-parameters",
    content: "Key parameters"
  }]
};
export let toc = [{
  depth: 3,
  url: "#sample-configuration",
  title: _jsx(_Fragment, {
    children: "Sample configuration"
  })
}, {
  depth: 3,
  url: "#key-parameters",
  title: _jsx(_Fragment, {
    children: "Key parameters"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  }, { Parameter, ParameterList } = _components;
  if (!Parameter)
    _missingMdxReference("Parameter", true);
  if (!ParameterList)
    _missingMdxReference("ParameterList", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "xAI provides access to Grok large language models through an OpenAI-compatible chat completions API for conversational AI applications."
    }), `
`, _jsx(_components.h3, {
      id: "sample-configuration",
      children: "Sample configuration"
    }), `
`, _jsxs(_components.p, {
      children: ["The following example shows a starting ", _jsx(_components.code, {
        children: "llm"
      }), " parameter configuration you can use when you ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/conversational-ai/join",
        children: "Start a conversational AI agent"
      }), "."]
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"llm"'
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
              children: '  "url"'
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
              children: '"https://api.x.ai/v1/chat/completions"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "api_key"'
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
              children: '"<your_llm_key>"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "system_messages"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "role"'
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
              children: '"system"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "content"'
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
              children: '"You are a helpful chatbot."'
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
              children: "  ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "max_history"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "32"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "greeting_message"'
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
              children: '"Hello, how can I assist you?"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "failure_message"'
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
              children: '"Please hold on a second."'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "params"'
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
              children: '    "model"'
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
              children: '"grok-4.3"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "vendor"'
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
              children: '"xai"'
            })]
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
    }), `
`, _jsx(_components.h3, {
      id: "key-parameters",
      children: "Key parameters"
    }), `
`, _jsxs(ParameterList, {
      required: true,
      children: [_jsx(Parameter, {
        name: "url",
        type: "string",
        required: true,
        children: _jsxs(_components.p, {
          children: ["The xAI chat completions endpoint. Set to ", _jsx(_components.code, {
            children: "https://api.x.ai/v1/chat/completions"
          }), "."]
        })
      }), _jsx(Parameter, {
        name: "api_key",
        type: "string",
        required: true,
        children: _jsx(_components.p, {
          children: "The xAI API key used to authenticate requests."
        })
      }), _jsx(Parameter, {
        name: "vendor",
        type: "string",
        required: true,
        children: _jsxs(_components.p, {
          children: ["The LLM vendor. Set to ", _jsx(_components.code, {
            children: "xai"
          }), "."]
        })
      }), _jsxs(Parameter, {
        name: "params",
        type: "object",
        required: false,
        children: [_jsx(_components.p, {
          children: "Additional parameters passed directly to the xAI API."
        }), _jsx(ParameterList, {
          title: "params",
          children: _jsx(Parameter, {
            name: "model",
            type: "string",
            required: true,
            children: _jsxs(_components.p, {
              children: ["The Grok model to use. For example, ", _jsx(_components.code, {
                children: "grok-4.3"
              }), ". For available models, refer to the ", _jsx(_components.a, {
                href: "https://docs.x.ai/developers/models",
                children: "xAI models documentation"
              }), "."]
            })
          })
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For more information, refer to the ", _jsx(_components.a, {
        href: "https://docs.x.ai/developers/model-capabilities/legacy/chat-completions",
        children: "xAI Chat Completions documentation"
      }), "."]
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
