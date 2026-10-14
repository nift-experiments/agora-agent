import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Troubleshooting",
  description: "Troubleshooting"
};
export let _markdown = '\n\nTo troubleshoot issues you encounter during development, take the following steps:\n\n## Enable local logging [#enable-local-logging]\n\nIn the development or testing phase, you may need the SDK to output more detailed information to help locate and fix issues. Enable log output and set the log level by setting `RtmConfig` to `RtmLogConfig` when initializing the Signaling client instance. The SDK outputs the log information in the browser console.\n\n```java\nRtmConfig rtmConfig = new RtmConfig();\n\nrtmConfig.userId = "your_userid";\nrtmConfig.appId = "your_appid";\n\nRtmLogConfig logConfig = new RtmLogConfig();\nlogConfig.level = RtmLogLevel.INFO;\nlogConfig.filePath = "your_path";\nlogConfig.fileSizeInKB = 10*1024;\n\nrtmConfig.logConfig = logConfig;\n```\n\nYou can set the `logLevel` to `INFO`, `WARN`, `ERROR`, `FATAL`, or `NONE`. The `INFO` level outputs the most detailed log information, while `NONE` does not output any log information.\n\n<CalloutContainer type="info">\n  <CalloutDescription>\n    When your application goes live, set the log information level to `INFO`.\n  </CalloutDescription>\n</CalloutContainer>\n\n## Error codes reference table [#error-codes-reference-table]\n\nWhen calling the RTM Java API, if an error occurs, the SDK will execute the `onFailure` method and return an `errorInfo` of type `ErrorInfo`:\n\n|   Property  |      Type      | Description                        |\n| :---------: | :------------: | ---------------------------------- |\n| `errorCode` | `RtmErrorCode` | The error code for this operation. |\n|   `reason`  |     String     | The reason for the error.          |\n| `operation` |     String     | The type of operation.             |\n\nThe `errorCode` and `reason` properties report the error code and description, respectively. Refer to the [error codes table](/en/realtime-media/rtm/reference/error-codes) to get more information about the error.\n\n## Contact Us [#contact-us]\n\nIf the above measures do not resolve your issue or if you need support with solutions, please contact [support@agora.io](mailto\\:support@agora.io).\n';
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To troubleshoot issues you encounter during development, take the following steps:"
  }, {
    heading: "enable-local-logging",
    content: "In the development or testing phase, you may need the SDK to output more detailed information to help locate and fix issues. Enable log output and set the log level by setting `RtmConfig` to `RtmLogConfig` when initializing the Signaling client instance. The SDK outputs the log information in the browser console."
  }, {
    heading: "enable-local-logging",
    content: "You can set the `logLevel` to `INFO`, `WARN`, `ERROR`, `FATAL`, or `NONE`. The `INFO` level outputs the most detailed log information, while `NONE` does not output any log information."
  }, {
    heading: "enable-local-logging",
    content: "When your application goes live, set the log information level to `INFO`."
  }, {
    heading: "error-codes-reference-table",
    content: "When calling the RTM Java API, if an error occurs, the SDK will execute the `onFailure` method and return an `errorInfo` of type `ErrorInfo`:"
  }, {
    heading: "error-codes-reference-table",
    content: "Property"
  }, {
    heading: "error-codes-reference-table",
    content: "Type"
  }, {
    heading: "error-codes-reference-table",
    content: "Description"
  }, {
    heading: "error-codes-reference-table",
    content: "`errorCode`"
  }, {
    heading: "error-codes-reference-table",
    content: "`RtmErrorCode`"
  }, {
    heading: "error-codes-reference-table",
    content: "The error code for this operation."
  }, {
    heading: "error-codes-reference-table",
    content: "`reason`"
  }, {
    heading: "error-codes-reference-table",
    content: "String"
  }, {
    heading: "error-codes-reference-table",
    content: "The reason for the error."
  }, {
    heading: "error-codes-reference-table",
    content: "`operation`"
  }, {
    heading: "error-codes-reference-table",
    content: "String"
  }, {
    heading: "error-codes-reference-table",
    content: "The type of operation."
  }, {
    heading: "error-codes-reference-table",
    content: "The `errorCode` and `reason` properties report the error code and description, respectively. Refer to the error codes table to get more information about the error."
  }, {
    heading: "contact-us",
    content: "If the above measures do not resolve your issue or if you need support with solutions, please contact support\\@agora.io."
  }],
  headings: [{
    id: "enable-local-logging",
    content: "Enable local logging"
  }, {
    id: "error-codes-reference-table",
    content: "Error codes reference table"
  }, {
    id: "contact-us",
    content: "Contact Us"
  }]
};
export let toc = [{
  depth: 2,
  url: "#enable-local-logging",
  title: _jsx(_Fragment, {
    children: "Enable local logging"
  })
}, {
  depth: 2,
  url: "#error-codes-reference-table",
  title: _jsx(_Fragment, {
    children: "Error codes reference table"
  })
}, {
  depth: 2,
  url: "#contact-us",
  title: _jsx(_Fragment, {
    children: "Contact Us"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "To troubleshoot issues you encounter during development, take the following steps:"
    }), `
`, _jsx(_components.h2, {
      id: "enable-local-logging",
      children: "Enable local logging"
    }), `
`, _jsxs(_components.p, {
      children: ["In the development or testing phase, you may need the SDK to output more detailed information to help locate and fix issues. Enable log output and set the log level by setting ", _jsx(_components.code, {
        children: "RtmConfig"
      }), " to ", _jsx(_components.code, {
        children: "RtmLogConfig"
      }), " when initializing the Signaling client instance. The SDK outputs the log information in the browser console."]
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
              children: "RtmConfig rtmConfig "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " RtmConfig"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "rtmConfig.userId "
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
              children: ' "your_userid"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "rtmConfig.appId "
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
              children: ' "your_appid"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "RtmLogConfig logConfig "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " new"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " RtmLogConfig"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "logConfig.level "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " RtmLogLevel.INFO;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "logConfig.filePath "
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
              children: ' "your_path"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "logConfig.fileSizeInKB "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 10"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1024"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "rtmConfig.logConfig "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " logConfig;"
            })]
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["You can set the ", _jsx(_components.code, {
        children: "logLevel"
      }), " to ", _jsx(_components.code, {
        children: "INFO"
      }), ", ", _jsx(_components.code, {
        children: "WARN"
      }), ", ", _jsx(_components.code, {
        children: "ERROR"
      }), ", ", _jsx(_components.code, {
        children: "FATAL"
      }), ", or ", _jsx(_components.code, {
        children: "NONE"
      }), ". The ", _jsx(_components.code, {
        children: "INFO"
      }), " level outputs the most detailed log information, while ", _jsx(_components.code, {
        children: "NONE"
      }), " does not output any log information."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["When your application goes live, set the log information level to ", _jsx(_components.code, {
            children: "INFO"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "error-codes-reference-table",
      children: "Error codes reference table"
    }), `
`, _jsxs(_components.p, {
      children: ["When calling the RTM Java API, if an error occurs, the SDK will execute the ", _jsx(_components.code, {
        children: "onFailure"
      }), " method and return an ", _jsx(_components.code, {
        children: "errorInfo"
      }), " of type ", _jsx(_components.code, {
        children: "ErrorInfo"
      }), ":"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Property"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "errorCode"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "RtmErrorCode"
            })
          }), _jsx(_components.td, {
            children: "The error code for this operation."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "reason"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "String"
          }), _jsx(_components.td, {
            children: "The reason for the error."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "operation"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "String"
          }), _jsx(_components.td, {
            children: "The type of operation."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "errorCode"
      }), " and ", _jsx(_components.code, {
        children: "reason"
      }), " properties report the error code and description, respectively. Refer to the ", _jsx(_components.a, {
        href: "/en/realtime-media/rtm/reference/error-codes",
        children: "error codes table"
      }), " to get more information about the error."]
    }), `
`, _jsx(_components.h2, {
      id: "contact-us",
      children: "Contact Us"
    }), `
`, _jsxs(_components.p, {
      children: ["If the above measures do not resolve your issue or if you need support with solutions, please contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
