import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Enable Media Push",
  description: "Shows how to enable Media Push."
};
export let _markdown = `

Media Push enables you to stream audio and video from Agora channels to CDNs and other RTMP-based platforms. To enable Media Push:

1. Log in to [Agora Console](https://console.agora.io/), and click **RTC Services** in the left navigation panel.

2. Select the project for which you want to enable Media Push from the project dropdown.

3. Find **Media Push**, and toggle the switch to enable.

4. Read the pop-up prompt carefully, and then click **Confirm**.

   <CalloutContainer type="info">
     <CalloutDescription>
       You cannot disable the service once you enable it.
     </CalloutDescription>
   </CalloutContainer>

To process a media stream and push it to a CDN, you create a converter in the Agora channel. To create and manage converters, see [Use RESTful API](../build/restful-api).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Media Push enables you to stream audio and video from Agora channels to CDNs and other RTMP-based platforms. To enable Media Push:"
  }, {
    heading: undefined,
    content: "Log in to Agora Console, and click **RTC Services** in the left navigation panel."
  }, {
    heading: undefined,
    content: "Select the project for which you want to enable Media Push from the project dropdown."
  }, {
    heading: undefined,
    content: "Find **Media Push**, and toggle the switch to enable."
  }, {
    heading: undefined,
    content: "Read the pop-up prompt carefully, and then click **Confirm**."
  }, {
    heading: undefined,
    content: "You cannot disable the service once you enable it."
  }, {
    heading: undefined,
    content: "To process a media stream and push it to a CDN, you create a converter in the Agora channel. To create and manage converters, see Use RESTful API."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Media Push enables you to stream audio and video from Agora channels to CDNs and other RTMP-based platforms. To enable Media Push:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Log in to ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Console"
          }), ", and click ", _jsx(_components.strong, {
            children: "RTC Services"
          }), " in the left navigation panel."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Select the project for which you want to enable Media Push from the project dropdown."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Find ", _jsx(_components.strong, {
            children: "Media Push"
          }), ", and toggle the switch to enable."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Read the pop-up prompt carefully, and then click ", _jsx(_components.strong, {
            children: "Confirm"
          }), "."]
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "You cannot disable the service once you enable it."
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["To process a media stream and push it to a CDN, you create a converter in the Agora channel. To create and manage converters, see ", _jsx(_components.a, {
        href: "../build/restful-api",
        children: "Use RESTful API"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
