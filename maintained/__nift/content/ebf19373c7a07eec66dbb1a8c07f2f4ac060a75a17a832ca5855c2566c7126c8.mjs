import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "What are the differences between various live broadcasting solutions?"
};
export let _markdown = `

The following table compares the different live broadcasting solutions.

| Project                | Agora Interactive Live Streaming                                                                       | Agora Broadcast Streaming                                                                         | Traditional CDN Live Broadcast                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Typical scenarios      | Hosts and audiences frequently interact through audio and video, requiring ultra-low audience latency. | Hosts respond to text, chat, or rewards in real time, with occasional audio or video interaction. | One-way streaming with no audio or video interaction.              |
| Latency                | 400 ms to 800 ms between host and audience.                                                            | 1,500 ms to 2,000 ms between host and audience.                                                   | Greater than 3,000 ms between host and audience.                   |
| Synchronization        | Good synchronization between host and audience, and among audience members.                            | Good synchronization between host and audience, and among audience members.                       | Poor synchronization between host and audience, and among viewers. |
| Interactive experience | Excellent                                                                                              | Good                                                                                              | Limited                                                            |
| Cost                   | High                                                                                                   | Moderate                                                                                          | Low                                                                |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The following table compares the different live broadcasting solutions."
  }, {
    heading: undefined,
    content: "Project"
  }, {
    heading: undefined,
    content: "Agora Interactive Live Streaming"
  }, {
    heading: undefined,
    content: "Agora Broadcast Streaming"
  }, {
    heading: undefined,
    content: "Traditional CDN Live Broadcast"
  }, {
    heading: undefined,
    content: "Typical scenarios"
  }, {
    heading: undefined,
    content: "Hosts and audiences frequently interact through audio and video, requiring ultra-low audience latency."
  }, {
    heading: undefined,
    content: "Hosts respond to text, chat, or rewards in real time, with occasional audio or video interaction."
  }, {
    heading: undefined,
    content: "One-way streaming with no audio or video interaction."
  }, {
    heading: undefined,
    content: "Latency"
  }, {
    heading: undefined,
    content: "400 ms to 800 ms between host and audience."
  }, {
    heading: undefined,
    content: "1,500 ms to 2,000 ms between host and audience."
  }, {
    heading: undefined,
    content: "Greater than 3,000 ms between host and audience."
  }, {
    heading: undefined,
    content: "Synchronization"
  }, {
    heading: undefined,
    content: "Good synchronization between host and audience, and among audience members."
  }, {
    heading: undefined,
    content: "Good synchronization between host and audience, and among audience members."
  }, {
    heading: undefined,
    content: "Poor synchronization between host and audience, and among viewers."
  }, {
    heading: undefined,
    content: "Interactive experience"
  }, {
    heading: undefined,
    content: "Excellent"
  }, {
    heading: undefined,
    content: "Good"
  }, {
    heading: undefined,
    content: "Limited"
  }, {
    heading: undefined,
    content: "Cost"
  }, {
    heading: undefined,
    content: "High"
  }, {
    heading: undefined,
    content: "Moderate"
  }, {
    heading: undefined,
    content: "Low"
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The following table compares the different live broadcasting solutions."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Project"
          }), _jsx(_components.th, {
            children: "Agora Interactive Live Streaming"
          }), _jsx(_components.th, {
            children: "Agora Broadcast Streaming"
          }), _jsx(_components.th, {
            children: "Traditional CDN Live Broadcast"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Typical scenarios"
          }), _jsx(_components.td, {
            children: "Hosts and audiences frequently interact through audio and video, requiring ultra-low audience latency."
          }), _jsx(_components.td, {
            children: "Hosts respond to text, chat, or rewards in real time, with occasional audio or video interaction."
          }), _jsx(_components.td, {
            children: "One-way streaming with no audio or video interaction."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Latency"
          }), _jsx(_components.td, {
            children: "400 ms to 800 ms between host and audience."
          }), _jsx(_components.td, {
            children: "1,500 ms to 2,000 ms between host and audience."
          }), _jsx(_components.td, {
            children: "Greater than 3,000 ms between host and audience."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Synchronization"
          }), _jsx(_components.td, {
            children: "Good synchronization between host and audience, and among audience members."
          }), _jsx(_components.td, {
            children: "Good synchronization between host and audience, and among audience members."
          }), _jsx(_components.td, {
            children: "Poor synchronization between host and audience, and among viewers."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Interactive experience"
          }), _jsx(_components.td, {
            children: "Excellent"
          }), _jsx(_components.td, {
            children: "Good"
          }), _jsx(_components.td, {
            children: "Limited"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Cost"
          }), _jsx(_components.td, {
            children: "High"
          }), _jsx(_components.td, {
            children: "Moderate"
          }), _jsx(_components.td, {
            children: "Low"
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
