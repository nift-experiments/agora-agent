import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "UIKit Open Source",
  description: "UIKit Open Source is the fastest UI-oriented path for standing up an Online KTV experience with reusable karaoke-focused components."
};
export let _markdown = `

## What it is [#what-it-is]

The UIKit Open Source path provides reusable karaoke UI components so teams can build an Online KTV product with less custom interface work.

## Best fit [#best-fit]

* teams that want a UI-first jumpstart
* prototypes and pilots that need faster visual assembly
* products that prefer extending open-source karaoke components over designing from scratch

## Current status in this repo [#current-status-in-this-repo]

The detailed source materials for this path already exist under the legacy \`online-ktv\` content tree and will be migrated into this new directory model incrementally.
`;
export let structuredData = {
  contents: [{
    heading: "what-it-is",
    content: "The UIKit Open Source path provides reusable karaoke UI components so teams can build an Online KTV product with less custom interface work."
  }, {
    heading: "best-fit",
    content: "teams that want a UI-first jumpstart"
  }, {
    heading: "best-fit",
    content: "prototypes and pilots that need faster visual assembly"
  }, {
    heading: "best-fit",
    content: "products that prefer extending open-source karaoke components over designing from scratch"
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
      children: "The UIKit Open Source path provides reusable karaoke UI components so teams can build an Online KTV product with less custom interface work."
    }), `
`, _jsx(_components.h2, {
      id: "best-fit",
      children: "Best fit"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "teams that want a UI-first jumpstart"
      }), `
`, _jsx(_components.li, {
        children: "prototypes and pilots that need faster visual assembly"
      }), `
`, _jsx(_components.li, {
        children: "products that prefer extending open-source karaoke components over designing from scratch"
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
