import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Build TEN applications",
  description: "Build TEN Framework applications and add-ons with TEN GN for C++ and Go build commands for Go projects."
};
export let _markdown = `

The TEN Framework provides language-specific build systems to compile applications and addons including extensions, extension groups, and protocols. TEN uses build processes that vary by language but follow consistent patterns for each platform and architecture combination. This guide covers how to build TEN projects using the appropriate build tools for each supported language.

## C++ [#c]

The TEN Framework uses \`ten_gn\`, a build system based on Google's GN, to compile C++ applications and extensions.

### Build parameters [#build-parameters]

When building C++ projects, specify the following parameters:

* **Platform**: \`linux\`, \`mac\`, \`win\`
* **Architecture**: \`x86\`, \`x64\`, \`arm\`, \`arm64\`
* **Build type**: \`debug\`, \`release\`

### Build applications [#build-applications]

To build a C++ application, run the following commands in the project root directory:

\`\`\`bash
ten_gn gen <os> <arch> <build_type>
ten_gn build <os> <arch> <build_type>
\`\`\`

### Build addons [#build-addons]

You can build C++ addons such as extensions, extension groups, and protocols using the same process as applications:

\`\`\`bash
ten_gn gen <os> <arch> <build_type>
ten_gn build <os> <arch> <build_type>
\`\`\`

## Go [#go]

The TEN Framework uses standard Go commands with TEN-specific build scripts for Go projects.

### Build applications [#build-applications-1]

To build a Go application, run this command in the project root directory:

\`\`\`bash
go run ten_packages/system/ten_runtime_go/tools/build/main.go
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The TEN Framework provides language-specific build systems to compile applications and addons including extensions, extension groups, and protocols. TEN uses build processes that vary by language but follow consistent patterns for each platform and architecture combination. This guide covers how to build TEN projects using the appropriate build tools for each supported language."
  }, {
    heading: "c",
    content: "The TEN Framework uses `ten_gn`, a build system based on Google's GN, to compile C++ applications and extensions."
  }, {
    heading: "build-parameters",
    content: "When building C++ projects, specify the following parameters:"
  }, {
    heading: "build-parameters",
    content: "**Platform**: `linux`, `mac`, `win`"
  }, {
    heading: "build-parameters",
    content: "**Architecture**: `x86`, `x64`, `arm`, `arm64`"
  }, {
    heading: "build-parameters",
    content: "**Build type**: `debug`, `release`"
  }, {
    heading: "build-applications",
    content: "To build a C++ application, run the following commands in the project root directory:"
  }, {
    heading: "build-addons",
    content: "You can build C++ addons such as extensions, extension groups, and protocols using the same process as applications:"
  }, {
    heading: "go",
    content: "The TEN Framework uses standard Go commands with TEN-specific build scripts for Go projects."
  }, {
    heading: "build-applications-1",
    content: "To build a Go application, run this command in the project root directory:"
  }],
  headings: [{
    id: "c",
    content: "C++"
  }, {
    id: "build-parameters",
    content: "Build parameters"
  }, {
    id: "build-applications",
    content: "Build applications"
  }, {
    id: "build-addons",
    content: "Build addons"
  }, {
    id: "go",
    content: "Go"
  }, {
    id: "build-applications-1",
    content: "Build applications"
  }]
};
export let toc = [{
  depth: 2,
  url: "#c",
  title: _jsx(_Fragment, {
    children: "C++"
  })
}, {
  depth: 3,
  url: "#build-parameters",
  title: _jsx(_Fragment, {
    children: "Build parameters"
  })
}, {
  depth: 3,
  url: "#build-applications",
  title: _jsx(_Fragment, {
    children: "Build applications"
  })
}, {
  depth: 3,
  url: "#build-addons",
  title: _jsx(_Fragment, {
    children: "Build addons"
  })
}, {
  depth: 2,
  url: "#go",
  title: _jsx(_Fragment, {
    children: "Go"
  })
}, {
  depth: 3,
  url: "#build-applications-1",
  title: _jsx(_Fragment, {
    children: "Build applications"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The TEN Framework provides language-specific build systems to compile applications and addons including extensions, extension groups, and protocols. TEN uses build processes that vary by language but follow consistent patterns for each platform and architecture combination. This guide covers how to build TEN projects using the appropriate build tools for each supported language."
    }), `
`, _jsx(_components.h2, {
      id: "c",
      children: "C++"
    }), `
`, _jsxs(_components.p, {
      children: ["The TEN Framework uses ", _jsx(_components.code, {
        children: "ten_gn"
      }), ", a build system based on Google's GN, to compile C++ applications and extensions."]
    }), `
`, _jsx(_components.h3, {
      id: "build-parameters",
      children: "Build parameters"
    }), `
`, _jsx(_components.p, {
      children: "When building C++ projects, specify the following parameters:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Platform"
        }), ": ", _jsx(_components.code, {
          children: "linux"
        }), ", ", _jsx(_components.code, {
          children: "mac"
        }), ", ", _jsx(_components.code, {
          children: "win"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Architecture"
        }), ": ", _jsx(_components.code, {
          children: "x86"
        }), ", ", _jsx(_components.code, {
          children: "x64"
        }), ", ", _jsx(_components.code, {
          children: "arm"
        }), ", ", _jsx(_components.code, {
          children: "arm64"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Build type"
        }), ": ", _jsx(_components.code, {
          children: "debug"
        }), ", ", _jsx(_components.code, {
          children: "release"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "build-applications",
      children: "Build applications"
    }), `
`, _jsx(_components.p, {
      children: "To build a C++ application, run the following commands in the project root directory:"
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
              children: "ten_gn"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " gen"
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
              children: "o"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "s"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
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
              children: "arc"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "build_typ"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "e"
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
              children: "ten_gn"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " build"
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
              children: "o"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "s"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
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
              children: "arc"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "build_typ"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "e"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "build-addons",
      children: "Build addons"
    }), `
`, _jsx(_components.p, {
      children: "You can build C++ addons such as extensions, extension groups, and protocols using the same process as applications:"
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
              children: "ten_gn"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " gen"
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
              children: "o"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "s"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
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
              children: "arc"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "build_typ"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "e"
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
              children: "ten_gn"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " build"
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
              children: "o"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "s"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
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
              children: "arc"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "build_typ"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "e"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "go",
      children: "Go"
    }), `
`, _jsx(_components.p, {
      children: "The TEN Framework uses standard Go commands with TEN-specific build scripts for Go projects."
    }), `
`, _jsx(_components.h3, {
      id: "build-applications-1",
      children: "Build applications"
    }), `
`, _jsx(_components.p, {
      children: "To build a Go application, run this command in the project root directory:"
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
              children: " ten_packages/system/ten_runtime_go/tools/build/main.go"
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
