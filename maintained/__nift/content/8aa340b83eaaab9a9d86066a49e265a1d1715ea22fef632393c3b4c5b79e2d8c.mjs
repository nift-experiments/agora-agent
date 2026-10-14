import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Simulcasting multi-bitrate video streams (Beta)",
  description: "Publish multiple video stream layers from one source to adapt Video Calling quality across devices and network conditions."
};
export let _markdown = `

In real-time interactive scenarios such as live broadcasts, conferences, and large-class lectures, adjusting video resolution dynamically improves the user experience across different terminals and network conditions.

Common use cases include:

* **Live streaming**: Push high resolution, and fall back to low resolution under poor network conditions.
* **Video conferencing**: Use high resolution for the main speaker and low resolution for thumbnails.
* **Multi-terminal adaptation**: Deliver high resolution to high-performance devices and low resolution to low-performance devices to optimize bandwidth.
* **Multi-screen adaptation**: Stream different resolutions for large, medium, and small screens.

This guide shows you how to use the RTC SDK to implement multi-bitrate video streaming.

## Understand the tech [#understand-the-tech]

Starting with v4.6.0, RTC SDK introduces simulcasting, which enables you to send up to four simultaneous streams of different configurations (resolutions and frame rates) from the same video source: one source stream and up to three additional configurations. Subscribers can choose different stream levels based on rendering window size or business logic, balancing image quality, performance, bandwidth, and network conditions. If bandwidth or device performance is limited, the sender automatically disables extra streams.

Compared to dual-stream video, simulcasting supports more stream configurations and smoother switching. If you already use dual-stream video, see [Simulcasting vs. Dual-stream video](#simulcasting-vs-dual-stream-video) to choose the right solution for your needs.

<CalloutContainer type="info">
  <CalloutTitle>
    Additional information about simulcasting
  </CalloutTitle>

  <CalloutDescription>
    * Each client can publish up to four simulcast configurations, including both the large and small streams. If you need more (up to eight streams), [contact technical support](mailto\\:support@agora.io).
    * Simulcasting supports publishing video streams at specific tiers based on the subscriber's settings. This feature is disabled by default. [Contact technical support](mailto\\:support@agora.io) to enable.
    * Simulcasting is currently available only for video publishing and subscription on the native platforms. It is not supported on the Web platform. [Contact technical support](mailto\\:support@agora.io) if you need it.
    * Cloud recording supports only large or small stream when simulcasting is enabled.
  </CalloutDescription>
</CalloutContainer>

## Prerequisites [#prerequisites]

Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

## Publish multi-bitrate video streams [#publish-multi-bitrate-video-streams]

To enable and implement this feature, contact [Agora support](mailto\\:support@agora.io).

## Reference [#reference]

This section contains content that completes the information on this page, or points you to documentation that explains other aspects of this product.

### Simulcasting vs. Dual-stream video [#simulcasting-vs-dual-stream-video]

Simulcasting and dual-stream video (\`setDualStreamMode\`) are mutually exclusive. The API you set later overrides the earlier one. Choose the solution that fits your business needs and disable the other.

Compared with dual-stream video, simulcasting offers the following improvements:

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="android" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;windows&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="android" />

    * **More subscribed streams**: Simulcasting expands the number of subscribable streams from 2 to 8. On top of the original large (\`VideoStreamType.VIDEO_STREAM_HIGH\`) and small (\`VideoStreamType.VIDEO_STREAM_LOW\`) streams, simulcasting adds six additional configurations. These are defined as \`VIDEO_STREAM_LAYER_1\` to \`VIDEO_STREAM_LAYER_6\`, corresponding to \`SimulcastConfig.StreamLayerIndex.STREAM_LAYER_1\` to \`SimulcastConfig.StreamLayerIndex.STREAM_LAYER_6\`.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="ios" />

    * **More subscribed streams**: Simulcasting expands the number of subscribable streams from 2 to 8. On top of the original large (\`VideoStreamType.high\`) and small (\`VideoStreamType.low\`) streams, simulcasting adds six additional configurations. These are defined as \`VIDEO_STREAM_LAYER_1\` to \`VIDEO_STREAM_LAYER_6\`, corresponding to \`AgoraStreamLayerIndex.layer1\` to \`AgoraStreamLayerIndex.layer6\`.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="macos" />

    * **More subscribed streams**: Simulcasting expands the number of subscribable streams from 2 to 8. On top of the original large (\`VideoStreamType.high\`) and small (\`VideoStreamType.low\`) streams, simulcasting adds six additional configurations. These are defined as \`VIDEO_STREAM_LAYER_1\` to \`VIDEO_STREAM_LAYER_6\`, corresponding to \`AgoraStreamLayerIndex.layer1\` to \`AgoraStreamLayerIndex.layer6\`.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="windows" />

    * **More subscribed streams**: Simulcasting expands the number of subscribable streams from 2 to 8. On top of the original large (\`VideoStreamType.VIDEO_STREAM_HIGH\`) and small (\`VideoStreamType.VIDEO_STREAM_LOW\`) streams, simulcasting adds six additional configurations. These are defined as \`VIDEO_STREAM_LAYER_1\` to \`VIDEO_STREAM_LAYER_6\`, corresponding to \`SimulcastConfig.StreamLayerIndex.STREAM_LAYER_1\` to \`SimulcastConfig.StreamLayerIndex.STREAM_LAYER_6\`.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

* **Smoother switching experience**: Instead of the two-level switching between large and small streams, simulcasting supports multi-level bitrate switching. This provides a smoother experience and more flexibility for different business scenarios.

To better balance simulcasting performance and network consumption, Agora has implemented the following strategies:

* When the sender device is performance-limited, upstream configurations are automatically disabled, and subscribers adapt to the remaining streams.
* When the uplink bandwidth is limited, additional configurations are disabled first. Then, the previous dual-stream rate control strategy is applied to ensure smooth publishing and subscription.

In terms of functionality, the differences between simulcasting and dual-stream video are summarized in the following table. Agora will continue to close the feature gap in future releases.

| Feature                                                                                            |              Simulcasting             | Dual-stream video |
| -------------------------------------------------------------------------------------------------- | :-----------------------------------: | :---------------: |
| Supports multi-channel scenarios                                                                   |                   ✔                   |         ✔         |
| Small stream automatically adapts video attributes                                                 |                   ✘                   |         ✔         |
| Publisher sends video streams based on subscriber's chosen configuration                           | ✔ Contact technical support to enable |         ✔         |
| When the sender is performance-limited, video streams other than the source stream can be disabled |                   ✔                   |         ✘         |
| When the downlink network is limited, the upstream small stream can be enabled automatically       |                   ✘                   |         ✔         |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In real-time interactive scenarios such as live broadcasts, conferences, and large-class lectures, adjusting video resolution dynamically improves the user experience across different terminals and network conditions."
  }, {
    heading: undefined,
    content: "Common use cases include:"
  }, {
    heading: undefined,
    content: "**Live streaming**: Push high resolution, and fall back to low resolution under poor network conditions."
  }, {
    heading: undefined,
    content: "**Video conferencing**: Use high resolution for the main speaker and low resolution for thumbnails."
  }, {
    heading: undefined,
    content: "**Multi-terminal adaptation**: Deliver high resolution to high-performance devices and low resolution to low-performance devices to optimize bandwidth."
  }, {
    heading: undefined,
    content: "**Multi-screen adaptation**: Stream different resolutions for large, medium, and small screens."
  }, {
    heading: undefined,
    content: "This guide shows you how to use the RTC SDK to implement multi-bitrate video streaming."
  }, {
    heading: "understand-the-tech",
    content: "Starting with v4.6.0, RTC SDK introduces simulcasting, which enables you to send up to four simultaneous streams of different configurations (resolutions and frame rates) from the same video source: one source stream and up to three additional configurations. Subscribers can choose different stream levels based on rendering window size or business logic, balancing image quality, performance, bandwidth, and network conditions. If bandwidth or device performance is limited, the sender automatically disables extra streams."
  }, {
    heading: "understand-the-tech",
    content: "Compared to dual-stream video, simulcasting supports more stream configurations and smoother switching. If you already use dual-stream video, see Simulcasting vs. Dual-stream video to choose the right solution for your needs."
  }, {
    heading: "understand-the-tech",
    content: "Each client can publish up to four simulcast configurations, including both the large and small streams. If you need more (up to eight streams), contact technical support."
  }, {
    heading: "understand-the-tech",
    content: "Simulcasting supports publishing video streams at specific tiers based on the subscriber's settings. This feature is disabled by default. Contact technical support to enable."
  }, {
    heading: "understand-the-tech",
    content: "Simulcasting is currently available only for video publishing and subscription on the native platforms. It is not supported on the Web platform. Contact technical support if you need it."
  }, {
    heading: "understand-the-tech",
    content: "Cloud recording supports only large or small stream when simulcasting is enabled."
  }, {
    heading: "prerequisites",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "publish-multi-bitrate-video-streams",
    content: "To enable and implement this feature, contact Agora support."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects of this product."
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "Simulcasting and dual-stream video (`setDualStreamMode`) are mutually exclusive. The API you set later overrides the earlier one. Choose the solution that fits your business needs and disable the other."
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "Compared with dual-stream video, simulcasting offers the following improvements:"
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "**More subscribed streams**: Simulcasting expands the number of subscribable streams from 2 to 8. On top of the original large (`VideoStreamType.VIDEO_STREAM_HIGH`) and small (`VideoStreamType.VIDEO_STREAM_LOW`) streams, simulcasting adds six additional configurations. These are defined as `VIDEO_STREAM_LAYER_1` to `VIDEO_STREAM_LAYER_6`, corresponding to `SimulcastConfig.StreamLayerIndex.STREAM_LAYER_1` to `SimulcastConfig.StreamLayerIndex.STREAM_LAYER_6`."
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "**More subscribed streams**: Simulcasting expands the number of subscribable streams from 2 to 8. On top of the original large (`VideoStreamType.high`) and small (`VideoStreamType.low`) streams, simulcasting adds six additional configurations. These are defined as `VIDEO_STREAM_LAYER_1` to `VIDEO_STREAM_LAYER_6`, corresponding to `AgoraStreamLayerIndex.layer1` to `AgoraStreamLayerIndex.layer6`."
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "**More subscribed streams**: Simulcasting expands the number of subscribable streams from 2 to 8. On top of the original large (`VideoStreamType.high`) and small (`VideoStreamType.low`) streams, simulcasting adds six additional configurations. These are defined as `VIDEO_STREAM_LAYER_1` to `VIDEO_STREAM_LAYER_6`, corresponding to `AgoraStreamLayerIndex.layer1` to `AgoraStreamLayerIndex.layer6`."
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "**More subscribed streams**: Simulcasting expands the number of subscribable streams from 2 to 8. On top of the original large (`VideoStreamType.VIDEO_STREAM_HIGH`) and small (`VideoStreamType.VIDEO_STREAM_LOW`) streams, simulcasting adds six additional configurations. These are defined as `VIDEO_STREAM_LAYER_1` to `VIDEO_STREAM_LAYER_6`, corresponding to `SimulcastConfig.StreamLayerIndex.STREAM_LAYER_1` to `SimulcastConfig.StreamLayerIndex.STREAM_LAYER_6`."
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "**Smoother switching experience**: Instead of the two-level switching between large and small streams, simulcasting supports multi-level bitrate switching. This provides a smoother experience and more flexibility for different business scenarios."
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "To better balance simulcasting performance and network consumption, Agora has implemented the following strategies:"
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "When the sender device is performance-limited, upstream configurations are automatically disabled, and subscribers adapt to the remaining streams."
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "When the uplink bandwidth is limited, additional configurations are disabled first. Then, the previous dual-stream rate control strategy is applied to ensure smooth publishing and subscription."
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "In terms of functionality, the differences between simulcasting and dual-stream video are summarized in the following table. Agora will continue to close the feature gap in future releases."
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "Feature"
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "Simulcasting"
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "Dual-stream video"
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "Supports multi-channel scenarios"
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "✔"
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "✔"
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "Small stream automatically adapts video attributes"
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "✘"
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "✔"
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "Publisher sends video streams based on subscriber's chosen configuration"
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "✔ Contact technical support to enable"
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "✔"
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "When the sender is performance-limited, video streams other than the source stream can be disabled"
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "✔"
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "✘"
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "When the downlink network is limited, the upstream small stream can be enabled automatically"
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "✘"
  }, {
    heading: "simulcasting-vs-dual-stream-video",
    content: "✔"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "publish-multi-bitrate-video-streams",
    content: "Publish multi-bitrate video streams"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "simulcasting-vs-dual-stream-video",
    content: "Simulcasting vs. Dual-stream video"
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
  url: "#publish-multi-bitrate-video-streams",
  title: _jsx(_Fragment, {
    children: "Publish multi-bitrate video streams"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#simulcasting-vs-dual-stream-video",
  title: _jsx(_Fragment, {
    children: "Simulcasting vs. Dual-stream video"
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
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
      children: "In real-time interactive scenarios such as live broadcasts, conferences, and large-class lectures, adjusting video resolution dynamically improves the user experience across different terminals and network conditions."
    }), `
`, _jsx(_components.p, {
      children: "Common use cases include:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Live streaming"
        }), ": Push high resolution, and fall back to low resolution under poor network conditions."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Video conferencing"
        }), ": Use high resolution for the main speaker and low resolution for thumbnails."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Multi-terminal adaptation"
        }), ": Deliver high resolution to high-performance devices and low resolution to low-performance devices to optimize bandwidth."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Multi-screen adaptation"
        }), ": Stream different resolutions for large, medium, and small screens."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "This guide shows you how to use the RTC SDK to implement multi-bitrate video streaming."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "Starting with v4.6.0, RTC SDK introduces simulcasting, which enables you to send up to four simultaneous streams of different configurations (resolutions and frame rates) from the same video source: one source stream and up to three additional configurations. Subscribers can choose different stream levels based on rendering window size or business logic, balancing image quality, performance, bandwidth, and network conditions. If bandwidth or device performance is limited, the sender automatically disables extra streams."
    }), `
`, _jsxs(_components.p, {
      children: ["Compared to dual-stream video, simulcasting supports more stream configurations and smoother switching. If you already use dual-stream video, see ", _jsx(_components.a, {
        href: "#simulcasting-vs-dual-stream-video",
        children: "Simulcasting vs. Dual-stream video"
      }), " to choose the right solution for your needs."]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Additional information about simulcasting"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Each client can publish up to four simulcast configurations, including both the large and small streams. If you need more (up to eight streams), ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "contact technical support"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["Simulcasting supports publishing video streams at specific tiers based on the subscriber's settings. This feature is disabled by default. ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "Contact technical support"
            }), " to enable."]
          }), `
`, _jsxs(_components.li, {
            children: ["Simulcasting is currently available only for video publishing and subscription on the native platforms. It is not supported on the Web platform. ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "Contact technical support"
            }), " if you need it."]
          }), `
`, _jsx(_components.li, {
            children: "Cloud recording supports only large or small stream when simulcasting is enabled."
          }), `
`]
        })
      })]
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
      id: "publish-multi-bitrate-video-streams",
      children: "Publish multi-bitrate video streams"
    }), `
`, _jsxs(_components.p, {
      children: ["To enable and implement this feature, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "Agora support"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects of this product."
    }), `
`, _jsx(_components.h3, {
      id: "simulcasting-vs-dual-stream-video",
      children: "Simulcasting vs. Dual-stream video"
    }), `
`, _jsxs(_components.p, {
      children: ["Simulcasting and dual-stream video (", _jsx(_components.code, {
        children: "setDualStreamMode"
      }), ") are mutually exclusive. The API you set later overrides the earlier one. Choose the solution that fits your business needs and disable the other."]
    }), `
`, _jsx(_components.p, {
      children: "Compared with dual-stream video, simulcasting offers the following improvements:"
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "android",
      platforms: '["android","ios","macos","windows"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "android"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "More subscribed streams"
            }), ": Simulcasting expands the number of subscribable streams from 2 to 8. On top of the original large (", _jsx(_components.code, {
              children: "VideoStreamType.VIDEO_STREAM_HIGH"
            }), ") and small (", _jsx(_components.code, {
              children: "VideoStreamType.VIDEO_STREAM_LOW"
            }), ") streams, simulcasting adds six additional configurations. These are defined as ", _jsx(_components.code, {
              children: "VIDEO_STREAM_LAYER_1"
            }), " to ", _jsx(_components.code, {
              children: "VIDEO_STREAM_LAYER_6"
            }), ", corresponding to ", _jsx(_components.code, {
              children: "SimulcastConfig.StreamLayerIndex.STREAM_LAYER_1"
            }), " to ", _jsx(_components.code, {
              children: "SimulcastConfig.StreamLayerIndex.STREAM_LAYER_6"
            }), "."]
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
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "More subscribed streams"
            }), ": Simulcasting expands the number of subscribable streams from 2 to 8. On top of the original large (", _jsx(_components.code, {
              children: "VideoStreamType.high"
            }), ") and small (", _jsx(_components.code, {
              children: "VideoStreamType.low"
            }), ") streams, simulcasting adds six additional configurations. These are defined as ", _jsx(_components.code, {
              children: "VIDEO_STREAM_LAYER_1"
            }), " to ", _jsx(_components.code, {
              children: "VIDEO_STREAM_LAYER_6"
            }), ", corresponding to ", _jsx(_components.code, {
              children: "AgoraStreamLayerIndex.layer1"
            }), " to ", _jsx(_components.code, {
              children: "AgoraStreamLayerIndex.layer6"
            }), "."]
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
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "More subscribed streams"
            }), ": Simulcasting expands the number of subscribable streams from 2 to 8. On top of the original large (", _jsx(_components.code, {
              children: "VideoStreamType.high"
            }), ") and small (", _jsx(_components.code, {
              children: "VideoStreamType.low"
            }), ") streams, simulcasting adds six additional configurations. These are defined as ", _jsx(_components.code, {
              children: "VIDEO_STREAM_LAYER_1"
            }), " to ", _jsx(_components.code, {
              children: "VIDEO_STREAM_LAYER_6"
            }), ", corresponding to ", _jsx(_components.code, {
              children: "AgoraStreamLayerIndex.layer1"
            }), " to ", _jsx(_components.code, {
              children: "AgoraStreamLayerIndex.layer6"
            }), "."]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "windows",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "windows"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "More subscribed streams"
            }), ": Simulcasting expands the number of subscribable streams from 2 to 8. On top of the original large (", _jsx(_components.code, {
              children: "VideoStreamType.VIDEO_STREAM_HIGH"
            }), ") and small (", _jsx(_components.code, {
              children: "VideoStreamType.VIDEO_STREAM_LOW"
            }), ") streams, simulcasting adds six additional configurations. These are defined as ", _jsx(_components.code, {
              children: "VIDEO_STREAM_LAYER_1"
            }), " to ", _jsx(_components.code, {
              children: "VIDEO_STREAM_LAYER_6"
            }), ", corresponding to ", _jsx(_components.code, {
              children: "SimulcastConfig.StreamLayerIndex.STREAM_LAYER_1"
            }), " to ", _jsx(_components.code, {
              children: "SimulcastConfig.StreamLayerIndex.STREAM_LAYER_6"
            }), "."]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Smoother switching experience"
        }), ": Instead of the two-level switching between large and small streams, simulcasting supports multi-level bitrate switching. This provides a smoother experience and more flexibility for different business scenarios."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "To better balance simulcasting performance and network consumption, Agora has implemented the following strategies:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "When the sender device is performance-limited, upstream configurations are automatically disabled, and subscribers adapt to the remaining streams."
      }), `
`, _jsx(_components.li, {
        children: "When the uplink bandwidth is limited, additional configurations are disabled first. Then, the previous dual-stream rate control strategy is applied to ensure smooth publishing and subscription."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "In terms of functionality, the differences between simulcasting and dual-stream video are summarized in the following table. Agora will continue to close the feature gap in future releases."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Feature"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Simulcasting"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Dual-stream video"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Supports multi-channel scenarios"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Small stream automatically adapts video attributes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Publisher sends video streams based on subscriber's chosen configuration"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔ Contact technical support to enable"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "When the sender is performance-limited, video streams other than the source stream can be disabled"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "When the downlink network is limited, the upstream small stream can be enabled automatically"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
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
