import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How do I control recording sessions in the command-line interface?"
};
export let _markdown = `

### Start and pause recording [#start-and-pause-recording]

If you use the automatic mode (default), the recording starts automatically when a user joins the channel. In this mode, you cannot pause the recording.

If you use the manual mode (\`triggerMode\` set as 1), use the following methods to start and pause the recording:

* To control all the recording sessions:

  * Start recording: \`killall -s 10 recorder_local\`
  * Pause recording：\`killall -s 12 recorder_local\`

* To control an individual recording session:

  1. Get the PID：\`ps aux | grep 'channelName'\`
  2. Control the recording session by the PID

     * Start recording：\`kill -s 10 PID\`
     * Pause recording：\`kill -s 12 PID\`

### Stop recording [#stop-recording]

The recording stops automatically when there is no user in the channel after a time period set by the idle parameter. The default value is 300 seconds.

To manually stop recording, press **Ctrl** + **C** to end the command-line session.
`;
export let structuredData = {
  contents: [{
    heading: "start-and-pause-recording",
    content: "If you use the automatic mode (default), the recording starts automatically when a user joins the channel. In this mode, you cannot pause the recording."
  }, {
    heading: "start-and-pause-recording",
    content: "If you use the manual mode (`triggerMode` set as 1), use the following methods to start and pause the recording:"
  }, {
    heading: "start-and-pause-recording",
    content: "To control all the recording sessions:"
  }, {
    heading: "start-and-pause-recording",
    content: "Start recording: `killall -s 10 recorder_local`"
  }, {
    heading: "start-and-pause-recording",
    content: "Pause recording：`killall -s 12 recorder_local`"
  }, {
    heading: "start-and-pause-recording",
    content: "To control an individual recording session:"
  }, {
    heading: "start-and-pause-recording",
    content: "Get the PID：`ps aux | grep 'channelName'`"
  }, {
    heading: "start-and-pause-recording",
    content: "Control the recording session by the PID"
  }, {
    heading: "start-and-pause-recording",
    content: "Start recording：`kill -s 10 PID`"
  }, {
    heading: "start-and-pause-recording",
    content: "Pause recording：`kill -s 12 PID`"
  }, {
    heading: "stop-recording",
    content: "The recording stops automatically when there is no user in the channel after a time period set by the idle parameter. The default value is 300 seconds."
  }, {
    heading: "stop-recording",
    content: "To manually stop recording, press **Ctrl** + **C** to end the command-line session."
  }],
  headings: [{
    id: "start-and-pause-recording",
    content: "Start and pause recording"
  }, {
    id: "stop-recording",
    content: "Stop recording"
  }]
};
export let toc = [{
  depth: 3,
  url: "#start-and-pause-recording",
  title: _jsx(_Fragment, {
    children: "Start and pause recording"
  })
}, {
  depth: 3,
  url: "#stop-recording",
  title: _jsx(_Fragment, {
    children: "Stop recording"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h3, {
      id: "start-and-pause-recording",
      children: "Start and pause recording"
    }), `
`, _jsx(_components.p, {
      children: "If you use the automatic mode (default), the recording starts automatically when a user joins the channel. In this mode, you cannot pause the recording."
    }), `
`, _jsxs(_components.p, {
      children: ["If you use the manual mode (", _jsx(_components.code, {
        children: "triggerMode"
      }), " set as 1), use the following methods to start and pause the recording:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "To control all the recording sessions:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Start recording: ", _jsx(_components.code, {
              children: "killall -s 10 recorder_local"
            })]
          }), `
`, _jsxs(_components.li, {
            children: ["Pause recording：", _jsx(_components.code, {
              children: "killall -s 12 recorder_local"
            })]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "To control an individual recording session:"
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Get the PID：", _jsx(_components.code, {
                children: "ps aux | grep 'channelName'"
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Control the recording session by the PID"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["Start recording：", _jsx(_components.code, {
                  children: "kill -s 10 PID"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Pause recording：", _jsx(_components.code, {
                  children: "kill -s 12 PID"
                })]
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "stop-recording",
      children: "Stop recording"
    }), `
`, _jsx(_components.p, {
      children: "The recording stops automatically when there is no user in the channel after a time period set by the idle parameter. The default value is 300 seconds."
    }), `
`, _jsxs(_components.p, {
      children: ["To manually stop recording, press ", _jsx(_components.strong, {
        children: "Ctrl"
      }), " + ", _jsx(_components.strong, {
        children: "C"
      }), " to end the command-line session."]
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
