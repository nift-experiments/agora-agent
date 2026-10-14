import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Demo server APIs",
  description: "Reference for the server-side APIs used by the Convo AI Device Kit development workflow."
};
export let _markdown = `

The demo server provides three RESTful APIs for device operations. This example project does not implement authentication. You can add authentication as needed.

**Base URL**: \`https://your-domain.com/\`

**Authentication**: None

## Get device RTC token [#get-device-rtc-token]

Retrieves RTC credentials for the device to join a channel.

* **Method**: POST
* **Endpoint**: \`/device\`
* **Request body**:

  \`\`\`json
  {
    "channel_name": "DEVICE_ID",
    "uid": DEVICE_USER_ID
  }
  \`\`\`

## Start conversational AI agent [#start-conversational-ai-agent]

Starts the Conversational AI Engine for the specified channel.

* **Method**: POST
* **Endpoint**: \`/agent/start\`
* **Request body**:

  \`\`\`json
  {
    "channel_name": "DEVICE_ID",
    "uid": DEVICE_USER_ID,
    "agent_uid": AGENT_USER_ID
  }
  \`\`\`

## Stop conversational AI agent [#stop-conversational-ai-agent]

Stops the Conversational AI Engine.

* **Method**: POST
* **Endpoint**: \`/agent/stop\`
* **Request body**:

  \`\`\`json
  {
    "agent_id": "AGENT_ID"
  }
  \`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The demo server provides three RESTful APIs for device operations. This example project does not implement authentication. You can add authentication as needed."
  }, {
    heading: undefined,
    content: "**Base URL**: `https://your-domain.com/`"
  }, {
    heading: undefined,
    content: "**Authentication**: None"
  }, {
    heading: "get-device-rtc-token",
    content: "Retrieves RTC credentials for the device to join a channel."
  }, {
    heading: "get-device-rtc-token",
    content: "**Method**: POST"
  }, {
    heading: "get-device-rtc-token",
    content: "**Endpoint**: `/device`"
  }, {
    heading: "get-device-rtc-token",
    content: "**Request body**:"
  }, {
    heading: "start-conversational-ai-agent",
    content: "Starts the Conversational AI Engine for the specified channel."
  }, {
    heading: "start-conversational-ai-agent",
    content: "**Method**: POST"
  }, {
    heading: "start-conversational-ai-agent",
    content: "**Endpoint**: `/agent/start`"
  }, {
    heading: "start-conversational-ai-agent",
    content: "**Request body**:"
  }, {
    heading: "stop-conversational-ai-agent",
    content: "Stops the Conversational AI Engine."
  }, {
    heading: "stop-conversational-ai-agent",
    content: "**Method**: POST"
  }, {
    heading: "stop-conversational-ai-agent",
    content: "**Endpoint**: `/agent/stop`"
  }, {
    heading: "stop-conversational-ai-agent",
    content: "**Request body**:"
  }],
  headings: [{
    id: "get-device-rtc-token",
    content: "Get device RTC token"
  }, {
    id: "start-conversational-ai-agent",
    content: "Start conversational AI agent"
  }, {
    id: "stop-conversational-ai-agent",
    content: "Stop conversational AI agent"
  }]
};
export let toc = [{
  depth: 2,
  url: "#get-device-rtc-token",
  title: _jsx(_Fragment, {
    children: "Get device RTC token"
  })
}, {
  depth: 2,
  url: "#start-conversational-ai-agent",
  title: _jsx(_Fragment, {
    children: "Start conversational AI agent"
  })
}, {
  depth: 2,
  url: "#stop-conversational-ai-agent",
  title: _jsx(_Fragment, {
    children: "Stop conversational AI agent"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The demo server provides three RESTful APIs for device operations. This example project does not implement authentication. You can add authentication as needed."
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Base URL"
      }), ": ", _jsx(_components.code, {
        children: "https://your-domain.com/"
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Authentication"
      }), ": None"]
    }), `
`, _jsx(_components.h2, {
      id: "get-device-rtc-token",
      children: "Get device RTC token"
    }), `
`, _jsx(_components.p, {
      children: "Retrieves RTC credentials for the device to join a channel."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Method"
          }), ": POST"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Endpoint"
          }), ": ", _jsx(_components.code, {
            children: "/device"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Request body"
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
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "channel_name"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"DEVICE_ID"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "uid"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "DEVICE_USER_ID"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })
              })]
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "start-conversational-ai-agent",
      children: "Start conversational AI agent"
    }), `
`, _jsx(_components.p, {
      children: "Starts the Conversational AI Engine for the specified channel."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Method"
          }), ": POST"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Endpoint"
          }), ": ", _jsx(_components.code, {
            children: "/agent/start"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Request body"
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
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "channel_name"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"DEVICE_ID"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "uid"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "DEVICE_USER_ID"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "agent_uid"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "AGENT_USER_ID"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })
              })]
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "stop-conversational-ai-agent",
      children: "Stop conversational AI agent"
    }), `
`, _jsx(_components.p, {
      children: "Stops the Conversational AI Engine."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Method"
          }), ": POST"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Endpoint"
          }), ": ", _jsx(_components.code, {
            children: "/agent/stop"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Request body"
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
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "agent_id"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"AGENT_ID"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })
              })]
            })
          })
        }), `
`]
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
