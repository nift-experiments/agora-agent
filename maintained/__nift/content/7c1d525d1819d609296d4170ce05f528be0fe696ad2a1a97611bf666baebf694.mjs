import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Service limits",
  description: "The service limits imposed by Agora"
};
export let _markdown = `

Video Calling usage is subject to service limits. Regularly monitor the Peak Concurrent Users (PCU) and bandwidth usage of your project to ensure these remain within the quota benchmarks, preventing disruptions to service. If your business growth requires higher quotas, contact Agora [technical support](mailto\\:support@agora.io).

## Quota benchmarks by region [#quota-benchmarks-by-region]

For basic real-time interaction use-cases, the quota benchmark is considered reached when either the PCU or bandwidth usage meets the specified limits.

| Item      | America | Europe  | Asia    | China   |
| :-------- | :------ | :------ | :------ | :------ |
| PCU       | 10,000  | 10,000  | 10,000  | 10,000  |
| Bandwidth | 10 Gbps | 10 Gbps | 10 Gbps | 10 Gbps |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Video Calling usage is subject to service limits. Regularly monitor the Peak Concurrent Users (PCU) and bandwidth usage of your project to ensure these remain within the quota benchmarks, preventing disruptions to service. If your business growth requires higher quotas, contact Agora technical support."
  }, {
    heading: "quota-benchmarks-by-region",
    content: "For basic real-time interaction use-cases, the quota benchmark is considered reached when either the PCU or bandwidth usage meets the specified limits."
  }, {
    heading: "quota-benchmarks-by-region",
    content: "Item"
  }, {
    heading: "quota-benchmarks-by-region",
    content: "America"
  }, {
    heading: "quota-benchmarks-by-region",
    content: "Europe"
  }, {
    heading: "quota-benchmarks-by-region",
    content: "Asia"
  }, {
    heading: "quota-benchmarks-by-region",
    content: "China"
  }, {
    heading: "quota-benchmarks-by-region",
    content: "PCU"
  }, {
    heading: "quota-benchmarks-by-region",
    content: "10,000"
  }, {
    heading: "quota-benchmarks-by-region",
    content: "10,000"
  }, {
    heading: "quota-benchmarks-by-region",
    content: "10,000"
  }, {
    heading: "quota-benchmarks-by-region",
    content: "10,000"
  }, {
    heading: "quota-benchmarks-by-region",
    content: "Bandwidth"
  }, {
    heading: "quota-benchmarks-by-region",
    content: "10 Gbps"
  }, {
    heading: "quota-benchmarks-by-region",
    content: "10 Gbps"
  }, {
    heading: "quota-benchmarks-by-region",
    content: "10 Gbps"
  }, {
    heading: "quota-benchmarks-by-region",
    content: "10 Gbps"
  }],
  headings: [{
    id: "quota-benchmarks-by-region",
    content: "Quota benchmarks by region"
  }]
};
export let toc = [{
  depth: 2,
  url: "#quota-benchmarks-by-region",
  title: _jsx(_Fragment, {
    children: "Quota benchmarks by region"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["Video Calling usage is subject to service limits. Regularly monitor the Peak Concurrent Users (PCU) and bandwidth usage of your project to ensure these remain within the quota benchmarks, preventing disruptions to service. If your business growth requires higher quotas, contact Agora ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "technical support"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "quota-benchmarks-by-region",
      children: "Quota benchmarks by region"
    }), `
`, _jsx(_components.p, {
      children: "For basic real-time interaction use-cases, the quota benchmark is considered reached when either the PCU or bandwidth usage meets the specified limits."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Item"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "America"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Europe"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Asia"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "China"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "PCU"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "10,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "10,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "10,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "10,000"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Bandwidth"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "10 Gbps"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "10 Gbps"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "10 Gbps"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "10 Gbps"
          })]
        })]
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
