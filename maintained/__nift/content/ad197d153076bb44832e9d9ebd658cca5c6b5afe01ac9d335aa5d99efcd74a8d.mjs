import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Encrypt captions",
  description: "Encrypt the captions transcribed with RTT"
};
export let _markdown = `

Sometimes audio and video streams are encrypted for security reasons. In this case, Real-Time STT uses a key to decrypt the audio stream for transcription and then encrypt the captions in the data stream payload. The app then uses the same key to decrypt the data stream payload and extract the captions on the client's side.

This page explains how to implement caption text encryption in your app.

## Prerequisites [#prerequisites]

To follow this procedure, you must:

* Have a valid [Agora Account](https://console.agora.io/).

* Have a valid Agora project with an app ID and a temporary token or a token
  server. For details, see [Agora account management](/en/introduction/account).

* Have a computer with access to the internet. If your network has a firewall, follow the steps in [Firewall requirements](../../reference/firewall).

* Join an RTC channel as a host and start streaming. Refer to the [Voice SDK quickstart](/en/realtime-media/rtc/voice-quickstart) guide.

* Make sure Real-Time STT is enabled for your app.

* Be using RTC SDK for native platforms v4.2.6.3 or for web v4.20.1 with support for \`datastreamEncryptionEnabled\`.

## Implementation [#implementation]

To encrypt the captions, follow the API call sequence from the [REST Quickstart](../../get-started/quickstart) and modify the \`start\` request to include encryption parameters as follows:

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
    "pubBotToken": "<PublishToken-IfRequired>",
    "cryptionMode": 7,
    "secret": "32-byte-encryption-key",
    "salt": "base64-encoded-32-byte-salt-if-mode-7-or-8"
  }
}'
\`\`\`

## Encryption mode [#encryption-mode]

| Code | Encryption method | Description                                                     |
| ---- | ----------------- | --------------------------------------------------------------- |
| 0    | No Encryption     |                                                                 |
| 1    | \`AES_128_XTS\`     | 128-bit AES encryption, XTS mode.                               |
| 2    | \`AES_128_ECB\`     | 128-bit AES encryption, ECB mode.                               |
| 3    | \`AES_256_XTS\`     | 256-bit AES encryption, XTS mode.                               |
| 4    | \`SM4_128_ECB\`     | 128-bit SM4 encryption, ECB mode.                               |
| 5    | \`AES_128_GCM\`     | 128-bit AES encryption, GCM mode.                               |
| 6    | \`AES_256_GCM\`     | 256-bit AES encryption, GCM mode.                               |
| 7    | \`AES_128_GCM2\`    | 128-bit AES encryption, GCM mode. Requires the setting of salt. |
| 8    | \`AES_256_GCM2\`    | 256-bit AES encryption, GCM mode. Requires the setting of salt. |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Sometimes audio and video streams are encrypted for security reasons. In this case, Real-Time STT uses a key to decrypt the audio stream for transcription and then encrypt the captions in the data stream payload. The app then uses the same key to decrypt the data stream payload and extract the captions on the client's side."
  }, {
    heading: undefined,
    content: "This page explains how to implement caption text encryption in your app."
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
    heading: "prerequisites",
    content: "Be using RTC SDK for native platforms v4.2.6.3 or for web v4.20.1 with support for `datastreamEncryptionEnabled`."
  }, {
    heading: "implementation",
    content: "To encrypt the captions, follow the API call sequence from the REST Quickstart and modify the `start` request to include encryption parameters as follows:"
  }, {
    heading: "encryption-mode",
    content: "Code"
  }, {
    heading: "encryption-mode",
    content: "Encryption method"
  }, {
    heading: "encryption-mode",
    content: "Description"
  }, {
    heading: "encryption-mode",
    content: "0"
  }, {
    heading: "encryption-mode",
    content: "No Encryption"
  }, {
    heading: "encryption-mode",
    content: "1"
  }, {
    heading: "encryption-mode",
    content: "`AES_128_XTS`"
  }, {
    heading: "encryption-mode",
    content: "128-bit AES encryption, XTS mode."
  }, {
    heading: "encryption-mode",
    content: "2"
  }, {
    heading: "encryption-mode",
    content: "`AES_128_ECB`"
  }, {
    heading: "encryption-mode",
    content: "128-bit AES encryption, ECB mode."
  }, {
    heading: "encryption-mode",
    content: "3"
  }, {
    heading: "encryption-mode",
    content: "`AES_256_XTS`"
  }, {
    heading: "encryption-mode",
    content: "256-bit AES encryption, XTS mode."
  }, {
    heading: "encryption-mode",
    content: "4"
  }, {
    heading: "encryption-mode",
    content: "`SM4_128_ECB`"
  }, {
    heading: "encryption-mode",
    content: "128-bit SM4 encryption, ECB mode."
  }, {
    heading: "encryption-mode",
    content: "5"
  }, {
    heading: "encryption-mode",
    content: "`AES_128_GCM`"
  }, {
    heading: "encryption-mode",
    content: "128-bit AES encryption, GCM mode."
  }, {
    heading: "encryption-mode",
    content: "6"
  }, {
    heading: "encryption-mode",
    content: "`AES_256_GCM`"
  }, {
    heading: "encryption-mode",
    content: "256-bit AES encryption, GCM mode."
  }, {
    heading: "encryption-mode",
    content: "7"
  }, {
    heading: "encryption-mode",
    content: "`AES_128_GCM2`"
  }, {
    heading: "encryption-mode",
    content: "128-bit AES encryption, GCM mode. Requires the setting of salt."
  }, {
    heading: "encryption-mode",
    content: "8"
  }, {
    heading: "encryption-mode",
    content: "`AES_256_GCM2`"
  }, {
    heading: "encryption-mode",
    content: "256-bit AES encryption, GCM mode. Requires the setting of salt."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implementation",
    content: "Implementation"
  }, {
    id: "encryption-mode",
    content: "Encryption mode"
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
  depth: 2,
  url: "#encryption-mode",
  title: _jsx(_Fragment, {
    children: "Encryption mode"
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
      children: "Sometimes audio and video streams are encrypted for security reasons. In this case, Real-Time STT uses a key to decrypt the audio stream for transcription and then encrypt the captions in the data stream payload. The app then uses the same key to decrypt the data stream payload and extract the captions on the client's side."
    }), `
`, _jsx(_components.p, {
      children: "This page explains how to implement caption text encryption in your app."
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
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Be using RTC SDK for native platforms v4.2.6.3 or for web v4.20.1 with support for ", _jsx(_components.code, {
            children: "datastreamEncryptionEnabled"
          }), "."]
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
      children: ["To encrypt the captions, follow the API call sequence from the ", _jsx(_components.a, {
        href: "../../get-started/quickstart",
        children: "REST Quickstart"
      }), " and modify the ", _jsx(_components.code, {
        children: "start"
      }), " request to include encryption parameters as follows:"]
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
              children: '  "name": "unique-agent-id",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "languages": ['
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "en-US"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  ],"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "maxIdleTime": 50,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "rtcConfig": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "channelName": "<YourChannelName>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "subBotUid": "<YourSubscribeUid>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "subBotToken": "<YourSubscribeToken>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "pubBotUid": "<YourPublishUid>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "pubBotToken": "<PublishToken-IfRequired>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "cryptionMode": 7,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "secret": "32-byte-encryption-key",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "salt": "base64-encoded-32-byte-salt-if-mode-7-or-8"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  }"
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
`, _jsx(_components.h2, {
      id: "encryption-mode",
      children: "Encryption mode"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Code"
          }), _jsx(_components.th, {
            children: "Encryption method"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "0"
          }), _jsx(_components.td, {
            children: "No Encryption"
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AES_128_XTS"
            })
          }), _jsx(_components.td, {
            children: "128-bit AES encryption, XTS mode."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "2"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AES_128_ECB"
            })
          }), _jsx(_components.td, {
            children: "128-bit AES encryption, ECB mode."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "3"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AES_256_XTS"
            })
          }), _jsx(_components.td, {
            children: "256-bit AES encryption, XTS mode."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "4"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "SM4_128_ECB"
            })
          }), _jsx(_components.td, {
            children: "128-bit SM4 encryption, ECB mode."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "5"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AES_128_GCM"
            })
          }), _jsx(_components.td, {
            children: "128-bit AES encryption, GCM mode."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "6"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AES_256_GCM"
            })
          }), _jsx(_components.td, {
            children: "256-bit AES encryption, GCM mode."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "7"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AES_128_GCM2"
            })
          }), _jsx(_components.td, {
            children: "128-bit AES encryption, GCM mode. Requires the setting of salt."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "8"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AES_256_GCM2"
            })
          }), _jsx(_components.td, {
            children: "256-bit AES encryption, GCM mode. Requires the setting of salt."
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
