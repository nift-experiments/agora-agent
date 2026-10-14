import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "What Should I do If the DAU in My Signaling Project Exceeds 1000?"
};
export let _markdown = `

If the number of daily active users (DAU) in your Signaling project exceeds 1,000, check whether you have registered with Agora and done any of the following:

* Added a credit card to your account or topped up your balance using a bank account.
* You have recently made a payment.
* Signed a contract with Agora.

Otherwise, your account may be suspended on the second day. After account suspension, none of your projects can access the Agora services.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "If the number of daily active users (DAU) in your Signaling project exceeds 1,000, check whether you have registered with Agora and done any of the following:"
  }, {
    heading: undefined,
    content: "Added a credit card to your account or topped up your balance using a bank account."
  }, {
    heading: undefined,
    content: "You have recently made a payment."
  }, {
    heading: undefined,
    content: "Signed a contract with Agora."
  }, {
    heading: undefined,
    content: "Otherwise, your account may be suspended on the second day. After account suspension, none of your projects can access the Agora services."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "If the number of daily active users (DAU) in your Signaling project exceeds 1,000, check whether you have registered with Agora and done any of the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Added a credit card to your account or topped up your balance using a bank account."
      }), `
`, _jsx(_components.li, {
        children: "You have recently made a payment."
      }), `
`, _jsx(_components.li, {
        children: "Signed a contract with Agora."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Otherwise, your account may be suspended on the second day. After account suspension, none of your projects can access the Agora services."
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
