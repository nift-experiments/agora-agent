import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How to deal with Chat-related issues in Flexible Classroom?"
};
export let _markdown = `

### The Chat is integrated but not displayed in the classroom [#the-chat-is-integrated-but-not-displayed-in-the-classroom]

Check if your Chat permission has been activated. If not, [activate it in the Console](/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/enable-flexible-classroom#chat).

### A user cannot log into the Chat [#a-user-cannot-log-into-the-chat]

1. Check if your Chat permission has been activated. If not, [activate it in the Console](/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/enable-flexible-classroom#chat).

2. In case of a network issue, the user needs to switch to a better network and try exiting and re-entering the room.

### A user cannot send a message in the Chat [#a-user-cannot-send-a-message-in-the-chat]

1. Check if your Chat permission has been activated. If not, [activate it in the Console](/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/enable-flexible-classroom#chat).

2. Check if the user is currently banned by the teacher. The teacher can send messages by turning off the ban function.

3. Check for error messages in your console. Refer to relevant [error codes](/en/realtime-media/im/reference/error-codes).
`;
export let structuredData = {
  contents: [{
    heading: "the-chat-is-integrated-but-not-displayed-in-the-classroom",
    content: "Check if your Chat permission has been activated. If not, activate it in the Console."
  }, {
    heading: "a-user-cannot-log-into-the-chat",
    content: "Check if your Chat permission has been activated. If not, activate it in the Console."
  }, {
    heading: "a-user-cannot-log-into-the-chat",
    content: "In case of a network issue, the user needs to switch to a better network and try exiting and re-entering the room."
  }, {
    heading: "a-user-cannot-send-a-message-in-the-chat",
    content: "Check if your Chat permission has been activated. If not, activate it in the Console."
  }, {
    heading: "a-user-cannot-send-a-message-in-the-chat",
    content: "Check if the user is currently banned by the teacher. The teacher can send messages by turning off the ban function."
  }, {
    heading: "a-user-cannot-send-a-message-in-the-chat",
    content: "Check for error messages in your console. Refer to relevant error codes."
  }],
  headings: [{
    id: "the-chat-is-integrated-but-not-displayed-in-the-classroom",
    content: "The Chat is integrated but not displayed in the classroom"
  }, {
    id: "a-user-cannot-log-into-the-chat",
    content: "A user cannot log into the Chat"
  }, {
    id: "a-user-cannot-send-a-message-in-the-chat",
    content: "A user cannot send a message in the Chat"
  }]
};
export let toc = [{
  depth: 3,
  url: "#the-chat-is-integrated-but-not-displayed-in-the-classroom",
  title: _jsx(_Fragment, {
    children: "The Chat is integrated but not displayed in the classroom"
  })
}, {
  depth: 3,
  url: "#a-user-cannot-log-into-the-chat",
  title: _jsx(_Fragment, {
    children: "A user cannot log into the Chat"
  })
}, {
  depth: 3,
  url: "#a-user-cannot-send-a-message-in-the-chat",
  title: _jsx(_Fragment, {
    children: "A user cannot send a message in the Chat"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h3, {
      id: "the-chat-is-integrated-but-not-displayed-in-the-classroom",
      children: "The Chat is integrated but not displayed in the classroom"
    }), `
`, _jsxs(_components.p, {
      children: ["Check if your Chat permission has been activated. If not, ", _jsx(_components.a, {
        href: "/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/enable-flexible-classroom#chat",
        children: "activate it in the Console"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "a-user-cannot-log-into-the-chat",
      children: "A user cannot log into the Chat"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Check if your Chat permission has been activated. If not, ", _jsx(_components.a, {
            href: "/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/enable-flexible-classroom#chat",
            children: "activate it in the Console"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "In case of a network issue, the user needs to switch to a better network and try exiting and re-entering the room."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "a-user-cannot-send-a-message-in-the-chat",
      children: "A user cannot send a message in the Chat"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Check if your Chat permission has been activated. If not, ", _jsx(_components.a, {
            href: "/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/enable-flexible-classroom#chat",
            children: "activate it in the Console"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Check if the user is currently banned by the teacher. The teacher can send messages by turning off the ban function."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Check for error messages in your console. Refer to relevant ", _jsx(_components.a, {
            href: "/en/realtime-media/im/reference/error-codes",
            children: "error codes"
          }), "."]
        }), `
`]
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
