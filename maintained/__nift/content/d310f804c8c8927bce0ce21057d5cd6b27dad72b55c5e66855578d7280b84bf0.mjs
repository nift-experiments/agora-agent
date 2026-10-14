import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How does Agora calculate service minutes?"
};
export let _markdown = `

In Real-time Communication(RTC SDK), service minutes are calculated either by the number of users or by the number of streams. Agora calculates service minutes **by the number of users**.

## Approach 1: calculate by the number of users [#approach-1-calculate-by-the-number-of-users]

Suppose N users talk for M minutes in a channel, the total service minutes = N \\* M.

* If two users talk for 10 minutes, the total service minutes are: 2 \\* 10 = 20.
* If five users talk for 10 minutes, the total service minutes are: 5 \\* 10 = 50.
* If 10 users talk for 10 minutes, the total service minutes are: 10 \\* 10 = 100.

In this approach, the service minutes purely depend on the number of the users in the channel, regardless of how many streams each user subscribes to.

## Approach 2: calculate by the number of streams [#approach-2-calculate-by-the-number-of-streams]

Suppose N users talk for M minutes in a channel, and each user subscribes to all remote streams in the channel, the total service minutes = N \\_ (N-1) \\_ M.

* If two users talk for 10 minutes, the total service minutes are: 2 \\_ (2-1) \\_ 10 = 20.
* If five users talk for 10 minutes, the total service minutes are: 5 \\_ (5-1) \\_ 10 = 200.
* If 10 users talk for 10 minutes, the total service minutes are: 10 \\_ (10-1) \\_ 10 = 900.

In this approach, if a user subscribes to multiple streams, every remote stream the user subscribes to is counted.

## Difference between the two approaches [#difference-between-the-two-approaches]

See the table below for the difference between the two approaches:

| Scenario                        | Service minutes by the number of users | Service minutes by the number of streams |
| ------------------------------- | -------------------------------------- | ---------------------------------------- |
| Two users talk for 10 minutes.  | 20 minutes                             | 20 minutes                               |
| Five users talk for 10 minutes. | 50 minutes                             | 200 minutes                              |
| 10 users talk for 10 minutes.   | 100 minutes                            | 900 minutes                              |

The difference between the two approaches become greater when more people join the channel.

## Calculation approach by Agora [#calculation-approach-by-agora]

Agora calculates service minutes **by the number of users**, which is easier and more straightforward.

## Reference [#reference]

[Billing policies](/en/introduction/billing/billing-policies)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In Real-time Communication(RTC SDK), service minutes are calculated either by the number of users or by the number of streams. Agora calculates service minutes **by the number of users**."
  }, {
    heading: "approach-1-calculate-by-the-number-of-users",
    content: "Suppose N users talk for M minutes in a channel, the total service minutes = N \\* M."
  }, {
    heading: "approach-1-calculate-by-the-number-of-users",
    content: "If two users talk for 10 minutes, the total service minutes are: 2 \\* 10 = 20."
  }, {
    heading: "approach-1-calculate-by-the-number-of-users",
    content: "If five users talk for 10 minutes, the total service minutes are: 5 \\* 10 = 50."
  }, {
    heading: "approach-1-calculate-by-the-number-of-users",
    content: "If 10 users talk for 10 minutes, the total service minutes are: 10 \\* 10 = 100."
  }, {
    heading: "approach-1-calculate-by-the-number-of-users",
    content: "In this approach, the service minutes purely depend on the number of the users in the channel, regardless of how many streams each user subscribes to."
  }, {
    heading: "approach-2-calculate-by-the-number-of-streams",
    content: "Suppose N users talk for M minutes in a channel, and each user subscribes to all remote streams in the channel, the total service minutes = N \\_ (N-1) \\_ M."
  }, {
    heading: "approach-2-calculate-by-the-number-of-streams",
    content: "If two users talk for 10 minutes, the total service minutes are: 2 \\_ (2-1) \\_ 10 = 20."
  }, {
    heading: "approach-2-calculate-by-the-number-of-streams",
    content: "If five users talk for 10 minutes, the total service minutes are: 5 \\_ (5-1) \\_ 10 = 200."
  }, {
    heading: "approach-2-calculate-by-the-number-of-streams",
    content: "If 10 users talk for 10 minutes, the total service minutes are: 10 \\_ (10-1) \\_ 10 = 900."
  }, {
    heading: "approach-2-calculate-by-the-number-of-streams",
    content: "In this approach, if a user subscribes to multiple streams, every remote stream the user subscribes to is counted."
  }, {
    heading: "difference-between-the-two-approaches",
    content: "See the table below for the difference between the two approaches:"
  }, {
    heading: "difference-between-the-two-approaches",
    content: "Scenario"
  }, {
    heading: "difference-between-the-two-approaches",
    content: "Service minutes by the number of users"
  }, {
    heading: "difference-between-the-two-approaches",
    content: "Service minutes by the number of streams"
  }, {
    heading: "difference-between-the-two-approaches",
    content: "Two users talk for 10 minutes."
  }, {
    heading: "difference-between-the-two-approaches",
    content: "20 minutes"
  }, {
    heading: "difference-between-the-two-approaches",
    content: "20 minutes"
  }, {
    heading: "difference-between-the-two-approaches",
    content: "Five users talk for 10 minutes."
  }, {
    heading: "difference-between-the-two-approaches",
    content: "50 minutes"
  }, {
    heading: "difference-between-the-two-approaches",
    content: "200 minutes"
  }, {
    heading: "difference-between-the-two-approaches",
    content: "10 users talk for 10 minutes."
  }, {
    heading: "difference-between-the-two-approaches",
    content: "100 minutes"
  }, {
    heading: "difference-between-the-two-approaches",
    content: "900 minutes"
  }, {
    heading: "difference-between-the-two-approaches",
    content: "The difference between the two approaches become greater when more people join the channel."
  }, {
    heading: "calculation-approach-by-agora",
    content: "Agora calculates service minutes **by the number of users**, which is easier and more straightforward."
  }, {
    heading: "reference",
    content: "Billing policies"
  }],
  headings: [{
    id: "approach-1-calculate-by-the-number-of-users",
    content: "Approach 1: calculate by the number of users"
  }, {
    id: "approach-2-calculate-by-the-number-of-streams",
    content: "Approach 2: calculate by the number of streams"
  }, {
    id: "difference-between-the-two-approaches",
    content: "Difference between the two approaches"
  }, {
    id: "calculation-approach-by-agora",
    content: "Calculation approach by Agora"
  }, {
    id: "reference",
    content: "Reference"
  }]
};
export let toc = [{
  depth: 2,
  url: "#approach-1-calculate-by-the-number-of-users",
  title: _jsx(_Fragment, {
    children: "Approach 1: calculate by the number of users"
  })
}, {
  depth: 2,
  url: "#approach-2-calculate-by-the-number-of-streams",
  title: _jsx(_Fragment, {
    children: "Approach 2: calculate by the number of streams"
  })
}, {
  depth: 2,
  url: "#difference-between-the-two-approaches",
  title: _jsx(_Fragment, {
    children: "Difference between the two approaches"
  })
}, {
  depth: 2,
  url: "#calculation-approach-by-agora",
  title: _jsx(_Fragment, {
    children: "Calculation approach by Agora"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
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
    children: [_jsxs(_components.p, {
      children: ["In Real-time Communication(RTC SDK), service minutes are calculated either by the number of users or by the number of streams. Agora calculates service minutes ", _jsx(_components.strong, {
        children: "by the number of users"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "approach-1-calculate-by-the-number-of-users",
      children: "Approach 1: calculate by the number of users"
    }), `
`, _jsx(_components.p, {
      children: "Suppose N users talk for M minutes in a channel, the total service minutes = N * M."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If two users talk for 10 minutes, the total service minutes are: 2 * 10 = 20."
      }), `
`, _jsx(_components.li, {
        children: "If five users talk for 10 minutes, the total service minutes are: 5 * 10 = 50."
      }), `
`, _jsx(_components.li, {
        children: "If 10 users talk for 10 minutes, the total service minutes are: 10 * 10 = 100."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "In this approach, the service minutes purely depend on the number of the users in the channel, regardless of how many streams each user subscribes to."
    }), `
`, _jsx(_components.h2, {
      id: "approach-2-calculate-by-the-number-of-streams",
      children: "Approach 2: calculate by the number of streams"
    }), `
`, _jsx(_components.p, {
      children: "Suppose N users talk for M minutes in a channel, and each user subscribes to all remote streams in the channel, the total service minutes = N _ (N-1) _ M."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If two users talk for 10 minutes, the total service minutes are: 2 _ (2-1) _ 10 = 20."
      }), `
`, _jsx(_components.li, {
        children: "If five users talk for 10 minutes, the total service minutes are: 5 _ (5-1) _ 10 = 200."
      }), `
`, _jsx(_components.li, {
        children: "If 10 users talk for 10 minutes, the total service minutes are: 10 _ (10-1) _ 10 = 900."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "In this approach, if a user subscribes to multiple streams, every remote stream the user subscribes to is counted."
    }), `
`, _jsx(_components.h2, {
      id: "difference-between-the-two-approaches",
      children: "Difference between the two approaches"
    }), `
`, _jsx(_components.p, {
      children: "See the table below for the difference between the two approaches:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Scenario"
          }), _jsx(_components.th, {
            children: "Service minutes by the number of users"
          }), _jsx(_components.th, {
            children: "Service minutes by the number of streams"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Two users talk for 10 minutes."
          }), _jsx(_components.td, {
            children: "20 minutes"
          }), _jsx(_components.td, {
            children: "20 minutes"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Five users talk for 10 minutes."
          }), _jsx(_components.td, {
            children: "50 minutes"
          }), _jsx(_components.td, {
            children: "200 minutes"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "10 users talk for 10 minutes."
          }), _jsx(_components.td, {
            children: "100 minutes"
          }), _jsx(_components.td, {
            children: "900 minutes"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "The difference between the two approaches become greater when more people join the channel."
    }), `
`, _jsx(_components.h2, {
      id: "calculation-approach-by-agora",
      children: "Calculation approach by Agora"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora calculates service minutes ", _jsx(_components.strong, {
        children: "by the number of users"
      }), ", which is easier and more straightforward."]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "/en/introduction/billing/billing-policies",
        children: "Billing policies"
      })
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
