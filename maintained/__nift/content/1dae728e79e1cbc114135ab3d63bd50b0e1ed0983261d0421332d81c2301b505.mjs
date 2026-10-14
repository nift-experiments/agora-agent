import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Does the Agora Signaling SDK limit concurrent users or channel message frequency?"
};
export let _markdown = `

The Agora Signaling SDK does not impose a hard limit on the number of concurrent online users. However, your pricing plan may impose a Peak Concurrent User (PCU) limit. Exceeding this limit could result in additional charges or service restrictions.

Agora recommends the following maximum number of channel messages per second for a single channel:

| Concurrent online users in a single channel | Number of channel messages per second |
| ------------------------------------------- | ------------------------------------- |
| \\< 1,000                                    | \\< 200                                |
| >= 1,000 and \\< 10,000                      | \\< 100                                |
| >= 10,000                                   | \\< 30                                 |

<CalloutContainer type="info">
  <CalloutDescription>
    * If the number of messages per second exceeds the recommended values, latency can increase significantly and may also cause the following issues:
      * The user cannot send or receive messages.
      * The user always stays in the RECONNECTING state or keeps switching between the CONNECTED state and the RECONNECTING state. For other users, the current user may appear offline.
    * Agora provides a customized service to increase the number of messages per second without affecting latency or stability. Contact [support@agora.io](mailto\\:support@agora.io) for more information.
  </CalloutDescription>
</CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Agora Signaling SDK does not impose a hard limit on the number of concurrent online users. However, your pricing plan may impose a Peak Concurrent User (PCU) limit. Exceeding this limit could result in additional charges or service restrictions."
  }, {
    heading: undefined,
    content: "Agora recommends the following maximum number of channel messages per second for a single channel:"
  }, {
    heading: undefined,
    content: "Concurrent online users in a single channel"
  }, {
    heading: undefined,
    content: "Number of channel messages per second"
  }, {
    heading: undefined,
    content: "\\< 1,000"
  }, {
    heading: undefined,
    content: "\\< 200"
  }, {
    heading: undefined,
    content: ">= 1,000 and \\< 10,000"
  }, {
    heading: undefined,
    content: "\\< 100"
  }, {
    heading: undefined,
    content: ">= 10,000"
  }, {
    heading: undefined,
    content: "\\< 30"
  }, {
    heading: undefined,
    content: "If the number of messages per second exceeds the recommended values, latency can increase significantly and may also cause the following issues:"
  }, {
    heading: undefined,
    content: "The user cannot send or receive messages."
  }, {
    heading: undefined,
    content: "The user always stays in the RECONNECTING state or keeps switching between the CONNECTED state and the RECONNECTING state. For other users, the current user may appear offline."
  }, {
    heading: undefined,
    content: "Agora provides a customized service to increase the number of messages per second without affecting latency or stability. Contact support\\@agora.io for more information."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The Agora Signaling SDK does not impose a hard limit on the number of concurrent online users. However, your pricing plan may impose a Peak Concurrent User (PCU) limit. Exceeding this limit could result in additional charges or service restrictions."
    }), `
`, _jsx(_components.p, {
      children: "Agora recommends the following maximum number of channel messages per second for a single channel:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Concurrent online users in a single channel"
          }), _jsx(_components.th, {
            children: "Number of channel messages per second"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "< 1,000"
          }), _jsx(_components.td, {
            children: "< 200"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: ">= 1,000 and < 10,000"
          }), _jsx(_components.td, {
            children: "< 100"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: ">= 10,000"
          }), _jsx(_components.td, {
            children: "< 30"
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If the number of messages per second exceeds the recommended values, latency can increase significantly and may also cause the following issues:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "The user cannot send or receive messages."
              }), `
`, _jsx(_components.li, {
                children: "The user always stays in the RECONNECTING state or keeps switching between the CONNECTED state and the RECONNECTING state. For other users, the current user may appear offline."
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: ["Agora provides a customized service to increase the number of messages per second without affecting latency or stability. Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " for more information."]
          }), `
`]
        })
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
