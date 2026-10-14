import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "On-Premise Recording Overview",
  description: "Entry point for the On-Premise Recording SDK API reference."
};
export let _markdown = `

The detailed On-Premise Recording SDK API reference is published as hosted references.

Use the reference entry points here:

* [On-Premise Recording SDK API reference (Linux C++)](https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/index.html)
* [On-Premise Recording SDK API reference (Linux Java)](https://api-ref.agora.io/en/on-premise-recording-sdk/linux-java/3.x/index.html)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The detailed On-Premise Recording SDK API reference is published as hosted references."
  }, {
    heading: undefined,
    content: "Use the reference entry points here:"
  }, {
    heading: undefined,
    content: "On-Premise Recording SDK API reference (Linux C++)"
  }, {
    heading: undefined,
    content: "On-Premise Recording SDK API reference (Linux Java)"
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
      children: "The detailed On-Premise Recording SDK API reference is published as hosted references."
    }), `
`, _jsx(_components.p, {
      children: "Use the reference entry points here:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/index.html",
          children: "On-Premise Recording SDK API reference (Linux C++)"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/on-premise-recording-sdk/linux-java/3.x/index.html",
          children: "On-Premise Recording SDK API reference (Linux Java)"
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
