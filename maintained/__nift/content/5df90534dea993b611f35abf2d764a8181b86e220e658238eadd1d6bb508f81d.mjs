import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Extensions Marketplace overview",
  description: "Extend the functionality of live voice and video streaming SDKs with first-party and third-party extensions."
};
export let _markdown = `

Agora's Extensions Marketplace makes it simple to extend the functionality of live voice and video streaming SDKs. With first-party extensions and third-party solutions from industry-leading partners, you can add advanced capabilities like noise cancelation, face filters, and voice effects with just a few lines of code.

Extensions Marketplace streamlines feature discovery, activation, and integration with unified billing, allowing you to enhance your applications without added complexity. Whether you're building for social, education, or enterprise use-cases, Extensions Marketplace empowers you to create richer, more interactive experiences.

## Product features [#product-features]

<CardGrid>
  <FeatureCard title="Discovery">
    Browse the Extensions Gallery to find specific functionality or get inspired by new extensions.
  </FeatureCard>

  <FeatureCard title="Easy integration">
    Activate and integrate new functionality with a click and a few lines of code.
  </FeatureCard>

  <FeatureCard title="Faster time to market">
    Get to market faster by instantly adding advanced features to your app without having to build them.
  </FeatureCard>

  <FeatureCard title="Simple pricing and billing">
    Pricing is straightforward and you can pay for all of your extensions in one unified interface.
  </FeatureCard>

  <FeatureCard title="Easy management">
    Manage the activation status of your extensions from one place in the Agora Console.
  </FeatureCard>

  <FeatureCard title="Unlimited extensibility">
    Add as many extensions as you want to customize and extend the functionality of your experience.
  </FeatureCard>
</CardGrid>

## Start building [#start-building]

<Cards>
  <Card title="API reference" href="/en/api-reference/api-ref/rtc" description="Explore related RTC APIs used by Extensions Marketplace integrations." />

  <Card title="Samples" href="https://github.com/AgoraIO/API-Examples/tree/main/Android/APIExample/agora-simple-filter" description="Browse sample projects for extension integration." />
</Cards>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora's Extensions Marketplace makes it simple to extend the functionality of live voice and video streaming SDKs. With first-party extensions and third-party solutions from industry-leading partners, you can add advanced capabilities like noise cancelation, face filters, and voice effects with just a few lines of code."
  }, {
    heading: undefined,
    content: "Extensions Marketplace streamlines feature discovery, activation, and integration with unified billing, allowing you to enhance your applications without added complexity. Whether you're building for social, education, or enterprise use-cases, Extensions Marketplace empowers you to create richer, more interactive experiences."
  }, {
    heading: "product-features",
    content: "Browse the Extensions Gallery to find specific functionality or get inspired by new extensions."
  }, {
    heading: "product-features",
    content: "Activate and integrate new functionality with a click and a few lines of code."
  }, {
    heading: "product-features",
    content: "Get to market faster by instantly adding advanced features to your app without having to build them."
  }, {
    heading: "product-features",
    content: "Pricing is straightforward and you can pay for all of your extensions in one unified interface."
  }, {
    heading: "product-features",
    content: "Manage the activation status of your extensions from one place in the Agora Console."
  }, {
    heading: "product-features",
    content: "Add as many extensions as you want to customize and extend the functionality of your experience."
  }, {
    heading: "start-building",
    content: '<Card title="API reference" href="/en/api-reference/api-ref/rtc" description="Explore related RTC APIs used by Extensions Marketplace integrations." />'
  }, {
    heading: "start-building",
    content: '<Card title="Samples" href="https://github.com/AgoraIO/API-Examples/tree/main/Android/APIExample/agora-simple-filter" description="Browse sample projects for extension integration." />'
  }],
  headings: [{
    id: "product-features",
    content: "Product features"
  }, {
    id: "start-building",
    content: "Start building"
  }]
};
export let toc = [{
  depth: 2,
  url: "#product-features",
  title: _jsx(_Fragment, {
    children: "Product features"
  })
}, {
  depth: 2,
  url: "#start-building",
  title: _jsx(_Fragment, {
    children: "Start building"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  }, { Card, CardGrid, Cards, FeatureCard } = _components;
  if (!Card)
    _missingMdxReference("Card", true);
  if (!CardGrid)
    _missingMdxReference("CardGrid", true);
  if (!Cards)
    _missingMdxReference("Cards", true);
  if (!FeatureCard)
    _missingMdxReference("FeatureCard", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora's Extensions Marketplace makes it simple to extend the functionality of live voice and video streaming SDKs. With first-party extensions and third-party solutions from industry-leading partners, you can add advanced capabilities like noise cancelation, face filters, and voice effects with just a few lines of code."
    }), `
`, _jsx(_components.p, {
      children: "Extensions Marketplace streamlines feature discovery, activation, and integration with unified billing, allowing you to enhance your applications without added complexity. Whether you're building for social, education, or enterprise use-cases, Extensions Marketplace empowers you to create richer, more interactive experiences."
    }), `
`, _jsx(_components.h2, {
      id: "product-features",
      children: "Product features"
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "Discovery",
        children: _jsx(_components.p, {
          children: "Browse the Extensions Gallery to find specific functionality or get inspired by new extensions."
        })
      }), _jsx(FeatureCard, {
        title: "Easy integration",
        children: _jsx(_components.p, {
          children: "Activate and integrate new functionality with a click and a few lines of code."
        })
      }), _jsx(FeatureCard, {
        title: "Faster time to market",
        children: _jsx(_components.p, {
          children: "Get to market faster by instantly adding advanced features to your app without having to build them."
        })
      }), _jsx(FeatureCard, {
        title: "Simple pricing and billing",
        children: _jsx(_components.p, {
          children: "Pricing is straightforward and you can pay for all of your extensions in one unified interface."
        })
      }), _jsx(FeatureCard, {
        title: "Easy management",
        children: _jsx(_components.p, {
          children: "Manage the activation status of your extensions from one place in the Agora Console."
        })
      }), _jsx(FeatureCard, {
        title: "Unlimited extensibility",
        children: _jsx(_components.p, {
          children: "Add as many extensions as you want to customize and extend the functionality of your experience."
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "start-building",
      children: "Start building"
    }), `
`, _jsxs(Cards, {
      children: [_jsx(Card, {
        title: "API reference",
        href: "/en/api-reference/api-ref/rtc",
        description: "Explore related RTC APIs used by Extensions Marketplace integrations."
      }), _jsx(Card, {
        title: "Samples",
        href: "https://github.com/AgoraIO/API-Examples/tree/main/Android/APIExample/agora-simple-filter",
        description: "Browse sample projects for extension integration."
      })]
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
