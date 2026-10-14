import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Cloud Recording RESTful API",
  description: "Manage cloud recording sessions using the RESTful API."
};
export let _markdown = `

Manage cloud recording sessions by sending HTTP requests from your server to the Agora server. All requests use the base URL \`https://api.sd-rtn.com\`.

<CalloutContainer type="warning">
  <CalloutDescription>
    The Agora RESTful API supports HTTPS only. Plain HTTP requests are not supported.
  </CalloutDescription>
</CalloutContainer>

For authentication details, see [RESTful authentication](/en/api-reference/api-ref/cloud-recording/authentication).

## Endpoints [#endpoints]

### \`acquire\` [#acquire]

\`POST /v1/apps/{appid}/cloud_recording/acquire\`

[Request a resource ID](/en/api-reference/api-ref/cloud-recording/acquire) before starting a cloud recording session. One resource ID can only be used for one recording session and is valid for five minutes.

### \`start\` [#start]

\`POST /v1/apps/{appid}/cloud_recording/resourceid/{resourceid}/mode/{mode}/start\`

[Start cloud recording](/en/api-reference/api-ref/cloud-recording/start) using the resource ID obtained from \`acquire\`. Must be called within five minutes of receiving the resource ID.

### \`query\` [#query]

\`GET /v1/apps/{appid}/cloud_recording/resourceid/{resourceid}/sid/{sid}/mode/{mode}/query\`

[Query the status](/en/api-reference/api-ref/cloud-recording/query) of an active cloud recording session.

### \`update\` [#update]

\`POST /v1/apps/{appid}/cloud_recording/resourceid/{resourceid}/sid/{sid}/mode/{mode}/update\`

[Update an active recording session](/en/api-reference/api-ref/cloud-recording/update) to modify the subscription list, pause or resume web page recording, or update the CDN push address.

### \`updateLayout\` [#updatelayout]

\`POST /v1/apps/{appid}/cloud_recording/resourceid/{resourceid}/sid/{sid}/mode/{mode}/updateLayout\`

[Update the video mixing layout](/en/api-reference/api-ref/cloud-recording/update-layout) of an active composite recording session.

### \`stop\` [#stop]

\`POST /v1/apps/{appid}/cloud_recording/resourceid/{resourceid}/sid/{sid}/mode/{mode}/stop\`

[Stop an active cloud recording session](/en/api-reference/api-ref/cloud-recording/stop) and leave the channel.

## Message notification server [#message-notification-server]

### Get NCS IP addresses [#get-ncs-ip-addresses]

\`GET /v1/ncs/ip\`

[Query the IP addresses](/en/api-reference/api-ref/cloud-recording/get-ncs-ip) of the Agora message notification server and add them to your firewall whitelist. Agora dynamically adjusts these IP addresses every 24 hours, so query and update your whitelist regularly to ensure uninterrupted delivery of recording event notifications.

For detailed request parameters, response schemas, and examples, see the [Cloud Recording RESTful API reference](/en/api-reference/api-ref/cloud-recording).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Manage cloud recording sessions by sending HTTP requests from your server to the Agora server. All requests use the base URL `https://api.sd-rtn.com`."
  }, {
    heading: undefined,
    content: "The Agora RESTful API supports HTTPS only. Plain HTTP requests are not supported."
  }, {
    heading: undefined,
    content: "For authentication details, see RESTful authentication."
  }, {
    heading: "acquire",
    content: "`POST /v1/apps/{appid}/cloud_recording/acquire`"
  }, {
    heading: "acquire",
    content: "Request a resource ID before starting a cloud recording session. One resource ID can only be used for one recording session and is valid for five minutes."
  }, {
    heading: "start",
    content: "`POST /v1/apps/{appid}/cloud_recording/resourceid/{resourceid}/mode/{mode}/start`"
  }, {
    heading: "start",
    content: "Start cloud recording using the resource ID obtained from `acquire`. Must be called within five minutes of receiving the resource ID."
  }, {
    heading: "query",
    content: "`GET /v1/apps/{appid}/cloud_recording/resourceid/{resourceid}/sid/{sid}/mode/{mode}/query`"
  }, {
    heading: "query",
    content: "Query the status of an active cloud recording session."
  }, {
    heading: "update",
    content: "`POST /v1/apps/{appid}/cloud_recording/resourceid/{resourceid}/sid/{sid}/mode/{mode}/update`"
  }, {
    heading: "update",
    content: "Update an active recording session to modify the subscription list, pause or resume web page recording, or update the CDN push address."
  }, {
    heading: "updatelayout",
    content: "`POST /v1/apps/{appid}/cloud_recording/resourceid/{resourceid}/sid/{sid}/mode/{mode}/updateLayout`"
  }, {
    heading: "updatelayout",
    content: "Update the video mixing layout of an active composite recording session."
  }, {
    heading: "stop",
    content: "`POST /v1/apps/{appid}/cloud_recording/resourceid/{resourceid}/sid/{sid}/mode/{mode}/stop`"
  }, {
    heading: "stop",
    content: "Stop an active cloud recording session and leave the channel."
  }, {
    heading: "get-ncs-ip-addresses",
    content: "`GET /v1/ncs/ip`"
  }, {
    heading: "get-ncs-ip-addresses",
    content: "Query the IP addresses of the Agora message notification server and add them to your firewall whitelist. Agora dynamically adjusts these IP addresses every 24 hours, so query and update your whitelist regularly to ensure uninterrupted delivery of recording event notifications."
  }, {
    heading: "get-ncs-ip-addresses",
    content: "For detailed request parameters, response schemas, and examples, see the Cloud Recording RESTful API reference."
  }],
  headings: [{
    id: "endpoints",
    content: "Endpoints"
  }, {
    id: "acquire",
    content: "`acquire`"
  }, {
    id: "start",
    content: "`start`"
  }, {
    id: "query",
    content: "`query`"
  }, {
    id: "update",
    content: "`update`"
  }, {
    id: "updatelayout",
    content: "`updateLayout`"
  }, {
    id: "stop",
    content: "`stop`"
  }, {
    id: "message-notification-server",
    content: "Message notification server"
  }, {
    id: "get-ncs-ip-addresses",
    content: "Get NCS IP addresses"
  }]
};
export let toc = [{
  depth: 2,
  url: "#endpoints",
  title: _jsx(_Fragment, {
    children: "Endpoints"
  })
}, {
  depth: 3,
  url: "#acquire",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "acquire"
    })
  })
}, {
  depth: 3,
  url: "#start",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "start"
    })
  })
}, {
  depth: 3,
  url: "#query",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "query"
    })
  })
}, {
  depth: 3,
  url: "#update",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "update"
    })
  })
}, {
  depth: 3,
  url: "#updatelayout",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "updateLayout"
    })
  })
}, {
  depth: 3,
  url: "#stop",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "stop"
    })
  })
}, {
  depth: 2,
  url: "#message-notification-server",
  title: _jsx(_Fragment, {
    children: "Message notification server"
  })
}, {
  depth: 3,
  url: "#get-ncs-ip-addresses",
  title: _jsx(_Fragment, {
    children: "Get NCS IP addresses"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["Manage cloud recording sessions by sending HTTP requests from your server to the Agora server. All requests use the base URL ", _jsx(_components.code, {
        children: "https://api.sd-rtn.com"
      }), "."]
    }), `
`, _jsx(CalloutContainer, {
      type: "warning",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "The Agora RESTful API supports HTTPS only. Plain HTTP requests are not supported."
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["For authentication details, see ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording/authentication",
        children: "RESTful authentication"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "endpoints",
      children: "Endpoints"
    }), `
`, _jsx(_components.h3, {
      id: "acquire",
      children: _jsx(_components.code, {
        children: "acquire"
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "POST /v1/apps/{appid}/cloud_recording/acquire"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording/acquire",
        children: "Request a resource ID"
      }), " before starting a cloud recording session. One resource ID can only be used for one recording session and is valid for five minutes."]
    }), `
`, _jsx(_components.h3, {
      id: "start",
      children: _jsx(_components.code, {
        children: "start"
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "POST /v1/apps/{appid}/cloud_recording/resourceid/{resourceid}/mode/{mode}/start"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording/start",
        children: "Start cloud recording"
      }), " using the resource ID obtained from ", _jsx(_components.code, {
        children: "acquire"
      }), ". Must be called within five minutes of receiving the resource ID."]
    }), `
`, _jsx(_components.h3, {
      id: "query",
      children: _jsx(_components.code, {
        children: "query"
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "GET /v1/apps/{appid}/cloud_recording/resourceid/{resourceid}/sid/{sid}/mode/{mode}/query"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording/query",
        children: "Query the status"
      }), " of an active cloud recording session."]
    }), `
`, _jsx(_components.h3, {
      id: "update",
      children: _jsx(_components.code, {
        children: "update"
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "POST /v1/apps/{appid}/cloud_recording/resourceid/{resourceid}/sid/{sid}/mode/{mode}/update"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording/update",
        children: "Update an active recording session"
      }), " to modify the subscription list, pause or resume web page recording, or update the CDN push address."]
    }), `
`, _jsx(_components.h3, {
      id: "updatelayout",
      children: _jsx(_components.code, {
        children: "updateLayout"
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "POST /v1/apps/{appid}/cloud_recording/resourceid/{resourceid}/sid/{sid}/mode/{mode}/updateLayout"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording/update-layout",
        children: "Update the video mixing layout"
      }), " of an active composite recording session."]
    }), `
`, _jsx(_components.h3, {
      id: "stop",
      children: _jsx(_components.code, {
        children: "stop"
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "POST /v1/apps/{appid}/cloud_recording/resourceid/{resourceid}/sid/{sid}/mode/{mode}/stop"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording/stop",
        children: "Stop an active cloud recording session"
      }), " and leave the channel."]
    }), `
`, _jsx(_components.h2, {
      id: "message-notification-server",
      children: "Message notification server"
    }), `
`, _jsx(_components.h3, {
      id: "get-ncs-ip-addresses",
      children: "Get NCS IP addresses"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "GET /v1/ncs/ip"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording/get-ncs-ip",
        children: "Query the IP addresses"
      }), " of the Agora message notification server and add them to your firewall whitelist. Agora dynamically adjusts these IP addresses every 24 hours, so query and update your whitelist regularly to ensure uninterrupted delivery of recording event notifications."]
    }), `
`, _jsxs(_components.p, {
      children: ["For detailed request parameters, response schemas, and examples, see the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording",
        children: "Cloud Recording RESTful API reference"
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
