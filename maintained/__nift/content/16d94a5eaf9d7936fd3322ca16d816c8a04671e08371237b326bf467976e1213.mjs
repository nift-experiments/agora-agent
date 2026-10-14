import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Generic TTS",
  description: `Integrate a custom TTS service using the OpenAI TTS protocol into Conversational AI Engine.
`
};
export let _markdown = `

The \`generic_http\` TTS vendor lets you integrate a custom TTS service that implements the OpenAI TTS protocol into the Conversational AI Engine. For a walkthrough of preparing and verifying a compatible TTS service, see [Connect your own TTS service](/en/ai/build/custom-model-integration/custom-tts).

### Sample configuration [#sample-configuration]

Use the following \`tts\` configuration when starting a conversational AI agent using the REST API. \`generic_http\` requires \`tts.url\`, and at least one of \`tts.headers.Authorization\` or \`tts.params.api_key\` for authentication.

* **Authenticate using \`headers\`** (recommended)

  \`\`\`json
  "tts": {
    "vendor": "generic_http",
    "url": "https://your-tts-service.example.com/v1/audio/speech",
    "headers": {
      "Authorization": "Bearer your_tts_api_key"
    },
    "params": {
      "model": "gpt-4o-mini-tts",
      "voice": "alloy",
      "speed": 1.0,
      "sample_rate": 16000,
      "response_format": "pcm",
      "instructions": "calm",
      "enable_request_id": false
    }
  }
  \`\`\`

* **Authenticate using \`params.api_key\`**

  \`\`\`json
  "tts": {
    "vendor": "generic_http",
    "url": "https://your-tts-service.example.com/v1/audio/speech",
    "params": {
      "api_key": "your_tts_api_key",
      "model": "gpt-4o-mini-tts",
      "voice": "alloy",
      "speed": 1.0,
      "sample_rate": 16000,
      "response_format": "pcm",
      "instructions": "calm",
      "enable_request_id": false
    }
  }
  \`\`\`

  If you provide both \`tts.headers.Authorization\` and \`tts.params.api_key\`, the Conversational AI Engine uses \`tts.headers.Authorization\`.

### Key parameters [#key-parameters]

<ParameterList title="tts" required="true">
  <Parameter name="url" type="string" required="true">
    The OpenAI TTS protocol compatible service endpoint.
  </Parameter>

  <Parameter name="headers" type="object" required="false">
    Custom request headers to include in requests to the TTS service, such as authentication credentials. Provide at least one of \`headers.Authorization\` or \`params.api_key\`. If you provide both, the Conversational AI Engine uses \`headers.Authorization\`.
  </Parameter>

  <Parameter name="params" type="object" required="true">
    <Parameter name="api_key" type="string" required="false">
      The API key used to authenticate with the TTS service. Provide at least one of \`headers.Authorization\` or \`params.api_key\`. If you provide both, the Conversational AI Engine uses \`headers.Authorization\`.
    </Parameter>

    <Parameter name="model" type="string" required="false">
      The name of the TTS model.
    </Parameter>

    <Parameter name="voice" type="string" required="false">
      The voice name. Omit this parameter if your TTS service does not support multiple voices.
    </Parameter>

    <Parameter name="speed" type="number" required="false">
      The speech rate.
    </Parameter>

    <Parameter name="sample_rate" type="integer" defaultValue="16000" required="false">
      The sample rate, in Hz, of the output audio. If your TTS service does not support multiple sample rates, make sure the sample rate of the returned audio matches this value.
    </Parameter>

    <Parameter name="response_format" type="string" defaultValue="pcm" required="false">
      The output audio format. Currently only \`pcm\` is supported.
    </Parameter>

    <Parameter name="instructions" type="string" required="false">
      Instructions for voice style, emotion, or other playback directives.
    </Parameter>

    <Parameter name="enable_request_id" type="boolean" defaultValue="false" required="false">
      Whether to include \`request_id\`, \`request_seq_id\`, and \`request_end\` in the TTS request body.
    </Parameter>
  </Parameter>
</ParameterList>

<CalloutContainer type="warning">
  <CalloutTitle>
    Caution
  </CalloutTitle>

  <CalloutDescription>
    Your TTS service must implement the OpenAI TTS protocol. The parameters listed on this page are validated for use with Conversational AI Engine. Any additional fields in \`params\` are passed through directly to your TTS service without validation.
  </CalloutDescription>
</CalloutContainer>

This integration is fully supported for use with Conversational AI Engine. While it has completed functional validation, it is newer to the platform, and additional provider-specific edge cases may be identified as usage scales across a broader range of applications and workloads.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The `generic_http` TTS vendor lets you integrate a custom TTS service that implements the OpenAI TTS protocol into the Conversational AI Engine. For a walkthrough of preparing and verifying a compatible TTS service, see Connect your own TTS service."
  }, {
    heading: "sample-configuration",
    content: "Use the following `tts` configuration when starting a conversational AI agent using the REST API. `generic_http` requires `tts.url`, and at least one of `tts.headers.Authorization` or `tts.params.api_key` for authentication."
  }, {
    heading: "sample-configuration",
    content: "**Authenticate using `headers`** (recommended)"
  }, {
    heading: "sample-configuration",
    content: "**Authenticate using `params.api_key`**"
  }, {
    heading: "sample-configuration",
    content: "If you provide both `tts.headers.Authorization` and `tts.params.api_key`, the Conversational AI Engine uses `tts.headers.Authorization`."
  }, {
    heading: "key-parameters",
    content: "The OpenAI TTS protocol compatible service endpoint."
  }, {
    heading: "key-parameters",
    content: "Custom request headers to include in requests to the TTS service, such as authentication credentials. Provide at least one of `headers.Authorization` or `params.api_key`. If you provide both, the Conversational AI Engine uses `headers.Authorization`."
  }, {
    heading: "key-parameters",
    content: "The API key used to authenticate with the TTS service. Provide at least one of `headers.Authorization` or `params.api_key`. If you provide both, the Conversational AI Engine uses `headers.Authorization`."
  }, {
    heading: "key-parameters",
    content: "The name of the TTS model."
  }, {
    heading: "key-parameters",
    content: "The voice name. Omit this parameter if your TTS service does not support multiple voices."
  }, {
    heading: "key-parameters",
    content: "The speech rate."
  }, {
    heading: "key-parameters",
    content: "The sample rate, in Hz, of the output audio. If your TTS service does not support multiple sample rates, make sure the sample rate of the returned audio matches this value."
  }, {
    heading: "key-parameters",
    content: "The output audio format. Currently only `pcm` is supported."
  }, {
    heading: "key-parameters",
    content: "Instructions for voice style, emotion, or other playback directives."
  }, {
    heading: "key-parameters",
    content: "Whether to include `request_id`, `request_seq_id`, and `request_end` in the TTS request body."
  }, {
    heading: "key-parameters",
    content: "Your TTS service must implement the OpenAI TTS protocol. The parameters listed on this page are validated for use with Conversational AI Engine. Any additional fields in `params` are passed through directly to your TTS service without validation."
  }, {
    heading: "key-parameters",
    content: "This integration is fully supported for use with Conversational AI Engine. While it has completed functional validation, it is newer to the platform, and additional provider-specific edge cases may be identified as usage scales across a broader range of applications and workloads."
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
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle, Parameter, ParameterList } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  if (!Parameter)
    _missingMdxReference("Parameter", true);
  if (!ParameterList)
    _missingMdxReference("ParameterList", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "generic_http"
      }), " TTS vendor lets you integrate a custom TTS service that implements the OpenAI TTS protocol into the Conversational AI Engine. For a walkthrough of preparing and verifying a compatible TTS service, see ", _jsx(_components.a, {
        href: "/en/ai/build/custom-model-integration/custom-tts",
        children: "Connect your own TTS service"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "sample-configuration",
      children: "Sample configuration"
    }), `
`, _jsxs(_components.p, {
      children: ["Use the following ", _jsx(_components.code, {
        children: "tts"
      }), " configuration when starting a conversational AI agent using the REST API. ", _jsx(_components.code, {
        children: "generic_http"
      }), " requires ", _jsx(_components.code, {
        children: "tts.url"
      }), ", and at least one of ", _jsx(_components.code, {
        children: "tts.headers.Authorization"
      }), " or ", _jsx(_components.code, {
        children: "tts.params.api_key"
      }), " for authentication."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: ["Authenticate using ", _jsx(_components.code, {
              children: "headers"
            })]
          }), " (recommended)"]
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
                  children: '"tts"'
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
                  children: '"generic_http"'
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
                  children: '"https://your-tts-service.example.com/v1/audio/speech"'
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
                  children: '  "headers"'
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
                  children: '    "Authorization"'
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
                  children: '"Bearer your_tts_api_key"'
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
                  children: '"gpt-4o-mini-tts"'
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
                  children: '    "voice"'
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
                  children: '"alloy"'
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
                  children: '    "speed"'
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
                  children: "1.0"
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
                  children: '    "sample_rate"'
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
                  children: "16000"
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
                  children: '    "response_format"'
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
                  children: '"pcm"'
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
                  children: '    "instructions"'
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
                  children: '"calm"'
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
                  children: '    "enable_request_id"'
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
                  children: "false"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
                })
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
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsxs(_components.strong, {
            children: ["Authenticate using ", _jsx(_components.code, {
              children: "params.api_key"
            })]
          })
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
                  children: '"tts"'
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
                  children: '"generic_http"'
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
                  children: '"https://your-tts-service.example.com/v1/audio/speech"'
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
                  children: '    "api_key"'
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
                  children: '"your_tts_api_key"'
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
                  children: '"gpt-4o-mini-tts"'
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
                  children: '    "voice"'
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
                  children: '"alloy"'
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
                  children: '    "speed"'
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
                  children: "1.0"
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
                  children: '    "sample_rate"'
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
                  children: "16000"
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
                  children: '    "response_format"'
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
                  children: '"pcm"'
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
                  children: '    "instructions"'
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
                  children: '"calm"'
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
                  children: '    "enable_request_id"'
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
                  children: "false"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
                })
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
`, _jsxs(_components.p, {
          children: ["If you provide both ", _jsx(_components.code, {
            children: "tts.headers.Authorization"
          }), " and ", _jsx(_components.code, {
            children: "tts.params.api_key"
          }), ", the Conversational AI Engine uses ", _jsx(_components.code, {
            children: "tts.headers.Authorization"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "key-parameters",
      children: "Key parameters"
    }), `
`, _jsxs(ParameterList, {
      title: "tts",
      required: true,
      children: [_jsx(Parameter, {
        name: "url",
        type: "string",
        required: true,
        children: _jsx(_components.p, {
          children: "The OpenAI TTS protocol compatible service endpoint."
        })
      }), _jsx(Parameter, {
        name: "headers",
        type: "object",
        required: false,
        children: _jsxs(_components.p, {
          children: ["Custom request headers to include in requests to the TTS service, such as authentication credentials. Provide at least one of ", _jsx(_components.code, {
            children: "headers.Authorization"
          }), " or ", _jsx(_components.code, {
            children: "params.api_key"
          }), ". If you provide both, the Conversational AI Engine uses ", _jsx(_components.code, {
            children: "headers.Authorization"
          }), "."]
        })
      }), _jsxs(Parameter, {
        name: "params",
        type: "object",
        required: true,
        children: [_jsx(Parameter, {
          name: "api_key",
          type: "string",
          required: false,
          children: _jsxs(_components.p, {
            children: ["The API key used to authenticate with the TTS service. Provide at least one of ", _jsx(_components.code, {
              children: "headers.Authorization"
            }), " or ", _jsx(_components.code, {
              children: "params.api_key"
            }), ". If you provide both, the Conversational AI Engine uses ", _jsx(_components.code, {
              children: "headers.Authorization"
            }), "."]
          })
        }), _jsx(Parameter, {
          name: "model",
          type: "string",
          required: false,
          children: _jsx(_components.p, {
            children: "The name of the TTS model."
          })
        }), _jsx(Parameter, {
          name: "voice",
          type: "string",
          required: false,
          children: _jsx(_components.p, {
            children: "The voice name. Omit this parameter if your TTS service does not support multiple voices."
          })
        }), _jsx(Parameter, {
          name: "speed",
          type: "number",
          required: false,
          children: _jsx(_components.p, {
            children: "The speech rate."
          })
        }), _jsx(Parameter, {
          name: "sample_rate",
          type: "integer",
          defaultValue: "16000",
          required: false,
          children: _jsx(_components.p, {
            children: "The sample rate, in Hz, of the output audio. If your TTS service does not support multiple sample rates, make sure the sample rate of the returned audio matches this value."
          })
        }), _jsx(Parameter, {
          name: "response_format",
          type: "string",
          defaultValue: "pcm",
          required: false,
          children: _jsxs(_components.p, {
            children: ["The output audio format. Currently only ", _jsx(_components.code, {
              children: "pcm"
            }), " is supported."]
          })
        }), _jsx(Parameter, {
          name: "instructions",
          type: "string",
          required: false,
          children: _jsx(_components.p, {
            children: "Instructions for voice style, emotion, or other playback directives."
          })
        }), _jsx(Parameter, {
          name: "enable_request_id",
          type: "boolean",
          defaultValue: "false",
          required: false,
          children: _jsxs(_components.p, {
            children: ["Whether to include ", _jsx(_components.code, {
              children: "request_id"
            }), ", ", _jsx(_components.code, {
              children: "request_seq_id"
            }), ", and ", _jsx(_components.code, {
              children: "request_end"
            }), " in the TTS request body."]
          })
        })]
      })]
    }), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "Caution"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Your TTS service must implement the OpenAI TTS protocol. The parameters listed on this page are validated for use with Conversational AI Engine. Any additional fields in ", _jsx(_components.code, {
            children: "params"
          }), " are passed through directly to your TTS service without validation."]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "This integration is fully supported for use with Conversational AI Engine. While it has completed functional validation, it is newer to the platform, and additional provider-specific edge cases may be identified as usage scales across a broader range of applications and workloads."
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
