import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "RESTful",
  description: "Overview of Interactive Whiteboard RESTful APIs."
};
export let _markdown = `

Interactive Whiteboard RESTful APIs cover room management, scene management,
screenshots, and file conversion workflows.

## Included endpoint groups [#included-endpoint-groups]

* [Room management](./create-room)
* [Scene management](./scene-path-list)
* [Screenshots](./screenshot-scene)
* [File conversion](./start-file-conversion)

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
    content: `Interactive Whiteboard RESTful APIs cover room management, scene management,
screenshots, and file conversion workflows.`
  }, {
    heading: "included-endpoint-groups",
    content: "Room management"
  }, {
    heading: "included-endpoint-groups",
    content: "Scene management"
  }, {
    heading: "included-endpoint-groups",
    content: "Screenshots"
  }, {
    heading: "included-endpoint-groups",
    content: "File conversion"
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
      children: `Interactive Whiteboard RESTful APIs cover room management, scene management,
screenshots, and file conversion workflows.`
    }), `
`, _jsx(_components.h2, {
      id: "included-endpoint-groups",
      children: "Included endpoint groups"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./create-room",
          children: "Room management"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./scene-path-list",
          children: "Scene management"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./screenshot-scene",
          children: "Screenshots"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./start-file-conversion",
          children: "File conversion"
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
