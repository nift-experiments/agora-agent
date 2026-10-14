import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Call Inspector troubleshooting",
  description: "How to troubleshoot common call-quality issues."
};
export let _markdown = `

## Prerequisites [#prerequisites]

Before you start troubleshooting, you should be familiar with [Call Details Breakdown](../build/explore-and-analyze-data/call-search.md).

## Case 1: Receiver reports black, stuttering, or blurry video [#case-1-receiver-reports-black-stuttering-or-blurry-video]

If a user says the received video is black, stuttering, or blurry, you can troubleshoot the issue using the following steps:

### 1. Check the video sender [#1-check-the-video-sender]

Refer to the following steps:

1. Check whether the sender stopped the local video: Go to the [Call details homepage](../build/explore-and-analyze-data/call-search.md), find the **Key events** of the sender, and switch to the list view. Look for the **user stopped local video** event under the **Video sending** category. If you find such an event, contact the sender to confirm the operation.
   ![](https://web-cdn.agora.io/docs-files/1658831859143)

2. Check the sender's network conditions: Go to the [Sender details page](../build/explore-and-analyze-data/call-search.md), and find the network status and device status metrics.

   In the following figure, the **Video upstream packet loss** is high and the **Wi-Fi signal quality** is poor. It can be concluded that the sender's network conditions are abnormal. Agora recommends reminding the sender to be closer to the Wi-Fi source or advising them to use a different network.

![](https://web-cdn.agora.io/docs-files/1658832351090)

### 2. Check the video receiver [#2-check-the-video-receiver]

If no issue is found when checking the video sender, follow these steps to check the video receiver:

1. Check whether the receiver stopped the sender's video: On the Call Details homepage, find the **Key events** of the receiver, and switch to the list view. Look for the **Stopped xxx's video** event under the **Video receiving** category. If you find such an event, contact the receiver to confirm the operation.
   ![](https://web-cdn.agora.io/docs-files/1658832861834)

2. Check the receiver's network conditions: Go to the [End-to-end details page](../build/explore-and-analyze-data/call-search.md), and find the network status and device status metrics.

   In the following figure, the charts on the left represent the sender, and the charts on the right represent the receiver. The sender's network is normal, but the **Video end-to-end packet loss** is high, and the receiver's **Wi-Fi signal quality** is poor. It can be concluded that the receiver's network conditions are abnormal. Agora recommends reminding the receiver to be closer to the Wi-Fi source or advising them to use a different network.

![](https://web-cdn.agora.io/docs-files/1658832878940)

### 3. Check the CPU usage [#3-check-the-cpu-usage]

**Check the sender's CPU usage**

1. On the Sender details page, check the video capture frame rate and video sending frame rate.
2. If either metric is abnormal, continue to check the **CPU usage** metrics. If the CPU usage is high, Agora recommends that the sender clear any background tasks or restart the app.

**Check the receiver's CPU usage**

1. On the End-to-end details page, check the video receiving frame rate.
2. If the metric is abnormal, continue to check the **CPU usage** metrics. If the CPU usage is high, Agora recommends that the receiver clear any background tasks or restart the app.

   ![](https://web-cdn.agora.io/docs-files/1658832895138)

## Case 2: Receiver reports silent or stuttering audio [#case-2-receiver-reports-silent-or-stuttering-audio]

If a user says the received audio is silent or stuttering, you can troubleshoot the issue using the following steps:

### 1. Check the audio sender [#1-check-the-audio-sender]

Refer to the following steps:

1. Check whether the sender muted the local audio: Go to the [Call details homepage](../build/explore-and-analyze-data/call-search.md), find the **Key events** of the sender, and switch to the list view. Look for the **user muted local audio** event under the **Audio sending** category. If you find such an event, contact the sender to confirm the operation.
   ![](https://web-cdn.agora.io/docs-files/1658832926530)

2. Check the sender's network conditions: Go to the [Sender details page](../build/explore-and-analyze-data/call-search.md), and find the network status metrics.

   Take the following figure as an example. The **Audio upstream packet loss** is high, so it can be concluded that the sender's network conditions are abnormal. Agora recommends reminding the sender to be closer to the Wi-Fi source or advising them to use a different network.

![](https://web-cdn.agora.io/docs-files/1658832944922)

### 2. Check the audio receiver [#2-check-the-audio-receiver]

If no issue is found when checking the audio sender, follow these steps to check the audio receiver:

1. Check whether the receiver stopped the sender's audio: On the Call Details homepage, find the **Key events** of the receiver, and switch to the list view. Look for the **Stopped xxx's audio** event under the **Audio receiving** category. If you find such an event, contact the receiver to confirm the operation.
   ![](https://web-cdn.agora.io/docs-files/1658832962166)

2. Check the receiver's network condition: Go to the [End-to-end details page](../build/explore-and-analyze-data/call-search.md), and find the network status and audio freezing metrics.

   In the following figure, the charts on the left represent the sender, and the charts on the right represent the receiver. The sender's network condition is normal, but the **Audio end-to-end packet loss** is high, and the **Freeze time in rendering audio** is long. It can be concluded that the receiver's network condition is abnormal. Agora recommends reminding the receiver to be closer to the Wi-Fi source or advising them to use a different network.

   ![](https://web-cdn.agora.io/docs-files/1658833048224)

### 3. Check the CPU usage [#3-check-the-cpu-usage-1]

**Check the sender's CPU usage**

1. On the Sender details page, check the audio capture signal strength.
2. If the metric is abnormal, continue to check the **CPU usage** metrics. If the CPU usage is high, Agora recommends that the sender clear any background tasks or restart the app.

**Check the receiver's CPU usage**

1. On the End-to-end details page, check the audio playback signal strength.
2. If the metric is abnormal, continue to check the **CPU usage** metrics. If the CPU usage is high, Agora recommends that the receiver clear any background tasks or restart the app.

   ![](https://web-cdn.agora.io/docs-files/1658833061820)
`;
export let structuredData = {
  contents: [{
    heading: "prerequisites",
    content: "Before you start troubleshooting, you should be familiar with Call Details Breakdown."
  }, {
    heading: "case-1-receiver-reports-black-stuttering-or-blurry-video",
    content: "If a user says the received video is black, stuttering, or blurry, you can troubleshoot the issue using the following steps:"
  }, {
    heading: "1-check-the-video-sender",
    content: "Refer to the following steps:"
  }, {
    heading: "1-check-the-video-sender",
    content: "Check whether the sender stopped the local video: Go to the Call details homepage, find the **Key events** of the sender, and switch to the list view. Look for the **user stopped local video** event under the **Video sending** category. If you find such an event, contact the sender to confirm the operation."
  }, {
    heading: "1-check-the-video-sender",
    content: "Check the sender's network conditions: Go to the Sender details page, and find the network status and device status metrics."
  }, {
    heading: "1-check-the-video-sender",
    content: "In the following figure, the **Video upstream packet loss** is high and the **Wi-Fi signal quality** is poor. It can be concluded that the sender's network conditions are abnormal. Agora recommends reminding the sender to be closer to the Wi-Fi source or advising them to use a different network."
  }, {
    heading: "2-check-the-video-receiver",
    content: "If no issue is found when checking the video sender, follow these steps to check the video receiver:"
  }, {
    heading: "2-check-the-video-receiver",
    content: "Check whether the receiver stopped the sender's video: On the Call Details homepage, find the **Key events** of the receiver, and switch to the list view. Look for the **Stopped xxx's video** event under the **Video receiving** category. If you find such an event, contact the receiver to confirm the operation."
  }, {
    heading: "2-check-the-video-receiver",
    content: "Check the receiver's network conditions: Go to the End-to-end details page, and find the network status and device status metrics."
  }, {
    heading: "2-check-the-video-receiver",
    content: "In the following figure, the charts on the left represent the sender, and the charts on the right represent the receiver. The sender's network is normal, but the **Video end-to-end packet loss** is high, and the receiver's **Wi-Fi signal quality** is poor. It can be concluded that the receiver's network conditions are abnormal. Agora recommends reminding the receiver to be closer to the Wi-Fi source or advising them to use a different network."
  }, {
    heading: "3-check-the-cpu-usage",
    content: "**Check the sender's CPU usage**"
  }, {
    heading: "3-check-the-cpu-usage",
    content: "On the Sender details page, check the video capture frame rate and video sending frame rate."
  }, {
    heading: "3-check-the-cpu-usage",
    content: "If either metric is abnormal, continue to check the **CPU usage** metrics. If the CPU usage is high, Agora recommends that the sender clear any background tasks or restart the app."
  }, {
    heading: "3-check-the-cpu-usage",
    content: "**Check the receiver's CPU usage**"
  }, {
    heading: "3-check-the-cpu-usage",
    content: "On the End-to-end details page, check the video receiving frame rate."
  }, {
    heading: "3-check-the-cpu-usage",
    content: "If the metric is abnormal, continue to check the **CPU usage** metrics. If the CPU usage is high, Agora recommends that the receiver clear any background tasks or restart the app."
  }, {
    heading: "case-2-receiver-reports-silent-or-stuttering-audio",
    content: "If a user says the received audio is silent or stuttering, you can troubleshoot the issue using the following steps:"
  }, {
    heading: "1-check-the-audio-sender",
    content: "Refer to the following steps:"
  }, {
    heading: "1-check-the-audio-sender",
    content: "Check whether the sender muted the local audio: Go to the Call details homepage, find the **Key events** of the sender, and switch to the list view. Look for the **user muted local audio** event under the **Audio sending** category. If you find such an event, contact the sender to confirm the operation."
  }, {
    heading: "1-check-the-audio-sender",
    content: "Check the sender's network conditions: Go to the Sender details page, and find the network status metrics."
  }, {
    heading: "1-check-the-audio-sender",
    content: "Take the following figure as an example. The **Audio upstream packet loss** is high, so it can be concluded that the sender's network conditions are abnormal. Agora recommends reminding the sender to be closer to the Wi-Fi source or advising them to use a different network."
  }, {
    heading: "2-check-the-audio-receiver",
    content: "If no issue is found when checking the audio sender, follow these steps to check the audio receiver:"
  }, {
    heading: "2-check-the-audio-receiver",
    content: "Check whether the receiver stopped the sender's audio: On the Call Details homepage, find the **Key events** of the receiver, and switch to the list view. Look for the **Stopped xxx's audio** event under the **Audio receiving** category. If you find such an event, contact the receiver to confirm the operation."
  }, {
    heading: "2-check-the-audio-receiver",
    content: "Check the receiver's network condition: Go to the End-to-end details page, and find the network status and audio freezing metrics."
  }, {
    heading: "2-check-the-audio-receiver",
    content: "In the following figure, the charts on the left represent the sender, and the charts on the right represent the receiver. The sender's network condition is normal, but the **Audio end-to-end packet loss** is high, and the **Freeze time in rendering audio** is long. It can be concluded that the receiver's network condition is abnormal. Agora recommends reminding the receiver to be closer to the Wi-Fi source or advising them to use a different network."
  }, {
    heading: "3-check-the-cpu-usage-1",
    content: "**Check the sender's CPU usage**"
  }, {
    heading: "3-check-the-cpu-usage-1",
    content: "On the Sender details page, check the audio capture signal strength."
  }, {
    heading: "3-check-the-cpu-usage-1",
    content: "If the metric is abnormal, continue to check the **CPU usage** metrics. If the CPU usage is high, Agora recommends that the sender clear any background tasks or restart the app."
  }, {
    heading: "3-check-the-cpu-usage-1",
    content: "**Check the receiver's CPU usage**"
  }, {
    heading: "3-check-the-cpu-usage-1",
    content: "On the End-to-end details page, check the audio playback signal strength."
  }, {
    heading: "3-check-the-cpu-usage-1",
    content: "If the metric is abnormal, continue to check the **CPU usage** metrics. If the CPU usage is high, Agora recommends that the receiver clear any background tasks or restart the app."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "case-1-receiver-reports-black-stuttering-or-blurry-video",
    content: "Case 1: Receiver reports black, stuttering, or blurry video"
  }, {
    id: "1-check-the-video-sender",
    content: "1\\. Check the video sender"
  }, {
    id: "2-check-the-video-receiver",
    content: "2\\. Check the video receiver"
  }, {
    id: "3-check-the-cpu-usage",
    content: "3\\. Check the CPU usage"
  }, {
    id: "case-2-receiver-reports-silent-or-stuttering-audio",
    content: "Case 2: Receiver reports silent or stuttering audio"
  }, {
    id: "1-check-the-audio-sender",
    content: "1\\. Check the audio sender"
  }, {
    id: "2-check-the-audio-receiver",
    content: "2\\. Check the audio receiver"
  }, {
    id: "3-check-the-cpu-usage-1",
    content: "3\\. Check the CPU usage"
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
  url: "#case-1-receiver-reports-black-stuttering-or-blurry-video",
  title: _jsx(_Fragment, {
    children: "Case 1: Receiver reports black, stuttering, or blurry video"
  })
}, {
  depth: 3,
  url: "#1-check-the-video-sender",
  title: _jsx(_Fragment, {
    children: "1. Check the video sender"
  })
}, {
  depth: 3,
  url: "#2-check-the-video-receiver",
  title: _jsx(_Fragment, {
    children: "2. Check the video receiver"
  })
}, {
  depth: 3,
  url: "#3-check-the-cpu-usage",
  title: _jsx(_Fragment, {
    children: "3. Check the CPU usage"
  })
}, {
  depth: 2,
  url: "#case-2-receiver-reports-silent-or-stuttering-audio",
  title: _jsx(_Fragment, {
    children: "Case 2: Receiver reports silent or stuttering audio"
  })
}, {
  depth: 3,
  url: "#1-check-the-audio-sender",
  title: _jsx(_Fragment, {
    children: "1. Check the audio sender"
  })
}, {
  depth: 3,
  url: "#2-check-the-audio-receiver",
  title: _jsx(_Fragment, {
    children: "2. Check the audio receiver"
  })
}, {
  depth: 3,
  url: "#3-check-the-cpu-usage-1",
  title: _jsx(_Fragment, {
    children: "3. Check the CPU usage"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.p, {
      children: ["Before you start troubleshooting, you should be familiar with ", _jsx(_components.a, {
        href: "../build/explore-and-analyze-data/call-search.md",
        children: "Call Details Breakdown"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "case-1-receiver-reports-black-stuttering-or-blurry-video",
      children: "Case 1: Receiver reports black, stuttering, or blurry video"
    }), `
`, _jsx(_components.p, {
      children: "If a user says the received video is black, stuttering, or blurry, you can troubleshoot the issue using the following steps:"
    }), `
`, _jsx(_components.h3, {
      id: "1-check-the-video-sender",
      children: "1. Check the video sender"
    }), `
`, _jsx(_components.p, {
      children: "Refer to the following steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Check whether the sender stopped the local video: Go to the ", _jsx(_components.a, {
            href: "../build/explore-and-analyze-data/call-search.md",
            children: "Call details homepage"
          }), ", find the ", _jsx(_components.strong, {
            children: "Key events"
          }), " of the sender, and switch to the list view. Look for the ", _jsx(_components.strong, {
            children: "user stopped local video"
          }), " event under the ", _jsx(_components.strong, {
            children: "Video sending"
          }), ` category. If you find such an event, contact the sender to confirm the operation.
`, _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1658831859143",
            alt: ""
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Check the sender's network conditions: Go to the ", _jsx(_components.a, {
            href: "../build/explore-and-analyze-data/call-search.md",
            children: "Sender details page"
          }), ", and find the network status and device status metrics."]
        }), `
`, _jsxs(_components.p, {
          children: ["In the following figure, the ", _jsx(_components.strong, {
            children: "Video upstream packet loss"
          }), " is high and the ", _jsx(_components.strong, {
            children: "Wi-Fi signal quality"
          }), " is poor. It can be concluded that the sender's network conditions are abnormal. Agora recommends reminding the sender to be closer to the Wi-Fi source or advising them to use a different network."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1658832351090",
        alt: ""
      })
    }), `
`, _jsx(_components.h3, {
      id: "2-check-the-video-receiver",
      children: "2. Check the video receiver"
    }), `
`, _jsx(_components.p, {
      children: "If no issue is found when checking the video sender, follow these steps to check the video receiver:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Check whether the receiver stopped the sender's video: On the Call Details homepage, find the ", _jsx(_components.strong, {
            children: "Key events"
          }), " of the receiver, and switch to the list view. Look for the ", _jsx(_components.strong, {
            children: "Stopped xxx's video"
          }), " event under the ", _jsx(_components.strong, {
            children: "Video receiving"
          }), ` category. If you find such an event, contact the receiver to confirm the operation.
`, _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1658832861834",
            alt: ""
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Check the receiver's network conditions: Go to the ", _jsx(_components.a, {
            href: "../build/explore-and-analyze-data/call-search.md",
            children: "End-to-end details page"
          }), ", and find the network status and device status metrics."]
        }), `
`, _jsxs(_components.p, {
          children: ["In the following figure, the charts on the left represent the sender, and the charts on the right represent the receiver. The sender's network is normal, but the ", _jsx(_components.strong, {
            children: "Video end-to-end packet loss"
          }), " is high, and the receiver's ", _jsx(_components.strong, {
            children: "Wi-Fi signal quality"
          }), " is poor. It can be concluded that the receiver's network conditions are abnormal. Agora recommends reminding the receiver to be closer to the Wi-Fi source or advising them to use a different network."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1658832878940",
        alt: ""
      })
    }), `
`, _jsx(_components.h3, {
      id: "3-check-the-cpu-usage",
      children: "3. Check the CPU usage"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Check the sender's CPU usage"
      })
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "On the Sender details page, check the video capture frame rate and video sending frame rate."
      }), `
`, _jsxs(_components.li, {
        children: ["If either metric is abnormal, continue to check the ", _jsx(_components.strong, {
          children: "CPU usage"
        }), " metrics. If the CPU usage is high, Agora recommends that the sender clear any background tasks or restart the app."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Check the receiver's CPU usage"
      })
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "On the End-to-end details page, check the video receiving frame rate."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If the metric is abnormal, continue to check the ", _jsx(_components.strong, {
            children: "CPU usage"
          }), " metrics. If the CPU usage is high, Agora recommends that the receiver clear any background tasks or restart the app."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1658832895138",
            alt: ""
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "case-2-receiver-reports-silent-or-stuttering-audio",
      children: "Case 2: Receiver reports silent or stuttering audio"
    }), `
`, _jsx(_components.p, {
      children: "If a user says the received audio is silent or stuttering, you can troubleshoot the issue using the following steps:"
    }), `
`, _jsx(_components.h3, {
      id: "1-check-the-audio-sender",
      children: "1. Check the audio sender"
    }), `
`, _jsx(_components.p, {
      children: "Refer to the following steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Check whether the sender muted the local audio: Go to the ", _jsx(_components.a, {
            href: "../build/explore-and-analyze-data/call-search.md",
            children: "Call details homepage"
          }), ", find the ", _jsx(_components.strong, {
            children: "Key events"
          }), " of the sender, and switch to the list view. Look for the ", _jsx(_components.strong, {
            children: "user muted local audio"
          }), " event under the ", _jsx(_components.strong, {
            children: "Audio sending"
          }), ` category. If you find such an event, contact the sender to confirm the operation.
`, _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1658832926530",
            alt: ""
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Check the sender's network conditions: Go to the ", _jsx(_components.a, {
            href: "../build/explore-and-analyze-data/call-search.md",
            children: "Sender details page"
          }), ", and find the network status metrics."]
        }), `
`, _jsxs(_components.p, {
          children: ["Take the following figure as an example. The ", _jsx(_components.strong, {
            children: "Audio upstream packet loss"
          }), " is high, so it can be concluded that the sender's network conditions are abnormal. Agora recommends reminding the sender to be closer to the Wi-Fi source or advising them to use a different network."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1658832944922",
        alt: ""
      })
    }), `
`, _jsx(_components.h3, {
      id: "2-check-the-audio-receiver",
      children: "2. Check the audio receiver"
    }), `
`, _jsx(_components.p, {
      children: "If no issue is found when checking the audio sender, follow these steps to check the audio receiver:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Check whether the receiver stopped the sender's audio: On the Call Details homepage, find the ", _jsx(_components.strong, {
            children: "Key events"
          }), " of the receiver, and switch to the list view. Look for the ", _jsx(_components.strong, {
            children: "Stopped xxx's audio"
          }), " event under the ", _jsx(_components.strong, {
            children: "Audio receiving"
          }), ` category. If you find such an event, contact the receiver to confirm the operation.
`, _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1658832962166",
            alt: ""
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Check the receiver's network condition: Go to the ", _jsx(_components.a, {
            href: "../build/explore-and-analyze-data/call-search.md",
            children: "End-to-end details page"
          }), ", and find the network status and audio freezing metrics."]
        }), `
`, _jsxs(_components.p, {
          children: ["In the following figure, the charts on the left represent the sender, and the charts on the right represent the receiver. The sender's network condition is normal, but the ", _jsx(_components.strong, {
            children: "Audio end-to-end packet loss"
          }), " is high, and the ", _jsx(_components.strong, {
            children: "Freeze time in rendering audio"
          }), " is long. It can be concluded that the receiver's network condition is abnormal. Agora recommends reminding the receiver to be closer to the Wi-Fi source or advising them to use a different network."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1658833048224",
            alt: ""
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "3-check-the-cpu-usage-1",
      children: "3. Check the CPU usage"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Check the sender's CPU usage"
      })
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "On the Sender details page, check the audio capture signal strength."
      }), `
`, _jsxs(_components.li, {
        children: ["If the metric is abnormal, continue to check the ", _jsx(_components.strong, {
          children: "CPU usage"
        }), " metrics. If the CPU usage is high, Agora recommends that the sender clear any background tasks or restart the app."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Check the receiver's CPU usage"
      })
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "On the End-to-end details page, check the audio playback signal strength."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If the metric is abnormal, continue to check the ", _jsx(_components.strong, {
            children: "CPU usage"
          }), " metrics. If the CPU usage is high, Agora recommends that the receiver clear any background tasks or restart the app."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1658833061820",
            alt: ""
          })
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
