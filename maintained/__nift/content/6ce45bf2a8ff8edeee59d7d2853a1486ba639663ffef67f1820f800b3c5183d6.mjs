import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "IoT SDK overview",
  description: "Quickly implement real-time audio and video transmission and intercommunication for IoT use cases."
};
export let _markdown = `

Agora's IoT SDK brings real-time audio and video engagement to smart devices with a lightweight design optimized for low-resource and battery-powered systems. Compatible with WebRTC and a wide range of chipsets, it supports seamless cross-platform development across mobile, PC, web, and smart displays. With robust performance in weak network conditions and integration with Agora’s real-time platform, it’s ideal for live streaming, remote control, and interactive IoT applications.

Use the IoT SDK to build lightweight, cross-platform apps for smart devices, from video doorbells to smart displays. Designed for low power consumption and exceptional network performance, it offers full compatibility with Agora’s RTC and Signaling platforms, simplifying development for interactive and reliable IoT solutions.

Built on Agora’s Software-Defined Real-Time Network (SDRTN®), the IoT SDK ensures high connectivity, low latency, and maximum stability even in challenging network conditions. Add real-time audio and video capabilities to smart devices with a small footprint, minimal power consumption, and seamless interoperability with Agora’s real-time platform and RTC SDKs.

## Start building [#start-building]

<Cards>
  <Card title="SDK quickstart" href="quickstart.mdx" description="Run the IoT SDK example project to stream audio and video." />

  <Card title="Build from scratch" href="build-from-scratch.mdx" description="Integrate media streaming and Signaling into your own project, step by step." />

  <Card title="Download SDKs" href="/en/api-reference/sdks?product=iot" description="Get the latest IoT SDK package for your target device." />

  <Card title="Authentication" href="build/authenticate-and-secure-channels/authentication-workflow.mdx" description="Secure IoT SDK connections with tokens." />

  <Card title="API reference" href="/en/api-reference/api-ref" description="Explore IoT SDK API references and related integration surfaces." />

  <Card title="Samples" href="https://github.com/AgoraIO/API-Examples" description="Browse open-source sample projects for IoT workflows." />
</Cards>

## Product Features [#product-features]

<CardGrid>
  <FeatureCard title="Highly integrated">
    IoT SDK integrates both real-time communication and Signaling services, so you can easily develop features like live streaming and remote control at the same time.
  </FeatureCard>

  <FeatureCard title="Lightweight design">
    Designed for low-resource embedded systems, IoT SDK has a small package footprint as low as 400kB so you don’t have to worry about system resource usage.
  </FeatureCard>

  <FeatureCard title="Low power consumption">
    Based on low hardware requirements, IoT SDK works well with battery-powered devices like video doorbells.
  </FeatureCard>

  <FeatureCard title="Cross-platform">
    IoT SDK is compatible with RTC SDK for Web, and developers can build apps across platforms like mobile, PC, web, and smart displays like Amazon Alexa, without plugins, while supporting a wide range of chipsets and operating systems.
  </FeatureCard>

  <FeatureCard title="Excellent resistance to poor networks">
    With end-to-end algorithmic network optimization, IoT SDK provides smooth live streaming even in weak network environments.
  </FeatureCard>

  <FeatureCard title="Interoperable with the full Agora platform">
    IoT SDK is interoperable with other Agora products so you can easily build up the companion apps on iOS, Android, or any other platform.
  </FeatureCard>
</CardGrid>

## Common use cases [#common-use-cases]

| Use case              | Description                                                                                                                                                                                                                                                                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Broadcasting devices  | Deliver real-time audio and video streams from IoT devices to multiple audience clients on mobile, web, or desktop platforms. Supports scenarios such as sports livestreaming, with synchronized features like timers, scoring, play-by-play information, and betting, connecting on-site devices with low-latency broadcast and interactive viewing services. |
| Real-time monitoring  | Let users view live video from one or more cameras, view the same camera stream from multiple mobile devices, view multiple camera streams from one mobile device, and communicate with the camera through two-way audio.                                                                                                                                      |
| Cellular smartwatches | Enable real-time audio and video calls between a low-power cellular smartwatch and a mobile application.                                                                                                                                                                                                                                                       |
| Remote control        | Combine Signaling and real-time media capabilities to build remote control applications for smart devices, robots, cameras, and other connected hardware.                                                                                                                                                                                                      |

## Core capabilities [#core-capabilities]

| Capability                                         | Description                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IoT SDK interoperability                           | Supports intercommunication between IoT SDKs using multiple audio and video encoding formats. See \`audio_data_type_e\` and \`video_data_type_e\`.                                                                                                                                                                          |
| RTC SDK interoperability                           | Supports bidirectional intercommunication between IoT SDK and RTC Server SDK, RTC Native SDK, RTC third-party framework SDKs, and RTC Web SDK. See [Communicate with RTC SDK](build/send-messages/interoperate-with-rtc-sdk.mdx).                                                                                       |
| Uplink bandwidth prediction and bitrate adaptation | Proposes target bitrate recommendations based on a bandwidth prediction algorithm, and reports whether to increase or decrease bitrate to boost throughput and avoid network congestion. See [Adapt the sending bitrate](build/manage-connections-and-quality/bitrate-adaptation.mdx).                                  |
| Cloud Proxy connectivity                           | Supports connecting to Agora through networks with firewall or access restrictions. See [Connect with Cloud Proxy](build/manage-connections-and-quality/cloud-proxy.mdx).                                                                                                                                               |
| Key frames                                         | Supports requesting local key frames to improve encoding and decoding efficiency and reduce data storage footprint. See [Send and receive key frames](build/configure-media/key-frame.mdx).                                                                                                                             |
| Stream state management                            | Supports flexibly starting and pausing local audio and video publishing and remote audio and video subscription, with status monitoring. See [Manage stream state](build/manage-connections-and-quality/stream-state.mdx).                                                                                              |
| Multiple media formats                             | Supports multiple audio and video formats for different device and interoperability requirements, including G.711, G.722, Opus, and AAC audio, and H.264 and JPEG video. See [Configure the audio codec](build/configure-media/audio-codec.mdx).                                                                        |
| Security and compliance support                    | Supports media stream encryption and geofencing to help protect media transmission and control where your application can connect. See [Secure channel encryption](build/authenticate-and-secure-channels/media-stream-encryption.mdx) and [Restrict media zones](build/manage-connections-and-quality/geofencing.mdx). |

## Product performance [#product-performance]

| Metric             | Specification                                                        |
| ------------------ | -------------------------------------------------------------------- |
| Package size       | SDK integration adds less than 400 KB.                               |
| Memory usage       | Less than 2 MB for simultaneous 320 x 240 H.264 stream transmission. |
| Connectivity rate  | Greater than 99%.                                                    |
| Maximum bitrate    | Up to 50 Mbps per channel, per user.                                 |
| Network resilience | Imperceptible recovery under 50% packet loss.                        |

## Platform compatibility [#platform-compatibility]

IoT SDK supports Linux, HarmonyOS, and LiteOS devices. For a full list of supported architectures, operating system versions, and toolchains, see [Supported platforms](reference/supported-platforms.mdx).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora's IoT SDK brings real-time audio and video engagement to smart devices with a lightweight design optimized for low-resource and battery-powered systems. Compatible with WebRTC and a wide range of chipsets, it supports seamless cross-platform development across mobile, PC, web, and smart displays. With robust performance in weak network conditions and integration with Agora’s real-time platform, it’s ideal for live streaming, remote control, and interactive IoT applications."
  }, {
    heading: undefined,
    content: "Use the IoT SDK to build lightweight, cross-platform apps for smart devices, from video doorbells to smart displays. Designed for low power consumption and exceptional network performance, it offers full compatibility with Agora’s RTC and Signaling platforms, simplifying development for interactive and reliable IoT solutions."
  }, {
    heading: undefined,
    content: "Built on Agora’s Software-Defined Real-Time Network (SDRTN®), the IoT SDK ensures high connectivity, low latency, and maximum stability even in challenging network conditions. Add real-time audio and video capabilities to smart devices with a small footprint, minimal power consumption, and seamless interoperability with Agora’s real-time platform and RTC SDKs."
  }, {
    heading: "start-building",
    content: '<Card title="SDK quickstart" href="quickstart.mdx" description="Run the IoT SDK example project to stream audio and video." />'
  }, {
    heading: "start-building",
    content: '<Card title="Build from scratch" href="build-from-scratch.mdx" description="Integrate media streaming and Signaling into your own project, step by step." />'
  }, {
    heading: "start-building",
    content: '<Card title="Download SDKs" href="/en/api-reference/sdks?product=iot" description="Get the latest IoT SDK package for your target device." />'
  }, {
    heading: "start-building",
    content: '<Card title="Authentication" href="build/authenticate-and-secure-channels/authentication-workflow.mdx" description="Secure IoT SDK connections with tokens." />'
  }, {
    heading: "start-building",
    content: '<Card title="API reference" href="/en/api-reference/api-ref" description="Explore IoT SDK API references and related integration surfaces." />'
  }, {
    heading: "start-building",
    content: '<Card title="Samples" href="https://github.com/AgoraIO/API-Examples" description="Browse open-source sample projects for IoT workflows." />'
  }, {
    heading: "product-features",
    content: "IoT SDK integrates both real-time communication and Signaling services, so you can easily develop features like live streaming and remote control at the same time."
  }, {
    heading: "product-features",
    content: "Designed for low-resource embedded systems, IoT SDK has a small package footprint as low as 400kB so you don’t have to worry about system resource usage."
  }, {
    heading: "product-features",
    content: "Based on low hardware requirements, IoT SDK works well with battery-powered devices like video doorbells."
  }, {
    heading: "product-features",
    content: "IoT SDK is compatible with RTC SDK for Web, and developers can build apps across platforms like mobile, PC, web, and smart displays like Amazon Alexa, without plugins, while supporting a wide range of chipsets and operating systems."
  }, {
    heading: "product-features",
    content: "With end-to-end algorithmic network optimization, IoT SDK provides smooth live streaming even in weak network environments."
  }, {
    heading: "product-features",
    content: "IoT SDK is interoperable with other Agora products so you can easily build up the companion apps on iOS, Android, or any other platform."
  }, {
    heading: "common-use-cases",
    content: "Use case"
  }, {
    heading: "common-use-cases",
    content: "Description"
  }, {
    heading: "common-use-cases",
    content: "Broadcasting devices"
  }, {
    heading: "common-use-cases",
    content: "Deliver real-time audio and video streams from IoT devices to multiple audience clients on mobile, web, or desktop platforms. Supports scenarios such as sports livestreaming, with synchronized features like timers, scoring, play-by-play information, and betting, connecting on-site devices with low-latency broadcast and interactive viewing services."
  }, {
    heading: "common-use-cases",
    content: "Real-time monitoring"
  }, {
    heading: "common-use-cases",
    content: "Let users view live video from one or more cameras, view the same camera stream from multiple mobile devices, view multiple camera streams from one mobile device, and communicate with the camera through two-way audio."
  }, {
    heading: "common-use-cases",
    content: "Cellular smartwatches"
  }, {
    heading: "common-use-cases",
    content: "Enable real-time audio and video calls between a low-power cellular smartwatch and a mobile application."
  }, {
    heading: "common-use-cases",
    content: "Remote control"
  }, {
    heading: "common-use-cases",
    content: "Combine Signaling and real-time media capabilities to build remote control applications for smart devices, robots, cameras, and other connected hardware."
  }, {
    heading: "core-capabilities",
    content: "Capability"
  }, {
    heading: "core-capabilities",
    content: "Description"
  }, {
    heading: "core-capabilities",
    content: "IoT SDK interoperability"
  }, {
    heading: "core-capabilities",
    content: "Supports intercommunication between IoT SDKs using multiple audio and video encoding formats. See `audio_data_type_e` and `video_data_type_e`."
  }, {
    heading: "core-capabilities",
    content: "RTC SDK interoperability"
  }, {
    heading: "core-capabilities",
    content: "Supports bidirectional intercommunication between IoT SDK and RTC Server SDK, RTC Native SDK, RTC third-party framework SDKs, and RTC Web SDK. See Communicate with RTC SDK."
  }, {
    heading: "core-capabilities",
    content: "Uplink bandwidth prediction and bitrate adaptation"
  }, {
    heading: "core-capabilities",
    content: "Proposes target bitrate recommendations based on a bandwidth prediction algorithm, and reports whether to increase or decrease bitrate to boost throughput and avoid network congestion. See Adapt the sending bitrate."
  }, {
    heading: "core-capabilities",
    content: "Cloud Proxy connectivity"
  }, {
    heading: "core-capabilities",
    content: "Supports connecting to Agora through networks with firewall or access restrictions. See Connect with Cloud Proxy."
  }, {
    heading: "core-capabilities",
    content: "Key frames"
  }, {
    heading: "core-capabilities",
    content: "Supports requesting local key frames to improve encoding and decoding efficiency and reduce data storage footprint. See Send and receive key frames."
  }, {
    heading: "core-capabilities",
    content: "Stream state management"
  }, {
    heading: "core-capabilities",
    content: "Supports flexibly starting and pausing local audio and video publishing and remote audio and video subscription, with status monitoring. See Manage stream state."
  }, {
    heading: "core-capabilities",
    content: "Multiple media formats"
  }, {
    heading: "core-capabilities",
    content: "Supports multiple audio and video formats for different device and interoperability requirements, including G.711, G.722, Opus, and AAC audio, and H.264 and JPEG video. See Configure the audio codec."
  }, {
    heading: "core-capabilities",
    content: "Security and compliance support"
  }, {
    heading: "core-capabilities",
    content: "Supports media stream encryption and geofencing to help protect media transmission and control where your application can connect. See Secure channel encryption and Restrict media zones."
  }, {
    heading: "product-performance",
    content: "Metric"
  }, {
    heading: "product-performance",
    content: "Specification"
  }, {
    heading: "product-performance",
    content: "Package size"
  }, {
    heading: "product-performance",
    content: "SDK integration adds less than 400 KB."
  }, {
    heading: "product-performance",
    content: "Memory usage"
  }, {
    heading: "product-performance",
    content: "Less than 2 MB for simultaneous 320 x 240 H.264 stream transmission."
  }, {
    heading: "product-performance",
    content: "Connectivity rate"
  }, {
    heading: "product-performance",
    content: "Greater than 99%."
  }, {
    heading: "product-performance",
    content: "Maximum bitrate"
  }, {
    heading: "product-performance",
    content: "Up to 50 Mbps per channel, per user."
  }, {
    heading: "product-performance",
    content: "Network resilience"
  }, {
    heading: "product-performance",
    content: "Imperceptible recovery under 50% packet loss."
  }, {
    heading: "platform-compatibility",
    content: "IoT SDK supports Linux, HarmonyOS, and LiteOS devices. For a full list of supported architectures, operating system versions, and toolchains, see Supported platforms."
  }],
  headings: [{
    id: "start-building",
    content: "Start building"
  }, {
    id: "product-features",
    content: "Product Features"
  }, {
    id: "common-use-cases",
    content: "Common use cases"
  }, {
    id: "core-capabilities",
    content: "Core capabilities"
  }, {
    id: "product-performance",
    content: "Product performance"
  }, {
    id: "platform-compatibility",
    content: "Platform compatibility"
  }]
};
export let toc = [{
  depth: 2,
  url: "#start-building",
  title: _jsx(_Fragment, {
    children: "Start building"
  })
}, {
  depth: 2,
  url: "#product-features",
  title: _jsx(_Fragment, {
    children: "Product Features"
  })
}, {
  depth: 2,
  url: "#common-use-cases",
  title: _jsx(_Fragment, {
    children: "Common use cases"
  })
}, {
  depth: 2,
  url: "#core-capabilities",
  title: _jsx(_Fragment, {
    children: "Core capabilities"
  })
}, {
  depth: 2,
  url: "#product-performance",
  title: _jsx(_Fragment, {
    children: "Product performance"
  })
}, {
  depth: 2,
  url: "#platform-compatibility",
  title: _jsx(_Fragment, {
    children: "Platform compatibility"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  }, { Card, CardGrid, Cards, FeatureCard } = _components;
  if (!Card)
    _missingMdxReference("Card", true);
  if (!CardGrid)
    _missingMdxReference("CardGrid", true);
  if (!Cards)
    _missingMdxReference("Cards", true);
  if (!FeatureCard)
    _missingMdxReference("FeatureCard", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora's IoT SDK brings real-time audio and video engagement to smart devices with a lightweight design optimized for low-resource and battery-powered systems. Compatible with WebRTC and a wide range of chipsets, it supports seamless cross-platform development across mobile, PC, web, and smart displays. With robust performance in weak network conditions and integration with Agora’s real-time platform, it’s ideal for live streaming, remote control, and interactive IoT applications."
    }), `
`, _jsx(_components.p, {
      children: "Use the IoT SDK to build lightweight, cross-platform apps for smart devices, from video doorbells to smart displays. Designed for low power consumption and exceptional network performance, it offers full compatibility with Agora’s RTC and Signaling platforms, simplifying development for interactive and reliable IoT solutions."
    }), `
`, _jsx(_components.p, {
      children: "Built on Agora’s Software-Defined Real-Time Network (SDRTN®), the IoT SDK ensures high connectivity, low latency, and maximum stability even in challenging network conditions. Add real-time audio and video capabilities to smart devices with a small footprint, minimal power consumption, and seamless interoperability with Agora’s real-time platform and RTC SDKs."
    }), `
`, _jsx(_components.h2, {
      id: "start-building",
      children: "Start building"
    }), `
`, _jsxs(Cards, {
      children: [_jsx(Card, {
        title: "SDK quickstart",
        href: "quickstart.mdx",
        description: "Run the IoT SDK example project to stream audio and video."
      }), _jsx(Card, {
        title: "Build from scratch",
        href: "build-from-scratch.mdx",
        description: "Integrate media streaming and Signaling into your own project, step by step."
      }), _jsx(Card, {
        title: "Download SDKs",
        href: "/en/api-reference/sdks?product=iot",
        description: "Get the latest IoT SDK package for your target device."
      }), _jsx(Card, {
        title: "Authentication",
        href: "build/authenticate-and-secure-channels/authentication-workflow.mdx",
        description: "Secure IoT SDK connections with tokens."
      }), _jsx(Card, {
        title: "API reference",
        href: "/en/api-reference/api-ref",
        description: "Explore IoT SDK API references and related integration surfaces."
      }), _jsx(Card, {
        title: "Samples",
        href: "https://github.com/AgoraIO/API-Examples",
        description: "Browse open-source sample projects for IoT workflows."
      })]
    }), `
`, _jsx(_components.h2, {
      id: "product-features",
      children: "Product Features"
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "Highly integrated",
        children: _jsx(_components.p, {
          children: "IoT SDK integrates both real-time communication and Signaling services, so you can easily develop features like live streaming and remote control at the same time."
        })
      }), _jsx(FeatureCard, {
        title: "Lightweight design",
        children: _jsx(_components.p, {
          children: "Designed for low-resource embedded systems, IoT SDK has a small package footprint as low as 400kB so you don’t have to worry about system resource usage."
        })
      }), _jsx(FeatureCard, {
        title: "Low power consumption",
        children: _jsx(_components.p, {
          children: "Based on low hardware requirements, IoT SDK works well with battery-powered devices like video doorbells."
        })
      }), _jsx(FeatureCard, {
        title: "Cross-platform",
        children: _jsx(_components.p, {
          children: "IoT SDK is compatible with RTC SDK for Web, and developers can build apps across platforms like mobile, PC, web, and smart displays like Amazon Alexa, without plugins, while supporting a wide range of chipsets and operating systems."
        })
      }), _jsx(FeatureCard, {
        title: "Excellent resistance to poor networks",
        children: _jsx(_components.p, {
          children: "With end-to-end algorithmic network optimization, IoT SDK provides smooth live streaming even in weak network environments."
        })
      }), _jsx(FeatureCard, {
        title: "Interoperable with the full Agora platform",
        children: _jsx(_components.p, {
          children: "IoT SDK is interoperable with other Agora products so you can easily build up the companion apps on iOS, Android, or any other platform."
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "common-use-cases",
      children: "Common use cases"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Use case"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Broadcasting devices"
          }), _jsx(_components.td, {
            children: "Deliver real-time audio and video streams from IoT devices to multiple audience clients on mobile, web, or desktop platforms. Supports scenarios such as sports livestreaming, with synchronized features like timers, scoring, play-by-play information, and betting, connecting on-site devices with low-latency broadcast and interactive viewing services."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Real-time monitoring"
          }), _jsx(_components.td, {
            children: "Let users view live video from one or more cameras, view the same camera stream from multiple mobile devices, view multiple camera streams from one mobile device, and communicate with the camera through two-way audio."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Cellular smartwatches"
          }), _jsx(_components.td, {
            children: "Enable real-time audio and video calls between a low-power cellular smartwatch and a mobile application."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Remote control"
          }), _jsx(_components.td, {
            children: "Combine Signaling and real-time media capabilities to build remote control applications for smart devices, robots, cameras, and other connected hardware."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "core-capabilities",
      children: "Core capabilities"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Capability"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "IoT SDK interoperability"
          }), _jsxs(_components.td, {
            children: ["Supports intercommunication between IoT SDKs using multiple audio and video encoding formats. See ", _jsx(_components.code, {
              children: "audio_data_type_e"
            }), " and ", _jsx(_components.code, {
              children: "video_data_type_e"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "RTC SDK interoperability"
          }), _jsxs(_components.td, {
            children: ["Supports bidirectional intercommunication between IoT SDK and RTC Server SDK, RTC Native SDK, RTC third-party framework SDKs, and RTC Web SDK. See ", _jsx(_components.a, {
              href: "build/send-messages/interoperate-with-rtc-sdk.mdx",
              children: "Communicate with RTC SDK"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Uplink bandwidth prediction and bitrate adaptation"
          }), _jsxs(_components.td, {
            children: ["Proposes target bitrate recommendations based on a bandwidth prediction algorithm, and reports whether to increase or decrease bitrate to boost throughput and avoid network congestion. See ", _jsx(_components.a, {
              href: "build/manage-connections-and-quality/bitrate-adaptation.mdx",
              children: "Adapt the sending bitrate"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Cloud Proxy connectivity"
          }), _jsxs(_components.td, {
            children: ["Supports connecting to Agora through networks with firewall or access restrictions. See ", _jsx(_components.a, {
              href: "build/manage-connections-and-quality/cloud-proxy.mdx",
              children: "Connect with Cloud Proxy"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Key frames"
          }), _jsxs(_components.td, {
            children: ["Supports requesting local key frames to improve encoding and decoding efficiency and reduce data storage footprint. See ", _jsx(_components.a, {
              href: "build/configure-media/key-frame.mdx",
              children: "Send and receive key frames"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Stream state management"
          }), _jsxs(_components.td, {
            children: ["Supports flexibly starting and pausing local audio and video publishing and remote audio and video subscription, with status monitoring. See ", _jsx(_components.a, {
              href: "build/manage-connections-and-quality/stream-state.mdx",
              children: "Manage stream state"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Multiple media formats"
          }), _jsxs(_components.td, {
            children: ["Supports multiple audio and video formats for different device and interoperability requirements, including G.711, G.722, Opus, and AAC audio, and H.264 and JPEG video. See ", _jsx(_components.a, {
              href: "build/configure-media/audio-codec.mdx",
              children: "Configure the audio codec"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Security and compliance support"
          }), _jsxs(_components.td, {
            children: ["Supports media stream encryption and geofencing to help protect media transmission and control where your application can connect. See ", _jsx(_components.a, {
              href: "build/authenticate-and-secure-channels/media-stream-encryption.mdx",
              children: "Secure channel encryption"
            }), " and ", _jsx(_components.a, {
              href: "build/manage-connections-and-quality/geofencing.mdx",
              children: "Restrict media zones"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "product-performance",
      children: "Product performance"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Metric"
          }), _jsx(_components.th, {
            children: "Specification"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Package size"
          }), _jsx(_components.td, {
            children: "SDK integration adds less than 400 KB."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Memory usage"
          }), _jsx(_components.td, {
            children: "Less than 2 MB for simultaneous 320 x 240 H.264 stream transmission."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Connectivity rate"
          }), _jsx(_components.td, {
            children: "Greater than 99%."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Maximum bitrate"
          }), _jsx(_components.td, {
            children: "Up to 50 Mbps per channel, per user."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Network resilience"
          }), _jsx(_components.td, {
            children: "Imperceptible recovery under 50% packet loss."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "platform-compatibility",
      children: "Platform compatibility"
    }), `
`, _jsxs(_components.p, {
      children: ["IoT SDK supports Linux, HarmonyOS, and LiteOS devices. For a full list of supported architectures, operating system versions, and toolchains, see ", _jsx(_components.a, {
        href: "reference/supported-platforms.mdx",
        children: "Supported platforms"
      }), "."]
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
