import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "REST API reference",
  description: "Browse the Speech-to-Text v7 REST API operations and the OpenAPI source."
};
export let _markdown = `

Use the Speech-to-Text v7 REST API to start, query, update, list, and stop real-time transcription agents.

## Entry points [#entry-points]

* [REST API overview](/en/api-reference/api-ref/speech-to-text)
* [English OpenAPI YAML](/openapi/speech-to-text/v7.en.yaml)
* [RESTful authentication](/en/api-reference/api-ref/speech-to-text/authentication)
* [v6.x REST API reference (Deprecated)](./rest-api-v6/acquire)
* [v5.x REST API reference (Deprecated)](./rest-api-v5/acquire)

## Operations [#operations]

* [Start a Real-time STT agent](/en/api-reference/api-ref/speech-to-text/join)
* [Query the task status](/en/api-reference/api-ref/speech-to-text/query)
* [Stop a Real-time STT agent](/en/api-reference/api-ref/speech-to-text/leave)
* [Update task configuration](/en/api-reference/api-ref/speech-to-text/update)
* [List Real-time STT agents](/en/api-reference/api-ref/speech-to-text/list)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Use the Speech-to-Text v7 REST API to start, query, update, list, and stop real-time transcription agents."
  }, {
    heading: "entry-points",
    content: "REST API overview"
  }, {
    heading: "entry-points",
    content: "English OpenAPI YAML"
  }, {
    heading: "entry-points",
    content: "RESTful authentication"
  }, {
    heading: "entry-points",
    content: "v6.x REST API reference (Deprecated)"
  }, {
    heading: "entry-points",
    content: "v5.x REST API reference (Deprecated)"
  }, {
    heading: "operations",
    content: "Start a Real-time STT agent"
  }, {
    heading: "operations",
    content: "Query the task status"
  }, {
    heading: "operations",
    content: "Stop a Real-time STT agent"
  }, {
    heading: "operations",
    content: "Update task configuration"
  }, {
    heading: "operations",
    content: "List Real-time STT agents"
  }],
  headings: [{
    id: "entry-points",
    content: "Entry points"
  }, {
    id: "operations",
    content: "Operations"
  }]
};
export let toc = [{
  depth: 2,
  url: "#entry-points",
  title: _jsx(_Fragment, {
    children: "Entry points"
  })
}, {
  depth: 2,
  url: "#operations",
  title: _jsx(_Fragment, {
    children: "Operations"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Use the Speech-to-Text v7 REST API to start, query, update, list, and stop real-time transcription agents."
    }), `
`, _jsx(_components.h2, {
      id: "entry-points",
      children: "Entry points"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/speech-to-text",
          children: "REST API overview"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/openapi/speech-to-text/v7.en.yaml",
          children: "English OpenAPI YAML"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/speech-to-text/authentication",
          children: "RESTful authentication"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./rest-api-v6/acquire",
          children: "v6.x REST API reference (Deprecated)"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./rest-api-v5/acquire",
          children: "v5.x REST API reference (Deprecated)"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "operations",
      children: "Operations"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/speech-to-text/join",
          children: "Start a Real-time STT agent"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/speech-to-text/query",
          children: "Query the task status"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/speech-to-text/leave",
          children: "Stop a Real-time STT agent"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/speech-to-text/update",
          children: "Update task configuration"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/speech-to-text/list",
          children: "List Real-time STT agents"
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
