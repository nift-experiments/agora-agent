import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Channel Management REST API",
  description: "Use channel management REST APIs to manage users in the channel and query channel statistics at the app server."
};
export let _markdown = `

In addition to the SDK that you integrate into the app client, Agora provides server-side RESTful APIs to manage real-time channels.

The IoT Channel Management REST API uses the shared RTC REST API reference. Use these APIs to query channel information, manage user privileges, and query Agora Notifications service IP addresses.

## REST API reference [#rest-api-reference]

* [RTC REST API overview](/en/api-reference/api-ref/rtc)
* [How to call RESTful APIs](/en/api-reference/api-ref/rtc/how-to-call-api)
* [RESTful authentication](/en/api-reference/api-ref/rtc/authentication)
* [Response status codes](/en/api-reference/api-ref/rtc/response-status-codes)

## Endpoints [#endpoints]

**Channel information**

* [Query the channel list](/en/api-reference/api-ref/rtc/query-channel-list)
* [Query the user list](/en/api-reference/api-ref/rtc/query-user-list)
* [Query the host list](/en/api-reference/api-ref/rtc/query-host-list)
* [Query the user status](/en/api-reference/api-ref/rtc/query-user-status)

**User privilege banning**

* [Create a banning rule](/en/api-reference/api-ref/rtc/create-ban-rule)
* [Delete a banning rule](/en/api-reference/api-ref/rtc/delete-ban-rule)
* [Get the banning rule list](/en/api-reference/api-ref/rtc/get-ban-rule-list)
* [Update the banning rule expiration](/en/api-reference/api-ref/rtc/update-ban-expiration)

**Message notification service**

* [Query the IP address](/en/api-reference/api-ref/rtc/query-ip-address)

## Supporting topics [#supporting-topics]

* [Ban user privileges best practices](/en/api-reference/api-ref/rtc/ban-user-privileges-best-practices)
* [Ensure service reliability](/en/api-reference/api-ref/rtc/ensure-service-reliability)
* [Channel event types](/en/api-reference/api-ref/rtc/channel-event-types)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In addition to the SDK that you integrate into the app client, Agora provides server-side RESTful APIs to manage real-time channels."
  }, {
    heading: undefined,
    content: "The IoT Channel Management REST API uses the shared RTC REST API reference. Use these APIs to query channel information, manage user privileges, and query Agora Notifications service IP addresses."
  }, {
    heading: "rest-api-reference",
    content: "RTC REST API overview"
  }, {
    heading: "rest-api-reference",
    content: "How to call RESTful APIs"
  }, {
    heading: "rest-api-reference",
    content: "RESTful authentication"
  }, {
    heading: "rest-api-reference",
    content: "Response status codes"
  }, {
    heading: "endpoints",
    content: "**Channel information**"
  }, {
    heading: "endpoints",
    content: "Query the channel list"
  }, {
    heading: "endpoints",
    content: "Query the user list"
  }, {
    heading: "endpoints",
    content: "Query the host list"
  }, {
    heading: "endpoints",
    content: "Query the user status"
  }, {
    heading: "endpoints",
    content: "**User privilege banning**"
  }, {
    heading: "endpoints",
    content: "Create a banning rule"
  }, {
    heading: "endpoints",
    content: "Delete a banning rule"
  }, {
    heading: "endpoints",
    content: "Get the banning rule list"
  }, {
    heading: "endpoints",
    content: "Update the banning rule expiration"
  }, {
    heading: "endpoints",
    content: "**Message notification service**"
  }, {
    heading: "endpoints",
    content: "Query the IP address"
  }, {
    heading: "supporting-topics",
    content: "Ban user privileges best practices"
  }, {
    heading: "supporting-topics",
    content: "Ensure service reliability"
  }, {
    heading: "supporting-topics",
    content: "Channel event types"
  }],
  headings: [{
    id: "rest-api-reference",
    content: "REST API reference"
  }, {
    id: "endpoints",
    content: "Endpoints"
  }, {
    id: "supporting-topics",
    content: "Supporting topics"
  }]
};
export let toc = [{
  depth: 2,
  url: "#rest-api-reference",
  title: _jsx(_Fragment, {
    children: "REST API reference"
  })
}, {
  depth: 2,
  url: "#endpoints",
  title: _jsx(_Fragment, {
    children: "Endpoints"
  })
}, {
  depth: 2,
  url: "#supporting-topics",
  title: _jsx(_Fragment, {
    children: "Supporting topics"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "In addition to the SDK that you integrate into the app client, Agora provides server-side RESTful APIs to manage real-time channels."
    }), `
`, _jsx(_components.p, {
      children: "The IoT Channel Management REST API uses the shared RTC REST API reference. Use these APIs to query channel information, manage user privileges, and query Agora Notifications service IP addresses."
    }), `
`, _jsx(_components.h2, {
      id: "rest-api-reference",
      children: "REST API reference"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc",
          children: "RTC REST API overview"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/how-to-call-api",
          children: "How to call RESTful APIs"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/authentication",
          children: "RESTful authentication"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/response-status-codes",
          children: "Response status codes"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "endpoints",
      children: "Endpoints"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Channel information"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/query-channel-list",
          children: "Query the channel list"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/query-user-list",
          children: "Query the user list"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/query-host-list",
          children: "Query the host list"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/query-user-status",
          children: "Query the user status"
        })
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "User privilege banning"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/create-ban-rule",
          children: "Create a banning rule"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/delete-ban-rule",
          children: "Delete a banning rule"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/get-ban-rule-list",
          children: "Get the banning rule list"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/update-ban-expiration",
          children: "Update the banning rule expiration"
        })
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Message notification service"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/query-ip-address",
          children: "Query the IP address"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "supporting-topics",
      children: "Supporting topics"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/ban-user-privileges-best-practices",
          children: "Ban user privileges best practices"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/ensure-service-reliability",
          children: "Ensure service reliability"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/channel-event-types",
          children: "Channel event types"
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
