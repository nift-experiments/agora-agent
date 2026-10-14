import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Media Gateway Overview",
  description: "Manage Media Gateway ingress streams, templates, and notification IPs using RESTful APIs."
};
export let _markdown = `

The Media Gateway RESTful APIs provide server-side control over ingress
streaming keys, online stream sessions, flow configuration templates, and
notification service IP ranges.

## API basics [#api-basics]

All requests are sent to the host \`api.agora.io\`.

* **Authentication**: Media Gateway REST APIs require
  [RESTful authentication](authentication) for authentication.
* **Request**: Refer to the respective API examples.
* **Response**: The response content is in JSON format.
* **Base URL**: \`https://api.agora.io/{region}/v1/projects/{appId}\`

<CalloutContainer type="info">
  <CalloutDescription>
    - All request URLs and request bodies are case-sensitive.
    - Keep Media Gateway REST calls on the server side.
  </CalloutDescription>
</CalloutContainer>

## REST APIs [#rest-apis]

**Streaming key APIs**

* [Create streaming key](create-streaming-key): Create a new streaming key for a channel and host UID.
* [Query streaming key](query-streaming-key): Get metadata for a streaming key.
* [Delete streaming key](delete-streaming-key): Revoke a streaming key.

**Online stream APIs**

* [Query streaming list](query-streaming-list): List current ingress streams.
* [Query streaming information](query-streaming-information): Query a stream by SID.
* [Force disconnect](force-disconnection): Disconnect an online stream by SID.
* [Mute or unmute streaming](mute-streaming): Toggle audio or video mute state.

**Template and notification APIs**

* [Create or reset template](create-reset-template): Create or reset a flow configuration template.
* [Update template](update-template): Update a flow configuration template.
* [Delete template](delete-template): Delete a flow configuration template.
* [Set global template](set-global-template): Set the default template for an app ID.
* [Query notification service IP address](query-ip-address): Retrieve callback IP ranges.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: `The Media Gateway RESTful APIs provide server-side control over ingress
streaming keys, online stream sessions, flow configuration templates, and
notification service IP ranges.`
  }, {
    heading: "api-basics",
    content: "All requests are sent to the host `api.agora.io`."
  }, {
    heading: "api-basics",
    content: `**Authentication**: Media Gateway REST APIs require
RESTful authentication for authentication.`
  }, {
    heading: "api-basics",
    content: "**Request**: Refer to the respective API examples."
  }, {
    heading: "api-basics",
    content: "**Response**: The response content is in JSON format."
  }, {
    heading: "api-basics",
    content: "**Base URL**: `https://api.agora.io/{region}/v1/projects/{appId}`"
  }, {
    heading: "api-basics",
    content: "All request URLs and request bodies are case-sensitive."
  }, {
    heading: "api-basics",
    content: "Keep Media Gateway REST calls on the server side."
  }, {
    heading: "rest-apis",
    content: "**Streaming key APIs**"
  }, {
    heading: "rest-apis",
    content: "Create streaming key: Create a new streaming key for a channel and host UID."
  }, {
    heading: "rest-apis",
    content: "Query streaming key: Get metadata for a streaming key."
  }, {
    heading: "rest-apis",
    content: "Delete streaming key: Revoke a streaming key."
  }, {
    heading: "rest-apis",
    content: "**Online stream APIs**"
  }, {
    heading: "rest-apis",
    content: "Query streaming list: List current ingress streams."
  }, {
    heading: "rest-apis",
    content: "Query streaming information: Query a stream by SID."
  }, {
    heading: "rest-apis",
    content: "Force disconnect: Disconnect an online stream by SID."
  }, {
    heading: "rest-apis",
    content: "Mute or unmute streaming: Toggle audio or video mute state."
  }, {
    heading: "rest-apis",
    content: "**Template and notification APIs**"
  }, {
    heading: "rest-apis",
    content: "Create or reset template: Create or reset a flow configuration template."
  }, {
    heading: "rest-apis",
    content: "Update template: Update a flow configuration template."
  }, {
    heading: "rest-apis",
    content: "Delete template: Delete a flow configuration template."
  }, {
    heading: "rest-apis",
    content: "Set global template: Set the default template for an app ID."
  }, {
    heading: "rest-apis",
    content: "Query notification service IP address: Retrieve callback IP ranges."
  }],
  headings: [{
    id: "api-basics",
    content: "API basics"
  }, {
    id: "rest-apis",
    content: "REST APIs"
  }]
};
export let toc = [{
  depth: 2,
  url: "#api-basics",
  title: _jsx(_Fragment, {
    children: "API basics"
  })
}, {
  depth: 2,
  url: "#rest-apis",
  title: _jsx(_Fragment, {
    children: "REST APIs"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: `The Media Gateway RESTful APIs provide server-side control over ingress
streaming keys, online stream sessions, flow configuration templates, and
notification service IP ranges.`
    }), `
`, _jsx(_components.h2, {
      id: "api-basics",
      children: "API basics"
    }), `
`, _jsxs(_components.p, {
      children: ["All requests are sent to the host ", _jsx(_components.code, {
        children: "api.agora.io"
      }), "."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Authentication"
        }), `: Media Gateway REST APIs require
`, _jsx(_components.a, {
          href: "authentication",
          children: "RESTful authentication"
        }), " for authentication."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Request"
        }), ": Refer to the respective API examples."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Response"
        }), ": The response content is in JSON format."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Base URL"
        }), ": ", _jsx(_components.code, {
          children: "https://api.agora.io/{region}/v1/projects/{appId}"
        })]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "All request URLs and request bodies are case-sensitive."
          }), `
`, _jsx(_components.li, {
            children: "Keep Media Gateway REST calls on the server side."
          }), `
`]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "rest-apis",
      children: "REST APIs"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Streaming key APIs"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "create-streaming-key",
          children: "Create streaming key"
        }), ": Create a new streaming key for a channel and host UID."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "query-streaming-key",
          children: "Query streaming key"
        }), ": Get metadata for a streaming key."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "delete-streaming-key",
          children: "Delete streaming key"
        }), ": Revoke a streaming key."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Online stream APIs"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "query-streaming-list",
          children: "Query streaming list"
        }), ": List current ingress streams."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "query-streaming-information",
          children: "Query streaming information"
        }), ": Query a stream by SID."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "force-disconnection",
          children: "Force disconnect"
        }), ": Disconnect an online stream by SID."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "mute-streaming",
          children: "Mute or unmute streaming"
        }), ": Toggle audio or video mute state."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Template and notification APIs"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "create-reset-template",
          children: "Create or reset template"
        }), ": Create or reset a flow configuration template."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "update-template",
          children: "Update template"
        }), ": Update a flow configuration template."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "delete-template",
          children: "Delete template"
        }), ": Delete a flow configuration template."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "set-global-template",
          children: "Set global template"
        }), ": Set the default template for an app ID."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "query-ip-address",
          children: "Query notification service IP address"
        }), ": Retrieve callback IP ranges."]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
