import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Set up the TEN Framework development environment",
  description: "Install the operating system packages and tooling required to build and run TEN Framework applications."
};
export let _markdown = `

This guide explains how to set up your development environment for the TEN Framework. The TEN Framework supports Windows, Linux, and Mac, with Linux or Mac recommended.

## Linux setup [#linux-setup]

For Ubuntu, install the following packages:

* \`gcc\` - C/C++ compiler supported by TEN
* \`clang\` - Alternative C/C++ compiler
* \`clang-format\` - Code formatting tool used during runtime
* \`clang-tidy\` - Static code analyzer
* \`cmake\` - Build system (version 3.13+)
* \`Python3\` - Required for Python binding
* \`pytest\` - Used for integration testing

## Mac setup [#mac-setup]

Required components:

* XCode
* CocoaPods
* Personal Account

Install dependencies:

\`\`\`bash
brew install llvm googletest doxygen ninja clang-format
brew install include-what-you-use
\`\`\`

If the brew-installed cmake is outdated, install from the official website and create a symbolic link:

\`\`\`bash
ln -s /Applications/CMake.app/Contents/bin/cmake /usr/local/bin/cmake
\`\`\`

If cmake can't find clang-tidy, use:

\`\`\`bash
ln -sf /usr/local/opt/llvm/bin/clang-tidy /usr/local/bin/clang-tidy
\`\`\`

For language bindings, install:

\`\`\`bash
brew install python golang
\`\`\`

## Windows setup [#windows-setup]

Install these components:

* Visual Studio Community (up to 2022)
  * Select clang-related tools
  * Add clang binary path to the PATH environment variable
* cmake
* python

<CalloutContainer type="info">
  <CalloutDescription>
    When installing cmake and python, avoid paths containing spaces.
  </CalloutDescription>
</CalloutContainer>

## Build system setup [#build-system-setup]

### ten\\_gn [#ten_gn]

TEN uses \`ten_gn\` as its build system (based on Google GN). The source code is in the \`core/ten_gn\` directory of the TEN Framework repository. Add this directory to your system PATH.

### Docker containers [#docker-containers]

For a pre-configured build environment, we provide Docker files.

#### Ubuntu 22.04 [#ubuntu-2204]

Navigate to \`tools/docker_for_building/ubuntu/22.04\` and run:

\`\`\`bash
docker-compose up -d
docker-compose run ten-building-ubuntu-2204
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This guide explains how to set up your development environment for the TEN Framework. The TEN Framework supports Windows, Linux, and Mac, with Linux or Mac recommended."
  }, {
    heading: "linux-setup",
    content: "For Ubuntu, install the following packages:"
  }, {
    heading: "linux-setup",
    content: "`gcc` - C/C++ compiler supported by TEN"
  }, {
    heading: "linux-setup",
    content: "`clang` - Alternative C/C++ compiler"
  }, {
    heading: "linux-setup",
    content: "`clang-format` - Code formatting tool used during runtime"
  }, {
    heading: "linux-setup",
    content: "`clang-tidy` - Static code analyzer"
  }, {
    heading: "linux-setup",
    content: "`cmake` - Build system (version 3.13+)"
  }, {
    heading: "linux-setup",
    content: "`Python3` - Required for Python binding"
  }, {
    heading: "linux-setup",
    content: "`pytest` - Used for integration testing"
  }, {
    heading: "mac-setup",
    content: "Required components:"
  }, {
    heading: "mac-setup",
    content: "XCode"
  }, {
    heading: "mac-setup",
    content: "CocoaPods"
  }, {
    heading: "mac-setup",
    content: "Personal Account"
  }, {
    heading: "mac-setup",
    content: "Install dependencies:"
  }, {
    heading: "mac-setup",
    content: "If the brew-installed cmake is outdated, install from the official website and create a symbolic link:"
  }, {
    heading: "mac-setup",
    content: "If cmake can't find clang-tidy, use:"
  }, {
    heading: "mac-setup",
    content: "For language bindings, install:"
  }, {
    heading: "windows-setup",
    content: "Install these components:"
  }, {
    heading: "windows-setup",
    content: "Visual Studio Community (up to 2022)"
  }, {
    heading: "windows-setup",
    content: "Select clang-related tools"
  }, {
    heading: "windows-setup",
    content: "Add clang binary path to the PATH environment variable"
  }, {
    heading: "windows-setup",
    content: "cmake"
  }, {
    heading: "windows-setup",
    content: "python"
  }, {
    heading: "windows-setup",
    content: "When installing cmake and python, avoid paths containing spaces."
  }, {
    heading: "ten_gn",
    content: "TEN uses `ten_gn` as its build system (based on Google GN). The source code is in the `core/ten_gn` directory of the TEN Framework repository. Add this directory to your system PATH."
  }, {
    heading: "docker-containers",
    content: "For a pre-configured build environment, we provide Docker files."
  }, {
    heading: "ubuntu-2204",
    content: "Navigate to `tools/docker_for_building/ubuntu/22.04` and run:"
  }],
  headings: [{
    id: "linux-setup",
    content: "Linux setup"
  }, {
    id: "mac-setup",
    content: "Mac setup"
  }, {
    id: "windows-setup",
    content: "Windows setup"
  }, {
    id: "build-system-setup",
    content: "Build system setup"
  }, {
    id: "ten_gn",
    content: "ten_gn"
  }, {
    id: "docker-containers",
    content: "Docker containers"
  }, {
    id: "ubuntu-2204",
    content: "Ubuntu 22.04"
  }]
};
export let toc = [{
  depth: 2,
  url: "#linux-setup",
  title: _jsx(_Fragment, {
    children: "Linux setup"
  })
}, {
  depth: 2,
  url: "#mac-setup",
  title: _jsx(_Fragment, {
    children: "Mac setup"
  })
}, {
  depth: 2,
  url: "#windows-setup",
  title: _jsx(_Fragment, {
    children: "Windows setup"
  })
}, {
  depth: 2,
  url: "#build-system-setup",
  title: _jsx(_Fragment, {
    children: "Build system setup"
  })
}, {
  depth: 3,
  url: "#ten_gn",
  title: _jsx(_Fragment, {
    children: "ten_gn"
  })
}, {
  depth: 3,
  url: "#docker-containers",
  title: _jsx(_Fragment, {
    children: "Docker containers"
  })
}, {
  depth: 4,
  url: "#ubuntu-2204",
  title: _jsx(_Fragment, {
    children: "Ubuntu 22.04"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This guide explains how to set up your development environment for the TEN Framework. The TEN Framework supports Windows, Linux, and Mac, with Linux or Mac recommended."
    }), `
`, _jsx(_components.h2, {
      id: "linux-setup",
      children: "Linux setup"
    }), `
`, _jsx(_components.p, {
      children: "For Ubuntu, install the following packages:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "gcc"
        }), " - C/C++ compiler supported by TEN"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "clang"
        }), " - Alternative C/C++ compiler"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "clang-format"
        }), " - Code formatting tool used during runtime"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "clang-tidy"
        }), " - Static code analyzer"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "cmake"
        }), " - Build system (version 3.13+)"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Python3"
        }), " - Required for Python binding"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "pytest"
        }), " - Used for integration testing"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "mac-setup",
      children: "Mac setup"
    }), `
`, _jsx(_components.p, {
      children: "Required components:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "XCode"
      }), `
`, _jsx(_components.li, {
        children: "CocoaPods"
      }), `
`, _jsx(_components.li, {
        children: "Personal Account"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Install dependencies:"
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
              children: "brew"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " install"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " llvm"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " googletest"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " doxygen"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ninja"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " clang-format"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "brew"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " install"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " include-what-you-use"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "If the brew-installed cmake is outdated, install from the official website and create a symbolic link:"
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
              children: "ln"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -s"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /Applications/CMake.app/Contents/bin/cmake"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /usr/local/bin/cmake"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "If cmake can't find clang-tidy, use:"
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
              children: "ln"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -sf"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /usr/local/opt/llvm/bin/clang-tidy"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /usr/local/bin/clang-tidy"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "For language bindings, install:"
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
              children: "brew"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " install"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " python"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " golang"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "windows-setup",
      children: "Windows setup"
    }), `
`, _jsx(_components.p, {
      children: "Install these components:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Visual Studio Community (up to 2022)", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Select clang-related tools"
          }), `
`, _jsx(_components.li, {
            children: "Add clang binary path to the PATH environment variable"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "cmake"
      }), `
`, _jsx(_components.li, {
        children: "python"
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "When installing cmake and python, avoid paths containing spaces."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "build-system-setup",
      children: "Build system setup"
    }), `
`, _jsx(_components.h3, {
      id: "ten_gn",
      children: "ten_gn"
    }), `
`, _jsxs(_components.p, {
      children: ["TEN uses ", _jsx(_components.code, {
        children: "ten_gn"
      }), " as its build system (based on Google GN). The source code is in the ", _jsx(_components.code, {
        children: "core/ten_gn"
      }), " directory of the TEN Framework repository. Add this directory to your system PATH."]
    }), `
`, _jsx(_components.h3, {
      id: "docker-containers",
      children: "Docker containers"
    }), `
`, _jsx(_components.p, {
      children: "For a pre-configured build environment, we provide Docker files."
    }), `
`, _jsx(_components.h4, {
      id: "ubuntu-2204",
      children: "Ubuntu 22.04"
    }), `
`, _jsxs(_components.p, {
      children: ["Navigate to ", _jsx(_components.code, {
        children: "tools/docker_for_building/ubuntu/22.04"
      }), " and run:"]
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
              children: "docker-compose"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " up"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -d"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "docker-compose"
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
              children: " ten-building-ubuntu-2204"
            })]
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
