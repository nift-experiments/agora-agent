import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I switch from custom video capture to SDK capture?"
};
export let _markdown = `

The Agora RTC SDK Native SDK provides both Push and Media IO methods to implement custom video capture. This page describes how to switch from custom video capture to SDK capture.

## Switching from Media IO [#switching-from-media-io]

If you want to switch from custom video capture by Media IO to SDK capture, you can use one of the following methods.

### Method one: In-channel switching [#method-one-in-channel-switching]

You can switch custom video capture to SDK capture directly in the channel:

\`\`\`text
// Java
ENGINE.setVideoSource(new AgoraDefaultSource());
\`\`\`

\`\`\`text
// Swift
agoraKit?.setVideoSource(AgoraRtcDefaultCamera());
\`\`\`

\`\`\`text
// Objective-C
[self.agoraKit setVideoSource:[[AgoraRtcDefaultCamera alloc] initWithPosition:AgoraRtcDefaultCameraPositionFront]];
\`\`\`

\`\`\`text
// C++
m_rtcEngine->setVideoSource();
m_rtcEngine->startPreview;
\`\`\`

### Method two: Exiting and rejoining the channel [#method-two-exiting-and-rejoining-the-channel]

You can leave the current channel first, disable the custom video source, and then rejoin the channel. At this point, the SDK uses the default device for video capture.

## Switching from Push [#switching-from-push]

If you want to switch from custom video capture by Push to SDK capture, you can leave the current channel first, disable the custom video source, and then rejoin the channel. At this point, the SDK uses the default device for video capture.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Agora RTC SDK Native SDK provides both Push and Media IO methods to implement custom video capture. This page describes how to switch from custom video capture to SDK capture."
  }, {
    heading: "switching-from-media-io",
    content: "If you want to switch from custom video capture by Media IO to SDK capture, you can use one of the following methods."
  }, {
    heading: "method-one-in-channel-switching",
    content: "You can switch custom video capture to SDK capture directly in the channel:"
  }, {
    heading: "method-two-exiting-and-rejoining-the-channel",
    content: "You can leave the current channel first, disable the custom video source, and then rejoin the channel. At this point, the SDK uses the default device for video capture."
  }, {
    heading: "switching-from-push",
    content: "If you want to switch from custom video capture by Push to SDK capture, you can leave the current channel first, disable the custom video source, and then rejoin the channel. At this point, the SDK uses the default device for video capture."
  }],
  headings: [{
    id: "switching-from-media-io",
    content: "Switching from Media IO"
  }, {
    id: "method-one-in-channel-switching",
    content: "Method one: In-channel switching"
  }, {
    id: "method-two-exiting-and-rejoining-the-channel",
    content: "Method two: Exiting and rejoining the channel"
  }, {
    id: "switching-from-push",
    content: "Switching from Push"
  }]
};
export let toc = [{
  depth: 2,
  url: "#switching-from-media-io",
  title: _jsx(_Fragment, {
    children: "Switching from Media IO"
  })
}, {
  depth: 3,
  url: "#method-one-in-channel-switching",
  title: _jsx(_Fragment, {
    children: "Method one: In-channel switching"
  })
}, {
  depth: 3,
  url: "#method-two-exiting-and-rejoining-the-channel",
  title: _jsx(_Fragment, {
    children: "Method two: Exiting and rejoining the channel"
  })
}, {
  depth: 2,
  url: "#switching-from-push",
  title: _jsx(_Fragment, {
    children: "Switching from Push"
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
    children: [_jsx(_components.p, {
      children: "The Agora RTC SDK Native SDK provides both Push and Media IO methods to implement custom video capture. This page describes how to switch from custom video capture to SDK capture."
    }), `
`, _jsx(_components.h2, {
      id: "switching-from-media-io",
      children: "Switching from Media IO"
    }), `
`, _jsx(_components.p, {
      children: "If you want to switch from custom video capture by Media IO to SDK capture, you can use one of the following methods."
    }), `
`, _jsx(_components.h3, {
      id: "method-one-in-channel-switching",
      children: "Method one: In-channel switching"
    }), `
`, _jsx(_components.p, {
      children: "You can switch custom video capture to SDK capture directly in the channel:"
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "//"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Java"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ENGINE.setVideoSource(new"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " AgoraDefaultSource"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "());"
            })]
          })]
        })
      })
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "//"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Swift"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "agoraKit?.setVideoSource(AgoraRtcDefaultCamera("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "));"
            })]
          })]
        })
      })
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "//"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Objective-C"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[self.agoraKit setVideoSource:[[AgoraRtcDefaultCamera alloc] initWithPosition:AgoraRtcDefaultCameraPositionFront]];"
            })
          })]
        })
      })
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "//"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " C++"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "m_rtcEngine->setVideoSource"
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "m_rtcEngine-"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "startPreview"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "method-two-exiting-and-rejoining-the-channel",
      children: "Method two: Exiting and rejoining the channel"
    }), `
`, _jsx(_components.p, {
      children: "You can leave the current channel first, disable the custom video source, and then rejoin the channel. At this point, the SDK uses the default device for video capture."
    }), `
`, _jsx(_components.h2, {
      id: "switching-from-push",
      children: "Switching from Push"
    }), `
`, _jsx(_components.p, {
      children: "If you want to switch from custom video capture by Push to SDK capture, you can leave the current channel first, disable the custom video source, and then rejoin the channel. At this point, the SDK uses the default device for video capture."
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
