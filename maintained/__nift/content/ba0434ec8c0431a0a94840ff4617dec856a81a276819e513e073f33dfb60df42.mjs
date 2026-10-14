import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "TEN add-on system",
  description: "Understand TEN add-ons, how the runtime loads them, and how apps discover extensions, extension groups, and protocols."
};
export let _markdown = `

The TEN Framework uses **add-ons** as its basic software modules. Add-ons are self-contained components that implement specific functionality within the TEN Framework. All features and capabilities in a TEN application are built using these modular add-ons.

The TEN Framework supports the following types of add-ons:

* **TEN extension** - Implements core application logic and features
* **TEN extension group** - Groups multiple extensions for coordinated functionality
* **TEN protocol** - Handles communication protocols and data exchange

## Loading add-ons [#loading-add-ons]

To load an add-on into the TEN runtime, you need:

1. **Add-on name**

   The name must be globally unique within your TEN application. If you load multiple add-ons with the same name, the TEN runtime exhibits undefined behavior and may fail to load the second add-on properly.

2. **Add-on folder location**

   Specify the directory path where the TEN runtime can find the add-on's files. The runtime uses this directory as the \`base_dir\` to load configuration files such as \`manifest.json\` and \`property.json\`.

   The add-on registration API attempts to detect this directory automatically. If automatic detection fails, you must explicitly specify the \`base_dir\` path.

3. **Add-on instance**

## Registering add-ons [#registering-add-ons]

You can register add-ons using one of the following methods:

1. **Use the explicit registration API**

   Call the registration API to manually register the add-on's \`base_dir\` with the TEN runtime.

   <CalloutContainer type="info">
     <CalloutDescription>
       Currently, only the standalone testing framework provides this API.
     </CalloutDescription>
   </CalloutContainer>

2. **Use the designated directory structure**

   Place your add-ons in the \`ten_packages/\` directory of your TEN application. The application automatically discovers and loads add-ons at startup when you organize them as follows:

   \`\`\`text
   .
   └── ten_packages/
       ├── extension/
       │   ├── <extension_foo>/
       │   └── <extension_bar>/
       ├── extension_group/
       │   └── <extension_group_x>/
       └── protocol/
           └── <protocol_a>/
   \`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The TEN Framework uses **add-ons** as its basic software modules. Add-ons are self-contained components that implement specific functionality within the TEN Framework. All features and capabilities in a TEN application are built using these modular add-ons."
  }, {
    heading: undefined,
    content: "The TEN Framework supports the following types of add-ons:"
  }, {
    heading: undefined,
    content: "**TEN extension** - Implements core application logic and features"
  }, {
    heading: undefined,
    content: "**TEN extension group** - Groups multiple extensions for coordinated functionality"
  }, {
    heading: undefined,
    content: "**TEN protocol** - Handles communication protocols and data exchange"
  }, {
    heading: "loading-add-ons",
    content: "To load an add-on into the TEN runtime, you need:"
  }, {
    heading: "loading-add-ons",
    content: "**Add-on name**"
  }, {
    heading: "loading-add-ons",
    content: "The name must be globally unique within your TEN application. If you load multiple add-ons with the same name, the TEN runtime exhibits undefined behavior and may fail to load the second add-on properly."
  }, {
    heading: "loading-add-ons",
    content: "**Add-on folder location**"
  }, {
    heading: "loading-add-ons",
    content: "Specify the directory path where the TEN runtime can find the add-on's files. The runtime uses this directory as the `base_dir` to load configuration files such as `manifest.json` and `property.json`."
  }, {
    heading: "loading-add-ons",
    content: "The add-on registration API attempts to detect this directory automatically. If automatic detection fails, you must explicitly specify the `base_dir` path."
  }, {
    heading: "loading-add-ons",
    content: "**Add-on instance**"
  }, {
    heading: "registering-add-ons",
    content: "You can register add-ons using one of the following methods:"
  }, {
    heading: "registering-add-ons",
    content: "**Use the explicit registration API**"
  }, {
    heading: "registering-add-ons",
    content: "Call the registration API to manually register the add-on's `base_dir` with the TEN runtime."
  }, {
    heading: "registering-add-ons",
    content: "Currently, only the standalone testing framework provides this API."
  }, {
    heading: "registering-add-ons",
    content: "**Use the designated directory structure**"
  }, {
    heading: "registering-add-ons",
    content: "Place your add-ons in the `ten_packages/` directory of your TEN application. The application automatically discovers and loads add-ons at startup when you organize them as follows:"
  }],
  headings: [{
    id: "loading-add-ons",
    content: "Loading add-ons"
  }, {
    id: "registering-add-ons",
    content: "Registering add-ons"
  }]
};
export let toc = [{
  depth: 2,
  url: "#loading-add-ons",
  title: _jsx(_Fragment, {
    children: "Loading add-ons"
  })
}, {
  depth: 2,
  url: "#registering-add-ons",
  title: _jsx(_Fragment, {
    children: "Registering add-ons"
  })
}];
function _createMdxContent(props) {
  const _components = {
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["The TEN Framework uses ", _jsx(_components.strong, {
        children: "add-ons"
      }), " as its basic software modules. Add-ons are self-contained components that implement specific functionality within the TEN Framework. All features and capabilities in a TEN application are built using these modular add-ons."]
    }), `
`, _jsx(_components.p, {
      children: "The TEN Framework supports the following types of add-ons:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "TEN extension"
        }), " - Implements core application logic and features"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "TEN extension group"
        }), " - Groups multiple extensions for coordinated functionality"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "TEN protocol"
        }), " - Handles communication protocols and data exchange"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "loading-add-ons",
      children: "Loading add-ons"
    }), `
`, _jsx(_components.p, {
      children: "To load an add-on into the TEN runtime, you need:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Add-on name"
          })
        }), `
`, _jsx(_components.p, {
          children: "The name must be globally unique within your TEN application. If you load multiple add-ons with the same name, the TEN runtime exhibits undefined behavior and may fail to load the second add-on properly."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Add-on folder location"
          })
        }), `
`, _jsxs(_components.p, {
          children: ["Specify the directory path where the TEN runtime can find the add-on's files. The runtime uses this directory as the ", _jsx(_components.code, {
            children: "base_dir"
          }), " to load configuration files such as ", _jsx(_components.code, {
            children: "manifest.json"
          }), " and ", _jsx(_components.code, {
            children: "property.json"
          }), "."]
        }), `
`, _jsxs(_components.p, {
          children: ["The add-on registration API attempts to detect this directory automatically. If automatic detection fails, you must explicitly specify the ", _jsx(_components.code, {
            children: "base_dir"
          }), " path."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Add-on instance"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "registering-add-ons",
      children: "Registering add-ons"
    }), `
`, _jsx(_components.p, {
      children: "You can register add-ons using one of the following methods:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Use the explicit registration API"
          })
        }), `
`, _jsxs(_components.p, {
          children: ["Call the registration API to manually register the add-on's ", _jsx(_components.code, {
            children: "base_dir"
          }), " with the TEN runtime."]
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "Currently, only the standalone testing framework provides this API."
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Use the designated directory structure"
          })
        }), `
`, _jsxs(_components.p, {
          children: ["Place your add-ons in the ", _jsx(_components.code, {
            children: "ten_packages/"
          }), " directory of your TEN application. The application automatically discovers and loads add-ons at startup when you organize them as follows:"]
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "└──"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " ten_packages/"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "    ├──"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " extension/"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "    │"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "   ├──"
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
                  children: "extension_fo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "o"
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
                  children: "/"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "    │"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "   └──"
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
                  children: "extension_ba"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "r"
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
                  children: "/"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "    ├──"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " extension_group/"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "    │"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "   └──"
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
                  children: "extension_group_"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "x"
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
                  children: "/"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "    └──"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " protocol/"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "        └──"
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
                  children: "protocol_"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "a"
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
                  children: "/"
                })]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
