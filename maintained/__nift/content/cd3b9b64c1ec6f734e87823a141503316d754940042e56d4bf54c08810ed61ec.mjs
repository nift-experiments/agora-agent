import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Manual install",
  description: "Links to the manual downloads for this product and explanations on how to install them."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;flutter&#x22;,&#x22;unity&#x22;,&#x22;web&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    To manually install Chat SDK from a download:

    1. [Download](/sdks) the latest version of the Chat SDK for Web, and extract files from the package to a local folder, \`<unzipped_package>\`.

    2. Copy the following files and subfolders from the \`libs\` folder of the downloaded SDK to the corresponding directory of your project:

       | File or subfolder                                      | Path of your project                  |
       | ------------------------------------------------------ | ------------------------------------- |
       | \`agorachat_x.y.x.jar\`                                  | \`~/app/libs/\`                         |
       | \`/arm64-v8a/libagora-chat-sdk.so\` and \`libsqlite.so\`   | \`~/app/src/main/jniLibs/arm64-v8a/\`   |
       | \`/armeabi-v7a/libagora-chat-sdk.so\` and \`libsqlite.so\` | \`~/app/src/main/jniLibs/armeabi-v7a/\` |
       | \`/x86/libagora-chat-sdk.so\` and \`libsqlite.so\`         | \`~/app/src/main/jniLibs/x86/\`         |
       | \`/x86_64/libagora-chat-sdk.so\` and \`libsqlite.so\`      | \`~/app/src/main/jniLibs/x86_64/\`      |

       \`x.y.z\` refers to the version number of the Chat SDK you downloaded.

    3. In Android Studio, select the \`Project Files/app/libs/agorachat_x.y.z.jar\` file on the navigation bar, right-click, and then select **add as a library**.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    To manually install Chat SDK use either:

    * **Yaml package manager**:

      Add the following line to the \`/pubspec.yaml\` file under \`dependencies\`:

      \`\`\`yaml
      dependencies:
      ...
          # Fill in a specific SDK version number for x.y.z
          # For example, 1.0.9
          agora_chat_sdk: ^x.y.z
      ...
      \`\`\`

      To get the latest Web Chat SDK version number, visit [pub.dev](https://pub.dev/packages?q=agora_chat_sdk).

    * **Pub dev**

      Run the following command in the project folder:

      \`\`\`bash
      flutter pub add agora_chat_sdk
      \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    To manually install Chat SDK:

    1. Unzip [Chat SDK for Unity](/sdks) to a local folder:

    2. In Unity, click **Assets > Import Package > Custom Package**.

    3. Navigate to the Chat SDK package and click *Open*.

    4. In **Import Unity Package**, click **Import**.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    To manually install Chat SDK use either:

    1. Unzip [Chat SDK for Web](/sdks) to a local folder:

    2. In the SDK folder, save \`libs/Agora-chat.js\` to your project directory.

    3. Open the HTML file in your project directory and add the following code to import Chat SDK:

       \`\`\`javascript
       <script src="path to the JS file"></script>
       \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To manually install Chat SDK from a download:"
  }, {
    heading: undefined,
    content: "Download the latest version of the Chat SDK for Web, and extract files from the package to a local folder, `<unzipped_package>`."
  }, {
    heading: undefined,
    content: "Copy the following files and subfolders from the `libs` folder of the downloaded SDK to the corresponding directory of your project:"
  }, {
    heading: undefined,
    content: "File or subfolder"
  }, {
    heading: undefined,
    content: "Path of your project"
  }, {
    heading: undefined,
    content: "`agorachat_x.y.x.jar`"
  }, {
    heading: undefined,
    content: "`~/app/libs/`"
  }, {
    heading: undefined,
    content: "`/arm64-v8a/libagora-chat-sdk.so` and `libsqlite.so`"
  }, {
    heading: undefined,
    content: "`~/app/src/main/jniLibs/arm64-v8a/`"
  }, {
    heading: undefined,
    content: "`/armeabi-v7a/libagora-chat-sdk.so` and `libsqlite.so`"
  }, {
    heading: undefined,
    content: "`~/app/src/main/jniLibs/armeabi-v7a/`"
  }, {
    heading: undefined,
    content: "`/x86/libagora-chat-sdk.so` and `libsqlite.so`"
  }, {
    heading: undefined,
    content: "`~/app/src/main/jniLibs/x86/`"
  }, {
    heading: undefined,
    content: "`/x86_64/libagora-chat-sdk.so` and `libsqlite.so`"
  }, {
    heading: undefined,
    content: "`~/app/src/main/jniLibs/x86_64/`"
  }, {
    heading: undefined,
    content: "`x.y.z` refers to the version number of the Chat SDK you downloaded."
  }, {
    heading: undefined,
    content: "In Android Studio, select the `Project Files/app/libs/agorachat_x.y.z.jar` file on the navigation bar, right-click, and then select **add as a library**."
  }, {
    heading: undefined,
    content: "To manually install Chat SDK use either:"
  }, {
    heading: undefined,
    content: "**Yaml package manager**:"
  }, {
    heading: undefined,
    content: "Add the following line to the `/pubspec.yaml` file under `dependencies`:"
  }, {
    heading: undefined,
    content: "To get the latest Web Chat SDK version number, visit pub.dev."
  }, {
    heading: undefined,
    content: "**Pub dev**"
  }, {
    heading: undefined,
    content: "Run the following command in the project folder:"
  }, {
    heading: undefined,
    content: "To manually install Chat SDK:"
  }, {
    heading: undefined,
    content: "Unzip Chat SDK for Unity to a local folder:"
  }, {
    heading: undefined,
    content: "In Unity, click **Assets > Import Package > Custom Package**."
  }, {
    heading: undefined,
    content: "Navigate to the Chat SDK package and click *Open*."
  }, {
    heading: undefined,
    content: "In **Import Unity Package**, click **Import**."
  }, {
    heading: undefined,
    content: "To manually install Chat SDK use either:"
  }, {
    heading: undefined,
    content: "Unzip Chat SDK for Web to a local folder:"
  }, {
    heading: undefined,
    content: "In the SDK folder, save `libs/Agora-chat.js` to your project directory."
  }, {
    heading: undefined,
    content: "Open the HTML file in your project directory and add the following code to import Chat SDK:"
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "web",
    platforms: '["android","flutter","unity","web"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "android"
      }), _jsx(_components.p, {
        children: "To manually install Chat SDK from a download:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.a, {
              href: "/sdks",
              children: "Download"
            }), " the latest version of the Chat SDK for Web, and extract files from the package to a local folder, ", _jsx(_components.code, {
              children: "<unzipped_package>"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Copy the following files and subfolders from the ", _jsx(_components.code, {
              children: "libs"
            }), " folder of the downloaded SDK to the corresponding directory of your project:"]
          }), `
`, _jsxs(_components.table, {
            children: [_jsx(_components.thead, {
              children: _jsxs(_components.tr, {
                children: [_jsx(_components.th, {
                  children: "File or subfolder"
                }), _jsx(_components.th, {
                  children: "Path of your project"
                })]
              })
            }), _jsxs(_components.tbody, {
              children: [_jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "agorachat_x.y.x.jar"
                  })
                }), _jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "~/app/libs/"
                  })
                })]
              }), _jsxs(_components.tr, {
                children: [_jsxs(_components.td, {
                  children: [_jsx(_components.code, {
                    children: "/arm64-v8a/libagora-chat-sdk.so"
                  }), " and ", _jsx(_components.code, {
                    children: "libsqlite.so"
                  })]
                }), _jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "~/app/src/main/jniLibs/arm64-v8a/"
                  })
                })]
              }), _jsxs(_components.tr, {
                children: [_jsxs(_components.td, {
                  children: [_jsx(_components.code, {
                    children: "/armeabi-v7a/libagora-chat-sdk.so"
                  }), " and ", _jsx(_components.code, {
                    children: "libsqlite.so"
                  })]
                }), _jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "~/app/src/main/jniLibs/armeabi-v7a/"
                  })
                })]
              }), _jsxs(_components.tr, {
                children: [_jsxs(_components.td, {
                  children: [_jsx(_components.code, {
                    children: "/x86/libagora-chat-sdk.so"
                  }), " and ", _jsx(_components.code, {
                    children: "libsqlite.so"
                  })]
                }), _jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "~/app/src/main/jniLibs/x86/"
                  })
                })]
              }), _jsxs(_components.tr, {
                children: [_jsxs(_components.td, {
                  children: [_jsx(_components.code, {
                    children: "/x86_64/libagora-chat-sdk.so"
                  }), " and ", _jsx(_components.code, {
                    children: "libsqlite.so"
                  })]
                }), _jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "~/app/src/main/jniLibs/x86_64/"
                  })
                })]
              })]
            })]
          }), `
`, _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "x.y.z"
            }), " refers to the version number of the Chat SDK you downloaded."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In Android Studio, select the ", _jsx(_components.code, {
              children: "Project Files/app/libs/agorachat_x.y.z.jar"
            }), " file on the navigation bar, right-click, and then select ", _jsx(_components.strong, {
              children: "add as a library"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "flutter",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "flutter"
      }), _jsx(_components.p, {
        children: "To manually install Chat SDK use either:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Yaml package manager"
            }), ":"]
          }), `
`, _jsxs(_components.p, {
            children: ["Add the following line to the ", _jsx(_components.code, {
              children: "/pubspec.yaml"
            }), " file under ", _jsx(_components.code, {
              children: "dependencies"
            }), ":"]
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
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "dependencies"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ":"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "..."
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    # Fill in a specific SDK version number for x.y.z"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    # For example, 1.0.9"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "    agora_chat_sdk"
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
                    children: "^x.y.z"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "..."
                  })
                })]
              })
            })
          }), `
`, _jsxs(_components.p, {
            children: ["To get the latest Web Chat SDK version number, visit ", _jsx(_components.a, {
              href: "https://pub.dev/packages?q=agora_chat_sdk",
              children: "pub.dev"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Pub dev"
            })
          }), `
`, _jsx(_components.p, {
            children: "Run the following command in the project folder:"
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
                    children: "flutter"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " pub"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " add"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " agora_chat_sdk"
                  })]
                })
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "unity",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "unity"
      }), _jsx(_components.p, {
        children: "To manually install Chat SDK:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Unzip ", _jsx(_components.a, {
              href: "/sdks",
              children: "Chat SDK for Unity"
            }), " to a local folder:"]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In Unity, click ", _jsx(_components.strong, {
              children: "Assets > Import Package > Custom Package"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Navigate to the Chat SDK package and click ", _jsx(_components.em, {
              children: "Open"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In ", _jsx(_components.strong, {
              children: "Import Unity Package"
            }), ", click ", _jsx(_components.strong, {
              children: "Import"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "web",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "web"
      }), _jsx(_components.p, {
        children: "To manually install Chat SDK use either:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Unzip ", _jsx(_components.a, {
              href: "/sdks",
              children: "Chat SDK for Web"
            }), " to a local folder:"]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In the SDK folder, save ", _jsx(_components.code, {
              children: "libs/Agora-chat.js"
            }), " to your project directory."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Open the HTML file in your project directory and add the following code to import Chat SDK:"
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
              children: _jsx(_components.code, {
                children: _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "script"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " src"
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
                    children: '"path to the JS file"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "></"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "script"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                })
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
