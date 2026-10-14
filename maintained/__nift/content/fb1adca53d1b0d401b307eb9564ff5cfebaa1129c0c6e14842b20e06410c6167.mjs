import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Deploy a middleware server",
  description: "Set up and run the Agora community middleware to generate authentication tokens for Video Calling."
};
export let _markdown = `

To streamline token authentication and REST API workflows in your infrastructure, Agora's developer community offers the open-source [Agora Go Backend Middleware](https://github.com/AgoraIO-Community/agora-go-backend-middleware). The backend provides RESTful APIs for tasks such as token generation, cloud recording management, and real-time transcription. This guide shows you how to implement a token server using the community middleware for Video Calling.

## Understand the tech [#understand-the-tech]

The following figure illustrates the architecture of the middleware token generation microservice.

![Middleware token generation architecture](https://assets-docs.agora.io/images/common/middleware-token-generation.svg)

## Set up and run the Go backend middleware [#set-up-and-run-the-go-backend-middleware]

Take the following steps to set up and run the middleware project:

1. **Clone the repository**

   \`\`\`bash
   git clone https://github.com/AgoraIO-Community/agora-go-backend-middleware.git
   \`\`\`

2. **Install dependencies**

Ensure you have [Go](https://go.dev/doc/install) installed on your system. Navigate to the project directory and install the project dependencies:

\`\`\`bash
cd agora-go-backend-middleware
go mod download
\`\`\`

3. **Configure environment variables**

   Copy the example \`.env\` file.

   \`\`\`bash
   cp .env.example .env
   \`\`\`

   Update the following variables in the \`.env\` file:

   * \`APP_ID\`: Your Agora App ID.
   * \`APP_CERTIFICATE\`: Your Agora App Certificate.

4. **Run the middleware**

Start the middleware server using the following command:

\`\`\`bash
go run cmd/main.go
\`\`\`

The middleware runs on the default port, for example \`localhost:8080\`.

## Generate tokens [#generate-tokens]

Refer to the following \`curl\` example to test the middleware's token generation API endpoint.

<CalloutContainer type="info">
  <CalloutDescription>
    The command-line examples in this guide are for demonstration purposes only. Do not use them directly in a production environment. Implement RESTful API requests through your application server.
  </CalloutDescription>
</CalloutContainer>

**POST:** \`/token/getNew\`

\`\`\`bash
curl -X POST http://localhost:8080/token/getNew \\
-H "Content-Type: application/json" \\
-d '{
 "tokenType": "rtc",
 "channel": "testChannel",
 "role": "publisher",
 "uid": "12345",
 "expire": 3600
}'
\`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    Replace \`localhost:8080\` with your server's address.
  </CalloutDescription>
</CalloutContainer>

## Reference [#reference]

This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

### Middleware token generation API [#middleware-token-generation-api]

This section provides details about the middleware token generation API endpoints.

#### Generate Token [#generate-token]

Generates a RTC SDK, Signaling, or Chat token based on the provided parameters.

#### Endpoint [#endpoint]

\`POST /token/getNew\`

#### Request body [#request-body]

\`\`\`json
{
 "tokenType": "rtc|rtm|chat",
 "channel": "string",
 "uid": "string",
 "role": "publisher|subscriber",
 "expire": 0
}
\`\`\`

#### Response [#response]

\`\`\`json
{
 "token": "string"
}
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To streamline token authentication and REST API workflows in your infrastructure, Agora's developer community offers the open-source Agora Go Backend Middleware. The backend provides RESTful APIs for tasks such as token generation, cloud recording management, and real-time transcription. This guide shows you how to implement a token server using the community middleware for Video Calling."
  }, {
    heading: "understand-the-tech",
    content: "The following figure illustrates the architecture of the middleware token generation microservice."
  }, {
    heading: "set-up-and-run-the-go-backend-middleware",
    content: "Take the following steps to set up and run the middleware project:"
  }, {
    heading: "set-up-and-run-the-go-backend-middleware",
    content: "**Clone the repository**"
  }, {
    heading: "set-up-and-run-the-go-backend-middleware",
    content: "**Install dependencies**"
  }, {
    heading: "set-up-and-run-the-go-backend-middleware",
    content: "Ensure you have Go installed on your system. Navigate to the project directory and install the project dependencies:"
  }, {
    heading: "set-up-and-run-the-go-backend-middleware",
    content: "**Configure environment variables**"
  }, {
    heading: "set-up-and-run-the-go-backend-middleware",
    content: "Copy the example `.env` file."
  }, {
    heading: "set-up-and-run-the-go-backend-middleware",
    content: "Update the following variables in the `.env` file:"
  }, {
    heading: "set-up-and-run-the-go-backend-middleware",
    content: "`APP_ID`: Your Agora App ID."
  }, {
    heading: "set-up-and-run-the-go-backend-middleware",
    content: "`APP_CERTIFICATE`: Your Agora App Certificate."
  }, {
    heading: "set-up-and-run-the-go-backend-middleware",
    content: "**Run the middleware**"
  }, {
    heading: "set-up-and-run-the-go-backend-middleware",
    content: "Start the middleware server using the following command:"
  }, {
    heading: "set-up-and-run-the-go-backend-middleware",
    content: "The middleware runs on the default port, for example `localhost:8080`."
  }, {
    heading: "generate-tokens",
    content: "Refer to the following `curl` example to test the middleware's token generation API endpoint."
  }, {
    heading: "generate-tokens",
    content: "The command-line examples in this guide are for demonstration purposes only. Do not use them directly in a production environment. Implement RESTful API requests through your application server."
  }, {
    heading: "generate-tokens",
    content: "**POST:** `/token/getNew`"
  }, {
    heading: "generate-tokens",
    content: "Replace `localhost:8080` with your server's address."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "middleware-token-generation-api",
    content: "This section provides details about the middleware token generation API endpoints."
  }, {
    heading: "generate-token",
    content: "Generates a RTC SDK, Signaling, or Chat token based on the provided parameters."
  }, {
    heading: "endpoint",
    content: "`POST /token/getNew`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "set-up-and-run-the-go-backend-middleware",
    content: "Set up and run the Go backend middleware"
  }, {
    id: "generate-tokens",
    content: "Generate tokens"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "middleware-token-generation-api",
    content: "Middleware token generation API"
  }, {
    id: "generate-token",
    content: "Generate Token"
  }, {
    id: "endpoint",
    content: "Endpoint"
  }, {
    id: "request-body",
    content: "Request body"
  }, {
    id: "response",
    content: "Response"
  }]
};
export let toc = [{
  depth: 2,
  url: "#understand-the-tech",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#set-up-and-run-the-go-backend-middleware",
  title: _jsx(_Fragment, {
    children: "Set up and run the Go backend middleware"
  })
}, {
  depth: 2,
  url: "#generate-tokens",
  title: _jsx(_Fragment, {
    children: "Generate tokens"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#middleware-token-generation-api",
  title: _jsx(_Fragment, {
    children: "Middleware token generation API"
  })
}, {
  depth: 4,
  url: "#generate-token",
  title: _jsx(_Fragment, {
    children: "Generate Token"
  })
}, {
  depth: 4,
  url: "#endpoint",
  title: _jsx(_Fragment, {
    children: "Endpoint"
  })
}, {
  depth: 4,
  url: "#request-body",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 4,
  url: "#response",
  title: _jsx(_Fragment, {
    children: "Response"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["To streamline token authentication and REST API workflows in your infrastructure, Agora's developer community offers the open-source ", _jsx(_components.a, {
        href: "https://github.com/AgoraIO-Community/agora-go-backend-middleware",
        children: "Agora Go Backend Middleware"
      }), ". The backend provides RESTful APIs for tasks such as token generation, cloud recording management, and real-time transcription. This guide shows you how to implement a token server using the community middleware for Video Calling."]
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "The following figure illustrates the architecture of the middleware token generation microservice."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/common/middleware-token-generation.svg",
        alt: "Middleware token generation architecture"
      })
    }), `
`, _jsx(_components.h2, {
      id: "set-up-and-run-the-go-backend-middleware",
      children: "Set up and run the Go backend middleware"
    }), `
`, _jsx(_components.p, {
      children: "Take the following steps to set up and run the middleware project:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Clone the repository"
          })
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
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "git"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " clone"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " https://github.com/AgoraIO-Community/agora-go-backend-middleware.git"
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
          children: _jsx(_components.strong, {
            children: "Install dependencies"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Ensure you have ", _jsx(_components.a, {
        href: "https://go.dev/doc/install",
        children: "Go"
      }), " installed on your system. Navigate to the project directory and install the project dependencies:"]
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "cd"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " agora-go-backend-middleware"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "go"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " mod"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " download"
            })]
          })]
        })
      })
    }), `
`, _jsxs(_components.ol, {
      start: "3",
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Configure environment variables"
          })
        }), `
`, _jsxs(_components.p, {
          children: ["Copy the example ", _jsx(_components.code, {
            children: ".env"
          }), " file."]
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
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "cp"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " .env.example"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " .env"
                })]
              })
            })
          })
        }), `
`, _jsxs(_components.p, {
          children: ["Update the following variables in the ", _jsx(_components.code, {
            children: ".env"
          }), " file:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "APP_ID"
            }), ": Your Agora App ID."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "APP_CERTIFICATE"
            }), ": Your Agora App Certificate."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Run the middleware"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Start the middleware server using the following command:"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "go"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " run"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " cmd/main.go"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The middleware runs on the default port, for example ", _jsx(_components.code, {
        children: "localhost:8080"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "generate-tokens",
      children: "Generate tokens"
    }), `
`, _jsxs(_components.p, {
      children: ["Refer to the following ", _jsx(_components.code, {
        children: "curl"
      }), " example to test the middleware's token generation API endpoint."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "The command-line examples in this guide are for demonstration purposes only. Do not use them directly in a production environment. Implement RESTful API requests through your application server."
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "POST:"
      }), " ", _jsx(_components.code, {
        children: "/token/getNew"
      })]
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
              children: " -X"
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
              children: " http://localhost:8080/token/getNew"
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
              children: "-H "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Content-Type: application/json"'
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
              children: "-d "
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
              children: ' "tokenType": "rtc",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "channel": "testChannel",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "role": "publisher",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "uid": "12345",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "expire": 3600'
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
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Replace ", _jsx(_components.code, {
            children: "localhost:8080"
          }), " with your server's address."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
    }), `
`, _jsx(_components.h3, {
      id: "middleware-token-generation-api",
      children: "Middleware token generation API"
    }), `
`, _jsx(_components.p, {
      children: "This section provides details about the middleware token generation API endpoints."
    }), `
`, _jsx(_components.h4, {
      id: "generate-token",
      children: "Generate Token"
    }), `
`, _jsx(_components.p, {
      children: "Generates a RTC SDK, Signaling, or Chat token based on the provided parameters."
    }), `
`, _jsx(_components.h4, {
      id: "endpoint",
      children: "Endpoint"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "POST /token/getNew"
      })
    }), `
`, _jsx(_components.h4, {
      id: "request-body",
      children: "Request body"
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
              children: ' "tokenType"'
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
              children: '"rtc|rtm|chat"'
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
              children: ' "channel"'
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
              children: ' "uid"'
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
              children: ' "role"'
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
              children: '"publisher|subscriber"'
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
              children: ' "expire"'
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
              children: "0"
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
`, _jsx(_components.h4, {
      id: "response",
      children: "Response"
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
              children: ' "token"'
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
