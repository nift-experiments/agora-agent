import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Pricing",
  description: "Pricing references relevant to Convo AI Device Kit deployments."
};
export let _markdown = `

Use the following pricing references when planning production rollout:

* [Conversational AI Pricing](../../reference/pricing)
* [IoT SDK Pricing](../../../introduction/billing)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Use the following pricing references when planning production rollout:"
  }, {
    heading: undefined,
    content: "Conversational AI Pricing"
  }, {
    heading: undefined,
    content: "IoT SDK Pricing"
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Use the following pricing references when planning production rollout:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../reference/pricing",
          children: "Conversational AI Pricing"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "../../../introduction/billing",
          children: "IoT SDK Pricing"
        })
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
