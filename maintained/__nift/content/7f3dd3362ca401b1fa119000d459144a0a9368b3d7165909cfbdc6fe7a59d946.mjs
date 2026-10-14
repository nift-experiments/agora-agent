import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Configure device network",
  description: "Connect the R1 device to Wi-Fi through the companion Android app."
};
export let _markdown = `

The R1 kit includes an Android app in the \`app\` folder for configuring device network access through Bluetooth Low Energy (BLE). The app provides a simple interface for connecting your R1 device to Wi-Fi.

This app is built using Agora's Bluetooth configuration library.

<CalloutContainer type="info">
  <CalloutTitle>
    Info
  </CalloutTitle>

  <CalloutDescription>
    Before configuring network access, ensure the following:

    * Bluetooth and location services are enabled on your Android device.
    * The R1 device is in discoverable mode.
    * Your Android device is within 5 meters of the R1 device.
    * Your Android device is connected to a 2.4 GHz Wi-Fi network with internet access. Network configuration fails without internet connectivity.
    * For Android 12 and later, you have granted \`BLUETOOTH_SCAN\` and \`BLUETOOTH_CONNECT\` permissions to the app.
  </CalloutDescription>
</CalloutContainer>

## Connect your device to Wi-Fi [#connect-your-device-to-wi-fi]

1. Grant the required permissions when prompted by the app.
2. Verify your current Wi-Fi network information.
3. Enter your Wi-Fi password.
4. Scan for and select your target Bluetooth device.
5. Click **Connect** to establish a connection with the device.
6. After the connection succeeds, click **Configure Network** to send the Wi-Fi credentials to the device.
7. After the network configuration completes, click **Disconnect** to end the Bluetooth connection.

![Android app](https://assets-docs.agora.io/images/convo-ai-device-kit/convo-ai-device-app.jpg)

## Set up network access [#set-up-network-access]

1. **Request permissions**. When you first open the app, grant the required permissions:
   1. Tap **Request Permissions**. The app requests Bluetooth and location permissions needed for scanning and connecting to Bluetooth devices.
   2. Tap **Allow** in the system permission dialog.

2. **Verify Wi-Fi permissions**. Tap **Check Wi-Fi Permissions**. The app checks whether it has the necessary Wi-Fi permissions and displays the result.

3. **Get Wi-Fi information**. Tap **Get Current Wi-Fi Information**. The app retrieves and displays your current Wi-Fi network name (SSID) in a card below the button.

4. **Enter Wi-Fi password**. Enter your Wi-Fi network password in the password field. The device uses this password to connect to your Wi-Fi network.

5. **Scan for Bluetooth devices**:
   1. Tap **Start Scan**. The app scans for nearby Bluetooth devices. The button text changes to **Stop Scanning** during the scan.
   2. Scanned devices appear in the list below.
   3. Tap **Stop Scanning** to end the scan.

6. **Connect to your device**. Each device card in the list displays:

   * Device name
   * MAC address
   * Signal strength (RSSI)
   * **Connect**: Establishes a Bluetooth connection with the device
   * **Configure Network**: Sends Wi-Fi credentials to the device
   * **Disconnect**: Ends the Bluetooth connection

   If network configuration fails, reconnect the device or restart the app.

## Troubleshooting [#troubleshooting]

If you encounter issues during network configuration, try the following solutions:

* **Cannot scan for devices**: Verify that Bluetooth and location services are enabled on your Android device.
* **Connection fails**: Rescan for the device or restart the R1 device.
* **Network configuration fails**: Verify that you entered the correct Wi-Fi password.

## Related pages [#related-pages]

* [Device controls](device-controls)
* [Build and flash firmware](build-and-flash-firmware)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The R1 kit includes an Android app in the `app` folder for configuring device network access through Bluetooth Low Energy (BLE). The app provides a simple interface for connecting your R1 device to Wi-Fi."
  }, {
    heading: undefined,
    content: "This app is built using Agora's Bluetooth configuration library."
  }, {
    heading: undefined,
    content: "Before configuring network access, ensure the following:"
  }, {
    heading: undefined,
    content: "Bluetooth and location services are enabled on your Android device."
  }, {
    heading: undefined,
    content: "The R1 device is in discoverable mode."
  }, {
    heading: undefined,
    content: "Your Android device is within 5 meters of the R1 device."
  }, {
    heading: undefined,
    content: "Your Android device is connected to a 2.4 GHz Wi-Fi network with internet access. Network configuration fails without internet connectivity."
  }, {
    heading: undefined,
    content: "For Android 12 and later, you have granted `BLUETOOTH_SCAN` and `BLUETOOTH_CONNECT` permissions to the app."
  }, {
    heading: "connect-your-device-to-wi-fi",
    content: "Grant the required permissions when prompted by the app."
  }, {
    heading: "connect-your-device-to-wi-fi",
    content: "Verify your current Wi-Fi network information."
  }, {
    heading: "connect-your-device-to-wi-fi",
    content: "Enter your Wi-Fi password."
  }, {
    heading: "connect-your-device-to-wi-fi",
    content: "Scan for and select your target Bluetooth device."
  }, {
    heading: "connect-your-device-to-wi-fi",
    content: "Click **Connect** to establish a connection with the device."
  }, {
    heading: "connect-your-device-to-wi-fi",
    content: "After the connection succeeds, click **Configure Network** to send the Wi-Fi credentials to the device."
  }, {
    heading: "connect-your-device-to-wi-fi",
    content: "After the network configuration completes, click **Disconnect** to end the Bluetooth connection."
  }, {
    heading: "set-up-network-access",
    content: "**Request permissions**. When you first open the app, grant the required permissions:"
  }, {
    heading: "set-up-network-access",
    content: "Tap **Request Permissions**. The app requests Bluetooth and location permissions needed for scanning and connecting to Bluetooth devices."
  }, {
    heading: "set-up-network-access",
    content: "Tap **Allow** in the system permission dialog."
  }, {
    heading: "set-up-network-access",
    content: "**Verify Wi-Fi permissions**. Tap **Check Wi-Fi Permissions**. The app checks whether it has the necessary Wi-Fi permissions and displays the result."
  }, {
    heading: "set-up-network-access",
    content: "**Get Wi-Fi information**. Tap **Get Current Wi-Fi Information**. The app retrieves and displays your current Wi-Fi network name (SSID) in a card below the button."
  }, {
    heading: "set-up-network-access",
    content: "**Enter Wi-Fi password**. Enter your Wi-Fi network password in the password field. The device uses this password to connect to your Wi-Fi network."
  }, {
    heading: "set-up-network-access",
    content: "**Scan for Bluetooth devices**:"
  }, {
    heading: "set-up-network-access",
    content: "Tap **Start Scan**. The app scans for nearby Bluetooth devices. The button text changes to **Stop Scanning** during the scan."
  }, {
    heading: "set-up-network-access",
    content: "Scanned devices appear in the list below."
  }, {
    heading: "set-up-network-access",
    content: "Tap **Stop Scanning** to end the scan."
  }, {
    heading: "set-up-network-access",
    content: "**Connect to your device**. Each device card in the list displays:"
  }, {
    heading: "set-up-network-access",
    content: "Device name"
  }, {
    heading: "set-up-network-access",
    content: "MAC address"
  }, {
    heading: "set-up-network-access",
    content: "Signal strength (RSSI)"
  }, {
    heading: "set-up-network-access",
    content: "**Connect**: Establishes a Bluetooth connection with the device"
  }, {
    heading: "set-up-network-access",
    content: "**Configure Network**: Sends Wi-Fi credentials to the device"
  }, {
    heading: "set-up-network-access",
    content: "**Disconnect**: Ends the Bluetooth connection"
  }, {
    heading: "set-up-network-access",
    content: "If network configuration fails, reconnect the device or restart the app."
  }, {
    heading: "troubleshooting",
    content: "If you encounter issues during network configuration, try the following solutions:"
  }, {
    heading: "troubleshooting",
    content: "**Cannot scan for devices**: Verify that Bluetooth and location services are enabled on your Android device."
  }, {
    heading: "troubleshooting",
    content: "**Connection fails**: Rescan for the device or restart the R1 device."
  }, {
    heading: "troubleshooting",
    content: "**Network configuration fails**: Verify that you entered the correct Wi-Fi password."
  }, {
    heading: "related-pages",
    content: "Device controls"
  }, {
    heading: "related-pages",
    content: "Build and flash firmware"
  }],
  headings: [{
    id: "connect-your-device-to-wi-fi",
    content: "Connect your device to Wi-Fi"
  }, {
    id: "set-up-network-access",
    content: "Set up network access"
  }, {
    id: "troubleshooting",
    content: "Troubleshooting"
  }, {
    id: "related-pages",
    content: "Related pages"
  }]
};
export let toc = [{
  depth: 2,
  url: "#connect-your-device-to-wi-fi",
  title: _jsx(_Fragment, {
    children: "Connect your device to Wi-Fi"
  })
}, {
  depth: 2,
  url: "#set-up-network-access",
  title: _jsx(_Fragment, {
    children: "Set up network access"
  })
}, {
  depth: 2,
  url: "#troubleshooting",
  title: _jsx(_Fragment, {
    children: "Troubleshooting"
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
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["The R1 kit includes an Android app in the ", _jsx(_components.code, {
        children: "app"
      }), " folder for configuring device network access through Bluetooth Low Energy (BLE). The app provides a simple interface for connecting your R1 device to Wi-Fi."]
    }), `
`, _jsx(_components.p, {
      children: "This app is built using Agora's Bluetooth configuration library."
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Info"
      }), _jsxs(CalloutDescription, {
        children: [_jsx(_components.p, {
          children: "Before configuring network access, ensure the following:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Bluetooth and location services are enabled on your Android device."
          }), `
`, _jsx(_components.li, {
            children: "The R1 device is in discoverable mode."
          }), `
`, _jsx(_components.li, {
            children: "Your Android device is within 5 meters of the R1 device."
          }), `
`, _jsx(_components.li, {
            children: "Your Android device is connected to a 2.4 GHz Wi-Fi network with internet access. Network configuration fails without internet connectivity."
          }), `
`, _jsxs(_components.li, {
            children: ["For Android 12 and later, you have granted ", _jsx(_components.code, {
              children: "BLUETOOTH_SCAN"
            }), " and ", _jsx(_components.code, {
              children: "BLUETOOTH_CONNECT"
            }), " permissions to the app."]
          }), `
`]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "connect-your-device-to-wi-fi",
      children: "Connect your device to Wi-Fi"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Grant the required permissions when prompted by the app."
      }), `
`, _jsx(_components.li, {
        children: "Verify your current Wi-Fi network information."
      }), `
`, _jsx(_components.li, {
        children: "Enter your Wi-Fi password."
      }), `
`, _jsx(_components.li, {
        children: "Scan for and select your target Bluetooth device."
      }), `
`, _jsxs(_components.li, {
        children: ["Click ", _jsx(_components.strong, {
          children: "Connect"
        }), " to establish a connection with the device."]
      }), `
`, _jsxs(_components.li, {
        children: ["After the connection succeeds, click ", _jsx(_components.strong, {
          children: "Configure Network"
        }), " to send the Wi-Fi credentials to the device."]
      }), `
`, _jsxs(_components.li, {
        children: ["After the network configuration completes, click ", _jsx(_components.strong, {
          children: "Disconnect"
        }), " to end the Bluetooth connection."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/convo-ai-device-kit/convo-ai-device-app.jpg",
        alt: "Android app"
      })
    }), `
`, _jsx(_components.h2, {
      id: "set-up-network-access",
      children: "Set up network access"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Request permissions"
          }), ". When you first open the app, grant the required permissions:"]
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Tap ", _jsx(_components.strong, {
              children: "Request Permissions"
            }), ". The app requests Bluetooth and location permissions needed for scanning and connecting to Bluetooth devices."]
          }), `
`, _jsxs(_components.li, {
            children: ["Tap ", _jsx(_components.strong, {
              children: "Allow"
            }), " in the system permission dialog."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Verify Wi-Fi permissions"
          }), ". Tap ", _jsx(_components.strong, {
            children: "Check Wi-Fi Permissions"
          }), ". The app checks whether it has the necessary Wi-Fi permissions and displays the result."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Get Wi-Fi information"
          }), ". Tap ", _jsx(_components.strong, {
            children: "Get Current Wi-Fi Information"
          }), ". The app retrieves and displays your current Wi-Fi network name (SSID) in a card below the button."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Enter Wi-Fi password"
          }), ". Enter your Wi-Fi network password in the password field. The device uses this password to connect to your Wi-Fi network."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Scan for Bluetooth devices"
          }), ":"]
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Tap ", _jsx(_components.strong, {
              children: "Start Scan"
            }), ". The app scans for nearby Bluetooth devices. The button text changes to ", _jsx(_components.strong, {
              children: "Stop Scanning"
            }), " during the scan."]
          }), `
`, _jsx(_components.li, {
            children: "Scanned devices appear in the list below."
          }), `
`, _jsxs(_components.li, {
            children: ["Tap ", _jsx(_components.strong, {
              children: "Stop Scanning"
            }), " to end the scan."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Connect to your device"
          }), ". Each device card in the list displays:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Device name"
          }), `
`, _jsx(_components.li, {
            children: "MAC address"
          }), `
`, _jsx(_components.li, {
            children: "Signal strength (RSSI)"
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Connect"
            }), ": Establishes a Bluetooth connection with the device"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Configure Network"
            }), ": Sends Wi-Fi credentials to the device"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Disconnect"
            }), ": Ends the Bluetooth connection"]
          }), `
`]
        }), `
`, _jsx(_components.p, {
          children: "If network configuration fails, reconnect the device or restart the app."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), `
`, _jsx(_components.p, {
      children: "If you encounter issues during network configuration, try the following solutions:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Cannot scan for devices"
        }), ": Verify that Bluetooth and location services are enabled on your Android device."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Connection fails"
        }), ": Rescan for the device or restart the R1 device."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Network configuration fails"
        }), ": Verify that you entered the correct Wi-Fi password."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "related-pages",
      children: "Related pages"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "device-controls",
          children: "Device controls"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "build-and-flash-firmware",
          children: "Build and flash firmware"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
