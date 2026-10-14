import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why can't I hear audio in stereo when playing a stereo file?"
};
export let _markdown = `

When calling \`startAudioMixing\` or \`playEffect\` to play a stereo file, the user might encounter the issue of not being able to hear audio in stereo.

## Reason [#reason]

If you cannot hear stereo audio, the possible reasons are as follows:

* The audio file being played is not a stereo file.
* Stereo encoding is not set in the Agora SDK.
* The audio playback device does not support stereo audio.

## Solution [#solution]

To troubleshoot and solve the issue, do the following:

### Step 1: Check the audio file [#step-1-check-the-audio-file]

Check whether the audio file is a stereo file by viewing the audio signal.

* If the audio file has only a mono audio signal, or if the audio file has dual audio signals but the audio signals of the left and right channels are the same, the audio file is not a stereo file. Change the file to a stereo file.
* If the audio file has dual audio signals and the audio signals of the left and right channels are different, the audio file is a stereo file. Proceed to step 2 to check the SDK settings.

### Step 2: Check the SDK settings [#step-2-check-the-sdk-settings]

The SDK can correctly encode and transmit stereo audio only when you set the stereo encoding. Check whether you call \`setAudioProfile\` and set the \`profile\` parameter to \`AUDIO_PROFILE_MUSIC_STANDARD_STEREO\` (3) or \`AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO\` (5).

* If a stereo profile is not set, set the \`profile\` parameter correctly.
* If the profile is set correctly, proceed to step 3 to check the audio playback device.

### Step 3: Check the audio playback device [#step-3-check-the-audio-playback-device]

Check whether the device supports stereo audio, and check whether the device is working properly.

* If the device does not support stereo audio, change it to a device that supports stereo audio.
* If the device supports stereo audio but does not work properly, contact the device manufacturer for repair or change it to a device that works properly.
* If the device supports stereo audio and works properly, [submit a ticket](https://agora-ticket.agora.io/) to contact Agora customer support for further exploration of the issue.

<CalloutContainer type="info">
  <CalloutDescription>
    If you use a Bluetooth device to play audio, note the Bluetooth profile. The two common profiles are as follows:

    * **Advanced Audio Distribution Profile (A2DP):** The unidirectional transmission of high-quality audio data, usually for stereo music playback. A2DP does not support capturing audio through the Bluetooth device, so you need to use other devices to capture audio.
    * **Hands-Free Profile (HFP):** The bidirectional transmission of audio data, usually for audio calls. HFP commonly uses Synchronous Connection Oriented link (SCO) to carry a mono audio channel, so a Bluetooth device cannot play stereo audio using HFP.
  </CalloutDescription>
</CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When calling `startAudioMixing` or `playEffect` to play a stereo file, the user might encounter the issue of not being able to hear audio in stereo."
  }, {
    heading: "reason",
    content: "If you cannot hear stereo audio, the possible reasons are as follows:"
  }, {
    heading: "reason",
    content: "The audio file being played is not a stereo file."
  }, {
    heading: "reason",
    content: "Stereo encoding is not set in the Agora SDK."
  }, {
    heading: "reason",
    content: "The audio playback device does not support stereo audio."
  }, {
    heading: "solution",
    content: "To troubleshoot and solve the issue, do the following:"
  }, {
    heading: "step-1-check-the-audio-file",
    content: "Check whether the audio file is a stereo file by viewing the audio signal."
  }, {
    heading: "step-1-check-the-audio-file",
    content: "If the audio file has only a mono audio signal, or if the audio file has dual audio signals but the audio signals of the left and right channels are the same, the audio file is not a stereo file. Change the file to a stereo file."
  }, {
    heading: "step-1-check-the-audio-file",
    content: "If the audio file has dual audio signals and the audio signals of the left and right channels are different, the audio file is a stereo file. Proceed to step 2 to check the SDK settings."
  }, {
    heading: "step-2-check-the-sdk-settings",
    content: "The SDK can correctly encode and transmit stereo audio only when you set the stereo encoding. Check whether you call `setAudioProfile` and set the `profile` parameter to `AUDIO_PROFILE_MUSIC_STANDARD_STEREO` (3) or `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO` (5)."
  }, {
    heading: "step-2-check-the-sdk-settings",
    content: "If a stereo profile is not set, set the `profile` parameter correctly."
  }, {
    heading: "step-2-check-the-sdk-settings",
    content: "If the profile is set correctly, proceed to step 3 to check the audio playback device."
  }, {
    heading: "step-3-check-the-audio-playback-device",
    content: "Check whether the device supports stereo audio, and check whether the device is working properly."
  }, {
    heading: "step-3-check-the-audio-playback-device",
    content: "If the device does not support stereo audio, change it to a device that supports stereo audio."
  }, {
    heading: "step-3-check-the-audio-playback-device",
    content: "If the device supports stereo audio but does not work properly, contact the device manufacturer for repair or change it to a device that works properly."
  }, {
    heading: "step-3-check-the-audio-playback-device",
    content: "If the device supports stereo audio and works properly, submit a ticket to contact Agora customer support for further exploration of the issue."
  }, {
    heading: "step-3-check-the-audio-playback-device",
    content: "If you use a Bluetooth device to play audio, note the Bluetooth profile. The two common profiles are as follows:"
  }, {
    heading: "step-3-check-the-audio-playback-device",
    content: "**Advanced Audio Distribution Profile (A2DP):** The unidirectional transmission of high-quality audio data, usually for stereo music playback. A2DP does not support capturing audio through the Bluetooth device, so you need to use other devices to capture audio."
  }, {
    heading: "step-3-check-the-audio-playback-device",
    content: "**Hands-Free Profile (HFP):** The bidirectional transmission of audio data, usually for audio calls. HFP commonly uses Synchronous Connection Oriented link (SCO) to carry a mono audio channel, so a Bluetooth device cannot play stereo audio using HFP."
  }],
  headings: [{
    id: "reason",
    content: "Reason"
  }, {
    id: "solution",
    content: "Solution"
  }, {
    id: "step-1-check-the-audio-file",
    content: "Step 1: Check the audio file"
  }, {
    id: "step-2-check-the-sdk-settings",
    content: "Step 2: Check the SDK settings"
  }, {
    id: "step-3-check-the-audio-playback-device",
    content: "Step 3: Check the audio playback device"
  }]
};
export let toc = [{
  depth: 2,
  url: "#reason",
  title: _jsx(_Fragment, {
    children: "Reason"
  })
}, {
  depth: 2,
  url: "#solution",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}, {
  depth: 3,
  url: "#step-1-check-the-audio-file",
  title: _jsx(_Fragment, {
    children: "Step 1: Check the audio file"
  })
}, {
  depth: 3,
  url: "#step-2-check-the-sdk-settings",
  title: _jsx(_Fragment, {
    children: "Step 2: Check the SDK settings"
  })
}, {
  depth: 3,
  url: "#step-3-check-the-audio-playback-device",
  title: _jsx(_Fragment, {
    children: "Step 3: Check the audio playback device"
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
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["When calling ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " or ", _jsx(_components.code, {
        children: "playEffect"
      }), " to play a stereo file, the user might encounter the issue of not being able to hear audio in stereo."]
    }), `
`, _jsx(_components.h2, {
      id: "reason",
      children: "Reason"
    }), `
`, _jsx(_components.p, {
      children: "If you cannot hear stereo audio, the possible reasons are as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The audio file being played is not a stereo file."
      }), `
`, _jsx(_components.li, {
        children: "Stereo encoding is not set in the Agora SDK."
      }), `
`, _jsx(_components.li, {
        children: "The audio playback device does not support stereo audio."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsx(_components.p, {
      children: "To troubleshoot and solve the issue, do the following:"
    }), `
`, _jsx(_components.h3, {
      id: "step-1-check-the-audio-file",
      children: "Step 1: Check the audio file"
    }), `
`, _jsx(_components.p, {
      children: "Check whether the audio file is a stereo file by viewing the audio signal."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If the audio file has only a mono audio signal, or if the audio file has dual audio signals but the audio signals of the left and right channels are the same, the audio file is not a stereo file. Change the file to a stereo file."
      }), `
`, _jsx(_components.li, {
        children: "If the audio file has dual audio signals and the audio signals of the left and right channels are different, the audio file is a stereo file. Proceed to step 2 to check the SDK settings."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "step-2-check-the-sdk-settings",
      children: "Step 2: Check the SDK settings"
    }), `
`, _jsxs(_components.p, {
      children: ["The SDK can correctly encode and transmit stereo audio only when you set the stereo encoding. Check whether you call ", _jsx(_components.code, {
        children: "setAudioProfile"
      }), " and set the ", _jsx(_components.code, {
        children: "profile"
      }), " parameter to ", _jsx(_components.code, {
        children: "AUDIO_PROFILE_MUSIC_STANDARD_STEREO"
      }), " (3) or ", _jsx(_components.code, {
        children: "AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO"
      }), " (5)."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If a stereo profile is not set, set the ", _jsx(_components.code, {
          children: "profile"
        }), " parameter correctly."]
      }), `
`, _jsx(_components.li, {
        children: "If the profile is set correctly, proceed to step 3 to check the audio playback device."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "step-3-check-the-audio-playback-device",
      children: "Step 3: Check the audio playback device"
    }), `
`, _jsx(_components.p, {
      children: "Check whether the device supports stereo audio, and check whether the device is working properly."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If the device does not support stereo audio, change it to a device that supports stereo audio."
      }), `
`, _jsx(_components.li, {
        children: "If the device supports stereo audio but does not work properly, contact the device manufacturer for repair or change it to a device that works properly."
      }), `
`, _jsxs(_components.li, {
        children: ["If the device supports stereo audio and works properly, ", _jsx(_components.a, {
          href: "https://agora-ticket.agora.io/",
          children: "submit a ticket"
        }), " to contact Agora customer support for further exploration of the issue."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsxs(CalloutDescription, {
        children: [_jsx(_components.p, {
          children: "If you use a Bluetooth device to play audio, note the Bluetooth profile. The two common profiles are as follows:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Advanced Audio Distribution Profile (A2DP):"
            }), " The unidirectional transmission of high-quality audio data, usually for stereo music playback. A2DP does not support capturing audio through the Bluetooth device, so you need to use other devices to capture audio."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Hands-Free Profile (HFP):"
            }), " The bidirectional transmission of audio data, usually for audio calls. HFP commonly uses Synchronous Connection Oriented link (SCO) to carry a mono audio channel, so a Bluetooth device cannot play stereo audio using HFP."]
          }), `
`]
        })]
      })
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
