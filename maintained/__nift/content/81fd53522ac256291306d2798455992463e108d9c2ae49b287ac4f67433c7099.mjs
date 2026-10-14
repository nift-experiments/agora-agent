import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Release notes",
  description: "Information about changes in each version of the Convo AI Device Kit."
};
export let _markdown = `

This document summarizes the latest updates, new features, improvements, and known issues for the Convo AI Device Kit.

### R1 [#r1]

This version was released on December 23, 2025.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This document summarizes the latest updates, new features, improvements, and known issues for the Convo AI Device Kit."
  }, {
    heading: "r1",
    content: "This version was released on December 23, 2025."
  }],
  headings: [{
    id: "r1",
    content: "R1"
  }]
};
export let toc = [{
  depth: 3,
  url: "#r1",
  title: _jsx(_Fragment, {
    children: "R1"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h3: "h3",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This document summarizes the latest updates, new features, improvements, and known issues for the Convo AI Device Kit."
    }), `
`, _jsx(_components.h3, {
      id: "r1",
      children: "R1"
    }), `
`, _jsx(_components.p, {
      children: "This version was released on December 23, 2025."
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
