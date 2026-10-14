import { jsx as _jsx } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why can't I call the Cloud Recording RESTful API through a web browser?"
};
export let _markdown = `

A Web API needs to make a cross-origin request in accordance with Cross-Origin Resource Sharing (CORS) to call the Cloud Recording RESTful API. The browser must first send an OPTIONS request to the server to query if the server accepts cross-origin requests before sending a cross-origin POST request. However, the Cloud Recording RESTful API does not support the OPTIONS method, and therefore you cannot call it with a Web API.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "A Web API needs to make a cross-origin request in accordance with Cross-Origin Resource Sharing (CORS) to call the Cloud Recording RESTful API. The browser must first send an OPTIONS request to the server to query if the server accepts cross-origin requests before sending a cross-origin POST request. However, the Cloud Recording RESTful API does not support the OPTIONS method, and therefore you cannot call it with a Web API."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return _jsx(_components.p, {
    children: "A Web API needs to make a cross-origin request in accordance with Cross-Origin Resource Sharing (CORS) to call the Cloud Recording RESTful API. The browser must first send an OPTIONS request to the server to query if the server accepts cross-origin requests before sending a cross-origin POST request. However, the Cloud Recording RESTful API does not support the OPTIONS method, and therefore you cannot call it with a Web API."
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
