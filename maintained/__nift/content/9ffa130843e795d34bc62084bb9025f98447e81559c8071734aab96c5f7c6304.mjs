import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Limitations",
  description: "Review Media Gateway RESTful API call limits and concurrent stream quotas."
};
export let _markdown = `

This page describes the limitations applied to the Media Gateway service.

## API call limits [#api-call-limits]

Agora servers limit the call rate of Media Gateway APIs and return \`429 Too Many Requests\` when the limit is exceeded. If you need higher call rates, contact [Agora technical support](mailto\\:support@agora.io).

| API      | Calling rate limit per project |
| :------- | :----------------------------- |
| \`Create\` | 50 per second.                 |
| \`Delete\` | 50 per second.                 |
| \`Query\`  | 100 per second.                |
| \`Update\` | 50 per second.                 |

## Maximum number of concurrent tasks [#maximum-number-of-concurrent-tasks]

The concurrent stream limits are:

| Stream type                    | Limit |
| :----------------------------- | :---- |
| Streams with video transcoding | 10    |
| Streams without transcoding    | 50    |

For higher quotas, contact [Agora technical support](mailto\\:support@agora.io).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page describes the limitations applied to the Media Gateway service."
  }, {
    heading: "api-call-limits",
    content: "Agora servers limit the call rate of Media Gateway APIs and return `429 Too Many Requests` when the limit is exceeded. If you need higher call rates, contact Agora technical support."
  }, {
    heading: "api-call-limits",
    content: "API"
  }, {
    heading: "api-call-limits",
    content: "Calling rate limit per project"
  }, {
    heading: "api-call-limits",
    content: "`Create`"
  }, {
    heading: "api-call-limits",
    content: "50 per second."
  }, {
    heading: "api-call-limits",
    content: "`Delete`"
  }, {
    heading: "api-call-limits",
    content: "50 per second."
  }, {
    heading: "api-call-limits",
    content: "`Query`"
  }, {
    heading: "api-call-limits",
    content: "100 per second."
  }, {
    heading: "api-call-limits",
    content: "`Update`"
  }, {
    heading: "api-call-limits",
    content: "50 per second."
  }, {
    heading: "maximum-number-of-concurrent-tasks",
    content: "The concurrent stream limits are:"
  }, {
    heading: "maximum-number-of-concurrent-tasks",
    content: "Stream type"
  }, {
    heading: "maximum-number-of-concurrent-tasks",
    content: "Limit"
  }, {
    heading: "maximum-number-of-concurrent-tasks",
    content: "Streams with video transcoding"
  }, {
    heading: "maximum-number-of-concurrent-tasks",
    content: "10"
  }, {
    heading: "maximum-number-of-concurrent-tasks",
    content: "Streams without transcoding"
  }, {
    heading: "maximum-number-of-concurrent-tasks",
    content: "50"
  }, {
    heading: "maximum-number-of-concurrent-tasks",
    content: "For higher quotas, contact Agora technical support."
  }],
  headings: [{
    id: "api-call-limits",
    content: "API call limits"
  }, {
    id: "maximum-number-of-concurrent-tasks",
    content: "Maximum number of concurrent tasks"
  }]
};
export let toc = [{
  depth: 2,
  url: "#api-call-limits",
  title: _jsx(_Fragment, {
    children: "API call limits"
  })
}, {
  depth: 2,
  url: "#maximum-number-of-concurrent-tasks",
  title: _jsx(_Fragment, {
    children: "Maximum number of concurrent tasks"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
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
    children: [_jsx(_components.p, {
      children: "This page describes the limitations applied to the Media Gateway service."
    }), `
`, _jsx(_components.h2, {
      id: "api-call-limits",
      children: "API call limits"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora servers limit the call rate of Media Gateway APIs and return ", _jsx(_components.code, {
        children: "429 Too Many Requests"
      }), " when the limit is exceeded. If you need higher call rates, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "Agora technical support"
      }), "."]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "API"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Calling rate limit per project"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Create"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50 per second."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Delete"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50 per second."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Query"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100 per second."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Update"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50 per second."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "maximum-number-of-concurrent-tasks",
      children: "Maximum number of concurrent tasks"
    }), `
`, _jsx(_components.p, {
      children: "The concurrent stream limits are:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Stream type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Limit"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Streams with video transcoding"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "10"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Streams without transcoding"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For higher quotas, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "Agora technical support"
      }), "."]
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
