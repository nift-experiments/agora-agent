import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Supported vendors",
  description: "ASR, LLM, and TTS providers currently supported by Agent Studio"
};
export let _markdown = `

Agent Studio currently supports the following providers. Vendors marked with \\* support Agora Managed Key. See [Pricing](../../reference/pricing) for usage costs.

## ASR vendors [#asr-vendors]

* [ARES\\*](../../models/asr/ares)
* [Deepgram\\*](../../models/asr/deepgram)
* [Microsoft Azure](../../models/asr/microsoft)

## LLM vendors [#llm-vendors]

* [Azure OpenAI](../../models/llm/azure-openai)
* Cerebras
* [Claude Anthropic](../../models/llm/claude)
* [Google Gemini](../../models/llm/gemini)
* [Google Vertex AI](../../models/llm/google-vertex-ai)
* [Groq](../../models/llm/groq)
* [OpenAI\\*](../../models/llm/openai)

## TTS vendors [#tts-vendors]

* [Cartesia](../../models/tts/cartesia)
* [ElevenLabs](../../models/tts/elevenlabs)
* [Hume AI](../../models/tts/humeai)
* [Microsoft Azure](../../models/tts/microsoft)
* [Minimax\\*](../../models/tts/minimax)
* [OpenAI\\*](../../models/tts/openai)

## MLLM vendors [#mllm-vendors]

* [Google Gemini Live](../../models/mllm/gemini.mdx)
* [OpenAI Realtime API](../../models/mllm/openai)
* [OpenAI GPT-Live](../../models/mllm/openai-gpt-live.mdx)
* [xAI Grok](../../models/mllm/xai.mdx)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agent Studio currently supports the following providers. Vendors marked with \\* support Agora Managed Key. See Pricing for usage costs."
  }, {
    heading: "asr-vendors",
    content: "ARES\\*"
  }, {
    heading: "asr-vendors",
    content: "Deepgram\\*"
  }, {
    heading: "asr-vendors",
    content: "Microsoft Azure"
  }, {
    heading: "llm-vendors",
    content: "Azure OpenAI"
  }, {
    heading: "llm-vendors",
    content: "Cerebras"
  }, {
    heading: "llm-vendors",
    content: "Claude Anthropic"
  }, {
    heading: "llm-vendors",
    content: "Google Gemini"
  }, {
    heading: "llm-vendors",
    content: "Google Vertex AI"
  }, {
    heading: "llm-vendors",
    content: "Groq"
  }, {
    heading: "llm-vendors",
    content: "OpenAI\\*"
  }, {
    heading: "tts-vendors",
    content: "Cartesia"
  }, {
    heading: "tts-vendors",
    content: "ElevenLabs"
  }, {
    heading: "tts-vendors",
    content: "Hume AI"
  }, {
    heading: "tts-vendors",
    content: "Microsoft Azure"
  }, {
    heading: "tts-vendors",
    content: "Minimax\\*"
  }, {
    heading: "tts-vendors",
    content: "OpenAI\\*"
  }, {
    heading: "mllm-vendors",
    content: "Google Gemini Live"
  }, {
    heading: "mllm-vendors",
    content: "OpenAI Realtime API"
  }, {
    heading: "mllm-vendors",
    content: "OpenAI GPT-Live"
  }, {
    heading: "mllm-vendors",
    content: "xAI Grok"
  }],
  headings: [{
    id: "asr-vendors",
    content: "ASR vendors"
  }, {
    id: "llm-vendors",
    content: "LLM vendors"
  }, {
    id: "tts-vendors",
    content: "TTS vendors"
  }, {
    id: "mllm-vendors",
    content: "MLLM vendors"
  }]
};
export let toc = [{
  depth: 2,
  url: "#asr-vendors",
  title: _jsx(_Fragment, {
    children: "ASR vendors"
  })
}, {
  depth: 2,
  url: "#llm-vendors",
  title: _jsx(_Fragment, {
    children: "LLM vendors"
  })
}, {
  depth: 2,
  url: "#tts-vendors",
  title: _jsx(_Fragment, {
    children: "TTS vendors"
  })
}, {
  depth: 2,
  url: "#mllm-vendors",
  title: _jsx(_Fragment, {
    children: "MLLM vendors"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["Agent Studio currently supports the following providers. Vendors marked with * support Agora Managed Key. See ", _jsx(_components.a, {
        href: "../../reference/pricing",
        children: "Pricing"
      }), " for usage costs."]
    }), `
`, _jsx(_components.h2, {
      id: "asr-vendors",
      children: "ASR vendors"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/asr/ares",
          children: "ARES*"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/asr/deepgram",
          children: "Deepgram*"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/asr/microsoft",
          children: "Microsoft Azure"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "llm-vendors",
      children: "LLM vendors"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/llm/azure-openai",
          children: "Azure OpenAI"
        })
      }), `
`, _jsx(_components.li, {
        children: "Cerebras"
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/llm/claude",
          children: "Claude Anthropic"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/llm/gemini",
          children: "Google Gemini"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/llm/google-vertex-ai",
          children: "Google Vertex AI"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/llm/groq",
          children: "Groq"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/llm/openai",
          children: "OpenAI*"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "tts-vendors",
      children: "TTS vendors"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/tts/cartesia",
          children: "Cartesia"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/tts/elevenlabs",
          children: "ElevenLabs"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/tts/humeai",
          children: "Hume AI"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/tts/microsoft",
          children: "Microsoft Azure"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/tts/minimax",
          children: "Minimax*"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/tts/openai",
          children: "OpenAI*"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "mllm-vendors",
      children: "MLLM vendors"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/mllm/gemini.mdx",
          children: "Google Gemini Live"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/mllm/openai",
          children: "OpenAI Realtime API"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/mllm/openai-gpt-live.mdx",
          children: "OpenAI GPT-Live"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../models/mllm/xai.mdx",
          children: "xAI Grok"
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
