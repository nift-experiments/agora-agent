import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Pricing",
  description: "Information on Conversational AI Engine usage and billing."
};
export let _markdown = `

This page describes how Agora calculates and bills for Conversational AI Engine usage.

When you use Conversational AI Engine in your project, Agora charges a monthly fee based on your usage across all projects under your developer account. At the end of each month, the free quota is subtracted from your total usage, and the remaining minutes are multiplied by the unit price to calculate your bill, rounded to two decimal places. For general billing information, see [Billing](../../introduction/billing).

<CalloutContainer type="info">
  <CalloutTitle>
    Info
  </CalloutTitle>

  <CalloutDescription>
    If you have signed a sales contract with Agora, your billing follows the terms in your contract.
  </CalloutDescription>
</CalloutContainer>

## Unit price [#unit-price]

Creating a Conversational AI Engine instance using the REST API and joining a channel incurs an audio task fee at the following rate:

| Usage Type                          | Pricing (USD / minute) | Free Minutes               |
| ----------------------------------- | ---------------------: | -------------------------- |
| Conversational AI Engine Audio Task |                 0.10\\* | First 300 minutes are free |

\\* The unit price includes usage of selected ASR, LLM, and TTS models. You are charged the same price even if you bring your own key (BYOK).

Usage of ASR, LLM, and TTS providers is included in the unit price when using an Agora managed key. Agora provides and manages the API keys for the following providers:

* **ASR**
  * ARES
  * Deepgram nova-2
  * Deepgram nova-3
* **LLM**
  * OpenAI GPT-4o-mini
  * OpenAI GPT-4.1-mini
  * OpenAI GPT-5-nano
  * OpenAI GPT-5-mini
* **TTS**
  * MiniMax 2.6 Turbo
  * MiniMax 2.8 Turbo
  * OpenAI TTS-1

## Examples [#examples]

The following examples demonstrate how billing is calculated for different Conversational AI Engine configurations.

### Using ASR, LLM, and TTS managed by Agora [#using-asr-llm-and-tts-managed-by-agora]

User A joins a channel and starts a voice conversation with an instance created by Conversational AI Engine. The interaction lasts for 10 minutes. User A and the Conversational AI Engine instance exit the channel at the same time. Agora calculates the cost for this session as follows:

| Usage Type                                                 | Duration (minutes) | Unit Price | Service Cost (USD) |
| ---------------------------------------------------------- | -----------------: | ---------: | -----------------: |
| User A: Audio RTC                                          |                 10 |    0.00099 |             0.0099 |
| Conversational AI Engine Audio Task                        |                 10 |       0.10 |               1.00 |
| ASR: ARES, LLM: OpenAI GPT-4o-mini, TTS: MiniMax 2.8 Turbo |                 10 |       0.00 |               0.00 |

Total cost: 1.0099 USD
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page describes how Agora calculates and bills for Conversational AI Engine usage."
  }, {
    heading: undefined,
    content: "When you use Conversational AI Engine in your project, Agora charges a monthly fee based on your usage across all projects under your developer account. At the end of each month, the free quota is subtracted from your total usage, and the remaining minutes are multiplied by the unit price to calculate your bill, rounded to two decimal places. For general billing information, see Billing."
  }, {
    heading: undefined,
    content: "If you have signed a sales contract with Agora, your billing follows the terms in your contract."
  }, {
    heading: "unit-price",
    content: "Creating a Conversational AI Engine instance using the REST API and joining a channel incurs an audio task fee at the following rate:"
  }, {
    heading: "unit-price",
    content: "Usage Type"
  }, {
    heading: "unit-price",
    content: "Pricing (USD / minute)"
  }, {
    heading: "unit-price",
    content: "Free Minutes"
  }, {
    heading: "unit-price",
    content: "Conversational AI Engine Audio Task"
  }, {
    heading: "unit-price",
    content: "0.10\\*"
  }, {
    heading: "unit-price",
    content: "First 300 minutes are free"
  }, {
    heading: "unit-price",
    content: "\\* The unit price includes usage of selected ASR, LLM, and TTS models. You are charged the same price even if you bring your own key (BYOK)."
  }, {
    heading: "unit-price",
    content: "Usage of ASR, LLM, and TTS providers is included in the unit price when using an Agora managed key. Agora provides and manages the API keys for the following providers:"
  }, {
    heading: "unit-price",
    content: "**ASR**"
  }, {
    heading: "unit-price",
    content: "ARES"
  }, {
    heading: "unit-price",
    content: "Deepgram nova-2"
  }, {
    heading: "unit-price",
    content: "Deepgram nova-3"
  }, {
    heading: "unit-price",
    content: "**LLM**"
  }, {
    heading: "unit-price",
    content: "OpenAI GPT-4o-mini"
  }, {
    heading: "unit-price",
    content: "OpenAI GPT-4.1-mini"
  }, {
    heading: "unit-price",
    content: "OpenAI GPT-5-nano"
  }, {
    heading: "unit-price",
    content: "OpenAI GPT-5-mini"
  }, {
    heading: "unit-price",
    content: "**TTS**"
  }, {
    heading: "unit-price",
    content: "MiniMax 2.6 Turbo"
  }, {
    heading: "unit-price",
    content: "MiniMax 2.8 Turbo"
  }, {
    heading: "unit-price",
    content: "OpenAI TTS-1"
  }, {
    heading: "examples",
    content: "The following examples demonstrate how billing is calculated for different Conversational AI Engine configurations."
  }, {
    heading: "using-asr-llm-and-tts-managed-by-agora",
    content: "User A joins a channel and starts a voice conversation with an instance created by Conversational AI Engine. The interaction lasts for 10 minutes. User A and the Conversational AI Engine instance exit the channel at the same time. Agora calculates the cost for this session as follows:"
  }, {
    heading: "using-asr-llm-and-tts-managed-by-agora",
    content: "Usage Type"
  }, {
    heading: "using-asr-llm-and-tts-managed-by-agora",
    content: "Duration (minutes)"
  }, {
    heading: "using-asr-llm-and-tts-managed-by-agora",
    content: "Unit Price"
  }, {
    heading: "using-asr-llm-and-tts-managed-by-agora",
    content: "Service Cost (USD)"
  }, {
    heading: "using-asr-llm-and-tts-managed-by-agora",
    content: "User A: Audio RTC"
  }, {
    heading: "using-asr-llm-and-tts-managed-by-agora",
    content: "10"
  }, {
    heading: "using-asr-llm-and-tts-managed-by-agora",
    content: "0.00099"
  }, {
    heading: "using-asr-llm-and-tts-managed-by-agora",
    content: "0.0099"
  }, {
    heading: "using-asr-llm-and-tts-managed-by-agora",
    content: "Conversational AI Engine Audio Task"
  }, {
    heading: "using-asr-llm-and-tts-managed-by-agora",
    content: "10"
  }, {
    heading: "using-asr-llm-and-tts-managed-by-agora",
    content: "0.10"
  }, {
    heading: "using-asr-llm-and-tts-managed-by-agora",
    content: "1.00"
  }, {
    heading: "using-asr-llm-and-tts-managed-by-agora",
    content: "ASR: ARES, LLM: OpenAI GPT-4o-mini, TTS: MiniMax 2.8 Turbo"
  }, {
    heading: "using-asr-llm-and-tts-managed-by-agora",
    content: "10"
  }, {
    heading: "using-asr-llm-and-tts-managed-by-agora",
    content: "0.00"
  }, {
    heading: "using-asr-llm-and-tts-managed-by-agora",
    content: "0.00"
  }, {
    heading: "using-asr-llm-and-tts-managed-by-agora",
    content: "Total cost: 1.0099 USD"
  }],
  headings: [{
    id: "unit-price",
    content: "Unit price"
  }, {
    id: "examples",
    content: "Examples"
  }, {
    id: "using-asr-llm-and-tts-managed-by-agora",
    content: "Using ASR, LLM, and TTS managed by Agora"
  }]
};
export let toc = [{
  depth: 2,
  url: "#unit-price",
  title: _jsx(_Fragment, {
    children: "Unit price"
  })
}, {
  depth: 2,
  url: "#examples",
  title: _jsx(_Fragment, {
    children: "Examples"
  })
}, {
  depth: 3,
  url: "#using-asr-llm-and-tts-managed-by-agora",
  title: _jsx(_Fragment, {
    children: "Using ASR, LLM, and TTS managed by Agora"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page describes how Agora calculates and bills for Conversational AI Engine usage."
    }), `
`, _jsxs(_components.p, {
      children: ["When you use Conversational AI Engine in your project, Agora charges a monthly fee based on your usage across all projects under your developer account. At the end of each month, the free quota is subtracted from your total usage, and the remaining minutes are multiplied by the unit price to calculate your bill, rounded to two decimal places. For general billing information, see ", _jsx(_components.a, {
        href: "../../introduction/billing",
        children: "Billing"
      }), "."]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Info"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "If you have signed a sales contract with Agora, your billing follows the terms in your contract."
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "unit-price",
      children: "Unit price"
    }), `
`, _jsx(_components.p, {
      children: "Creating a Conversational AI Engine instance using the REST API and joining a channel incurs an audio task fee at the following rate:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Usage Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Pricing (USD / minute)"
          }), _jsx(_components.th, {
            children: "Free Minutes"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Conversational AI Engine Audio Task"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0.10*"
          }), _jsx(_components.td, {
            children: "First 300 minutes are free"
          })]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "* The unit price includes usage of selected ASR, LLM, and TTS models. You are charged the same price even if you bring your own key (BYOK)."
    }), `
`, _jsx(_components.p, {
      children: "Usage of ASR, LLM, and TTS providers is included in the unit price when using an Agora managed key. Agora provides and manages the API keys for the following providers:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "ASR"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "ARES"
          }), `
`, _jsx(_components.li, {
            children: "Deepgram nova-2"
          }), `
`, _jsx(_components.li, {
            children: "Deepgram nova-3"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "LLM"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "OpenAI GPT-4o-mini"
          }), `
`, _jsx(_components.li, {
            children: "OpenAI GPT-4.1-mini"
          }), `
`, _jsx(_components.li, {
            children: "OpenAI GPT-5-nano"
          }), `
`, _jsx(_components.li, {
            children: "OpenAI GPT-5-mini"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "TTS"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "MiniMax 2.6 Turbo"
          }), `
`, _jsx(_components.li, {
            children: "MiniMax 2.8 Turbo"
          }), `
`, _jsx(_components.li, {
            children: "OpenAI TTS-1"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "examples",
      children: "Examples"
    }), `
`, _jsx(_components.p, {
      children: "The following examples demonstrate how billing is calculated for different Conversational AI Engine configurations."
    }), `
`, _jsx(_components.h3, {
      id: "using-asr-llm-and-tts-managed-by-agora",
      children: "Using ASR, LLM, and TTS managed by Agora"
    }), `
`, _jsx(_components.p, {
      children: "User A joins a channel and starts a voice conversation with an instance created by Conversational AI Engine. The interaction lasts for 10 minutes. User A and the Conversational AI Engine instance exit the channel at the same time. Agora calculates the cost for this session as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Usage Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Duration (minutes)"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Unit Price"
          }), _jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Service Cost (USD)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "User A: Audio RTC"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0.00099"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0.0099"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Conversational AI Engine Audio Task"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0.10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "1.00"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "ASR: ARES, LLM: OpenAI GPT-4o-mini, TTS: MiniMax 2.8 Turbo"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0.00"
          }), _jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "0.00"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "Total cost: 1.0099 USD"
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
