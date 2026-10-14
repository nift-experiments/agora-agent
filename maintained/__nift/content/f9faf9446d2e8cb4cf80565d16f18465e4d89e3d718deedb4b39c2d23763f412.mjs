import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Enable Real-Time STT from the client side",
  description: "Enable the Real-Time STT service"
};
export let _markdown = `

Real-Time STT is designed to provide service for channels. The recommended solution is to call RESTful APIs on the server side. But in a real-world use-case, the service is always enabled on the end user's side. This requires the user's app to notify the app's server, and the server to call RESTful APIs.

If the end user's app calls RESTful APIs, the app needs to store the customer ID and customer secret to generate a Base64-encoded credential and fill it in the HTTP header, as explained in [RESTful authentication](/en/api-reference/api-ref/speech-to-text/authentication). Since it is not safe to store the customer ID and secret in the app, Agora provides a new method for HTTP authentication without storing customer ID and secret.

This page explains how to enable Real-Time STT on the client's side. For more information, see [RESTful authentication](/en/api-reference/api-ref/speech-to-text/authentication).

## Prerequisites [#prerequisites]

To follow this procedure, you must:

* Have a valid [Agora Account](https://console.agora.io/).

* Have a valid Agora project with an app ID and a temporary token or a token
  server. For details, see [Agora account management](/en/introduction/account).

* Have a computer with access to the internet. If your network has a firewall, follow the steps in [Firewall requirements](../../reference/firewall).

* Join an RTC channel as a host and start streaming. Refer to the [Voice SDK quickstart](/en/realtime-media/rtc/voice-quickstart) guide.

* Make sure Real-Time STT is enabled for your app.

## Authenticate REST calls by RTC Token [#authenticate-rest-calls-by-rtc-token]

To let an end user's app call RESTful API with lower security risks, substitute the original Base64-encoded credential (generated from the customer ID and secret) with an RTC token (AccessToken2).

Take the following steps:

1. Refer to [Deploy a token server](/en/realtime-media/rtc/build/authenticate-users/deploy-token-server) to generate RTC tokens.
   You will need to use AccessToken2. For example, \`"007eJxTYLj64d/9y/N6FnXGZ4nWvZ9TcL7O2u7XrrCdnPe4p1QIbZ2pwGCaZGppkmxsZGaWZmRibmlkmWRiZmBikGpsZGBkaJyY9KCqIFWAj4FBI/gaMyMDEwMjEIL4PAwlqcUl8aXFqUXxxxxxxxxxxx=="\`

2. Use this token to replace the value of \`"Authorization"\` in HTTP headers: \`"Authorization: agora token="007eJxTYLj64d/9y/N6FnXGZ4nWvZ9TcL7O2u7XrrCdnPe4p1QIbZ2pwGCaZGppkmxsZGaWZmRibmlkmWRiZmBikGpsZGBkaJyY9KCqIFWAj4FBI/gaMyMDEwMjEIL4PAwlqcUl8aXFqUXxxxxxxxxxxx=="\`.

3. Use this header to call RESTful APIs.

**Examples**

* curl

  \`\`\`bash
  curl --location --request POST 'https://api.agora.io/api/speech-to-text/v1/projects/{appId}/join' \\
  --header 'Content-Type: Application/json' \\
  --header 'Authorization: agora token="007eJxTYLj64d/9y/N6FnXGZ4nWvZ9TcL7O2u7XrrCdnPe4p1QIbZ2pwGCaZGppkmxsZGaWZmRibmlkmWRiZmBikGpsZGBkaJyY9KCqIFWAj4FBI/gaMyMDEwMjEIL4PAwlqcUl8aXFqUXxxxxxxxxxxx=="' \\
  --data '{
      "name": "unique-agent-id",
      "languages": ["en-US"],
      "rtcConfig": {
          "channelName": "test-channel",
          "subBotUid": "47091",
          "pubBotUid": "88222"
      }
  }'
  \`\`\`

* Valid token:

  * Response status: 200 OK
  * Response body:

    \`\`\`json
    {
      "agent_id": "Agent ID.",
      "create_ts": 12345678,
      "status": "RUNNING"
    }
    \`\`\`

* Expired token:

  * Response status: 401 Unauthorized
  * Response body:

    * Token was valid but expired at the time of request:

      \`\`\`json
      {"message": "Token is expired"}
      \`\`\`

    * Token was not properly generated:

      \`\`\`json
      {"message": "Invalid token"}
      \`\`\`

## Notice [#notice]

Multiple clients may enable Real-Time STT simultaneously (within 1s), creating 2 or more transcription tasks. This will generate twice or more usage. To avoid this, take the following precautions:

* Add a lock in the apps.
* Prevent calling RESTful API from the same app more frequently than every second.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Real-Time STT is designed to provide service for channels. The recommended solution is to call RESTful APIs on the server side. But in a real-world use-case, the service is always enabled on the end user's side. This requires the user's app to notify the app's server, and the server to call RESTful APIs."
  }, {
    heading: undefined,
    content: "If the end user's app calls RESTful APIs, the app needs to store the customer ID and customer secret to generate a Base64-encoded credential and fill it in the HTTP header, as explained in RESTful authentication. Since it is not safe to store the customer ID and secret in the app, Agora provides a new method for HTTP authentication without storing customer ID and secret."
  }, {
    heading: undefined,
    content: "This page explains how to enable Real-Time STT on the client's side. For more information, see RESTful authentication."
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
    heading: "authenticate-rest-calls-by-rtc-token",
    content: "To let an end user's app call RESTful API with lower security risks, substitute the original Base64-encoded credential (generated from the customer ID and secret) with an RTC token (AccessToken2)."
  }, {
    heading: "authenticate-rest-calls-by-rtc-token",
    content: "Take the following steps:"
  }, {
    heading: "authenticate-rest-calls-by-rtc-token",
    content: 'Refer to Deploy a token server to generate RTC tokens.\nYou will need to use AccessToken2. For example, `"007eJxTYLj64d/9y/N6FnXGZ4nWvZ9TcL7O2u7XrrCdnPe4p1QIbZ2pwGCaZGppkmxsZGaWZmRibmlkmWRiZmBikGpsZGBkaJyY9KCqIFWAj4FBI/gaMyMDEwMjEIL4PAwlqcUl8aXFqUXxxxxxxxxxxx=="`'
  }, {
    heading: "authenticate-rest-calls-by-rtc-token",
    content: 'Use this token to replace the value of `"Authorization"` in HTTP headers: `"Authorization: agora token="007eJxTYLj64d/9y/N6FnXGZ4nWvZ9TcL7O2u7XrrCdnPe4p1QIbZ2pwGCaZGppkmxsZGaWZmRibmlkmWRiZmBikGpsZGBkaJyY9KCqIFWAj4FBI/gaMyMDEwMjEIL4PAwlqcUl8aXFqUXxxxxxxxxxxx=="`.'
  }, {
    heading: "authenticate-rest-calls-by-rtc-token",
    content: "Use this header to call RESTful APIs."
  }, {
    heading: "authenticate-rest-calls-by-rtc-token",
    content: "**Examples**"
  }, {
    heading: "authenticate-rest-calls-by-rtc-token",
    content: "curl"
  }, {
    heading: "authenticate-rest-calls-by-rtc-token",
    content: "Valid token:"
  }, {
    heading: "authenticate-rest-calls-by-rtc-token",
    content: "Response status: 200 OK"
  }, {
    heading: "authenticate-rest-calls-by-rtc-token",
    content: "Response body:"
  }, {
    heading: "authenticate-rest-calls-by-rtc-token",
    content: "Expired token:"
  }, {
    heading: "authenticate-rest-calls-by-rtc-token",
    content: "Response status: 401 Unauthorized"
  }, {
    heading: "authenticate-rest-calls-by-rtc-token",
    content: "Response body:"
  }, {
    heading: "authenticate-rest-calls-by-rtc-token",
    content: "Token was valid but expired at the time of request:"
  }, {
    heading: "authenticate-rest-calls-by-rtc-token",
    content: "Token was not properly generated:"
  }, {
    heading: "notice",
    content: "Multiple clients may enable Real-Time STT simultaneously (within 1s), creating 2 or more transcription tasks. This will generate twice or more usage. To avoid this, take the following precautions:"
  }, {
    heading: "notice",
    content: "Add a lock in the apps."
  }, {
    heading: "notice",
    content: "Prevent calling RESTful API from the same app more frequently than every second."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "authenticate-rest-calls-by-rtc-token",
    content: "Authenticate REST calls by RTC Token"
  }, {
    id: "notice",
    content: "Notice"
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
  url: "#authenticate-rest-calls-by-rtc-token",
  title: _jsx(_Fragment, {
    children: "Authenticate REST calls by RTC Token"
  })
}, {
  depth: 2,
  url: "#notice",
  title: _jsx(_Fragment, {
    children: "Notice"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Real-Time STT is designed to provide service for channels. The recommended solution is to call RESTful APIs on the server side. But in a real-world use-case, the service is always enabled on the end user's side. This requires the user's app to notify the app's server, and the server to call RESTful APIs."
    }), `
`, _jsxs(_components.p, {
      children: ["If the end user's app calls RESTful APIs, the app needs to store the customer ID and customer secret to generate a Base64-encoded credential and fill it in the HTTP header, as explained in ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/speech-to-text/authentication",
        children: "RESTful authentication"
      }), ". Since it is not safe to store the customer ID and secret in the app, Agora provides a new method for HTTP authentication without storing customer ID and secret."]
    }), `
`, _jsxs(_components.p, {
      children: ["This page explains how to enable Real-Time STT on the client's side. For more information, see ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/speech-to-text/authentication",
        children: "RESTful authentication"
      }), "."]
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
      id: "authenticate-rest-calls-by-rtc-token",
      children: "Authenticate REST calls by RTC Token"
    }), `
`, _jsx(_components.p, {
      children: "To let an end user's app call RESTful API with lower security risks, substitute the original Base64-encoded credential (generated from the customer ID and secret) with an RTC token (AccessToken2)."
    }), `
`, _jsx(_components.p, {
      children: "Take the following steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Refer to ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/authenticate-users/deploy-token-server",
            children: "Deploy a token server"
          }), ` to generate RTC tokens.
You will need to use AccessToken2. For example, `, _jsx(_components.code, {
            children: '"007eJxTYLj64d/9y/N6FnXGZ4nWvZ9TcL7O2u7XrrCdnPe4p1QIbZ2pwGCaZGppkmxsZGaWZmRibmlkmWRiZmBikGpsZGBkaJyY9KCqIFWAj4FBI/gaMyMDEwMjEIL4PAwlqcUl8aXFqUXxxxxxxxxxxx=="'
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Use this token to replace the value of ", _jsx(_components.code, {
            children: '"Authorization"'
          }), " in HTTP headers: ", _jsx(_components.code, {
            children: '"Authorization: agora token="007eJxTYLj64d/9y/N6FnXGZ4nWvZ9TcL7O2u7XrrCdnPe4p1QIbZ2pwGCaZGppkmxsZGaWZmRibmlkmWRiZmBikGpsZGBkaJyY9KCqIFWAj4FBI/gaMyMDEwMjEIL4PAwlqcUl8aXFqUXxxxxxxxxxxx=="'
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Use this header to call RESTful APIs."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Examples"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "curl"
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
                  children: "'Content-Type: Application/json'"
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
                  children: `'Authorization: agora token="007eJxTYLj64d/9y/N6FnXGZ4nWvZ9TcL7O2u7XrrCdnPe4p1QIbZ2pwGCaZGppkmxsZGaWZmRibmlkmWRiZmBikGpsZGBkaJyY9KCqIFWAj4FBI/gaMyMDEwMjEIL4PAwlqcUl8aXFqUXxxxxxxxxxxx=="'`
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
                  children: '    "languages": ["en-US"],'
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
                  children: '        "channelName": "test-channel",'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '        "subBotUid": "47091",'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '        "pubBotUid": "88222"'
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
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Valid token:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Response status: 200 OK"
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Response body:"
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
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Expired token:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Response status: 401 Unauthorized"
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Response body:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Token was valid but expired at the time of request:"
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
                    children: _jsx(_components.code, {
                      children: _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "{"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: '"message"'
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
                          children: '"Token is expired"'
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "}"
                        })]
                      })
                    })
                  })
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Token was not properly generated:"
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
                    children: _jsx(_components.code, {
                      children: _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "{"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: '"message"'
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
                          children: '"Invalid token"'
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "}"
                        })]
                      })
                    })
                  })
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
`]
    }), `
`, _jsx(_components.h2, {
      id: "notice",
      children: "Notice"
    }), `
`, _jsx(_components.p, {
      children: "Multiple clients may enable Real-Time STT simultaneously (within 1s), creating 2 or more transcription tasks. This will generate twice or more usage. To avoid this, take the following precautions:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Add a lock in the apps."
      }), `
`, _jsx(_components.li, {
        children: "Prevent calling RESTful API from the same app more frequently than every second."
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
