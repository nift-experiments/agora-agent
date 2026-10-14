import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Concierge",
  description: "Use Concierge to build, debug, analyze, and test agent workflows in a project-scoped workspace."
};
export let _markdown = `

Concierge is a project-scoped workspace for exploring, configuring, and troubleshooting your agents using natural language, without navigating each page individually. Use it to build and refine agent workflows, investigate issues, review your project setup, or test changes before deployment.

## Open Concierge [#open-concierge]

1. In Agora Console, select your project from the project dropdown at the top of the page.
2. From the page header, select **Concierge**. An AI Chat panel appears.
3. Start a new thread, or continue an existing thread. Each thread maintains its own conversation history.

<img alt="Concierge UI" src="https://assets-docs.agora.io/images/console/concierge.png" width="400" />

## Build and optimize [#build-and-optimize]

Use concierge for the following tasks:

* **Build**: Create or refine your agent setup.
* **Debug**: Investigate errors, misconfigurations, or unexpected behavior.
* **Analyze**: Inspect project state, resources, or workflow design.
* **Test**: Validate behavior before you deploy changes.

You can also start a conversation with a custom prompt, for example:

\`\`\`
Help me configure an agent for appointment reminders.
Why is my agent not using HubSpot during test calls?
Review this project and tell me which integrations are attached to my agent.
Help me prepare an outbound campaign with CSV variables.
\`\`\`

For better results:

* State your goal, agent name, and expected outcome.
* Name the exact resource, such as a campaign or integration name.
* Use short, iterative requests instead of one large prompt when debugging.
* Re-run your request in Test mode after making changes.

## Upload files [#upload-files]

Concierge supports workflows that involve uploaded files, such as knowledge base documents and campaign CSVs. When Concierge needs a file, it prompts you to upload it, then continues the workflow.

## Troubleshoot [#troubleshoot]

If you don't get the desired results, check the following:

| Issue                              | Solution                                                  |
| ---------------------------------- | --------------------------------------------------------- |
| Concierge cannot complete the task | Check that the required project resources exist.          |
| Results are too broad              | Include the exact agent, campaign, or integration name.   |
| A file-based workflow stalls       | Confirm the upload finished, then retry your instruction. |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Concierge is a project-scoped workspace for exploring, configuring, and troubleshooting your agents using natural language, without navigating each page individually. Use it to build and refine agent workflows, investigate issues, review your project setup, or test changes before deployment."
  }, {
    heading: "open-concierge",
    content: "In Agora Console, select your project from the project dropdown at the top of the page."
  }, {
    heading: "open-concierge",
    content: "From the page header, select **Concierge**. An AI Chat panel appears."
  }, {
    heading: "open-concierge",
    content: "Start a new thread, or continue an existing thread. Each thread maintains its own conversation history."
  }, {
    heading: "build-and-optimize",
    content: "Use concierge for the following tasks:"
  }, {
    heading: "build-and-optimize",
    content: "**Build**: Create or refine your agent setup."
  }, {
    heading: "build-and-optimize",
    content: "**Debug**: Investigate errors, misconfigurations, or unexpected behavior."
  }, {
    heading: "build-and-optimize",
    content: "**Analyze**: Inspect project state, resources, or workflow design."
  }, {
    heading: "build-and-optimize",
    content: "**Test**: Validate behavior before you deploy changes."
  }, {
    heading: "build-and-optimize",
    content: "You can also start a conversation with a custom prompt, for example:"
  }, {
    heading: "build-and-optimize",
    content: "For better results:"
  }, {
    heading: "build-and-optimize",
    content: "State your goal, agent name, and expected outcome."
  }, {
    heading: "build-and-optimize",
    content: "Name the exact resource, such as a campaign or integration name."
  }, {
    heading: "build-and-optimize",
    content: "Use short, iterative requests instead of one large prompt when debugging."
  }, {
    heading: "build-and-optimize",
    content: "Re-run your request in Test mode after making changes."
  }, {
    heading: "upload-files",
    content: "Concierge supports workflows that involve uploaded files, such as knowledge base documents and campaign CSVs. When Concierge needs a file, it prompts you to upload it, then continues the workflow."
  }, {
    heading: "troubleshoot",
    content: "If you don't get the desired results, check the following:"
  }, {
    heading: "troubleshoot",
    content: "Issue"
  }, {
    heading: "troubleshoot",
    content: "Solution"
  }, {
    heading: "troubleshoot",
    content: "Concierge cannot complete the task"
  }, {
    heading: "troubleshoot",
    content: "Check that the required project resources exist."
  }, {
    heading: "troubleshoot",
    content: "Results are too broad"
  }, {
    heading: "troubleshoot",
    content: "Include the exact agent, campaign, or integration name."
  }, {
    heading: "troubleshoot",
    content: "A file-based workflow stalls"
  }, {
    heading: "troubleshoot",
    content: "Confirm the upload finished, then retry your instruction."
  }],
  headings: [{
    id: "open-concierge",
    content: "Open Concierge"
  }, {
    id: "build-and-optimize",
    content: "Build and optimize"
  }, {
    id: "upload-files",
    content: "Upload files"
  }, {
    id: "troubleshoot",
    content: "Troubleshoot"
  }]
};
export let toc = [{
  depth: 2,
  url: "#open-concierge",
  title: _jsx(_Fragment, {
    children: "Open Concierge"
  })
}, {
  depth: 2,
  url: "#build-and-optimize",
  title: _jsx(_Fragment, {
    children: "Build and optimize"
  })
}, {
  depth: 2,
  url: "#upload-files",
  title: _jsx(_Fragment, {
    children: "Upload files"
  })
}, {
  depth: 2,
  url: "#troubleshoot",
  title: _jsx(_Fragment, {
    children: "Troubleshoot"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Concierge is a project-scoped workspace for exploring, configuring, and troubleshooting your agents using natural language, without navigating each page individually. Use it to build and refine agent workflows, investigate issues, review your project setup, or test changes before deployment."
    }), `
`, _jsx(_components.h2, {
      id: "open-concierge",
      children: "Open Concierge"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "In Agora Console, select your project from the project dropdown at the top of the page."
      }), `
`, _jsxs(_components.li, {
        children: ["From the page header, select ", _jsx(_components.strong, {
          children: "Concierge"
        }), ". An AI Chat panel appears."]
      }), `
`, _jsx(_components.li, {
        children: "Start a new thread, or continue an existing thread. Each thread maintains its own conversation history."
      }), `
`]
    }), `
`, _jsx("img", {
      alt: "Concierge UI",
      src: "https://assets-docs.agora.io/images/console/concierge.png",
      width: "400"
    }), `
`, _jsx(_components.h2, {
      id: "build-and-optimize",
      children: "Build and optimize"
    }), `
`, _jsx(_components.p, {
      children: "Use concierge for the following tasks:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Build"
        }), ": Create or refine your agent setup."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Debug"
        }), ": Investigate errors, misconfigurations, or unexpected behavior."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Analyze"
        }), ": Inspect project state, resources, or workflow design."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Test"
        }), ": Validate behavior before you deploy changes."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "You can also start a conversation with a custom prompt, for example:"
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
              children: "Help me configure an agent for appointment reminders."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "Why is my agent not using HubSpot during test calls?"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "Review this project and tell me which integrations are attached to my agent."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "Help me prepare an outbound campaign with CSV variables."
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "For better results:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "State your goal, agent name, and expected outcome."
      }), `
`, _jsx(_components.li, {
        children: "Name the exact resource, such as a campaign or integration name."
      }), `
`, _jsx(_components.li, {
        children: "Use short, iterative requests instead of one large prompt when debugging."
      }), `
`, _jsx(_components.li, {
        children: "Re-run your request in Test mode after making changes."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "upload-files",
      children: "Upload files"
    }), `
`, _jsx(_components.p, {
      children: "Concierge supports workflows that involve uploaded files, such as knowledge base documents and campaign CSVs. When Concierge needs a file, it prompts you to upload it, then continues the workflow."
    }), `
`, _jsx(_components.h2, {
      id: "troubleshoot",
      children: "Troubleshoot"
    }), `
`, _jsx(_components.p, {
      children: "If you don't get the desired results, check the following:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Issue"
          }), _jsx(_components.th, {
            children: "Solution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Concierge cannot complete the task"
          }), _jsx(_components.td, {
            children: "Check that the required project resources exist."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Results are too broad"
          }), _jsx(_components.td, {
            children: "Include the exact agent, campaign, or integration name."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "A file-based workflow stalls"
          }), _jsx(_components.td, {
            children: "Confirm the upload finished, then retry your instruction."
          })]
        })]
      })]
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
