import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Usage Analytics",
  description: "Track usage, quality, performance, alerts, and embedded analytics across Agora products."
};
export let _markdown = `

![Analytics overview](https://assets-docs.agora.io/images/analytics/analytics-overview.png)

Agora Analytics tracks and analyzes the usage, quality, and performance of real-time voice, video, live streaming, chat, and other Agora products.

## Features [#features]

* **Call Inspector**: identify, analyze, and respond to performance quality issues with detailed call and user metrics.
* **Data Insights**: periodic call usage and quality statistics.
* **Real Time Monitoring**: visualized data for multiple call metrics in real time.
* **Alert notifications**: alerts when abnormal metrics or events are detected.
* **RESTful APIs**: retrieve call statistics and quality metrics for your own application or DataOps workflow.
* **Embedding**: embed Analytics pages in internal web portals using a low-code approach.

## Console usage page [#console-usage-page]

The Console **Usage** page lets you check usage for the past 12 months.

You can:

* Select a time frame and data granularity.
* Filter by all projects or a specific project.
* Select a product.
* Turn on **View Breakdown**.

Only **Admin**, **Product/Operation**, and authorized custom teams can access the **Usage** page.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora Analytics tracks and analyzes the usage, quality, and performance of real-time voice, video, live streaming, chat, and other Agora products."
  }, {
    heading: "features",
    content: "**Call Inspector**: identify, analyze, and respond to performance quality issues with detailed call and user metrics."
  }, {
    heading: "features",
    content: "**Data Insights**: periodic call usage and quality statistics."
  }, {
    heading: "features",
    content: "**Real Time Monitoring**: visualized data for multiple call metrics in real time."
  }, {
    heading: "features",
    content: "**Alert notifications**: alerts when abnormal metrics or events are detected."
  }, {
    heading: "features",
    content: "**RESTful APIs**: retrieve call statistics and quality metrics for your own application or DataOps workflow."
  }, {
    heading: "features",
    content: "**Embedding**: embed Analytics pages in internal web portals using a low-code approach."
  }, {
    heading: "console-usage-page",
    content: "The Console **Usage** page lets you check usage for the past 12 months."
  }, {
    heading: "console-usage-page",
    content: "You can:"
  }, {
    heading: "console-usage-page",
    content: "Select a time frame and data granularity."
  }, {
    heading: "console-usage-page",
    content: "Filter by all projects or a specific project."
  }, {
    heading: "console-usage-page",
    content: "Select a product."
  }, {
    heading: "console-usage-page",
    content: "Turn on **View Breakdown**."
  }, {
    heading: "console-usage-page",
    content: "Only **Admin**, **Product/Operation**, and authorized custom teams can access the **Usage** page."
  }],
  headings: [{
    id: "features",
    content: "Features"
  }, {
    id: "console-usage-page",
    content: "Console usage page"
  }]
};
export let toc = [{
  depth: 2,
  url: "#features",
  title: _jsx(_Fragment, {
    children: "Features"
  })
}, {
  depth: 2,
  url: "#console-usage-page",
  title: _jsx(_Fragment, {
    children: "Console usage page"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/analytics-overview.png",
        alt: "Analytics overview"
      })
    }), `
`, _jsx(_components.p, {
      children: "Agora Analytics tracks and analyzes the usage, quality, and performance of real-time voice, video, live streaming, chat, and other Agora products."
    }), `
`, _jsx(_components.h2, {
      id: "features",
      children: "Features"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Call Inspector"
        }), ": identify, analyze, and respond to performance quality issues with detailed call and user metrics."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Data Insights"
        }), ": periodic call usage and quality statistics."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Real Time Monitoring"
        }), ": visualized data for multiple call metrics in real time."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Alert notifications"
        }), ": alerts when abnormal metrics or events are detected."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "RESTful APIs"
        }), ": retrieve call statistics and quality metrics for your own application or DataOps workflow."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Embedding"
        }), ": embed Analytics pages in internal web portals using a low-code approach."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "console-usage-page",
      children: "Console usage page"
    }), `
`, _jsxs(_components.p, {
      children: ["The Console ", _jsx(_components.strong, {
        children: "Usage"
      }), " page lets you check usage for the past 12 months."]
    }), `
`, _jsx(_components.p, {
      children: "You can:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Select a time frame and data granularity."
      }), `
`, _jsx(_components.li, {
        children: "Filter by all projects or a specific project."
      }), `
`, _jsx(_components.li, {
        children: "Select a product."
      }), `
`, _jsxs(_components.li, {
        children: ["Turn on ", _jsx(_components.strong, {
          children: "View Breakdown"
        }), "."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Only ", _jsx(_components.strong, {
        children: "Admin"
      }), ", ", _jsx(_components.strong, {
        children: "Product/Operation"
      }), ", and authorized custom teams can access the ", _jsx(_components.strong, {
        children: "Usage"
      }), " page."]
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
