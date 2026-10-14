import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Device controls",
  description: "Reference for device controls, LED indicators, and operational features."
};
export let _markdown = `

This guide provides information about the operational features, controls, and status indicators of the Convo AI Device Kit R1. Use this as a reference while using the device.

## Power management [#power-management]

| Task                | How to do it                                                                   |
| ------------------- | ------------------------------------------------------------------------------ |
| Power on            | Press and hold the **Middle button** for 3 seconds or longer                   |
| Power off           | Press and hold the **Middle button** for 3 seconds or longer (when powered on) |
| Charge battery      | Use any **USB Type-C port** on the device                                      |
| Use without battery | Connect a Type-C cable directly to the device                                  |

## Volume control [#volume-control]

| Task            | How to do it                      |
| --------------- | --------------------------------- |
| Increase volume | Single click the **Left button**  |
| Decrease volume | Single click the **Right button** |

## Network configuration [#network-configuration]

| Task                             | How to do it                                                                                                                                                               |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enter network configuration mode | When powered on, press and hold the **Left button** for 3+ seconds. The device enters waiting state and is ready to pair via Bluetooth.                                    |
| Use hotspot-only setup           | Pre-configure a hotspot on your smartphone with name \`AGORA_AI_KIT\` and password \`1234567890\`. The device automatically detects and connects during network configuration. |

## Voice interaction [#voice-interaction]

| Task               | How to do it                                                                                       |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| Wake up the device | Short press the **Middle button**.                                                                 |
| Resume after idle  | The device disconnects after 3 minutes of inactivity. Short press the **Middle button** to resume. |

## Role management [#role-management]

Switch AI agent roles through the Agora Convo AI app or by pressing the **Reset Button** on the right side of the device. After switching, wake up the device to complete the process.

## Device status [#device-status]

The LED indicator displays your device's current state:

| LED Pattern                        | Status                                                        |
| ---------------------------------- | ------------------------------------------------------------- |
| Alternating red and green blinking | Waiting for network configuration                             |
| Red blinking                       | Waiting for network connection                                |
| Green blinking                     | Network connected, AI agent disconnected, waiting for wake up |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This guide provides information about the operational features, controls, and status indicators of the Convo AI Device Kit R1. Use this as a reference while using the device."
  }, {
    heading: "power-management",
    content: "Task"
  }, {
    heading: "power-management",
    content: "How to do it"
  }, {
    heading: "power-management",
    content: "Power on"
  }, {
    heading: "power-management",
    content: "Press and hold the **Middle button** for 3 seconds or longer"
  }, {
    heading: "power-management",
    content: "Power off"
  }, {
    heading: "power-management",
    content: "Press and hold the **Middle button** for 3 seconds or longer (when powered on)"
  }, {
    heading: "power-management",
    content: "Charge battery"
  }, {
    heading: "power-management",
    content: "Use any **USB Type-C port** on the device"
  }, {
    heading: "power-management",
    content: "Use without battery"
  }, {
    heading: "power-management",
    content: "Connect a Type-C cable directly to the device"
  }, {
    heading: "volume-control",
    content: "Task"
  }, {
    heading: "volume-control",
    content: "How to do it"
  }, {
    heading: "volume-control",
    content: "Increase volume"
  }, {
    heading: "volume-control",
    content: "Single click the **Left button**"
  }, {
    heading: "volume-control",
    content: "Decrease volume"
  }, {
    heading: "volume-control",
    content: "Single click the **Right button**"
  }, {
    heading: "network-configuration",
    content: "Task"
  }, {
    heading: "network-configuration",
    content: "How to do it"
  }, {
    heading: "network-configuration",
    content: "Enter network configuration mode"
  }, {
    heading: "network-configuration",
    content: "When powered on, press and hold the **Left button** for 3+ seconds. The device enters waiting state and is ready to pair via Bluetooth."
  }, {
    heading: "network-configuration",
    content: "Use hotspot-only setup"
  }, {
    heading: "network-configuration",
    content: "Pre-configure a hotspot on your smartphone with name `AGORA_AI_KIT` and password `1234567890`. The device automatically detects and connects during network configuration."
  }, {
    heading: "voice-interaction",
    content: "Task"
  }, {
    heading: "voice-interaction",
    content: "How to do it"
  }, {
    heading: "voice-interaction",
    content: "Wake up the device"
  }, {
    heading: "voice-interaction",
    content: "Short press the **Middle button**."
  }, {
    heading: "voice-interaction",
    content: "Resume after idle"
  }, {
    heading: "voice-interaction",
    content: "The device disconnects after 3 minutes of inactivity. Short press the **Middle button** to resume."
  }, {
    heading: "role-management",
    content: "Switch AI agent roles through the Agora Convo AI app or by pressing the **Reset Button** on the right side of the device. After switching, wake up the device to complete the process."
  }, {
    heading: "device-status",
    content: "The LED indicator displays your device's current state:"
  }, {
    heading: "device-status",
    content: "LED Pattern"
  }, {
    heading: "device-status",
    content: "Status"
  }, {
    heading: "device-status",
    content: "Alternating red and green blinking"
  }, {
    heading: "device-status",
    content: "Waiting for network configuration"
  }, {
    heading: "device-status",
    content: "Red blinking"
  }, {
    heading: "device-status",
    content: "Waiting for network connection"
  }, {
    heading: "device-status",
    content: "Green blinking"
  }, {
    heading: "device-status",
    content: "Network connected, AI agent disconnected, waiting for wake up"
  }],
  headings: [{
    id: "power-management",
    content: "Power management"
  }, {
    id: "volume-control",
    content: "Volume control"
  }, {
    id: "network-configuration",
    content: "Network configuration"
  }, {
    id: "voice-interaction",
    content: "Voice interaction"
  }, {
    id: "role-management",
    content: "Role management"
  }, {
    id: "device-status",
    content: "Device status"
  }]
};
export let toc = [{
  depth: 2,
  url: "#power-management",
  title: _jsx(_Fragment, {
    children: "Power management"
  })
}, {
  depth: 2,
  url: "#volume-control",
  title: _jsx(_Fragment, {
    children: "Volume control"
  })
}, {
  depth: 2,
  url: "#network-configuration",
  title: _jsx(_Fragment, {
    children: "Network configuration"
  })
}, {
  depth: 2,
  url: "#voice-interaction",
  title: _jsx(_Fragment, {
    children: "Voice interaction"
  })
}, {
  depth: 2,
  url: "#role-management",
  title: _jsx(_Fragment, {
    children: "Role management"
  })
}, {
  depth: 2,
  url: "#device-status",
  title: _jsx(_Fragment, {
    children: "Device status"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This guide provides information about the operational features, controls, and status indicators of the Convo AI Device Kit R1. Use this as a reference while using the device."
    }), `
`, _jsx(_components.h2, {
      id: "power-management",
      children: "Power management"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Task"
          }), _jsx(_components.th, {
            children: "How to do it"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Power on"
          }), _jsxs(_components.td, {
            children: ["Press and hold the ", _jsx(_components.strong, {
              children: "Middle button"
            }), " for 3 seconds or longer"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Power off"
          }), _jsxs(_components.td, {
            children: ["Press and hold the ", _jsx(_components.strong, {
              children: "Middle button"
            }), " for 3 seconds or longer (when powered on)"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Charge battery"
          }), _jsxs(_components.td, {
            children: ["Use any ", _jsx(_components.strong, {
              children: "USB Type-C port"
            }), " on the device"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Use without battery"
          }), _jsx(_components.td, {
            children: "Connect a Type-C cable directly to the device"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "volume-control",
      children: "Volume control"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Task"
          }), _jsx(_components.th, {
            children: "How to do it"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Increase volume"
          }), _jsxs(_components.td, {
            children: ["Single click the ", _jsx(_components.strong, {
              children: "Left button"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Decrease volume"
          }), _jsxs(_components.td, {
            children: ["Single click the ", _jsx(_components.strong, {
              children: "Right button"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "network-configuration",
      children: "Network configuration"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Task"
          }), _jsx(_components.th, {
            children: "How to do it"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Enter network configuration mode"
          }), _jsxs(_components.td, {
            children: ["When powered on, press and hold the ", _jsx(_components.strong, {
              children: "Left button"
            }), " for 3+ seconds. The device enters waiting state and is ready to pair via Bluetooth."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Use hotspot-only setup"
          }), _jsxs(_components.td, {
            children: ["Pre-configure a hotspot on your smartphone with name ", _jsx(_components.code, {
              children: "AGORA_AI_KIT"
            }), " and password ", _jsx(_components.code, {
              children: "1234567890"
            }), ". The device automatically detects and connects during network configuration."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "voice-interaction",
      children: "Voice interaction"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Task"
          }), _jsx(_components.th, {
            children: "How to do it"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Wake up the device"
          }), _jsxs(_components.td, {
            children: ["Short press the ", _jsx(_components.strong, {
              children: "Middle button"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Resume after idle"
          }), _jsxs(_components.td, {
            children: ["The device disconnects after 3 minutes of inactivity. Short press the ", _jsx(_components.strong, {
              children: "Middle button"
            }), " to resume."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "role-management",
      children: "Role management"
    }), `
`, _jsxs(_components.p, {
      children: ["Switch AI agent roles through the Agora Convo AI app or by pressing the ", _jsx(_components.strong, {
        children: "Reset Button"
      }), " on the right side of the device. After switching, wake up the device to complete the process."]
    }), `
`, _jsx(_components.h2, {
      id: "device-status",
      children: "Device status"
    }), `
`, _jsx(_components.p, {
      children: "The LED indicator displays your device's current state:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "LED Pattern"
          }), _jsx(_components.th, {
            children: "Status"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Alternating red and green blinking"
          }), _jsx(_components.td, {
            children: "Waiting for network configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Red blinking"
          }), _jsx(_components.td, {
            children: "Waiting for network connection"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Green blinking"
          }), _jsx(_components.td, {
            children: "Network connected, AI agent disconnected, waiting for wake up"
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
