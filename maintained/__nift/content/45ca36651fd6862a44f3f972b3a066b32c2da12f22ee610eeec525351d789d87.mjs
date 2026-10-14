import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Community Resources",
  description: "Use Console, Status Page, Analytics, documentation, and Marketplace resources from one entry page."
};
export let _markdown = `

Agora Console is the unified portal for configuring, purchasing, and managing Agora products and services.

## Dashboard overview [#dashboard-overview]

After logging in to Console, the overview dashboard provides quick access to:

* projects
* billing
* usage
* members and roles
* documentation
* code samples
* support
* Agora Analytics
* Extensions Marketplace

## Additional resources [#additional-resources]

* [Support](/en/introduction/support)
* [Release Notes](/en/ai/release-notes)
* [Usage Analytics](/en/introduction/usage-analytics)
* [AI best practices](/en/ai/best-practices)
* [AI product map](/en/ai/domain-overview)

## Status and operations [#status-and-operations]

Use the Agora Status Page and the Support Center to monitor service health, track incidents, and follow maintenance events.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora Console is the unified portal for configuring, purchasing, and managing Agora products and services."
  }, {
    heading: "dashboard-overview",
    content: "After logging in to Console, the overview dashboard provides quick access to:"
  }, {
    heading: "dashboard-overview",
    content: "projects"
  }, {
    heading: "dashboard-overview",
    content: "billing"
  }, {
    heading: "dashboard-overview",
    content: "usage"
  }, {
    heading: "dashboard-overview",
    content: "members and roles"
  }, {
    heading: "dashboard-overview",
    content: "documentation"
  }, {
    heading: "dashboard-overview",
    content: "code samples"
  }, {
    heading: "dashboard-overview",
    content: "support"
  }, {
    heading: "dashboard-overview",
    content: "Agora Analytics"
  }, {
    heading: "dashboard-overview",
    content: "Extensions Marketplace"
  }, {
    heading: "additional-resources",
    content: "Support"
  }, {
    heading: "additional-resources",
    content: "Release Notes"
  }, {
    heading: "additional-resources",
    content: "Usage Analytics"
  }, {
    heading: "additional-resources",
    content: "AI best practices"
  }, {
    heading: "additional-resources",
    content: "AI product map"
  }, {
    heading: "status-and-operations",
    content: "Use the Agora Status Page and the Support Center to monitor service health, track incidents, and follow maintenance events."
  }],
  headings: [{
    id: "dashboard-overview",
    content: "Dashboard overview"
  }, {
    id: "additional-resources",
    content: "Additional resources"
  }, {
    id: "status-and-operations",
    content: "Status and operations"
  }]
};
export let toc = [{
  depth: 2,
  url: "#dashboard-overview",
  title: _jsx(_Fragment, {
    children: "Dashboard overview"
  })
}, {
  depth: 2,
  url: "#additional-resources",
  title: _jsx(_Fragment, {
    children: "Additional resources"
  })
}, {
  depth: 2,
  url: "#status-and-operations",
  title: _jsx(_Fragment, {
    children: "Status and operations"
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
      children: "Agora Console is the unified portal for configuring, purchasing, and managing Agora products and services."
    }), `
`, _jsx(_components.h2, {
      id: "dashboard-overview",
      children: "Dashboard overview"
    }), `
`, _jsx(_components.p, {
      children: "After logging in to Console, the overview dashboard provides quick access to:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "projects"
      }), `
`, _jsx(_components.li, {
        children: "billing"
      }), `
`, _jsx(_components.li, {
        children: "usage"
      }), `
`, _jsx(_components.li, {
        children: "members and roles"
      }), `
`, _jsx(_components.li, {
        children: "documentation"
      }), `
`, _jsx(_components.li, {
        children: "code samples"
      }), `
`, _jsx(_components.li, {
        children: "support"
      }), `
`, _jsx(_components.li, {
        children: "Agora Analytics"
      }), `
`, _jsx(_components.li, {
        children: "Extensions Marketplace"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "additional-resources",
      children: "Additional resources"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/introduction/support",
          children: "Support"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/ai/release-notes",
          children: "Release Notes"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/introduction/usage-analytics",
          children: "Usage Analytics"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/ai/best-practices",
          children: "AI best practices"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/ai/domain-overview",
          children: "AI product map"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "status-and-operations",
      children: "Status and operations"
    }), `
`, _jsx(_components.p, {
      children: "Use the Agora Status Page and the Support Center to monitor service health, track incidents, and follow maintenance events."
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
