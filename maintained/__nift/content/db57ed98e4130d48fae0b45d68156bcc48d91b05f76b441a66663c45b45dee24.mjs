import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Ensure service reliability",
  description: "Use domain fallback and retry strategies for RTC REST API requests."
};
export let _markdown = `

To ensure high availability of REST services, Agora enables you to switch domain names when you experience service outage due to regional network failures.

## Switch the domain name [#switch-the-domain-name]

1. Set the primary domain name based on the location of your service server:

   * If the DNS address of the service server is located outside mainland China, set the primary domain name to \`api.agora.io\`.
   * If the DNS address of the service server is in mainland China, set the primary domain name to \`api.sd-rtn.com\`.

2. If your attempt to initiate a REST API request using the primary domain fails, use the following retry strategy:

   * **Primary domain retry**: Retry using the same primary domain name.
   * **Alternate domain retry**: If the current primary domain name is \`api.sd-rtn.com\`, use \`api.agora.io\` as the alternate domain name. If the current primary domain name is \`api.agora.io\`, use \`api.sd-rtn.com\` as the alternate domain name.
   * **Adjacent domain retry**: If alternate domain retry fails, retry using a regional domain name adjacent to the current region.

For example, suppose your business server is located in Europe. You set the primary domain name to \`api.agora.io\`, and the business server resolves the primary domain to Germany. Germany is in Central Europe, corresponding to \`api-eu-central-1.agora.io\`. The adjacent region is Western Europe, so you can retry using \`api-eu-west-1.agora.io\` or \`api-eu-west-1.sd-rtn.com\`.

## Call frequency limit [#call-frequency-limit]

For each Agora account, not each App ID, the maximum call frequency is:

* 20 times per second for each API that queries online channel information.
* 10 times per second for each other API.

If your call frequency exceeds this limit, see [How can I avoid being frequency limited when calling Agora Server RESTful APIs?](/en/api-reference/faq/integration/restful_api_call_frequency) to optimize your call frequency.

## Precautions [#precautions]

* To avoid exceeding the call frequency limit with retry requests, use a backoff strategy. For example, wait 1 second before the first retry, 3 seconds before the second retry, and 6 seconds before the third retry.
* If the request fails because of a network problem rather than DNS resolution, skip alternate domain retry and proceed to adjacent domain retry.
* Before switching to a regional domain name, make sure the REST service you call, such as Channel Management, is deployed in that region.

## Domain name table [#domain-name-table]

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
    heading: "call-frequency-limit",
    content: "For each Agora account, not each App ID, the maximum call frequency is:"
  }, {
    heading: "call-frequency-limit",
    content: "20 times per second for each API that queries online channel information."
  }, {
    heading: "call-frequency-limit",
    content: "10 times per second for each other API."
  }, {
    heading: "call-frequency-limit",
    content: "If your call frequency exceeds this limit, see How can I avoid being frequency limited when calling Agora Server RESTful APIs? to optimize your call frequency."
  }, {
    heading: "precautions",
    content: "To avoid exceeding the call frequency limit with retry requests, use a backoff strategy. For example, wait 1 second before the first retry, 3 seconds before the second retry, and 6 seconds before the third retry."
  }, {
    heading: "precautions",
    content: "If the request fails because of a network problem rather than DNS resolution, skip alternate domain retry and proceed to adjacent domain retry."
  }, {
    heading: "precautions",
    content: "Before switching to a regional domain name, make sure the REST service you call, such as Channel Management, is deployed in that region."
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
    id: "switch-the-domain-name",
    content: "Switch the domain name"
  }, {
    id: "call-frequency-limit",
    content: "Call frequency limit"
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
  url: "#switch-the-domain-name",
  title: _jsx(_Fragment, {
    children: "Switch the domain name"
  })
}, {
  depth: 2,
  url: "#call-frequency-limit",
  title: _jsx(_Fragment, {
    children: "Call frequency limit"
  })
}, {
  depth: 2,
  url: "#precautions",
  title: _jsx(_Fragment, {
    children: "Precautions"
  })
}, {
  depth: 2,
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
    li: "li",
    ol: "ol",
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "To ensure high availability of REST services, Agora enables you to switch domain names when you experience service outage due to regional network failures."
    }), `
`, _jsx(_components.h2, {
      id: "switch-the-domain-name",
      children: "Switch the domain name"
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
`, _jsx(_components.h2, {
      id: "call-frequency-limit",
      children: "Call frequency limit"
    }), `
`, _jsx(_components.p, {
      children: "For each Agora account, not each App ID, the maximum call frequency is:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "20 times per second for each API that queries online channel information."
      }), `
`, _jsx(_components.li, {
        children: "10 times per second for each other API."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["If your call frequency exceeds this limit, see ", _jsx(_components.a, {
        href: "/en/api-reference/faq/integration/restful_api_call_frequency",
        children: "How can I avoid being frequency limited when calling Agora Server RESTful APIs?"
      }), " to optimize your call frequency."]
    }), `
`, _jsx(_components.h2, {
      id: "precautions",
      children: "Precautions"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "To avoid exceeding the call frequency limit with retry requests, use a backoff strategy. For example, wait 1 second before the first retry, 3 seconds before the second retry, and 6 seconds before the third retry."
      }), `
`, _jsx(_components.li, {
        children: "If the request fails because of a network problem rather than DNS resolution, skip alternate domain retry and proceed to adjacent domain retry."
      }), `
`, _jsx(_components.li, {
        children: "Before switching to a regional domain name, make sure the REST service you call, such as Channel Management, is deployed in that region."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
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
