import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Prompt design",
  description: "Best practices and patterns for writing effective system prompts for your AI voice agent."
};
export let _markdown = `

The system prompt is the most important factor in determining how your agent behaves. A well-structured prompt produces consistent, predictable responses.

This page covers practical patterns for writing effective system prompts for voice agents.

## Prompt structure [#prompt-structure]

A clear structure helps the LLM understand its role, objectives, and constraints. Use the following sections as a starting point:

\`\`\`
ROLE & CONTEXT:
You are an appointment reminder assistant for {{clinic_name}}.

OBJECTIVES:
- Confirm whether the patient will attend their appointment
- Reschedule if they cannot attend
- Log the outcome for clinic records

TONE & PERSONALITY:
- Professional but friendly
- Patient with unclear responses
- Keep responses short and clear
\`\`\`

### Role and context [#role-and-context]

Define who the agent is and what situation it is operating in. Include the business name, the agent's purpose, and any relevant background the LLM needs to handle the conversation correctly. Use [template variables](#template-variables) to personalize this section per caller.

### Objectives [#objectives]

List the specific tasks the agent should accomplish during the call. Keep objectives concrete and ordered by priority. The LLM will attempt to complete them in order unless the conversation takes a different path.

### Tone and personality [#tone-and-personality]

Define how the agent should communicate. For voice agents, shorter and clearer responses work better than long explanations. Specify how the agent should handle edge cases such as unclear input, silence, or frustrated callers.

## Template variables [#template-variables]

Template variables allow you to personalize the system prompt, greeting message, and failure message with dynamic values at the start of each call. Define variables in your prompt text using the syntax \`{{variable_name}}\`, then pass the corresponding values when starting a call through a campaign contact list.

For example, a system prompt for a clinic reminder agent might use:

\`\`\`
You are an appointment reminder assistant for {{clinic_name}}.
The patient's name is {{patient_name}} and their appointment is on {{appointment_date}}.
\`\`\`

When the agent starts a call, the Conversational AI engine replaces each \`{{variable_name}}\` with the value provided for that session.

You can use template variables in the following fields:

* System prompt
* Greeting message
* Failure message

### Pass variable values [#pass-variable-values]

For campaigns, add variable values as columns in your contact list CSV. Each column name maps to a variable name in your prompts. See [Contact list format](../deploy/campaign#contact-list-format) for details.

## Tips for voice agents [#tips-for-voice-agents]

Voice agents have different constraints than text-based chatbots. Keep the following in mind when writing prompts:

* **Keep responses short**: Callers lose attention quickly. Instruct the agent to keep responses to one or two sentences where possible.
* **Avoid lists and formatting**: The TTS component reads text aloud. Bullet points, headers, and markdown formatting produce unnatural speech.
* **Handle silence explicitly**: Instruct the agent what to do if the caller does not respond. For example: \`If the caller does not respond within a few seconds, repeat your last question once before ending the call.\`
* **Define a clear exit condition**: Specify when and how the agent should end the call. For example: \`End the call politely once the appointment outcome is confirmed.\`
* **Test with real scenarios**: Write 2-3 realistic conversation scenarios before testing. This helps you identify gaps in your prompt before they appear in production.

## Iterating on prompts [#iterating-on-prompts]

Make small changes and test after each one. Changing multiple things at once makes it difficult to identify what caused a change in behavior.

The recommended iteration loop is:

1. Edit the system prompt or greeting message.
2. Start a test session in the agent editor.
3. Simulate 2-3 conversation scenarios.
4. Review the transcript for unexpected responses.
5. Refine and repeat.

See [Test your agent](test-agent) for details on using the test interface.

## Next steps [#next-steps]

* [Customize your agent](customize-agent): Configure ASR, LLM, and TTS settings in the agent editor
* [Test your agent](test-agent): Test and troubleshoot your agent before deployment
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The system prompt is the most important factor in determining how your agent behaves. A well-structured prompt produces consistent, predictable responses."
  }, {
    heading: undefined,
    content: "This page covers practical patterns for writing effective system prompts for voice agents."
  }, {
    heading: "prompt-structure",
    content: "A clear structure helps the LLM understand its role, objectives, and constraints. Use the following sections as a starting point:"
  }, {
    heading: "role-and-context",
    content: "Define who the agent is and what situation it is operating in. Include the business name, the agent's purpose, and any relevant background the LLM needs to handle the conversation correctly. Use template variables to personalize this section per caller."
  }, {
    heading: "objectives",
    content: "List the specific tasks the agent should accomplish during the call. Keep objectives concrete and ordered by priority. The LLM will attempt to complete them in order unless the conversation takes a different path."
  }, {
    heading: "tone-and-personality",
    content: "Define how the agent should communicate. For voice agents, shorter and clearer responses work better than long explanations. Specify how the agent should handle edge cases such as unclear input, silence, or frustrated callers."
  }, {
    heading: "template-variables",
    content: "Template variables allow you to personalize the system prompt, greeting message, and failure message with dynamic values at the start of each call. Define variables in your prompt text using the syntax `{{variable_name}}`, then pass the corresponding values when starting a call through a campaign contact list."
  }, {
    heading: "template-variables",
    content: "For example, a system prompt for a clinic reminder agent might use:"
  }, {
    heading: "template-variables",
    content: "When the agent starts a call, the Conversational AI engine replaces each `{{variable_name}}` with the value provided for that session."
  }, {
    heading: "template-variables",
    content: "You can use template variables in the following fields:"
  }, {
    heading: "template-variables",
    content: "System prompt"
  }, {
    heading: "template-variables",
    content: "Greeting message"
  }, {
    heading: "template-variables",
    content: "Failure message"
  }, {
    heading: "pass-variable-values",
    content: "For campaigns, add variable values as columns in your contact list CSV. Each column name maps to a variable name in your prompts. See Contact list format for details."
  }, {
    heading: "tips-for-voice-agents",
    content: "Voice agents have different constraints than text-based chatbots. Keep the following in mind when writing prompts:"
  }, {
    heading: "tips-for-voice-agents",
    content: "**Keep responses short**: Callers lose attention quickly. Instruct the agent to keep responses to one or two sentences where possible."
  }, {
    heading: "tips-for-voice-agents",
    content: "**Avoid lists and formatting**: The TTS component reads text aloud. Bullet points, headers, and markdown formatting produce unnatural speech."
  }, {
    heading: "tips-for-voice-agents",
    content: "**Handle silence explicitly**: Instruct the agent what to do if the caller does not respond. For example: `If the caller does not respond within a few seconds, repeat your last question once before ending the call.`"
  }, {
    heading: "tips-for-voice-agents",
    content: "**Define a clear exit condition**: Specify when and how the agent should end the call. For example: `End the call politely once the appointment outcome is confirmed.`"
  }, {
    heading: "tips-for-voice-agents",
    content: "**Test with real scenarios**: Write 2-3 realistic conversation scenarios before testing. This helps you identify gaps in your prompt before they appear in production."
  }, {
    heading: "iterating-on-prompts",
    content: "Make small changes and test after each one. Changing multiple things at once makes it difficult to identify what caused a change in behavior."
  }, {
    heading: "iterating-on-prompts",
    content: "The recommended iteration loop is:"
  }, {
    heading: "iterating-on-prompts",
    content: "Edit the system prompt or greeting message."
  }, {
    heading: "iterating-on-prompts",
    content: "Start a test session in the agent editor."
  }, {
    heading: "iterating-on-prompts",
    content: "Simulate 2-3 conversation scenarios."
  }, {
    heading: "iterating-on-prompts",
    content: "Review the transcript for unexpected responses."
  }, {
    heading: "iterating-on-prompts",
    content: "Refine and repeat."
  }, {
    heading: "iterating-on-prompts",
    content: "See Test your agent for details on using the test interface."
  }, {
    heading: "next-steps",
    content: "Customize your agent: Configure ASR, LLM, and TTS settings in the agent editor"
  }, {
    heading: "next-steps",
    content: "Test your agent: Test and troubleshoot your agent before deployment"
  }],
  headings: [{
    id: "prompt-structure",
    content: "Prompt structure"
  }, {
    id: "role-and-context",
    content: "Role and context"
  }, {
    id: "objectives",
    content: "Objectives"
  }, {
    id: "tone-and-personality",
    content: "Tone and personality"
  }, {
    id: "template-variables",
    content: "Template variables"
  }, {
    id: "pass-variable-values",
    content: "Pass variable values"
  }, {
    id: "tips-for-voice-agents",
    content: "Tips for voice agents"
  }, {
    id: "iterating-on-prompts",
    content: "Iterating on prompts"
  }, {
    id: "next-steps",
    content: "Next steps"
  }]
};
export let toc = [{
  depth: 2,
  url: "#prompt-structure",
  title: _jsx(_Fragment, {
    children: "Prompt structure"
  })
}, {
  depth: 3,
  url: "#role-and-context",
  title: _jsx(_Fragment, {
    children: "Role and context"
  })
}, {
  depth: 3,
  url: "#objectives",
  title: _jsx(_Fragment, {
    children: "Objectives"
  })
}, {
  depth: 3,
  url: "#tone-and-personality",
  title: _jsx(_Fragment, {
    children: "Tone and personality"
  })
}, {
  depth: 2,
  url: "#template-variables",
  title: _jsx(_Fragment, {
    children: "Template variables"
  })
}, {
  depth: 3,
  url: "#pass-variable-values",
  title: _jsx(_Fragment, {
    children: "Pass variable values"
  })
}, {
  depth: 2,
  url: "#tips-for-voice-agents",
  title: _jsx(_Fragment, {
    children: "Tips for voice agents"
  })
}, {
  depth: 2,
  url: "#iterating-on-prompts",
  title: _jsx(_Fragment, {
    children: "Iterating on prompts"
  })
}, {
  depth: 2,
  url: "#next-steps",
  title: _jsx(_Fragment, {
    children: "Next steps"
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
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The system prompt is the most important factor in determining how your agent behaves. A well-structured prompt produces consistent, predictable responses."
    }), `
`, _jsx(_components.p, {
      children: "This page covers practical patterns for writing effective system prompts for voice agents."
    }), `
`, _jsx(_components.h2, {
      id: "prompt-structure",
      children: "Prompt structure"
    }), `
`, _jsx(_components.p, {
      children: "A clear structure helps the LLM understand its role, objectives, and constraints. Use the following sections as a starting point:"
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
              children: "ROLE & CONTEXT:"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "You are an appointment reminder assistant for {{clinic_name}}."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {})
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "OBJECTIVES:"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "- Confirm whether the patient will attend their appointment"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "- Reschedule if they cannot attend"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "- Log the outcome for clinic records"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {})
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "TONE & PERSONALITY:"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "- Professional but friendly"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "- Patient with unclear responses"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "- Keep responses short and clear"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "role-and-context",
      children: "Role and context"
    }), `
`, _jsxs(_components.p, {
      children: ["Define who the agent is and what situation it is operating in. Include the business name, the agent's purpose, and any relevant background the LLM needs to handle the conversation correctly. Use ", _jsx(_components.a, {
        href: "#template-variables",
        children: "template variables"
      }), " to personalize this section per caller."]
    }), `
`, _jsx(_components.h3, {
      id: "objectives",
      children: "Objectives"
    }), `
`, _jsx(_components.p, {
      children: "List the specific tasks the agent should accomplish during the call. Keep objectives concrete and ordered by priority. The LLM will attempt to complete them in order unless the conversation takes a different path."
    }), `
`, _jsx(_components.h3, {
      id: "tone-and-personality",
      children: "Tone and personality"
    }), `
`, _jsx(_components.p, {
      children: "Define how the agent should communicate. For voice agents, shorter and clearer responses work better than long explanations. Specify how the agent should handle edge cases such as unclear input, silence, or frustrated callers."
    }), `
`, _jsx(_components.h2, {
      id: "template-variables",
      children: "Template variables"
    }), `
`, _jsxs(_components.p, {
      children: ["Template variables allow you to personalize the system prompt, greeting message, and failure message with dynamic values at the start of each call. Define variables in your prompt text using the syntax ", _jsx(_components.code, {
        children: "{{variable_name}}"
      }), ", then pass the corresponding values when starting a call through a campaign contact list."]
    }), `
`, _jsx(_components.p, {
      children: "For example, a system prompt for a clinic reminder agent might use:"
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
              children: "You are an appointment reminder assistant for {{clinic_name}}."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "The patient's name is {{patient_name}} and their appointment is on {{appointment_date}}."
            })
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["When the agent starts a call, the Conversational AI engine replaces each ", _jsx(_components.code, {
        children: "{{variable_name}}"
      }), " with the value provided for that session."]
    }), `
`, _jsx(_components.p, {
      children: "You can use template variables in the following fields:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "System prompt"
      }), `
`, _jsx(_components.li, {
        children: "Greeting message"
      }), `
`, _jsx(_components.li, {
        children: "Failure message"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "pass-variable-values",
      children: "Pass variable values"
    }), `
`, _jsxs(_components.p, {
      children: ["For campaigns, add variable values as columns in your contact list CSV. Each column name maps to a variable name in your prompts. See ", _jsx(_components.a, {
        href: "../deploy/campaign#contact-list-format",
        children: "Contact list format"
      }), " for details."]
    }), `
`, _jsx(_components.h2, {
      id: "tips-for-voice-agents",
      children: "Tips for voice agents"
    }), `
`, _jsx(_components.p, {
      children: "Voice agents have different constraints than text-based chatbots. Keep the following in mind when writing prompts:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Keep responses short"
        }), ": Callers lose attention quickly. Instruct the agent to keep responses to one or two sentences where possible."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Avoid lists and formatting"
        }), ": The TTS component reads text aloud. Bullet points, headers, and markdown formatting produce unnatural speech."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Handle silence explicitly"
        }), ": Instruct the agent what to do if the caller does not respond. For example: ", _jsx(_components.code, {
          children: "If the caller does not respond within a few seconds, repeat your last question once before ending the call."
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Define a clear exit condition"
        }), ": Specify when and how the agent should end the call. For example: ", _jsx(_components.code, {
          children: "End the call politely once the appointment outcome is confirmed."
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Test with real scenarios"
        }), ": Write 2-3 realistic conversation scenarios before testing. This helps you identify gaps in your prompt before they appear in production."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "iterating-on-prompts",
      children: "Iterating on prompts"
    }), `
`, _jsx(_components.p, {
      children: "Make small changes and test after each one. Changing multiple things at once makes it difficult to identify what caused a change in behavior."
    }), `
`, _jsx(_components.p, {
      children: "The recommended iteration loop is:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Edit the system prompt or greeting message."
      }), `
`, _jsx(_components.li, {
        children: "Start a test session in the agent editor."
      }), `
`, _jsx(_components.li, {
        children: "Simulate 2-3 conversation scenarios."
      }), `
`, _jsx(_components.li, {
        children: "Review the transcript for unexpected responses."
      }), `
`, _jsx(_components.li, {
        children: "Refine and repeat."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["See ", _jsx(_components.a, {
        href: "test-agent",
        children: "Test your agent"
      }), " for details on using the test interface."]
    }), `
`, _jsx(_components.h2, {
      id: "next-steps",
      children: "Next steps"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "customize-agent",
          children: "Customize your agent"
        }), ": Configure ASR, LLM, and TTS settings in the agent editor"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "test-agent",
          children: "Test your agent"
        }), ": Test and troubleshoot your agent before deployment"]
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
