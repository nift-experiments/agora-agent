import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why do errors occur when compiling the Agora Signaling Linux Java SDK?"
};
export let _markdown = `

## Problem [#problem]

The following error occurs when compiling the Agora Signaling Linux Java SDK in Linux:

\`\`\`bash
Exception in thread “main” java.lang.UnsatisfiedLinkError:no agora_rtm_sdk in java.library.path
\`\`\`

## Reason [#reason]

The \`agora_rtm_sdk\` library is not included in the environment variable.

## Solution [#solution]

You can use one of the following solutions to solve this problem. For either solution, you must replace \`&lt;path&gt;\` with the absolute path to the Signaling Linux Java SDK.

### Update environment variables [#update-environment-variables]

Add the following line to any file that configures Linux environment variables, such as \`~/.bashrc\`, \`~/bash_profile\`, or \`/etc/profile\`.

\`\`\`bash
export LD_LIBRARY_PATH=<path>/agora/rtm/sdk:$LD_LIBRARY_PATH
\`\`\`

### Update Java command line arguments [#update-java-command-line-arguments]

You can launch Java with the \`Djava.library.path\` argument to add the absolute path to the Signaling Linux Java SDK to the library path:

\`\`\`bash
java -Djava.library.path=<path>/agora/rtm/sdk
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: "problem",
    content: "The following error occurs when compiling the Agora Signaling Linux Java SDK in Linux:"
  }, {
    heading: "reason",
    content: "The `agora_rtm_sdk` library is not included in the environment variable."
  }, {
    heading: "solution",
    content: "You can use one of the following solutions to solve this problem. For either solution, you must replace `&lt;path&gt;` with the absolute path to the Signaling Linux Java SDK."
  }, {
    heading: "update-environment-variables",
    content: "Add the following line to any file that configures Linux environment variables, such as `~/.bashrc`, `~/bash_profile`, or `/etc/profile`."
  }, {
    heading: "update-java-command-line-arguments",
    content: "You can launch Java with the `Djava.library.path` argument to add the absolute path to the Signaling Linux Java SDK to the library path:"
  }],
  headings: [{
    id: "problem",
    content: "Problem"
  }, {
    id: "reason",
    content: "Reason"
  }, {
    id: "solution",
    content: "Solution"
  }, {
    id: "update-environment-variables",
    content: "Update environment variables"
  }, {
    id: "update-java-command-line-arguments",
    content: "Update Java command line arguments"
  }]
};
export let toc = [{
  depth: 2,
  url: "#problem",
  title: _jsx(_Fragment, {
    children: "Problem"
  })
}, {
  depth: 2,
  url: "#reason",
  title: _jsx(_Fragment, {
    children: "Reason"
  })
}, {
  depth: 2,
  url: "#solution",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}, {
  depth: 3,
  url: "#update-environment-variables",
  title: _jsx(_Fragment, {
    children: "Update environment variables"
  })
}, {
  depth: 3,
  url: "#update-java-command-line-arguments",
  title: _jsx(_Fragment, {
    children: "Update Java command line arguments"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "problem",
      children: "Problem"
    }), `
`, _jsx(_components.p, {
      children: "The following error occurs when compiling the Agora Signaling Linux Java SDK in Linux:"
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
              children: "Exception"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " in"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " thread"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " “main”"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " java.lang.UnsatisfiedLinkError:no"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " agora_rtm_sdk"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " in"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " java.library.path"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "reason",
      children: "Reason"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "agora_rtm_sdk"
      }), " library is not included in the environment variable."]
    }), `
`, _jsx(_components.h2, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsxs(_components.p, {
      children: ["You can use one of the following solutions to solve this problem. For either solution, you must replace ", _jsx(_components.code, {
        children: "&lt;path&gt;"
      }), " with the absolute path to the Signaling Linux Java SDK."]
    }), `
`, _jsx(_components.h3, {
      id: "update-environment-variables",
      children: "Update environment variables"
    }), `
`, _jsxs(_components.p, {
      children: ["Add the following line to any file that configures Linux environment variables, such as ", _jsx(_components.code, {
        children: "~/.bashrc"
      }), ", ", _jsx(_components.code, {
        children: "~/bash_profile"
      }), ", or ", _jsx(_components.code, {
        children: "/etc/profile"
      }), "."]
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " LD_LIBRARY_PATH"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "=<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "path"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "/agora/rtm/sdk:$LD_LIBRARY_PATH"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "update-java-command-line-arguments",
      children: "Update Java command line arguments"
    }), `
`, _jsxs(_components.p, {
      children: ["You can launch Java with the ", _jsx(_components.code, {
        children: "Djava.library.path"
      }), " argument to add the absolute path to the Signaling Linux Java SDK to the library path:"]
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
              children: "java"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -Djava.library.path="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "path"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "/agora/rtm/sdk"
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
