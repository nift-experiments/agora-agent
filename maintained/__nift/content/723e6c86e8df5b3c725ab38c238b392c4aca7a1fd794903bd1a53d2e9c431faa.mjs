import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I retrieve channel information, such as the channel name and user list?"
};
export let _markdown = `

Agora provides server-side RESTful APIs to obtain channel-related information.

To retrieve the channel list for your project, use the [Query project](/en/api-reference/api-ref/rtc/query-channel-list) API. By providing your App ID, you can get details such as the number of channels, channel names, and the number of users in each channel.

Additionally, you can query the user list by specifying a channel name. If the channel exists, you can obtain details like the channel mode, the number of users, and the user IDs of all participants.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora provides server-side RESTful APIs to obtain channel-related information."
  }, {
    heading: undefined,
    content: "To retrieve the channel list for your project, use the Query project API. By providing your App ID, you can get details such as the number of channels, channel names, and the number of users in each channel."
  }, {
    heading: undefined,
    content: "Additionally, you can query the user list by specifying a channel name. If the channel exists, you can obtain details like the channel mode, the number of users, and the user IDs of all participants."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora provides server-side RESTful APIs to obtain channel-related information."
    }), `
`, _jsxs(_components.p, {
      children: ["To retrieve the channel list for your project, use the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/rtc/query-channel-list",
        children: "Query project"
      }), " API. By providing your App ID, you can get details such as the number of channels, channel names, and the number of users in each channel."]
    }), `
`, _jsx(_components.p, {
      children: "Additionally, you can query the user list by specifying a channel name. If the channel exists, you can obtain details like the channel mode, the number of users, and the user IDs of all participants."
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
