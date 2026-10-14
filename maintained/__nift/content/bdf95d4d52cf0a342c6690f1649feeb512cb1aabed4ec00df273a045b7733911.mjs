import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I solve the problem of low volume?"
};
export let _markdown = `

## Step 1: Self-check [#step-1-self-check]

Check the following:

* Turn up the system volume of the receiver.
* Check whether the issue is caused by the device. You can change your playback device or try other VoIP services on the same device.
* Check whether the user opens another app during the call, which may change the audio settings or routing.
* Call the following methods to adjust the volume: \`enableAudioVolumeIndication\`, \`adjustRecordingSignalVolume\`, \`adjustPlaybackSignalVolume\`, and \`adjustAudioMixingVolume\`.
* Check the \`onAudioRouteChanged\` callback to see whether the audio route is set to the headset or speaker. If the audio route is set to the headset, call the \`setDefaultAudioRouteToSpeakerphone\` method and switch the audio route to the speaker.

## Step 2: Contact Agora Customer Support [#step-2-contact-agora-customer-support]

If the issue persists, contact Agora customer support and submit the issue with the following information:

* The name of the channel where the users encounter this issue.
* The uids of the users whose volume is too low.
* The time frame during which the volume is too low.

## Step 3: Monitor the Quality of Experience in Agora Analytics in Console [#step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console]

You can check the statistics of every call in Agora Analytics in [Agora Console](https://console.agora.io/). For more information, see [Call Search](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search).
`;
export let structuredData = {
  contents: [{
    heading: "step-1-self-check",
    content: "Check the following:"
  }, {
    heading: "step-1-self-check",
    content: "Turn up the system volume of the receiver."
  }, {
    heading: "step-1-self-check",
    content: "Check whether the issue is caused by the device. You can change your playback device or try other VoIP services on the same device."
  }, {
    heading: "step-1-self-check",
    content: "Check whether the user opens another app during the call, which may change the audio settings or routing."
  }, {
    heading: "step-1-self-check",
    content: "Call the following methods to adjust the volume: `enableAudioVolumeIndication`, `adjustRecordingSignalVolume`, `adjustPlaybackSignalVolume`, and `adjustAudioMixingVolume`."
  }, {
    heading: "step-1-self-check",
    content: "Check the `onAudioRouteChanged` callback to see whether the audio route is set to the headset or speaker. If the audio route is set to the headset, call the `setDefaultAudioRouteToSpeakerphone` method and switch the audio route to the speaker."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "If the issue persists, contact Agora customer support and submit the issue with the following information:"
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "The name of the channel where the users encounter this issue."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "The uids of the users whose volume is too low."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "The time frame during which the volume is too low."
  }, {
    heading: "step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console",
    content: "You can check the statistics of every call in Agora Analytics in Agora Console. For more information, see Call Search."
  }],
  headings: [{
    id: "step-1-self-check",
    content: "Step 1: Self-check"
  }, {
    id: "step-2-contact-agora-customer-support",
    content: "Step 2: Contact Agora Customer Support"
  }, {
    id: "step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console",
    content: "Step 3: Monitor the Quality of Experience in Agora Analytics in Console"
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
    children: "Step 2: Contact Agora Customer Support"
  })
}, {
  depth: 2,
  url: "#step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console",
  title: _jsx(_Fragment, {
    children: "Step 3: Monitor the Quality of Experience in Agora Analytics in Console"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "step-1-self-check",
      children: "Step 1: Self-check"
    }), `
`, _jsx(_components.p, {
      children: "Check the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Turn up the system volume of the receiver."
      }), `
`, _jsx(_components.li, {
        children: "Check whether the issue is caused by the device. You can change your playback device or try other VoIP services on the same device."
      }), `
`, _jsx(_components.li, {
        children: "Check whether the user opens another app during the call, which may change the audio settings or routing."
      }), `
`, _jsxs(_components.li, {
        children: ["Call the following methods to adjust the volume: ", _jsx(_components.code, {
          children: "enableAudioVolumeIndication"
        }), ", ", _jsx(_components.code, {
          children: "adjustRecordingSignalVolume"
        }), ", ", _jsx(_components.code, {
          children: "adjustPlaybackSignalVolume"
        }), ", and ", _jsx(_components.code, {
          children: "adjustAudioMixingVolume"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Check the ", _jsx(_components.code, {
          children: "onAudioRouteChanged"
        }), " callback to see whether the audio route is set to the headset or speaker. If the audio route is set to the headset, call the ", _jsx(_components.code, {
          children: "setDefaultAudioRouteToSpeakerphone"
        }), " method and switch the audio route to the speaker."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "step-2-contact-agora-customer-support",
      children: "Step 2: Contact Agora Customer Support"
    }), `
`, _jsx(_components.p, {
      children: "If the issue persists, contact Agora customer support and submit the issue with the following information:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The name of the channel where the users encounter this issue."
      }), `
`, _jsx(_components.li, {
        children: "The uids of the users whose volume is too low."
      }), `
`, _jsx(_components.li, {
        children: "The time frame during which the volume is too low."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console",
      children: "Step 3: Monitor the Quality of Experience in Agora Analytics in Console"
    }), `
`, _jsxs(_components.p, {
      children: ["You can check the statistics of every call in Agora Analytics in ", _jsx(_components.a, {
        href: "https://console.agora.io/",
        children: "Agora Console"
      }), ". For more information, see ", _jsx(_components.a, {
        href: "/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search",
        children: "Call Search"
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
