import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Quickstart",
  description: "Obtain the server domain name and streaming key required to push RTMP or SRT streams into Agora channels."
};
export let _markdown = `

To push online media streams as live video source streams into Agora channels using Media Gateway, you need to obtain a server domain name and streaming key. Taking the OBS streaming software as an example, you configure the server's domain name and streaming key in the following way:

![Server settings](https://assets-docs.agora.io/images/media-gateway/obs-server-setting.png)

This page explains how to obtain the server domain name and generate a streaming key.

## Prerequisites [#prerequisites]

In order to follow this procedure you must:

* Have a project that implements an RTC product:
  Interactive Live Streaming, Broadcast Streaming, Video Calling, or Voice Calling
* Generate app ID, app certificate, customer ID, and customer secret
* Pass basic HTTP or HMAC authentication

## Get server domain name [#get-server-domain-name]

You can use Agora's unified domain name or your own one. The server appends the \`/live\` suffix to the domain name.

* The Agora unified domain name is \`rtls-ingress-prod-<region>.agoramdn.com\`. Replace \`<region>\` with the code for your geographical region.

  The supported regions and their codes are:

  * \`na\`: North America
  * \`eu\`: Europe
  * \`ap\`: Asia, except Mainland China
  * \`cn\`: Mainland China

* To use your own domain name, [contact technical support](mailto\\:support@agora.io) for configuration.

## Get streaming key [#get-streaming-key]

The stream key generation method depends on whether you use the Agora domain name or a custom domain name.

* If you use Agora's domain name, create a stream key using the Media Gateway RESTful API.
* If you use your own domain name, you can either call the Media Gateway RESTful API or generate the key locally.

### Generate streaming key with RESTful API [#generate-streaming-key-with-restful-api]

Create and publish the streaming key by calling the following endpoint:

\`POST https://api.agora.io/:region/v1/projects/:appId/rtls/ingress/streamkeys\`

For authentication details, see [RESTful authentication](/en/api-reference/api-ref/rtmp-gateway/authentication).

<CalloutContainer type="info">
  <CalloutDescription>
    To explore the RESTful API parameters, obtain sample code in various client languages, or test Media Gateway requests, refer to the [Postman API reference](https://documenter.getpostman.com/view/6319646/SVSLr9AM#6aed9690-285e-45f0-a329-c995adbd0956).
  </CalloutDescription>
</CalloutContainer>

### Generate streaming key locally [#generate-streaming-key-locally]

<CalloutContainer type="info">
  <CalloutDescription>
    Before starting, make sure you have configured your domain name by contacting [technical support](mailto\\:support@agora.io).
  </CalloutDescription>
</CalloutContainer>

To generate a stream key locally, you use the following information:

* The app ID of the Agora project from [Agora Console](https://console.agora.io/)
* The app certificate corresponding to your app ID
* \`channelName\`: The channel name
* \`uid\`: The user ID of the host in the channel
* \`expiresAfter\`: The effective duration of the stream key, in seconds
* \`template\` (optional): The associated flow configuration template

The following Node.js sample code demonstrates how to generate a stream key locally.

<CalloutContainer type="info">
  <CalloutDescription>
    The following example code relies on the \`msgpack-lite\` module. If you haven't installed it yet, execute \`npm install msgpack-lite\` and run \`node app.js\` in the project root directory.
  </CalloutDescription>
</CalloutContainer>

\`\`\`javascript
const crypto = require('crypto');
const msgpack = require('msgpack-lite');

appcert = ""; // Your app certificate from Agora
channel = ""; // The RTC SDK channel name
uid = ""; // The UID of the host in the channel
expiresAfter = 86400; // Valid duration of stream key (seconds)

const expiresAt = Math.floor(Date.now() / 1000) + expiresAfter;

const rtcInfo = {
  C: channel,
  U: uid,
  E: expiresAt,
  // If you are not sure whether to use the flow configuration template, keep the following line commented
  // T: templateId,
};

const data = msgpack.encode(rtcInfo);
const iv = crypto.randomBytes(16);
const key = Buffer.from(appcert, 'hex');
const encrypter = crypto.createCipheriv('aes-128-ctr', key, iv);
const encrypted = Buffer.concat([iv, encrypter.update(data), encrypter.final()]);
const streamkey = encrypted
  .toString('base64')
  .replace(/\\\\+/g, '-')
  .replace(/\\\\//g, '_')
  .replace(/\\\\=+$/, '');

console.log(\`streamkey is \${streamkey}\`);
\`\`\`

## Recommended config for web client communication [#recommended-config-for-web-client-communication]

In case of intercommunication with the web client, transcoding is not enabled by default. To ensure the best experience for web viewers, make sure that the streaming software uses the following encoding parameters:

* Key frame interval (GOP): \`2s\`
* Video profile: \`baseline\`
* x264 options: \`threads=6\`
* Frame rate (FPS): At 1080 resolution, the frame rate must not exceed 30; for resolutions below that, the frame rate must not exceed 60. If not necessary, 30 is sufficient.

Taking OBS as an example, configure it as shown below:

1. On the **Settings > Output > Live** page, configure the video profile, keyframe interval, and x264 options.

   ![Encoder settings](https://assets-docs.agora.io/images/media-gateway/obs-encoder-settings.png)

2. On the **Settings > Video** page, configure common frame rates.

   ![FPS settings](https://assets-docs.agora.io/images/media-gateway/obs-fps-setting.png)

## Next steps [#next-steps]

After completing the configuration, you can push RTMP or SRT streams to Agora channels, and these streams will be published to the corresponding channels by the host.

By default, after Media Gateway receives the pushed stream, it will not transcode it and will directly publish it to the Agora channel. If you want to transcode the streams, use stream configuration templates to implement related functions.

### REST API middleware [#rest-api-middleware]

[Agora Go Backend Middleware](https://github.com/AgoraIO-Community/agora-go-backend-middleware) is an open-source microservice that exposes a RESTful API designed to simplify Media Gateway interactions with Agora. Written in Golang and powered by the Gin framework, this community project serves as middleware to bridge front-end applications using Agora's RTC SDK or Voice SDK with Agora's RESTful APIs.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To push online media streams as live video source streams into Agora channels using Media Gateway, you need to obtain a server domain name and streaming key. Taking the OBS streaming software as an example, you configure the server's domain name and streaming key in the following way:"
  }, {
    heading: undefined,
    content: "This page explains how to obtain the server domain name and generate a streaming key."
  }, {
    heading: "prerequisites",
    content: "In order to follow this procedure you must:"
  }, {
    heading: "prerequisites",
    content: `Have a project that implements an RTC product:
Interactive Live Streaming, Broadcast Streaming, Video Calling, or Voice Calling`
  }, {
    heading: "prerequisites",
    content: "Generate app ID, app certificate, customer ID, and customer secret"
  }, {
    heading: "prerequisites",
    content: "Pass basic HTTP or HMAC authentication"
  }, {
    heading: "get-server-domain-name",
    content: "You can use Agora's unified domain name or your own one. The server appends the `/live` suffix to the domain name."
  }, {
    heading: "get-server-domain-name",
    content: "The Agora unified domain name is `rtls-ingress-prod-<region>.agoramdn.com`. Replace `<region>` with the code for your geographical region."
  }, {
    heading: "get-server-domain-name",
    content: "The supported regions and their codes are:"
  }, {
    heading: "get-server-domain-name",
    content: "`na`: North America"
  }, {
    heading: "get-server-domain-name",
    content: "`eu`: Europe"
  }, {
    heading: "get-server-domain-name",
    content: "`ap`: Asia, except Mainland China"
  }, {
    heading: "get-server-domain-name",
    content: "`cn`: Mainland China"
  }, {
    heading: "get-server-domain-name",
    content: "To use your own domain name, contact technical support for configuration."
  }, {
    heading: "get-streaming-key",
    content: "The stream key generation method depends on whether you use the Agora domain name or a custom domain name."
  }, {
    heading: "get-streaming-key",
    content: "If you use Agora's domain name, create a stream key using the Media Gateway RESTful API."
  }, {
    heading: "get-streaming-key",
    content: "If you use your own domain name, you can either call the Media Gateway RESTful API or generate the key locally."
  }, {
    heading: "generate-streaming-key-with-restful-api",
    content: "Create and publish the streaming key by calling the following endpoint:"
  }, {
    heading: "generate-streaming-key-with-restful-api",
    content: "`POST https://api.agora.io/:region/v1/projects/:appId/rtls/ingress/streamkeys`"
  }, {
    heading: "generate-streaming-key-with-restful-api",
    content: "For authentication details, see RESTful authentication."
  }, {
    heading: "generate-streaming-key-with-restful-api",
    content: "To explore the RESTful API parameters, obtain sample code in various client languages, or test Media Gateway requests, refer to the Postman API reference."
  }, {
    heading: "generate-streaming-key-locally",
    content: "Before starting, make sure you have configured your domain name by contacting technical support."
  }, {
    heading: "generate-streaming-key-locally",
    content: "To generate a stream key locally, you use the following information:"
  }, {
    heading: "generate-streaming-key-locally",
    content: "The app ID of the Agora project from Agora Console"
  }, {
    heading: "generate-streaming-key-locally",
    content: "The app certificate corresponding to your app ID"
  }, {
    heading: "generate-streaming-key-locally",
    content: "`channelName`: The channel name"
  }, {
    heading: "generate-streaming-key-locally",
    content: "`uid`: The user ID of the host in the channel"
  }, {
    heading: "generate-streaming-key-locally",
    content: "`expiresAfter`: The effective duration of the stream key, in seconds"
  }, {
    heading: "generate-streaming-key-locally",
    content: "`template` (optional): The associated flow configuration template"
  }, {
    heading: "generate-streaming-key-locally",
    content: "The following Node.js sample code demonstrates how to generate a stream key locally."
  }, {
    heading: "generate-streaming-key-locally",
    content: "The following example code relies on the `msgpack-lite` module. If you haven't installed it yet, execute `npm install msgpack-lite` and run `node app.js` in the project root directory."
  }, {
    heading: "recommended-config-for-web-client-communication",
    content: "In case of intercommunication with the web client, transcoding is not enabled by default. To ensure the best experience for web viewers, make sure that the streaming software uses the following encoding parameters:"
  }, {
    heading: "recommended-config-for-web-client-communication",
    content: "Key frame interval (GOP): `2s`"
  }, {
    heading: "recommended-config-for-web-client-communication",
    content: "Video profile: `baseline`"
  }, {
    heading: "recommended-config-for-web-client-communication",
    content: "x264 options: `threads=6`"
  }, {
    heading: "recommended-config-for-web-client-communication",
    content: "Frame rate (FPS): At 1080 resolution, the frame rate must not exceed 30; for resolutions below that, the frame rate must not exceed 60. If not necessary, 30 is sufficient."
  }, {
    heading: "recommended-config-for-web-client-communication",
    content: "Taking OBS as an example, configure it as shown below:"
  }, {
    heading: "recommended-config-for-web-client-communication",
    content: "On the **Settings > Output > Live** page, configure the video profile, keyframe interval, and x264 options."
  }, {
    heading: "recommended-config-for-web-client-communication",
    content: "On the **Settings > Video** page, configure common frame rates."
  }, {
    heading: "next-steps",
    content: "After completing the configuration, you can push RTMP or SRT streams to Agora channels, and these streams will be published to the corresponding channels by the host."
  }, {
    heading: "next-steps",
    content: "By default, after Media Gateway receives the pushed stream, it will not transcode it and will directly publish it to the Agora channel. If you want to transcode the streams, use stream configuration templates to implement related functions."
  }, {
    heading: "rest-api-middleware",
    content: "Agora Go Backend Middleware is an open-source microservice that exposes a RESTful API designed to simplify Media Gateway interactions with Agora. Written in Golang and powered by the Gin framework, this community project serves as middleware to bridge front-end applications using Agora's RTC SDK or Voice SDK with Agora's RESTful APIs."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "get-server-domain-name",
    content: "Get server domain name"
  }, {
    id: "get-streaming-key",
    content: "Get streaming key"
  }, {
    id: "generate-streaming-key-with-restful-api",
    content: "Generate streaming key with RESTful API"
  }, {
    id: "generate-streaming-key-locally",
    content: "Generate streaming key locally"
  }, {
    id: "recommended-config-for-web-client-communication",
    content: "Recommended config for web client communication"
  }, {
    id: "next-steps",
    content: "Next steps"
  }, {
    id: "rest-api-middleware",
    content: "REST API middleware"
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
  url: "#get-server-domain-name",
  title: _jsx(_Fragment, {
    children: "Get server domain name"
  })
}, {
  depth: 2,
  url: "#get-streaming-key",
  title: _jsx(_Fragment, {
    children: "Get streaming key"
  })
}, {
  depth: 3,
  url: "#generate-streaming-key-with-restful-api",
  title: _jsx(_Fragment, {
    children: "Generate streaming key with RESTful API"
  })
}, {
  depth: 3,
  url: "#generate-streaming-key-locally",
  title: _jsx(_Fragment, {
    children: "Generate streaming key locally"
  })
}, {
  depth: 2,
  url: "#recommended-config-for-web-client-communication",
  title: _jsx(_Fragment, {
    children: "Recommended config for web client communication"
  })
}, {
  depth: 2,
  url: "#next-steps",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}, {
  depth: 3,
  url: "#rest-api-middleware",
  title: _jsx(_Fragment, {
    children: "REST API middleware"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
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
    children: [_jsx(_components.p, {
      children: "To push online media streams as live video source streams into Agora channels using Media Gateway, you need to obtain a server domain name and streaming key. Taking the OBS streaming software as an example, you configure the server's domain name and streaming key in the following way:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/media-gateway/obs-server-setting.png",
        alt: "Server settings"
      })
    }), `
`, _jsx(_components.p, {
      children: "This page explains how to obtain the server domain name and generate a streaming key."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "In order to follow this procedure you must:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: `Have a project that implements an RTC product:
Interactive Live Streaming, Broadcast Streaming, Video Calling, or Voice Calling`
      }), `
`, _jsx(_components.li, {
        children: "Generate app ID, app certificate, customer ID, and customer secret"
      }), `
`, _jsx(_components.li, {
        children: "Pass basic HTTP or HMAC authentication"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "get-server-domain-name",
      children: "Get server domain name"
    }), `
`, _jsxs(_components.p, {
      children: ["You can use Agora's unified domain name or your own one. The server appends the ", _jsx(_components.code, {
        children: "/live"
      }), " suffix to the domain name."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["The Agora unified domain name is ", _jsx(_components.code, {
            children: "rtls-ingress-prod-<region>.agoramdn.com"
          }), ". Replace ", _jsx(_components.code, {
            children: "<region>"
          }), " with the code for your geographical region."]
        }), `
`, _jsx(_components.p, {
          children: "The supported regions and their codes are:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "na"
            }), ": North America"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "eu"
            }), ": Europe"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "ap"
            }), ": Asia, except Mainland China"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "cn"
            }), ": Mainland China"]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To use your own domain name, ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "contact technical support"
          }), " for configuration."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "get-streaming-key",
      children: "Get streaming key"
    }), `
`, _jsx(_components.p, {
      children: "The stream key generation method depends on whether you use the Agora domain name or a custom domain name."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If you use Agora's domain name, create a stream key using the Media Gateway RESTful API."
      }), `
`, _jsx(_components.li, {
        children: "If you use your own domain name, you can either call the Media Gateway RESTful API or generate the key locally."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "generate-streaming-key-with-restful-api",
      children: "Generate streaming key with RESTful API"
    }), `
`, _jsx(_components.p, {
      children: "Create and publish the streaming key by calling the following endpoint:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "POST https://api.agora.io/:region/v1/projects/:appId/rtls/ingress/streamkeys"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["For authentication details, see ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/rtmp-gateway/authentication",
        children: "RESTful authentication"
      }), "."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["To explore the RESTful API parameters, obtain sample code in various client languages, or test Media Gateway requests, refer to the ", _jsx(_components.a, {
            href: "https://documenter.getpostman.com/view/6319646/SVSLr9AM#6aed9690-285e-45f0-a329-c995adbd0956",
            children: "Postman API reference"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "generate-streaming-key-locally",
      children: "Generate streaming key locally"
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Before starting, make sure you have configured your domain name by contacting ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "technical support"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "To generate a stream key locally, you use the following information:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The app ID of the Agora project from ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        })]
      }), `
`, _jsx(_components.li, {
        children: "The app certificate corresponding to your app ID"
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "channelName"
        }), ": The channel name"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "uid"
        }), ": The user ID of the host in the channel"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "expiresAfter"
        }), ": The effective duration of the stream key, in seconds"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "template"
        }), " (optional): The associated flow configuration template"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The following Node.js sample code demonstrates how to generate a stream key locally."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["The following example code relies on the ", _jsx(_components.code, {
            children: "msgpack-lite"
          }), " module. If you haven't installed it yet, execute ", _jsx(_components.code, {
            children: "npm install msgpack-lite"
          }), " and run ", _jsx(_components.code, {
            children: "node app.js"
          }), " in the project root directory."]
        })
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " crypto"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " require"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'crypto'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " msgpack"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " require"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'msgpack-lite'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "appcert "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' ""'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Your app certificate from Agora"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "channel "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' ""'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The RTC SDK channel name"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "uid "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' ""'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The UID of the host in the channel"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "expiresAfter "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 86400"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Valid duration of stream key (seconds)"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " expiresAt"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Math."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "floor"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Date."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "now"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 1000"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " expiresAfter;"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " rtcInfo"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  C: channel,"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  U: uid,"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  E: expiresAt,"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // If you are not sure whether to use the flow configuration template, keep the following line commented"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // T: templateId,"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "};"
            })
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " msgpack."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "encode"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(rtcInfo);"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " iv"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " crypto."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "randomBytes"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "16"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " key"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Buffer."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(appcert, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'hex'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " encrypter"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " crypto."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "createCipheriv"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'aes-128-ctr'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", key, iv);"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " encrypted"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Buffer."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "concat"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "([iv, encrypter."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "update"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(data), encrypter."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "final"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "()]);"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " streamkey"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " encrypted"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  ."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "toString"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'base64'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  ."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "replace"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-light-font-weight": "bold",
                "--shiki-dark": "#85E89D",
                "--shiki-dark-font-weight": "bold"
              },
              children: "\\\\"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "g"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'-'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  ."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "replace"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "\\\\"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "//g, '_')"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  ."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "replace"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-light-font-weight": "bold",
                "--shiki-dark": "#85E89D",
                "--shiki-dark-font-weight": "bold"
              },
              children: "\\\\"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#DBEDFF"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "+$"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "''"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "console."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "`streamkey is ${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "streamkey"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "recommended-config-for-web-client-communication",
      children: "Recommended config for web client communication"
    }), `
`, _jsx(_components.p, {
      children: "In case of intercommunication with the web client, transcoding is not enabled by default. To ensure the best experience for web viewers, make sure that the streaming software uses the following encoding parameters:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Key frame interval (GOP): ", _jsx(_components.code, {
          children: "2s"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Video profile: ", _jsx(_components.code, {
          children: "baseline"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["x264 options: ", _jsx(_components.code, {
          children: "threads=6"
        })]
      }), `
`, _jsx(_components.li, {
        children: "Frame rate (FPS): At 1080 resolution, the frame rate must not exceed 30; for resolutions below that, the frame rate must not exceed 60. If not necessary, 30 is sufficient."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Taking OBS as an example, configure it as shown below:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Settings > Output > Live"
          }), " page, configure the video profile, keyframe interval, and x264 options."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/media-gateway/obs-encoder-settings.png",
            alt: "Encoder settings"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Settings > Video"
          }), " page, configure common frame rates."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/media-gateway/obs-fps-setting.png",
            alt: "FPS settings"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "next-steps",
      children: "Next steps"
    }), `
`, _jsx(_components.p, {
      children: "After completing the configuration, you can push RTMP or SRT streams to Agora channels, and these streams will be published to the corresponding channels by the host."
    }), `
`, _jsx(_components.p, {
      children: "By default, after Media Gateway receives the pushed stream, it will not transcode it and will directly publish it to the Agora channel. If you want to transcode the streams, use stream configuration templates to implement related functions."
    }), `
`, _jsx(_components.h3, {
      id: "rest-api-middleware",
      children: "REST API middleware"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "https://github.com/AgoraIO-Community/agora-go-backend-middleware",
        children: "Agora Go Backend Middleware"
      }), " is an open-source microservice that exposes a RESTful API designed to simplify Media Gateway interactions with Agora. Written in Golang and powered by the Gin framework, this community project serves as middleware to bridge front-end applications using Agora's RTC SDK or Voice SDK with Agora's RESTful APIs."]
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
