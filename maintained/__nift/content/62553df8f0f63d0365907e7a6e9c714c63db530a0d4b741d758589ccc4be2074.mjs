import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Set up service and credentials",
  description: "Before entering any specific real-time or media capability, prepare Console access, project setup, and credential strategy."
};
export let _markdown = `

## Why this always comes first [#why-this-always-comes-first]

No matter whether you end up building AI, RTC, RTM, recording, or transcoding, the first step is rarely "write code." It is usually confirming Console access, project state, App ID, credentials, and authentication.

## What you should prepare [#what-you-should-prepare]

* project and App ID
* customer ID and customer secret
* token generation strategy
* service enablement status
* the boundary between test and production environments

## Recommended practice [#recommended-practice]

Prepare the control plane and credential flow first, then move into product-specific docs. That prevents expensive rework when permissions, quotas, or auth assumptions diverge later.
`;
export let structuredData = {
  contents: [{
    heading: "why-this-always-comes-first",
    content: 'No matter whether you end up building AI, RTC, RTM, recording, or transcoding, the first step is rarely "write code." It is usually confirming Console access, project state, App ID, credentials, and authentication.'
  }, {
    heading: "what-you-should-prepare",
    content: "project and App ID"
  }, {
    heading: "what-you-should-prepare",
    content: "customer ID and customer secret"
  }, {
    heading: "what-you-should-prepare",
    content: "token generation strategy"
  }, {
    heading: "what-you-should-prepare",
    content: "service enablement status"
  }, {
    heading: "what-you-should-prepare",
    content: "the boundary between test and production environments"
  }, {
    heading: "recommended-practice",
    content: "Prepare the control plane and credential flow first, then move into product-specific docs. That prevents expensive rework when permissions, quotas, or auth assumptions diverge later."
  }],
  headings: [{
    id: "why-this-always-comes-first",
    content: "Why this always comes first"
  }, {
    id: "what-you-should-prepare",
    content: "What you should prepare"
  }, {
    id: "recommended-practice",
    content: "Recommended practice"
  }]
};
export let toc = [{
  depth: 2,
  url: "#why-this-always-comes-first",
  title: _jsx(_Fragment, {
    children: "Why this always comes first"
  })
}, {
  depth: 2,
  url: "#what-you-should-prepare",
  title: _jsx(_Fragment, {
    children: "What you should prepare"
  })
}, {
  depth: 2,
  url: "#recommended-practice",
  title: _jsx(_Fragment, {
    children: "Recommended practice"
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
      id: "why-this-always-comes-first",
      children: "Why this always comes first"
    }), `
`, _jsx(_components.p, {
      children: 'No matter whether you end up building AI, RTC, RTM, recording, or transcoding, the first step is rarely "write code." It is usually confirming Console access, project state, App ID, credentials, and authentication.'
    }), `
`, _jsx(_components.h2, {
      id: "what-you-should-prepare",
      children: "What you should prepare"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "project and App ID"
      }), `
`, _jsx(_components.li, {
        children: "customer ID and customer secret"
      }), `
`, _jsx(_components.li, {
        children: "token generation strategy"
      }), `
`, _jsx(_components.li, {
        children: "service enablement status"
      }), `
`, _jsx(_components.li, {
        children: "the boundary between test and production environments"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "recommended-practice",
      children: "Recommended practice"
    }), `
`, _jsx(_components.p, {
      children: "Prepare the control plane and credential flow first, then move into product-specific docs. That prevents expensive rework when permissions, quotas, or auth assumptions diverge later."
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
