import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "What are the differences between setEnabled and setMuted?"
};
export let _markdown = `

Both Web SDK 4.x and 3.x provide APIs for controlling the collection and sending of local audio and video. The differences between these APIs are detailed in the table below.
You cannot call \`setEnabled\` and \`setMuted\` at the same time.

| API                                                                                                         | Capture                                                                                                                          | Send                                                                                                                                                                                                 | Recovery time                                                     |
| ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| (3.x) Mute-related methods: \`Stream.muteAudio\` \`Stream.unmuteAudio\` \`Stream.muteVideo\` \`Stream.unmuteVideo\` | After muting, the SDK does not stop audio and video capture. The camera's light does not turn off.                               | The SDK sends a black frame after muting video and a mute packet after muting audio. Muted users are counted as streaming users, and up to 17 users can stream at the same time in a single channel. | Unmuting after a mute is relatively faster.                       |
| (4.x)\`LocalTrack.setEnabled\`                                                                                | After calling \`setEnabled\` to disable the track, the SDK stops audio and video capture. The camera's light turns off.            | The SDK does not send any data after calling \`setEnabled\` to disable the track. Users whose tracks are disabled are not counted as streaming users.                                                  | Enabling audio and video after disabling it is relatively slower. |
| (4.x)\`LocalTrack.setMuted\`                                                                                  | After calling \`setMuted\` to mute the track, the SDK does not stop audio and video capture. The camera's light does not turn off. | The SDK does not send any data after calling \`setMuted\` to mute the track. Muted users are not counted as streaming users.                                                                           | Unmuting after a mute is relatively faster.                       |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Both Web SDK 4.x and 3.x provide APIs for controlling the collection and sending of local audio and video. The differences between these APIs are detailed in the table below.\nYou cannot call `setEnabled` and `setMuted` at the same time."
  }, {
    heading: undefined,
    content: "API"
  }, {
    heading: undefined,
    content: "Capture"
  }, {
    heading: undefined,
    content: "Send"
  }, {
    heading: undefined,
    content: "Recovery time"
  }, {
    heading: undefined,
    content: "(3.x) Mute-related methods: `Stream.muteAudio` `Stream.unmuteAudio` `Stream.muteVideo` `Stream.unmuteVideo`"
  }, {
    heading: undefined,
    content: "After muting, the SDK does not stop audio and video capture. The camera's light does not turn off."
  }, {
    heading: undefined,
    content: "The SDK sends a black frame after muting video and a mute packet after muting audio. Muted users are counted as streaming users, and up to 17 users can stream at the same time in a single channel."
  }, {
    heading: undefined,
    content: "Unmuting after a mute is relatively faster."
  }, {
    heading: undefined,
    content: "(4.x)`LocalTrack.setEnabled`"
  }, {
    heading: undefined,
    content: "After calling `setEnabled` to disable the track, the SDK stops audio and video capture. The camera's light turns off."
  }, {
    heading: undefined,
    content: "The SDK does not send any data after calling `setEnabled` to disable the track. Users whose tracks are disabled are not counted as streaming users."
  }, {
    heading: undefined,
    content: "Enabling audio and video after disabling it is relatively slower."
  }, {
    heading: undefined,
    content: "(4.x)`LocalTrack.setMuted`"
  }, {
    heading: undefined,
    content: "After calling `setMuted` to mute the track, the SDK does not stop audio and video capture. The camera's light does not turn off."
  }, {
    heading: undefined,
    content: "The SDK does not send any data after calling `setMuted` to mute the track. Muted users are not counted as streaming users."
  }, {
    heading: undefined,
    content: "Unmuting after a mute is relatively faster."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: [`Both Web SDK 4.x and 3.x provide APIs for controlling the collection and sending of local audio and video. The differences between these APIs are detailed in the table below.
You cannot call `, _jsx(_components.code, {
        children: "setEnabled"
      }), " and ", _jsx(_components.code, {
        children: "setMuted"
      }), " at the same time."]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "Capture"
          }), _jsx(_components.th, {
            children: "Send"
          }), _jsx(_components.th, {
            children: "Recovery time"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["(3.x) Mute-related methods: ", _jsx(_components.code, {
              children: "Stream.muteAudio"
            }), " ", _jsx(_components.code, {
              children: "Stream.unmuteAudio"
            }), " ", _jsx(_components.code, {
              children: "Stream.muteVideo"
            }), " ", _jsx(_components.code, {
              children: "Stream.unmuteVideo"
            })]
          }), _jsx(_components.td, {
            children: "After muting, the SDK does not stop audio and video capture. The camera's light does not turn off."
          }), _jsx(_components.td, {
            children: "The SDK sends a black frame after muting video and a mute packet after muting audio. Muted users are counted as streaming users, and up to 17 users can stream at the same time in a single channel."
          }), _jsx(_components.td, {
            children: "Unmuting after a mute is relatively faster."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["(4.x)", _jsx(_components.code, {
              children: "LocalTrack.setEnabled"
            })]
          }), _jsxs(_components.td, {
            children: ["After calling ", _jsx(_components.code, {
              children: "setEnabled"
            }), " to disable the track, the SDK stops audio and video capture. The camera's light turns off."]
          }), _jsxs(_components.td, {
            children: ["The SDK does not send any data after calling ", _jsx(_components.code, {
              children: "setEnabled"
            }), " to disable the track. Users whose tracks are disabled are not counted as streaming users."]
          }), _jsx(_components.td, {
            children: "Enabling audio and video after disabling it is relatively slower."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["(4.x)", _jsx(_components.code, {
              children: "LocalTrack.setMuted"
            })]
          }), _jsxs(_components.td, {
            children: ["After calling ", _jsx(_components.code, {
              children: "setMuted"
            }), " to mute the track, the SDK does not stop audio and video capture. The camera's light does not turn off."]
          }), _jsxs(_components.td, {
            children: ["The SDK does not send any data after calling ", _jsx(_components.code, {
              children: "setMuted"
            }), " to mute the track. Muted users are not counted as streaming users."]
          }), _jsx(_components.td, {
            children: "Unmuting after a mute is relatively faster."
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
