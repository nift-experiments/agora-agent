import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Service activation",
  description: "How to activate Agora Analytics for your account."
};
export let _markdown = `

To activate Agora Analytics, follow these steps:

1. Contact your account executive, solutions architect, or email [support@agora.io](mailto\\:support@agora.io) to learn about the available Agora Analytics plans.

2. The account team or your solutions architect will open a support ticket with [Technical support](mailto\\:support@agora.io) to request activation. Make sure the ticket includes your Customer ID and the specific Agora Analytics plan you want activated.

   <CalloutContainer type="info">
     <CalloutDescription>
       Activation typically takes up to 2 business days.
     </CalloutDescription>
   </CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To activate Agora Analytics, follow these steps:"
  }, {
    heading: undefined,
    content: "Contact your account executive, solutions architect, or email support\\@agora.io to learn about the available Agora Analytics plans."
  }, {
    heading: undefined,
    content: "The account team or your solutions architect will open a support ticket with Technical support to request activation. Make sure the ticket includes your Customer ID and the specific Agora Analytics plan you want activated."
  }, {
    heading: undefined,
    content: "Activation typically takes up to 2 business days."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    ol: "ol",
    p: "p",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "To activate Agora Analytics, follow these steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Contact your account executive, solutions architect, or email ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "support@agora.io"
          }), " to learn about the available Agora Analytics plans."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["The account team or your solutions architect will open a support ticket with ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "Technical support"
          }), " to request activation. Make sure the ticket includes your Customer ID and the specific Agora Analytics plan you want activated."]
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "Activation typically takes up to 2 business days."
            })
          })
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
