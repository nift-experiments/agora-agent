import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Integration",
  description: "Best practices for integrating Media Gateway reliably in production."
};
export let _markdown = `

This document presents best practices for reliably integrating Media Gateway in your app. Before reading this document, follow the [Media Gateway quickstart](../quickstart.md) to understand the basic process of using Media Gateway.

## API call limits [#api-call-limits]

The Agora server limits the call rate of the Media Gateway API and returns the \`429 (Too Many Requests)\` status code when the rate limit is exceeded.

| API      | Calling rate limit per project |
| -------- | ------------------------------ |
| \`Create\` | 50 per second                  |
| \`Delete\` | 50 per second                  |
| \`Query\`  | 100 per second                 |
| \`Update\` | 50 per second                  |

## Maximum number of concurrent tasks [#maximum-number-of-concurrent-tasks]

The limitation for concurrent streams is:

* 10 for streams with video transcoding
* 50 for streams without transcoding

For higher quotas, contact [Agora technical support](mailto\\:support@agora.io).

## Ensure high availability of streaming services [#ensure-high-availability-of-streaming-services]

Agora provides alternate domain names to reduce outages caused by regional network failures.

| Geographical area             | Primary domain name                 | Alternate primary domain name | Secondary domain name                      |
| ----------------------------- | ----------------------------------- | ----------------------------- | ------------------------------------------ |
| North America                 | \`rtls-ingress-prod-na.agoramdn.com\` | \`na.rtmpg.rtelink.com\`        | \`na-backup.rtmpg.rtelink.com\`              |
| Europe                        | \`rtls-ingress-prod-eu.agoramdn.com\` | \`eu.rtmpg.rtelink.com\`        | \`eu-backup.rtmpg.rtelink.com\`              |
| Asia excluding Mainland China | \`rtls-ingress-prod-ap.agoramdn.com\` | \`ap.rtmpg.rtelink.com\`        | \`ap-backup.rtmpg.rtelink.com\`              |
| Mainland China                | \`rtls-ingress-prod-cn.agoramdn.com\` | none                          | \`rtls-ingress-prod-backup-cn.agoramdn.com\` |

Best practice:

1. Use the primary domain based on the geographical location of your source stream.
2. If the request fails, retry using the same primary domain.
3. If the retry still fails, try the alternate domain name.

## Ensure high availability of REST services [#ensure-high-availability-of-rest-services]

To ensure high availability of REST services, Agora enables you to switch domain names when you experience service outages due to regional network failures.

* If your service server is outside Mainland China, set the primary domain name to \`api.agora.io\`.
* If your service server is in Mainland China, set the primary domain name to \`api.sd-rtn.com\`.

If your primary-domain request fails, use a retry strategy with:

1. Primary domain retry
2. Alternate domain retry
3. Adjacent region domain retry

### Precautions [#precautions]

* Use a back-off strategy to avoid exceeding QPS limits with retry requests
* If the request fails because of a network problem rather than DNS resolution, skip alternate-domain retry and proceed to adjacent-domain retry
* Ensure that the REST services you use are deployed in the region you switch to

## Troubleshooting checklist [#troubleshooting-checklist]

| # | Importance | Check                                                                                                                                         |
| - | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | required   | The Media Gateway service has been enabled for your App ID                                                                                    |
| 2 | required   | The API call rate is below the maximum limit                                                                                                  |
| 3 | required   | The number of concurrent tasks in a project is less than 50                                                                                   |
| 4 | required   | The \`region\` is set to the geographical region of your media stream source, and the code is lowercase                                         |
| 5 | optional   | If calling the RESTful API fails, use a back-off strategy and inspect the response status                                                     |
| 6 | optional   | If RTMP or SRT streaming fails, ensure that the stream key has not expired and that OBS frame loss is normal                                  |
| 7 | optional   | If the streaming or REST service is unavailable due to a network failure, retry with the current primary domain first, then the backup domain |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This document presents best practices for reliably integrating Media Gateway in your app. Before reading this document, follow the Media Gateway quickstart to understand the basic process of using Media Gateway."
  }, {
    heading: "api-call-limits",
    content: "The Agora server limits the call rate of the Media Gateway API and returns the `429 (Too Many Requests)` status code when the rate limit is exceeded."
  }, {
    heading: "api-call-limits",
    content: "API"
  }, {
    heading: "api-call-limits",
    content: "Calling rate limit per project"
  }, {
    heading: "api-call-limits",
    content: "`Create`"
  }, {
    heading: "api-call-limits",
    content: "50 per second"
  }, {
    heading: "api-call-limits",
    content: "`Delete`"
  }, {
    heading: "api-call-limits",
    content: "50 per second"
  }, {
    heading: "api-call-limits",
    content: "`Query`"
  }, {
    heading: "api-call-limits",
    content: "100 per second"
  }, {
    heading: "api-call-limits",
    content: "`Update`"
  }, {
    heading: "api-call-limits",
    content: "50 per second"
  }, {
    heading: "maximum-number-of-concurrent-tasks",
    content: "The limitation for concurrent streams is:"
  }, {
    heading: "maximum-number-of-concurrent-tasks",
    content: "10 for streams with video transcoding"
  }, {
    heading: "maximum-number-of-concurrent-tasks",
    content: "50 for streams without transcoding"
  }, {
    heading: "maximum-number-of-concurrent-tasks",
    content: "For higher quotas, contact Agora technical support."
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "Agora provides alternate domain names to reduce outages caused by regional network failures."
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "Geographical area"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "Primary domain name"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "Alternate primary domain name"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "Secondary domain name"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "North America"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "`rtls-ingress-prod-na.agoramdn.com`"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "`na.rtmpg.rtelink.com`"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "`na-backup.rtmpg.rtelink.com`"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "Europe"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "`rtls-ingress-prod-eu.agoramdn.com`"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "`eu.rtmpg.rtelink.com`"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "`eu-backup.rtmpg.rtelink.com`"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "Asia excluding Mainland China"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "`rtls-ingress-prod-ap.agoramdn.com`"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "`ap.rtmpg.rtelink.com`"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "`ap-backup.rtmpg.rtelink.com`"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "Mainland China"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "`rtls-ingress-prod-cn.agoramdn.com`"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "none"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "`rtls-ingress-prod-backup-cn.agoramdn.com`"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "Best practice:"
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "Use the primary domain based on the geographical location of your source stream."
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "If the request fails, retry using the same primary domain."
  }, {
    heading: "ensure-high-availability-of-streaming-services",
    content: "If the retry still fails, try the alternate domain name."
  }, {
    heading: "ensure-high-availability-of-rest-services",
    content: "To ensure high availability of REST services, Agora enables you to switch domain names when you experience service outages due to regional network failures."
  }, {
    heading: "ensure-high-availability-of-rest-services",
    content: "If your service server is outside Mainland China, set the primary domain name to `api.agora.io`."
  }, {
    heading: "ensure-high-availability-of-rest-services",
    content: "If your service server is in Mainland China, set the primary domain name to `api.sd-rtn.com`."
  }, {
    heading: "ensure-high-availability-of-rest-services",
    content: "If your primary-domain request fails, use a retry strategy with:"
  }, {
    heading: "ensure-high-availability-of-rest-services",
    content: "Primary domain retry"
  }, {
    heading: "ensure-high-availability-of-rest-services",
    content: "Alternate domain retry"
  }, {
    heading: "ensure-high-availability-of-rest-services",
    content: "Adjacent region domain retry"
  }, {
    heading: "precautions",
    content: "Use a back-off strategy to avoid exceeding QPS limits with retry requests"
  }, {
    heading: "precautions",
    content: "If the request fails because of a network problem rather than DNS resolution, skip alternate-domain retry and proceed to adjacent-domain retry"
  }, {
    heading: "precautions",
    content: "Ensure that the REST services you use are deployed in the region you switch to"
  }, {
    heading: "troubleshooting-checklist",
    content: "#"
  }, {
    heading: "troubleshooting-checklist",
    content: "Importance"
  }, {
    heading: "troubleshooting-checklist",
    content: "Check"
  }, {
    heading: "troubleshooting-checklist",
    content: "1"
  }, {
    heading: "troubleshooting-checklist",
    content: "required"
  }, {
    heading: "troubleshooting-checklist",
    content: "The Media Gateway service has been enabled for your App ID"
  }, {
    heading: "troubleshooting-checklist",
    content: "2"
  }, {
    heading: "troubleshooting-checklist",
    content: "required"
  }, {
    heading: "troubleshooting-checklist",
    content: "The API call rate is below the maximum limit"
  }, {
    heading: "troubleshooting-checklist",
    content: "3"
  }, {
    heading: "troubleshooting-checklist",
    content: "required"
  }, {
    heading: "troubleshooting-checklist",
    content: "The number of concurrent tasks in a project is less than 50"
  }, {
    heading: "troubleshooting-checklist",
    content: "4"
  }, {
    heading: "troubleshooting-checklist",
    content: "required"
  }, {
    heading: "troubleshooting-checklist",
    content: "The `region` is set to the geographical region of your media stream source, and the code is lowercase"
  }, {
    heading: "troubleshooting-checklist",
    content: "5"
  }, {
    heading: "troubleshooting-checklist",
    content: "optional"
  }, {
    heading: "troubleshooting-checklist",
    content: "If calling the RESTful API fails, use a back-off strategy and inspect the response status"
  }, {
    heading: "troubleshooting-checklist",
    content: "6"
  }, {
    heading: "troubleshooting-checklist",
    content: "optional"
  }, {
    heading: "troubleshooting-checklist",
    content: "If RTMP or SRT streaming fails, ensure that the stream key has not expired and that OBS frame loss is normal"
  }, {
    heading: "troubleshooting-checklist",
    content: "7"
  }, {
    heading: "troubleshooting-checklist",
    content: "optional"
  }, {
    heading: "troubleshooting-checklist",
    content: "If the streaming or REST service is unavailable due to a network failure, retry with the current primary domain first, then the backup domain"
  }],
  headings: [{
    id: "api-call-limits",
    content: "API call limits"
  }, {
    id: "maximum-number-of-concurrent-tasks",
    content: "Maximum number of concurrent tasks"
  }, {
    id: "ensure-high-availability-of-streaming-services",
    content: "Ensure high availability of streaming services"
  }, {
    id: "ensure-high-availability-of-rest-services",
    content: "Ensure high availability of REST services"
  }, {
    id: "precautions",
    content: "Precautions"
  }, {
    id: "troubleshooting-checklist",
    content: "Troubleshooting checklist"
  }]
};
export let toc = [{
  depth: 2,
  url: "#api-call-limits",
  title: _jsx(_Fragment, {
    children: "API call limits"
  })
}, {
  depth: 2,
  url: "#maximum-number-of-concurrent-tasks",
  title: _jsx(_Fragment, {
    children: "Maximum number of concurrent tasks"
  })
}, {
  depth: 2,
  url: "#ensure-high-availability-of-streaming-services",
  title: _jsx(_Fragment, {
    children: "Ensure high availability of streaming services"
  })
}, {
  depth: 2,
  url: "#ensure-high-availability-of-rest-services",
  title: _jsx(_Fragment, {
    children: "Ensure high availability of REST services"
  })
}, {
  depth: 3,
  url: "#precautions",
  title: _jsx(_Fragment, {
    children: "Precautions"
  })
}, {
  depth: 2,
  url: "#troubleshooting-checklist",
  title: _jsx(_Fragment, {
    children: "Troubleshooting checklist"
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
    children: [_jsxs(_components.p, {
      children: ["This document presents best practices for reliably integrating Media Gateway in your app. Before reading this document, follow the ", _jsx(_components.a, {
        href: "../quickstart.md",
        children: "Media Gateway quickstart"
      }), " to understand the basic process of using Media Gateway."]
    }), `
`, _jsx(_components.h2, {
      id: "api-call-limits",
      children: "API call limits"
    }), `
`, _jsxs(_components.p, {
      children: ["The Agora server limits the call rate of the Media Gateway API and returns the ", _jsx(_components.code, {
        children: "429 (Too Many Requests)"
      }), " status code when the rate limit is exceeded."]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "Calling rate limit per project"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Create"
            })
          }), _jsx(_components.td, {
            children: "50 per second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Delete"
            })
          }), _jsx(_components.td, {
            children: "50 per second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Query"
            })
          }), _jsx(_components.td, {
            children: "100 per second"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Update"
            })
          }), _jsx(_components.td, {
            children: "50 per second"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "maximum-number-of-concurrent-tasks",
      children: "Maximum number of concurrent tasks"
    }), `
`, _jsx(_components.p, {
      children: "The limitation for concurrent streams is:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "10 for streams with video transcoding"
      }), `
`, _jsx(_components.li, {
        children: "50 for streams without transcoding"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For higher quotas, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "Agora technical support"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "ensure-high-availability-of-streaming-services",
      children: "Ensure high availability of streaming services"
    }), `
`, _jsx(_components.p, {
      children: "Agora provides alternate domain names to reduce outages caused by regional network failures."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Geographical area"
          }), _jsx(_components.th, {
            children: "Primary domain name"
          }), _jsx(_components.th, {
            children: "Alternate primary domain name"
          }), _jsx(_components.th, {
            children: "Secondary domain name"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "North America"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "rtls-ingress-prod-na.agoramdn.com"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "na.rtmpg.rtelink.com"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "na-backup.rtmpg.rtelink.com"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Europe"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "rtls-ingress-prod-eu.agoramdn.com"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "eu.rtmpg.rtelink.com"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "eu-backup.rtmpg.rtelink.com"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Asia excluding Mainland China"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "rtls-ingress-prod-ap.agoramdn.com"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ap.rtmpg.rtelink.com"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ap-backup.rtmpg.rtelink.com"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Mainland China"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "rtls-ingress-prod-cn.agoramdn.com"
            })
          }), _jsx(_components.td, {
            children: "none"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "rtls-ingress-prod-backup-cn.agoramdn.com"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "Best practice:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Use the primary domain based on the geographical location of your source stream."
      }), `
`, _jsx(_components.li, {
        children: "If the request fails, retry using the same primary domain."
      }), `
`, _jsx(_components.li, {
        children: "If the retry still fails, try the alternate domain name."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "ensure-high-availability-of-rest-services",
      children: "Ensure high availability of REST services"
    }), `
`, _jsx(_components.p, {
      children: "To ensure high availability of REST services, Agora enables you to switch domain names when you experience service outages due to regional network failures."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If your service server is outside Mainland China, set the primary domain name to ", _jsx(_components.code, {
          children: "api.agora.io"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["If your service server is in Mainland China, set the primary domain name to ", _jsx(_components.code, {
          children: "api.sd-rtn.com"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "If your primary-domain request fails, use a retry strategy with:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Primary domain retry"
      }), `
`, _jsx(_components.li, {
        children: "Alternate domain retry"
      }), `
`, _jsx(_components.li, {
        children: "Adjacent region domain retry"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "precautions",
      children: "Precautions"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Use a back-off strategy to avoid exceeding QPS limits with retry requests"
      }), `
`, _jsx(_components.li, {
        children: "If the request fails because of a network problem rather than DNS resolution, skip alternate-domain retry and proceed to adjacent-domain retry"
      }), `
`, _jsx(_components.li, {
        children: "Ensure that the REST services you use are deployed in the region you switch to"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "troubleshooting-checklist",
      children: "Troubleshooting checklist"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "#"
          }), _jsx(_components.th, {
            children: "Importance"
          }), _jsx(_components.th, {
            children: "Check"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1"
          }), _jsx(_components.td, {
            children: "required"
          }), _jsx(_components.td, {
            children: "The Media Gateway service has been enabled for your App ID"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "2"
          }), _jsx(_components.td, {
            children: "required"
          }), _jsx(_components.td, {
            children: "The API call rate is below the maximum limit"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "3"
          }), _jsx(_components.td, {
            children: "required"
          }), _jsx(_components.td, {
            children: "The number of concurrent tasks in a project is less than 50"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "4"
          }), _jsx(_components.td, {
            children: "required"
          }), _jsxs(_components.td, {
            children: ["The ", _jsx(_components.code, {
              children: "region"
            }), " is set to the geographical region of your media stream source, and the code is lowercase"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "5"
          }), _jsx(_components.td, {
            children: "optional"
          }), _jsx(_components.td, {
            children: "If calling the RESTful API fails, use a back-off strategy and inspect the response status"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "6"
          }), _jsx(_components.td, {
            children: "optional"
          }), _jsx(_components.td, {
            children: "If RTMP or SRT streaming fails, ensure that the stream key has not expired and that OBS frame loss is normal"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "7"
          }), _jsx(_components.td, {
            children: "optional"
          }), _jsx(_components.td, {
            children: "If the streaming or REST service is unavailable due to a network failure, retry with the current primary domain first, then the backup domain"
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
