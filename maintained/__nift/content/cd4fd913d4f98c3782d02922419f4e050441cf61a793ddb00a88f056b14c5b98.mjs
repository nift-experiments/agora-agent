import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Enable Media Gateway",
  description: "Enable Media Gateway for your Agora project in Agora Console."
};
export let _markdown = `

To use Media Gateway, enable it for your project in Agora Console.

## Prerequisites [#prerequisites]

In order to follow this procedure you must:

* Have a project that implements an RTC product:
  Interactive Live Streaming, Broadcast Streaming, Video Calling, or Voice Calling
* Be logged in to Agora Console

## Enable Media Gateway [#enable-media-gateway]

To enable Media Gateway, take the following steps:

1. Obtain your App ID, App Certificate, Customer ID, and Customer Secret. See [Agora account management](/en/introduction/account) for details.
2. In [Agora Console](https://console.agora.io), select **RTC Services** from the sidebar, then locate the **Media Gateway** card and turn on its toggle.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To use Media Gateway, enable it for your project in Agora Console."
  }, {
    heading: "prerequisites",
    content: "In order to follow this procedure you must:"
  }, {
    heading: "prerequisites",
    content: `Have a project that implements an RTC product:
Interactive Live Streaming, Broadcast Streaming, Video Calling, or Voice Calling`
  }, {
    heading: "prerequisites",
    content: "Be logged in to Agora Console"
  }, {
    heading: "enable-media-gateway",
    content: "To enable Media Gateway, take the following steps:"
  }, {
    heading: "enable-media-gateway",
    content: "Obtain your App ID, App Certificate, Customer ID, and Customer Secret. See Agora account management for details."
  }, {
    heading: "enable-media-gateway",
    content: "In Agora Console, select **RTC Services** from the sidebar, then locate the **Media Gateway** card and turn on its toggle."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "enable-media-gateway",
    content: "Enable Media Gateway"
  }]
};
export let toc = [{
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#enable-media-gateway",
  title: _jsx(_Fragment, {
    children: "Enable Media Gateway"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "To use Media Gateway, enable it for your project in Agora Console."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "In order to follow this procedure you must:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: `Have a project that implements an RTC product:
Interactive Live Streaming, Broadcast Streaming, Video Calling, or Voice Calling`
      }), `
`, _jsx(_components.li, {
        children: "Be logged in to Agora Console"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "enable-media-gateway",
      children: "Enable Media Gateway"
    }), `
`, _jsx(_components.p, {
      children: "To enable Media Gateway, take the following steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Obtain your App ID, App Certificate, Customer ID, and Customer Secret. See ", _jsx(_components.a, {
          href: "/en/introduction/account",
          children: "Agora account management"
        }), " for details."]
      }), `
`, _jsxs(_components.li, {
        children: ["In ", _jsx(_components.a, {
          href: "https://console.agora.io",
          children: "Agora Console"
        }), ", select ", _jsx(_components.strong, {
          children: "RTC Services"
        }), " from the sidebar, then locate the ", _jsx(_components.strong, {
          children: "Media Gateway"
        }), " card and turn on its toggle."]
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
