import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How to specify a dynamic storage path?"
};
export let _markdown = "\n\nWhen configuring the recording file storage path in the Console through the `fileNamePrefix` field,\nyou can use built-in variables to specify a dynamic path for storing recording files.\nWhen the recording starts, variables are replaced with real values. The following two types of variables are currently supported:\n\n| Type           | Variable                                            | Description                                                                                         |\n| -------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------- |\n| Fixed variable | `${appId}`                                          | App ID                                                                                              |\n|                | `${roomUuid}`                                       | The `uuid` of the class to be recorded                                                              |\n| Date variable  | `${yyyy}`                                           | Year                                                                                                |\n|                | `${MM}`                                             | Month                                                                                               |\n|                | `${dd}`                                             | Day                                                                                                 |\n|                | `${yyyyMMdd}`, `${yyyyMM}`, `${yyyy-dd}`,`${MM_dd}` | Date variables can be combined, such as year-month-day, year-month, year-day, month-day, and so on. |\n\nFor example, you set the `fileNamePrefix` field as follows:\n\n```json\n\"fileNamePrefix\": [\n  \"scenario\",\n  \"recording\",\n  \"${appId}\",\n  \"${yyyyMM}\",\n  \"${roomUuid}\"\n]\n```\n\nThe recording storage path is `/scenario/recording/xxxxxxxxx/202107/demo/xxxxxxx_demo_0.mp4`.\n";
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When configuring the recording file storage path in the Console through the `fileNamePrefix` field,\nyou can use built-in variables to specify a dynamic path for storing recording files.\nWhen the recording starts, variables are replaced with real values. The following two types of variables are currently supported:"
  }, {
    heading: undefined,
    content: "Type"
  }, {
    heading: undefined,
    content: "Variable"
  }, {
    heading: undefined,
    content: "Description"
  }, {
    heading: undefined,
    content: "Fixed variable"
  }, {
    heading: undefined,
    content: "`${appId}`"
  }, {
    heading: undefined,
    content: "App ID"
  }, {
    heading: undefined,
    content: "`${roomUuid}`"
  }, {
    heading: undefined,
    content: "The `uuid` of the class to be recorded"
  }, {
    heading: undefined,
    content: "Date variable"
  }, {
    heading: undefined,
    content: "`${yyyy}`"
  }, {
    heading: undefined,
    content: "Year"
  }, {
    heading: undefined,
    content: "`${MM}`"
  }, {
    heading: undefined,
    content: "Month"
  }, {
    heading: undefined,
    content: "`${dd}`"
  }, {
    heading: undefined,
    content: "Day"
  }, {
    heading: undefined,
    content: "`${yyyyMMdd}`, `${yyyyMM}`, `${yyyy-dd}`,`${MM_dd}`"
  }, {
    heading: undefined,
    content: "Date variables can be combined, such as year-month-day, year-month, year-day, month-day, and so on."
  }, {
    heading: undefined,
    content: "For example, you set the `fileNamePrefix` field as follows:"
  }, {
    heading: undefined,
    content: "The recording storage path is `/scenario/recording/xxxxxxxxx/202107/demo/xxxxxxx_demo_0.mp4`."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
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
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["When configuring the recording file storage path in the Console through the ", _jsx(_components.code, {
        children: "fileNamePrefix"
      }), ` field,
you can use built-in variables to specify a dynamic path for storing recording files.
When the recording starts, variables are replaced with real values. The following two types of variables are currently supported:`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Variable"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Fixed variable"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "${appId}"
            })
          }), _jsx(_components.td, {
            children: "App ID"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {}), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "${roomUuid}"
            })
          }), _jsxs(_components.td, {
            children: ["The ", _jsx(_components.code, {
              children: "uuid"
            }), " of the class to be recorded"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Date variable"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "${yyyy}"
            })
          }), _jsx(_components.td, {
            children: "Year"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {}), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "${MM}"
            })
          }), _jsx(_components.td, {
            children: "Month"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {}), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "${dd}"
            })
          }), _jsx(_components.td, {
            children: "Day"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {}), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "${yyyyMMdd}"
            }), ", ", _jsx(_components.code, {
              children: "${yyyyMM}"
            }), ", ", _jsx(_components.code, {
              children: "${yyyy-dd}"
            }), ",", _jsx(_components.code, {
              children: "${MM_dd}"
            })]
          }), _jsx(_components.td, {
            children: "Date variables can be combined, such as year-month-day, year-month, year-day, month-day, and so on."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For example, you set the ", _jsx(_components.code, {
        children: "fileNamePrefix"
      }), " field as follows:"]
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"fileNamePrefix"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "scenario"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "recording"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "${appId}"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "${yyyyMM}"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "${roomUuid}"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The recording storage path is ", _jsx(_components.code, {
        children: "/scenario/recording/xxxxxxxxx/202107/demo/xxxxxxx_demo_0.mp4"
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
