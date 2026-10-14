import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Cross-border dedicated proxy",
  description: "Describes the cross-border dedicated proxy function"
};
export let _markdown = `

With the development of economic globalization and the advancement of Internet technologies, cross-border dedicated proxy is indispensable for many enterprises. It can help enterprises better cope with the pressure of international competition and expand overseas markets.

In order to improve the instant messaging experience for enterprises conducting global business and meet the communication needs of end users in the Chinese mainland and other regions, Agora has set up dedicated lines from the Chinese mainland to Hong Kong and vice versa.

Online education enterprises are typical cases, where teachers and students tend to be located in different countries and regions. For example, American teachers teach English courses to Chinese students through online videos. Enabling the dedicated proxy can greatly improve the use experience of Agora Chat.

This service is disabled by default. To enable it, contact [support@agora.io](mailto\\:support@agora.io).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "With the development of economic globalization and the advancement of Internet technologies, cross-border dedicated proxy is indispensable for many enterprises. It can help enterprises better cope with the pressure of international competition and expand overseas markets."
  }, {
    heading: undefined,
    content: "In order to improve the instant messaging experience for enterprises conducting global business and meet the communication needs of end users in the Chinese mainland and other regions, Agora has set up dedicated lines from the Chinese mainland to Hong Kong and vice versa."
  }, {
    heading: undefined,
    content: "Online education enterprises are typical cases, where teachers and students tend to be located in different countries and regions. For example, American teachers teach English courses to Chinese students through online videos. Enabling the dedicated proxy can greatly improve the use experience of Agora Chat."
  }, {
    heading: undefined,
    content: "This service is disabled by default. To enable it, contact support\\@agora.io."
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
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "With the development of economic globalization and the advancement of Internet technologies, cross-border dedicated proxy is indispensable for many enterprises. It can help enterprises better cope with the pressure of international competition and expand overseas markets."
    }), `
`, _jsx(_components.p, {
      children: "In order to improve the instant messaging experience for enterprises conducting global business and meet the communication needs of end users in the Chinese mainland and other regions, Agora has set up dedicated lines from the Chinese mainland to Hong Kong and vice versa."
    }), `
`, _jsx(_components.p, {
      children: "Online education enterprises are typical cases, where teachers and students tend to be located in different countries and regions. For example, American teachers teach English courses to Chinese students through online videos. Enabling the dedicated proxy can greatly improve the use experience of Agora Chat."
    }), `
`, _jsxs(_components.p, {
      children: ["This service is disabled by default. To enable it, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
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
