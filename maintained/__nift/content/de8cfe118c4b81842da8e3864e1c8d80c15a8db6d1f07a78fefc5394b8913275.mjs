import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Build and flash firmware",
  description: "Build the R1 firmware, point it at your server, and flash it onto the device."
};
export let _markdown = `

Follow these steps to set up the R1 device firmware with the example project.

## Download and configure the device firmware [#download-and-configure-the-device-firmware]

1. Clone the \`bk_aidk\` project from GitHub:

   \`\`\`bash
   git clone --recurse-submodules https://github.com/bekencorp/bk_aidk.git -b ai_release/v2.0.1
   cd bk_aidk
   git checkout ai_release/v2.0.1.8
   git submodule update --recursive
   \`\`\`

2. Replace the \`projects\` directory with the example demo directory. Replace \`<bk_aidk_path>\` with your actual path:

   \`\`\`bash
   rm -rf <bk_aidk_path>/projects/
   cp -r ./projects <bk_aidk_path>/projects
   \`\`\`

   <CalloutContainer type="info">
     <CalloutTitle>
       Info
     </CalloutTitle>

     <CalloutDescription>
       To avoid conflicts, delete the original \`projects\` directory before copying.
     </CalloutDescription>
   </CalloutContainer>

3. Update the server URL in \`projects/common_components/network_transfer/agora_rtc/agora_config.h\` to point to your deployed server:

   \`\`\`cpp
   #define CONFIG_AGENT_SERVER_URL "http://192.168.1.100:5001"
   \`\`\`

   Replace \`http://192.168.1.100:5001\` with your server address.

## Build the firmware [#build-the-firmware]

Build the sample project firmware from the \`bk_aidk\` directory:

\`\`\`bash
cd <bk_aidk_path>
make bk7258 PROJECT=beken_genie
\`\`\`

Replace \`<bk_aidk_path>\` with your actual \`bk_aidk\` directory path.

## Flash the firmware [#flash-the-firmware]

After the firmware builds successfully, flash it to your R1 device. For detailed instructions, see the [BK official documentation](https://docs.bekencorp.com/arminodoc/bk_idk/bk7258/en/v2.0.1/get-started/index.html).

## Related pages [#related-pages]

* [Run the demo server](run-the-demo-server)
* [Run the R1 demo](run-the-r1-demo)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Follow these steps to set up the R1 device firmware with the example project."
  }, {
    heading: "download-and-configure-the-device-firmware",
    content: "Clone the `bk_aidk` project from GitHub:"
  }, {
    heading: "download-and-configure-the-device-firmware",
    content: "Replace the `projects` directory with the example demo directory. Replace `<bk_aidk_path>` with your actual path:"
  }, {
    heading: "download-and-configure-the-device-firmware",
    content: "To avoid conflicts, delete the original `projects` directory before copying."
  }, {
    heading: "download-and-configure-the-device-firmware",
    content: "Update the server URL in `projects/common_components/network_transfer/agora_rtc/agora_config.h` to point to your deployed server:"
  }, {
    heading: "download-and-configure-the-device-firmware",
    content: "Replace `http://192.168.1.100:5001` with your server address."
  }, {
    heading: "build-the-firmware",
    content: "Build the sample project firmware from the `bk_aidk` directory:"
  }, {
    heading: "build-the-firmware",
    content: "Replace `<bk_aidk_path>` with your actual `bk_aidk` directory path."
  }, {
    heading: "flash-the-firmware",
    content: "After the firmware builds successfully, flash it to your R1 device. For detailed instructions, see the BK official documentation."
  }, {
    heading: "related-pages",
    content: "Run the demo server"
  }, {
    heading: "related-pages",
    content: "Run the R1 demo"
  }],
  headings: [{
    id: "download-and-configure-the-device-firmware",
    content: "Download and configure the device firmware"
  }, {
    id: "build-the-firmware",
    content: "Build the firmware"
  }, {
    id: "flash-the-firmware",
    content: "Flash the firmware"
  }, {
    id: "related-pages",
    content: "Related pages"
  }]
};
export let toc = [{
  depth: 2,
  url: "#download-and-configure-the-device-firmware",
  title: _jsx(_Fragment, {
    children: "Download and configure the device firmware"
  })
}, {
  depth: 2,
  url: "#build-the-firmware",
  title: _jsx(_Fragment, {
    children: "Build the firmware"
  })
}, {
  depth: 2,
  url: "#flash-the-firmware",
  title: _jsx(_Fragment, {
    children: "Flash the firmware"
  })
}, {
  depth: 2,
  url: "#related-pages",
  title: _jsx(_Fragment, {
    children: "Related pages"
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
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Follow these steps to set up the R1 device firmware with the example project."
    }), `
`, _jsx(_components.h2, {
      id: "download-and-configure-the-device-firmware",
      children: "Download and configure the device firmware"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Clone the ", _jsx(_components.code, {
            children: "bk_aidk"
          }), " project from GitHub:"]
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
                  children: "git"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " clone"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --recurse-submodules"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " https://github.com/bekencorp/bk_aidk.git"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " -b"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " ai_release/v2.0.1"
                })]
              }), `
`, _jsxs(_components.span, {
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
                  children: " bk_aidk"
                })]
              }), `
`, _jsxs(_components.span, {
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
                  children: " checkout"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " ai_release/v2.0.1.8"
                })]
              }), `
`, _jsxs(_components.span, {
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
                  children: " submodule"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " update"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --recursive"
                })]
              })]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Replace the ", _jsx(_components.code, {
            children: "projects"
          }), " directory with the example demo directory. Replace ", _jsx(_components.code, {
            children: "<bk_aidk_path>"
          }), " with your actual path:"]
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
                  children: "rm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " -rf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " <"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "bk_aidk_pat"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "h"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ">"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "/projects/"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "cp"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " -r"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " ./projects"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " <"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "bk_aidk_pat"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "h"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ">"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "/projects"
                })]
              })]
            })
          })
        }), `
`, _jsxs(CalloutContainer, {
          type: "info",
          children: [_jsx(CalloutTitle, {
            children: "Info"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["To avoid conflicts, delete the original ", _jsx(_components.code, {
                children: "projects"
              }), " directory before copying."]
            })
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Update the server URL in ", _jsx(_components.code, {
            children: "projects/common_components/network_transfer/agora_rtc/agora_config.h"
          }), " to point to your deployed server:"]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "#define"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " CONFIG_AGENT_SERVER_URL"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "http://192.168.1.100:5001"'
                })]
              })
            })
          })
        }), `
`, _jsxs(_components.p, {
          children: ["Replace ", _jsx(_components.code, {
            children: "http://192.168.1.100:5001"
          }), " with your server address."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "build-the-firmware",
      children: "Build the firmware"
    }), `
`, _jsxs(_components.p, {
      children: ["Build the sample project firmware from the ", _jsx(_components.code, {
        children: "bk_aidk"
      }), " directory:"]
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "bk_aidk_pat"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "h"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "make"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " bk7258"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " PROJECT=beken_genie"
            })]
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Replace ", _jsx(_components.code, {
        children: "<bk_aidk_path>"
      }), " with your actual ", _jsx(_components.code, {
        children: "bk_aidk"
      }), " directory path."]
    }), `
`, _jsx(_components.h2, {
      id: "flash-the-firmware",
      children: "Flash the firmware"
    }), `
`, _jsxs(_components.p, {
      children: ["After the firmware builds successfully, flash it to your R1 device. For detailed instructions, see the ", _jsx(_components.a, {
        href: "https://docs.bekencorp.com/arminodoc/bk_idk/bk7258/en/v2.0.1/get-started/index.html",
        children: "BK official documentation"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "related-pages",
      children: "Related pages"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "run-the-demo-server",
          children: "Run the demo server"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "run-the-r1-demo",
          children: "Run the R1 demo"
        })
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
