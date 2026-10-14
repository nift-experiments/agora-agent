import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Support",
  description: "Submit support tickets and track system status for Agora products and services."
};
export let _markdown = `

## Submit a ticket [#submit-a-ticket]

To ask Agora Support a question:

1. Log in to Agora Console.
2. Click **Get Support** > **Create Support Ticket**.
3. Type your question or keywords to see whether the issue has already been answered.
4. If you cannot find an answer, select a category and submit a ticket to customer support.

You can track ticket status under **Tickets**.

## Status page [#status-page]

Agora Status Page provides up-to-date information about product and service status, including:

* historical service stability for the past 90 days
* real-time quality data for the past 24 hours
* maintenance events and disruptions
* RSS event subscriptions

You can access the status page directly at [status.agora.io](https://status.agora.io/).

The status dashboard currently provides status information for:

* Real-Time Communication
* Cloud Recording
* Agora Chat
* Interactive Whiteboard
`;
export let structuredData = {
  contents: [{
    heading: "submit-a-ticket",
    content: "To ask Agora Support a question:"
  }, {
    heading: "submit-a-ticket",
    content: "Log in to Agora Console."
  }, {
    heading: "submit-a-ticket",
    content: "Click **Get Support** > **Create Support Ticket**."
  }, {
    heading: "submit-a-ticket",
    content: "Type your question or keywords to see whether the issue has already been answered."
  }, {
    heading: "submit-a-ticket",
    content: "If you cannot find an answer, select a category and submit a ticket to customer support."
  }, {
    heading: "submit-a-ticket",
    content: "You can track ticket status under **Tickets**."
  }, {
    heading: "status-page",
    content: "Agora Status Page provides up-to-date information about product and service status, including:"
  }, {
    heading: "status-page",
    content: "historical service stability for the past 90 days"
  }, {
    heading: "status-page",
    content: "real-time quality data for the past 24 hours"
  }, {
    heading: "status-page",
    content: "maintenance events and disruptions"
  }, {
    heading: "status-page",
    content: "RSS event subscriptions"
  }, {
    heading: "status-page",
    content: "You can access the status page directly at status.agora.io."
  }, {
    heading: "status-page",
    content: "The status dashboard currently provides status information for:"
  }, {
    heading: "status-page",
    content: "Real-Time Communication"
  }, {
    heading: "status-page",
    content: "Cloud Recording"
  }, {
    heading: "status-page",
    content: "Agora Chat"
  }, {
    heading: "status-page",
    content: "Interactive Whiteboard"
  }],
  headings: [{
    id: "submit-a-ticket",
    content: "Submit a ticket"
  }, {
    id: "status-page",
    content: "Status page"
  }]
};
export let toc = [{
  depth: 2,
  url: "#submit-a-ticket",
  title: _jsx(_Fragment, {
    children: "Submit a ticket"
  })
}, {
  depth: 2,
  url: "#status-page",
  title: _jsx(_Fragment, {
    children: "Status page"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "submit-a-ticket",
      children: "Submit a ticket"
    }), `
`, _jsx(_components.p, {
      children: "To ask Agora Support a question:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Log in to Agora Console."
      }), `
`, _jsxs(_components.li, {
        children: ["Click ", _jsx(_components.strong, {
          children: "Get Support"
        }), " > ", _jsx(_components.strong, {
          children: "Create Support Ticket"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Type your question or keywords to see whether the issue has already been answered."
      }), `
`, _jsx(_components.li, {
        children: "If you cannot find an answer, select a category and submit a ticket to customer support."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["You can track ticket status under ", _jsx(_components.strong, {
        children: "Tickets"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "status-page",
      children: "Status page"
    }), `
`, _jsx(_components.p, {
      children: "Agora Status Page provides up-to-date information about product and service status, including:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "historical service stability for the past 90 days"
      }), `
`, _jsx(_components.li, {
        children: "real-time quality data for the past 24 hours"
      }), `
`, _jsx(_components.li, {
        children: "maintenance events and disruptions"
      }), `
`, _jsx(_components.li, {
        children: "RSS event subscriptions"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["You can access the status page directly at ", _jsx(_components.a, {
        href: "https://status.agora.io/",
        children: "status.agora.io"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "The status dashboard currently provides status information for:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Real-Time Communication"
      }), `
`, _jsx(_components.li, {
        children: "Cloud Recording"
      }), `
`, _jsx(_components.li, {
        children: "Agora Chat"
      }), `
`, _jsx(_components.li, {
        children: "Interactive Whiteboard"
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
