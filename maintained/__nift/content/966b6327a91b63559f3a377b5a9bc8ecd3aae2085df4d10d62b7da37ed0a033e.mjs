import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How to remove a specific user from a channel?"
};
export let _markdown = `

In real-time audio and video interactions, there are often cases where you need to remove a specific user from the channel. Agora offers several solutions tailored to different scenarios:

### Remove inactive users [#remove-inactive-users]

**Scenario:** After a call, a user (typically on the web) forgets to leave the channel. Even without an active call, usage is still generated.

**Solution:** To avoid this, check if the user is publishing an audio stream over time, using the volume indication callback (\`onAudioVolumeIndication\`) or monitor at the app level. If the user is inactive, call \`leaveChannel\` in the app logic to log off the user.

### Remove all users [#remove-all-users]

**Scenario:** Scheduling apps may need to end calls or meetings at a set time. For example, a one hour meeting starts at 10:00 a.m. and needs to end at 11:00 a.m.

**Solution:** Use one of the following approaches:

* Set the valid timestamp of the Token (\`privilegeExpiredTs\` parameter) to the meeting's end time. After this time, the user is automatically removed from the channel. For details, see [Secure authentication with tokens](/en/realtime-media/rtc/build/authenticate-users/authentication-workflow).

* Use the server-side RESTful API to remove users. Track the user ID and channel name in the app, then call the [Create Rule API](/en/api-reference/api-ref/rtc/create-ban-rule) to remove the user from the channel. Set the ban time (\`time\` parameter) to 0 to allow the user to join other channels afterwards.

### Remove a user who violates your policies [#remove-a-user-who-violates-your-policies]

**Scenario:** In a live broadcast room, if a connected user makes inappropriate remarks, the host may want to remove the user.

**Solution:** Use the peer-to-peer messaging function of Signaling. Send an offline notification with \`sendMessageToPeer\`. The user receives this message through the \`onMessageReceived\` callback, and the client calls the \`leaveChannel\` method in the RTC SDK to leave the channel.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In real-time audio and video interactions, there are often cases where you need to remove a specific user from the channel. Agora offers several solutions tailored to different scenarios:"
  }, {
    heading: "remove-inactive-users",
    content: "**Scenario:** After a call, a user (typically on the web) forgets to leave the channel. Even without an active call, usage is still generated."
  }, {
    heading: "remove-inactive-users",
    content: "**Solution:** To avoid this, check if the user is publishing an audio stream over time, using the volume indication callback (`onAudioVolumeIndication`) or monitor at the app level. If the user is inactive, call `leaveChannel` in the app logic to log off the user."
  }, {
    heading: "remove-all-users",
    content: "**Scenario:** Scheduling apps may need to end calls or meetings at a set time. For example, a one hour meeting starts at 10:00 a.m. and needs to end at 11:00 a.m."
  }, {
    heading: "remove-all-users",
    content: "**Solution:** Use one of the following approaches:"
  }, {
    heading: "remove-all-users",
    content: "Set the valid timestamp of the Token (`privilegeExpiredTs` parameter) to the meeting's end time. After this time, the user is automatically removed from the channel. For details, see Secure authentication with tokens."
  }, {
    heading: "remove-all-users",
    content: "Use the server-side RESTful API to remove users. Track the user ID and channel name in the app, then call the Create Rule API to remove the user from the channel. Set the ban time (`time` parameter) to 0 to allow the user to join other channels afterwards."
  }, {
    heading: "remove-a-user-who-violates-your-policies",
    content: "**Scenario:** In a live broadcast room, if a connected user makes inappropriate remarks, the host may want to remove the user."
  }, {
    heading: "remove-a-user-who-violates-your-policies",
    content: "**Solution:** Use the peer-to-peer messaging function of Signaling. Send an offline notification with `sendMessageToPeer`. The user receives this message through the `onMessageReceived` callback, and the client calls the `leaveChannel` method in the RTC SDK to leave the channel."
  }],
  headings: [{
    id: "remove-inactive-users",
    content: "Remove inactive users"
  }, {
    id: "remove-all-users",
    content: "Remove all users"
  }, {
    id: "remove-a-user-who-violates-your-policies",
    content: "Remove a user who violates your policies"
  }]
};
export let toc = [{
  depth: 3,
  url: "#remove-inactive-users",
  title: _jsx(_Fragment, {
    children: "Remove inactive users"
  })
}, {
  depth: 3,
  url: "#remove-all-users",
  title: _jsx(_Fragment, {
    children: "Remove all users"
  })
}, {
  depth: 3,
  url: "#remove-a-user-who-violates-your-policies",
  title: _jsx(_Fragment, {
    children: "Remove a user who violates your policies"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "In real-time audio and video interactions, there are often cases where you need to remove a specific user from the channel. Agora offers several solutions tailored to different scenarios:"
    }), `
`, _jsx(_components.h3, {
      id: "remove-inactive-users",
      children: "Remove inactive users"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Scenario:"
      }), " After a call, a user (typically on the web) forgets to leave the channel. Even without an active call, usage is still generated."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Solution:"
      }), " To avoid this, check if the user is publishing an audio stream over time, using the volume indication callback (", _jsx(_components.code, {
        children: "onAudioVolumeIndication"
      }), ") or monitor at the app level. If the user is inactive, call ", _jsx(_components.code, {
        children: "leaveChannel"
      }), " in the app logic to log off the user."]
    }), `
`, _jsx(_components.h3, {
      id: "remove-all-users",
      children: "Remove all users"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Scenario:"
      }), " Scheduling apps may need to end calls or meetings at a set time. For example, a one hour meeting starts at 10", _jsx(_components.div, {}), " a.m. and needs to end at 11", _jsx(_components.div, {}), " a.m."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Solution:"
      }), " Use one of the following approaches:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Set the valid timestamp of the Token (", _jsx(_components.code, {
            children: "privilegeExpiredTs"
          }), " parameter) to the meeting's end time. After this time, the user is automatically removed from the channel. For details, see ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/authenticate-users/authentication-workflow",
            children: "Secure authentication with tokens"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Use the server-side RESTful API to remove users. Track the user ID and channel name in the app, then call the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/rtc/create-ban-rule",
            children: "Create Rule API"
          }), " to remove the user from the channel. Set the ban time (", _jsx(_components.code, {
            children: "time"
          }), " parameter) to 0 to allow the user to join other channels afterwards."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "remove-a-user-who-violates-your-policies",
      children: "Remove a user who violates your policies"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Scenario:"
      }), " In a live broadcast room, if a connected user makes inappropriate remarks, the host may want to remove the user."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Solution:"
      }), " Use the peer-to-peer messaging function of Signaling. Send an offline notification with ", _jsx(_components.code, {
        children: "sendMessageToPeer"
      }), ". The user receives this message through the ", _jsx(_components.code, {
        children: "onMessageReceived"
      }), " callback, and the client calls the ", _jsx(_components.code, {
        children: "leaveChannel"
      }), " method in the RTC SDK to leave the channel."]
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
