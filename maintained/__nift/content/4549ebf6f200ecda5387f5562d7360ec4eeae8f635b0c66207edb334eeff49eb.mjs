import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "What should I do if a class recording fails?"
};
export let _markdown = '\n\n1. Check whether the recording-related configurations are correct:\n\n   * `recordingConfig`: If not set, the default configuration is used.\n   * `storageConfig`: `vendor`, `region`, and `endpoint` fields are correct and match. For example, if a third-party cloud storage area you use is Shanghai, the application server that initiates the request must also be located in Shanghai. Refer to the following example:\n\n     ```json\n     "vendor": 2,\n     "region": 1, //CN_Shanghai\n     endpoint:https://agora-recording.oss-cn-shanghai.aliyuncs.com\n     ```\n\n2. If the above configurations are correct and the recording still fails, check whether the public read permission of the third-party cloud storage account you are using is enabled.\n\n3. If the recording configuration is correct and the public read permission is granted, but the recording still fails, debug the specific cause of the error in the local browser by splicing the URL:\n\n   1. Obtain the URL1 value of the passed in recording page URL from the `recordUrl` parameter of `LaunchOption`.\n   2. Call the [RESTful API](/en/api-reference/api-ref/flexible-classroom/classroom-rest-api#get-the-recording-list) to get the recording list and get URL2 from `webRecordUrlQuery`.\n   3. Splice URL1 and URL2 to get the complete URL of the recording page, which can be accessed locally through a browser for debugging.\n\nIf the recording page opens, the recording is enabled successfully. If the page does not open, you can find the reason in the error report.\n';
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Check whether the recording-related configurations are correct:"
  }, {
    heading: undefined,
    content: "`recordingConfig`: If not set, the default configuration is used."
  }, {
    heading: undefined,
    content: "`storageConfig`: `vendor`, `region`, and `endpoint` fields are correct and match. For example, if a third-party cloud storage area you use is Shanghai, the application server that initiates the request must also be located in Shanghai. Refer to the following example:"
  }, {
    heading: undefined,
    content: "If the above configurations are correct and the recording still fails, check whether the public read permission of the third-party cloud storage account you are using is enabled."
  }, {
    heading: undefined,
    content: "If the recording configuration is correct and the public read permission is granted, but the recording still fails, debug the specific cause of the error in the local browser by splicing the URL:"
  }, {
    heading: undefined,
    content: "Obtain the URL1 value of the passed in recording page URL from the `recordUrl` parameter of `LaunchOption`."
  }, {
    heading: undefined,
    content: "Call the RESTful API to get the recording list and get URL2 from `webRecordUrlQuery`."
  }, {
    heading: undefined,
    content: "Splice URL1 and URL2 to get the complete URL of the recording page, which can be accessed locally through a browser for debugging."
  }, {
    heading: undefined,
    content: "If the recording page opens, the recording is enabled successfully. If the page does not open, you can find the reason in the error report."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Check whether the recording-related configurations are correct:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "recordingConfig"
              }), ": If not set, the default configuration is used."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "storageConfig"
              }), ": ", _jsx(_components.code, {
                children: "vendor"
              }), ", ", _jsx(_components.code, {
                children: "region"
              }), ", and ", _jsx(_components.code, {
                children: "endpoint"
              }), " fields are correct and match. For example, if a third-party cloud storage area you use is Shanghai, the application server that initiates the request must also be located in Shanghai. Refer to the following example:"]
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
                      children: '"vendor"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "2"
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
                      children: '"region"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "1"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "//CN_Shanghai"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "endpoint:https:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "//agora-recording.oss-cn-shanghai.aliyuncs.com"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If the above configurations are correct and the recording still fails, check whether the public read permission of the third-party cloud storage account you are using is enabled."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If the recording configuration is correct and the public read permission is granted, but the recording still fails, debug the specific cause of the error in the local browser by splicing the URL:"
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Obtain the URL1 value of the passed in recording page URL from the ", _jsx(_components.code, {
              children: "recordUrl"
            }), " parameter of ", _jsx(_components.code, {
              children: "LaunchOption"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["Call the ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api#get-the-recording-list",
              children: "RESTful API"
            }), " to get the recording list and get URL2 from ", _jsx(_components.code, {
              children: "webRecordUrlQuery"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "Splice URL1 and URL2 to get the complete URL of the recording page, which can be accessed locally through a browser for debugging."
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "If the recording page opens, the recording is enabled successfully. If the page does not open, you can find the reason in the error report."
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
