import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Scenario API",
  description: "Scenario API is the fastest path for building common online KTV room experiences with higher-level karaoke-focused abstractions."
};
export let _markdown = `

## What it is [#what-it-is]

The Scenario API path wraps lower-level real-time APIs into karaoke-specific flows so teams can build solo singing, chorus, relay singing, and competition-style KTV rooms faster.

## Best fit [#best-fit]

* teams optimizing for delivery speed
* products centered on karaoke room interaction
* workloads that benefit from scene-oriented APIs instead of raw infrastructure assembly

## Current status in this repo [#current-status-in-this-repo]

The detailed source materials for this path already exist under the legacy \`online-ktv\` content tree and will be migrated into this new directory model incrementally.
`;
export let structuredData = {
  contents: [{
    heading: "what-it-is",
    content: "The Scenario API path wraps lower-level real-time APIs into karaoke-specific flows so teams can build solo singing, chorus, relay singing, and competition-style KTV rooms faster."
  }, {
    heading: "best-fit",
    content: "teams optimizing for delivery speed"
  }, {
    heading: "best-fit",
    content: "products centered on karaoke room interaction"
  }, {
    heading: "best-fit",
    content: "workloads that benefit from scene-oriented APIs instead of raw infrastructure assembly"
  }, {
    heading: "current-status-in-this-repo",
    content: "The detailed source materials for this path already exist under the legacy `online-ktv` content tree and will be migrated into this new directory model incrementally."
  }],
  headings: [{
    id: "what-it-is",
    content: "What it is"
  }, {
    id: "best-fit",
    content: "Best fit"
  }, {
    id: "current-status-in-this-repo",
    content: "Current status in this repo"
  }]
};
export let toc = [{
  depth: 2,
  url: "#what-it-is",
  title: _jsx(_Fragment, {
    children: "What it is"
  })
}, {
  depth: 2,
  url: "#best-fit",
  title: _jsx(_Fragment, {
    children: "Best fit"
  })
}, {
  depth: 2,
  url: "#current-status-in-this-repo",
  title: _jsx(_Fragment, {
    children: "Current status in this repo"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "what-it-is",
      children: "What it is"
    }), `
`, _jsx(_components.p, {
      children: "The Scenario API path wraps lower-level real-time APIs into karaoke-specific flows so teams can build solo singing, chorus, relay singing, and competition-style KTV rooms faster."
    }), `
`, _jsx(_components.h2, {
      id: "best-fit",
      children: "Best fit"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "teams optimizing for delivery speed"
      }), `
`, _jsx(_components.li, {
        children: "products centered on karaoke room interaction"
      }), `
`, _jsx(_components.li, {
        children: "workloads that benefit from scene-oriented APIs instead of raw infrastructure assembly"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "current-status-in-this-repo",
      children: "Current status in this repo"
    }), `
`, _jsxs(_components.p, {
      children: ["The detailed source materials for this path already exist under the legacy ", _jsx(_components.code, {
        children: "online-ktv"
      }), " content tree and will be migrated into this new directory model incrementally."]
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
