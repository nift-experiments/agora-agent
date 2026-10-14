import { jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Pricing",
  description: "Billing model and pricing for IoT SDK usage."
};
export let _markdown = `

For IoT SDK licensing and pricing details, see [Implement licensing](/en/realtime-media/iot/build/authenticate-and-secure-channels/license). To receive a tailored quote, submit a [Support ticket](https://agoraio.zendesk.com/hc/en-us) with your requirements.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "For IoT SDK licensing and pricing details, see Implement licensing. To receive a tailored quote, submit a Support ticket with your requirements."
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
    children: ["For IoT SDK licensing and pricing details, see ", _jsx(_components.a, {
      href: "/en/realtime-media/iot/build/authenticate-and-secure-channels/license",
      children: "Implement licensing"
    }), ". To receive a tailored quote, submit a ", _jsx(_components.a, {
      href: "https://agoraio.zendesk.com/hc/en-us",
      children: "Support ticket"
    }), " with your requirements."]
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
