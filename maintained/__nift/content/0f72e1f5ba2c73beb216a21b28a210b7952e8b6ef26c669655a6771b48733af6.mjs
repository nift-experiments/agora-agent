import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Browser autoplay",
  description: "Handle autoplay failures in Agora Web SDK."
};
export let _markdown = `

To give users more control over media playback, browsers limit autoplay. They often require user interaction, like clicking or tapping, before audio can play. This prevents disruptive or unexpected audio from automatically starting when users visit a webpage, leading to a smoother and less intrusive experience.

In most browsers, video without sound can autoplay without restriction. However, on iOS devices, video autoplay may be restricted in specific cases:

* iOS Safari when in low-power mode.
* iOS WKWebView, such as in the WeChat browser, if custom autoplay restrictions are enabled.

## Understand the tech [#understand-the-tech]

When using the Agora Web SDK, calling \`play()\` on audio or video tracks before any user interaction may cause the media to fail due to autoplay restrictions. As a result, users may neither hear the audio nor see the video.

To handle autoplay restrictions when using the Web SDK, consider one of the following approaches:

**Remove autoplay restriction via callback**: If autoplay fails, use the \`onAutoplayFailed\` callback to display a button, prompting users to interact with the page and remove the autoplay restriction.

**Ensure interaction before playback**: Ensure that the user interacts with the page before calling \`play()\`. This guarantees that media plays as intended.

<CalloutContainer type="info">
  <CalloutDescription>
    Even with these solutions, autoplay restrictions require users to interact with the page before media can play. Over time, if users frequently visit the page, browsers may relax the autoplay policy for that specific page. However, this behavior cannot be detected or controlled through JavaScript.
  </CalloutDescription>
</CalloutContainer>

## Prerequisites [#prerequisites]

Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

## Implementation [#implementation]

This section explains how to handle autoplay failures and ensure media plays properly when user interaction is required.

### Handle autoplay failure using \`onAutoplayFailed\` [#handle-autoplay-failure-using-onautoplayfailed]

When an audio or video track fails to play automatically, use the \`onAutoplayFailed\` callback to prompt users to resume playback with a button click.

Refer to the following sample code to display a button to handle autoplay failure:

\`\`\`javascript
AgoraRTC.onAutoplayFailed = () => {
 const btn = document.createElement("button");
 btn.innerText = "Click me to resume the audio/video playback";
 btn.onclick = () => {
  btn.remove();
 };
 document.body.append(btn);
};
\`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    If multiple audio or video track objects attempt to play automatically within a short time and autoplay fails, the \`onAutoplayFailed\` callback is triggered only once. After the user clicks to resume playback, the callback does not fire again for subsequent tracks until user interaction resumes.
  </CalloutDescription>
</CalloutContainer>

### Handle autoplay failure in iOS Safari/WebView [#handle-autoplay-failure-in-ios-safariwebview]

For desktop browsers, ensuring interaction before playback resolves most autoplay restrictions. However, iOS Safari/WebView has more stringent autoplay policies:

* iOS Safari allows audio playback only when directly triggered by user interaction.
* Autoplay restrictions are not removed after the user interacts.

To support iOS Safari/WebView, adapt your user interaction flow to meet these stricter requirements.

For example, display an icon to indicate that the remote user is muted. This guides the user to click the icon to play the remote user's audio. Refer to the following sample code:

HTML:

\`\`\`html
<div id="user1-audio">Muted</div>
\`\`\`

\`\`\`javascript
document.getElementById("user1-audio").onclick = (e) => {
 if (user1.audioTrack.isPlaying) {
  user1.audioTrack.stop();
  e.target.innerHTML = "Muted";
 } else {
  user1.audioTrack.play();
  e.target.innerHTML = "Playing";
 }
};
\`\`\`

This approach ensures that the playback is user-triggered and compliant with iOS Safari's strict autoplay policy.

## Reference [#reference]

This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

### API reference [#api-reference]

* [\`onAutoplayFailed\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#onautoplayfailed)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To give users more control over media playback, browsers limit autoplay. They often require user interaction, like clicking or tapping, before audio can play. This prevents disruptive or unexpected audio from automatically starting when users visit a webpage, leading to a smoother and less intrusive experience."
  }, {
    heading: undefined,
    content: "In most browsers, video without sound can autoplay without restriction. However, on iOS devices, video autoplay may be restricted in specific cases:"
  }, {
    heading: undefined,
    content: "iOS Safari when in low-power mode."
  }, {
    heading: undefined,
    content: "iOS WKWebView, such as in the WeChat browser, if custom autoplay restrictions are enabled."
  }, {
    heading: "understand-the-tech",
    content: "When using the Agora Web SDK, calling `play()` on audio or video tracks before any user interaction may cause the media to fail due to autoplay restrictions. As a result, users may neither hear the audio nor see the video."
  }, {
    heading: "understand-the-tech",
    content: "To handle autoplay restrictions when using the Web SDK, consider one of the following approaches:"
  }, {
    heading: "understand-the-tech",
    content: "**Remove autoplay restriction via callback**: If autoplay fails, use the `onAutoplayFailed` callback to display a button, prompting users to interact with the page and remove the autoplay restriction."
  }, {
    heading: "understand-the-tech",
    content: "**Ensure interaction before playback**: Ensure that the user interacts with the page before calling `play()`. This guarantees that media plays as intended."
  }, {
    heading: "understand-the-tech",
    content: "Even with these solutions, autoplay restrictions require users to interact with the page before media can play. Over time, if users frequently visit the page, browsers may relax the autoplay policy for that specific page. However, this behavior cannot be detected or controlled through JavaScript."
  }, {
    heading: "prerequisites",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implementation",
    content: "This section explains how to handle autoplay failures and ensure media plays properly when user interaction is required."
  }, {
    heading: "handle-autoplay-failure-using-onautoplayfailed",
    content: "When an audio or video track fails to play automatically, use the `onAutoplayFailed` callback to prompt users to resume playback with a button click."
  }, {
    heading: "handle-autoplay-failure-using-onautoplayfailed",
    content: "Refer to the following sample code to display a button to handle autoplay failure:"
  }, {
    heading: "handle-autoplay-failure-using-onautoplayfailed",
    content: "If multiple audio or video track objects attempt to play automatically within a short time and autoplay fails, the `onAutoplayFailed` callback is triggered only once. After the user clicks to resume playback, the callback does not fire again for subsequent tracks until user interaction resumes."
  }, {
    heading: "handle-autoplay-failure-in-ios-safariwebview",
    content: "For desktop browsers, ensuring interaction before playback resolves most autoplay restrictions. However, iOS Safari/WebView has more stringent autoplay policies:"
  }, {
    heading: "handle-autoplay-failure-in-ios-safariwebview",
    content: "iOS Safari allows audio playback only when directly triggered by user interaction."
  }, {
    heading: "handle-autoplay-failure-in-ios-safariwebview",
    content: "Autoplay restrictions are not removed after the user interacts."
  }, {
    heading: "handle-autoplay-failure-in-ios-safariwebview",
    content: "To support iOS Safari/WebView, adapt your user interaction flow to meet these stricter requirements."
  }, {
    heading: "handle-autoplay-failure-in-ios-safariwebview",
    content: "For example, display an icon to indicate that the remote user is muted. This guides the user to click the icon to play the remote user's audio. Refer to the following sample code:"
  }, {
    heading: "handle-autoplay-failure-in-ios-safariwebview",
    content: "HTML:"
  }, {
    heading: "handle-autoplay-failure-in-ios-safariwebview",
    content: "This approach ensures that the playback is user-triggered and compliant with iOS Safari's strict autoplay policy."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference",
    content: "`onAutoplayFailed`"
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
    id: "handle-autoplay-failure-using-onautoplayfailed",
    content: "Handle autoplay failure using `onAutoplayFailed`"
  }, {
    id: "handle-autoplay-failure-in-ios-safariwebview",
    content: "Handle autoplay failure in iOS Safari/WebView"
  }, {
    id: "reference",
    content: "Reference"
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
  depth: 3,
  url: "#handle-autoplay-failure-using-onautoplayfailed",
  title: _jsxs(_Fragment, {
    children: ["Handle autoplay failure using ", _jsx("code", {
      children: "onAutoplayFailed"
    })]
  })
}, {
  depth: 3,
  url: "#handle-autoplay-failure-in-ios-safariwebview",
  title: _jsx(_Fragment, {
    children: "Handle autoplay failure in iOS Safari/WebView"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "To give users more control over media playback, browsers limit autoplay. They often require user interaction, like clicking or tapping, before audio can play. This prevents disruptive or unexpected audio from automatically starting when users visit a webpage, leading to a smoother and less intrusive experience."
    }), `
`, _jsx(_components.p, {
      children: "In most browsers, video without sound can autoplay without restriction. However, on iOS devices, video autoplay may be restricted in specific cases:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "iOS Safari when in low-power mode."
      }), `
`, _jsx(_components.li, {
        children: "iOS WKWebView, such as in the WeChat browser, if custom autoplay restrictions are enabled."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsxs(_components.p, {
      children: ["When using the Agora Web SDK, calling ", _jsx(_components.code, {
        children: "play()"
      }), " on audio or video tracks before any user interaction may cause the media to fail due to autoplay restrictions. As a result, users may neither hear the audio nor see the video."]
    }), `
`, _jsx(_components.p, {
      children: "To handle autoplay restrictions when using the Web SDK, consider one of the following approaches:"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Remove autoplay restriction via callback"
      }), ": If autoplay fails, use the ", _jsx(_components.code, {
        children: "onAutoplayFailed"
      }), " callback to display a button, prompting users to interact with the page and remove the autoplay restriction."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Ensure interaction before playback"
      }), ": Ensure that the user interacts with the page before calling ", _jsx(_components.code, {
        children: "play()"
      }), ". This guarantees that media plays as intended."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Even with these solutions, autoplay restrictions require users to interact with the page before media can play. Over time, if users frequently visit the page, browsers may relax the autoplay policy for that specific page. However, this behavior cannot be detected or controlled through JavaScript."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.p, {
      children: ["Ensure that you have implemented the ", _jsx(_components.a, {
        href: "/en/realtime-media/rtc/get-started-sdk",
        children: "SDK quickstart"
      }), " in your project."]
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsx(_components.p, {
      children: "This section explains how to handle autoplay failures and ensure media plays properly when user interaction is required."
    }), `
`, _jsxs(_components.h3, {
      id: "handle-autoplay-failure-using-onautoplayfailed",
      children: ["Handle autoplay failure using ", _jsx(_components.code, {
        children: "onAutoplayFailed"
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["When an audio or video track fails to play automatically, use the ", _jsx(_components.code, {
        children: "onAutoplayFailed"
      }), " callback to prompt users to resume playback with a button click."]
    }), `
`, _jsx(_components.p, {
      children: "Refer to the following sample code to display a button to handle autoplay failure:"
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
              children: "AgoraRTC."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "onAutoplayFailed"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " () "
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " btn"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " document."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "createElement"
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
              children: '"button"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " btn.innerText "
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
              children: ' "Click me to resume the audio/video playback"'
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
              children: " btn."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "onclick"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " () "
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
              children: "  btn."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "remove"
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
              children: " };"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " document.body."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "append"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(btn);"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "};"
            })
          })]
        })
      })
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If multiple audio or video track objects attempt to play automatically within a short time and autoplay fails, the ", _jsx(_components.code, {
            children: "onAutoplayFailed"
          }), " callback is triggered only once. After the user clicks to resume playback, the callback does not fire again for subsequent tracks until user interaction resumes."]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "handle-autoplay-failure-in-ios-safariwebview",
      children: "Handle autoplay failure in iOS Safari/WebView"
    }), `
`, _jsx(_components.p, {
      children: "For desktop browsers, ensuring interaction before playback resolves most autoplay restrictions. However, iOS Safari/WebView has more stringent autoplay policies:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "iOS Safari allows audio playback only when directly triggered by user interaction."
      }), `
`, _jsx(_components.li, {
        children: "Autoplay restrictions are not removed after the user interacts."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "To support iOS Safari/WebView, adapt your user interaction flow to meet these stricter requirements."
    }), `
`, _jsx(_components.p, {
      children: "For example, display an icon to indicate that the remote user is muted. This guides the user to click the icon to play the remote user's audio. Refer to the following sample code:"
    }), `
`, _jsx(_components.p, {
      children: "HTML:"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
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
              children: "div"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " id"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"user1-audio"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">Muted</"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
          })
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "document."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getElementById"
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
              children: '"user1-audio"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "onclick"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "e"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") "
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " if"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (user1.audioTrack.isPlaying) {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  user1.audioTrack."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "stop"
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
              children: "  e.target.innerHTML "
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
              children: ' "Muted"'
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
              children: " } "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "else"
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
              children: "  user1.audioTrack."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "play"
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
              children: "  e.target.innerHTML "
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
              children: ' "Playing"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "};"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "This approach ensures that the playback is user-triggered and compliant with iOS Safari's strict autoplay policy."
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
    }), `
`, _jsx(_components.h3, {
      id: "api-reference",
      children: "API reference"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#onautoplayfailed",
          children: _jsx(_components.code, {
            children: "onAutoplayFailed"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
