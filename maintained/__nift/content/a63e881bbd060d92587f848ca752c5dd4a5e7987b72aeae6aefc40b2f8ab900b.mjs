import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "What products does Agora provide?"
};
export let _markdown = `

Agora is a Platform as a Service (PaaS) provider that enables real-time communicatons with easy-to-embed SDKs and RESTful APIs. Through calling the APIs, you can add the following functions in your applications:

* [Realtime Communication](/en/realtime-media/rtc)
* [Chat (Beta)](/en/realtime-media/im)
* [Signaling](/en/realtime-media/rtm)
* [Interactive Whiteboard](/en/realtime-media/whiteboard)
* [Analytics](/en/realtime-media/agora-analytics/product-overview)
* [Cloud Recording](/en/realtime-media/cloud-recording)
* [On-Premise Recording](/en/realtime-media/on-premise-recording)
* [Server Gateway](/en/realtime-media/rtc-server-sdk)
* [Flexible classroom](/en/realtime-media/flexible-classroom/product-overview)
* [Media Push](/en/realtime-media/media-push)
* [Media Pull](/en/realtime-media/media-pull)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora is a Platform as a Service (PaaS) provider that enables real-time communicatons with easy-to-embed SDKs and RESTful APIs. Through calling the APIs, you can add the following functions in your applications:"
  }, {
    heading: undefined,
    content: "Realtime Communication"
  }, {
    heading: undefined,
    content: "Chat (Beta)"
  }, {
    heading: undefined,
    content: "Signaling"
  }, {
    heading: undefined,
    content: "Interactive Whiteboard"
  }, {
    heading: undefined,
    content: "Analytics"
  }, {
    heading: undefined,
    content: "Cloud Recording"
  }, {
    heading: undefined,
    content: "On-Premise Recording"
  }, {
    heading: undefined,
    content: "Server Gateway"
  }, {
    heading: undefined,
    content: "Flexible classroom"
  }, {
    heading: undefined,
    content: "Media Push"
  }, {
    heading: undefined,
    content: "Media Pull"
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
      children: "Agora is a Platform as a Service (PaaS) provider that enables real-time communicatons with easy-to-embed SDKs and RESTful APIs. Through calling the APIs, you can add the following functions in your applications:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtc",
          children: "Realtime Communication"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/im",
          children: "Chat (Beta)"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtm",
          children: "Signaling"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/whiteboard",
          children: "Interactive Whiteboard"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/agora-analytics/product-overview",
          children: "Analytics"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording",
          children: "Cloud Recording"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/on-premise-recording",
          children: "On-Premise Recording"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtc-server-sdk",
          children: "Server Gateway"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/flexible-classroom/product-overview",
          children: "Flexible classroom"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/media-push",
          children: "Media Push"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/media-pull",
          children: "Media Pull"
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
