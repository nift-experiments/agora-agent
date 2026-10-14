import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Concurrency limits",
  description: "Learn the limits of Cloud Transcoder."
};
export let _markdown = `

This article describes the quota limits for Cloud Transcoding.

### Peak concurrent workload [#peak-concurrent-workload]

Peak Concurrent Workload (PCW) limits determine the maximum number of concurrent transcoding tasks you can run simultaneously. These limits vary based on the output video resolution and the geographic region where the service is deployed.

| Service region                  |  SD |  HD | FHD |
| ------------------------------- | :-: | :-: | :-: |
| Americas                        |  10 |  5  |  2  |
| Europe                          |  10 |  5  |  2  |
| Asia (excluding Mainland China) |  20 |  10 |  3  |
| Mainland China                  |  20 |  10 |  5  |

<CalloutContainer type="info">
  <CalloutDescription>
    For higher PCW limits, contact [support@agora.io](mailto\\:support@agora.io).
  </CalloutDescription>
</CalloutContainer>

Video resolution are defined as follows:

| Quality | Definition           | Resolution Range                       |
| ------- | -------------------- | -------------------------------------- |
| SD      | Standard definition  | ≤ 640 × 360                            |
| HD      | High definition      | 640 × 360 \\< resolution ≤ 1280 × 720   |
| FHD     | Full high definition | 1280 × 720 \\< resolution ≤ 1920 × 1080 |

### Request rate limits [#request-rate-limits]

The following limits apply to API requests made to the Cloud Transcoding service:

* The maximum number of requests to the Cloud Transcoding server is 10 requests per second (QPS) per account.
* If the limit is exceeded, the server returns status code 429 (Too Many Requests).
* In concurrent scenarios, your request rate must not exceed 10% of the PCW. For example, if your PCW is 10, you can make at most 1 request per second.

### Resolution and channel limits [#resolution-and-channel-limits]

The service enforces the following technical limits on video processing:

* The maximum supported video resolution is 1920 × 1080.
* The maximum supported frame rate is 30 fps.
* The maximum number of streams that can be transcoded concurrently depends on your region and stream resolution, as shown in the PCW table above.

#### Channel limit guidelines [#channel-limit-guidelines]

If you're transcoding multiple resolutions at the same time:

* The number of streams for each resolution level must not exceed the individual limit for that resolution.
* The total number of transcoded streams must not exceed the maximum allowed across all resolutions.

**Example:**
In Asia, you can transcode up to:

* 20 SD streams
* 10 HD streams
* A combination such as 10 SD + 10 HD (but not exceeding 20 streams total)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This article describes the quota limits for Cloud Transcoding."
  }, {
    heading: "peak-concurrent-workload",
    content: "Peak Concurrent Workload (PCW) limits determine the maximum number of concurrent transcoding tasks you can run simultaneously. These limits vary based on the output video resolution and the geographic region where the service is deployed."
  }, {
    heading: "peak-concurrent-workload",
    content: "Service region"
  }, {
    heading: "peak-concurrent-workload",
    content: "SD"
  }, {
    heading: "peak-concurrent-workload",
    content: "HD"
  }, {
    heading: "peak-concurrent-workload",
    content: "FHD"
  }, {
    heading: "peak-concurrent-workload",
    content: "Americas"
  }, {
    heading: "peak-concurrent-workload",
    content: "10"
  }, {
    heading: "peak-concurrent-workload",
    content: "5"
  }, {
    heading: "peak-concurrent-workload",
    content: "2"
  }, {
    heading: "peak-concurrent-workload",
    content: "Europe"
  }, {
    heading: "peak-concurrent-workload",
    content: "10"
  }, {
    heading: "peak-concurrent-workload",
    content: "5"
  }, {
    heading: "peak-concurrent-workload",
    content: "2"
  }, {
    heading: "peak-concurrent-workload",
    content: "Asia (excluding Mainland China)"
  }, {
    heading: "peak-concurrent-workload",
    content: "20"
  }, {
    heading: "peak-concurrent-workload",
    content: "10"
  }, {
    heading: "peak-concurrent-workload",
    content: "3"
  }, {
    heading: "peak-concurrent-workload",
    content: "Mainland China"
  }, {
    heading: "peak-concurrent-workload",
    content: "20"
  }, {
    heading: "peak-concurrent-workload",
    content: "10"
  }, {
    heading: "peak-concurrent-workload",
    content: "5"
  }, {
    heading: "peak-concurrent-workload",
    content: "For higher PCW limits, contact support\\@agora.io."
  }, {
    heading: "peak-concurrent-workload",
    content: "Video resolution are defined as follows:"
  }, {
    heading: "peak-concurrent-workload",
    content: "Quality"
  }, {
    heading: "peak-concurrent-workload",
    content: "Definition"
  }, {
    heading: "peak-concurrent-workload",
    content: "Resolution Range"
  }, {
    heading: "peak-concurrent-workload",
    content: "SD"
  }, {
    heading: "peak-concurrent-workload",
    content: "Standard definition"
  }, {
    heading: "peak-concurrent-workload",
    content: "≤ 640 × 360"
  }, {
    heading: "peak-concurrent-workload",
    content: "HD"
  }, {
    heading: "peak-concurrent-workload",
    content: "High definition"
  }, {
    heading: "peak-concurrent-workload",
    content: "640 × 360 \\< resolution ≤ 1280 × 720"
  }, {
    heading: "peak-concurrent-workload",
    content: "FHD"
  }, {
    heading: "peak-concurrent-workload",
    content: "Full high definition"
  }, {
    heading: "peak-concurrent-workload",
    content: "1280 × 720 \\< resolution ≤ 1920 × 1080"
  }, {
    heading: "request-rate-limits",
    content: "The following limits apply to API requests made to the Cloud Transcoding service:"
  }, {
    heading: "request-rate-limits",
    content: "The maximum number of requests to the Cloud Transcoding server is 10 requests per second (QPS) per account."
  }, {
    heading: "request-rate-limits",
    content: "If the limit is exceeded, the server returns status code 429 (Too Many Requests)."
  }, {
    heading: "request-rate-limits",
    content: "In concurrent scenarios, your request rate must not exceed 10% of the PCW. For example, if your PCW is 10, you can make at most 1 request per second."
  }, {
    heading: "resolution-and-channel-limits",
    content: "The service enforces the following technical limits on video processing:"
  }, {
    heading: "resolution-and-channel-limits",
    content: "The maximum supported video resolution is 1920 × 1080."
  }, {
    heading: "resolution-and-channel-limits",
    content: "The maximum supported frame rate is 30 fps."
  }, {
    heading: "resolution-and-channel-limits",
    content: "The maximum number of streams that can be transcoded concurrently depends on your region and stream resolution, as shown in the PCW table above."
  }, {
    heading: "channel-limit-guidelines",
    content: "If you're transcoding multiple resolutions at the same time:"
  }, {
    heading: "channel-limit-guidelines",
    content: "The number of streams for each resolution level must not exceed the individual limit for that resolution."
  }, {
    heading: "channel-limit-guidelines",
    content: "The total number of transcoded streams must not exceed the maximum allowed across all resolutions."
  }, {
    heading: "channel-limit-guidelines",
    content: `**Example:**
In Asia, you can transcode up to:`
  }, {
    heading: "channel-limit-guidelines",
    content: "20 SD streams"
  }, {
    heading: "channel-limit-guidelines",
    content: "10 HD streams"
  }, {
    heading: "channel-limit-guidelines",
    content: "A combination such as 10 SD + 10 HD (but not exceeding 20 streams total)"
  }],
  headings: [{
    id: "peak-concurrent-workload",
    content: "Peak concurrent workload"
  }, {
    id: "request-rate-limits",
    content: "Request rate limits"
  }, {
    id: "resolution-and-channel-limits",
    content: "Resolution and channel limits"
  }, {
    id: "channel-limit-guidelines",
    content: "Channel limit guidelines"
  }]
};
export let toc = [{
  depth: 3,
  url: "#peak-concurrent-workload",
  title: _jsx(_Fragment, {
    children: "Peak concurrent workload"
  })
}, {
  depth: 3,
  url: "#request-rate-limits",
  title: _jsx(_Fragment, {
    children: "Request rate limits"
  })
}, {
  depth: 3,
  url: "#resolution-and-channel-limits",
  title: _jsx(_Fragment, {
    children: "Resolution and channel limits"
  })
}, {
  depth: 4,
  url: "#channel-limit-guidelines",
  title: _jsx(_Fragment, {
    children: "Channel limit guidelines"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    h4: "h4",
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
      children: "This article describes the quota limits for Cloud Transcoding."
    }), `
`, _jsx(_components.h3, {
      id: "peak-concurrent-workload",
      children: "Peak concurrent workload"
    }), `
`, _jsx(_components.p, {
      children: "Peak Concurrent Workload (PCW) limits determine the maximum number of concurrent transcoding tasks you can run simultaneously. These limits vary based on the output video resolution and the geographic region where the service is deployed."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Service region"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "SD"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "HD"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "FHD"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Americas"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Europe"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Asia (excluding Mainland China)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "20"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Mainland China"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "20"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["For higher PCW limits, contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "support@agora.io"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Video resolution are defined as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Quality"
          }), _jsx(_components.th, {
            children: "Definition"
          }), _jsx(_components.th, {
            children: "Resolution Range"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "SD"
          }), _jsx(_components.td, {
            children: "Standard definition"
          }), _jsx(_components.td, {
            children: "≤ 640 × 360"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "HD"
          }), _jsx(_components.td, {
            children: "High definition"
          }), _jsx(_components.td, {
            children: "640 × 360 < resolution ≤ 1280 × 720"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "FHD"
          }), _jsx(_components.td, {
            children: "Full high definition"
          }), _jsx(_components.td, {
            children: "1280 × 720 < resolution ≤ 1920 × 1080"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "request-rate-limits",
      children: "Request rate limits"
    }), `
`, _jsx(_components.p, {
      children: "The following limits apply to API requests made to the Cloud Transcoding service:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The maximum number of requests to the Cloud Transcoding server is 10 requests per second (QPS) per account."
      }), `
`, _jsx(_components.li, {
        children: "If the limit is exceeded, the server returns status code 429 (Too Many Requests)."
      }), `
`, _jsx(_components.li, {
        children: "In concurrent scenarios, your request rate must not exceed 10% of the PCW. For example, if your PCW is 10, you can make at most 1 request per second."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "resolution-and-channel-limits",
      children: "Resolution and channel limits"
    }), `
`, _jsx(_components.p, {
      children: "The service enforces the following technical limits on video processing:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The maximum supported video resolution is 1920 × 1080."
      }), `
`, _jsx(_components.li, {
        children: "The maximum supported frame rate is 30 fps."
      }), `
`, _jsx(_components.li, {
        children: "The maximum number of streams that can be transcoded concurrently depends on your region and stream resolution, as shown in the PCW table above."
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "channel-limit-guidelines",
      children: "Channel limit guidelines"
    }), `
`, _jsx(_components.p, {
      children: "If you're transcoding multiple resolutions at the same time:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The number of streams for each resolution level must not exceed the individual limit for that resolution."
      }), `
`, _jsx(_components.li, {
        children: "The total number of transcoded streams must not exceed the maximum allowed across all resolutions."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Example:"
      }), `
In Asia, you can transcode up to:`]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "20 SD streams"
      }), `
`, _jsx(_components.li, {
        children: "10 HD streams"
      }), `
`, _jsx(_components.li, {
        children: "A combination such as 10 SD + 10 HD (but not exceeding 20 streams total)"
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
