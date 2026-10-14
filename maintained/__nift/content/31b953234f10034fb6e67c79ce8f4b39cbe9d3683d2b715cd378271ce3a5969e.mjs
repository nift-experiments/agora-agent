import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Media Gateway features",
  description: "Key capabilities and common use cases for Media Gateway."
};
export let _markdown = `

Media Gateway enables users to push content to Agora SDRTN(R) using standard streaming protocols such as RTMP and SRT. The channel host automatically publishes this streamed content to the correct channel. With Media Gateway, you can employ advanced transcoding capabilities on media streams for enhanced distribution.

The following figure shows the overall architecture of Media Gateway:

![Product Architecture](https://assets-docs.agora.io/images/media-gateway/media-gateway-flow.svg)

## Product features [#product-features]

| Feature                                        | Description                                                                                                                                                                                                                                                       |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Media input                                    | Supports generating a streaming key through a RESTful API or a local encryption algorithm, then pushing the source stream directly to Agora's gateway service. After a successful push, the media stream is automatically played in the channel for remote users. |
| Multiple media streaming formats and protocols | Supports H.264 and H.265 video codecs, AAC audio codec, RTMP and SRT push protocols, and FLV and MPEG-TS media formats.                                                                                                                                           |
| Custom transcoding parameters                  | Supports enabling transcoding for media streams input into the channel. If you enable transcoding, you can set parameters such as resolution, frame rate, bitrate, and whether to enable large and small streams.                                                 |
| Restricted access area                         | When activating Media Gateway, you specify the access area to ensure the transmission quality of the media stream.                                                                                                                                                |
| Server event notification callback             | Agora provides message notification services. After activating Media Gateway, you receive event notifications.                                                                                                                                                    |

## Related APIs and implementation entry points [#related-apis-and-implementation-entry-points]

Use the following references when you implement the core Media Gateway capabilities described above:

* [REST API overview](/en/api-reference/api-ref/rtmp-gateway): Review the base URL, authentication model, and the full API surface.
* [RESTful authentication](/en/api-reference/api-ref/rtmp-gateway/authentication): Authenticate server-side requests before calling Media Gateway APIs.
* [Query notification service IP address](/en/api-reference/api-ref/rtmp-gateway/query-ip-address): Retrieve the callback IP ranges used by notification services.

The main API groups map to product features as follows:

| Feature area                          | APIs or guides                                                                                                                                                                                                                                                                                  |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Media input and stream key management | Use the streaming key APIs in the [REST API overview](/en/api-reference/api-ref/rtmp-gateway) to create, query, and delete stream keys. For a local stream key generation example, see the [Quickstart](../quickstart).                                                                         |
| Online stream control                 | Use the online stream APIs in the [REST API overview](/en/api-reference/api-ref/rtmp-gateway) to query active streams, inspect stream details, force disconnect a stream, or mute and unmute audio or video.                                                                                    |
| Custom transcoding parameters         | Use template APIs in the [REST API overview](/en/api-reference/api-ref/rtmp-gateway) to create, update, delete, or set default transcoding templates for ingress streams.                                                                                                                       |
| Server event notification callback    | Configure notifications by following [Receive notifications about channel events](../build/optimize-quality-and-monitor-events/receive-notifications.md), then use the [event type reference](/en/api-reference/api-ref/rtmp-gateway/media-gateway-event-types) to interpret callback payloads. |

## Applicable use cases [#applicable-use-cases]

| Use case                                    | Description                                                                                                                                                  |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Commentary from influencers and celebrities | Inject high-definition video streams into interactive channels. Multiple hosts can watch and interact in real time from different places.                    |
| Low-latency distribution                    | Distribute content to viewers faster and more reliably than with a CDN.                                                                                      |
| Recording and live broadcasting             | A teacher records content in advance and injects it into a live classroom. Students and teaching assistants can watch the content and interact in real time. |
| 24-hour chat room                           | Background music is played continuously and is not interrupted when switching hosts.                                                                         |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Media Gateway enables users to push content to Agora SDRTN(R) using standard streaming protocols such as RTMP and SRT. The channel host automatically publishes this streamed content to the correct channel. With Media Gateway, you can employ advanced transcoding capabilities on media streams for enhanced distribution."
  }, {
    heading: undefined,
    content: "The following figure shows the overall architecture of Media Gateway:"
  }, {
    heading: "product-features",
    content: "Feature"
  }, {
    heading: "product-features",
    content: "Description"
  }, {
    heading: "product-features",
    content: "Media input"
  }, {
    heading: "product-features",
    content: "Supports generating a streaming key through a RESTful API or a local encryption algorithm, then pushing the source stream directly to Agora's gateway service. After a successful push, the media stream is automatically played in the channel for remote users."
  }, {
    heading: "product-features",
    content: "Multiple media streaming formats and protocols"
  }, {
    heading: "product-features",
    content: "Supports H.264 and H.265 video codecs, AAC audio codec, RTMP and SRT push protocols, and FLV and MPEG-TS media formats."
  }, {
    heading: "product-features",
    content: "Custom transcoding parameters"
  }, {
    heading: "product-features",
    content: "Supports enabling transcoding for media streams input into the channel. If you enable transcoding, you can set parameters such as resolution, frame rate, bitrate, and whether to enable large and small streams."
  }, {
    heading: "product-features",
    content: "Restricted access area"
  }, {
    heading: "product-features",
    content: "When activating Media Gateway, you specify the access area to ensure the transmission quality of the media stream."
  }, {
    heading: "product-features",
    content: "Server event notification callback"
  }, {
    heading: "product-features",
    content: "Agora provides message notification services. After activating Media Gateway, you receive event notifications."
  }, {
    heading: "related-apis-and-implementation-entry-points",
    content: "Use the following references when you implement the core Media Gateway capabilities described above:"
  }, {
    heading: "related-apis-and-implementation-entry-points",
    content: "REST API overview: Review the base URL, authentication model, and the full API surface."
  }, {
    heading: "related-apis-and-implementation-entry-points",
    content: "RESTful authentication: Authenticate server-side requests before calling Media Gateway APIs."
  }, {
    heading: "related-apis-and-implementation-entry-points",
    content: "Query notification service IP address: Retrieve the callback IP ranges used by notification services."
  }, {
    heading: "related-apis-and-implementation-entry-points",
    content: "The main API groups map to product features as follows:"
  }, {
    heading: "related-apis-and-implementation-entry-points",
    content: "Feature area"
  }, {
    heading: "related-apis-and-implementation-entry-points",
    content: "APIs or guides"
  }, {
    heading: "related-apis-and-implementation-entry-points",
    content: "Media input and stream key management"
  }, {
    heading: "related-apis-and-implementation-entry-points",
    content: "Use the streaming key APIs in the REST API overview to create, query, and delete stream keys. For a local stream key generation example, see the Quickstart."
  }, {
    heading: "related-apis-and-implementation-entry-points",
    content: "Online stream control"
  }, {
    heading: "related-apis-and-implementation-entry-points",
    content: "Use the online stream APIs in the REST API overview to query active streams, inspect stream details, force disconnect a stream, or mute and unmute audio or video."
  }, {
    heading: "related-apis-and-implementation-entry-points",
    content: "Custom transcoding parameters"
  }, {
    heading: "related-apis-and-implementation-entry-points",
    content: "Use template APIs in the REST API overview to create, update, delete, or set default transcoding templates for ingress streams."
  }, {
    heading: "related-apis-and-implementation-entry-points",
    content: "Server event notification callback"
  }, {
    heading: "related-apis-and-implementation-entry-points",
    content: "Configure notifications by following Receive notifications about channel events, then use the event type reference to interpret callback payloads."
  }, {
    heading: "applicable-use-cases",
    content: "Use case"
  }, {
    heading: "applicable-use-cases",
    content: "Description"
  }, {
    heading: "applicable-use-cases",
    content: "Commentary from influencers and celebrities"
  }, {
    heading: "applicable-use-cases",
    content: "Inject high-definition video streams into interactive channels. Multiple hosts can watch and interact in real time from different places."
  }, {
    heading: "applicable-use-cases",
    content: "Low-latency distribution"
  }, {
    heading: "applicable-use-cases",
    content: "Distribute content to viewers faster and more reliably than with a CDN."
  }, {
    heading: "applicable-use-cases",
    content: "Recording and live broadcasting"
  }, {
    heading: "applicable-use-cases",
    content: "A teacher records content in advance and injects it into a live classroom. Students and teaching assistants can watch the content and interact in real time."
  }, {
    heading: "applicable-use-cases",
    content: "24-hour chat room"
  }, {
    heading: "applicable-use-cases",
    content: "Background music is played continuously and is not interrupted when switching hosts."
  }],
  headings: [{
    id: "product-features",
    content: "Product features"
  }, {
    id: "related-apis-and-implementation-entry-points",
    content: "Related APIs and implementation entry points"
  }, {
    id: "applicable-use-cases",
    content: "Applicable use cases"
  }]
};
export let toc = [{
  depth: 2,
  url: "#product-features",
  title: _jsx(_Fragment, {
    children: "Product features"
  })
}, {
  depth: 2,
  url: "#related-apis-and-implementation-entry-points",
  title: _jsx(_Fragment, {
    children: "Related APIs and implementation entry points"
  })
}, {
  depth: 2,
  url: "#applicable-use-cases",
  title: _jsx(_Fragment, {
    children: "Applicable use cases"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
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
    children: [_jsx(_components.p, {
      children: "Media Gateway enables users to push content to Agora SDRTN(R) using standard streaming protocols such as RTMP and SRT. The channel host automatically publishes this streamed content to the correct channel. With Media Gateway, you can employ advanced transcoding capabilities on media streams for enhanced distribution."
    }), `
`, _jsx(_components.p, {
      children: "The following figure shows the overall architecture of Media Gateway:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/media-gateway/media-gateway-flow.svg",
        alt: "Product Architecture"
      })
    }), `
`, _jsx(_components.h2, {
      id: "product-features",
      children: "Product features"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Feature"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Media input"
          }), _jsx(_components.td, {
            children: "Supports generating a streaming key through a RESTful API or a local encryption algorithm, then pushing the source stream directly to Agora's gateway service. After a successful push, the media stream is automatically played in the channel for remote users."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Multiple media streaming formats and protocols"
          }), _jsx(_components.td, {
            children: "Supports H.264 and H.265 video codecs, AAC audio codec, RTMP and SRT push protocols, and FLV and MPEG-TS media formats."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Custom transcoding parameters"
          }), _jsx(_components.td, {
            children: "Supports enabling transcoding for media streams input into the channel. If you enable transcoding, you can set parameters such as resolution, frame rate, bitrate, and whether to enable large and small streams."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Restricted access area"
          }), _jsx(_components.td, {
            children: "When activating Media Gateway, you specify the access area to ensure the transmission quality of the media stream."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Server event notification callback"
          }), _jsx(_components.td, {
            children: "Agora provides message notification services. After activating Media Gateway, you receive event notifications."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "related-apis-and-implementation-entry-points",
      children: "Related APIs and implementation entry points"
    }), `
`, _jsx(_components.p, {
      children: "Use the following references when you implement the core Media Gateway capabilities described above:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtmp-gateway",
          children: "REST API overview"
        }), ": Review the base URL, authentication model, and the full API surface."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtmp-gateway/authentication",
          children: "RESTful authentication"
        }), ": Authenticate server-side requests before calling Media Gateway APIs."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtmp-gateway/query-ip-address",
          children: "Query notification service IP address"
        }), ": Retrieve the callback IP ranges used by notification services."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The main API groups map to product features as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Feature area"
          }), _jsx(_components.th, {
            children: "APIs or guides"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Media input and stream key management"
          }), _jsxs(_components.td, {
            children: ["Use the streaming key APIs in the ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/rtmp-gateway",
              children: "REST API overview"
            }), " to create, query, and delete stream keys. For a local stream key generation example, see the ", _jsx(_components.a, {
              href: "../quickstart",
              children: "Quickstart"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Online stream control"
          }), _jsxs(_components.td, {
            children: ["Use the online stream APIs in the ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/rtmp-gateway",
              children: "REST API overview"
            }), " to query active streams, inspect stream details, force disconnect a stream, or mute and unmute audio or video."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Custom transcoding parameters"
          }), _jsxs(_components.td, {
            children: ["Use template APIs in the ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/rtmp-gateway",
              children: "REST API overview"
            }), " to create, update, delete, or set default transcoding templates for ingress streams."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Server event notification callback"
          }), _jsxs(_components.td, {
            children: ["Configure notifications by following ", _jsx(_components.a, {
              href: "../build/optimize-quality-and-monitor-events/receive-notifications.md",
              children: "Receive notifications about channel events"
            }), ", then use the ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/rtmp-gateway/media-gateway-event-types",
              children: "event type reference"
            }), " to interpret callback payloads."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "applicable-use-cases",
      children: "Applicable use cases"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Use case"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Commentary from influencers and celebrities"
          }), _jsx(_components.td, {
            children: "Inject high-definition video streams into interactive channels. Multiple hosts can watch and interact in real time from different places."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Low-latency distribution"
          }), _jsx(_components.td, {
            children: "Distribute content to viewers faster and more reliably than with a CDN."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Recording and live broadcasting"
          }), _jsx(_components.td, {
            children: "A teacher records content in advance and injects it into a live classroom. Students and teaching assistants can watch the content and interact in real time."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "24-hour chat room"
          }), _jsx(_components.td, {
            children: "Background music is played continuously and is not interrupted when switching hosts."
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
