import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "SDK quickstart",
  description: "Run the IoT SDK example project to stream audio and video in minutes."
};
export let _markdown = `

Agora provides two sample projects that demonstrate core IoT SDK functionality:

* \`hello_rtsa\`: sends and receives media streams
* \`hello_rtm\`: sends and receives signaling messages

The samples are bundled in the \`example\` directory of the IoT SDK package.

This page shows you how to compile and run the \`hello_rtsa\` sample project to start streaming audio and video.

<CalloutContainer type="info">
  <CalloutDescription>
    IoT SDK for Android no longer receives version updates. For Android-based devices, integrate the [RTC Java SDK](/en/api-reference/sdks?product=video\\&platform=android) together with the [Signaling Java SDK](/en/api-reference/sdks?product=signaling\\&platform=android) instead of IoT SDK.
  </CalloutDescription>
</CalloutContainer>

## Prerequisites [#prerequisites]

To follow this procedure you need:

* A computer or an embedded device. This page uses a computer running Ubuntu 18.04 as an example. For the full list of supported operating systems and toolchains, see [Supported platforms](reference/supported-platforms.mdx).
* An Agora [account](/en/introduction/account) and [project](/en/introduction/account).
* A [temporary RTC token](/en/introduction/account#generate-temporary-tokens) generated for your project.

<CalloutContainer type="info">
  <CalloutDescription>
    A testing license is bundled with the sample project. It is valid for 90 days and supports up to 10 concurrent connections. To use IoT SDK in production, apply for and activate a commercial [license](build/authenticate-and-secure-channels/license.mdx).
  </CalloutDescription>
</CalloutContainer>

## Get the SDK [#get-the-sdk]

Agora publishes a separate SDK package for each combination of processor architecture, operating system, C library, and float ABI. The package name encodes these values, for example \`armv7a-linux-uclibceabihf\` is an ARMv7 package for Linux, built with the uClibc C library and hard-float compilation.

[Download](/en/api-reference/sdks?platform=linux) the package that matches your development machine's architecture, C library, and float ABI. For example, to download and extract the \`x86_64-linux-gnu\` package from the terminal:

\`\`\`bash
wget https://download.agora.io/rtsasdk/release/Agora-RTSALite-<build-id>-x86_64-linux-gnu-v<version>.tgz
tar xvf Agora-RTSALite-<build-id>-x86_64-linux-gnu-v<version>.tgz
\`\`\`

Replace \`<build-id>\` and \`<version>\` with the values from your downloaded file name. See [Resources](reference/resources.mdx) for the naming convention used across architectures.

## Compile the example project [#compile-the-example-project]

In the terminal, compile the example project for your architecture:

\`\`\`bash
cd agora_rtsa_sdk/example
./build-x86_64.sh
\`\`\`

This produces two executables in \`out/x86_64\`: \`hello_rtsa\`, for streaming audio and video, and \`hello_rtm\`, for signaling.

<CalloutContainer type="info">
  <CalloutDescription>
    To run \`hello_rtsa\` on an ARM Linux device, first see the porting guide (\`PORTING.md\`) included in the SDK package.
  </CalloutDescription>
</CalloutContainer>

## Run the media streaming example [#run-the-media-streaming-example]

Navigate to the output directory and launch \`hello_rtsa\` with your App ID, a channel name, and your temporary token:

\`\`\`bash
cd out/x86_64
./hello_rtsa -i <your-app-id> -c demo_channel --token <your-rtc-token>
\`\`\`

The app joins the channel \`demo_channel\` and streams the sample media files bundled with the SDK (\`send_video.h264\` for H.264 video and \`send_audio_16k_1ch.pcm\` for PCM audio), using default parameters.

### Verify the result [#verify-the-result]

1. In your browser, navigate to the [Agora web demo](https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html) and initialize it with your App ID.

2. Enter the same channel name (\`demo_channel\`), a user ID, and a token for that channel, then click **Join**.

3. You see and hear the audio and video streamed from your running \`hello_rtsa\` instance.

## Run the signaling example [#run-the-signaling-example]

\`hello_rtm\` demonstrates sending and receiving signaling messages between two peers. Open two terminals and launch one instance in each, using a distinct RTM token and user ID for each side:

\`\`\`bash
./hello_rtm --appId <your-app-id> --rtmUid user1 --peerUid user2 --token <rtm-token-for-user1>
\`\`\`

\`\`\`bash
./hello_rtm --appId <your-app-id> --rtmUid user2 --peerUid user1 --token <rtm-token-for-user2>
\`\`\`

You see each terminal send and receive messages from the other peer.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora provides two sample projects that demonstrate core IoT SDK functionality:"
  }, {
    heading: undefined,
    content: "`hello_rtsa`: sends and receives media streams"
  }, {
    heading: undefined,
    content: "`hello_rtm`: sends and receives signaling messages"
  }, {
    heading: undefined,
    content: "The samples are bundled in the `example` directory of the IoT SDK package."
  }, {
    heading: undefined,
    content: "This page shows you how to compile and run the `hello_rtsa` sample project to start streaming audio and video."
  }, {
    heading: undefined,
    content: "IoT SDK for Android no longer receives version updates. For Android-based devices, integrate the RTC Java SDK together with the Signaling Java SDK instead of IoT SDK."
  }, {
    heading: "prerequisites",
    content: "To follow this procedure you need:"
  }, {
    heading: "prerequisites",
    content: "A computer or an embedded device. This page uses a computer running Ubuntu 18.04 as an example. For the full list of supported operating systems and toolchains, see Supported platforms."
  }, {
    heading: "prerequisites",
    content: "An Agora account and project."
  }, {
    heading: "prerequisites",
    content: "A temporary RTC token generated for your project."
  }, {
    heading: "prerequisites",
    content: "A testing license is bundled with the sample project. It is valid for 90 days and supports up to 10 concurrent connections. To use IoT SDK in production, apply for and activate a commercial license."
  }, {
    heading: "get-the-sdk",
    content: "Agora publishes a separate SDK package for each combination of processor architecture, operating system, C library, and float ABI. The package name encodes these values, for example `armv7a-linux-uclibceabihf` is an ARMv7 package for Linux, built with the uClibc C library and hard-float compilation."
  }, {
    heading: "get-the-sdk",
    content: "Download the package that matches your development machine's architecture, C library, and float ABI. For example, to download and extract the `x86_64-linux-gnu` package from the terminal:"
  }, {
    heading: "get-the-sdk",
    content: "Replace `<build-id>` and `<version>` with the values from your downloaded file name. See Resources for the naming convention used across architectures."
  }, {
    heading: "compile-the-example-project",
    content: "In the terminal, compile the example project for your architecture:"
  }, {
    heading: "compile-the-example-project",
    content: "This produces two executables in `out/x86_64`: `hello_rtsa`, for streaming audio and video, and `hello_rtm`, for signaling."
  }, {
    heading: "compile-the-example-project",
    content: "To run `hello_rtsa` on an ARM Linux device, first see the porting guide (`PORTING.md`) included in the SDK package."
  }, {
    heading: "run-the-media-streaming-example",
    content: "Navigate to the output directory and launch `hello_rtsa` with your App ID, a channel name, and your temporary token:"
  }, {
    heading: "run-the-media-streaming-example",
    content: "The app joins the channel `demo_channel` and streams the sample media files bundled with the SDK (`send_video.h264` for H.264 video and `send_audio_16k_1ch.pcm` for PCM audio), using default parameters."
  }, {
    heading: "verify-the-result",
    content: "In your browser, navigate to the Agora web demo and initialize it with your App ID."
  }, {
    heading: "verify-the-result",
    content: "Enter the same channel name (`demo_channel`), a user ID, and a token for that channel, then click **Join**."
  }, {
    heading: "verify-the-result",
    content: "You see and hear the audio and video streamed from your running `hello_rtsa` instance."
  }, {
    heading: "run-the-signaling-example",
    content: "`hello_rtm` demonstrates sending and receiving signaling messages between two peers. Open two terminals and launch one instance in each, using a distinct RTM token and user ID for each side:"
  }, {
    heading: "run-the-signaling-example",
    content: "You see each terminal send and receive messages from the other peer."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "get-the-sdk",
    content: "Get the SDK"
  }, {
    id: "compile-the-example-project",
    content: "Compile the example project"
  }, {
    id: "run-the-media-streaming-example",
    content: "Run the media streaming example"
  }, {
    id: "verify-the-result",
    content: "Verify the result"
  }, {
    id: "run-the-signaling-example",
    content: "Run the signaling example"
  }]
};
export let toc = [{
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#get-the-sdk",
  title: _jsx(_Fragment, {
    children: "Get the SDK"
  })
}, {
  depth: 2,
  url: "#compile-the-example-project",
  title: _jsx(_Fragment, {
    children: "Compile the example project"
  })
}, {
  depth: 2,
  url: "#run-the-media-streaming-example",
  title: _jsx(_Fragment, {
    children: "Run the media streaming example"
  })
}, {
  depth: 3,
  url: "#verify-the-result",
  title: _jsx(_Fragment, {
    children: "Verify the result"
  })
}, {
  depth: 2,
  url: "#run-the-signaling-example",
  title: _jsx(_Fragment, {
    children: "Run the signaling example"
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora provides two sample projects that demonstrate core IoT SDK functionality:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "hello_rtsa"
        }), ": sends and receives media streams"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "hello_rtm"
        }), ": sends and receives signaling messages"]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The samples are bundled in the ", _jsx(_components.code, {
        children: "example"
      }), " directory of the IoT SDK package."]
    }), `
`, _jsxs(_components.p, {
      children: ["This page shows you how to compile and run the ", _jsx(_components.code, {
        children: "hello_rtsa"
      }), " sample project to start streaming audio and video."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["IoT SDK for Android no longer receives version updates. For Android-based devices, integrate the ", _jsx(_components.a, {
            href: "/en/api-reference/sdks?product=video&platform=android",
            children: "RTC Java SDK"
          }), " together with the ", _jsx(_components.a, {
            href: "/en/api-reference/sdks?product=signaling&platform=android",
            children: "Signaling Java SDK"
          }), " instead of IoT SDK."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "To follow this procedure you need:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["A computer or an embedded device. This page uses a computer running Ubuntu 18.04 as an example. For the full list of supported operating systems and toolchains, see ", _jsx(_components.a, {
          href: "reference/supported-platforms.mdx",
          children: "Supported platforms"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["An Agora ", _jsx(_components.a, {
          href: "/en/introduction/account",
          children: "account"
        }), " and ", _jsx(_components.a, {
          href: "/en/introduction/account",
          children: "project"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["A ", _jsx(_components.a, {
          href: "/en/introduction/account#generate-temporary-tokens",
          children: "temporary RTC token"
        }), " generated for your project."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["A testing license is bundled with the sample project. It is valid for 90 days and supports up to 10 concurrent connections. To use IoT SDK in production, apply for and activate a commercial ", _jsx(_components.a, {
            href: "build/authenticate-and-secure-channels/license.mdx",
            children: "license"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "get-the-sdk",
      children: "Get the SDK"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora publishes a separate SDK package for each combination of processor architecture, operating system, C library, and float ABI. The package name encodes these values, for example ", _jsx(_components.code, {
        children: "armv7a-linux-uclibceabihf"
      }), " is an ARMv7 package for Linux, built with the uClibc C library and hard-float compilation."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/en/api-reference/sdks?platform=linux",
        children: "Download"
      }), " the package that matches your development machine's architecture, C library, and float ABI. For example, to download and extract the ", _jsx(_components.code, {
        children: "x86_64-linux-gnu"
      }), " package from the terminal:"]
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
              children: "wget"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://download.agora.io/rtsasdk/release/Agora-RTSALite-"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "build-i"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "d"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "-x86_64-linux-gnu-v"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "versio"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "n"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ".tgz"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "tar"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " xvf"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Agora-RTSALite-"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "build-i"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "d"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "-x86_64-linux-gnu-v"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "versio"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "n"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ".tgz"
            })]
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Replace ", _jsx(_components.code, {
        children: "<build-id>"
      }), " and ", _jsx(_components.code, {
        children: "<version>"
      }), " with the values from your downloaded file name. See ", _jsx(_components.a, {
        href: "reference/resources.mdx",
        children: "Resources"
      }), " for the naming convention used across architectures."]
    }), `
`, _jsx(_components.h2, {
      id: "compile-the-example-project",
      children: "Compile the example project"
    }), `
`, _jsx(_components.p, {
      children: "In the terminal, compile the example project for your architecture:"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "cd"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " agora_rtsa_sdk/example"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "./build-x86_64.sh"
            })
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["This produces two executables in ", _jsx(_components.code, {
        children: "out/x86_64"
      }), ": ", _jsx(_components.code, {
        children: "hello_rtsa"
      }), ", for streaming audio and video, and ", _jsx(_components.code, {
        children: "hello_rtm"
      }), ", for signaling."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["To run ", _jsx(_components.code, {
            children: "hello_rtsa"
          }), " on an ARM Linux device, first see the porting guide (", _jsx(_components.code, {
            children: "PORTING.md"
          }), ") included in the SDK package."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "run-the-media-streaming-example",
      children: "Run the media streaming example"
    }), `
`, _jsxs(_components.p, {
      children: ["Navigate to the output directory and launch ", _jsx(_components.code, {
        children: "hello_rtsa"
      }), " with your App ID, a channel name, and your temporary token:"]
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "cd"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " out/x86_64"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "./hello_rtsa"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -i"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "your-app-i"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "d"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -c"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " demo_channel"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --token"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "your-rtc-toke"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "n"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The app joins the channel ", _jsx(_components.code, {
        children: "demo_channel"
      }), " and streams the sample media files bundled with the SDK (", _jsx(_components.code, {
        children: "send_video.h264"
      }), " for H.264 video and ", _jsx(_components.code, {
        children: "send_audio_16k_1ch.pcm"
      }), " for PCM audio), using default parameters."]
    }), `
`, _jsx(_components.h3, {
      id: "verify-the-result",
      children: "Verify the result"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In your browser, navigate to the ", _jsx(_components.a, {
            href: "https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html",
            children: "Agora web demo"
          }), " and initialize it with your App ID."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Enter the same channel name (", _jsx(_components.code, {
            children: "demo_channel"
          }), "), a user ID, and a token for that channel, then click ", _jsx(_components.strong, {
            children: "Join"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["You see and hear the audio and video streamed from your running ", _jsx(_components.code, {
            children: "hello_rtsa"
          }), " instance."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "run-the-signaling-example",
      children: "Run the signaling example"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "hello_rtm"
      }), " demonstrates sending and receiving signaling messages between two peers. Open two terminals and launch one instance in each, using a distinct RTM token and user ID for each side:"]
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "./hello_rtm"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --appId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "your-app-i"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "d"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --rtmUid"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " user1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --peerUid"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " user2"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --token"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "rtm-token-for-user"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "1>"
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "./hello_rtm"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --appId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "your-app-i"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "d"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --rtmUid"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " user2"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --peerUid"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " user1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --token"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "rtm-token-for-user"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "2>"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "You see each terminal send and receive messages from the other peer."
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
