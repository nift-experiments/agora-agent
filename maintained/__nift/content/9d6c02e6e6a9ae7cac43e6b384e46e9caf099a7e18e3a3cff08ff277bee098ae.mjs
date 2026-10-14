import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I fix black, green, or pixelated video when a Web client and a Native client communicate with each other?"
};
export let _markdown = `

When a Web client and a Native client communicate with each other the receiving end sees a black, green, or pixelated screen.

## Reason [#reason]

The Native SDK encodes video streams in the H.264 format, and the issue is mainly caused by errors decoding the H.264 video streams.

## Solution [#solution]

Troubleshoot the problem by following the steps below:

1. Call \`getSupportedCodec\` to get the codecs supported by both the Web SDK and the browser. If H.264 is not supported, the Web client cannot communicate with the Native client.

2. Ask the user to use the latest official version of the Chrome browser, and disable the hardware‑accelerated video decoding and encoding:

   1. Enter \`chrome://flags\` in the browser address bar.
   2. Set both **Hardware-accelerated video decode and Hardware-accelerated video encode** as **Disabled**.
   3. Click **Relaunch** to restart the browser, as shown in the figure below:
      ![](https://web-cdn.agora.io/docs-files/1616748192326)

3. Upgrade the Native SDK to the latest version.

4. If the client sending the video stream is a Web client on desktop, ask the user to launch Chrome with the following command:

   <CodeBlockTabs defaultValue="windows">
     <CodeBlockTabsList>
       <CodeBlockTabsTrigger value="windows">
         Windows
       </CodeBlockTabsTrigger>

       <CodeBlockTabsTrigger value="macos">
         macOS
       </CodeBlockTabsTrigger>
     </CodeBlockTabsList>

     <CodeBlockTab value="windows">
       \`\`\`bash
       chrome.exe --forcefieldtrials="WebRTCSpsPpsIdrIsH264Keyframe/Enabled/"
       \`\`\`
     </CodeBlockTab>

     <CodeBlockTab value="macos">
       \`\`\`bash
       /Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --force-fieldtrials="WebRTC-SpsPpsIdrIsH264Keyframe/Enabled/"
       \`\`\`
     </CodeBlockTab>
   </CodeBlockTabs>

## See also [#see-also]

* [How can I fix black screen issues?](/en/api-reference/faq/quality/video_blank)
* [Why is my video pixelated or jagged and green?](/en/api-reference/faq/quality/pixelated_green_video)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When a Web client and a Native client communicate with each other the receiving end sees a black, green, or pixelated screen."
  }, {
    heading: "reason",
    content: "The Native SDK encodes video streams in the H.264 format, and the issue is mainly caused by errors decoding the H.264 video streams."
  }, {
    heading: "solution",
    content: "Troubleshoot the problem by following the steps below:"
  }, {
    heading: "solution",
    content: "Call `getSupportedCodec` to get the codecs supported by both the Web SDK and the browser. If H.264 is not supported, the Web client cannot communicate with the Native client."
  }, {
    heading: "solution",
    content: "Ask the user to use the latest official version of the Chrome browser, and disable the hardware‑accelerated video decoding and encoding:"
  }, {
    heading: "solution",
    content: "Enter `chrome://flags` in the browser address bar."
  }, {
    heading: "solution",
    content: "Set both **Hardware-accelerated video decode and Hardware-accelerated video encode** as **Disabled**."
  }, {
    heading: "solution",
    content: "Click **Relaunch** to restart the browser, as shown in the figure below:"
  }, {
    heading: "solution",
    content: "Upgrade the Native SDK to the latest version."
  }, {
    heading: "solution",
    content: "If the client sending the video stream is a Web client on desktop, ask the user to launch Chrome with the following command:"
  }, {
    heading: "see-also",
    content: "How can I fix black screen issues?"
  }, {
    heading: "see-also",
    content: "Why is my video pixelated or jagged and green?"
  }],
  headings: [{
    id: "reason",
    content: "Reason"
  }, {
    id: "solution",
    content: "Solution"
  }, {
    id: "see-also",
    content: "See also"
  }]
};
export let toc = [{
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
  depth: 2,
  url: "#see-also",
  title: _jsx(_Fragment, {
    children: "See also"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger } = _components;
  if (!CodeBlockTab)
    _missingMdxReference("CodeBlockTab", true);
  if (!CodeBlockTabs)
    _missingMdxReference("CodeBlockTabs", true);
  if (!CodeBlockTabsList)
    _missingMdxReference("CodeBlockTabsList", true);
  if (!CodeBlockTabsTrigger)
    _missingMdxReference("CodeBlockTabsTrigger", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "When a Web client and a Native client communicate with each other the receiving end sees a black, green, or pixelated screen."
    }), `
`, _jsx(_components.h2, {
      id: "reason",
      children: "Reason"
    }), `
`, _jsx(_components.p, {
      children: "The Native SDK encodes video streams in the H.264 format, and the issue is mainly caused by errors decoding the H.264 video streams."
    }), `
`, _jsx(_components.h2, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsx(_components.p, {
      children: "Troubleshoot the problem by following the steps below:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "getSupportedCodec"
          }), " to get the codecs supported by both the Web SDK and the browser. If H.264 is not supported, the Web client cannot communicate with the Native client."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Ask the user to use the latest official version of the Chrome browser, and disable the hardware‑accelerated video decoding and encoding:"
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Enter ", _jsx(_components.code, {
              children: "chrome://flags"
            }), " in the browser address bar."]
          }), `
`, _jsxs(_components.li, {
            children: ["Set both ", _jsx(_components.strong, {
              children: "Hardware-accelerated video decode and Hardware-accelerated video encode"
            }), " as ", _jsx(_components.strong, {
              children: "Disabled"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["Click ", _jsx(_components.strong, {
              children: "Relaunch"
            }), ` to restart the browser, as shown in the figure below:
`, _jsx(_components.img, {
              src: "https://web-cdn.agora.io/docs-files/1616748192326",
              alt: ""
            })]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Upgrade the Native SDK to the latest version."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If the client sending the video stream is a Web client on desktop, ask the user to launch Chrome with the following command:"
        }), `
`, _jsxs(CodeBlockTabs, {
          defaultValue: "windows",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "windows",
              children: "Windows"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "macos",
              children: "macOS"
            })]
          }), _jsx(CodeBlockTab, {
            value: "windows",
            children: _jsx(_Fragment, {
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
                      children: "chrome.exe"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " --forcefieldtrials="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"WebRTCSpsPpsIdrIsH264Keyframe/Enabled/"'
                    })]
                  })
                })
              })
            })
          }), _jsx(CodeBlockTab, {
            value: "macos",
            children: _jsx(_Fragment, {
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
                      children: "/Applications/Google\\"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " Chrome.app/Contents/MacOS/Google"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "\\ "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "Chrome"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " --force-fieldtrials="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"WebRTC-SpsPpsIdrIsH264Keyframe/Enabled/"'
                    })]
                  })
                })
              })
            })
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "see-also",
      children: "See also"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/faq/quality/video_blank",
          children: "How can I fix black screen issues?"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/faq/quality/pixelated_green_video",
          children: "Why is my video pixelated or jagged and green?"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
