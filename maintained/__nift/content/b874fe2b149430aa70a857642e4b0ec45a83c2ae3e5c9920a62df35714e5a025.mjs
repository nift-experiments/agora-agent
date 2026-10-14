import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Restrict media zones",
  description: "Restrict access to Agora servers in the specified region"
};
export let _markdown = `

To meet the laws and regulations of different countries or regions, the Agora RTC SDK supports geofencing. After enabling geofencing, the SDK only connects to Agora servers within the specified region, regardless of where your app users are located.

For example, if you specify North America as the region for connection, when two users attempt to connect to Agora servers from different locations, the result is as follows:

| Specified region for connection | App user location | Actual region for connection | User experience after connection                                                                                                                                                                                                                                                                                                                     |
| ------------------------------- | ----------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| North America                   | North America     | North America                | Normal                                                                                                                                                                                                                                                                                                                                               |
| North America                   | China             | North America                | There may be a significant impact on user experience. Due to the cross-region public Internet between the designated area and the area where the app user is located, poor quality of the public Internet network affects the audio and video experience. If the servers in the specified area are not available, the SDK reports an error directly. |

<CalloutContainer type="info">
  <CalloutDescription>
    Restricted media zones is an advanced feature of the SDK. Use it only when required for use-cases with access security restrictions.
  </CalloutDescription>
</CalloutContainer>

## Implementation [#implementation]

When you specify an access area, audio, video and message data is not accessed from servers outside the specified area.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="linux-cpp" platforms="[&#x22;linux-cpp&#x22;,&#x22;linux-java&#x22;,&#x22;python&#x22;,&#x22;go&#x22;]" showTabs="true">
  <_PlatformPanel platform="linux-cpp">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-cpp" />

    To specify the region for connection, when initializing an \`IAgoraService\` instance by calling \`initialize\`, set the \`areaCode\` parameter in \`AgoraServiceConfiguration\`. The following area codes are available:

    * \`AREA_CODE_GLOB\`: Global (Default)
    * \`AREA_CODE_CN\`: Mainland China
    * \`AREA_CODE_NA\`: North America
    * \`AREA_CODE_EU\`: Europe
    * \`AREA_CODE_AS\`: Asia, excluding Mainland China
    * \`AREA_CODE_JP\`: Japan
    * \`AREA_CODE_IN\`: India

    <CalloutContainer type="info">
      <CalloutDescription>
        Area codes support bitwise operations.
      </CalloutDescription>
    </CalloutContainer>

    Refer to the following sample code to specify an access area:

    \`\`\`cpp
    // Create an IAgoraService object
    auto service = createAgoraService();

    agora::base::AgoraServiceConfiguration scfg;
    scfg.enableAudioProcessor = true;
    scfg.enableAudioDevice = false;
    scfg.enableVideo = true;
    scfg.useStringUid = false;

    // Specify North America as the region for connection
    scfg.areaCode = agora::rtc::AREA_CODE_NA;

    // Initialize the IAgoraService instance
    service->initialize(scfg);
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-java">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-java" />

    To specify the area for connection, when initializing an \`IAgoraService\` instance by calling \`initialize\`, call \`AgoraServiceConfig.setAreaCode()\`. The following area codes are available:

    * \`0xFFFFFFFF\`: Global (Default)
    * \`0x00000001\`: Mainland China
    * \`0x00000002\`: North America
    * \`0x00000004\`: Europe
    * \`0x00000008\`: Asia, excluding Mainland China
    * \`0x00000010\`: Japan
    * \`0x00000020\`: India

    <CalloutContainer type="info">
      <CalloutDescription>
        Area codes support bitwise operations.
      </CalloutDescription>
    </CalloutContainer>

    Refer to the following sample code to specify an access area:

    \`\`\`java
    SDK.load(); // ensure JNI library is loaded
    // Create an AgoraService object
    AgoraService service = new AgoraService();
    if (null == service) {
        System.out.printf("createAndInitAgoraService fail\\n");
        return;
    }
    AgoraServiceConfig config = new AgoraServiceConfig();
    // Disable the audio device module
    config.setEnableAudioDevice(0);
    // Enable the audio processing module
    config.setEnableAudioProcessor(1);
    // Whether to enable video
    config.setEnableVideo(0);
    // Specify North America as the region for connection
    config.setAreaCode(0x00000002);
    int ret = service.initialize(config);
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="python">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="python" />

    To specify the access area, set the \`area_code\` parameter in \`AgoraServiceConfig\` when calling the \`initialize\` method to initialize the \`AgoraService\` instance. The following area codes are available:

    * \`AREA_CODE_GLOB\`: Global (Default)
    * \`AREA_CODE_CN\`: Mainland China
    * \`AREA_CODE_NA\`: North America
    * \`AREA_CODE_EU\`: Europe
    * \`AREA_CODE_AS\`: Asia, excluding mainland China
    * \`AREA_CODE_JP\`: Japan
    * \`AREA_CODE_IN\`: India

    <CalloutContainer type="info">
      <CalloutDescription>
        Area codes support bitwise operations.
      </CalloutDescription>
    </CalloutContainer>

    Refer to the following sample code to specify an access area:

    \`\`\`python
    # Create an AgoraService instance
    agora_service = AgoraService()

    # Specify access to servers in North America only
    config = AgoraServiceConfig()
    config.appid = appid
    config.area_code = AreaCode.AREA_CODE_NA.value

    # Initialize an AgoraService instance
    agora_service.initialize(config)
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="go">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="go" />

    To specify the access area, set the \`AreaCode\` parameter in \`AgoraServiceConfig\` when calling the \`initialize\` method to initialize the \`agoraservice\` package. The following area codes are available:

    * \`AreaCodeGlob\`: Global (Default)
    * \`AreaCodeCN\`: Mainland China
    * \`AreaCodeNA\`: North America
    * \`AreaCodeEU\`: Europe
    * \`AreaCodeAS\`: Asia, excluding mainland China
    * \`AreaCodeJP\`: Japan
    * \`AreaCodeIN\`: India

    <CalloutContainer type="info">
      <CalloutDescription>
        Area codes support bitwise operations.
      </CalloutDescription>
    </CalloutContainer>

    Refer to the following sample code to specify an access area:

    \`\`\`go
    svcCfg := agoraservice.NewAgoraServiceConfig()
    svcCfg.AppId = appid

    // Specify access to North American servers only
    svcCfg.AreaCode = agoraservice.AreaCodeNA

    // Initialize the \`agoraservice\` package
    agoraservice.Initialize(svcCfg)
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To meet the laws and regulations of different countries or regions, the Agora RTC SDK supports geofencing. After enabling geofencing, the SDK only connects to Agora servers within the specified region, regardless of where your app users are located."
  }, {
    heading: undefined,
    content: "For example, if you specify North America as the region for connection, when two users attempt to connect to Agora servers from different locations, the result is as follows:"
  }, {
    heading: undefined,
    content: "Specified region for connection"
  }, {
    heading: undefined,
    content: "App user location"
  }, {
    heading: undefined,
    content: "Actual region for connection"
  }, {
    heading: undefined,
    content: "User experience after connection"
  }, {
    heading: undefined,
    content: "North America"
  }, {
    heading: undefined,
    content: "North America"
  }, {
    heading: undefined,
    content: "North America"
  }, {
    heading: undefined,
    content: "Normal"
  }, {
    heading: undefined,
    content: "North America"
  }, {
    heading: undefined,
    content: "China"
  }, {
    heading: undefined,
    content: "North America"
  }, {
    heading: undefined,
    content: "There may be a significant impact on user experience. Due to the cross-region public Internet between the designated area and the area where the app user is located, poor quality of the public Internet network affects the audio and video experience. If the servers in the specified area are not available, the SDK reports an error directly."
  }, {
    heading: undefined,
    content: "Restricted media zones is an advanced feature of the SDK. Use it only when required for use-cases with access security restrictions."
  }, {
    heading: "implementation",
    content: "When you specify an access area, audio, video and message data is not accessed from servers outside the specified area."
  }, {
    heading: "implementation",
    content: "To specify the region for connection, when initializing an `IAgoraService` instance by calling `initialize`, set the `areaCode` parameter in `AgoraServiceConfiguration`. The following area codes are available:"
  }, {
    heading: "implementation",
    content: "`AREA_CODE_GLOB`: Global (Default)"
  }, {
    heading: "implementation",
    content: "`AREA_CODE_CN`: Mainland China"
  }, {
    heading: "implementation",
    content: "`AREA_CODE_NA`: North America"
  }, {
    heading: "implementation",
    content: "`AREA_CODE_EU`: Europe"
  }, {
    heading: "implementation",
    content: "`AREA_CODE_AS`: Asia, excluding Mainland China"
  }, {
    heading: "implementation",
    content: "`AREA_CODE_JP`: Japan"
  }, {
    heading: "implementation",
    content: "`AREA_CODE_IN`: India"
  }, {
    heading: "implementation",
    content: "Area codes support bitwise operations."
  }, {
    heading: "implementation",
    content: "Refer to the following sample code to specify an access area:"
  }, {
    heading: "implementation",
    content: "To specify the area for connection, when initializing an `IAgoraService` instance by calling `initialize`, call `AgoraServiceConfig.setAreaCode()`. The following area codes are available:"
  }, {
    heading: "implementation",
    content: "`0xFFFFFFFF`: Global (Default)"
  }, {
    heading: "implementation",
    content: "`0x00000001`: Mainland China"
  }, {
    heading: "implementation",
    content: "`0x00000002`: North America"
  }, {
    heading: "implementation",
    content: "`0x00000004`: Europe"
  }, {
    heading: "implementation",
    content: "`0x00000008`: Asia, excluding Mainland China"
  }, {
    heading: "implementation",
    content: "`0x00000010`: Japan"
  }, {
    heading: "implementation",
    content: "`0x00000020`: India"
  }, {
    heading: "implementation",
    content: "Area codes support bitwise operations."
  }, {
    heading: "implementation",
    content: "Refer to the following sample code to specify an access area:"
  }, {
    heading: "implementation",
    content: "To specify the access area, set the `area_code` parameter in `AgoraServiceConfig` when calling the `initialize` method to initialize the `AgoraService` instance. The following area codes are available:"
  }, {
    heading: "implementation",
    content: "`AREA_CODE_GLOB`: Global (Default)"
  }, {
    heading: "implementation",
    content: "`AREA_CODE_CN`: Mainland China"
  }, {
    heading: "implementation",
    content: "`AREA_CODE_NA`: North America"
  }, {
    heading: "implementation",
    content: "`AREA_CODE_EU`: Europe"
  }, {
    heading: "implementation",
    content: "`AREA_CODE_AS`: Asia, excluding mainland China"
  }, {
    heading: "implementation",
    content: "`AREA_CODE_JP`: Japan"
  }, {
    heading: "implementation",
    content: "`AREA_CODE_IN`: India"
  }, {
    heading: "implementation",
    content: "Area codes support bitwise operations."
  }, {
    heading: "implementation",
    content: "Refer to the following sample code to specify an access area:"
  }, {
    heading: "implementation",
    content: "To specify the access area, set the `AreaCode` parameter in `AgoraServiceConfig` when calling the `initialize` method to initialize the `agoraservice` package. The following area codes are available:"
  }, {
    heading: "implementation",
    content: "`AreaCodeGlob`: Global (Default)"
  }, {
    heading: "implementation",
    content: "`AreaCodeCN`: Mainland China"
  }, {
    heading: "implementation",
    content: "`AreaCodeNA`: North America"
  }, {
    heading: "implementation",
    content: "`AreaCodeEU`: Europe"
  }, {
    heading: "implementation",
    content: "`AreaCodeAS`: Asia, excluding mainland China"
  }, {
    heading: "implementation",
    content: "`AreaCodeJP`: Japan"
  }, {
    heading: "implementation",
    content: "`AreaCodeIN`: India"
  }, {
    heading: "implementation",
    content: "Area codes support bitwise operations."
  }, {
    heading: "implementation",
    content: "Refer to the following sample code to specify an access area:"
  }],
  headings: [{
    id: "implementation",
    content: "Implementation"
  }]
};
export let toc = [{
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "To meet the laws and regulations of different countries or regions, the Agora RTC SDK supports geofencing. After enabling geofencing, the SDK only connects to Agora servers within the specified region, regardless of where your app users are located."
    }), `
`, _jsx(_components.p, {
      children: "For example, if you specify North America as the region for connection, when two users attempt to connect to Agora servers from different locations, the result is as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Specified region for connection"
          }), _jsx(_components.th, {
            children: "App user location"
          }), _jsx(_components.th, {
            children: "Actual region for connection"
          }), _jsx(_components.th, {
            children: "User experience after connection"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "North America"
          }), _jsx(_components.td, {
            children: "North America"
          }), _jsx(_components.td, {
            children: "North America"
          }), _jsx(_components.td, {
            children: "Normal"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "North America"
          }), _jsx(_components.td, {
            children: "China"
          }), _jsx(_components.td, {
            children: "North America"
          }), _jsx(_components.td, {
            children: "There may be a significant impact on user experience. Due to the cross-region public Internet between the designated area and the area where the app user is located, poor quality of the public Internet network affects the audio and video experience. If the servers in the specified area are not available, the SDK reports an error directly."
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Restricted media zones is an advanced feature of the SDK. Use it only when required for use-cases with access security restrictions."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsx(_components.p, {
      children: "When you specify an access area, audio, video and message data is not accessed from servers outside the specified area."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "linux-cpp",
      platforms: '["linux-cpp","linux-java","python","go"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "linux-cpp",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "linux-cpp",
          platform: "linux-cpp"
        }), _jsxs(_components.p, {
          children: ["To specify the region for connection, when initializing an ", _jsx(_components.code, {
            children: "IAgoraService"
          }), " instance by calling ", _jsx(_components.code, {
            children: "initialize"
          }), ", set the ", _jsx(_components.code, {
            children: "areaCode"
          }), " parameter in ", _jsx(_components.code, {
            children: "AgoraServiceConfiguration"
          }), ". The following area codes are available:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AREA_CODE_GLOB"
            }), ": Global (Default)"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AREA_CODE_CN"
            }), ": Mainland China"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AREA_CODE_NA"
            }), ": North America"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AREA_CODE_EU"
            }), ": Europe"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AREA_CODE_AS"
            }), ": Asia, excluding Mainland China"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AREA_CODE_JP"
            }), ": Japan"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AREA_CODE_IN"
            }), ": India"]
          }), `
`]
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "Area codes support bitwise operations."
            })
          })
        }), _jsx(_components.p, {
          children: "Refer to the following sample code to specify an access area:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create an IAgoraService object"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "auto"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " service "
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
                  children: " createAgoraService"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
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
                  children: "base"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::AgoraServiceConfiguration scfg;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "scfg.enableAudioProcessor "
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "scfg.enableAudioDevice "
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
                  children: " false"
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
                  children: "scfg.enableVideo "
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "scfg.useStringUid "
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
                  children: " false"
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
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Specify North America as the region for connection"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "scfg.areaCode "
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
                  children: " agora"
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
                  children: "::AREA_CODE_NA;"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IAgoraService instance"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "service->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(scfg);"
                })]
              })]
            })
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "linux-java",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "linux-cpp",
          platform: "linux-java"
        }), _jsxs(_components.p, {
          children: ["To specify the area for connection, when initializing an ", _jsx(_components.code, {
            children: "IAgoraService"
          }), " instance by calling ", _jsx(_components.code, {
            children: "initialize"
          }), ", call ", _jsx(_components.code, {
            children: "AgoraServiceConfig.setAreaCode()"
          }), ". The following area codes are available:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "0xFFFFFFFF"
            }), ": Global (Default)"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "0x00000001"
            }), ": Mainland China"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "0x00000002"
            }), ": North America"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "0x00000004"
            }), ": Europe"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "0x00000008"
            }), ": Asia, excluding Mainland China"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "0x00000010"
            }), ": Japan"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "0x00000020"
            }), ": India"]
          }), `
`]
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "Area codes support bitwise operations."
            })
          })
        }), _jsx(_components.p, {
          children: "Refer to the following sample code to specify an access area:"
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
                  children: "SDK."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "load"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(); "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// ensure JNI library is loaded"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create an AgoraService object"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "AgoraService service "
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
                  children: " AgoraService"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "null"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " =="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " service) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    System.out."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "printf"
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
                  children: '"createAndInitAgoraService fail'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "\\n"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    return"
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
                  children: "}"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "AgoraServiceConfig config "
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
                  children: " AgoraServiceConfig"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Disable the audio device module"
                })
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
                  children: "setEnableAudioDevice"
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
                  children: "0"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Enable the audio processing module"
                })
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
                  children: "setEnableAudioProcessor"
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
                  children: "1"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Whether to enable video"
                })
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
                  children: "setEnableVideo"
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
                  children: "0"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Specify North America as the region for connection"
                })
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
                  children: "setAreaCode"
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
                  children: "0x00000002"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ret "
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
                  children: " service."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(config);"
                })]
              })]
            })
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "python",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "linux-cpp",
          platform: "python"
        }), _jsxs(_components.p, {
          children: ["To specify the access area, set the ", _jsx(_components.code, {
            children: "area_code"
          }), " parameter in ", _jsx(_components.code, {
            children: "AgoraServiceConfig"
          }), " when calling the ", _jsx(_components.code, {
            children: "initialize"
          }), " method to initialize the ", _jsx(_components.code, {
            children: "AgoraService"
          }), " instance. The following area codes are available:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AREA_CODE_GLOB"
            }), ": Global (Default)"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AREA_CODE_CN"
            }), ": Mainland China"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AREA_CODE_NA"
            }), ": North America"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AREA_CODE_EU"
            }), ": Europe"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AREA_CODE_AS"
            }), ": Asia, excluding mainland China"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AREA_CODE_JP"
            }), ": Japan"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AREA_CODE_IN"
            }), ": India"]
          }), `
`]
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "Area codes support bitwise operations."
            })
          })
        }), _jsx(_components.p, {
          children: "Refer to the following sample code to specify an access area:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# Create an AgoraService instance"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agora_service "
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
                  children: " AgoraService()"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# Specify access to servers in North America only"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
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
                  children: " AgoraServiceConfig()"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.appid "
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
                  children: " appid"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.area_code "
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
                  children: " AreaCode."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "AREA_CODE_NA"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".value"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# Initialize an AgoraService instance"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agora_service.initialize(config)"
                })
              })]
            })
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "go",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "linux-cpp",
          platform: "go"
        }), _jsxs(_components.p, {
          children: ["To specify the access area, set the ", _jsx(_components.code, {
            children: "AreaCode"
          }), " parameter in ", _jsx(_components.code, {
            children: "AgoraServiceConfig"
          }), " when calling the ", _jsx(_components.code, {
            children: "initialize"
          }), " method to initialize the ", _jsx(_components.code, {
            children: "agoraservice"
          }), " package. The following area codes are available:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AreaCodeGlob"
            }), ": Global (Default)"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AreaCodeCN"
            }), ": Mainland China"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AreaCodeNA"
            }), ": North America"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AreaCodeEU"
            }), ": Europe"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AreaCodeAS"
            }), ": Asia, excluding mainland China"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AreaCodeJP"
            }), ": Japan"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AreaCodeIN"
            }), ": India"]
          }), `
`]
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "Area codes support bitwise operations."
            })
          })
        }), _jsx(_components.p, {
          children: "Refer to the following sample code to specify an access area:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "svcCfg "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " agoraservice."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "NewAgoraServiceConfig"
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
                  children: "svcCfg.AppId "
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
                  children: " appid"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Specify access to North American servers only"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "svcCfg.AreaCode "
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
                  children: " agoraservice.AreaCodeNA"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the `agoraservice` package"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraservice."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(svcCfg)"
                })]
              })]
            })
          })
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
