import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Server-side and extensions",
  description: "Server-side media participation, SDK extension plugins, and ecosystem integration entry points."
};
export let _markdown = `

<div id="rm-rtc-server-sdk"></div>

## Server Gateway [#server-gateway]

Lets the backend participate directly in RTC media send, receive, and control flows.

<div id="rm-sdk-extension"></div>

## SDK extension plugins [#sdk-extension-plugins]

Support capability enhancement and customized audio-video effects on top of the existing SDK stack.

<div id="rm-marketplace"></div>

## Marketplace [#marketplace]

Provides a faster path to selecting, purchasing, and connecting external real-time modules into your product.
`;
export let structuredData = {
  contents: [{
    heading: "server-gateway",
    content: "Lets the backend participate directly in RTC media send, receive, and control flows."
  }, {
    heading: "sdk-extension-plugins",
    content: "Support capability enhancement and customized audio-video effects on top of the existing SDK stack."
  }, {
    heading: "marketplace",
    content: "Provides a faster path to selecting, purchasing, and connecting external real-time modules into your product."
  }],
  headings: [{
    id: "server-gateway",
    content: "Server Gateway"
  }, {
    id: "sdk-extension-plugins",
    content: "SDK extension plugins"
  }, {
    id: "marketplace",
    content: "Marketplace"
  }]
};
export let toc = [{
  depth: 2,
  url: "#server-gateway",
  title: _jsx(_Fragment, {
    children: "Server Gateway"
  })
}, {
  depth: 2,
  url: "#sdk-extension-plugins",
  title: _jsx(_Fragment, {
    children: "SDK extension plugins"
  })
}, {
  depth: 2,
  url: "#marketplace",
  title: _jsx(_Fragment, {
    children: "Marketplace"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "server-gateway",
      children: "Server Gateway"
    }), `
`, _jsx(_components.p, {
      children: "Lets the backend participate directly in RTC media send, receive, and control flows."
    }), `
`, `
`, _jsx(_components.h2, {
      id: "sdk-extension-plugins",
      children: "SDK extension plugins"
    }), `
`, _jsx(_components.p, {
      children: "Support capability enhancement and customized audio-video effects on top of the existing SDK stack."
    }), `
`, `
`, _jsx(_components.h2, {
      id: "marketplace",
      children: "Marketplace"
    }), `
`, _jsx(_components.p, {
      children: "Provides a faster path to selecting, purchasing, and connecting external real-time modules into your product."
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
