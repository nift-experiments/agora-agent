import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I prevent volume changes when the users switch their roles in an interactive live streaming channel?"
};
export let _markdown = `

To ensure a better audio experience in different scenarios, by default, the SDK adjusts the underlying audio settings when the user switches user roles, as follows:

* The audience role uses the media volume control.
* The host role uses the call volume control.

The media volume and call volume have separate volume control mechanisms.

To avoid volume changes when the user switches user roles, ensure that the volume type used by the SDK remains the same before and after the switch. The volume type used by the SDK varies from case to case. See [Volume type introduction](/en/api-reference/faq/integration/system_volume) for details.

For example, if you use \`AUDIO_SCENARIO_CHATROOM_ENTERTAINMENT\` on Android and \`AUDIO_SCENARIO_GAME_STREAMING\` on iOS, then even if the user role switches and the audio routing changes, the user's volume type does not change, and thus the volume is not affected.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To ensure a better audio experience in different scenarios, by default, the SDK adjusts the underlying audio settings when the user switches user roles, as follows:"
  }, {
    heading: undefined,
    content: "The audience role uses the media volume control."
  }, {
    heading: undefined,
    content: "The host role uses the call volume control."
  }, {
    heading: undefined,
    content: "The media volume and call volume have separate volume control mechanisms."
  }, {
    heading: undefined,
    content: "To avoid volume changes when the user switches user roles, ensure that the volume type used by the SDK remains the same before and after the switch. The volume type used by the SDK varies from case to case. See Volume type introduction for details."
  }, {
    heading: undefined,
    content: "For example, if you use `AUDIO_SCENARIO_CHATROOM_ENTERTAINMENT` on Android and `AUDIO_SCENARIO_GAME_STREAMING` on iOS, then even if the user role switches and the audio routing changes, the user's volume type does not change, and thus the volume is not affected."
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
      children: "To ensure a better audio experience in different scenarios, by default, the SDK adjusts the underlying audio settings when the user switches user roles, as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The audience role uses the media volume control."
      }), `
`, _jsx(_components.li, {
        children: "The host role uses the call volume control."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The media volume and call volume have separate volume control mechanisms."
    }), `
`, _jsxs(_components.p, {
      children: ["To avoid volume changes when the user switches user roles, ensure that the volume type used by the SDK remains the same before and after the switch. The volume type used by the SDK varies from case to case. See ", _jsx(_components.a, {
        href: "/en/api-reference/faq/integration/system_volume",
        children: "Volume type introduction"
      }), " for details."]
    }), `
`, _jsxs(_components.p, {
      children: ["For example, if you use ", _jsx(_components.code, {
        children: "AUDIO_SCENARIO_CHATROOM_ENTERTAINMENT"
      }), " on Android and ", _jsx(_components.code, {
        children: "AUDIO_SCENARIO_GAME_STREAMING"
      }), " on iOS, then even if the user role switches and the audio routing changes, the user's volume type does not change, and thus the volume is not affected."]
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
