import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Release notes",
  description: "Information about changes in each release of IoT SDK."
};
export let _markdown = `

This page lists the new features, improvements, and bug fixes in each IoT SDK release.

<CalloutContainer type="info">
  <CalloutDescription>
    IoT SDK for Android no longer receives version updates after v1.8.0. For Android-based device integrations, Agora recommends using the [RTC Java SDK](/en/api-reference/sdks?product=video\\&platform=android) together with the [Signaling Java SDK](/en/api-reference/sdks?product=signaling\\&platform=android) instead.
  </CalloutDescription>
</CalloutContainer>

<Accordions type="multiple">
  <Accordion title="v1.9.7" id="v197" headingLevel="2" value="v197">
    Released on September 2, 2026.

    This release consolidates the key updates introduced from v1.8.0 through v1.9.7. Across the 1.9.x series, the SDK focuses on four areas: more reliable connectivity, more complete messaging and control capabilities, stronger media processing, and easier integration and maintenance. The 1.9.x series expands the SDK from a lightweight media transport stack into a more complete foundation for production IoT deployments.

    #### New features [#new-features]

    * **More flexible connection management**: Adds the Connection ID mechanism and the corresponding \`agora_rtc_create_connection\`, \`agora_rtc_destroy_connection\`, and \`agora_rtc_get_connection_info\` APIs, enabling more flexible RTC connection lifecycle management. See [Manage connections](../build/manage-connections-and-quality/connection-management.mdx).

    * **Built-in license validation**: Adds automatic license validation during channel join and the \`on_license_validation_failure\` callback for explicit failure reporting. See [Implement licensing](../build/authenticate-and-secure-channels/license.mdx).

    * **Reliable messaging and richer control paths**: Adds RDT-based reliable messaging, including \`agora_rtc_send_rdt_msg\`, \`agora_rtc_get_rdt_status_info\`, \`on_rdt_state\`, and \`on_rdt_msg\`, making it easier to deliver control and device messages reliably. See [Send messages through the RDT channel](../build/send-messages/rdt-messaging.mdx).

    * **String UID support**: Adds User Account-based APIs, including \`agora_rtc_join_channel_with_user_account\`, \`agora_rtc_get_user_info_by_user_account\`, and \`agora_rtc_get_user_info_by_uid\`, to support String UID-based identity systems. See [Identify users with String UID](../build/authenticate-and-secure-channels/string-uid.mdx).

    * **Expanded media and network capabilities**: Adds video rotation reporting, media encryption through \`crypto_opt\`, configurable audio packet duration through \`pcm_duration\`, 8 kHz AAC-LC support, downlink AEC, RDT encryption, the \`enable_rdt\` option, and IPv6 support. See [Configure the audio codec](../build/configure-media/audio-codec.mdx) for the audio codec changes.

    * **More resilient Signaling transport**: Adds AUT-based transport to improve Signaling reliability in weak-network environments.

    #### Improvements [#improvements]

    * **Improved connection resilience**: Adds the \`on_reconnecting\` callback and refines the behavior of connection-related callbacks, making it easier to detect and handle temporary network interruptions.

    * **More flexible video frame-rate configuration**: Changes \`video_frame_info_t.frame_rate\` from an enum to an integer. Applications can now configure frame rates from 1 to 60 fps.

    * **Improved audio processing**: Improves audio codec decoupling, jitter buffering, audio mixing, packet-loss handling, and downlink audio processing for real-time conversational scenarios.

    * **Improved Signaling stability and usability**: Improves login performance, keepalive behavior, timeout handling, reconnection behavior, and error reporting. The maximum Signaling message payload size is now 31 KB.

    * **Improved error handling**: Refines error-code organization and adds the \`RTM_MSG_STATE_TIMEOUT\` message state.

    #### Bug fixes [#bug-fixes]

    * Fixed an issue where video RTP timestamps occasionally failed.
  </Accordion>

  <Accordion title="v1.8.0" id="v180" headingLevel="2" value="v180">
    Released on May 1, 2023.

    #### New features [#new-features-1]

    * Two-way audio and video communication between IoT SDK instances as well as between
      IoT SDK and RTC SDK for Android, iOS, macOS, Windows, and web.

    * Providing a target bitrate per bandwidth estimation (BWE) algorithms.

    * Requesting key frames from remote users.

    * Muting and unmuting local and remote media streams.

    * Monitoring the transmission state of remote media streams.
  </Accordion>
</Accordions>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page lists the new features, improvements, and bug fixes in each IoT SDK release."
  }, {
    heading: undefined,
    content: "IoT SDK for Android no longer receives version updates after v1.8.0. For Android-based device integrations, Agora recommends using the RTC Java SDK together with the Signaling Java SDK instead."
  }, {
    heading: undefined,
    content: "Released on September 2, 2026."
  }, {
    heading: undefined,
    content: "This release consolidates the key updates introduced from v1.8.0 through v1.9.7. Across the 1.9.x series, the SDK focuses on four areas: more reliable connectivity, more complete messaging and control capabilities, stronger media processing, and easier integration and maintenance. The 1.9.x series expands the SDK from a lightweight media transport stack into a more complete foundation for production IoT deployments."
  }, {
    heading: "new-features",
    content: "**More flexible connection management**: Adds the Connection ID mechanism and the corresponding `agora_rtc_create_connection`, `agora_rtc_destroy_connection`, and `agora_rtc_get_connection_info` APIs, enabling more flexible RTC connection lifecycle management. See Manage connections."
  }, {
    heading: "new-features",
    content: "**Built-in license validation**: Adds automatic license validation during channel join and the `on_license_validation_failure` callback for explicit failure reporting. See Implement licensing."
  }, {
    heading: "new-features",
    content: "**Reliable messaging and richer control paths**: Adds RDT-based reliable messaging, including `agora_rtc_send_rdt_msg`, `agora_rtc_get_rdt_status_info`, `on_rdt_state`, and `on_rdt_msg`, making it easier to deliver control and device messages reliably. See Send messages through the RDT channel."
  }, {
    heading: "new-features",
    content: "**String UID support**: Adds User Account-based APIs, including `agora_rtc_join_channel_with_user_account`, `agora_rtc_get_user_info_by_user_account`, and `agora_rtc_get_user_info_by_uid`, to support String UID-based identity systems. See Identify users with String UID."
  }, {
    heading: "new-features",
    content: "**Expanded media and network capabilities**: Adds video rotation reporting, media encryption through `crypto_opt`, configurable audio packet duration through `pcm_duration`, 8 kHz AAC-LC support, downlink AEC, RDT encryption, the `enable_rdt` option, and IPv6 support. See Configure the audio codec for the audio codec changes."
  }, {
    heading: "new-features",
    content: "**More resilient Signaling transport**: Adds AUT-based transport to improve Signaling reliability in weak-network environments."
  }, {
    heading: "improvements",
    content: "**Improved connection resilience**: Adds the `on_reconnecting` callback and refines the behavior of connection-related callbacks, making it easier to detect and handle temporary network interruptions."
  }, {
    heading: "improvements",
    content: "**More flexible video frame-rate configuration**: Changes `video_frame_info_t.frame_rate` from an enum to an integer. Applications can now configure frame rates from 1 to 60 fps."
  }, {
    heading: "improvements",
    content: "**Improved audio processing**: Improves audio codec decoupling, jitter buffering, audio mixing, packet-loss handling, and downlink audio processing for real-time conversational scenarios."
  }, {
    heading: "improvements",
    content: "**Improved Signaling stability and usability**: Improves login performance, keepalive behavior, timeout handling, reconnection behavior, and error reporting. The maximum Signaling message payload size is now 31 KB."
  }, {
    heading: "improvements",
    content: "**Improved error handling**: Refines error-code organization and adds the `RTM_MSG_STATE_TIMEOUT` message state."
  }, {
    heading: "bug-fixes",
    content: "Fixed an issue where video RTP timestamps occasionally failed."
  }, {
    heading: "bug-fixes",
    content: "Released on May 1, 2023."
  }, {
    heading: "new-features-1",
    content: `Two-way audio and video communication between IoT SDK instances as well as between
IoT SDK and RTC SDK for Android, iOS, macOS, Windows, and web.`
  }, {
    heading: "new-features-1",
    content: "Providing a target bitrate per bandwidth estimation (BWE) algorithms."
  }, {
    heading: "new-features-1",
    content: "Requesting key frames from remote users."
  }, {
    heading: "new-features-1",
    content: "Muting and unmuting local and remote media streams."
  }, {
    heading: "new-features-1",
    content: "Monitoring the transmission state of remote media streams."
  }],
  headings: [{
    id: "new-features",
    content: "New features"
  }, {
    id: "improvements",
    content: "Improvements"
  }, {
    id: "bug-fixes",
    content: "Bug fixes"
  }, {
    id: "new-features-1",
    content: "New features"
  }]
};
export let toc = [{
  depth: 4,
  url: "#new-features",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#bug-fixes",
  title: _jsx(_Fragment, {
    children: "Bug fixes"
  })
}, {
  depth: 4,
  url: "#new-features-1",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { Accordion, Accordions, CalloutContainer, CalloutDescription } = _components;
  if (!Accordion)
    _missingMdxReference("Accordion", true);
  if (!Accordions)
    _missingMdxReference("Accordions", true);
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page lists the new features, improvements, and bug fixes in each IoT SDK release."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["IoT SDK for Android no longer receives version updates after v1.8.0. For Android-based device integrations, Agora recommends using the ", _jsx(_components.a, {
            href: "/en/api-reference/sdks?product=video&platform=android",
            children: "RTC Java SDK"
          }), " together with the ", _jsx(_components.a, {
            href: "/en/api-reference/sdks?product=signaling&platform=android",
            children: "Signaling Java SDK"
          }), " instead."]
        })
      })
    }), `
`, _jsxs(Accordions, {
      type: "multiple",
      openFirst: true,
      children: [_jsxs(Accordion, {
        title: "v1.9.7",
        id: "v197",
        headingLevel: 2,
        value: "v197",
        children: [_jsx(_components.p, {
          children: "Released on September 2, 2026."
        }), _jsx(_components.p, {
          children: "This release consolidates the key updates introduced from v1.8.0 through v1.9.7. Across the 1.9.x series, the SDK focuses on four areas: more reliable connectivity, more complete messaging and control capabilities, stronger media processing, and easier integration and maintenance. The 1.9.x series expands the SDK from a lightweight media transport stack into a more complete foundation for production IoT deployments."
        }), _jsx(_components.h4, {
          id: "new-features",
          children: "New features"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "More flexible connection management"
              }), ": Adds the Connection ID mechanism and the corresponding ", _jsx(_components.code, {
                children: "agora_rtc_create_connection"
              }), ", ", _jsx(_components.code, {
                children: "agora_rtc_destroy_connection"
              }), ", and ", _jsx(_components.code, {
                children: "agora_rtc_get_connection_info"
              }), " APIs, enabling more flexible RTC connection lifecycle management. See ", _jsx(_components.a, {
                href: "../build/manage-connections-and-quality/connection-management.mdx",
                children: "Manage connections"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Built-in license validation"
              }), ": Adds automatic license validation during channel join and the ", _jsx(_components.code, {
                children: "on_license_validation_failure"
              }), " callback for explicit failure reporting. See ", _jsx(_components.a, {
                href: "../build/authenticate-and-secure-channels/license.mdx",
                children: "Implement licensing"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Reliable messaging and richer control paths"
              }), ": Adds RDT-based reliable messaging, including ", _jsx(_components.code, {
                children: "agora_rtc_send_rdt_msg"
              }), ", ", _jsx(_components.code, {
                children: "agora_rtc_get_rdt_status_info"
              }), ", ", _jsx(_components.code, {
                children: "on_rdt_state"
              }), ", and ", _jsx(_components.code, {
                children: "on_rdt_msg"
              }), ", making it easier to deliver control and device messages reliably. See ", _jsx(_components.a, {
                href: "../build/send-messages/rdt-messaging.mdx",
                children: "Send messages through the RDT channel"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "String UID support"
              }), ": Adds User Account-based APIs, including ", _jsx(_components.code, {
                children: "agora_rtc_join_channel_with_user_account"
              }), ", ", _jsx(_components.code, {
                children: "agora_rtc_get_user_info_by_user_account"
              }), ", and ", _jsx(_components.code, {
                children: "agora_rtc_get_user_info_by_uid"
              }), ", to support String UID-based identity systems. See ", _jsx(_components.a, {
                href: "../build/authenticate-and-secure-channels/string-uid.mdx",
                children: "Identify users with String UID"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Expanded media and network capabilities"
              }), ": Adds video rotation reporting, media encryption through ", _jsx(_components.code, {
                children: "crypto_opt"
              }), ", configurable audio packet duration through ", _jsx(_components.code, {
                children: "pcm_duration"
              }), ", 8 kHz AAC-LC support, downlink AEC, RDT encryption, the ", _jsx(_components.code, {
                children: "enable_rdt"
              }), " option, and IPv6 support. See ", _jsx(_components.a, {
                href: "../build/configure-media/audio-codec.mdx",
                children: "Configure the audio codec"
              }), " for the audio codec changes."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "More resilient Signaling transport"
              }), ": Adds AUT-based transport to improve Signaling reliability in weak-network environments."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "improvements",
          children: "Improvements"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Improved connection resilience"
              }), ": Adds the ", _jsx(_components.code, {
                children: "on_reconnecting"
              }), " callback and refines the behavior of connection-related callbacks, making it easier to detect and handle temporary network interruptions."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "More flexible video frame-rate configuration"
              }), ": Changes ", _jsx(_components.code, {
                children: "video_frame_info_t.frame_rate"
              }), " from an enum to an integer. Applications can now configure frame rates from 1 to 60 fps."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Improved audio processing"
              }), ": Improves audio codec decoupling, jitter buffering, audio mixing, packet-loss handling, and downlink audio processing for real-time conversational scenarios."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Improved Signaling stability and usability"
              }), ": Improves login performance, keepalive behavior, timeout handling, reconnection behavior, and error reporting. The maximum Signaling message payload size is now 31 KB."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Improved error handling"
              }), ": Refines error-code organization and adds the ", _jsx(_components.code, {
                children: "RTM_MSG_STATE_TIMEOUT"
              }), " message state."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "bug-fixes",
          children: "Bug fixes"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Fixed an issue where video RTP timestamps occasionally failed."
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "v1.8.0",
        id: "v180",
        headingLevel: 2,
        value: "v180",
        children: [_jsx(_components.p, {
          children: "Released on May 1, 2023."
        }), _jsx(_components.h4, {
          id: "new-features-1",
          children: "New features"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: `Two-way audio and video communication between IoT SDK instances as well as between
IoT SDK and RTC SDK for Android, iOS, macOS, Windows, and web.`
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Providing a target bitrate per bandwidth estimation (BWE) algorithms."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Requesting key frames from remote users."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Muting and unmuting local and remote media streams."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Monitoring the transmission state of remote media streams."
            }), `
`]
          }), `
`]
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
