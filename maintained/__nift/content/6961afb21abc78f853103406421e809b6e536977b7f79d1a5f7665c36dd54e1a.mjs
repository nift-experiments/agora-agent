import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Online KTV",
  description: "Online KTV is the product entry for building karaoke rooms, singing interaction, music workflows, and immersive entertainment scenarios on top of Agora real-time capabilities."
};
export let _markdown = `

## What this product covers [#what-this-product-covers]

Online KTV combines real-time audio interaction, room coordination, music-content workflows, and karaoke-specific experience design into one product surface.

## Product paths [#product-paths]

* [Scenario API](scenario-api.md)
* [PaaS SDK](paas-sdk.md)
* [UIKit Open Source](uikit.md)

## Recommended reading path [#recommended-reading-path]

1. Start with the path that best matches your integration model.
2. Validate whether you need a scene-oriented API, a lower-level PaaS path, or a UIKit-based fast-start approach.
3. Expand into detailed implementation docs as the legacy KTV content is normalized into this new product directory.

## Current migration note [#current-migration-note]

The deeper Online KTV source materials already exist in this repository, but the legacy multi-level MDX content still depends on older portal components. This product directory is the stable new-site entry point while that deeper content is being migrated.
`;
export let structuredData = {
  contents: [{
    heading: "what-this-product-covers",
    content: "Online KTV combines real-time audio interaction, room coordination, music-content workflows, and karaoke-specific experience design into one product surface."
  }, {
    heading: "product-paths",
    content: "Scenario API"
  }, {
    heading: "product-paths",
    content: "PaaS SDK"
  }, {
    heading: "product-paths",
    content: "UIKit Open Source"
  }, {
    heading: "recommended-reading-path",
    content: "Start with the path that best matches your integration model."
  }, {
    heading: "recommended-reading-path",
    content: "Validate whether you need a scene-oriented API, a lower-level PaaS path, or a UIKit-based fast-start approach."
  }, {
    heading: "recommended-reading-path",
    content: "Expand into detailed implementation docs as the legacy KTV content is normalized into this new product directory."
  }, {
    heading: "current-migration-note",
    content: "The deeper Online KTV source materials already exist in this repository, but the legacy multi-level MDX content still depends on older portal components. This product directory is the stable new-site entry point while that deeper content is being migrated."
  }],
  headings: [{
    id: "what-this-product-covers",
    content: "What this product covers"
  }, {
    id: "product-paths",
    content: "Product paths"
  }, {
    id: "recommended-reading-path",
    content: "Recommended reading path"
  }, {
    id: "current-migration-note",
    content: "Current migration note"
  }]
};
export let toc = [{
  depth: 2,
  url: "#what-this-product-covers",
  title: _jsx(_Fragment, {
    children: "What this product covers"
  })
}, {
  depth: 2,
  url: "#product-paths",
  title: _jsx(_Fragment, {
    children: "Product paths"
  })
}, {
  depth: 2,
  url: "#recommended-reading-path",
  title: _jsx(_Fragment, {
    children: "Recommended reading path"
  })
}, {
  depth: 2,
  url: "#current-migration-note",
  title: _jsx(_Fragment, {
    children: "Current migration note"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "what-this-product-covers",
      children: "What this product covers"
    }), `
`, _jsx(_components.p, {
      children: "Online KTV combines real-time audio interaction, room coordination, music-content workflows, and karaoke-specific experience design into one product surface."
    }), `
`, _jsx(_components.h2, {
      id: "product-paths",
      children: "Product paths"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "scenario-api.md",
          children: "Scenario API"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "paas-sdk.md",
          children: "PaaS SDK"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "uikit.md",
          children: "UIKit Open Source"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "recommended-reading-path",
      children: "Recommended reading path"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Start with the path that best matches your integration model."
      }), `
`, _jsx(_components.li, {
        children: "Validate whether you need a scene-oriented API, a lower-level PaaS path, or a UIKit-based fast-start approach."
      }), `
`, _jsx(_components.li, {
        children: "Expand into detailed implementation docs as the legacy KTV content is normalized into this new product directory."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "current-migration-note",
      children: "Current migration note"
    }), `
`, _jsx(_components.p, {
      children: "The deeper Online KTV source materials already exist in this repository, but the legacy multi-level MDX content still depends on older portal components. This product directory is the stable new-site entry point while that deeper content is being migrated."
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
