import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "What is the difference between Agora Live Interactive Streaming and common CDN + RTMP technologies?"
};
export let _markdown = `

Most CDN + RTMP technologies for live streaming allow users to watch the live steaming in a web browser, which lowers the audience's threshold.
Agora provides a solution for SD-RTN™, host, and audience to have the same real-time communication quality as an individual line with:

* Private voice and video coding
* Private transport protocol
* Private node deployment
* Private transmission algorithms

See the following table for details:

| Feature                     | CDN + RTMP        | Agora Live Interactive Streaming                                                                                    |
| --------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| Video Encoding and Decoding | H.264             | Private                                                                                                             |
| Audio Encoding and Decoding | AAC               | Private                                                                                                             |
| Transport Protocol          | TCP based on RTMP | Private protocol based on UDP                                                                                       |
| Transmission Algorithm      | TCP               | Private algorithm for fixing packet loss and adjusting the bitrate automatically according to the current bandwidth |
| Picture-in-picture layout   | Fixed             | Can be adjusted dynamically                                                                                         |

Agora also enables the function of publishing streams into the CDN for social media sharing.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: `Most CDN + RTMP technologies for live streaming allow users to watch the live steaming in a web browser, which lowers the audience's threshold.
Agora provides a solution for SD-RTN™, host, and audience to have the same real-time communication quality as an individual line with:`
  }, {
    heading: undefined,
    content: "Private voice and video coding"
  }, {
    heading: undefined,
    content: "Private transport protocol"
  }, {
    heading: undefined,
    content: "Private node deployment"
  }, {
    heading: undefined,
    content: "Private transmission algorithms"
  }, {
    heading: undefined,
    content: "See the following table for details:"
  }, {
    heading: undefined,
    content: "Feature"
  }, {
    heading: undefined,
    content: "CDN + RTMP"
  }, {
    heading: undefined,
    content: "Agora Live Interactive Streaming"
  }, {
    heading: undefined,
    content: "Video Encoding and Decoding"
  }, {
    heading: undefined,
    content: "H.264"
  }, {
    heading: undefined,
    content: "Private"
  }, {
    heading: undefined,
    content: "Audio Encoding and Decoding"
  }, {
    heading: undefined,
    content: "AAC"
  }, {
    heading: undefined,
    content: "Private"
  }, {
    heading: undefined,
    content: "Transport Protocol"
  }, {
    heading: undefined,
    content: "TCP based on RTMP"
  }, {
    heading: undefined,
    content: "Private protocol based on UDP"
  }, {
    heading: undefined,
    content: "Transmission Algorithm"
  }, {
    heading: undefined,
    content: "TCP"
  }, {
    heading: undefined,
    content: "Private algorithm for fixing packet loss and adjusting the bitrate automatically according to the current bandwidth"
  }, {
    heading: undefined,
    content: "Picture-in-picture layout"
  }, {
    heading: undefined,
    content: "Fixed"
  }, {
    heading: undefined,
    content: "Can be adjusted dynamically"
  }, {
    heading: undefined,
    content: "Agora also enables the function of publishing streams into the CDN for social media sharing."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
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
      children: `Most CDN + RTMP technologies for live streaming allow users to watch the live steaming in a web browser, which lowers the audience's threshold.
Agora provides a solution for SD-RTN™, host, and audience to have the same real-time communication quality as an individual line with:`
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Private voice and video coding"
      }), `
`, _jsx(_components.li, {
        children: "Private transport protocol"
      }), `
`, _jsx(_components.li, {
        children: "Private node deployment"
      }), `
`, _jsx(_components.li, {
        children: "Private transmission algorithms"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "See the following table for details:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Feature"
          }), _jsx(_components.th, {
            children: "CDN + RTMP"
          }), _jsx(_components.th, {
            children: "Agora Live Interactive Streaming"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Video Encoding and Decoding"
          }), _jsx(_components.td, {
            children: "H.264"
          }), _jsx(_components.td, {
            children: "Private"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio Encoding and Decoding"
          }), _jsx(_components.td, {
            children: "AAC"
          }), _jsx(_components.td, {
            children: "Private"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Transport Protocol"
          }), _jsx(_components.td, {
            children: "TCP based on RTMP"
          }), _jsx(_components.td, {
            children: "Private protocol based on UDP"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Transmission Algorithm"
          }), _jsx(_components.td, {
            children: "TCP"
          }), _jsx(_components.td, {
            children: "Private algorithm for fixing packet loss and adjusting the bitrate automatically according to the current bandwidth"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Picture-in-picture layout"
          }), _jsx(_components.td, {
            children: "Fixed"
          }), _jsx(_components.td, {
            children: "Can be adjusted dynamically"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "Agora also enables the function of publishing streams into the CDN for social media sharing."
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
