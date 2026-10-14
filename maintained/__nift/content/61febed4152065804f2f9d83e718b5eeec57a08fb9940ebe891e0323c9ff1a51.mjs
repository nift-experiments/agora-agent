import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Web page load timeout detection",
  description: "Call the specified interface to notify the browser that the web page has been loaded"
};
export let _markdown = `

## Introduction [#introduction]

During web page recording, poor network performance may cause the following issues:

* The web page takes a long time to load, and the load time is not fixed. It is impossible to know the time when the effective recording starts, and important content may be lost.
* The web page fails to load. Because there is no error reporting mechanism, the browser does not reload the page, resulting in page content inconsistent with expectations.

In order to solve these issues, the web page recording service supports **web page load timeout detection**. During the web page recording, you need to call the specified interface to notify the browser that the web page has been loaded to achieve the following functions:

* If the browser receives a notification that the web page is loaded before the timeout limit, the browser starts recording the web page.
* If the browser does not receive a notification that the web page is loaded before the timeout limit, the browser automatically reloads the web page and notify the developer in time as an event message. If the web page fails to load before the timeout limit for a second time, the recording service stops to avoid recording wrong content.

The Agora web page load timeout detection function can only ensure that page elements are loaded correctly. If you need more comprehensive protection for web page recording, please refer to [Best Practices in Integrating Web Page Recording](/en/realtime-media/cloud-recording/build/best-practices/webpage-best-practices).

## Implementation [#implementation]

You need to implement the web page load timeout detection function in two steps:

1. When calling the [\`start\`](/en/api-reference/api-ref/cloud-recording#start) method, set the web page load timeout limit through the \`readyTimeout\` parameter.
2. Judge for yourself whether the web page is loaded, and call the specified interface of the browser to notify the browser when the web page is loaded.
   * If the web page loads before the set timeout limit, call the specified interface of the browser to notify the browser that the web page has been loaded.
   * If the web page fails to load completely before the set timeout limit, the browser reloads the web page. The \`reason\` field received in the [\`web_recorder_reload\`](../../reference/rest-api-overview#73-web_recorder_reload) callback is \`page_load_timeout\`.
   * If the web page fails to load before the timeout limit for a second time, it means the web page has failed to load. The recording service stops. The \`code\` field received in the [\`web_recorder_stopped\`](../../reference/rest-api-overview#71-web_recorder_stopped-web_recorder_stopped) callback is \`4\`, and the \`message\` field is \`page_load_timeout\`.

### Set the web page load timeout limit [#set-the-web-page-load-timeout-limit]

You need to set the web page load timeout limit through the \`readyTimeout\` parameter when calling the [\`start\`](/en/api-reference/api-ref/cloud-recording#start) method. The parameter settings are as follows:

\`readyTimeout\`: (optional) Number, set the web page loading timeout limit, in seconds.The value range is \\[0,60].

* \`0\` or \`null\`, which means the web page loading status is not detected.
* An integer greater than or equal to 1, which sets the web page load timeout limit.

If you set \`readyTimeout\` to less than 0 or a non-integer, an error code \`2\` is received.

### Set the web page loading completion notification interface [#set-the-web-page-loading-completion-notification-interface]

You need to call the \`notifyReady()\` interface on the recording web page to notify the browser that the web page has been loaded successfully.

Sample code:

\`\`\`html
<script>
function notifyReady() {
    if (typeof window.navigator.notifyReady === 'function')
        window.navigator.notifyReady();
}
</script>
\`\`\`

If you record other URL pages, you need to set the \`notifyReady\` interface on the page to be recorded.

### API reference [#api-reference]

* [\`start\`](/en/api-reference/api-ref/cloud-recording#start)
* [\`web_recorder_started\`](../../reference/rest-api-overview#70-web_recorder_started-web_recorder_started)
* [\`web_recorder_reload\`](../../reference/rest-api-overview#73-web_recorder_reload)
`;
export let structuredData = {
  contents: [{
    heading: "introduction",
    content: "During web page recording, poor network performance may cause the following issues:"
  }, {
    heading: "introduction",
    content: "The web page takes a long time to load, and the load time is not fixed. It is impossible to know the time when the effective recording starts, and important content may be lost."
  }, {
    heading: "introduction",
    content: "The web page fails to load. Because there is no error reporting mechanism, the browser does not reload the page, resulting in page content inconsistent with expectations."
  }, {
    heading: "introduction",
    content: "In order to solve these issues, the web page recording service supports **web page load timeout detection**. During the web page recording, you need to call the specified interface to notify the browser that the web page has been loaded to achieve the following functions:"
  }, {
    heading: "introduction",
    content: "If the browser receives a notification that the web page is loaded before the timeout limit, the browser starts recording the web page."
  }, {
    heading: "introduction",
    content: "If the browser does not receive a notification that the web page is loaded before the timeout limit, the browser automatically reloads the web page and notify the developer in time as an event message. If the web page fails to load before the timeout limit for a second time, the recording service stops to avoid recording wrong content."
  }, {
    heading: "introduction",
    content: "The Agora web page load timeout detection function can only ensure that page elements are loaded correctly. If you need more comprehensive protection for web page recording, please refer to Best Practices in Integrating Web Page Recording."
  }, {
    heading: "implementation",
    content: "You need to implement the web page load timeout detection function in two steps:"
  }, {
    heading: "implementation",
    content: "When calling the `start` method, set the web page load timeout limit through the `readyTimeout` parameter."
  }, {
    heading: "implementation",
    content: "Judge for yourself whether the web page is loaded, and call the specified interface of the browser to notify the browser when the web page is loaded."
  }, {
    heading: "implementation",
    content: "If the web page loads before the set timeout limit, call the specified interface of the browser to notify the browser that the web page has been loaded."
  }, {
    heading: "implementation",
    content: "If the web page fails to load completely before the set timeout limit, the browser reloads the web page. The `reason` field received in the `web_recorder_reload` callback is `page_load_timeout`."
  }, {
    heading: "implementation",
    content: "If the web page fails to load before the timeout limit for a second time, it means the web page has failed to load. The recording service stops. The `code` field received in the `web_recorder_stopped` callback is `4`, and the `message` field is `page_load_timeout`."
  }, {
    heading: "set-the-web-page-load-timeout-limit",
    content: "You need to set the web page load timeout limit through the `readyTimeout` parameter when calling the `start` method. The parameter settings are as follows:"
  }, {
    heading: "set-the-web-page-load-timeout-limit",
    content: "`readyTimeout`: (optional) Number, set the web page loading timeout limit, in seconds.The value range is \\[0,60]."
  }, {
    heading: "set-the-web-page-load-timeout-limit",
    content: "`0` or `null`, which means the web page loading status is not detected."
  }, {
    heading: "set-the-web-page-load-timeout-limit",
    content: "An integer greater than or equal to 1, which sets the web page load timeout limit."
  }, {
    heading: "set-the-web-page-load-timeout-limit",
    content: "If you set `readyTimeout` to less than 0 or a non-integer, an error code `2` is received."
  }, {
    heading: "set-the-web-page-loading-completion-notification-interface",
    content: "You need to call the `notifyReady()` interface on the recording web page to notify the browser that the web page has been loaded successfully."
  }, {
    heading: "set-the-web-page-loading-completion-notification-interface",
    content: "Sample code:"
  }, {
    heading: "set-the-web-page-loading-completion-notification-interface",
    content: "If you record other URL pages, you need to set the `notifyReady` interface on the page to be recorded."
  }, {
    heading: "api-reference",
    content: "`start`"
  }, {
    heading: "api-reference",
    content: "`web_recorder_started`"
  }, {
    heading: "api-reference",
    content: "`web_recorder_reload`"
  }],
  headings: [{
    id: "introduction",
    content: "Introduction"
  }, {
    id: "implementation",
    content: "Implementation"
  }, {
    id: "set-the-web-page-load-timeout-limit",
    content: "Set the web page load timeout limit"
  }, {
    id: "set-the-web-page-loading-completion-notification-interface",
    content: "Set the web page loading completion notification interface"
  }, {
    id: "api-reference",
    content: "API reference"
  }]
};
export let toc = [{
  depth: 2,
  url: "#introduction",
  title: _jsx(_Fragment, {
    children: "Introduction"
  })
}, {
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#set-the-web-page-load-timeout-limit",
  title: _jsx(_Fragment, {
    children: "Set the web page load timeout limit"
  })
}, {
  depth: 3,
  url: "#set-the-web-page-loading-completion-notification-interface",
  title: _jsx(_Fragment, {
    children: "Set the web page loading completion notification interface"
  })
}, {
  depth: 3,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API reference"
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
    children: [_jsx(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), `
`, _jsx(_components.p, {
      children: "During web page recording, poor network performance may cause the following issues:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The web page takes a long time to load, and the load time is not fixed. It is impossible to know the time when the effective recording starts, and important content may be lost."
      }), `
`, _jsx(_components.li, {
        children: "The web page fails to load. Because there is no error reporting mechanism, the browser does not reload the page, resulting in page content inconsistent with expectations."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["In order to solve these issues, the web page recording service supports ", _jsx(_components.strong, {
        children: "web page load timeout detection"
      }), ". During the web page recording, you need to call the specified interface to notify the browser that the web page has been loaded to achieve the following functions:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If the browser receives a notification that the web page is loaded before the timeout limit, the browser starts recording the web page."
      }), `
`, _jsx(_components.li, {
        children: "If the browser does not receive a notification that the web page is loaded before the timeout limit, the browser automatically reloads the web page and notify the developer in time as an event message. If the web page fails to load before the timeout limit for a second time, the recording service stops to avoid recording wrong content."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The Agora web page load timeout detection function can only ensure that page elements are loaded correctly. If you need more comprehensive protection for web page recording, please refer to ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/best-practices/webpage-best-practices",
        children: "Best Practices in Integrating Web Page Recording"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsx(_components.p, {
      children: "You need to implement the web page load timeout detection function in two steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["When calling the ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/cloud-recording#start",
          children: _jsx(_components.code, {
            children: "start"
          })
        }), " method, set the web page load timeout limit through the ", _jsx(_components.code, {
          children: "readyTimeout"
        }), " parameter."]
      }), `
`, _jsxs(_components.li, {
        children: ["Judge for yourself whether the web page is loaded, and call the specified interface of the browser to notify the browser when the web page is loaded.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "If the web page loads before the set timeout limit, call the specified interface of the browser to notify the browser that the web page has been loaded."
          }), `
`, _jsxs(_components.li, {
            children: ["If the web page fails to load completely before the set timeout limit, the browser reloads the web page. The ", _jsx(_components.code, {
              children: "reason"
            }), " field received in the ", _jsx(_components.a, {
              href: "../../reference/rest-api-overview#73-web_recorder_reload",
              children: _jsx(_components.code, {
                children: "web_recorder_reload"
              })
            }), " callback is ", _jsx(_components.code, {
              children: "page_load_timeout"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["If the web page fails to load before the timeout limit for a second time, it means the web page has failed to load. The recording service stops. The ", _jsx(_components.code, {
              children: "code"
            }), " field received in the ", _jsx(_components.a, {
              href: "../../reference/rest-api-overview#71-web_recorder_stopped-web_recorder_stopped",
              children: _jsx(_components.code, {
                children: "web_recorder_stopped"
              })
            }), " callback is ", _jsx(_components.code, {
              children: "4"
            }), ", and the ", _jsx(_components.code, {
              children: "message"
            }), " field is ", _jsx(_components.code, {
              children: "page_load_timeout"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "set-the-web-page-load-timeout-limit",
      children: "Set the web page load timeout limit"
    }), `
`, _jsxs(_components.p, {
      children: ["You need to set the web page load timeout limit through the ", _jsx(_components.code, {
        children: "readyTimeout"
      }), " parameter when calling the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#start",
        children: _jsx(_components.code, {
          children: "start"
        })
      }), " method. The parameter settings are as follows:"]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "readyTimeout"
      }), ": (optional) Number, set the web page loading timeout limit, in seconds.The value range is [0,60]."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "0"
        }), " or ", _jsx(_components.code, {
          children: "null"
        }), ", which means the web page loading status is not detected."]
      }), `
`, _jsx(_components.li, {
        children: "An integer greater than or equal to 1, which sets the web page load timeout limit."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["If you set ", _jsx(_components.code, {
        children: "readyTimeout"
      }), " to less than 0 or a non-integer, an error code ", _jsx(_components.code, {
        children: "2"
      }), " is received."]
    }), `
`, _jsx(_components.h3, {
      id: "set-the-web-page-loading-completion-notification-interface",
      children: "Set the web page loading completion notification interface"
    }), `
`, _jsxs(_components.p, {
      children: ["You need to call the ", _jsx(_components.code, {
        children: "notifyReady()"
      }), " interface on the recording web page to notify the browser that the web page has been loaded successfully."]
    }), `
`, _jsx(_components.p, {
      children: "Sample code:"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " notifyReady"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    if"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "typeof"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " window.navigator.notifyReady "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'function'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        window.navigator."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "notifyReady"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "</"
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
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["If you record other URL pages, you need to set the ", _jsx(_components.code, {
        children: "notifyReady"
      }), " interface on the page to be recorded."]
    }), `
`, _jsx(_components.h3, {
      id: "api-reference",
      children: "API reference"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/cloud-recording#start",
          children: _jsx(_components.code, {
            children: "start"
          })
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../reference/rest-api-overview#70-web_recorder_started-web_recorder_started",
          children: _jsx(_components.code, {
            children: "web_recorder_started"
          })
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../reference/rest-api-overview#73-web_recorder_reload",
          children: _jsx(_components.code, {
            children: "web_recorder_reload"
          })
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
