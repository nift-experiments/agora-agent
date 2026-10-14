import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Cloud Recording API callback service",
  description: "Receive Cloud Recording callback events through Agora's notification pipeline."
};
export let _markdown = `

Agora Cloud Recording can notify your server when recording events occur. After you enable callbacks, Agora sends event payloads to your webhook through its notification service.

## How callbacks work [#how-callbacks-work]

1. Your application enables the callback service for Cloud Recording.
2. A recording event occurs, such as start, stop, upload progress, or a web page recording status change.
3. Agora sends an HTTPS callback to your server.
4. Your server verifies the signature and processes the payload.

## Payload basics [#payload-basics]

The callback request body contains a top-level JSON object. The \`payload\` object includes common fields such as:

* \`cname\`: Channel name.
* \`uid\`: Recording user ID.
* \`sid\`: Recording ID.
* \`sequence\`: Notification sequence number.
* \`sendts\`: Event timestamp in Unix milliseconds.
* \`serviceType\`: Agora service type.
* \`details\`: Event-specific details.

## Signature verification [#signature-verification]

Always verify callback signatures before you trust the payload. For webhook setup and validation guidance, see [Receive notifications](/en/realtime-media/cloud-recording/build/handle-events/receive-notifications#create-your-webhook).

## Common callback categories [#common-callback-categories]

Cloud Recording callbacks cover the following event groups:

* Recording errors and warnings
* Recording status changes
* Recorder lifecycle events
* Upload lifecycle events
* Web page recording events

For the Cloud Recording event fields and examples, see the workflow guide:

* [Receive notifications](/en/realtime-media/cloud-recording/build/handle-events/receive-notifications)

## Related references [#related-references]

* [Cloud Recording RESTful API](./index)
* [Authenticate REST calls](./authentication)
* [Common errors](/en/realtime-media/cloud-recording/reference/common-errors)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora Cloud Recording can notify your server when recording events occur. After you enable callbacks, Agora sends event payloads to your webhook through its notification service."
  }, {
    heading: "how-callbacks-work",
    content: "Your application enables the callback service for Cloud Recording."
  }, {
    heading: "how-callbacks-work",
    content: "A recording event occurs, such as start, stop, upload progress, or a web page recording status change."
  }, {
    heading: "how-callbacks-work",
    content: "Agora sends an HTTPS callback to your server."
  }, {
    heading: "how-callbacks-work",
    content: "Your server verifies the signature and processes the payload."
  }, {
    heading: "payload-basics",
    content: "The callback request body contains a top-level JSON object. The `payload` object includes common fields such as:"
  }, {
    heading: "payload-basics",
    content: "`cname`: Channel name."
  }, {
    heading: "payload-basics",
    content: "`uid`: Recording user ID."
  }, {
    heading: "payload-basics",
    content: "`sid`: Recording ID."
  }, {
    heading: "payload-basics",
    content: "`sequence`: Notification sequence number."
  }, {
    heading: "payload-basics",
    content: "`sendts`: Event timestamp in Unix milliseconds."
  }, {
    heading: "payload-basics",
    content: "`serviceType`: Agora service type."
  }, {
    heading: "payload-basics",
    content: "`details`: Event-specific details."
  }, {
    heading: "signature-verification",
    content: "Always verify callback signatures before you trust the payload. For webhook setup and validation guidance, see Receive notifications."
  }, {
    heading: "common-callback-categories",
    content: "Cloud Recording callbacks cover the following event groups:"
  }, {
    heading: "common-callback-categories",
    content: "Recording errors and warnings"
  }, {
    heading: "common-callback-categories",
    content: "Recording status changes"
  }, {
    heading: "common-callback-categories",
    content: "Recorder lifecycle events"
  }, {
    heading: "common-callback-categories",
    content: "Upload lifecycle events"
  }, {
    heading: "common-callback-categories",
    content: "Web page recording events"
  }, {
    heading: "common-callback-categories",
    content: "For the Cloud Recording event fields and examples, see the workflow guide:"
  }, {
    heading: "common-callback-categories",
    content: "Receive notifications"
  }, {
    heading: "related-references",
    content: "Cloud Recording RESTful API"
  }, {
    heading: "related-references",
    content: "Authenticate REST calls"
  }, {
    heading: "related-references",
    content: "Common errors"
  }],
  headings: [{
    id: "how-callbacks-work",
    content: "How callbacks work"
  }, {
    id: "payload-basics",
    content: "Payload basics"
  }, {
    id: "signature-verification",
    content: "Signature verification"
  }, {
    id: "common-callback-categories",
    content: "Common callback categories"
  }, {
    id: "related-references",
    content: "Related references"
  }]
};
export let toc = [{
  depth: 2,
  url: "#how-callbacks-work",
  title: _jsx(_Fragment, {
    children: "How callbacks work"
  })
}, {
  depth: 2,
  url: "#payload-basics",
  title: _jsx(_Fragment, {
    children: "Payload basics"
  })
}, {
  depth: 2,
  url: "#signature-verification",
  title: _jsx(_Fragment, {
    children: "Signature verification"
  })
}, {
  depth: 2,
  url: "#common-callback-categories",
  title: _jsx(_Fragment, {
    children: "Common callback categories"
  })
}, {
  depth: 2,
  url: "#related-references",
  title: _jsx(_Fragment, {
    children: "Related references"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora Cloud Recording can notify your server when recording events occur. After you enable callbacks, Agora sends event payloads to your webhook through its notification service."
    }), `
`, _jsx(_components.h2, {
      id: "how-callbacks-work",
      children: "How callbacks work"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Your application enables the callback service for Cloud Recording."
      }), `
`, _jsx(_components.li, {
        children: "A recording event occurs, such as start, stop, upload progress, or a web page recording status change."
      }), `
`, _jsx(_components.li, {
        children: "Agora sends an HTTPS callback to your server."
      }), `
`, _jsx(_components.li, {
        children: "Your server verifies the signature and processes the payload."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "payload-basics",
      children: "Payload basics"
    }), `
`, _jsxs(_components.p, {
      children: ["The callback request body contains a top-level JSON object. The ", _jsx(_components.code, {
        children: "payload"
      }), " object includes common fields such as:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "cname"
        }), ": Channel name."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "uid"
        }), ": Recording user ID."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "sid"
        }), ": Recording ID."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "sequence"
        }), ": Notification sequence number."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "sendts"
        }), ": Event timestamp in Unix milliseconds."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "serviceType"
        }), ": Agora service type."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "details"
        }), ": Event-specific details."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "signature-verification",
      children: "Signature verification"
    }), `
`, _jsxs(_components.p, {
      children: ["Always verify callback signatures before you trust the payload. For webhook setup and validation guidance, see ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/handle-events/receive-notifications#create-your-webhook",
        children: "Receive notifications"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "common-callback-categories",
      children: "Common callback categories"
    }), `
`, _jsx(_components.p, {
      children: "Cloud Recording callbacks cover the following event groups:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Recording errors and warnings"
      }), `
`, _jsx(_components.li, {
        children: "Recording status changes"
      }), `
`, _jsx(_components.li, {
        children: "Recorder lifecycle events"
      }), `
`, _jsx(_components.li, {
        children: "Upload lifecycle events"
      }), `
`, _jsx(_components.li, {
        children: "Web page recording events"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "For the Cloud Recording event fields and examples, see the workflow guide:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording/build/handle-events/receive-notifications",
          children: "Receive notifications"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "related-references",
      children: "Related references"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./index",
          children: "Cloud Recording RESTful API"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./authentication",
          children: "Authenticate REST calls"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording/reference/common-errors",
          children: "Common errors"
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
