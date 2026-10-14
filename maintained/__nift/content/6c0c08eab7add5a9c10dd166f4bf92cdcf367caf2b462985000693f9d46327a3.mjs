import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "PaaS SDK",
  description: "PaaS SDK is the lower-level integration path for teams that want to design their own Online KTV business logic and user experience on top of Agora SDKs."
};
export let _markdown = `

## What it is [#what-it-is]

The PaaS SDK path gives teams more control over business logic, room interaction, and UI design while still building on Agora's real-time and music-related capabilities.

## Best fit [#best-fit]

* teams that want deeper customization
* products with existing app-specific room logic or UI systems
* engineering teams comfortable integrating RTC, RTM, and karaoke workflows directly

## Current status in this repo [#current-status-in-this-repo]

The detailed source materials for this path already exist under the legacy \`online-ktv\` content tree and will be migrated into this new directory model incrementally.
`;
export let structuredData = {
  contents: [{
    heading: "what-it-is",
    content: "The PaaS SDK path gives teams more control over business logic, room interaction, and UI design while still building on Agora's real-time and music-related capabilities."
  }, {
    heading: "best-fit",
    content: "teams that want deeper customization"
  }, {
    heading: "best-fit",
    content: "products with existing app-specific room logic or UI systems"
  }, {
    heading: "best-fit",
    content: "engineering teams comfortable integrating RTC, RTM, and karaoke workflows directly"
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
      children: "The PaaS SDK path gives teams more control over business logic, room interaction, and UI design while still building on Agora's real-time and music-related capabilities."
    }), `
`, _jsx(_components.h2, {
      id: "best-fit",
      children: "Best fit"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "teams that want deeper customization"
      }), `
`, _jsx(_components.li, {
        children: "products with existing app-specific room logic or UI systems"
      }), `
`, _jsx(_components.li, {
        children: "engineering teams comfortable integrating RTC, RTM, and karaoke workflows directly"
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
