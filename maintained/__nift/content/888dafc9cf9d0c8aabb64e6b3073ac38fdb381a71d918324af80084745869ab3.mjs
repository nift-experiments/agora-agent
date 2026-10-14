import { jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  analyticsPageType: "navigation-landing",
  title: "Reference overview",
  description: "Everything you need to build with Agora — SDKs, API references, recipes, and answers.",
  hideToc: true
};
export let _markdown = `

<div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
  <SolutionCard title="SDKs" href="/en/api-reference/sdks" icon="tools" description="Install Agora SDKs by platform, product, and version." />

  <SolutionCard title="API Reference" href="/en/api-reference/api-ref" icon="server-sdk" description="SDK class references and REST API references for every Agora product." />

  <SolutionCard title="Recipes" href="/en/api-reference/recipes" icon="ai" description="Runnable examples, integration patterns, and use cases." />

  <SolutionCard title="FAQ" href="/en/api-reference/faq" icon="messaging" description="Solutions to the most frequently encountered issues." />
</div>
`;
export let structuredData = {
  contents: [],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const { SolutionCard } = props.components || {};
  if (!SolutionCard)
    _missingMdxReference("SolutionCard", true);
  return _jsxs("div", {
    className: "not-prose my-8 grid gap-4 sm:grid-cols-2",
    children: [_jsx(SolutionCard, {
      title: "SDKs",
      href: "/en/api-reference/sdks",
      icon: "tools",
      description: "Install Agora SDKs by platform, product, and version."
    }), _jsx(SolutionCard, {
      title: "API Reference",
      href: "/en/api-reference/api-ref",
      icon: "server-sdk",
      description: "SDK class references and REST API references for every Agora product."
    }), _jsx(SolutionCard, {
      title: "Recipes",
      href: "/en/api-reference/recipes",
      icon: "ai",
      description: "Runnable examples, integration patterns, and use cases."
    }), _jsx(SolutionCard, {
      title: "FAQ",
      href: "/en/api-reference/faq",
      icon: "messaging",
      description: "Solutions to the most frequently encountered issues."
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
