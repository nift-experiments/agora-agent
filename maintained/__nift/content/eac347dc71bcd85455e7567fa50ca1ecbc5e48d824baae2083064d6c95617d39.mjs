import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Service sunset plans",
  description: "Sunset plans for older On-Premise Recording SDK versions."
};
export let _markdown = `

This page outlines the service sunset schedule for older versions of the On-Premise Recording SDK. If you are using an affected version, prepare to upgrade in time to avoid service disruptions.

## SDK versions earlier than v4.0.0 [#sdk-versions-earlier-than-v400]

### Retirement schedule [#retirement-schedule]

To support ongoing platform evolution and architectural improvements, Agora is retiring the On-Premise Recording SDK versions 1.x to 3.x. This change does not affect users of version 4.x or later.

The retirement timeline is as follows:

* **Until September 30, 2025**
  Agora will stop releasing new features and remove download access for SDK versions 1.x–3.x.

* **Starting April 1, 2026**
  Technical support and documentation for SDK versions 1.x–3.x will end.

### Upgrade guidance [#upgrade-guidance]

The latest version of the On-Premise Recording SDK includes major improvements in reliability, performance, and security. To avoid service interruption, upgrade as soon as possible using the following resources:

* [Migration guide](/en/realtime-media/on-premise-recording/reference/migration-guide)
* [SDK download links](/sdks?platform=linux)
* [Release notes](/en/realtime-media/on-premise-recording/release-notes)

If you have questions or need help with migration, contact [Agora support](mailto\\:support@agora.io).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page outlines the service sunset schedule for older versions of the On-Premise Recording SDK. If you are using an affected version, prepare to upgrade in time to avoid service disruptions."
  }, {
    heading: "retirement-schedule",
    content: "To support ongoing platform evolution and architectural improvements, Agora is retiring the On-Premise Recording SDK versions 1.x to 3.x. This change does not affect users of version 4.x or later."
  }, {
    heading: "retirement-schedule",
    content: "The retirement timeline is as follows:"
  }, {
    heading: "retirement-schedule",
    content: `**Until September 30, 2025**
Agora will stop releasing new features and remove download access for SDK versions 1.x–3.x.`
  }, {
    heading: "retirement-schedule",
    content: `**Starting April 1, 2026**
Technical support and documentation for SDK versions 1.x–3.x will end.`
  }, {
    heading: "upgrade-guidance",
    content: "The latest version of the On-Premise Recording SDK includes major improvements in reliability, performance, and security. To avoid service interruption, upgrade as soon as possible using the following resources:"
  }, {
    heading: "upgrade-guidance",
    content: "Migration guide"
  }, {
    heading: "upgrade-guidance",
    content: "SDK download links"
  }, {
    heading: "upgrade-guidance",
    content: "Release notes"
  }, {
    heading: "upgrade-guidance",
    content: "If you have questions or need help with migration, contact Agora support."
  }],
  headings: [{
    id: "sdk-versions-earlier-than-v400",
    content: "SDK versions earlier than v4.0.0"
  }, {
    id: "retirement-schedule",
    content: "Retirement schedule"
  }, {
    id: "upgrade-guidance",
    content: "Upgrade guidance"
  }]
};
export let toc = [{
  depth: 2,
  url: "#sdk-versions-earlier-than-v400",
  title: _jsx(_Fragment, {
    children: "SDK versions earlier than v4.0.0"
  })
}, {
  depth: 3,
  url: "#retirement-schedule",
  title: _jsx(_Fragment, {
    children: "Retirement schedule"
  })
}, {
  depth: 3,
  url: "#upgrade-guidance",
  title: _jsx(_Fragment, {
    children: "Upgrade guidance"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page outlines the service sunset schedule for older versions of the On-Premise Recording SDK. If you are using an affected version, prepare to upgrade in time to avoid service disruptions."
    }), `
`, _jsx(_components.h2, {
      id: "sdk-versions-earlier-than-v400",
      children: "SDK versions earlier than v4.0.0"
    }), `
`, _jsx(_components.h3, {
      id: "retirement-schedule",
      children: "Retirement schedule"
    }), `
`, _jsx(_components.p, {
      children: "To support ongoing platform evolution and architectural improvements, Agora is retiring the On-Premise Recording SDK versions 1.x to 3.x. This change does not affect users of version 4.x or later."
    }), `
`, _jsx(_components.p, {
      children: "The retirement timeline is as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Until September 30, 2025"
          }), `
Agora will stop releasing new features and remove download access for SDK versions 1.x–3.x.`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Starting April 1, 2026"
          }), `
Technical support and documentation for SDK versions 1.x–3.x will end.`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "upgrade-guidance",
      children: "Upgrade guidance"
    }), `
`, _jsx(_components.p, {
      children: "The latest version of the On-Premise Recording SDK includes major improvements in reliability, performance, and security. To avoid service interruption, upgrade as soon as possible using the following resources:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/on-premise-recording/reference/migration-guide",
          children: "Migration guide"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/sdks?platform=linux",
          children: "SDK download links"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/on-premise-recording/release-notes",
          children: "Release notes"
        })
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["If you have questions or need help with migration, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "Agora support"
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
