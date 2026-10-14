import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why is my video pixelated or jagged and green?"
};
export let _markdown = `

Pixelated video contains irregular pixels with incorrect colors, preventing the video from displaying an image.

<CalloutContainer type="info">
  <CalloutDescription>
    Pixelated video is different from blurred video. Blurred video is usually caused by low resolution or bitrate. In a blurred video, the image is still intact.
  </CalloutDescription>
</CalloutContainer>

Green video contains jagged green blocks, preventing the video from displaying correctly.

The causes of pixelated or jagged, green video are due to any number of issues, including:

* Camera
* Third-party image enhancement SDK
* Resolution
* Video source module
* Video renderer module

Refer to following sections to troubleshoot.

## User self-check [#user-self-check]

### Pixelated video in the sender [#pixelated-video-in-the-sender]

1. Complete the following steps to check the camera, third-party image enhancement SDK, and resolution:

   1. Ensure that the camera works correctly.
   2. Check the third-party image enhancement SDK. If you are using a third-party image enhancement SDK, disable it and try again. If the video is no longer jagged and green, then this is the likely cause. Please contact the technical support of the third-party image enhancement SDK.
   3. Check whether the resolution is [recommended by Agora](https://api-ref.agora.io/en/video-sdk/cpp/3.x/structagora_1_1rtc_1_1_video_encoder_configuration.html#af10ca07d888e2f33b34feb431300da69). If not, change the resolution.

2. Check the video source and the video renderer:

* If the sender uses a custom source and renderer, check the custom source first and then check the custom renderer. See the sample projects for [custom source](/en/realtime-media/rtc/build/capture-and-render-video/custom-video#custom-video-capture) and [custom renderer](/en/realtime-media/rtc/build/capture-and-render-video/custom-video#custom-video-rendering).
* If the sender uses a custom source and an Agora RTC SDK renderer, check the custom source. See the [custom source](/en/realtime-media/rtc/build/capture-and-render-video/custom-video#custom-video-capture) sample project.
* If the sender uses an Agora RTC SDK source and a custom renderer, check the custom renderer. See the [custom renderer](/en/realtime-media/rtc/build/capture-and-render-video/custom-video#custom-video-rendering) sample project.
* If the sender uses an Agora RTC SDK source and an Agora RTC SDK renderer, contact [support@agora.io](mailto\\:support@agora.io) for technical support.

When the sender uses YUV data with the custom renderer, check whether you have mistakenly used the \`Stride\` parameter and the \`width\` parameter in [\`VideoFrame\`](https://api-ref.agora.io/en/video-sdk/cpp/3.x/structagora_1_1media_1_1_i_video_frame_observer_1_1_video_frame.html).

### Pixelated video in the receiver [#pixelated-video-in-the-receiver]

If pixelated video appears in both the sender and the receiver, you need to [check pixelated video in the sender](#pixelated_sender) first. If pixelated video appears in only the receiver, refer to the following steps to troubleshoot:

1. Regardless of the renderer type, check the sender first. If the sender uses a custom source, you also need to check whether the video data is correctly sent from the custom source to the RTC SDK.
2. If the receiver uses custom renderer, check the custom renderer.

When the receiver uses YUV data with the custom renderer, check whether you have mistakenly used the
\`Stride\` parameter and the \`width\` parameter in [\`VideoFrame\`](https://api-ref.agora.io/en/video-sdk/cpp/3.x/structagora_1_1media_1_1_i_video_frame_observer_1_1_video_frame.html).

### Jagged, green video in the sender [#jagged-green-video-in-the-sender]

Complete the following steps to check the camera, third-party image enhancement SDK, and resolution:

1. Ensure that the camera works correctly.
2. Check the third-party image enhancement SDK. If you are using a third-party image enhancement SDK, disable it and try again. If the video is no longer jagged and green, then this is the likely cause. Please contact the technical support of the third-party image enhancement SDK.
3. Check whether the resolution is [recommended by Agora](https://api-ref.agora.io/en/video-sdk/cpp/3.x/structagora_1_1rtc_1_1_video_encoder_configuration.html#af10ca07d888e2f33b34feb431300da69). If not, change the resolution.

* If the sender uses a custom source and renderer, when you use [\`setVideoSource\`](https://api-ref.agora.io/en/video-sdk/android/3.x/classio_1_1agora_1_1rtc_1_1_rtc_engine.html#aa240e991d12b5240fc5fd362cbc0d521) to set a custom source, check whether the data formats in \`getBufferType\` and from \`IVideoFrameConsumer\` to the SDK are consistent. If the data formats are inconsistent, update the data formats and re-check. Then check the custom renderer.
* If the sender uses a custom source and an Agora RTC SDK renderer, check the custom source. When you use [\`setVideoSource\`](https://api-ref.agora.io/en/video-sdk/android/3.x/classio_1_1agora_1_1rtc_1_1_rtc_engine.html#aa240e991d12b5240fc5fd362cbc0d521) to set a custom source, check whether the data formats in \`getBufferType\` and from \`IVideoFrameConsumer\` to the SDK are consistent. If the data formats are inconsistent, update the data formats and re-check. Also check whether the video data is correctly sent from the custom source to the SDK.
* If the sender uses an Agora RTC SDK source and a custom renderer, check the custom renderer.
* If the sender uses an Agora RTC SDK source and an Agora RTC SDK renderer, please contact [support@agora.io](mailto\\:support@agora.io) for technical support.

In Android, if you use a custom source in the communication profile, check whether the video data format is Texture. The Agora RTC SDK for Android does not support receiving video data in Texture format. You need to update the video data format to YUV and re-check the video.

### Jagged, green video in the receiver [#jagged-green-video-in-the-receiver]

If jagged, green video appears for both the sender and the receiver, you need to [check jagged, green video in the sender](#green_sender) first. If jagged, green video appears for the receiver only, refer to the following steps to troubleshoot:

* Regardless of the renderer type, check the sender first. If the sender uses a custom source, you also need to check whether the video data is correctly transmitted from the custom source to the RTC SDK. When you use [\`setVideoSource\`](https://api-ref.agora.io/en/video-sdk/android/3.x/classio_1_1agora_1_1rtc_1_1_rtc_engine.html#aa240e991d12b5240fc5fd362cbc0d521) to set a custom source, check whether the data format in \`getBufferType\` and from \`IVideoFrameConsumer\` to the SDK are consistent. If the data format is inconsistent, update the data format and re-check.

In Android, if you use a custom source in the communication profile, check whether the video data format is Texture. The Agora RTC SDK for Android does not support receiving video data in Texture format. You need to update the video data format to YUV and re-check the video.

## Contact customer support [#contact-customer-support]

If the previous steps in this article cannot help you fix this problem, please contact [support@agora.io](mailto\\:support@agora.io) for technical support. Please provide the following information to help with the troubleshooting:

### Necessary information [#necessary-information]

* Channel name with the pixelated or jagged, green video.
* UID of the users who send and receive the pixelated or jagged, green video and types of the devices.
* Steps to reproduce the problem.
* Screenshot of the pixelated or jagged, green video.
* The time frame of the problem.
* Source and renderer type: Agora RTC SDK source, custom source, Agora RTC SDK renderer, or custom renderer.
* SDK log files. See [How can I set the log file?](/en/api-reference/faq/integration/log)

### Additional information [#additional-information]

* Whether pixelated or jagged, green video is reproducible in other types of devices.
* Whether pixelated or jagged, green video is reproducible with other resolution.
* Whether pixelated or jagged, green video appears in other apps.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Pixelated video contains irregular pixels with incorrect colors, preventing the video from displaying an image."
  }, {
    heading: undefined,
    content: "Pixelated video is different from blurred video. Blurred video is usually caused by low resolution or bitrate. In a blurred video, the image is still intact."
  }, {
    heading: undefined,
    content: "Green video contains jagged green blocks, preventing the video from displaying correctly."
  }, {
    heading: undefined,
    content: "The causes of pixelated or jagged, green video are due to any number of issues, including:"
  }, {
    heading: undefined,
    content: "Camera"
  }, {
    heading: undefined,
    content: "Third-party image enhancement SDK"
  }, {
    heading: undefined,
    content: "Resolution"
  }, {
    heading: undefined,
    content: "Video source module"
  }, {
    heading: undefined,
    content: "Video renderer module"
  }, {
    heading: undefined,
    content: "Refer to following sections to troubleshoot."
  }, {
    heading: "pixelated-video-in-the-sender",
    content: "Complete the following steps to check the camera, third-party image enhancement SDK, and resolution:"
  }, {
    heading: "pixelated-video-in-the-sender",
    content: "Ensure that the camera works correctly."
  }, {
    heading: "pixelated-video-in-the-sender",
    content: "Check the third-party image enhancement SDK. If you are using a third-party image enhancement SDK, disable it and try again. If the video is no longer jagged and green, then this is the likely cause. Please contact the technical support of the third-party image enhancement SDK."
  }, {
    heading: "pixelated-video-in-the-sender",
    content: "Check whether the resolution is recommended by Agora. If not, change the resolution."
  }, {
    heading: "pixelated-video-in-the-sender",
    content: "Check the video source and the video renderer:"
  }, {
    heading: "pixelated-video-in-the-sender",
    content: "If the sender uses a custom source and renderer, check the custom source first and then check the custom renderer. See the sample projects for custom source and custom renderer."
  }, {
    heading: "pixelated-video-in-the-sender",
    content: "If the sender uses a custom source and an Agora RTC SDK renderer, check the custom source. See the custom source sample project."
  }, {
    heading: "pixelated-video-in-the-sender",
    content: "If the sender uses an Agora RTC SDK source and a custom renderer, check the custom renderer. See the custom renderer sample project."
  }, {
    heading: "pixelated-video-in-the-sender",
    content: "If the sender uses an Agora RTC SDK source and an Agora RTC SDK renderer, contact support\\@agora.io for technical support."
  }, {
    heading: "pixelated-video-in-the-sender",
    content: "When the sender uses YUV data with the custom renderer, check whether you have mistakenly used the `Stride` parameter and the `width` parameter in `VideoFrame`."
  }, {
    heading: "pixelated-video-in-the-receiver",
    content: "If pixelated video appears in both the sender and the receiver, you need to check pixelated video in the sender first. If pixelated video appears in only the receiver, refer to the following steps to troubleshoot:"
  }, {
    heading: "pixelated-video-in-the-receiver",
    content: "Regardless of the renderer type, check the sender first. If the sender uses a custom source, you also need to check whether the video data is correctly sent from the custom source to the RTC SDK."
  }, {
    heading: "pixelated-video-in-the-receiver",
    content: "If the receiver uses custom renderer, check the custom renderer."
  }, {
    heading: "pixelated-video-in-the-receiver",
    content: "When the receiver uses YUV data with the custom renderer, check whether you have mistakenly used the\n`Stride` parameter and the `width` parameter in `VideoFrame`."
  }, {
    heading: "jagged-green-video-in-the-sender",
    content: "Complete the following steps to check the camera, third-party image enhancement SDK, and resolution:"
  }, {
    heading: "jagged-green-video-in-the-sender",
    content: "Ensure that the camera works correctly."
  }, {
    heading: "jagged-green-video-in-the-sender",
    content: "Check the third-party image enhancement SDK. If you are using a third-party image enhancement SDK, disable it and try again. If the video is no longer jagged and green, then this is the likely cause. Please contact the technical support of the third-party image enhancement SDK."
  }, {
    heading: "jagged-green-video-in-the-sender",
    content: "Check whether the resolution is recommended by Agora. If not, change the resolution."
  }, {
    heading: "jagged-green-video-in-the-sender",
    content: "If the sender uses a custom source and renderer, when you use `setVideoSource` to set a custom source, check whether the data formats in `getBufferType` and from `IVideoFrameConsumer` to the SDK are consistent. If the data formats are inconsistent, update the data formats and re-check. Then check the custom renderer."
  }, {
    heading: "jagged-green-video-in-the-sender",
    content: "If the sender uses a custom source and an Agora RTC SDK renderer, check the custom source. When you use `setVideoSource` to set a custom source, check whether the data formats in `getBufferType` and from `IVideoFrameConsumer` to the SDK are consistent. If the data formats are inconsistent, update the data formats and re-check. Also check whether the video data is correctly sent from the custom source to the SDK."
  }, {
    heading: "jagged-green-video-in-the-sender",
    content: "If the sender uses an Agora RTC SDK source and a custom renderer, check the custom renderer."
  }, {
    heading: "jagged-green-video-in-the-sender",
    content: "If the sender uses an Agora RTC SDK source and an Agora RTC SDK renderer, please contact support\\@agora.io for technical support."
  }, {
    heading: "jagged-green-video-in-the-sender",
    content: "In Android, if you use a custom source in the communication profile, check whether the video data format is Texture. The Agora RTC SDK for Android does not support receiving video data in Texture format. You need to update the video data format to YUV and re-check the video."
  }, {
    heading: "jagged-green-video-in-the-receiver",
    content: "If jagged, green video appears for both the sender and the receiver, you need to check jagged, green video in the sender first. If jagged, green video appears for the receiver only, refer to the following steps to troubleshoot:"
  }, {
    heading: "jagged-green-video-in-the-receiver",
    content: "Regardless of the renderer type, check the sender first. If the sender uses a custom source, you also need to check whether the video data is correctly transmitted from the custom source to the RTC SDK. When you use `setVideoSource` to set a custom source, check whether the data format in `getBufferType` and from `IVideoFrameConsumer` to the SDK are consistent. If the data format is inconsistent, update the data format and re-check."
  }, {
    heading: "jagged-green-video-in-the-receiver",
    content: "In Android, if you use a custom source in the communication profile, check whether the video data format is Texture. The Agora RTC SDK for Android does not support receiving video data in Texture format. You need to update the video data format to YUV and re-check the video."
  }, {
    heading: "contact-customer-support",
    content: "If the previous steps in this article cannot help you fix this problem, please contact support\\@agora.io for technical support. Please provide the following information to help with the troubleshooting:"
  }, {
    heading: "necessary-information",
    content: "Channel name with the pixelated or jagged, green video."
  }, {
    heading: "necessary-information",
    content: "UID of the users who send and receive the pixelated or jagged, green video and types of the devices."
  }, {
    heading: "necessary-information",
    content: "Steps to reproduce the problem."
  }, {
    heading: "necessary-information",
    content: "Screenshot of the pixelated or jagged, green video."
  }, {
    heading: "necessary-information",
    content: "The time frame of the problem."
  }, {
    heading: "necessary-information",
    content: "Source and renderer type: Agora RTC SDK source, custom source, Agora RTC SDK renderer, or custom renderer."
  }, {
    heading: "necessary-information",
    content: "SDK log files. See How can I set the log file?"
  }, {
    heading: "additional-information",
    content: "Whether pixelated or jagged, green video is reproducible in other types of devices."
  }, {
    heading: "additional-information",
    content: "Whether pixelated or jagged, green video is reproducible with other resolution."
  }, {
    heading: "additional-information",
    content: "Whether pixelated or jagged, green video appears in other apps."
  }],
  headings: [{
    id: "user-self-check",
    content: "User self-check"
  }, {
    id: "pixelated-video-in-the-sender",
    content: "Pixelated video in the sender"
  }, {
    id: "pixelated-video-in-the-receiver",
    content: "Pixelated video in the receiver"
  }, {
    id: "jagged-green-video-in-the-sender",
    content: "Jagged, green video in the sender"
  }, {
    id: "jagged-green-video-in-the-receiver",
    content: "Jagged, green video in the receiver"
  }, {
    id: "contact-customer-support",
    content: "Contact customer support"
  }, {
    id: "necessary-information",
    content: "Necessary information"
  }, {
    id: "additional-information",
    content: "Additional information"
  }]
};
export let toc = [{
  depth: 2,
  url: "#user-self-check",
  title: _jsx(_Fragment, {
    children: "User self-check"
  })
}, {
  depth: 3,
  url: "#pixelated-video-in-the-sender",
  title: _jsx(_Fragment, {
    children: "Pixelated video in the sender"
  })
}, {
  depth: 3,
  url: "#pixelated-video-in-the-receiver",
  title: _jsx(_Fragment, {
    children: "Pixelated video in the receiver"
  })
}, {
  depth: 3,
  url: "#jagged-green-video-in-the-sender",
  title: _jsx(_Fragment, {
    children: "Jagged, green video in the sender"
  })
}, {
  depth: 3,
  url: "#jagged-green-video-in-the-receiver",
  title: _jsx(_Fragment, {
    children: "Jagged, green video in the receiver"
  })
}, {
  depth: 2,
  url: "#contact-customer-support",
  title: _jsx(_Fragment, {
    children: "Contact customer support"
  })
}, {
  depth: 3,
  url: "#necessary-information",
  title: _jsx(_Fragment, {
    children: "Necessary information"
  })
}, {
  depth: 3,
  url: "#additional-information",
  title: _jsx(_Fragment, {
    children: "Additional information"
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
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Pixelated video contains irregular pixels with incorrect colors, preventing the video from displaying an image."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Pixelated video is different from blurred video. Blurred video is usually caused by low resolution or bitrate. In a blurred video, the image is still intact."
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Green video contains jagged green blocks, preventing the video from displaying correctly."
    }), `
`, _jsx(_components.p, {
      children: "The causes of pixelated or jagged, green video are due to any number of issues, including:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Camera"
      }), `
`, _jsx(_components.li, {
        children: "Third-party image enhancement SDK"
      }), `
`, _jsx(_components.li, {
        children: "Resolution"
      }), `
`, _jsx(_components.li, {
        children: "Video source module"
      }), `
`, _jsx(_components.li, {
        children: "Video renderer module"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Refer to following sections to troubleshoot."
    }), `
`, _jsx(_components.h2, {
      id: "user-self-check",
      children: "User self-check"
    }), `
`, _jsx(_components.h3, {
      id: "pixelated-video-in-the-sender",
      children: "Pixelated video in the sender"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Complete the following steps to check the camera, third-party image enhancement SDK, and resolution:"
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsx(_components.li, {
            children: "Ensure that the camera works correctly."
          }), `
`, _jsx(_components.li, {
            children: "Check the third-party image enhancement SDK. If you are using a third-party image enhancement SDK, disable it and try again. If the video is no longer jagged and green, then this is the likely cause. Please contact the technical support of the third-party image enhancement SDK."
          }), `
`, _jsxs(_components.li, {
            children: ["Check whether the resolution is ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/3.x/structagora_1_1rtc_1_1_video_encoder_configuration.html#af10ca07d888e2f33b34feb431300da69",
              children: "recommended by Agora"
            }), ". If not, change the resolution."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Check the video source and the video renderer:"
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If the sender uses a custom source and renderer, check the custom source first and then check the custom renderer. See the sample projects for ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/build/capture-and-render-video/custom-video#custom-video-capture",
          children: "custom source"
        }), " and ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/build/capture-and-render-video/custom-video#custom-video-rendering",
          children: "custom renderer"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["If the sender uses a custom source and an Agora RTC SDK renderer, check the custom source. See the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/build/capture-and-render-video/custom-video#custom-video-capture",
          children: "custom source"
        }), " sample project."]
      }), `
`, _jsxs(_components.li, {
        children: ["If the sender uses an Agora RTC SDK source and a custom renderer, check the custom renderer. See the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/build/capture-and-render-video/custom-video#custom-video-rendering",
          children: "custom renderer"
        }), " sample project."]
      }), `
`, _jsxs(_components.li, {
        children: ["If the sender uses an Agora RTC SDK source and an Agora RTC SDK renderer, contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), " for technical support."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["When the sender uses YUV data with the custom renderer, check whether you have mistakenly used the ", _jsx(_components.code, {
        children: "Stride"
      }), " parameter and the ", _jsx(_components.code, {
        children: "width"
      }), " parameter in ", _jsx(_components.a, {
        href: "https://api-ref.agora.io/en/video-sdk/cpp/3.x/structagora_1_1media_1_1_i_video_frame_observer_1_1_video_frame.html",
        children: _jsx(_components.code, {
          children: "VideoFrame"
        })
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "pixelated-video-in-the-receiver",
      children: "Pixelated video in the receiver"
    }), `
`, _jsxs(_components.p, {
      children: ["If pixelated video appears in both the sender and the receiver, you need to ", _jsx(_components.a, {
        href: "#pixelated_sender",
        children: "check pixelated video in the sender"
      }), " first. If pixelated video appears in only the receiver, refer to the following steps to troubleshoot:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Regardless of the renderer type, check the sender first. If the sender uses a custom source, you also need to check whether the video data is correctly sent from the custom source to the RTC SDK."
      }), `
`, _jsx(_components.li, {
        children: "If the receiver uses custom renderer, check the custom renderer."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: [`When the receiver uses YUV data with the custom renderer, check whether you have mistakenly used the
`, _jsx(_components.code, {
        children: "Stride"
      }), " parameter and the ", _jsx(_components.code, {
        children: "width"
      }), " parameter in ", _jsx(_components.a, {
        href: "https://api-ref.agora.io/en/video-sdk/cpp/3.x/structagora_1_1media_1_1_i_video_frame_observer_1_1_video_frame.html",
        children: _jsx(_components.code, {
          children: "VideoFrame"
        })
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "jagged-green-video-in-the-sender",
      children: "Jagged, green video in the sender"
    }), `
`, _jsx(_components.p, {
      children: "Complete the following steps to check the camera, third-party image enhancement SDK, and resolution:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Ensure that the camera works correctly."
      }), `
`, _jsx(_components.li, {
        children: "Check the third-party image enhancement SDK. If you are using a third-party image enhancement SDK, disable it and try again. If the video is no longer jagged and green, then this is the likely cause. Please contact the technical support of the third-party image enhancement SDK."
      }), `
`, _jsxs(_components.li, {
        children: ["Check whether the resolution is ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/cpp/3.x/structagora_1_1rtc_1_1_video_encoder_configuration.html#af10ca07d888e2f33b34feb431300da69",
          children: "recommended by Agora"
        }), ". If not, change the resolution."]
      }), `
`]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If the sender uses a custom source and renderer, when you use ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/android/3.x/classio_1_1agora_1_1rtc_1_1_rtc_engine.html#aa240e991d12b5240fc5fd362cbc0d521",
          children: _jsx(_components.code, {
            children: "setVideoSource"
          })
        }), " to set a custom source, check whether the data formats in ", _jsx(_components.code, {
          children: "getBufferType"
        }), " and from ", _jsx(_components.code, {
          children: "IVideoFrameConsumer"
        }), " to the SDK are consistent. If the data formats are inconsistent, update the data formats and re-check. Then check the custom renderer."]
      }), `
`, _jsxs(_components.li, {
        children: ["If the sender uses a custom source and an Agora RTC SDK renderer, check the custom source. When you use ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/android/3.x/classio_1_1agora_1_1rtc_1_1_rtc_engine.html#aa240e991d12b5240fc5fd362cbc0d521",
          children: _jsx(_components.code, {
            children: "setVideoSource"
          })
        }), " to set a custom source, check whether the data formats in ", _jsx(_components.code, {
          children: "getBufferType"
        }), " and from ", _jsx(_components.code, {
          children: "IVideoFrameConsumer"
        }), " to the SDK are consistent. If the data formats are inconsistent, update the data formats and re-check. Also check whether the video data is correctly sent from the custom source to the SDK."]
      }), `
`, _jsx(_components.li, {
        children: "If the sender uses an Agora RTC SDK source and a custom renderer, check the custom renderer."
      }), `
`, _jsxs(_components.li, {
        children: ["If the sender uses an Agora RTC SDK source and an Agora RTC SDK renderer, please contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), " for technical support."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "In Android, if you use a custom source in the communication profile, check whether the video data format is Texture. The Agora RTC SDK for Android does not support receiving video data in Texture format. You need to update the video data format to YUV and re-check the video."
    }), `
`, _jsx(_components.h3, {
      id: "jagged-green-video-in-the-receiver",
      children: "Jagged, green video in the receiver"
    }), `
`, _jsxs(_components.p, {
      children: ["If jagged, green video appears for both the sender and the receiver, you need to ", _jsx(_components.a, {
        href: "#green_sender",
        children: "check jagged, green video in the sender"
      }), " first. If jagged, green video appears for the receiver only, refer to the following steps to troubleshoot:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Regardless of the renderer type, check the sender first. If the sender uses a custom source, you also need to check whether the video data is correctly transmitted from the custom source to the RTC SDK. When you use ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/android/3.x/classio_1_1agora_1_1rtc_1_1_rtc_engine.html#aa240e991d12b5240fc5fd362cbc0d521",
          children: _jsx(_components.code, {
            children: "setVideoSource"
          })
        }), " to set a custom source, check whether the data format in ", _jsx(_components.code, {
          children: "getBufferType"
        }), " and from ", _jsx(_components.code, {
          children: "IVideoFrameConsumer"
        }), " to the SDK are consistent. If the data format is inconsistent, update the data format and re-check."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "In Android, if you use a custom source in the communication profile, check whether the video data format is Texture. The Agora RTC SDK for Android does not support receiving video data in Texture format. You need to update the video data format to YUV and re-check the video."
    }), `
`, _jsx(_components.h2, {
      id: "contact-customer-support",
      children: "Contact customer support"
    }), `
`, _jsxs(_components.p, {
      children: ["If the previous steps in this article cannot help you fix this problem, please contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), " for technical support. Please provide the following information to help with the troubleshooting:"]
    }), `
`, _jsx(_components.h3, {
      id: "necessary-information",
      children: "Necessary information"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Channel name with the pixelated or jagged, green video."
      }), `
`, _jsx(_components.li, {
        children: "UID of the users who send and receive the pixelated or jagged, green video and types of the devices."
      }), `
`, _jsx(_components.li, {
        children: "Steps to reproduce the problem."
      }), `
`, _jsx(_components.li, {
        children: "Screenshot of the pixelated or jagged, green video."
      }), `
`, _jsx(_components.li, {
        children: "The time frame of the problem."
      }), `
`, _jsx(_components.li, {
        children: "Source and renderer type: Agora RTC SDK source, custom source, Agora RTC SDK renderer, or custom renderer."
      }), `
`, _jsxs(_components.li, {
        children: ["SDK log files. See ", _jsx(_components.a, {
          href: "/en/api-reference/faq/integration/log",
          children: "How can I set the log file?"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "additional-information",
      children: "Additional information"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Whether pixelated or jagged, green video is reproducible in other types of devices."
      }), `
`, _jsx(_components.li, {
        children: "Whether pixelated or jagged, green video is reproducible with other resolution."
      }), `
`, _jsx(_components.li, {
        children: "Whether pixelated or jagged, green video appears in other apps."
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
