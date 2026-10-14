import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I solve the quality issues of screen sharing on Web clients?"
};
export let _markdown = `

When a Web client shares the screen, the screen freezes or blurs.

## Solution [#solution]

Find the solution that corresponds to the version of the Web SDK you are using.

### Web 3.x [#web-3x]

Troubleshoot the problem by following the steps below:

1. Ask the user to use the latest official version of the Chrome browser on desktop.
2. Set codec as \`vp8\` when calling \`createClient\`.
3. Check whether the user is sharing an application window.
   * If so, ask the user to share the browser tab or the entire screen instead.
   * If not, check the encoding configurations you set in \`setScreenProfile\`.
4. Upgrade the SDK to 3.2.0 or later versions, and set [\`optimizationMode\`](https://api-ref.agora.io/en/video-sdk/web/3.x/interfaces/agorartc.streamspec.html#optimizationmode) when creating the stream for screen-sharing. Choose the appropriate transmission optimization mode according to the shared content:
   * If the shared content is mainly slides, texts, or static images, set [\`optimizationMode\`](https://api-ref.agora.io/en/video-sdk/web/3.x/interfaces/agorartc.streamspec.html#optimizationmode) as \`"details"\`.
   * If the shared content is mainly videos or games, set [\`optimizationMode\`](https://api-ref.agora.io/en/video-sdk/web/3.x/interfaces/agorartc.streamspec.html#optimizationmode) as \`"motion"\`.

### Web 4.x [#web-4x]

Troubleshoot the problem by following the steps below:

1. Ask the user to use the latest official version of the Chrome browser on desktop.
2. Set codec as \`vp8\` when calling \`createClient\`.
3. Check whether the user is sharing an application window.
   * If so, ask the user to share a browser tab or the entire screen.
   * If not, check the encoding configurations you set in \`createScreenVideoTrack\`.
4. Set [\`optimizationMode\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/screenvideotrackinitconfig.html#optimizationmode) when creating the video track for screen sharing, and choose the appropriate transmission optimization mode according to the shared content:

   * If the shared content is mainly slides, texts, or static images, set [\`optimizationMode\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/screenvideotrackinitconfig.html#optimizationmode) as "details".
   * If the shared content is mainly videos or games, set [\`optimizationMode\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/screenvideotrackinitconfig.html#optimizationmode) as \`"motion"\`.

As of v4.2.0, you can change the transmission optimization mode during a screen sharing session by calling [\`setOptimizationMode\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ilocalvideotrack.html#setoptimizationmode).

## See also [#see-also]

* [Share Screen (Web 3.x)](/en/3.x/interactive-live-streaming/introduction/product-overview)
* [Share Screen (Web 4.x)](/en/realtime-media/rtc/build/capture-and-render-video/screen-sharing)
* [How can I switch between the screen-sharing stream and the camera stream?](/en/api-reference/faq/integration/switch_screen_camera_web)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When a Web client shares the screen, the screen freezes or blurs."
  }, {
    heading: "solution",
    content: "Find the solution that corresponds to the version of the Web SDK you are using."
  }, {
    heading: "web-3x",
    content: "Troubleshoot the problem by following the steps below:"
  }, {
    heading: "web-3x",
    content: "Ask the user to use the latest official version of the Chrome browser on desktop."
  }, {
    heading: "web-3x",
    content: "Set codec as `vp8` when calling `createClient`."
  }, {
    heading: "web-3x",
    content: "Check whether the user is sharing an application window."
  }, {
    heading: "web-3x",
    content: "If so, ask the user to share the browser tab or the entire screen instead."
  }, {
    heading: "web-3x",
    content: "If not, check the encoding configurations you set in `setScreenProfile`."
  }, {
    heading: "web-3x",
    content: "Upgrade the SDK to 3.2.0 or later versions, and set `optimizationMode` when creating the stream for screen-sharing. Choose the appropriate transmission optimization mode according to the shared content:"
  }, {
    heading: "web-3x",
    content: 'If the shared content is mainly slides, texts, or static images, set `optimizationMode` as `"details"`.'
  }, {
    heading: "web-3x",
    content: 'If the shared content is mainly videos or games, set `optimizationMode` as `"motion"`.'
  }, {
    heading: "web-4x",
    content: "Troubleshoot the problem by following the steps below:"
  }, {
    heading: "web-4x",
    content: "Ask the user to use the latest official version of the Chrome browser on desktop."
  }, {
    heading: "web-4x",
    content: "Set codec as `vp8` when calling `createClient`."
  }, {
    heading: "web-4x",
    content: "Check whether the user is sharing an application window."
  }, {
    heading: "web-4x",
    content: "If so, ask the user to share a browser tab or the entire screen."
  }, {
    heading: "web-4x",
    content: "If not, check the encoding configurations you set in `createScreenVideoTrack`."
  }, {
    heading: "web-4x",
    content: "Set `optimizationMode` when creating the video track for screen sharing, and choose the appropriate transmission optimization mode according to the shared content:"
  }, {
    heading: "web-4x",
    content: 'If the shared content is mainly slides, texts, or static images, set `optimizationMode` as "details".'
  }, {
    heading: "web-4x",
    content: 'If the shared content is mainly videos or games, set `optimizationMode` as `"motion"`.'
  }, {
    heading: "web-4x",
    content: "As of v4.2.0, you can change the transmission optimization mode during a screen sharing session by calling `setOptimizationMode`."
  }, {
    heading: "see-also",
    content: "Share Screen (Web 3.x)"
  }, {
    heading: "see-also",
    content: "Share Screen (Web 4.x)"
  }, {
    heading: "see-also",
    content: "How can I switch between the screen-sharing stream and the camera stream?"
  }],
  headings: [{
    id: "solution",
    content: "Solution"
  }, {
    id: "web-3x",
    content: "Web 3.x"
  }, {
    id: "web-4x",
    content: "Web 4.x"
  }, {
    id: "see-also",
    content: "See also"
  }]
};
export let toc = [{
  depth: 2,
  url: "#solution",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}, {
  depth: 3,
  url: "#web-3x",
  title: _jsx(_Fragment, {
    children: "Web 3.x"
  })
}, {
  depth: 3,
  url: "#web-4x",
  title: _jsx(_Fragment, {
    children: "Web 4.x"
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
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "When a Web client shares the screen, the screen freezes or blurs."
    }), `
`, _jsx(_components.h2, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsx(_components.p, {
      children: "Find the solution that corresponds to the version of the Web SDK you are using."
    }), `
`, _jsx(_components.h3, {
      id: "web-3x",
      children: "Web 3.x"
    }), `
`, _jsx(_components.p, {
      children: "Troubleshoot the problem by following the steps below:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Ask the user to use the latest official version of the Chrome browser on desktop."
      }), `
`, _jsxs(_components.li, {
        children: ["Set codec as ", _jsx(_components.code, {
          children: "vp8"
        }), " when calling ", _jsx(_components.code, {
          children: "createClient"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Check whether the user is sharing an application window.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "If so, ask the user to share the browser tab or the entire screen instead."
          }), `
`, _jsxs(_components.li, {
            children: ["If not, check the encoding configurations you set in ", _jsx(_components.code, {
              children: "setScreenProfile"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["Upgrade the SDK to 3.2.0 or later versions, and set ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/web/3.x/interfaces/agorartc.streamspec.html#optimizationmode",
          children: _jsx(_components.code, {
            children: "optimizationMode"
          })
        }), " when creating the stream for screen-sharing. Choose the appropriate transmission optimization mode according to the shared content:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If the shared content is mainly slides, texts, or static images, set ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/3.x/interfaces/agorartc.streamspec.html#optimizationmode",
              children: _jsx(_components.code, {
                children: "optimizationMode"
              })
            }), " as ", _jsx(_components.code, {
              children: '"details"'
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["If the shared content is mainly videos or games, set ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/3.x/interfaces/agorartc.streamspec.html#optimizationmode",
              children: _jsx(_components.code, {
                children: "optimizationMode"
              })
            }), " as ", _jsx(_components.code, {
              children: '"motion"'
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "web-4x",
      children: "Web 4.x"
    }), `
`, _jsx(_components.p, {
      children: "Troubleshoot the problem by following the steps below:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Ask the user to use the latest official version of the Chrome browser on desktop."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Set codec as ", _jsx(_components.code, {
            children: "vp8"
          }), " when calling ", _jsx(_components.code, {
            children: "createClient"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Check whether the user is sharing an application window."
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "If so, ask the user to share a browser tab or the entire screen."
          }), `
`, _jsxs(_components.li, {
            children: ["If not, check the encoding configurations you set in ", _jsx(_components.code, {
              children: "createScreenVideoTrack"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Set ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/screenvideotrackinitconfig.html#optimizationmode",
            children: _jsx(_components.code, {
              children: "optimizationMode"
            })
          }), " when creating the video track for screen sharing, and choose the appropriate transmission optimization mode according to the shared content:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If the shared content is mainly slides, texts, or static images, set ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/screenvideotrackinitconfig.html#optimizationmode",
              children: _jsx(_components.code, {
                children: "optimizationMode"
              })
            }), ' as "details".']
          }), `
`, _jsxs(_components.li, {
            children: ["If the shared content is mainly videos or games, set ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/screenvideotrackinitconfig.html#optimizationmode",
              children: _jsx(_components.code, {
                children: "optimizationMode"
              })
            }), " as ", _jsx(_components.code, {
              children: '"motion"'
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["As of v4.2.0, you can change the transmission optimization mode during a screen sharing session by calling ", _jsx(_components.a, {
        href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ilocalvideotrack.html#setoptimizationmode",
        children: _jsx(_components.code, {
          children: "setOptimizationMode"
        })
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "see-also",
      children: "See also"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/3.x/interactive-live-streaming/introduction/product-overview",
          children: "Share Screen (Web 3.x)"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtc/build/capture-and-render-video/screen-sharing",
          children: "Share Screen (Web 4.x)"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/faq/integration/switch_screen_camera_web",
          children: "How can I switch between the screen-sharing stream and the camera stream?"
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
