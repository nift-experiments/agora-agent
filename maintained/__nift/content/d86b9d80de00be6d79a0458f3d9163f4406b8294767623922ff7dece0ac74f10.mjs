import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  analyticsPageType: "faq-troubleshooting",
  title: "How can I set the mirror mode?"
};
export let _markdown = `

RTC SDK provides various interfaces to customize video display effects on local and remote devices during a real-time audio and video call, including the option to enable or disable mirror mode.

## Configure the local view [#configure-the-local-view]

On the local device, the local user's video stream is linked to the local view. To enable the mirror effect for the local view, use the \`mirrorMode\` parameter in either \`setupLocalVideo\` or \`setLocalRenderMode\`. This setting only affects what the local user sees and does not impact the remote user’s view.

<CalloutContainer type="info">
  <CalloutTitle>
    info
  </CalloutTitle>

  <CalloutDescription>
    Mirror mode is enabled by default for the front camera and disabled by default for the rear camera.
  </CalloutDescription>
</CalloutContainer>

## Configure the remote user's view [#configure-the-remote-users-view]

The remote user’s video stream is linked to a corresponding view on the local device that displays the remote video. To enable the mirror effect for the remote view use the \`mirrorMode\` parameter in \`setupRemoteVideo\` or \`setRemoteRenderMode\`. Like the local view, this setting only affects what the local user sees and does not change the video display for the remote user.

## Configuring the sent local video stream [#configuring-the-sent-local-video-stream]

Once the local video stream is encoded, it is sent to the remote user. To apply the mirror effect to the video stream use the \`config\` parameter in \`setVideoEncoderConfiguration\`. This setting affects only the remote user’s view and does not alter the local user’s display.

## API Reference [#api-reference]

For further details, refer to the following API documentation:

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="android" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;cpp&#x22;,&#x22;macos&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="android" />

    * [\`setupLocalVideo\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setuplocalvideo)
    * [\`setLocalRenderMode\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setlocalrendermode)
    * [\`setupRemoteVideo\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setupremotevideo)
    * [\`setRemoteRenderMode\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setremoterendermode2)
    * [\`setVideoEncoderConfiguration\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setvideoencoderconfiguration)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="ios" />

    * [\`setupLocalVideo\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setuplocalvideo\\(_:\\))
    * [\`setLocalRenderMode\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setlocalrendermode\\(_\\:mirror:\\))
    * [\`setupRemoteVideo\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setupremotevideo\\(_:\\))
    * [\`setRemoteRenderMode\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setremoterendermode\\(_\\:mode\\:mirror:\\))
    * [\`setVideoEncoderConfiguration\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setvideoencoderconfiguration\\(_:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="cpp">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="cpp" />

    * [\`setupLocalVideo\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setuplocalvideo)
    * [\`setLocalRenderMode\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setlocalrendermode)
    * [\`setupRemoteVideo\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setupremotevideo)
    * [\`setRemoteRenderMode\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setremoterendermode2)
    * [\`setVideoEncoderConfiguration\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setvideoencoderconfiguration)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="macos" />

    * [\`setupLocalVideo\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setuplocalvideo\\(_:\\))
    * [\`setLocalRenderMode\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setlocalrendermode\\(_\\:mirror:\\))
    * [\`setupRemoteVideo\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setupremotevideo\\(_:\\))
    * [\`setRemoteRenderMode\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setremoterendermode\\(_\\:mode\\:mirror:\\))
    * [\`setVideoEncoderConfiguration\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setvideoencoderconfiguration\\(_:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "RTC SDK provides various interfaces to customize video display effects on local and remote devices during a real-time audio and video call, including the option to enable or disable mirror mode."
  }, {
    heading: "configure-the-local-view",
    content: "On the local device, the local user's video stream is linked to the local view. To enable the mirror effect for the local view, use the `mirrorMode` parameter in either `setupLocalVideo` or `setLocalRenderMode`. This setting only affects what the local user sees and does not impact the remote user’s view."
  }, {
    heading: "configure-the-local-view",
    content: "Mirror mode is enabled by default for the front camera and disabled by default for the rear camera."
  }, {
    heading: "configure-the-remote-users-view",
    content: "The remote user’s video stream is linked to a corresponding view on the local device that displays the remote video. To enable the mirror effect for the remote view use the `mirrorMode` parameter in `setupRemoteVideo` or `setRemoteRenderMode`. Like the local view, this setting only affects what the local user sees and does not change the video display for the remote user."
  }, {
    heading: "configuring-the-sent-local-video-stream",
    content: "Once the local video stream is encoded, it is sent to the remote user. To apply the mirror effect to the video stream use the `config` parameter in `setVideoEncoderConfiguration`. This setting affects only the remote user’s view and does not alter the local user’s display."
  }, {
    heading: "api-reference",
    content: "For further details, refer to the following API documentation:"
  }, {
    heading: "api-reference",
    content: "`setupLocalVideo`"
  }, {
    heading: "api-reference",
    content: "`setLocalRenderMode`"
  }, {
    heading: "api-reference",
    content: "`setupRemoteVideo`"
  }, {
    heading: "api-reference",
    content: "`setRemoteRenderMode`"
  }, {
    heading: "api-reference",
    content: "`setVideoEncoderConfiguration`"
  }, {
    heading: "api-reference",
    content: "`setupLocalVideo`"
  }, {
    heading: "api-reference",
    content: "`setLocalRenderMode`"
  }, {
    heading: "api-reference",
    content: "`setupRemoteVideo`"
  }, {
    heading: "api-reference",
    content: "`setRemoteRenderMode`"
  }, {
    heading: "api-reference",
    content: "`setVideoEncoderConfiguration`"
  }, {
    heading: "api-reference",
    content: "`setupLocalVideo`"
  }, {
    heading: "api-reference",
    content: "`setLocalRenderMode`"
  }, {
    heading: "api-reference",
    content: "`setupRemoteVideo`"
  }, {
    heading: "api-reference",
    content: "`setRemoteRenderMode`"
  }, {
    heading: "api-reference",
    content: "`setVideoEncoderConfiguration`"
  }, {
    heading: "api-reference",
    content: "`setupLocalVideo`"
  }, {
    heading: "api-reference",
    content: "`setLocalRenderMode`"
  }, {
    heading: "api-reference",
    content: "`setupRemoteVideo`"
  }, {
    heading: "api-reference",
    content: "`setRemoteRenderMode`"
  }, {
    heading: "api-reference",
    content: "`setVideoEncoderConfiguration`"
  }],
  headings: [{
    id: "configure-the-local-view",
    content: "Configure the local view"
  }, {
    id: "configure-the-remote-users-view",
    content: "Configure the remote user's view"
  }, {
    id: "configuring-the-sent-local-video-stream",
    content: "Configuring the sent local video stream"
  }, {
    id: "api-reference",
    content: "API Reference"
  }]
};
export let toc = [{
  depth: 2,
  url: "#configure-the-local-view",
  title: _jsx(_Fragment, {
    children: "Configure the local view"
  })
}, {
  depth: 2,
  url: "#configure-the-remote-users-view",
  title: _jsx(_Fragment, {
    children: "Configure the remote user's view"
  })
}, {
  depth: 2,
  url: "#configuring-the-sent-local-video-stream",
  title: _jsx(_Fragment, {
    children: "Configuring the sent local video stream"
  })
}, {
  depth: 2,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API Reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "RTC SDK provides various interfaces to customize video display effects on local and remote devices during a real-time audio and video call, including the option to enable or disable mirror mode."
    }), `
`, _jsx(_components.h2, {
      id: "configure-the-local-view",
      children: "Configure the local view"
    }), `
`, _jsxs(_components.p, {
      children: ["On the local device, the local user's video stream is linked to the local view. To enable the mirror effect for the local view, use the ", _jsx(_components.code, {
        children: "mirrorMode"
      }), " parameter in either ", _jsx(_components.code, {
        children: "setupLocalVideo"
      }), " or ", _jsx(_components.code, {
        children: "setLocalRenderMode"
      }), ". This setting only affects what the local user sees and does not impact the remote user’s view."]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "info"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Mirror mode is enabled by default for the front camera and disabled by default for the rear camera."
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "configure-the-remote-users-view",
      children: "Configure the remote user's view"
    }), `
`, _jsxs(_components.p, {
      children: ["The remote user’s video stream is linked to a corresponding view on the local device that displays the remote video. To enable the mirror effect for the remote view use the ", _jsx(_components.code, {
        children: "mirrorMode"
      }), " parameter in ", _jsx(_components.code, {
        children: "setupRemoteVideo"
      }), " or ", _jsx(_components.code, {
        children: "setRemoteRenderMode"
      }), ". Like the local view, this setting only affects what the local user sees and does not change the video display for the remote user."]
    }), `
`, _jsx(_components.h2, {
      id: "configuring-the-sent-local-video-stream",
      children: "Configuring the sent local video stream"
    }), `
`, _jsxs(_components.p, {
      children: ["Once the local video stream is encoded, it is sent to the remote user. To apply the mirror effect to the video stream use the ", _jsx(_components.code, {
        children: "config"
      }), " parameter in ", _jsx(_components.code, {
        children: "setVideoEncoderConfiguration"
      }), ". This setting affects only the remote user’s view and does not alter the local user’s display."]
    }), `
`, _jsx(_components.h2, {
      id: "api-reference",
      children: "API Reference"
    }), `
`, _jsx(_components.p, {
      children: "For further details, refer to the following API documentation:"
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "android",
      platforms: '["android","ios","cpp","macos"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "android"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setuplocalvideo",
              children: _jsx(_components.code, {
                children: "setupLocalVideo"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setlocalrendermode",
              children: _jsx(_components.code, {
                children: "setLocalRenderMode"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setupremotevideo",
              children: _jsx(_components.code, {
                children: "setupRemoteVideo"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setremoterendermode2",
              children: _jsx(_components.code, {
                children: "setRemoteRenderMode"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setvideoencoderconfiguration",
              children: _jsx(_components.code, {
                children: "setVideoEncoderConfiguration"
              })
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
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setuplocalvideo(_:)",
              children: _jsx(_components.code, {
                children: "setupLocalVideo"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setlocalrendermode(_:mirror:)",
              children: _jsx(_components.code, {
                children: "setLocalRenderMode"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setupremotevideo(_:)",
              children: _jsx(_components.code, {
                children: "setupRemoteVideo"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setremoterendermode(_:mode:mirror:)",
              children: _jsx(_components.code, {
                children: "setRemoteRenderMode"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setvideoencoderconfiguration(_:)",
              children: _jsx(_components.code, {
                children: "setVideoEncoderConfiguration"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "cpp",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "cpp"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setuplocalvideo",
              children: _jsx(_components.code, {
                children: "setupLocalVideo"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setlocalrendermode",
              children: _jsx(_components.code, {
                children: "setLocalRenderMode"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setupremotevideo",
              children: _jsx(_components.code, {
                children: "setupRemoteVideo"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setremoterendermode2",
              children: _jsx(_components.code, {
                children: "setRemoteRenderMode"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setvideoencoderconfiguration",
              children: _jsx(_components.code, {
                children: "setVideoEncoderConfiguration"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "macos",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "macos"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setuplocalvideo(_:)",
              children: _jsx(_components.code, {
                children: "setupLocalVideo"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setlocalrendermode(_:mirror:)",
              children: _jsx(_components.code, {
                children: "setLocalRenderMode"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setupremotevideo(_:)",
              children: _jsx(_components.code, {
                children: "setupRemoteVideo"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setremoterendermode(_:mode:mirror:)",
              children: _jsx(_components.code, {
                children: "setRemoteRenderMode"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setvideoencoderconfiguration(_:)",
              children: _jsx(_components.code, {
                children: "setVideoEncoderConfiguration"
              })
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
