import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Integration guide for your extension",
  description: "Write the guide used by developers to incorporate your extension into their app."
};
export let _markdown = `

Implementation guides are the documentation you provide to guide users through the implementation of your extension in Agora projects. In the [Extensions Marketplace](https://www.agora.io/en/agora-extensions-marketplace/), your extension has a detail page that contains a link to your implementation guides. The link leads users to the latest version of your documentation.

Your implementation guides must contain the following:

* Quickstart: A step-by-step procedure that explains how to integrate and use your extension in an Agora project.
* API reference: A detailed description of the APIs that users use to customize your extension.

To build your extension documentation, you do not have to start from scratch. This page shows how to use the template provided by Agora to write, output HTML for local testing using [Sphinx](https://www.sphinx-doc.org/en/master/), and host your documentation on a web server using [Read the Docs](https://docs.readthedocs.io/en/stable/index.html).

## Prerequisites [#prerequisites]

To follow the procedure on this page, you must have:

* Python 3.7 or later, with \`pip\` installed.
* A code editing tool, such as Visual Studio Code.
* A GitHub, BitBucket, or GitLab account, which is used to create a public repository to host your documentation.

## Use the template to write [#use-the-template-to-write]

To use the template to write your documentation, take the following steps:

1. Unzip the [extension documentation template](https://web-cdn.agora.io/docs-files/1631696989677) to a local folder.
2. In your code editing tool, open the \`_content\` folder and edit the following files:
   * \`quickstart.md\`: Explain how to integrate the features of your extension step by step. Use the template instructions as a reference.
   * \`api-reference.md\`: Provide detailed description of the APIs related to using your extension. Use the template instructions as a reference.
   * \`index.md\`: Provide your documentation repository URL and write a welcome page.

## Output HTML for local testing [#output-html-for-local-testing]

Before making your documentation publicly accessible, the best practice is to view and test it locally. This section describes how to generate an HTML output for your documentation using configurations in the template.

### Set up the build environment [#set-up-the-build-environment]

The template is configured to generate styled HTML from source files written in Markdown. To generate HTML output that is customized for your extension, take the following steps:

1. In \`_content/conf.py\`, make the following changes:
   * Fill in the \`project\`,\` copyright\`, \`author, and github_doc_root \`fields to add your project information.
   * Replace \`html_logo\` and \`html_favicon\` with your logo and icon. You can either put the source image in the \`_static\` folder or insert the URL to the image.
   * Change \`html_title\` to the title of your documentation.

2. In Terminal, run the following command line to install Sphinx:
   \`\`\`bash
     pip install sphinx
   \`\`\`

3. In Terminal, run the following command line to install the packages for Markdown support:
   \`\`\`bash
     pip install myst-parser
   \`\`\`

4. In Terminal, run the following command line to install the HTML theme:
   \`\`\`bash
     pip install furo
   \`\`\`

### Output HTML locally [#output-html-locally]

To generate an HTML output for local testing, take the following steps:

1. In Terminal, change the directory to the \`_content\` folder and run the following command line:

   \`\`\`bash
     make html
   \`\`\`

   If everything goes well, you see something like this:

   \`build succeeded, 1 warning.\`

2. In your browser, open \`_content/__build/html/index.html\` to see the welcome page of your documentation. In the left navigation panel, click **Quickstart** or **API Reference** to review your work.

3. To change the content on the HTML pages, edit the corresponding source file and save your edits. Then run \`make html\` again to review your change.

4. Repeat the previous step until you think your HTML pages are ready to be published.

## Publish your documentation [#publish-your-documentation]

To make your documentation publicly accessible through a URL, take the following steps:

1. Create a public repository for your documentation folder (\`extension-doc-template\` if you have not renamed it).
2. [Import and build your documentation](https://docs.readthedocs.io/en/stable/intro/import-guide.html) using Read the Docs, which assigns a URL for your documentation.
3. If you need to update your documentation, edit the source files and push the commit to your repository. The update is automatically published in your documentation.

To ensure that users always get up-to-date content about your extension, provide your documentation URL to Agora before officially publishing your extension in the Gallery. For details, see [Publish Your Extension](./publish-extension).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Implementation guides are the documentation you provide to guide users through the implementation of your extension in Agora projects. In the Extensions Marketplace, your extension has a detail page that contains a link to your implementation guides. The link leads users to the latest version of your documentation."
  }, {
    heading: undefined,
    content: "Your implementation guides must contain the following:"
  }, {
    heading: undefined,
    content: "Quickstart: A step-by-step procedure that explains how to integrate and use your extension in an Agora project."
  }, {
    heading: undefined,
    content: "API reference: A detailed description of the APIs that users use to customize your extension."
  }, {
    heading: undefined,
    content: "To build your extension documentation, you do not have to start from scratch. This page shows how to use the template provided by Agora to write, output HTML for local testing using Sphinx, and host your documentation on a web server using Read the Docs."
  }, {
    heading: "prerequisites",
    content: "To follow the procedure on this page, you must have:"
  }, {
    heading: "prerequisites",
    content: "Python 3.7 or later, with `pip` installed."
  }, {
    heading: "prerequisites",
    content: "A code editing tool, such as Visual Studio Code."
  }, {
    heading: "prerequisites",
    content: "A GitHub, BitBucket, or GitLab account, which is used to create a public repository to host your documentation."
  }, {
    heading: "use-the-template-to-write",
    content: "To use the template to write your documentation, take the following steps:"
  }, {
    heading: "use-the-template-to-write",
    content: "Unzip the extension documentation template to a local folder."
  }, {
    heading: "use-the-template-to-write",
    content: "In your code editing tool, open the `_content` folder and edit the following files:"
  }, {
    heading: "use-the-template-to-write",
    content: "`quickstart.md`: Explain how to integrate the features of your extension step by step. Use the template instructions as a reference."
  }, {
    heading: "use-the-template-to-write",
    content: "`api-reference.md`: Provide detailed description of the APIs related to using your extension. Use the template instructions as a reference."
  }, {
    heading: "use-the-template-to-write",
    content: "`index.md`: Provide your documentation repository URL and write a welcome page."
  }, {
    heading: "output-html-for-local-testing",
    content: "Before making your documentation publicly accessible, the best practice is to view and test it locally. This section describes how to generate an HTML output for your documentation using configurations in the template."
  }, {
    heading: "set-up-the-build-environment",
    content: "The template is configured to generate styled HTML from source files written in Markdown. To generate HTML output that is customized for your extension, take the following steps:"
  }, {
    heading: "set-up-the-build-environment",
    content: "In `_content/conf.py`, make the following changes:"
  }, {
    heading: "set-up-the-build-environment",
    content: "Fill in the `project`,` copyright`, `author, and github_doc_root `fields to add your project information."
  }, {
    heading: "set-up-the-build-environment",
    content: "Replace `html_logo` and `html_favicon` with your logo and icon. You can either put the source image in the `_static` folder or insert the URL to the image."
  }, {
    heading: "set-up-the-build-environment",
    content: "Change `html_title` to the title of your documentation."
  }, {
    heading: "set-up-the-build-environment",
    content: "In Terminal, run the following command line to install Sphinx:"
  }, {
    heading: "set-up-the-build-environment",
    content: "In Terminal, run the following command line to install the packages for Markdown support:"
  }, {
    heading: "set-up-the-build-environment",
    content: "In Terminal, run the following command line to install the HTML theme:"
  }, {
    heading: "output-html-locally",
    content: "To generate an HTML output for local testing, take the following steps:"
  }, {
    heading: "output-html-locally",
    content: "In Terminal, change the directory to the `_content` folder and run the following command line:"
  }, {
    heading: "output-html-locally",
    content: "If everything goes well, you see something like this:"
  }, {
    heading: "output-html-locally",
    content: "`build succeeded, 1 warning.`"
  }, {
    heading: "output-html-locally",
    content: "In your browser, open `_content/__build/html/index.html` to see the welcome page of your documentation. In the left navigation panel, click **Quickstart** or **API Reference** to review your work."
  }, {
    heading: "output-html-locally",
    content: "To change the content on the HTML pages, edit the corresponding source file and save your edits. Then run `make html` again to review your change."
  }, {
    heading: "output-html-locally",
    content: "Repeat the previous step until you think your HTML pages are ready to be published."
  }, {
    heading: "publish-your-documentation",
    content: "To make your documentation publicly accessible through a URL, take the following steps:"
  }, {
    heading: "publish-your-documentation",
    content: "Create a public repository for your documentation folder (`extension-doc-template` if you have not renamed it)."
  }, {
    heading: "publish-your-documentation",
    content: "Import and build your documentation using Read the Docs, which assigns a URL for your documentation."
  }, {
    heading: "publish-your-documentation",
    content: "If you need to update your documentation, edit the source files and push the commit to your repository. The update is automatically published in your documentation."
  }, {
    heading: "publish-your-documentation",
    content: "To ensure that users always get up-to-date content about your extension, provide your documentation URL to Agora before officially publishing your extension in the Gallery. For details, see Publish Your Extension."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "use-the-template-to-write",
    content: "Use the template to write"
  }, {
    id: "output-html-for-local-testing",
    content: "Output HTML for local testing"
  }, {
    id: "set-up-the-build-environment",
    content: "Set up the build environment"
  }, {
    id: "output-html-locally",
    content: "Output HTML locally"
  }, {
    id: "publish-your-documentation",
    content: "Publish your documentation"
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
  url: "#use-the-template-to-write",
  title: _jsx(_Fragment, {
    children: "Use the template to write"
  })
}, {
  depth: 2,
  url: "#output-html-for-local-testing",
  title: _jsx(_Fragment, {
    children: "Output HTML for local testing"
  })
}, {
  depth: 3,
  url: "#set-up-the-build-environment",
  title: _jsx(_Fragment, {
    children: "Set up the build environment"
  })
}, {
  depth: 3,
  url: "#output-html-locally",
  title: _jsx(_Fragment, {
    children: "Output HTML locally"
  })
}, {
  depth: 2,
  url: "#publish-your-documentation",
  title: _jsx(_Fragment, {
    children: "Publish your documentation"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["Implementation guides are the documentation you provide to guide users through the implementation of your extension in Agora projects. In the ", _jsx(_components.a, {
        href: "https://www.agora.io/en/agora-extensions-marketplace/",
        children: "Extensions Marketplace"
      }), ", your extension has a detail page that contains a link to your implementation guides. The link leads users to the latest version of your documentation."]
    }), `
`, _jsx(_components.p, {
      children: "Your implementation guides must contain the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Quickstart: A step-by-step procedure that explains how to integrate and use your extension in an Agora project."
      }), `
`, _jsx(_components.li, {
        children: "API reference: A detailed description of the APIs that users use to customize your extension."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["To build your extension documentation, you do not have to start from scratch. This page shows how to use the template provided by Agora to write, output HTML for local testing using ", _jsx(_components.a, {
        href: "https://www.sphinx-doc.org/en/master/",
        children: "Sphinx"
      }), ", and host your documentation on a web server using ", _jsx(_components.a, {
        href: "https://docs.readthedocs.io/en/stable/index.html",
        children: "Read the Docs"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "To follow the procedure on this page, you must have:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Python 3.7 or later, with ", _jsx(_components.code, {
          children: "pip"
        }), " installed."]
      }), `
`, _jsx(_components.li, {
        children: "A code editing tool, such as Visual Studio Code."
      }), `
`, _jsx(_components.li, {
        children: "A GitHub, BitBucket, or GitLab account, which is used to create a public repository to host your documentation."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "use-the-template-to-write",
      children: "Use the template to write"
    }), `
`, _jsx(_components.p, {
      children: "To use the template to write your documentation, take the following steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Unzip the ", _jsx(_components.a, {
          href: "https://web-cdn.agora.io/docs-files/1631696989677",
          children: "extension documentation template"
        }), " to a local folder."]
      }), `
`, _jsxs(_components.li, {
        children: ["In your code editing tool, open the ", _jsx(_components.code, {
          children: "_content"
        }), " folder and edit the following files:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "quickstart.md"
            }), ": Explain how to integrate the features of your extension step by step. Use the template instructions as a reference."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "api-reference.md"
            }), ": Provide detailed description of the APIs related to using your extension. Use the template instructions as a reference."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "index.md"
            }), ": Provide your documentation repository URL and write a welcome page."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "output-html-for-local-testing",
      children: "Output HTML for local testing"
    }), `
`, _jsx(_components.p, {
      children: "Before making your documentation publicly accessible, the best practice is to view and test it locally. This section describes how to generate an HTML output for your documentation using configurations in the template."
    }), `
`, _jsx(_components.h3, {
      id: "set-up-the-build-environment",
      children: "Set up the build environment"
    }), `
`, _jsx(_components.p, {
      children: "The template is configured to generate styled HTML from source files written in Markdown. To generate HTML output that is customized for your extension, take the following steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In ", _jsx(_components.code, {
            children: "_content/conf.py"
          }), ", make the following changes:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Fill in the ", _jsx(_components.code, {
              children: "project"
            }), ",", _jsx(_components.code, {
              children: " copyright"
            }), ", ", _jsx(_components.code, {
              children: "author, and github_doc_root "
            }), "fields to add your project information."]
          }), `
`, _jsxs(_components.li, {
            children: ["Replace ", _jsx(_components.code, {
              children: "html_logo"
            }), " and ", _jsx(_components.code, {
              children: "html_favicon"
            }), " with your logo and icon. You can either put the source image in the ", _jsx(_components.code, {
              children: "_static"
            }), " folder or insert the URL to the image."]
          }), `
`, _jsxs(_components.li, {
            children: ["Change ", _jsx(_components.code, {
              children: "html_title"
            }), " to the title of your documentation."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "In Terminal, run the following command line to install Sphinx:"
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
                  children: "  pip"
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
                  children: " sphinx"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "In Terminal, run the following command line to install the packages for Markdown support:"
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
                  children: "  pip"
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
                  children: " myst-parser"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "In Terminal, run the following command line to install the HTML theme:"
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
                  children: "  pip"
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
                  children: " furo"
                })]
              })
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "output-html-locally",
      children: "Output HTML locally"
    }), `
`, _jsx(_components.p, {
      children: "To generate an HTML output for local testing, take the following steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In Terminal, change the directory to the ", _jsx(_components.code, {
            children: "_content"
          }), " folder and run the following command line:"]
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
                  children: "  make"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " html"
                })]
              })
            })
          })
        }), `
`, _jsx(_components.p, {
          children: "If everything goes well, you see something like this:"
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.code, {
            children: "build succeeded, 1 warning."
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In your browser, open ", _jsx(_components.code, {
            children: "_content/__build/html/index.html"
          }), " to see the welcome page of your documentation. In the left navigation panel, click ", _jsx(_components.strong, {
            children: "Quickstart"
          }), " or ", _jsx(_components.strong, {
            children: "API Reference"
          }), " to review your work."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To change the content on the HTML pages, edit the corresponding source file and save your edits. Then run ", _jsx(_components.code, {
            children: "make html"
          }), " again to review your change."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Repeat the previous step until you think your HTML pages are ready to be published."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "publish-your-documentation",
      children: "Publish your documentation"
    }), `
`, _jsx(_components.p, {
      children: "To make your documentation publicly accessible through a URL, take the following steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Create a public repository for your documentation folder (", _jsx(_components.code, {
          children: "extension-doc-template"
        }), " if you have not renamed it)."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://docs.readthedocs.io/en/stable/intro/import-guide.html",
          children: "Import and build your documentation"
        }), " using Read the Docs, which assigns a URL for your documentation."]
      }), `
`, _jsx(_components.li, {
        children: "If you need to update your documentation, edit the source files and push the commit to your repository. The update is automatically published in your documentation."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["To ensure that users always get up-to-date content about your extension, provide your documentation URL to Agora before officially publishing your extension in the Gallery. For details, see ", _jsx(_components.a, {
        href: "./publish-extension",
        children: "Publish Your Extension"
      }), "."]
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
