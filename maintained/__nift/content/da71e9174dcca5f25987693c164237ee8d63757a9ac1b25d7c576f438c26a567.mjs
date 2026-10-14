import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why can't I adjust the background music through the system volume?"
};
export let _markdown = `

In mobile devices, users play background music in the background, and after joining the RTC channel, users can't change the volume of the background music by adjusting the system volume.

## Reason [#reason]

The volume types of mobile devices are categorized into call volume and media volume. Generally, call volume is used for audio and video calls, and media volume is used for playing background music. For more details, see [What is the difference between the in-call volume and the media volume?](/en/api-reference/faq/integration/system_volume).

After a user joins a channel, the type of volume controlled by the Agora SDK determines the type of volume controlled by the system volume control. When the SDK controls the call volume and the background music uses the media volume, the system volume can only control the call volume and cannot adjust the background music volume.

## Solution [#solution]

You can try one of the following options to overcome this issue.

### Option 1 [#option-1]

Playing background music with \`startAudioMixing\` lets the SDK control both background music and call sound. Regardless of whether the SDK uses call volume or media volume, the user can adjust the volume of the background music and call sound at the same time through the system volume.

### Option 2 [#option-2]

Set the \`scenario\` parameter to \`GAME_STREAMING/AgoraAudioScenarioGameStreaming\` via the \`setAudioScenario\` method. That is, set the volume type used by the SDK to the media volume. After a successful setup, user can adjust the volume of the background music and call sound through system volume at the same time.

### Option 3 [#option-3]

If the solutions above don't meet your needs, you can utilize the Android or iOS API to intercept volume button events and adjust the volume. Refer to the following documentation:

* **Android**: [AudioManager](https://developer.android.com/reference/android/media/AudioManager.html)
* **iOS**: [MPVolumeView](https://developer.apple.com/documentation/mediaplayer/mpvolumeview)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In mobile devices, users play background music in the background, and after joining the RTC channel, users can't change the volume of the background music by adjusting the system volume."
  }, {
    heading: "reason",
    content: "The volume types of mobile devices are categorized into call volume and media volume. Generally, call volume is used for audio and video calls, and media volume is used for playing background music. For more details, see What is the difference between the in-call volume and the media volume?."
  }, {
    heading: "reason",
    content: "After a user joins a channel, the type of volume controlled by the Agora SDK determines the type of volume controlled by the system volume control. When the SDK controls the call volume and the background music uses the media volume, the system volume can only control the call volume and cannot adjust the background music volume."
  }, {
    heading: "solution",
    content: "You can try one of the following options to overcome this issue."
  }, {
    heading: "option-1",
    content: "Playing background music with `startAudioMixing` lets the SDK control both background music and call sound. Regardless of whether the SDK uses call volume or media volume, the user can adjust the volume of the background music and call sound at the same time through the system volume."
  }, {
    heading: "option-2",
    content: "Set the `scenario` parameter to `GAME_STREAMING/AgoraAudioScenarioGameStreaming` via the `setAudioScenario` method. That is, set the volume type used by the SDK to the media volume. After a successful setup, user can adjust the volume of the background music and call sound through system volume at the same time."
  }, {
    heading: "option-3",
    content: "If the solutions above don't meet your needs, you can utilize the Android or iOS API to intercept volume button events and adjust the volume. Refer to the following documentation:"
  }, {
    heading: "option-3",
    content: "**Android**: AudioManager"
  }, {
    heading: "option-3",
    content: "**iOS**: MPVolumeView"
  }],
  headings: [{
    id: "reason",
    content: "Reason"
  }, {
    id: "solution",
    content: "Solution"
  }, {
    id: "option-1",
    content: "Option 1"
  }, {
    id: "option-2",
    content: "Option 2"
  }, {
    id: "option-3",
    content: "Option 3"
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
  url: "#option-1",
  title: _jsx(_Fragment, {
    children: "Option 1"
  })
}, {
  depth: 3,
  url: "#option-2",
  title: _jsx(_Fragment, {
    children: "Option 2"
  })
}, {
  depth: 3,
  url: "#option-3",
  title: _jsx(_Fragment, {
    children: "Option 3"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "In mobile devices, users play background music in the background, and after joining the RTC channel, users can't change the volume of the background music by adjusting the system volume."
    }), `
`, _jsx(_components.h2, {
      id: "reason",
      children: "Reason"
    }), `
`, _jsxs(_components.p, {
      children: ["The volume types of mobile devices are categorized into call volume and media volume. Generally, call volume is used for audio and video calls, and media volume is used for playing background music. For more details, see ", _jsx(_components.a, {
        href: "/en/api-reference/faq/integration/system_volume",
        children: "What is the difference between the in-call volume and the media volume?"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "After a user joins a channel, the type of volume controlled by the Agora SDK determines the type of volume controlled by the system volume control. When the SDK controls the call volume and the background music uses the media volume, the system volume can only control the call volume and cannot adjust the background music volume."
    }), `
`, _jsx(_components.h2, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsx(_components.p, {
      children: "You can try one of the following options to overcome this issue."
    }), `
`, _jsx(_components.h3, {
      id: "option-1",
      children: "Option 1"
    }), `
`, _jsxs(_components.p, {
      children: ["Playing background music with ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " lets the SDK control both background music and call sound. Regardless of whether the SDK uses call volume or media volume, the user can adjust the volume of the background music and call sound at the same time through the system volume."]
    }), `
`, _jsx(_components.h3, {
      id: "option-2",
      children: "Option 2"
    }), `
`, _jsxs(_components.p, {
      children: ["Set the ", _jsx(_components.code, {
        children: "scenario"
      }), " parameter to ", _jsx(_components.code, {
        children: "GAME_STREAMING/AgoraAudioScenarioGameStreaming"
      }), " via the ", _jsx(_components.code, {
        children: "setAudioScenario"
      }), " method. That is, set the volume type used by the SDK to the media volume. After a successful setup, user can adjust the volume of the background music and call sound through system volume at the same time."]
    }), `
`, _jsx(_components.h3, {
      id: "option-3",
      children: "Option 3"
    }), `
`, _jsx(_components.p, {
      children: "If the solutions above don't meet your needs, you can utilize the Android or iOS API to intercept volume button events and adjust the volume. Refer to the following documentation:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Android"
        }), ": ", _jsx(_components.a, {
          href: "https://developer.android.com/reference/android/media/AudioManager.html",
          children: "AudioManager"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "iOS"
        }), ": ", _jsx(_components.a, {
          href: "https://developer.apple.com/documentation/mediaplayer/mpvolumeview",
          children: "MPVolumeView"
        })]
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
