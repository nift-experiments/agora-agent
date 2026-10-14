import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I troubleshoot the issue of no sound?"
};
export let _markdown = `

During real-time engagement, users may experience a total loss of sound in the following scenarios:

* The local user cannot hear remote users.
* A remote user cannot hear the local user.
* The local and remote users cannot hear each other.

## Solution [#solution]

### Step 1: Determine the issue [#step-1-determine-the-issue]

To determine the issue, Agora recommends the local user and remote users do the following:

1. Open [Agora Video Call](https://videocall.agora.io/), read the **Agora Terms of Use and Privacy Policy** carefully, and click **Accept**.

2. Enter the same channel name and password, enter a nickname, ensure that the microphone is enabled, and click **Join**.

3. Allow Agora Video Call to access the microphone, and start a conversation to check whether they can hear each other.

   * If they can hear each other, proceed to step 5 to check the app logic.
   * If they cannot hear each other, proceed to step 2 to check the audio input device.

<CalloutContainer type="info">
  <CalloutDescription>
    On iOS, if a user equips a device with a non-Apple magnetic protection cover and cannot hear others, the issue may be caused by the protection cover. Remove the protection cover, leave the channel, and rejoin the channel to try whether the user can hear others.
  </CalloutDescription>
</CalloutContainer>

### Step 2: Check the audio input device [#step-2-check-the-audio-input-device]

1. Ensure that the audio input device is properly connected, and that the affected user has selected a suitable device when there are multiple device options.

2. In system settings, open the **audio input device** (or **recording device**) window. Ensure that the system uses a correct device and that the device is not muted.

3. Speak into the audio input device, and check whether the volume bar of the audio input device changes according to the volume.

   * If the volume bar changes, the audio input device is working. Proceed to step 3 to check the audio output device.
   * If the volume bar does not change, the audio input device is not working. Try restarting the device. If this does not help, try using another audio input device.

### Step 3: Check the audio output device [#step-3-check-the-audio-output-device]

1. Ensure that the audio output device is properly connected, and that the affected user has selected a suitable device when there are multiple device options.
2. In system settings, open the **audio output device** (or **playback device**) window. Ensure that the system uses a correct device and that the device is not muted.
3. Play an audio file, and check whether the user can hear sound. If not, the audio output device is not working. Try restarting the device. If this does not help, try using another audio output device.
4. If you use a sound card and cannot solve the issue after trying another audio output device, proceed to step 4 to check the sound card.

### Step 4: Check the sound card [#step-4-check-the-sound-card]

1. Ensure the sound card is properly connected. If the user plays an audio file, ensure that the user enables the audio mixing function of the sound card.
2. Reinstall the sound card driver, and check whether the user can hear sound. If not, the sound card is not working. Try replacing the sound card.

### Step 5: Check the app logic [#step-5-check-the-app-logic]

1. Ensure that all users can access the correct audio devices.
2. Check whether each user joins the channel successfully through the \`onJoinChannelSuccess\`/\`didJoinChannel\` callback.
3. Check whether the audio is muted by the \`adjustRecordingSignalVolume(0)\`, \`adjustPlaybackSignalVolume(0)\`, or \`mute\`-related methods.
4. If a user uses headphones, check whether you call \`setEnableSpeakerphone(false)\` to route the audio to the headphones.

### Step 6: Contact Agora customer support [#step-6-contact-agora-customer-support]

If the issue persists, contact Agora customer support and [submit a ticket](https://agora-ticket.agora.io/) with the following information:

* The name of the channel where the users cannot hear sound.
* The user IDs of the users who cannot hear sound in the channel.
* The time frame during which the users cannot hear sound.

You can also use Agora Analytics in [Agora Console](https://console.agora.io/) to gain a broad view of call issues for every user. See [Agora Analytics Overview](/en/realtime-media/agora-analytics/product-overview) for details.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "During real-time engagement, users may experience a total loss of sound in the following scenarios:"
  }, {
    heading: undefined,
    content: "The local user cannot hear remote users."
  }, {
    heading: undefined,
    content: "A remote user cannot hear the local user."
  }, {
    heading: undefined,
    content: "The local and remote users cannot hear each other."
  }, {
    heading: "step-1-determine-the-issue",
    content: "To determine the issue, Agora recommends the local user and remote users do the following:"
  }, {
    heading: "step-1-determine-the-issue",
    content: "Open Agora Video Call, read the **Agora Terms of Use and Privacy Policy** carefully, and click **Accept**."
  }, {
    heading: "step-1-determine-the-issue",
    content: "Enter the same channel name and password, enter a nickname, ensure that the microphone is enabled, and click **Join**."
  }, {
    heading: "step-1-determine-the-issue",
    content: "Allow Agora Video Call to access the microphone, and start a conversation to check whether they can hear each other."
  }, {
    heading: "step-1-determine-the-issue",
    content: "If they can hear each other, proceed to step 5 to check the app logic."
  }, {
    heading: "step-1-determine-the-issue",
    content: "If they cannot hear each other, proceed to step 2 to check the audio input device."
  }, {
    heading: "step-1-determine-the-issue",
    content: "On iOS, if a user equips a device with a non-Apple magnetic protection cover and cannot hear others, the issue may be caused by the protection cover. Remove the protection cover, leave the channel, and rejoin the channel to try whether the user can hear others."
  }, {
    heading: "step-2-check-the-audio-input-device",
    content: "Ensure that the audio input device is properly connected, and that the affected user has selected a suitable device when there are multiple device options."
  }, {
    heading: "step-2-check-the-audio-input-device",
    content: "In system settings, open the **audio input device** (or **recording device**) window. Ensure that the system uses a correct device and that the device is not muted."
  }, {
    heading: "step-2-check-the-audio-input-device",
    content: "Speak into the audio input device, and check whether the volume bar of the audio input device changes according to the volume."
  }, {
    heading: "step-2-check-the-audio-input-device",
    content: "If the volume bar changes, the audio input device is working. Proceed to step 3 to check the audio output device."
  }, {
    heading: "step-2-check-the-audio-input-device",
    content: "If the volume bar does not change, the audio input device is not working. Try restarting the device. If this does not help, try using another audio input device."
  }, {
    heading: "step-3-check-the-audio-output-device",
    content: "Ensure that the audio output device is properly connected, and that the affected user has selected a suitable device when there are multiple device options."
  }, {
    heading: "step-3-check-the-audio-output-device",
    content: "In system settings, open the **audio output device** (or **playback device**) window. Ensure that the system uses a correct device and that the device is not muted."
  }, {
    heading: "step-3-check-the-audio-output-device",
    content: "Play an audio file, and check whether the user can hear sound. If not, the audio output device is not working. Try restarting the device. If this does not help, try using another audio output device."
  }, {
    heading: "step-3-check-the-audio-output-device",
    content: "If you use a sound card and cannot solve the issue after trying another audio output device, proceed to step 4 to check the sound card."
  }, {
    heading: "step-4-check-the-sound-card",
    content: "Ensure the sound card is properly connected. If the user plays an audio file, ensure that the user enables the audio mixing function of the sound card."
  }, {
    heading: "step-4-check-the-sound-card",
    content: "Reinstall the sound card driver, and check whether the user can hear sound. If not, the sound card is not working. Try replacing the sound card."
  }, {
    heading: "step-5-check-the-app-logic",
    content: "Ensure that all users can access the correct audio devices."
  }, {
    heading: "step-5-check-the-app-logic",
    content: "Check whether each user joins the channel successfully through the `onJoinChannelSuccess`/`didJoinChannel` callback."
  }, {
    heading: "step-5-check-the-app-logic",
    content: "Check whether the audio is muted by the `adjustRecordingSignalVolume(0)`, `adjustPlaybackSignalVolume(0)`, or `mute`-related methods."
  }, {
    heading: "step-5-check-the-app-logic",
    content: "If a user uses headphones, check whether you call `setEnableSpeakerphone(false)` to route the audio to the headphones."
  }, {
    heading: "step-6-contact-agora-customer-support",
    content: "If the issue persists, contact Agora customer support and submit a ticket with the following information:"
  }, {
    heading: "step-6-contact-agora-customer-support",
    content: "The name of the channel where the users cannot hear sound."
  }, {
    heading: "step-6-contact-agora-customer-support",
    content: "The user IDs of the users who cannot hear sound in the channel."
  }, {
    heading: "step-6-contact-agora-customer-support",
    content: "The time frame during which the users cannot hear sound."
  }, {
    heading: "step-6-contact-agora-customer-support",
    content: "You can also use Agora Analytics in Agora Console to gain a broad view of call issues for every user. See Agora Analytics Overview for details."
  }],
  headings: [{
    id: "solution",
    content: "Solution"
  }, {
    id: "step-1-determine-the-issue",
    content: "Step 1: Determine the issue"
  }, {
    id: "step-2-check-the-audio-input-device",
    content: "Step 2: Check the audio input device"
  }, {
    id: "step-3-check-the-audio-output-device",
    content: "Step 3: Check the audio output device"
  }, {
    id: "step-4-check-the-sound-card",
    content: "Step 4: Check the sound card"
  }, {
    id: "step-5-check-the-app-logic",
    content: "Step 5: Check the app logic"
  }, {
    id: "step-6-contact-agora-customer-support",
    content: "Step 6: Contact Agora customer support"
  }]
};
export let toc = [{
  depth: 2,
  url: "#solution",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}, {
  depth: 3,
  url: "#step-1-determine-the-issue",
  title: _jsx(_Fragment, {
    children: "Step 1: Determine the issue"
  })
}, {
  depth: 3,
  url: "#step-2-check-the-audio-input-device",
  title: _jsx(_Fragment, {
    children: "Step 2: Check the audio input device"
  })
}, {
  depth: 3,
  url: "#step-3-check-the-audio-output-device",
  title: _jsx(_Fragment, {
    children: "Step 3: Check the audio output device"
  })
}, {
  depth: 3,
  url: "#step-4-check-the-sound-card",
  title: _jsx(_Fragment, {
    children: "Step 4: Check the sound card"
  })
}, {
  depth: 3,
  url: "#step-5-check-the-app-logic",
  title: _jsx(_Fragment, {
    children: "Step 5: Check the app logic"
  })
}, {
  depth: 3,
  url: "#step-6-contact-agora-customer-support",
  title: _jsx(_Fragment, {
    children: "Step 6: Contact Agora customer support"
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
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "During real-time engagement, users may experience a total loss of sound in the following scenarios:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The local user cannot hear remote users."
      }), `
`, _jsx(_components.li, {
        children: "A remote user cannot hear the local user."
      }), `
`, _jsx(_components.li, {
        children: "The local and remote users cannot hear each other."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsx(_components.h3, {
      id: "step-1-determine-the-issue",
      children: "Step 1: Determine the issue"
    }), `
`, _jsx(_components.p, {
      children: "To determine the issue, Agora recommends the local user and remote users do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Open ", _jsx(_components.a, {
            href: "https://videocall.agora.io/",
            children: "Agora Video Call"
          }), ", read the ", _jsx(_components.strong, {
            children: "Agora Terms of Use and Privacy Policy"
          }), " carefully, and click ", _jsx(_components.strong, {
            children: "Accept"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Enter the same channel name and password, enter a nickname, ensure that the microphone is enabled, and click ", _jsx(_components.strong, {
            children: "Join"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Allow Agora Video Call to access the microphone, and start a conversation to check whether they can hear each other."
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "If they can hear each other, proceed to step 5 to check the app logic."
          }), `
`, _jsx(_components.li, {
            children: "If they cannot hear each other, proceed to step 2 to check the audio input device."
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "On iOS, if a user equips a device with a non-Apple magnetic protection cover and cannot hear others, the issue may be caused by the protection cover. Remove the protection cover, leave the channel, and rejoin the channel to try whether the user can hear others."
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "step-2-check-the-audio-input-device",
      children: "Step 2: Check the audio input device"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Ensure that the audio input device is properly connected, and that the affected user has selected a suitable device when there are multiple device options."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In system settings, open the ", _jsx(_components.strong, {
            children: "audio input device"
          }), " (or ", _jsx(_components.strong, {
            children: "recording device"
          }), ") window. Ensure that the system uses a correct device and that the device is not muted."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Speak into the audio input device, and check whether the volume bar of the audio input device changes according to the volume."
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "If the volume bar changes, the audio input device is working. Proceed to step 3 to check the audio output device."
          }), `
`, _jsx(_components.li, {
            children: "If the volume bar does not change, the audio input device is not working. Try restarting the device. If this does not help, try using another audio input device."
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "step-3-check-the-audio-output-device",
      children: "Step 3: Check the audio output device"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Ensure that the audio output device is properly connected, and that the affected user has selected a suitable device when there are multiple device options."
      }), `
`, _jsxs(_components.li, {
        children: ["In system settings, open the ", _jsx(_components.strong, {
          children: "audio output device"
        }), " (or ", _jsx(_components.strong, {
          children: "playback device"
        }), ") window. Ensure that the system uses a correct device and that the device is not muted."]
      }), `
`, _jsx(_components.li, {
        children: "Play an audio file, and check whether the user can hear sound. If not, the audio output device is not working. Try restarting the device. If this does not help, try using another audio output device."
      }), `
`, _jsx(_components.li, {
        children: "If you use a sound card and cannot solve the issue after trying another audio output device, proceed to step 4 to check the sound card."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "step-4-check-the-sound-card",
      children: "Step 4: Check the sound card"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Ensure the sound card is properly connected. If the user plays an audio file, ensure that the user enables the audio mixing function of the sound card."
      }), `
`, _jsx(_components.li, {
        children: "Reinstall the sound card driver, and check whether the user can hear sound. If not, the sound card is not working. Try replacing the sound card."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "step-5-check-the-app-logic",
      children: "Step 5: Check the app logic"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Ensure that all users can access the correct audio devices."
      }), `
`, _jsxs(_components.li, {
        children: ["Check whether each user joins the channel successfully through the ", _jsx(_components.code, {
          children: "onJoinChannelSuccess"
        }), "/", _jsx(_components.code, {
          children: "didJoinChannel"
        }), " callback."]
      }), `
`, _jsxs(_components.li, {
        children: ["Check whether the audio is muted by the ", _jsx(_components.code, {
          children: "adjustRecordingSignalVolume(0)"
        }), ", ", _jsx(_components.code, {
          children: "adjustPlaybackSignalVolume(0)"
        }), ", or ", _jsx(_components.code, {
          children: "mute"
        }), "-related methods."]
      }), `
`, _jsxs(_components.li, {
        children: ["If a user uses headphones, check whether you call ", _jsx(_components.code, {
          children: "setEnableSpeakerphone(false)"
        }), " to route the audio to the headphones."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "step-6-contact-agora-customer-support",
      children: "Step 6: Contact Agora customer support"
    }), `
`, _jsxs(_components.p, {
      children: ["If the issue persists, contact Agora customer support and ", _jsx(_components.a, {
        href: "https://agora-ticket.agora.io/",
        children: "submit a ticket"
      }), " with the following information:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The name of the channel where the users cannot hear sound."
      }), `
`, _jsx(_components.li, {
        children: "The user IDs of the users who cannot hear sound in the channel."
      }), `
`, _jsx(_components.li, {
        children: "The time frame during which the users cannot hear sound."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["You can also use Agora Analytics in ", _jsx(_components.a, {
        href: "https://console.agora.io/",
        children: "Agora Console"
      }), " to gain a broad view of call issues for every user. See ", _jsx(_components.a, {
        href: "/en/realtime-media/agora-analytics/product-overview",
        children: "Agora Analytics Overview"
      }), " for details."]
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
