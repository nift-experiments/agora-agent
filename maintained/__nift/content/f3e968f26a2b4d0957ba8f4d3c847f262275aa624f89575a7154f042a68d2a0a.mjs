import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Agent analytics",
  description: "View detailed performance metrics and insights for your campaigns."
};
export let _markdown = `

The Analytics dashboard helps you monitor, debug, and optimize your voice agents with performance metrics for your agents and campaigns.

## View the dashboard [#view-the-dashboard]

1. In the navigation sidebar, select **Agent Analytics**.
2. Configure the filters to scope the data:
   * **Date range**: Filter by time period. Defaults to **Last 7 Days**.
   * **Agents**: Filter by one or more agents using **Select Agents**.
   * **Call direction**: Filter by **Inbound** or **Outbound**.
   * **Campaigns**: Filter by one or more campaigns using **Select Campaigns**.

Select the refresh icon at the top of the page to reload the dashboard with the latest data.

## Metrics and charts [#metrics-and-charts]

The dashboard displays the following:

* **Total calls**: Number of calls made during the selected period.
* **Call duration (total)**: Total duration of all calls in the selected period.
* **Answered calls (total)**: Number of successfully connected calls.
* **Call status distribution**: Breakdown of all calls by status.
* **Task success rate**: Percentage of successful calls out of total answered calls.
* **Outbound transfer to human rate**: Percentage of outbound calls that needed human intervention. Shown only for outbound call data.

## Next steps [#next-steps]

* [Call History](call-history): Review individual call transcripts and outcomes
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Analytics dashboard helps you monitor, debug, and optimize your voice agents with performance metrics for your agents and campaigns."
  }, {
    heading: "view-the-dashboard",
    content: "In the navigation sidebar, select **Agent Analytics**."
  }, {
    heading: "view-the-dashboard",
    content: "Configure the filters to scope the data:"
  }, {
    heading: "view-the-dashboard",
    content: "**Date range**: Filter by time period. Defaults to **Last 7 Days**."
  }, {
    heading: "view-the-dashboard",
    content: "**Agents**: Filter by one or more agents using **Select Agents**."
  }, {
    heading: "view-the-dashboard",
    content: "**Call direction**: Filter by **Inbound** or **Outbound**."
  }, {
    heading: "view-the-dashboard",
    content: "**Campaigns**: Filter by one or more campaigns using **Select Campaigns**."
  }, {
    heading: "view-the-dashboard",
    content: "Select the refresh icon at the top of the page to reload the dashboard with the latest data."
  }, {
    heading: "metrics-and-charts",
    content: "The dashboard displays the following:"
  }, {
    heading: "metrics-and-charts",
    content: "**Total calls**: Number of calls made during the selected period."
  }, {
    heading: "metrics-and-charts",
    content: "**Call duration (total)**: Total duration of all calls in the selected period."
  }, {
    heading: "metrics-and-charts",
    content: "**Answered calls (total)**: Number of successfully connected calls."
  }, {
    heading: "metrics-and-charts",
    content: "**Call status distribution**: Breakdown of all calls by status."
  }, {
    heading: "metrics-and-charts",
    content: "**Task success rate**: Percentage of successful calls out of total answered calls."
  }, {
    heading: "metrics-and-charts",
    content: "**Outbound transfer to human rate**: Percentage of outbound calls that needed human intervention. Shown only for outbound call data."
  }, {
    heading: "next-steps",
    content: "Call History: Review individual call transcripts and outcomes"
  }],
  headings: [{
    id: "view-the-dashboard",
    content: "View the dashboard"
  }, {
    id: "metrics-and-charts",
    content: "Metrics and charts"
  }, {
    id: "next-steps",
    content: "Next steps"
  }]
};
export let toc = [{
  depth: 2,
  url: "#view-the-dashboard",
  title: _jsx(_Fragment, {
    children: "View the dashboard"
  })
}, {
  depth: 2,
  url: "#metrics-and-charts",
  title: _jsx(_Fragment, {
    children: "Metrics and charts"
  })
}, {
  depth: 2,
  url: "#next-steps",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The Analytics dashboard helps you monitor, debug, and optimize your voice agents with performance metrics for your agents and campaigns."
    }), `
`, _jsx(_components.h2, {
      id: "view-the-dashboard",
      children: "View the dashboard"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
          children: "Agent Analytics"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Configure the filters to scope the data:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Date range"
            }), ": Filter by time period. Defaults to ", _jsx(_components.strong, {
              children: "Last 7 Days"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Agents"
            }), ": Filter by one or more agents using ", _jsx(_components.strong, {
              children: "Select Agents"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Call direction"
            }), ": Filter by ", _jsx(_components.strong, {
              children: "Inbound"
            }), " or ", _jsx(_components.strong, {
              children: "Outbound"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Campaigns"
            }), ": Filter by one or more campaigns using ", _jsx(_components.strong, {
              children: "Select Campaigns"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Select the refresh icon at the top of the page to reload the dashboard with the latest data."
    }), `
`, _jsx(_components.h2, {
      id: "metrics-and-charts",
      children: "Metrics and charts"
    }), `
`, _jsx(_components.p, {
      children: "The dashboard displays the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Total calls"
        }), ": Number of calls made during the selected period."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Call duration (total)"
        }), ": Total duration of all calls in the selected period."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Answered calls (total)"
        }), ": Number of successfully connected calls."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Call status distribution"
        }), ": Breakdown of all calls by status."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Task success rate"
        }), ": Percentage of successful calls out of total answered calls."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Outbound transfer to human rate"
        }), ": Percentage of outbound calls that needed human intervention. Shown only for outbound call data."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "next-steps",
      children: "Next steps"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "call-history",
          children: "Call History"
        }), ": Review individual call transcripts and outcomes"]
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
