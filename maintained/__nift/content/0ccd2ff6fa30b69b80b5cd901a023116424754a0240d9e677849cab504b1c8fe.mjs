import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I solve channel-related issues?"
};
export let _markdown = `

### In poor network conditions, does the SDK force users to leave a channel? [#in-poor-network-conditions-does-the-sdk-force-users-to-leave-a-channel]

No, users will not automatically leave a channel unless they do so by themselves, for example, when the application calls \`leaveChannel\`.

### Does each channel or room need an administrator in a call? [#does-each-channel-or-room-need-an-administrator-in-a-call]

No. You can create the administrator role with your own code. For example, you can manage a call by letting the signaling server send commands to the SDK to call an SDK API.

### Does the client need to maintain the channel? [#does-the-client-need-to-maintain-the-channel]

No, a channel is created and deleted automatically. When all users leave the channel, the channel is deleted automatically.

### How do I check who is speaking in the channel? [#how-do-i-check-who-is-speaking-in-the-channel]

The following callbacks indicate who is speaking and the speakers' volumes.

* For Android and Windows: \`onAudioVolumeIndication\`
* iOS/macOS: \`reportAudioVolumeIndicationOfSpeakers\`

By default, this function is disabled. You can use the \`enableAudioVolumeIndication\` method to enable them.
`;
export let structuredData = {
  contents: [{
    heading: "in-poor-network-conditions-does-the-sdk-force-users-to-leave-a-channel",
    content: "No, users will not automatically leave a channel unless they do so by themselves, for example, when the application calls `leaveChannel`."
  }, {
    heading: "does-each-channel-or-room-need-an-administrator-in-a-call",
    content: "No. You can create the administrator role with your own code. For example, you can manage a call by letting the signaling server send commands to the SDK to call an SDK API."
  }, {
    heading: "does-the-client-need-to-maintain-the-channel",
    content: "No, a channel is created and deleted automatically. When all users leave the channel, the channel is deleted automatically."
  }, {
    heading: "how-do-i-check-who-is-speaking-in-the-channel",
    content: "The following callbacks indicate who is speaking and the speakers' volumes."
  }, {
    heading: "how-do-i-check-who-is-speaking-in-the-channel",
    content: "For Android and Windows: `onAudioVolumeIndication`"
  }, {
    heading: "how-do-i-check-who-is-speaking-in-the-channel",
    content: "iOS/macOS: `reportAudioVolumeIndicationOfSpeakers`"
  }, {
    heading: "how-do-i-check-who-is-speaking-in-the-channel",
    content: "By default, this function is disabled. You can use the `enableAudioVolumeIndication` method to enable them."
  }],
  headings: [{
    id: "in-poor-network-conditions-does-the-sdk-force-users-to-leave-a-channel",
    content: "In poor network conditions, does the SDK force users to leave a channel?"
  }, {
    id: "does-each-channel-or-room-need-an-administrator-in-a-call",
    content: "Does each channel or room need an administrator in a call?"
  }, {
    id: "does-the-client-need-to-maintain-the-channel",
    content: "Does the client need to maintain the channel?"
  }, {
    id: "how-do-i-check-who-is-speaking-in-the-channel",
    content: "How do I check who is speaking in the channel?"
  }]
};
export let toc = [{
  depth: 3,
  url: "#in-poor-network-conditions-does-the-sdk-force-users-to-leave-a-channel",
  title: _jsx(_Fragment, {
    children: "In poor network conditions, does the SDK force users to leave a channel?"
  })
}, {
  depth: 3,
  url: "#does-each-channel-or-room-need-an-administrator-in-a-call",
  title: _jsx(_Fragment, {
    children: "Does each channel or room need an administrator in a call?"
  })
}, {
  depth: 3,
  url: "#does-the-client-need-to-maintain-the-channel",
  title: _jsx(_Fragment, {
    children: "Does the client need to maintain the channel?"
  })
}, {
  depth: 3,
  url: "#how-do-i-check-who-is-speaking-in-the-channel",
  title: _jsx(_Fragment, {
    children: "How do I check who is speaking in the channel?"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h3, {
      id: "in-poor-network-conditions-does-the-sdk-force-users-to-leave-a-channel",
      children: "In poor network conditions, does the SDK force users to leave a channel?"
    }), `
`, _jsxs(_components.p, {
      children: ["No, users will not automatically leave a channel unless they do so by themselves, for example, when the application calls ", _jsx(_components.code, {
        children: "leaveChannel"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "does-each-channel-or-room-need-an-administrator-in-a-call",
      children: "Does each channel or room need an administrator in a call?"
    }), `
`, _jsx(_components.p, {
      children: "No. You can create the administrator role with your own code. For example, you can manage a call by letting the signaling server send commands to the SDK to call an SDK API."
    }), `
`, _jsx(_components.h3, {
      id: "does-the-client-need-to-maintain-the-channel",
      children: "Does the client need to maintain the channel?"
    }), `
`, _jsx(_components.p, {
      children: "No, a channel is created and deleted automatically. When all users leave the channel, the channel is deleted automatically."
    }), `
`, _jsx(_components.h3, {
      id: "how-do-i-check-who-is-speaking-in-the-channel",
      children: "How do I check who is speaking in the channel?"
    }), `
`, _jsx(_components.p, {
      children: "The following callbacks indicate who is speaking and the speakers' volumes."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["For Android and Windows: ", _jsx(_components.code, {
          children: "onAudioVolumeIndication"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["iOS/macOS: ", _jsx(_components.code, {
          children: "reportAudioVolumeIndicationOfSpeakers"
        })]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["By default, this function is disabled. You can use the ", _jsx(_components.code, {
        children: "enableAudioVolumeIndication"
      }), " method to enable them."]
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
