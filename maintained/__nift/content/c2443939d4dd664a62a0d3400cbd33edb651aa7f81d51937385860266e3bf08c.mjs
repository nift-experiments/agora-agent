import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Classroom REST API",
  description: "Open the Classroom REST API reference."
};
export let _markdown = `

The Classroom REST API reference is maintained in the API Reference section.

* [Classroom REST API](/en/api-reference/api-ref/flexible-classroom/classroom-rest-api)
* [On-Premise Recording API reference](/en/api-reference/api-ref/on-premise-recording)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Classroom REST API reference is maintained in the API Reference section."
  }, {
    heading: undefined,
    content: "Classroom REST API"
  }, {
    heading: undefined,
    content: "On-Premise Recording API reference"
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
      children: "The Classroom REST API reference is maintained in the API Reference section."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api",
          children: "Classroom REST API"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/on-premise-recording",
          children: "On-Premise Recording API reference"
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
