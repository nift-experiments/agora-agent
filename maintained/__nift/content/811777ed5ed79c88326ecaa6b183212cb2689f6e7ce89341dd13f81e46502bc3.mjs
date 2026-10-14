import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I enable image enhancement?"
};
export let _markdown = `

During a video call or live streaming, users often want to improve their on-screen appearance, which can help improve their confidence. The Agora RTC SDK provides APIs to help you easily implement basic image enhancement. Users can enable this functionality and then adjust a number of image enhancement options including skin smoothing, acne removal, and a "rosy cheeks" effect to achieve natural-looking enhancements.

If the basic image enhancement function provided by the Agora RTC SDK does not meet your needs and scenarios, you can integrate a third-party image enhancement SDK with the Agora RTC SDK to implement real-time video interaction with advanced image enhancement functions. Agora provides an open-source [sample project](https://github.com/AgoraIO/FaceUnity) for your reference.

## Implementation [#implementation]

1. Ensure that you have implemented basic real-time functions in your project. See the [RTC Quickstart](/en/realtime-media/rtc/get-started-sdk).
2. Call \`setBeautyEffectOptions\` to enable image enhancement and set the image enhancement options.

As of v3.6.0, the Agora RTC SDK for Native platforms and third-party frameworks updates the Agora image enhancement algorithm, which improves the image enhancement effects and supports sharpness adjustment. If you want to experience the optimized image enhancement effects or set the sharpness, upgrade your SDK and make sure the following dynamic libraries are integrated before you call <code>setBeautyEffectOptions</code>:

* Android: <code>libagora\\_video\\_process\\_extension.so</code>
* iOS: <code>AgoraVideoProcessExtension.xcframework</code>
* macOS: <code>AgoraVideoProcessExtension.framework</code> or <code>AgoraVideoProcessExtension.xcframework</code>
* Windows: <code>libagora\\_video\\_process\\_extension.dll</code>

## Sample code [#sample-code]

<CodeBlockTabs defaultValue="Java">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="Java">
      Java
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="Swift">
      Swift
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="Objective-C">
      Objective-C
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="C++">
      C++
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="Web 3.x">
      Web 3.x
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="Web 4.x">
      Web 4.x
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="Java">
    \`\`\`java  tabGroup="image-enhancement"
    // Java
    mRtcEngine.setBeautyEffectOptions(true, new BeautyOptions(LIGHTENING_CONTRAST_NORMAL, 0.5F, 0.5F, 0.5F));
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="Swift">
    \`\`\`swift  tabGroup="image-enhancement"
    // Swift
    let options = AgoraBeautyOptions()
    options.lighteningContrastLevel = .normal
    options.rednessLevel = 0
    options.smoothnessLevel = 0
    options.lighteningLevel = 0

    agoraKit.setBeautyEffectOptions(true, options: options)
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="Objective-C">
    \`\`\`objc  tabGroup="image-enhancement"
    // Objective-C
    AgoraBeautyOptions *options = [[AgoraBeautyOptions alloc] init];
    options.lighteningContrastLevel = AgoraLighteningContrastNormal;
    options.rednessLevel = 0;
    options.smoothnessLevel = 0;
    options.lighteningContrastLevel = 0;

    [self.agoraKit setBeautyEffectOptions:YES options:options];
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="C++">
    \`\`\`cpp  tabGroup="image-enhancement"
    // C++
    bool enabled = true;
    agora::rtc::BeautyOptions options;
    options.lighteningContrastLevel = BeautyOptions::LIGHTENING_CONTRAST_NORMAL;
    options.lighteningLevel = 0.7;
    options.smoothnessLevel = 0.5;
    options.rednessLevel = 0.1;

    m_lpAgoraEngine->setBeautyEffectOptions(enabled, options);
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="Web 3.x">
    \`\`\`javascript  tabGroup="image-enhancement"
    // Web 3.x
    // setBeautyEffectOptions is an asynchronous method and must be called with Promise or async/await keywords.
    // To enable image enhancement immediately after creating a video stream, you can call setBeautyEffectOptions in the Client.on("stream-published") callback.
    var streamPublishedHandler = async function () {
      await localStream.setBeautyEffectOptions(true, {
        lighteningContrastLevel: 1,
        lighteningLevel: 0.7,
        smoothnessLevel: 0.5,
        rednessLevel: 0.1
      });
      client.off('stream-published', streamPublishedHandler);
    };
    client.on('stream-published', streamPublishedHandler);
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="Web 4.x">
    \`\`\`javascript  tabGroup="image-enhancement"
    // Web 4.x
    // Call setBeautyEffect in LocalVideoTrack to set the basic image enhancement function.
    // The localVideoTrack in the following example is a local camera video track object created with AgoraRTC.createCameraVideoTrack.
    localVideoTrack
      .setBeautyEffect(true, {
        lighteningContrastLevel: 1,
        lighteningLevel: 0.7,
        smoothnessLevel: 0.5,
        rednessLevel: 0.1
      })
      .then(() => {
        console.log('set Beauty Effect Options success!');
      });
    \`\`\`
  </CodeBlockTab>
</CodeBlockTabs>

Agora also provides an [Online Demo](https://webdemo-global.agora.io/example/extension/beauty/index.html) for you to experience the basic image enhancement function.

## API reference [#api-reference]

### Native [#native]

* Android: [\`setBeautyEffectOptions\`](https://api-ref.agora.io/en/video-sdk/android/3.x/classio_1_1agora_1_1rtc_1_1_rtc_engine.html#aa9327de4fb0c29f840b1e68ca2e83fc6)
* iOS: [\`setBeautyEffectOptions\`](https://api-ref.agora.io/en/video-sdk/ios/3.x/Classes/AgoraRtcEngineKit.html?platform=iOS#//api/name/setBeautyEffectOptions\\:options:)
* macOS: [\`setBeautyEffectOptions\`](https://api-ref.agora.io/en/video-sdk/macos/3.x/Classes/AgoraRtcEngineKit.html?platform=macOS#//api/name/setBeautyEffectOptions\\:options:)
* Windows: [\`setBeautyEffectOptions\`](https://api-ref.agora.io/en/video-sdk/cpp/3.x/classagora_1_1rtc_1_1_i_rtc_engine.html?platform=Windows#a5899cc462e5250028c9afada4df98d48)

### Web [#web]

* Web 3.x: [\`setBeautyEffectOptions\`](https://api-ref.agora.io/en/video-sdk/web/3.x/interfaces/agorartc.stream.html?platform=Web#setbeautyeffectoptions)
* Web 4.x: [\`BeautyEffectOptions\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ilocalvideotrack.html#setbeautyeffect)

### Third-party frameworks developed from Native [#third-party-frameworks-developed-from-native]

* Electron: [\`setBeautyEffectOptions\`](https://api-ref.agora.io/en/video-sdk/electron/3.x/classes/agorartcengine.html?platform=Electron#setbeautyeffectoptions)
* Unity: [\`setBeautyEffectOptions\`](https://api-ref.agora.io/en/video-sdk/unity/3.x/classagora__gaming__rtc_1_1_i_rtc_engine.html?platform=Unity#ad9c5e1a032d8c81c8e2a416a83ca0904)
* Flutter: [\`setBeautyEffectOptions\`](https://api-ref.agora.io/en/video-sdk/flutter/5.x/class_irtcengine.html#api_setbeautyeffectoptions)
* React Native: [\`setBeautyEffectOptions\`](https://api-ref.agora.io/en/video-sdk/react-native/3.x/classes/rtcengine.html?platform=React%20Native#setbeautyeffectoptions)

## Considerations [#considerations]

* The image enhancement function involves real-time processing that is resource intensive. Therefore, enabling this function can reduce the system performance of low-end devices below acceptable levels.
  Agora does not recommend enabling image enhancement for low-end devices where the user's video-encoding profile is 360P at 30 fps or 720P at 15 fps or higher.
* The image enhancement function of the Agora Web SDK is not supported on mobile devices and only supported on certain browsers. See [Web 3.x or 4.x API reference](#ref).
* When you use the \`setBeautyEffectOptions\` method of the Agora Web 3.x SDK, note that this method has call sequence restrictions and image enhancement options are only available for high-quality video streams. See [Web 3.x API reference](#ref).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: 'During a video call or live streaming, users often want to improve their on-screen appearance, which can help improve their confidence. The Agora RTC SDK provides APIs to help you easily implement basic image enhancement. Users can enable this functionality and then adjust a number of image enhancement options including skin smoothing, acne removal, and a "rosy cheeks" effect to achieve natural-looking enhancements.'
  }, {
    heading: undefined,
    content: "If the basic image enhancement function provided by the Agora RTC SDK does not meet your needs and scenarios, you can integrate a third-party image enhancement SDK with the Agora RTC SDK to implement real-time video interaction with advanced image enhancement functions. Agora provides an open-source sample project for your reference."
  }, {
    heading: "implementation",
    content: "Ensure that you have implemented basic real-time functions in your project. See the RTC Quickstart."
  }, {
    heading: "implementation",
    content: "Call `setBeautyEffectOptions` to enable image enhancement and set the image enhancement options."
  }, {
    heading: "implementation",
    content: "As of v3.6.0, the Agora RTC SDK for Native platforms and third-party frameworks updates the Agora image enhancement algorithm, which improves the image enhancement effects and supports sharpness adjustment. If you want to experience the optimized image enhancement effects or set the sharpness, upgrade your SDK and make sure the following dynamic libraries are integrated before you call setBeautyEffectOptions:"
  }, {
    heading: "implementation",
    content: "Android: libagora\\_video\\_process\\_extension.so"
  }, {
    heading: "implementation",
    content: "iOS: AgoraVideoProcessExtension.xcframework"
  }, {
    heading: "implementation",
    content: "macOS: AgoraVideoProcessExtension.framework or AgoraVideoProcessExtension.xcframework"
  }, {
    heading: "implementation",
    content: "Windows: libagora\\_video\\_process\\_extension.dll"
  }, {
    heading: "sample-code",
    content: "Agora also provides an Online Demo for you to experience the basic image enhancement function."
  }, {
    heading: "native",
    content: "Android: `setBeautyEffectOptions`"
  }, {
    heading: "native",
    content: "iOS: `setBeautyEffectOptions`"
  }, {
    heading: "native",
    content: "macOS: `setBeautyEffectOptions`"
  }, {
    heading: "native",
    content: "Windows: `setBeautyEffectOptions`"
  }, {
    heading: "web",
    content: "Web 3.x: `setBeautyEffectOptions`"
  }, {
    heading: "web",
    content: "Web 4.x: `BeautyEffectOptions`"
  }, {
    heading: "third-party-frameworks-developed-from-native",
    content: "Electron: `setBeautyEffectOptions`"
  }, {
    heading: "third-party-frameworks-developed-from-native",
    content: "Unity: `setBeautyEffectOptions`"
  }, {
    heading: "third-party-frameworks-developed-from-native",
    content: "Flutter: `setBeautyEffectOptions`"
  }, {
    heading: "third-party-frameworks-developed-from-native",
    content: "React Native: `setBeautyEffectOptions`"
  }, {
    heading: "considerations",
    content: `The image enhancement function involves real-time processing that is resource intensive. Therefore, enabling this function can reduce the system performance of low-end devices below acceptable levels.
Agora does not recommend enabling image enhancement for low-end devices where the user's video-encoding profile is 360P at 30 fps or 720P at 15 fps or higher.`
  }, {
    heading: "considerations",
    content: "The image enhancement function of the Agora Web SDK is not supported on mobile devices and only supported on certain browsers. See Web 3.x or 4.x API reference."
  }, {
    heading: "considerations",
    content: "When you use the `setBeautyEffectOptions` method of the Agora Web 3.x SDK, note that this method has call sequence restrictions and image enhancement options are only available for high-quality video streams. See Web 3.x API reference."
  }],
  headings: [{
    id: "implementation",
    content: "Implementation"
  }, {
    id: "sample-code",
    content: "Sample code"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "native",
    content: "Native"
  }, {
    id: "web",
    content: "Web"
  }, {
    id: "third-party-frameworks-developed-from-native",
    content: "Third-party frameworks developed from Native"
  }, {
    id: "considerations",
    content: "Considerations"
  }]
};
export let toc = [{
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 2,
  url: "#sample-code",
  title: _jsx(_Fragment, {
    children: "Sample code"
  })
}, {
  depth: 2,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#native",
  title: _jsx(_Fragment, {
    children: "Native"
  })
}, {
  depth: 3,
  url: "#web",
  title: _jsx(_Fragment, {
    children: "Web"
  })
}, {
  depth: 3,
  url: "#third-party-frameworks-developed-from-native",
  title: _jsx(_Fragment, {
    children: "Third-party frameworks developed from Native"
  })
}, {
  depth: 2,
  url: "#considerations",
  title: _jsx(_Fragment, {
    children: "Considerations"
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
      children: 'During a video call or live streaming, users often want to improve their on-screen appearance, which can help improve their confidence. The Agora RTC SDK provides APIs to help you easily implement basic image enhancement. Users can enable this functionality and then adjust a number of image enhancement options including skin smoothing, acne removal, and a "rosy cheeks" effect to achieve natural-looking enhancements.'
    }), `
`, _jsxs(_components.p, {
      children: ["If the basic image enhancement function provided by the Agora RTC SDK does not meet your needs and scenarios, you can integrate a third-party image enhancement SDK with the Agora RTC SDK to implement real-time video interaction with advanced image enhancement functions. Agora provides an open-source ", _jsx(_components.a, {
        href: "https://github.com/AgoraIO/FaceUnity",
        children: "sample project"
      }), " for your reference."]
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Ensure that you have implemented basic real-time functions in your project. See the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "RTC Quickstart"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Call ", _jsx(_components.code, {
          children: "setBeautyEffectOptions"
        }), " to enable image enhancement and set the image enhancement options."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["As of v3.6.0, the Agora RTC SDK for Native platforms and third-party frameworks updates the Agora image enhancement algorithm, which improves the image enhancement effects and supports sharpness adjustment. If you want to experience the optimized image enhancement effects or set the sharpness, upgrade your SDK and make sure the following dynamic libraries are integrated before you call ", _jsx("code", {
        children: "setBeautyEffectOptions"
      }), ":"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Android: ", _jsx("code", {
          children: "libagora_video_process_extension.so"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["iOS: ", _jsx("code", {
          children: "AgoraVideoProcessExtension.xcframework"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["macOS: ", _jsx("code", {
          children: "AgoraVideoProcessExtension.framework"
        }), " or ", _jsx("code", {
          children: "AgoraVideoProcessExtension.xcframework"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Windows: ", _jsx("code", {
          children: "libagora_video_process_extension.dll"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "sample-code",
      children: "Sample code"
    }), `
`, _jsxs(CodeBlockTabs, {
      defaultValue: "Java",
      children: [_jsxs(CodeBlockTabsList, {
        children: [_jsx(CodeBlockTabsTrigger, {
          value: "Java",
          children: "Java"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "Swift",
          children: "Swift"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "Objective-C",
          children: "Objective-C"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "C++",
          children: "C++"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "Web 3.x",
          children: "Web 3.x"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "Web 4.x",
          children: "Web 4.x"
        })]
      }), _jsx(CodeBlockTab, {
        value: "Java",
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Java"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "mRtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setBeautyEffectOptions"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "true"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " BeautyOptions"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(LIGHTENING_CONTRAST_NORMAL, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0.5F"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0.5F"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0.5F"
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
        })
      }), _jsx(CodeBlockTab, {
        value: "Swift",
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
            icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Swift"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " options "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " AgoraBeautyOptions"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "options.lighteningContrastLevel "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .normal"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "options.rednessLevel "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 0"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "options.smoothnessLevel "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 0"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "options.lighteningLevel "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 0"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setBeautyEffectOptions"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "true"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "options"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": options)"
                })]
              })]
            })
          })
        })
      }), _jsx(CodeBlockTab, {
        value: "Objective-C",
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Objective-C"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "AgoraBeautyOptions "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "options "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " [[AgoraBeautyOptions "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "alloc"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "] "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "init"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "];"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "options.lighteningContrastLevel "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraLighteningContrastNormal;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "options.rednessLevel "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 0"
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
                  children: "options.smoothnessLevel "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 0"
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
                  children: "options.lighteningContrastLevel "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".agoraKit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setBeautyEffectOptions:YES"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " options:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "options];"
                })]
              })]
            })
          })
        })
      }), _jsx(CodeBlockTab, {
        value: "C++",
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// C++"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "bool"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " enabled "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " true"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "rtc"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::BeautyOptions options;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "options.lighteningContrastLevel "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " BeautyOptions"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::LIGHTENING_CONTRAST_NORMAL;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "options.lighteningLevel "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 0.7"
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
                  children: "options.smoothnessLevel "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 0.5"
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
                  children: "options.rednessLevel "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 0.1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_lpAgoraEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setBeautyEffectOptions"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(enabled, options);"
                })]
              })]
            })
          })
        })
      }), _jsx(CodeBlockTab, {
        value: "Web 3.x",
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
            icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Web 3.x"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// setBeautyEffectOptions is an asynchronous method and must be called with Promise or async/await keywords."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: '// To enable image enhancement immediately after creating a video stream, you can call setBeautyEffectOptions in the Client.on("stream-published") callback.'
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " streamPublishedHandler"
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
                  children: " async"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " function"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " () {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " localStream."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setBeautyEffectOptions"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "true"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    lighteningContrastLevel: "
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
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    lighteningLevel: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0.7"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    smoothnessLevel: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0.5"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    rednessLevel: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0.1"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  });"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  client."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "off"
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
                  children: "'stream-published'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", streamPublishedHandler);"
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
                  children: "on"
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
                  children: "'stream-published'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", streamPublishedHandler);"
                })]
              })]
            })
          })
        })
      }), _jsx(CodeBlockTab, {
        value: "Web 4.x",
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
            icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Web 4.x"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Call setBeautyEffect in LocalVideoTrack to set the basic image enhancement function."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// The localVideoTrack in the following example is a local camera video track object created with AgoraRTC.createCameraVideoTrack."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "localVideoTrack"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  ."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setBeautyEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "true"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    lighteningContrastLevel: "
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
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    lighteningLevel: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0.7"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    smoothnessLevel: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0.5"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    rednessLevel: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0.1"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  })"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  ."
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
                  children: "    console."
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
                  children: "'set Beauty Effect Options success!'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  });"
                })
              })]
            })
          })
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["Agora also provides an ", _jsx(_components.a, {
        href: "https://webdemo-global.agora.io/example/extension/beauty/index.html",
        children: "Online Demo"
      }), " for you to experience the basic image enhancement function."]
    }), `
`, _jsx(_components.h2, {
      id: "api-reference",
      children: "API reference"
    }), `
`, _jsx(_components.h3, {
      id: "native",
      children: "Native"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Android: ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/android/3.x/classio_1_1agora_1_1rtc_1_1_rtc_engine.html#aa9327de4fb0c29f840b1e68ca2e83fc6",
          children: _jsx(_components.code, {
            children: "setBeautyEffectOptions"
          })
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["iOS: ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/ios/3.x/Classes/AgoraRtcEngineKit.html?platform=iOS#//api/name/setBeautyEffectOptions:options:",
          children: _jsx(_components.code, {
            children: "setBeautyEffectOptions"
          })
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["macOS: ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/macos/3.x/Classes/AgoraRtcEngineKit.html?platform=macOS#//api/name/setBeautyEffectOptions:options:",
          children: _jsx(_components.code, {
            children: "setBeautyEffectOptions"
          })
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Windows: ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/cpp/3.x/classagora_1_1rtc_1_1_i_rtc_engine.html?platform=Windows#a5899cc462e5250028c9afada4df98d48",
          children: _jsx(_components.code, {
            children: "setBeautyEffectOptions"
          })
        })]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "web",
      children: "Web"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Web 3.x: ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/web/3.x/interfaces/agorartc.stream.html?platform=Web#setbeautyeffectoptions",
          children: _jsx(_components.code, {
            children: "setBeautyEffectOptions"
          })
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Web 4.x: ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ilocalvideotrack.html#setbeautyeffect",
          children: _jsx(_components.code, {
            children: "BeautyEffectOptions"
          })
        })]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "third-party-frameworks-developed-from-native",
      children: "Third-party frameworks developed from Native"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Electron: ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/electron/3.x/classes/agorartcengine.html?platform=Electron#setbeautyeffectoptions",
          children: _jsx(_components.code, {
            children: "setBeautyEffectOptions"
          })
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Unity: ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/unity/3.x/classagora__gaming__rtc_1_1_i_rtc_engine.html?platform=Unity#ad9c5e1a032d8c81c8e2a416a83ca0904",
          children: _jsx(_components.code, {
            children: "setBeautyEffectOptions"
          })
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Flutter: ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/flutter/5.x/class_irtcengine.html#api_setbeautyeffectoptions",
          children: _jsx(_components.code, {
            children: "setBeautyEffectOptions"
          })
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["React Native: ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/react-native/3.x/classes/rtcengine.html?platform=React%20Native#setbeautyeffectoptions",
          children: _jsx(_components.code, {
            children: "setBeautyEffectOptions"
          })
        })]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "considerations",
      children: "Considerations"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: `The image enhancement function involves real-time processing that is resource intensive. Therefore, enabling this function can reduce the system performance of low-end devices below acceptable levels.
Agora does not recommend enabling image enhancement for low-end devices where the user's video-encoding profile is 360P at 30 fps or 720P at 15 fps or higher.`
      }), `
`, _jsxs(_components.li, {
        children: ["The image enhancement function of the Agora Web SDK is not supported on mobile devices and only supported on certain browsers. See ", _jsx(_components.a, {
          href: "#ref",
          children: "Web 3.x or 4.x API reference"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["When you use the ", _jsx(_components.code, {
          children: "setBeautyEffectOptions"
        }), " method of the Agora Web 3.x SDK, note that this method has call sequence restrictions and image enhancement options are only available for high-quality video streams. See ", _jsx(_components.a, {
          href: "#ref",
          children: "Web 3.x API reference"
        }), "."]
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
