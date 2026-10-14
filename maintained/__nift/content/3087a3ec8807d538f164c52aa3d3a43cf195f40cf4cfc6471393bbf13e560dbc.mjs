import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Flexible Classroom overview",
  description: "A low-code solution that allows you to rapidly build scalable online classrooms of any size."
};
export let _markdown = `

Agora's Flexible Classroom solution enables real-time, interactive virtual learning experiences. With features like video, audio, screen sharing, and messaging, it’s adaptable to a wide range of educational use-cases. Built on Agora’s low-latency, scalable platform, it provides a customizable foundation for creating engaging and collaborative online learning environments.

Scalable for one-on-one tutoring, group discussions, or large lecture halls, Flexible Classroom adapts to your specific needs. Customize the classroom experience with branded designs, tailored workflows, and role-based permissions. Advanced tools like attendance tracking, interactive features, and secure data handling ensure a seamless and engaging learning environment on web, desktop, or mobile platforms.

## Start building [#start-building]

<Cards>
  <Card title="SDK quickstart" href="./quickstart.mdx" description="Create and run a basic Flexible Classroom experience." />

  <Card title="API reference" href="/en/api-reference/api-ref/flexible-classroom/classroom-rest-api" description="Explore Flexible Classroom APIs and related references." />

  <Card title="Samples" href="./reference/downloads.md" description="Download sample projects and classroom resources." />
</Cards>

## Product Features [#product-features]

<CardGrid>
  <FeatureCard title="Scalable">
    Easily support one-to-one, small groups, or very large, collaborative lecture halls based on your business requirements.
  </FeatureCard>

  <FeatureCard title="Branding and design">
    Deploy an online classroom solution that is custom-branded and designed.
  </FeatureCard>

  <FeatureCard title="Flexible customization">
    Tailor features and business logic to best suit your needs, whether on web, desktop, or mobile.
  </FeatureCard>

  <FeatureCard title="Classroom management">
    Easily manage classrooms and events, recordings, public resources, and user roles and permissions.
  </FeatureCard>

  <FeatureCard title="Security and data privacy">
    Agora is certified to the ISO and SOC 2 information security standards and meets privacy regulations like GDPR.
  </FeatureCard>

  <FeatureCard title="Attendance and engagement tracking">
    Track student attendance and monitor online participation like hand raise, live polling, pop-up quizzes, and whiteboard annotation.
  </FeatureCard>
</CardGrid>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora's Flexible Classroom solution enables real-time, interactive virtual learning experiences. With features like video, audio, screen sharing, and messaging, it’s adaptable to a wide range of educational use-cases. Built on Agora’s low-latency, scalable platform, it provides a customizable foundation for creating engaging and collaborative online learning environments."
  }, {
    heading: undefined,
    content: "Scalable for one-on-one tutoring, group discussions, or large lecture halls, Flexible Classroom adapts to your specific needs. Customize the classroom experience with branded designs, tailored workflows, and role-based permissions. Advanced tools like attendance tracking, interactive features, and secure data handling ensure a seamless and engaging learning environment on web, desktop, or mobile platforms."
  }, {
    heading: "start-building",
    content: '<Card title="SDK quickstart" href="./quickstart.mdx" description="Create and run a basic Flexible Classroom experience." />'
  }, {
    heading: "start-building",
    content: '<Card title="API reference" href="/en/api-reference/api-ref/flexible-classroom/classroom-rest-api" description="Explore Flexible Classroom APIs and related references." />'
  }, {
    heading: "start-building",
    content: '<Card title="Samples" href="./reference/downloads.md" description="Download sample projects and classroom resources." />'
  }, {
    heading: "product-features",
    content: "Easily support one-to-one, small groups, or very large, collaborative lecture halls based on your business requirements."
  }, {
    heading: "product-features",
    content: "Deploy an online classroom solution that is custom-branded and designed."
  }, {
    heading: "product-features",
    content: "Tailor features and business logic to best suit your needs, whether on web, desktop, or mobile."
  }, {
    heading: "product-features",
    content: "Easily manage classrooms and events, recordings, public resources, and user roles and permissions."
  }, {
    heading: "product-features",
    content: "Agora is certified to the ISO and SOC 2 information security standards and meets privacy regulations like GDPR."
  }, {
    heading: "product-features",
    content: "Track student attendance and monitor online participation like hand raise, live polling, pop-up quizzes, and whiteboard annotation."
  }],
  headings: [{
    id: "start-building",
    content: "Start building"
  }, {
    id: "product-features",
    content: "Product Features"
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
    children: "Product Features"
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
      children: "Agora's Flexible Classroom solution enables real-time, interactive virtual learning experiences. With features like video, audio, screen sharing, and messaging, it’s adaptable to a wide range of educational use-cases. Built on Agora’s low-latency, scalable platform, it provides a customizable foundation for creating engaging and collaborative online learning environments."
    }), `
`, _jsx(_components.p, {
      children: "Scalable for one-on-one tutoring, group discussions, or large lecture halls, Flexible Classroom adapts to your specific needs. Customize the classroom experience with branded designs, tailored workflows, and role-based permissions. Advanced tools like attendance tracking, interactive features, and secure data handling ensure a seamless and engaging learning environment on web, desktop, or mobile platforms."
    }), `
`, _jsx(_components.h2, {
      id: "start-building",
      children: "Start building"
    }), `
`, _jsxs(Cards, {
      children: [_jsx(Card, {
        title: "SDK quickstart",
        href: "./quickstart.mdx",
        description: "Create and run a basic Flexible Classroom experience."
      }), _jsx(Card, {
        title: "API reference",
        href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api",
        description: "Explore Flexible Classroom APIs and related references."
      }), _jsx(Card, {
        title: "Samples",
        href: "./reference/downloads.md",
        description: "Download sample projects and classroom resources."
      })]
    }), `
`, _jsx(_components.h2, {
      id: "product-features",
      children: "Product Features"
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "Scalable",
        children: _jsx(_components.p, {
          children: "Easily support one-to-one, small groups, or very large, collaborative lecture halls based on your business requirements."
        })
      }), _jsx(FeatureCard, {
        title: "Branding and design",
        children: _jsx(_components.p, {
          children: "Deploy an online classroom solution that is custom-branded and designed."
        })
      }), _jsx(FeatureCard, {
        title: "Flexible customization",
        children: _jsx(_components.p, {
          children: "Tailor features and business logic to best suit your needs, whether on web, desktop, or mobile."
        })
      }), _jsx(FeatureCard, {
        title: "Classroom management",
        children: _jsx(_components.p, {
          children: "Easily manage classrooms and events, recordings, public resources, and user roles and permissions."
        })
      }), _jsx(FeatureCard, {
        title: "Security and data privacy",
        children: _jsx(_components.p, {
          children: "Agora is certified to the ISO and SOC 2 information security standards and meets privacy regulations like GDPR."
        })
      }), _jsx(FeatureCard, {
        title: "Attendance and engagement tracking",
        children: _jsx(_components.p, {
          children: "Track student attendance and monitor online participation like hand raise, live polling, pop-up quizzes, and whiteboard annotation."
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
