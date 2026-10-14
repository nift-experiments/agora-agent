import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Update service",
  description: "Update the Real-Time STT service"
};
export let _markdown = `

Real-Time STT supports the \`update\` command, which allows modification of parameters without stopping and restarting the service. For example, when transcription is enabled for a specified host only, and this host disconnects and rejoins the channel with a different UID, the Real-Time STT service needs to subscribe to the new UID and transcribe their audio. The \`update\` command can help resolve this problem.

The \`update\` command scope includes the following:

* Update transcription languages.
* Update UIDs of specified hosts whose audio needs to be transcribed.
* Switch between transcribing all hosts and a specified host.

## Prerequisites [#prerequisites]

To follow this procedure, you must:

* Have a valid [Agora Account](https://console.agora.io/).

* Have a valid Agora project with an app ID and a temporary token or a token
  server. For details, see [Agora account management](/en/introduction/account).

* Have a computer with access to the internet. If your network has a firewall, follow the steps in [Firewall requirements](../../reference/firewall).

* Join an RTC channel as a host and start streaming. Refer to the [Voice SDK quickstart](/en/realtime-media/rtc/voice-quickstart) guide.

* Make sure Real-Time STT is enabled for your app.

## Implementation [#implementation]

Follow the API call sequence from the [REST Quickstart](../../get-started/quickstart).

### Request examples [#request-examples]

* Update the transcription language:

  \`\`\`bash
  curl --location --request POST 'https://api.agora.io/api/speech-to-text/v1/projects/{appId}/agents/{agentId}/update?sequenceId=1&updateMask=languages' \\
  --header 'Content-Type: application/json' \\
  --header 'Authorization: Basic <credentials>' \\
  --data '{
      "languages": [
          "en-US",
          "ru-RU"
      ]
  }'
  \`\`\`

* Update the UID

  \`\`\`bash
  curl --location --request POST 'https://api.agora.io/api/speech-to-text/v1/projects/{appId}/agents/{agentId}/update?sequenceId=1&updateMask=rtcConfig.subscribeAudioUids' \\
  --header 'Content-Type: application/json' \\
  --header 'Authorization: Basic <credentials>' \\
  --data '{
      "rtcConfig": {
          "subscribeAudioUids": ["12", "23", "45"],
      }
  }'
  \`\`\`

### Response examples [#response-examples]

* Success

  \`\`\`json
  {
    "agent_id": "Agent ID.",
    "create_ts": 12345678,
    "status": "RUNNING"
  }
  \`\`\`

* Failure

  \`\`\`json
  {
   "message": "string" // error reason
  }
  \`\`\`

### Considerations [#considerations]

* Calling \`update\` requires at least 5-second intervals, specifically:
  * After calling \`start\`, the app needs to wait at least 5 seconds to call the \`update\` command.
  * After calling \`update\`, the app needs to wait at least 5 seconds before calling \`update\` again.
  * There is no interval limitation for calling \`update\` with \`query\` and \`stop\` commands.
* When updated, the new parameter fully replaces the old parameter, unless the old parameter is masked with \`updateMask\`. For example, say the audio of hosts with UID 100 and 200 is being transcribed. The host with the UID 200 disconnects and rejoins with the new UID 300. The \`update\` command needs to use \`"subscribeAudioUids": "[ "100", "300" ]\`. If it uses only \`"subscribeAudioUids": "[ "300" ]\`, then only the UID 300 host's audio will be transcribed. The languages configuration will not be updated.
* If languages and host UIDs are updated together, pass in \`"updateMask=languages,rtcConfig.subscribeAudioUids"\`.
* \`sequenceId\` should increase by 1 for each request.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Real-Time STT supports the `update` command, which allows modification of parameters without stopping and restarting the service. For example, when transcription is enabled for a specified host only, and this host disconnects and rejoins the channel with a different UID, the Real-Time STT service needs to subscribe to the new UID and transcribe their audio. The `update` command can help resolve this problem."
  }, {
    heading: undefined,
    content: "The `update` command scope includes the following:"
  }, {
    heading: undefined,
    content: "Update transcription languages."
  }, {
    heading: undefined,
    content: "Update UIDs of specified hosts whose audio needs to be transcribed."
  }, {
    heading: undefined,
    content: "Switch between transcribing all hosts and a specified host."
  }, {
    heading: "prerequisites",
    content: "To follow this procedure, you must:"
  }, {
    heading: "prerequisites",
    content: "Have a valid Agora Account."
  }, {
    heading: "prerequisites",
    content: `Have a valid Agora project with an app ID and a temporary token or a token
server. For details, see Agora account management.`
  }, {
    heading: "prerequisites",
    content: "Have a computer with access to the internet. If your network has a firewall, follow the steps in Firewall requirements."
  }, {
    heading: "prerequisites",
    content: "Join an RTC channel as a host and start streaming. Refer to the Voice SDK quickstart guide."
  }, {
    heading: "prerequisites",
    content: "Make sure Real-Time STT is enabled for your app."
  }, {
    heading: "implementation",
    content: "Follow the API call sequence from the REST Quickstart."
  }, {
    heading: "request-examples",
    content: "Update the transcription language:"
  }, {
    heading: "request-examples",
    content: "Update the UID"
  }, {
    heading: "response-examples",
    content: "Success"
  }, {
    heading: "response-examples",
    content: "Failure"
  }, {
    heading: "considerations",
    content: "Calling `update` requires at least 5-second intervals, specifically:"
  }, {
    heading: "considerations",
    content: "After calling `start`, the app needs to wait at least 5 seconds to call the `update` command."
  }, {
    heading: "considerations",
    content: "After calling `update`, the app needs to wait at least 5 seconds before calling `update` again."
  }, {
    heading: "considerations",
    content: "There is no interval limitation for calling `update` with `query` and `stop` commands."
  }, {
    heading: "considerations",
    content: 'When updated, the new parameter fully replaces the old parameter, unless the old parameter is masked with `updateMask`. For example, say the audio of hosts with UID 100 and 200 is being transcribed. The host with the UID 200 disconnects and rejoins with the new UID 300. The `update` command needs to use `"subscribeAudioUids": "[ "100", "300" ]`. If it uses only `"subscribeAudioUids": "[ "300" ]`, then only the UID 300 host\'s audio will be transcribed. The languages configuration will not be updated.'
  }, {
    heading: "considerations",
    content: 'If languages and host UIDs are updated together, pass in `"updateMask=languages,rtcConfig.subscribeAudioUids"`.'
  }, {
    heading: "considerations",
    content: "`sequenceId` should increase by 1 for each request."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implementation",
    content: "Implementation"
  }, {
    id: "request-examples",
    content: "Request examples"
  }, {
    id: "response-examples",
    content: "Response examples"
  }, {
    id: "considerations",
    content: "Considerations"
  }]
};
export let toc = [{
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#request-examples",
  title: _jsx(_Fragment, {
    children: "Request examples"
  })
}, {
  depth: 3,
  url: "#response-examples",
  title: _jsx(_Fragment, {
    children: "Response examples"
  })
}, {
  depth: 3,
  url: "#considerations",
  title: _jsx(_Fragment, {
    children: "Considerations"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["Real-Time STT supports the ", _jsx(_components.code, {
        children: "update"
      }), " command, which allows modification of parameters without stopping and restarting the service. For example, when transcription is enabled for a specified host only, and this host disconnects and rejoins the channel with a different UID, the Real-Time STT service needs to subscribe to the new UID and transcribe their audio. The ", _jsx(_components.code, {
        children: "update"
      }), " command can help resolve this problem."]
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "update"
      }), " command scope includes the following:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Update transcription languages."
      }), `
`, _jsx(_components.li, {
        children: "Update UIDs of specified hosts whose audio needs to be transcribed."
      }), `
`, _jsx(_components.li, {
        children: "Switch between transcribing all hosts and a specified host."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "To follow this procedure, you must:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Have a valid ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Account"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [`Have a valid Agora project with an app ID and a temporary token or a token
server. For details, see `, _jsx(_components.a, {
            href: "/en/introduction/account",
            children: "Agora account management"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Have a computer with access to the internet. If your network has a firewall, follow the steps in ", _jsx(_components.a, {
            href: "../../reference/firewall",
            children: "Firewall requirements"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Join an RTC channel as a host and start streaming. Refer to the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/voice-quickstart",
            children: "Voice SDK quickstart"
          }), " guide."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Make sure Real-Time STT is enabled for your app."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsxs(_components.p, {
      children: ["Follow the API call sequence from the ", _jsx(_components.a, {
        href: "../../get-started/quickstart",
        children: "REST Quickstart"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "request-examples",
      children: "Request examples"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Update the transcription language:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "curl"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --location"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --request"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " POST"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'https://api.agora.io/api/speech-to-text/v1/projects/{appId}/agents/{agentId}/update?sequenceId=1&updateMask=languages'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " \\"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "--header "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'Content-Type: application/json'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " \\"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "--header "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'Authorization: Basic <credentials>'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " \\"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "--data "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'{"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "languages": ['
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '        "en-US",'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '        "ru-RU"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "    ]"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "}'"
                })
              })]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Update the UID"
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
            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "curl"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --location"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --request"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " POST"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'https://api.agora.io/api/speech-to-text/v1/projects/{appId}/agents/{agentId}/update?sequenceId=1&updateMask=rtcConfig.subscribeAudioUids'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " \\"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "--header "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'Content-Type: application/json'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " \\"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "--header "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'Authorization: Basic <credentials>'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " \\"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "--data "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'{"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "rtcConfig": {'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '        "subscribeAudioUids": ["12", "23", "45"],'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "    }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "}'"
                })
              })]
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "response-examples",
      children: "Response examples"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Success"
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
                  children: '"Agent ID."'
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
                  children: '  "create_ts"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "12345678"
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
                  children: '  "status"'
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
                  children: '"RUNNING"'
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
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Failure"
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
                  children: ' "message"'
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
                  children: '"string"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: " // error reason"
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
`, _jsx(_components.h3, {
      id: "considerations",
      children: "Considerations"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Calling ", _jsx(_components.code, {
          children: "update"
        }), " requires at least 5-second intervals, specifically:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["After calling ", _jsx(_components.code, {
              children: "start"
            }), ", the app needs to wait at least 5 seconds to call the ", _jsx(_components.code, {
              children: "update"
            }), " command."]
          }), `
`, _jsxs(_components.li, {
            children: ["After calling ", _jsx(_components.code, {
              children: "update"
            }), ", the app needs to wait at least 5 seconds before calling ", _jsx(_components.code, {
              children: "update"
            }), " again."]
          }), `
`, _jsxs(_components.li, {
            children: ["There is no interval limitation for calling ", _jsx(_components.code, {
              children: "update"
            }), " with ", _jsx(_components.code, {
              children: "query"
            }), " and ", _jsx(_components.code, {
              children: "stop"
            }), " commands."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["When updated, the new parameter fully replaces the old parameter, unless the old parameter is masked with ", _jsx(_components.code, {
          children: "updateMask"
        }), ". For example, say the audio of hosts with UID 100 and 200 is being transcribed. The host with the UID 200 disconnects and rejoins with the new UID 300. The ", _jsx(_components.code, {
          children: "update"
        }), " command needs to use ", _jsx(_components.code, {
          children: '"subscribeAudioUids": "[ "100", "300" ]'
        }), ". If it uses only ", _jsx(_components.code, {
          children: '"subscribeAudioUids": "[ "300" ]'
        }), ", then only the UID 300 host's audio will be transcribed. The languages configuration will not be updated."]
      }), `
`, _jsxs(_components.li, {
        children: ["If languages and host UIDs are updated together, pass in ", _jsx(_components.code, {
          children: '"updateMask=languages,rtcConfig.subscribeAudioUids"'
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "sequenceId"
        }), " should increase by 1 for each request."]
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
