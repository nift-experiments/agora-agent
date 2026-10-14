import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Overview",
  description: "Manage Cloud Recording sessions using the RESTful API."
};
export let _markdown = `

Agora Cloud Recording records and saves voice calls, video calls, and interactive streaming. Send HTTPS requests from your business server to Agora to manage recording tasks on the server side.

To monitor recording status, enable the message notification service and receive Cloud Recording events through a webhook. Because Agora dynamically adjusts message notification server IP addresses, regularly query the IP addresses and update your firewall whitelist.

## API basics [#api-basics]

* **Authentication**: All APIs require [Basic Auth](/zh-CN/api-reference/api-ref/cloud-recording/authentication).
* **Request**: Request bodies use JSON.
* **Response**: Response bodies use JSON.
* **Base URL**: \`https://api.sd-rtn.com\`

<CalloutContainer type="info">
  <CalloutDescription>
    The Cloud Recording REST API supports HTTPS only. Requests over plain HTTP are not supported.
  </CalloutDescription>
</CalloutContainer>

## REST APIs [#rest-apis]

* [Acquire a cloud recording resource](/zh-CN/api-reference/api-ref/cloud-recording/acquire): Request a resource ID for cloud recording.
* [Start cloud recording](/zh-CN/api-reference/api-ref/cloud-recording/start): Start cloud recording with a resource ID. Call this method shortly after \`acquire\`.
* [Update cloud recording settings](/zh-CN/api-reference/api-ref/cloud-recording/update): Update subscription, web page recording, CDN push, or storage settings.
* [Update the cloud recording layout](/zh-CN/api-reference/api-ref/cloud-recording/update-layout): Update the composite recording layout.
* [Query cloud recording status](/zh-CN/api-reference/api-ref/cloud-recording/query): Check the status of a cloud recording session.
* [Stop cloud recording](/zh-CN/api-reference/api-ref/cloud-recording/stop): Leave the channel and stop recording.
* [Query message notification server IP addresses](/zh-CN/api-reference/api-ref/cloud-recording/get-ncs-ip): Get message notification server IP addresses for firewall whitelisting.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora Cloud Recording records and saves voice calls, video calls, and interactive streaming. Send HTTPS requests from your business server to Agora to manage recording tasks on the server side."
  }, {
    heading: undefined,
    content: "To monitor recording status, enable the message notification service and receive Cloud Recording events through a webhook. Because Agora dynamically adjusts message notification server IP addresses, regularly query the IP addresses and update your firewall whitelist."
  }, {
    heading: "api-basics",
    content: "**Authentication**: All APIs require Basic Auth."
  }, {
    heading: "api-basics",
    content: "**Request**: Request bodies use JSON."
  }, {
    heading: "api-basics",
    content: "**Response**: Response bodies use JSON."
  }, {
    heading: "api-basics",
    content: "**Base URL**: `https://api.sd-rtn.com`"
  }, {
    heading: "api-basics",
    content: "The Cloud Recording REST API supports HTTPS only. Requests over plain HTTP are not supported."
  }, {
    heading: "rest-apis",
    content: "Acquire a cloud recording resource: Request a resource ID for cloud recording."
  }, {
    heading: "rest-apis",
    content: "Start cloud recording: Start cloud recording with a resource ID. Call this method shortly after `acquire`."
  }, {
    heading: "rest-apis",
    content: "Update cloud recording settings: Update subscription, web page recording, CDN push, or storage settings."
  }, {
    heading: "rest-apis",
    content: "Update the cloud recording layout: Update the composite recording layout."
  }, {
    heading: "rest-apis",
    content: "Query cloud recording status: Check the status of a cloud recording session."
  }, {
    heading: "rest-apis",
    content: "Stop cloud recording: Leave the channel and stop recording."
  }, {
    heading: "rest-apis",
    content: "Query message notification server IP addresses: Get message notification server IP addresses for firewall whitelisting."
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
      children: "Agora Cloud Recording records and saves voice calls, video calls, and interactive streaming. Send HTTPS requests from your business server to Agora to manage recording tasks on the server side."
    }), `
`, _jsx(_components.p, {
      children: "To monitor recording status, enable the message notification service and receive Cloud Recording events through a webhook. Because Agora dynamically adjusts message notification server IP addresses, regularly query the IP addresses and update your firewall whitelist."
    }), `
`, _jsx(_components.h2, {
      id: "api-basics",
      children: "API basics"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Authentication"
        }), ": All APIs require ", _jsx(_components.a, {
          href: "/zh-CN/api-reference/api-ref/cloud-recording/authentication",
          children: "Basic Auth"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Request"
        }), ": Request bodies use JSON."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Response"
        }), ": Response bodies use JSON."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Base URL"
        }), ": ", _jsx(_components.code, {
          children: "https://api.sd-rtn.com"
        })]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "The Cloud Recording REST API supports HTTPS only. Requests over plain HTTP are not supported."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "rest-apis",
      children: "REST APIs"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/api-reference/api-ref/cloud-recording/acquire",
          children: "Acquire a cloud recording resource"
        }), ": Request a resource ID for cloud recording."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/api-reference/api-ref/cloud-recording/start",
          children: "Start cloud recording"
        }), ": Start cloud recording with a resource ID. Call this method shortly after ", _jsx(_components.code, {
          children: "acquire"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/api-reference/api-ref/cloud-recording/update",
          children: "Update cloud recording settings"
        }), ": Update subscription, web page recording, CDN push, or storage settings."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/api-reference/api-ref/cloud-recording/update-layout",
          children: "Update the cloud recording layout"
        }), ": Update the composite recording layout."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/api-reference/api-ref/cloud-recording/query",
          children: "Query cloud recording status"
        }), ": Check the status of a cloud recording session."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/api-reference/api-ref/cloud-recording/stop",
          children: "Stop cloud recording"
        }), ": Leave the channel and stop recording."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/zh-CN/api-reference/api-ref/cloud-recording/get-ncs-ip",
          children: "Query message notification server IP addresses"
        }), ": Get message notification server IP addresses for firewall whitelisting."]
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
