import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Optimize video transmission",
  description: "Prioritize clarity or smoothness for local video tracks in Video Calling sessions."
};
export let _markdown = `

**Supported platform:** Web.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;web&#x22;]" showTabs="false">
  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    Agora prioritizes both clarity and smoothness in video experience. However, this can be challenging in weak network conditions, often requiring a trade-off. Use-cases and products have unique requirements; for instance, screen sharing prioritizes clarity, while casual video calls prioritize smoothness. The RTC SDK offers a transmission optimization feature to address these needs.

    ## Understand the tech [#understand-the-tech]

    To optimize the video transmission, the Agora RTC SDK offers two transmission optimization strategies for local video tracks:

    **Clear Priority**:

    This strategy prioritizes clarity by automatically setting a minimum bit rate based on the capture resolution and frame rate. Even during network fluctuations, the sending bit rate will not drop below this threshold, ensuring a clear video picture. In most cases, the SDK will maintain the send resolution, although it may reduce the frame rate if necessary.

    **Smoothness First**:

    In this approach, smoothness takes precedence over clarity. The SDK does not enforce a minimum bit rate policy, allowing the sending end to dynamically adjust the bit rate in response to network fluctuations. This ensures that the receiving end's video picture remains uninterrupted or free from freezing. Typically, the SDK will maintain the frame rate, but it may reduce the send resolution if needed.
    These strategies provide users with flexibility to prioritize either clarity or smoothness based on their specific use cases and network conditions

    ## Prerequisites [#prerequisites]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implementation [#implementation]

    When creating a local video track using the \`createCameraVideoTrack\`, \`createScreenVideoTrack\`, or \`createCustomVideoTrack\` methods, you have the option to specify the transmission optimization mode through the \`optimizationMode\` parameter:

    * \`"motion"\`: Prioritizes smoothness, ensuring a stable video stream even in challenging network conditions.
    * \`"detail"\`: Prioritizes clarity, maintaining a clear video image even if network conditions degrade.

    If the \`optimizationMode\` parameter is not specified, the SDK will apply default optimization modes based on the type of video track:

    * For screen sharing video tracks, the default optimization strategy is clarity first, prioritizing a clear image over smoothness.
    * For other types of local video tracks, such as camera or custom tracks, the default optimization strategy aims to balance clarity and smoothness. This means that the SDK will adjust the frame rate and resolution under weak network conditions to maintain a satisfactory viewing experience.

    During a video call or screen sharing session, you can dynamically adjust the video transmission mode using the \`setOptimizationMode\` method. For example, if you switch from presenting slides (requiring clarity) to showing a video (requiring smoothness), you can switch the transmission optimization mode from \`detail\` to \`motion\` to ensure that the video remains fluid even in fluctuating network conditions.

    \`\`\`javascript
    // Use default strategy
    const videoTrack2 = await AgoraRTC.createScreenVideoTrack();
    \`\`\`

    \`\`\`javascript
    const videoTrack = await AgoraRTC.createCameraVideoTrack({
     // Use clear priority
     optimizationMode: "detail",
    });
    \`\`\`

    \`\`\`javascript
    const videoTrack2 = await AgoraRTC.createCameraVideoTrack({
     // Use smoothness priority
     optimizationMode: "motion",
    });
    \`\`\`

    ## Reference [#reference]

    This section contains related information and API references.

    For more video settings, see [Configure video encoding](/en/realtime-media/rtc/build/capture-and-render-video/configure-video-encoding).

    ### Frequently asked questions [#frequently-asked-questions]

    * [What is the difference between the in-call volume and the media volume?](/en/api-reference/faq/integration/system_volume)

    ### API reference [#api-reference]

    * [\`optimizationMode\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/cameravideotrackinitconfig.html#optimizationmode)
    * [\`setOptimizationMode\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ilocalvideotrack.html#setoptimizationmode)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "**Supported platform:** Web."
  }, {
    heading: undefined,
    content: "Agora prioritizes both clarity and smoothness in video experience. However, this can be challenging in weak network conditions, often requiring a trade-off. Use-cases and products have unique requirements; for instance, screen sharing prioritizes clarity, while casual video calls prioritize smoothness. The RTC SDK offers a transmission optimization feature to address these needs."
  }, {
    heading: "understand-the-tech",
    content: "To optimize the video transmission, the Agora RTC SDK offers two transmission optimization strategies for local video tracks:"
  }, {
    heading: "understand-the-tech",
    content: "**Clear Priority**:"
  }, {
    heading: "understand-the-tech",
    content: "This strategy prioritizes clarity by automatically setting a minimum bit rate based on the capture resolution and frame rate. Even during network fluctuations, the sending bit rate will not drop below this threshold, ensuring a clear video picture. In most cases, the SDK will maintain the send resolution, although it may reduce the frame rate if necessary."
  }, {
    heading: "understand-the-tech",
    content: "**Smoothness First**:"
  }, {
    heading: "understand-the-tech",
    content: `In this approach, smoothness takes precedence over clarity. The SDK does not enforce a minimum bit rate policy, allowing the sending end to dynamically adjust the bit rate in response to network fluctuations. This ensures that the receiving end's video picture remains uninterrupted or free from freezing. Typically, the SDK will maintain the frame rate, but it may reduce the send resolution if needed.
These strategies provide users with flexibility to prioritize either clarity or smoothness based on their specific use cases and network conditions`
  }, {
    heading: "prerequisites",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implementation",
    content: "When creating a local video track using the `createCameraVideoTrack`, `createScreenVideoTrack`, or `createCustomVideoTrack` methods, you have the option to specify the transmission optimization mode through the `optimizationMode` parameter:"
  }, {
    heading: "implementation",
    content: '`"motion"`: Prioritizes smoothness, ensuring a stable video stream even in challenging network conditions.'
  }, {
    heading: "implementation",
    content: '`"detail"`: Prioritizes clarity, maintaining a clear video image even if network conditions degrade.'
  }, {
    heading: "implementation",
    content: "If the `optimizationMode` parameter is not specified, the SDK will apply default optimization modes based on the type of video track:"
  }, {
    heading: "implementation",
    content: "For screen sharing video tracks, the default optimization strategy is clarity first, prioritizing a clear image over smoothness."
  }, {
    heading: "implementation",
    content: "For other types of local video tracks, such as camera or custom tracks, the default optimization strategy aims to balance clarity and smoothness. This means that the SDK will adjust the frame rate and resolution under weak network conditions to maintain a satisfactory viewing experience."
  }, {
    heading: "implementation",
    content: "During a video call or screen sharing session, you can dynamically adjust the video transmission mode using the `setOptimizationMode` method. For example, if you switch from presenting slides (requiring clarity) to showing a video (requiring smoothness), you can switch the transmission optimization mode from `detail` to `motion` to ensure that the video remains fluid even in fluctuating network conditions."
  }, {
    heading: "reference",
    content: "This section contains related information and API references."
  }, {
    heading: "reference",
    content: "For more video settings, see Configure video encoding."
  }, {
    heading: "frequently-asked-questions",
    content: "What is the difference between the in-call volume and the media volume?"
  }, {
    heading: "api-reference",
    content: "`optimizationMode`"
  }, {
    heading: "api-reference",
    content: "`setOptimizationMode`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implementation",
    content: "Implementation"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "frequently-asked-questions",
    content: "Frequently asked questions"
  }, {
    id: "api-reference",
    content: "API reference"
  }]
};
export let toc = [{
  depth: 2,
  url: "#understand-the-tech",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions",
  title: _jsx(_Fragment, {
    children: "Frequently asked questions"
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
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Supported platform:"
      }), " Web."]
    }), `
`, _jsx(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["web"]',
      showTabs: "false",
      children: _jsxs(_PlatformPanel, {
        platform: "web",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "web"
        }), _jsx(_components.p, {
          children: "Agora prioritizes both clarity and smoothness in video experience. However, this can be challenging in weak network conditions, often requiring a trade-off. Use-cases and products have unique requirements; for instance, screen sharing prioritizes clarity, while casual video calls prioritize smoothness. The RTC SDK offers a transmission optimization feature to address these needs."
        }), _jsx(_components.h2, {
          id: "understand-the-tech",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "To optimize the video transmission, the Agora RTC SDK offers two transmission optimization strategies for local video tracks:"
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Clear Priority"
          }), ":"]
        }), _jsx(_components.p, {
          children: "This strategy prioritizes clarity by automatically setting a minimum bit rate based on the capture resolution and frame rate. Even during network fluctuations, the sending bit rate will not drop below this threshold, ensuring a clear video picture. In most cases, the SDK will maintain the send resolution, although it may reduce the frame rate if necessary."
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Smoothness First"
          }), ":"]
        }), _jsx(_components.p, {
          children: `In this approach, smoothness takes precedence over clarity. The SDK does not enforce a minimum bit rate policy, allowing the sending end to dynamically adjust the bit rate in response to network fluctuations. This ensures that the receiving end's video picture remains uninterrupted or free from freezing. Typically, the SDK will maintain the frame rate, but it may reduce the send resolution if needed.
These strategies provide users with flexibility to prioritize either clarity or smoothness based on their specific use cases and network conditions`
        }), _jsx(_components.h2, {
          id: "prerequisites",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implementation",
          children: "Implementation"
        }), _jsxs(_components.p, {
          children: ["When creating a local video track using the ", _jsx(_components.code, {
            children: "createCameraVideoTrack"
          }), ", ", _jsx(_components.code, {
            children: "createScreenVideoTrack"
          }), ", or ", _jsx(_components.code, {
            children: "createCustomVideoTrack"
          }), " methods, you have the option to specify the transmission optimization mode through the ", _jsx(_components.code, {
            children: "optimizationMode"
          }), " parameter:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"motion"'
            }), ": Prioritizes smoothness, ensuring a stable video stream even in challenging network conditions."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"detail"'
            }), ": Prioritizes clarity, maintaining a clear video image even if network conditions degrade."]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["If the ", _jsx(_components.code, {
            children: "optimizationMode"
          }), " parameter is not specified, the SDK will apply default optimization modes based on the type of video track:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "For screen sharing video tracks, the default optimization strategy is clarity first, prioritizing a clear image over smoothness."
          }), `
`, _jsx(_components.li, {
            children: "For other types of local video tracks, such as camera or custom tracks, the default optimization strategy aims to balance clarity and smoothness. This means that the SDK will adjust the frame rate and resolution under weak network conditions to maintain a satisfactory viewing experience."
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["During a video call or screen sharing session, you can dynamically adjust the video transmission mode using the ", _jsx(_components.code, {
            children: "setOptimizationMode"
          }), " method. For example, if you switch from presenting slides (requiring clarity) to showing a video (requiring smoothness), you can switch the transmission optimization mode from ", _jsx(_components.code, {
            children: "detail"
          }), " to ", _jsx(_components.code, {
            children: "motion"
          }), " to ensure that the video remains fluid even in fluctuating network conditions."]
        }), _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Use default strategy"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " videoTrack2"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRTC."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "createScreenVideoTrack"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
            })
          })
        }), _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " videoTrack"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRTC."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "createCameraVideoTrack"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: " // Use clear priority"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " optimizationMode: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"detail"'
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "});"
                })
              })]
            })
          })
        }), _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " videoTrack2"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRTC."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "createCameraVideoTrack"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: " // Use smoothness priority"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " optimizationMode: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"motion"'
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "});"
                })
              })]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains related information and API references."
        }), _jsxs(_components.p, {
          children: ["For more video settings, see ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/capture-and-render-video/configure-video-encoding",
            children: "Configure video encoding"
          }), "."]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/integration/system_volume",
              children: "What is the difference between the in-call volume and the media volume?"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/cameravideotrackinitconfig.html#optimizationmode",
              children: _jsx(_components.code, {
                children: "optimizationMode"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ilocalvideotrack.html#setoptimizationmode",
              children: _jsx(_components.code, {
                children: "setOptimizationMode"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
