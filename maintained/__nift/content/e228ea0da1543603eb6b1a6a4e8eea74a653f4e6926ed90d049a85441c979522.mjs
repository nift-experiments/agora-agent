import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: 'What should I do if I encounter "Please obtain the RESTful API ID and key first" when configuring aPaaS in Agora Console?'
};
export let _markdown = `

If you encounter the \`"Please obtain the RESTful API ID and key first"\` error message when configuring aPaaS in the Console, please take the following steps:

1. Log in to Console, click the account name in the upper right corner, and select **RESTful API** in the drop-down menu.

2. Click **Add Key** to get Customer ID and Customer Secret. After obtaining it, continue to configure aPaaS.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: 'If you encounter the `"Please obtain the RESTful API ID and key first"` error message when configuring aPaaS in the Console, please take the following steps:'
  }, {
    heading: undefined,
    content: "Log in to Console, click the account name in the upper right corner, and select **RESTful API** in the drop-down menu."
  }, {
    heading: undefined,
    content: "Click **Add Key** to get Customer ID and Customer Secret. After obtaining it, continue to configure aPaaS."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["If you encounter the ", _jsx(_components.code, {
        children: '"Please obtain the RESTful API ID and key first"'
      }), " error message when configuring aPaaS in the Console, please take the following steps:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Log in to Console, click the account name in the upper right corner, and select ", _jsx(_components.strong, {
            children: "RESTful API"
          }), " in the drop-down menu."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Click ", _jsx(_components.strong, {
            children: "Add Key"
          }), " to get Customer ID and Customer Secret. After obtaining it, continue to configure aPaaS."]
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
