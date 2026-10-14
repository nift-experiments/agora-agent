import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Ensure high availability",
  description: "Guidelines to ensure high availability of transcoding service."
};
export let _markdown = `

To ensure the high availability of cloud transcoding services and reduce the impact of network failures, Agora offers solutions such as failover migration, multi-task redundancy, and domain name fallback.

### Failover migration [#failover-migration]

To minimize the impact of failures due to network issues, third-party infrastructure, or force majeure events, Agora provides automatic high-availability task migration. Once a failure is detected, the service attempts to migrate the task within 90 seconds. During this process, there is a risk of transcoding interruptions.

For scenarios with a large number of viewers or where ultra-high availability is required, consider whether the temporary impact of a failover is acceptable for your use case. To improve reliability:

* Start multiple transcoding tasks using different \`uid\`s in the output channel.
* Periodically [check the transcoding task status](/en/api-reference/cloud-transcoding/restful) and use a backup \`uid\` to immediately initiate a new task if a failure is detected. This ensures uninterrupted delivery of critical streams.

<CalloutContainer type="warning">
  <CalloutDescription>
    The RESTful APIs support only HTTP 1.1 and HTTP 2.0. When using HTTPS, ensure that the connection is encrypted using TLS 1.0, 1.1, or 1.2. Other protocol versions may cause connection failures.
  </CalloutDescription>
</CalloutContainer>

### Multi-task redundancy [#multi-task-redundancy]

For a higher level of reliability than failover alone, implement a multi-task redundancy strategy.

<CalloutContainer type="info">
  <CalloutDescription>
    Each cloud transcoding task is billed independently. For billing information, contact [technical support](mailto\\:support@agora.io).
  </CalloutDescription>
</CalloutContainer>

To implement multi-task redundancy:

1. Start a primary and a backup transcoding task simultaneously. Both tasks transcode the same source stream and push the output to the same or separate channels. Audience members subscribe to the \`uid\` used by the primary task.

2. On the client side, monitor the following callback events to detect interruptions and switch to the backup task if needed:

   * The [\`onUserOffline\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onuseroffline) callback when the transcoder (host) goes offline.
   * Stream state change callbacks: [\`onRemoteAudioStateChanged\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onremoteaudiostatechanged) and [\`onRemoteVideoStateChanged\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onremotevideostatechanged).

### Switch the domain name [#switch-the-domain-name]

To ensure high availability of REST services, Agora enables you to switch domain names when you experience service outage due to regional network failures. Take the following steps to set up and switch your domain name:

1. Set the primary domain name based on the location of your service server:
   * If the DNS address of the service server is located in a country or region other than mainland China, set the primary domain name to \`api.agora.io\`.
   * If the DNS address of the service server is in mainland China, set the primary domain name to \`api.sd-rtn.com\`.

2. If your attempt to initiate a RESTful API request using the primary domain fails, set up your retry strategy as follows:

   1. **Primary domain retry**: Retry using the same primary domain name.

   2. **Alternate domain retry**:
      * If the current primary domain name is \`api.sd-rtn.com\`, use \`api.agora.io\` as the alternate domain name.
      * If the current primary domain name is \`api.agora.io\`, use \`api.sd-rtn.com\` as the alternate domain name.

   3. **Adjacent domain retry**: If alternate domain retry fails, retry using the domain name adjacent to the current region.

      For example, suppose your business server is located in Europe. You set the primary domain name to \`api.agora.io\`, and the business server resolves the primary domain name to Germany. Germany is located in central Europe (\`api-eu-central-1.agora.io\`). The [domain name table](#domain-name-table) shows that the adjacent area is West Europe. Use the \`api-eu-west-1.agora.io\` or \`api-eu-west-1.sd-rtn.com\` domain name to retry.

#### Precautions [#precautions]

Take the following precautions when setting up your retry strategy:

* To avoid exceeding the QPS limit with retry requests, best practice is to use a back-off strategy. For example, wait 1 second before you retry for the first time, wait 3 seconds before retrying the second time, and wait 6 seconds before retry a third time.

* If the request fails because of a network problem rather than a DNS domain name resolution problem, skip alternate domain retry and proceed to adjacent domain retry.

* Before switching to the region domain name, ensure that the REST services you wish to use, for example, cloud recording or channel management, are deployed in that region.

### Domain name table [#domain-name-table]

The following table shows the primary and region domain names for various regions.

| Primary domain name | Region domain name              | Region                 |
| :------------------ | :------------------------------ | :--------------------- |
| \`api.sd-rtn.com\`    | \`api-us-west-1.sd-rtn.com\`      | Western United States  |
|                     | \`api-us-east-1.sd-rtn.com\`      | Eastern United States  |
|                     | \`api-ap-southeast-1.sd-rtn.com\` | Southeast Asia Pacific |
|                     | \`api-ap-northeast-1.sd-rtn.com\` | Northeast Asia Pacific |
|                     | \`api-eu-west-1.sd-rtn.com\`      | Western Europe         |
|                     | \`api-eu-central-1.sd-rtn.com\`   | Central Europe         |
|                     | \`api-cn-east-1.sd-rtn.com\`      | East China             |
|                     | \`api-cn-north-1.sd-rtn.com\`     | North China            |
| \`api.agora.io\`      | \`api-us-west-1.agora.io\`        | Western United States  |
|                     | \`api-us-east-1.agora.io\`        | Eastern United States  |
|                     | \`api-ap-southeast-1.agora.io\`   | Southeast Asia Pacific |
|                     | \`api-ap-northeast-1.agora.io\`   | Northeast Asia Pacific |
|                     | \`api-eu-west-1.agora.io\`        | Western Europe         |
|                     | \`api-eu-central-1.agora.io\`     | Central Europe         |
|                     | \`api-cn-east-1.agora.io\`        | East China             |
|                     | \`api-cn-north-1.agora.io\`       | North China            |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To ensure the high availability of cloud transcoding services and reduce the impact of network failures, Agora offers solutions such as failover migration, multi-task redundancy, and domain name fallback."
  }, {
    heading: "failover-migration",
    content: "To minimize the impact of failures due to network issues, third-party infrastructure, or force majeure events, Agora provides automatic high-availability task migration. Once a failure is detected, the service attempts to migrate the task within 90 seconds. During this process, there is a risk of transcoding interruptions."
  }, {
    heading: "failover-migration",
    content: "For scenarios with a large number of viewers or where ultra-high availability is required, consider whether the temporary impact of a failover is acceptable for your use case. To improve reliability:"
  }, {
    heading: "failover-migration",
    content: "Start multiple transcoding tasks using different `uid`s in the output channel."
  }, {
    heading: "failover-migration",
    content: "Periodically check the transcoding task status and use a backup `uid` to immediately initiate a new task if a failure is detected. This ensures uninterrupted delivery of critical streams."
  }, {
    heading: "failover-migration",
    content: "The RESTful APIs support only HTTP 1.1 and HTTP 2.0. When using HTTPS, ensure that the connection is encrypted using TLS 1.0, 1.1, or 1.2. Other protocol versions may cause connection failures."
  }, {
    heading: "multi-task-redundancy",
    content: "For a higher level of reliability than failover alone, implement a multi-task redundancy strategy."
  }, {
    heading: "multi-task-redundancy",
    content: "Each cloud transcoding task is billed independently. For billing information, contact technical support."
  }, {
    heading: "multi-task-redundancy",
    content: "To implement multi-task redundancy:"
  }, {
    heading: "multi-task-redundancy",
    content: "Start a primary and a backup transcoding task simultaneously. Both tasks transcode the same source stream and push the output to the same or separate channels. Audience members subscribe to the `uid` used by the primary task."
  }, {
    heading: "multi-task-redundancy",
    content: "On the client side, monitor the following callback events to detect interruptions and switch to the backup task if needed:"
  }, {
    heading: "multi-task-redundancy",
    content: "The `onUserOffline` callback when the transcoder (host) goes offline."
  }, {
    heading: "multi-task-redundancy",
    content: "Stream state change callbacks: `onRemoteAudioStateChanged` and `onRemoteVideoStateChanged`."
  }, {
    heading: "switch-the-domain-name",
    content: "To ensure high availability of REST services, Agora enables you to switch domain names when you experience service outage due to regional network failures. Take the following steps to set up and switch your domain name:"
  }, {
    heading: "switch-the-domain-name",
    content: "Set the primary domain name based on the location of your service server:"
  }, {
    heading: "switch-the-domain-name",
    content: "If the DNS address of the service server is located in a country or region other than mainland China, set the primary domain name to `api.agora.io`."
  }, {
    heading: "switch-the-domain-name",
    content: "If the DNS address of the service server is in mainland China, set the primary domain name to `api.sd-rtn.com`."
  }, {
    heading: "switch-the-domain-name",
    content: "If your attempt to initiate a RESTful API request using the primary domain fails, set up your retry strategy as follows:"
  }, {
    heading: "switch-the-domain-name",
    content: "**Primary domain retry**: Retry using the same primary domain name."
  }, {
    heading: "switch-the-domain-name",
    content: "**Alternate domain retry**:"
  }, {
    heading: "switch-the-domain-name",
    content: "If the current primary domain name is `api.sd-rtn.com`, use `api.agora.io` as the alternate domain name."
  }, {
    heading: "switch-the-domain-name",
    content: "If the current primary domain name is `api.agora.io`, use `api.sd-rtn.com` as the alternate domain name."
  }, {
    heading: "switch-the-domain-name",
    content: "**Adjacent domain retry**: If alternate domain retry fails, retry using the domain name adjacent to the current region."
  }, {
    heading: "switch-the-domain-name",
    content: "For example, suppose your business server is located in Europe. You set the primary domain name to `api.agora.io`, and the business server resolves the primary domain name to Germany. Germany is located in central Europe (`api-eu-central-1.agora.io`). The domain name table shows that the adjacent area is West Europe. Use the `api-eu-west-1.agora.io` or `api-eu-west-1.sd-rtn.com` domain name to retry."
  }, {
    heading: "precautions",
    content: "Take the following precautions when setting up your retry strategy:"
  }, {
    heading: "precautions",
    content: "To avoid exceeding the QPS limit with retry requests, best practice is to use a back-off strategy. For example, wait 1 second before you retry for the first time, wait 3 seconds before retrying the second time, and wait 6 seconds before retry a third time."
  }, {
    heading: "precautions",
    content: "If the request fails because of a network problem rather than a DNS domain name resolution problem, skip alternate domain retry and proceed to adjacent domain retry."
  }, {
    heading: "precautions",
    content: "Before switching to the region domain name, ensure that the REST services you wish to use, for example, cloud recording or channel management, are deployed in that region."
  }, {
    heading: "domain-name-table",
    content: "The following table shows the primary and region domain names for various regions."
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
    content: "`api-us-east-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Eastern United States"
  }, {
    heading: "domain-name-table",
    content: "`api-ap-southeast-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Southeast Asia Pacific"
  }, {
    heading: "domain-name-table",
    content: "`api-ap-northeast-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Northeast Asia Pacific"
  }, {
    heading: "domain-name-table",
    content: "`api-eu-west-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Western Europe"
  }, {
    heading: "domain-name-table",
    content: "`api-eu-central-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Central Europe"
  }, {
    heading: "domain-name-table",
    content: "`api-cn-east-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "East China"
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
    content: "`api-us-east-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Eastern United States"
  }, {
    heading: "domain-name-table",
    content: "`api-ap-southeast-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Southeast Asia Pacific"
  }, {
    heading: "domain-name-table",
    content: "`api-ap-northeast-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Northeast Asia Pacific"
  }, {
    heading: "domain-name-table",
    content: "`api-eu-west-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Western Europe"
  }, {
    heading: "domain-name-table",
    content: "`api-eu-central-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Central Europe"
  }, {
    heading: "domain-name-table",
    content: "`api-cn-east-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "East China"
  }, {
    heading: "domain-name-table",
    content: "`api-cn-north-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "North China"
  }],
  headings: [{
    id: "failover-migration",
    content: "Failover migration"
  }, {
    id: "multi-task-redundancy",
    content: "Multi-task redundancy"
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
  depth: 3,
  url: "#failover-migration",
  title: _jsx(_Fragment, {
    children: "Failover migration"
  })
}, {
  depth: 3,
  url: "#multi-task-redundancy",
  title: _jsx(_Fragment, {
    children: "Multi-task redundancy"
  })
}, {
  depth: 3,
  url: "#switch-the-domain-name",
  title: _jsx(_Fragment, {
    children: "Switch the domain name"
  })
}, {
  depth: 4,
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
    h3: "h3",
    h4: "h4",
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "To ensure the high availability of cloud transcoding services and reduce the impact of network failures, Agora offers solutions such as failover migration, multi-task redundancy, and domain name fallback."
    }), `
`, _jsx(_components.h3, {
      id: "failover-migration",
      children: "Failover migration"
    }), `
`, _jsx(_components.p, {
      children: "To minimize the impact of failures due to network issues, third-party infrastructure, or force majeure events, Agora provides automatic high-availability task migration. Once a failure is detected, the service attempts to migrate the task within 90 seconds. During this process, there is a risk of transcoding interruptions."
    }), `
`, _jsx(_components.p, {
      children: "For scenarios with a large number of viewers or where ultra-high availability is required, consider whether the temporary impact of a failover is acceptable for your use case. To improve reliability:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Start multiple transcoding tasks using different ", _jsx(_components.code, {
          children: "uid"
        }), "s in the output channel."]
      }), `
`, _jsxs(_components.li, {
        children: ["Periodically ", _jsx(_components.a, {
          href: "/en/api-reference/cloud-transcoding/restful",
          children: "check the transcoding task status"
        }), " and use a backup ", _jsx(_components.code, {
          children: "uid"
        }), " to immediately initiate a new task if a failure is detected. This ensures uninterrupted delivery of critical streams."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "warning",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "The RESTful APIs support only HTTP 1.1 and HTTP 2.0. When using HTTPS, ensure that the connection is encrypted using TLS 1.0, 1.1, or 1.2. Other protocol versions may cause connection failures."
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "multi-task-redundancy",
      children: "Multi-task redundancy"
    }), `
`, _jsx(_components.p, {
      children: "For a higher level of reliability than failover alone, implement a multi-task redundancy strategy."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Each cloud transcoding task is billed independently. For billing information, contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "technical support"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "To implement multi-task redundancy:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Start a primary and a backup transcoding task simultaneously. Both tasks transcode the same source stream and push the output to the same or separate channels. Audience members subscribe to the ", _jsx(_components.code, {
            children: "uid"
          }), " used by the primary task."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "On the client side, monitor the following callback events to detect interruptions and switch to the backup task if needed:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onuseroffline",
              children: _jsx(_components.code, {
                children: "onUserOffline"
              })
            }), " callback when the transcoder (host) goes offline."]
          }), `
`, _jsxs(_components.li, {
            children: ["Stream state change callbacks: ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onremoteaudiostatechanged",
              children: _jsx(_components.code, {
                children: "onRemoteAudioStateChanged"
              })
            }), " and ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onremotevideostatechanged",
              children: _jsx(_components.code, {
                children: "onRemoteVideoStateChanged"
              })
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "switch-the-domain-name",
      children: "Switch the domain name"
    }), `
`, _jsx(_components.p, {
      children: "To ensure high availability of REST services, Agora enables you to switch domain names when you experience service outage due to regional network failures. Take the following steps to set up and switch your domain name:"
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
            children: ["If the DNS address of the service server is located in a country or region other than mainland China, set the primary domain name to ", _jsx(_components.code, {
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
          children: "If your attempt to initiate a RESTful API request using the primary domain fails, set up your retry strategy as follows:"
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Primary domain retry"
              }), ": Retry using the same primary domain name."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Alternate domain retry"
              }), ":"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["If the current primary domain name is ", _jsx(_components.code, {
                  children: "api.sd-rtn.com"
                }), ", use ", _jsx(_components.code, {
                  children: "api.agora.io"
                }), " as the alternate domain name."]
              }), `
`, _jsxs(_components.li, {
                children: ["If the current primary domain name is ", _jsx(_components.code, {
                  children: "api.agora.io"
                }), ", use ", _jsx(_components.code, {
                  children: "api.sd-rtn.com"
                }), " as the alternate domain name."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Adjacent domain retry"
              }), ": If alternate domain retry fails, retry using the domain name adjacent to the current region."]
            }), `
`, _jsxs(_components.p, {
              children: ["For example, suppose your business server is located in Europe. You set the primary domain name to ", _jsx(_components.code, {
                children: "api.agora.io"
              }), ", and the business server resolves the primary domain name to Germany. Germany is located in central Europe (", _jsx(_components.code, {
                children: "api-eu-central-1.agora.io"
              }), "). The ", _jsx(_components.a, {
                href: "#domain-name-table",
                children: "domain name table"
              }), " shows that the adjacent area is West Europe. Use the ", _jsx(_components.code, {
                children: "api-eu-west-1.agora.io"
              }), " or ", _jsx(_components.code, {
                children: "api-eu-west-1.sd-rtn.com"
              }), " domain name to retry."]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "precautions",
      children: "Precautions"
    }), `
`, _jsx(_components.p, {
      children: "Take the following precautions when setting up your retry strategy:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "To avoid exceeding the QPS limit with retry requests, best practice is to use a back-off strategy. For example, wait 1 second before you retry for the first time, wait 3 seconds before retrying the second time, and wait 6 seconds before retry a third time."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If the request fails because of a network problem rather than a DNS domain name resolution problem, skip alternate domain retry and proceed to adjacent domain retry."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Before switching to the region domain name, ensure that the REST services you wish to use, for example, cloud recording or channel management, are deployed in that region."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "domain-name-table",
      children: "Domain name table"
    }), `
`, _jsx(_components.p, {
      children: "The following table shows the primary and region domain names for various regions."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Primary domain name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Region domain name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Region"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-us-west-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Western United States"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-us-east-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Eastern United States"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-ap-southeast-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Southeast Asia Pacific"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-ap-northeast-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Northeast Asia Pacific"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-eu-west-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Western Europe"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-eu-central-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Central Europe"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-cn-east-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "East China"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-cn-north-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "North China"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-us-west-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Western United States"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-us-east-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Eastern United States"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-ap-southeast-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Southeast Asia Pacific"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-ap-northeast-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Northeast Asia Pacific"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-eu-west-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Western Europe"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-eu-central-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Central Europe"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-cn-east-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "East China"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-cn-north-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
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
