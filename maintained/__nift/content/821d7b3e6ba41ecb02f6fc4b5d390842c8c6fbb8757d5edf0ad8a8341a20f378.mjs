import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "RESTful",
  description: "Overview of Media Gateway RESTful APIs."
};
export let _markdown = `

Media Gateway RESTful APIs let you manage ingress streaming keys, online stream
sessions, flow configuration templates, and notification IP ranges.

## Included endpoint groups [#included-endpoint-groups]

* [Streaming keys](./create-streaming-key)
* [Online streams](./query-streaming-list)
* [Flow configuration templates](./create-reset-template)
* [Notification service IP address](./query-ip-address)

<CalloutContainer type="info">
  <CalloutDescription>
    Endpoint pages under this section are generated from a single OpenAPI YAML
    source. Do not add shadow endpoint pages.
  </CalloutDescription>
</CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: `Media Gateway RESTful APIs let you manage ingress streaming keys, online stream
sessions, flow configuration templates, and notification IP ranges.`
  }, {
    heading: "included-endpoint-groups",
    content: "Streaming keys"
  }, {
    heading: "included-endpoint-groups",
    content: "Online streams"
  }, {
    heading: "included-endpoint-groups",
    content: "Flow configuration templates"
  }, {
    heading: "included-endpoint-groups",
    content: "Notification service IP address"
  }, {
    heading: "included-endpoint-groups",
    content: `Endpoint pages under this section are generated from a single OpenAPI YAML
source. Do not add shadow endpoint pages.`
  }],
  headings: [{
    id: "included-endpoint-groups",
    content: "Included endpoint groups"
  }]
};
export let toc = [{
  depth: 2,
  url: "#included-endpoint-groups",
  title: _jsx(_Fragment, {
    children: "Included endpoint groups"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: `Media Gateway RESTful APIs let you manage ingress streaming keys, online stream
sessions, flow configuration templates, and notification IP ranges.`
    }), `
`, _jsx(_components.h2, {
      id: "included-endpoint-groups",
      children: "Included endpoint groups"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./create-streaming-key",
          children: "Streaming keys"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./query-streaming-list",
          children: "Online streams"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./create-reset-template",
          children: "Flow configuration templates"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./query-ip-address",
          children: "Notification service IP address"
        })
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: `Endpoint pages under this section are generated from a single OpenAPI YAML
source. Do not add shadow endpoint pages.`
        })
      })
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
