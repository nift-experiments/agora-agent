import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "SDK extension plugins",
  description: "SDK extension plugins help teams enhance experience and capability on top of the existing SDK stack."
};
export let _markdown = `

## What this capability is [#what-this-capability-is]

SDK extension plugins sit on top of the core real-time SDK stack and help teams extend functionality or add richer experience layers.

## Common scenarios [#common-scenarios]

* customized audio-video effects
* extension-based capability integration
* fast access to third-party enhancement modules

## What to read first [#what-to-read-first]

If the main real-time path is already chosen and the next need is experience enhancement, extension plugins are the right place to continue.
`;
export let structuredData = {
  contents: [{
    heading: "what-this-capability-is",
    content: "SDK extension plugins sit on top of the core real-time SDK stack and help teams extend functionality or add richer experience layers."
  }, {
    heading: "common-scenarios",
    content: "customized audio-video effects"
  }, {
    heading: "common-scenarios",
    content: "extension-based capability integration"
  }, {
    heading: "common-scenarios",
    content: "fast access to third-party enhancement modules"
  }, {
    heading: "what-to-read-first",
    content: "If the main real-time path is already chosen and the next need is experience enhancement, extension plugins are the right place to continue."
  }],
  headings: [{
    id: "what-this-capability-is",
    content: "What this capability is"
  }, {
    id: "common-scenarios",
    content: "Common scenarios"
  }, {
    id: "what-to-read-first",
    content: "What to read first"
  }]
};
export let toc = [{
  depth: 2,
  url: "#what-this-capability-is",
  title: _jsx(_Fragment, {
    children: "What this capability is"
  })
}, {
  depth: 2,
  url: "#common-scenarios",
  title: _jsx(_Fragment, {
    children: "Common scenarios"
  })
}, {
  depth: 2,
  url: "#what-to-read-first",
  title: _jsx(_Fragment, {
    children: "What to read first"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "what-this-capability-is",
      children: "What this capability is"
    }), `
`, _jsx(_components.p, {
      children: "SDK extension plugins sit on top of the core real-time SDK stack and help teams extend functionality or add richer experience layers."
    }), `
`, _jsx(_components.h2, {
      id: "common-scenarios",
      children: "Common scenarios"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "customized audio-video effects"
      }), `
`, _jsx(_components.li, {
        children: "extension-based capability integration"
      }), `
`, _jsx(_components.li, {
        children: "fast access to third-party enhancement modules"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "what-to-read-first",
      children: "What to read first"
    }), `
`, _jsx(_components.p, {
      children: "If the main real-time path is already chosen and the next need is experience enhancement, extension plugins are the right place to continue."
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
