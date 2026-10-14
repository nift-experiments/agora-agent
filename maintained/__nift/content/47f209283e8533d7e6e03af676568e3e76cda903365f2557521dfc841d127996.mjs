import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Call and session history",
  description: "View detailed information for specific calls in a campaign."
};
export let _markdown = `

The Call History page provides a detailed log of all inbound and outbound calls handled by your agents.

## View call history [#view-call-history]

1. In the navigation sidebar, select **Agent Analytics**.
2. Switch the tab to **Call History**.
3. Use the search bar to find calls by agent name, campaign name, or phone number.
4. Select **Customise View*&#x2A; to change which columns are shown, or **+ Filter** to narrow the list further.

If no calls have been made yet, the page shows an empty state with a shortcut to create a campaign.

## Call details [#call-details]

Each call in the list shows:

* **Direction**: Inbound or Outbound.
* **Timestamp**: Date and time of the call.
* **Agent name**: The agent that handled the call.
* **Campaign name**: Associated campaign (for outbound calls).
* **From**: Caller ID used.
* **To**: Number called.
* **Duration (s)**: Call length in seconds.
* **Call status**: Outcome of the call. See [Call status definitions](#call-status-definitions).

Select a call in the list to view its full transcript.

## Call status definitions [#call-status-definitions]

| Status          | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| **Completed**   | The call connected and the conversation finished normally.      |
| **Transferred** | The call was escalated to a human agent.                        |
| **Partial**     | The call connected but the conversation did not complete fully. |
| **No Answer**   | The call rang but was not picked up.                            |
| **Busy**        | The line was busy or engaged.                                   |
| **Voicemail**   | The call reached a voicemail system.                            |

## View session history [#view-session-history]

1. In the navigation sidebar, select **Agent Analytics**.
2. Select the **Session History** tab.
3. Use the search bar to find sessions by agent session ID.

## See also [#see-also]

* [Agent analytics](analytics): View aggregated performance metrics across agents and campaigns
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Call History page provides a detailed log of all inbound and outbound calls handled by your agents."
  }, {
    heading: "view-call-history",
    content: "In the navigation sidebar, select **Agent Analytics**."
  }, {
    heading: "view-call-history",
    content: "Switch the tab to **Call History**."
  }, {
    heading: "view-call-history",
    content: "Use the search bar to find calls by agent name, campaign name, or phone number."
  }, {
    heading: "view-call-history",
    content: "Select **Customise View*&#x2A; to change which columns are shown, or **+ Filter** to narrow the list further."
  }, {
    heading: "view-call-history",
    content: "If no calls have been made yet, the page shows an empty state with a shortcut to create a campaign."
  }, {
    heading: "call-details",
    content: "Each call in the list shows:"
  }, {
    heading: "call-details",
    content: "**Direction**: Inbound or Outbound."
  }, {
    heading: "call-details",
    content: "**Timestamp**: Date and time of the call."
  }, {
    heading: "call-details",
    content: "**Agent name**: The agent that handled the call."
  }, {
    heading: "call-details",
    content: "**Campaign name**: Associated campaign (for outbound calls)."
  }, {
    heading: "call-details",
    content: "**From**: Caller ID used."
  }, {
    heading: "call-details",
    content: "**To**: Number called."
  }, {
    heading: "call-details",
    content: "**Duration (s)**: Call length in seconds."
  }, {
    heading: "call-details",
    content: "**Call status**: Outcome of the call. See Call status definitions."
  }, {
    heading: "call-details",
    content: "Select a call in the list to view its full transcript."
  }, {
    heading: "call-status-definitions",
    content: "Status"
  }, {
    heading: "call-status-definitions",
    content: "Description"
  }, {
    heading: "call-status-definitions",
    content: "**Completed**"
  }, {
    heading: "call-status-definitions",
    content: "The call connected and the conversation finished normally."
  }, {
    heading: "call-status-definitions",
    content: "**Transferred**"
  }, {
    heading: "call-status-definitions",
    content: "The call was escalated to a human agent."
  }, {
    heading: "call-status-definitions",
    content: "**Partial**"
  }, {
    heading: "call-status-definitions",
    content: "The call connected but the conversation did not complete fully."
  }, {
    heading: "call-status-definitions",
    content: "**No Answer**"
  }, {
    heading: "call-status-definitions",
    content: "The call rang but was not picked up."
  }, {
    heading: "call-status-definitions",
    content: "**Busy**"
  }, {
    heading: "call-status-definitions",
    content: "The line was busy or engaged."
  }, {
    heading: "call-status-definitions",
    content: "**Voicemail**"
  }, {
    heading: "call-status-definitions",
    content: "The call reached a voicemail system."
  }, {
    heading: "view-session-history",
    content: "In the navigation sidebar, select **Agent Analytics**."
  }, {
    heading: "view-session-history",
    content: "Select the **Session History** tab."
  }, {
    heading: "view-session-history",
    content: "Use the search bar to find sessions by agent session ID."
  }, {
    heading: "see-also",
    content: "Agent analytics: View aggregated performance metrics across agents and campaigns"
  }],
  headings: [{
    id: "view-call-history",
    content: "View call history"
  }, {
    id: "call-details",
    content: "Call details"
  }, {
    id: "call-status-definitions",
    content: "Call status definitions"
  }, {
    id: "view-session-history",
    content: "View session history"
  }, {
    id: "see-also",
    content: "See also"
  }]
};
export let toc = [{
  depth: 2,
  url: "#view-call-history",
  title: _jsx(_Fragment, {
    children: "View call history"
  })
}, {
  depth: 2,
  url: "#call-details",
  title: _jsx(_Fragment, {
    children: "Call details"
  })
}, {
  depth: 2,
  url: "#call-status-definitions",
  title: _jsx(_Fragment, {
    children: "Call status definitions"
  })
}, {
  depth: 2,
  url: "#view-session-history",
  title: _jsx(_Fragment, {
    children: "View session history"
  })
}, {
  depth: 2,
  url: "#see-also",
  title: _jsx(_Fragment, {
    children: "See also"
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The Call History page provides a detailed log of all inbound and outbound calls handled by your agents."
    }), `
`, _jsx(_components.h2, {
      id: "view-call-history",
      children: "View call history"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
          children: "Agent Analytics"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Switch the tab to ", _jsx(_components.strong, {
          children: "Call History"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Use the search bar to find calls by agent name, campaign name, or phone number."
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Customise View"
        }), " to change which columns are shown, or ", _jsx(_components.strong, {
          children: "+ Filter"
        }), " to narrow the list further."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "If no calls have been made yet, the page shows an empty state with a shortcut to create a campaign."
    }), `
`, _jsx(_components.h2, {
      id: "call-details",
      children: "Call details"
    }), `
`, _jsx(_components.p, {
      children: "Each call in the list shows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Direction"
        }), ": Inbound or Outbound."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Timestamp"
        }), ": Date and time of the call."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Agent name"
        }), ": The agent that handled the call."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Campaign name"
        }), ": Associated campaign (for outbound calls)."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "From"
        }), ": Caller ID used."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "To"
        }), ": Number called."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Duration (s)"
        }), ": Call length in seconds."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Call status"
        }), ": Outcome of the call. See ", _jsx(_components.a, {
          href: "#call-status-definitions",
          children: "Call status definitions"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Select a call in the list to view its full transcript."
    }), `
`, _jsx(_components.h2, {
      id: "call-status-definitions",
      children: "Call status definitions"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Status"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Completed"
            })
          }), _jsx(_components.td, {
            children: "The call connected and the conversation finished normally."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Transferred"
            })
          }), _jsx(_components.td, {
            children: "The call was escalated to a human agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Partial"
            })
          }), _jsx(_components.td, {
            children: "The call connected but the conversation did not complete fully."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "No Answer"
            })
          }), _jsx(_components.td, {
            children: "The call rang but was not picked up."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Busy"
            })
          }), _jsx(_components.td, {
            children: "The line was busy or engaged."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Voicemail"
            })
          }), _jsx(_components.td, {
            children: "The call reached a voicemail system."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "view-session-history",
      children: "View session history"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
          children: "Agent Analytics"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select the ", _jsx(_components.strong, {
          children: "Session History"
        }), " tab."]
      }), `
`, _jsx(_components.li, {
        children: "Use the search bar to find sessions by agent session ID."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "see-also",
      children: "See also"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "analytics",
          children: "Agent analytics"
        }), ": View aggregated performance metrics across agents and campaigns"]
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
