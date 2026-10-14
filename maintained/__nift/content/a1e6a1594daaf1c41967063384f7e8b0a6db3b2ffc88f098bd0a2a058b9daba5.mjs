import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "What should I do if the class recording fails?"
};
export let _markdown = `

If recording fails, take the following steps to troubleshoot the problem:

1. Refer to [Configure classroom storage and recording](/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/enable-flexible-classroom#cloud-recording) to check whether the recording-related configuration is correct, including:

   * If \`recordingConfig\` is not set, the default configuration is used.
   * If \`storageConfig\` is configured correctly, especially the vendor, region, and endpoint fields are correct and match. For example, if the third-party cloud storage service you use is located in Shanghai, then the application server where you initiate the request must also be located in Shanghai.

   \`\`\`bash
   "vendor": 2,
   "region": 1, //CN_Shanghai
   endpoint:https://agora-recording.oss-cn-shanghai.aliyuncs.com
   \`\`\`

2. If the above configurations are correct but recording still fails, check whether the public read permission of the third-party cloud storage account you are using is enabled.

3. If the recording configuration is correct and public read permission is enabled, but the recording still fails, debug the specific error cause in the local browser by concatenating the recorded URL of the page:

   1. Get the value of \`recordUrl\` passed in as a parameter in the Web-side \`LaunchOption\` call.

      ![recordUrl](https://assets-docs.agora.io/images/faq/record_url.png)

   2. Call the [RESTful API for querying the recording list](/en/api-reference/api-ref/flexible-classroom/classroom-rest-api#get-the-recording-list) and obtain URL2 from the  \`webRecordUrlQuery\` response parameter.

   3. Concatenate URL1 and URL2, to get a complete URL of the page recording. You can access it locally with a browser for debugging. If you can opened the URL, then the recording has started successfully; if not, find the reason based on the error report.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "If recording fails, take the following steps to troubleshoot the problem:"
  }, {
    heading: undefined,
    content: "Refer to Configure classroom storage and recording to check whether the recording-related configuration is correct, including:"
  }, {
    heading: undefined,
    content: "If `recordingConfig` is not set, the default configuration is used."
  }, {
    heading: undefined,
    content: "If `storageConfig` is configured correctly, especially the vendor, region, and endpoint fields are correct and match. For example, if the third-party cloud storage service you use is located in Shanghai, then the application server where you initiate the request must also be located in Shanghai."
  }, {
    heading: undefined,
    content: "If the above configurations are correct but recording still fails, check whether the public read permission of the third-party cloud storage account you are using is enabled."
  }, {
    heading: undefined,
    content: "If the recording configuration is correct and public read permission is enabled, but the recording still fails, debug the specific error cause in the local browser by concatenating the recorded URL of the page:"
  }, {
    heading: undefined,
    content: "Get the value of `recordUrl` passed in as a parameter in the Web-side `LaunchOption` call."
  }, {
    heading: undefined,
    content: "Call the RESTful API for querying the recording list and obtain URL2 from the  `webRecordUrlQuery` response parameter."
  }, {
    heading: undefined,
    content: "Concatenate URL1 and URL2, to get a complete URL of the page recording. You can access it locally with a browser for debugging. If you can opened the URL, then the recording has started successfully; if not, find the reason based on the error report."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "If recording fails, take the following steps to troubleshoot the problem:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Refer to ", _jsx(_components.a, {
            href: "/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/enable-flexible-classroom#cloud-recording",
            children: "Configure classroom storage and recording"
          }), " to check whether the recording-related configuration is correct, including:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If ", _jsx(_components.code, {
              children: "recordingConfig"
            }), " is not set, the default configuration is used."]
          }), `
`, _jsxs(_components.li, {
            children: ["If ", _jsx(_components.code, {
              children: "storageConfig"
            }), " is configured correctly, especially the vendor, region, and endpoint fields are correct and match. For example, if the third-party cloud storage service you use is located in Shanghai, then the application server where you initiate the request must also be located in Shanghai."]
          }), `
`]
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
                  children: '"vendor"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 2,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: '"region"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 1,"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " //CN_Shanghai"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "endpoint:https://agora-recording.oss-cn-shanghai.aliyuncs.com"
                })
              })]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If the above configurations are correct but recording still fails, check whether the public read permission of the third-party cloud storage account you are using is enabled."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If the recording configuration is correct and public read permission is enabled, but the recording still fails, debug the specific error cause in the local browser by concatenating the recorded URL of the page:"
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Get the value of ", _jsx(_components.code, {
                children: "recordUrl"
              }), " passed in as a parameter in the Web-side ", _jsx(_components.code, {
                children: "LaunchOption"
              }), " call."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/faq/record_url.png",
                alt: "recordUrl"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api#get-the-recording-list",
                children: "RESTful API for querying the recording list"
              }), " and obtain URL2 from the  ", _jsx(_components.code, {
                children: "webRecordUrlQuery"
              }), " response parameter."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Concatenate URL1 and URL2, to get a complete URL of the page recording. You can access it locally with a browser for debugging. If you can opened the URL, then the recording has started successfully; if not, find the reason based on the error report."
            }), `
`]
          }), `
`]
        }), `
`]
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
