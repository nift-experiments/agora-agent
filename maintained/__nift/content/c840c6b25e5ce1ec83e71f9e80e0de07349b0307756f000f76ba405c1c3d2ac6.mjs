import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How many users can Agora RTC SDK support at the same time?"
};
export let _markdown = `

The Agora RTC SDK provides real-time audio and video services for many users. The number of concurrent channels is unlimited, and each channel supports up to 1 million concurrent online users.

In most scenarios, Agora recommends limiting the number of users sending audio streams concurrently in a channel to 32. Of these 32 users, up to 17 can also send video streams concurrently. If you use a version of the SDK earlier than v3.0.0, and the channel profile is \`setChannelProfile(COMMUNICATION)\`, Agora recommends limiting the number of users sending streams concurrently in a channel to 7.

As of v3.7.0, a single channel can support up to 128 concurrent online hosts, who can publish audio and video streams at the same time. The number of audience members in a channel is unlimited. Each host or audience member can subscribe to a maximum of 50 hosts at the same time. To experience this improvement, contact [support@agora.io](mailto\\:support@agora.io).

* If the number of users sending streams concurrently exceeds the recommended limit, each user in the channel only sees or hears streams equal to the recommended limit, and these streams are assigned at random for each user. For example, if 18 hosts are sending streams concurrently in a live streaming channel, each user sees or hears 17 of the 18 streams, and the missing stream is random.
* Agora does not provide APIs for limiting the number of users sending streams concurrently. However, you can implement such a limitation in your application layer.
* To minimize bandwidth consumption and ensure smooth communication in a real-time video streaming scenario with multiple users, Agora recommends referring to [Join multiple channels](/en/realtime-media/rtc/build/join-and-manage-channels/join-multiple-channels). If you want to use the 128-host feature, contact [support@agora.io](mailto\\:support@agora.io) to help with the implementation.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Agora RTC SDK provides real-time audio and video services for many users. The number of concurrent channels is unlimited, and each channel supports up to 1 million concurrent online users."
  }, {
    heading: undefined,
    content: "In most scenarios, Agora recommends limiting the number of users sending audio streams concurrently in a channel to 32. Of these 32 users, up to 17 can also send video streams concurrently. If you use a version of the SDK earlier than v3.0.0, and the channel profile is `setChannelProfile(COMMUNICATION)`, Agora recommends limiting the number of users sending streams concurrently in a channel to 7."
  }, {
    heading: undefined,
    content: "As of v3.7.0, a single channel can support up to 128 concurrent online hosts, who can publish audio and video streams at the same time. The number of audience members in a channel is unlimited. Each host or audience member can subscribe to a maximum of 50 hosts at the same time. To experience this improvement, contact support\\@agora.io."
  }, {
    heading: undefined,
    content: "If the number of users sending streams concurrently exceeds the recommended limit, each user in the channel only sees or hears streams equal to the recommended limit, and these streams are assigned at random for each user. For example, if 18 hosts are sending streams concurrently in a live streaming channel, each user sees or hears 17 of the 18 streams, and the missing stream is random."
  }, {
    heading: undefined,
    content: "Agora does not provide APIs for limiting the number of users sending streams concurrently. However, you can implement such a limitation in your application layer."
  }, {
    heading: undefined,
    content: "To minimize bandwidth consumption and ensure smooth communication in a real-time video streaming scenario with multiple users, Agora recommends referring to Join multiple channels. If you want to use the 128-host feature, contact support\\@agora.io to help with the implementation."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The Agora RTC SDK provides real-time audio and video services for many users. The number of concurrent channels is unlimited, and each channel supports up to 1 million concurrent online users."
    }), `
`, _jsxs(_components.p, {
      children: ["In most scenarios, Agora recommends limiting the number of users sending audio streams concurrently in a channel to 32. Of these 32 users, up to 17 can also send video streams concurrently. If you use a version of the SDK earlier than v3.0.0, and the channel profile is ", _jsx(_components.code, {
        children: "setChannelProfile(COMMUNICATION)"
      }), ", Agora recommends limiting the number of users sending streams concurrently in a channel to 7."]
    }), `
`, _jsxs(_components.p, {
      children: ["As of v3.7.0, a single channel can support up to 128 concurrent online hosts, who can publish audio and video streams at the same time. The number of audience members in a channel is unlimited. Each host or audience member can subscribe to a maximum of 50 hosts at the same time. To experience this improvement, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If the number of users sending streams concurrently exceeds the recommended limit, each user in the channel only sees or hears streams equal to the recommended limit, and these streams are assigned at random for each user. For example, if 18 hosts are sending streams concurrently in a live streaming channel, each user sees or hears 17 of the 18 streams, and the missing stream is random."
      }), `
`, _jsx(_components.li, {
        children: "Agora does not provide APIs for limiting the number of users sending streams concurrently. However, you can implement such a limitation in your application layer."
      }), `
`, _jsxs(_components.li, {
        children: ["To minimize bandwidth consumption and ensure smooth communication in a real-time video streaming scenario with multiple users, Agora recommends referring to ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/build/join-and-manage-channels/join-multiple-channels",
          children: "Join multiple channels"
        }), ". If you want to use the 128-host feature, contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), " to help with the implementation."]
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
