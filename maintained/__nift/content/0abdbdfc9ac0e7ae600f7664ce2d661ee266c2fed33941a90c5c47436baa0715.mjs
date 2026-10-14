import { jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "API sunset notice",
  description: "Deprecated and removed APIs"
};
export let _markdown = `

See the [
API Sunset Notice](https://api-ref.agora.io/en/video-sdk/android/4.x/API/rtc_api_sunset.html) page in the API reference.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: `See the&#x20;
API Sunset Notice page in the API reference.`
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return _jsxs(_components.p, {
    children: ["See the ", _jsx(_components.a, {
      href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/rtc_api_sunset.html",
      children: `
API Sunset Notice`
    }), " page in the API reference."]
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
