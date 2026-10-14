import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "SRT streaming",
  description: "Use the SRT protocol to push streams into Media Gateway."
};
export let _markdown = `

This guide explains how to push streams to Media Gateway using the SRT protocol.

## Understand the tech [#understand-the-tech]

SRT (Secure Reliable Transport) is an open-source protocol developed by Haivision and promoted by the SRT Alliance. It provides secure, high-quality, low-latency video streaming. Compared to RTMP, SRT performs better for live streaming over unstable network connections.

When using the SRT protocol to push streams to Media Gateway, the following codecs are supported:

* **Video**: H.264, H.265
* **Audio**: AAC, OPUS

## Configure with OBS [#configure-with-obs]

Set up SRT streaming in OBS Studio by configuring the server and stream key settings.

1. In the **Server** field, enter your streaming domain name in the following format:

   \`\`\`text
   srt://{streaming_domain_name}:6001
   \`\`\`

![Server settings](https://assets-docs.agora.io/images/media-gateway/srt-server-setting.png)

You can use the Agora unified domain name or bind your own domain name.

* To use the unified domain name, use \`srtlive-rtcpush-prod-{region}.agoramdn.com\`. Replace \`{region}\` with your actual region. Supported regions are:
  * \`na\`: North America
  * \`eu\`: Europe
  * \`ap\`: Asia, except Mainland China
  * \`cn\`: Mainland China
* To use your own domain name, contact Agora [technical support](mailto\\:support@agora.io) for configuration before use.

2. In the **Stream Key** field, enter the streaming key. To obtain a key, see [Get streaming key](../quickstart#get-streaming-key).

   <CalloutContainer type="info">
     <CalloutDescription>
       When using a custom domain name, you must add domain parameters to your stream key using the format:

       \`{streaming_code}?h={streaming_domain_name}\`

       This is required because the SRT protocol does not transmit domain name information to the server by default.
     </CalloutDescription>
   </CalloutContainer>

## Configure with FFmpeg [#configure-with-ffmpeg]

Use [\`ffmpeg\`](https://ffmpeg.org/) to push SRT streams directly from the command line.

* Use the Agora unified domain name:

\`\`\`text
ffmpeg -re -i input.mp4 -c copy -f mpegts 'srt://srtlive-rtcpush-prod-{region}.agoramdn.com:6001?streamid={streamkey}'
\`\`\`

* Use a custom domain name:

\`\`\`text
ffmpeg -re -i input.mp4 -c copy -f mpegts 'srt://example.com:6001?streamid=#!::r={streamkey},h=example.com'
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This guide explains how to push streams to Media Gateway using the SRT protocol."
  }, {
    heading: "understand-the-tech",
    content: "SRT (Secure Reliable Transport) is an open-source protocol developed by Haivision and promoted by the SRT Alliance. It provides secure, high-quality, low-latency video streaming. Compared to RTMP, SRT performs better for live streaming over unstable network connections."
  }, {
    heading: "understand-the-tech",
    content: "When using the SRT protocol to push streams to Media Gateway, the following codecs are supported:"
  }, {
    heading: "understand-the-tech",
    content: "**Video**: H.264, H.265"
  }, {
    heading: "understand-the-tech",
    content: "**Audio**: AAC, OPUS"
  }, {
    heading: "configure-with-obs",
    content: "Set up SRT streaming in OBS Studio by configuring the server and stream key settings."
  }, {
    heading: "configure-with-obs",
    content: "In the **Server** field, enter your streaming domain name in the following format:"
  }, {
    heading: "configure-with-obs",
    content: "You can use the Agora unified domain name or bind your own domain name."
  }, {
    heading: "configure-with-obs",
    content: "To use the unified domain name, use `srtlive-rtcpush-prod-{region}.agoramdn.com`. Replace `{region}` with your actual region. Supported regions are:"
  }, {
    heading: "configure-with-obs",
    content: "`na`: North America"
  }, {
    heading: "configure-with-obs",
    content: "`eu`: Europe"
  }, {
    heading: "configure-with-obs",
    content: "`ap`: Asia, except Mainland China"
  }, {
    heading: "configure-with-obs",
    content: "`cn`: Mainland China"
  }, {
    heading: "configure-with-obs",
    content: "To use your own domain name, contact Agora technical support for configuration before use."
  }, {
    heading: "configure-with-obs",
    content: "In the **Stream Key** field, enter the streaming key. To obtain a key, see Get streaming key."
  }, {
    heading: "configure-with-obs",
    content: "When using a custom domain name, you must add domain parameters to your stream key using the format:"
  }, {
    heading: "configure-with-obs",
    content: "`{streaming_code}?h={streaming_domain_name}`"
  }, {
    heading: "configure-with-obs",
    content: "This is required because the SRT protocol does not transmit domain name information to the server by default."
  }, {
    heading: "configure-with-ffmpeg",
    content: "Use `ffmpeg` to push SRT streams directly from the command line."
  }, {
    heading: "configure-with-ffmpeg",
    content: "Use the Agora unified domain name:"
  }, {
    heading: "configure-with-ffmpeg",
    content: "Use a custom domain name:"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "configure-with-obs",
    content: "Configure with OBS"
  }, {
    id: "configure-with-ffmpeg",
    content: "Configure with FFmpeg"
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
  url: "#configure-with-obs",
  title: _jsx(_Fragment, {
    children: "Configure with OBS"
  })
}, {
  depth: 2,
  url: "#configure-with-ffmpeg",
  title: _jsx(_Fragment, {
    children: "Configure with FFmpeg"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
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
      children: "This guide explains how to push streams to Media Gateway using the SRT protocol."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "SRT (Secure Reliable Transport) is an open-source protocol developed by Haivision and promoted by the SRT Alliance. It provides secure, high-quality, low-latency video streaming. Compared to RTMP, SRT performs better for live streaming over unstable network connections."
    }), `
`, _jsx(_components.p, {
      children: "When using the SRT protocol to push streams to Media Gateway, the following codecs are supported:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Video"
        }), ": H.264, H.265"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Audio"
        }), ": AAC, OPUS"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "configure-with-obs",
      children: "Configure with OBS"
    }), `
`, _jsx(_components.p, {
      children: "Set up SRT streaming in OBS Studio by configuring the server and stream key settings."
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the ", _jsx(_components.strong, {
            children: "Server"
          }), " field, enter your streaming domain name in the following format:"]
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "srt://"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "{streaming_domain_name}"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: ":6001"
                })]
              })
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/media-gateway/srt-server-setting.png",
        alt: "Server settings"
      })
    }), `
`, _jsx(_components.p, {
      children: "You can use the Agora unified domain name or bind your own domain name."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["To use the unified domain name, use ", _jsx(_components.code, {
          children: "srtlive-rtcpush-prod-{region}.agoramdn.com"
        }), ". Replace ", _jsx(_components.code, {
          children: "{region}"
        }), " with your actual region. Supported regions are:", `
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
        children: ["To use your own domain name, contact Agora ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "technical support"
        }), " for configuration before use."]
      }), `
`]
    }), `
`, _jsxs(_components.ol, {
      start: "2",
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the ", _jsx(_components.strong, {
            children: "Stream Key"
          }), " field, enter the streaming key. To obtain a key, see ", _jsx(_components.a, {
            href: "../quickstart#get-streaming-key",
            children: "Get streaming key"
          }), "."]
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsxs(CalloutDescription, {
            children: [_jsx(_components.p, {
              children: "When using a custom domain name, you must add domain parameters to your stream key using the format:"
            }), _jsx(_components.p, {
              children: _jsx(_components.code, {
                children: "{streaming_code}?h={streaming_domain_name}"
              })
            }), _jsx(_components.p, {
              children: "This is required because the SRT protocol does not transmit domain name information to the server by default."
            })]
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "configure-with-ffmpeg",
      children: "Configure with FFmpeg"
    }), `
`, _jsxs(_components.p, {
      children: ["Use ", _jsx(_components.a, {
        href: "https://ffmpeg.org/",
        children: _jsx(_components.code, {
          children: "ffmpeg"
        })
      }), " to push SRT streams directly from the command line."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Use the Agora unified domain name:"
      }), `
`]
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ffmpeg"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -re"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -i"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " input.mp4"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -c"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " copy"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -f"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " mpegts"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'srt://srtlive-rtcpush-prod-{region}.agoramdn.com:6001?streamid={streamkey}'"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Use a custom domain name:"
      }), `
`]
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ffmpeg"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -re"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -i"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " input.mp4"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -c"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " copy"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -f"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " mpegts"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'srt://example.com:6001?streamid=#!::r={streamkey},h=example.com'"
            })]
          })
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
