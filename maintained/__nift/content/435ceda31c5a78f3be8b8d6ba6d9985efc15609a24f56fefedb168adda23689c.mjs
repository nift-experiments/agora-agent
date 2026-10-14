import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Run the R1 demo",
  description: "Bring up the official R1 development baseline and verify the end-to-end workflow."
};
export let _markdown = `

Use this guide when you want to validate the official R1 development baseline before customizing the device, server, or firmware stack.

## What you will set up [#what-you-will-set-up]

This baseline bring-up flow covers:

* The sample repository and development assets
* The demo server used by the device workflow
* Device network access and basic operating flow
* Firmware build, flash, and end-to-end verification

## Recommended order [#recommended-order]

1. [Run the demo server](run-the-demo-server)
2. [Configure device network](configure-device-network)
3. [Build and flash firmware](build-and-flash-firmware)
4. Verify the device interaction using the checks below

## Prerequisites [#prerequisites]

Before you begin, ensure you have the following:

* **Python 3.7 or later** for running the server-side components
* **R1 development board**: Contact [Agora Sales](mailto\\:sales@agora.io) to purchase the R1 development board jointly developed by Agora and RiseLink. Refer to the [BK official documentation](https://docs.bekencorp.com/arminodoc/bk_idk/bk7258/en/v2.0.1/get-started/index.html) to set up your development environment.
* **Android device** for installing and testing the mobile app
* **Third-party AI services**: API keys and service endpoints for your chosen Large Language Model (LLM) and Text-to-Speech (TTS) providers
* **Agora project credentials**: An Agora project. Conversational AI Engine is enabled by default for new projects.

For project setup instructions, see [Enable services](../reference/enable-services).

## Get the sample project [#get-the-sample-project]

1. Clone the \`Conversational-AI-IOT-Sample\` repository to your local machine:

   \`\`\`bash
   git clone https://github.com/AgoraIO-Community/Conversational-AI-IOT-Sample.git
   \`\`\`

2. Switch to the \`bk7258/v2.0.1\` branch:

   \`\`\`bash
   cd Conversational-AI-IOT-Sample
   git checkout bk7258/v2.0.1
   \`\`\`

## Verify the device demo [#verify-the-device-demo]

After you have configured the server, device network, and firmware:

1. Connect the R1 development board to your computer using a Type-C cable connected to the \`USB TO UART\` interface.
2. If this is the first-time setup, press and hold the **S1** button for 5 seconds to enter network configuration mode, then finish Wi-Fi setup through the Android app.
3. Short press the **Middle button** to start a conversation with the AI agent.
4. Short press the **Middle button** again to end the conversation.
5. If the device enters deep sleep mode after 3 minutes of inactivity, press the **RST** button to restart.

   <CalloutContainer type="info">
     <CalloutTitle>
       Info
     </CalloutTitle>

     <CalloutDescription>
       * The \`USB TO UART\` interface also charges the battery. The device automatically activates when you connect a battery or data cable.
       * If the programming tool fails to restart the development board automatically, press the **RST** button to manually restart and restore programming capability.
     </CalloutDescription>
   </CalloutContainer>

## Related pages [#related-pages]

* [Run the demo server](run-the-demo-server)
* [Configure device network](configure-device-network)
* [Build and flash firmware](build-and-flash-firmware)
* [Demo server APIs](demo-server-apis)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Use this guide when you want to validate the official R1 development baseline before customizing the device, server, or firmware stack."
  }, {
    heading: "what-you-will-set-up",
    content: "This baseline bring-up flow covers:"
  }, {
    heading: "what-you-will-set-up",
    content: "The sample repository and development assets"
  }, {
    heading: "what-you-will-set-up",
    content: "The demo server used by the device workflow"
  }, {
    heading: "what-you-will-set-up",
    content: "Device network access and basic operating flow"
  }, {
    heading: "what-you-will-set-up",
    content: "Firmware build, flash, and end-to-end verification"
  }, {
    heading: "recommended-order",
    content: "Run the demo server"
  }, {
    heading: "recommended-order",
    content: "Configure device network"
  }, {
    heading: "recommended-order",
    content: "Build and flash firmware"
  }, {
    heading: "recommended-order",
    content: "Verify the device interaction using the checks below"
  }, {
    heading: "prerequisites",
    content: "Before you begin, ensure you have the following:"
  }, {
    heading: "prerequisites",
    content: "**Python 3.7 or later** for running the server-side components"
  }, {
    heading: "prerequisites",
    content: "**R1 development board**: Contact Agora Sales to purchase the R1 development board jointly developed by Agora and RiseLink. Refer to the BK official documentation to set up your development environment."
  }, {
    heading: "prerequisites",
    content: "**Android device** for installing and testing the mobile app"
  }, {
    heading: "prerequisites",
    content: "**Third-party AI services**: API keys and service endpoints for your chosen Large Language Model (LLM) and Text-to-Speech (TTS) providers"
  }, {
    heading: "prerequisites",
    content: "**Agora project credentials**: An Agora project. Conversational AI Engine is enabled by default for new projects."
  }, {
    heading: "prerequisites",
    content: "For project setup instructions, see Enable services."
  }, {
    heading: "get-the-sample-project",
    content: "Clone the `Conversational-AI-IOT-Sample` repository to your local machine:"
  }, {
    heading: "get-the-sample-project",
    content: "Switch to the `bk7258/v2.0.1` branch:"
  }, {
    heading: "verify-the-device-demo",
    content: "After you have configured the server, device network, and firmware:"
  }, {
    heading: "verify-the-device-demo",
    content: "Connect the R1 development board to your computer using a Type-C cable connected to the `USB TO UART` interface."
  }, {
    heading: "verify-the-device-demo",
    content: "If this is the first-time setup, press and hold the **S1** button for 5 seconds to enter network configuration mode, then finish Wi-Fi setup through the Android app."
  }, {
    heading: "verify-the-device-demo",
    content: "Short press the **Middle button** to start a conversation with the AI agent."
  }, {
    heading: "verify-the-device-demo",
    content: "Short press the **Middle button** again to end the conversation."
  }, {
    heading: "verify-the-device-demo",
    content: "If the device enters deep sleep mode after 3 minutes of inactivity, press the **RST** button to restart."
  }, {
    heading: "verify-the-device-demo",
    content: "The `USB TO UART` interface also charges the battery. The device automatically activates when you connect a battery or data cable."
  }, {
    heading: "verify-the-device-demo",
    content: "If the programming tool fails to restart the development board automatically, press the **RST** button to manually restart and restore programming capability."
  }, {
    heading: "related-pages",
    content: "Run the demo server"
  }, {
    heading: "related-pages",
    content: "Configure device network"
  }, {
    heading: "related-pages",
    content: "Build and flash firmware"
  }, {
    heading: "related-pages",
    content: "Demo server APIs"
  }],
  headings: [{
    id: "what-you-will-set-up",
    content: "What you will set up"
  }, {
    id: "recommended-order",
    content: "Recommended order"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "get-the-sample-project",
    content: "Get the sample project"
  }, {
    id: "verify-the-device-demo",
    content: "Verify the device demo"
  }, {
    id: "related-pages",
    content: "Related pages"
  }]
};
export let toc = [{
  depth: 2,
  url: "#what-you-will-set-up",
  title: _jsx(_Fragment, {
    children: "What you will set up"
  })
}, {
  depth: 2,
  url: "#recommended-order",
  title: _jsx(_Fragment, {
    children: "Recommended order"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#get-the-sample-project",
  title: _jsx(_Fragment, {
    children: "Get the sample project"
  })
}, {
  depth: 2,
  url: "#verify-the-device-demo",
  title: _jsx(_Fragment, {
    children: "Verify the device demo"
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
    strong: "strong",
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
      children: "Use this guide when you want to validate the official R1 development baseline before customizing the device, server, or firmware stack."
    }), `
`, _jsx(_components.h2, {
      id: "what-you-will-set-up",
      children: "What you will set up"
    }), `
`, _jsx(_components.p, {
      children: "This baseline bring-up flow covers:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The sample repository and development assets"
      }), `
`, _jsx(_components.li, {
        children: "The demo server used by the device workflow"
      }), `
`, _jsx(_components.li, {
        children: "Device network access and basic operating flow"
      }), `
`, _jsx(_components.li, {
        children: "Firmware build, flash, and end-to-end verification"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "recommended-order",
      children: "Recommended order"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "run-the-demo-server",
          children: "Run the demo server"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "configure-device-network",
          children: "Configure device network"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "build-and-flash-firmware",
          children: "Build and flash firmware"
        })
      }), `
`, _jsx(_components.li, {
        children: "Verify the device interaction using the checks below"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Before you begin, ensure you have the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Python 3.7 or later"
        }), " for running the server-side components"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "R1 development board"
        }), ": Contact ", _jsx(_components.a, {
          href: "mailto:sales@agora.io",
          children: "Agora Sales"
        }), " to purchase the R1 development board jointly developed by Agora and RiseLink. Refer to the ", _jsx(_components.a, {
          href: "https://docs.bekencorp.com/arminodoc/bk_idk/bk7258/en/v2.0.1/get-started/index.html",
          children: "BK official documentation"
        }), " to set up your development environment."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Android device"
        }), " for installing and testing the mobile app"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Third-party AI services"
        }), ": API keys and service endpoints for your chosen Large Language Model (LLM) and Text-to-Speech (TTS) providers"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Agora project credentials"
        }), ": An Agora project. Conversational AI Engine is enabled by default for new projects."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For project setup instructions, see ", _jsx(_components.a, {
        href: "../reference/enable-services",
        children: "Enable services"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "get-the-sample-project",
      children: "Get the sample project"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Clone the ", _jsx(_components.code, {
            children: "Conversational-AI-IOT-Sample"
          }), " repository to your local machine:"]
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
                  children: " https://github.com/AgoraIO-Community/Conversational-AI-IOT-Sample.git"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Switch to the ", _jsx(_components.code, {
            children: "bk7258/v2.0.1"
          }), " branch:"]
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
                  children: " Conversational-AI-IOT-Sample"
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
                  children: " bk7258/v2.0.1"
                })]
              })]
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "verify-the-device-demo",
      children: "Verify the device demo"
    }), `
`, _jsx(_components.p, {
      children: "After you have configured the server, device network, and firmware:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Connect the R1 development board to your computer using a Type-C cable connected to the ", _jsx(_components.code, {
            children: "USB TO UART"
          }), " interface."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If this is the first-time setup, press and hold the ", _jsx(_components.strong, {
            children: "S1"
          }), " button for 5 seconds to enter network configuration mode, then finish Wi-Fi setup through the Android app."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Short press the ", _jsx(_components.strong, {
            children: "Middle button"
          }), " to start a conversation with the AI agent."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Short press the ", _jsx(_components.strong, {
            children: "Middle button"
          }), " again to end the conversation."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If the device enters deep sleep mode after 3 minutes of inactivity, press the ", _jsx(_components.strong, {
            children: "RST"
          }), " button to restart."]
        }), `
`, _jsxs(CalloutContainer, {
          type: "info",
          children: [_jsx(CalloutTitle, {
            children: "Info"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["The ", _jsx(_components.code, {
                  children: "USB TO UART"
                }), " interface also charges the battery. The device automatically activates when you connect a battery or data cable."]
              }), `
`, _jsxs(_components.li, {
                children: ["If the programming tool fails to restart the development board automatically, press the ", _jsx(_components.strong, {
                  children: "RST"
                }), " button to manually restart and restore programming capability."]
              }), `
`]
            })
          })]
        }), `
`]
      }), `
`]
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
          href: "configure-device-network",
          children: "Configure device network"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "build-and-flash-firmware",
          children: "Build and flash firmware"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "demo-server-apis",
          children: "Demo server APIs"
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
