import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  analyticsPageType: "sdk-api-reference",
  title: "Voice & Video Calling Management Overview",
  description: "Manage RTC channel information, user privileges, and notification service IPs using REST APIs."
};
export let _markdown = `

In addition to the SDK that you integrate into the app client, Agora provides server-side RESTful APIs to manage real-time audio and video channels.

This RTC REST API reference is the authoritative source for Channel Management REST APIs shared by Voice Calling, Video Calling, Broadcast Streaming, and Interactive Live Streaming. Product pages provide entry points and usage context; endpoint definitions live here.

## Key features and use cases [#key-features-and-use-cases]

| Key feature                    | Description                                                                                        | Typical use cases                                                                                                                                                  |
| ------------------------------ | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Manage user privileges         | Remove specified users from channels and prevent users from sending audio and video streams.       | Unauthorized users appear in a live broadcast, users disrupt a room, signaling messages are hijacked, or abnormal offline states interfere with user list updates. |
| Query channel information      | Query online channels, users in a channel, hosts in a channel, and the status of a specified user. | Sync channel status when the number of concurrent channels is limited, or query user lists and user status when real-time sync performance is not required.        |
| Query notification service IPs | Retrieve Agora Notifications service IP addresses.                                                 | Maintain firewall allowlists for message notification callbacks.                                                                                                   |

## API basics [#api-basics]

All requests are sent to the host \`api.agora.io\`.

* **Authentication**: All APIs require [Basic Auth](authentication).
* **Request**: Request bodies use JSON.
* **Response**: Response bodies use JSON.
* **Base URL**: \`https://api.agora.io\`

<CalloutContainer type="info">
  <CalloutDescription>
    All request URLs and request bodies are case-sensitive. Use HTTPS for every request.
  </CalloutDescription>
</CalloutContainer>

## REST APIs [#rest-apis]

**Channel information**

* [Query the channel list](query-channel-list): Get the list of all channels under a specified project.
* [Query the user list](query-user-list): Get the users in a specified channel.
* [Query the host list](query-host-list): Get the hosts in a live-broadcasting channel.
* [Query the user status](query-user-status): Check whether a specified user is in a channel.

**User privilege banning**

* [Create a banning rule](create-ban-rule): Ban a user from joining a channel or publishing audio and video.
* [Delete a banning rule](delete-ban-rule): Delete a specified banning rule.
* [Get the banning rule list](get-ban-rule-list): Get all banning rules for a project.
* [Update the banning rule expiration](update-ban-expiration): Update the expiration time of a banning rule.

**Message notification service**

* [Query the IP address](query-ip-address): Retrieve the IP addresses of the Agora Notifications service.

## Supporting topics [#supporting-topics]

* [How to call RESTful APIs](how-to-call-api)
* [RESTful authentication](authentication)
* [Response status codes](response-status-codes)
* [Channel event types](channel-event-types)
* [Ban user privileges best practices](ban-user-privileges-best-practices)
* [Ensure service reliability](ensure-service-reliability)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In addition to the SDK that you integrate into the app client, Agora provides server-side RESTful APIs to manage real-time audio and video channels."
  }, {
    heading: undefined,
    content: "This RTC REST API reference is the authoritative source for Channel Management REST APIs shared by Voice Calling, Video Calling, Broadcast Streaming, and Interactive Live Streaming. Product pages provide entry points and usage context; endpoint definitions live here."
  }, {
    heading: "key-features-and-use-cases",
    content: "Key feature"
  }, {
    heading: "key-features-and-use-cases",
    content: "Description"
  }, {
    heading: "key-features-and-use-cases",
    content: "Typical use cases"
  }, {
    heading: "key-features-and-use-cases",
    content: "Manage user privileges"
  }, {
    heading: "key-features-and-use-cases",
    content: "Remove specified users from channels and prevent users from sending audio and video streams."
  }, {
    heading: "key-features-and-use-cases",
    content: "Unauthorized users appear in a live broadcast, users disrupt a room, signaling messages are hijacked, or abnormal offline states interfere with user list updates."
  }, {
    heading: "key-features-and-use-cases",
    content: "Query channel information"
  }, {
    heading: "key-features-and-use-cases",
    content: "Query online channels, users in a channel, hosts in a channel, and the status of a specified user."
  }, {
    heading: "key-features-and-use-cases",
    content: "Sync channel status when the number of concurrent channels is limited, or query user lists and user status when real-time sync performance is not required."
  }, {
    heading: "key-features-and-use-cases",
    content: "Query notification service IPs"
  }, {
    heading: "key-features-and-use-cases",
    content: "Retrieve Agora Notifications service IP addresses."
  }, {
    heading: "key-features-and-use-cases",
    content: "Maintain firewall allowlists for message notification callbacks."
  }, {
    heading: "api-basics",
    content: "All requests are sent to the host `api.agora.io`."
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
    content: "**Base URL**: `https://api.agora.io`"
  }, {
    heading: "api-basics",
    content: "All request URLs and request bodies are case-sensitive. Use HTTPS for every request."
  }, {
    heading: "rest-apis",
    content: "**Channel information**"
  }, {
    heading: "rest-apis",
    content: "Query the channel list: Get the list of all channels under a specified project."
  }, {
    heading: "rest-apis",
    content: "Query the user list: Get the users in a specified channel."
  }, {
    heading: "rest-apis",
    content: "Query the host list: Get the hosts in a live-broadcasting channel."
  }, {
    heading: "rest-apis",
    content: "Query the user status: Check whether a specified user is in a channel."
  }, {
    heading: "rest-apis",
    content: "**User privilege banning**"
  }, {
    heading: "rest-apis",
    content: "Create a banning rule: Ban a user from joining a channel or publishing audio and video."
  }, {
    heading: "rest-apis",
    content: "Delete a banning rule: Delete a specified banning rule."
  }, {
    heading: "rest-apis",
    content: "Get the banning rule list: Get all banning rules for a project."
  }, {
    heading: "rest-apis",
    content: "Update the banning rule expiration: Update the expiration time of a banning rule."
  }, {
    heading: "rest-apis",
    content: "**Message notification service**"
  }, {
    heading: "rest-apis",
    content: "Query the IP address: Retrieve the IP addresses of the Agora Notifications service."
  }, {
    heading: "supporting-topics",
    content: "How to call RESTful APIs"
  }, {
    heading: "supporting-topics",
    content: "RESTful authentication"
  }, {
    heading: "supporting-topics",
    content: "Response status codes"
  }, {
    heading: "supporting-topics",
    content: "Channel event types"
  }, {
    heading: "supporting-topics",
    content: "Ban user privileges best practices"
  }, {
    heading: "supporting-topics",
    content: "Ensure service reliability"
  }],
  headings: [{
    id: "key-features-and-use-cases",
    content: "Key features and use cases"
  }, {
    id: "api-basics",
    content: "API basics"
  }, {
    id: "rest-apis",
    content: "REST APIs"
  }, {
    id: "supporting-topics",
    content: "Supporting topics"
  }]
};
export let toc = [{
  depth: 2,
  url: "#key-features-and-use-cases",
  title: _jsx(_Fragment, {
    children: "Key features and use cases"
  })
}, {
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
    code: "code",
    h2: "h2",
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "In addition to the SDK that you integrate into the app client, Agora provides server-side RESTful APIs to manage real-time audio and video channels."
    }), `
`, _jsx(_components.p, {
      children: "This RTC REST API reference is the authoritative source for Channel Management REST APIs shared by Voice Calling, Video Calling, Broadcast Streaming, and Interactive Live Streaming. Product pages provide entry points and usage context; endpoint definitions live here."
    }), `
`, _jsx(_components.h2, {
      id: "key-features-and-use-cases",
      children: "Key features and use cases"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Key feature"
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Typical use cases"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Manage user privileges"
          }), _jsx(_components.td, {
            children: "Remove specified users from channels and prevent users from sending audio and video streams."
          }), _jsx(_components.td, {
            children: "Unauthorized users appear in a live broadcast, users disrupt a room, signaling messages are hijacked, or abnormal offline states interfere with user list updates."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Query channel information"
          }), _jsx(_components.td, {
            children: "Query online channels, users in a channel, hosts in a channel, and the status of a specified user."
          }), _jsx(_components.td, {
            children: "Sync channel status when the number of concurrent channels is limited, or query user lists and user status when real-time sync performance is not required."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Query notification service IPs"
          }), _jsx(_components.td, {
            children: "Retrieve Agora Notifications service IP addresses."
          }), _jsx(_components.td, {
            children: "Maintain firewall allowlists for message notification callbacks."
          })]
        })]
      })]
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
        }), ": All APIs require ", _jsx(_components.a, {
          href: "authentication",
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
          children: "https://api.agora.io"
        })]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "All request URLs and request bodies are case-sensitive. Use HTTPS for every request."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "rest-apis",
      children: "REST APIs"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Channel information"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "query-channel-list",
          children: "Query the channel list"
        }), ": Get the list of all channels under a specified project."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "query-user-list",
          children: "Query the user list"
        }), ": Get the users in a specified channel."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "query-host-list",
          children: "Query the host list"
        }), ": Get the hosts in a live-broadcasting channel."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "query-user-status",
          children: "Query the user status"
        }), ": Check whether a specified user is in a channel."]
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
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "create-ban-rule",
          children: "Create a banning rule"
        }), ": Ban a user from joining a channel or publishing audio and video."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "delete-ban-rule",
          children: "Delete a banning rule"
        }), ": Delete a specified banning rule."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "get-ban-rule-list",
          children: "Get the banning rule list"
        }), ": Get all banning rules for a project."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "update-ban-expiration",
          children: "Update the banning rule expiration"
        }), ": Update the expiration time of a banning rule."]
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
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "query-ip-address",
          children: "Query the IP address"
        }), ": Retrieve the IP addresses of the Agora Notifications service."]
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
          href: "how-to-call-api",
          children: "How to call RESTful APIs"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "authentication",
          children: "RESTful authentication"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "response-status-codes",
          children: "Response status codes"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "channel-event-types",
          children: "Channel event types"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "ban-user-privileges-best-practices",
          children: "Ban user privileges best practices"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "ensure-service-reliability",
          children: "Ensure service reliability"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
