import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Signaling Overview",
  description: "Send messages and track events using the Signaling REST API."
};
export let _markdown = `

The Signaling REST APIs provide server-side messaging capabilities that complement the Signaling SDK. Send messages to users and channels, retrieve conversation history, and track user events from your backend without requiring recipients to be actively connected.

## API basics [#api-basics]

All requests are sent to the host \`api.agora.io\`. See [Ensure service reliability](#ensure-service-reliability) for alternate domain names.

* **Authentication**: All APIs require [Basic Auth](authentication) for authentication.
* **Request**: Refer to the respective API examples.
* **Response**: The response content is in JSON format.
* **Base URL**:

  \`\`\`text
  https://api.agora.io/dev/v2/project/<appid>
  \`\`\`

  where \`<appid>\` is the Agora app ID for your project.

<CalloutContainer type="info">
  <CalloutDescription>
    - All the request URLs and request bodies are case-sensitive.
    - For each app ID, the maximum combined frequency of the peer-to-peer message and channel message APIs is 500 calls per second.
  </CalloutDescription>
</CalloutContainer>

## REST APIs [#rest-apis]

**Messaging APIs**

The messaging time delay from the server to the client must be less than 200 ms. Agora recommends that you use the Signaling SDK for Linux to send messages from the server to the client.

* [Send peer-to-peer message](peer-to-peer-message): Sends a peer-to-peer message from the server. The user who sends the message does not have to log in to Signaling.
* [Send channel message](channel-message): Sends a channel message from the server. You can send a message to a channel without joining it first.
* [Get message history](message-history): Retrieves historical messages from the specified channel. Returns messages based on timestamp range and message count parameters.

**Event APIs**

* [Get user events](user-events): Gets user login and logout events from the Signaling server. Events are removed from the server once retrieved.
* [Get channel events](channel-events): Gets channel join and leave events from the Signaling server. Events are removed from the server once retrieved.

## Ensure service reliability [#ensure-service-reliability]

This section presents the overall strategy you use to ensure high availability of REST services.

### Switch the domain name [#switch-the-domain-name]

To ensure high availability of REST services, Agora enables you to switch domain names when you experience service outage due to regional network failures.

1. Set the primary domain name based on the location of your service server:

   * If the DNS address of the service server is located outside mainland China, set the primary domain name to \`api.agora.io\`.
   * If the DNS address of the service server is in mainland China, set the primary domain name to \`api.sd-rtn.com\`.

2. If your attempt to initiate a REST API request using the primary domain fails, use the following retry strategy:

   * **Primary domain retry**: Retry using the same primary domain name.
   * **Alternate domain retry**: If the current primary domain name is \`api.sd-rtn.com\`, use \`api.agora.io\` as the alternate domain name. If the current primary domain name is \`api.agora.io\`, use \`api.sd-rtn.com\` as the alternate domain name.
   * **Adjacent domain retry**: If alternate domain retry fails, retry using a regional domain name adjacent to the current region.

For example, suppose your business server is located in Europe. You set the primary domain name to \`api.agora.io\`, and the business server resolves the primary domain to Germany. Germany is in Central Europe, corresponding to \`api-eu-central-1.agora.io\`. The adjacent region is Western Europe, so you can retry using \`api-eu-west-1.agora.io\` or \`api-eu-west-1.sd-rtn.com\`.

### Precautions [#precautions]

* To avoid exceeding the QPS limit with retry requests, use a backoff strategy. For example, wait 1 second before the first retry, 3 seconds before the second retry, and 6 seconds before the third retry.
* If the request fails because of a network problem rather than DNS resolution, skip alternate domain retry and proceed to adjacent domain retry.
* Before switching to a regional domain name, make sure the REST service you call is deployed in that region.

### Domain name table [#domain-name-table]

| Primary domain name | Region domain name              | Region                 |
| ------------------- | ------------------------------- | ---------------------- |
| \`api.sd-rtn.com\`    | \`api-us-west-1.sd-rtn.com\`      | Western United States  |
| \`api.sd-rtn.com\`    | \`api-us-east-1.sd-rtn.com\`      | Eastern United States  |
| \`api.sd-rtn.com\`    | \`api-ap-southeast-1.sd-rtn.com\` | Southeast Asia Pacific |
| \`api.sd-rtn.com\`    | \`api-ap-northeast-1.sd-rtn.com\` | Northeast Asia Pacific |
| \`api.sd-rtn.com\`    | \`api-eu-west-1.sd-rtn.com\`      | Western Europe         |
| \`api.sd-rtn.com\`    | \`api-eu-central-1.sd-rtn.com\`   | Central Europe         |
| \`api.sd-rtn.com\`    | \`api-cn-east-1.sd-rtn.com\`      | East China             |
| \`api.sd-rtn.com\`    | \`api-cn-north-1.sd-rtn.com\`     | North China            |
| \`api.agora.io\`      | \`api-us-west-1.agora.io\`        | Western United States  |
| \`api.agora.io\`      | \`api-us-east-1.agora.io\`        | Eastern United States  |
| \`api.agora.io\`      | \`api-ap-southeast-1.agora.io\`   | Southeast Asia Pacific |
| \`api.agora.io\`      | \`api-ap-northeast-1.agora.io\`   | Northeast Asia Pacific |
| \`api.agora.io\`      | \`api-eu-west-1.agora.io\`        | Western Europe         |
| \`api.agora.io\`      | \`api-eu-central-1.agora.io\`     | Central Europe         |
| \`api.agora.io\`      | \`api-cn-east-1.agora.io\`        | East China             |
| \`api.agora.io\`      | \`api-cn-north-1.agora.io\`       | North China            |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Signaling REST APIs provide server-side messaging capabilities that complement the Signaling SDK. Send messages to users and channels, retrieve conversation history, and track user events from your backend without requiring recipients to be actively connected."
  }, {
    heading: "api-basics",
    content: "All requests are sent to the host `api.agora.io`. See Ensure service reliability for alternate domain names."
  }, {
    heading: "api-basics",
    content: "**Authentication**: All APIs require Basic Auth for authentication."
  }, {
    heading: "api-basics",
    content: "**Request**: Refer to the respective API examples."
  }, {
    heading: "api-basics",
    content: "**Response**: The response content is in JSON format."
  }, {
    heading: "api-basics",
    content: "**Base URL**:"
  }, {
    heading: "api-basics",
    content: "where `<appid>` is the Agora app ID for your project."
  }, {
    heading: "api-basics",
    content: "All the request URLs and request bodies are case-sensitive."
  }, {
    heading: "api-basics",
    content: "For each app ID, the maximum combined frequency of the peer-to-peer message and channel message APIs is 500 calls per second."
  }, {
    heading: "rest-apis",
    content: "**Messaging APIs**"
  }, {
    heading: "rest-apis",
    content: "The messaging time delay from the server to the client must be less than 200 ms. Agora recommends that you use the Signaling SDK for Linux to send messages from the server to the client."
  }, {
    heading: "rest-apis",
    content: "Send peer-to-peer message: Sends a peer-to-peer message from the server. The user who sends the message does not have to log in to Signaling."
  }, {
    heading: "rest-apis",
    content: "Send channel message: Sends a channel message from the server. You can send a message to a channel without joining it first."
  }, {
    heading: "rest-apis",
    content: "Get message history: Retrieves historical messages from the specified channel. Returns messages based on timestamp range and message count parameters."
  }, {
    heading: "rest-apis",
    content: "**Event APIs**"
  }, {
    heading: "rest-apis",
    content: "Get user events: Gets user login and logout events from the Signaling server. Events are removed from the server once retrieved."
  }, {
    heading: "rest-apis",
    content: "Get channel events: Gets channel join and leave events from the Signaling server. Events are removed from the server once retrieved."
  }, {
    heading: "ensure-service-reliability",
    content: "This section presents the overall strategy you use to ensure high availability of REST services."
  }, {
    heading: "switch-the-domain-name",
    content: "To ensure high availability of REST services, Agora enables you to switch domain names when you experience service outage due to regional network failures."
  }, {
    heading: "switch-the-domain-name",
    content: "Set the primary domain name based on the location of your service server:"
  }, {
    heading: "switch-the-domain-name",
    content: "If the DNS address of the service server is located outside mainland China, set the primary domain name to `api.agora.io`."
  }, {
    heading: "switch-the-domain-name",
    content: "If the DNS address of the service server is in mainland China, set the primary domain name to `api.sd-rtn.com`."
  }, {
    heading: "switch-the-domain-name",
    content: "If your attempt to initiate a REST API request using the primary domain fails, use the following retry strategy:"
  }, {
    heading: "switch-the-domain-name",
    content: "**Primary domain retry**: Retry using the same primary domain name."
  }, {
    heading: "switch-the-domain-name",
    content: "**Alternate domain retry**: If the current primary domain name is `api.sd-rtn.com`, use `api.agora.io` as the alternate domain name. If the current primary domain name is `api.agora.io`, use `api.sd-rtn.com` as the alternate domain name."
  }, {
    heading: "switch-the-domain-name",
    content: "**Adjacent domain retry**: If alternate domain retry fails, retry using a regional domain name adjacent to the current region."
  }, {
    heading: "switch-the-domain-name",
    content: "For example, suppose your business server is located in Europe. You set the primary domain name to `api.agora.io`, and the business server resolves the primary domain to Germany. Germany is in Central Europe, corresponding to `api-eu-central-1.agora.io`. The adjacent region is Western Europe, so you can retry using `api-eu-west-1.agora.io` or `api-eu-west-1.sd-rtn.com`."
  }, {
    heading: "precautions",
    content: "To avoid exceeding the QPS limit with retry requests, use a backoff strategy. For example, wait 1 second before the first retry, 3 seconds before the second retry, and 6 seconds before the third retry."
  }, {
    heading: "precautions",
    content: "If the request fails because of a network problem rather than DNS resolution, skip alternate domain retry and proceed to adjacent domain retry."
  }, {
    heading: "precautions",
    content: "Before switching to a regional domain name, make sure the REST service you call is deployed in that region."
  }, {
    heading: "domain-name-table",
    content: "Primary domain name"
  }, {
    heading: "domain-name-table",
    content: "Region domain name"
  }, {
    heading: "domain-name-table",
    content: "Region"
  }, {
    heading: "domain-name-table",
    content: "`api.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "`api-us-west-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Western United States"
  }, {
    heading: "domain-name-table",
    content: "`api.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "`api-us-east-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Eastern United States"
  }, {
    heading: "domain-name-table",
    content: "`api.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "`api-ap-southeast-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Southeast Asia Pacific"
  }, {
    heading: "domain-name-table",
    content: "`api.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "`api-ap-northeast-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Northeast Asia Pacific"
  }, {
    heading: "domain-name-table",
    content: "`api.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "`api-eu-west-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Western Europe"
  }, {
    heading: "domain-name-table",
    content: "`api.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "`api-eu-central-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Central Europe"
  }, {
    heading: "domain-name-table",
    content: "`api.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "`api-cn-east-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "East China"
  }, {
    heading: "domain-name-table",
    content: "`api.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "`api-cn-north-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "North China"
  }, {
    heading: "domain-name-table",
    content: "`api.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "`api-us-west-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Western United States"
  }, {
    heading: "domain-name-table",
    content: "`api.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "`api-us-east-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Eastern United States"
  }, {
    heading: "domain-name-table",
    content: "`api.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "`api-ap-southeast-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Southeast Asia Pacific"
  }, {
    heading: "domain-name-table",
    content: "`api.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "`api-ap-northeast-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Northeast Asia Pacific"
  }, {
    heading: "domain-name-table",
    content: "`api.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "`api-eu-west-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Western Europe"
  }, {
    heading: "domain-name-table",
    content: "`api.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "`api-eu-central-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Central Europe"
  }, {
    heading: "domain-name-table",
    content: "`api.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "`api-cn-east-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "East China"
  }, {
    heading: "domain-name-table",
    content: "`api.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "`api-cn-north-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "North China"
  }],
  headings: [{
    id: "api-basics",
    content: "API basics"
  }, {
    id: "rest-apis",
    content: "REST APIs"
  }, {
    id: "ensure-service-reliability",
    content: "Ensure service reliability"
  }, {
    id: "switch-the-domain-name",
    content: "Switch the domain name"
  }, {
    id: "precautions",
    content: "Precautions"
  }, {
    id: "domain-name-table",
    content: "Domain name table"
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
}, {
  depth: 2,
  url: "#ensure-service-reliability",
  title: _jsx(_Fragment, {
    children: "Ensure service reliability"
  })
}, {
  depth: 3,
  url: "#switch-the-domain-name",
  title: _jsx(_Fragment, {
    children: "Switch the domain name"
  })
}, {
  depth: 3,
  url: "#precautions",
  title: _jsx(_Fragment, {
    children: "Precautions"
  })
}, {
  depth: 3,
  url: "#domain-name-table",
  title: _jsx(_Fragment, {
    children: "Domain name table"
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
      children: "The Signaling REST APIs provide server-side messaging capabilities that complement the Signaling SDK. Send messages to users and channels, retrieve conversation history, and track user events from your backend without requiring recipients to be actively connected."
    }), `
`, _jsx(_components.h2, {
      id: "api-basics",
      children: "API basics"
    }), `
`, _jsxs(_components.p, {
      children: ["All requests are sent to the host ", _jsx(_components.code, {
        children: "api.agora.io"
      }), ". See ", _jsx(_components.a, {
        href: "#ensure-service-reliability",
        children: "Ensure service reliability"
      }), " for alternate domain names."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Authentication"
          }), ": All APIs require ", _jsx(_components.a, {
            href: "authentication",
            children: "Basic Auth"
          }), " for authentication."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Request"
          }), ": Refer to the respective API examples."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Response"
          }), ": The response content is in JSON format."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Base URL"
          }), ":"]
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
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "https://api.agora.io/dev/v2/project/"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "<appid>"
                })]
              })
            })
          })
        }), `
`, _jsxs(_components.p, {
          children: ["where ", _jsx(_components.code, {
            children: "<appid>"
          }), " is the Agora app ID for your project."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "All the request URLs and request bodies are case-sensitive."
          }), `
`, _jsx(_components.li, {
            children: "For each app ID, the maximum combined frequency of the peer-to-peer message and channel message APIs is 500 calls per second."
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
        children: "Messaging APIs"
      })
    }), `
`, _jsx(_components.p, {
      children: "The messaging time delay from the server to the client must be less than 200 ms. Agora recommends that you use the Signaling SDK for Linux to send messages from the server to the client."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "peer-to-peer-message",
          children: "Send peer-to-peer message"
        }), ": Sends a peer-to-peer message from the server. The user who sends the message does not have to log in to Signaling."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "channel-message",
          children: "Send channel message"
        }), ": Sends a channel message from the server. You can send a message to a channel without joining it first."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "message-history",
          children: "Get message history"
        }), ": Retrieves historical messages from the specified channel. Returns messages based on timestamp range and message count parameters."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Event APIs"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "user-events",
          children: "Get user events"
        }), ": Gets user login and logout events from the Signaling server. Events are removed from the server once retrieved."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "channel-events",
          children: "Get channel events"
        }), ": Gets channel join and leave events from the Signaling server. Events are removed from the server once retrieved."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "ensure-service-reliability",
      children: "Ensure service reliability"
    }), `
`, _jsx(_components.p, {
      children: "This section presents the overall strategy you use to ensure high availability of REST services."
    }), `
`, _jsx(_components.h3, {
      id: "switch-the-domain-name",
      children: "Switch the domain name"
    }), `
`, _jsx(_components.p, {
      children: "To ensure high availability of REST services, Agora enables you to switch domain names when you experience service outage due to regional network failures."
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Set the primary domain name based on the location of your service server:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If the DNS address of the service server is located outside mainland China, set the primary domain name to ", _jsx(_components.code, {
              children: "api.agora.io"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["If the DNS address of the service server is in mainland China, set the primary domain name to ", _jsx(_components.code, {
              children: "api.sd-rtn.com"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If your attempt to initiate a REST API request using the primary domain fails, use the following retry strategy:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Primary domain retry"
            }), ": Retry using the same primary domain name."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Alternate domain retry"
            }), ": If the current primary domain name is ", _jsx(_components.code, {
              children: "api.sd-rtn.com"
            }), ", use ", _jsx(_components.code, {
              children: "api.agora.io"
            }), " as the alternate domain name. If the current primary domain name is ", _jsx(_components.code, {
              children: "api.agora.io"
            }), ", use ", _jsx(_components.code, {
              children: "api.sd-rtn.com"
            }), " as the alternate domain name."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Adjacent domain retry"
            }), ": If alternate domain retry fails, retry using a regional domain name adjacent to the current region."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For example, suppose your business server is located in Europe. You set the primary domain name to ", _jsx(_components.code, {
        children: "api.agora.io"
      }), ", and the business server resolves the primary domain to Germany. Germany is in Central Europe, corresponding to ", _jsx(_components.code, {
        children: "api-eu-central-1.agora.io"
      }), ". The adjacent region is Western Europe, so you can retry using ", _jsx(_components.code, {
        children: "api-eu-west-1.agora.io"
      }), " or ", _jsx(_components.code, {
        children: "api-eu-west-1.sd-rtn.com"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "precautions",
      children: "Precautions"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "To avoid exceeding the QPS limit with retry requests, use a backoff strategy. For example, wait 1 second before the first retry, 3 seconds before the second retry, and 6 seconds before the third retry."
      }), `
`, _jsx(_components.li, {
        children: "If the request fails because of a network problem rather than DNS resolution, skip alternate domain retry and proceed to adjacent domain retry."
      }), `
`, _jsx(_components.li, {
        children: "Before switching to a regional domain name, make sure the REST service you call is deployed in that region."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "domain-name-table",
      children: "Domain name table"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Primary domain name"
          }), _jsx(_components.th, {
            children: "Region domain name"
          }), _jsx(_components.th, {
            children: "Region"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api-us-west-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            children: "Western United States"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api-us-east-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            children: "Eastern United States"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api-ap-southeast-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            children: "Southeast Asia Pacific"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api-ap-northeast-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            children: "Northeast Asia Pacific"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api-eu-west-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            children: "Western Europe"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api-eu-central-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            children: "Central Europe"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api-cn-east-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            children: "East China"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api-cn-north-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            children: "North China"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api.agora.io"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api-us-west-1.agora.io"
            })
          }), _jsx(_components.td, {
            children: "Western United States"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api.agora.io"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api-us-east-1.agora.io"
            })
          }), _jsx(_components.td, {
            children: "Eastern United States"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api.agora.io"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api-ap-southeast-1.agora.io"
            })
          }), _jsx(_components.td, {
            children: "Southeast Asia Pacific"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api.agora.io"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api-ap-northeast-1.agora.io"
            })
          }), _jsx(_components.td, {
            children: "Northeast Asia Pacific"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api.agora.io"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api-eu-west-1.agora.io"
            })
          }), _jsx(_components.td, {
            children: "Western Europe"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api.agora.io"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api-eu-central-1.agora.io"
            })
          }), _jsx(_components.td, {
            children: "Central Europe"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api.agora.io"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api-cn-east-1.agora.io"
            })
          }), _jsx(_components.td, {
            children: "East China"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api.agora.io"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "api-cn-north-1.agora.io"
            })
          }), _jsx(_components.td, {
            children: "North China"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
