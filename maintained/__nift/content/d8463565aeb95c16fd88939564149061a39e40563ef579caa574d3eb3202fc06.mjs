import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Media stream fallback",
  description: "Automatically adjust video quality in poor network conditions"
};
export let _markdown = `

**Supported platform:** Web.

In poor network conditions, audio and video quality may degrade. When the network becomes too unstable to maintain both, RTC SDK automatically adjusts by reducing video quality or, if needed, switching to audio-only mode to maintain audio performance.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;web&#x22;]" showTabs="false">
  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    ## Understand the tech [#understand-the-tech]

    In Video Calling, dual-stream mode involves transmitting two video streams simultaneously from the sender's end, each with a different resolution. One stream is optimized for devices with larger screens or better network conditions, while the other is tailored for smaller screens or poorer network conditions.

    When stream fallback is enabled, the system intelligently switches between the high-quality and low-quality streams based on network conditions. This dynamic adjustment ensures optimal performance during Video Calling sessions, adapting in real-time to varying network bandwidths and device capabilities.

    ## Prerequisites [#prerequisites]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement media stream fallback [#implement-media-stream-fallback]

    This section shows you how to implement the media stream fallback feature:

    1. Before joining a channel, call \`AgoraRTCClient.enableDualStream\` on the host to activate dual stream mode.

    2. On the receiving end, call \`AgoraRTCClient.setStreamFallbackOption\` to configure the fallback behavior for receiving media streams and set the \`fallbackType\` parameter to one of the following values:

       * \`LOW_STREAM: = 1\`: Automatically subscribe to the low-video stream under poor network conditions.

       * \`AUDIO_ONLY: = 2\`: Subscribe to the low-quality video stream when the network conditions worsen, and subscribe to audio only when the conditions become too poor to support video transmission.

       Additionally, when dual-stream mode is enabled on the host, the audience can call the \`setRemoteVideoStreamType\` method to specify receiving only the low resolution video stream by setting \`streamType\` to \`1\`.

    3. During the session, the SDK triggers the \`AgoraRTCClient.on("stream-fallback")\` callback when a remote video stream falls back to an audio stream or switches back to video after the network conditions improve, providing users with information regarding the current stream reception status. Similarly, the \`AgoraRTCClient.on("stream-type-changed")\` callback is triggered when the remote video stream switches between high and low resolutions.

    In the following sample code, \`client\` refers to the local client object created using \`AgoraRTC.createClient\`.

    * **Host configuration**

      Enable dual stream mode

      \`\`\`javascript
      client.enableDualStream().then(() => {
       console.log("Enable dual stream success!")
      }).catch(err => {
       console.log(err)
      });
      \`\`\`

    * **Audience configuration**

      * In a weak network environment, first attempt to receive the low resolution stream; if video display is not feasible due to poor network conditions, only the audio stream is received.

        \`\`\`javascript
        // Set fallback option to low resolution video or audio-only
        client.setStreamFallbackOption(remoteUid, 2)
        \`\`\`

      * To ensure call quality, you can also manually switch the subscribed video stream to low resolution.

        \`\`\`javascript
        // Manually switch to low resolution
        client.setRemoteVideoStreamType(remoteUid, 1);
        \`\`\`

    ## Reference [#reference]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Limitations [#limitations]

    Media stream fallback has the following limitations:

    * The \`enableDualStream\` method is not applicable to audio-only call use-cases.

    * Consider the following limitations on mobile devices:

      * It is not possible to send high and low resolution streams using \`h264\` encoding on Android Chrome.
      * When sending a low resolution stream on iOS Safari and setting video properties using \`setLowStreamParameter\`, the \`bitrate\` setting is not supported. The small stream resolution must be proportional to the large stream resolution.
      * Some browsers are not fully compatible with dual-stream mode when using the \`setRemoteVideoStreamType\` method. Known issues include:
        * macOS Safari: The frame rate and resolution of high- and low-resolution streams are the same.
        * iOS Safari 11: Switching between high- and low-resolution streams is not supported.
        * Firefox: The frame rate of low-resolution streams is fixed at 30 fps.

    ### API reference [#api-reference]

    * [\`enableDualStreamMode\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#enabledualstream)
    * [\`setStreamFallbackOption\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#setstreamfallbackoption)
    * [\`setRemoteVideoStreamType\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#setremotevideostreamtype)

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
    content: "In poor network conditions, audio and video quality may degrade. When the network becomes too unstable to maintain both, RTC SDK automatically adjusts by reducing video quality or, if needed, switching to audio-only mode to maintain audio performance."
  }, {
    heading: "understand-the-tech",
    content: "In Video Calling, dual-stream mode involves transmitting two video streams simultaneously from the sender's end, each with a different resolution. One stream is optimized for devices with larger screens or better network conditions, while the other is tailored for smaller screens or poorer network conditions."
  }, {
    heading: "understand-the-tech",
    content: "When stream fallback is enabled, the system intelligently switches between the high-quality and low-quality streams based on network conditions. This dynamic adjustment ensures optimal performance during Video Calling sessions, adapting in real-time to varying network bandwidths and device capabilities."
  }, {
    heading: "prerequisites",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-media-stream-fallback",
    content: "This section shows you how to implement the media stream fallback feature:"
  }, {
    heading: "implement-media-stream-fallback",
    content: "Before joining a channel, call `AgoraRTCClient.enableDualStream` on the host to activate dual stream mode."
  }, {
    heading: "implement-media-stream-fallback",
    content: "On the receiving end, call `AgoraRTCClient.setStreamFallbackOption` to configure the fallback behavior for receiving media streams and set the `fallbackType` parameter to one of the following values:"
  }, {
    heading: "implement-media-stream-fallback",
    content: "`LOW_STREAM: = 1`: Automatically subscribe to the low-video stream under poor network conditions."
  }, {
    heading: "implement-media-stream-fallback",
    content: "`AUDIO_ONLY: = 2`: Subscribe to the low-quality video stream when the network conditions worsen, and subscribe to audio only when the conditions become too poor to support video transmission."
  }, {
    heading: "implement-media-stream-fallback",
    content: "Additionally, when dual-stream mode is enabled on the host, the audience can call the `setRemoteVideoStreamType` method to specify receiving only the low resolution video stream by setting `streamType` to `1`."
  }, {
    heading: "implement-media-stream-fallback",
    content: 'During the session, the SDK triggers the `AgoraRTCClient.on("stream-fallback")` callback when a remote video stream falls back to an audio stream or switches back to video after the network conditions improve, providing users with information regarding the current stream reception status. Similarly, the `AgoraRTCClient.on("stream-type-changed")` callback is triggered when the remote video stream switches between high and low resolutions.'
  }, {
    heading: "implement-media-stream-fallback",
    content: "In the following sample code, `client` refers to the local client object created using `AgoraRTC.createClient`."
  }, {
    heading: "implement-media-stream-fallback",
    content: "**Host configuration**"
  }, {
    heading: "implement-media-stream-fallback",
    content: "Enable dual stream mode"
  }, {
    heading: "implement-media-stream-fallback",
    content: "**Audience configuration**"
  }, {
    heading: "implement-media-stream-fallback",
    content: "In a weak network environment, first attempt to receive the low resolution stream; if video display is not feasible due to poor network conditions, only the audio stream is received."
  }, {
    heading: "implement-media-stream-fallback",
    content: "To ensure call quality, you can also manually switch the subscribed video stream to low resolution."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "limitations",
    content: "Media stream fallback has the following limitations:"
  }, {
    heading: "limitations",
    content: "The `enableDualStream` method is not applicable to audio-only call use-cases."
  }, {
    heading: "limitations",
    content: "Consider the following limitations on mobile devices:"
  }, {
    heading: "limitations",
    content: "It is not possible to send high and low resolution streams using `h264` encoding on Android Chrome."
  }, {
    heading: "limitations",
    content: "When sending a low resolution stream on iOS Safari and setting video properties using `setLowStreamParameter`, the `bitrate` setting is not supported. The small stream resolution must be proportional to the large stream resolution."
  }, {
    heading: "limitations",
    content: "Some browsers are not fully compatible with dual-stream mode when using the `setRemoteVideoStreamType` method. Known issues include:"
  }, {
    heading: "limitations",
    content: "macOS Safari: The frame rate and resolution of high- and low-resolution streams are the same."
  }, {
    heading: "limitations",
    content: "iOS Safari 11: Switching between high- and low-resolution streams is not supported."
  }, {
    heading: "limitations",
    content: "Firefox: The frame rate of low-resolution streams is fixed at 30 fps."
  }, {
    heading: "api-reference",
    content: "`enableDualStreamMode`"
  }, {
    heading: "api-reference",
    content: "`setStreamFallbackOption`"
  }, {
    heading: "api-reference",
    content: "`setRemoteVideoStreamType`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-media-stream-fallback",
    content: "Implement media stream fallback"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "limitations",
    content: "Limitations"
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
  url: "#implement-media-stream-fallback",
  title: _jsx(_Fragment, {
    children: "Implement media stream fallback"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#limitations",
  title: _jsx(_Fragment, {
    children: "Limitations"
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
`, _jsx(_components.p, {
      children: "In poor network conditions, audio and video quality may degrade. When the network becomes too unstable to maintain both, RTC SDK automatically adjusts by reducing video quality or, if needed, switching to audio-only mode to maintain audio performance."
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
        }), _jsx(_components.h2, {
          id: "understand-the-tech",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "In Video Calling, dual-stream mode involves transmitting two video streams simultaneously from the sender's end, each with a different resolution. One stream is optimized for devices with larger screens or better network conditions, while the other is tailored for smaller screens or poorer network conditions."
        }), _jsx(_components.p, {
          children: "When stream fallback is enabled, the system intelligently switches between the high-quality and low-quality streams based on network conditions. This dynamic adjustment ensures optimal performance during Video Calling sessions, adapting in real-time to varying network bandwidths and device capabilities."
        }), _jsx(_components.h2, {
          id: "prerequisites",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implement-media-stream-fallback",
          children: "Implement media stream fallback"
        }), _jsx(_components.p, {
          children: "This section shows you how to implement the media stream fallback feature:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Before joining a channel, call ", _jsx(_components.code, {
                children: "AgoraRTCClient.enableDualStream"
              }), " on the host to activate dual stream mode."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["On the receiving end, call ", _jsx(_components.code, {
                children: "AgoraRTCClient.setStreamFallbackOption"
              }), " to configure the fallback behavior for receiving media streams and set the ", _jsx(_components.code, {
                children: "fallbackType"
              }), " parameter to one of the following values:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "LOW_STREAM: = 1"
                  }), ": Automatically subscribe to the low-video stream under poor network conditions."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "AUDIO_ONLY: = 2"
                  }), ": Subscribe to the low-quality video stream when the network conditions worsen, and subscribe to audio only when the conditions become too poor to support video transmission."]
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.p, {
              children: ["Additionally, when dual-stream mode is enabled on the host, the audience can call the ", _jsx(_components.code, {
                children: "setRemoteVideoStreamType"
              }), " method to specify receiving only the low resolution video stream by setting ", _jsx(_components.code, {
                children: "streamType"
              }), " to ", _jsx(_components.code, {
                children: "1"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["During the session, the SDK triggers the ", _jsx(_components.code, {
                children: 'AgoraRTCClient.on("stream-fallback")'
              }), " callback when a remote video stream falls back to an audio stream or switches back to video after the network conditions improve, providing users with information regarding the current stream reception status. Similarly, the ", _jsx(_components.code, {
                children: 'AgoraRTCClient.on("stream-type-changed")'
              }), " callback is triggered when the remote video stream switches between high and low resolutions."]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["In the following sample code, ", _jsx(_components.code, {
            children: "client"
          }), " refers to the local client object created using ", _jsx(_components.code, {
            children: "AgoraRTC.createClient"
          }), "."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Host configuration"
              })
            }), `
`, _jsx(_components.p, {
              children: "Enable dual stream mode"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "client."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "enableDualStream"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "then"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(() "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "=>"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " console."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "log"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"Enable dual stream success!"'
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
                      children: "})."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "catch"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: "err"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " =>"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " console."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "log"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(err)"
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
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Audience configuration"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "In a weak network environment, first attempt to receive the low resolution stream; if video display is not feasible due to poor network conditions, only the audio stream is received."
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
                    icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "// Set fallback option to low resolution video or audio-only"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "client."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "setStreamFallbackOption"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(remoteUid, "
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
                          children: ")"
                        })]
                      })]
                    })
                  })
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "To ensure call quality, you can also manually switch the subscribed video stream to low resolution."
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
                    icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "// Manually switch to low resolution"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "client."
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6F42C1",
                            "--shiki-dark": "#B392F0"
                          },
                          children: "setRemoteVideoStreamType"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(remoteUid, "
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
                          children: ");"
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
`]
        }), _jsx(_components.h2, {
          id: "reference",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "limitations",
          children: "Limitations"
        }), _jsx(_components.p, {
          children: "Media stream fallback has the following limitations:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["The ", _jsx(_components.code, {
                children: "enableDualStream"
              }), " method is not applicable to audio-only call use-cases."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Consider the following limitations on mobile devices:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["It is not possible to send high and low resolution streams using ", _jsx(_components.code, {
                  children: "h264"
                }), " encoding on Android Chrome."]
              }), `
`, _jsxs(_components.li, {
                children: ["When sending a low resolution stream on iOS Safari and setting video properties using ", _jsx(_components.code, {
                  children: "setLowStreamParameter"
                }), ", the ", _jsx(_components.code, {
                  children: "bitrate"
                }), " setting is not supported. The small stream resolution must be proportional to the large stream resolution."]
              }), `
`, _jsxs(_components.li, {
                children: ["Some browsers are not fully compatible with dual-stream mode when using the ", _jsx(_components.code, {
                  children: "setRemoteVideoStreamType"
                }), " method. Known issues include:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "macOS Safari: The frame rate and resolution of high- and low-resolution streams are the same."
                  }), `
`, _jsx(_components.li, {
                    children: "iOS Safari 11: Switching between high- and low-resolution streams is not supported."
                  }), `
`, _jsx(_components.li, {
                    children: "Firefox: The frame rate of low-resolution streams is fixed at 30 fps."
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#enabledualstream",
              children: _jsx(_components.code, {
                children: "enableDualStreamMode"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#setstreamfallbackoption",
              children: _jsx(_components.code, {
                children: "setStreamFallbackOption"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#setremotevideostreamtype",
              children: _jsx(_components.code, {
                children: "setRemoteVideoStreamType"
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
