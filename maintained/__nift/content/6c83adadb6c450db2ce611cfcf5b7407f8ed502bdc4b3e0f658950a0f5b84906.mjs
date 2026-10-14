import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "What is recording concurrency?"
};
export let _markdown = `

For the Agora On-Premise Recording SDK, we conduct tests on the recording concurrency based on the following cloud hosting configuration:

* AWS: Intel(R) Xeon(R) Platinum 8124M CPU @ 3.00 GHz
* 16 Virtual Core CPU, 32 GB RAM
* Disk I/O: 412 MB/s

Test conditions:

* Each channel has two users/hosts. The resolution and frame rate of each channel are set as 320 × 240 and 15 fps respectively.
* The resolution, frame rate, and bitrate of the recorded files in composite recording mode are set as 640 × 480, 15 fps, and 500 Kbps respectively; and the audio bitrate of the recorded files in composite recording mode is set as 48 Kbps.

Test results:

| Channel Profile | Recording Mode                    | Performance                                                                                                                |
| --------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Live Broadcast  | Audio + VideoIndividual recording | When recording 215 channels simultaneously, the CPU usage is about 75%.We recommend recording 200 channels simultaneously. |
| Live Broadcast  | Audio + VideoComposite recording  | When recording 70 channels simultaneously, the CPU usage is about 75%.We recommend recording 60 channels simultaneously.   |
| Live Broadcast  | Audio onlyComposite recording     | When recording 300 channels simultaneously, the CPU usage is about 75%.                                                    |
| Communication   | Audio + VideoIndividual recording | When recording 210 channels simultaneously, the CPU usage is about 75%.We recommend recording 200 channels simultaneously. |
| Communication   | Audio + VideoComposite recording  | When recording 60 channels simultaneously, the CPU usage is about 75%.                                                     |

The test results are for reference purposes only.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "For the Agora On-Premise Recording SDK, we conduct tests on the recording concurrency based on the following cloud hosting configuration:"
  }, {
    heading: undefined,
    content: "AWS: Intel(R) Xeon(R) Platinum 8124M CPU @ 3.00 GHz"
  }, {
    heading: undefined,
    content: "16 Virtual Core CPU, 32 GB RAM"
  }, {
    heading: undefined,
    content: "Disk I/O: 412 MB/s"
  }, {
    heading: undefined,
    content: "Test conditions:"
  }, {
    heading: undefined,
    content: "Each channel has two users/hosts. The resolution and frame rate of each channel are set as 320 × 240 and 15 fps respectively."
  }, {
    heading: undefined,
    content: "The resolution, frame rate, and bitrate of the recorded files in composite recording mode are set as 640 × 480, 15 fps, and 500 Kbps respectively; and the audio bitrate of the recorded files in composite recording mode is set as 48 Kbps."
  }, {
    heading: undefined,
    content: "Test results:"
  }, {
    heading: undefined,
    content: "Channel Profile"
  }, {
    heading: undefined,
    content: "Recording Mode"
  }, {
    heading: undefined,
    content: "Performance"
  }, {
    heading: undefined,
    content: "Live Broadcast"
  }, {
    heading: undefined,
    content: "Audio + VideoIndividual recording"
  }, {
    heading: undefined,
    content: "When recording 215 channels simultaneously, the CPU usage is about 75%.We recommend recording 200 channels simultaneously."
  }, {
    heading: undefined,
    content: "Live Broadcast"
  }, {
    heading: undefined,
    content: "Audio + VideoComposite recording"
  }, {
    heading: undefined,
    content: "When recording 70 channels simultaneously, the CPU usage is about 75%.We recommend recording 60 channels simultaneously."
  }, {
    heading: undefined,
    content: "Live Broadcast"
  }, {
    heading: undefined,
    content: "Audio onlyComposite recording"
  }, {
    heading: undefined,
    content: "When recording 300 channels simultaneously, the CPU usage is about 75%."
  }, {
    heading: undefined,
    content: "Communication"
  }, {
    heading: undefined,
    content: "Audio + VideoIndividual recording"
  }, {
    heading: undefined,
    content: "When recording 210 channels simultaneously, the CPU usage is about 75%.We recommend recording 200 channels simultaneously."
  }, {
    heading: undefined,
    content: "Communication"
  }, {
    heading: undefined,
    content: "Audio + VideoComposite recording"
  }, {
    heading: undefined,
    content: "When recording 60 channels simultaneously, the CPU usage is about 75%."
  }, {
    heading: undefined,
    content: "The test results are for reference purposes only."
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
      children: "For the Agora On-Premise Recording SDK, we conduct tests on the recording concurrency based on the following cloud hosting configuration:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "AWS: Intel(R) Xeon(R) Platinum 8124M CPU @ 3.00 GHz"
      }), `
`, _jsx(_components.li, {
        children: "16 Virtual Core CPU, 32 GB RAM"
      }), `
`, _jsx(_components.li, {
        children: "Disk I/O: 412 MB/s"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Test conditions:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Each channel has two users/hosts. The resolution and frame rate of each channel are set as 320 × 240 and 15 fps respectively."
      }), `
`, _jsx(_components.li, {
        children: "The resolution, frame rate, and bitrate of the recorded files in composite recording mode are set as 640 × 480, 15 fps, and 500 Kbps respectively; and the audio bitrate of the recorded files in composite recording mode is set as 48 Kbps."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Test results:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Channel Profile"
          }), _jsx(_components.th, {
            children: "Recording Mode"
          }), _jsx(_components.th, {
            children: "Performance"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Live Broadcast"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "Audio + Video"
            }), _jsx(_components.p, {
              children: "Individual recording"
            })]
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "When recording 215 channels simultaneously, the CPU usage is about 75%."
            }), _jsx(_components.p, {
              children: "We recommend recording 200 channels simultaneously."
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Live Broadcast"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "Audio + Video"
            }), _jsx(_components.p, {
              children: "Composite recording"
            })]
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "When recording 70 channels simultaneously, the CPU usage is about 75%."
            }), _jsx(_components.p, {
              children: "We recommend recording 60 channels simultaneously."
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Live Broadcast"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "Audio only"
            }), _jsx(_components.p, {
              children: "Composite recording"
            })]
          }), _jsx(_components.td, {
            children: "When recording 300 channels simultaneously, the CPU usage is about 75%."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Communication"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "Audio + Video"
            }), _jsx(_components.p, {
              children: "Individual recording"
            })]
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "When recording 210 channels simultaneously, the CPU usage is about 75%."
            }), _jsx(_components.p, {
              children: "We recommend recording 200 channels simultaneously."
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Communication"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "Audio + Video"
            }), _jsx(_components.p, {
              children: "Composite recording"
            })]
          }), _jsx(_components.td, {
            children: "When recording 60 channels simultaneously, the CPU usage is about 75%."
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "The test results are for reference purposes only."
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
