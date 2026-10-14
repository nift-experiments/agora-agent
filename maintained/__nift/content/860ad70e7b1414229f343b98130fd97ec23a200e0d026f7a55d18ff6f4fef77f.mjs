import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Contribute an ASR extension",
  description: "Generate an ASR extension project and install its development dependencies"
};
export let _markdown = `

This guide shows how to scaffold an ASR extension project, install its dependencies, and review the generated files before you implement vendor-specific transcription logic.

In a voice agent graph, an ASR extension receives real-time audio frames and emits transcribed text for downstream LLM or dialog-processing extensions.

## When to use this guide [#when-to-use-this-guide]

Use this guide when you are starting a new Python ASR extension from the default template. For the complete extension lifecycle, see [Development workflow](../../ten-agent/develop/development-workflow). For metadata and schema concepts, see [Schema system](../../ten-agent/architecture/schema-system).

## Prerequisites [#prerequisites]

* Understand the development and testing process of TEN extensions. See [Development workflow](../../ten-agent/develop/development-workflow).
* Master Python asynchronous programming (\`asyncio\`, \`async/await\`).
* Have the \`tman\` command-line tool installed and be familiar with its basic usage.
* Have an API key from an ASR vendor ready (for testing).

## What an ASR extension does [#what-an-asr-extension-does]

The ASR Extension is one of the standard building blocks of the TEN Framework, responsible for **transcribing audio streams into text** in corresponding languages in **real-time**.

### Position in the Conversation Flow [#position-in-the-conversation-flow]

\`\`\`json
[RTC Extension] ──audio stream──> [ASR Extension] ──text stream──> [LLM Extension]
\`\`\`

## Create the project [#create-the-project]

### Prepare the repository [#prepare-the-repository]

<CalloutContainer type="info">
  <CalloutDescription>
    If you haven't cloned the TEN Framework repository yet, please clone it first:

    \`\`\`bash
    git clone https://github.com/TEN-framework/ten-framework.git
    cd ten-framework
    \`\`\`

    This tutorial assumes you are developing in the root directory of the TEN Framework repository.
  </CalloutDescription>
</CalloutContainer>

### Create with the template [#create-with-the-template]

Use the \`tman\` command-line tool to create a project from the ASR extension template:

\`\`\`bash
cd ai_agents/agents/ten_packages/extension
tman create extension my_asr_extension --template default_asr_python --template-data class_name_prefix=MyAsr
\`\`\`

**Command Parameter Explanation**:

* \`extension my_asr_extension\`: Create an extension with the directory name and plugin name \`my_asr_extension\`.
* \`--template default_asr_python\`: Use the ASR Python extension template.
* \`--template-data class_name_prefix=MyAsr\`: Set the class name prefix for the Python Extension class to \`MyAsr\` (the generated class name will be \`MyAsrExtension\`).

### Install TEN package dependencies [#install-ten-package-dependencies]

\`\`\`bash
cd my_asr_extension
tman install --standalone
\`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    This command uses the dependency calculation and download capabilities of the \`tman\` tool to calculate the dependency tree based on the dependencies declared in \`manifest.json\`. Since these are development dependencies, the \`--standalone\` parameter is required. Dependencies will be installed in the \`.ten\` directory, including Python modules for development and system packages for standalone testing.
  </CalloutDescription>
</CalloutContainer>

### Review the project structure [#review-the-project-structure]

\`\`\`text
my_asr_extension/
├── manifest.json       # Extension metadata
├── property.json       # Default configuration
├── requirements.txt    # Python dependencies
├── extension.py        # Main implementation file
├── addon.py            # Extension entry point
├── __init__.py         # Python package initialization
├── docs/               # Documentation directory
├── .vscode/            # VS Code debug configuration
└── tests/              # Test files
\`\`\`

#### File descriptions [#file-descriptions]

**manifest.json and property.json** are standard metadata files for TEN Extensions:

* \`manifest.json\`: Contains the extension's **name, version, description, dependencies, and schema definitions**.
* \`property.json\`: Defines the extension's **default property values**.

<CalloutContainer type="info">
  <CalloutDescription>
    For details about TEN Framework metadata and schemas, see [Schema system](../../ten-agent/architecture/schema-system).
  </CalloutDescription>
</CalloutContainer>

**requirements.txt** is unique to Python extensions and is used to declare the extension's **dependencies on third-party pip packages**.

**extension.py** is the **core source code** of the extension, containing all business logic implementation.

**tests/** folder is used for **standalone extension testing**, including unit tests and test configurations.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This guide shows how to scaffold an ASR extension project, install its dependencies, and review the generated files before you implement vendor-specific transcription logic."
  }, {
    heading: undefined,
    content: "In a voice agent graph, an ASR extension receives real-time audio frames and emits transcribed text for downstream LLM or dialog-processing extensions."
  }, {
    heading: "when-to-use-this-guide",
    content: "Use this guide when you are starting a new Python ASR extension from the default template. For the complete extension lifecycle, see Development workflow. For metadata and schema concepts, see Schema system."
  }, {
    heading: "prerequisites",
    content: "Understand the development and testing process of TEN extensions. See Development workflow."
  }, {
    heading: "prerequisites",
    content: "Master Python asynchronous programming (`asyncio`, `async/await`)."
  }, {
    heading: "prerequisites",
    content: "Have the `tman` command-line tool installed and be familiar with its basic usage."
  }, {
    heading: "prerequisites",
    content: "Have an API key from an ASR vendor ready (for testing)."
  }, {
    heading: "what-an-asr-extension-does",
    content: "The ASR Extension is one of the standard building blocks of the TEN Framework, responsible for **transcribing audio streams into text** in corresponding languages in **real-time**."
  }, {
    heading: "prepare-the-repository",
    content: "If you haven't cloned the TEN Framework repository yet, please clone it first:"
  }, {
    heading: "prepare-the-repository",
    content: "This tutorial assumes you are developing in the root directory of the TEN Framework repository."
  }, {
    heading: "create-with-the-template",
    content: "Use the `tman` command-line tool to create a project from the ASR extension template:"
  }, {
    heading: "create-with-the-template",
    content: "**Command Parameter Explanation**:"
  }, {
    heading: "create-with-the-template",
    content: "`extension my_asr_extension`: Create an extension with the directory name and plugin name `my_asr_extension`."
  }, {
    heading: "create-with-the-template",
    content: "`--template default_asr_python`: Use the ASR Python extension template."
  }, {
    heading: "create-with-the-template",
    content: "`--template-data class_name_prefix=MyAsr`: Set the class name prefix for the Python Extension class to `MyAsr` (the generated class name will be `MyAsrExtension`)."
  }, {
    heading: "install-ten-package-dependencies",
    content: "This command uses the dependency calculation and download capabilities of the `tman` tool to calculate the dependency tree based on the dependencies declared in `manifest.json`. Since these are development dependencies, the `--standalone` parameter is required. Dependencies will be installed in the `.ten` directory, including Python modules for development and system packages for standalone testing."
  }, {
    heading: "file-descriptions",
    content: "**manifest.json and property.json** are standard metadata files for TEN Extensions:"
  }, {
    heading: "file-descriptions",
    content: "`manifest.json`: Contains the extension's **name, version, description, dependencies, and schema definitions**."
  }, {
    heading: "file-descriptions",
    content: "`property.json`: Defines the extension's **default property values**."
  }, {
    heading: "file-descriptions",
    content: "For details about TEN Framework metadata and schemas, see Schema system."
  }, {
    heading: "file-descriptions",
    content: "**requirements.txt** is unique to Python extensions and is used to declare the extension's **dependencies on third-party pip packages**."
  }, {
    heading: "file-descriptions",
    content: "**extension.py** is the **core source code** of the extension, containing all business logic implementation."
  }, {
    heading: "file-descriptions",
    content: "**tests/** folder is used for **standalone extension testing**, including unit tests and test configurations."
  }],
  headings: [{
    id: "when-to-use-this-guide",
    content: "When to use this guide"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "what-an-asr-extension-does",
    content: "What an ASR extension does"
  }, {
    id: "position-in-the-conversation-flow",
    content: "Position in the Conversation Flow"
  }, {
    id: "create-the-project",
    content: "Create the project"
  }, {
    id: "prepare-the-repository",
    content: "Prepare the repository"
  }, {
    id: "create-with-the-template",
    content: "Create with the template"
  }, {
    id: "install-ten-package-dependencies",
    content: "Install TEN package dependencies"
  }, {
    id: "review-the-project-structure",
    content: "Review the project structure"
  }, {
    id: "file-descriptions",
    content: "File descriptions"
  }]
};
export let toc = [{
  depth: 2,
  url: "#when-to-use-this-guide",
  title: _jsx(_Fragment, {
    children: "When to use this guide"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#what-an-asr-extension-does",
  title: _jsx(_Fragment, {
    children: "What an ASR extension does"
  })
}, {
  depth: 3,
  url: "#position-in-the-conversation-flow",
  title: _jsx(_Fragment, {
    children: "Position in the Conversation Flow"
  })
}, {
  depth: 2,
  url: "#create-the-project",
  title: _jsx(_Fragment, {
    children: "Create the project"
  })
}, {
  depth: 3,
  url: "#prepare-the-repository",
  title: _jsx(_Fragment, {
    children: "Prepare the repository"
  })
}, {
  depth: 3,
  url: "#create-with-the-template",
  title: _jsx(_Fragment, {
    children: "Create with the template"
  })
}, {
  depth: 3,
  url: "#install-ten-package-dependencies",
  title: _jsx(_Fragment, {
    children: "Install TEN package dependencies"
  })
}, {
  depth: 3,
  url: "#review-the-project-structure",
  title: _jsx(_Fragment, {
    children: "Review the project structure"
  })
}, {
  depth: 4,
  url: "#file-descriptions",
  title: _jsx(_Fragment, {
    children: "File descriptions"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
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
      children: "This guide shows how to scaffold an ASR extension project, install its dependencies, and review the generated files before you implement vendor-specific transcription logic."
    }), `
`, _jsx(_components.p, {
      children: "In a voice agent graph, an ASR extension receives real-time audio frames and emits transcribed text for downstream LLM or dialog-processing extensions."
    }), `
`, _jsx(_components.h2, {
      id: "when-to-use-this-guide",
      children: "When to use this guide"
    }), `
`, _jsxs(_components.p, {
      children: ["Use this guide when you are starting a new Python ASR extension from the default template. For the complete extension lifecycle, see ", _jsx(_components.a, {
        href: "../../ten-agent/develop/development-workflow",
        children: "Development workflow"
      }), ". For metadata and schema concepts, see ", _jsx(_components.a, {
        href: "../../ten-agent/architecture/schema-system",
        children: "Schema system"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Understand the development and testing process of TEN extensions. See ", _jsx(_components.a, {
          href: "../../ten-agent/develop/development-workflow",
          children: "Development workflow"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Master Python asynchronous programming (", _jsx(_components.code, {
          children: "asyncio"
        }), ", ", _jsx(_components.code, {
          children: "async/await"
        }), ")."]
      }), `
`, _jsxs(_components.li, {
        children: ["Have the ", _jsx(_components.code, {
          children: "tman"
        }), " command-line tool installed and be familiar with its basic usage."]
      }), `
`, _jsx(_components.li, {
        children: "Have an API key from an ASR vendor ready (for testing)."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "what-an-asr-extension-does",
      children: "What an ASR extension does"
    }), `
`, _jsxs(_components.p, {
      children: ["The ASR Extension is one of the standard building blocks of the TEN Framework, responsible for ", _jsx(_components.strong, {
        children: "transcribing audio streams into text"
      }), " in corresponding languages in ", _jsx(_components.strong, {
        children: "real-time"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "position-in-the-conversation-flow",
      children: "Position in the Conversation Flow"
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
              children: "["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "RTC"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: " Extension"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "] ──audio stream──> ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "ASR"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: " Extension"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "] ──text stream──> ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "LLM"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: " Extension"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "create-the-project",
      children: "Create the project"
    }), `
`, _jsx(_components.h3, {
      id: "prepare-the-repository",
      children: "Prepare the repository"
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsxs(CalloutDescription, {
        children: [_jsx(_components.p, {
          children: "If you haven't cloned the TEN Framework repository yet, please clone it first:"
        }), _jsx(_Fragment, {
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " https://github.com/TEN-framework/ten-framework.git"
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
                  children: " ten-framework"
                })]
              })]
            })
          })
        }), _jsx(_components.p, {
          children: "This tutorial assumes you are developing in the root directory of the TEN Framework repository."
        })]
      })
    }), `
`, _jsx(_components.h3, {
      id: "create-with-the-template",
      children: "Create with the template"
    }), `
`, _jsxs(_components.p, {
      children: ["Use the ", _jsx(_components.code, {
        children: "tman"
      }), " command-line tool to create a project from the ASR extension template:"]
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
              children: " ai_agents/agents/ten_packages/extension"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "tman"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " create"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " extension"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " my_asr_extension"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --template"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " default_asr_python"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --template-data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " class_name_prefix=MyAsr"
            })]
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Command Parameter Explanation"
      }), ":"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "extension my_asr_extension"
        }), ": Create an extension with the directory name and plugin name ", _jsx(_components.code, {
          children: "my_asr_extension"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "--template default_asr_python"
        }), ": Use the ASR Python extension template."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "--template-data class_name_prefix=MyAsr"
        }), ": Set the class name prefix for the Python Extension class to ", _jsx(_components.code, {
          children: "MyAsr"
        }), " (the generated class name will be ", _jsx(_components.code, {
          children: "MyAsrExtension"
        }), ")."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "install-ten-package-dependencies",
      children: "Install TEN package dependencies"
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
              children: " my_asr_extension"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "tman"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " install"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --standalone"
            })]
          })]
        })
      })
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["This command uses the dependency calculation and download capabilities of the ", _jsx(_components.code, {
            children: "tman"
          }), " tool to calculate the dependency tree based on the dependencies declared in ", _jsx(_components.code, {
            children: "manifest.json"
          }), ". Since these are development dependencies, the ", _jsx(_components.code, {
            children: "--standalone"
          }), " parameter is required. Dependencies will be installed in the ", _jsx(_components.code, {
            children: ".ten"
          }), " directory, including Python modules for development and system packages for standalone testing."]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "review-the-project-structure",
      children: "Review the project structure"
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "my_asr_extension/"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " manifest.json"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "       # Extension metadata"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " property.json"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "       # Default configuration"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " requirements.txt"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "    # Python dependencies"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " extension.py"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "        # Main implementation file"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " addon.py"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "            # Extension entry point"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " __init__.py"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "         # Python package initialization"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " docs/"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "               # Documentation directory"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " .vscode/"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "            # VS Code debug configuration"
            })]
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
              children: " tests/"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "              # Test files"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "file-descriptions",
      children: "File descriptions"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "manifest.json and property.json"
      }), " are standard metadata files for TEN Extensions:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "manifest.json"
        }), ": Contains the extension's ", _jsx(_components.strong, {
          children: "name, version, description, dependencies, and schema definitions"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "property.json"
        }), ": Defines the extension's ", _jsx(_components.strong, {
          children: "default property values"
        }), "."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["For details about TEN Framework metadata and schemas, see ", _jsx(_components.a, {
            href: "../../ten-agent/architecture/schema-system",
            children: "Schema system"
          }), "."]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "requirements.txt"
      }), " is unique to Python extensions and is used to declare the extension's ", _jsx(_components.strong, {
        children: "dependencies on third-party pip packages"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "extension.py"
      }), " is the ", _jsx(_components.strong, {
        children: "core source code"
      }), " of the extension, containing all business logic implementation."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "tests/"
      }), " folder is used for ", _jsx(_components.strong, {
        children: "standalone extension testing"
      }), ", including unit tests and test configurations."]
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
