import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Architecture overview",
  description: "Understand how the Convo AI Device Kit solution is composed across device, cloud, and software layers."
};
export let _markdown = `

The Convo AI Device Kit solution is built on Agora's Media Stream Acceleration (RTSA) or IoT SDK and Conversational AI Engine. RTSA is Agora's RTC client product designed specifically for the IoT industry, providing the real-time communication foundation for voice AI interactions.

## Solution architecture [#solution-architecture]

The Convo AI Device Kit solution consists of two main components connected through Agora's backend.

![Solution Architecture](https://assets-docs.agora.io/images/convo-ai-device-kit/architecture.png)

* **Convo AI Device Kit**

  The hardware device handles local processing including power management, Bluetooth pairing, voice wake-up, OTA updates, and peripheral driver support. It captures audio and video through dedicated modules, encodes the data, and transmits it through RTSA (Real-Time Streaming Acceleration) to Agora's SD-RTN. The device also receives and decodes audio/video responses for playback.

* **Conversational AI Engine**

  The cloud service processes the incoming audio and video streams. It has two main components:

  * **Convo AI Core**: Handles AI-powered voice activity detection (VAD), noise reduction, echo cancellation, interruption detection, background voice filtering, and snapshot/frame capture
  * **Cascade Model**: Processes the audio through Speech-to-Text (STT), sends the text to a Large Language Model (LLM), and converts the response back to speech using Text-to-Speech (TTS)

The system uses G.711/G.722 audio codecs and MJPEG/H.264 video codecs for efficient real-time transmission between the device and cloud services, enabling low-latency conversational AI interactions.

## Hardware architecture [#hardware-architecture]

The R1 Kit integrates multiple hardware components to enable multimodal AI interactions:

![R1 Kit Hardware](https://assets-docs.agora.io/images/convo-ai-device-kit/device.png)

**Key components:**

* Dual-screen LCD/Single touch LCD (optional)
* Digital video port
* Bi-color LED indicator
* Dual-microphone array with solder pads and connectors
* Speaker with solder pads and connector
* Gyroscope for motion sensing
* SD NAND storage
* Battery connector for portable power
* NFC support
* USB-to-UART interface
* Reset button and side buttons
* Vibration motor (expandable)

## Software architecture [#software-architecture]

The software package provides a complete development framework for building conversational AI applications:

![R1 Kit Software](https://assets-docs.agora.io/images/convo-ai-device-kit/developer-kit.png)

## Related pages [#related-pages]

* [Specifications and compatibility](specifications-and-compatibility)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Convo AI Device Kit solution is built on Agora's Media Stream Acceleration (RTSA) or IoT SDK and Conversational AI Engine. RTSA is Agora's RTC client product designed specifically for the IoT industry, providing the real-time communication foundation for voice AI interactions."
  }, {
    heading: "solution-architecture",
    content: "The Convo AI Device Kit solution consists of two main components connected through Agora's backend."
  }, {
    heading: "solution-architecture",
    content: "**Convo AI Device Kit**"
  }, {
    heading: "solution-architecture",
    content: "The hardware device handles local processing including power management, Bluetooth pairing, voice wake-up, OTA updates, and peripheral driver support. It captures audio and video through dedicated modules, encodes the data, and transmits it through RTSA (Real-Time Streaming Acceleration) to Agora's SD-RTN. The device also receives and decodes audio/video responses for playback."
  }, {
    heading: "solution-architecture",
    content: "**Conversational AI Engine**"
  }, {
    heading: "solution-architecture",
    content: "The cloud service processes the incoming audio and video streams. It has two main components:"
  }, {
    heading: "solution-architecture",
    content: "**Convo AI Core**: Handles AI-powered voice activity detection (VAD), noise reduction, echo cancellation, interruption detection, background voice filtering, and snapshot/frame capture"
  }, {
    heading: "solution-architecture",
    content: "**Cascade Model**: Processes the audio through Speech-to-Text (STT), sends the text to a Large Language Model (LLM), and converts the response back to speech using Text-to-Speech (TTS)"
  }, {
    heading: "solution-architecture",
    content: "The system uses G.711/G.722 audio codecs and MJPEG/H.264 video codecs for efficient real-time transmission between the device and cloud services, enabling low-latency conversational AI interactions."
  }, {
    heading: "hardware-architecture",
    content: "The R1 Kit integrates multiple hardware components to enable multimodal AI interactions:"
  }, {
    heading: "hardware-architecture",
    content: "**Key components:**"
  }, {
    heading: "hardware-architecture",
    content: "Dual-screen LCD/Single touch LCD (optional)"
  }, {
    heading: "hardware-architecture",
    content: "Digital video port"
  }, {
    heading: "hardware-architecture",
    content: "Bi-color LED indicator"
  }, {
    heading: "hardware-architecture",
    content: "Dual-microphone array with solder pads and connectors"
  }, {
    heading: "hardware-architecture",
    content: "Speaker with solder pads and connector"
  }, {
    heading: "hardware-architecture",
    content: "Gyroscope for motion sensing"
  }, {
    heading: "hardware-architecture",
    content: "SD NAND storage"
  }, {
    heading: "hardware-architecture",
    content: "Battery connector for portable power"
  }, {
    heading: "hardware-architecture",
    content: "NFC support"
  }, {
    heading: "hardware-architecture",
    content: "USB-to-UART interface"
  }, {
    heading: "hardware-architecture",
    content: "Reset button and side buttons"
  }, {
    heading: "hardware-architecture",
    content: "Vibration motor (expandable)"
  }, {
    heading: "software-architecture",
    content: "The software package provides a complete development framework for building conversational AI applications:"
  }, {
    heading: "related-pages",
    content: "Specifications and compatibility"
  }],
  headings: [{
    id: "solution-architecture",
    content: "Solution architecture"
  }, {
    id: "hardware-architecture",
    content: "Hardware architecture"
  }, {
    id: "software-architecture",
    content: "Software architecture"
  }, {
    id: "related-pages",
    content: "Related pages"
  }]
};
export let toc = [{
  depth: 2,
  url: "#solution-architecture",
  title: _jsx(_Fragment, {
    children: "Solution architecture"
  })
}, {
  depth: 2,
  url: "#hardware-architecture",
  title: _jsx(_Fragment, {
    children: "Hardware architecture"
  })
}, {
  depth: 2,
  url: "#software-architecture",
  title: _jsx(_Fragment, {
    children: "Software architecture"
  })
}, {
  depth: 2,
  url: "#related-pages",
  title: _jsx(_Fragment, {
    children: "Related pages"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The Convo AI Device Kit solution is built on Agora's Media Stream Acceleration (RTSA) or IoT SDK and Conversational AI Engine. RTSA is Agora's RTC client product designed specifically for the IoT industry, providing the real-time communication foundation for voice AI interactions."
    }), `
`, _jsx(_components.h2, {
      id: "solution-architecture",
      children: "Solution architecture"
    }), `
`, _jsx(_components.p, {
      children: "The Convo AI Device Kit solution consists of two main components connected through Agora's backend."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/convo-ai-device-kit/architecture.png",
        alt: "Solution Architecture"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Convo AI Device Kit"
          })
        }), `
`, _jsx(_components.p, {
          children: "The hardware device handles local processing including power management, Bluetooth pairing, voice wake-up, OTA updates, and peripheral driver support. It captures audio and video through dedicated modules, encodes the data, and transmits it through RTSA (Real-Time Streaming Acceleration) to Agora's SD-RTN. The device also receives and decodes audio/video responses for playback."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Conversational AI Engine"
          })
        }), `
`, _jsx(_components.p, {
          children: "The cloud service processes the incoming audio and video streams. It has two main components:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Convo AI Core"
            }), ": Handles AI-powered voice activity detection (VAD), noise reduction, echo cancellation, interruption detection, background voice filtering, and snapshot/frame capture"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Cascade Model"
            }), ": Processes the audio through Speech-to-Text (STT), sends the text to a Large Language Model (LLM), and converts the response back to speech using Text-to-Speech (TTS)"]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The system uses G.711/G.722 audio codecs and MJPEG/H.264 video codecs for efficient real-time transmission between the device and cloud services, enabling low-latency conversational AI interactions."
    }), `
`, _jsx(_components.h2, {
      id: "hardware-architecture",
      children: "Hardware architecture"
    }), `
`, _jsx(_components.p, {
      children: "The R1 Kit integrates multiple hardware components to enable multimodal AI interactions:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/convo-ai-device-kit/device.png",
        alt: "R1 Kit Hardware"
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Key components:"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Dual-screen LCD/Single touch LCD (optional)"
      }), `
`, _jsx(_components.li, {
        children: "Digital video port"
      }), `
`, _jsx(_components.li, {
        children: "Bi-color LED indicator"
      }), `
`, _jsx(_components.li, {
        children: "Dual-microphone array with solder pads and connectors"
      }), `
`, _jsx(_components.li, {
        children: "Speaker with solder pads and connector"
      }), `
`, _jsx(_components.li, {
        children: "Gyroscope for motion sensing"
      }), `
`, _jsx(_components.li, {
        children: "SD NAND storage"
      }), `
`, _jsx(_components.li, {
        children: "Battery connector for portable power"
      }), `
`, _jsx(_components.li, {
        children: "NFC support"
      }), `
`, _jsx(_components.li, {
        children: "USB-to-UART interface"
      }), `
`, _jsx(_components.li, {
        children: "Reset button and side buttons"
      }), `
`, _jsx(_components.li, {
        children: "Vibration motor (expandable)"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "software-architecture",
      children: "Software architecture"
    }), `
`, _jsx(_components.p, {
      children: "The software package provides a complete development framework for building conversational AI applications:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/convo-ai-device-kit/developer-kit.png",
        alt: "R1 Kit Software"
      })
    }), `
`, _jsx(_components.h2, {
      id: "related-pages",
      children: "Related pages"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "specifications-and-compatibility",
          children: "Specifications and compatibility"
        })
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
