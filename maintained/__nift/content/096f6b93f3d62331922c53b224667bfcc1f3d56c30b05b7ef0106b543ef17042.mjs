import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Pricing",
  description: "Pricing information for On-Premise Recording."
};
export let _markdown = `

This page summarizes the pricing model for On-Premise Recording based on the legacy source document.

Agora bills On-Premise Recording by recorded usage time. Audio and video are charged separately, and video pricing depends on aggregate recorded resolution. If a recording instance captures both audio and video at the same time, Agora charges video minutes for that interval.

## Key points [#key-points]

* Billing is calculated monthly for projects under your Agora account.
* Audio-only recording is billed by audio minutes.
* Video recording is billed by video minutes and resolution tier.
* Idle time during a recording session is billed at the audio rate.

## Related pages [#related-pages]

* [Billing policies](./reference/pricing.mdx)
* [Manage your Agora account](/en/introduction/account)
* [On-Premise Recording API reference](/en/api-reference/api-ref/on-premise-recording)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page summarizes the pricing model for On-Premise Recording based on the legacy source document."
  }, {
    heading: undefined,
    content: "Agora bills On-Premise Recording by recorded usage time. Audio and video are charged separately, and video pricing depends on aggregate recorded resolution. If a recording instance captures both audio and video at the same time, Agora charges video minutes for that interval."
  }, {
    heading: "key-points",
    content: "Billing is calculated monthly for projects under your Agora account."
  }, {
    heading: "key-points",
    content: "Audio-only recording is billed by audio minutes."
  }, {
    heading: "key-points",
    content: "Video recording is billed by video minutes and resolution tier."
  }, {
    heading: "key-points",
    content: "Idle time during a recording session is billed at the audio rate."
  }, {
    heading: "related-pages",
    content: "Billing policies"
  }, {
    heading: "related-pages",
    content: "Manage your Agora account"
  }, {
    heading: "related-pages",
    content: "On-Premise Recording API reference"
  }],
  headings: [{
    id: "key-points",
    content: "Key points"
  }, {
    id: "related-pages",
    content: "Related pages"
  }]
};
export let toc = [{
  depth: 2,
  url: "#key-points",
  title: _jsx(_Fragment, {
    children: "Key points"
  })
}, {
  depth: 2,
  url: "#related-pages",
  title: _jsx(_Fragment, {
    children: "Related pages"
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
      children: "This page summarizes the pricing model for On-Premise Recording based on the legacy source document."
    }), `
`, _jsx(_components.p, {
      children: "Agora bills On-Premise Recording by recorded usage time. Audio and video are charged separately, and video pricing depends on aggregate recorded resolution. If a recording instance captures both audio and video at the same time, Agora charges video minutes for that interval."
    }), `
`, _jsx(_components.h2, {
      id: "key-points",
      children: "Key points"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Billing is calculated monthly for projects under your Agora account."
      }), `
`, _jsx(_components.li, {
        children: "Audio-only recording is billed by audio minutes."
      }), `
`, _jsx(_components.li, {
        children: "Video recording is billed by video minutes and resolution tier."
      }), `
`, _jsx(_components.li, {
        children: "Idle time during a recording session is billed at the audio rate."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "related-pages",
      children: "Related pages"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "./reference/pricing.mdx",
          children: "Billing policies"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/introduction/account",
          children: "Manage your Agora account"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/on-premise-recording",
          children: "On-Premise Recording API reference"
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
