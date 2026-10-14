import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I fix unsynchronized audio and video?"
};
export let _markdown = `

Unsynchronized audio and video may be caused by the following:

* Slow network connection.
* Sub-optimal device performance.
* Problems with a custom video source or renderer.
* A third-party image enhancement SDK.

Complete the following steps to troubleshoot the unsynchronized audio and video.

## Step 1: Self-check [#step-1-self-check]

Check the following:

* Check whether the unsynchronized audio and video is intermittent or consistent. Occasional, intermittent unsynchronized audio and video is normal due to the nature of the network and device.

* If you use a custom video source, check whether the \`timeStamp\` parameter of each video frame is correct. Ensure that you are using millisecond units.

<CalloutContainer type="info">
  <CalloutDescription>
    If you use a camera to capture video, the system reports the timestamp of each video frame. That is the value you need to pass in \`timeStamp\`.
  </CalloutDescription>
</CalloutContainer>

* Check whether the network connection is stable. You can switch to another network connection and check if the audio and video are synchronized.

* If you use a third-party image enhancement SDK, disable it and re-check. If the audio and video become synchronized, then the third-party image enhancement SDK is the likely cause. Contact that SDK provider for technical support.

* Switch to another device with better performance, and then check if the issue persists.

* If you use a custom video renderer, check the source code of the video renderer. See the [Customer renderer](/en/realtime-media/rtc/build/capture-and-render-video/custom-video#custom-video-rendering) sample project provided by Agora for reference.

## Step 2: Contact Agora customer support [#step-2-contact-agora-customer-support]

If the issue persists, contact [support@agora.io](mailto\\:support@agora.io). Please provide the following information to help with the troubleshooting:

* The channel name with the unsynchronized audio and video.

* The time frame when the unsynchronized audio and video appears.

* The application scenario in which the issue occurs: communication, live interactive streaming, single-hosted interactive streaming, or co-hosted interactive streaming scenario.

* The UIDs of the users sending and receiving the unsynchronized audio and video.

* Whether you use a custom video source or a custom video renderer.

* Whether the problem can be reproduced and the steps to reproduce.

* Screen recording files.

* SDK log files. See [How can I set the log file?](/en/api-reference/faq/integration/log#set-the-log-file)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Unsynchronized audio and video may be caused by the following:"
  }, {
    heading: undefined,
    content: "Slow network connection."
  }, {
    heading: undefined,
    content: "Sub-optimal device performance."
  }, {
    heading: undefined,
    content: "Problems with a custom video source or renderer."
  }, {
    heading: undefined,
    content: "A third-party image enhancement SDK."
  }, {
    heading: undefined,
    content: "Complete the following steps to troubleshoot the unsynchronized audio and video."
  }, {
    heading: "step-1-self-check",
    content: "Check the following:"
  }, {
    heading: "step-1-self-check",
    content: "Check whether the unsynchronized audio and video is intermittent or consistent. Occasional, intermittent unsynchronized audio and video is normal due to the nature of the network and device."
  }, {
    heading: "step-1-self-check",
    content: "If you use a custom video source, check whether the `timeStamp` parameter of each video frame is correct. Ensure that you are using millisecond units."
  }, {
    heading: "step-1-self-check",
    content: "If you use a camera to capture video, the system reports the timestamp of each video frame. That is the value you need to pass in `timeStamp`."
  }, {
    heading: "step-1-self-check",
    content: "Check whether the network connection is stable. You can switch to another network connection and check if the audio and video are synchronized."
  }, {
    heading: "step-1-self-check",
    content: "If you use a third-party image enhancement SDK, disable it and re-check. If the audio and video become synchronized, then the third-party image enhancement SDK is the likely cause. Contact that SDK provider for technical support."
  }, {
    heading: "step-1-self-check",
    content: "Switch to another device with better performance, and then check if the issue persists."
  }, {
    heading: "step-1-self-check",
    content: "If you use a custom video renderer, check the source code of the video renderer. See the Customer renderer sample project provided by Agora for reference."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "If the issue persists, contact support\\@agora.io. Please provide the following information to help with the troubleshooting:"
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "The channel name with the unsynchronized audio and video."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "The time frame when the unsynchronized audio and video appears."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "The application scenario in which the issue occurs: communication, live interactive streaming, single-hosted interactive streaming, or co-hosted interactive streaming scenario."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "The UIDs of the users sending and receiving the unsynchronized audio and video."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "Whether you use a custom video source or a custom video renderer."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "Whether the problem can be reproduced and the steps to reproduce."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "Screen recording files."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "SDK log files. See How can I set the log file?"
  }],
  headings: [{
    id: "step-1-self-check",
    content: "Step 1: Self-check"
  }, {
    id: "step-2-contact-agora-customer-support",
    content: "Step 2: Contact Agora customer support"
  }]
};
export let toc = [{
  depth: 2,
  url: "#step-1-self-check",
  title: _jsx(_Fragment, {
    children: "Step 1: Self-check"
  })
}, {
  depth: 2,
  url: "#step-2-contact-agora-customer-support",
  title: _jsx(_Fragment, {
    children: "Step 2: Contact Agora customer support"
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Unsynchronized audio and video may be caused by the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Slow network connection."
      }), `
`, _jsx(_components.li, {
        children: "Sub-optimal device performance."
      }), `
`, _jsx(_components.li, {
        children: "Problems with a custom video source or renderer."
      }), `
`, _jsx(_components.li, {
        children: "A third-party image enhancement SDK."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Complete the following steps to troubleshoot the unsynchronized audio and video."
    }), `
`, _jsx(_components.h2, {
      id: "step-1-self-check",
      children: "Step 1: Self-check"
    }), `
`, _jsx(_components.p, {
      children: "Check the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Check whether the unsynchronized audio and video is intermittent or consistent. Occasional, intermittent unsynchronized audio and video is normal due to the nature of the network and device."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If you use a custom video source, check whether the ", _jsx(_components.code, {
            children: "timeStamp"
          }), " parameter of each video frame is correct. Ensure that you are using millisecond units."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If you use a camera to capture video, the system reports the timestamp of each video frame. That is the value you need to pass in ", _jsx(_components.code, {
            children: "timeStamp"
          }), "."]
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Check whether the network connection is stable. You can switch to another network connection and check if the audio and video are synchronized."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If you use a third-party image enhancement SDK, disable it and re-check. If the audio and video become synchronized, then the third-party image enhancement SDK is the likely cause. Contact that SDK provider for technical support."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Switch to another device with better performance, and then check if the issue persists."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If you use a custom video renderer, check the source code of the video renderer. See the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/capture-and-render-video/custom-video#custom-video-rendering",
            children: "Customer renderer"
          }), " sample project provided by Agora for reference."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "step-2-contact-agora-customer-support",
      children: "Step 2: Contact Agora customer support"
    }), `
`, _jsxs(_components.p, {
      children: ["If the issue persists, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), ". Please provide the following information to help with the troubleshooting:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The channel name with the unsynchronized audio and video."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The time frame when the unsynchronized audio and video appears."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The application scenario in which the issue occurs: communication, live interactive streaming, single-hosted interactive streaming, or co-hosted interactive streaming scenario."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The UIDs of the users sending and receiving the unsynchronized audio and video."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Whether you use a custom video source or a custom video renderer."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Whether the problem can be reproduced and the steps to reproduce."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Screen recording files."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["SDK log files. See ", _jsx(_components.a, {
            href: "/en/api-reference/faq/integration/log#set-the-log-file",
            children: "How can I set the log file?"
          })]
        }), `
`]
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
