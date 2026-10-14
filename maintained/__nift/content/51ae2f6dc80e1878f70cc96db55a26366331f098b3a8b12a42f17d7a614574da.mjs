import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "LiveData Conversation Intelligence",
  description: "Integrate and use the LiveData Conversation Intelligence extension in your Android or iOS app."
};
export let _markdown = `

The LiveData Conversation Intelligence extension enables you to quickly add real-time speech transcription and translation features to your app.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="android" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="android" />

    This page shows you how to integrate and use the extension in your app.

    ## Understand the tech [#understand-the-tech]

    The extension is an encapsulation of a cloud real-time speech recognition and translation API. You can integrate its capabilities by passing the specified \`key\` and \`value\` parameters to the \`setExtensionProperty\` method provided by the RTC SDK.

    ## Prerequisites [#prerequisites]

    * Android Studio 4.1 or later.
    * A physical device (not an emulator) running Android 5.0 or later.
    * Integrated the RTC SDK and implemented basic video calling, see [SDK quickstart](/en/realtime-media/rtc/get-started-sdk).

    ## Project setup [#project-setup]

    The extension provides a sample project on GitHub:

    1. Clone the repository:

       \`\`\`bash
       git clone https://github.com/highras/rtvt-agora-marketplace.git
       \`\`\`

    2. Open the sample project in Android Studio.

    3. Sync the project with Gradle files.

    4. Connect a real Android device and run the project.

    ## Integrate the extension [#integrate-the-extension]

    ### Purchase and activate the extension [#purchase-and-activate-the-extension]

    Visit Extensions Marketplace and purchase the extension. Save the \`appKey\` and \`appSecret\` used to initialize it.

    ### Add the extension package [#add-the-extension-package]

    1. Download the extension package from Extensions Marketplace.
    2. Save all \`.aar\` files to \`/app/libs\`.
    3. Add the Gradle dependency:

       \`\`\`text
       implementation fileTree(dir: "libs", include: ["*.jar", "*.aar"])
       \`\`\`

    ### Enable the extension [#enable-the-extension]

    \`\`\`java
    RtcEngineConfig config = new RtcEngineConfig();
    config.addExtension("agora-iLiveData-filter");
    engine = RtcEngine.create(config);
    engine.enableExtension("iLiveData", "RTVT", true);
    \`\`\`

    ### Start transcription and translation [#start-transcription-and-translation]

    \`\`\`java
    JSONObject jsonObject = new JSONObject();
    jsonObject.put("appKey", "80001000");
    jsonObject.put("appSecret", "qwerty");
    jsonObject.put("srclang", "zh");
    jsonObject.put("dstLang", "en");

    engine.setExtensionProperty(
      EXTENSION_VENDOR_NAME,
      EXTENSION_AUDIO_FILTER_VOLUME,
      "startAudioTranslation",
      jsonObject.toString()
    );
    \`\`\`

    ### Get transcription and translation results [#get-transcription-and-translation-results]

    After successful initialization, the extension returns transcription and translation results through the \`onEvent\` callback.

    ### Stop using the extension [#stop-using-the-extension]

    \`\`\`java
    engine.setExtensionProperty(
      EXTENSION_VENDOR_NAME,
      EXTENSION_AUDIO_FILTER_VOLUME,
      "closeAudioTranslation",
      "end"
    );
    \`\`\`

    ## Reference [#reference]

    * [RtcEngineConfig.addExtension](/en/api-reference/rtc/android/class-and-enum/classes/class-rtcengineconfig)
    * [enableExtension](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_enableextension)
    * [setExtensionProperty](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="ios" />

    This page shows you how to integrate and use the extension in your app.

    ## Understand the tech [#understand-the-tech-1]

    The extension is an encapsulation of a cloud real-time speech recognition and translation API. You can integrate its capabilities by passing the specified \`key\` and \`value\` parameters to the \`setExtensionPropertyWithVendor\` method provided by the RTC SDK.

    ## Prerequisites [#prerequisites-1]

    * Xcode 9.0 or later.
    * A physical device (not an emulator) running iOS 9.0 or later.
    * Integrated the RTC SDK and implemented basic video calling, see [SDK quickstart](/en/realtime-media/rtc/get-started-sdk).

    ## Project setup [#project-setup-1]

    1. Clone the sample repository:

       \`\`\`bash
       git clone https://github.com/highras/rtvt-agora-marketplace.git
       \`\`\`

    2. Enter \`iOS/SW_Test\` and run:

       \`\`\`bash
       pod install
       \`\`\`

    3. Open \`SW_Test.xcworkspace\` in Xcode.

    4. Connect a real iOS device and run the project.

    ## Integrate the extension [#integrate-the-extension-1]

    ### Add the extension package [#add-the-extension-package-1]

    1. Download the extension package from Extensions Marketplace.
    2. Save all \`.framework\` files to your project folder.
    3. Add the dynamic libraries in Xcode and make sure **Embed** is set to **Embed & Sign**.
    4. Add \`-ObjC\` to **Other Linker Flags**.

       ![Add ObjC](https://assets-docs.agora.io/images/extensions-marketplace/livedata-ios-build-settings-add-objc.png)

    ![Capitalize O and C](https://assets-docs.agora.io/images/extensions-marketplace/livedata-ios-build-settings-capitalize-o-and-c.png)

    ### Enable the extension [#enable-the-extension-1]

    \`\`\`objc
    AgoraRtcEngineConfig *config = [AgoraRtcEngineConfig new];
    config.eventDelegate = self;
    self.agoraKit = [AgoraRtcEngineKit sharedEngineWithConfig:config delegate:self];
    [self.kit enableExtensionWithVendor:[iLiveDataSimpleFilterManager companyName]
                              extension:[iLiveDataSimpleFilterManager plugName]
                                enabled:YES];
    \`\`\`

    ### Start transcription and translation [#start-transcription-and-translation-1]

    Use \`setExtensionPropertyWithVendor\` with the \`startAudioTranslation\` key and a JSON string containing \`appKey\`, \`appSecret\`, \`srcLanguage\`, and \`destLanguage\`.

    ### Get transcription and translation results [#get-transcription-and-translation-results-1]

    After successful initialization, the extension returns transcription and translation results through the \`onEvent\` callback.

    ### Stop using the extension [#stop-using-the-extension-1]

    Use \`setExtensionPropertyWithVendor\` with the \`closeAudioTranslation\` key.

    ## Reference [#reference-1]

    * [enableExtensionWithVendor](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enableextension\\(withvendor\\:extension\\:enabled:\\))
    * [setExtensionPropertyWithVendor](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setextensionpropertywithvendor\\(_\\:extension\\:extensioninfo\\:key\\:value:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The LiveData Conversation Intelligence extension enables you to quickly add real-time speech transcription and translation features to your app."
  }, {
    heading: undefined,
    content: "This page shows you how to integrate and use the extension in your app."
  }, {
    heading: "understand-the-tech",
    content: "The extension is an encapsulation of a cloud real-time speech recognition and translation API. You can integrate its capabilities by passing the specified `key` and `value` parameters to the `setExtensionProperty` method provided by the RTC SDK."
  }, {
    heading: "prerequisites",
    content: "Android Studio 4.1 or later."
  }, {
    heading: "prerequisites",
    content: "A physical device (not an emulator) running Android 5.0 or later."
  }, {
    heading: "prerequisites",
    content: "Integrated the RTC SDK and implemented basic video calling, see SDK quickstart."
  }, {
    heading: "project-setup",
    content: "The extension provides a sample project on GitHub:"
  }, {
    heading: "project-setup",
    content: "Clone the repository:"
  }, {
    heading: "project-setup",
    content: "Open the sample project in Android Studio."
  }, {
    heading: "project-setup",
    content: "Sync the project with Gradle files."
  }, {
    heading: "project-setup",
    content: "Connect a real Android device and run the project."
  }, {
    heading: "purchase-and-activate-the-extension",
    content: "Visit Extensions Marketplace and purchase the extension. Save the `appKey` and `appSecret` used to initialize it."
  }, {
    heading: "add-the-extension-package",
    content: "Download the extension package from Extensions Marketplace."
  }, {
    heading: "add-the-extension-package",
    content: "Save all `.aar` files to `/app/libs`."
  }, {
    heading: "add-the-extension-package",
    content: "Add the Gradle dependency:"
  }, {
    heading: "get-transcription-and-translation-results",
    content: "After successful initialization, the extension returns transcription and translation results through the `onEvent` callback."
  }, {
    heading: "reference",
    content: "RtcEngineConfig.addExtension"
  }, {
    heading: "reference",
    content: "enableExtension"
  }, {
    heading: "reference",
    content: "setExtensionProperty"
  }, {
    heading: "reference",
    content: "This page shows you how to integrate and use the extension in your app."
  }, {
    heading: "understand-the-tech-1",
    content: "The extension is an encapsulation of a cloud real-time speech recognition and translation API. You can integrate its capabilities by passing the specified `key` and `value` parameters to the `setExtensionPropertyWithVendor` method provided by the RTC SDK."
  }, {
    heading: "prerequisites-1",
    content: "Xcode 9.0 or later."
  }, {
    heading: "prerequisites-1",
    content: "A physical device (not an emulator) running iOS 9.0 or later."
  }, {
    heading: "prerequisites-1",
    content: "Integrated the RTC SDK and implemented basic video calling, see SDK quickstart."
  }, {
    heading: "project-setup-1",
    content: "Clone the sample repository:"
  }, {
    heading: "project-setup-1",
    content: "Enter `iOS/SW_Test` and run:"
  }, {
    heading: "project-setup-1",
    content: "Open `SW_Test.xcworkspace` in Xcode."
  }, {
    heading: "project-setup-1",
    content: "Connect a real iOS device and run the project."
  }, {
    heading: "add-the-extension-package-1",
    content: "Download the extension package from Extensions Marketplace."
  }, {
    heading: "add-the-extension-package-1",
    content: "Save all `.framework` files to your project folder."
  }, {
    heading: "add-the-extension-package-1",
    content: "Add the dynamic libraries in Xcode and make sure **Embed** is set to **Embed & Sign**."
  }, {
    heading: "add-the-extension-package-1",
    content: "Add `-ObjC` to **Other Linker Flags**."
  }, {
    heading: "start-transcription-and-translation-1",
    content: "Use `setExtensionPropertyWithVendor` with the `startAudioTranslation` key and a JSON string containing `appKey`, `appSecret`, `srcLanguage`, and `destLanguage`."
  }, {
    heading: "get-transcription-and-translation-results-1",
    content: "After successful initialization, the extension returns transcription and translation results through the `onEvent` callback."
  }, {
    heading: "stop-using-the-extension-1",
    content: "Use `setExtensionPropertyWithVendor` with the `closeAudioTranslation` key."
  }, {
    heading: "reference-1",
    content: "enableExtensionWithVendor"
  }, {
    heading: "reference-1",
    content: "setExtensionPropertyWithVendor"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "project-setup",
    content: "Project setup"
  }, {
    id: "integrate-the-extension",
    content: "Integrate the extension"
  }, {
    id: "purchase-and-activate-the-extension",
    content: "Purchase and activate the extension"
  }, {
    id: "add-the-extension-package",
    content: "Add the extension package"
  }, {
    id: "enable-the-extension",
    content: "Enable the extension"
  }, {
    id: "start-transcription-and-translation",
    content: "Start transcription and translation"
  }, {
    id: "get-transcription-and-translation-results",
    content: "Get transcription and translation results"
  }, {
    id: "stop-using-the-extension",
    content: "Stop using the extension"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "understand-the-tech-1",
    content: "Understand the tech"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "project-setup-1",
    content: "Project setup"
  }, {
    id: "integrate-the-extension-1",
    content: "Integrate the extension"
  }, {
    id: "add-the-extension-package-1",
    content: "Add the extension package"
  }, {
    id: "enable-the-extension-1",
    content: "Enable the extension"
  }, {
    id: "start-transcription-and-translation-1",
    content: "Start transcription and translation"
  }, {
    id: "get-transcription-and-translation-results-1",
    content: "Get transcription and translation results"
  }, {
    id: "stop-using-the-extension-1",
    content: "Stop using the extension"
  }, {
    id: "reference-1",
    content: "Reference"
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
  url: "#project-setup",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 2,
  url: "#integrate-the-extension",
  title: _jsx(_Fragment, {
    children: "Integrate the extension"
  })
}, {
  depth: 3,
  url: "#purchase-and-activate-the-extension",
  title: _jsx(_Fragment, {
    children: "Purchase and activate the extension"
  })
}, {
  depth: 3,
  url: "#add-the-extension-package",
  title: _jsx(_Fragment, {
    children: "Add the extension package"
  })
}, {
  depth: 3,
  url: "#enable-the-extension",
  title: _jsx(_Fragment, {
    children: "Enable the extension"
  })
}, {
  depth: 3,
  url: "#start-transcription-and-translation",
  title: _jsx(_Fragment, {
    children: "Start transcription and translation"
  })
}, {
  depth: 3,
  url: "#get-transcription-and-translation-results",
  title: _jsx(_Fragment, {
    children: "Get transcription and translation results"
  })
}, {
  depth: 3,
  url: "#stop-using-the-extension",
  title: _jsx(_Fragment, {
    children: "Stop using the extension"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-1",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-1",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#project-setup-1",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 2,
  url: "#integrate-the-extension-1",
  title: _jsx(_Fragment, {
    children: "Integrate the extension"
  })
}, {
  depth: 3,
  url: "#add-the-extension-package-1",
  title: _jsx(_Fragment, {
    children: "Add the extension package"
  })
}, {
  depth: 3,
  url: "#enable-the-extension-1",
  title: _jsx(_Fragment, {
    children: "Enable the extension"
  })
}, {
  depth: 3,
  url: "#start-transcription-and-translation-1",
  title: _jsx(_Fragment, {
    children: "Start transcription and translation"
  })
}, {
  depth: 3,
  url: "#get-transcription-and-translation-results-1",
  title: _jsx(_Fragment, {
    children: "Get transcription and translation results"
  })
}, {
  depth: 3,
  url: "#stop-using-the-extension-1",
  title: _jsx(_Fragment, {
    children: "Stop using the extension"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
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
    children: [_jsx(_components.p, {
      children: "The LiveData Conversation Intelligence extension enables you to quickly add real-time speech transcription and translation features to your app."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "android",
      platforms: '["android","ios"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "android"
        }), _jsx(_components.p, {
          children: "This page shows you how to integrate and use the extension in your app."
        }), _jsx(_components.h2, {
          id: "understand-the-tech",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["The extension is an encapsulation of a cloud real-time speech recognition and translation API. You can integrate its capabilities by passing the specified ", _jsx(_components.code, {
            children: "key"
          }), " and ", _jsx(_components.code, {
            children: "value"
          }), " parameters to the ", _jsx(_components.code, {
            children: "setExtensionProperty"
          }), " method provided by the RTC SDK."]
        }), _jsx(_components.h2, {
          id: "prerequisites",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Android Studio 4.1 or later."
          }), `
`, _jsx(_components.li, {
            children: "A physical device (not an emulator) running Android 5.0 or later."
          }), `
`, _jsxs(_components.li, {
            children: ["Integrated the RTC SDK and implemented basic video calling, see ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), "."]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "project-setup",
          children: "Project setup"
        }), _jsx(_components.p, {
          children: "The extension provides a sample project on GitHub:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Clone the repository:"
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
                      children: "git"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " clone"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " https://github.com/highras/rtvt-agora-marketplace.git"
                    })]
                  })
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Open the sample project in Android Studio."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Sync the project with Gradle files."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Connect a real Android device and run the project."
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "integrate-the-extension",
          children: "Integrate the extension"
        }), _jsx(_components.h3, {
          id: "purchase-and-activate-the-extension",
          children: "Purchase and activate the extension"
        }), _jsxs(_components.p, {
          children: ["Visit Extensions Marketplace and purchase the extension. Save the ", _jsx(_components.code, {
            children: "appKey"
          }), " and ", _jsx(_components.code, {
            children: "appSecret"
          }), " used to initialize it."]
        }), _jsx(_components.h3, {
          id: "add-the-extension-package",
          children: "Add the extension package"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Download the extension package from Extensions Marketplace."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Save all ", _jsx(_components.code, {
                children: ".aar"
              }), " files to ", _jsx(_components.code, {
                children: "/app/libs"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Add the Gradle dependency:"
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "implementation"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " fileTree"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "dir:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "libs",'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " include:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ["
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"*.jar"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"*.aar"]'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })]
                  })
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "enable-the-extension",
          children: "Enable the extension"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RtcEngineConfig config "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " RtcEngineConfig"
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
                  children: "config."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "addExtension"
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
                  children: '"agora-iLiveData-filter"'
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
                  children: "engine "
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
                  children: " RtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "create"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(config);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "enableExtension"
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
                  children: '"iLiveData"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"RTVT"'
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
                  children: "true"
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
        }), _jsx(_components.h3, {
          id: "start-transcription-and-translation",
          children: "Start transcription and translation"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "JSONObject jsonObject "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " JSONObject"
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
                  children: "jsonObject."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "put"
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
                  children: '"appKey"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"80001000"'
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
                  children: "jsonObject."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "put"
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
                  children: '"appSecret"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"qwerty"'
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
                  children: "jsonObject."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "put"
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
                  children: '"srclang"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"zh"'
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
                  children: "jsonObject."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "put"
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
                  children: '"dstLang"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"en"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
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
                  children: "engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setExtensionProperty"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  EXTENSION_VENDOR_NAME,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  EXTENSION_AUDIO_FILTER_VOLUME,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "startAudioTranslation"'
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
                  children: "  jsonObject."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "toString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "get-transcription-and-translation-results",
          children: "Get transcription and translation results"
        }), _jsxs(_components.p, {
          children: ["After successful initialization, the extension returns transcription and translation results through the ", _jsx(_components.code, {
            children: "onEvent"
          }), " callback."]
        }), _jsx(_components.h3, {
          id: "stop-using-the-extension",
          children: "Stop using the extension"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setExtensionProperty"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  EXTENSION_VENDOR_NAME,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  EXTENSION_AUDIO_FILTER_VOLUME,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "closeAudioTranslation"'
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "end"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })
              })]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference",
          children: "Reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/rtc/android/class-and-enum/classes/class-rtcengineconfig",
              children: "RtcEngineConfig.addExtension"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_enableextension",
              children: "enableExtension"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setextensionproperty",
              children: "setExtensionProperty"
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "ios",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "ios"
        }), _jsx(_components.p, {
          children: "This page shows you how to integrate and use the extension in your app."
        }), _jsx(_components.h2, {
          id: "understand-the-tech-1",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["The extension is an encapsulation of a cloud real-time speech recognition and translation API. You can integrate its capabilities by passing the specified ", _jsx(_components.code, {
            children: "key"
          }), " and ", _jsx(_components.code, {
            children: "value"
          }), " parameters to the ", _jsx(_components.code, {
            children: "setExtensionPropertyWithVendor"
          }), " method provided by the RTC SDK."]
        }), _jsx(_components.h2, {
          id: "prerequisites-1",
          children: "Prerequisites"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Xcode 9.0 or later."
          }), `
`, _jsx(_components.li, {
            children: "A physical device (not an emulator) running iOS 9.0 or later."
          }), `
`, _jsxs(_components.li, {
            children: ["Integrated the RTC SDK and implemented basic video calling, see ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), "."]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "project-setup-1",
          children: "Project setup"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Clone the sample repository:"
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
                      children: "git"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " clone"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " https://github.com/highras/rtvt-agora-marketplace.git"
                    })]
                  })
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Enter ", _jsx(_components.code, {
                children: "iOS/SW_Test"
              }), " and run:"]
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
                      children: "pod"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " install"
                    })]
                  })
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Open ", _jsx(_components.code, {
                children: "SW_Test.xcworkspace"
              }), " in Xcode."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Connect a real iOS device and run the project."
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "integrate-the-extension-1",
          children: "Integrate the extension"
        }), _jsx(_components.h3, {
          id: "add-the-extension-package-1",
          children: "Add the extension package"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Download the extension package from Extensions Marketplace."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Save all ", _jsx(_components.code, {
                children: ".framework"
              }), " files to your project folder."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Add the dynamic libraries in Xcode and make sure ", _jsx(_components.strong, {
                children: "Embed"
              }), " is set to ", _jsx(_components.strong, {
                children: "Embed & Sign"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Add ", _jsx(_components.code, {
                children: "-ObjC"
              }), " to ", _jsx(_components.strong, {
                children: "Other Linker Flags"
              }), "."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/extensions-marketplace/livedata-ios-build-settings-add-objc.png",
                alt: "Add ObjC"
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/extensions-marketplace/livedata-ios-build-settings-capitalize-o-and-c.png",
            alt: "Capitalize O and C"
          })
        }), _jsx(_components.h3, {
          id: "enable-the-extension-1",
          children: "Enable the extension"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "AgoraRtcEngineConfig "
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
                  children: "config "
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
                  children: " [AgoraRtcEngineConfig "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "new"
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
                  children: "config.eventDelegate "
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
                  children: " self"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " [AgoraRtcEngineKit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "sharedEngineWithConfig:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "delegate:self"
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
                  children: ".kit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "enableExtensionWithVendor:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "[iLiveDataSimpleFilterManager "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "companyName"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "                          extension:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "[iLiveDataSimpleFilterManager "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "plugName"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "                            enabled:YES"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "];"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "start-transcription-and-translation-1",
          children: "Start transcription and translation"
        }), _jsxs(_components.p, {
          children: ["Use ", _jsx(_components.code, {
            children: "setExtensionPropertyWithVendor"
          }), " with the ", _jsx(_components.code, {
            children: "startAudioTranslation"
          }), " key and a JSON string containing ", _jsx(_components.code, {
            children: "appKey"
          }), ", ", _jsx(_components.code, {
            children: "appSecret"
          }), ", ", _jsx(_components.code, {
            children: "srcLanguage"
          }), ", and ", _jsx(_components.code, {
            children: "destLanguage"
          }), "."]
        }), _jsx(_components.h3, {
          id: "get-transcription-and-translation-results-1",
          children: "Get transcription and translation results"
        }), _jsxs(_components.p, {
          children: ["After successful initialization, the extension returns transcription and translation results through the ", _jsx(_components.code, {
            children: "onEvent"
          }), " callback."]
        }), _jsx(_components.h3, {
          id: "stop-using-the-extension-1",
          children: "Stop using the extension"
        }), _jsxs(_components.p, {
          children: ["Use ", _jsx(_components.code, {
            children: "setExtensionPropertyWithVendor"
          }), " with the ", _jsx(_components.code, {
            children: "closeAudioTranslation"
          }), " key."]
        }), _jsx(_components.h2, {
          id: "reference-1",
          children: "Reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enableextension(withvendor:extension:enabled:)",
              children: "enableExtensionWithVendor"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setextensionpropertywithvendor(_:extension:extensioninfo:key:value:)",
              children: "setExtensionPropertyWithVendor"
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })]
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
