import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Interactive Whiteboard overview",
  description: "Enables developers to integrate real-time visual collaboration features into their applications."
};
export let _markdown = `

Agora's Interactive Whiteboard SDK enables real-time visual collaboration with features like drawing, annotation, and document sharing on a shared digital canvas. Fully customizable for diverse use cases, it integrates seamlessly with voice, video, and live streaming to enhance remote learning, brainstorming sessions, and collaborative meetings.

For fast integration, Agora Fastboard provides a prebuilt whiteboard experience with a default UI, enabling quick deployment and reducing development time.

## Start building [#start-building]

<Cards>
  <Card title="SDK quickstart" href="./build/set-up-and-build-your-first-app/get-started-sdk.mdx" description="Integrate Interactive Whiteboard SDK and join a room." />

  <Card title="Download SDKs" href="/en/api-reference/sdks?product=whiteboard" description="Get Interactive Whiteboard or Fastboard SDK packages." />

  <Card title="Fastboard quickstart" href="./build/set-up-and-build-your-first-app/get-started-uikit.mdx" description="Start faster with the prebuilt Fastboard experience." />

  <Card title="Authentication" href="./build/authenticate-users/authentication-workflow.md" description="Generate and use tokens for secure whiteboard rooms." />

  <Card title="API reference" href="/en/api-reference/api-ref/whiteboard" description="Explore Whiteboard API references and service APIs." />

  <Card title="Samples and demos" href="./reference/downloads.md" description="Download demos and sample projects." />
</Cards>

## Product features [#product-features]

<CardGrid>
  <FeatureCard title="Editing and room tools">
    Includes standard tools for drawing, writing, notations, and erasing, as well as advanced tools for content sharing, multi-user editing, control, room management, and more.
  </FeatureCard>

  <FeatureCard title="File conversion">
    Server-side file conversion transcodes files for presentation on the whiteboard, including support for converting PPT, PPTX, Word, and PDF files to images, and PPTX files to web pages.
  </FeatureCard>

  <FeatureCard title="Extensions">
    Powerful extensions in netless-app help extend the functionality of your whiteboard experience and window-manager can be used to load and manage extensions on the whiteboard.
  </FeatureCard>

  <FeatureCard title="SDK options">
    Choose from two SDKs: Interactive Whiteboard SDK allows experienced developers to provide substantial customization while Fastboard SDK provides a ready-to-use UI for a faster build.
  </FeatureCard>

  <FeatureCard title="RESTful APIs">
    RESTful APIs provide token generation, room management, screenshot management, scene management, and file conversion features.
  </FeatureCard>

  <FeatureCard title="Stability and reliability">
    Agora's globally distributed and clustered server system and backup and disaster recovery plans work together to guarantee high availability of the whiteboard service.
  </FeatureCard>
</CardGrid>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora's Interactive Whiteboard SDK enables real-time visual collaboration with features like drawing, annotation, and document sharing on a shared digital canvas. Fully customizable for diverse use cases, it integrates seamlessly with voice, video, and live streaming to enhance remote learning, brainstorming sessions, and collaborative meetings."
  }, {
    heading: undefined,
    content: "For fast integration, Agora Fastboard provides a prebuilt whiteboard experience with a default UI, enabling quick deployment and reducing development time."
  }, {
    heading: "start-building",
    content: '<Card title="SDK quickstart" href="./build/set-up-and-build-your-first-app/get-started-sdk.mdx" description="Integrate Interactive Whiteboard SDK and join a room." />'
  }, {
    heading: "start-building",
    content: '<Card title="Download SDKs" href="/en/api-reference/sdks?product=whiteboard" description="Get Interactive Whiteboard or Fastboard SDK packages." />'
  }, {
    heading: "start-building",
    content: '<Card title="Fastboard quickstart" href="./build/set-up-and-build-your-first-app/get-started-uikit.mdx" description="Start faster with the prebuilt Fastboard experience." />'
  }, {
    heading: "start-building",
    content: '<Card title="Authentication" href="./build/authenticate-users/authentication-workflow.md" description="Generate and use tokens for secure whiteboard rooms." />'
  }, {
    heading: "start-building",
    content: '<Card title="API reference" href="/en/api-reference/api-ref/whiteboard" description="Explore Whiteboard API references and service APIs." />'
  }, {
    heading: "start-building",
    content: '<Card title="Samples and demos" href="./reference/downloads.md" description="Download demos and sample projects." />'
  }, {
    heading: "product-features",
    content: "Includes standard tools for drawing, writing, notations, and erasing, as well as advanced tools for content sharing, multi-user editing, control, room management, and more."
  }, {
    heading: "product-features",
    content: "Server-side file conversion transcodes files for presentation on the whiteboard, including support for converting PPT, PPTX, Word, and PDF files to images, and PPTX files to web pages."
  }, {
    heading: "product-features",
    content: "Powerful extensions in netless-app help extend the functionality of your whiteboard experience and window-manager can be used to load and manage extensions on the whiteboard."
  }, {
    heading: "product-features",
    content: "Choose from two SDKs: Interactive Whiteboard SDK allows experienced developers to provide substantial customization while Fastboard SDK provides a ready-to-use UI for a faster build."
  }, {
    heading: "product-features",
    content: "RESTful APIs provide token generation, room management, screenshot management, scene management, and file conversion features."
  }, {
    heading: "product-features",
    content: "Agora's globally distributed and clustered server system and backup and disaster recovery plans work together to guarantee high availability of the whiteboard service."
  }],
  headings: [{
    id: "start-building",
    content: "Start building"
  }, {
    id: "product-features",
    content: "Product features"
  }]
};
export let toc = [{
  depth: 2,
  url: "#start-building",
  title: _jsx(_Fragment, {
    children: "Start building"
  })
}, {
  depth: 2,
  url: "#product-features",
  title: _jsx(_Fragment, {
    children: "Product features"
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
      children: "Agora's Interactive Whiteboard SDK enables real-time visual collaboration with features like drawing, annotation, and document sharing on a shared digital canvas. Fully customizable for diverse use cases, it integrates seamlessly with voice, video, and live streaming to enhance remote learning, brainstorming sessions, and collaborative meetings."
    }), `
`, _jsx(_components.p, {
      children: "For fast integration, Agora Fastboard provides a prebuilt whiteboard experience with a default UI, enabling quick deployment and reducing development time."
    }), `
`, _jsx(_components.h2, {
      id: "start-building",
      children: "Start building"
    }), `
`, _jsxs(Cards, {
      children: [_jsx(Card, {
        title: "SDK quickstart",
        href: "./build/set-up-and-build-your-first-app/get-started-sdk.mdx",
        description: "Integrate Interactive Whiteboard SDK and join a room."
      }), _jsx(Card, {
        title: "Download SDKs",
        href: "/en/api-reference/sdks?product=whiteboard",
        description: "Get Interactive Whiteboard or Fastboard SDK packages."
      }), _jsx(Card, {
        title: "Fastboard quickstart",
        href: "./build/set-up-and-build-your-first-app/get-started-uikit.mdx",
        description: "Start faster with the prebuilt Fastboard experience."
      }), _jsx(Card, {
        title: "Authentication",
        href: "./build/authenticate-users/authentication-workflow.md",
        description: "Generate and use tokens for secure whiteboard rooms."
      }), _jsx(Card, {
        title: "API reference",
        href: "/en/api-reference/api-ref/whiteboard",
        description: "Explore Whiteboard API references and service APIs."
      }), _jsx(Card, {
        title: "Samples and demos",
        href: "./reference/downloads.md",
        description: "Download demos and sample projects."
      })]
    }), `
`, _jsx(_components.h2, {
      id: "product-features",
      children: "Product features"
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "Editing and room tools",
        children: _jsx(_components.p, {
          children: "Includes standard tools for drawing, writing, notations, and erasing, as well as advanced tools for content sharing, multi-user editing, control, room management, and more."
        })
      }), _jsx(FeatureCard, {
        title: "File conversion",
        children: _jsx(_components.p, {
          children: "Server-side file conversion transcodes files for presentation on the whiteboard, including support for converting PPT, PPTX, Word, and PDF files to images, and PPTX files to web pages."
        })
      }), _jsx(FeatureCard, {
        title: "Extensions",
        children: _jsx(_components.p, {
          children: "Powerful extensions in netless-app help extend the functionality of your whiteboard experience and window-manager can be used to load and manage extensions on the whiteboard."
        })
      }), _jsx(FeatureCard, {
        title: "SDK options",
        children: _jsx(_components.p, {
          children: "Choose from two SDKs: Interactive Whiteboard SDK allows experienced developers to provide substantial customization while Fastboard SDK provides a ready-to-use UI for a faster build."
        })
      }), _jsx(FeatureCard, {
        title: "RESTful APIs",
        children: _jsx(_components.p, {
          children: "RESTful APIs provide token generation, room management, screenshot management, scene management, and file conversion features."
        })
      }), _jsx(FeatureCard, {
        title: "Stability and reliability",
        children: _jsx(_components.p, {
          children: "Agora's globally distributed and clustered server system and backup and disaster recovery plans work together to guarantee high availability of the whiteboard service."
        })
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
