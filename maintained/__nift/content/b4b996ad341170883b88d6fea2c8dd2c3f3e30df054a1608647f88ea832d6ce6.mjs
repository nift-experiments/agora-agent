import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Transcribe specified hosts",
  description: "Transcribe the speech of specific channel hosts only"
};
export let _markdown = `

Real-Time STT supports 2 transcription modes:

* Channel-based transcription for all active hosts in a channel. To enable it, see [REST Quickstart](../../get-started/quickstart).
* Transcription of the specified hosts audio only and ignoring all other hosts.

This page explains how to implement transcription of specified hosts only.

## Prerequisites [#prerequisites]

To follow this procedure, you must:

* Have a valid [Agora Account](https://console.agora.io/).

* Have a valid Agora project with an app ID and a temporary token or a token
  server. For details, see [Agora account management](/en/introduction/account).

* Have a computer with access to the internet. If your network has a firewall, follow the steps in [Firewall requirements](../../reference/firewall).

* Join an RTC channel as a host and start streaming. Refer to the [Voice SDK quickstart](/en/realtime-media/rtc/voice-quickstart) guide.

* Make sure Real-Time STT is enabled for your app.

## Implementation [#implementation]

To transcribe a specific host, follow the API call sequence from the [REST Quickstart](../../get-started/quickstart) and modify the \`start\` request to add the \`subscribeAudioUids\` parameter as follows:

\`\`\`bash
curl --location --request POST 'https://api.agora.io/api/speech-to-text/v1/projects/{appId}/join' \\
--header 'Content-Type: application/json' \\
--header 'Authorization: Basic <credentials>' \\
--data '{
    "name": "unique-agent-id",
    "languages": [
        "en-US"
    ],
    "maxIdleTime": 50,
    "rtcConfig": {
        "channelName": "<YourChannelName>",
        "subBotUid": "<YourSubscribeUid>",
        "subBotToken": "<YourSubscribeToken>",
        "pubBotUid": "<YourPublishUid>",
        "pubBotToken": "<YourPublishToken>",
        "subscribeAudioUids": ["123", "456"]
    }
}'
\`\`\`

Alternatively, you can specify the user IDs for the audio streams you do not want to subscribe in the \`unSubscribeAudioUids\` parameter. You can set either \`subscribeAudioUids\` or \`unSubscribeAudioUids\`.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Real-Time STT supports 2 transcription modes:"
  }, {
    heading: undefined,
    content: "Channel-based transcription for all active hosts in a channel. To enable it, see REST Quickstart."
  }, {
    heading: undefined,
    content: "Transcription of the specified hosts audio only and ignoring all other hosts."
  }, {
    heading: undefined,
    content: "This page explains how to implement transcription of specified hosts only."
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
    content: "To transcribe a specific host, follow the API call sequence from the REST Quickstart and modify the `start` request to add the `subscribeAudioUids` parameter as follows:"
  }, {
    heading: "implementation",
    content: "Alternatively, you can specify the user IDs for the audio streams you do not want to subscribe in the `unSubscribeAudioUids` parameter. You can set either `subscribeAudioUids` or `unSubscribeAudioUids`."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implementation",
    content: "Implementation"
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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Real-Time STT supports 2 transcription modes:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Channel-based transcription for all active hosts in a channel. To enable it, see ", _jsx(_components.a, {
          href: "../../get-started/quickstart",
          children: "REST Quickstart"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Transcription of the specified hosts audio only and ignoring all other hosts."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "This page explains how to implement transcription of specified hosts only."
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
      children: ["To transcribe a specific host, follow the API call sequence from the ", _jsx(_components.a, {
        href: "../../get-started/quickstart",
        children: "REST Quickstart"
      }), " and modify the ", _jsx(_components.code, {
        children: "start"
      }), " request to add the ", _jsx(_components.code, {
        children: "subscribeAudioUids"
      }), " parameter as follows:"]
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
              children: " 'https://api.agora.io/api/speech-to-text/v1/projects/{appId}/join'"
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
              children: '    "name": "unique-agent-id",'
            })
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
              children: '        "en-US"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    ],"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "maxIdleTime": 50,'
            })
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
              children: '        "channelName": "<YourChannelName>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "subBotUid": "<YourSubscribeUid>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "subBotToken": "<YourSubscribeToken>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "pubBotUid": "<YourPublishUid>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "pubBotToken": "<YourPublishToken>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "subscribeAudioUids": ["123", "456"]'
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
`, _jsxs(_components.p, {
      children: ["Alternatively, you can specify the user IDs for the audio streams you do not want to subscribe in the ", _jsx(_components.code, {
        children: "unSubscribeAudioUids"
      }), " parameter. You can set either ", _jsx(_components.code, {
        children: "subscribeAudioUids"
      }), " or ", _jsx(_components.code, {
        children: "unSubscribeAudioUids"
      }), "."]
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
